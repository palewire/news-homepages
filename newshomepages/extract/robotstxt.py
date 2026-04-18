"""Download and parse archived robots.txt files."""

from __future__ import annotations

import platform
import time
from pathlib import Path
from urllib.parse import urlparse

import click
import pandas as pd

if platform.system() == "Darwin":
    import sqlean as sqlite3
else:
    import sqlite3

import sqlite_robotstxt
from rich import print

from .. import utils


@click.group()
def cli():
    """Download and parse the provided site's robots.txt files."""


@cli.command()
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--days", "days", default=None)
@click.option("--latest", "latest", default=False, is_flag=True)
@click.option("--monthly", "monthly", default=False, is_flag=True)
@click.option("-o", "--output-path", "output_path", default=None)
@click.option("--no-cache", "no_cache", default=False, is_flag=True)
@click.option("--verbose", "verbose", default=False, is_flag=True)
def robotstxt(
    site=None,
    country=None,
    language=None,
    bundle=None,
    days=None,
    latest=False,
    monthly=False,
    output_path=None,
    no_cache=False,
    verbose=False,
):
    """Download and parse archived robots.txt files."""
    # Set our cache setting
    use_cache = no_cache is False

    # Get all lighthouse files
    df = utils.get_robotstxt_df(use_cache=use_cache, verbose=verbose).sort_values(
        ["handle", "date"]
    )

    # Get the data we want
    if site:
        data = utils.get_site(site)
        slug = data["handle"]
        filtered_df = df[df.handle == data["handle"]].copy()
    elif country:
        site_list = utils.get_sites_in_country(country)
        slug = country.lower()
        handle_list = [s["handle"] for s in site_list]
        filtered_df = df[df.handle.isin(handle_list)].copy()
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
        handle_list = [s["handle"] for s in site_list]
        filtered_df = df[df.handle.isin(handle_list)].copy()
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()
        handle_list = [s["handle"] for s in site_list]
        filtered_df = df[df.handle.isin(handle_list)].copy()
    elif latest:
        slug = "latest"
        filtered_df = df.groupby("handle").tail(1).copy()
    elif monthly:
        slug = "monthly"
        # Get the earliest record for each handle inside each calendar month
        df["year_month"] = df["date"].dt.to_period("M")
        filtered_df = df.loc[
            df.groupby(["handle", "year_month"])["date"].idxmin()
        ].copy()
        filtered_df = filtered_df.drop(columns=["year_month"])
    else:
        slug = "all"
        filtered_df = df

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] >= cutoff_date].copy()
        if verbose:
            print(f"Trimming to last {days} days")

    # See how many files we don't have yet
    archived_files = set(filtered_df.url.unique())
    if verbose:
        print(f"{len(archived_files)} qualified files")

    def _get_url(url):
        # Prepare a cache
        cache_dir = Path("~/.cache/news-homepages").expanduser()
        cache_dir.mkdir(parents=True, exist_ok=True)

        # Check if the file has been downloaded
        output_path = cache_dir / urlparse(url).path.split("/")[-1]
        if use_cache and output_path.exists():
            if verbose:
                print(f":book: Reading in cached file {output_path}")
            with open(output_path) as f:
                data = f.read()
        else:
            # Get the URL
            data = utils.get_url(url, verbose=True).text

            # Write to cache
            with open(output_path, "w") as f:
                f.write(data)
            if verbose:
                print(f":pencil: Writing to cached file {output_path}")

            # Wait a bit
            time.sleep(0.05)

        # Return dataframe
        return data

    # fetch the cached robots.txt file for the site
    filtered_df["robotstxt"] = filtered_df["url"].apply(_get_url)

    # Exclude any site that has an <html*> tag in the robots.txt file
    qualified_df = filtered_df[
        ~filtered_df["robotstxt"].str.contains("<html", case=False, na=False)
    ].copy()

    # Print all the sites that got dropped
    if verbose:
        dropped_df = filtered_df[~filtered_df.index.isin(qualified_df.index)]
        print(f"{len(dropped_df)} sites dropped:")
        print(dropped_df.handle.unique())

    # Using the sqlite-robotsxt SQLite extension for parsing the robots.txt file
    db = sqlite3.connect(":memory:")
    db.enable_load_extension(True)
    sqlite_robotstxt.load(db)
    db.enable_load_extension(False)

    # Only export a few columns to the SQLite database for simplicity
    qualified_df[
        ["identifier", "handle", "file_name", "date", "url", "robotstxt"]
    ].to_sql("sites", con=db)

    # Create a SQLite table with the parsed robots.txt rules
    db.execute(
        """
      CREATE TABLE rules AS
      WITH rules AS (
        SELECT
          handle,
          file_name,
          robotstxt_rules.user_agent,
          group_concat(printf('%s: %s', rule_type, path),  char(10)) as rules
        FROM sites
        JOIN robotstxt_rules(sites.robotstxt)
        GROUP BY 1, 2, 3
      )
      SELECT
        sites.identifier,
        sites.handle,
        sites.date,
        sites.url,
        rules.user_agent,
        rules.rules
      FROM sites
      LEFT JOIN rules ON rules.handle = sites.handle
      AND rules.file_name = sites.file_name
    """
    )

    # export that rules SQLite table back to a dataframe
    rules_df = pd.read_sql("select * from rules", con=db)

    # Write out the file
    if output_path is None:
        output_path = f"{slug}-robotstxt.csv"
    else:
        output_path = Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)
    if verbose:
        print(f":pencil: Writing {len(rules_df)} rows to {output_path}")
    rules_df.to_csv(output_path, index=False)
