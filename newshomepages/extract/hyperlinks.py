import pathlib
import typing

import click
import pandas as pd
from rich import print

from .. import utils
from .utils import _get_json_url


@click.group()
def cli():
    """Download and parse the provided site's hyperlinks files."""


@cli.command()
@click.option("-s", "--site", "site", default=None)
@click.option("-c", "--country", "country", default=None)
@click.option("-l", "--language", "language", default=None)
@click.option("-b", "--bundle", "bundle", default=None)
@click.option("-d", "--days", "days", default="90")
@click.option("-u", "--use-cache", "use_cache", default=False, is_flag=True)
@click.option("-o", "--output-path", "output_path", default=None)
def hyperlinks(
    site: str | None = None,
    country: str | None = None,
    language: str | None = None,
    bundle: str | None = None,
    days: str | None = None,
    use_cache: bool = False,
    output_path: typing.Any | None = None,
):
    """Download and parse the provided site's hyperlinks files."""
    # Get all hyperlink files
    hyperlink_df = utils.get_hyperlink_df(
        use_cache=use_cache, verbose=True
    ).sort_values(["handle", "date"])

    # Get the data we want
    if site:
        site_list = [utils.get_site(site)]
        slug = site.lower()
    elif country:
        site_list = utils.get_sites_in_country(country)
        slug = country.lower()
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()

    # Filter down to the sites we want
    handle_list = [s["handle"] for s in site_list]
    filtered_df = hyperlink_df[hyperlink_df.handle.isin(handle_list)].copy()

    # Filter down to the days we want
    if days:
        max_date = filtered_df["date"].max()
        cutoff_date = max_date - pd.Timedelta(days=int(days))
        print(
            f"Trimming to last {days} days from {cutoff_date:%Y-%m-%d} to {max_date:%Y-%m-%d}"
        )
        filtered_df = filtered_df[filtered_df["date"] > cutoff_date].copy()

    # See how many files there are
    archived_files = set(filtered_df.url.unique())
    print(f"{len(archived_files)} qualified files")

    # Go get the files
    filtered_df["json"] = filtered_df.url.apply(_get_json_url)

    def _parse_hyperlinks(row):
        flat_row_list = []
        for d in row["json"].to_dict(orient="records"):
            flat_row = dict(
                identifier=row["identifier"],
                handle=row["handle"],
                file_name=row["file_name"],
                date=row["date"],
                text=d["text"],
                url=d["url"],
            )
            flat_row_list.append(flat_row)
        return flat_row_list

    flat_row_list = []
    for row in filtered_df.to_dict(orient="records"):
        flat_row_list += _parse_hyperlinks(row)
    flat_df = pd.DataFrame(flat_row_list)

    # Write out the file
    if output_path is None:
        output_path = f"{slug}-hyperlinks.csv"
    else:
        output_path = pathlib.Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)
    print(f":pencil: Writing {len(flat_df)} rows to {output_path}")
    flat_df.to_csv(output_path, index=False)
