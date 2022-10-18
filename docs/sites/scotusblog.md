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
        81
    </td>
    <td style="text-align: right;">
        787
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
        15
    </td>
    <td style="text-align: right;">
        942
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

The archiving routine has saved 245 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-18T10:20:19.781701-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-18T10:20:19.781701-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-18 10:20:29-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-18T10:20:19.781701-04:00.jpg">October 18 at 10:20 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T22:27:19.528770-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T22:27:19.528770-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-17 22:27:21-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T22:27:19.528770-04:00.jpg">October 17 at 10:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T10:10:37.091385-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T10:10:37.091385-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-17 10:10:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T10:10:37.091385-04:00.jpg">October 17 at 10:10 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T22:32:10.330130-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T22:32:10.330130-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-16 22:32:11-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T22:32:10.330130-04:00.jpg">October 16 at 10:32 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T10:12:42.020672-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T10:12:42.020672-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-16 10:12:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T10:12:42.020672-04:00.jpg">October 16 at 10:12 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T22:45:26.968251-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T22:45:26.968251-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-15 22:45:28-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T22:45:26.968251-04:00.jpg">October 15 at 10:45 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T11:05:43.587655-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T11:05:43.587655-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-15 11:05:52-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T11:05:43.587655-04:00.jpg">October 15 at 11:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T22:24:46.989521-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T22:24:46.989521-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-14 22:24:55-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T22:24:46.989521-04:00.jpg">October 14 at 10:24 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T10:25:16.263146-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T10:25:16.263146-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-14 10:25:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T10:25:16.263146-04:00.jpg">October 14 at 10:25 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T22:23:29.945170-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T22:23:29.945170-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-13 22:23:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T22:23:29.945170-04:00.jpg">October 13 at 10:23 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T10:16:36.836244-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T10:16:36.836244-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-13 10:16:59-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T10:16:36.836244-04:00.jpg">October 13 at 10:16 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-12T22:22:35.365811-04:00.jpg">
  <img src="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-12T22:22:35.365811-04:00.jpg"
     alt="SCOTUS Blog at 2022-10-12 22:22:36-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/scotusblog-2022/scotusblog-2022-10-12T22:22:35.365811-04:00.jpg">October 12 at 10:22 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 246 hyperlink lists with the Internet Archive.


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
| [October 18 at 10:20 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-18T10:20:19.781701-04:00.hyperlinks.json) |
| [October 17 at 10:27 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T22:27:19.528770-04:00.hyperlinks.json) |
| [October 17 at 10:10 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T10:10:37.091385-04:00.hyperlinks.json) |
| [October 16 at 10:32 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T22:32:10.330130-04:00.hyperlinks.json) |
| [October 16 at 10:12 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T10:12:42.020672-04:00.hyperlinks.json) |
| [October 15 at 10:45 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T22:45:26.968251-04:00.hyperlinks.json) |
| [October 15 at 11:05 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T11:05:43.587655-04:00.hyperlinks.json) |
| [October 14 at 10:25 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T22:24:46.989521-04:00.hyperlinks.json) |
| [October 14 at 10:25 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T10:25:16.263146-04:00.hyperlinks.json) |
| [October 13 at 10:23 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T22:23:29.945170-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 246 accessibility trees with the Internet Archive.


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
| [October 18 at 10:20 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-18T10:20:19.781701-04:00.accessibility.json) |
| [October 17 at 10:27 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T22:27:19.528770-04:00.accessibility.json) |
| [October 17 at 10:10 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T10:10:37.091385-04:00.accessibility.json) |
| [October 16 at 10:32 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T22:32:10.330130-04:00.accessibility.json) |
| [October 16 at 10:12 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T10:12:42.020672-04:00.accessibility.json) |
| [October 15 at 10:45 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T22:45:26.968251-04:00.accessibility.json) |
| [October 15 at 11:05 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T11:05:43.587655-04:00.accessibility.json) |
| [October 14 at 10:24 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T22:24:46.989521-04:00.accessibility.json) |
| [October 14 at 10:25 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T10:25:16.263146-04:00.accessibility.json) |
| [October 13 at 10:23 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T22:23:29.945170-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 171 Lighthouse audits with the Internet Archive.


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
| [October 18 at 10:20 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-18T10:20:19.781701-04:00.lighthouse.json) |
| [October 17 at 10:27 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T22:27:19.528770-04:00.lighthouse.json) |
| [October 17 at 10:10 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-17T10:10:37.091385-04:00.lighthouse.json) |
| [October 16 at 10:32 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T22:32:10.330130-04:00.lighthouse.json) |
| [October 16 at 10:12 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-16T10:12:42.020672-04:00.lighthouse.json) |
| [October 15 at 10:45 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T22:45:26.968251-04:00.lighthouse.json) |
| [October 15 at 11:05 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-15T11:05:43.587655-04:00.lighthouse.json) |
| [October 14 at 10:25 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T22:24:46.989521-04:00.lighthouse.json) |
| [October 14 at 10:25 AM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-14T10:25:16.263146-04:00.lighthouse.json) |
| [October 13 at 10:23 PM](https://archive.org/download/scotusblog-2022/scotusblog-2022-10-13T22:23:29.945170-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[scotusblog-2022](https://archive.org/details/scotusblog-2022)|
