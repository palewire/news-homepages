from click.testing import CliRunner

from newshomepages import accessibility


def test_accessibility_cli(tmp_path):
    """Test a single accessibility run."""
    runner = CliRunner()
    result = runner.invoke(
        accessibility.cli, ["latimes", "-o", tmp_path, "--timeout=240"]
    )
    assert result.exit_code == 0
