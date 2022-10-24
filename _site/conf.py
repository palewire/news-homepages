import os
import sys
from datetime import datetime
from pathlib import Path

THIS_DIR = Path(__file__).parent.absolute()

sys.path.insert(0, os.path.abspath(".."))
sys.path.insert(0, str(THIS_DIR.parent))

extensions = [
    "myst_parser",
    "sphinx.ext.autodoc",
    "sphinxcontrib.napoleon",
    "sphinx_click",
]
templates_path = ["_templates"]
source_suffix = ".rst"
master_doc = "index"
html_extra_path = ["_extra"]

project = "News Homepages"
year = datetime.now().year
copyright = f"{year} Ben Welsh"

exclude_patterns = ["_build"]

html_theme = "alabaster"
html_sidebars = {
    "**": [
        "about.html",
        "navigation.html",
        "relations.html",
        "searchbox.html",
        "donate.html",
    ]
}
html_theme_options = {
    "canonical_url": f"https://palewi.re/docs/{project}/",
    "show_powered_by": False,
    "show_relbar_bottom": True,
}

html_static_path = ["_static"]
html_css_files = [
    "css/custom.css",
]
html_js_files = [
    "https://cdn.jsdelivr.net/npm/vega@5.22.1",
    "https://cdn.jsdelivr.net/npm/vega-lite@5.2.0",
    "https://cdn.jsdelivr.net/npm/vega-embed@6.20.8",
]

pygments_style = "sphinx"
