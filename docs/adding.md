```{include} _templates/nav.html
```

# Adding a site

## Add record to sites file

Adding a new site requires that a new row be added to [`sources/sites.csv`](https://github.com/palewire/news-homepages/blob/main/newshomepages/sources/sites.csv) with, at a minimum, the Twitter handle, URL, name, location and timezone of the target.

You can also override the system’s default by an adding optional attribute for time delay before the screenshot.

## Test the screenshot

After doing that, you should verify the site works by running the `shoot.py` command and inspecting the result.

```bash
pipenv run python -m newshomepages.shoot your-handle
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
