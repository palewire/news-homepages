```{include} _templates/nav.html
```

# Installing the repository

```{contents} Sections
:local:
:depth: 1
```

## Code

Fork the [palewire/news-homepages](https://github.com/palewire/news-homepages) repository on GitHub and clone it on your computer. Move into the code directory and install the Python dependencies.

```bash
pipenv install --dev
```

Install pre-commit hooks.

```bash
pipenv run pre-commit install
```

Install Chrome for our web scraper.

```bash
pipenv run playwright install --with-deps chromium
```

You're ready to work. Try a screenshot with the `screenshot.py` command. As with other commands, it expects you pass in the unique handle of the target site. The supported sites are listed in [`newshomepages/sources/sites.csv`](https://github.com/palewire/news-homepages/blob/main/newshomepages/sources/sites.csv). We use them as a unique identifier across the project.

```bash
pipenv run python -m newshomepages.screenshot latimes
```

## Environment variables

Some of the commands require that you set environment variables with secret credentials. I recommend you create a `.env` file at the root of the project for use with pipenv. Here's all of them.

### Discord

```
DISCORD_BOT_TOKEN=
```

### Slack

```
SLACK_WEBHOOK_URL=
```

### Twitter

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
```

### The Internet Archive

```
IA_ACCESS_KEY=
IA_SECRET_KEY=
IA_COLLECTION=
```
