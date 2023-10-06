from __future__ import annotations

import csv
import json
import random
import re
import tempfile
import time
import typing
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import iso639
import iso3166
import pandas as pd
import pytz
import requests
import tldextract
from playwright.sync_api._generated import BrowserContext, Playwright
from retry import retry
from rich import print

# Set paths for key files
THIS_DIR = Path(__file__).parent.absolute()
SOURCES_PATH = THIS_DIR / "sources"
SITES_PATH = SOURCES_PATH / "sites.csv"
EXTENSIONS_PATH = THIS_DIR / "extensions"
EXTRACT_DIR = THIS_DIR.parent / "extracts"
NOTEBOOKS_DIR = THIS_DIR.parent / "notebooks"
SITE_DIR = THIS_DIR.parent / "_site"

# Regular expressions
LEADING_UNDERSCORES = re.compile("^(_+)")


def safe_ia_handle(handle: str) -> str:
    """Santize a handle so its safe to use as an archive.org slug.

    Args:
        handle (str): The unique string identifier of the site.

    Returns a lowercase string that's ready to use.
    """
    # Take it down
    s = handle.lower()

    # Trim it
    s = s.strip()

    # If there is whitespace in the handle, throw an error
    if " " in s:
        raise ValueError(
            f"Site handles cannot contain whitespace. You submitted: '{handle}'"
        )

    # Replace any leading underscores, which don't work on archive.org
    s = LEADING_UNDERSCORES.sub("", s)

    # Pass it back
    return s


def write_csv(dict_list: list[dict], path: Path, verbose: bool = True) -> None:
    """Write a list of dictionaries to a CSV file at the provided path.

    Args:
        data (Any): Any Python object ready to be serialized as JSON.
        path (Path): The filesystem Path where the object should be written.
        verbose (bool): Whether or not to log the action prior to execution. (Default: True)

    Returns nothing.
    """
    # Log it
    if verbose:
        print(f"📥 Writing CSV with {len(dict_list)} records to {path}")

    # Open a file
    with open(path, "w") as fh:
        # Pop out the field names we'll use as the header
        fieldnames = dict_list[0].keys()

        # Fire up a writer
        writer = csv.DictWriter(fh, fieldnames=fieldnames)

        # Write out the header
        writer.writeheader()

        # Write out the data
        writer.writerows(dict_list)


def write_json(
    data: typing.Any, path: Path, indent: int = 2, verbose: bool = True
) -> None:
    """Write JSON data to the provided path.

    Args:
        data (Any): Any Python object ready to be serialized as JSON.
        path (Path): The filesystem Path where the object should be written.
        indent (int): The number of identations to include in the JSON. (Default: 2)
        verbose (bool): Whether or not to log the action prior to execution. (Default: True)

    Returns nothing.
    """
    # Log
    if verbose:
        print(f"📥 Writing JSON to {path}")

    # Make the parent directory, if it doesn't already exist
    path.parent.mkdir(parents=True, exist_ok=True)

    # Write out the data as JSON
    with open(path, "w") as fh:
        json.dump(data, fh, indent=indent)


@retry(tries=3, delay=15, backoff=2)
def get_url(
    url: str, timeout: int = 30, user_agent: str | None = None, verbose: bool = False
) -> requests.Response:
    """Get the provided URL.

    Args:
        url (str): The URL to fetch.
        timeout (int): The number of seconds to wait before timing out. (Default: 30)
        user_agent (str): The user agent to use in the request. (Default: None)
        verbose (bool): Whether or not to log the action prior to execution. (Default: False)

    Returns a requests.Response object.
    """
    # Set up headers
    headers = {}
    if user_agent:
        headers["User-Agent"] = user_agent

    # Log
    if verbose:
        print(f"📡 Fetching {url}")

    # Get the URL
    r = requests.get(url, timeout=timeout, headers=headers)

    # Raise an error if the request failed
    assert r.ok

    # Return the response
    return r


def get_json_url(
    url: str, timeout: int = 30, user_agent: str | None = None, verbose: bool = False
) -> typing.Any:
    """Get JSON data from the provided URL.

    Args:
        url (str): The URL to request
        timeout (int): How long to wait before timing out
        user_agent (str): The user agent to provide in the request headers. None by default.
        verbose (bool): Whether or not to print a verbose output

    Returns:
        The JSON response as a Python object.
    """
    # Get the resposne
    r = get_url(url, timeout=timeout, user_agent=user_agent, verbose=verbose)

    # Return JSON
    return r.json()


