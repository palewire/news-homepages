import csv
import re
import typing
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import iso639
import iso3166
import pandas as pd
import pytz
import tldextract

# Set paths for key files
THIS_DIR = Path(__file__).parent.absolute()
SOURCES_PATH = THIS_DIR / "sources"
SITES_PATH = SOURCES_PATH / "sites.csv"
BUNDLES_PATH = SOURCES_PATH / "bundles.csv"
EXTENSIONS_PATH = THIS_DIR / "extensions"
EXTRACT_DIR = THIS_DIR.parent / "extracts"
NOTEBOOKS_DIR = THIS_DIR.parent / "notebooks"
SITE_DIR = THIS_DIR.parent / "_site"
ANALYSIS_DIR = THIS_DIR.parent / "_analysis"


def parse_archive_url(url: str):
    """Parse the handle and timestamp from an archive.org URL."""
    o = urlparse(url)
    path_list = o.path.split("/")
    identifier = path_list[-2]
    handle = identifier[:-5]
    time_string = ".".join(path_list[-1].replace(f"{handle}-", "").split(".")[:2])
    timestamp = datetime.fromisoformat(time_string)
    return dict(identifier=identifier, handle=handle, timestamp=timestamp)


def parse_archive_artifact(url_list: typing.List) -> typing.Dict:
    """Parse the archive artifacts saved as JSON during our update runs."""
    d = dict(
        screenshot_url=None,
        hyperlinks_url=None,
        accessibility_url=None,
        lighthouse_url=None,
        wayback_url=None,
    )
    for url in url_list:
        if url.endswith(".jpg"):
            d["screenshot_url"] = url
        elif "accessibility" in url:
            d["accessibility_url"] = url
        elif "hyperlinks" in url:
            d["hyperlinks_url"] = url
        elif "lighthouse" in url:
            d["lighthouse_url"] = url
        elif "wayback" in url:
            d["wayback_url"] = url
        else:
            raise ValueError(url)
    return d


def get_user_agent() -> str:
    """Return a user agent string ready to pass to a browser."""
    return "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"


def get_site_list():
    """Get the full list of supported sites.

    Returns a list of dictionaries.
    """
    return get_site_df().to_dict(orient="records")


def get_site_df() -> pd.DataFrame:
    """Get the full list of supported sites.

    Returns a DataFrame.
    """
    df = pd.read_csv(SITES_PATH, dtype={"wait": str}).sort_values("handle")
    df["wait"].fillna("", inplace=True)

    def _split_bundle(row):
        if not pd.isnull(row["bundle"]):
            return row["bundle"].split("|")
        else:
            return []

    df["domain"] = df.url.apply(
        lambda x: f"{tldextract.extract(x).domain}.{tldextract.extract(x).suffix}"
    )
    df["bundle_list"] = df.apply(_split_bundle, axis=1)
    df["country_name"] = df.country.apply(lambda x: iso3166.countries.get(x).name)
    df["language_name"] = df.language.apply(
        lambda x: iso639.Language.from_part1(x).name
    )
    return df


def get_bundle_list() -> typing.List[typing.Dict]:
    """Get the full list of site bundles.

    Returns a list of dictionaries.
    """
    with open(BUNDLES_PATH) as fh:
        bundle_reader = csv.DictReader(fh)
        bundle_list = list(bundle_reader)
    return bundle_list


def get_country_list():
    """Get the full list of countries.

    Returns a list of dictionaries.
    """
    return get_country_df().to_dict(orient="records")


def get_country_df() -> pd.DataFrame:
    """Get the list of countries.

    Returns a pandas DataFrame.
    """
    country_df = pd.DataFrame(iso3166.countries_by_name.values()).sort_values("name")
    country_df["timezone_list"] = country_df.alpha2.apply(
        lambda x: pytz.country_timezones.get(x, [])
    )
    return country_df


def get_language_list():
    """Get the list of languages.

    Returns a list of dictionaries.
    """
    return get_language_df().to_dict(orient="records")


