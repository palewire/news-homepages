import tempfile
import time
import typing
from pathlib import Path

import click
from playwright.sync_api import Error, sync_playwright

from . import utils

DEFAULT_WIDTH = "1300"
DEFAULT_HEIGHT = "1600"


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("-w", "--wait", "wait", default=5000)
def cli(handle: str, output_dir: str, wait: str):
    """Screenshot the provided homepage."""
    site = utils.get_site(handle)
    _screenshot(site, output_dir, wait=int(wait))


def _screenshot(site: typing.Dict, output_dir: str, wait: int = 5000):
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
            user_agent=utils.get_user_agent(),
            viewport={
                "width": int(site["width"] or DEFAULT_WIDTH),
                "height": int(site["height"] or DEFAULT_HEIGHT),
            },
        )

        # Wait for adguard filters to load
        click.echo("Waiting 15 seconds for AdGuard filters to load")
        time.sleep(15)

        # Create an empty tab
        page = context.new_page()

        # Open the page
        click.echo(f"Opening {site['url']}")
        page.goto(site["url"], timeout=60000)

        # Give it a beat
        wait_seconds = int(site["wait"] or wait) / 1000
        click.echo(f"Waiting {wait_seconds} seconds")
        time.sleep(wait_seconds)

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
            ".gdpr-glm-standard",  # GDPR blockers on some sites
            "#didomi-host",  # Common cookies popup
            ".fc-ab-root",  # Ad blocker popup
            ".fancybox-overlay",  # Popup overlay
            ".fancybox-overlay-fixed",
            ".ab_widget_container_popin-image",  # Popover
            ".ab_widget_container_popin-image_content",
            ".ab_widget_container_popin-image_overlay",
            ".fc-ab-root",  # Popover
            ".modal-backdrop",  # Modal popup
            "#dth-borderless-modal-alt",
            "#floatingBlockerGuide",  # Popup overlay
            ".ctct-popup-overlay",  # Popup overlay
            ".ctct-popup-wrapper",
            ".message-container",  # Popup
            ".teg-container",
            'div[id^="sp_message_container"]',  # Popover
            ".wisepops-root",  # Popover
            "#wisepops-root",
            ".widget_eu_cookie_law_widget",  # GDPR poup
            ".fancybox-overlay",  # Ad overlay
            ".signup-box",  # Popup ad
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
        click.echo(f"Waiting {wait_seconds} seconds")
        time.sleep(wait_seconds)

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