@retry(tries=3, delay=15, backoff=2)
def download_url(url: str, output_path: Path, timeout: int = 180):
    """Download the provided URL to the provided path."""
    with requests.get(url, stream=True, timeout=timeout) as r:
        r.raise_for_status()
        with open(output_path, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)


def get_local_time(site: dict) -> datetime:
    """Get the current time in the provided site's timezone.

    Args:
        site (dict): A site's data dictionary.

    Returns the current item as a timezone-aware datetime object.
    """
    # Get the current time
    now = datetime.now()

    # Get the site's timezone
    tz = pytz.timezone(site["timezone"])

    # Cast the timestamp into the site's timezone and return it
    return now.astimezone(tz)


def get_flag_emoji(alpha2: str) -> str:
    """Get the flag emoji for the provided country.

    Args:
        alpha2 (str): The two-letter ISO code for the country.

    Returns:
        A string containing the emoji.
    """
    assert len(alpha2) == 2

    def _box(ch):
        return chr(ord(ch) + 0x1F1A5)

    return _box(alpha2[0]) + _box(alpha2[1])


def parse_archive_url(url: str) -> dict:
    """Parse the handle and timestamp from an archive.org URL.

    Args:
        url (str): An archive.org URL

    Returns a dictinary with the identifier, handle and timestamp parsed out.
    """
    # Parse the URL
    o = urlparse(url)

    # Split it into pieces
    path_list = o.path.split("/")

    # Pull out the bits we know to look for
    identifier = path_list[-2]
    handle = identifier[:-5]

    # The time is a little tricky
    time_string = ".".join(path_list[-1].replace(f"{handle}-", "").split(".")[:2])
    timestamp = datetime.fromisoformat(time_string)

    # Return it as a tidy dict
    return dict(identifier=identifier, handle=handle, timestamp=timestamp)


@retry(tries=3, delay=15, backoff=2)
def get_extract_df(name: str, use_cache: bool = True, **kwargs) -> pd.DataFrame:
    """Read in the requests extracts CSV as a dataframe."""
    # Set the cache path
    cache_dir = Path("~/.cache/news-homepages").expanduser()
    cache_dir.mkdir(parents=True, exist_ok=True)
    cache_path = cache_dir / name

    # If we're allowed to use the cache and the cached file exists...
    if use_cache and cache_path.exists():
        # ... load that ...
        print(f"Using cached copy of {name}")
        df = pd.read_csv(cache_path, **kwargs)
    # Otherwise download it.
    else:
        base_url = "https://archive.org/download/news-homepages-extracts/"
        url = f"{base_url}{name}"
        print(f"Fetching {url}")
        df = pd.read_csv(url, **kwargs)
        df.to_csv(cache_path, index=False)

    # Return the dataframe
    return df


def get_user_agent() -> str:
    """Provide a user-agent string.

    Returns a string ready to use as a header in web request.
    """
    user_agent_list = [
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
    ]
    return random.choice(user_agent_list)


def get_site_list() -> list[dict]:
    """Get the full list of supported sites.

    Returns a list of dictionaries.
    """
    return get_site_df().to_dict(orient="records")


def get_site_df() -> pd.DataFrame:
    """Get the full list of sites.

    Returns a DataFrame.
    """
    # Read in our data file
    df = pd.read_csv(
        SITES_PATH,
        dtype={
            "handle": str,
            "url": str,
            "name": str,
            "location": str,
            "timezone": str,
            "country": str,
            "language": str,
            "bundle": str,
            "wait": str,
        },
    ).sort_values("handle")

    # Fill in the empty wait with strings
    df["wait"].fillna("", inplace=True)

    # Split the bundle lists using the '|' in the CSV
    def _split_bundle(row):
        if not pd.isnull(row["bundle"]):
            return row["bundle"].split("|")
        else:
            return []

    df["bundle_list"] = df.apply(_split_bundle, axis=1)

    # Extract the domain from the URL
    df["domain"] = df.url.apply(
        lambda x: f"{tldextract.extract(x).domain}.{tldextract.extract(x).suffix}"
    )

    # Use the country ISO code to pull the country name
    df["country_name"] = df.country.apply(lambda x: iso3166.countries.get(x).name)

    # Use the country ISO code to get the flag emoji
    df["flag"] = df.country.apply(get_flag_emoji)

    # Do the same for the language
    df["language_name"] = df.language.apply(
        lambda x: iso639.Language.from_part1(x).name
    )

    # Pass it out
    return df


