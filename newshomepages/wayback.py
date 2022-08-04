import os

import click
import requests

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")


@click.command()
@click.argument("handle")
def cli(handle: str):
    """Archive a URL."""
    # Pull the source’s metadata
    site = utils.get_site(handle)
    # Upload it
    r = requests.post(
        "https://web.archive.org/save",
        headers={
            "Authorization": f"LOW {IA_ACCESS_KEY}:{IA_SECRET_KEY}",
            "Accept": "application/json",
        },
        data={
            "url": site["url"],
            "capture_screenshot": "1",
            "skip_first_archive": "1",
            "capture_all": "1",
        },
    )
    click.echo(r.json())


if __name__ == "__main__":
    cli()
