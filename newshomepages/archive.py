import os
import time
from datetime import datetime
from pathlib import Path

import click
import internetarchive
import pytz

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")


@click.group()
def cli():
    """Shoot a screenshot."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def single(handle: str, input_dir: str):
    """Archive a screenshot."""
    # Pull the source’s metadata
    site = utils.get_site(handle)
    # Upload it
    _upload(site, input_dir)


@cli.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def bundle(slug: str, input_dir: str):
    """Send a bundle of sources."""
    site_list = utils.get_sites_in_bundle(slug)
    for site in site_list:
        # Upload
        _upload(site, input_dir)
        time.sleep(2.5)


def _upload(data: dict, input_dir: str):
    # Set the input path
    input_path = Path(input_dir).absolute()
    image_path = input_path / f"{data['handle'].lower()}.jpg"
    a11y_path = input_path / f"{data['handle'].lower()}.accessibility.json"
    hyperlinks_path = input_path / f"{data['handle'].lower()}.hyperlinks.json"

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(data["timezone"])
    now_local = now.astimezone(tz)
    now_iso = now_local.isoformat()

    # We will post into an "item" keyed to the site's handle and year
    handle = data["handle"].lower()
    identifier = f"{handle}-{now_local.strftime('%Y')}"

    # Grab the files that exist
    file_dict = {}
    if image_path.exists():
        file_dict[f"{handle}-{now_iso}.jpg"] = image_path
    if a11y_path.exists():
        file_dict[f"{handle}-{now_iso}.accessibility.json"] = a11y_path
    if hyperlinks_path.exists():
        file_dict[f"{handle}-{now_iso}.hyperlinks.json"] = hyperlinks_path

    # If there are no file, squawk but move on
    if not file_dict:
        click.echo(f"No files found for {handle}")
        return

    # Set all the arguments
    kwargs = dict(
        # Authentication
        access_key=IA_ACCESS_KEY,
        secret_key=IA_SECRET_KEY,
        # Metadata about the item
        metadata=dict(
            title=f"{data['name']} homepages in {now_local.strftime('%Y')}",
            collection=IA_COLLECTION,
            mediatype="image",
            publisher=data["url"],
            date=now_local.strftime("%Y"),
            contributor="https://homepages.news",
        ),
        # Metadata about the image file
        files=file_dict,
    )

    # Upload it
    internetarchive.upload(identifier, **kwargs)


if __name__ == "__main__":
    cli()
