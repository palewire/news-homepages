import json
import os
import sys
import time
from pathlib import Path

import click
import requests
from rich import print

from . import utils


@click.command()
@click.argument("artifact_path")
def cli(artifact_path: str):
    """Post image to Slack channel."""
    # Get the image
    artifact_obj = Path(artifact_path)
    assert artifact_obj.exists()

    # Read in artifact from archive.org upload
    print(f"Retrieving artifact from {artifact_obj}")
    data = json.load(open(artifact_obj))

    # Read in URL from archive artifact
    jpg_url = next(s for s in data if s.endswith(".jpg"))
    print(f"JPG url found: {jpg_url}")

    # Verify that the URL resolves
    if not requests.get(jpg_url).ok:
        # If it doesn't, wait 60 seconds
        # The most common problem here is that the Internet Archive
        # has fully processed the file yet.
        print("URL does not exist. Waiting 180 seconds to try again.")
        time.sleep(180)
        if not requests.get(jpg_url).ok:
            # If it doesn't work, wait again
            print("Waiting one more time ...")
            time.sleep(180 * 2)
            if not requests.get(jpg_url).ok:
                # If it still fails, throw an error
                print("URL does not exist")
                sys.exit(1)

    # Parse the site data from the archive URL
    archive_dict = utils.parse_archive_url(jpg_url)
    site = utils.get_site(archive_dict["handle"])

    # Set the alt text for the image
    ts = archive_dict["timestamp"]
    title_text = f"{ts.strftime('%-I:%M %p')} on {ts.strftime('%B %d, %Y')}"
    alt_text = f"{site['name']} homepage at {title_text}"

    # Set other URLs
    archive_url = f"https://archive.org/details/{archive_dict['identifier']}"

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
                    "text": ":camera_with_flash: " + title_text,
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
                    {
                        "type": "mrkdwn",
                        "text": ":bird: Follow <https://twitter.com/newshomepages|@newshomepages>",
                    },
                ],
            },
        ],
    }

    # Verify we have a Slack webhook URL
    url = os.getenv("SLACK_WEBHOOK_URL")
    assert url

    # Post to Slack
    print(f"Posting {site['name']} to Slack")
    r = requests.post(url, json=payload)

    # Make sure it went okay
    try:
        assert r.status_code == 200
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
