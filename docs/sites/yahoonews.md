---
orphan: true
---

```{include} ../_templates/nav.html
```

# Yahoo! News

![Yahoo! News](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/yahoonews.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://news.yahoo.com/](https://news.yahoo.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/yahoonews.xml)                                                              |
| Twitter handle | [@YahooNews](https://www.twitter.com/YahooNews)                                                                                  |
| Location       | New York City                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-national.html">U.S. national news</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 26 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/yahoonews.json"
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
        352
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
        124
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
    <td style="text-align: right;">
        235
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
    <td style="text-align: right;">
        356
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 252 screenshots with the Internet Archive.


  <div id="vis--screenshots" style="width: 100%; height: 250px;"></div>
  <script>
    const specScreenshots = {
  "config": {
    "view": {"strokeWidth": 0},
    "padding": {"top": 15, "bottom": 15, "left": 10, "right": 10},
    "background": "#ffffff",
    "title": {
      "anchor": "start",
      "font": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "color": "#000000",
      "fontSize": 18,
      "lineHeight": 26,
      "fontWeight": "bold",
      "subtitleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "subtitleColor": "#000000",
      "subtitleFontSize": 14,
      "subtitleLineHeight": 18,
      "subtitlePadding": 5,
      "offset": 20
    },
    "area": {"fill": "#cecece"},
    "line": {"stroke": "#cecece", "strokeWidth": 3},
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
      "domain": false,
      "labelAlign": "right"
    },
    "legend": {
      "titleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "titleFontSize": 14,
      "titleFontWeight": "normal",
      "symbolType": "square",
      "labelFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "labelFontSize": 13
    }
  },
  "data": {
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/yahoonews.json"
  },
  "mark": {"type": "area", "line": true},
  "encoding": {
    "x": {
      "axis": {"format": "%B %-d", "grid": false},
      "field": "date",
      "timeUnit": "yearmonthdate",
      "title": null,
      "type": "temporal"
    },
    "y": {"field": "value", "title": false, "type": "quantitative"}
  },
  "title": {
    "text": "Total by day",
    "subtitle": "Seven-day rolling average"
  },
  "width": "container",
  "height": 250,
  "padding": 0,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.2.0.json"
};
    vegaEmbed("#vis--screenshots", specScreenshots, {mode: "vega-lite"}).then(console.log).catch(console.warn);
</script>


Here are the 12 most recent screenshots.

<div class="latest-parent">

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T17:15:29.248811-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T17:15:29.248811-04:00.jpg"
     alt="Yahoo! News at 2022-08-25 17:15:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T17:15:29.248811-04:00.jpg">August 25 at 5:15 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T10:59:15.285753-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T10:59:15.285753-04:00.jpg"
     alt="Yahoo! News at 2022-08-25 10:59:16-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T10:59:15.285753-04:00.jpg">August 25 at 10:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T09:00:17.426898-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T09:00:17.426898-04:00.jpg"
     alt="Yahoo! News at 2022-08-25 09:00:19-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T09:00:17.426898-04:00.jpg">August 25 at 9:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T17:14:21.693167-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T17:14:21.693167-04:00.jpg"
     alt="Yahoo! News at 2022-08-24 17:14:23-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T17:14:21.693167-04:00.jpg">August 24 at 5:14 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T10:02:53.266443-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T10:02:53.266443-04:00.jpg"
     alt="Yahoo! News at 2022-08-24 10:03:06-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T10:02:53.266443-04:00.jpg">August 24 at 10:03 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T08:52:39.871785-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T08:52:39.871785-04:00.jpg"
     alt="Yahoo! News at 2022-08-24 08:52:47-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T08:52:39.871785-04:00.jpg">August 24 at 8:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T22:20:49.922328-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T22:20:49.922328-04:00.jpg"
     alt="Yahoo! News at 2022-08-23 22:21:01-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T22:20:49.922328-04:00.jpg">August 23 at 10:21 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T17:21:09.778164-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T17:21:09.778164-04:00.jpg"
     alt="Yahoo! News at 2022-08-23 17:21:11-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T17:21:09.778164-04:00.jpg">August 23 at 5:21 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T10:04:09.489717-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T10:04:09.489717-04:00.jpg"
     alt="Yahoo! News at 2022-08-23 10:04:11-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T10:04:09.489717-04:00.jpg">August 23 at 10:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T08:52:11.789450-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T08:52:11.789450-04:00.jpg"
     alt="Yahoo! News at 2022-08-23 08:52:17-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T08:52:11.789450-04:00.jpg">August 23 at 8:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-22T21:29:13.420587-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-22T21:29:13.420587-04:00.jpg"
     alt="Yahoo! News at 2022-08-22 21:29:14-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-22T21:29:13.420587-04:00.jpg">August 22 at 9:29 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-22T17:16:12.471129-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-22T17:16:12.471129-04:00.jpg"
     alt="Yahoo! News at 2022-08-22 17:16:14-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-08-22T17:16:12.471129-04:00.jpg">August 22 at 5:16 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 254 hyperlink lists with the Internet Archive.


  <div id="vis--hyperlinks" style="width: 100%; height: 250px;"></div>
  <script>
    const specHyperlinks = {
  "config": {
    "view": {"strokeWidth": 0},
    "padding": {"top": 15, "bottom": 15, "left": 10, "right": 10},
    "background": "#ffffff",
    "title": {
      "anchor": "start",
      "font": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "color": "#000000",
      "fontSize": 18,
      "lineHeight": 26,
      "fontWeight": "bold",
      "subtitleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "subtitleColor": "#000000",
      "subtitleFontSize": 14,
      "subtitleLineHeight": 18,
      "subtitlePadding": 5,
      "offset": 20
    },
    "area": {"fill": "#cecece"},
    "line": {"stroke": "#cecece", "strokeWidth": 3},
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
      "domain": false,
      "labelAlign": "right"
    },
    "legend": {
      "titleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "titleFontSize": 14,
      "titleFontWeight": "normal",
      "symbolType": "square",
      "labelFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "labelFontSize": 13
    }
  },
  "data": {
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/yahoonews.json"
  },
  "mark": {"type": "area", "line": true},
  "encoding": {
    "x": {
      "axis": {"format": "%B %-d", "grid": false},
      "field": "date",
      "timeUnit": "yearmonthdate",
      "title": null,
      "type": "temporal"
    },
    "y": {"field": "value", "title": false, "type": "quantitative"}
  },
  "title": {
    "text": "Total by day",
    "subtitle": "Seven-day rolling average"
  },
  "width": "container",
  "height": 250,
  "padding": 0,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.2.0.json"
};
    vegaEmbed("#vis--hyperlinks", specHyperlinks, {mode: "vega-lite"}).then(console.log).catch(console.warn);
