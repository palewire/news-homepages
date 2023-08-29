import json
import warnings
from pathlib import Path

import click
import jinja2
import numpy as np
import pandas as pd
import spectra
from rich import print
from rich.progress import track
from slugify import slugify

from . import utils

PARENT_DIR = Path(__file__).parent.parent
TEMPLATE_DIR = PARENT_DIR / "_site" / "_templates/"
TEMPLATE_LOADER = jinja2.FileSystemLoader(searchpath=TEMPLATE_DIR)
TEMPLATE_ENV = jinja2.Environment(loader=TEMPLATE_LOADER)
CHARTS_DIR = utils.SITE_DIR / "_static" / "charts"


@click.group(chain=True)
def cli():
    """Update templated documentation pages."""
    pass


@cli.command()
def latest_screenshots():
    """Create page showing all of the latest screenshots."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())
    print(f":camera: Creating latest screenshots page with {len(site_list)} sites")
    _write_template("latest.md", dict(site_list=site_list))


@cli.command()
def drudge():
    """Create page ranking sites by appearance on drudgereport.com."""
    print(":abacus: Creating Drudge Dashboard")

    # Get the data
    links_df = utils.get_extract_df(
        "drudge-hyperlinks-analysis.csv",
        usecols=[
            "domain",
            "text",
            "url",
            "earliest_date",
            "is_story",
        ],
        dtype={
            "domain": str,
            "text": str,
            "url": str,
            "is_story": bool,
        },
        parse_dates=["earliest_date"],
    )
    entity_df = utils.get_extract_df("drudge-entities-analysis.csv")

    # Filter links down to stories
    story_df = links_df[links_df.is_story]
    assert len(story_df.url.unique()) == len(story_df)

    # Total up domains
    domain_df = (
        story_df.groupby("domain")
        .size()
        .rename("n")
        .reset_index()
        .sort_values("n", ascending=False)
    )
    domain_df["percent"] = round((domain_df.n / domain_df.n.sum()) * 100, 1)

    # Daily totals
    date_totals = (
        story_df.groupby("earliest_date")
        .size()
        .rename("n")
        .reset_index()
        .sort_values("earliest_date")
        .set_index("earliest_date")
    )

    # Fill in empty days
    date_range = pd.date_range(
        story_df.earliest_date.min(),
        story_df.earliest_date.max(),
        freq="D",
    )
    date_index = pd.DatetimeIndex(date_range)
    backfilled_df = (
        date_totals.reindex(date_index)
        .reset_index()
        .rename(columns={"index": "date"})
        .sort_values("date")
    )
    backfilled_df.n.fillna(0, inplace=True)

    # Calculate rolling average
    backfilled_df["7_day_rolling_average"] = backfilled_df.n.rolling(7).mean()

    # Cut empty lines at the start and the most recent (often incomplete) date at the end
    backfilled_df = backfilled_df[
        (~pd.isnull(backfilled_df["7_day_rolling_average"]))
        & (backfilled_df.date < backfilled_df.date.max())
    ]

    # Format for JSON
    chart_list = backfilled_df.to_dict(orient="records")
    for d in chart_list:
        d["date"] = d["date"].strftime("%Y-%m-%d")

    # Get the overall trend
    links_per_day = backfilled_df.n.mean()

    # Rank
    domain_df["rank"] = domain_df.n.rank(ascending=False, method="min").astype(int)
    entity_df["rank"] = entity_df.n.rank(ascending=False, method="min").astype(int)

    # Create the page
    context = dict(
        total_sites=len(domain_df),
        total_urls=domain_df.n.sum(),
        days=len(links_df.groupby("earliest_date").url.size()),
        chart_json=json.dumps(chart_list),
        links_per_day=links_per_day,
        site_list=domain_df.sort_values("n", ascending=False)
        .head(25)
        .to_dict(orient="records"),
        entity_list=entity_df.sort_values("n", ascending=False).to_dict(
            orient="records"
        ),
        min_date=story_df.earliest_date.min(),
        max_date=story_df.earliest_date.max(),
    )
    _write_template("drudge.md", context)

    # Make a mini chart for each entity
    print(":abacus: Creating Drudge Dashboard images")

    # Convert the data to something we can use
    dict_list = entity_df.to_dict(orient="records")
    for d in dict_list:
        d["timeseries"] = json.loads(d["timeseries"])[6:]
        d["max_n"] = max(o["7_day_rolling_average"] for o in d["timeseries"])

    # Set the color scale
    color_scale = spectra.scale(["#dddddd", "#000000"])

    # Set the data scale. I'm going to put my finger on the scale.
    max_n = 3

    # Set colors
    for d in dict_list:
        for t in d["timeseries"]:
            if t["7_day_rolling_average"] > max_n:
                n_scaled = 1
            else:
                n_scaled = t["7_day_rolling_average"] / max_n
            t["color"] = color_scale(n_scaled).hexcode

    # Create the chart files
    out_dir = CHARTS_DIR / "drudge" / "top-words"
    out_dir.mkdir(parents=True, exist_ok=True)
    for d in track(dict_list):
        _write_template(
            "drudge-top-words.svg", dict(obj=d), out_dir / f"{d['lemma'].lower()}.svg"
        )


@cli.command()
def accessibility_ranking():
    """Create page ranking sites by Lighthouse accessibility score."""
    # Get the data
    accessibility_df = utils.get_extract_df(
        "lighthouse-analysis.csv",
        usecols=[
            "handle",
            "accessibility_median",
            "accessibility_color",
            "accessibility_rank",
        ],
        dtype={
            "handle": str,
            "accessibility_median": float,
            "accessibility_color": str,
            "accessibility_rank": float,
        },
    )

    # Filter out nulls
    accessibility_df = accessibility_df[
        ~pd.isnull(accessibility_df.accessibility_median)
    ].copy()

    # Calculate the grand total
    median = accessibility_df.accessibility_median.median() * 100

    # Generate a distribution for our chart
    def _round(val):
        return np.floor(np.floor(val * 1000) / 100) * 10

    accessibility_df[
        "accessibility_decile"
    ] = accessibility_df.accessibility_median.apply(_round)
    histogram_df = accessibility_df.accessibility_decile.value_counts().reset_index()
    histogram_df["accessibility_decile"] = histogram_df["accessibility_decile"].astype(
        int
    )
    histogram_df = histogram_df.merge(
        pd.DataFrame(range(0, 101, 10), columns=["accessibility_decile"]),
        how="right",
        on="accessibility_decile",
    ).fillna(0)

    # Prep the ranking
    accessibility_df.accessibility_median = accessibility_df.accessibility_median * 100
    accessibility_df.accessibility_median = (
        accessibility_df.accessibility_median.astype(int)
    )
    site_df = utils.get_site_df()
    site_df.handle = site_df.handle.str.lower()
    accessibility_df.handle = accessibility_df.handle.str.lower()
    merged_df = site_df.merge(accessibility_df, on="handle", how="inner")

    # Create the page
    print(
        f":abacus: Creating accessibility ranking page for {len(merged_df)} qualified sites"
    )
    context = dict(
        median=median,
        histogram_json=json.dumps(histogram_df.to_dict(orient="records")),
        site_list=merged_df.sort_values(["accessibility_rank", "name"]).to_dict(
            orient="records"
        ),
    )
    _write_template("accessibility.md", context)


@cli.command()
def performance_ranking():
    """Create page ranking sites by Lighthouse performance score."""
    # Read in our dataset
    performance_df = utils.get_extract_df(
        "lighthouse-analysis.csv",
        usecols=[
            "handle",
            "performance_median",
            "performance_color",
            "performance_rank",
        ],
        dtype={
            "handle": str,
            "performance_median": float,
            "performance_color": str,
            "performance_rank": float,
        },
    )

    # Filter out nulls
    performance_df = performance_df[
        ~pd.isnull(performance_df.performance_median)
    ].copy()

    # Calculate the grand total
    median = performance_df.performance_median.median() * 100

    # Generate a distribution for our chart
    def _round(val):
        return np.floor(np.floor(val * 1000) / 100) * 10

    performance_df["performance_decile"] = performance_df.performance_median.apply(
        _round
    )
    histogram_df = performance_df.performance_decile.value_counts().reset_index()
    histogram_df["performance_decile"] = histogram_df["performance_decile"].astype(int)
    histogram_df = histogram_df.merge(
        pd.DataFrame(range(0, 101, 10), columns=["performance_decile"]),
        how="right",
        on="performance_decile",
    ).fillna(0)

    # Prep the ranking table
    performance_df.performance_median = performance_df.performance_median * 100
    performance_df.performance_median = performance_df.performance_median.astype(int)
    site_df = utils.get_site_df()
    site_df.handle = site_df.handle.str.lower()
    performance_df.handle = performance_df.handle.str.lower()
    merged_df = site_df.merge(performance_df, on="handle", how="inner")

    # Create the page
    site_list = merged_df.sort_values(["performance_rank", "name"]).to_dict(
        orient="records"
    )
    print(
        f":abacus: Creating performance ranking page for {len(site_list)} qualified sites"
    )
    context = dict(
        median=median,
        histogram_json=json.dumps(histogram_df.to_dict(orient="records")),
        site_list=site_list,
    )
    _write_template("performance.md", context)


@cli.command()
def source_list():
    """Create source list."""
    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"].lower())
    print(":newspaper: Creating site list page")
    _write_template("sources.md", dict(site_list=site_list))


@cli.command()
def bundle_list():
    """Create bundle list."""
    bundle_list = sorted(utils.get_bundle_list(), key=lambda x: x["name"].lower())
    print(":basket: Creating bundle list page")
    _write_template("bundles.md", dict(bundle_list=bundle_list))


@cli.command()
def country_list():
    """Create country list."""
    country_list = utils.get_country_list()
    for c in country_list:
        c["site_list"] = utils.get_sites_in_country(c["alpha2"])
    print("🗺️ Creating country list page")
    _write_template(
        "countries.md",
        dict(
            has_list=[c for c in country_list if len(c["site_list"])],
            hasnot_list=[c for c in country_list if not len(c["site_list"])],
        ),
    )


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
        _write_template("bundle_detail.md", context, f"bundles/{bundle['slug']}.md")


@cli.command()
def country_detail():
    """Create country detail pages."""
    country_list = utils.get_country_list()
    print(f"🗺️ Creating {len(country_list)} country detail pages")

    # For each site ...
    for obj in track(country_list):
        site_list = utils.get_sites_in_country(obj["alpha2"])
        if not len(site_list):
            continue
        context = {
            "country": obj,
            "site_list": sorted(site_list, key=lambda x: x["name"].lower()),
        }
        _write_template(
            "country_detail.md", context, f"countries/{obj['alpha2'].lower()}.md"
        )


@cli.command()
def language_detail():
    """Create languages detail pages."""
    language_list = utils.get_language_list()
    print(f"🗣️ Creating {len(language_list)} language detail pages")

    # For each site ...
    for obj in track(language_list):
        site_list = utils.get_sites_in_language(obj["part1"])
        if not len(site_list):
            continue
        context = {
            "language": obj,
            "site_list": sorted(site_list, key=lambda x: x["name"].lower()),
        }
        _write_template(
            "language_detail.md", context, f"languages/{obj['part1'].lower()}.md"
        )


@cli.command()
def site_detail():
    """Create source detail pages."""
    # Get all sites
    site_list = utils.get_site_list()
    print(f":newspaper: Creating {len(site_list)} site detail pages")

    # Get all screenshots and items
    lighthouse_analysis_df = utils.get_extract_df("lighthouse-analysis.csv")
    screenshot_df = utils.get_screenshot_df()
    hyperlink_df = utils.get_hyperlink_df()
    accessibility_df = utils.get_accessibility_df()
    lighthouse_df = utils.get_lighthouse_df()
    item_df = utils.get_extract_df("items.csv", dtype=str)

    print(screenshot_df.info())

    # For each site ...
    for site in track(site_list):
        print(f"Building page for {site['handle']}")

        # Get all the bundles linked to this site
        site["bundle_list"] = [utils.get_bundle(b) for b in site["bundle_list"] if b]

        # Get lighthouse analysis for this site
        lighthouse_analysis = lighthouse_analysis_df[
            lighthouse_analysis_df.handle.str.lower() == site["handle"].lower()
        ]
        if len(lighthouse_analysis):
            lighthouse_summary = lighthouse_analysis.to_dict(orient="records")[0]
        else:
            lighthouse_summary = None

        # Get the screenshots for this site
        screenshots = screenshot_df[
            (screenshot_df.handle.str.lower() == site["handle"].lower())
            & (screenshot_df["type"] == "cropped")
        ]
        most_recent_screenshots = screenshots.sort_values(
            "mtime", ascending=False
        ).head(12)
        most_recent_screenshots[
            "local_time"
        ] = most_recent_screenshots.mtime.dt.tz_convert(site["timezone"])

        # Get the hyperlinks for this site
        hyperlinks = hyperlink_df[
            hyperlink_df.handle.str.lower() == site["handle"].lower()
        ]
        most_recent_hyperlinks = hyperlinks.sort_values("mtime", ascending=False).head(
            10
        )
        most_recent_hyperlinks[
            "local_time"
        ] = most_recent_hyperlinks.mtime.dt.tz_convert(site["timezone"])

        # Get the accessibility for this site
        accessibility = accessibility_df[
            accessibility_df.handle.str.lower() == site["handle"].lower()
        ]
        most_recent_accessibility = accessibility.sort_values(
            "mtime", ascending=False
        ).head(10)
        most_recent_accessibility[
            "local_time"
        ] = most_recent_accessibility.mtime.dt.tz_convert(site["timezone"])

        # Get the lighthouse for this site
        lighthouse = lighthouse_df[
            lighthouse_df.handle.str.lower() == site["handle"].lower()
        ]
        most_recent_lighthouse = lighthouse.sort_values("mtime", ascending=False).head(
            10
        )
        most_recent_lighthouse[
            "local_time"
        ] = most_recent_lighthouse.mtime.dt.tz_convert(site["timezone"])

        # Render the template
        context = {
            "site": site,
            "lighthouse_summary": lighthouse_summary,
            "screenshots": len(screenshots),
            "most_recent_screenshots": most_recent_screenshots.to_dict(
                orient="records"
            ),
            "hyperlinks": len(hyperlinks),
            "most_recent_hyperlinks": most_recent_hyperlinks.to_dict(orient="records"),
            "accessibility": len(accessibility),
            "most_recent_accessibility": most_recent_accessibility.to_dict(
                orient="records"
            ),
            "lighthouse": len(lighthouse),
            "most_recent_lighthouse": most_recent_lighthouse.to_dict(orient="records"),
            "items": item_df[
                item_df.handle.str.lower() == site["handle"].lower()
            ].to_dict(orient="records"),
        }
        _write_template("site_detail.md", context, f"sites/{site['handle'].lower()}.md")


@cli.command()
def site_detail_lighthouse_analysis_chart():
    """Create the JSON data file for the site detail page's lighthouse analysis chart."""
    # Get all sites
    site_list = utils.get_site_list()
    print(
        f":bar_chart: Creating lighthouse analysis chart JSON files for {len(site_list)} site detail pages"
    )

    # Get lighthouse data we need
    lighthouse_sample_df = utils.get_extract_df(
        "lighthouse-sample.csv",
        parse_dates=["date"],
    ).drop(["identifier", "file_name", "pwa"], axis=1)
    lighthouse_sample_df.handle = lighthouse_sample_df.handle.str.lower()

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = CHARTS_DIR / "sites" / "lighthouse-analysis"
    out_dir.mkdir(parents=True, exist_ok=True)

    def color_code(val):
        """Return the classification of a metric according to Google's system.

        Source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/
        """
        if val >= 0.9:
            return "green"
        elif val >= 0.5:
            return "orange"
        else:
            return "red"

    # Loop through all sites
    for site in track(site_list):
        # Get the lighthouse runs for this site
        handle = site["handle"].lower()
        site_df = lighthouse_sample_df[lighthouse_sample_df.handle == handle].copy()

        # If there's nothing there, skip it
        if not len(site_df):
            continue

        # Do the math
        chart_df = (
            site_df.set_index(["handle", "date"])
            .stack()
            .reset_index()
            .rename(columns={0: "value", "level_2": "metric"})
        )
        chart_df["color"] = chart_df.value.apply(color_code)
        chart_df.value = chart_df.value * 100
        chart_df.metric = (
            chart_df.metric.str.capitalize().str.replace("_", " ").replace("Seo", "SEO")
        )

        # Write it out
        _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


