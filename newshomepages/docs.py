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
        site_tz = pytz.timezone(site["timezone"])
        for file in file_list:
            file["local_time"] = file["mtime"].astimezone(site_tz)
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

    # Create an OPML that collects them all
    template = TEMPLATE_ENV.get_template("sites.opml.tmpl")
    context = {"site_list": sorted(site_list, key=lambda x: x["name"])}
    opml = template.render(**context)
    opml_path = PARENT_DIR / "docs" / "_extra" / "rss" / "sites" / "opml.xml"
    with open(opml_path, "w") as fh:
        fh.write(opml)

    # Create full feed
    sorted_list = sorted(screenshot_list, key=lambda x: x["mtime"], reverse=True)
    trimmed_list = sorted_list[:100]
    for file_ in trimmed_list:
        site = next(
            s for s in site_list if s["handle"].lower() == file_["handle"].lower()
        )
        file_["site_name"] = site["name"]
        site_tz = pytz.timezone(site["timezone"])
        file_["local_time"] = file_["mtime"].astimezone(site_tz)
    template = TEMPLATE_ENV.get_template("all.rss.tmpl")
    context = dict(
        file_list=trimmed_list,
        now=now,
    )
    all_ = template.render(**context)
    all_path = PARENT_DIR / "docs" / "_extra" / "rss" / "sites" / "all.xml"
    with open(all_path, "w") as fh:
        fh.write(all_)


if __name__ == "__main__":
    cli()
