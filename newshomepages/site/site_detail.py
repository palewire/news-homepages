import click
from rich import print
from rich.progress import track

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create source detail pages."""
    pass


@cli.command()
def site_detail():
    """Create source detail pages."""
    # Get all sites
    site_list = utils.get_site_list()
    print(f":newspaper: Creating {len(site_list)} site detail pages")

    # Get all screenshots and items
    # lighthouse_analysis_df = utils.get_extract_df("lighthouse-analysis.csv")
    # screenshot_df = utils.get_screenshot_df()
    # hyperlink_df = utils.get_hyperlink_df()
    # accessibility_df = utils.get_accessibility_df()
    # lighthouse_df = utils.get_lighthouse_df()
    # item_df = utils.get_extract_df("items.csv", dtype=str)

    # For each site ...
    for site in track(site_list):
        # Get all the bundles linked to this site
        site["bundle_list"] = [utils.get_bundle(b) for b in site["bundle_list"] if b]

        # # Get lighthouse analysis for this site
        # lighthouse_analysis = lighthouse_analysis_df[
        #     lighthouse_analysis_df.handle.str.lower() == site["handle"].lower()
        # ]
        # if len(lighthouse_analysis):
        #     lighthouse_summary = lighthouse_analysis.to_dict(orient="records")[0]
        # else:
        #     lighthouse_summary = None

        # # Get the screenshots for this site
        # screenshots = screenshot_df[
        #     (screenshot_df.handle.str.lower() == site["handle"].lower())
        #     & (screenshot_df["type"] == "cropped")
        # ]
        # most_recent_screenshots = screenshots.sort_values(
        #     "mtime", ascending=False
        # ).head(12)
        # most_recent_screenshots[
        #     "local_time"
        # ] = most_recent_screenshots.mtime.dt.tz_convert(site["timezone"])

        # # Get the hyperlinks for this site
        # hyperlinks = hyperlink_df[
        #     hyperlink_df.handle.str.lower() == site["handle"].lower()
        # ]
        # most_recent_hyperlinks = hyperlinks.sort_values("mtime", ascending=False).head(
        #     10
        # )
        # most_recent_hyperlinks[
        #     "local_time"
        # ] = most_recent_hyperlinks.mtime.dt.tz_convert(site["timezone"])

        # # Get the accessibility for this site
        # accessibility = accessibility_df[
        #     accessibility_df.handle.str.lower() == site["handle"].lower()
        # ]
        # most_recent_accessibility = accessibility.sort_values(
        #     "mtime", ascending=False
        # ).head(10)
        # most_recent_accessibility[
        #     "local_time"
        # ] = most_recent_accessibility.mtime.dt.tz_convert(site["timezone"])

        # # Get the lighthouse for this site
        # lighthouse = lighthouse_df[
        #     lighthouse_df.handle.str.lower() == site["handle"].lower()
        # ]
        # most_recent_lighthouse = lighthouse.sort_values("mtime", ascending=False).head(
        #     10
        # )
        # most_recent_lighthouse[
        #     "local_time"
        # ] = most_recent_lighthouse.mtime.dt.tz_convert(site["timezone"])

        # Render the template
        context = {
            "site": site,
            # "lighthouse_summary": lighthouse_summary,
            # "screenshots": len(screenshots),
            # "most_recent_screenshots": most_recent_screenshots.to_dict(
            #     orient="records"
            # ),
            # "hyperlinks": len(hyperlinks),
            # "most_recent_hyperlinks": most_recent_hyperlinks.to_dict(orient="records"),
            # "accessibility": len(accessibility),
            # "most_recent_accessibility": most_recent_accessibility.to_dict(
            #     orient="records"
            # ),
            # "lighthouse": len(lighthouse),
            # "most_recent_lighthouse": most_recent_lighthouse.to_dict(orient="records"),
            # "items": item_df[
            #     item_df.handle.str.lower() == site["handle"].lower()
            # ].to_dict(orient="records"),
        }
        _write_template("site_detail.md", context, f"sites/{site['handle'].lower()}.md")


# @cli.command()
# def site_detail_lighthouse_analysis_chart():
#     """Create the JSON data file for the site detail page's lighthouse analysis chart."""
#     # Get all sites
#     site_list = utils.get_site_list()
#     print(
#         f":bar_chart: Creating lighthouse analysis chart JSON files for {len(site_list)} site detail pages"
#     )

#     # Get lighthouse data we need
#     lighthouse_sample_df = utils.get_extract_df(
#         "lighthouse-sample.csv",
#         parse_dates=["date"],
#     ).drop(["identifier", "file_name", "pwa"], axis=1)
#     lighthouse_sample_df.handle = lighthouse_sample_df.handle.str.lower()

#     # Ignore pandas warnings
#     warnings.filterwarnings("ignore")

#     # Make the out directory
#     out_dir = CHARTS_DIR / "sites" / "lighthouse-analysis"
#     out_dir.mkdir(parents=True, exist_ok=True)

#     def color_code(val):
#         """Return the classification of a metric according to Google's system.

