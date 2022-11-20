import pytest
from click.testing import CliRunner

from newshomepages.extract import cli


@pytest.mark.internetarchive
def test_extract_item(tmp_path):
    """Test a site's item download."""
    runner = CliRunner()
    result = runner.invoke(cli, ["items", "--site=latimes", f"-o={tmp_path}"])
    assert result.exit_code == 0
