---
orphan: true
---

```{include} ../_templates/nav.html
```

# St. Louis Post-Dispatch

![St. Louis Post-Dispatch](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/stltoday.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.stltoday.com/](https://www.stltoday.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/stltoday.xml)                                                              |
| Twitter handle | [@stltoday](https://www.twitter.com/stltoday)                                                                                  |
| Location       | St. Louis                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/missouri.html">Missouri</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/stltoday.json"
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
        83
    </td>
    <td style="text-align: right;">
        470
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
        121
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
    <td style="text-align: right;">
        654
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
        583
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 129 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/stltoday.json"
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
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-21T10:01:58.943577-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-21T10:01:58.943577-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-21 10:02:05-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-21T10:01:58.943577-05:00.jpg">August 21 at 10:02 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-20T22:37:57.260155-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-20T22:37:57.260155-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-20 22:38:01-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-20T22:37:57.260155-05:00.jpg">August 20 at 10:38 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-20T09:57:01.785720-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-20T09:57:01.785720-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-20 09:57:10-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-20T09:57:01.785720-05:00.jpg">August 20 at 9:57 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T22:39:12.104276-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T22:39:12.104276-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-19 22:39:13-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T22:39:12.104276-05:00.jpg">August 19 at 10:39 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T10:33:19.563932-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T10:33:19.563932-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-19 10:33:30-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T10:33:19.563932-05:00.jpg">August 19 at 10:33 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T07:12:49.562797-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T07:12:49.562797-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-19 07:12:51-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-19T07:12:49.562797-05:00.jpg">August 19 at 7:12 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-18T22:43:11.999204-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-18T22:43:11.999204-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-18 22:43:24-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-18T22:43:11.999204-05:00.jpg">August 18 at 10:43 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-18T10:29:03.118254-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-18T10:29:03.118254-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-18 10:29:16-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-18T10:29:03.118254-05:00.jpg">August 18 at 10:29 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-17T22:46:02.928110-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-17T22:46:02.928110-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-17 22:46:04-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-17T22:46:02.928110-05:00.jpg">August 17 at 10:46 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-17T10:12:41.746678-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-17T10:12:41.746678-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-17 10:12:46-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-17T10:12:41.746678-05:00.jpg">August 17 at 10:12 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-16T22:45:26.160520-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-16T22:45:26.160520-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-16 22:45:27-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-16T22:45:26.160520-05:00.jpg">August 16 at 10:45 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-16T13:45:20.675158-05:00.jpg">
  <img src="https://archive.org/download/stltoday-2022/stltoday-2022-08-16T13:45:20.675158-05:00.jpg"
     alt="St. Louis Post-Dispatch at 2022-08-16 13:45:25-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/stltoday-2022/stltoday-2022-08-16T13:45:20.675158-05:00.jpg">August 16 at 1:45 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 110 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/stltoday.json"
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
| [August 21 at 10:02 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-21T10:01:58.943577-05:00.hyperlinks.json) |
| [August 20 at 10:38 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-20T22:37:57.260155-05:00.hyperlinks.json) |
| [August 20 at 9:57 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-20T09:57:01.785720-05:00.hyperlinks.json) |
| [August 19 at 10:39 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T22:39:12.104276-05:00.hyperlinks.json) |
| [August 19 at 10:33 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T10:33:19.563932-05:00.hyperlinks.json) |
| [August 19 at 7:12 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T07:12:49.562797-05:00.hyperlinks.json) |
| [August 18 at 10:43 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-18T22:43:11.999204-05:00.hyperlinks.json) |
| [August 18 at 10:29 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-18T10:29:03.118254-05:00.hyperlinks.json) |
| [August 17 at 10:46 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-17T22:46:02.928110-05:00.hyperlinks.json) |
| [August 17 at 10:12 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-17T10:12:41.746678-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 119 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/stltoday.json"
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
| [August 21 at 10:02 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-21T10:01:58.943577-05:00.accessibility.json) |
| [August 20 at 10:38 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-20T22:37:57.260155-05:00.accessibility.json) |
| [August 20 at 9:57 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-20T09:57:01.785720-05:00.accessibility.json) |
| [August 19 at 10:39 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T22:39:12.104276-05:00.accessibility.json) |
| [August 19 at 10:33 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T10:33:19.563932-05:00.accessibility.json) |
| [August 19 at 7:12 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T07:12:49.562797-05:00.accessibility.json) |
| [August 18 at 10:43 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-18T22:43:11.999204-05:00.accessibility.json) |
| [August 18 at 10:29 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-18T10:29:03.118254-05:00.accessibility.json) |
| [August 17 at 10:46 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-17T22:46:02.928110-05:00.accessibility.json) |
| [August 17 at 10:12 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-17T10:12:41.746678-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 59 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/stltoday.json"
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
| [August 21 at 10:02 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-21T10:01:58.943577-05:00.lighthouse.json) |
| [August 20 at 10:38 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-20T22:37:57.260155-05:00.lighthouse.json) |
| [August 20 at 9:57 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-20T09:57:01.785720-05:00.lighthouse.json) |
| [August 19 at 10:39 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T22:39:12.104276-05:00.lighthouse.json) |
| [August 19 at 10:33 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T10:33:19.563932-05:00.lighthouse.json) |
| [August 19 at 7:12 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-19T07:12:49.562797-05:00.lighthouse.json) |
| [August 18 at 10:43 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-18T22:43:11.999204-05:00.lighthouse.json) |
| [August 18 at 10:29 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-18T10:29:03.118254-05:00.lighthouse.json) |
| [August 17 at 10:46 PM](https://archive.org/download/stltoday-2022/stltoday-2022-08-17T22:46:02.928110-05:00.lighthouse.json) |
| [August 17 at 10:12 AM](https://archive.org/download/stltoday-2022/stltoday-2022-08-17T10:12:41.746678-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[stltoday-2022](https://archive.org/details/stltoday-2022)|
