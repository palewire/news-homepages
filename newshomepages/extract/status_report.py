import json
from pathlib import Path

import click
from rich import print

from .. import utils


@click.group()
def cli():
    """Create a status report."""


@cli.command()
@click.option("-o", "--output-dir", "output_dir", default="./")
@click.option("-c", "--use-cache", "use_cache", is_flag=True, default=False)
def status_report(output_dir: str = "./", use_cache: bool = False):
    """Create a status report."""
    print("📊 Creating status report")

    # Get all screenshots
    screenshot_df = utils.get_screenshot_df(use_cache=use_cache, verbose=True)

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
    lighthouse_df = utils.get_lighthouse_df(use_cache=use_cache, verbose=True)
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
    accessibility_df = utils.get_accessibility_df(use_cache=use_cache, verbose=True)
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
    hyperlink_df = utils.get_hyperlink_df(use_cache=use_cache, verbose=True)
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
    robotstxt_df = utils.get_robotstxt_df(use_cache=use_cache, verbose=True)
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
    wayback_df = utils.get_wayback_df(use_cache=use_cache, verbose=True)
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
    print("🔗 Merging dataframes")
    df = sites_by_date.merge(cropped_screenshots_by_date, on="date", how="outer")
    df = df.merge(full_screenshots_by_date, on="date", how="outer")
    df = df.merge(lighthouse_by_date, on="date", how="outer")
    df = df.merge(accessibility_by_date, on="date", how="outer")
    df = df.merge(hyperlink_by_date, on="date", how="outer")
    df = df.merge(robotstxt_by_date, on="date", how="outer")
    df = df.merge(wayback_by_date, on="date", how="outer")

    print("📅 Formatting data")
    # Slice off the final two days, which are incomplete
    df = df[:-2]

    # Fill in any missing values
    df = df.fillna(0)

    # Convert date columns to strings
    df["date"] = df.date.dt.strftime("%Y-%m-%d")

    # Sum up all fields other than date across all columns and rows
    grand_total = df.set_index("date").sum().sum()

    print("📝 Writing template")
    # Pass the data to our template context
    data = {
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

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Write the result
    json_path = output_path / "status-report.json"
    print(f"Writing the result to {json_path}")
    with open(json_path, "w") as f:
        json.dump(data, f, indent=2)


if __name__ == "__main__":
    cli()
