---
orphan: true
---

```{include} ../_templates/nav.html
```

# Herald Times Reporter

![Herald Times Reporter](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/htrnews.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.htrnews.com/](https://www.htrnews.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/htrnews.xml)                                                              |
| Twitter handle | [@htrnews](https://www.twitter.com/htrnews)                                                                                  |
| Location       | Manitowoc                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/wisconsin.html">Wisconsin</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 11 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/htrnews.json"
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
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
    <td style="text-align: right;">
        130
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
    <td style="text-align: right;">
        29
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
    <td style="text-align: right;">
        149
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 263 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/htrnews.json"
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
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-02T10:07:26.170831-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-02T10:07:26.170831-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-02 03:07:48-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-02T10:07:26.170831-05:00.jpg">September 2 at 3:07 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-01T22:46:54.546788-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-01T22:46:54.546788-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-01 15:46:56-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-01T22:46:54.546788-05:00.jpg">September 1 at 3:46 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-01T10:19:25.672764-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-09-01T10:19:25.672764-05:00.jpg"
     alt="Herald Times Reporter at 2022-09-01 03:19:37-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-09-01T10:19:25.672764-05:00.jpg">September 1 at 3:19 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-31T22:43:13.143090-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-31T22:43:13.143090-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-31 15:43:15-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-31T22:43:13.143090-05:00.jpg">August 31 at 3:43 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-31T10:07:18.867285-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-31T10:07:18.867285-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-31 03:07:28-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-31T10:07:18.867285-05:00.jpg">August 31 at 3:07 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-30T22:46:17.669990-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-30T22:46:17.669990-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-30 15:46:19-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-30T22:46:17.669990-05:00.jpg">August 30 at 3:46 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-30T10:30:36.459385-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-30T10:30:36.459385-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-30 03:30:44-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-30T10:30:36.459385-05:00.jpg">August 30 at 3:30 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-29T22:52:48.175649-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-29T22:52:48.175649-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-29 15:53:10-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-29T22:52:48.175649-05:00.jpg">August 29 at 3:53 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-29T10:06:10.655609-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-29T10:06:10.655609-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-29 03:06:17-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-29T10:06:10.655609-05:00.jpg">August 29 at 3:06 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-28T22:42:55.507809-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-28T22:42:55.507809-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-28 15:42:57-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-28T22:42:55.507809-05:00.jpg">August 28 at 3:42 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-28T09:55:00.035234-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-28T09:55:00.035234-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-28 02:55:06-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-28T09:55:00.035234-05:00.jpg">August 28 at 2:55 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-27T22:39:31.535578-05:00.jpg">
  <img src="https://archive.org/download/htrnews-2022/htrnews-2022-08-27T22:39:31.535578-05:00.jpg"
     alt="Herald Times Reporter at 2022-08-27 15:39:38-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/htrnews-2022/htrnews-2022-08-27T22:39:31.535578-05:00.jpg">August 27 at 3:39 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 261 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/htrnews.json"
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
| [September 2 at 3:07 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-02T10:07:26.170831-05:00.hyperlinks.json) |
| [September 1 at 3:47 PM](https://archive.org/download/htrnews-2022/htrnews-2022-09-01T22:46:54.546788-05:00.hyperlinks.json) |
| [September 1 at 3:19 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-01T10:19:25.672764-05:00.hyperlinks.json) |
| [August 31 at 3:43 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-31T22:43:13.143090-05:00.hyperlinks.json) |
| [August 31 at 3:07 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-31T10:07:18.867285-05:00.hyperlinks.json) |
| [August 30 at 3:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-30T22:46:17.669990-05:00.hyperlinks.json) |
| [August 30 at 3:30 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-30T10:30:36.459385-05:00.hyperlinks.json) |
| [August 29 at 3:53 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-29T22:52:48.175649-05:00.hyperlinks.json) |
| [August 29 at 3:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-29T10:06:10.655609-05:00.hyperlinks.json) |
| [August 28 at 3:43 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-28T22:42:55.507809-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 261 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/htrnews.json"
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
| [September 2 at 3:07 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-02T10:07:26.170831-05:00.accessibility.json) |
| [September 1 at 3:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-09-01T22:46:54.546788-05:00.accessibility.json) |
| [September 1 at 3:19 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-01T10:19:25.672764-05:00.accessibility.json) |
| [August 31 at 3:43 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-31T22:43:13.143090-05:00.accessibility.json) |
| [August 31 at 3:07 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-31T10:07:18.867285-05:00.accessibility.json) |
| [August 30 at 3:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-30T22:46:17.669990-05:00.accessibility.json) |
| [August 30 at 3:30 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-30T10:30:36.459385-05:00.accessibility.json) |
| [August 29 at 3:53 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-29T22:52:48.175649-05:00.accessibility.json) |
| [August 29 at 3:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-29T10:06:10.655609-05:00.accessibility.json) |
| [August 28 at 3:42 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-28T22:42:55.507809-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 81 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/htrnews.json"
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
| [September 2 at 3:07 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-02T10:07:26.170831-05:00.lighthouse.json) |
| [September 1 at 3:47 PM](https://archive.org/download/htrnews-2022/htrnews-2022-09-01T22:46:54.546788-05:00.lighthouse.json) |
| [September 1 at 3:19 AM](https://archive.org/download/htrnews-2022/htrnews-2022-09-01T10:19:25.672764-05:00.lighthouse.json) |
| [August 31 at 3:43 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-31T22:43:13.143090-05:00.lighthouse.json) |
| [August 31 at 3:07 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-31T10:07:18.867285-05:00.lighthouse.json) |
| [August 30 at 3:46 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-30T22:46:17.669990-05:00.lighthouse.json) |
| [August 30 at 3:30 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-30T10:30:36.459385-05:00.lighthouse.json) |
| [August 29 at 3:53 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-29T22:52:48.175649-05:00.lighthouse.json) |
| [August 29 at 3:06 AM](https://archive.org/download/htrnews-2022/htrnews-2022-08-29T10:06:10.655609-05:00.lighthouse.json) |
| [August 28 at 3:43 PM](https://archive.org/download/htrnews-2022/htrnews-2022-08-28T22:42:55.507809-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[htrnews-2022](https://archive.org/details/htrnews-2022)|
