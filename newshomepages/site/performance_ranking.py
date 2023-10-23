import json

import click
import numpy as np
import pandas as pd
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create page ranking sites by Lighthouse performance score."""
    pass


@cli.command()
def performance_ranking():
    """Create page ranking sites by Lighthouse performance score."""
    # Read in our dataset
    performance_df = utils.get_extract_df(
        "lighthouse-analysis.csv",
        dtype={
            "handle": str,
            "performance_median": float,
            "performance_color": str,
            "performance_rank": float,
        },
    )

    # Convert the rank to an integer
    performance_df.performance_rank = performance_df.performance_rank.astype(int)

    # Filter out nulls
    performance_df = performance_df[
        ~pd.isnull(performance_df.performance_median)
    ].copy()

    # Calculate the grand total
    median = performance_df.performance_median.median() * 100

    # Generate a distribution for our chart
    def _round(val: float) -> int:
        return int(np.floor(np.floor(val * 1000) / 100) * 10)

    performance_df["performance_decile"] = performance_df.performance_median.apply(
        _round
    )
    histogram_df = (
        performance_df.groupby("performance_decile").size().rename("n").reset_index()
    )
    histogram_df = histogram_df.merge(
        pd.DataFrame(range(0, 101, 10), columns=["performance_decile"]),
        how="right",
        on="performance_decile",
    ).fillna(0)

    # Prep the ranking table
    performance_df.performance_median = performance_df.performance_median * 100
    performance_df.performance_median = performance_df.performance_median.astype(int)
    site_df = utils.get_site_df()
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
