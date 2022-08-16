import csv
import json
import os
import time
from datetime import datetime
from urllib.parse import urlparse

import click
import internetarchive
import pandas as pd
import requests
from requests.adapters import HTTPAdapter, Retry
from rich import print
from rich.progress import track

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")

CURRENT_YEAR = datetime.now().year


@click.group()
def cli():
    """Extract data from the Internet Archive collection."""
    pass


@cli.command()
@click.option("-y", "--year", "year", default=CURRENT_YEAR)
def download_items(year: str):
    """Download the full list of Internet Archive items as JSON."""
    print(
        f"Extracting {year} metadata for the Internet Archive collection {IA_COLLECTION}"
    )
    collection = internetarchive.get_item(IA_COLLECTION)
    with open(utils.EXTRACT_DIR / "json" / f"{IA_COLLECTION}.json", "w") as fh:
        json.dump(collection.item_metadata, fh, indent=2)

    # Go get all the items in the collection from that year
    item_list = internetarchive.search_items(
        f"collection:{IA_COLLECTION} AND identifier:(*-{year})"
    ).iter_as_items()
    for item in track(item_list):
        # Save it locally
        with open(utils.EXTRACT_DIR / "json" / f"{item.identifier}.json", "w") as fh:
            json.dump(item.item_metadata, fh, indent=2)
            time.sleep(0.2)


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
@click.argument("handle")
def download_hyperlinks(handle):
    """Download and parse the provided site's hyperlinks files."""
    # Get the site data
    site = utils.get_site(handle)

    # Get all hyperlinks
    hyperlink_df = utils.get_hyperlink_df()

    # Filter it down to files for the provided site
    site_df = hyperlink_df[hyperlink_df.handle.str.lower() == site["handle"].lower()]
    print(f"{len(site_df)} hyperlink files found")

    # Read in the output file
    output_path = utils.ANALYSIS_DIR / f"{handle.lower()}-hyperlinks.csv"
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
    for url in sorted(missing_files):
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
@click.option("--days", "days", default=None)
def download_lighthouse(
    site: str = None,
    country: str = None,
    language: str = None,
    bundle: str = None,
    days: str = None,
):
    """Download and parse the provided site's Lighthouse files."""
    # Get all lighthouse files
    lighthouse_df = utils.get_lighthouse_df()

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
        filtered_df = lighthouse_df[lighthouse_df.handle.str.lower().isin(handle_list)]
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[lighthouse_df.handle.str.lower().isin(handle_list)]
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[lighthouse_df.handle.str.lower().isin(handle_list)]
    else:
        slug = "all"
        filtered_df = lighthouse_df

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] > cutoff_date]
        print(f"Trimming to last {days} days")

    # Filter it down to files for the provided site
    print(f"{len(filtered_df)} lighthouse files found")

    # Read in the output file
    output_path = utils.ANALYSIS_DIR / f"{slug}-lighthouse.csv"
    try:
        output_df = pd.read_csv(output_path)
        downloaded_files = set(output_df.file_url.unique())
    except FileNotFoundError:
        output_df = pd.DataFrame()
        downloaded_files = set()

    # See how many files we don't have yet
    archived_files = set(filtered_df.url.unique())
    missing_files = list(archived_files - downloaded_files)
    print(f"{len(missing_files)} files need to be download")

    # Quit if there's nothing there
    if not len(missing_files):
        return

    # Go get the files
    for url in sorted(missing_files):
        df = _get_json_url(url)
        output_df = pd.concat([output_df, df])

    print(f":pencil: Writing {len(output_df)} rows to {output_path}")
    output_df.to_csv(output_path, index=False)


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
                # https://archive.org/download/lehuffpost-2022/lehuffpost-2022-04-09T15%3A43%3A17.585783%2B02%3A00.jpg
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
        time.sleep(0.5)

    # Add columns
    metadata = utils.parse_archive_url(url)
    df["site_handle"] = metadata["handle"]
    df["item_identifier"] = metadata["identifier"]
    df["file_timestamp"] = metadata["timestamp"]
    df["file_url"] = url

    # Return dataframe
    return df


def _write_csv(dict_list, name):
    csv_dir = utils.EXTRACT_DIR / "csv"
    with open(csv_dir / name, "w") as fh:
        fieldnames = dict_list[0].keys()
        writer = csv.DictWriter(fh, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(dict_list)


if __name__ == "__main__":
    cli()
