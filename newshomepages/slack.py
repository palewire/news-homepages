import os

import click
import requests

from . import utils


@click.command()
@click.argument("handle")
@click.argument("identifier")
def cli(handle: str, identifier: str):
    """Post image to Slack channel."""
    # Get metadata
    site = utils.get_site(handle)
    click.echo(site)

    payload = {
        "username": "News Homepages",
        "icon_emoji": ":rolled_up_newspaper:",
        "unfurl_links": True,
        "text": f"https://archive.org/{identifier}",
    }

    url = os.getenv("SLACK_WEBHOOK_URL")
    assert url

    requests.post(url, data=payload)


if __name__ == "__main__":
    cli()
