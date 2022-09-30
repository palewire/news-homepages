---
orphan: true
---

```{include} ../_templates/nav.html
```

# Burlington Free Press

![Burlington Free Press](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/bfp_news.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.burlingtonfreepress.com/](https://www.burlingtonfreepress.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/bfp_news.xml)                                                              |
| Twitter handle | [@bfp_news](https://www.twitter.com/bfp_news)                                                                                  |
| Location       | Burlington                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/vermont.html">Vermont</a>,  <a href="../bundles/gannett.html">Gannett</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 15 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

<div id="vis--lighthouse-analysis" style="width: 100%; height: 250px;"></div>
  <script>
    const lighthouseAnalysisSpec = {
  "config": {
    "view": {"strokeWidth": 0},
    "padding": {"top": 15, "bottom": 15, "left": 10, "right": 10},
    "background": "#ffffff",
    "title": {
      "anchor": "start",
      "font": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "color": "#000000",
      "fontSize": 20,
      "fontWeight": "bold",
      "lineHeight": 26,
      "subtitleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "subtitleFontSize": 14,
      "subtitleLineHeight": 18,
      "subtitlePadding": 5,
      "offset": 20
    },
    "arc": {"fill": "#cecece"},
    "area": {"fill": "#cecece"},
    "line": {"stroke": "#cecece", "strokeWidth": 3},
    "path": {"stroke": "#cecece"},
    "rect": {"fill": "#cecece"},
    "bar": {"fill": "#cecece"},
    "point": {"stroke": "#cecece"},
    "axis": {
      "titleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "titleFontSize": 14,
      "titleFontWeight": "normal",
      "labelFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "labelFontSize": 12,
      "labelFontWeight": "normal",
      "tickColor": "#727272",
      "labelColor": "#727272"
    },
    "axisX": {
      "labelAngle": 0,
      "labelPadding": 10,
      "labelFlush": true,
      "tickSize": 0,
      "domain": false
    },
    "axisY": {
      "labelBaseline": "middle",
      "labelPadding": 5,
      "labelFlush": true,
      "tickSize": 0,
      "titleAlign": "left",
      "titleAngle": 0,
      "titleX": -45,
      "titleY": -11,
      "domain": false,
      "labelFontSize": 14
    },
    "legend": {
      "titleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "titleFontSize": 14,
      "titleFontWeight": "normal",
      "symbolType": "square",
      "labelFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "labelFontSize": 13
    },
    "range": {
      "heatmap": [
        "#5e5e5e",
        "#727272",
        "#858585",
        "#989898",
        "#aaaaaa",
        "#bcbcbc",
        "#c4c4c4",
        "#cecece",
        "#e0e0e0",
        "#f0f0f0",
        "#ffffff"
      ],
      "ordinal": [
        "#5e5e5e",
        "#727272",
        "#858585",
        "#989898",
        "#aaaaaa",
        "#bcbcbc",
        "#c4c4c4",
        "#cecece",
        "#e0e0e0",
        "#f0f0f0",
        "#ffffff"
      ],
      "ramp": [
        "#5e5e5e",
        "#727272",
        "#858585",
        "#989898",
        "#aaaaaa",
        "#bcbcbc",
        "#c4c4c4",
        "#cecece",
        "#e0e0e0",
        "#f0f0f0",
        "#ffffff"
      ]
    }
  },
  "data": {
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/bfp_news.json"
  },
  "mark": {"type": "tick", "height": 20, "opacity": 0.9},
  "encoding": {
    "color": {
      "field": "color",
      "legend": null,
      "scale": {
        "domain": ["green", "orange", "red"],
        "range": ["green", "orange", "red"]
      },
      "type": "nominal"
    },
    "tooltip": [
      {"field": "metric", "type": "nominal"},
      {"field": "date", "type": "temporal"},
      {"field": "value", "type": "quantitative"}
    ],
    "x": {"axis": {"title": null}, "field": "value", "type": "quantitative"},
    "y": {"field": "metric", "title": null, "type": "ordinal"}
  },
  "height": 175,
  "title": "Lighthouse scores over last 7 days",
  "width": "container",
  "height": 300,
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json"
};
    vegaEmbed("#vis--lighthouse-analysis", lighthouseAnalysisSpec, {mode: "vega-lite"}).then(console.log).catch(console.warn);
  </script>

The median score for each category, along with how it ranks in comparison to the rest of the archive, is reported below.

<table class="colwidths-auto docutils align-default">
 <thead>
  <tr>
    <th class="head">Metric</th>
    <th class="head" style="text-align: right;">Score</th>
    <th class="head" style="text-align: right;">Rank</th>
  </tr>
 </thead>
 <tbody>

  <tr>
    <td>
        Accessibility
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
    <td style="text-align: right;">
        438
    </td>
  </tr>

  <tr>
    <td>
        Best practices
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
    <td style="text-align: right;">
        114
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
    <td style="text-align: right;">
        188
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
    <td style="text-align: right;">
        158
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 19 screenshots with the Internet Archive.



Here are the 12 most recent screenshots.

<div class="latest-parent">

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-30T02:13:29.283430-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-30T02:13:29.283430-04:00.jpg"
     alt="Burlington Free Press at 2022-09-30 02:13:34-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-30T02:13:29.283430-04:00.jpg">September 30 at 2:13 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T12:08:06.116748-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T12:08:06.116748-04:00.jpg"
     alt="Burlington Free Press at 2022-09-29 12:08:10-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T12:08:06.116748-04:00.jpg">September 29 at 12:08 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T01:22:24.442858-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T01:22:24.442858-04:00.jpg"
     alt="Burlington Free Press at 2022-09-29 01:22:28-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T01:22:24.442858-04:00.jpg">September 29 at 1:22 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T12:18:51.653069-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T12:18:51.653069-04:00.jpg"
     alt="Burlington Free Press at 2022-09-28 12:18:54-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T12:18:51.653069-04:00.jpg">September 28 at 12:18 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T02:05:03.532210-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T02:05:03.532210-04:00.jpg"
     alt="Burlington Free Press at 2022-09-28 02:05:05-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T02:05:03.532210-04:00.jpg">September 28 at 2:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T12:06:47.772152-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T12:06:47.772152-04:00.jpg"
     alt="Burlington Free Press at 2022-09-27 12:06:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T12:06:47.772152-04:00.jpg">September 27 at 12:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T00:30:14.533895-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T00:30:14.533895-04:00.jpg"
     alt="Burlington Free Press at 2022-09-27 00:30:17-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T00:30:14.533895-04:00.jpg">September 27 at 12:30 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T12:06:37.397692-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T12:06:37.397692-04:00.jpg"
     alt="Burlington Free Press at 2022-09-26 12:06:40-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T12:06:37.397692-04:00.jpg">September 26 at 12:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T00:48:47.948565-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T00:48:47.948565-04:00.jpg"
     alt="Burlington Free Press at 2022-09-26 00:48:49-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T00:48:47.948565-04:00.jpg">September 26 at 12:48 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T11:53:11.434314-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T11:53:11.434314-04:00.jpg"
     alt="Burlington Free Press at 2022-09-25 11:53:13-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T11:53:11.434314-04:00.jpg">September 25 at 11:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T00:29:33.767654-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T00:29:33.767654-04:00.jpg"
     alt="Burlington Free Press at 2022-09-25 00:29:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T00:29:33.767654-04:00.jpg">September 25 at 12:29 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-24T11:50:51.378722-04:00.jpg">
  <img src="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-24T11:50:51.378722-04:00.jpg"
     alt="Burlington Free Press at 2022-09-24 11:50:53-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/bfp_news-2022/bfp_news-2022-09-24T11:50:51.378722-04:00.jpg">September 24 at 11:50 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 19 hyperlink lists with the Internet Archive.



Here are the 10 most recent hyperlink lists.

| Time  |
| :---- |
| [September 30 at 2:13 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-30T02:13:29.283430-04:00.hyperlinks.json) |
| [September 29 at 12:08 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T12:08:06.116748-04:00.hyperlinks.json) |
| [September 29 at 1:22 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T01:22:24.442858-04:00.hyperlinks.json) |
| [September 28 at 12:18 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T12:18:51.653069-04:00.hyperlinks.json) |
| [September 28 at 2:05 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T02:05:03.532210-04:00.hyperlinks.json) |
| [September 27 at 12:06 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T12:06:47.772152-04:00.hyperlinks.json) |
| [September 27 at 12:30 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T00:30:14.533895-04:00.hyperlinks.json) |
| [September 26 at 12:06 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T12:06:37.397692-04:00.hyperlinks.json) |
| [September 26 at 12:48 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T00:48:47.948565-04:00.hyperlinks.json) |
| [September 25 at 11:53 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T11:53:11.434314-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 19 accessibility trees with the Internet Archive.



Here are the 10 most recent accessibility trees.

| Time  |
| :---- |
| [September 30 at 2:13 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-30T02:13:29.283430-04:00.accessibility.json) |
| [September 29 at 12:08 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T12:08:06.116748-04:00.accessibility.json) |
| [September 29 at 1:22 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T01:22:24.442858-04:00.accessibility.json) |
| [September 28 at 12:18 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T12:18:51.653069-04:00.accessibility.json) |
| [September 28 at 2:05 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T02:05:03.532210-04:00.accessibility.json) |
| [September 27 at 12:06 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T12:06:47.772152-04:00.accessibility.json) |
| [September 27 at 12:30 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T00:30:14.533895-04:00.accessibility.json) |
| [September 26 at 12:06 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T12:06:37.397692-04:00.accessibility.json) |
| [September 26 at 12:48 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T00:48:47.948565-04:00.accessibility.json) |
| [September 25 at 11:53 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T11:53:11.434314-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 19 Lighthouse audits with the Internet Archive.



Here are the 10 most recent Lighthouse audits.

| Time  |
| :---- |
| [September 30 at 2:13 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-30T02:13:29.283430-04:00.lighthouse.json) |
| [September 29 at 12:08 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T12:08:06.116748-04:00.lighthouse.json) |
| [September 29 at 1:22 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-29T01:22:24.442858-04:00.lighthouse.json) |
| [September 28 at 12:19 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T12:18:51.653069-04:00.lighthouse.json) |
| [September 28 at 2:05 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-28T02:05:03.532210-04:00.lighthouse.json) |
| [September 27 at 12:06 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T12:06:47.772152-04:00.lighthouse.json) |
| [September 27 at 12:30 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-27T00:30:14.533895-04:00.lighthouse.json) |
| [September 26 at 12:06 PM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T12:06:37.397692-04:00.lighthouse.json) |
| [September 26 at 12:48 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-26T00:48:47.948565-04:00.lighthouse.json) |
| [September 25 at 11:53 AM](https://archive.org/download/bfp_news-2022/bfp_news-2022-09-25T11:53:11.434314-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[bfp_news-2022](https://archive.org/details/bfp_news-2022)|
