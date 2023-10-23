"""Save all of a site's hyperlinks as JSON."""
from __future__ import annotations

from pathlib import Path

import click
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
from playwright.sync_api._generated import BrowserContext
from retry import retry
from rich import print

from . import utils


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("--timeout", "timeout", default="180")
@click.option("--verbose", "verbose", default=False, is_flag=True)
def cli(handle, output_dir="./", timeout="180", verbose=False):
    """Save all of a site's hyperlinks as JSON."""
    # Get the site
    site = utils.get_site(handle)

    # Start the browser
    with sync_playwright() as p:
        # Open a browser
        browser = p.chromium.launch(channel="chrome")
        context = browser.new_context(user_agent=utils.get_user_agent())

        # Get lnks
        if verbose:
            print(f"🔗 Getting hyperlinks from {site['url']}")
        link_list = _get_links(context, site, timeout=int(timeout))
        if verbose:
            print(f"{len(link_list)} links found")

        # Close the browser
        context.close()

    # Write out the data
    output_path = Path(output_dir) / f"{site['handle']}.hyperlinks.json"
    utils.write_json(link_list, output_path)


@retry(tries=3, delay=5, backoff=2)
def _get_links(context: BrowserContext, data: dict, timeout: int = 180):
    # Open a page
    page = context.new_page()

    # Go to the page
    page.goto(data["url"], timeout=timeout * 1000)

    # Pull the html
    html = page.content()

    # Parse out all the links
    soup = BeautifulSoup(html, "html5lib")
    link_list = soup.find_all("a")

    # Parse out the data we want to keep
    data_list = []
    for link in link_list:
        try:
            d = dict(text=link.text, url=link["href"])
        except KeyError:
            # If no href, skip it
            continue

        # Add to big list
        data_list.append(d)

    # Close the page
    page.close()

    # Return the result
    return data_list


if __name__ == "__main__":
    cli()
