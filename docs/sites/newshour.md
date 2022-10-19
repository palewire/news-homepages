---
orphan: true
---

```{include} ../_templates/nav.html
```

# PBS News Hour

![PBS News Hour](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/newshour.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.pbs.org/newshour/](https://www.pbs.org/newshour/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/newshour.xml)                                                              |
| Twitter handle | [@NewsHour](https://www.twitter.com/NewsHour)                                                                                  |
| Location       | Washington                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-national.html">U.S. national news</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 29 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/newshour.json"
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
        96
    </td>
    <td style="text-align: right;">
        95
    </td>
  </tr>

  <tr>
    <td>
        Best practices
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        67
    </td>
    <td style="text-align: right;">
        967
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
    <td style="text-align: right;">
        520
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
    <td style="text-align: right;">
        783
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 467 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/newshour.json"
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
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T22:32:34.644315-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-18T22:32:34.644315-04:00.jpg"
     alt="PBS News Hour at 2022-10-18 22:32:36-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T22:32:34.644315-04:00.jpg">October 18 at 10:32 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T17:24:17.350294-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-18T17:24:17.350294-04:00.jpg"
     alt="PBS News Hour at 2022-10-18 17:24:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T17:24:17.350294-04:00.jpg">October 18 at 5:24 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T10:14:28.046363-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-18T10:14:28.046363-04:00.jpg"
     alt="PBS News Hour at 2022-10-18 10:14:29-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T10:14:28.046363-04:00.jpg">October 18 at 10:14 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T08:54:21.525648-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-18T08:54:21.525648-04:00.jpg"
     alt="PBS News Hour at 2022-10-18 08:54:42-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-18T08:54:21.525648-04:00.jpg">October 18 at 8:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T22:22:09.625310-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-17T22:22:09.625310-04:00.jpg"
     alt="PBS News Hour at 2022-10-17 22:22:11-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T22:22:09.625310-04:00.jpg">October 17 at 10:22 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T17:20:33.894915-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-17T17:20:33.894915-04:00.jpg"
     alt="PBS News Hour at 2022-10-17 17:21:02-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T17:20:33.894915-04:00.jpg">October 17 at 5:21 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T10:04:41.398732-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-17T10:04:41.398732-04:00.jpg"
     alt="PBS News Hour at 2022-10-17 10:04:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T10:04:41.398732-04:00.jpg">October 17 at 10:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T08:50:23.343354-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-17T08:50:23.343354-04:00.jpg"
     alt="PBS News Hour at 2022-10-17 08:50:25-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-17T08:50:23.343354-04:00.jpg">October 17 at 8:50 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T22:27:09.500419-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-16T22:27:09.500419-04:00.jpg"
     alt="PBS News Hour at 2022-10-16 22:27:11-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T22:27:09.500419-04:00.jpg">October 16 at 10:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T17:21:34.807566-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-16T17:21:34.807566-04:00.jpg"
     alt="PBS News Hour at 2022-10-16 17:21:37-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T17:21:34.807566-04:00.jpg">October 16 at 5:21 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T10:07:05.852781-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-16T10:07:05.852781-04:00.jpg"
     alt="PBS News Hour at 2022-10-16 10:07:07-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T10:07:05.852781-04:00.jpg">October 16 at 10:07 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T08:51:13.704181-04:00.jpg">
  <img src="https://archive.org/download/newshour-2022/newshour-2022-10-16T08:51:13.704181-04:00.jpg"
     alt="PBS News Hour at 2022-10-16 08:51:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/newshour-2022/newshour-2022-10-16T08:51:13.704181-04:00.jpg">October 16 at 8:51 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 470 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/newshour.json"
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
| [October 18 at 10:32 PM](https://archive.org/download/newshour-2022/newshour-2022-10-18T22:32:34.644315-04:00.hyperlinks.json) |
| [October 18 at 5:24 PM](https://archive.org/download/newshour-2022/newshour-2022-10-18T17:24:17.350294-04:00.hyperlinks.json) |
| [October 18 at 10:14 AM](https://archive.org/download/newshour-2022/newshour-2022-10-18T10:14:28.046363-04:00.hyperlinks.json) |
| [October 18 at 8:54 AM](https://archive.org/download/newshour-2022/newshour-2022-10-18T08:54:21.525648-04:00.hyperlinks.json) |
| [October 17 at 10:22 PM](https://archive.org/download/newshour-2022/newshour-2022-10-17T22:22:09.625310-04:00.hyperlinks.json) |
| [October 17 at 5:21 PM](https://archive.org/download/newshour-2022/newshour-2022-10-17T17:20:33.894915-04:00.hyperlinks.json) |
| [October 17 at 10:04 AM](https://archive.org/download/newshour-2022/newshour-2022-10-17T10:04:41.398732-04:00.hyperlinks.json) |
| [October 17 at 8:50 AM](https://archive.org/download/newshour-2022/newshour-2022-10-17T08:50:23.343354-04:00.hyperlinks.json) |
| [October 16 at 10:27 PM](https://archive.org/download/newshour-2022/newshour-2022-10-16T22:27:09.500419-04:00.hyperlinks.json) |
| [October 16 at 5:21 PM](https://archive.org/download/newshour-2022/newshour-2022-10-16T17:21:34.807566-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 471 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/newshour.json"
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
| [October 18 at 10:32 PM](https://archive.org/download/newshour-2022/newshour-2022-10-18T22:32:34.644315-04:00.accessibility.json) |
| [October 18 at 5:24 PM](https://archive.org/download/newshour-2022/newshour-2022-10-18T17:24:17.350294-04:00.accessibility.json) |
| [October 18 at 10:14 AM](https://archive.org/download/newshour-2022/newshour-2022-10-18T10:14:28.046363-04:00.accessibility.json) |
| [October 18 at 8:54 AM](https://archive.org/download/newshour-2022/newshour-2022-10-18T08:54:21.525648-04:00.accessibility.json) |
| [October 17 at 10:22 PM](https://archive.org/download/newshour-2022/newshour-2022-10-17T22:22:09.625310-04:00.accessibility.json) |
| [October 17 at 5:21 PM](https://archive.org/download/newshour-2022/newshour-2022-10-17T17:20:33.894915-04:00.accessibility.json) |
| [October 17 at 10:04 AM](https://archive.org/download/newshour-2022/newshour-2022-10-17T10:04:41.398732-04:00.accessibility.json) |
| [October 17 at 8:50 AM](https://archive.org/download/newshour-2022/newshour-2022-10-17T08:50:23.343354-04:00.accessibility.json) |
| [October 16 at 10:27 PM](https://archive.org/download/newshour-2022/newshour-2022-10-16T22:27:09.500419-04:00.accessibility.json) |
| [October 16 at 5:21 PM](https://archive.org/download/newshour-2022/newshour-2022-10-16T17:21:34.807566-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 344 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/newshour.json"
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
| [October 18 at 10:32 PM](https://archive.org/download/newshour-2022/newshour-2022-10-18T22:32:34.644315-04:00.lighthouse.json) |
| [October 18 at 5:24 PM](https://archive.org/download/newshour-2022/newshour-2022-10-18T17:24:17.350294-04:00.lighthouse.json) |
| [October 18 at 10:14 AM](https://archive.org/download/newshour-2022/newshour-2022-10-18T10:14:28.046363-04:00.lighthouse.json) |
| [October 18 at 8:54 AM](https://archive.org/download/newshour-2022/newshour-2022-10-18T08:54:21.525648-04:00.lighthouse.json) |
| [October 17 at 10:22 PM](https://archive.org/download/newshour-2022/newshour-2022-10-17T22:22:09.625310-04:00.lighthouse.json) |
| [October 17 at 5:21 PM](https://archive.org/download/newshour-2022/newshour-2022-10-17T17:20:33.894915-04:00.lighthouse.json) |
| [October 17 at 10:04 AM](https://archive.org/download/newshour-2022/newshour-2022-10-17T10:04:41.398732-04:00.lighthouse.json) |
| [October 17 at 8:50 AM](https://archive.org/download/newshour-2022/newshour-2022-10-17T08:50:23.343354-04:00.lighthouse.json) |
| [October 16 at 10:27 PM](https://archive.org/download/newshour-2022/newshour-2022-10-16T22:27:09.500419-04:00.lighthouse.json) |
| [October 16 at 5:21 PM](https://archive.org/download/newshour-2022/newshour-2022-10-16T17:21:34.807566-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[newshour-2022](https://archive.org/details/newshour-2022)|