def get_language_df() -> pd.DataFrame:
    """Get the list of languages.

    Returns a pandas DataFrame.
    """
    site_df = get_site_df()
    language_list = list(site_df.language.unique())
    return pd.DataFrame(
        [iso639.Language.from_part1(x) for x in language_list]
    ).sort_values("name")


def get_site(handle: str) -> typing.Dict:
    """Get the metadata for the provided site.

    Args:
        handle (str): The Twitter handle of the site you want.

    Returns a dictionary.
    """
    site_list = get_site_list()
    try:
        return next(d for d in site_list if d["handle"].lower() == handle.lower())
    except StopIteration:
        raise ValueError(f"The handle {handle} could not be found")


def get_bundle(slug: str) -> typing.Dict:
    """Get the metadata for the provided bundle.

    Args:
        slug (str): The unique string identifier of the bundle.

    Returns a dictionary.
    """
    bundle_list = get_bundle_list()
    try:
        return next(d for d in bundle_list if d["slug"].lower() == slug.lower())
    except StopIteration:
        raise ValueError(f"The slug {slug} could not be found")


def get_country(code: str) -> typing.Dict:
    """Get the metadata for the provided country.

    Args:
        slug (str): The unique string identifier of the bundle.

    Returns a dictionary.
    """
    country_list = get_country_list()
    try:
        return next(d for d in country_list if d["alpha2"].lower() == code.lower())
    except StopIteration:
        raise ValueError(f"The country {code.upper()} could not be found")


def batch(li: typing.List, n: int):
    """Yield n number of sequential chunks from l."""
    d, r = divmod(len(li), n)
    for i in range(n):
        si = (d + 1) * (i if i < r else r) + d * (0 if i < r else i - r)
        yield li[si : si + (d + 1 if i < r else d)]


def get_sites_in_batch(
    batch_number: int, batches: int = 10
) -> typing.List[typing.Dict]:
    """Get all the sites in the provided batch.

    Args:
        batch_number (int): The number of the batch to pull.
        batches (int): The total number of batches.

    Returns a list of site dictionaries.
    """
    site_list = get_site_list()
    batch_list = list(batch(site_list, batches))
    if batch_number - 1 not in range(batches):
        raise ValueError("Batch number not found")
    return batch_list[batch_number - 1]


def get_sites_in_bundle(slug: str) -> typing.List[typing.Dict]:
    """Get all the sites in the provided bundle.

    Args:
        slug (str): The unique string identifier of the bundle.

    Returns a list of site dictionaries.
    """
    bundle = get_bundle(slug)
    site_list = get_site_list()
    return [s for s in site_list if bundle["slug"] in s["bundle_list"]]


def get_sites_in_country(slug: str) -> typing.List[typing.Dict]:
    """Get all the sites in the provided country.

    Args:
        slug (str): The two digit alpha code of the country.

    Returns a list of site dictionaries.
    """
    site_list = get_site_list()
    return [s for s in site_list if slug.upper() == s["country"]]


def get_sites_in_language(code: str) -> typing.List[typing.Dict]:
    """Get all the sites in the provided language.

    Args:
        slug (str): The two digit alpha code of the country.

    Returns a list of site dictionaries.
    """
    site_list = get_site_list()
    return [s for s in site_list if code.lower() == s["language"].lower()]


def get_accessibility_list() -> typing.List[typing.Dict[str, typing.Any]]:
    """Get the full list of accessibility from our extracts.

    Returns a list of dictionaries.
    """
    return get_accessibility_df().to_dict(orient="records")


def get_accessibility_df() -> pd.DataFrame:
    """Get the full list of accessibility files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("accessibility-files.csv")


def get_screenshot_list() -> typing.List[typing.Dict[str, typing.Any]]:
    """Get the full list of screenshots from our extracts.

    Returns a list of dictionaries.
    """
    return get_screenshot_df().to_dict(orient="records")


def get_screenshot_df() -> pd.DataFrame:
    """Get the full list of screenshot files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("screenshot-files.csv")


def get_hyperlink_list() -> typing.List[typing.Dict[str, typing.Any]]:
    """Get the full list of hyperlink from our extracts.

    Returns a list of dictionaries.
    """
    return get_hyperlink_df().to_dict(orient="records")


