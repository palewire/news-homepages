import os
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
@click.argument("handle")
@click.option("-y", "--year", "year", default=None)
@click.option("-o", "--output-path", "output_path", default="./")
def items(
    handle: str,
    year: typing.Optional[typing.Any] = None,
    output_path: str = "./",
):
    """Download items from our archive.org collection as JSON."""
    # Set some variables for later
    assert IA_COLLECTION
    if year:
        year = int(year)
    else:
        year = datetime.now().year

    @retry(tries=5, delay=30, backoff=2)
    def _save_item(site: typing.Dict):
        """Save an item as JSON to disk."""
        slug = utils.safe_ia_handle(site["handle"])
        identifier = f"{slug}-{year}"
        print(
            f"Downloading `{identifier}` from archive.org collection `{IA_COLLECTION}`"
        )
        item = internetarchive.get_item(identifier)
        utils.write_json(
            item.item_metadata, Path(output_path) / f"{item.identifier}.json"
        )

    # Pull the site
    site = utils.get_site(handle)
    _save_item(site)
