import pytest
from click.testing import CliRunner

from newshomepages import hyperlinks


@pytest.mark.vcr()
def test_single(tmp_path):
    """Test a single hyperlinks download."""
    runner = CliRunner()
    result = runner.invoke(hyperlinks.cli, ["latimes", "-o", tmp_path])
    assert result.exit_code == 0
