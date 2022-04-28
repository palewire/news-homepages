from pathlib import Path

import click
import jinja2

from . import utils


@click.command()
def main():
    """Update templated documentation pages."""
    click.echo("Updating documentation")

    this_dir = Path(__file__).parent
    parent_dir = this_dir.parent
    loader = jinja2.FileSystemLoader(searchpath=parent_dir / "docs" / "_templates/")
    env = jinja2.Environment(loader=loader)

    site_list = sorted(utils.get_site_list(), key=lambda x: x["name"])

    context = {
        "site_list": site_list,
    }
    template = env.get_template("sources.md.tmpl")
    md = template.render(**context)

    with open(parent_dir / "docs" / "sources.md", "w") as fh:
        fh.write(md)


if __name__ == "__main__":
    main()
