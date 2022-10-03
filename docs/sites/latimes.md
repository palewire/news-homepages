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
| Bundles        | <a href="../bundles/socal.html">Southern California</a>,  <a href="../bundles/california.html">California</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 46 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
    <td style="text-align: right;">
        509
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
    <td style="text-align: right;">
        507
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
    <td style="text-align: right;">
        400
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 900 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-03T12:49:17.262109-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-03T12:49:17.262109-07:00.jpg"
     alt="Los Angeles Times at 2022-10-03 12:49:20-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-03T12:49:17.262109-07:00.jpg">October 3 at 12:49 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-03T10:49:42.583435-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-03T10:49:42.583435-07:00.jpg"
     alt="Los Angeles Times at 2022-10-03 10:49:44-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-03T10:49:42.583435-07:00.jpg">October 3 at 10:49 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-03T07:00:23.913723-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-03T07:00:23.913723-07:00.jpg"
     alt="Los Angeles Times at 2022-10-03 07:00:25-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-03T07:00:23.913723-07:00.jpg">October 3 at 7:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T22:12:11.033562-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-02T22:12:11.033562-07:00.jpg"
     alt="Los Angeles Times at 2022-10-02 22:12:24-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T22:12:11.033562-07:00.jpg">October 2 at 10:12 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T18:41:10.223177-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-02T18:41:10.223177-07:00.jpg"
     alt="Los Angeles Times at 2022-10-02 18:41:37-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T18:41:10.223177-07:00.jpg">October 2 at 6:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T12:45:41.402064-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-02T12:45:41.402064-07:00.jpg"
     alt="Los Angeles Times at 2022-10-02 12:45:44-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T12:45:41.402064-07:00.jpg">October 2 at 12:45 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T12:41:51.460405-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-02T12:41:51.460405-07:00.jpg"
     alt="Los Angeles Times at 2022-10-02 12:41:53-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T12:41:51.460405-07:00.jpg">October 2 at 12:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T10:31:25.133330-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-02T10:31:25.133330-07:00.jpg"
     alt="Los Angeles Times at 2022-10-02 10:31:27-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T10:31:25.133330-07:00.jpg">October 2 at 10:31 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T07:04:34.168895-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-02T07:04:34.168895-07:00.jpg"
     alt="Los Angeles Times at 2022-10-02 07:05:20-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-02T07:04:34.168895-07:00.jpg">October 2 at 7:05 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-01T23:05:29.481519-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-01T23:05:29.481519-07:00.jpg"
     alt="Los Angeles Times at 2022-10-01 23:05:31-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-01T23:05:29.481519-07:00.jpg">October 1 at 11:05 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-01T18:41:00.894240-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-01T18:41:00.894240-07:00.jpg"
     alt="Los Angeles Times at 2022-10-01 18:41:13-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-01T18:41:00.894240-07:00.jpg">October 1 at 6:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/latimes-2022/latimes-2022-10-01T12:48:22.233225-07:00.jpg">
  <img src="https://archive.org/download/latimes-2022/latimes-2022-10-01T12:48:22.233225-07:00.jpg"
     alt="Los Angeles Times at 2022-10-01 12:48:25-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/latimes-2022/latimes-2022-10-01T12:48:22.233225-07:00.jpg">October 1 at 12:48 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 854 hyperlink lists with the Internet Archive.


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
| [October 3 at 12:49 PM](https://archive.org/download/latimes-2022/latimes-2022-10-03T12:49:17.262109-07:00.hyperlinks.json) |
| [October 3 at 10:49 AM](https://archive.org/download/latimes-2022/latimes-2022-10-03T10:49:42.583435-07:00.hyperlinks.json) |
| [October 3 at 7:00 AM](https://archive.org/download/latimes-2022/latimes-2022-10-03T07:00:23.913723-07:00.hyperlinks.json) |
| [October 2 at 10:12 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T22:12:11.033562-07:00.hyperlinks.json) |
| [October 2 at 6:41 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T18:41:10.223177-07:00.hyperlinks.json) |
| [October 2 at 12:45 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T12:45:41.402064-07:00.hyperlinks.json) |
| [October 2 at 12:41 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T12:41:51.460405-07:00.hyperlinks.json) |
| [October 2 at 10:31 AM](https://archive.org/download/latimes-2022/latimes-2022-10-02T10:31:25.133330-07:00.hyperlinks.json) |
| [October 2 at 7:05 AM](https://archive.org/download/latimes-2022/latimes-2022-10-02T07:04:34.168895-07:00.hyperlinks.json) |
| [October 1 at 11:05 PM](https://archive.org/download/latimes-2022/latimes-2022-10-01T23:05:29.481519-07:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 863 accessibility trees with the Internet Archive.


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
| [October 3 at 12:49 PM](https://archive.org/download/latimes-2022/latimes-2022-10-03T12:49:17.262109-07:00.accessibility.json) |
| [October 3 at 10:49 AM](https://archive.org/download/latimes-2022/latimes-2022-10-03T10:49:42.583435-07:00.accessibility.json) |
| [October 3 at 7:00 AM](https://archive.org/download/latimes-2022/latimes-2022-10-03T07:00:23.913723-07:00.accessibility.json) |
| [October 2 at 10:12 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T22:12:11.033562-07:00.accessibility.json) |
| [October 2 at 6:41 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T18:41:10.223177-07:00.accessibility.json) |
| [October 2 at 12:45 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T12:45:41.402064-07:00.accessibility.json) |
| [October 2 at 12:41 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T12:41:51.460405-07:00.accessibility.json) |
| [October 2 at 10:31 AM](https://archive.org/download/latimes-2022/latimes-2022-10-02T10:31:25.133330-07:00.accessibility.json) |
| [October 2 at 7:05 AM](https://archive.org/download/latimes-2022/latimes-2022-10-02T07:04:34.168895-07:00.accessibility.json) |
| [October 1 at 11:05 PM](https://archive.org/download/latimes-2022/latimes-2022-10-01T23:05:29.481519-07:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 423 Lighthouse audits with the Internet Archive.


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
| [October 3 at 12:49 PM](https://archive.org/download/latimes-2022/latimes-2022-10-03T12:49:17.262109-07:00.lighthouse.json) |
| [October 3 at 10:49 AM](https://archive.org/download/latimes-2022/latimes-2022-10-03T10:49:42.583435-07:00.lighthouse.json) |
| [October 3 at 7:00 AM](https://archive.org/download/latimes-2022/latimes-2022-10-03T07:00:23.913723-07:00.lighthouse.json) |
| [October 2 at 10:12 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T22:12:11.033562-07:00.lighthouse.json) |
| [October 2 at 6:41 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T18:41:10.223177-07:00.lighthouse.json) |
| [October 2 at 12:45 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T12:45:41.402064-07:00.lighthouse.json) |
| [October 2 at 12:42 PM](https://archive.org/download/latimes-2022/latimes-2022-10-02T12:41:51.460405-07:00.lighthouse.json) |
| [October 2 at 10:31 AM](https://archive.org/download/latimes-2022/latimes-2022-10-02T10:31:25.133330-07:00.lighthouse.json) |
| [October 2 at 7:05 AM](https://archive.org/download/latimes-2022/latimes-2022-10-02T07:04:34.168895-07:00.lighthouse.json) |
| [October 1 at 11:05 PM](https://archive.org/download/latimes-2022/latimes-2022-10-01T23:05:29.481519-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[latimes-2022](https://archive.org/details/latimes-2022)|
