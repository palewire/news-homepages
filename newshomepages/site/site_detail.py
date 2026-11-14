import click
from rich import print
from rich.progress import track

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create source detail pages."""


@cli.command()
def site_detail():
    """Create source detail pages."""
    # Get all sites
    site_list = utils.get_site_list()
    print(f":newspaper: Creating {len(site_list)} site detail pages")

    # For each site ...
    for site in track(site_list):
        # Get all the bundles linked to this site
        site["bundle_list"] = [utils.get_bundle(b) for b in site["bundle_list"] if b]

        # Render the template
        context = {"site": site}
        _write_template("site_detail.md", context, f"sites/{site['handle'].lower()}.md")
