import csv
import warnings
from pathlib import Path

import click
import jinja2
import pandas as pd
import pytz
from rich import print
from rich.progress import track
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
    print(f":camera: Creating latest screenshots page with {len(site_list)} sites")

    template = TEMPLATE_ENV.get_template("latest.md.tmpl")
    md = template.render(site_list=site_list)

    with open(PARENT_DIR / "docs" / "latest.md", "w") as fh:
        fh.write(md)


@cli.command()
def source_list():
    """Create source list."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())
    print(":newspaper: Creating site list page")

    template = TEMPLATE_ENV.get_template("sources.md.tmpl")
    md = template.render(site_list=site_list)

    with open(PARENT_DIR / "docs" / "sources.md", "w") as fh:
        fh.write(md)


@cli.command()
def bundle_list():
    """Create bundle list."""
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())
    print(":basket: Creating bundle list page")

    template = TEMPLATE_ENV.get_template("bundles.md.tmpl")
    md = template.render(bundle_list=bundle_list)

    with open(PARENT_DIR / "docs" / "bundles.md", "w") as fh:
        fh.write(md)


@cli.command()
def bundle_detail():
    """Create bundle detail pages."""
    # Get all bundles
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())
    print(f":basket: Creating {len(bundle_list)} bundle detail pages")

    # For each site ...
    for bundle in track(bundle_list):
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
    print(f":newspaper: Creating {len(site_list)} site detail pages")

    # Get all screenshots and items
    csv_dir = utils.EXTRACT_DIR / "csv"
    screenshot_list = utils.get_screenshot_list()
    hyperlink_list = utils.get_hyperlink_list()
    accessibility_list = utils.get_accessibility_list()
    lighthouse_list = utils.get_lighthouse_list()
    item_list = list(csv.DictReader(open(csv_dir / "items.csv")))

    # For each site ...
    for site in track(site_list):
        # Get all the bundles linked to this site
        site["bundle_list"] = [utils.get_bundle(b) for b in site["bundle_list"] if b]

        # Get the screenshots for this site
        screenshots = [
            s for s in screenshot_list if s["handle"].lower() == site["handle"].lower()
        ]

        # Get most 12 recent screenshots
        most_recent_screenshots = sorted(
            screenshots, key=lambda x: x["mtime"], reverse=True
        )[:12]

        # Set the local time
        site_tz = pytz.timezone(site["timezone"])
        for s in most_recent_screenshots:
            s["local_time"] = s["local_time"] = s["mtime"].astimezone(site_tz)

        # Get the hyperlinks for this site
        hyperlinks = [
            h for h in hyperlink_list if h["handle"].lower() == site["handle"].lower()
        ]

        # Get most 10 recent hyperlinks
        most_recent_hyperlinks = sorted(
            hyperlinks, key=lambda x: x["mtime"], reverse=True
        )[:10]

        # Set the local time
        site_tz = pytz.timezone(site["timezone"])
        for s in most_recent_hyperlinks:
            s["local_time"] = s["local_time"] = s["mtime"].astimezone(site_tz)

        # Get the accessibility for this site
        accessibility = [
            h
            for h in accessibility_list
            if h["handle"].lower() == site["handle"].lower()
        ]

        # Get most 10 recent accessibility
        most_recent_accessibility = sorted(
            accessibility, key=lambda x: x["mtime"], reverse=True
        )[:10]

        # Set the local time
        site_tz = pytz.timezone(site["timezone"])
        for s in most_recent_accessibility:
            s["local_time"] = s["local_time"] = s["mtime"].astimezone(site_tz)

        # Get the lighthouse for this site
        lighthouse = [
            h for h in lighthouse_list if h["handle"].lower() == site["handle"].lower()
        ]

        # Get most 10 recent accessibility
        most_recent_lighthouse = sorted(
            lighthouse, key=lambda x: x["mtime"], reverse=True
        )[:10]

        # Set the local time
        site_tz = pytz.timezone(site["timezone"])
        for s in most_recent_lighthouse:
            s["local_time"] = s["local_time"] = s["mtime"].astimezone(site_tz)

        # Render the template
        context = {
            "site": site,
            "screenshots": len(screenshots),
            "most_recent_screenshots": most_recent_screenshots,
            "hyperlinks": len(hyperlinks),
            "most_recent_hyperlinks": most_recent_hyperlinks,
            "accessibility": len(accessibility),
            "most_recent_accessibility": most_recent_accessibility,
            "lighthouse": len(lighthouse),
            "most_recent_lighthouse": most_recent_lighthouse,
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
    print(
        f":bar_chart: Creating screenshot chart JSON files for {len(site_list)} site detail pages"
    )

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
    for site in track(site_list):
        # Get the screenshots for this site
        site_df = screenshots_df[
            screenshots_df.handle.str.lower() == site["handle"].lower()
        ]

        # Do the math
        chart_df = _count_by_date(site_df, "screenshots")

        # Write it out
        _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


@cli.command()
def site_detail_hyperlink_chart():
    """Create the JSON data file for the site detail page's hyperlinks chart."""
    # Get all sites
    site_list = utils.get_site_list()
    print(
        f":link: Creating hyperlinks chart JSON files for {len(site_list)} site detail pages"
    )

    # Get all screenshots
    hyperlinks_df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "hyperlink-files.csv",
        parse_dates=["mtime"],
        usecols=["identifier", "handle", "file_name", "mtime"],
    )
    hyperlinks_df["date"] = pd.to_datetime(hyperlinks_df.mtime.dt.date)

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = utils.DOCS_DIR / "_extra" / "charts" / "sites" / "hyperlinks"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Loop through all sites
    for site in track(site_list):
        # Get the screenshots for this site
        site_df = hyperlinks_df[
            hyperlinks_df.handle.str.lower() == site["handle"].lower()
        ]

        # Do the math
        chart_df = _count_by_date(site_df, "hyperlinks")

        # Write it out
        _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


