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

The archiving routine has saved 267 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T16:00:08.338364-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T16:00:08.338364-04:00.jpg"
     alt="ZeroHedge at 2022-10-18 16:00:10-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T16:00:08.338364-04:00.jpg">October 18 at 4:00 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T15:52:28.487636-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T15:52:28.487636-04:00.jpg"
     alt="ZeroHedge at 2022-10-18 15:52:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T15:52:28.487636-04:00.jpg">October 18 at 3:52 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T03:20:50.357140-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T03:20:50.357140-04:00.jpg"
     alt="ZeroHedge at 2022-10-18 03:20:51-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T03:20:50.357140-04:00.jpg">October 18 at 3:20 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:28:18.218052-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:28:18.218052-04:00.jpg"
     alt="ZeroHedge at 2022-10-17 16:28:20-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:28:18.218052-04:00.jpg">October 17 at 4:28 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:09:25.954292-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:09:25.954292-04:00.jpg"
     alt="ZeroHedge at 2022-10-17 16:09:37-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:09:25.954292-04:00.jpg">October 17 at 4:09 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T03:52:04.900177-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T03:52:04.900177-04:00.jpg"
     alt="ZeroHedge at 2022-10-17 03:52:06-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T03:52:04.900177-04:00.jpg">October 17 at 3:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T15:33:23.385422-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T15:33:23.385422-04:00.jpg"
     alt="ZeroHedge at 2022-10-16 15:33:32-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T15:33:23.385422-04:00.jpg">October 16 at 3:33 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T14:55:42.704777-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T14:55:42.704777-04:00.jpg"
     alt="ZeroHedge at 2022-10-16 14:55:45-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T14:55:42.704777-04:00.jpg">October 16 at 2:55 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T03:31:14.309341-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T03:31:14.309341-04:00.jpg"
     alt="ZeroHedge at 2022-10-16 03:31:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T03:31:14.309341-04:00.jpg">October 16 at 3:31 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T16:03:24.251349-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T16:03:24.251349-04:00.jpg"
     alt="ZeroHedge at 2022-10-15 16:03:26-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T16:03:24.251349-04:00.jpg">October 15 at 4:03 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T15:59:06.503968-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T15:59:06.503968-04:00.jpg"
     alt="ZeroHedge at 2022-10-15 15:59:15-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T15:59:06.503968-04:00.jpg">October 15 at 3:59 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T04:01:16.825885-04:00.jpg">
  <img src="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T04:01:16.825885-04:00.jpg"
     alt="ZeroHedge at 2022-10-15 04:01:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T04:01:16.825885-04:00.jpg">October 15 at 4:01 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 272 hyperlink lists with the Internet Archive.


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
| [October 18 at 4:00 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T16:00:08.338364-04:00.hyperlinks.json) |
| [October 18 at 3:52 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T15:52:28.487636-04:00.hyperlinks.json) |
| [October 18 at 3:20 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T03:20:50.357140-04:00.hyperlinks.json) |
| [October 17 at 4:28 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:28:18.218052-04:00.hyperlinks.json) |
| [October 17 at 4:09 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:09:25.954292-04:00.hyperlinks.json) |
| [October 17 at 3:52 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T03:52:04.900177-04:00.hyperlinks.json) |
| [October 16 at 3:33 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T15:33:23.385422-04:00.hyperlinks.json) |
| [October 16 at 2:55 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T14:55:42.704777-04:00.hyperlinks.json) |
| [October 16 at 3:31 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T03:31:14.309341-04:00.hyperlinks.json) |
| [October 15 at 4:03 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T16:03:24.251349-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 271 accessibility trees with the Internet Archive.


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
| [October 18 at 4:00 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T16:00:08.338364-04:00.accessibility.json) |
| [October 18 at 3:52 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T15:52:28.487636-04:00.accessibility.json) |
| [October 18 at 3:20 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T03:20:50.357140-04:00.accessibility.json) |
| [October 17 at 4:28 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:28:18.218052-04:00.accessibility.json) |
| [October 17 at 4:09 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:09:25.954292-04:00.accessibility.json) |
| [October 17 at 3:52 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T03:52:04.900177-04:00.accessibility.json) |
| [October 16 at 3:33 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T15:33:23.385422-04:00.accessibility.json) |
| [October 16 at 2:55 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T14:55:42.704777-04:00.accessibility.json) |
| [October 16 at 3:31 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T03:31:14.309341-04:00.accessibility.json) |
| [October 15 at 4:03 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T16:03:24.251349-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 254 Lighthouse audits with the Internet Archive.


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
| [October 18 at 4:00 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T16:00:08.338364-04:00.lighthouse.json) |
| [October 18 at 3:52 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T15:52:28.487636-04:00.lighthouse.json) |
| [October 18 at 3:20 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-18T03:20:50.357140-04:00.lighthouse.json) |
| [October 17 at 4:28 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:28:18.218052-04:00.lighthouse.json) |
| [October 17 at 4:09 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T16:09:25.954292-04:00.lighthouse.json) |
| [October 17 at 3:52 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-17T03:52:04.900177-04:00.lighthouse.json) |
| [October 16 at 3:33 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T15:33:23.385422-04:00.lighthouse.json) |
| [October 16 at 2:55 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T14:55:42.704777-04:00.lighthouse.json) |
| [October 16 at 3:31 AM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-16T03:31:14.309341-04:00.lighthouse.json) |
| [October 15 at 4:03 PM](https://archive.org/download/zerohedge-2022/zerohedge-2022-10-15T16:03:24.251349-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[zerohedge-2022](https://archive.org/details/zerohedge-2022)|
