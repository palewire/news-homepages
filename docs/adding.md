```{include} _templates/nav.html
```

# Adding a site

## Add record to sites file

Adding a new site requires that a new row be added to [`sources/sites.csv`](https://github.com/palewire/news-homepages/blob/main/newshomepages/sources/sites.csv) with, at a minimum, the Twitter handle, URL, name, location and timezone of the target.

You can also override the system’s defaults by adding optional attributes for the width, height and time delay of the screenshots.

## Test the screenshot

After doing that, you should verify the site works by running the `shoot.py` command and inspecting the result.

```bash
pipenv run python -m newshomepages.shoot single your-handle
```

## Hide ads and pop ups

If there are popups or ads that interfere with the screenshot, you should devise a file in [`sources/javascript`](https://github.com/palewire/news-homepages/tree/main/newshomepages/sources/javascript). Its name should be slugged to match the Twitter handle of your site.

Here’s a generic example that would hide any elements with the id of `ad_unit` or class of `popup`. If you identify the id or class of a page element you'd like to hide, it could be inserted into the scheme.

```javascript
document.querySelectorAll(
  '#ad_unit,.popup' // <-- Pull your page’s identifiers here. If there's more than one thing to target you can comma seperate them.
).forEach(el => el.style.display = 'none')
```

Consult the examples in the repository to explore other techniques for targeting and hiding page elements.

## Add to a bundle

Then you should link the site’s row to one of the topical bundles defined in [`sources/bundles.csv`](https://github.com/palewire/news-homepages/blob/main/newshomepages/sources/bundles.csv). This is done by putting the slug of the desired bundle into your site’s bundle field.

If an suitable bundle does not exist, you can add one to the bundle data file, filling out the fields there.

## Link to a workflow

New bundles also require the creation of a workflow file [`.github/workflows`](https://github.com/palewire/news-homepages/tree/main/.github/workflows) to run the code on a schedule. You can copy one of the examples there as a starting point. Bundles typically utilize a reusable workflow. All you need to supply is a name, a cron schedule and the slug of your bundle. Here’s an example.

```yaml
name: Your Bundle Name

on:
  workflow_dispatch:
  schedule:
    - cron: "00 23 * * *"  # <-- Your desired cron schedule here

jobs:
  run:
    name: Screenshot
    uses: ./.github/workflows/bundle.yml
    with:
      source: your-bundle-slug
    secrets:
      telegram-api-key: ${{ secrets.TELEGRAM_API_KEY }}
      discord-bot-token: ${{ secrets.DISCORD_BOT_TOKEN }}
      twitter-consumer-key: ${{ secrets.TWITTER_CONSUMER_KEY }}
      twitter-consumer-secret: ${{ secrets.TWITTER_CONSUMER_SECRET }}
      twitter-access-token-key: ${{ secrets.TWITTER_ACCESS_TOKEN_KEY }}
      twitter-access-token-secret: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
      ia-access-key: ${{ secrets.IA_ACCESS_KEY }}
      ia-secret-key: ${{ secrets.IA_SECRET_KEY }}
      ia-collection: ${{ secrets.IA_COLLECTION }}
```

If you link your site to an existing bundle, this step will not be necessary.
