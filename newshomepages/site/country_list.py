import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create country list."""
    pass


@cli.command()
def country_list():
    """Create country list."""
    country_list = utils.get_country_list()
    for c in country_list:
        c["site_list"] = utils.get_sites_in_country(c["alpha2"])
    print("🗺️ Creating country list page")
    _write_template(
        "countries.md",
        dict(
            has_list=[c for c in country_list if len(c["site_list"])],
            hasnot_list=[c for c in country_list if not len(c["site_list"])],
        ),
    )