def get_bundle_list() -> list[dict]:
    """Get the full list of site bundles.

    Returns a list of dictionaries.
    """
    with open(SOURCES_PATH / "bundles.csv") as fh:
        bundle_reader = csv.DictReader(fh)
        bundle_list = list(bundle_reader)
    return bundle_list


def get_country_list() -> list[dict]:
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
    country_df["flag"] = country_df.alpha2.apply(get_flag_emoji)
    return country_df


def get_language_list() -> list[dict]:
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


def get_site(handle: str) -> dict:
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


def get_bundle(slug: str) -> dict:
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


def get_country(code: str) -> dict:
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


def batch(li: list, n: int):
    """Yield n number of sequential chunks from l."""
    d, r = divmod(len(li), n)
    for i in range(n):
        si = (d + 1) * (i if i < r else r) + d * (0 if i < r else i - r)
        yield li[si : si + (d + 1 if i < r else d)]


def get_sites_in_batch(batch_number: int, batches: int = 10) -> list[dict]:
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


def get_sites_in_bundle(slug: str) -> list[dict]:
    """Get all the sites in the provided bundle.

    Args:
        slug (str): The unique string identifier of the bundle.

    Returns a list of site dictionaries.
    """
    bundle = get_bundle(slug)
    site_list = get_site_list()
    return [s for s in site_list if bundle["slug"] in s["bundle_list"]]


def get_sites_in_country(slug: str) -> list[dict]:
    """Get all the sites in the provided country.

    Args:
        slug (str): The two digit alpha code of the country.

    Returns a list of site dictionaries.
    """
    site_list = get_site_list()
    return [s for s in site_list if slug.upper() == s["country"]]


def get_sites_in_language(code: str) -> list[dict]:
    """Get all the sites in the provided language.

    Args:
        slug (str): The two digit alpha code of the country.

    Returns a list of site dictionaries.
    """
    site_list = get_site_list()
    return [s for s in site_list if code.lower() == s["language"].lower()]


def get_accessibility_list() -> list[dict[str, typing.Any]]:
    """Get the full list of accessibility from our extracts.

    Returns a list of dictionaries.
    """
    return get_accessibility_df().to_dict(orient="records")


def get_accessibility_df() -> pd.DataFrame:
    """Get the full list of accessibility files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("accessibility-files.csv")


def get_screenshot_list() -> list[dict[str, typing.Any]]:
    """Get the full list of screenshots from our extracts.

    Returns a list of dictionaries.
    """
    return get_screenshot_df().to_dict(orient="records")


def get_screenshot_df() -> pd.DataFrame:
    """Get the full list of screenshot files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("screenshot-files.csv")


def get_hyperlink_list() -> list[dict[str, typing.Any]]:
    """Get the full list of hyperlink from our extracts.

    Returns a list of dictionaries.
    """
    return get_hyperlink_df().to_dict(orient="records")


def get_hyperlink_df() -> pd.DataFrame:
    """Get the full list of hyperlink files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("hyperlink-files.csv")


def get_lighthouse_list() -> list[dict[str, typing.Any]]:
    """Get the full list of lighthouse audits from our extracts.

    Returns a list of dictionaries.
    """
    return get_lighthouse_df().to_dict(orient="records")


def get_lighthouse_df() -> pd.DataFrame:
    """Get the full list of Lighthouse files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("lighthouse-files.csv")


