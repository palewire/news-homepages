import os
import time
import typing
from datetime import datetime
from pathlib import Path

import click
import internetarchive
from retry import retry
from rich import print

from .. import utils

IA_COLLECTION = os.getenv("IA_COLLECTION")


@click.group()
def cli():
    """Download items from our archive.org collection as JSON."""
    pass


@cli.command()
@click.option("-y", "--year", "year", default=None)
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--batch", "batch", default=None)
@click.option("-o", "--output-path", "output_path", default="./")
@click.option("--wait", "wait", default="0", help="How long to pause between requests")
def items(
    year: typing.Optional[typing.Any] = None,
    site: typing.Optional[str] = None,
    country: typing.Optional[str] = None,
    language: typing.Optional[str] = None,
    bundle: typing.Optional[str] = None,
    batch: typing.Optional[str] = None,
    output_path: str = "./",
    wait: typing.Any = "0",
):
    """Download items from our archive.org collection as JSON."""
    # Set some variables for later
    assert IA_COLLECTION
    wait = float(wait)
    if year:
        year = int(year)
    else:
        year = datetime.now().year

    @retry(tries=3, delay=30, backoff=2)
    def _save_item(item):
        """Save an item as JSON to disk."""
        utils.write_json(
            item.item_metadata, Path(output_path) / f"{item.identifier}.json"
        )
        if wait:
            print(f"Waiting {wait} seconds")
            time.sleep(wait)

    @retry(tries=3, delay=30, backoff=2)
    def _site_search(s):
        """Search archive.org for items to download."""
        s = utils.safe_ia_handle(s["handle"])
        search = f"collection:{IA_COLLECTION} AND identifier:({s}-{year})"
        return internetarchive.search_items(search).iter_as_items()

    # If the user has provided a way to filter to a subset of sites, pull em out
    if site:
        site_list = [utils.get_site(site)]
    elif country:
        print(
            f"Downloading items for country `{country}` from archive.org collection `{IA_COLLECTION}`"
        )
        site_list = utils.get_sites_in_country(country)
    elif language:
        print(
            f"Downloading items for language `{language}` from archive.org collection `{IA_COLLECTION}`"
        )
        site_list = utils.get_sites_in_language(language)
    elif bundle:
        print(
            f"Downloading items for bundle `{bundle}` from archive.org collection `{IA_COLLECTION}`"
        )
        site_list = utils.get_sites_in_bundle(bundle)
    elif batch:
        print(
            f"Downloading items for batch `{batch}` from archive.org collection `{IA_COLLECTION}`"
        )
        site_list = utils.get_sites_in_batch(int(batch))
    else:
        print(f"Downloading all items from archive.org collection `{IA_COLLECTION}`")
        site_list = None

    # If we're filtering go get those
    if site_list:
        for obj in site_list:
            print(
                f"Downloading items for site `{obj['handle']}` from archive.org collection `{IA_COLLECTION}`"
            )
            [_save_item(i) for i in _site_search(obj)]

    # Otherwise, go get all items in the collection from this year
    else:
        search = f"collection:{IA_COLLECTION} AND identifier:(*-{year})"
        item_list = internetarchive.search_items(search).iter_as_items()
        [_save_item(i) for i in item_list]
