---
orphan: true
---

```{include} ../_templates/nav.html
```

# WBEZ

![WBEZ](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/wbez.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.wbez.org/](https://www.wbez.org/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/wbez.xml)                                                              |
| Twitter handle | [@WBEZ](https://www.twitter.com/WBEZ)                                                                                  |
| Location       | Chicago                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/chicago.html">Chicago</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 17 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

<div id="vis--lighthouse-analysis" style="width: 100%; height: 250px;"></div>
  <script>
    const lighthouseAnalysisSpec = {
  "config": {
    "view": {"width": 500, "height": 300, "stroke": 0},
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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/wbez.json"
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
        98
    </td>
    <td style="text-align: right;">
        25
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
        37
    </td>
    <td style="text-align: right;">
        278
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
        246
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 163 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/wbez.json"
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
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-16T12:28:38.483984-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-16T12:28:38.483984-05:00.jpg"
     alt="WBEZ at 2022-08-16 12:28:40-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-16T12:28:38.483984-05:00.jpg">August 16 at 12:28 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-16T01:24:03.311243-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-16T01:24:03.311243-05:00.jpg"
     alt="WBEZ at 2022-08-16 01:24:05-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-16T01:24:03.311243-05:00.jpg">August 16 at 1:24 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-15T14:42:24.349766-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-15T14:42:24.349766-05:00.jpg"
     alt="WBEZ at 2022-08-15 14:42:36-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-15T14:42:24.349766-05:00.jpg">August 15 at 2:42 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-14T22:18:30.951660-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-14T22:18:30.951660-05:00.jpg"
     alt="WBEZ at 2022-08-14 22:18:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-14T22:18:30.951660-05:00.jpg">August 14 at 10:18 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-14T12:09:10.149764-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-14T12:09:10.149764-05:00.jpg"
     alt="WBEZ at 2022-08-14 12:09:11-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-14T12:09:10.149764-05:00.jpg">August 14 at 12:09 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-14T00:12:08.423546-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-14T00:12:08.423546-05:00.jpg"
     alt="WBEZ at 2022-08-14 00:12:09-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-14T00:12:08.423546-05:00.jpg">August 14 at 12:12 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-13T15:50:42.922374-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-13T15:50:42.922374-05:00.jpg"
     alt="WBEZ at 2022-08-13 15:50:44-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-13T15:50:42.922374-05:00.jpg">August 13 at 3:50 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T21:21:31.744114-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-12T21:21:31.744114-05:00.jpg"
     alt="WBEZ at 2022-08-12 21:21:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T21:21:31.744114-05:00.jpg">August 12 at 9:21 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T13:34:09.774695-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-12T13:34:09.774695-05:00.jpg"
     alt="WBEZ at 2022-08-12 13:34:12-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T13:34:09.774695-05:00.jpg">August 12 at 1:34 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T11:28:34.060177-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-12T11:28:34.060177-05:00.jpg"
     alt="WBEZ at 2022-08-12 11:28:39-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T11:28:34.060177-05:00.jpg">August 12 at 11:28 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T04:38:16.880309-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-12T04:38:16.880309-05:00.jpg"
     alt="WBEZ at 2022-08-12 04:38:22-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-12T04:38:16.880309-05:00.jpg">August 12 at 4:38 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbez-2022/wbez-2022-08-11T14:04:31.064394-05:00.jpg">
  <img src="https://archive.org/download/wbez-2022/wbez-2022-08-11T14:04:31.064394-05:00.jpg"
     alt="WBEZ at 2022-08-11 14:04:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbez-2022/wbez-2022-08-11T14:04:31.064394-05:00.jpg">August 11 at 2:04 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 165 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/wbez.json"
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
| [August 16 at 12:28 PM](https://archive.org/download/wbez-2022/wbez-2022-08-16T12:28:38.483984-05:00.hyperlinks.json) |
| [August 16 at 1:24 AM](https://archive.org/download/wbez-2022/wbez-2022-08-16T01:24:03.311243-05:00.hyperlinks.json) |
| [August 15 at 2:42 PM](https://archive.org/download/wbez-2022/wbez-2022-08-15T14:42:24.349766-05:00.hyperlinks.json) |
| [August 14 at 10:18 PM](https://archive.org/download/wbez-2022/wbez-2022-08-14T22:18:30.951660-05:00.hyperlinks.json) |
| [August 14 at 12:09 PM](https://archive.org/download/wbez-2022/wbez-2022-08-14T12:09:10.149764-05:00.hyperlinks.json) |
| [August 14 at 12:12 AM](https://archive.org/download/wbez-2022/wbez-2022-08-14T00:12:08.423546-05:00.hyperlinks.json) |
| [August 13 at 3:50 PM](https://archive.org/download/wbez-2022/wbez-2022-08-13T15:50:42.922374-05:00.hyperlinks.json) |
| [August 12 at 9:21 PM](https://archive.org/download/wbez-2022/wbez-2022-08-12T21:21:31.744114-05:00.hyperlinks.json) |
| [August 12 at 1:34 PM](https://archive.org/download/wbez-2022/wbez-2022-08-12T13:34:09.774695-05:00.hyperlinks.json) |
| [August 12 at 11:28 AM](https://archive.org/download/wbez-2022/wbez-2022-08-12T11:28:34.060177-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 163 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/wbez.json"
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
| [August 16 at 12:28 PM](https://archive.org/download/wbez-2022/wbez-2022-08-16T12:28:38.483984-05:00.accessibility.json) |
| [August 16 at 1:24 AM](https://archive.org/download/wbez-2022/wbez-2022-08-16T01:24:03.311243-05:00.accessibility.json) |
| [August 15 at 2:42 PM](https://archive.org/download/wbez-2022/wbez-2022-08-15T14:42:24.349766-05:00.accessibility.json) |
| [August 14 at 10:18 PM](https://archive.org/download/wbez-2022/wbez-2022-08-14T22:18:30.951660-05:00.accessibility.json) |
| [August 14 at 12:09 PM](https://archive.org/download/wbez-2022/wbez-2022-08-14T12:09:10.149764-05:00.accessibility.json) |
| [August 14 at 12:12 AM](https://archive.org/download/wbez-2022/wbez-2022-08-14T00:12:08.423546-05:00.accessibility.json) |
| [August 13 at 3:50 PM](https://archive.org/download/wbez-2022/wbez-2022-08-13T15:50:42.922374-05:00.accessibility.json) |
| [August 12 at 9:21 PM](https://archive.org/download/wbez-2022/wbez-2022-08-12T21:21:31.744114-05:00.accessibility.json) |
| [August 12 at 1:34 PM](https://archive.org/download/wbez-2022/wbez-2022-08-12T13:34:09.774695-05:00.accessibility.json) |
| [August 12 at 11:28 AM](https://archive.org/download/wbez-2022/wbez-2022-08-12T11:28:34.060177-05:00.accessibility.json) |



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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/wbez.json"
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
| [August 16 at 12:28 PM](https://archive.org/download/wbez-2022/wbez-2022-08-16T12:28:38.483984-05:00.lighthouse.json) |
| [August 16 at 1:24 AM](https://archive.org/download/wbez-2022/wbez-2022-08-16T01:24:03.311243-05:00.lighthouse.json) |
| [August 15 at 2:42 PM](https://archive.org/download/wbez-2022/wbez-2022-08-15T14:42:24.349766-05:00.lighthouse.json) |
| [August 14 at 10:18 PM](https://archive.org/download/wbez-2022/wbez-2022-08-14T22:18:30.951660-05:00.lighthouse.json) |
| [August 14 at 12:09 PM](https://archive.org/download/wbez-2022/wbez-2022-08-14T12:09:10.149764-05:00.lighthouse.json) |
| [August 14 at 12:12 AM](https://archive.org/download/wbez-2022/wbez-2022-08-14T00:12:08.423546-05:00.lighthouse.json) |
| [August 13 at 3:50 PM](https://archive.org/download/wbez-2022/wbez-2022-08-13T15:50:42.922374-05:00.lighthouse.json) |
| [August 12 at 9:21 PM](https://archive.org/download/wbez-2022/wbez-2022-08-12T21:21:31.744114-05:00.lighthouse.json) |
| [August 12 at 1:34 PM](https://archive.org/download/wbez-2022/wbez-2022-08-12T13:34:09.774695-05:00.lighthouse.json) |
| [August 12 at 11:28 AM](https://archive.org/download/wbez-2022/wbez-2022-08-12T11:28:34.060177-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[wbez-2022](https://archive.org/details/wbez-2022)|
