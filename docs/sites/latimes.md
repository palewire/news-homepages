---
orphan: true
---

```{include} ../_templates/nav.html
```

# Los Angeles Times

![Los Angeles Times](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/latimes.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.latimes.com](https://www.latimes.com)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/latimes.xml)                                                              |
| Twitter handle | [@latimes](https://www.twitter.com/latimes)                                                                                  |
| Location       | Los Angeles                                                                                                                              |
| Timezone       | America/Los_Angeles                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/socal.html">Southern California</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 40 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/latimes.json"
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
        99
    </td>
    <td style="text-align: right;">
        23
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
        25
    </td>
    <td style="text-align: right;">
        456
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

The archiving routine has saved 677 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/latimes.json"
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
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T12:05:09.448136-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-27T12:05:09.448136-07:00.jpg"
     alt="Los Angeles Times at 2022-08-27 12:05:12-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T12:05:09.448136-07:00.jpg">August 27 at 12:05 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T11:40:15.666099-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-27T11:40:15.666099-07:00.jpg"
     alt="Los Angeles Times at 2022-08-27 11:40:17-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T11:40:15.666099-07:00.jpg">August 27 at 11:40 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T07:51:56.429923-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-27T07:51:56.429923-07:00.jpg"
     alt="Los Angeles Times at 2022-08-27 07:51:58-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T07:51:56.429923-07:00.jpg">August 27 at 7:51 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T06:53:00.477644-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-27T06:53:00.477644-07:00.jpg"
     alt="Los Angeles Times at 2022-08-27 06:53:02-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-27T06:53:00.477644-07:00.jpg">August 27 at 6:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T20:38:13.625176-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-26T20:38:13.625176-07:00.jpg"
     alt="Los Angeles Times at 2022-08-26 20:38:15-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T20:38:13.625176-07:00.jpg">August 26 at 8:38 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T18:34:04.495466-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-26T18:34:04.495466-07:00.jpg"
     alt="Los Angeles Times at 2022-08-26 18:34:06-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T18:34:04.495466-07:00.jpg">August 26 at 6:34 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T12:05:37.629100-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-26T12:05:37.629100-07:00.jpg"
     alt="Los Angeles Times at 2022-08-26 12:05:39-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T12:05:37.629100-07:00.jpg">August 26 at 12:05 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T11:31:49.411295-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-26T11:31:49.411295-07:00.jpg"
     alt="Los Angeles Times at 2022-08-26 11:31:51-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T11:31:49.411295-07:00.jpg">August 26 at 11:31 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T08:00:14.250186-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-26T08:00:14.250186-07:00.jpg"
     alt="Los Angeles Times at 2022-08-26 08:00:16-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T08:00:14.250186-07:00.jpg">August 26 at 8:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T06:59:00.425027-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-26T06:59:00.425027-07:00.jpg"
     alt="Los Angeles Times at 2022-08-26 06:59:02-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-26T06:59:00.425027-07:00.jpg">August 26 at 6:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-25T20:45:18.595234-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-25T20:45:18.595234-07:00.jpg"
     alt="Los Angeles Times at 2022-08-25 20:45:20-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-25T20:45:18.595234-07:00.jpg">August 25 at 8:45 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-08-25T18:35:13.217794-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-08-25T18:35:13.217794-07:00.jpg"
     alt="Los Angeles Times at 2022-08-25 18:35:15-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-08-25T18:35:13.217794-07:00.jpg">August 25 at 6:35 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 637 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/latimes.json"
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
| [August 27 at 12:05 PM](https://archive.org/download/latimes-2022/latimes-2022-08-27T12:05:09.448136-07:00.hyperlinks.json) |
| [August 27 at 11:40 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T11:40:15.666099-07:00.hyperlinks.json) |
| [August 27 at 7:52 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T07:51:56.429923-07:00.hyperlinks.json) |
| [August 27 at 6:53 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T06:53:00.477644-07:00.hyperlinks.json) |
| [August 26 at 8:38 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T20:38:13.625176-07:00.hyperlinks.json) |
| [August 26 at 6:34 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T18:34:04.495466-07:00.hyperlinks.json) |
| [August 26 at 12:05 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T12:05:37.629100-07:00.hyperlinks.json) |
| [August 26 at 11:31 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T11:31:49.411295-07:00.hyperlinks.json) |
| [August 26 at 8:00 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T08:00:14.250186-07:00.hyperlinks.json) |
| [August 26 at 6:59 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T06:59:00.425027-07:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 647 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/latimes.json"
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
| [August 27 at 12:05 PM](https://archive.org/download/latimes-2022/latimes-2022-08-27T12:05:09.448136-07:00.accessibility.json) |
| [August 27 at 11:40 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T11:40:15.666099-07:00.accessibility.json) |
| [August 27 at 7:52 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T07:51:56.429923-07:00.accessibility.json) |
| [August 27 at 6:53 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T06:53:00.477644-07:00.accessibility.json) |
| [August 26 at 8:38 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T20:38:13.625176-07:00.accessibility.json) |
| [August 26 at 6:34 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T18:34:04.495466-07:00.accessibility.json) |
| [August 26 at 12:05 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T12:05:37.629100-07:00.accessibility.json) |
| [August 26 at 11:31 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T11:31:49.411295-07:00.accessibility.json) |
| [August 26 at 8:00 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T08:00:14.250186-07:00.accessibility.json) |
| [August 26 at 6:59 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T06:59:00.425027-07:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 204 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/latimes.json"
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
| [August 27 at 12:05 PM](https://archive.org/download/latimes-2022/latimes-2022-08-27T12:05:09.448136-07:00.lighthouse.json) |
| [August 27 at 11:40 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T11:40:15.666099-07:00.lighthouse.json) |
| [August 27 at 7:52 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T07:51:56.429923-07:00.lighthouse.json) |
| [August 27 at 6:53 AM](https://archive.org/download/latimes-2022/latimes-2022-08-27T06:53:00.477644-07:00.lighthouse.json) |
| [August 26 at 8:38 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T20:38:13.625176-07:00.lighthouse.json) |
| [August 26 at 6:34 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T18:34:04.495466-07:00.lighthouse.json) |
| [August 26 at 12:05 PM](https://archive.org/download/latimes-2022/latimes-2022-08-26T12:05:37.629100-07:00.lighthouse.json) |
| [August 26 at 11:31 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T11:31:49.411295-07:00.lighthouse.json) |
| [August 26 at 8:00 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T08:00:14.250186-07:00.lighthouse.json) |
| [August 26 at 6:59 AM](https://archive.org/download/latimes-2022/latimes-2022-08-26T06:59:00.425027-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[latimes-2022](https://archive.org/details/latimes-2022)|
