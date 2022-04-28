import json
import os
import time

import click
import internetarchive

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")


@click.group()
def cli():
    """Extract data from the Internet Archive collection."""
    pass


@cli.command()
def item_list():
    """Download the full list of Internet Archive items as JSON."""
    click.echo("Extracting metadata for the Internet Archive collection")
    collection = internetarchive.get_item(IA_COLLECTION)
    with open(utils.EXTRACT_DIR / "json" / f"{IA_COLLECTION}.json", "w") as fh:
        json.dump(collection.item_metadata, fh, indent=2)

    item_list = internetarchive.search_items(
        f"collection:{IA_COLLECTION}"
    ).iter_as_items()
    for item in item_list:
        click.echo(f"Extracting metadata for the {item.identifier} item")
        with open(utils.EXTRACT_DIR / "json" / f"{item.identifier}.json", "w") as fh:
            json.dump(item.item_metadata, fh, indent=2)
            time.sleep(0.2)


if __name__ == "__main__":
    cli()
