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

This site was analyzed 20 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
        144
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
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
    <td style="text-align: right;">
        479
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

The archiving routine has saved 212 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-30T04:15:17.603930-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-30T04:15:17.603930-04:00.jpg"
     alt="ZeroHedge at 2022-09-30 04:15:19-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-30T04:15:17.603930-04:00.jpg">September 30 at 4:15 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:38:55.792250-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:38:55.792250-04:00.jpg"
     alt="ZeroHedge at 2022-09-29 15:38:58-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:38:55.792250-04:00.jpg">September 29 at 3:38 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:05:44.470789-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:05:44.470789-04:00.jpg"
     alt="ZeroHedge at 2022-09-29 15:05:45-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:05:44.470789-04:00.jpg">September 29 at 3:05 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T03:35:23.734582-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T03:35:23.734582-04:00.jpg"
     alt="ZeroHedge at 2022-09-29 03:35:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T03:35:23.734582-04:00.jpg">September 29 at 3:35 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:44:32.036502-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:44:32.036502-04:00.jpg"
     alt="ZeroHedge at 2022-09-28 15:44:34-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:44:32.036502-04:00.jpg">September 28 at 3:44 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:11:36.636576-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:11:36.636576-04:00.jpg"
     alt="ZeroHedge at 2022-09-28 15:12:20-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:11:36.636576-04:00.jpg">September 28 at 3:12 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T03:58:48.600252-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T03:58:48.600252-04:00.jpg"
     alt="ZeroHedge at 2022-09-28 03:58:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T03:58:48.600252-04:00.jpg">September 28 at 3:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:48:04.796022-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:48:04.796022-04:00.jpg"
     alt="ZeroHedge at 2022-09-27 15:48:07-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:48:04.796022-04:00.jpg">September 27 at 3:48 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:46:26.338736-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:46:26.338736-04:00.jpg"
     alt="ZeroHedge at 2022-09-27 15:46:27-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:46:26.338736-04:00.jpg">September 27 at 3:46 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T03:06:57.828626-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T03:06:57.828626-04:00.jpg"
     alt="ZeroHedge at 2022-09-27 03:06:59-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T03:06:57.828626-04:00.jpg">September 27 at 3:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-26T15:48:15.664974-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-26T15:48:15.664974-04:00.jpg"
     alt="ZeroHedge at 2022-09-26 15:48:17-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-26T15:48:15.664974-04:00.jpg">September 26 at 3:48 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-26T15:15:34.711807-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-26T15:15:34.711807-04:00.jpg"
     alt="ZeroHedge at 2022-09-26 15:15:36-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-09-26T15:15:34.711807-04:00.jpg">September 26 at 3:15 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 216 hyperlink lists with the Internet Archive.


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
| [September 30 at 4:15 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-30T04:15:17.603930-04:00.hyperlinks.json) |
| [September 29 at 3:39 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:38:55.792250-04:00.hyperlinks.json) |
| [September 29 at 3:05 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:05:44.470789-04:00.hyperlinks.json) |
| [September 29 at 3:35 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T03:35:23.734582-04:00.hyperlinks.json) |
| [September 28 at 3:44 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:44:32.036502-04:00.hyperlinks.json) |
| [September 28 at 3:12 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:11:36.636576-04:00.hyperlinks.json) |
| [September 28 at 3:58 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T03:58:48.600252-04:00.hyperlinks.json) |
| [September 27 at 3:48 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:48:04.796022-04:00.hyperlinks.json) |
| [September 27 at 3:46 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:46:26.338736-04:00.hyperlinks.json) |
| [September 27 at 3:07 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T03:06:57.828626-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 215 accessibility trees with the Internet Archive.


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
| [September 30 at 4:15 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-30T04:15:17.603930-04:00.accessibility.json) |
| [September 29 at 3:38 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:38:55.792250-04:00.accessibility.json) |
| [September 29 at 3:05 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:05:44.470789-04:00.accessibility.json) |
| [September 29 at 3:35 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T03:35:23.734582-04:00.accessibility.json) |
| [September 28 at 3:44 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:44:32.036502-04:00.accessibility.json) |
| [September 28 at 3:12 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:11:36.636576-04:00.accessibility.json) |
| [September 28 at 3:58 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T03:58:48.600252-04:00.accessibility.json) |
| [September 27 at 3:48 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:48:04.796022-04:00.accessibility.json) |
| [September 27 at 3:46 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:46:26.338736-04:00.accessibility.json) |
| [September 27 at 3:07 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T03:06:57.828626-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 198 Lighthouse audits with the Internet Archive.


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
| [September 30 at 4:15 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-30T04:15:17.603930-04:00.lighthouse.json) |
| [September 29 at 3:39 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:38:55.792250-04:00.lighthouse.json) |
| [September 29 at 3:05 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T15:05:44.470789-04:00.lighthouse.json) |
| [September 29 at 3:35 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-29T03:35:23.734582-04:00.lighthouse.json) |
| [September 28 at 3:44 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:44:32.036502-04:00.lighthouse.json) |
| [September 28 at 3:12 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T15:11:36.636576-04:00.lighthouse.json) |
| [September 28 at 3:58 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-28T03:58:48.600252-04:00.lighthouse.json) |
| [September 27 at 3:48 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:48:04.796022-04:00.lighthouse.json) |
| [September 27 at 3:46 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T15:46:26.338736-04:00.lighthouse.json) |
| [September 27 at 3:07 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-09-27T03:06:57.828626-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[zerohedge-2022](https://archive.org/details/zerohedge-2022)|
