import csv
import warnings
from pathlib import Path

import click
import jinja2
import pandas as pd
from slugify import slugify

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
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())

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
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())

    context = {
        "site_list": site_list,
    }
    template = TEMPLATE_ENV.get_template("sources.md.tmpl")
    md = template.render(**context)

    with open(PARENT_DIR / "docs" / "sources.md", "w") as fh:
        fh.write(md)


@cli.command()
def bundle_list():
    """Create bundle list."""
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())

    context = {
        "bundle_list": bundle_list,
    }
    template = TEMPLATE_ENV.get_template("bundles.md.tmpl")
    md = template.render(**context)

    with open(PARENT_DIR / "docs" / "bundles.md", "w") as fh:
        fh.write(md)


@cli.command()
def bundle_detail():
    """Create bundle detail pages."""
    # Get all bundles
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())

    # For each site ...
    for bundle in bundle_list:
        bundle["hashtag"] = slugify(bundle["name"], separator="")
        site_list = utils.get_sites_in_bundle(bundle["slug"])
        context = {
            "bundle": bundle,
            "site_list": sorted(site_list, key=lambda x: x["name"].lower()),
        }
        template = TEMPLATE_ENV.get_template("bundle_detail.md.tmpl")
        md = template.render(**context)

        with open(PARENT_DIR / "docs" / "bundles" / f"{bundle['slug']}.md", "w") as fh:
            fh.write(md)


@cli.command()
def site_detail():
    """Create source detail pages."""
    # Get all sites
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())

    # Get all screenshots and items
    csv_dir = utils.EXTRACT_DIR / "csv"
    screenshot_list = list(csv.DictReader(open(csv_dir / "screenshot-files.csv")))
    item_list = list(csv.DictReader(open(csv_dir / "items.csv")))

    # For each site ...
    for site in site_list:
        site["bundle_list"] = [utils.get_bundle(b) for b in site["bundle_list"] if b]
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


@cli.command()
def site_detail_screenshot_chart():
    """Create the JSON data file for the site detail page's screenshots chart."""
    # Get all sites
    site_list = utils.get_site_list()

    # Get all screenshots
    screenshots_df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "screenshot-files.csv",
        parse_dates=["mtime"],
        usecols=["identifier", "handle", "file_name", "mtime"],
    )
    screenshots_df["date"] = pd.to_datetime(screenshots_df.mtime.dt.date)

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = utils.DOCS_DIR / "_extra" / "charts" / "sites" / "screenshots"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Loop through all sites
    for site in site_list:
        click.echo(f"Creating screenshot chart JSON for {site['handle']}")

        # Get the screenshots for this site
        site_df = screenshots_df[
            screenshots_df.handle.str.lower() == site["handle"].lower()
        ]

        # Group and count by date
        site_by_date = (
            site_df.groupby("date").size().rename("screenshots").reset_index()
        )

        # Calculate the seven-day rolling average
        site_by_date["value"] = site_by_date.screenshots.rolling(7).mean()

        # Cut nulls
        site_by_date_nonulls = site_by_date[~pd.isnull(site_by_date.value)]

        # Cut the most recent day, which may be incomplete
        site_by_date_qualified = site_by_date_nonulls.head(
            len(site_by_date_nonulls) - 1
        )

        # Trim the columns
        site_by_date_trimmed = site_by_date_qualified[["date", "value"]]

        # Format the date for JSON
        site_by_date_trimmed = site_by_date_trimmed["date"].dt.strftime("%Y-%m-%d")

        # Write it out
        site_by_date_trimmed.to_json(
            out_dir / f"{site['handle'].lower()}.json",
            indent=2,
            orient="records",
        )


if __name__ == "__main__":
    cli()
