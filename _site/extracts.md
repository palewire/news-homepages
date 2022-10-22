```{include} _templates/nav.html
```

# Data extracts

Daily exports of the data gathered by the archive. Available on GitHub at [github.com/palewire/news-homepages/tree/main/extracts/csv](https://github.com/palewire/news-homepages/tree/main/extracts/csv).

```{contents} Files
:local:
:depth: 1
```


## sites.csv

A roster of all the sites collected by the archiver.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/sites.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/sites.csv)

Field | Description
:---- | :----------
`handle` | The Twitter handle of the outlet. A unique identifier
`name` | The name of the outlet
`url` | The URL of the homepage
`location` | The city where the site is based
`timezone` | The timezone where the site is based
`country`  | The country where the site is based, recorded as a two-digit [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) alpha code
`language` | The language of the site, recorded as a two-digit [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) alpha code

## bundles.csv

Categories used to group sites.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/bundles.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/bundles.csv)

Field | Description
:---- | :----------
`slug` | A unique identifier
`name` | The name of the outlet
`location` | The city where the site is based
`timezone` | The timezone where the site is based

## site-bundle-relationships.csv

The one-to-many relationship between sites and bundles. Used to join the `sites` and `bundles` files.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/site-bundle-relationships.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/site-bundle-relationships.csv)

Field | Description
:---- | :----------
`site_handle` | A unique identifier for a site
`bundle_slug` | A unique identifier for a bundle

## items.csv

