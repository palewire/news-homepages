import json

import click
import numpy as np
import pandas as pd
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create page ranking sites by Lighthouse accessibility score."""
    pass


# Generate a distribution for our chart
def _round(val: float) -> int:
    return int(np.floor(np.floor(val * 1000) / 100) * 10)


@cli.command()
def accessibility_ranking():
    """Create page ranking sites by Lighthouse accessibility score."""
    # Get the data
    accessibility_df = utils.get_extract_df(
        "lighthouse-analysis.csv",
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

    # Convert rank to an integer
    accessibility_df.accessibility_rank = accessibility_df.accessibility_rank.astype(
        int
    )

    # Calculate the grand total
    median = accessibility_df.accessibility_median.median() * 100

    accessibility_df[
        "accessibility_decile"
    ] = accessibility_df.accessibility_median.apply(_round)
    histogram_df = (
        accessibility_df.groupby("accessibility_decile")
        .size()
        .rename("n")
        .reset_index()
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
