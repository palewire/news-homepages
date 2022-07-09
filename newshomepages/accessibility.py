import logging
import subprocess
import typing
from pathlib import Path

import click

from . import utils

logger = logging.getLogger(__name__)


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
def cli(handle: str, output_dir: str):
    """Save the accessiblity JSON of a single site."""
    # Get metadata
    site = utils.get_site(handle)

    # Do the thing
    _get_accessibility(site, output_dir)


def _get_accessibility(data: dict, output_dir: str):
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
