```{include} _templates/nav.html
```

# Usage

## Screenshots

Try a screenshot. The `shoot.py` command, as well as all the other commands, expects you pass in the Twitter handle of the target site. The supported sites are listed in [`newshomepages/sources/sites.csv`](https://github.com/palewire/news-homepages/blob/main/newshomepages/sources/sites.csv).

```bash
pipenv run python -m newshomepages.screenshot single latimes
```

### Tweeting

Posting to Twitter and other platforms requires a variety of credentials stored in environment variables. I recommend you create a `.env` file. There you need to store a Twitter access key and app token that has the permissions necessary to post.

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
```

Now you can post tweets by running the following:

```bash
pipenv run python -m newshomepages.tweet single latimes
```

## Telegram

Posting to Telegram requires you add a working API key to the environment.

```
TELEGRAM_API_KEY=
```

Then you can post a single site with the following:

```bash
pipenv run python -m newshomepages.telegrammer single latimes
```

## Discord

Posting to Discord requires you add a working bot token to the environment.

```
DISCORD_BOT_TOKEN=
```

Then you can post a single site with the following:

```bash
pipenv run python -m newshomepages.discorder single latimes
```

## Archiving

To store the file in the Internet Archive you’ll need to add an access key pair and the unique identifier of a collection to the environment.

```
IA_ACCESS_KEY=
IA_SECRET_KEY=
IA_COLLECTION=
```

Then you can upload a file by running the following:

```bash
pipenv run python -m newshomepages.archive single latimes
```
