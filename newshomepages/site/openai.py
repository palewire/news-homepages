import click
import iso3166
import pandas as pd
from rich import print

from .. import utils
from .utils import _write_template


@click.group()
def cli():
    """Create the openai page based on most recently scrape robots.txt files."""
    pass


@cli.command()
def openai():
    """Create the openai page based on most recently scrape robots.txt files."""
    # Read in our dataset
    robotstxt_df = utils.get_extract_df(
        "robotstxt-sample.csv",
        usecols=[
            "handle",
            "url",
            "date",
            "user_agent",
            "rules",
        ],
        dtype={
            "handle": str,
            "url": str,
            "date": str,
            "user_agent": str,
            "rules": str,
        },
    )

    # Smooth out the handle for later joins
    robotstxt_df.handle = robotstxt_df.handle.str.lower()

    # Assert that only each handle has only one url
    assert robotstxt_df.groupby("handle").url.nunique().all() == 1

    # Create a white list of the AI-related bots we want to track
    ai_user_agents = [
        "GPTBOT",
        # "CHATGPT-USER",
        "CCBOT",
        "GOOGLE-EXTENDED",
    ]

    # Filter down to rules that make that list
    robotstxt_df.user_agent = robotstxt_df.user_agent.str.upper()
    ai_list = robotstxt_df[robotstxt_df.user_agent.isin(ai_user_agents)].copy()

    # Filter again to rules that DISALLOW: / the bots
    ai_list.rules = ai_list.rules.str.strip().str.upper()
    disallow_list = ai_list[ai_list.rules.str.startswith("DISALLOW: /")].copy()

    # Pivot the list so that the user_agent column becomes columns
    # and the rows are unique to each site
    disallow_pivot = disallow_list.pivot(
        index="handle", columns="user_agent", values="rules"
    ).reset_index()

    # Merge in site metadata
    site_df = utils.get_site_df()
    site_df.handle = site_df.handle.str.lower()
    merged_df = site_df[["name", "handle", "country"]].merge(
        disallow_pivot, on="handle", how="left"
    )
    assert len(merged_df) == len(site_df)

    # Merge back on the URL of the latest robots.txt file from the original dataframe
    merged_df = merged_df.merge(
        robotstxt_df[["handle", "url"]].drop_duplicates(),
        on="handle",
        how="inner",
    )

    # If the `name` field starts with "The ", move it to the end after a comma
    merged_df["name"] = merged_df.name.apply(
        lambda s: s if not s.startswith("The ") else s[4:] + ", The"
    )

    def flag_emoji(name):
        alpha = iso3166.countries.get(name).alpha2

        def box(ch):
            return chr(ord(ch) + 0x1F1A5)

        return box(alpha[0]) + box(alpha[1])

    # Add the flag emoji
    merged_df["flag"] = merged_df.country.apply(flag_emoji)

    # For each of the bots, count how many sites block it
    bot_counts = {}
    for bot in ai_user_agents:
        bot_counts[bot] = len(merged_df[~pd.isnull(merged_df[bot])])

    def has_any_bot(row):
        for bot in ai_user_agents:
            if not pd.isnull(row[bot]):
                return True
        return False

    # Get the total unique sites that block at least one of the bots
    disallow_count = len(merged_df[merged_df.apply(has_any_bot, axis=1)])

    # Get the percentage
    site_count = len(merged_df)
    disallow_percent = round(disallow_count / site_count * 100, 1)

    # Render the page
    context = dict(
        site_count=site_count,
        site_list=sorted(
            merged_df.fillna("").to_dict(orient="records"),
            key=lambda s: s["name"].lower(),
        ),
        disallow_count=disallow_count,
        disallow_percent=disallow_percent,
        bot_counts=bot_counts,
    )
    print(
        f":abacus: Creating openai-gptbot-robotstxt page for {len(merged_df.handle.unique())} sites"
    )
    _write_template(
        "openai-gptbot-robotstxt.md", context, output_name="openai-gptbot-robotstxt.md"
    )
