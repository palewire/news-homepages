import os
import time
import typing
from datetime import datetime
from pathlib import Path

import click
import pytz
from telegram import Bot

from . import utils

TELEGRAM_API_KEY = os.getenv("TELEGRAM_API_KEY")


@click.group()
def cli():
    """Send a Telegram message."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def single(handle: str, input_dir: str):
    """Send a single source."""
    # Get metadata
    site = utils.get_site(handle)

    # Do the thing
    _post(site, input_dir)


@cli.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def bundle(slug: str, input_dir: str):
    """Send a bundle of sources."""
    # Get the metadata
    site_list = utils.get_sites_in_bundle(slug)

    # Do the thing
    for site in site_list:
        _post(site, input_dir)
        time.sleep(2.5)


def _post(site: typing.Dict, input_dir: str):

    # Connect to Telegram
    assert isinstance(TELEGRAM_API_KEY, str)
    bot = Bot(token=TELEGRAM_API_KEY)

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(site["timezone"])
    now_local = now.astimezone(tz)

    # Create the caption
    caption = (
        f"The {site['name']} homepage at {now_local.strftime('%-I:%M %p')} local time"
    )

    # Set the path
    input_path = Path(input_dir)
    image_path = input_path / f"{site['handle'].lower()}.jpg"

    # If it doesn't exist, quit
    if not image_path.exists():
        click.echo("File does not exist")
        return

    # Get the image
    with open(image_path, "rb") as io:
        # Send the photo
        bot.sendPhoto("@newshomepages", io, caption=caption)


if __name__ == "__main__":
    cli()
