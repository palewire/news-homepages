---
orphan: true
---

```{include} ../_templates/nav.html
```

# ZeroHedge

![ZeroHedge](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/zerohedge.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.zerohedge.com/](https://www.zerohedge.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/zerohedge.xml)                                                              |
| Twitter handle | [@zerohedge](https://www.twitter.com/zerohedge)                                                                                  |
| Location       | New York City                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-right-wing.html">U.S. right wing</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 19 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/zerohedge.json"
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
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
    <td style="text-align: right;">
        113
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
        126
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
    <td style="text-align: right;">
        257
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
        350
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 109 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/zerohedge.json"
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
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T14:35:41.758152-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T14:35:41.758152-04:00.jpg"
     alt="ZeroHedge at 2022-08-23 14:35:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T14:35:41.758152-04:00.jpg">August 23 at 2:35 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T12:09:40.357432-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T12:09:40.357432-04:00.jpg"
     alt="ZeroHedge at 2022-08-23 12:09:46-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T12:09:40.357432-04:00.jpg">August 23 at 12:09 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T00:01:11.807673-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T00:01:11.807673-04:00.jpg"
     alt="ZeroHedge at 2022-08-23 00:01:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T00:01:11.807673-04:00.jpg">August 23 at 12:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T14:26:37.848607-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T14:26:37.848607-04:00.jpg"
     alt="ZeroHedge at 2022-08-22 14:26:40-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T14:26:37.848607-04:00.jpg">August 22 at 2:26 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T11:08:19.459269-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T11:08:19.459269-04:00.jpg"
     alt="ZeroHedge at 2022-08-22 11:08:21-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T11:08:19.459269-04:00.jpg">August 22 at 11:08 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T23:48:25.605215-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T23:48:25.605215-04:00.jpg"
     alt="ZeroHedge at 2022-08-21 23:48:27-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T23:48:25.605215-04:00.jpg">August 21 at 11:48 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T14:28:55.226095-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T14:28:55.226095-04:00.jpg"
     alt="ZeroHedge at 2022-08-21 14:28:57-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T14:28:55.226095-04:00.jpg">August 21 at 2:28 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T11:05:48.579383-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T11:05:48.579383-04:00.jpg"
     alt="ZeroHedge at 2022-08-21 11:05:52-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T11:05:48.579383-04:00.jpg">August 21 at 11:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T23:40:37.584050-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T23:40:37.584050-04:00.jpg"
     alt="ZeroHedge at 2022-08-20 23:40:40-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T23:40:37.584050-04:00.jpg">August 20 at 11:40 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T14:31:56.402051-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T14:31:56.402051-04:00.jpg"
     alt="ZeroHedge at 2022-08-20 14:32:02-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T14:31:56.402051-04:00.jpg">August 20 at 2:32 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T11:01:38.200971-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T11:01:38.200971-04:00.jpg"
     alt="ZeroHedge at 2022-08-20 11:01:39-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T11:01:38.200971-04:00.jpg">August 20 at 11:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-19T23:42:26.441187-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-19T23:42:26.441187-04:00.jpg"
     alt="ZeroHedge at 2022-08-19 23:42:31-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-08-19T23:42:26.441187-04:00.jpg">August 19 at 11:42 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 112 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/zerohedge.json"
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
| [August 23 at 2:35 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T14:35:41.758152-04:00.hyperlinks.json) |
| [August 23 at 12:09 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T12:09:40.357432-04:00.hyperlinks.json) |
| [August 23 at 12:01 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T00:01:11.807673-04:00.hyperlinks.json) |
| [August 22 at 2:26 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T14:26:37.848607-04:00.hyperlinks.json) |
| [August 22 at 11:08 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T11:08:19.459269-04:00.hyperlinks.json) |
| [August 21 at 11:48 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T23:48:25.605215-04:00.hyperlinks.json) |
| [August 21 at 2:29 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T14:28:55.226095-04:00.hyperlinks.json) |
| [August 21 at 11:05 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T11:05:48.579383-04:00.hyperlinks.json) |
| [August 20 at 11:40 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T23:40:37.584050-04:00.hyperlinks.json) |
| [August 20 at 2:32 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T14:31:56.402051-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 111 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/zerohedge.json"
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
| [August 23 at 2:35 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T14:35:41.758152-04:00.accessibility.json) |
| [August 23 at 12:09 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T12:09:40.357432-04:00.accessibility.json) |
| [August 23 at 12:01 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T00:01:11.807673-04:00.accessibility.json) |
| [August 22 at 2:26 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T14:26:37.848607-04:00.accessibility.json) |
| [August 22 at 11:08 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T11:08:19.459269-04:00.accessibility.json) |
| [August 21 at 11:48 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T23:48:25.605215-04:00.accessibility.json) |
| [August 21 at 2:28 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T14:28:55.226095-04:00.accessibility.json) |
| [August 21 at 11:05 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T11:05:48.579383-04:00.accessibility.json) |
| [August 20 at 11:40 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T23:40:37.584050-04:00.accessibility.json) |
| [August 20 at 2:32 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T14:31:56.402051-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 93 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/zerohedge.json"
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
| [August 23 at 2:35 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T14:35:41.758152-04:00.lighthouse.json) |
| [August 23 at 12:09 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T12:09:40.357432-04:00.lighthouse.json) |
| [August 23 at 12:01 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-23T00:01:11.807673-04:00.lighthouse.json) |
| [August 22 at 2:26 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T14:26:37.848607-04:00.lighthouse.json) |
| [August 22 at 11:08 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-22T11:08:19.459269-04:00.lighthouse.json) |
| [August 21 at 11:48 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T23:48:25.605215-04:00.lighthouse.json) |
| [August 21 at 2:29 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T14:28:55.226095-04:00.lighthouse.json) |
| [August 21 at 11:05 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-21T11:05:48.579383-04:00.lighthouse.json) |
| [August 20 at 11:40 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T23:40:37.584050-04:00.lighthouse.json) |
| [August 20 at 2:32 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-08-20T14:31:56.402051-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[zerohedge-2022](https://archive.org/details/zerohedge-2022)|
