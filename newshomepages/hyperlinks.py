import typing
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
@click.option(
    "--bundle",
    "is_bundle",
    is_flag=True,
    default=False,
    help="The provided handle is a bundle",
)
def cli(handle: str, output_dir: str, is_bundle: bool = False):
    """Save all hyperlinks as JSON for a site or bundle."""
    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    if is_bundle:
        # Get all the sites
        site_list = utils.get_sites_in_bundle(handle)
    else:
        # Get metadata
        site_list = [utils.get_site(handle)]

    # Start the browser
    with sync_playwright() as p:
        # Open a browser
        browser = p.chromium.launch(channel="chrome")

        context = browser.new_context(user_agent=utils.get_user_agent())

        # Loop through the sites
        for site in site_list:

            # Get lnks
            link_list = _get_links(context, site)

            # Write out
            utils.write_json(
                output_path / f"{site['handle'].lower()}.hyperlinks.json", link_list
            )

        # Close the context
        context.close()


@retry(tries=3, delay=5, backoff=2)
def _get_links(context: BrowserContext, data: typing.Dict, timeout: int = 60000 * 3):
    print(f":newspaper: Getting hyperlinks for {data['url']}")
    # Open a page
    page = context.new_page()

    # Go to the page
    page.goto(data["url"], timeout=timeout)

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
