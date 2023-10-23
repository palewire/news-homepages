import json
import zipfile
from datetime import datetime
from pathlib import Path

import click
from retry import retry
from rich import print
from rich.progress import track

from .. import utils


@click.group()
def cli():
    """Consolidate Internet Archive metadata into CSV files."""
    pass


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
    zf = _get_zip_archive(output_path)
    json_list = [f for f in zf.namelist() if f.endswith(".json")]
    item_list = []
    file_list = []
    for file_name in track(json_list):
        # Read the data out of the zip file
        with zf.open(file_name) as fp:
            item_data = json.loads(fp.read())

        # Pull out the data we want to keep
        identifier = file_name.replace(".json", "")
        handle = identifier[:-5]
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
        qualified_files = [
            p
            for p in item_data["files"]
            if (
                handle in p["name"].lower()
                and (
                    p["format"] in ["JSON", "JPEG", "HTML"]
                    or p["name"].lower().endswith("ads.txt")
                    or p["name"].lower().endswith("robots.txt")
                )
            )
        ]

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
        name = f["file_name"]
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

    # Delete the zip file
    zip_path = output_path / "latest.zip"
    zip_path.unlink()


@retry(tries=3, delay=180, backoff=2)
def _get_zip_archive(output_dir: Path):
    print("⬇️ Downloading latest data")
    zip_url = "https://archive.org/compress/latest-homepages/formats=JSON,JPEG,ITEM%20TILE,ARCHIVE%20BITTORRENT,METADATA"
    zip_path = output_dir / "latest.zip"
    utils.download_url(zip_url, zip_path)
    return zipfile.ZipFile(zip_path)
