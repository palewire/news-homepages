import csv
import json
import os
import pathlib
import time
import typing
from datetime import datetime
from urllib.parse import urlparse

import click
import pandas as pd
import requests
from requests.adapters import HTTPAdapter, Retry
from rich import print
from rich.progress import track

from .. import utils
from .items import cli as download_items

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")

CURRENT_YEAR = datetime.now().year


@click.group()
def cli():
    """Extract data from the Internet Archive collection."""
    pass


@cli.command()
@click.argument("handle")
def download_accessibility(handle):
    """Download and parse the provided site's accessibility files."""
    # Get the site data
    site = utils.get_site(handle)

    # Get all hyperlinks
    accessibility_df = utils.get_accessibility_df()

    # Filter it down to files for the provided site
    site_df = accessibility_df[
        accessibility_df.handle.str.lower() == site["handle"].lower()
    ]
    print(f"{len(site_df)} accessibility files found")

    # Read in the output file
    output_path = utils.ANALYSIS_DIR / f"{handle.lower()}-accessibility.csv"
    try:
        output_df = pd.read_csv(output_path)
        downloaded_files = set(output_df.file_url.unique())
    except FileNotFoundError:
        output_df = pd.DataFrame()
        downloaded_files = set()

    # See how many files we don't have yet
    archived_files = set(site_df.url.unique())
    missing_files = list(archived_files - downloaded_files)
    print(f"{len(missing_files)} files need to be download")

    # Quit if there's nothing there
    if not len(missing_files):
        return

    # Go get the files
    for url in missing_files:
        df = _get_json_url(url)
        output_df = pd.concat([output_df, df])
        time.sleep(1)

    print(f":pencil: Writing {len(output_df)} rows to {output_path}")
    output_df.to_csv(output_path, index=False)


@cli.command()
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--days", "days", default="90")
@click.option("--output-path", "output_path", default=None)
def download_hyperlinks(
    site: typing.Optional[str] = None,
    country: typing.Optional[str] = None,
    language: typing.Optional[str] = None,
    bundle: typing.Optional[str] = None,
    days: typing.Optional[str] = None,
    output_path: typing.Optional[str] = None,
):
    """Download and parse the provided site's hyperlinks files."""
    # Get all lighthouse files
    hyperlink_df = utils.get_hyperlink_df().sort_values(["handle", "date"])

    # Get the data we want
    if site:
        site_list = [utils.get_site(site)]
        slug = site.lower()
    elif country:
        site_list = utils.get_sites_in_country(country)
        slug = country.lower()
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()

    handle_list = [s["handle"].lower() for s in site_list]
    filtered_df = hyperlink_df[hyperlink_df.handle.str.lower().isin(handle_list)].copy()

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] > cutoff_date].copy()
        print(f"Trimming to last {days} days")

    # See how many files there are
    archived_files = set(filtered_df.url.unique())
    print(f"{len(archived_files)} qualified files")

    # Go get the files
    filtered_df["json"] = filtered_df.url.apply(_get_json_url)

    def _parse_hyperlinks(row):
        flat_row_list = []
        for d in row["json"].to_dict(orient="records"):
            flat_row = dict(
                identifier=row["identifier"],
                handle=row["handle"],
                file_name=row["file_name"],
                date=row["date"],
                text=d["text"],
                url=d["url"],
            )
            flat_row_list.append(flat_row)
        return flat_row_list

    flat_row_list = []
    for row in filtered_df.to_dict(orient="records"):
        flat_row_list += _parse_hyperlinks(row)
    flat_df = pd.DataFrame(flat_row_list)

    # Write out the file
    if output_path is None:
        output_path_obj = utils.ANALYSIS_DIR / f"{slug}-hyperlinks.csv"
    else:
        output_path_obj = pathlib.Path(output_path)
    print(f":pencil: Writing {len(flat_df)} rows to {output_path_obj}")
    flat_df.to_csv(output_path_obj, index=False)


