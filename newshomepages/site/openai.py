import click
import iso3166
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

    # Assert that only each handle has only one url
    assert robotstxt_df.groupby("handle").url.nunique().all() == 1

    # Merge in site metadata
    site_df = utils.get_site_df()
    site_df.handle = site_df.handle.str.lower()
    robotstxt_df.handle = robotstxt_df.handle.str.lower()
    merged_df = site_df[["name", "handle", "country"]].merge(
        robotstxt_df, on="handle", how="inner"
    )

    # If the `name` field starts with "The ", move it to the end after a comma
    merged_df["name"] = merged_df.name.apply(
        lambda s: s if not s.startswith("The ") else s[4:] + ", The"
    )

    # Get only the rules that pertain to GPTBot
    disallow_list = merged_df[
        (merged_df.user_agent.str.upper().str.strip() == "GPTBOT")
        & (merged_df.rules.str.upper().str.contains("DISALLOW"))
    ].copy()

    # Get the sites that are not in the gptbot_rules_list list
    allow_list = (
        merged_df[~merged_df.handle.isin(disallow_list.handle.unique())][
            [
                "name",
                "handle",
                "country",
                "url",
            ]
        ]
        .drop_duplicates()
        .copy()
    )

    def flag_emoji(name):
        alpha = iso3166.countries.get(name).alpha2

        def box(ch):
            return chr(ord(ch) + 0x1F1A5)

        return box(alpha[0]) + box(alpha[1])

    # Add the flag emoji
    allow_list["flag"] = allow_list.country.apply(flag_emoji)
    disallow_list["flag"] = disallow_list.country.apply(flag_emoji)

    # Render the page
    context = dict(
        site_count=len(merged_df.handle.unique()),
        disallow_list=sorted(
            disallow_list.to_dict(orient="records"), key=lambda s: s["name"].lower()
        ),
        allow_list=sorted(
            allow_list.to_dict(orient="records"), key=lambda s: s["name"].lower()
        ),
    )
    print(
        f":abacus: Creating openai-gptbot-robotstxt page for {len(merged_df.handle.unique())} sites"
    )
    _write_template(
        "openai-gptbot-robotstxt.md", context, output_name="openai-gptbot-robotstxt.md"
    )
