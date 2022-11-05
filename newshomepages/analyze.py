import typing
import warnings
from collections import Counter

import click
import pandas as pd
import spacy
import storysniffer
import tldextract
from rich import print
from rich.progress import track

from . import utils


@click.group()
def cli():
    """Analyze our data extracts."""
    pass


@cli.command()
def drudge_entities():
    """Analyze Drudge entities."""
    print(":abacus: Analyzing Drudge entities")

    # Import NLP library
    nlp = spacy.load("en_core_web_lg")

    # Read in data
    drudge_df = pd.read_csv(
        "https://github.com/palewire/news-homepages/raw/main/extracts/csv/drudge-hyperlinks-analysis.csv",
        parse_dates=["earliest_date"],
    )

    # Filter down to stories
    story_df = drudge_df[drudge_df.is_story].copy()

    # Cut `...`
    story_df.text = story_df.text.str.replace(r"\.{2,}", "", regex=True)

    # Uppercase everything
    story_df.text = story_df.text.str.upper()

    # Extract all headlines
    headline_list = sorted(list(story_df.text.unique()))

    # Pull out all meaningful words
    def get_lemma(headline: str):
        """Parse all of the words we want to keep from the provided headline."""
        # Read it into our NPL thing
        doc = nlp(headline)

        # Parse out all the words
        token_list = [token for token in doc]

        # Remove stop words
        token_list = [t for t in token_list if not t.is_stop]

        # Remove punctuation words
        token_list = [t for t in token_list if not t.is_punct]

        # Remove digits
        token_list = [t for t in token_list if not t.is_digit]

        # Trim it down to only the stuff we want to keep
        dict_list = [
            dict(
                headline=headline,
                word=t.text.upper(),
                lemma=t.lemma_.upper(),
                part_of_speech=t.pos_,
            )
            for t in token_list
        ]

        # Pass it back
        return dict_list

    word_list = []
    for headline in track(headline_list):
        word_list += get_lemma(headline)

    word_df = pd.DataFrame(word_list)

    # Remove our extra stop words, as well as symbols and verbs
    stop_list = [
        "NEW",
        "MAN",
        "WOMAN",
        "YEAR",
        "DAY",
        "MILLION",
        "HIGH",
        "BIG",
        "RECORD",
        "HOME",
        "WORLD",
        "STATE",
        "TIME",
        "CASE",
        "LIFE",
        "AMERICAN",
        "INSIDE",
        "EX",
        "MAR",
        "HIT",
        "LAGO",
        "RISE",
        "AMID",
        "WARNS",
        "RATE",
        "SHOW",
        "ATTACK",
        "RISE",
        "DEAD",
        "SET",
    ]
    qualified_df = word_df[
        (~word_df.part_of_speech.isin(["SYM", "VERB"]))
        & (~word_df.lemma.isin(stop_list))
    ]

    # Calculate the 25 most common words
    top_words = (
        qualified_df.groupby("lemma")
        .size()
        .rename("n")
        .reset_index()
        .sort_values("n", ascending=False)
        .head(25)
    )

    # Get the top verb for each word
    def get_headlines(lemma: str) -> typing.List:
        """Get all the headlines for the provided word."""
        return sorted(list(qualified_df[qualified_df.lemma == lemma].headline.unique()))

    def get_top_verb(lemma: str) -> str:
        """Query the top verb in the provided lemma's headline set."""
        # Set our stop words for the verbs
        stop_verbs = [
            "SAYS",
            "HAS",
            "GETS",
            "GET",
            "LULA",
            "ELON",
            "SAY",
            "HAVE",
        ]
        if lemma == "COVID":
            stop_verbs += ["TESTS"]
        if lemma == "MUSK":
            stop_verbs += ["SOCIAL"]

        # Pull the headlines
        headline_list = get_headlines(lemma)

        # Loop through all of the headlines
        master_list = []
        for headline in headline_list:
            # Parse the headline again with NLP
            doc = nlp(headline)

            # Pull out the verbs
            verb_list = [t.lemma_.upper() for t in doc if t.pos_ == "VERB"]

            # Cut the stop words
            verb_list = [v for v in verb_list if v not in stop_verbs]

            # Add it to our master list
            master_list += verb_list

        # Count the verbs
        verb_counter = Counter(master_list)

        # Pull the most common one
        top_verb = verb_counter.most_common(2)

        # Return the result
        return top_verb[0][0]

    top_words["top_verb"] = top_words.lemma.apply(get_top_verb)

    # Get the timeseries for top words
    def get_timeseries(lemma: str) -> typing.List:
        """Pull the day to day timeseries for the provided word."""
        # Count the top words by day
        df = (
            qualified_df[qualified_df.lemma == lemma]
            .merge(
                story_df[["earliest_date", "text"]].rename(
                    columns={"text": "headline"}
                ),
                on="headline",
            )
            .groupby("earliest_date")
            .size()
            .rename("n")
            .reset_index()
        )

        # Convert it to a dict list
        dict_list = df.to_dict(orient="records")

        # Convert our dates to strings
        for d in dict_list:
            d["date"] = d["earliest_date"].strftime("%Y-%m-%d")
            del d["earliest_date"]

        # Pass it out
        return dict_list

    top_words["timeseries"] = top_words.lemma.apply(get_timeseries)

    # Write the result
    top_words.to_csv(
        utils.EXTRACT_DIR / "csv" / "drudge-entities-analysis.csv", index=False
    )


@cli.command()
def drudge_hyperlinks():
    """Analyze Drudge hyperlinks."""
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