</script>


Here are the 10 most recent hyperlink lists.

| Time  |
| :---- |
| [August 25 at 5:15 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T17:15:29.248811-04:00.hyperlinks.json) |
| [August 25 at 10:59 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T10:59:15.285753-04:00.hyperlinks.json) |
| [August 25 at 9:00 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T09:00:17.426898-04:00.hyperlinks.json) |
| [August 24 at 5:14 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T17:14:21.693167-04:00.hyperlinks.json) |
| [August 24 at 10:03 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T10:02:53.266443-04:00.hyperlinks.json) |
| [August 24 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T08:52:39.871785-04:00.hyperlinks.json) |
| [August 23 at 10:21 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T22:20:49.922328-04:00.hyperlinks.json) |
| [August 23 at 5:21 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T17:21:09.778164-04:00.hyperlinks.json) |
| [August 23 at 10:04 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T10:04:09.489717-04:00.hyperlinks.json) |
| [August 23 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T08:52:11.789450-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 255 accessibility trees with the Internet Archive.


  <div id="vis--accessibility" style="width: 100%; height: 250px;"></div>
  <script>
    const specAccessibility = {
  "config": {
    "view": {"strokeWidth": 0},
    "padding": {"top": 15, "bottom": 15, "left": 10, "right": 10},
    "background": "#ffffff",
    "title": {
      "anchor": "start",
      "font": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "color": "#000000",
      "fontSize": 18,
      "lineHeight": 26,
      "fontWeight": "bold",
      "subtitleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "subtitleColor": "#000000",
      "subtitleFontSize": 14,
      "subtitleLineHeight": 18,
      "subtitlePadding": 5,
      "offset": 20
    },
    "area": {"fill": "#cecece"},
    "line": {"stroke": "#cecece", "strokeWidth": 3},
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
      "domain": false,
      "labelAlign": "right"
    },
    "legend": {
      "titleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "titleFontSize": 14,
      "titleFontWeight": "normal",
      "symbolType": "square",
      "labelFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "labelFontSize": 13
    }
  },
  "data": {
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/yahoonews.json"
  },
  "mark": {"type": "area", "line": true},
  "encoding": {
    "x": {
      "axis": {"format": "%B %-d", "grid": false},
      "field": "date",
      "timeUnit": "yearmonthdate",
      "title": null,
      "type": "temporal"
    },
    "y": {"field": "value", "title": false, "type": "quantitative"}
  },
  "title": {
    "text": "Total by day",
    "subtitle": "Seven-day rolling average"
  },
  "width": "container",
  "height": 250,
  "padding": 0,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.2.0.json"
};
    vegaEmbed("#vis--accessibility", specAccessibility, {mode: "vega-lite"}).then(console.log).catch(console.warn);
