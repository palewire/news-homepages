import os
from datetime import datetime
from pathlib import Path

from newshomepages import archive, utils


def test_archive_clean_handle():
    """Test archive handle cleaning."""

    def _get_handle(x):
        return utils.safe_ia_handle(utils.get_site(x)["handle"])

    assert _get_handle("latimes") == "latimes"
    assert _get_handle("_fiquemsabendo") == "fiquemsabendo"
    assert _get_handle("CNN") == "cnn"


def test_archive_metadata():
    """Test the method that creates a metadata dict for uploading to archive.org."""
    data = utils.get_site("latimes")
    metadata = archive._get_item_metadata(data)
    assert metadata["collection"] == os.getenv("IA_COLLECTION")
    assert metadata["title"] == f"{data['name']} homepages in {datetime.now().year}"


def test_archive_file_dict():
    """Test the method that creates a file dict that's uploaded to archive.org."""
    data = utils.get_site("latimes")
    this_dir = Path(__file__).parent.absolute()
    input_dir = this_dir / "files"
    d = archive._get_file_dict(data, input_dir)
    assert len(d.keys()) == 1
