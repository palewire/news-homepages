---
orphan: true
---

```{include} ../_templates/nav.html
```

# Herald Times Reporter

![Herald Times Reporter](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/htrnews.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.htrnews.com/](https://www.htrnews.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/htrnews.xml)                                                              |
| Twitter handle | [@htrnews](https://www.twitter.com/htrnews)                                                                                  |
| Location       | Manitowoc                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/wisconsin.html">Wisconsin</a>,  <a href="../bundles/gannett.html">Gannett</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 15 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/htrnews.json"
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
        88
    </td>
    <td style="text-align: right;">
        327
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
        114
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
    <td style="text-align: right;">
        117
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
    <td style="text-align: right;">
        158
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 325 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/htrnews.json"
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
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-04T12:47:03.975173-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-04T12:47:03.975173-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-04 12:47:15-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-04T12:47:03.975173-05:00.jpg">October 4 at 12:47 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-04T01:06:06.695434-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-04T01:06:06.695434-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-04 01:06:35-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-04T01:06:06.695434-05:00.jpg">October 4 at 1:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-03T12:46:06.981426-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-03T12:46:06.981426-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-03 12:46:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-03T12:46:06.981426-05:00.jpg">October 3 at 12:46 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-03T00:05:53.563251-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-03T00:05:53.563251-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-03 00:06:30-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-03T00:05:53.563251-05:00.jpg">October 3 at 12:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-02T12:27:40.095587-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-02T12:27:40.095587-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-02 12:27:42-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-02T12:27:40.095587-05:00.jpg">October 2 at 12:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-02T00:58:48.511305-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-02T00:58:48.511305-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-02 00:58:57-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-02T00:58:48.511305-05:00.jpg">October 2 at 12:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-01T12:30:48.747052-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-01T12:30:48.747052-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-01 12:30:50-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-01T12:30:48.747052-05:00.jpg">October 1 at 12:30 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-01T01:16:15.707999-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-10-01T01:16:15.707999-05:00.jpg"
     alt="Herald Times Reporter at 2022-10-01 01:16:17-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-10-01T01:16:15.707999-05:00.jpg">October 1 at 1:16 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-30T13:07:20.612130-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-30T13:07:20.612130-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-30 13:07:44-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-30T13:07:20.612130-05:00.jpg">September 30 at 1:07 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-30T01:16:56.449220-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-30T01:16:56.449220-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-30 01:16:58-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-30T01:16:56.449220-05:00.jpg">September 30 at 1:16 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-29T12:30:10.425342-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-29T12:30:10.425342-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-29 12:30:34-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-29T12:30:10.425342-05:00.jpg">September 29 at 12:30 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-29T01:01:37.379210-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-29T01:01:37.379210-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-29 01:01:51-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-29T01:01:37.379210-05:00.jpg">September 29 at 1:01 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 324 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/htrnews.json"
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
| [October 4 at 12:47 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-04T12:47:03.975173-05:00.hyperlinks.json) |
| [October 4 at 1:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-04T01:06:06.695434-05:00.hyperlinks.json) |
| [October 3 at 12:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-03T12:46:06.981426-05:00.hyperlinks.json) |
| [October 3 at 12:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-03T00:05:53.563251-05:00.hyperlinks.json) |
| [October 2 at 12:27 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-02T12:27:40.095587-05:00.hyperlinks.json) |
| [October 2 at 12:59 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-02T00:58:48.511305-05:00.hyperlinks.json) |
| [October 1 at 12:30 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-01T12:30:48.747052-05:00.hyperlinks.json) |
| [October 1 at 1:16 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-01T01:16:15.707999-05:00.hyperlinks.json) |
| [September 30 at 1:07 PM](https://archive.org/download/htrnews-2022/htrnews-2022-09-30T13:07:20.612130-05:00.hyperlinks.json) |
| [September 30 at 1:17 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-30T01:16:56.449220-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 324 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/htrnews.json"
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
| [October 4 at 12:47 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-04T12:47:03.975173-05:00.accessibility.json) |
| [October 4 at 1:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-04T01:06:06.695434-05:00.accessibility.json) |
| [October 3 at 12:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-03T12:46:06.981426-05:00.accessibility.json) |
| [October 3 at 12:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-03T00:05:53.563251-05:00.accessibility.json) |
| [October 2 at 12:27 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-02T12:27:40.095587-05:00.accessibility.json) |
| [October 2 at 12:58 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-02T00:58:48.511305-05:00.accessibility.json) |
| [October 1 at 12:30 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-01T12:30:48.747052-05:00.accessibility.json) |
| [October 1 at 1:16 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-01T01:16:15.707999-05:00.accessibility.json) |
| [September 30 at 1:07 PM](https://archive.org/download/htrnews-2022/htrnews-2022-09-30T13:07:20.612130-05:00.accessibility.json) |
| [September 30 at 1:17 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-30T01:16:56.449220-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 144 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/htrnews.json"
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
| [October 4 at 12:47 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-04T12:47:03.975173-05:00.lighthouse.json) |
| [October 4 at 1:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-04T01:06:06.695434-05:00.lighthouse.json) |
| [October 3 at 12:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-03T12:46:06.981426-05:00.lighthouse.json) |
| [October 3 at 12:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-03T00:05:53.563251-05:00.lighthouse.json) |
| [October 2 at 12:27 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-02T12:27:40.095587-05:00.lighthouse.json) |
| [October 2 at 12:59 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-02T00:58:48.511305-05:00.lighthouse.json) |
| [October 1 at 12:30 PM](https://archive.org/download/htrnews-2022/htrnews-2022-10-01T12:30:48.747052-05:00.lighthouse.json) |
| [October 1 at 1:16 AM](https://archive.org/download/htrnews-2022/htrnews-2022-10-01T01:16:15.707999-05:00.lighthouse.json) |
| [September 30 at 1:07 PM](https://archive.org/download/htrnews-2022/htrnews-2022-09-30T13:07:20.612130-05:00.lighthouse.json) |
| [September 30 at 1:17 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-30T01:16:56.449220-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[htrnews-2022](https://archive.org/details/htrnews-2022)|
