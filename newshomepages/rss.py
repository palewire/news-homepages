from datetime import datetime

import click
import jinja2
import pytz
from rich import print
from rich.progress import track

from . import utils

RSS_DIR = utils.SITE_DIR / "_extra" / "rss"
TEMPLATE_DIR = utils.SITE_DIR / "_templates/"
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
    screenshot_df = utils.get_screenshot_df()
    print(f":basket: Creating RSS feeds for {len(bundle_list)} bundles")

    # Set timestamp for feeds
    now = datetime.now(pytz.utc)

    # Loop through all bundles
    for bundle in track(bundle_list):

        # Get all of its sites
        site_list = utils.get_sites_in_bundle(bundle["slug"])

        # Pull all of the screenshots for the sites
        handle_list = [s["handle"].lower() for s in site_list]
        file_list = screenshot_df[
            screenshot_df.handle.str.lower().isin(handle_list)
        ].sort_values("mtime", ascending=False)

        # Trim to the latest 50 items
        trimmed_list = file_list.head(50).to_dict(orient="records")

        # Localize the the timestamp in each file
        bundle_tz = pytz.timezone(bundle["timezone"])
        for f in trimmed_list:
            f["local_time"] = f["mtime"].astimezone(bundle_tz)

            # Set a clean name too
            f["name"] = next(
                s for s in site_list if s["handle"].lower() == f["handle"].lower()
            )["name"]

        # Render the template
        context = dict(
            now=now,
            obj=bundle,
            file_list=trimmed_list,
        )
        _write_template("bundle.rss", context, f"bundles/{bundle['slug']}.xml")


@cli.command()
def opml():
    """Create an OPML file with all site feeds."""
    print(":newspaper: Creating OPML file listing RSS feeds for all sites")
    context = dict(site_list=utils.get_site_list())
    _write_template("sites.opml", context, "sites/opml.xml")


@cli.command()
def sites():
    """Create site feeds."""
    # Get the current time
    now = datetime.now(pytz.utc)

    # Get a list of all sites
    site_df = utils.get_site_df()
    print(f":newspaper: Creating RSS for {len(site_df)} sites")

    # Get the screenshots we're after
    screenshot_df = utils.get_screenshot_df()
    merged_df = site_df.drop(["url"], axis=1).merge(
        screenshot_df, on="handle", how="inner"
    )

    # Localize timestamps
    def _localize(row):
        site_tz = pytz.timezone(row["timezone"])
        return row["mtime"].astimezone(site_tz)

    merged_df["local_time"] = merged_df.apply(_localize, axis=1)

    # Loop through all sites
    for site in track(site_df.to_dict(orient="records")):
        file_list = (
            merged_df[merged_df.handle == site["handle"]]
            .sort_values("mtime", ascending=False)
            .head(25)
            .to_dict("records")
        )

        # Render the page
        context = dict(
            now=now,
            obj=site,
            file_list=file_list,
        )
        _write_template("site.rss", context, f"sites/{site['handle'].lower()}.xml")

    # Create full feed
    print("Creating RSS feed of latest 100 screenshots across all sites")
    final_list = []
    for file_ in merged_df.head(100).to_dict(orient="records"):
        file_["site_name"] = file_["name"]
        site_tz = pytz.timezone(file_["timezone"])
        file_["local_time"] = file_["mtime"].astimezone(site_tz)
        final_list.append(file_)

    # Write it out
    context = dict(file_list=final_list, now=now)
    _write_template("all.rss", context, "sites/all.xml")


@cli.command()
def countries():
    """Create country feeds."""
    # Get data
    site_df = utils.get_site_df()
    country_df = utils.get_country_df()
    merged_df = site_df.merge(
        country_df,
        left_on="country",
        right_on="alpha2",
        how="inner",
        suffixes=("_site", "_country"),
    )
    screenshot_df = utils.get_screenshot_df()
    country_list = sorted(list(merged_df.alpha2.unique()))
    print(f":basket: Creating RSS feeds for {len(country_list)} countries")

    # Set timestamp for feeds
    now = datetime.now(pytz.utc)

    # Loop through all bundles
    for country_alpha2 in track(country_list):

        # Get all of its sites
        site_list = merged_df[merged_df.country == country_alpha2].to_dict(
            orient="records"
        )

        # Pull all of the screenshots for the sites
        handle_list = [s["handle"].lower() for s in site_list]
        file_list = screenshot_df[
            screenshot_df.handle.str.lower().isin(handle_list)
        ].sort_values("mtime", ascending=False)

        # Trim to the latest 50 items
        trimmed_list = file_list.head(50).to_dict(orient="records")

        # Localize the the timestamp in each file
        country_obj = next(
            s
            for s in country_df.to_dict(orient="records")
            if s["alpha2"] == country_alpha2
        )
        country_tz = pytz.timezone(country_obj["timezone_list"][0])
        for f in trimmed_list:
            f["local_time"] = f["mtime"].astimezone(country_tz)
            # Set a clean name too
            f["name"] = next(
                s for s in site_list if s["handle"].lower() == f["handle"].lower()
            )["name_site"]

        # Render the template
        context = dict(
            now=now,
            obj=country_obj,
            file_list=trimmed_list,
        )
        _write_template(
            "country.rss", context, f"countries/{country_obj['alpha2'].lower()}.xml"
        )


def _write_template(template_name, context, output_name=None):
    template = TEMPLATE_ENV.get_template(f"{template_name}.tmpl")
    md = template.render(**context)
    output_path = RSS_DIR / (output_name or template_name)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w") as fh:
        fh.write(md)


if __name__ == "__main__":
    cli()
