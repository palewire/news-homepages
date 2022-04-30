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
`timezone` | The timezone where the site is based

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
`mtime` | The time the file was last modified by the Internet Archive in [Unix time](https://en.wikipedia.org/wiki/Unix_time)
`size` | The size of the file in bytz
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
`mtime` | The time the file was last modified by the Internet Archive in [Unix time](https://en.wikipedia.org/wiki/Unix_time)
`size` | The size of the file in bytz
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
`mtime` | The time the file was last modified by the Internet Archive in [Unix time](https://en.wikipedia.org/wiki/Unix_time)
`size` | The size of the file in bytz
`md5` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [md5](https://en.wikipedia.org/wiki/Md5sum) hashing
`sha1` | A [checksum](https://en.wikipedia.org/wiki/Checksum) for the file created using [sh1](https://en.wikipedia.org/wiki/Sha1sum) hashing
