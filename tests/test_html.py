import tempfile

from click.testing import CliRunner

from newshomepages import html

TEMP_DIR = tempfile.gettempdir()


def test_single():
    """Test a single HTML save."""
    runner = CliRunner()
    result = runner.invoke(html.cli, ["latimes", "-o", TEMP_DIR])
    assert result.exit_code == 0
