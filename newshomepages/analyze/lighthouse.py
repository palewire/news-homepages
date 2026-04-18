from pathlib import Path

import click
import pandas as pd
from rich import print

from .. import utils


@click.group()
def cli():
    """Analyze Lighthouse reports."""


@cli.command()
@click.option("-o", "--output-dir", "output_dir", default="./")
def lighthouse(output_dir: str = "./"):
    """Analyze Lighthouse scores."""
    print(":abacus: Analyzing Lighthouse scores")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Read in our seven day sample for all sites
    df = utils.get_extract_df(
        "lighthouse-sample.csv",
        usecols=[
            "handle",
            "file_name",
            "date",
            "performance",
            "accessibility",
            "seo",
            "best_practices",
        ],
        dtype={
            "handle": str,
            "file_name": str,
            "performance": float,
            "accessibility": float,
            "seo": float,
            "best_practices": float,
        },
        parse_dates=["date"],
    )

    # Exclude null scores
    notnull_df = df[~pd.isnull(df.performance)].copy()

    # Exclude any sites with less than 10 observations
    observations_by_site = notnull_df.groupby("handle").size().rename("n").reset_index()
    not_qualified = observations_by_site[observations_by_site.n < 10]
    qualified_df = notnull_df[~notnull_df.handle.isin(not_qualified.handle)].copy()

    # Exclude blacklisted sites
    blacklist = ["tass_agency"]
    qualified_df = qualified_df[~qualified_df.handle.isin(blacklist)].copy()

    # Aggregate descriptive statistics for each metric
    stats_list = ["count", "median", "mean", "min", "max", "std"]
    agg_df = qualified_df.groupby("handle").agg(
        dict(
            performance=stats_list,
            accessibility=stats_list,
            seo=stats_list,
            best_practices=stats_list,
        )
    )

    # Flatten the dataframe
    flat_df = agg_df.copy()
    flat_df.columns = ["_".join(col) for col in flat_df.columns]

    # Classify scores
    flat_df["performance_color"] = flat_df.performance_median.apply(_color_code)
    flat_df["accessibility_color"] = flat_df.accessibility_median.apply(_color_code)
    flat_df["seo_color"] = flat_df.seo_median.apply(_color_code)
    flat_df["best_practices_color"] = flat_df.best_practices_median.apply(_color_code)

    # Rank scores
    flat_df["performance_rank"] = flat_df.performance_median.rank(
        ascending=False, method="min"
    )
    flat_df["accessibility_rank"] = flat_df.accessibility_median.rank(
        ascending=False, method="min"
    )
    flat_df["seo_rank"] = flat_df.seo_median.rank(ascending=False, method="min")
    flat_df["best_practices_rank"] = flat_df.best_practices_median.rank(
        ascending=False, method="min"
    )

    # Write the results
    output_list = flat_df.reset_index().to_dict(orient="records")
    utils.write_csv(output_list, output_path / "lighthouse-analysis.csv")


def _color_code(val):
    """Return the classification of a metric according to Google's system.

    Source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/
    """
    if val >= 0.9:
        return "green"
    if val >= 0.5:
        return "orange"
    return "red"
