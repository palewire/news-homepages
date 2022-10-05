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

This site was analyzed 29 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
        438
    </td>
  </tr>

  <tr>
    <td>
        Best practices
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
    <td style="text-align: right;">
        509
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
    <td style="text-align: right;">
        442
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
        587
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 411 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T17:20:34.281768-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T17:20:34.281768-04:00.jpg"
     alt="Yahoo! News at 2022-10-04 17:20:46-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T17:20:34.281768-04:00.jpg">October 4 at 5:20 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T12:27:56.347259-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T12:27:56.347259-04:00.jpg"
     alt="Yahoo! News at 2022-10-04 12:27:59-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T12:27:56.347259-04:00.jpg">October 4 at 12:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T08:56:03.650817-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T08:56:03.650817-04:00.jpg"
     alt="Yahoo! News at 2022-10-04 08:56:41-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T08:56:03.650817-04:00.jpg">October 4 at 8:56 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T01:23:53.328444-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T01:23:53.328444-04:00.jpg"
     alt="Yahoo! News at 2022-10-04 01:24:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T01:23:53.328444-04:00.jpg">October 4 at 1:24 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T17:18:57.197014-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T17:18:57.197014-04:00.jpg"
     alt="Yahoo! News at 2022-10-03 17:18:59-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T17:18:57.197014-04:00.jpg">October 3 at 5:18 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T12:16:53.755391-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T12:16:53.755391-04:00.jpg"
     alt="Yahoo! News at 2022-10-03 12:17:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T12:16:53.755391-04:00.jpg">October 3 at 12:17 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T08:52:38.837262-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T08:52:38.837262-04:00.jpg"
     alt="Yahoo! News at 2022-10-03 08:52:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T08:52:38.837262-04:00.jpg">October 3 at 8:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T01:05:55.810391-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T01:05:55.810391-04:00.jpg"
     alt="Yahoo! News at 2022-10-03 01:06:08-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T01:05:55.810391-04:00.jpg">October 3 at 1:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T17:20:33.660565-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T17:20:33.660565-04:00.jpg"
     alt="Yahoo! News at 2022-10-02 17:20:44-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T17:20:33.660565-04:00.jpg">October 2 at 5:20 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T12:06:46.895462-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T12:06:46.895462-04:00.jpg"
     alt="Yahoo! News at 2022-10-02 12:06:48-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T12:06:46.895462-04:00.jpg">October 2 at 12:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T08:53:40.182623-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T08:53:40.182623-04:00.jpg"
     alt="Yahoo! News at 2022-10-02 08:53:53-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T08:53:40.182623-04:00.jpg">October 2 at 8:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T01:51:14.197313-04:00.jpg">
  <img src="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T01:51:14.197313-04:00.jpg"
     alt="Yahoo! News at 2022-10-02 01:51:16-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T01:51:14.197313-04:00.jpg">October 2 at 1:51 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 414 hyperlink lists with the Internet Archive.


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
| [October 4 at 5:20 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T17:20:34.281768-04:00.hyperlinks.json) |
| [October 4 at 12:28 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T12:27:56.347259-04:00.hyperlinks.json) |
| [October 4 at 8:56 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T08:56:03.650817-04:00.hyperlinks.json) |
| [October 4 at 1:24 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T01:23:53.328444-04:00.hyperlinks.json) |
| [October 3 at 5:19 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T17:18:57.197014-04:00.hyperlinks.json) |
| [October 3 at 12:17 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T12:16:53.755391-04:00.hyperlinks.json) |
| [October 3 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T08:52:38.837262-04:00.hyperlinks.json) |
| [October 3 at 1:06 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T01:05:55.810391-04:00.hyperlinks.json) |
| [October 2 at 5:20 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T17:20:33.660565-04:00.hyperlinks.json) |
| [October 2 at 12:06 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T12:06:46.895462-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 415 accessibility trees with the Internet Archive.


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
| [October 4 at 5:20 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T17:20:34.281768-04:00.accessibility.json) |
| [October 4 at 12:28 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T12:27:56.347259-04:00.accessibility.json) |
| [October 4 at 8:56 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T08:56:03.650817-04:00.accessibility.json) |
| [October 4 at 1:24 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T01:23:53.328444-04:00.accessibility.json) |
| [October 3 at 5:19 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T17:18:57.197014-04:00.accessibility.json) |
| [October 3 at 12:17 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T12:16:53.755391-04:00.accessibility.json) |
| [October 3 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T08:52:38.837262-04:00.accessibility.json) |
| [October 3 at 1:06 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T01:05:55.810391-04:00.accessibility.json) |
| [October 2 at 5:20 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T17:20:33.660565-04:00.accessibility.json) |
| [October 2 at 12:06 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T12:06:46.895462-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 288 Lighthouse audits with the Internet Archive.


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
| [October 4 at 5:20 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T17:20:34.281768-04:00.lighthouse.json) |
| [October 4 at 12:28 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T12:27:56.347259-04:00.lighthouse.json) |
| [October 4 at 8:56 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T08:56:03.650817-04:00.lighthouse.json) |
| [October 4 at 1:24 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-04T01:23:53.328444-04:00.lighthouse.json) |
| [October 3 at 5:19 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T17:18:57.197014-04:00.lighthouse.json) |
| [October 3 at 12:17 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T12:16:53.755391-04:00.lighthouse.json) |
| [October 3 at 8:52 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T08:52:38.837262-04:00.lighthouse.json) |
| [October 3 at 1:06 AM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-03T01:05:55.810391-04:00.lighthouse.json) |
| [October 2 at 5:20 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T17:20:33.660565-04:00.lighthouse.json) |
| [October 2 at 12:06 PM](https://archive.org/download/yahoonews-2022/yahoonews-2022-10-02T12:06:46.895462-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[yahoonews-2022](https://archive.org/details/yahoonews-2022)|
