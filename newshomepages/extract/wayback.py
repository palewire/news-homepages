import time

import click
import pandas as pd
from rich import print

from .. import utils
from .utils import _get_json_url


@click.group()
def cli():
    """Download and parse the provided site's Wayback Machine files."""
    pass


@cli.command()
@click.argument("handle")
def wayback(handle):
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
