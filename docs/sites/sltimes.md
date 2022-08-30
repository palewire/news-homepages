---
orphan: true
---

```{include} ../_templates/nav.html
```

# Storm Lake Times

![Storm Lake Times](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/sltimes.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.stormlake.com/](https://www.stormlake.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/sltimes.xml)                                                              |
| Twitter handle | [@SLTimes](https://www.twitter.com/SLTimes)                                                                                  |
| Location       | Storm Lake                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/iowa.html">Iowa</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 17 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/sltimes.json"
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
        481
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
        419
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
    <td style="text-align: right;">
        750
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
        725
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 186 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/sltimes.json"
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
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-28T08:01:08.980047-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-28T08:01:08.980047-05:00.jpg"
     alt="Storm Lake Times at 2022-08-28 08:01:13-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-28T08:01:08.980047-05:00.jpg">August 28 at 8:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-27T20:28:29.849837-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-27T20:28:29.849837-05:00.jpg"
     alt="Storm Lake Times at 2022-08-27 20:28:31-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-27T20:28:29.849837-05:00.jpg">August 27 at 8:28 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-27T07:57:47.594336-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-27T07:57:47.594336-05:00.jpg"
     alt="Storm Lake Times at 2022-08-27 07:57:51-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-27T07:57:47.594336-05:00.jpg">August 27 at 7:57 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T20:08:19.726168-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T20:08:19.726168-05:00.jpg"
     alt="Storm Lake Times at 2022-08-26 20:08:21-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T20:08:19.726168-05:00.jpg">August 26 at 8:08 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T11:11:24.468691-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T11:11:24.468691-05:00.jpg"
     alt="Storm Lake Times at 2022-08-26 11:11:25-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T11:11:24.468691-05:00.jpg">August 26 at 11:11 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T08:01:31.872299-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T08:01:31.872299-05:00.jpg"
     alt="Storm Lake Times at 2022-08-26 08:01:36-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-26T08:01:31.872299-05:00.jpg">August 26 at 8:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-25T20:16:07.061817-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-25T20:16:07.061817-05:00.jpg"
     alt="Storm Lake Times at 2022-08-25 20:16:08-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-25T20:16:07.061817-05:00.jpg">August 25 at 8:16 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-25T08:04:51.284753-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-25T08:04:51.284753-05:00.jpg"
     alt="Storm Lake Times at 2022-08-25 08:05:00-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-25T08:04:51.284753-05:00.jpg">August 25 at 8:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-24T10:58:29.017490-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-24T10:58:29.017490-05:00.jpg"
     alt="Storm Lake Times at 2022-08-24 10:58:30-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-24T10:58:29.017490-05:00.jpg">August 24 at 10:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-24T07:57:31.510551-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-24T07:57:31.510551-05:00.jpg"
     alt="Storm Lake Times at 2022-08-24 07:57:41-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-24T07:57:31.510551-05:00.jpg">August 24 at 7:57 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-23T20:09:31.208177-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-23T20:09:31.208177-05:00.jpg"
     alt="Storm Lake Times at 2022-08-23 20:09:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-23T20:09:31.208177-05:00.jpg">August 23 at 8:09 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-23T07:57:18.301518-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-23T07:57:18.301518-05:00.jpg"
     alt="Storm Lake Times at 2022-08-23 07:57:19-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-23T07:57:18.301518-05:00.jpg">August 23 at 7:57 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 189 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/sltimes.json"
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
| [August 28 at 8:01 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-28T08:01:08.980047-05:00.hyperlinks.json) |
| [August 27 at 8:28 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-27T20:28:29.849837-05:00.hyperlinks.json) |
| [August 27 at 7:57 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-27T07:57:47.594336-05:00.hyperlinks.json) |
| [August 26 at 8:08 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T20:08:19.726168-05:00.hyperlinks.json) |
| [August 26 at 11:11 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T11:11:24.468691-05:00.hyperlinks.json) |
| [August 26 at 8:01 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T08:01:31.872299-05:00.hyperlinks.json) |
| [August 25 at 8:16 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-25T20:16:07.061817-05:00.hyperlinks.json) |
| [August 25 at 8:05 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-25T08:04:51.284753-05:00.hyperlinks.json) |
| [August 24 at 10:58 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-24T10:58:29.017490-05:00.hyperlinks.json) |
| [August 24 at 7:57 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-24T07:57:31.510551-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 189 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/sltimes.json"
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
| [August 28 at 8:01 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-28T08:01:08.980047-05:00.accessibility.json) |
| [August 27 at 8:28 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-27T20:28:29.849837-05:00.accessibility.json) |
| [August 27 at 7:57 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-27T07:57:47.594336-05:00.accessibility.json) |
| [August 26 at 8:08 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T20:08:19.726168-05:00.accessibility.json) |
| [August 26 at 11:11 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T11:11:24.468691-05:00.accessibility.json) |
| [August 26 at 8:01 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T08:01:31.872299-05:00.accessibility.json) |
| [August 25 at 8:16 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-25T20:16:07.061817-05:00.accessibility.json) |
| [August 25 at 8:05 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-25T08:04:51.284753-05:00.accessibility.json) |
| [August 24 at 10:58 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-24T10:58:29.017490-05:00.accessibility.json) |
| [August 24 at 7:57 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-24T07:57:31.510551-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 87 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/sltimes.json"
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
| [August 28 at 8:01 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-28T08:01:08.980047-05:00.lighthouse.json) |
| [August 27 at 8:28 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-27T20:28:29.849837-05:00.lighthouse.json) |
| [August 27 at 7:57 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-27T07:57:47.594336-05:00.lighthouse.json) |
| [August 26 at 8:08 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T20:08:19.726168-05:00.lighthouse.json) |
| [August 26 at 11:11 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T11:11:24.468691-05:00.lighthouse.json) |
| [August 26 at 8:01 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-26T08:01:31.872299-05:00.lighthouse.json) |
| [August 25 at 8:16 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-25T20:16:07.061817-05:00.lighthouse.json) |
| [August 25 at 8:05 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-25T08:04:51.284753-05:00.lighthouse.json) |
| [August 24 at 10:58 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-24T10:58:29.017490-05:00.lighthouse.json) |
| [August 24 at 7:57 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-24T07:57:31.510551-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[sltimes-2022](https://archive.org/details/sltimes-2022)|
