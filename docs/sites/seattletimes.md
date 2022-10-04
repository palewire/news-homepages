---
orphan: true
---

```{include} ../_templates/nav.html
```

# Seattle Times

![Seattle Times](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/seattletimes.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.seattletimes.com/](https://www.seattletimes.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/seattletimes.xml)                                                              |
| Twitter handle | [@seattletimes](https://www.twitter.com/seattletimes)                                                                                  |
| Location       | Seattle                                                                                                                              |
| Timezone       | America/Los_Angeles                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/washington.html">Washington</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 14 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/seattletimes.json"
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
        71
    </td>
    <td style="text-align: right;">
        1017
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
        21
    </td>
    <td style="text-align: right;">
        776
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
        496
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 182 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/seattletimes.json"
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
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-04T00:48:31.470051-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-04T00:48:31.470051-07:00.jpg"
     alt="Seattle Times at 2022-10-04 00:48:38-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-04T00:48:31.470051-07:00.jpg">October 4 at 12:48 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T12:24:30.993020-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T12:24:30.993020-07:00.jpg"
     alt="Seattle Times at 2022-10-03 12:24:32-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T12:24:30.993020-07:00.jpg">October 3 at 12:24 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T00:41:10.153007-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T00:41:10.153007-07:00.jpg"
     alt="Seattle Times at 2022-10-03 00:41:11-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T00:41:10.153007-07:00.jpg">October 3 at 12:41 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T12:12:23.845427-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T12:12:23.845427-07:00.jpg"
     alt="Seattle Times at 2022-10-02 12:12:25-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T12:12:23.845427-07:00.jpg">October 2 at 12:12 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T00:24:39.484411-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T00:24:39.484411-07:00.jpg"
     alt="Seattle Times at 2022-10-02 00:24:41-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T00:24:39.484411-07:00.jpg">October 2 at 12:24 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T12:10:59.721079-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T12:10:59.721079-07:00.jpg"
     alt="Seattle Times at 2022-10-01 12:11:06-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T12:10:59.721079-07:00.jpg">October 1 at 12:11 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T01:01:32.081809-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T01:01:32.081809-07:00.jpg"
     alt="Seattle Times at 2022-10-01 01:01:38-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T01:01:32.081809-07:00.jpg">October 1 at 1:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T13:16:50.319650-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T13:16:50.319650-07:00.jpg"
     alt="Seattle Times at 2022-09-30 13:16:57-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T13:16:50.319650-07:00.jpg">September 30 at 1:16 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T01:04:15.447767-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T01:04:15.447767-07:00.jpg"
     alt="Seattle Times at 2022-09-30 01:04:32-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T01:04:15.447767-07:00.jpg">September 30 at 1:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T12:35:55.351880-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T12:35:55.351880-07:00.jpg"
     alt="Seattle Times at 2022-09-29 12:36:12-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T12:35:55.351880-07:00.jpg">September 29 at 12:36 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T00:39:35.643469-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T00:39:35.643469-07:00.jpg"
     alt="Seattle Times at 2022-09-29 00:39:42-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T00:39:35.643469-07:00.jpg">September 29 at 12:39 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-28T12:40:14.129017-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-28T12:40:14.129017-07:00.jpg"
     alt="Seattle Times at 2022-09-28 12:40:21-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-28T12:40:14.129017-07:00.jpg">September 28 at 12:40 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 183 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/seattletimes.json"
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
| [October 4 at 12:48 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-04T00:48:31.470051-07:00.hyperlinks.json) |
| [October 3 at 12:24 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T12:24:30.993020-07:00.hyperlinks.json) |
| [October 3 at 12:41 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T00:41:10.153007-07:00.hyperlinks.json) |
| [October 2 at 12:12 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T12:12:23.845427-07:00.hyperlinks.json) |
| [October 2 at 12:24 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T00:24:39.484411-07:00.hyperlinks.json) |
| [October 1 at 12:11 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T12:10:59.721079-07:00.hyperlinks.json) |
| [October 1 at 1:01 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T01:01:32.081809-07:00.hyperlinks.json) |
| [September 30 at 1:17 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T13:16:50.319650-07:00.hyperlinks.json) |
| [September 30 at 1:04 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T01:04:15.447767-07:00.hyperlinks.json) |
| [September 29 at 12:36 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T12:35:55.351880-07:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 183 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/seattletimes.json"
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
| [October 4 at 12:48 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-04T00:48:31.470051-07:00.accessibility.json) |
| [October 3 at 12:24 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T12:24:30.993020-07:00.accessibility.json) |
| [October 3 at 12:41 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T00:41:10.153007-07:00.accessibility.json) |
| [October 2 at 12:12 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T12:12:23.845427-07:00.accessibility.json) |
| [October 2 at 12:24 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T00:24:39.484411-07:00.accessibility.json) |
| [October 1 at 12:11 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T12:10:59.721079-07:00.accessibility.json) |
| [October 1 at 1:01 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T01:01:32.081809-07:00.accessibility.json) |
| [September 30 at 1:16 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T13:16:50.319650-07:00.accessibility.json) |
| [September 30 at 1:04 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T01:04:15.447767-07:00.accessibility.json) |
| [September 29 at 12:36 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T12:35:55.351880-07:00.accessibility.json) |



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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/seattletimes.json"
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
| [October 4 at 12:48 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-04T00:48:31.470051-07:00.lighthouse.json) |
| [October 3 at 12:24 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T12:24:30.993020-07:00.lighthouse.json) |
| [October 3 at 12:41 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-03T00:41:10.153007-07:00.lighthouse.json) |
| [October 2 at 12:12 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T12:12:23.845427-07:00.lighthouse.json) |
| [October 2 at 12:24 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-02T00:24:39.484411-07:00.lighthouse.json) |
| [October 1 at 12:11 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T12:10:59.721079-07:00.lighthouse.json) |
| [October 1 at 1:01 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-10-01T01:01:32.081809-07:00.lighthouse.json) |
| [September 30 at 1:17 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T13:16:50.319650-07:00.lighthouse.json) |
| [September 30 at 1:04 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-30T01:04:15.447767-07:00.lighthouse.json) |
| [September 29 at 12:36 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-29T12:35:55.351880-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[seattletimes-2022](https://archive.org/details/seattletimes-2022)|
