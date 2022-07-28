import os
import time
import typing
from datetime import datetime
from pathlib import Path

import click
import discord
import pytz
from rich import print

from . import utils

DISCORD_BOT_TOKEN = os.getenv("DISCORD_BOT_TOKEN")


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


@click.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def cli(slug: str, input_dir: str):
    """Post a bundle of images to Discord."""
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
    print(f":camera: {len(image_paths)} images discovered in {input_path}")

    # Post
    c = BotClient(caption, image_paths)
    c.run(DISCORD_BOT_TOKEN)


if __name__ == "__main__":
    cli()
