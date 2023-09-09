from __future__ import annotations

import sqlite3
import time
from pathlib import Path
from urllib.parse import urlparse

import click
import pandas as pd
import sqlite_robotstxt
from rich import print

from .. import utils


@click.group()
def cli():
    """Download and parse the provided site's robots.txt files."""
    pass


@cli.command()
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--days", "days", default=None)
@click.option("--latest", "latest", default=False, is_flag=True)
@click.option("-o", "--output-path", "output_path", default=None)
def robotstxt(
    site=None,
    country=None,
    language=None,
    bundle=None,
    days=None,
    latest=False,
    output_path=None,
):
    """Download and parse the provided site's robots.txt files."""
    # Get all lighthouse files
    df = utils.get_robotstxt_df().sort_values(["handle", "date"])

    # Get the data we want
    if site:
        data = utils.get_site(site)
        slug = data["handle"].lower()
        filtered_df = df[df.handle.str.lower() == data["handle"].lower()].copy()
    elif country:
        site_list = utils.get_sites_in_country(country)
        slug = country.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = df[df.handle.str.lower().isin(handle_list)].copy()
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = df[df.handle.str.lower().isin(handle_list)].copy()
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = df[df.handle.str.lower().isin(handle_list)].copy()
    elif latest:
        slug = "latest"
        filtered_df = df.groupby("handle").tail(1)
    else:
        slug = "all"
        filtered_df = df

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] >= cutoff_date].copy()
        print(f"Trimming to last {days} days")

    # Merge sites.csv with robotstxt_df to get site name, URL, etc.
    site_df = utils.get_site_df()
    site_df.handle = site_df.handle.apply(utils.safe_ia_handle)
    filtered_df.handle = filtered_df.handle.apply(utils.safe_ia_handle)
    robotstxt_df = site_df.merge(filtered_df, on="handle", how="inner")
    assert len(robotstxt_df) == len(filtered_df)

    # See how many files we don't have yet
    archived_files = set(filtered_df.url.unique())
    print(f"{len(archived_files)} qualified files")

    # calculate the full URL to the site's robots.txt file
    # url_x because that's the original site_df["url"], which was renamed in the merge
    robotstxt_df["robotstxt_url"] = robotstxt_df["url_x"].apply(
        lambda url: urlparse(url)._replace(path="robots.txt").geturl()
    )

    def _get_url(url):
        # Prepare a cache
        cache_dir = Path("~/.cache").expanduser()
        cache_dir.mkdir(parents=True, exist_ok=True)

        # Check if the file has been downloaded
        output_path = cache_dir / urlparse(url).path.split("/")[-1]
        if output_path.exists():
            print(f":book: Reading in cached file {output_path}")
            with open(output_path) as f:
                data = f.read()
        else:
            # Get the URL
            data = utils.get_url(url, verbose=True).text

            # Write to cache
            with open(output_path, "w") as f:
                f.write(data)
            print(f":pencil: Writing to cached file {output_path}")

            # Wait a bit
            time.sleep(0.25)

        # Return dataframe
        return data

    # fetch the cached robots.txt file for the site
    # url_y because that's the robotstxt_df["url"], which was renamed in the merge
    robotstxt_df["robotstxt"] = robotstxt_df["url_y"].apply(_get_url)

    # Using the sqlite-robotsxt SQLite extension for parsing the robots.txt file
    db = sqlite3.connect(":memory:")
    db.enable_load_extension(True)
    sqlite_robotstxt.load(db)
    db.enable_load_extension(False)

    # Only export a few columns to the SQLite database for simplicity
    robotstxt_df.rename(columns={"url_y": "archive_url"})[
        ["handle", "name", "archive_url", "robotstxt"]
    ].to_sql("sites", con=db)

    # Create a SQLite table with the parsed robots.txt rules
    db.execute(
        """
      CREATE TABLE rules AS
      WITH rules AS (
        SELECT
          handle,
          archive_url,
          robotstxt_rules.user_agent,
          group_concat(printf('%s: %s', rule_type, path),  char(10)) as rules
        FROM sites
        JOIN robotstxt_rules(sites.robotstxt)
        GROUP BY 1, 2, 3
      )
      SELECT
        sites.handle,
        name,
        archive_url,
        rules.*
      FROM sites
      LEFT JOIN rules ON rules.handle = sites.handle
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
    print(f":pencil: Writing {len(rules_df)} rows to {output_path}")
    rules_df.to_csv(output_path, index=False)
