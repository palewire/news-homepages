import csv
import typing
from datetime import datetime
from pathlib import Path

import pytz

# Set paths for key files
THIS_DIR = Path(__file__).parent.absolute()
SOURCES_PATH = THIS_DIR / "sources"
SITES_PATH = SOURCES_PATH / "sites.csv"
BUNDLES_PATH = SOURCES_PATH / "bundles.csv"
EXTRACT_DIR = THIS_DIR.parent / "extracts"


def get_site_list() -> typing.List[typing.Dict]:
    """Get the full list of supported sites.

    Returns a list of dictionaries.
    """
    with open(SITES_PATH) as fh:
        site_reader = csv.DictReader(fh)
        site_list = list(site_reader)
    return site_list


def get_bundle_list() -> typing.List[typing.Dict]:
    """Get the fule list of site bundles.

    Returns a list of dictionaries.
    """
    with open(BUNDLES_PATH) as fh:
        bundle_reader = csv.DictReader(fh)
        bundle_list = list(bundle_reader)
    return bundle_list


def get_site(handle: typing.AnyStr) -> typing.Dict:
    """Get the metadata for the provided site.

    Args:
        handle (str): The Twitter handle of the site you want.

    Returns a dictionary.
    """
    site_list = get_site_list()
    return next(d for d in site_list if d["handle"].lower() == handle.lower())


def get_bundle(slug: str) -> typing.Dict:
    """Get the metadata for the provided bundle.

    Args:
        slug (str): The unique string identifier of the bundle.

    Returns a dictionary.
    """
    bundle_list = get_bundle_list()
    return next(d for d in bundle_list if d["slug"].lower() == slug.lower())


def get_sites_in_bundle(slug: str) -> typing.List[typing.Dict]:
    """Get all the sites in the provided bundle.

    Args:
        slug (str): The unique string identifier of the bundle.

    Returns a list of site dictionaries.
    """
    bundle = get_bundle(slug)
    site_list = get_site_list()
    return [s for s in site_list if s["bundle"] == bundle["slug"]]


def get_screenshot_list():
    """Get the full list of screenshots from our extracts.

    Returns a list of dictionaries.
    """
    with open(EXTRACT_DIR / "csv" / "screenshot-files.csv") as fh:
        site_reader = csv.DictReader(fh)
        obj_list = list(site_reader)
    tz = pytz.timezone("US/Pacific")
    for obj in obj_list:
        dt = datetime.strptime(obj["mtime"], "%Y-%m-%d %H:%M:%S")
        obj["mtime"] = tz.localize(dt).astimezone(pytz.utc)
    return obj_list


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
