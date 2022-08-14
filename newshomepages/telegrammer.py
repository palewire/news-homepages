import os
from datetime import datetime
from pathlib import Path

import click
import pytz
from retry import retry
from rich import print
from telegram import Bot

from . import utils

TELEGRAM_API_KEY = os.getenv("TELEGRAM_API_KEY")


@click.group()
def cli():
    """Send a Telegram message."""
    pass


@cli.command()
@click.option("-i", "--input-dir", "input_dir", default="./")
def mosaic(input_dir: str):
    """Tweet a mosaic GIF."""
    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone("America/Los_Angeles")
    now_local = now.astimezone(tz)

    # Create the headline
    caption = f"""{len(utils.get_site_list())} homepages from around the world captured at {now_local.strftime('%-I:%M %p')} in Los Angeles

📷 See them all at https://palewi.re/docs/news-homepages/latest.html
    """

    # Get the image
    input_path = Path(input_dir)
    image_path = input_path / "mosaic.gif"
    assert image_path.exists()

    # Do the thing
    _post(image_path, caption)


@cli.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def single(handle: str, input_dir: str):
    """Send a single source."""
    # Get metadata
    site = utils.get_site(handle)

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

    # Do the thing
    _post(image_path, caption)


@cli.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def bundle(slug: str, input_dir: str):
    """Send a bundle of sources."""
    # Get the metadata
    bundle = utils.get_bundle(slug)

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(bundle["timezone"])
    now_local = now.astimezone(tz)

    # Create the caption
    caption = f"{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}\n"

    # Set the path
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))
    print(f"{len(image_paths)} images discovered in {input_path}")

    # Send them out
    for image_path in image_paths:
        _post(image_path, caption)


@cli.command()
@click.argument("code")
@click.option("-i", "--input-dir", "input_dir", default="./")
def country(code: str, input_dir: str):
    """Send all sources from a single country."""
    # Get the metadata
    country = utils.get_country(code)

    # Create the caption
    caption = f"The latest homepages from {country['name']}\n"

    # Set the path
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))
    print(f"{len(image_paths)} images discovered in {input_path}")

    # Send them out
    for image_path in image_paths:
        _post(image_path, caption)


@retry(tries=3, delay=5, backoff=2)
def _post(image_path: Path, caption: str):

    # Connect to Telegram
    assert isinstance(TELEGRAM_API_KEY, str)
    bot = Bot(token=TELEGRAM_API_KEY)

    # If it doesn't exist, quit
    if not image_path.exists():
        print("File does not exist")
        return

    # Get the image
    print(f"Posting {image_path}")
    with open(image_path, "rb") as io:
        # Send the photo
        bot.sendPhoto("@newshomepages", io, caption=caption)


if __name__ == "__main__":
    cli()
