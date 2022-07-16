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
    # Read in artifact from archive.org upload
    data = json.load(archive_json)

    # Read in URL from archive artifact
    jpg_url = next(s for s in data if s.endswith(".jpg"))

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
                "text": {"type": "plain_text", "text": title_text, "emoji": True},
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
                    "text": f"Hosted by an <{archive_url}|archive.org special collection>",
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": ":link: Get link",
                        "emoji": True,
                    },
                    "value": "click_me_123",
                    "url": jpg_url,
                    "action_id": "button-action",
                },
            },
            {"type": "divider"},
            {
                "type": "context",
                "elements": [
                    {
                        "type": "mrkdwn",
                        "text": ":rolled_up_newspaper: Archived by <https://palewi.re/who-is-ben-welsh/|Ben Welsh’s> <https://homepages.news|homepages.news>",
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
    r = requests.post(url, json=payload)

    # Make sure it went okay
    try:
        assert r.status_code == 200
        assert r.text == "ok"
    except AssertionError as e:
        click.echo(e)
        click.echo("\n\n")
        click.echo("Payload")
        click.echo("================")
        click.echo(json.dumps(payload, indent=4))
        sys.exit(1)


if __name__ == "__main__":
    cli()
