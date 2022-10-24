import json
import os
import time
from datetime import datetime
from pathlib import Path

import click
import pandas as pd
import pytz
import twitter
from rich import print
from slugify import slugify

from . import utils


@click.group()
def cli():
    """Send a tweet."""
    pass


@cli.command()
@click.option("-n", "number", default=10)
def update_list(number):
    """Update a Twitter list with all of our sources."""
    # Connect to Twitter
    api = get_twitter_client()

    # Get our list
    list_list = api.GetListsList()
    sources_list = next(li for li in list_list if li.id == 1558434500304158720)
    next_cursor, previous_cursor, member_list = api.GetListMembersPaged(
        list_id=sources_list.id, count=5000
    )
    screenname_list = [m.screen_name.lower().strip() for m in member_list]
    print(f":abacus: {len(member_list)} sources in the Twitter list")

    # Get the full list of sources
    source_list = [s["handle"].lower().strip() for s in utils.get_site_list()]
    print(f":newspaper: {len(source_list)} sources in the archive")

    # Accounts that have been banned
    blacklist = [
        "gatewaypundit",
        "infowars",
        "enewsofnepal",
        "gcm_nf",
        "eyethunewskzn",
        "theleftbench",
        "udn",
        "johncombest",
        "nepalkhabar24",
        "cbs46",
    ]

    # Add what's missing
    missing_list = list(set(source_list) - set(screenname_list) - set(blacklist))[
        :number
    ]
    print(f":bird: Adding {len(missing_list)} new sources to Twitter list")
    for obj in missing_list:
        print(f"- {obj}")
        api.CreateListsMember(list_id=sources_list.id, screen_name=obj)
        time.sleep(2)


@cli.command()
def accessibility_report():
    """Tweet a periodic report on Lighthouse accessibility scores."""
    # Connect to Twitter
    api = get_twitter_client()

    # Get data
    accessibility_df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "lighthouse-analysis.csv",
        usecols=[
            "handle",
            "accessibility_count",
            "accessibility_median",
            "accessibility_color",
            "accessibility_rank",
        ],
        dtype={
            "handle": str,
            "accessibility_count": int,
            "accessibility_median": float,
            "accessibility_color": str,
            "accessibility_rank": int,
        },
    )

    # Calculate the grand totals
    count = accessibility_df.accessibility_count.sum()
    median = accessibility_df.accessibility_median.median() * 100

    # Calculate the distribution
    value_counts = (
        accessibility_df.accessibility_color.value_counts()
        .rename("n")
        .reset_index()
        .to_dict(orient="records")
    )
    value_percents = (
        accessibility_df.accessibility_color.value_counts(normalize=True)
        .rename("n")
        .reset_index()
        .to_dict(orient="records")
    )

    def _get_color(color, li):
        return next(d for d in li if d["index"] == color)["n"]

    def _round(v):
        return int(round(v * 100, 0))

    msg = f"""🤖🖨️ A11Y REPORT 🖨️🤖

This week the bot ran {utils.intcomma(count)} accessibility audits. Sites were scored from 0-100 and graded by Google. Green good. Orange okay. Red bad.

🟩 {_round(_get_color('green', value_percents))}% ({_get_color('green', value_counts)} sites)
🟧 {_round(_get_color('orange', value_percents))}% ({_get_color('orange', value_counts)})
🟥 {_round(_get_color('red', value_percents))}% ({_get_color('red', value_counts)})

The median score was {int(median)}.

Full ranking: https://palewi.re/docs/news-homepages/accessibility.html
"""

    # Tweet it
    api.PostUpdate(msg)


@cli.command()
def performance_report():
    """Tweet a periodic report on Lighthouse performance scores."""
    # Connect to Twitter
    api = get_twitter_client()

    # Get data
    performance_df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "lighthouse-analysis.csv",
        usecols=[
            "handle",
            "performance_count",
            "performance_median",
            "performance_color",
            "performance_rank",
        ],
        dtype={
            "handle": str,
            "performance_count": int,
            "performance_median": float,
            "performance_color": str,
            "performance_rank": int,
        },
    )

    # Calculate the grand totals
    count = performance_df.performance_count.sum()
    median = performance_df.performance_median.median() * 100

    # Calculate the distribution
    value_counts = (
        performance_df.performance_color.value_counts()
        .rename("n")
        .reset_index()
        .to_dict(orient="records")
    )
    value_percents = (
        performance_df.performance_color.value_counts(normalize=True)
        .rename("n")
        .reset_index()
        .to_dict(orient="records")
    )

    def _get_color(color, li):
        return next(d for d in li if d["index"] == color)["n"]

    def _round(v):
        return int(round(v * 100, 0))

    msg = f"""🤖🖨️ PERFORMANCE REPORT 🖨️🤖

This week the bot ran {utils.intcomma(count)} speed audits. Sites were scored from 0-100 and graded by Google. Green good. Orange okay. Red bad.

🟩 {_round(_get_color('green', value_percents))}% ({_get_color('green', value_counts)} sites)
🟧 {_round(_get_color('orange', value_percents))}% ({_get_color('orange', value_counts)})
🟥 {_round(_get_color('red', value_percents))}% ({_get_color('red', value_counts)})

The median score was {int(median)}.

Full ranking: https://palewi.re/docs/news-homepages/performance.html
"""

    # Tweet it
    api.PostUpdate(msg)