#         Source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/
#         """
#         if val >= 0.9:
#             return "green"
#         elif val >= 0.5:
#             return "orange"
#         else:
#             return "red"

#     # Loop through all sites
#     for site in track(site_list):
#         # Get the lighthouse runs for this site
#         handle = site["handle"].lower()
#         site_df = lighthouse_sample_df[lighthouse_sample_df.handle == handle].copy()

#         # If there's nothing there, skip it
#         if not len(site_df):
#             continue

#         # Do the math
#         chart_df = (
#             site_df.set_index(["handle", "date"])
#             .stack()
#             .reset_index()
#             .rename(columns={0: "value", "level_2": "metric"})
#         )
#         chart_df["color"] = chart_df.value.apply(color_code)
#         chart_df.value = chart_df.value * 100
#         chart_df.metric = (
#             chart_df.metric.str.capitalize().str.replace("_", " ").replace("Seo", "SEO")
#         )

#         # Write it out
#         _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


# @cli.command()
# def site_detail_screenshot_chart():
#     """Create the JSON data file for the site detail page's screenshots chart."""
#     # Get all sites
#     site_list = utils.get_site_list()
#     print(
#         f":bar_chart: Creating screenshot chart JSON files for {len(site_list)} site detail pages"
#     )

#     # Get all screenshots
#     screenshots_df = utils.get_screenshot_df()

#     # Ignore pandas warnings
#     warnings.filterwarnings("ignore")

#     # Make the out directory
#     out_dir = CHARTS_DIR / "sites" / "screenshots"
#     out_dir.mkdir(parents=True, exist_ok=True)

#     # Loop through all sites
#     for site in track(site_list):
#         # Get the screenshots for this site
#         site_df = screenshots_df[
#             (screenshots_df.handle.str.lower() == site["handle"].lower())
#             & (screenshots_df["type"] == "cropped")
#         ]

#         # Do the math
#         chart_df = _count_by_date(site_df, "screenshots")

#         # Write it out
#         _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


# @cli.command()
# def site_detail_hyperlink_chart():
#     """Create the JSON data file for the site detail page's hyperlinks chart."""
#     # Get all sites
#     site_list = utils.get_site_list()
#     print(
#         f":link: Creating hyperlinks chart JSON files for {len(site_list)} site detail pages"
#     )

#     # Get all screenshots
#     hyperlinks_df = utils.get_hyperlink_df()

#     # Ignore pandas warnings
#     warnings.filterwarnings("ignore")

#     # Make the out directory
#     out_dir = CHARTS_DIR / "sites" / "hyperlinks"
#     out_dir.mkdir(parents=True, exist_ok=True)

#     # Loop through all sites
#     for site in track(site_list):
#         # Get the screenshots for this site
#         site_df = hyperlinks_df[
#             hyperlinks_df.handle.str.lower() == site["handle"].lower()
#         ]

#         # Do the math
#         chart_df = _count_by_date(site_df, "hyperlinks")

#         # Write it out
#         _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


# @cli.command()
# def site_detail_accessibility_chart():
#     """Create the JSON data file for the site detail page's accessibility chart."""
#     # Get all sites
#     site_list = utils.get_site_list()
#     print(
#         f":wheelchair: Creating accessibility chart JSON files for {len(site_list)} site detail pages"
#     )

#     # Get all accessibility files
#     accessibility_df = utils.get_accessibility_df()

#     # Ignore pandas warnings
#     warnings.filterwarnings("ignore")

#     # Make the out directory
#     out_dir = CHARTS_DIR / "sites" / "accessibility"
#     out_dir.mkdir(parents=True, exist_ok=True)

#     # Loop through all sites
#     for site in track(site_list):
#         # Get the screenshots for this site
#         site_df = accessibility_df[
#             accessibility_df.handle.str.lower() == site["handle"].lower()
#         ]

#         # Do the math
#         chart_df = _count_by_date(site_df, "accessibility")

#         # Write it out
#         _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")


# @cli.command()
# def site_detail_lighthouse_chart():
#     """Create the JSON data file for the site detail page's lighthouse chart."""
#     # Get all sites
#     site_list = utils.get_site_list()
#     print(
#         f":abacus: Creating lighthouse chart JSON files for {len(site_list)} site detail pages"
#     )

#     # Get all accessibility files
#     lighthouse_df = utils.get_lighthouse_df()

#     # Ignore pandas warnings
#     warnings.filterwarnings("ignore")

#     # Make the out directory
#     out_dir = CHARTS_DIR / "sites" / "lighthouse"
#     out_dir.mkdir(parents=True, exist_ok=True)

#     # Loop through all sites
#     for site in track(site_list):
#         # Get the screenshots for this site
#         site_df = lighthouse_df[
#             lighthouse_df.handle.str.lower() == site["handle"].lower()
#         ]

#         # Do the math
#         chart_df = _count_by_date(site_df, "lighthouse")

#         # Write it out
#         _write_chart_json(chart_df, out_dir / f"{site['handle'].lower()}.json")
