import click

from .accessibility_ranking import cli as cli_accessibility_ranking
from .bundle_detail import cli as cli_bundle_detail
from .bundle_list import cli as cli_bundle_list
from .country_detail import cli as cli_country_detail
from .country_list import cli as cli_country_list
from .drudge import cli as cli_drudge
from .language_detail import cli as cli_language_detail
from .language_list import cli as cli_language_list
from .latest_screenshots import cli as cli_latest_screenshots
from .openai import cli as cli_openai
from .performance_ranking import cli as cli_performance_ranking
from .site_detail import cli as cli_site_detail
from .source_list import cli as cli_source_list
from .status_report import cli as cli_status_report

cli_group = click.CommandCollection(
    sources=[
        cli_accessibility_ranking,
        cli_bundle_detail,
        cli_bundle_list,
        cli_country_detail,
        cli_country_list,
        cli_drudge,
        cli_language_detail,
        cli_language_list,
        cli_latest_screenshots,
        cli_openai,
        cli_performance_ranking,
        cli_site_detail,
        cli_source_list,
        cli_status_report,
    ]
)

if __name__ == "__main__":
    cli_group()
