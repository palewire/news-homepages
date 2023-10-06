import pytest
from click.testing import CliRunner

from newshomepages import accessibility


@pytest.mark.vcr()
def test_accessibility_cli(tmp_path):
    """Test a single accessibility run."""
    runner = CliRunner()
    result = runner.invoke(
        accessibility.cli, ["latimes", "-o", tmp_path, "--timeout=240"]
    )
    assert result.exit_code == 0
