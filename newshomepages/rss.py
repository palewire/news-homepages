from datetime import datetime

import click
import jinja2
import pandas as pd
import pytz
from rich import print
from rich.progress import track

from . import utils

RSS_DIR = utils.DOCS_DIR / "_extra" / "rss"
TEMPLATE_DIR = utils.DOCS_DIR / "_templates/"
TEMPLATE_LOADER = jinja2.FileSystemLoader(searchpath=TEMPLATE_DIR)
TEMPLATE_ENV = jinja2.Environment(loader=TEMPLATE_LOADER)


@click.group()
def cli():
    """Create RSS feeds."""
    pass


@cli.command()
def bundles():
    """Create bundle feeds."""
    # Get data
    bundle_list = utils.get_bundle_list()
    screenshot_list = utils.get_screenshot_list()
    print(f":basket: Creating RSS feeds for {len(bundle_list)} bundles")

    # Set timestamp for feeds
    now = datetime.now(pytz.utc)

    # Loop through all bundles
    for bundle in track(bundle_list):

        # Get all of its sites
        site_list = utils.get_sites_in_bundle(bundle["slug"])

        # Pull all of the screenshots for the sites
        handle_list = [s["handle"].lower() for s in site_list]
        file_list = [s for s in screenshot_list if s["handle"].lower() in handle_list]

        # Sort reverse chron
        sorted_list = sorted(file_list, key=lambda x: x["mtime"], reverse=True)

        # Trim to the latest 50 items
        trimmed_list = sorted_list[:50]

        # Localize the the timestamp in each file
        bundle_tz = pytz.timezone(bundle["timezone"])
        for f in trimmed_list:
            f["local_time"] = f["mtime"].astimezone(bundle_tz)

            # Set a clean name too
            f["name"] = next(
                s for s in site_list if s["handle"].lower() == f["handle"].lower()
            )["name"]

        # Render the template
        template = TEMPLATE_ENV.get_template("bundle.rss.tmpl")
        rss = template.render(
            now=now,
            obj=bundle,
            file_list=trimmed_list,
        )

        # Write it out
        rss_path = RSS_DIR / "bundles" / f"{bundle['slug']}.xml"
        with open(rss_path, "w") as fh:
            fh.write(rss)


@cli.command()
def opml():
    """Create an OPML file with all site feeds."""
    print(":newspaper: Creating file for sites")

    # Get a list of all sites
    site_list = utils.get_site_list()

    # Create an OPML that collects them all
    template = TEMPLATE_ENV.get_template("sites.opml.tmpl")
    opml = template.render(site_list=site_list)

    # Write it out
    with open(RSS_DIR / "sites" / "opml.xml", "w") as fh:
        fh.write(opml)


@cli.command()
def sites():
    """Create site feeds."""
    # Get the current time
    now = datetime.now(pytz.utc)

    # Get a list of all sites
    site_list = utils.get_site_list()
    print(f":newspaper: Creating RSS for {len(site_list)} sites")

    # Get all screenshots
    screenshot_list = utils.get_screenshot_list()

    # Convert into a big dataframe
    site_df = pd.DataFrame(site_list)
    screenshot_df = pd.DataFrame(screenshot_list)
    merged_df = site_df.drop(["url"], axis=1).merge(
        screenshot_df, on="handle", how="inner"
    )
    assert len(merged_df) == len(screenshot_df)

    # Localize timestamps
    def _localize(row):
        site_tz = pytz.timezone(row["timezone"])
        return row["mtime"].astimezone(site_tz)

    merged_df["local_time"] = merged_df.apply(_localize, axis=1)

    # Set our output directory
    SITE_DIR = RSS_DIR / "sites"

    # Get the template for the site feed
    template = TEMPLATE_ENV.get_template("site.rss.tmpl")

    # Loop through all sites
    for site in track(site_list):
        file_list = (
            merged_df[merged_df.handle == site["handle"]]
            .sort_values("mtime", ascending=False)
            .head(25)
            .to_dict("records")
        )

        # Render the page
        rss = template.render(
            now=now,
            obj=site,
            file_list=file_list,
        )

        # Write it out
        rss_path = SITE_DIR / f"{site['handle'].lower()}.xml"
        with open(rss_path, "w") as fh:
            fh.write(rss)

    # Create full feed
    print("Creating RSS feed of latest 100 screenshots across all sites")
    final_list = []
    for file_ in screenshot_list[:100]:
        try:
            site = next(
                s for s in site_list if s["handle"].lower() == file_["handle"].lower()
            )
        except StopIteration:
            print(f"Skipping {file_['handle']}")
            continue
        file_["site_name"] = site["name"]
        site_tz = pytz.timezone(site["timezone"])
        file_["local_time"] = file_["mtime"].astimezone(site_tz)
        final_list.append(file_)

    # Write it out
    template = TEMPLATE_ENV.get_template("all.rss.tmpl")
    all_ = template.render(file_list=final_list, now=now)
    with open(SITE_DIR / "all.xml", "w") as fh:
        fh.write(all_)


if __name__ == "__main__":
    cli()
