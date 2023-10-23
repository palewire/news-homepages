from __future__ import annotations

from pathlib import Path
from urllib.parse import urlparse

import click
import requests
from retry import retry
from rich import print

from . import utils


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("--timeout", "timeout", default="5")
@click.option("--verbose", "verbose", default=False, is_flag=True)
def cli(handle: str, output_dir: str, timeout: str = "5", verbose: bool = False):
    """Save the raw robots.txt of the provided site."""
    # Get the site
    site = utils.get_site(handle)

    # Get the robots.txt
    robotstxt = _get_robotstxt(site["url"], int(timeout), verbose=verbose)

    if robotstxt is None:
        # If there is no robots.txt, we drop out now
        print(f":robot: No robots.txt for {site['handle']}")
        robotstxt = "404: No file found"

    # Set the output path
    output_path = Path(output_dir) / f"{site['handle']}.robots.txt"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write it out
    if verbose:
        print(f":robot: Writing {output_path}")
    with output_path.open("w") as f:
        f.write(robotstxt)


@retry(tries=3, delay=15, backoff=2)
def _get_robotstxt(
    site_url: str,
    timeout: int = 5,
    verbose: bool = False,
) -> str | None:
    """Get the raw robots.txt for a site."""
    # Create the robots.txt URL
    robotstxt_url = (
        urlparse(site_url)
        ._replace(path="")
        ._replace(query="")
        ._replace(path="robots.txt")
        .geturl()
    )
    if verbose:
        print(f":robot: Fetching {robotstxt_url}")

    # Set the headers
    headers = {"User-Agent": utils.get_user_agent()}

    # Make the request
    r = requests.get(robotstxt_url, timeout=timeout, headers=headers)

    # Check if the request is a 404
    if r.status_code == 404:
        # In this case, there is no robots.txt
        # so we return None
        return None
    else:
        # Otherwise, we return the text,
        # after checking that the request was successful
        try:
            assert r.ok
        except AssertionError:
            msg = f"Request failed with status code {r.status_code}"
            if verbose:
                print(msg)
            raise AssertionError(msg)
        return r.text


if __name__ == "__main__":
    cli()
