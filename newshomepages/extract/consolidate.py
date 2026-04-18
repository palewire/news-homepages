"""Consolidate Internet Archive metadata into CSV files."""

from __future__ import annotations

import json
import os
import random
import shutil
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

import click
import requests
from requests.adapters import HTTPAdapter
from rich import print
from rich.progress import track
from urllib3.util.retry import Retry

from .. import utils


@click.group()
def cli():
    """Consolidate Internet Archive metadata into CSV files."""


@cli.command()
@click.option("-o", "--output-dir", "output_dir", default="./")
def consolidate(
    output_dir: str = "./",
):
    """Consolidate Internet Archive metadata into CSV files."""
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    print("🪢 Extracting sites")
    site_list = []
    # Loop through all the sites
    for site in utils.get_site_list():
        # Pull out the data we like
        site_dict = dict(
            handle=site["handle"],
            name=site["name"],
            url=site["url"],
            location=site["location"],
            timezone=site["timezone"],
            country=site["country"],
            language=site["language"],
        )
        # Add to the output list
        site_list.append(site_dict)
    utils.write_csv(site_list, output_path / "sites.csv")

    print("🪢 Extracting bundles")
    utils.write_csv(utils.get_bundle_list(), output_path / "bundles.csv")

    print("🪢 Extracting site-to-bundle relationships")
    site2bundle_list = []
    for site in utils.get_site_list():
        for b in site["bundle_list"]:
            if not b.strip():
                continue
            d = dict(
                site_handle=site["handle"],
                bundle_slug=b,
            )
            site2bundle_list.append(d)
    utils.write_csv(site2bundle_list, output_path / "site-bundle-relationships.csv")

    print("🪆 Extracting items")
    items_path = _get_items_http(output_path)
    json_list = [f for f in items_path.glob("*.json") if f.is_file()]
    item_list = []
    file_list = []
    for file_name in track(json_list):
        print(f"- {file_name}")

        # Read the data out of the zip file
        with open(file_name) as fp:
            item_data = json.loads(fp.read())

        # If the JSON doesn't have the right keys, skip it
        if "metadata" not in item_data:
            print(f"!!! Skipping {file_name} because it doesn't have the right keys")
            continue

        # Pull out the data we want to keep
        handle = file_name.stem[
            :-5
        ]  # Use stem to lose the .json and [:-5] to lose the year suffix.
        print(f"-- Reviewing {len(item_data['files'])} files for {handle}")
        item_dict = dict(
            identifier=item_data["metadata"]["identifier"],
            handle=handle,
            file_name=file_name,
            url=f"https://archive.org/details/{item_data['metadata']['identifier']}",
            title=item_data["metadata"]["title"],
            date=item_data["metadata"]["date"],
            publicdate=item_data["metadata"]["publicdate"],
            addeddate=item_data["metadata"]["addeddate"],
        )

        # Add to the output list
        item_list.append(item_dict)

        # Pull out the files
        qualified_files = []
        # Print the first one for review
        if item_data["files"]:
            print(f"--- Random file: {random.choice(item_data['files'])}")
        for p in item_data["files"]:
            if handle.lower() in p["name"].lower() and (
                p["format"].upper() in ["JSON", "JPEG", "HTML"]
                or p["name"].lower().endswith("ads.txt")
                or p["name"].lower().endswith("robots.txt")
            ):
                qualified_files.append(p)

        # Loop through them
        for f in qualified_files:
            file_dict = dict(
                identifier=item_data["metadata"]["identifier"],
                handle=handle,
                file_name=f["name"],
                url=f"https://archive.org/download/{item_data['metadata']['identifier']}/{f['name']}",
                mtime=datetime.fromtimestamp(int(f["mtime"])),
                size=f["size"],
                md5=f["md5"],
                sha1=f["sha1"],
            )
            file_list.append(file_dict)

        print(f"-- {len(qualified_files)} qualified files found")

    # Write out items
    utils.write_csv(item_list, output_path / "items.csv")

    # Split up the file list and write different types out separately
    screenshot_list = []
    a11y_list = []
    hyperlinks_list = []
    lighthouse_list = []
    wayback_list = []
    html_list = []
    adstxt_list = []
    robotstxt_list = []
    print("🪆 Extracting files")
    for f in track(file_list):
        name = f["file_name"].lower()
        if name.endswith(".jpg"):
            if "fullpage" in name:
                f["type"] = "fullpage"
            else:
                f["type"] = "cropped"
            screenshot_list.append(f)
        elif "accessibility" in name:
            a11y_list.append(f)
        elif "hyperlinks" in name:
            hyperlinks_list.append(f)
        elif "lighthouse" in name:
            lighthouse_list.append(f)
        elif "wayback" in name:
            wayback_list.append(f)
        elif name.endswith(".html"):
            html_list.append(f)
        elif name.endswith("ads.txt"):
            adstxt_list.append(f)
        elif name.endswith("robots.txt"):
            robotstxt_list.append(f)
        else:
            raise ValueError(f"File name {name} doesn't have an output file")

    # Write those out too
    utils.write_csv(screenshot_list, output_path / "screenshot-files.csv")
    utils.write_csv(a11y_list, output_path / "accessibility-files.csv")
    utils.write_csv(hyperlinks_list, output_path / "hyperlink-files.csv")
    utils.write_csv(lighthouse_list, output_path / "lighthouse-files.csv")
    utils.write_csv(wayback_list, output_path / "wayback-files.csv")
    utils.write_csv(html_list, output_path / "html-files.csv")
    utils.write_csv(adstxt_list, output_path / "adstxt-files.csv")
    utils.write_csv(robotstxt_list, output_path / "robotstxt-files.csv")

    # Delete the items path folder
    print(f"🗑️ Deleting {items_path}")
    shutil.rmtree(items_path)


