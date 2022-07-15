import json
import os
import sys

import click
import requests


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
    jpg = next(s for s in data if s.endswith(".jpg"))
    payload = {
        "username": "News Homepages",
        "icon_emoji": ":rolled_up_newspaper:",
        "unfurl_links": True,
        "unfurl_media": True,
        "text": jpg,
    }
    url = os.getenv("SLACK_WEBHOOK_URL")
    assert url
    requests.post(url, json=payload)


if __name__ == "__main__":
    cli()
