from datetime import datetime

import click
import jinja2
import pytz

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
    bundle_list = utils.get_bundle_list()
    screenshot_list = utils.get_screenshot_list()
    now = datetime.now(pytz.utc)
    for bundle in bundle_list:
        site_list = utils.get_sites_in_bundle(bundle["slug"])
        handle_list = [s["handle"].lower() for s in site_list]
        file_list = [s for s in screenshot_list if s["handle"].lower() in handle_list]
        click.echo(f"Building RSS for {bundle['name']}")
        template = TEMPLATE_ENV.get_template("bundle.rss.tmpl")
        bundle_tz = pytz.timezone(bundle["timezone"])
        for file in file_list:
            file["local_time"] = file["mtime"].astimezone(bundle_tz)
            file["name"] = next(
                s for s in site_list if s["handle"].lower() == file["handle"].lower()
            )["name"]
        sorted_list = sorted(file_list, key=lambda x: x["mtime"], reverse=True)

        # Render the template
        rss = template.render(
            now=now,
            obj=bundle,
            file_list=sorted_list[:50],
        )

        # Write it out
        rss_path = RSS_DIR / "bundles" / f"{bundle['slug']}.xml"
        with open(rss_path, "w") as fh:
            fh.write(rss)


@cli.command()
def opml():
    """Create an OPML file with all site feeds."""
    # Get a list of all sites
    site_list = utils.get_site_list()

    # Create an OPML that collects them all
    template = TEMPLATE_ENV.get_template("sites.opml.tmpl")
    opml = template.render(site_list=site_list)

    # Write it out
    click.echo("Writing OPML file for sites")
    with open(RSS_DIR / "sites" / "opml.xml", "w") as fh:
        fh.write(opml)


@cli.command()
def sites():
    """Create site feeds."""
    # Get the current time
    now = datetime.now(pytz.utc)

    # Get a list of all sites
    site_list = utils.get_site_list()

    # Set our output directory
    SITE_DIR = RSS_DIR / "sites"

    # Get the template for the site feed
    template = TEMPLATE_ENV.get_template("site.rss.tmpl")

    # Loop through all sites
    for site in site_list:
        handle = site["handle"].lower()
        click.echo(f"Building RSS for {handle}")

        # Render the page
        rss = template.render(
            now=now,
            obj=site,
            file_list=utils.get_screenshots_by_site(site)[:25],
        )

        # Write it out
        rss_path = SITE_DIR / f"{handle}.xml"
        with open(rss_path, "w") as fh:
            fh.write(rss)

    # Create full feed
    final_list = []
    for file_ in utils.get_screenshot_list()[:100]:
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
    click.echo("Writing out RSS feed of latest screenshots across all sites")
    with open(SITE_DIR / "all.xml", "w") as fh:
        fh.write(all_)


if __name__ == "__main__":
    cli()
