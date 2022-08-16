import click
import pandas as pd
from rich import print

from . import utils


@click.group()
def cli():
    """Analyze our data extracts."""
    pass


@cli.command()
def lighthouse():
    """Analyze Lighthouse scores."""
    print(":abacus: Analyzing Lighthouse scores")

    # Read in our seven day sample for all sites
    df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "lighthouse-sample.csv",
        usecols=[
            "handle",
            "file_name",
            "date",
            "performance",
            "accessibility",
        ],
        dtype={
            "handle": str,
            "file_name": str,
            "performance": float,
            "accessibility": float,
        },
        parse_dates=["date"],
    )

    # Exclude null scores
    notnull_df = df[~pd.isnull(df.performance)].copy()

    # Exclude any sites with less than 10 observations
    observations_by_site = notnull_df.groupby("handle").size().rename("n").reset_index()
    not_qualified = observations_by_site[observations_by_site.n < 10]
    qualified_df = notnull_df[~notnull_df.handle.isin(not_qualified.handle)].copy()

    # Aggregate descriptive statistics for each metric
    agg_df = qualified_df.groupby("handle").agg(
        {
            "performance": ["count", "median", "mean", "min", "max", "std"],
            "accessibility": ["count", "median", "mean", "min", "max", "std"],
        }
    )

    # Flatten the dataframe
    flat_df = agg_df.copy()
    flat_df.columns = ["_".join(col) for col in flat_df.columns]

    # Classify scores
    flat_df["performance_color"] = flat_df.performance_median.apply(_color_code)
    flat_df["accessibility_color"] = flat_df.accessibility_median.apply(_color_code)

    # Rank scores
    flat_df["performance_rank"] = flat_df.performance_median.rank(
        ascending=False, method="min"
    )
    flat_df["accessibility_rank"] = flat_df.accessibility_median.rank(
        ascending=False, method="min"
    )

    # Write the results
    output_path = utils.EXTRACT_DIR / "csv" / "lighthouse-analysis.csv"
    print(f":pencil: Writing to {output_path}")
    flat_df.reset_index().to_csv(output_path, index=False)


def _color_code(val):
    """Return the classification of a metric according to Google's system.

    Source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/
    """
    if val >= 0.9:
        return "green"
    elif val >= 0.5:
        return "orange"
    else:
        return "red"


if __name__ == "__main__":
    cli()
