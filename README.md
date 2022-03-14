Screenshots of news homepages around the world

Follow on Twitter at [@newshomepages](https://twitter.com/newshomepages)

## Getting started

Fork the repository and clone it. Move into the code directory and install the Python dependencies.

```bash
pipenv install --dev
```

Install the shot-scraper web browser.

```bash
pipenv run shot-scraper install
```

Try a screenshot. The `shoot.py` command, as well as all the other commands, expects you pass in the Twitter handle of the target site. The supported sites are listed in [`sources.csv`](./sources.csv).

```bash
pipenv run python shoot.py single latimes
```

Posting to Twitter and uploading to the Internet Archive require a variety of credentials stored in environment variables. I recommend you create a `.env`  file. There you need to store a Twitter access key and app token that has the permissions necessary to post.

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
```

Now you can post tweets by running the following:

```bash
pipenv run python tweet.py single latimes
```

To store the file in the Internet Archive you’ll need to add an access key pair and the unique identifier of a collection to the environment.

```
IA_ACCESS_KEY=
IA_SECRET_KEY=
IA_COLLECTION=
```

Then you can upload a file by running the following:

```bash
pipenv run python archive.py latimes
```

## Adding a site

Adding a new site requires that a new row be added to [`sources.csv`](./sources.csv) with, at a minimum, the handle, URL and timezone of the target. You can also override the system’s defaults by adding optional attributes for the width, height and time delay for the screenshots.

After doing that, you should verify the site works by running the `shoot.py` command and inspecting the result.

Then you should add the site to our schedule by inserting its handle name in the `matrix` of the [GitHub Action workflow](https://github.com/palewire/news-homepages/blob/main/.github/workflows/take-screenshots.yml#L15).