The Internet Archive items where files are stored. They all belong to the collection at [archive.org/details/news-homepages](https://archive.org/details/news-homepages).

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/items.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/items.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file on [GitHub](https://github.com/palewire/news-homepages/tree/main/extracts/json) where the Internet Archive metadata is stored.
`url` | The URL on archive.org where you can find the item
`title` | The title of the item on Internet Archive
`date` | The time period the item covers
`publicdate` | The date the item went public
`addeddate` | The date the item was created

## screenshot-files.csv

The image files saved in the Internet Archive.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/screenshot-files.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/screenshot-files.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`url` | The URL of the file
`mtime` | The time the file was last modified by the Internet Archive in UTC time
`size` | The size of the file in bytes
`md5` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [md5](https://en.wikipedia.org/wiki/Md5sum) hashing
`sha1` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [sh1](https://en.wikipedia.org/wiki/Sha1sum) hashing


## accessibility-files.csv

The [accessibility information](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree) related to HTML elements in the page, captured and stored in the Internet Archive.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/accessibility-files.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/accessibility-files.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`url` | The URL of the file
`mtime` | The time the file was last modified by the Internet Archive in UTC time
`size` | The size of the file in bytes
`md5` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [md5](https://en.wikipedia.org/wiki/Md5sum) hashing
`sha1` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [sh1](https://en.wikipedia.org/wiki/Sha1sum) hashing


## hyperlink-files.csv

A list of all hyperlinks in the page, captured and stored in the Internet Archive

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/hyperlink-files.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/hyperlink-files.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`url` | The URL of the file
`mtime` | The time the file was last modified by the Internet Archive in UTC time
`size` | The size of the file in bytes
`md5` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [md5](https://en.wikipedia.org/wiki/Md5sum) hashing
`sha1` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [sh1](https://en.wikipedia.org/wiki/Sha1sum) hashing


## lighthouse-files.csv

The summary file from a page quality report generated by Google Lighthouse, captured and stored in the Internet Archive

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/lighthouse-files.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/lighthouse-files.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`url` | The URL of the file
`mtime` | The time the file was last modified by the Internet Archive in UTC time
`size` | The size of the file in bytes
`md5` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [md5](https://en.wikipedia.org/wiki/Md5sum) hashing
`sha1` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [sh1](https://en.wikipedia.org/wiki/Sha1sum) hashing


## lighthouse-sample.csv

The Lighthouse metric scores recorded over the last seven days for all sites.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/lighthouse-sample.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/lighthouse-sample.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`date` | The datetime when the audit was captured
`performance` | Lighthouse's [performance](https://developer.chrome.com/docs/lighthouse/performance/) metric score
`accessbility` | Lighthouse's accessibility metric score
`best_practices` | Lighthouse's [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/) metric score
`seo` | Lighthouse's [search engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) metric score
`pwa` | Lighthouse's [progressive web application](https://developer.chrome.com/docs/lighthouse/pwa/) metric score


## lighthouse-analysis.csv

An analysis of Lighthouse metrics drawn from the sample.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/lighthouse-analysis.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/lighthouse-analysis.csv)

Field | Description
:---- | :----------
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`performance_count` | The number of Lighthouse [performance](https://developer.chrome.com/docs/lighthouse/performance/) metric observations
`performance_median` | The median performance metric score
`performance_mean` | The average performance metric score
`performance_min` | The lowest performance metric score
`performance_max` | The highest performance metric score
`performance_std` | The standard deviation of performance metrics
`accessibility_count` | The number of Lighthouse accessibility metric observations
`accessibility_median` | The median accessibility metric score
`accessibility_mean` | The average accessibility metric score
`accessibility_min` | The lowest accessibility metric score
`accessibility_max` | The highest accessibility metric score
`accessibility_std` | The standard deviation of accessibility metrics
`seo_count` | The number of Lighthouse search-engine optimization metric observations
`seo_median` | The median search-engine optimization metric score
`seo_mean` | The average search-engine optimization metric score
`seo_min` | The lowest search-engine optimization metric score
`seo_max` | The highest search-engine optimization metric score
`seo_std` | The standard deviation of search-engine optimization metrics
`seo_count` | The number of Lighthouse search-engine optimization metric observations
`best_practices_median` | The median best practices metric score
`best_practices_mean` | The average best practices metric score
`best_practices_min` | The lowest best practices metric score
`best_practices_max` | The highest best practices metric score
`best_practices_std` | The standard deviation of best practices metrics
`performance_color` | The classification of the median result using Lighthouse's three tier system. 0 to 49 is red. 50 to 89 is orange. 90 to 100 is green.
`accessibility_color` | The classification of the median result using Lighthouse's three tier system. 0 to 49 is red. 50 to 89 is orange. 90 to 100 is green.
`seo_color` | The classification of the median result using Lighthouse's three tier system. 0 to 49 is red. 50 to 89 is orange. 90 to 100 is green.
`best_practices_color` | The classification of the median result using Lighthouse's three tier system. 0 to 49 is red. 50 to 89 is orange. 90 to 100 is green.
`performance_rank` | The site's ranking when sorted by `performance_median`
`accessibility_rank` | The site's ranking when sorted by `accessibility_median`
`seo_rank` | The site's ranking when sorted by `seo_median`
`best_practices_rank` | The site's ranking when sorted by `best_practices_median`


## wayback-files.csv

The status report from a Wayback Machine capture request made via the Internet Archive’s Save Page Now API

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/wayback-files.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/wayback-files.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`url` | The URL of the file
`mtime` | The time the file was last modified by the Internet Archive in UTC time
`size` | The size of the file in bytes
`md5` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [md5](https://en.wikipedia.org/wiki/Md5sum) hashing
`sha1` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [sh1](https://en.wikipedia.org/wiki/Sha1sum) hashing

## drudge-hyperlinks-sample.csv

Hyperlinks gathered from the Drudge Report over the past 90 days.

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/drudge-hyperlinks-sample.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/drudge-hyperlinks-sample.csv)

Field | Description
:---- | :----------
`identifier` | The unique identifier created by Internet Archive
`handle` | The Twitter handle of the outlet. Can be used to merge with other files
`file_name` | The name of the file in the Internet Archive
`date` | The datetime when the hyperlink was captured
`text` | The text of the hyperlink
`url` | The URL source attribute of the hyperlink


## drudge-hyperlinks-analysis.csv

An analysis of hyperlinks gathered from the Drudge Report over the past 90 days

URL: [raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/drudge-hyperlinks-analysis.csv](https://raw.githubusercontent.com/palewire/news-homepages/main/extracts/csv/drudge-hyperlinks-analysis.csv)

Field | Description
:---- | :----------
`text` | The text of the hyperlink
`url` | The URL source attribute of the hyperlink
`earliest_date` | The earliest datetime when the hyperlink was captured
`is_story` | Whether or not our machine-learning system estimates that the URL leads to a news story
`domain` | The web domain where the URL is hosted
