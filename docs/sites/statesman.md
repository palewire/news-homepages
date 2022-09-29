---
orphan: true
---

```{include} ../_templates/nav.html
```

# Austin Statesman

![Austin Statesman](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/statesman.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.statesman.com/](https://www.statesman.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/statesman.xml)                                                              |
| Twitter handle | [@statesman](https://www.twitter.com/statesman)                                                                                  |
| Location       | Austin                                                                                                                              |
| Timezone       | America/Chicago                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/texas.html">Texas</a>,  <a href="../bundles/gannett.html">Gannett</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/statesman.json"
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
        87
    </td>
    <td style="text-align: right;">
        438
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
    <td style="text-align: right; background-color: orange; color: white;">
        62
    </td>
    <td style="text-align: right;">
        305
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

The archiving routine has saved 146 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/statesman.json"
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
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-28T14:04:20.668826-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-28T14:04:20.668826-05:00.jpg"
     alt="Austin Statesman at 2022-09-28 14:04:30-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-28T14:04:20.668826-05:00.jpg">September 28 at 2:04 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-28T02:51:52.388144-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-28T02:51:52.388144-05:00.jpg"
     alt="Austin Statesman at 2022-09-28 02:52:01-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-28T02:51:52.388144-05:00.jpg">September 28 at 2:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-27T14:41:06.314778-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-27T14:41:06.314778-05:00.jpg"
     alt="Austin Statesman at 2022-09-27 14:41:16-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-27T14:41:06.314778-05:00.jpg">September 27 at 2:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-27T02:01:56.350787-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-27T02:01:56.350787-05:00.jpg"
     alt="Austin Statesman at 2022-09-27 02:02:01-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-27T02:01:56.350787-05:00.jpg">September 27 at 2:02 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-26T14:08:04.133325-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-26T14:08:04.133325-05:00.jpg"
     alt="Austin Statesman at 2022-09-26 14:08:05-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-26T14:08:04.133325-05:00.jpg">September 26 at 2:08 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-26T02:29:12.377750-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-26T02:29:12.377750-05:00.jpg"
     alt="Austin Statesman at 2022-09-26 02:29:18-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-26T02:29:12.377750-05:00.jpg">September 26 at 2:29 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-25T13:45:25.980804-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-25T13:45:25.980804-05:00.jpg"
     alt="Austin Statesman at 2022-09-25 13:45:27-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-25T13:45:25.980804-05:00.jpg">September 25 at 1:45 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-25T01:59:03.028607-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-25T01:59:03.028607-05:00.jpg"
     alt="Austin Statesman at 2022-09-25 01:59:04-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-25T01:59:03.028607-05:00.jpg">September 25 at 1:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-24T13:36:51.964138-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-24T13:36:51.964138-05:00.jpg"
     alt="Austin Statesman at 2022-09-24 13:36:54-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-24T13:36:51.964138-05:00.jpg">September 24 at 1:36 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-24T02:00:36.173452-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-24T02:00:36.173452-05:00.jpg"
     alt="Austin Statesman at 2022-09-24 02:00:37-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-24T02:00:36.173452-05:00.jpg">September 24 at 2:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-23T14:17:45.031914-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-23T14:17:45.031914-05:00.jpg"
     alt="Austin Statesman at 2022-09-23 14:17:46-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-23T14:17:45.031914-05:00.jpg">September 23 at 2:17 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/statesman-2022/statesman-2022-09-23T02:25:29.930050-05:00.jpg">
  <img src="https://archive.org/download/statesman-2022/statesman-2022-09-23T02:25:29.930050-05:00.jpg"
     alt="Austin Statesman at 2022-09-23 02:25:31-05:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/statesman-2022/statesman-2022-09-23T02:25:29.930050-05:00.jpg">September 23 at 2:25 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 143 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/statesman.json"
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
| [September 28 at 2:04 PM](https://archive.org/download/statesman-2022/statesman-2022-09-28T14:04:20.668826-05:00.hyperlinks.json) |
| [September 28 at 2:52 AM](https://archive.org/download/statesman-2022/statesman-2022-09-28T02:51:52.388144-05:00.hyperlinks.json) |
| [September 27 at 2:41 PM](https://archive.org/download/statesman-2022/statesman-2022-09-27T14:41:06.314778-05:00.hyperlinks.json) |
| [September 27 at 2:02 AM](https://archive.org/download/statesman-2022/statesman-2022-09-27T02:01:56.350787-05:00.hyperlinks.json) |
| [September 26 at 2:08 PM](https://archive.org/download/statesman-2022/statesman-2022-09-26T14:08:04.133325-05:00.hyperlinks.json) |
| [September 26 at 2:29 AM](https://archive.org/download/statesman-2022/statesman-2022-09-26T02:29:12.377750-05:00.hyperlinks.json) |
| [September 25 at 1:45 PM](https://archive.org/download/statesman-2022/statesman-2022-09-25T13:45:25.980804-05:00.hyperlinks.json) |
| [September 25 at 1:59 AM](https://archive.org/download/statesman-2022/statesman-2022-09-25T01:59:03.028607-05:00.hyperlinks.json) |
| [September 24 at 1:36 PM](https://archive.org/download/statesman-2022/statesman-2022-09-24T13:36:51.964138-05:00.hyperlinks.json) |
| [September 24 at 2:00 AM](https://archive.org/download/statesman-2022/statesman-2022-09-24T02:00:36.173452-05:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 146 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/statesman.json"
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
| [September 28 at 2:04 PM](https://archive.org/download/statesman-2022/statesman-2022-09-28T14:04:20.668826-05:00.accessibility.json) |
| [September 28 at 2:52 AM](https://archive.org/download/statesman-2022/statesman-2022-09-28T02:51:52.388144-05:00.accessibility.json) |
| [September 27 at 2:41 PM](https://archive.org/download/statesman-2022/statesman-2022-09-27T14:41:06.314778-05:00.accessibility.json) |
| [September 27 at 2:02 AM](https://archive.org/download/statesman-2022/statesman-2022-09-27T02:01:56.350787-05:00.accessibility.json) |
| [September 26 at 2:08 PM](https://archive.org/download/statesman-2022/statesman-2022-09-26T14:08:04.133325-05:00.accessibility.json) |
| [September 26 at 2:29 AM](https://archive.org/download/statesman-2022/statesman-2022-09-26T02:29:12.377750-05:00.accessibility.json) |
| [September 25 at 1:45 PM](https://archive.org/download/statesman-2022/statesman-2022-09-25T13:45:25.980804-05:00.accessibility.json) |
| [September 25 at 1:59 AM](https://archive.org/download/statesman-2022/statesman-2022-09-25T01:59:03.028607-05:00.accessibility.json) |
| [September 24 at 1:36 PM](https://archive.org/download/statesman-2022/statesman-2022-09-24T13:36:51.964138-05:00.accessibility.json) |
| [September 24 at 2:00 AM](https://archive.org/download/statesman-2022/statesman-2022-09-24T02:00:36.173452-05:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 133 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/statesman.json"
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
| [September 28 at 2:04 PM](https://archive.org/download/statesman-2022/statesman-2022-09-28T14:04:20.668826-05:00.lighthouse.json) |
| [September 28 at 2:52 AM](https://archive.org/download/statesman-2022/statesman-2022-09-28T02:51:52.388144-05:00.lighthouse.json) |
| [September 27 at 2:41 PM](https://archive.org/download/statesman-2022/statesman-2022-09-27T14:41:06.314778-05:00.lighthouse.json) |
| [September 27 at 2:02 AM](https://archive.org/download/statesman-2022/statesman-2022-09-27T02:01:56.350787-05:00.lighthouse.json) |
| [September 26 at 2:08 PM](https://archive.org/download/statesman-2022/statesman-2022-09-26T14:08:04.133325-05:00.lighthouse.json) |
| [September 26 at 2:29 AM](https://archive.org/download/statesman-2022/statesman-2022-09-26T02:29:12.377750-05:00.lighthouse.json) |
| [September 25 at 1:45 PM](https://archive.org/download/statesman-2022/statesman-2022-09-25T13:45:25.980804-05:00.lighthouse.json) |
| [September 25 at 1:59 AM](https://archive.org/download/statesman-2022/statesman-2022-09-25T01:59:03.028607-05:00.lighthouse.json) |
| [September 24 at 1:36 PM](https://archive.org/download/statesman-2022/statesman-2022-09-24T13:36:51.964138-05:00.lighthouse.json) |
| [September 24 at 2:00 AM](https://archive.org/download/statesman-2022/statesman-2022-09-24T02:00:36.173452-05:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[statesman-2022](https://archive.org/details/statesman-2022)|
