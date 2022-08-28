---
orphan: true
---

```{include} ../_templates/nav.html
```

# SCOTUS Blog

![SCOTUS Blog](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/scotusblog.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.scotusblog.com/](https://www.scotusblog.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/scotusblog.xml)                                                              |
| Twitter handle | [@SCOTUSblog](https://www.twitter.com/SCOTUSblog)                                                                                  |
| Location       | Washington                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/capitol-hill.html">Capitol Hill</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/scotusblog.json"
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
        80
    </td>
    <td style="text-align: right;">
        570
    </td>
  </tr>

  <tr>
    <td>
        Best practices
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
    <td style="text-align: right;">
        1
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
    <td style="text-align: right;">
        687
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
    <td style="text-align: right;">
        714
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 140 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/scotusblog.json"
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
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-26T09:01:04.905897-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-26T09:01:04.905897-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-26 09:01:06-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-26T09:01:04.905897-04:00.jpg">August 26 at 9:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T21:15:21.150067-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T21:15:21.150067-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-25 21:15:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T21:15:21.150067-04:00.jpg">August 25 at 9:15 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T09:05:18.473572-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T09:05:18.473572-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-25 09:05:20-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T09:05:18.473572-04:00.jpg">August 25 at 9:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-24T08:56:37.777432-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-24T08:56:37.777432-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-24 08:56:45-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-24T08:56:37.777432-04:00.jpg">August 24 at 8:56 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T21:09:24.832895-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T21:09:24.832895-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-23 21:09:26-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T21:09:24.832895-04:00.jpg">August 23 at 9:09 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:56:57.258118-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:56:57.258118-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-23 08:57:03-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:56:57.258118-04:00.jpg">August 23 at 8:57 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:03:19.062794-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:03:19.062794-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-23 08:03:26-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:03:19.062794-04:00.jpg">August 23 at 8:03 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T20:06:09.443483-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T20:06:09.443483-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-22 20:06:10-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T20:06:09.443483-04:00.jpg">August 22 at 8:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T08:04:02.536412-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T08:04:02.536412-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-22 08:04:07-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T08:04:02.536412-04:00.jpg">August 22 at 8:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T19:59:18.878196-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T19:59:18.878196-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-21 19:59:25-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T19:59:18.878196-04:00.jpg">August 21 at 7:59 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T08:06:15.190509-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T08:06:15.190509-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-21 08:06:21-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T08:06:15.190509-04:00.jpg">August 21 at 8:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-20T20:00:43.386968-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-20T20:00:43.386968-04:00.jpg"
     alt="SCOTUS Blog at 2022-08-20 20:00:48-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-08-20T20:00:43.386968-04:00.jpg">August 20 at 8:00 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 142 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/scotusblog.json"
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
| [August 26 at 9:01 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-26T09:01:04.905897-04:00.hyperlinks.json) |
| [August 25 at 9:15 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T21:15:21.150067-04:00.hyperlinks.json) |
| [August 25 at 9:05 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T09:05:18.473572-04:00.hyperlinks.json) |
| [August 24 at 8:56 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-24T08:56:37.777432-04:00.hyperlinks.json) |
| [August 23 at 9:09 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T21:09:24.832895-04:00.hyperlinks.json) |
| [August 23 at 8:57 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:56:57.258118-04:00.hyperlinks.json) |
| [August 23 at 8:03 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:03:19.062794-04:00.hyperlinks.json) |
| [August 22 at 8:06 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T20:06:09.443483-04:00.hyperlinks.json) |
| [August 22 at 8:04 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T08:04:02.536412-04:00.hyperlinks.json) |
| [August 21 at 7:59 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T19:59:18.878196-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 142 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/scotusblog.json"
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
| [August 26 at 9:01 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-26T09:01:04.905897-04:00.accessibility.json) |
| [August 25 at 9:15 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T21:15:21.150067-04:00.accessibility.json) |
| [August 25 at 9:05 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T09:05:18.473572-04:00.accessibility.json) |
| [August 24 at 8:56 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-24T08:56:37.777432-04:00.accessibility.json) |
| [August 23 at 9:09 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T21:09:24.832895-04:00.accessibility.json) |
| [August 23 at 8:57 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:56:57.258118-04:00.accessibility.json) |
| [August 23 at 8:03 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:03:19.062794-04:00.accessibility.json) |
| [August 22 at 8:06 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T20:06:09.443483-04:00.accessibility.json) |
| [August 22 at 8:04 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T08:04:02.536412-04:00.accessibility.json) |
| [August 21 at 7:59 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T19:59:18.878196-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 68 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/scotusblog.json"
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
| [August 26 at 9:01 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-26T09:01:04.905897-04:00.lighthouse.json) |
| [August 25 at 9:15 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T21:15:21.150067-04:00.lighthouse.json) |
| [August 25 at 9:05 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-25T09:05:18.473572-04:00.lighthouse.json) |
| [August 24 at 8:56 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-24T08:56:37.777432-04:00.lighthouse.json) |
| [August 23 at 9:09 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T21:09:24.832895-04:00.lighthouse.json) |
| [August 23 at 8:57 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:56:57.258118-04:00.lighthouse.json) |
| [August 23 at 8:03 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-23T08:03:19.062794-04:00.lighthouse.json) |
| [August 22 at 8:06 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T20:06:09.443483-04:00.lighthouse.json) |
| [August 22 at 8:04 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-22T08:04:02.536412-04:00.lighthouse.json) |
| [August 21 at 7:59 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-08-21T19:59:18.878196-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[scotusblog-2022](https://archive.org/details/scotusblog-2022)|
