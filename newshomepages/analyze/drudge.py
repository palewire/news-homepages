import json
import warnings
from collections import Counter
from pathlib import Path

import click
import pandas as pd
import spacy
import storysniffer
import tldextract
from rich import print
from rich.progress import track

from .. import utils


@click.group()
def cli():
    """Analyze the Drudge Report."""


@cli.command()
@click.option("-o", "--output-dir", "output_dir", default="./")
def drudge_entities(output_dir: str = "./"):
    """Analyze Drudge entities."""
    print(":abacus: Analyzing Drudge entities")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Import NLP library
    print("Loading spacy")
    nlp = spacy.load("en_core_web_lg")

    # Read in data
    drudge_df = utils.get_extract_df(
        "drudge-hyperlinks-analysis.csv",
        parse_dates=["earliest_date"],
        use_cache=False,
    )

    # Filter down to stories
    print("Filtering down to stories")
    story_df = drudge_df[drudge_df.is_story].copy()

    # Remove any links without text
    print("Removing any links without text")
    story_df = story_df[~pd.isnull(story_df.text)].copy()

    # Cut `...`
    print("Sanitizing text")
    story_df.text = story_df.text.str.replace(r"\.{2,}", "", regex=True)

    # Uppercase everything
    story_df.text = story_df.text.str.upper()

    # Extract all headlines
    print("Extracting headlines")
    headline_list = sorted(list(story_df.text.unique()))
    print(
        f"{len(headline_list)} headlines found from {story_df.earliest_date.min()} to {story_df.earliest_date.max()}"
    )

    # Pull out all meaningful words
    print("Parsing out all meaningful words")

    def get_lemma(headline: str):
        """Parse all of the words we want to keep from the provided headline."""
        # Read it into our NPL thing
        doc = nlp(headline)

        # Parse out all the words, and remove empty ones
        token_list = [token for token in doc if token.text.strip()]

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

    # Convert to dataframe
    word_df = pd.DataFrame(word_list)
    print(f"Extracted {len(word_df)} words")

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
        "HOUSE",  # This usually refers to the White House
        "CITY",
        "\n",
    ]
    print("Removing stop words")
    qualified_df = word_df[
        (~word_df.part_of_speech.isin(["SYM", "VERB"]))
        & (~word_df.lemma.isin(stop_list))
    ]
    print(f"Removed {len(word_df) - len(qualified_df)} stop words")

    # Calculate the 25 most common words
    print("Calculating the 25 most common words")
    top_words = (
        qualified_df.groupby("lemma")
        .size()
        .rename("n")
        .reset_index()
        .sort_values("n", ascending=False)
        .head(25)
    )

    # Get the top verb for each word
    def get_headlines(lemma: str) -> list:
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
            "MELONI",
            "ZERO",
            "'",  # This is a weird one
        ]
        if lemma == "COVID":
            stop_verbs += ["TESTS", "TEST"]
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

    print("Calculating the top verb for each word")
    top_words["top_verb"] = top_words.lemma.apply(get_top_verb)

    # Get the timeseries for top words
    min_date, max_date = story_df.earliest_date.min(), story_df.earliest_date.max()
    print(f"Min date: {min_date}")
    print(f"Max date: {max_date}")

    def get_timeseries(lemma: str) -> str:
        """Pull the day to day timeseries for the provided word."""
        # Count the top words by day
        print(f"- {lemma}")
        df = (
            qualified_df[qualified_df.lemma == lemma]
            .copy()
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
            .rename(columns={"earliest_date": "date"})
            .set_index("date")
        )

        # Fill in days we're missing
        date_range = pd.date_range(
            min_date,
            max_date,
            freq="D",
        )
        date_index = pd.DatetimeIndex(date_range)
        backfilled_df = df.reindex(date_index)
        backfilled_df.n = backfilled_df.n.fillna(0)

        # Calculate the 7-day rolling average
        backfilled_df["7_day_rolling_average"] = backfilled_df.n.rolling(7).mean()
        backfilled_df["7_day_rolling_average"] = backfilled_df[
            "7_day_rolling_average"
        ].fillna(0)

        # Convert it to a dict list
        dict_list = (
            backfilled_df.reset_index()
            .rename(columns={"index": "date"})
            .to_dict(orient="records")
        )

        # Convert our dates to strings
        for d in dict_list:
            d["date"] = d["date"].strftime("%Y-%m-%d")

        # Pass it out
        return json.dumps(dict_list)

    print("Calculating the timeseries for each word")
    top_words["timeseries"] = top_words.lemma.apply(get_timeseries)

    # Write the result
    print(f"Writing the result to {output_path / 'drudge-entities-analysis.csv'}")
    top_words.to_csv(output_path / "drudge-entities-analysis.csv", index=False)


@cli.command()
@click.option("-o", "--output-dir", "output_dir", default="./")
def drudge_hyperlinks(output_dir: str = "./"):
    """Analyze Drudge hyperlinks."""
    print(":abacus: Analyzing Drudge hyperlinks")
    warnings.simplefilter("ignore")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Read in our 90 day sample of hyperlinks
    df = utils.get_extract_df(
        "drudge-hyperlinks-sample.csv",
        usecols=[
            "handle",
            "file_name",
            "date",
            "text",
            "url",
        ],
        dtype=str,
        use_cache=False,
    )

    # Parse dates
    df["date"] = pd.to_datetime(df["date"])

    # Trim the strings
    print("Trimming strings")
    df["text"] = (
        df.text.str.strip()
        .str.replace(r"\s{2,}", " ", regex=True)
        .str.replace(r"\n", " ")
    )
    df["url"] = df.url.str.strip()

    # Guess links with `storysniffer`
    print("Sniffing out stories")
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
    print("Applying our corrections")
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
    print("Writing out the results")
    links_df.sort_values(
        ["domain", "earliest_date", "text"], ascending=[True, False, True]
    ).to_csv(output_path / "drudge-hyperlinks-analysis.csv", index=False)
