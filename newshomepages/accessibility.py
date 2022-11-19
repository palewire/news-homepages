import subprocess
import typing
from pathlib import Path

import click
from retry import retry
from rich import print

from . import utils


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("--timeout", "timeout", default="180")
def cli(handle: str, output_dir: str, timeout: str = "180"):
    """Save the accessiblity tree of the provided site."""
    # Get metadata
    site = utils.get_site(handle)

    # Set the output path
    output_path = Path(output_dir) / f"{handle.lower()}.accessibility.json"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Do the thing
    _get_accessibility(site, output_path, int(timeout))


@retry(tries=3, delay=5, backoff=2)
def _get_accessibility(data: typing.Dict, output_path: Path, timeout: int = 180):
    """Run a command that fetches the accessibility tree for the provided site."""
    print(f":newspaper: Fetching a11y tree from {data['url']}")

    # Shoot the shot
    command_list = [
        "shot-scraper",
        "accessibility",
        data["url"],
        "-o",
        str(output_path),
        "--timeout",
        str(timeout * 1000),  # Convert from seconds into milliseconds
    ]

    # If there's a custom JavaScript include, toss that in
    javascript = utils.get_javascript(data["handle"])
    if javascript:
        command_list.extend(["--javascript", javascript])

    # Run the command
    subprocess.run(command_list)


if __name__ == "__main__":
    cli()
