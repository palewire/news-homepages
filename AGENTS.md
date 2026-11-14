# Working on news-homepages

Instructions for coding assistants and humans.

## Setup

- `make install` installs everything with uv and downloads the Playwright browser.
- Use Python 3.13. Spacy has no wheels for 3.14 yet.

## Before opening a pull request

Run `make check`. It runs the same lint, type check and tests that CI runs.
Use `make format` to fix formatting and simple lint problems automatically.

## Known limits

- Playwright is capped below 1.57 in `pyproject.toml`. Newer versions removed
  `page.accessibility`, which `newshomepages/accessibility.py` relies on.
  Do not accept Dependabot bumps past the cap without rewriting that code.
- The CI workflows pin `ubuntu-24.04`. Spacy and Playwright do not support
  the newer `ubuntu-latest` image yet.

## Shipping changes

- Work on a branch, open a pull request, and let CI run. Ignore the Snyk and
  WIP checks. They are not meaningful.
- Dependabot opens one grouped pull request per ecosystem each month.
