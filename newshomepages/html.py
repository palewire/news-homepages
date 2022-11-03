import typing
from pathlib import Path

import click
from playwright.sync_api import sync_playwright
from retry import retry
from rich import print

from . import utils


def _read_script_from_file(filename: typing.Union[str, Path]) -> str:
    """Read and return Javascript code from a file. Convenience function."""
    ext_dir = utils.EXTENSIONS_PATH / "singlefile" / "javascript"
    with open(ext_dir / filename) as f:
        return f.read()


@click.command()
@click.argument("handle")
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("-w", "--wait", "wait", default=5000)
def cli(
    handle: str,
    output_dir: str = "./",
    wait: str = "5000",
):
    """Save HTML for the provided homepage."""
    site = utils.get_site(handle)
    output_path = Path(output_dir)
    _save_html(site, output_path, wait=int(wait))


@retry(tries=3, delay=5, backoff=2)
def _save_html(
    site: typing.Dict,
    output_path: Path,
    wait: int = 5000,
):
    """Shoot the provided site."""
    print(f":camera: Fetching HTML for {site['name']}")

    # Set the output path
    output_path.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        context = utils._load_persistent_context(playwright)
        page = utils._load_new_page_disable_javascript(
            context=context,
            url=site["url"],
            wait_seconds=int((site["wait"] or wait) / 1000),
            handle=site["handle"],
            full_page=True,
        )
        single_file_pre_load_extensions = [
            "single-file-bootstrap.js",
            "single-file-hooks-frames.js",
            "single-file-frames.js",
        ]
        for f in single_file_pre_load_extensions:
            page.evaluate(_read_script_from_file(f))

        page.evaluate(_read_script_from_file("single-file.js"))
        page_html_content = page.evaluate(
            """
                () => singlefile.getPageData({
                        removeHiddenElements: true,
                        removeUnusedStyles: true,
                        removeUnusedFonts: true,
                        removeImports: true,
                        blockScripts: true,
                        blockAudios: true,
                        blockVideos: true,
                        compressHTML: true,
                        removeAlternativeFonts: true,
                        removeAlternativeMedias: true,
                        removeAlternativeImages: true,
                        groupDuplicateImages: true
                });
            """
        ).get("content")

        if page_html_content is None:
            raise ValueError("HTML content for page is None.")

        output_file_path = output_path / f"{site['handle'].lower()}.html"
        with open(output_file_path, "w") as output_file:
            output_file.write(page_html_content)

        # Close it out
        context.close()


if __name__ == "__main__":
    cli()
