from __future__ import annotations

from pathlib import Path

import jinja2

from .. import utils

PARENT_DIR = Path(__file__).parent.parent.parent
TEMPLATE_DIR = PARENT_DIR / "_site" / "_templates/"
TEMPLATE_LOADER = jinja2.FileSystemLoader(searchpath=TEMPLATE_DIR)
TEMPLATE_ENV = jinja2.Environment(loader=TEMPLATE_LOADER)
CHARTS_DIR = utils.SITE_DIR / "_static" / "charts"


def _write_template(
    template_name: str, context: dict, output_name: str | Path | None = None
) -> None:
    template = TEMPLATE_ENV.get_template(f"{template_name}.tmpl")
    md = template.render(**context)
    output_path = PARENT_DIR / "_site" / (output_name or template_name)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w") as fh:
        fh.write(md)