def _get_items_http(
    output_path: Path,
    max_workers: int = 12,
    request_timeout: int = 120,
) -> Path:
    """Download the latest-homepages JSON index files directly over HTTP.

    Replaces an earlier BitTorrent-based fetch that ran for ~18 minutes on
    GitHub-hosted runners and was prone to cancellation. Archive.org serves
    the same files over plain HTTP from the item's file manifest.
    """
    items_path = output_path / "latest-homepages"
    items_path.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": (
                "news-homepages consolidate "
                "(+https://github.com/palewire/news-homepages)"
            )
        }
    )
    retry_strategy = Retry(
        total=4,
        backoff_factor=1.5,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET"],
        respect_retry_after_header=True,
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    print("Fetching latest-homepages file manifest...")
    manifest_resp = session.get(
        "https://archive.org/metadata/latest-homepages",
        timeout=60,
    )
    manifest_resp.raise_for_status()
    all_files = manifest_resp.json().get("files", [])
    json_files = [f for f in all_files if f["name"].endswith(".json")]
    print(f"✓ Manifest lists {len(json_files)} JSON files")

    base_url = "https://archive.org/download/latest-homepages"

    def download_one(file_info: dict) -> tuple[str, str | None]:
        name = file_info["name"]
        dest = items_path / name
        expected_mtime = int(file_info.get("mtime", 0) or 0)
        # Skip only if local mtime matches the manifest mtime. Archive.org
        # bumps mtime when a file is replaced (e.g. current-year JSONs that
        # grow as new snapshots land), so stale caches self-invalidate.
        if (
            dest.exists()
            and expected_mtime
            and int(dest.stat().st_mtime) == expected_mtime
        ):
            return (name, None)
        try:
            r = session.get(f"{base_url}/{name}", timeout=request_timeout)
            r.raise_for_status()
            dest.write_bytes(r.content)
            if expected_mtime:
                os.utime(dest, (expected_mtime, expected_mtime))
            return (name, None)
        except Exception as e:  # noqa: BLE001  record per-file errors; the batch continues
            return (name, str(e))

    failures: list[tuple[str, str]] = []
    with ThreadPoolExecutor(max_workers=max_workers) as pool:
        futures = [pool.submit(download_one, f) for f in json_files]
        for fut in track(
            as_completed(futures),
            total=len(futures),
            description="Downloading",
        ):
            name, err = fut.result()
            if err is not None:
                failures.append((name, err))

    if failures:
        print(f"⚠️ {len(failures)} downloads failed:")
        for name, err in failures[:10]:
            print(f"  - {name}: {err}")
        if len(failures) > 10:
            print(f"  ... and {len(failures) - 10} more")

    print(f"✓ Downloaded {len(json_files) - len(failures)} files to {items_path}")
    return items_path
