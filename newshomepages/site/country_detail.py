import click
from rich import print
from rich.progress import track

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create country detail pages."""
    pass


@cli.command()
def country_detail():
    """Create country detail pages."""
    country_list = utils.get_country_list()
    print(f"🗺️ Creating {len(country_list)} country detail pages")

    # For each site ...
    for obj in track(country_list):
        site_list = utils.get_sites_in_country(obj["alpha2"])
        if not len(site_list):
            continue
        context = {
            "country": obj,
            "site_list": sorted(site_list, key=lambda x: x["name"].lower()),
        }
        _write_template(
            "country_detail.md", context, f"countries/{obj['alpha2'].lower()}.md"
        )
