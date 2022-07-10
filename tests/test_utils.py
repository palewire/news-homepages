from newshomepages import utils


def test_sites():
    """Test sites utils."""
    site_list = utils.get_site_list()
    assert len(site_list) > 0
    assert utils.get_site("latimes")["name"] == "Los Angeles Times"
    unique_handles = {i["handle"].lower() for i in site_list}
    assert len(site_list) == len(unique_handles)


def test_bundles():
    """Test bundles utils."""
    assert len(utils.get_bundle_list()) > 0
    assert utils.get_bundle("socal")["name"] == "Southern California"


def test_javascript():
    """Test javascript utils."""
    assert utils.get_javascript("latimes") is not None
    assert utils.get_javascript("foobar") is None


def test_numoji():
    """Test numoji util."""
    assert utils.numoji("1") == "1️⃣"
