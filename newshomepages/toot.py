import os
import time
from datetime import datetime
from pathlib import Path

import click
import pytz
from mastodon import Mastodon
from rich import print
from slugify import slugify

from . import utils


@click.group()
def cli():
    """Send a toot."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def single(handle: str, input_dir: str):
    """Toot a single source."""
    # Pull the source’s metadata
    data = utils.get_site(handle)
    print(f"🐘 Tooting {data['handle']}")

    # Connect to Twitter
    api = get_mastodon_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(data["timezone"])
    now_local = now.astimezone(tz)

    # Create the headline
    status = f"""The {data['name']} homepage at {now_local.strftime('%-I:%M %p')} in {data['location']}

More: https://palewi.re/docs/news-homepages/sites/{data['handle']}.html"""

    # Get the image
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_path = input_path / f"{data['handle']}.jpg"

    # Upload the image
    alt_text = f"The {data['name']} homepage at {now_local.strftime('%-I:%M %p')} in {data['location']}"
    media_obj = api.media_post(image_path, description=alt_text)

    # Make the tweet
    api.status_post(status, media_ids=[media_obj["id"]])


@cli.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def bundle(slug: str, input_dir: str):
    """Toot sources in batches of four."""
    # Pull the source metadata
    bundle = utils.get_bundle(slug)
    print(f"🐘 Tooting {bundle['name']}")

    # Set the input directory
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))
    print(f"{len(image_paths)} images discovered in {input_path}")

    # Connect to Mastodon
    api = get_mastodon_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(bundle["timezone"])
    now_local = now.astimezone(tz)

    # Set hashtags
    slug = slugify(bundle["name"], separator="")
    date_str = now_local.strftime("%Y%m%d")
    hashtags = f"#{slug} #date{date_str}"

    # Loop through all the targets
    media_list = []
    for image_path in image_paths:
        # Create media upload
        alt_text = f"{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}"
        media_obj = api.media_post(image_path, description=alt_text)

        # Add it to our list
        media_list.append(media_obj["id"])

    # Break it into chunks of four
    chunk_list = utils.chunk(media_list, 4)

    # Loop through the chunks
    parent_status = None
    for i, chunk in enumerate(chunk_list):
        # Set the headline, if it's the first tweet in the thread
        if i == 0:
            status = f"""{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}\n

📷 See them all at https://palewi.re/docs/news-homepages/bundles/{bundle['slug']}.html"""
        else:
            status = ""

        # Hash tags go on all posts
        status += f"\n\n{hashtags}"

        # Make the tweet
        if i == 0:
            status = api.status_post(status, media_ids=chunk)
        else:
            assert parent_status
            status = api.status_post(
                status, media_ids=chunk, in_reply_to_id=parent_status["id"]
            )

        # Pause to let it happen
        time.sleep(3)

        # Set the parent id for the next loop iteration
        parent_status = status


def get_mastodon_client():
    """Return a Mastodon client ready to post to the API."""
    return Mastodon(
        client_id=os.getenv("MASTODON_CLIENT_KEY"),
        client_secret=os.getenv("MASTODON_CLIENT_SECRET"),
        access_token=os.getenv("MASTODON_ACCESS_TOKEN"),
        api_base_url="https://mastodon.palewi.re",
    )


if __name__ == "__main__":
    cli()
