import click

from .drudge import cli as cli_drudge
from .latest_screenshots import cli as cli_latest_screenshots

cli_group = click.CommandCollection(
    sources=[
        cli_drudge,
        cli_latest_screenshots,
    ]
)

if __name__ == "__main__":
    cli_group()
