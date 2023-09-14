import sqlite3

import sqlite_robotstxt
from click.testing import CliRunner

from newshomepages import robotstxt


def test_robotstxt_cli(tmp_path):
    """Test a single robots.txt request."""
    runner = CliRunner()
    result = runner.invoke(robotstxt.cli, ["latimes", "-o", tmp_path])
    assert result.exit_code == 0


def test_sqlite_extensions():
    """Verify that the sqlite extension can be loaded."""
    db = sqlite3.connect(":memory:")
    db.enable_load_extension(True)
    sqlite_robotstxt.load(db)
    db.enable_load_extension(False)
    db.execute("select robotstxt_version()").fetchone()
    db.close()
