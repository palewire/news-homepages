import json
import logging

import click

from . import utils

logger = logging.getLogger(__name__)


@click.group()
def cli():
    """Print a batch of sites."""
    pass


@cli.command()
@click.argument("batch")
@click.option("-b", "--batches", "batches", default=4)
def sites_by_batch(batch: str, batches: str):
    """Print site handles in the provided batch as a JSON list."""
    site_list = utils.get_site_list()
    batch_list = list(_batch(site_list, int(batches)))
    if int(batch) - 1 not in range(int(batches)):
        raise ValueError("Batch number not found")
    _dump(batch_list[int(batch) - 1])


@cli.command()
@click.argument("bundle")
def sites_by_bundle(bundle: str):
    """Print site handles in the provided bundle as a JSON list."""
    site_list = utils.get_sites_in_bundle(bundle)
    _dump(site_list)


def _dump(site_list: list[dict]):
    """Print out the provided site list as JSON."""
    handle_list = [s["handle"] for s in site_list]
    data = json.dumps(handle_list, indent=2)
    click.echo(data)


def _batch(li: list, n: int):
    """Yield n number of sequential chunks from l."""
    d, r = divmod(len(li), n)
    for i in range(n):
        si = (d + 1) * (i if i < r else r) + d * (0 if i < r else i - r)
        yield li[si : si + (d + 1 if i < r else d)]


if __name__ == "__main__":
    cli()
