"""Consolidate Internet Archive metadata into CSV files."""

from __future__ import annotations

import json
import random
import shutil
import time
from datetime import datetime
from pathlib import Path

import click
import libtorrent as lt
import requests
from rich import print
from rich.progress import track

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
    items_path = _get_items_torrent(output_path)
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


def _get_items_torrent(output_path: Path) -> Path:
    """Download a .torrent file and extract its contents using BitTorrent protocol.

    Args:
        output_path (str): Directory to save the downloaded content

    Returns:
        bool: True if successful, False otherwise
    """
    # Step 1: Download the .torrent file into memory
    print("Downloading .torrent file...")
    url = (
        "https://archive.org/download/latest-homepages/latest-homepages_archive.torrent"
    )
    response = requests.get(url)  # noqa: S113  (removed by HTTP consolidate PR)
    response.raise_for_status()
    # Keep torrent data in memory
    torrent_data = response.content
    print(f"✓ Downloaded .torrent file ({len(torrent_data)} bytes)")

    # Step 2: Use libtorrent to download the actual content
    print("Starting BitTorrent download...")
    # Initialize libtorrent session
    session = lt.session()

    # Enhanced session settings for better peer discovery
    settings = {
        "enable_dht": True,  # Enable DHT for trackerless torrents
        "enable_lsd": True,  # Enable Local Service Discovery
        "enable_upnp": True,  # Enable UPnP port mapping
        "enable_natpmp": True,  # Enable NAT-PMP port mapping
        "announce_to_all_trackers": True,  # Announce to all trackers
        "announce_to_all_tiers": True,  # Announce to all tiers
    }
    session.apply_settings(settings)

    # Set ports
    port_ranges = [(6881, 6891), (6901, 6911), (51413, 51423)]
    for start_port, end_port in port_ranges:
        try:
            session.listen_on(start_port, end_port)
            print(f"✓ Listening on ports {start_port}-{end_port}")
            break
        except Exception as e:  # noqa: BLE001  (removed by HTTP consolidate PR)
            print(f"✗ Failed to listen on ports {start_port}-{end_port}: {e}")
            continue

    # Load torrent info directly from memory
    torrent_info = lt.torrent_info(torrent_data)

    # Add torrent to session
    params = {
        "ti": torrent_info,
        "save_path": str(output_path),
    }
    handle = session.add_torrent(params)

    print(f"✓ Added torrent: {torrent_info.name()}")
    print(f"✓ Total size: {torrent_info.total_size() / (1024 * 1024):.1f} MB")
    print(f"✓ Number of files: {torrent_info.num_files()}")

    # Enhanced monitoring with timeout
    print("\nSearching for peers and downloading...")
    start_time = time.time()
    timeout_minutes = 30  # Set timeout in minutes
    timeout_seconds = timeout_minutes * 60

    while not handle.is_seed():
        status = handle.status()
        elapsed_time = time.time() - start_time

        # Check for timeout
        if elapsed_time > timeout_seconds:
            print(f"\n✗ Timeout after {timeout_minutes} minutes")
            raise TimeoutError(f"Download timed out after {timeout_minutes} minutes")

        progress_info = {
            "Progress": f"{status.progress * 100:.1f}%",
            "Download Rate": f"{status.download_rate / 1024:.1f} KB/s",
            "Upload Rate": f"{status.upload_rate / 1024:.1f} KB/s",
            "Peers": status.num_peers,
            "Seeds": status.num_seeds,
            "Elapsed": f"{elapsed_time / 60:.1f}m",
        }

        # Clear line and print progress
        print(
            f"\r{progress_info['Progress']} | "
            f"↓{progress_info['Download Rate']} | "
            f"↑{progress_info['Upload Rate']} | "
            f"Peers: {progress_info['Peers']} | "
            f"Seeds: {progress_info['Seeds']}",
            f"Time: {progress_info['Elapsed']}",
            end="\n",
        )

        time.sleep(1)

    print("\n✓ Download completed!")
    print(f"✓ Files saved to: {output_path}")
    return output_path / "latest-homepages"