def get_hyperlink_df() -> pd.DataFrame:
    """Get the full list of hyperlink files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("hyperlink-files.csv")


def get_lighthouse_list() -> typing.List[typing.Dict[str, typing.Any]]:
    """Get the full list of lighthouse audits from our extracts.

    Returns a list of dictionaries.
    """
    return get_lighthouse_df().to_dict(orient="records")


def get_lighthouse_df() -> pd.DataFrame:
    """Get the full list of Lighthouse files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("lighthouse-files.csv")


def get_wayback_df() -> pd.DataFrame:
    """Get the full list of wayback files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("wayback-files.csv")


def _get_extract_files_df(name) -> pd.DataFrame:
    df = pd.read_csv(
        EXTRACT_DIR / "csv" / name,
        parse_dates=["mtime"],
        usecols=[
            "identifier",
            "handle",
            "file_name",
            "url",
            "mtime",
            "size",
            "md5",
            "sha1",
        ],
        dtype={
            "identifier": str,
            "handle": str,
            "file_name": str,
            "url": str,
            "size": int,
            "md5": str,
            "sha1": str,
        },
    )
    df["mtime"] = df.mtime.dt.tz_localize(pytz.utc)
    df["date"] = pd.to_datetime(df.mtime.dt.date)
    return df.sort_values("mtime", ascending=True)


def get_screenshots_by_site(site: typing.Dict) -> typing.List[typing.Dict]:
    """Get the list of screenshots for the provided site.

    Returns a list of dictionaries.
    """
    # Get all screenshots
    screenshot_list = get_screenshot_list()

    # Filter it down to the provided site
    file_list = [
        s for s in screenshot_list if s["handle"].lower() == site["handle"].lower()
    ]

    # Add the local time
    site_tz = pytz.timezone(site["timezone"])
    for file_ in file_list:
        file_["local_time"] = file_["mtime"].astimezone(site_tz)

    # Sort it reverse chron
    sorted_list = sorted(file_list, key=lambda x: x["mtime"], reverse=True)

    # Return the list
    return sorted_list


def get_javascript(handle: str) -> typing.Optional[str]:
    """Get the JavaScript file to run before the screenshot, if it exists.

    Args:
        handle (str): The Twitter handle of the site you want.

    Returns a JavaScript string ready to be run. Or None, if no file exists.
    """
    javascript_path = SOURCES_PATH / "javascript" / f"{handle.lower()}.js"
    if javascript_path.exists():
        with open(javascript_path) as fh:
            return fh.read()
    else:
        return None


def numoji(number: int) -> str:
    """Convert a number into a series of emojis for Slack.

    Args:
        number (int): The number to convert into emoji

    Returns: Am emoji string
    """
    # Convert the provided number to a string
    s = str(number)

    # Split it into a list of tokens, one per number
    parts = list(s)

    # Create crosswalk between numerals and emojis
    lookup = {
        "0": "0️⃣",
        "1": "1️⃣",
        "2": "2️⃣",
        "3": "3️⃣",
        "4": "4️⃣",
        "5": "5️⃣",
        "6": "6️⃣",
        "7": "7️⃣",
        "8": "8️⃣",
        "9": "9️⃣",
    }

    # Look up each of the tokens in the crosswalk
    emoji_list = []
    for p in parts:
        e = lookup[p]
        emoji_list.append(e)

    # Join it all together and return the result
    return "".join(emoji_list)


def chunk(iterable: typing.List, length: int) -> typing.List[typing.List]:
    """Split the provided list into chunks of the provided length.

    Args:
        iterable (list): The master list to split.
        length (int): The size of the chunks you want

    Returns a list of lists.
    """
    chunk_list = []
    for i in range(0, len(iterable), length):
        chunk = iterable[i : i + length]
        chunk_list.append(chunk)
    return chunk_list


def intcomma(value):
    """Convert an integer to a string containing commas every three digits.

    For example, 3000 becomes '3,000' and 45000 becomes '45,000'.
    """
    orig = str(value)
    new = re.sub(r"^(-?\d+)(\d{3})", r"\g<1>,\g<2>", orig)
    if orig == new:
        return new
    else:
        return intcomma(new)
