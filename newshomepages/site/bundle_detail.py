import click
from rich import print
from rich.progress import track
from slugify import slugify

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create bundle detail pages."""
    pass


@cli.command()
def bundle_detail():
    """Create bundle detail pages."""
    # Get all bundles
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())
    print(f":basket: Creating {len(bundle_list)} bundle detail pages")

    # For each site ...
    for bundle in track(bundle_list):
        bundle["hashtag"] = slugify(bundle["name"], separator="")
        site_list = utils.get_sites_in_bundle(bundle["slug"])
        context = {
            "bundle": bundle,
            "site_list": sorted(site_list, key=lambda x: x["name"].lower()),
        }
        _write_template("bundle_detail.md", context, f"bundles/{bundle['slug']}.md")
