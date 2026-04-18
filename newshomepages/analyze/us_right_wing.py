import warnings
from pathlib import Path

import click
import storysniffer
import tldextract
from rich import print

from .. import utils


@click.group()
def cli():
    """Analyze US right wing sources."""


@cli.command()
@click.option("-o", "--output-dir", "output_dir", default="./")
def us_right_wing_hyperlinks(output_dir: str = "./"):
    """Analyze US Right Wing hyperlinks."""
    print(":abacus: Analyzing U.S. Right Wing hyperlinks")
    warnings.simplefilter("ignore")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Read in our 90 day sample of hyperlinks
    df = utils.get_extract_df(
        "us-right-wing-hyperlinks-sample.csv",
        usecols=[
            "handle",
            "file_name",
            "date",
            "text",
            "url",
        ],
        dtype=str,
        parse_dates=["date"],
    )

    # Trim the strings
    df["text"] = (
        df.text.str.strip()
        .str.replace(r"\s{2,}", " ", regex=True)
        .str.replace(r"\n", " ")
    )
    df["url"] = df.url.str.strip()

    # Guess links with `storysniffer`
    sniffer = storysniffer.StorySniffer()
    links_df = (
        df.sort_values("date")
        .drop_duplicates(["url"], keep="first")
        .groupby(["handle", "text", "url"])
        .agg({"date": "min"})
        .rename(columns={"date": "earliest_date"})
        .reset_index()
    )
    links_df["is_story"] = links_df.apply(
        lambda x: sniffer.guess(x["url"], text=x["text"]), axis=1
    )

    # Make some corrections
    text_black_list = [
        "COMMENTS",
        "COMMENT",
    ]
    links_df.loc[links_df.text.str.upper().isin(text_black_list), "is_story"] = False
    whitelist = [
        r"\.(substack|theankler|commonsense|thedispatch).(com|news)/p/",
        r"^https://time.com/\d{5,}/*",
        r"^https://studyfinds.org/*.{5,}",
        r"^https://www.studyfinds.org/*.{5,}",
        r"^https://*.bbc.com/news/*.{5,}",
        r"^https://www.jpost.com/breaking-news/*.{5,}",
        r"^https://www.jpost.com/[a-z]{5,}/*.{5,}",
        r"^https://*.braintomorrow.com/*.{5,}"
        r"^https://finance.yahoo.com/news/*.{5,}",
        r"^https://www.vice.com/en/article/*.{5,}",
        r"^https://news.yahoo.com/*.{5,}",
        r"^https://www.nationalreview.com/corner/*"
        r"^https://www.nationalreview.com/the-morning-jolt/*",
    ]
    for s in whitelist:
        links_df.loc[links_df.url.str.contains(s, regex=True), "is_story"] = True

    # Cut anything that doesn't start with http
    links_df.loc[~links_df.url.str.startswith("http"), "is_story"] = False

    # Cut anything that appears too much
    n = len(df.file_name.unique())
    url_counts = df.groupby("url").size().rename("n").reset_index()
    too_much = url_counts[url_counts.n >= n * 0.5]
    links_df.loc[links_df.url.isin(too_much.url), "is_story"] = False

    # Parse out the domain
    links_df["domain"] = links_df.url.apply(
        lambda x: f"{tldextract.extract(x).domain}.{tldextract.extract(x).suffix}"
    )

    # Write the result
    links_df.sort_values(
        ["domain", "earliest_date", "text"], ascending=[True, False, True]
    ).to_csv(output_path / "us-right-wing-hyperlinks-analysis.csv", index=False)
