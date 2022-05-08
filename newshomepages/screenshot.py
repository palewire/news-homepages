import logging
import time
import typing
from pathlib import Path

import click
from playwright.sync_api import Error, sync_playwright

from . import utils

DEFAULT_WIDTH = "1300"
DEFAULT_HEIGHT = "1600"
DEFAULT_WAIT = "3000"

logger = logging.getLogger(__name__)


@click.group()
def cli():
    """Shoot a screenshot."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
def single(handle: str, output_dir: str):
    """Screenshot a single source."""
    site = utils.get_site(handle)
    _shoot(site, output_dir)


@cli.command()
@click.argument("slug")
@click.option("-o", "--output-dir", "output_dir", default="./")
def bundle(slug: str, output_dir: str):
    """Screenshot a bundle of sources."""
    [_shoot(site, output_dir) for site in utils.get_sites_in_bundle(slug)]


def _shoot(site: typing.Dict, output_dir: str):
    """Shoot the provided site."""
    click.echo(f"Shooting {site['url']}")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        # Boot up the browser with the ad blocker plugin installed
        path_to_extension = utils.EXTENSIONS_PATH / "uBlock0.chromium"
        context = playwright.chromium.launch_persistent_context(
            "./.chromium",
            channel="chrome",
            headless=False,
            args=[
                f"--disable-extensions-except={path_to_extension}",
                f"--load-extension={path_to_extension}",
            ],
            user_agent="News Homepages (http://homepages.news/)",
        )

        # Create an empty tab
        page = context.new_page()

        # Set the timeout
        page.set_default_timeout(60 * 1000)

        # Set the window size
        page.set_viewport_size(
            {
                "width": int(site["width"] or DEFAULT_WIDTH),
                "height": int(site["height"] or DEFAULT_HEIGHT),
            }
        )

        # Open the page
        page.goto(site["url"])

        # Give it a beat
        wait = int(site["wait"] or DEFAULT_WAIT) / 1000
        click.echo(f"Waiting {wait} milliseconds")
        time.sleep(wait)

        # If there's javascript run it
        javascript = utils.get_javascript(site["handle"])
        if javascript:
            click.echo("Executing javascript")
            try:
                page.evaluate(javascript)
            except Error as error:
                raise click.ClickException(error.message)

        # Take the screenshot
        file_path = str(output_path / f"{site['handle'].lower()}.jpg")
        click.echo(f"Saving to {file_path}")
        page.screenshot(
            quality=80,
            type="jpeg",
            path=file_path,
        )

        # Close it out
        context.close()


if __name__ == "__main__":
    cli()
