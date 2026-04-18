import json
import os
import sys
import time
from pathlib import Path

import click
import internetarchive
import requests
from retry import retry
from rich import print

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")


@retry(tries=5, delay=90, jitter=(-30, 30))
def _upload(
    identifier: str,
    metadata: dict,
    files: dict,
    verbose: bool = False,
    timeout: int = 60,
):
    """Upload the provided data to archive.org."""
    internetarchive.upload(
        identifier,
        # Authentication
        access_key=IA_ACCESS_KEY,
        secret_key=IA_SECRET_KEY,
        # Metadata about the item
        metadata=metadata,
        # The items we'll upload
        files=files,
        # Other options
        verbose=verbose,
        request_kwargs=dict(timeout=int(timeout)),
    )


@click.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
@click.option("-v", "--verbose", "verbose", is_flag=True, default=False)
@click.option("-t", "--timeout", "timeout", default="60")
def cli(handle: str, input_dir: str, verbose: bool = False, timeout: str = "60"):
    """Post image to Slack channel."""
    # Verify we have all the credentials
    assert IA_ACCESS_KEY
    assert IA_SECRET_KEY
    assert IA_COLLECTION

    # Pull the source’s metadata
    site = utils.get_site(handle)

    # Get the image
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_path = input_path / f"{site['handle']}.jpg"
    assert image_path.exists()

    # Get the local time for the site
    local_now = utils.get_local_time(site)

    # Get the site identifier for archive.org
    now_year = local_now.strftime("%Y")
    site_identifier = f"{site['handle']}-{now_year}"

    # Get the metadata for the item on archive.org
    site_metadata = dict(
        title=f"{site['name']} homepages in {now_year}",
        collection=IA_COLLECTION,
        mediatype="image",
        publisher=site["url"],
        date=now_year,
        contributor="https://homepages.news",
    )

    # Convert the timestamp to ISO format for timestamping our files
    now_iso = local_now.isoformat()

    # Set an ID that will be the prefix to all files
    jpg_name = f"{handle}-{now_iso}.jpg"

    # Upload the image to archive.org
    if verbose:
        print(
            f"Uploading {image_path} to {site_identifier} on archive.org as {jpg_name}"
        )

    # Do the upload with a retry mechanism
    _upload(
        site_identifier,
        site_metadata,
        {jpg_name: image_path},
        verbose=verbose,
        timeout=int(timeout),
    )

    # Set the URL we expect
    jpg_url = f"https://archive.org/download/{site_identifier}/{jpg_name}"

    # Wait 30 seconds to give the URL time to show up
    if verbose:
        print(f"Waiting 30 seconds for {jpg_url} to resolve")
    time.sleep(30)

    # Verify that the URL resolves
    if verbose:
        print(f"Checking that {jpg_url} exists")
    wait = 60 * 5
    if not requests.get(jpg_url, timeout=30).ok:
        # If it doesn't, wait 60 seconds
        # The most common problem here is that the Internet Archive
        # has fully processed the file yet.
        if verbose:
            print(f"URL does not exist. Waiting {wait} seconds to try again.")
        time.sleep(wait)
        if not requests.get(jpg_url, timeout=30).ok:
            # If it doesn't work, wait again
            if verbose:
                print(f"Failed again. Now waiting {wait * 2} seconds ...")
            time.sleep(wait * 2)
            if not requests.get(jpg_url, timeout=30).ok:
                # If it still fails, throw an error
                print("URL does not exist")
                sys.exit(1)

    # Set the alt text for the image
    title_text = (
        f"{local_now.strftime('%-I:%M %p')} on {local_now.strftime('%B %d, %Y')}"
    )
    alt_text = f"The {site['name']} homepage at {local_now.strftime('%-I:%M %p')} in {site['location']}"

    # Set other URLs
    archive_url = f"https://archive.org/details/{site_identifier}"

    # Configure the Slack message
    payload = {
        "username": "News Homepages",
        "icon_emoji": ":rolled_up_newspaper:",
        "unfurl_links": True,
        "unfurl_media": True,
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": f":camera_with_flash: {title_text}",
                    "emoji": True,
                },
            },
            {
                "type": "image",
                "image_url": jpg_url,
                "alt_text": alt_text,
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": f"Hosted by an Internet Archive <{archive_url}|special collection>",
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": ":link: Get link",
                        "emoji": True,
                    },
                    "value": "click-me",
                    "url": jpg_url,
                    "action_id": "archive-button-action",
                },
            },
            {"type": "divider"},
            {
                "type": "context",
                "elements": [
                    {
                        "type": "mrkdwn",
                        "text": "🤖 Automated by <https://palewi.re/who-is-ben-welsh/|Ben Welsh's> <https://homepages.news|homepages.news>",
                    },
                ],
            },
        ],
    }

    # Verify we have a Slack webhook URL
    webhook_url = os.getenv("SLACK_WEBHOOK_URL")
    assert webhook_url

    # Post to Slack
    if verbose:
        print(f"Posting {site['name']} to Slack")
    r = requests.post(webhook_url, json=payload, timeout=int(timeout))

    # Make sure it went okay
    try:
        assert r.ok
        assert r.text == "ok"
    except AssertionError as e:
        print(e)
        print("\n\n")
        print("Payload")
        print("================")
        print(json.dumps(payload, indent=4))
        print("\n\n")
        print("Response")
        print("================")
        print(r.text)
        sys.exit(1)


if __name__ == "__main__":
    cli()
