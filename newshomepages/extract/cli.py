import click

from .accessibility import cli as cli_accessibility
from .consolidate import cli as cli_consolidate
from .hyperlinks import cli as cli_hyperlinks
from .items import cli as cli_items
from .lighthouse import cli as cli_lighthouse
from .robotstxt import cli as cli_robotstxt
from .wayback import cli as cli_wayback

cli_group = click.CommandCollection(
    sources=[
        cli_consolidate,
        cli_items,
        cli_accessibility,
        cli_hyperlinks,
        cli_lighthouse,
        cli_robotstxt,
        cli_wayback,
    ]
)

if __name__ == "__main__":
    cli_group()
