"""Save the accessiblity tree of the provided site."""
from __future__ import annotations

import json
from pathlib import Path

import click
from playwright.sync_api import sync_playwright
from retry import retry
from rich import print

from . import utils


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("--verbose", "verbose", default=False, is_flag=True)
def cli(handle, output_dir, verbose=False):
    """Save the accessiblity tree of the provided site."""
    # Get metadata
    site = utils.get_site(handle)

    # Set the output path
    output_path = Path(output_dir) / f"{site['handle'].lower()}.accessibility.json"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Do the thing
    if verbose:
        print(f":newspaper: Fetching a11y tree from {site['url']}")
    _get_accessibility(site, output_path)


@retry(tries=3, delay=5, backoff=2)
def _get_accessibility(site: dict, output_path: Path):
    """Run a command that fetches the accessibility tree for the provided site."""
    with open(output_path, "w") as fp:
        with sync_playwright() as p:
            context = utils._load_persistent_context(p)
            page = utils._load_new_page_disable_javascript(
                context=context,
                url=site["url"],
                handle=site["handle"],
            )
            snapshot = page.accessibility.snapshot()
            page.close()
        fp.write(json.dumps(snapshot, indent=4))
        fp.write("\n")


if __name__ == "__main__":
    cli()
