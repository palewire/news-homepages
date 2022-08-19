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

This site was analyzed 13 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
        501
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
        120
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
        761
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
        564
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 38 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-17T18:55:03.105273-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-17T18:55:03.105273-05:00.jpg"
     alt="Omaha World Herald at 2022-08-17 18:55:04-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-17T18:55:03.105273-05:00.jpg">August 17 at 6:55 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-17T06:54:08.038047-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-17T06:54:08.038047-05:00.jpg"
     alt="Omaha World Herald at 2022-08-17 06:54:09-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-17T06:54:08.038047-05:00.jpg">August 17 at 6:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-16T19:11:29.949572-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-16T19:11:29.949572-05:00.jpg"
     alt="Omaha World Herald at 2022-08-16 19:11:33-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-16T19:11:29.949572-05:00.jpg">August 16 at 7:11 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-16T09:06:31.726473-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-16T09:06:31.726473-05:00.jpg"
     alt="Omaha World Herald at 2022-08-16 09:06:35-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-16T09:06:31.726473-05:00.jpg">August 16 at 9:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-15T20:41:38.484720-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-15T20:41:38.484720-05:00.jpg"
     alt="Omaha World Herald at 2022-08-15 20:41:40-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-15T20:41:38.484720-05:00.jpg">August 15 at 8:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-15T09:24:20.822516-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-15T09:24:20.822516-05:00.jpg"
     alt="Omaha World Herald at 2022-08-15 09:24:22-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-15T09:24:20.822516-05:00.jpg">August 15 at 9:24 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-14T20:27:28.432066-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-14T20:27:28.432066-05:00.jpg"
     alt="Omaha World Herald at 2022-08-14 20:27:31-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-14T20:27:28.432066-05:00.jpg">August 14 at 8:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-14T08:55:06.784583-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-14T08:55:06.784583-05:00.jpg"
     alt="Omaha World Herald at 2022-08-14 08:55:08-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-14T08:55:06.784583-05:00.jpg">August 14 at 8:55 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-13T22:21:11.047079-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-13T22:21:11.047079-05:00.jpg"
     alt="Omaha World Herald at 2022-08-13 22:21:13-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-13T22:21:11.047079-05:00.jpg">August 13 at 10:21 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-13T08:16:41.207584-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-13T08:16:41.207584-05:00.jpg"
     alt="Omaha World Herald at 2022-08-13 08:16:42-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-13T08:16:41.207584-05:00.jpg">August 13 at 8:16 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-12T19:47:04.743493-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-12T19:47:04.743493-05:00.jpg"
     alt="Omaha World Herald at 2022-08-12 19:47:10-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-12T19:47:04.743493-05:00.jpg">August 12 at 7:47 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-12T08:28:43.609924-05:00.jpg">
  <img src="https://archive.org/download/owhnews-2022/owhnews-2022-08-12T08:28:43.609924-05:00.jpg"
     alt="Omaha World Herald at 2022-08-12 08:28:49-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/owhnews-2022/owhnews-2022-08-12T08:28:43.609924-05:00.jpg">August 12 at 8:28 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 36 hyperlink lists with the Internet Archive.


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
| [August 17 at 6:55 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-17T18:55:03.105273-05:00.hyperlinks.json) |
| [August 17 at 6:54 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-17T06:54:08.038047-05:00.hyperlinks.json) |
| [August 16 at 7:11 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-16T19:11:29.949572-05:00.hyperlinks.json) |
| [August 16 at 9:06 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-16T09:06:31.726473-05:00.hyperlinks.json) |
| [August 15 at 8:41 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-15T20:41:38.484720-05:00.hyperlinks.json) |
| [August 15 at 9:24 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-15T09:24:20.822516-05:00.hyperlinks.json) |
| [August 14 at 8:27 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-14T20:27:28.432066-05:00.hyperlinks.json) |
| [August 14 at 8:55 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-14T08:55:06.784583-05:00.hyperlinks.json) |
| [August 13 at 10:21 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-13T22:21:11.047079-05:00.hyperlinks.json) |
| [August 13 at 8:16 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-13T08:16:41.207584-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 38 accessibility trees with the Internet Archive.


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
| [August 17 at 6:55 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-17T18:55:03.105273-05:00.accessibility.json) |
| [August 17 at 6:54 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-17T06:54:08.038047-05:00.accessibility.json) |
| [August 16 at 7:11 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-16T19:11:29.949572-05:00.accessibility.json) |
| [August 16 at 9:06 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-16T09:06:31.726473-05:00.accessibility.json) |
| [August 15 at 8:41 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-15T20:41:38.484720-05:00.accessibility.json) |
| [August 15 at 9:24 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-15T09:24:20.822516-05:00.accessibility.json) |
| [August 14 at 8:27 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-14T20:27:28.432066-05:00.accessibility.json) |
| [August 14 at 8:55 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-14T08:55:06.784583-05:00.accessibility.json) |
| [August 13 at 10:21 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-13T22:21:11.047079-05:00.accessibility.json) |
| [August 13 at 8:16 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-13T08:16:41.207584-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 39 Lighthouse audits with the Internet Archive.


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
| [August 17 at 6:55 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-17T18:55:03.105273-05:00.lighthouse.json) |
| [August 17 at 6:54 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-17T06:54:08.038047-05:00.lighthouse.json) |
| [August 16 at 7:11 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-16T19:11:29.949572-05:00.lighthouse.json) |
| [August 16 at 9:06 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-16T09:06:31.726473-05:00.lighthouse.json) |
| [August 15 at 8:41 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-15T20:41:38.484720-05:00.lighthouse.json) |
| [August 15 at 9:24 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-15T09:24:20.822516-05:00.lighthouse.json) |
| [August 14 at 8:27 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-14T20:27:28.432066-05:00.lighthouse.json) |
| [August 14 at 8:55 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-14T08:55:06.784583-05:00.lighthouse.json) |
| [August 13 at 10:21 PM](https://archive.org/download/owhnews-2022/owhnews-2022-08-13T22:21:11.047079-05:00.lighthouse.json) |
| [August 13 at 8:16 AM](https://archive.org/download/owhnews-2022/owhnews-2022-08-13T08:16:41.207584-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[owhnews-2022](https://archive.org/details/owhnews-2022)|
