import csv
import json
import os
import time
from datetime import datetime

import click
import internetarchive

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")


@click.group()
def cli():
    """Extract data from the Internet Archive collection."""
    pass


@cli.command()
def download():
    """Download the full list of Internet Archive items as JSON."""
    click.echo(
        f"Extracting metadata for the Internet Archive collection {IA_COLLECTION}"
    )
    collection = internetarchive.get_item(IA_COLLECTION)
    with open(utils.EXTRACT_DIR / "json" / f"{IA_COLLECTION}.json", "w") as fh:
        json.dump(collection.item_metadata, fh, indent=2)

    item_list = internetarchive.search_items(
        f"collection:{IA_COLLECTION}"
    ).iter_as_items()
    for item in item_list:
        click.echo(f"Extracting metadata for the {item.identifier} item")
        with open(utils.EXTRACT_DIR / "json" / f"{item.identifier}.json", "w") as fh:
            json.dump(item.item_metadata, fh, indent=2)
            time.sleep(0.2)


@cli.command()
def consolidate():
    """Consolidate Internet Archive metadata into CSV files."""
    # Get all of the JSON files
    json_dir = utils.EXTRACT_DIR / "json"
    json_list = list(json_dir.glob("*.json"))

    # Set up some stuff for outputs later on
    site_output = []
    items_output = []
    screenshot_output, a11y_output, hyperlinks_output = [], [], []

    # Loop through all the sites
    for site in utils.get_site_list():
        # Pull out the data we like
        site_dict = dict(
            handle=site["handle"],
            name=site["name"],
            url=site["url"],
            timezone=site["timezone"],
        )
        # Add to the output list
        site_output.append(site_dict)

        # Get all the items for this site
        site_json_list = [
            p for p in json_list if site["handle"].lower() in p.name.lower()
        ]

        # Parse out the data
        for site_json in site_json_list:
            # Open the file
            item_data = json.load(open(site_json))

            # Pull out the data we want to keep
            item_dict = dict(
                identifier=item_data["metadata"]["identifier"],
                handle=site["handle"],
                file_name=site_json.name,
                title=item_data["metadata"]["title"],
                date=item_data["metadata"]["date"],
                publicdate=item_data["metadata"]["publicdate"],
                addeddate=item_data["metadata"]["addeddate"],
            )

            # Add to the output list
            items_output.append(item_dict)

            # Get the files in this item
            file_list = [
                p
                for p in item_data["files"]
                if (
                    site["handle"].lower() in p["name"].lower()
                    and p["format"] in ["JSON", "JPEG"]
                )
            ]

            # Loop through all of the files in the item
            for file in file_list:
                file_dict = dict(
                    identifier=item_data["metadata"]["identifier"],
                    handle=site["handle"],
                    file_name=file["name"],
                    url=f"https://archive.org/download/{item_data['metadata']['identifier']}/{file['name']}",
                    mtime=datetime.fromtimestamp(int(file["mtime"])),
                    size=file["size"],
                    md5=file["md5"],
                    sha1=file["sha1"],
                )
                # https://archive.org/download/lehuffpost-2022/lehuffpost-2022-04-09T15%3A43%3A17.585783%2B02%3A00.jpg
                if file["format"] == "JPEG":
                    screenshot_output.append(file_dict)
                elif "accessibility" in file["name"]:
                    a11y_output.append(file_dict)
                elif "hyperlinks" in file["name"]:
                    hyperlinks_output.append(file_dict)
                else:
                    raise ValueError(
                        f"File name {file['name']} doesn't have an output file"
                    )

    # Write out the data
    csv_dir = utils.EXTRACT_DIR / "csv"

    # Sites
    with open(csv_dir / "sites.csv", "w") as fh:
        writer = csv.DictWriter(fh, fieldnames=site_output[0].keys())
        writer.writeheader()
        writer.writerows(site_output)

    # Items
    with open(csv_dir / "items.csv", "w") as fh:
        writer = csv.DictWriter(fh, fieldnames=items_output[0].keys())
        writer.writeheader()
        writer.writerows(items_output)

    # Screenshots
    with open(csv_dir / "screenshot-files.csv", "w") as fh:
        writer = csv.DictWriter(fh, fieldnames=screenshot_output[0].keys())
        writer.writeheader()
        writer.writerows(screenshot_output)

    # Accessibility
    with open(csv_dir / "accessibility-files.csv", "w") as fh:
        writer = csv.DictWriter(fh, fieldnames=a11y_output[0].keys())
        writer.writeheader()
        writer.writerows(a11y_output)

    # Hyperlinks
    with open(csv_dir / "hyperlink-files.csv", "w") as fh:
        writer = csv.DictWriter(fh, fieldnames=hyperlinks_output[0].keys())
        writer.writeheader()
        writer.writerows(hyperlinks_output)


if __name__ == "__main__":
    cli()
