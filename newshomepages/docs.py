import csv
from pathlib import Path

import click
import jinja2

from . import utils

PARENT_DIR = Path(__file__).parent.parent
TEMPLATE_DIR = PARENT_DIR / "docs" / "_templates/"
TEMPLATE_LOADER = jinja2.FileSystemLoader(searchpath=TEMPLATE_DIR)
TEMPLATE_ENV = jinja2.Environment(loader=TEMPLATE_LOADER)


@click.group()
def cli():
    """Update templated documentation pages."""
    pass


@cli.command()
def latest_screenshots():
    """Create page showing all of the latest screenshots."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"])

    context = {
        "site_list": site_list,
    }
    template = TEMPLATE_ENV.get_template("latest.md.tmpl")
    md = template.render(**context)

    with open(PARENT_DIR / "docs" / "latest.md", "w") as fh:
        fh.write(md)


@cli.command()
def source_list():
    """Create source list."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"])

    context = {
        "site_list": site_list,
    }
    template = TEMPLATE_ENV.get_template("sources.md.tmpl")
    md = template.render(**context)

    with open(PARENT_DIR / "docs" / "sources.md", "w") as fh:
        fh.write(md)


@cli.command()
def site_detail():
    """Create source detail pages."""
    # Get all sites
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"])

    # Get all screenshots and items
    csv_dir = utils.EXTRACT_DIR / "csv"
    screenshot_list = list(csv.DictReader(open(csv_dir / "screenshot-files.csv")))
    item_list = list(csv.DictReader(open(csv_dir / "items.csv")))

    # For each site ...
    for site in site_list:
        context = {
            "site": site,
            "screenshots": [
                s
                for s in screenshot_list
                if s["handle"].lower() == site["handle"].lower()
            ],
            "items": [
                i for i in item_list if i["handle"].lower() == site["handle"].lower()
            ],
        }
        template = TEMPLATE_ENV.get_template("site_detail.md.tmpl")
        md = template.render(**context)

        with open(
            PARENT_DIR / "docs" / "sites" / f"{site['handle'].lower()}.md", "w"
        ) as fh:
            fh.write(md)


if __name__ == "__main__":
    cli()
