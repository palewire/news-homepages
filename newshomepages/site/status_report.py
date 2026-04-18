import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create a status report."""


@cli.command()
def status_report():
    """Create a status report."""
    print("📊 Creating status report")

    # Get the latest status report extract
    url = "https://archive.org/download/news-homepages-extracts/status-report.json"
    context = utils.get_json_url(url, verbose=True)

    # Write the template
    _write_template("status-report.md", context)


if __name__ == "__main__":
    cli()
