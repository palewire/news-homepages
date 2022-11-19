import os
import time
import typing
from pathlib import Path

import click
import discord
from retry import retry
from rich import print

from . import utils

DISCORD_BOT_TOKEN = os.getenv("DISCORD_BOT_TOKEN")


@click.group()
def cli():
    """Post images to Discord."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def single(handle: str, input_dir: str):
    """Post a single source."""
    # Get the metadata
    site = utils.get_site(handle)

    now_local = utils.get_local_time(site)

    # Create the caption
    caption = (
        f"The {site['name']} homepage at {now_local.strftime('%-I:%M %p')} local time\n"
    )

    # Do it
    _post(caption, input_dir)


@cli.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def bundle(slug: str, input_dir: str):
    """Post all images for a bundle."""
    # Get the metadata
    bundle = utils.get_bundle(slug)
    now_local = utils.get_local_time(bundle)

    # Create the caption
    caption = f"{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}\n"

    # Do it
    _post(caption, input_dir)


@cli.command()
@click.argument("code")
@click.option("-i", "--input-dir", "input_dir", default="./")
def country(code: str, input_dir: str):
    """Post all images for a country."""
    # Get the metadata
    country = utils.get_country(code)

    # Create the caption
    caption = f"The latest homepages from {country['name']}\n"

    # Do it
    _post(caption, input_dir)


@retry(tries=3, delay=5, backoff=2)
def _post(caption, input_dir):
    # Set the path
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))

    # Post
    print(f":camera: Posting {len(image_paths)} images in {input_path} to Discord")
    c = BotClient(caption, image_paths)
    c.run(DISCORD_BOT_TOKEN)


class BotClient(discord.Client):
    """A chat client that posts the provided handle."""

    def __init__(self, caption: str, path_list: typing.List[Path], *args, **kwargs):
        """Initialize object."""
        super().__init__(intents=discord.Intents.default(), **kwargs)
        self.caption = caption
        self.path_list = path_list

    async def on_ready(self):
        """Run after we connect to Discord."""
        await self.post()
        await self.close()

    async def post(self):
        """Post message to Discord channel."""
        # Get the channel
        channel = self.get_channel(952969204892573827)

        # Loop through all the sites
        for i, path in enumerate(self.path_list):

            # Figure out if we want the caption
            if i == 0:
                message = self.caption
            else:
                message = ""

            # Post
            await channel.send(message, file=discord.File(path))

            # Pause
            time.sleep(0.5)


if __name__ == "__main__":
    cli()
