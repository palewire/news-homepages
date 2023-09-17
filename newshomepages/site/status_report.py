import json

import click
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create a status report."""
    pass


@cli.command()
def status_report():
    """Create a status report."""
    print("📊 Creating status report")

    # Get all screenshots
    screenshot_df = utils.get_screenshot_df()

    # When did we start taking screenshots?
    start_date = screenshot_df["date"].min()

    # Get the total number of sites
    total_sites = len(screenshot_df.handle.unique())

    # Get the total number of screenshots
    cropped_screenshots = screenshot_df[screenshot_df["type"] == "cropped"]
    total_cropped_screenshots = len(cropped_screenshots)

    # Get the total number of full screenshots
    full_screenshots = screenshot_df[screenshot_df["type"] == "fullpage"]
    total_full_screenshots = len(full_screenshots)

    # Get the number of sites archived by date
    sites_by_date = (
        cropped_screenshots[["date", "handle"]]
        .drop_duplicates()
        .groupby("date")
        .size()
        .rename("sites")
        .reset_index()
        .sort_values("date")
    )

    # Get the number of screenshots archived by date
    cropped_screenshots_by_date = (
        cropped_screenshots.groupby("date")
        .size()
        .rename("cropped_screenshots")
        .reset_index()
        .sort_values("date")
    )

    # The same for full screenshots
    full_screenshots_by_date = (
        full_screenshots.groupby("date")
        .size()
        .rename("full_screenshots")
        .reset_index()
        .sort_values("date")
    )

    # Get all of our lighthouse data
    lighthouse_df = utils.get_lighthouse_df()
    total_lighthouse = len(lighthouse_df)

    # Get the number of sites with lighthouse data by date
    lighthouse_by_date = (
        lighthouse_df.groupby("date")
        .size()
        .rename("lighthouse")
        .reset_index()
        .sort_values("date")
    )

    # Get all of the accessibility trees
    accessibility_df = utils.get_accessibility_df()
    total_accessibility = len(accessibility_df)

    # Get the number of sites with accessibility data by date
    accessibility_by_date = (
        accessibility_df.groupby("date")
        .size()
        .rename("accessibility")
        .reset_index()
        .sort_values("date")
    )

    # Get all of the hyperlink data
    hyperlink_df = utils.get_hyperlink_df()
    total_hyperlinks = len(hyperlink_df)

    # Get the number of sites with hyperlink data by date
    hyperlink_by_date = (
        hyperlink_df.groupby("date")
        .size()
        .rename("hyperlinks")
        .reset_index()
        .sort_values("date")
    )

    # Get all of the robotstxt data
    robotstxt_df = utils.get_robotstxt_df()
    total_robotstxt = len(robotstxt_df)

    # Get the number of sites with robotstxt data by date
    robotstxt_by_date = (
        robotstxt_df.groupby("date")
        .size()
        .rename("robotstxt")
        .reset_index()
        .sort_values("date")
    )

    # Get all of the wayback data
    wayback_df = utils.get_wayback_df()
    total_wayback = len(wayback_df)

    # Get the number of sites with wayback data by date
    wayback_by_date = (
        wayback_df.groupby("date")
        .size()
        .rename("wayback")
        .reset_index()
        .sort_values("date")
    )

    # Merge all of the dataframes on date
    df = sites_by_date.merge(cropped_screenshots_by_date, on="date", how="outer")
    df = df.merge(full_screenshots_by_date, on="date", how="outer")
    df = df.merge(lighthouse_by_date, on="date", how="outer")
    df = df.merge(accessibility_by_date, on="date", how="outer")
    df = df.merge(hyperlink_by_date, on="date", how="outer")
    df = df.merge(robotstxt_by_date, on="date", how="outer")
    df = df.merge(wayback_by_date, on="date", how="outer")

    # Slice off the final two days, which are incomplete
    df = df[:-2]

    # Fill in any missing values
    df = df.fillna(0)

    # Convert date columns to strings
    df["date"] = df.date.dt.strftime("%Y-%m-%d")

    # Sum up all fields other than date across all columns and rows
    grand_total = df.set_index("date").sum().sum()

    # Pass the data to our template context
    context = {
        "start_date": start_date.strftime("%B %d, %Y"),
        "grand_total": grand_total,
        "total_sites": total_sites,
        "total_cropped_screenshots": total_cropped_screenshots,
        "total_full_screenshots": total_full_screenshots,
        "total_lighthouse": total_lighthouse,
        "total_accessibility": total_accessibility,
        "total_hyperlinks": total_hyperlinks,
        "total_robotstxt": total_robotstxt,
        "total_wayback": total_wayback,
        "by_date_json": json.dumps(df.to_dict(orient="records")),
    }

    # Write the template
    _write_template("status-report.md", context)


if __name__ == "__main__":
    cli()
