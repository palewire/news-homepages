from datetime import datetime
from pathlib import Path

import pytz

from newshomepages import utils


def test_safe_ia_handle():
    """Test safe_ia_handle."""
    assert utils.safe_ia_handle("_leadingunderscore") == "leadingunderscore"
    assert utils.safe_ia_handle("CamelCase") == "camelcase"
    try:
        utils.safe_ia_handle("white space")
    except ValueError:
        pass


def test_write_csv(tmpdir):
    """Test write_csv."""
    p = Path(tmpdir / "write_csv")
    utils.write_csv([{"foo": "bar"}], p)
    utils.write_csv([{"foo": "bar"}], p, verbose=False)


def test_write_json(tmpdir):
    """Test write_json."""
    p = Path(tmpdir / "write_json")
    utils.write_json({"foo": "bar"}, p)
    utils.write_json([{"foo": "bar"}], p)
    utils.write_json({"foo": "bar"}, p, indent=4)
    utils.write_json({"foo": "bar"}, p, verbose=False)


def test_get_local_time():
    """Test get_local_time."""
    latimes = utils.get_site("latimes")
    assert latimes["timezone"] == "America/Los_Angeles"
    assert utils.get_local_time(latimes).tzinfo is not None


def test_get_user_agent():
    """Test get_user_agent."""
    assert utils.get_user_agent()


def test_get_site_list():
    """Test get_site_list."""
    site_list = utils.get_site_list()
    assert len(site_list) > 0

    # Pull a name
    assert utils.get_site("latimes")["name"] == "Los Angeles Times"

    # Verify there are no duplicate handles
    unique_handles = {i["handle"] for i in site_list}
    assert len(site_list) == len(unique_handles)


def test_get_site_df():
    """Test get_site_df."""
    site_df = utils.get_site_df()

    # Make sure all the required fields are filled in
    assert not site_df.handle.isnull().any()
    assert not site_df.url.isnull().any()
    assert not site_df.name.isnull().any()
    assert not site_df.location.isnull().any()
    assert not site_df.wait.isnull().any()
    assert not site_df.timezone.isnull().any()
    assert not site_df.country.isnull().any()

    # Test timezones
    site_df.timezone.apply(lambda tz: pytz.timezone(tz))


def test_bundles():
    """Test bundles utils."""
    # Get bundles
    bundle_list = utils.get_bundle_list()
    assert len(bundle_list) > 0

    # Test timezones
    for b in bundle_list:
        pytz.timezone(b["timezone"])

    # Pull on by name
    assert utils.get_bundle("socal")["name"] == "Southern California"


def test_javascript():
    """Test javascript utils."""
    assert utils.get_javascript("latimes") is not None
    assert utils.get_javascript("foobar") is None


def test_numoji():
    """Test numoji util."""
    assert utils.numoji("1") == "1️⃣"


def test_intcomma():
    """Test intcomma."""
    assert utils.intcomma(1_000) == "1,000"
    assert utils.intcomma(1_000_000) == "1,000,000"


def test_url_parse():
    """Test the URL parser."""
    url = "https://archive.org/download/100reporters-2022/100reporters-2022-07-08T23:55:17.494439-04:00.hyperlinks.json"
    data = utils.parse_archive_url(url)
    assert data["handle"] == "100reporters"
    assert data["identifier"] == "100reporters-2022"
    assert data["timestamp"] == datetime.fromisoformat(
        "2022-07-08T23:55:17.494439-04:00"
    )


def test_get_extract():
    """Test the method to pull in an extract CSV."""
    utils.get_extract_df("sites.csv")


def test_get_url():
    """Test utils for getting data off the web."""
    utils.get_json_url(
        "https://archive.org/download/signalcleveland-2022/signalcleveland-2022-11-17T02%3A50%3A58.280867-05%3A00.wayback.json"
    )


def test_chunk():
    """Test the chunk utility."""
    assert len(utils.chunk([1, 2, 3, 4, 5], 2)) == 3
    assert len(utils.chunk([1, 2, 3, 4, 5], 5)) == 1
    assert len(utils.chunk([1, 2, 3, 4, 5], 4)) == 2


def test_batch():
    """Test the batch utility."""
    assert len(list(utils.batch([1, 2, 3, 4, 5], 2))) == 2
    assert len(list(utils.batch([1, 2, 3, 4, 5], 1))) == 1
