import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create a page showing all of the latest screenshots."""
    pass


@cli.command()
def latest_screenshots():
    """Create page showing all of the latest screenshots."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())
    print(f":camera: Creating latest screenshots page with {len(site_list)} sites")
    _write_template("latest.md", dict(site_list=site_list))