@cli.command()
def site_detail_accessibility_chart():
    """Create the JSON data file for the site detail page's accessibility chart."""
    # Get all sites
    site_list = utils.get_site_list()
    print(
        f":wheelchair: Creating accessibility chart JSON files for {len(site_list)} site detail pages"
    )

    # Get all accessibility files
    accessibility_df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "accessibility-files.csv",
        parse_dates=["mtime"],
        usecols=["identifier", "handle", "file_name", "mtime"],
    )
    accessibility_df["date"] = pd.to_datetime(accessibility_df.mtime.dt.date)

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = utils.DOCS_DIR / "_extra" / "charts" / "sites" / "accessibility"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Loop through all sites
    for site in track(site_list):
        # Get the screenshots for this site
        site_df = accessibility_df[
            accessibility_df.handle.str.lower() == site["handle"].lower()
        ]

        # Do the math
        chart_df = _count_by_date(site_df, "accessibility")

        # Write it out
        _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


@cli.command()
def site_detail_lighthouse_chart():
    """Create the JSON data file for the site detail page's lighthouse chart."""
    # Get all sites
    site_list = utils.get_site_list()
    print(
        f":abacus: Creating lighthouse chart JSON files for {len(site_list)} site detail pages"
    )

    # Get all accessibility files
    lighthouse_df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "lighthouse-files.csv",
        parse_dates=["mtime"],
        usecols=["identifier", "handle", "file_name", "mtime"],
    )
    lighthouse_df["date"] = pd.to_datetime(lighthouse_df.mtime.dt.date)

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = utils.DOCS_DIR / "_extra" / "charts" / "sites" / "lighthouse"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Loop through all sites
    for site in track(site_list):
        # Get the screenshots for this site
        site_df = lighthouse_df[
            lighthouse_df.handle.str.lower() == site["handle"].lower()
        ]

        # Do the math
        chart_df = _count_by_date(site_df, "lighthouse")

        # Write it out
        _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


def _count_by_date(df, field):
    # Group and count by date
    by_date = df.groupby("date").size().rename(field).reset_index()

    # Calculate the seven-day rolling average
    by_date["value"] = by_date[field].rolling(7).mean()

    # Cut nulls
    nonulls = by_date[~pd.isnull(by_date.value)]

    # Cut the most recent day, which may be incomplete
    qualified = nonulls.head(len(nonulls) - 1)

    # Trim the columns
    trimmed = qualified[["date", "value"]]

    # Return it back
    return trimmed


def _write_chart_json(df, path):
    # Format the date for JSON
    df["date"] = df["date"].dt.strftime("%Y-%m-%d")

    # Write it out
    df.to_json(path, indent=2, orient="records")


if __name__ == "__main__":
    cli()
