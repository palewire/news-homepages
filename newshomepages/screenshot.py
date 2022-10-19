import typing
from pathlib import Path

import click
from playwright.sync_api import sync_playwright
from retry import retry
from rich import print

from . import utils


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("-w", "--wait", "wait", default=5000)
@click.option("-x", "--width", "width", default=1300)
@click.option("-y", "--height", "height", default=1600)
@click.option(
    "-f",
    "--screenshot_full_page",
    is_flag=True,
    default=False,
    help="Screenshot the whole page or just a part of it.",
)
def cli(
    handle: str,
    output_dir: str,
    wait: str,
    width: str,
    height: str,
    screenshot_full_page: bool,
):
    """Screenshot the provided homepage."""
    site = utils.get_site(handle)
    output_path = Path(output_dir)
    _screenshot(
        site,
        output_path,
        wait=int(wait),
        width=int(width),
        height=int(height),
        screenshot_full_page=bool(screenshot_full_page),
    )


@retry(tries=3, delay=5, backoff=2)
def _screenshot(
    site: typing.Dict,
    output_path: Path,
    wait: int = 5000,
    width: int = 1300,
    height: int = 1600,
    screenshot_full_page: bool = False,
):
    """Shoot the provided site."""
    print(f":camera: Screenshotting {site['name']}")

    # Set the output path
    output_path.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        context = utils._load_persistent_context(playwright, width, height)
        page = utils._load_new_page_disable_javascript(
            context=context,
            url=site["url"],
            wait_seconds=int((site["wait"] or wait) / 1000),
            handle=site["handle"],
        )

        # Take the screenshot
        jpeg_file_path = str(output_path / f"{site['handle'].lower()}.jpg")
        print(f"Saving image to {jpeg_file_path}")
        page.screenshot(
            quality=80,
            type="jpeg",
            path=jpeg_file_path,
            full_page=screenshot_full_page,
        )

        # Close it out
        context.close()


if __name__ == "__main__":
    cli()
