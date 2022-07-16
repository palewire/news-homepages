import json
import os
import sys

import click
import requests

from . import utils


@click.command()
@click.option(
    "-a",
    "--archive-json",
    "archive_json",
    help="archive JSON artifact to work with",
    type=click.File("r"),
    default=sys.stdin,
)
def cli(archive_json):
    """Post image to Slack channel."""
    data = json.load(archive_json)
    jpg_url = next(s for s in data if s.endswith(".jpg"))
    archive_dict = utils.parse_archive_url(jpg_url)
    site = utils.get_site(archive_dict["handle"])
    alt_text = f"{site['name']} homepage at {archive_dict['timestamp'].strftime('%-I:%M %p')} on {archive_dict['timestamp'].strftime('%B %d, %Y')}"
    payload = {
        "username": "News Homepages",
        "icon_emoji": ":rolled_up_newspaper:",
        "unfurl_links": True,
        "unfurl_media": True,
        "blocks": [
            {
                "type": "image",
                "title": {"type": "plain_text", "text": alt_text, "emoji": True},
                "image_url": jpg_url,
                "alt_text": alt_text,
            },
            {"type": "divider"},
        ],
    }
    url = os.getenv("SLACK_WEBHOOK_URL")
    assert url
    requests.post(url, json=payload)


if __name__ == "__main__":
    cli()