@cli.command()
def status_report():
    """Tweet a periodic status report."""
    # Connect to Twitter
    api = get_twitter_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone("America/Los_Angeles")
    now_local = now.astimezone(tz)

    # Set hashtags
    date_str = now_local.strftime("%Y%m%d")
    hashtags = f"#statusreport #date{date_str}"

    # Template out the tweet
    data = json.load(open(utils.NOTEBOOKS_DIR / "status-report.json"))
    msg = f"""🤖🖨️ STATUS REPORT 🖨️🤖

Over the last 7️⃣ days, this bot has saved {utils.numoji(data['screenshots_this_week'])} screenshots from {utils.numoji(data['total_sites'])} sites.

In total, it has deposited {utils.numoji(data['total_screenshots'])} screenshots with archive.org.

{hashtags}
"""

    image_list = [
        utils.NOTEBOOKS_DIR / "screenshots-by-date.png",
        utils.NOTEBOOKS_DIR / "sites-by-date.png",
    ]
    media_list = []
    for image_path in image_list:
        # Upload the image
        io = open(image_path, "rb")
        media_id = api.UploadMediaSimple(io)
        media_list.append(media_id)

    api.PostUpdate(msg, media=media_list)


@cli.command()
@click.option("-i", "--image-path", "input_path", default="./")
def mosaic(input_path: str):
    """Tweet a mosaic GIF."""
    # Connect to Twitter
    api = get_twitter_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone("America/Los_Angeles")
    now_local = now.astimezone(tz)

    # Create the headline
    tweet = f"""{len(utils.get_site_list()):,} homepages from around the world captured at {now_local.strftime('%-I:%M %p')} in Los Angeles

📷 See them all at https://palewi.re/docs/news-homepages/latest.html
    """

    # Get the image
    image_path = Path(input_path)
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
    print(f"Tweeting {data['handle']}")

    # Connect to Twitter
    api = get_twitter_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(data["timezone"])
    now_local = now.astimezone(tz)

    # Create the headline
    tweet = f"""The {data['name']} homepage at {now_local.strftime('%-I:%M %p')} in {data['location']}

More: https://palewi.re/docs/news-homepages/sites/{data['handle'].lower()}.html"""

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
    print(f"Tweeting {bundle['name']}")

    # Set the input directory
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))
    print(f"{len(image_paths)} images discovered in {input_path}")

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
            tweet = f"""{bundle['name']} homepages at {now_local.strftime('%-I:%M %p')} in {bundle['location']}\n

📷 See them all at https://palewi.re/docs/news-homepages/bundles/{bundle['slug']}.html"""
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


@cli.command()
@click.argument("code")
@click.option("-i", "--input-dir", "input_dir", default="./")
def country(code: str, input_dir: str):
    """Tweet four sources as a single tweet."""
    # Pull the source metadata
    country = utils.get_country(code)
    print(f"Tweeting {country['name']}")

    # Set the input directory
    input_path = Path(input_dir)

    # Pull images from input directory
    image_paths = list(input_path.glob("*.jpg"))
    print(f"{len(image_paths)} images discovered in {input_path}")

    # Connect to Twitter
    api = get_twitter_client()

    # Get the timestamp
    now = datetime.now()

    # Convert it to local time
    tz = pytz.timezone(country["timezone_list"][0])
    now_local = now.astimezone(tz)

    # Set hashtags
    slug = slugify(code.lower(), separator="")
    date_str = now_local.strftime("%Y%m%d")
    hashtags = f"#{slug} #date{date_str}"

    # Loop through all the targets
    media_list = []
    for image_path in image_paths:
        # Create media upload
        io = open(image_path, "rb")
        media_id = api.UploadMediaSimple(io)

        # Add the alt text to the image
        alt_text = f"The latest homepages from {country['name']}"
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
            tweet = f"""The latest homepages from {country['name']}\n

📷 See them all at https://palewi.re/docs/news-homepages/countries/{country['alpha2'].lower()}.html"""
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
