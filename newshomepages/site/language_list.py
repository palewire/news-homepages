import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create language list."""
    pass


@cli.command()
def language_list():
    """Create language list."""
    language_list = utils.get_language_list()
    for d in language_list:
        d["site_list"] = utils.get_sites_in_language(d["part1"])
    print("🗣️ Creating language list page")
    _write_template(
        "languages.md",
        dict(language_list=language_list),
    )
