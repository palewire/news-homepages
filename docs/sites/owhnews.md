---
orphan: true
---

```{include} ../_templates/nav.html
```

# Omaha World Herald

![Omaha World Herald](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/owhnews.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://omaha.com/](https://omaha.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/owhnews.xml)                                                              |
| Twitter handle | [@OWHnews](https://www.twitter.com/OWHnews)                                                                                  |
| Location       | Omaha                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/nebraska.html">Nebraska</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 16 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/owhnews.json"
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
        81
    </td>
    <td style="text-align: right;">
        589
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
        319
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
    <td style="text-align: right;">
        895
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
    <td style="text-align: right;">
        673
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 103 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/owhnews.json"
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
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-19T07:58:16.907727-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-19T07:58:16.907727-05:00.jpg"
     alt="Omaha World Herald at 2022-09-19 07:58:22-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-19T07:58:16.907727-05:00.jpg">September 19 at 7:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-18T20:14:33.294734-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-18T20:14:33.294734-05:00.jpg"
     alt="Omaha World Herald at 2022-09-18 20:14:39-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-18T20:14:33.294734-05:00.jpg">September 18 at 8:14 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-18T07:59:32.571598-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-18T07:59:32.571598-05:00.jpg"
     alt="Omaha World Herald at 2022-09-18 07:59:38-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-18T07:59:32.571598-05:00.jpg">September 18 at 7:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-17T20:20:03.515341-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-17T20:20:03.515341-05:00.jpg"
     alt="Omaha World Herald at 2022-09-17 20:20:05-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-17T20:20:03.515341-05:00.jpg">September 17 at 8:20 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-17T08:00:38.484080-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-17T08:00:38.484080-05:00.jpg"
     alt="Omaha World Herald at 2022-09-17 08:00:39-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-17T08:00:38.484080-05:00.jpg">September 17 at 8:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-16T20:14:02.568336-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-16T20:14:02.568336-05:00.jpg"
     alt="Omaha World Herald at 2022-09-16 20:14:04-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-16T20:14:02.568336-05:00.jpg">September 16 at 8:14 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-16T08:00:17.701529-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-16T08:00:17.701529-05:00.jpg"
     alt="Omaha World Herald at 2022-09-16 08:00:23-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-16T08:00:17.701529-05:00.jpg">September 16 at 8:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-15T20:16:48.117206-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-15T20:16:48.117206-05:00.jpg"
     alt="Omaha World Herald at 2022-09-15 20:16:49-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-15T20:16:48.117206-05:00.jpg">September 15 at 8:16 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-15T08:02:58.000123-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-15T08:02:58.000123-05:00.jpg"
     alt="Omaha World Herald at 2022-09-15 08:03:04-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-15T08:02:58.000123-05:00.jpg">September 15 at 8:03 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-14T20:19:43.975944-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-14T20:19:43.975944-05:00.jpg"
     alt="Omaha World Herald at 2022-09-14 20:19:45-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-14T20:19:43.975944-05:00.jpg">September 14 at 8:19 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-14T08:07:37.111489-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-14T08:07:37.111489-05:00.jpg"
     alt="Omaha World Herald at 2022-09-14 08:07:47-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-14T08:07:37.111489-05:00.jpg">September 14 at 8:07 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-13T20:23:10.891437-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-09-13T20:23:10.891437-05:00.jpg"
     alt="Omaha World Herald at 2022-09-13 20:23:14-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-09-13T20:23:10.891437-05:00.jpg">September 13 at 8:23 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 101 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/owhnews.json"
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
| [September 19 at 7:58 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-19T07:58:16.907727-05:00.hyperlinks.json) |
| [September 18 at 8:14 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-18T20:14:33.294734-05:00.hyperlinks.json) |
| [September 18 at 7:59 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-18T07:59:32.571598-05:00.hyperlinks.json) |
| [September 17 at 8:20 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-17T20:20:03.515341-05:00.hyperlinks.json) |
| [September 17 at 8:00 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-17T08:00:38.484080-05:00.hyperlinks.json) |
| [September 16 at 8:14 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-16T20:14:02.568336-05:00.hyperlinks.json) |
| [September 16 at 8:00 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-16T08:00:17.701529-05:00.hyperlinks.json) |
| [September 15 at 8:16 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-15T20:16:48.117206-05:00.hyperlinks.json) |
| [September 15 at 8:03 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-15T08:02:58.000123-05:00.hyperlinks.json) |
| [September 14 at 8:19 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-14T20:19:43.975944-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 103 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/owhnews.json"
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
| [September 19 at 7:58 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-19T07:58:16.907727-05:00.accessibility.json) |
| [September 18 at 8:14 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-18T20:14:33.294734-05:00.accessibility.json) |
| [September 18 at 7:59 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-18T07:59:32.571598-05:00.accessibility.json) |
| [September 17 at 8:20 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-17T20:20:03.515341-05:00.accessibility.json) |
| [September 17 at 8:00 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-17T08:00:38.484080-05:00.accessibility.json) |
| [September 16 at 8:14 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-16T20:14:02.568336-05:00.accessibility.json) |
| [September 16 at 8:00 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-16T08:00:17.701529-05:00.accessibility.json) |
| [September 15 at 8:16 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-15T20:16:48.117206-05:00.accessibility.json) |
| [September 15 at 8:03 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-15T08:02:58.000123-05:00.accessibility.json) |
| [September 14 at 8:19 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-14T20:19:43.975944-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 104 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/owhnews.json"
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
| [September 19 at 7:58 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-19T07:58:16.907727-05:00.lighthouse.json) |
| [September 18 at 8:14 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-18T20:14:33.294734-05:00.lighthouse.json) |
| [September 18 at 7:59 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-18T07:59:32.571598-05:00.lighthouse.json) |
| [September 17 at 8:20 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-17T20:20:03.515341-05:00.lighthouse.json) |
| [September 17 at 8:00 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-17T08:00:38.484080-05:00.lighthouse.json) |
| [September 16 at 8:14 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-16T20:14:02.568336-05:00.lighthouse.json) |
| [September 16 at 8:00 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-16T08:00:17.701529-05:00.lighthouse.json) |
| [September 15 at 8:16 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-15T20:16:48.117206-05:00.lighthouse.json) |
| [September 15 at 8:03 AM](https://archive.org/download/owhnews-2022/owhnews-2022-09-15T08:02:58.000123-05:00.lighthouse.json) |
| [September 14 at 8:19 PM](https://archive.org/download/owhnews-2022/owhnews-2022-09-14T20:19:43.975944-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[owhnews-2022](https://archive.org/details/owhnews-2022)|
