import csv
import logging
import subprocess

import click

SOURCE_LIST = list(csv.DictReader(open("./sources.csv", "r")))
SOURCE_LOOKUP = dict((d['handle'], d) for d in SOURCE_LIST)
BUNDLE_LIST = list(csv.DictReader(open("./bundles.csv", "r")))
BUNDLE_LOOKUP = dict((d['slug'], d) for d in BUNDLE_LIST)

DEFAULT_WIDTH = "1300"
DEFAULT_HEIGHT = "1600"
DEFAULT_WAIT = "2000"

logger = logging.getLogger(__name__)


@click.group()
def cli():
    pass


@cli.command()
@click.argument('handle')
def single(handle):
    """Screenshot a single source."""
    data = SOURCE_LOOKUP[handle]
    _shoot(
        data['url'],
        f"{data['handle']}.jpg",
        data['width'] or DEFAULT_WIDTH,
        data['height'] or DEFAULT_HEIGHT,
        data['wait'] or DEFAULT_WAIT,
        data['javascript'] or ''
    )


@cli.command()
@click.argument('slug')
def bundle(slug):
    """Screenshot a bundle of sources."""
    # Pull the source metadata
    bundle = BUNDLE_LOOKUP[slug]
    target_list = [h for h in SOURCE_LIST if h['bundle'] == slug]

    # Loop through the targets
    for target in target_list:
        # Shoot them one by one
        _shoot(
            target['url'],
            f"{target['handle']}.jpg",
            target['width'] or DEFAULT_WIDTH,
            target['height'] or DEFAULT_HEIGHT,
            target['wait'] or DEFAULT_WAIT
        )


def _shoot(url, output, width, height, wait, javascript):
    logger.debug(f"Shooting {url}")
    print('for (i in %s) {document.querySelector(i).remove()}' % (javascript))
    subprocess.run([
        "shot-scraper",
        url,
        "-o",
        output,
        "--quality",
        "80",
        "--width",
        width,
        "--height",
        height,
        "--wait",
        wait,
        "--javascript",
        'for (i of %s) {document.querySelector(i).remove()}' % (javascript)
    ])


if __name__ == "__main__":
    cli()
