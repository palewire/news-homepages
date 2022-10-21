import warnings

import click
import pandas as pd
import storysniffer
import tldextract
from rich import print

from . import utils


@click.group()
def cli():
    """Analyze our data extracts."""
    pass


@cli.command()
def drudge():
    """Analayze Drudge hyperlinks."""
    print(":abacus: Analyzing Drudge hyperlinks")
    warnings.simplefilter("ignore")

    # Read in our 90 day sample of hyperlinks
    df = pd.read_csv(
        utils.EXTRACT_DIR / "csv" / "drudge-hyperlinks-sample.csv",
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
        .groupby(["text", "url"])
        .agg({"date": "min"})
        .rename(columns={"date": "earliest_date"})
        .reset_index()
    )
    links_df["is_story"] = links_df.apply(
        lambda x: sniffer.guess(x["url"], text=x["text"]), axis=1
    )

    # Make some corrections
    blacklist = [
        "/privacy/",
    ]
    links_df.loc[links_df.url.isin(blacklist), "is_story"] = False
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
    ).to_csv(utils.EXTRACT_DIR / "csv" / "drudge-hyperlinks-analysis.csv", index=False)


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
    agg_df = qualified_df.groupby("handle").agg(
        {
            "performance": ["count", "median", "mean", "min", "max", "std"],
            "accessibility": ["count", "median", "mean", "min", "max", "std"],
            "seo": ["count", "median", "mean", "min", "max", "std"],
            "best_practices": ["count", "median", "mean", "min", "max", "std"],
        }
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
