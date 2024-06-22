"""Package for distribution."""
import os
import time

from setuptools import find_packages, setup
from setuptools_scm.version import guess_next_version


def read(file_name):
    """Read in the supplied file name from the root directory.

    Args:
        file_name (str): the name of the file

    Returns: the content of the file
    """
    this_dir = os.path.dirname(__file__)
    file_path = os.path.join(this_dir, file_name)
    with open(file_path) as f:
        return f.read()


def version_scheme(version):
    """Version scheme hack for setuptools_scm.

    Appears to be necessary to due to the bug documented at
    https://github.com/pypa/setuptools_scm/issues/342

    If that issue is resolved, this method can be removed.
    """
    if version.exact:
        return version.format_with("{tag}")
    else:
        _super_value = version.format_next_version(guess_next_version)
        now = int(time.time())
        return _super_value + str(now)


def local_version(version):
    """Local version scheme hack for setuptools_scm.

    Appears to be necessary to due to the bug documented at
    https://github.com/pypa/setuptools_scm/issues/342

    If that issue is resolved, this method can be removed.
    """
    return ""


setup(
    name="newshomepages",
    description="An open-source archive that gathers, saves, shares and analyzes news homepages",
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    author="Ben Welsh",
    author_email="b@palewi.re",
    url="https://homepages.news",
    license="GPLv3",
    packages=find_packages(include=["newshomepages"]),
    include_package_data=True,
    zip_safe=False,
    entry_points={
        "console_scripts": [
            "newshomepages-accessibility=newshomepages.accessibility:cli",
            "newshomepages-adstxt=newshomepages.adstxt:cli",
            "newshomepages-analyze=newshomepages.analyze:cli",
            "newshomepages-archive=newshomepages.archive:cli",
            "newshomepages-batch=newshomepages.batch:cli",
            "newshomepages-extract=newshomepages.extract:cli",
            "newshomepages-hyperlinks=newshomepages.hyperlinks:cli",
            "newshomepages-mosaic=newshomepages.mosaic:cli",
            "newshomepages-robotstxt=newshomepages.robotstxt:cli",
            "newshomepages-rss=newshomepages.rss:cli",
            "newshomepages-screenshot=newshomepages.screenshot:cli",
            "newshomepages-site=newshomepages.site:cli",
            "newshomepages-slack=newshomepages.slack:cli",
            "newshomepages-toot=newshomepages.toot:cli",
            "newshomepages-wayback=newshomepages.wayback:cli",
        ],
    },
    install_requires=[
        "click",
        "pytz",
        "internetarchive",
        "python-slugify",
        "playwright",
        "bs4",
        "html5lib",
        "jinja2",
        "shot-scraper",
        "pillow",
        "pandas",
        "rich",
        "iso3166",
        "python-iso639",
        "certifi",
        "requests",
        "retry",
        "storysniffer",
        "spacy",
        "spectra",
        "Mastodon.py",
        "sqlite-robotstxt",
    ],
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Topic :: System :: Archiving",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content :: News/Diary",
    ],
    setup_requires=["setuptools_scm"],
    use_scm_version={"version_scheme": version_scheme, "local_scheme": local_version},
    project_urls={
        "Maintainer": "https://palewi.re/who-is-ben-welsh/",
        "Source": "https://github.com/palewire/news-homepages",
        "Tracker": "https://github.com/palewire/news-homepages/issues",
    },
)
