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

This site was analyzed 18 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
        730
    </td>
  </tr>

  <tr>
    <td>
        Best practices
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
    <td style="text-align: right;">
        764
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
    <td style="text-align: right;">
        1022
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
        987
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 274 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-03T11:18:15.315444-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-10-03T11:18:15.315444-05:00.jpg"
     alt="Storm Lake Times at 2022-10-03 11:18:17-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-03T11:18:15.315444-05:00.jpg">October 3 at 11:18 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-03T09:08:59.441322-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-10-03T09:08:59.441322-05:00.jpg"
     alt="Storm Lake Times at 2022-10-03 09:09:10-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-03T09:08:59.441322-05:00.jpg">October 3 at 9:09 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-02T21:33:55.659636-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-10-02T21:33:55.659636-05:00.jpg"
     alt="Storm Lake Times at 2022-10-02 21:34:13-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-02T21:33:55.659636-05:00.jpg">October 2 at 9:34 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-02T09:16:39.740549-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-10-02T09:16:39.740549-05:00.jpg"
     alt="Storm Lake Times at 2022-10-02 09:16:49-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-02T09:16:39.740549-05:00.jpg">October 2 at 9:16 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-01T21:26:57.388448-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-10-01T21:26:57.388448-05:00.jpg"
     alt="Storm Lake Times at 2022-10-01 21:26:58-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-01T21:26:57.388448-05:00.jpg">October 1 at 9:26 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-01T09:13:09.584314-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-10-01T09:13:09.584314-05:00.jpg"
     alt="Storm Lake Times at 2022-10-01 09:13:11-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-10-01T09:13:09.584314-05:00.jpg">October 1 at 9:13 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T21:38:09.071284-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T21:38:09.071284-05:00.jpg"
     alt="Storm Lake Times at 2022-09-30 21:38:11-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T21:38:09.071284-05:00.jpg">September 30 at 9:38 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T11:22:30.356767-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T11:22:30.356767-05:00.jpg"
     alt="Storm Lake Times at 2022-09-30 11:22:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T11:22:30.356767-05:00.jpg">September 30 at 11:22 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T09:20:57.317553-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T09:20:57.317553-05:00.jpg"
     alt="Storm Lake Times at 2022-09-30 09:20:59-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-30T09:20:57.317553-05:00.jpg">September 30 at 9:20 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-29T21:43:11.724107-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-09-29T21:43:11.724107-05:00.jpg"
     alt="Storm Lake Times at 2022-09-29 21:43:13-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-29T21:43:11.724107-05:00.jpg">September 29 at 9:43 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-29T09:08:11.086759-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-09-29T09:08:11.086759-05:00.jpg"
     alt="Storm Lake Times at 2022-09-29 09:08:13-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-29T09:08:11.086759-05:00.jpg">September 29 at 9:08 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-28T21:22:52.831364-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-09-28T21:22:52.831364-05:00.jpg"
     alt="Storm Lake Times at 2022-09-28 21:23:12-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-09-28T21:22:52.831364-05:00.jpg">September 28 at 9:23 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 274 hyperlink lists with the Internet Archive.


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
| [October 3 at 11:18 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-03T11:18:15.315444-05:00.hyperlinks.json) |
| [October 3 at 9:09 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-03T09:08:59.441322-05:00.hyperlinks.json) |
| [October 2 at 9:34 PM](https://archive.org/download/sltimes-2022/sltimes-2022-10-02T21:33:55.659636-05:00.hyperlinks.json) |
| [October 2 at 9:16 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-02T09:16:39.740549-05:00.hyperlinks.json) |
| [October 1 at 9:27 PM](https://archive.org/download/sltimes-2022/sltimes-2022-10-01T21:26:57.388448-05:00.hyperlinks.json) |
| [October 1 at 9:13 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-01T09:13:09.584314-05:00.hyperlinks.json) |
| [September 30 at 9:38 PM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T21:38:09.071284-05:00.hyperlinks.json) |
| [September 30 at 11:22 AM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T11:22:30.356767-05:00.hyperlinks.json) |
| [September 30 at 9:21 AM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T09:20:57.317553-05:00.hyperlinks.json) |
| [September 29 at 9:43 PM](https://archive.org/download/sltimes-2022/sltimes-2022-09-29T21:43:11.724107-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 274 accessibility trees with the Internet Archive.


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
| [October 3 at 11:18 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-03T11:18:15.315444-05:00.accessibility.json) |
| [October 3 at 9:09 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-03T09:08:59.441322-05:00.accessibility.json) |
| [October 2 at 9:34 PM](https://archive.org/download/sltimes-2022/sltimes-2022-10-02T21:33:55.659636-05:00.accessibility.json) |
| [October 2 at 9:16 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-02T09:16:39.740549-05:00.accessibility.json) |
| [October 1 at 9:27 PM](https://archive.org/download/sltimes-2022/sltimes-2022-10-01T21:26:57.388448-05:00.accessibility.json) |
| [October 1 at 9:13 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-01T09:13:09.584314-05:00.accessibility.json) |
| [September 30 at 9:38 PM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T21:38:09.071284-05:00.accessibility.json) |
| [September 30 at 11:22 AM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T11:22:30.356767-05:00.accessibility.json) |
| [September 30 at 9:21 AM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T09:20:57.317553-05:00.accessibility.json) |
| [September 29 at 9:43 PM](https://archive.org/download/sltimes-2022/sltimes-2022-09-29T21:43:11.724107-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 173 Lighthouse audits with the Internet Archive.


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
| [October 3 at 11:18 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-03T11:18:15.315444-05:00.lighthouse.json) |
| [October 3 at 9:09 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-03T09:08:59.441322-05:00.lighthouse.json) |
| [October 2 at 9:34 PM](https://archive.org/download/sltimes-2022/sltimes-2022-10-02T21:33:55.659636-05:00.lighthouse.json) |
| [October 2 at 9:16 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-02T09:16:39.740549-05:00.lighthouse.json) |
| [October 1 at 9:27 PM](https://archive.org/download/sltimes-2022/sltimes-2022-10-01T21:26:57.388448-05:00.lighthouse.json) |
| [October 1 at 9:13 AM](https://archive.org/download/sltimes-2022/sltimes-2022-10-01T09:13:09.584314-05:00.lighthouse.json) |
| [September 30 at 9:38 PM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T21:38:09.071284-05:00.lighthouse.json) |
| [September 30 at 11:22 AM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T11:22:30.356767-05:00.lighthouse.json) |
| [September 30 at 9:21 AM](https://archive.org/download/sltimes-2022/sltimes-2022-09-30T09:20:57.317553-05:00.lighthouse.json) |
| [September 29 at 9:43 PM](https://archive.org/download/sltimes-2022/sltimes-2022-09-29T21:43:11.724107-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[sltimes-2022](https://archive.org/details/sltimes-2022)|
