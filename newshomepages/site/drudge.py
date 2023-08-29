import json

import click
import pandas as pd
import spectra
from rich import print
from rich.progress import track

from .. import utils
from .utils import CHARTS_DIR, _write_template


@click.group()
def cli():
    """Create page ranking sites by appearance on drudgereport.com."""
    pass


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
