import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create bundle list."""
    pass


@cli.command()
def bundle_list():
    """Create bundle list."""
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())
    print(":basket: Creating bundle list page")
    _write_template("bundles.md", dict(bundle_list=bundle_list))
