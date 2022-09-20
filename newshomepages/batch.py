import json
import typing

import click

from . import utils


@click.group()
def cli():
    """Print a batch of sites."""
    pass


@cli.command()
@click.argument("batch")
@click.option("-b", "--batches", "batches", default=10)
def sites_by_batch(batch: str, batches: str):
    """Print site handles in the provided batch as a JSON list."""
    site_list = utils.get_site_list()
    batch_list = list(utils.batch(site_list, int(batches)))
    if int(batch) - 1 not in range(int(batches)):
        raise ValueError("Batch number not found")
    _dump(batch_list[int(batch) - 1])


@cli.command()
@click.argument("bundle")
def sites_by_bundle(bundle: str):
    """Print site handles in the provided bundle as a JSON list."""
    site_list = utils.get_sites_in_bundle(bundle)
    _dump(site_list)


@cli.command()
@click.argument("country")
def sites_by_country(country: str):
    """Print site handles in the provided country as a JSON list."""
    site_list = utils.get_sites_in_country(country)
    _dump(site_list)


def _dump(site_list: typing.List):
    """Print out the provided site list as JSON."""
    handle_list = [s["handle"].lower() for s in site_list]
    data = json.dumps(handle_list, indent=2)
    click.echo(data)


if __name__ == "__main__":
    cli()
