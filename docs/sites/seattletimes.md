---
orphan: true
---

```{include} ../_templates/nav.html
```

# Seattle Times

![Seattle Times](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/seattletimes.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.seattletimes.com/](https://www.seattletimes.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/seattletimes.xml)                                                              |
| Twitter handle | [@seattletimes](https://www.twitter.com/seattletimes)                                                                                  |
| Location       | Seattle                                                                                                                              |
| Timezone       | America/Los_Angeles                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/washington.html">Washington</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/seattletimes.json"
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
        71
    </td>
    <td style="text-align: right;">
        747
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
        24
    </td>
    <td style="text-align: right;">
        482
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
    <td style="text-align: right;">
        275
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 110 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/seattletimes.json"
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
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-28T09:01:48.849141-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-28T09:01:48.849141-07:00.jpg"
     alt="Seattle Times at 2022-08-28 09:01:50-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-28T09:01:48.849141-07:00.jpg">August 28 at 9:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T21:36:44.436598-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T21:36:44.436598-07:00.jpg"
     alt="Seattle Times at 2022-08-27 21:36:46-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T21:36:44.436598-07:00.jpg">August 27 at 9:36 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T08:59:24.435676-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T08:59:24.435676-07:00.jpg"
     alt="Seattle Times at 2022-08-27 08:59:29-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T08:59:24.435676-07:00.jpg">August 27 at 8:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T21:37:26.895615-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T21:37:26.895615-07:00.jpg"
     alt="Seattle Times at 2022-08-26 21:37:31-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T21:37:26.895615-07:00.jpg">August 26 at 9:37 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T09:05:51.936939-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T09:05:51.936939-07:00.jpg"
     alt="Seattle Times at 2022-08-26 09:06:02-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T09:05:51.936939-07:00.jpg">August 26 at 9:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T21:43:03.566107-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T21:43:03.566107-07:00.jpg"
     alt="Seattle Times at 2022-08-25 21:43:04-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T21:43:03.566107-07:00.jpg">August 25 at 9:43 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T09:04:24.730295-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T09:04:24.730295-07:00.jpg"
     alt="Seattle Times at 2022-08-25 09:04:36-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T09:04:24.730295-07:00.jpg">August 25 at 9:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-24T09:00:49.716640-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-24T09:00:49.716640-07:00.jpg"
     alt="Seattle Times at 2022-08-24 09:00:51-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-24T09:00:49.716640-07:00.jpg">August 24 at 9:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T21:37:01.170160-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T21:37:01.170160-07:00.jpg"
     alt="Seattle Times at 2022-08-23 21:37:05-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T21:37:01.170160-07:00.jpg">August 23 at 9:37 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T09:05:37.199238-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T09:05:37.199238-07:00.jpg"
     alt="Seattle Times at 2022-08-23 09:05:41-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T09:05:37.199238-07:00.jpg">August 23 at 9:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-22T20:56:36.616518-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-22T20:56:36.616518-07:00.jpg"
     alt="Seattle Times at 2022-08-22 20:56:41-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-22T20:56:36.616518-07:00.jpg">August 22 at 8:56 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-22T08:02:42.394686-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-22T08:02:42.394686-07:00.jpg"
     alt="Seattle Times at 2022-08-22 08:02:48-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-08-22T08:02:42.394686-07:00.jpg">August 22 at 8:02 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 111 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/seattletimes.json"
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
| [August 28 at 9:01 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-28T09:01:48.849141-07:00.hyperlinks.json) |
| [August 27 at 9:36 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T21:36:44.436598-07:00.hyperlinks.json) |
| [August 27 at 8:59 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T08:59:24.435676-07:00.hyperlinks.json) |
| [August 26 at 9:37 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T21:37:26.895615-07:00.hyperlinks.json) |
| [August 26 at 9:06 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T09:05:51.936939-07:00.hyperlinks.json) |
| [August 25 at 9:43 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T21:43:03.566107-07:00.hyperlinks.json) |
| [August 25 at 9:04 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T09:04:24.730295-07:00.hyperlinks.json) |
| [August 24 at 9:00 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-24T09:00:49.716640-07:00.hyperlinks.json) |
| [August 23 at 9:37 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T21:37:01.170160-07:00.hyperlinks.json) |
| [August 23 at 9:05 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T09:05:37.199238-07:00.hyperlinks.json) |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/seattletimes.json"
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
| [August 28 at 9:01 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-28T09:01:48.849141-07:00.accessibility.json) |
| [August 27 at 9:36 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T21:36:44.436598-07:00.accessibility.json) |
| [August 27 at 8:59 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T08:59:24.435676-07:00.accessibility.json) |
| [August 26 at 9:37 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T21:37:26.895615-07:00.accessibility.json) |
| [August 26 at 9:06 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T09:05:51.936939-07:00.accessibility.json) |
| [August 25 at 9:43 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T21:43:03.566107-07:00.accessibility.json) |
| [August 25 at 9:04 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T09:04:24.730295-07:00.accessibility.json) |
| [August 24 at 9:00 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-24T09:00:49.716640-07:00.accessibility.json) |
| [August 23 at 9:37 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T21:37:01.170160-07:00.accessibility.json) |
| [August 23 at 9:05 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T09:05:37.199238-07:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 72 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/seattletimes.json"
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
| [August 28 at 9:01 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-28T09:01:48.849141-07:00.lighthouse.json) |
| [August 27 at 9:36 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T21:36:44.436598-07:00.lighthouse.json) |
| [August 27 at 8:59 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-27T08:59:24.435676-07:00.lighthouse.json) |
| [August 26 at 9:37 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T21:37:26.895615-07:00.lighthouse.json) |
| [August 26 at 9:06 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-26T09:05:51.936939-07:00.lighthouse.json) |
| [August 25 at 9:43 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T21:43:03.566107-07:00.lighthouse.json) |
| [August 25 at 9:04 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-25T09:04:24.730295-07:00.lighthouse.json) |
| [August 24 at 9:00 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-24T09:00:49.716640-07:00.lighthouse.json) |
| [August 23 at 9:37 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T21:37:01.170160-07:00.lighthouse.json) |
| [August 23 at 9:05 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-08-23T09:05:37.199238-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[seattletimes-2022](https://archive.org/details/seattletimes-2022)|