@cli.command()
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--days", "days", default=None)
@click.option("--output-path", "output_path", default=None)
def download_lighthouse(
    site: typing.Optional[str] = None,
    country: typing.Optional[str] = None,
    language: typing.Optional[str] = None,
    bundle: typing.Optional[str] = None,
    days: typing.Optional[str] = None,
    output_path: typing.Optional[str] = None,
):
    """Download and parse the provided site's Lighthouse files."""
    # Get all lighthouse files
    lighthouse_df = utils.get_lighthouse_df().sort_values(["handle", "date"])

    # Get the data we want
    if site:
        data = utils.get_site(site)
        slug = data["handle"].lower()
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower() == data["handle"].lower()
        ]
    elif country:
        site_list = utils.get_sites_in_country(country)
        slug = country.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower().isin(handle_list)
        ].copy()
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower().isin(handle_list)
        ].copy()
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower().isin(handle_list)
        ].copy()
    else:
        slug = "all"
        filtered_df = lighthouse_df

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] >= cutoff_date].copy()
        print(f"Trimming to last {days} days")

    # See how many files we don't have yet
    archived_files = set(filtered_df.url.unique())
    print(f"{len(archived_files)} qualified files")

    # Go get the files
    filtered_df["json"] = filtered_df.url.apply(_get_json_url)

    # Parse out the values we want
    def _parse_metrics(row):
        # Get representative run
        run_list = row["json"].to_dict(orient="records")
        representative_run = next(
            r for r in run_list if r["isRepresentativeRun"] is True
        )

        # Pull out the metrics
        d = representative_run["summary"]

        # Add them to the row
        row["performance"] = d["performance"]
        row["accessibility"] = d["accessibility"]
        row["best_practices"] = d["best-practices"]
        row["seo"] = d["seo"]
        row["pwa"] = d["pwa"]

        # Drop the JSON
        del row["json"]

        # Return the row
        return row

    parsed_df = filtered_df.apply(_parse_metrics, axis=1).sort_values(
        ["handle", "date"], ascending=[True, True]
    )

    # Drop columns we don't need
    trimmed_df = parsed_df[
        [
            "identifier",
            "handle",
            "file_name",
            "date",
            "performance",
            "accessibility",
            "best_practices",
            "seo",
            "pwa",
        ]
    ]

    # Write out the file
    if output_path is None:
        output_path_obj = utils.ANALYSIS_DIR / f"{slug}-lighthouse.csv"
    else:
        output_path_obj = pathlib.Path(output_path)
    print(f":pencil: Writing {len(trimmed_df)} rows to {output_path_obj}")
    trimmed_df.to_csv(output_path_obj, index=False)


@cli.command()
@click.argument("handle")
def download_wayback(handle):
    """Download and parse the provided site's Wayback Machine files."""
    # Get the site data
    site = utils.get_site(handle)

    # Get all files
    wayback_df = utils.get_wayback_df()

    # Filter it down to files for the provided site
    site_df = wayback_df[wayback_df.handle.str.lower() == site["handle"].lower()]
    print(f"{len(site_df)} wayback files found")

    # Read in the output file
    output_path = utils.ANALYSIS_DIR / f"{handle.lower()}-wayback.csv"
    try:
        output_df = pd.read_csv(output_path)
        downloaded_files = set(output_df.file_url.unique())
    except FileNotFoundError:
        output_df = pd.DataFrame()
        downloaded_files = set()

    # See how many files we don't have yet
    archived_files = set(site_df.url.unique())
    missing_files = list(archived_files - downloaded_files)
    print(f"{len(missing_files)} files need to be download")

    # Quit if there's nothing there
    if not len(missing_files):
        return

    # Go get the files
    for url in missing_files:
        df = _get_json_url(url)
        output_df = pd.concat([output_df, df])
        time.sleep(1)

    print(f":pencil: Writing {len(output_df)} rows to {output_path}")
    output_df.to_csv(output_path, index=False)


