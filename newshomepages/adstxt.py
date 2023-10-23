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
    """Save the raw ads.txt of the provided site."""
    # Get the site
    site = utils.get_site(handle)

    # Get the ads.txt
    adstxt = _get_adstxt(site["url"], int(timeout), verbose=verbose)

    if adstxt is None:
        # If there is no ads.txt, we drop out now
        print(f":robot: No ads.txt for {site['handle']}")
        adstxt = "404: No file found"

    # Set the output path
    output_path = Path(output_dir) / f"{site['handle']}.ads.txt"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write it out
    if verbose:
        print(f":robot: Writing {output_path}")
    with output_path.open("w") as f:
        f.write(adstxt)


@retry(tries=3, delay=15, backoff=2)
def _get_adstxt(
    site_url: str,
    timeout: int = 5,
    verbose: bool = False,
) -> str | None:
    """Get the raw ads.txt for a site."""
    # Create the ads.txt URL
    adstxt_url = (
        urlparse(site_url)
        ._replace(path="")
        ._replace(query="")
        ._replace(path="ads.txt")
        .geturl()
    )
    if verbose:
        print(f":robot: Fetching {adstxt_url}")

    # Set the headers
    headers = {"User-Agent": utils.get_user_agent()}

    # Make the request
    r = requests.get(adstxt_url, timeout=timeout, headers=headers)

    # Check if the request is a 404
    if r.status_code == 404:
        # In this case, there is no ads.txt
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