@cli.command()
def site_detail_screenshot_chart():
    """Create the JSON data file for the site detail page's screenshots chart."""
    # Get all sites
    site_list = utils.get_site_list()
    print(
        f":bar_chart: Creating screenshot chart JSON files for {len(site_list)} site detail pages"
    )

    # Get all screenshots
    screenshots_df = utils.get_screenshot_df()

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = CHARTS_DIR / "sites" / "screenshots"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Loop through all sites
    for site in track(site_list):
        # Get the screenshots for this site
        site_df = screenshots_df[
            (screenshots_df.handle.str.lower() == site["handle"].lower())
            & (screenshots_df["type"] == "cropped")
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
    hyperlinks_df = utils.get_hyperlink_df()

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = CHARTS_DIR / "sites" / "hyperlinks"
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
    accessibility_df = utils.get_accessibility_df()

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = CHARTS_DIR / "sites" / "accessibility"
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
    lighthouse_df = utils.get_lighthouse_df()

    # Ignore pandas warnings
    warnings.filterwarnings("ignore")

    # Make the out directory
    out_dir = CHARTS_DIR / "sites" / "lighthouse"
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


def _write_template(template_name, context, output_name=None):
    template = TEMPLATE_ENV.get_template(f"{template_name}.tmpl")
    md = template.render(**context)
    output_path = PARENT_DIR / "_site" / (output_name or template_name)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w") as fh:
        fh.write(md)


def _write_chart_json(df, path):
    # Format the date for JSON
    df["date"] = df["date"].dt.strftime("%Y-%m-%d")

    # Write it out
    path.parent.mkdir(parents=True, exist_ok=True)
    df.to_json(path, indent=2, orient="records")


if __name__ == "__main__":
    cli()
