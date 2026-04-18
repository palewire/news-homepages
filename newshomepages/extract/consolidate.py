"""Consolidate Internet Archive metadata into CSV files."""

from __future__ import annotations

import csv
import json
import shutil
from concurrent.futures import ThreadPoolExecutor, as_completed
from contextlib import ExitStack
from datetime import datetime
from pathlib import Path

import click
import requests
from requests.adapters import HTTPAdapter
from rich import print
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

    all_sites = utils.get_site_list()

    print("🪢 Extracting sites")
    site_list = [
        dict(
            handle=site["handle"],
            name=site["name"],
            url=site["url"],
            location=site["location"],
            timezone=site["timezone"],
            country=site["country"],
            language=site["language"],
        )
        for site in all_sites
    ]
    utils.write_csv(site_list, output_path / "sites.csv")

    print("🪢 Extracting bundles")
    utils.write_csv(utils.get_bundle_list(), output_path / "bundles.csv")

    print("🪢 Extracting site-to-bundle relationships")
    site2bundle_list = [
        dict(site_handle=site["handle"], bundle_slug=b)
        for site in all_sites
        for b in site["bundle_list"]
        if b.strip()
    ]
    utils.write_csv(site2bundle_list, output_path / "site-bundle-relationships.csv")

    print("🪆 Extracting items")
    items_path = _get_items_http(output_path)
    json_list = [f for f in items_path.glob("*.json") if f.is_file()]

    # Stream rows straight into each CSV so we never hold the full item/file
    # lists in memory — the runner's 7 GB wasn't enough as the archive grew.
    item_fieldnames = [
        "identifier",
        "handle",
        "file_name",
        "url",
        "title",
        "date",
        "publicdate",
        "addeddate",
    ]
    file_fieldnames = [
        "identifier",
        "handle",
        "file_name",
        "url",
        "mtime",
        "size",
        "md5",
        "sha1",
    ]
    screenshot_fieldnames = [*file_fieldnames, "type"]

    with ExitStack() as stack:

        def open_writer(filename: str, fieldnames: list[str]) -> csv.DictWriter:
            fh = stack.enter_context(open(output_path / filename, "w", newline=""))
            writer = csv.DictWriter(fh, fieldnames=fieldnames)
            writer.writeheader()
            return writer

        items_writer = open_writer("items.csv", item_fieldnames)
        screenshot_writer = open_writer("screenshot-files.csv", screenshot_fieldnames)
        a11y_writer = open_writer("accessibility-files.csv", file_fieldnames)
        hyperlinks_writer = open_writer("hyperlink-files.csv", file_fieldnames)
        lighthouse_writer = open_writer("lighthouse-files.csv", file_fieldnames)
        wayback_writer = open_writer("wayback-files.csv", file_fieldnames)
        html_writer = open_writer("html-files.csv", file_fieldnames)
        adstxt_writer = open_writer("adstxt-files.csv", file_fieldnames)
        robotstxt_writer = open_writer("robotstxt-files.csv", file_fieldnames)

        total = len(json_list)
        for i, file_name in enumerate(json_list, start=1):
            if i % 500 == 0 or i == total:
                print(f"Processed {i}/{total}")

            with open(file_name) as fp:
                item_data = json.load(fp)

            if "metadata" not in item_data:
                print(
                    f"!!! Skipping {file_name} because it doesn't have the right keys"
                )
                file_name.unlink()
                continue

            # Use stem to lose the .json and [:-5] to lose the year suffix.
            handle = file_name.stem[:-5]
            identifier = item_data["metadata"]["identifier"]

            items_writer.writerow(
                dict(
                    identifier=identifier,
                    handle=handle,
                    file_name=file_name,
                    url=f"https://archive.org/details/{identifier}",
                    title=item_data["metadata"]["title"],
                    date=item_data["metadata"]["date"],
                    publicdate=item_data["metadata"]["publicdate"],
                    addeddate=item_data["metadata"]["addeddate"],
                )
            )

            for p in item_data["files"]:
                name = p["name"].lower()
                if handle.lower() not in name:
                    continue
                if not (
                    p["format"].upper() in ["JSON", "JPEG", "HTML"]
                    or name.endswith(("ads.txt", "robots.txt"))
                ):
                    continue

                file_dict = dict(
                    identifier=identifier,
                    handle=handle,
                    file_name=p["name"],
                    url=f"https://archive.org/download/{identifier}/{p['name']}",
                    mtime=datetime.fromtimestamp(int(p["mtime"])),
                    size=p["size"],
                    md5=p["md5"],
                    sha1=p["sha1"],
                )

                if name.endswith(".jpg"):
                    file_dict["type"] = "fullpage" if "fullpage" in name else "cropped"
                    screenshot_writer.writerow(file_dict)
                elif "accessibility" in name:
                    a11y_writer.writerow(file_dict)
                elif "hyperlinks" in name:
                    hyperlinks_writer.writerow(file_dict)
                elif "lighthouse" in name:
                    lighthouse_writer.writerow(file_dict)
                elif "wayback" in name:
                    wayback_writer.writerow(file_dict)
                elif name.endswith(".html"):
                    html_writer.writerow(file_dict)
                elif name.endswith("ads.txt"):
                    adstxt_writer.writerow(file_dict)
                elif name.endswith("robots.txt"):
                    robotstxt_writer.writerow(file_dict)
                else:
                    raise ValueError(f"File name {name} doesn't have an output file")

            file_name.unlink()

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
        try:
            with session.get(
                f"{base_url}/{name}",
                stream=True,
                timeout=request_timeout,
            ) as r:
                r.raise_for_status()
                with open(dest, "wb") as fh:
                    for chunk in r.iter_content(chunk_size=65536):
                        fh.write(chunk)
            return (name, None)
        except Exception as e:  # noqa: BLE001  record per-file errors; the batch continues
            return (name, str(e))

    failures: list[tuple[str, str]] = []
    total = len(json_files)
    with ThreadPoolExecutor(max_workers=max_workers) as pool:
        futures = [pool.submit(download_one, f) for f in json_files]
        for i, fut in enumerate(as_completed(futures), start=1):
            name, err = fut.result()
            if err is not None:
                failures.append((name, err))
            if i % 500 == 0 or i == total:
                print(f"Downloaded {i}/{total}")

    if failures:
        print(f"⚠️ {len(failures)} downloads failed:")
        for name, err in failures[:10]:
            print(f"  - {name}: {err}")
        if len(failures) > 10:
            print(f"  ... and {len(failures) - 10} more")

    print(f"✓ Downloaded {len(json_files) - len(failures)} files to {items_path}")
    return items_path