def get_robotstxt_df(use_cache: bool = True, verbose: bool = False) -> pd.DataFrame:
    """Get the full list of robots.txt files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df(
        "robotstxt-files.csv", use_cache=use_cache, verbose=verbose
    )


def get_wayback_df() -> pd.DataFrame:
    """Get the full list of wayback files from our extracts.

    Returns a DataFrame.
    """
    return _get_extract_files_df("wayback-files.csv")


@retry(tries=3, delay=15, backoff=2)
def _get_extract_files_df(
    name: str, use_cache: bool = True, verbose: bool = False
) -> pd.DataFrame:
    """Read in the requested extracts CSV as a dataframe."""
    # Declare the columns we expect
    usecols = [
        "identifier",
        "handle",
        "file_name",
        "url",
        "mtime",
        "size",
        "md5",
        "sha1",
    ]

    # Declare the data types we expect
    dtype = {
        "identifier": str,
        "handle": str,
        "file_name": str,
        "url": str,
        "size": int,
        "md5": str,
        "sha1": str,
    }

    # Add extra columns for screenshot files
    if name == "screenshot-files.csv":
        usecols.append("type")
        dtype["type"] = str

    # Check if the file is already in our local cache
    cache_dir = Path("~/.cache/news-homepages").expanduser()
    cache_dir.mkdir(parents=True, exist_ok=True)
    cache_path = cache_dir / name
    if use_cache and cache_path.exists():
        if verbose:
            print(f"Using cached copy of {name}")
        df = pd.read_csv(
            cache_path,
            parse_dates=["mtime"],
            usecols=usecols,
            dtype=dtype,
        )
    else:
        # If not, download it, first by setting the URL
        url = f"https://archive.org/download/news-homepages-extracts/{name}"
        if verbose:
            print(f"Fetching {url}")
        df = pd.read_csv(
            url,
            parse_dates=["mtime"],
            usecols=usecols,
            dtype=dtype,
        )
        df.to_csv(cache_path, index=False)

    # Localize the timestamp
    df["mtime"] = df.mtime.dt.tz_localize(pytz.utc)

    # Add a date column
    df["date"] = pd.to_datetime(df.mtime.dt.date)

    # Sort it by timestamp
    df = df.sort_values("mtime", ascending=True)

    # Return the dataframe
    if verbose:
        print(f"Returning {len(df)} rows")
    return df


def get_screenshots_by_site(site: dict) -> list[dict]:
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


def get_javascript(handle: str) -> str | None:
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


def chunk(iterable: list, length: int) -> list[list]:
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


def intcomma(value: int | str) -> str:
    """Convert an integer to a string containing commas every three digits.

    For example, 3000 becomes '3,000' and 45000 becomes '45,000'.

    Args:
        value (int): The integer to format

    Returns a string with the result.
    """
    orig = str(value)
    new = re.sub(r"^(-?\d+)(\d{3})", r"\g<1>,\g<2>", orig)
    if orig == new:
        return new
    else:
        return intcomma(new)


def _load_persistent_context(
    p_handle: Playwright, width: int = 1300, height: int = 1600
):
    """Load the browser with a persistent context nad with a set of common ad-blocking extensions."""
    # Boot up the browser with the ad blocker plugin installed
    data_dir = tempfile.mkdtemp()
    print(f"Temporary data directory created at {data_dir}")

    # Set the extensions path
    extensions_list = [
        EXTENSIONS_PATH / "adguard",
        EXTENSIONS_PATH / "adguardextra",
    ]
    extensions_str = ",".join(map(str, extensions_list))

    # Set the browser context
    print("Launching Chromium browser")
    context = p_handle.chromium.launch_persistent_context(
        data_dir,
        channel="chrome",
        headless=False,
        args=[
            f"--disable-extensions-except={extensions_str}",
            f"--load-extension={extensions_str}",
            "--disable-gpu",
            "--disable-notifications",
            "--disable-search-geolocation-disclosure",
            "--enable-logging=stderr",
            "--log-level=0",
            "--v=1",
        ],
        user_agent=get_user_agent(),
        viewport={
            "width": width,
            "height": height,
        },
    )

    # Wait for adguard filters to load
    print("Waiting 15 seconds for AdGuard filters to load")
    time.sleep(15)
    return context


def _get_common_blocking_javascript() -> str:
    """Compiles a set of commands into an executable javascript script to block common pop-ups, banners, etc."""
    # Run common JavaScript for all sites
    target_list = [
        "#x-reveal-ad",  # Blox ad
        ".tnt-ads-container",  # Blox ad,
        ".promo-designer-modal",  # Blox ad
        ".tp-modal",  # Common popover ad
        ".tp-backdrop",
        ".onesignal-slidedown-container",  # Common slidedown ad
        "#regiwall-overlay",
        ".regiwall",
        ".bxc",  # Common takeover ad
        ".met-footer-toast",  # Common toaster at the bottom
        ".grecaptcha-badge",
        ".fEy1Z2XT",  # Common ad blocker popup
        ".dgEhJe6g",
        ".notification-soft-optin",  # Common notification popup
        ".popup_background",
        ".popup_wrapper",
        ".pw-subscribe-popup",
        ".ThirdPartySlot-container",
        ".newspack-lightbox",  # Common takover ad
        ".pbs_loc",  # PBS site location picker
        "#onetrust-consent-sdk",
        ".gdpr-huffpost-cookiewall",
        "#header-cts",
        ".pum-overlay",  # Common takeover ad
        "#pico_prompt",
        "#pico_header",
        ".mol-ads-cmp",  # Footer toaster thing on some sites
        ".gdpr-glm-standard",  # GDPR blockers on some sites
        "#didomi-host",  # Common cookies popup
        ".fc-ab-root",  # Ad blocker popup
        ".fancybox-overlay",  # Popup overlay
        ".fancybox-overlay-fixed",
        ".ab_widget_container_popin-image",  # Popover
        ".ab_widget_container_popin-image_content",
        ".ab_widget_container_popin-image_overlay",
        ".fc-ab-root",  # Popover
        ".modal-backdrop",  # Modal popup
        "#dth-borderless-modal-alt",
        "#floatingBlockerGuide",  # Popup overlay
        ".ctct-popup-overlay",  # Popup overlay
        ".ctct-popup-wrapper",
        ".message-container",  # Popup
        ".teg-container",
        'div[id^="sp_message_container"]',  # Popover
        ".wisepops-root",  # Popover
        "#wisepops-root",
        ".widget_eu_cookie_law_widget",  # GDPR poup
        ".fancybox-overlay",  # Ad overlay
        ".signup-box",  # Popup ad
        ".newspack-lightbox",  # Popup
        ".adunit-googleadmanager",  # Google ad
        ".mc-modal",  # Newsletter popup
        ".mc-modal-bg",
        ".blockNavigation",
        ".ab-iam-root",
        ".omaha-background",  # Takeover ad
        ".sqs-popup-overlay",  # Overlay popup
        "#gcomPromo",  # Overlay found on Brazilian sites
        ".Campaign",
    ]
    target_str = ",".join(target_list)
    return f"""
        document.querySelectorAll('{target_str}').forEach(el => el.remove());
        var styleSheet = document.createElement('style');
        styleSheet.innerText = '{target_str} {{ display: none !important; }}';
        document.head.appendChild(styleSheet);
     """


def _load_new_page_disable_javascript(
    context: BrowserContext,
    url: str,
    handle: str,
    wait_seconds: int = 5,
    full_page: bool = False,
):
    """Load the page with javascript blocking."""
    # Create an empty tab
    page = context.new_page()
    # Open the page
    print(f"Opening {url}")
    page.goto(url, timeout=60000)

    # Give it a beat
    print(f"Waiting {wait_seconds} seconds")
    time.sleep(wait_seconds)
    common_javascript = _get_common_blocking_javascript()

    print("Executing common JavaScript")
    page.evaluate(common_javascript)

    # If there's custom javascript for this site, run it
    custom_javascript = get_javascript(handle)
    if custom_javascript:
        print("Executing custom JavaScript")
        page.evaluate(custom_javascript)
        print("Waiting another 5 seconds..")
        time.sleep(5)

    # Hide the scrollbars
    print("Hiding scrollbars with CSS")
    css = """document.body.style.overflow = 'hidden';"""
    page.evaluate(css)

    # If we're saving full-page content, we need to scroll to the bottom to make sure all the images get fetched.
    if full_page:
        print("scrolling to bottom")
        scroll_height = page.evaluate("document.body.scrollHeight")
        current_pos = 0
        current_iter = 0
        max_iterations = 200
        amount_to_scroll = 200
        while (current_pos < scroll_height) and (current_iter < max_iterations):
            current_pos += amount_to_scroll
            page.evaluate(f"scroll(0, {current_pos})")
            time.sleep(1)
            scroll_height = page.evaluate("document.body.scrollHeight")
            current_iter += 1
        print("scrolling back up...")
        page.evaluate("scroll(0, 0)")
        time.sleep(1)

    # Prevent Playwright from hovering over a link and highlighting it
    print("Preventing mouse hovers")
    css = """
    const style = document.createElement("style");
    style.innerHTML = "a:hover, a:focus { color: initial; text-decoration: initial; }";
    document.head.appendChild(style);
    """
    page.evaluate(css)

    # Give it another beat
    print(f"Waiting {wait_seconds} seconds")
    time.sleep(wait_seconds)
    return page