@cli.command()
def consolidate():
    """Consolidate Internet Archive metadata into CSV files."""
    print("🪢 Consolidating extracts")

    # Get all of the JSON files
    json_dir = utils.EXTRACT_DIR / "json"
    json_list = list(json_dir.glob("*.json"))

    # Set up some stuff for outputs later on
    site_output = []
    site2bundle_output = []
    items_output = []
    (
        screenshot_output,
        a11y_output,
        hyperlinks_output,
        lighthouse_output,
        wayback_output,
    ) = (
        [],
        [],
        [],
        [],
        [],
    )

    # Loop through all the sites
    for site in track(utils.get_site_list()):
        # Pull out the data we like
        site_dict = dict(
            handle=site["handle"],
            name=site["name"],
            url=site["url"],
            location=site["location"],
            timezone=site["timezone"],
            country=site["country"],
            language=site["language"],
        )
        # Add to the output list
        site_output.append(site_dict)

        # Normalize the links between sites and bundles
        for b in site["bundle_list"]:
            if not b.strip():
                continue
            d = dict(
                site_handle=site["handle"],
                bundle_slug=b,
            )
            site2bundle_output.append(d)

        # Get all the items for this site
        site_json_list = [
            p
            for p in json_list
            if site["handle"].lower() == p.name.split("-")[0].lower()
        ]

        # Parse out the data
        for site_json in site_json_list:
            # Open the file
            item_data = json.load(open(site_json))

            # Pull out the data we want to keep
            item_dict = dict(
                identifier=item_data["metadata"]["identifier"],
                handle=site["handle"],
                file_name=site_json.name,
                url=f"https://archive.org/details/{item_data['metadata']['identifier']}",
                title=item_data["metadata"]["title"],
                date=item_data["metadata"]["date"],
                publicdate=item_data["metadata"]["publicdate"],
                addeddate=item_data["metadata"]["addeddate"],
            )

            # Add to the output list
            items_output.append(item_dict)

            # Get the files in this item
            file_list = [
                p
                for p in item_data["files"]
                if (
                    site["handle"].lower() in p["name"].lower()
                    and p["format"] in ["JSON", "JPEG"]
                )
            ]

            # Loop through all of the files in the item
            for file in file_list:
                file_dict = dict(
                    identifier=item_data["metadata"]["identifier"],
                    handle=site["handle"],
                    file_name=file["name"],
                    url=f"https://archive.org/download/{item_data['metadata']['identifier']}/{file['name']}",
                    mtime=datetime.fromtimestamp(int(file["mtime"])),
                    size=file["size"],
                    md5=file["md5"],
                    sha1=file["sha1"],
                )
                if file["format"] == "JPEG":
                    screenshot_output.append(file_dict)
                elif "accessibility" in file["name"]:
                    a11y_output.append(file_dict)
                elif "hyperlinks" in file["name"]:
                    hyperlinks_output.append(file_dict)
                elif "lighthouse" in file["name"]:
                    lighthouse_output.append(file_dict)
                elif "wayback" in file["name"]:
                    wayback_output.append(file_dict)
                else:
                    raise ValueError(
                        f"File name {file['name']} doesn't have an output file"
                    )

    # Write out the data
    def _write_csv(dict_list, name):
        csv_dir = utils.EXTRACT_DIR / "csv"
        with open(csv_dir / name, "w") as fh:
            fieldnames = dict_list[0].keys()
            writer = csv.DictWriter(fh, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(dict_list)

    _write_csv(site_output, "sites.csv")
    _write_csv(utils.get_bundle_list(), "bundles.csv")
    _write_csv(site2bundle_output, "site-bundle-relationships.csv")
    _write_csv(items_output, "items.csv")
    _write_csv(screenshot_output, "screenshot-files.csv")
    _write_csv(a11y_output, "accessibility-files.csv")
    _write_csv(hyperlinks_output, "hyperlink-files.csv")
    _write_csv(lighthouse_output, "lighthouse-files.csv")
    _write_csv(wayback_output, "wayback-files.csv")


def _get_json_url(url):
    # Prepare a cache
    cache_dir = utils.THIS_DIR.parent / ".cache"
    cache_dir.mkdir(parents=True, exist_ok=True)

    # Check if the file has been downloaded
    output_path = cache_dir / urlparse(url).path.split("/")[-1]
    if output_path.exists():
        print(f":book: Reading in cached file {output_path}")
        return pd.read_json(output_path)
    else:
        # Get the URL
        print(f":link: Downloading {url}")
        s = requests.Session()
        retries = Retry(total=3, backoff_factor=1)
        s.mount("https://", HTTPAdapter(max_retries=retries))
        r = s.get(url)
        data = r.json()

        # Parse as a dataframe
        df = pd.DataFrame(data)

        # Write to cache
        df.to_json(output_path, orient="records", indent=2)
        print(f":pencil: Writing to cached file {output_path}")
        time.sleep(0.25)

    # Add columns
    metadata = utils.parse_archive_url(url)
    df["site_handle"] = metadata["handle"]
    df["item_identifier"] = metadata["identifier"]
    df["file_timestamp"] = metadata["timestamp"]
    df["file_url"] = url

    # Return dataframe
    return df


cli_group = click.CommandCollection(sources=[cli, download_items])

if __name__ == "__main__":
    cli_group()
