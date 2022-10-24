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
    "--full-page",
    "full_page",
    is_flag=True,
    default=False,
    help="Lazy load all images, just to make sure they're in the final single-page html",
)
def cli(
    handle: str,
    output_dir: str = "./",
    wait: str = "5000",
    width: str = "1300",
    height: str = "1600",
    full_page: bool = False,
):
    """Save HTML for the provided homepage."""
    site = utils.get_site(handle)
    output_path = Path(output_dir)
    _save_html(
        site,
        output_path,
        wait=int(wait),
        width=int(width),
        height=int(height),
        full_page=bool(full_page),
    )


@retry(tries=3, delay=5, backoff=2)
def _save_html(
    site: typing.Dict,
    output_path: Path,
    wait: int = 5000,
    width: int = 1300,
    height: int = 1600,
    full_page: bool = False,
):
    """Shoot the provided site."""
    print(f":camera: Fetching HML for {site['name']}")

    # Set the output path
    output_path.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        context = utils._load_persistent_context(playwright, width, height)
        page = utils._load_new_page_disable_javascript(
            context=context,
            url=site["url"],
            wait_seconds=int((site["wait"] or wait) / 1000),
            handle=site["handle"],
            full_page=full_page,
        )

        single_file_pre_load_extensions = [
            str(
                utils.EXTENSIONS_PATH
                / "singlefile"
                / "javascript"
                / "single-file-bootstrap.js"
            ),
            str(
                utils.EXTENSIONS_PATH
                / "singlefile"
                / "javascript"
                / "single-file-hooks-frames.js"
            ),
            str(
                utils.EXTENSIONS_PATH
                / "singlefile"
                / "javascript"
                / "single-file-frames.js"
            ),
        ]
        for f in single_file_pre_load_extensions:
            utils.read_script_from_file(f, page)

        post_load_script = str(
            utils.EXTENSIONS_PATH / "singlefile" / "javascript" / "single-file.js"
        )
        utils.read_script_from_file(post_load_script, page)
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
            print("NO HTML CONTENT!")

        html_file_path = str(output_path / f"{site['handle'].lower()}.html")
        with open(html_file_path, "w") as output_file:
            output_file.write(page_html_content)

        # Close it out
        context.close()


if __name__ == "__main__":
    cli()
