import json
import os
import typing
from datetime import datetime
from pathlib import Path

import click
import internetarchive
import pytz

from . import utils


@click.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def cli(handle: str, input_dir: str):
    """Save a webpage screenshot to an archive.org collection."""
    # Pull the source’s metadata
    site = utils.get_site(handle)

    # Upload it
    _upload(site, input_dir)


def _upload(data: dict, input_dir: str):
    # Set the input path
    handle = data["handle"].lower()
    input_path = Path(input_dir).absolute()
    image_path = input_path / f"{handle}.jpg"
    a11y_path = input_path / f"{handle}.accessibility.json"
    hyperlinks_path = input_path / f"{handle}.hyperlinks.json"
    lighthouse_path = input_path / f"{handle}.lighthouse.json"

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(data["timezone"])
    now_local = now.astimezone(tz)
    now_iso = now_local.isoformat()

    # We will post into an "item" keyed to the site's handle and year
    identifier = f"{handle}-{now_local.strftime('%Y')}"

    # Grab the files that exist
    file_dict = {}
    if image_path.exists():
        file_dict[f"{handle}-{now_iso}.jpg"] = image_path
    if a11y_path.exists():
        file_dict[f"{handle}-{now_iso}.accessibility.json"] = a11y_path
    if hyperlinks_path.exists():
        file_dict[f"{handle}-{now_iso}.hyperlinks.json"] = hyperlinks_path
    if lighthouse_path.exists():
        file_dict[f"{handle}-{now_iso}.lighthouse.json"] = lighthouse_path

    # If there are no file, squawk but move on
    if not file_dict:
        click.echo(f"No files found for {handle}")
        return

    # Get secrets
    access_key: typing.Optional[str] = os.getenv("IA_ACCESS_KEY")
    secret_key: typing.Optional[str] = os.getenv("IA_SECRET_KEY")
    collection: typing.Optional[str] = os.getenv("IA_COLLECTION")

    # Make sure secrets are there
    assert access_key
    assert secret_key
    assert collection

    # Set all the arguments
    kwargs = dict(
        # Authentication
        access_key=access_key,
        secret_key=secret_key,
        # Metadata about the item
        metadata=dict(
            title=f"{data['name']} homepages in {now_local.strftime('%Y')}",
            collection=collection,
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

    # Figure out file URLs
    url_list = []
    for key in file_dict.keys():
        url = f"https://archive.org/download/{identifier}/{key}"
        url_list.append(url)

    # Dump them out
    click.echo(json.dumps(url_list, indent=2))


if __name__ == "__main__":
    cli()
