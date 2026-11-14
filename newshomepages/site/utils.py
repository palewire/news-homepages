from __future__ import annotations

from pathlib import Path

import jinja2
import pandas as pd
from retry import retry
from rich import print

from .. import utils

PARENT_DIR = Path(__file__).parent.parent.parent
TEMPLATE_DIR = PARENT_DIR / "_site" / "_templates/"
TEMPLATE_LOADER = jinja2.FileSystemLoader(searchpath=TEMPLATE_DIR)
TEMPLATE_ENV = jinja2.Environment(loader=TEMPLATE_LOADER)
CHARTS_DIR = utils.SITE_DIR / "_static" / "charts"


def _write_template(
    template_name: str, context: dict, output_name: str | Path | None = None
) -> None:
    template = TEMPLATE_ENV.get_template(f"{template_name}.tmpl")
    md = template.render(**context)
    output_path = PARENT_DIR / "_site" / (output_name or template_name)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w") as fh:
        fh.write(md)


def _write_chart_json(df: pd.DataFrame, path: Path) -> None:
    # Format the date for JSON
    df["date"] = df["date"].dt.strftime("%Y-%m-%d")

    # Write it out
    path.parent.mkdir(parents=True, exist_ok=True)
    df.to_json(path, indent=2, orient="records")


def _count_by_date(df: pd.DataFrame, field: str) -> pd.DataFrame:
    # Group and count by date
    by_date = df.groupby("date").size().rename(field).reset_index()

    # Calculate the seven-day rolling average
    by_date["value"] = by_date[field].rolling(7).mean()

    # Cut nulls
    nonulls = by_date[~pd.isnull(by_date.value)]

    # Cut the most recent day, which may be incomplete
    qualified = nonulls.head(len(nonulls) - 1)

    # Trim the columns
    trimmed = qualified[["date", "value"]]

    # Return it back
    return trimmed


@retry(tries=3, delay=15, backoff=2)
def _get_cached_url(name: str, usecols=None, dtype=None) -> pd.DataFrame:
    """Read in the requested extracts CSV as a dataframe."""
    # Check if the file is already in our local cache
    cache_dir = Path("~/.cache/news-homepages").expanduser()
    cache_dir.mkdir(parents=True, exist_ok=True)
    cache_path = cache_dir / name
    if cache_path.exists():
        print(f"Using cached copy of {name}")
        df = pd.read_csv(
            cache_path,
            usecols=usecols,
            dtype=dtype,
        )
    else:
        # If not, download it, first by setting the URL
        url = f"https://archive.org/download/news-homepages-extracts/{name}"
        print(f"Fetching {url}")
        df = pd.read_csv(
            url,
            usecols=usecols,
            dtype=dtype,
        )
        df.to_csv(cache_path, index=False)

    # Return the dataframe
    return df
