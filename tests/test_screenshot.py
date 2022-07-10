import tempfile

from click.testing import CliRunner

from newshomepages import screenshot

TEMP_DIR = tempfile.gettempdir()


def test_single():
    """Test a single screenshot."""
    runner = CliRunner()
    result = runner.invoke(screenshot.cli, ["latimes", "-o", TEMP_DIR])
    assert result.exit_code == 0