</script>


Here are the 10 most recent accessibility trees.

| Time  |
| :---- |
| [August 25 at 5:15 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T17:15:29.248811-04:00.accessibility.json) |
| [August 25 at 10:59 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T10:59:15.285753-04:00.accessibility.json) |
| [August 25 at 9:00 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T09:00:17.426898-04:00.accessibility.json) |
| [August 24 at 5:14 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T17:14:21.693167-04:00.accessibility.json) |
| [August 24 at 10:03 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T10:02:53.266443-04:00.accessibility.json) |
| [August 24 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T08:52:39.871785-04:00.accessibility.json) |
| [August 23 at 10:21 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T22:20:49.922328-04:00.accessibility.json) |
| [August 23 at 5:21 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T17:21:09.778164-04:00.accessibility.json) |
| [August 23 at 10:04 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T10:04:09.489717-04:00.accessibility.json) |
| [August 23 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T08:52:11.789450-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 129 Lighthouse audits with the Internet Archive.


  <div id="vis--lighthouse" style="width: 100%; height: 250px;"></div>
  <script>
    const specLighthouse = {
  "config": {
    "view": {"strokeWidth": 0},
    "padding": {"top": 15, "bottom": 15, "left": 10, "right": 10},
    "background": "#ffffff",
    "title": {
      "anchor": "start",
      "font": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "color": "#000000",
      "fontSize": 18,
      "lineHeight": 26,
      "fontWeight": "bold",
      "subtitleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "subtitleColor": "#000000",
      "subtitleFontSize": 14,
      "subtitleLineHeight": 18,
      "subtitlePadding": 5,
      "offset": 20
    },
    "area": {"fill": "#cecece"},
    "line": {"stroke": "#cecece", "strokeWidth": 3},
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
      "domain": false,
      "labelAlign": "right"
    },
    "legend": {
      "titleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "titleFontSize": 14,
      "titleFontWeight": "normal",
      "symbolType": "square",
      "labelFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "labelFontSize": 13
    }
  },
  "data": {
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/yahoonews.json"
  },
  "mark": {"type": "area", "line": true},
  "encoding": {
    "x": {
      "axis": {"format": "%B %-d", "grid": false},
      "field": "date",
      "timeUnit": "yearmonthdate",
      "title": null,
      "type": "temporal"
    },
    "y": {"field": "value", "title": false, "type": "quantitative"}
  },
  "title": {
    "text": "Total by day",
    "subtitle": "Seven-day rolling average"
  },
  "width": "container",
  "height": 250,
  "padding": 0,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.2.0.json"
};
    vegaEmbed("#vis--lighthouse", specLighthouse, {mode: "vega-lite"}).then(console.log).catch(console.warn);
</script>


Here are the 10 most recent Lighthouse audits.

| Time  |
| :---- |
| [August 25 at 5:15 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T17:15:29.248811-04:00.lighthouse.json) |
| [August 25 at 10:59 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T10:59:15.285753-04:00.lighthouse.json) |
| [August 25 at 9:00 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-25T09:00:17.426898-04:00.lighthouse.json) |
| [August 24 at 5:14 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T17:14:21.693167-04:00.lighthouse.json) |
| [August 24 at 10:03 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T10:02:53.266443-04:00.lighthouse.json) |
| [August 24 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-24T08:52:39.871785-04:00.lighthouse.json) |
| [August 23 at 10:21 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T22:20:49.922328-04:00.lighthouse.json) |
| [August 23 at 5:21 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T17:21:09.778164-04:00.lighthouse.json) |
| [August 23 at 10:04 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T10:04:09.489717-04:00.lighthouse.json) |
| [August 23 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-08-23T08:52:11.789450-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[yahoonews-2022](https://archive.org/details/yahoonews-2022)|
