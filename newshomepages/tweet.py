import os
import time
from datetime import datetime
from pathlib import Path

import click
import pytz
import twitter
from slugify import slugify

from . import utils


@click.group()
def cli():
    """Send a tweet."""
    pass


@cli.command()
@click.option("-i", "--input-dir", "input_dir", default="./")
def mosaic(input_dir: str):
    """Tweet a mosaic GIF."""
    # Connect to Twitter
    api = get_twitter_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone("America/Los_Angeles")
    now_local = now.astimezone(tz)

    # Create the headline
    tweet = f"""200 homepages from around the world captured at {now_local.strftime('%-I:%M %p')} in Los Angeles

📷 See them all at https://palewi.re/docs/news-homepages/latest.html
    """

    # Get the image
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_path = input_path / "mosaic.gif"
    assert image_path.exists()

    # Upload the image
    io = open(image_path, "rb")
    media_id = api.UploadMediaSimple(io)

    # Post the media
    api.PostMediaMetadata(media_id, tweet)

    # Make the tweet
    api.PostUpdate(tweet, media=media_id)


@cli.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
def single(handle: str, input_dir: str):
    """Tweet a single source."""
    # Pull the source’s metadata
    data = utils.get_site(handle)
    click.echo(f"Tweeting {data['handle']}")

    # Connect to Twitter
    api = get_twitter_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(data["timezone"])
    now_local = now.astimezone(tz)

    # Create the headline
    tweet = f"The {data['name']} homepage at {now_local.strftime('%-I:%M %p')} in {data['location']}"

    # Get the image
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_path = input_path / f"{handle.lower()}.jpg"

    # Upload the image
    io = open(image_path, "rb")
    media_id = api.UploadMediaSimple(io)

    # Post the media
    api.PostMediaMetadata(media_id, tweet)

    # Make the tweet
    api.PostUpdate(tweet, media=media_id)


@cli.command()
@click.argument("slug")
@click.option("-i", "--input-dir", "input_dir", default="./")
def bundle(slug: str, input_dir: str):
    """Tweet four sources as a single tweet."""
    # Pull the source metadata
    bundle = utils.get_bundle(slug)
    click.echo(f"Tweeting {bundle['name']}")

    # Set the input directory
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))
    click.echo(f"{len(image_paths)} images discovered in {input_path}")

    # Connect to Twitter
    api = get_twitter_client()

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
        io = open(image_path, "rb")
        media_id = api.UploadMediaSimple(io)

        # Add the alt text to the image
        alt_text = f"{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}"
        api.PostMediaMetadata(media_id, alt_text)

        # Add it to our list
        media_list.append(media_id)

    # Break it into chunks of four
    chunk_list = utils.chunk(media_list, 4)

    # Loop through the chunks
    parent_status_id = None
    for i, chunk in enumerate(chunk_list):
        # Set the headline, if it's the first tweet in the thread
        if i == 0:
            tweet = f"{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}\n"
        else:
            tweet = ""

        # Build the lists
        tweet_media_list = []
        for media_id in chunk:
            tweet_media_list.append(media_id)
        tweet += f"\n\n{hashtags}"

        # Make the tweet
        if i == 0:
            status = api.PostUpdate(tweet, media=tweet_media_list)
        else:
            status = api.PostUpdate(
                tweet, media=tweet_media_list, in_reply_to_status_id=parent_status_id
            )

        # Pause to let it happen
        time.sleep(3)

        # Set the parent id for the next loop iteration
        parent_status_id = status.id


def get_twitter_client():
    """Return a Twitter client ready to post to the API."""
    return twitter.Api(
        consumer_key=os.getenv("TWITTER_CONSUMER_KEY"),
        consumer_secret=os.getenv("TWITTER_CONSUMER_SECRET"),
        access_token_key=os.getenv("TWITTER_ACCESS_TOKEN_KEY"),
        access_token_secret=os.getenv("TWITTER_ACCESS_TOKEN_SECRET"),
    )


if __name__ == "__main__":
    cli()
