import time
from urllib.parse import urlparse

import pandas as pd
import requests
from requests.adapters import HTTPAdapter, Retry
from rich import print

from .. import utils


def _get_json_url(url):
    # Prepare a cache
    cache_dir = utils.THIS_DIR.parent / ".cache"
    cache_dir.mkdir(parents=True, exist_ok=True)

    # Check if the file has been downloaded
    output_path = cache_dir / urlparse(url).path.split("/")[-1]
    if output_path.exists():
        print(f":book: Reading in cached file {output_path}")
        return pd.read_json(output_path)
    else:
        # Get the URL
        print(f":link: Downloading {url}")
        s = requests.Session()
        retries = Retry(total=3, backoff_factor=1)
        s.mount("https://", HTTPAdapter(max_retries=retries))
        r = s.get(url)
        data = r.json()

        # Parse as a dataframe
        df = pd.DataFrame(data)

        # Write to cache
        df.to_json(output_path, orient="records", indent=2)
        print(f":pencil: Writing to cached file {output_path}")
        time.sleep(0.25)

    # Add columns
    metadata = utils.parse_archive_url(url)
    df["site_handle"] = metadata["handle"]
    df["item_identifier"] = metadata["identifier"]
    df["file_timestamp"] = metadata["timestamp"]
    df["file_url"] = url

    # Return dataframe
    return df
