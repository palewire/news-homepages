from click.testing import CliRunner

from newshomepages import html


def test_single(tmp_path):
    """Test a single HTML save."""
    runner = CliRunner()
    result = runner.invoke(html.cli, ["latimes", "-o", tmp_path])
    assert result.exit_code == 0
