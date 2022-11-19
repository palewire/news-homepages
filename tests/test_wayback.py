from click.testing import CliRunner

from newshomepages import wayback


def test_wayback_site(tmp_path):
    """Test a single wayback archive request."""
    runner = CliRunner()
    result = runner.invoke(wayback.cli, ["latimes", "-o", tmp_path])
    assert result.exit_code == 0
