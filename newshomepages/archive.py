import logging
import os
import re
import typing
from datetime import datetime
from pathlib import Path

import click
import internetarchive
import pytz
from rich import print

from . import utils

IA_ACCESS_KEY = os.getenv("IA_ACCESS_KEY")
IA_SECRET_KEY = os.getenv("IA_SECRET_KEY")
IA_COLLECTION = os.getenv("IA_COLLECTION")


@click.command()
@click.argument("handle")
@click.option("-i", "--input-dir", "input_dir", default="./")
@click.option(
    "--verbose",
    "verbose",
    is_flag=True,
    default=False,
    help="Display the upload progress to archive.org",
)
@click.option("--retries", "retries", default="5")
@click.option("--retries-sleep", "retries_sleep", default="30")
@click.option("--timeout", "timeout", default="60")
def cli(
    handle: str,
    input_dir: str,
    verbose: bool = False,
    retries: str = "5",
    retries_sleep: str = "30",
    timeout: str = "60",
):
    """Save assets to an archive.org collection."""
    # Verify we have all the credentials
    assert IA_ACCESS_KEY
    assert IA_SECRET_KEY
    assert IA_COLLECTION

    # Get the input path and make sure it exists
    input_path = Path(input_dir).absolute()
    assert input_path.exists()

    # Get the user
    data = utils.get_site(handle)

    # Turn on verbose logging, if the user asked for it
    if verbose:
        logging.basicConfig()

    # If there are no file, squawk but move on
    file_dict = _get_file_dict(data, input_path)
    if not file_dict:
        print(f"No files found for {data['handle']}")
        return

    # Upload into an "item" keyed to the site's handle and year
    handle = data["handle"]
    local_now = _get_now_local(data)
    site_identifier = f"{_clean_handle(handle)}-{local_now.strftime('%Y')}"
    site_metadata = _get_item_metadata(data)
    print(
        f"📚 Saving timestamped `{handle}` assets to archive.org `{IA_COLLECTION}` collection's `{site_identifier}`"
    )
    _upload(
        data,
        site_identifier,
        site_metadata,
        file_dict,
        verbose,
        retries=int(retries),
        retries_sleep=int(retries_sleep),
        timeout=int(timeout)
    )

    # Once that finishes, if there's a JPG file, symlink it as the latest image
    image_path = input_path / f"{handle}.jpg"
    if image_path.exists():
        latest_identifier = "latest-homepages"
        print(
            f"📚 Saving latest `{handle}` assets to archive.org `{IA_COLLECTION}` collection's `{latest_identifier}` item"
        )
        latest_metadata = dict(
            title="Latest homepages",
            collection=IA_COLLECTION,
            mediatype="image",
            publisher="https://homepages.news",
            contributor="https://homepages.news",
        )
        latest_dict = {f"{_clean_handle(handle)}.jpg": image_path}
        _upload(
            data,
            latest_identifier,
            latest_metadata,
            latest_dict,
            verbose,
            retries=int(retries),
            retries_sleep=int(retries_sleep),
            timeout=int(timeout)
        )


def _clean_handle(s):
    """Santize a handle so its safe to use as an archive.org slug."""
    # Take it down
    s = s.lower()

    # Replace any leading underscores, which don't work on archive.org
    s = re.sub("^(_+)", "", s)

    # Pass it back
    return s


def _get_now_local(data: typing.Dict) -> datetime:
    """Get the current time in the provided site's timezone."""
    now = datetime.now()
    tz = pytz.timezone(data["timezone"])
    return now.astimezone(tz)


def _get_item_metadata(data: typing.Dict) -> typing.Dict:
    """Convert a site's metadata into the format we'll use in its archive.org item."""
    # Verify we have an archive.org collection
    assert IA_COLLECTION

    # Get the current year where the site is based,
    # since we segment each site's items by calendar year.
    now_year = _get_now_local(data).strftime("%Y")

    # Format a metadata dictionary ready to post to the archive.org upload method
    return dict(
        title=f"{data['name']} homepages in {now_year}",
        collection=IA_COLLECTION,
        mediatype="image",
        publisher=data["url"],
        date=now_year,
        contributor="https://homepages.news"
    )


def _get_file_dict(data: typing.Dict, input_dir: Path) -> typing.Dict:
    """Get a dictionary of timestamped files to upload to our archive.org collection."""
    # Set the input paths
    handle = _clean_handle(data["handle"])
    image_path = input_dir / f"{handle}.jpg"
    a11y_path = input_dir / f"{handle}.accessibility.json"
    hyperlinks_path = input_dir / f"{handle}.hyperlinks.json"
    lighthouse_path = input_dir / f"{handle}.lighthouse.json"
    wayback_path = input_dir / f"{handle}.wayback.json"

    # Get the local time where the site is based
    now_local = _get_now_local(data)

    # Convert it to ISO format for timestamping our files
    now_iso = now_local.isoformat()

    # Grab the files that exist and timestamp them
    file_dict = {}
    if image_path.exists():
        file_dict[f"{handle}-{now_iso}.jpg"] = image_path
    if a11y_path.exists():
        file_dict[f"{handle}-{now_iso}.accessibility.json"] = a11y_path
    if hyperlinks_path.exists():
        file_dict[f"{handle}-{now_iso}.hyperlinks.json"] = hyperlinks_path
    if lighthouse_path.exists():
        file_dict[f"{handle}-{now_iso}.lighthouse.json"] = lighthouse_path
    if wayback_path.exists():
        file_dict[f"{handle}-{now_iso}.wayback.json"] = wayback_path

    # Return it
    return file_dict


def _upload(
    data: typing.Dict,
    identifier: str,
    metadata: typing.Dict,
    files: typing.Dict,
    verbose: bool = False,
    retries: int = 5,
    retries_sleep: int = 30,
    timeout: int = 60,
):
    """Upload the provided data to archive.org."""
    # Make sure secrets are there
    assert IA_ACCESS_KEY
    assert IA_SECRET_KEY

    # Set all the keyword arguments
    kwargs = dict(
        # Authentication
        access_key=IA_ACCESS_KEY,
        secret_key=IA_SECRET_KEY,
        # Metadata about the item
        metadata=metadata,
        # The items we'll upload
        files=files,
        # Other options
        verbose=verbose,
        retries=retries,
        retries_sleep=retries_sleep,
        request_kwargs=dict(timeout=timeout)
    )

    # Upload it
    internetarchive.upload(identifier, **kwargs)


if __name__ == "__main__":
    cli()
