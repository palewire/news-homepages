import json
from pathlib import Path

import click
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
from retry import retry
from rich import print

from . import utils


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
def cli(handle: str, output_dir: str):
    """Save all hyperlinks as JSON for a single site."""
    # Get metadata
    site = utils.get_site(handle)

    # Do it
    link_list = _get_links(site)

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Write it out
    slug = site["handle"].lower()
    with open(output_path / f"{slug}.hyperlinks.json", "w") as fp:
        json.dump(link_list, fp, indent=2)


@retry(tries=3, delay=5, backoff=2)
def _get_links(data):
    print(f":newspaper: Getting hyperlinks for {data['url']}")
    # Start the browser
    with sync_playwright() as p:
        # Open a browser
        browser_obj = p.chromium.launch(
            channel="chrome",
        )

        browser_context = browser_obj.new_context(user_agent=utils.get_user_agent())

        # Open a page
        page = browser_context.new_page()

        # Go to the page
        page.goto(data["url"], timeout=60000 * 3)

        # Pull the html
        html = page.content()

        # Parse out all the links
        soup = BeautifulSoup(html, "html5lib")
        link_list = soup.find_all("a")

        # Close the browser
        browser_obj.close()

    # Parse out the data we want to keep
    data_list = []
    for link in link_list:
        try:
            d = {
                "text": link.text,
                "url": link["href"],
            }
        except KeyError:
            # If no href, skip it
            continue

        # Add to big list
        data_list.append(d)

    # Return the result
    return data_list


if __name__ == "__main__":
    cli()
