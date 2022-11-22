import typing
from datetime import datetime
from pathlib import Path

import click
import internetarchive
from retry import retry
from rich import print

from .. import utils


@click.group()
def cli():
    """Download items from our archive.org collection as JSON."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-y", "--year", "year", default=None)
@click.option("-o", "--output-dir", "output_dir", default="./")
def items(
    handle: str,
    year: typing.Optional[typing.Any] = None,
    output_dir: str = "./",
):
    """Download items from our archive.org collection as JSON."""
    # Sanitize the year
    if year:
        year = int(year)
    else:
        year = datetime.now().year

    # Set the path
    output_path = Path(output_dir)

    # Pull the site
    site = utils.get_site(handle)
    _save_item(site, year, output_path)


@retry(tries=5, delay=30, backoff=2)
def _save_item(site: typing.Dict, year: int, output_path: Path):
    """Save an item as JSON to disk."""
    slug = utils.safe_ia_handle(site["handle"])
    identifier = f"{slug}-{year}"
    print(f"Downloading `{identifier}` from archive.org")
    item = internetarchive.get_item(identifier)
    utils.write_json(item.item_metadata, output_path / f"{item.identifier}.json")
