import json
import logging
import tempfile
import time
import typing
from pathlib import Path

import click
from playwright.sync_api import Error, sync_playwright

from . import utils

DEFAULT_WIDTH = "1300"
DEFAULT_HEIGHT = "1600"
DEFAULT_WAIT = "5000"

logger = logging.getLogger(__name__)


@click.group()
def cli():
    """Shoot a screenshot."""
    pass


@cli.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
def shoot(handle: str, output_dir: str):
    """Screenshot a single source."""
    site = utils.get_site(handle)
    _screenshot(site, output_dir)


@cli.command()
@click.option("-b", "--bundle", "bundle", default=None)
def get_handle_json(bundle):
    """Write out a list of site handles as a JSON list.

    Used by our GitHub Action to set a matrix of all sites.
    """
    if bundle:
        site_list = utils.get_sites_in_bundle(bundle)
    else:
        site_list = utils.get_site_list()
    handle_list = [s["handle"] for s in site_list]
    json.dump(handle_list, open("handles.json", "w"), indent=2)


def _screenshot(site: typing.Dict, output_dir: str):
    """Shoot the provided site."""
    click.echo(f"Screenshotting {site['name']}")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        # Boot up the browser with the ad blocker plugin installed
        click.echo("Launching Chromium browser")
        data_dir = tempfile.mkdtemp()
        click.echo(f"Data directory created at {data_dir}")
        extensions_list = [
            utils.EXTENSIONS_PATH / "adguard",
            utils.EXTENSIONS_PATH / "adguardextra",
        ]
        extensions_str = ",".join(map(str, extensions_list))
        context = playwright.chromium.launch_persistent_context(
            data_dir,
            channel="chrome",
            headless=False,
            args=[
                f"--disable-extensions-except={extensions_str}",
                f"--load-extension={extensions_str}",
                "--disable-gpu",
                "--enable-logging=stderr",
                "--log-level=0",
                "--v=1",
            ],
            user_agent="News Homepages (https://homepages.news/)",
        )

        # Wait for adguard filters to load
        click.echo("Waiting 20 seconds for AdGuard filters to load")
        time.sleep(20)

        # Create an empty tab
        page = context.new_page()

        # Set the window size
        page.set_viewport_size(
            {
                "width": int(site["width"] or DEFAULT_WIDTH),
                "height": int(site["height"] or DEFAULT_HEIGHT),
            }
        )

        # Open the page
        click.echo(f"Opening {site['url']}")
        page.goto(site["url"], timeout=60000)

        # Give it a beat
        wait = int(site["wait"] or DEFAULT_WAIT) / 1000
        click.echo(f"Waiting {wait} seconds")
        time.sleep(wait)

        # Run common JavaScript for all sites
        target_list = [
            ".tp-modal",  # Common popover ad
            ".tp-backdrop",
            ".onesignal-slidedown-container",  # Common slidedown ad
            "#regiwall-overlay",
            ".regiwall",
            ".bxc",  # Common takeover ad
            ".met-footer-toast",  # Common toaster at the bottom
            ".grecaptcha-badge",
            ".fEy1Z2XT",  # Common ad blocker popup
            ".dgEhJe6g",
            ".notification-soft-optin",  # Common notification popup
            ".popup_background",
            ".popup_wrapper",
            ".pw-subscribe-popup",
            ".ThirdPartySlot-container",
            ".newspack-lightbox",  # Common takover ad
            ".pbs_loc",  # PBS site location picker
            "#onetrust-consent-sdk",
            ".gdpr-huffpost-cookiewall",
            "#header-cts",
            ".pum-overlay",  # Common takeover ad
            "#pico_prompt",
            ".mol-ads-cmp",  # Footer toaster thing on some sites
        ]
        target_str = ",".join(target_list)
        javascript = (
            f"document.querySelectorAll('{target_str}').forEach(el => el.remove())"
        )
        click.echo("Executing common JavaScript")
        page.evaluate(javascript)

        # If there's custom javascript for this site, run it
        custom_javascript = utils.get_javascript(site["handle"])
        if custom_javascript:
            click.echo("Executing custom JavaScript")
            try:
                page.evaluate(custom_javascript)
            except Error as error:
                raise click.ClickException(error.message)

        # Hide the scrollbars
        click.echo("Hiding scrollbars with CSS")
        css = """document.body.style.overflow = 'hidden';"""
        page.evaluate(css)

        # Give it another beat
        wait = int(site["wait"] or DEFAULT_WAIT) / 1000
        click.echo(f"Waiting {wait} seconds")
        time.sleep(wait)

        # Take the screenshot
        file_path = str(output_path / f"{site['handle'].lower()}.jpg")
        click.echo(f"Saving image to {file_path}")
        page.screenshot(
            quality=80,
            type="jpeg",
            path=file_path,
        )

        # Close it out
        context.close()


if __name__ == "__main__":
    cli()
