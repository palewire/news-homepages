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

This site was analyzed 15 times over the last seven days. Scores of 90 or greater are considered good. Score of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json"
};
    vegaEmbed("#vis--lighthouse-analysis", lighthouseAnalysisSpec, {mode: "vega-lite"}).then(console.log).catch(console.warn);
  </script>

The median score for each category, along with how it ranks in comparison to the rest of the archive. is reported below.

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
        454.0
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
        402.0
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
    <td style="text-align: right;">
        264.0
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
        676.0
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 157 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-16T19:13:22.059518-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-16T19:13:22.059518-05:00.jpg"
     alt="Storm Lake Times at 2022-08-16 19:13:26-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-16T19:13:22.059518-05:00.jpg">August 16 at 7:13 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-16T09:10:45.304291-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-16T09:10:45.304291-05:00.jpg"
     alt="Storm Lake Times at 2022-08-16 09:10:47-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-16T09:10:45.304291-05:00.jpg">August 16 at 9:10 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-15T20:46:30.267445-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-15T20:46:30.267445-05:00.jpg"
     alt="Storm Lake Times at 2022-08-15 20:46:32-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-15T20:46:30.267445-05:00.jpg">August 15 at 8:46 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-15T09:28:59.201957-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-15T09:28:59.201957-05:00.jpg"
     alt="Storm Lake Times at 2022-08-15 09:29:01-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-15T09:28:59.201957-05:00.jpg">August 15 at 9:29 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-14T20:31:21.062515-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-14T20:31:21.062515-05:00.jpg"
     alt="Storm Lake Times at 2022-08-14 20:31:22-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-14T20:31:21.062515-05:00.jpg">August 14 at 8:31 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-14T08:58:43.264361-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-14T08:58:43.264361-05:00.jpg"
     alt="Storm Lake Times at 2022-08-14 08:58:46-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-14T08:58:43.264361-05:00.jpg">August 14 at 8:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-13T22:25:19.229294-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-13T22:25:19.229294-05:00.jpg"
     alt="Storm Lake Times at 2022-08-13 22:25:21-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-13T22:25:19.229294-05:00.jpg">August 13 at 10:25 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-13T08:20:11.009023-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-13T08:20:11.009023-05:00.jpg"
     alt="Storm Lake Times at 2022-08-13 08:20:15-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-13T08:20:11.009023-05:00.jpg">August 13 at 8:20 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T19:51:04.321608-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T19:51:04.321608-05:00.jpg"
     alt="Storm Lake Times at 2022-08-12 19:51:07-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T19:51:04.321608-05:00.jpg">August 12 at 7:51 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T13:35:22.276354-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T13:35:22.276354-05:00.jpg"
     alt="Storm Lake Times at 2022-08-12 13:35:23-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T13:35:22.276354-05:00.jpg">August 12 at 1:35 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T08:32:08.050035-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T08:32:08.050035-05:00.jpg"
     alt="Storm Lake Times at 2022-08-12 08:32:10-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T08:32:08.050035-05:00.jpg">August 12 at 8:32 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T04:26:37.746769-05:00.jpg">
  <img src="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T04:26:37.746769-05:00.jpg"
     alt="Storm Lake Times at 2022-08-12 04:26:41-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/sltimes-2022/sltimes-2022-08-12T04:26:37.746769-05:00.jpg">August 12 at 4:26 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 160 hyperlink lists with the Internet Archive.


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
| [August 16 at 7:13 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-16T19:13:22.059518-05:00.hyperlinks.json) |
| [August 16 at 9:10 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-16T09:10:45.304291-05:00.hyperlinks.json) |
| [August 15 at 8:46 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-15T20:46:30.267445-05:00.hyperlinks.json) |
| [August 15 at 9:29 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-15T09:28:59.201957-05:00.hyperlinks.json) |
| [August 14 at 8:31 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-14T20:31:21.062515-05:00.hyperlinks.json) |
| [August 14 at 8:58 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-14T08:58:43.264361-05:00.hyperlinks.json) |
| [August 13 at 10:25 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-13T22:25:19.229294-05:00.hyperlinks.json) |
| [August 13 at 8:20 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-13T08:20:11.009023-05:00.hyperlinks.json) |
| [August 12 at 7:51 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-12T19:51:04.321608-05:00.hyperlinks.json) |
| [August 12 at 1:35 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-12T13:35:22.276354-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 160 accessibility trees with the Internet Archive.


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
| [August 16 at 7:13 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-16T19:13:22.059518-05:00.accessibility.json) |
| [August 16 at 9:10 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-16T09:10:45.304291-05:00.accessibility.json) |
| [August 15 at 8:46 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-15T20:46:30.267445-05:00.accessibility.json) |
| [August 15 at 9:29 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-15T09:28:59.201957-05:00.accessibility.json) |
| [August 14 at 8:31 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-14T20:31:21.062515-05:00.accessibility.json) |
| [August 14 at 8:58 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-14T08:58:43.264361-05:00.accessibility.json) |
| [August 13 at 10:25 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-13T22:25:19.229294-05:00.accessibility.json) |
| [August 13 at 8:20 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-13T08:20:11.009023-05:00.accessibility.json) |
| [August 12 at 7:51 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-12T19:51:04.321608-05:00.accessibility.json) |
| [August 12 at 1:35 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-12T13:35:22.276354-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 58 Lighthouse audits with the Internet Archive.


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
| [August 16 at 7:13 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-16T19:13:22.059518-05:00.lighthouse.json) |
| [August 16 at 9:10 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-16T09:10:45.304291-05:00.lighthouse.json) |
| [August 15 at 8:46 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-15T20:46:30.267445-05:00.lighthouse.json) |
| [August 15 at 9:29 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-15T09:28:59.201957-05:00.lighthouse.json) |
| [August 14 at 8:31 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-14T20:31:21.062515-05:00.lighthouse.json) |
| [August 14 at 8:58 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-14T08:58:43.264361-05:00.lighthouse.json) |
| [August 13 at 10:25 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-13T22:25:19.229294-05:00.lighthouse.json) |
| [August 13 at 8:20 AM](https://archive.org/download/sltimes-2022/sltimes-2022-08-13T08:20:11.009023-05:00.lighthouse.json) |
| [August 12 at 7:51 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-12T19:51:04.321608-05:00.lighthouse.json) |
| [August 12 at 1:35 PM](https://archive.org/download/sltimes-2022/sltimes-2022-08-12T13:35:22.276354-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[sltimes-2022](https://archive.org/details/sltimes-2022)|
