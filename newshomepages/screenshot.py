import logging
import tempfile

import click
from playwright.sync_api import sync_playwright

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
def headless():
    """Shoot headlessly."""
    with sync_playwright() as playwright:
        # Boot up the browser with the ad blocker plugin installed
        click.echo("Launching Chromium browser")
        context = playwright.chromium.launch_persistent_context(
            tempfile.mkdtemp(),
            channel="chrome",
            headless=True,
        )
        click.echo("Created context")

        # Create an empty tab
        page = context.new_page()
        click.echo("New page opened")

        # Open the page
        page.goto("https://www.latimes.com")
        click.echo("Opened page")

        # Take the screenshot
        file_path = "_dist/headless.jpg"
        page.screenshot(
            quality=80,
            type="jpeg",
            path=file_path,
        )
        click.echo("Saved image")

        # Close it out
        context.close()
        click.echo("Closed context")


@cli.command()
def headful():
    """Shoot headfully."""
    with sync_playwright() as playwright:
        # Boot up the browser with the ad blocker plugin installed
        click.echo("Launching Chromium browser")
        path_to_extension = utils.EXTENSIONS_PATH / "uBlock0.chromium"
        context = playwright.chromium.launch_persistent_context(
            tempfile.mkdtemp(),
            channel="chrome",
            headless=False,
            args=[
                f"--disable-extensions-except={path_to_extension}",
                f"--load-extension={path_to_extension}",
                "--disable-gpu",
            ],
        )
        click.echo("Created context")

        # Create an empty tab
        page = context.new_page()
        click.echo("New page opened")

        # Open the page
        page.goto("https://www.latimes.com")
        click.echo("Opened page")

        # Take the screenshot
        file_path = "_dist/headful.jpg"
        page.screenshot(
            quality=80,
            type="jpeg",
            path=file_path,
        )
        click.echo("Saved image")

        # Close it out
        context.close()
        click.echo("Closed context")


if __name__ == "__main__":
    cli()
