from click.testing import CliRunner

from newshomepages import screenshot


def test_single(tmp_path):
    """Test a single screenshot."""
    runner = CliRunner()
    result = runner.invoke(screenshot.cli, ["latimes", "-o", tmp_path])
    assert result.exit_code == 0
