import csv
import json
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

# Regular expressions
LEADING_UNDERSCORES = re.compile("^(_+)")


def safe_ia_handle(s):
    """Santize a handle so its safe to use as an archive.org slug."""
    # Take it down
    s = s.lower()

    # Replace any leading underscores, which don't work on archive.org
    s = LEADING_UNDERSCORES.sub("", s)

    # Pass it back
    return s


def write_json(data: typing.Any, path: Path, indent: int = 2):
    """Write JSON data to the provided path."""
    path.parent.mkdir(parents=True, exist_ok=True)
    print(f"📥 Writing JSON to {path}")
    with open(path, "w") as fh:
        json.dump(data, fh, indent=2)


@retry(tries=3, delay=15, backoff=2)
def get_url(url: str, timeout: int = 30):
    """Get the provided URL."""
    r = requests.get(url, timeout=timeout)
    assert r.ok
    return r


def get_json_url(url: str):
    """Get JSON data from the provided URL."""
    r = get_url(url)
    return r.json()


def get_local_time(data: typing.Dict) -> datetime:
    """Get the current time in the provided site's timezone."""
    now = datetime.now()
    tz = pytz.timezone(data["timezone"])
    return now.astimezone(tz)


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


def get_extract_df(name: str, **kwargs) -> pd.DataFrame:
    """Read in the requests extracts CSV as a dataframe."""
    base_url = "https://news-homepages.s3.us-west-1.amazonaws.com/extracts/csv/"
    return pd.read_csv(f"{base_url}{name}", **kwargs)


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
    base_url = "https://news-homepages.s3.us-west-1.amazonaws.com/extracts/csv/"
    df = pd.read_csv(
        f"{base_url}{name}",
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
        while (current_pos < scroll_height) or (current_iter > max_iterations):
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
