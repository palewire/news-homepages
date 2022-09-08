---
orphan: true
---

```{include} ../_templates/nav.html
```

# Wall Street Journal

![Wall Street Journal](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/wsj.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.wsj.com/](https://www.wsj.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/wsj.xml)                                                              |
| Twitter handle | [@wsj](https://www.twitter.com/wsj)                                                                                  |
| Location       | New York City                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-national.html">U.S. national news</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 24 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/wsj.json"
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
        297
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
        404
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
    <td style="text-align: right;">
        539
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
    <td style="text-align: right;">
        1
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 490 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/wsj.json"
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
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-08T09:21:19.713942-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-08T09:21:19.713942-04:00.jpg"
     alt="Wall Street Journal at 2022-09-08 09:21:44-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-08T09:21:19.713942-04:00.jpg">September 8 at 9:21 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-08T00:53:23.956961-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-08T00:53:23.956961-04:00.jpg"
     alt="Wall Street Journal at 2022-09-08 00:53:25-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-08T00:53:23.956961-04:00.jpg">September 8 at 12:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-07T17:15:39.201736-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-07T17:15:39.201736-04:00.jpg"
     alt="Wall Street Journal at 2022-09-07 17:16:09-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-07T17:15:39.201736-04:00.jpg">September 7 at 5:16 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-07T09:53:52.918061-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-07T09:53:52.918061-04:00.jpg"
     alt="Wall Street Journal at 2022-09-07 09:54:17-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-07T09:53:52.918061-04:00.jpg">September 7 at 9:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-07T00:57:55.164413-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-07T00:57:55.164413-04:00.jpg"
     alt="Wall Street Journal at 2022-09-07 00:58:17-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-07T00:57:55.164413-04:00.jpg">September 7 at 12:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-06T17:18:53.146871-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-06T17:18:53.146871-04:00.jpg"
     alt="Wall Street Journal at 2022-09-06 17:18:55-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-06T17:18:53.146871-04:00.jpg">September 6 at 5:18 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:59.520350-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:59.520350-04:00.jpg"
     alt="Wall Street Journal at 2022-09-06 01:01:01-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:59.520350-04:00.jpg">September 6 at 1:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:27.044454-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:27.044454-04:00.jpg"
     alt="Wall Street Journal at 2022-09-06 01:00:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:27.044454-04:00.jpg">September 6 at 1:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T17:18:33.974799-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-05T17:18:33.974799-04:00.jpg"
     alt="Wall Street Journal at 2022-09-05 17:18:45-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T17:18:33.974799-04:00.jpg">September 5 at 5:18 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T12:28:39.004731-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-05T12:28:39.004731-04:00.jpg"
     alt="Wall Street Journal at 2022-09-05 12:28:51-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T12:28:39.004731-04:00.jpg">September 5 at 12:28 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T09:18:06.345653-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-05T09:18:06.345653-04:00.jpg"
     alt="Wall Street Journal at 2022-09-05 09:18:08-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T09:18:06.345653-04:00.jpg">September 5 at 9:18 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T00:57:36.576238-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-05T00:57:36.576238-04:00.jpg"
     alt="Wall Street Journal at 2022-09-05 00:57:37-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-05T00:57:36.576238-04:00.jpg">September 5 at 12:57 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 473 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/wsj.json"
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
| [September 8 at 9:21 AM](https://archive.org/download/wsj-2022/wsj-2022-09-08T09:21:19.713942-04:00.hyperlinks.json) |
| [September 8 at 12:53 AM](https://archive.org/download/wsj-2022/wsj-2022-09-08T00:53:23.956961-04:00.hyperlinks.json) |
| [September 7 at 5:16 PM](https://archive.org/download/wsj-2022/wsj-2022-09-07T17:15:39.201736-04:00.hyperlinks.json) |
| [September 7 at 1:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-07T13:19:43.083297-04:00.hyperlinks.json) |
| [September 7 at 9:54 AM](https://archive.org/download/wsj-2022/wsj-2022-09-07T09:53:52.918061-04:00.hyperlinks.json) |
| [September 7 at 12:58 AM](https://archive.org/download/wsj-2022/wsj-2022-09-07T00:57:55.164413-04:00.hyperlinks.json) |
| [September 6 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-09-06T17:18:53.146871-04:00.hyperlinks.json) |
| [September 6 at 1:01 AM](https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:59.520350-04:00.hyperlinks.json) |
| [September 5 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-09-05T17:18:33.974799-04:00.hyperlinks.json) |
| [September 5 at 12:28 PM](https://archive.org/download/wsj-2022/wsj-2022-09-05T12:28:39.004731-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 463 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/wsj.json"
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
| [September 8 at 9:21 AM](https://archive.org/download/wsj-2022/wsj-2022-09-08T09:21:19.713942-04:00.accessibility.json) |
| [September 8 at 12:53 AM](https://archive.org/download/wsj-2022/wsj-2022-09-08T00:53:23.956961-04:00.accessibility.json) |
| [September 7 at 5:16 PM](https://archive.org/download/wsj-2022/wsj-2022-09-07T17:15:39.201736-04:00.accessibility.json) |
| [September 7 at 1:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-07T13:19:43.083297-04:00.accessibility.json) |
| [September 7 at 9:54 AM](https://archive.org/download/wsj-2022/wsj-2022-09-07T09:53:52.918061-04:00.accessibility.json) |
| [September 7 at 12:58 AM](https://archive.org/download/wsj-2022/wsj-2022-09-07T00:57:55.164413-04:00.accessibility.json) |
| [September 6 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-09-06T17:18:53.146871-04:00.accessibility.json) |
| [September 6 at 1:01 AM](https://archive.org/download/wsj-2022/wsj-2022-09-06T01:00:59.520350-04:00.accessibility.json) |
| [September 5 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-09-05T17:18:33.974799-04:00.accessibility.json) |
| [September 5 at 12:28 PM](https://archive.org/download/wsj-2022/wsj-2022-09-05T12:28:39.004731-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 181 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/wsj.json"
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
| [September 8 at 9:21 AM](https://archive.org/download/wsj-2022/wsj-2022-09-08T09:21:19.713942-04:00.lighthouse.json) |
| [September 8 at 12:53 AM](https://archive.org/download/wsj-2022/wsj-2022-09-08T00:53:23.956961-04:00.lighthouse.json) |
| [September 7 at 5:16 PM](https://archive.org/download/wsj-2022/wsj-2022-09-07T17:15:39.201736-04:00.lighthouse.json) |
| [September 7 at 1:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-07T13:19:43.083297-04:00.lighthouse.json) |
| [September 7 at 9:54 AM](https://archive.org/download/wsj-2022/wsj-2022-09-07T09:53:52.918061-04:00.lighthouse.json) |
| [September 7 at 12:58 AM](https://archive.org/download/wsj-2022/wsj-2022-09-07T00:57:55.164413-04:00.lighthouse.json) |
| [September 6 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-06T17:18:53.146871-04:00.lighthouse.json) |
| [September 5 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-09-05T17:18:33.974799-04:00.lighthouse.json) |
| [September 5 at 12:28 PM](https://archive.org/download/wsj-2022/wsj-2022-09-05T12:28:39.004731-04:00.lighthouse.json) |
| [September 5 at 9:18 AM](https://archive.org/download/wsj-2022/wsj-2022-09-05T09:18:06.345653-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[wsj-2022](https://archive.org/details/wsj-2022)|
