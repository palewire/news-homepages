import logging
import subprocess
import time
import typing
from pathlib import Path

import click

from . import utils

logger = logging.getLogger(__name__)


@click.group()
def cli():
    """Save an accessibility JSON."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
def single(handle: str, output_dir: str):
    """Save the accessiblity JSON of a single site."""
    # Get metadata
    site = utils.get_site(handle)

    # Do the thing
    _get_accessibility(site, output_dir)


@cli.command()
@click.argument("slug")
@click.option("-o", "--output-dir", "output_dir", default="./")
def bundle(slug: str, output_dir: str):
    """Save the accessibility JSON of a bundle of sites."""
    # Pull the source metadata
    site_list = utils.get_sites_in_bundle(slug)

    # Loop through the targets
    for site in site_list:
        # Set the options for each
        _get_accessibility(site, output_dir)
        time.sleep(0.25)


def _get_accessibility(data, output_dir):
    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Shoot the shot
    command_list: typing.List[typing.Any] = [
        "shot-scraper",
        "accessibility",
        data["url"],
        "-o",
        str(output_path / f"{data['handle'].lower()}.accessibility.json"),
        "--timeout",
        str(60 * 1000),
    ]
    javascript = utils.get_javascript(data["handle"])
    if javascript:
        command_list.extend(["--javascript", javascript])
    click.echo(f"Parsing {data['url']}")
    subprocess.run(command_list)


if __name__ == "__main__":
    cli()
