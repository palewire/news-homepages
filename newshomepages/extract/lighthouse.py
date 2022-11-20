import pathlib
import typing

import click
import pandas as pd
from rich import print

from .. import utils
from .utils import _get_json_url


@click.group()
def cli():
    """Download and parse the provided site's Lighthouse files."""
    pass


@cli.command()
@click.option("--site", "site", default=None)
@click.option("--country", "country", default=None)
@click.option("--language", "language", default=None)
@click.option("--bundle", "bundle", default=None)
@click.option("--days", "days", default=None)
@click.option("--output-path", "output_path", default=None)
def lighthouse(
    site: typing.Optional[str] = None,
    country: typing.Optional[str] = None,
    language: typing.Optional[str] = None,
    bundle: typing.Optional[str] = None,
    days: typing.Optional[str] = None,
    output_path: typing.Optional[str] = None,
):
    """Download and parse the provided site's Lighthouse files."""
    # Get all lighthouse files
    lighthouse_df = utils.get_lighthouse_df().sort_values(["handle", "date"])

    # Get the data we want
    if site:
        data = utils.get_site(site)
        slug = data["handle"].lower()
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower() == data["handle"].lower()
        ]
    elif country:
        site_list = utils.get_sites_in_country(country)
        slug = country.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower().isin(handle_list)
        ].copy()
    elif language:
        site_list = utils.get_sites_in_language(language)
        slug = language.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower().isin(handle_list)
        ].copy()
    elif bundle:
        site_list = utils.get_sites_in_bundle(bundle)
        slug = bundle.lower()
        handle_list = [s["handle"].lower() for s in site_list]
        filtered_df = lighthouse_df[
            lighthouse_df.handle.str.lower().isin(handle_list)
        ].copy()
    else:
        slug = "all"
        filtered_df = lighthouse_df

    if days:
        cutoff_date = filtered_df["date"].max() - pd.Timedelta(days=int(days))
        filtered_df = filtered_df[filtered_df["date"] >= cutoff_date].copy()
        print(f"Trimming to last {days} days")

    # See how many files we don't have yet
    archived_files = set(filtered_df.url.unique())
    print(f"{len(archived_files)} qualified files")

    # Go get the files
    filtered_df["json"] = filtered_df.url.apply(_get_json_url)

    # Parse out the values we want
    def _parse_metrics(row):
        # Get representative run
        run_list = row["json"].to_dict(orient="records")
        representative_run = next(
            r for r in run_list if r["isRepresentativeRun"] is True
        )

        # Pull out the metrics
        d = representative_run["summary"]

        # Add them to the row
        row["performance"] = d["performance"]
        row["accessibility"] = d["accessibility"]
        row["best_practices"] = d["best-practices"]
        row["seo"] = d["seo"]
        row["pwa"] = d["pwa"]

        # Drop the JSON
        del row["json"]

        # Return the row
        return row

    parsed_df = filtered_df.apply(_parse_metrics, axis=1).sort_values(
        ["handle", "date"], ascending=[True, True]
    )

    # Drop columns we don't need
    trimmed_df = parsed_df[
        [
            "identifier",
            "handle",
            "file_name",
            "date",
            "performance",
            "accessibility",
            "best_practices",
            "seo",
            "pwa",
        ]
    ]

    # Write out the file
    if output_path is None:
        output_path_obj = utils.ANALYSIS_DIR / f"{slug}-lighthouse.csv"
    else:
        output_path_obj = pathlib.Path(output_path)
    print(f":pencil: Writing {len(trimmed_df)} rows to {output_path_obj}")
    trimmed_df.to_csv(output_path_obj, index=False)
