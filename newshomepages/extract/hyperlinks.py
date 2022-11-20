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
    pass


@cli.command()
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--days", "days", default="90")
@click.option("--output-path", "output_path", default=None)
def hyperlinks(
    site: typing.Optional[str] = None,
    country: typing.Optional[str] = None,
    language: typing.Optional[str] = None,
    bundle: typing.Optional[str] = None,
    days: typing.Optional[str] = None,
    output_path: typing.Optional[str] = None,
):
    """Download and parse the provided site's hyperlinks files."""
    # Get all lighthouse files
    hyperlink_df = utils.get_hyperlink_df().sort_values(["handle", "date"])

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

    handle_list = [s["handle"].lower() for s in site_list]
    filtered_df = hyperlink_df[hyperlink_df.handle.str.lower().isin(handle_list)].copy()

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] > cutoff_date].copy()
        print(f"Trimming to last {days} days")

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
        output_path_obj = utils.ANALYSIS_DIR / f"{slug}-hyperlinks.csv"
    else:
        output_path_obj = pathlib.Path(output_path)
    print(f":pencil: Writing {len(flat_df)} rows to {output_path_obj}")
    flat_df.to_csv(output_path_obj, index=False)
