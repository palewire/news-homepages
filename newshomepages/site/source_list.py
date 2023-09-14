import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create source list."""
    pass


@cli.command()
def source_list():
    """Create source list."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())
    print(":newspaper: Creating site list page")
    _write_template("sources.md", dict(site_list=site_list))
