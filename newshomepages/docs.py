from datetime import datetime
from pathlib import Path

import click
import jinja2
import pytz

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
def site_rss():
    """Create RSS feed for each site."""
    site_list = utils.get_site_list()
    screenshot_list = utils.get_screenshot_list()
    now = datetime.now(pytz.utc)
    for site in site_list:
        template = TEMPLATE_ENV.get_template("site.rss.tmpl")
        file_list = [
            s for s in screenshot_list if s["handle"].lower() == site["handle"].lower()
        ]
        sorted_list = sorted(file_list, key=lambda x: x["mtime"], reverse=True)
        context = dict(
            now=now,
            obj=site,
            file_list=sorted_list[:25],
        )
        rss = template.render(**context)
        rss_path = (
            PARENT_DIR
            / "docs"
            / "_extra"
            / "rss"
            / "sites"
            / f"{site['handle'].lower()}.xml"
        )
        with open(rss_path, "w") as fh:
            fh.write(rss)


if __name__ == "__main__":
    cli()
