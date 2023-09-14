import click
from rich import print
from rich.progress import track

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create languages detail pages."""
    pass


@cli.command()
def language_detail():
    """Create languages detail pages."""
    language_list = utils.get_language_list()
    print(f"🗣️ Creating {len(language_list)} language detail pages")

    # For each site ...
    for obj in track(language_list):
        site_list = utils.get_sites_in_language(obj["part1"])
        if not len(site_list):
            continue
        context = {
            "language": obj,
            "site_list": sorted(site_list, key=lambda x: x["name"].lower()),
        }
        _write_template(
            "language_detail.md", context, f"languages/{obj['part1'].lower()}.md"
        )
