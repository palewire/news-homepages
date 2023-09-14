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
def _round(val):
    return np.floor(np.floor(val * 1000) / 100) * 10


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
