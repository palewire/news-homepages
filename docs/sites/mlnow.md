---
orphan: true
---

```{include} ../_templates/nav.html
```

# Mission Local

![Mission Local](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/mlnow.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://missionlocal.org/](https://missionlocal.org/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/mlnow.xml)                                                              |
| Twitter handle | [@mlnow](https://www.twitter.com/mlnow)                                                                                  |
| Location       | San Francisco                                                                                                                              |
| Timezone       | America/Los_Angeles                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/bay-area.html">California Bay Area</a>,  <a href="../bundles/california.html">California</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/mlnow.json"
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
        100
    </td>
    <td style="text-align: right;">
        1
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
    <td style="text-align: right;">
        359
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
    <td style="text-align: right;">
        74
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 193 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/mlnow.json"
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
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-09T10:36:59.959745-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-09T10:36:59.959745-07:00.jpg"
     alt="Mission Local at 2022-10-09 10:37:08-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-09T10:36:59.959745-07:00.jpg">October 9 at 10:37 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-08T22:24:54.248532-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-08T22:24:54.248532-07:00.jpg"
     alt="Mission Local at 2022-10-08 22:24:58-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-08T22:24:54.248532-07:00.jpg">October 8 at 10:24 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-08T10:41:58.739469-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-08T10:41:58.739469-07:00.jpg"
     alt="Mission Local at 2022-10-08 10:42:00-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-08T10:41:58.739469-07:00.jpg">October 8 at 10:42 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-07T22:45:13.665223-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-07T22:45:13.665223-07:00.jpg"
     alt="Mission Local at 2022-10-07 22:45:19-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-07T22:45:13.665223-07:00.jpg">October 7 at 10:45 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-07T11:03:18.706757-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-07T11:03:18.706757-07:00.jpg"
     alt="Mission Local at 2022-10-07 11:03:35-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-07T11:03:18.706757-07:00.jpg">October 7 at 11:03 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-06T23:22:16.418566-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-06T23:22:16.418566-07:00.jpg"
     alt="Mission Local at 2022-10-06 23:22:36-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-06T23:22:16.418566-07:00.jpg">October 6 at 11:22 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-06T10:49:55.108823-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-06T10:49:55.108823-07:00.jpg"
     alt="Mission Local at 2022-10-06 10:50:11-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-06T10:49:55.108823-07:00.jpg">October 6 at 10:50 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-05T22:47:42.804295-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-05T22:47:42.804295-07:00.jpg"
     alt="Mission Local at 2022-10-05 22:47:44-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-05T22:47:42.804295-07:00.jpg">October 5 at 10:47 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-05T11:28:55.499608-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-05T11:28:55.499608-07:00.jpg"
     alt="Mission Local at 2022-10-05 11:29:01-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-05T11:28:55.499608-07:00.jpg">October 5 at 11:29 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-04T22:52:43.487794-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-04T22:52:43.487794-07:00.jpg"
     alt="Mission Local at 2022-10-04 22:52:48-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-04T22:52:43.487794-07:00.jpg">October 4 at 10:52 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-04T10:53:11.349646-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-04T10:53:11.349646-07:00.jpg"
     alt="Mission Local at 2022-10-04 10:53:29-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-04T10:53:11.349646-07:00.jpg">October 4 at 10:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-03T23:14:16.519908-07:00.jpg">
  <img src="https://archive.org/download/mlnow-2022/mlnow-2022-10-03T23:14:16.519908-07:00.jpg"
     alt="Mission Local at 2022-10-03 23:14:18-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/mlnow-2022/mlnow-2022-10-03T23:14:16.519908-07:00.jpg">October 3 at 11:14 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 193 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/mlnow.json"
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
| [October 9 at 10:37 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-09T10:36:59.959745-07:00.hyperlinks.json) |
| [October 8 at 10:25 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-08T22:24:54.248532-07:00.hyperlinks.json) |
| [October 8 at 10:42 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-08T10:41:58.739469-07:00.hyperlinks.json) |
| [October 7 at 10:45 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-07T22:45:13.665223-07:00.hyperlinks.json) |
| [October 7 at 11:03 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-07T11:03:18.706757-07:00.hyperlinks.json) |
| [October 6 at 11:22 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-06T23:22:16.418566-07:00.hyperlinks.json) |
| [October 6 at 10:50 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-06T10:49:55.108823-07:00.hyperlinks.json) |
| [October 5 at 10:47 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-05T22:47:42.804295-07:00.hyperlinks.json) |
| [October 5 at 11:29 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-05T11:28:55.499608-07:00.hyperlinks.json) |
| [October 4 at 10:52 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-04T22:52:43.487794-07:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 192 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/mlnow.json"
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
| [October 9 at 10:37 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-09T10:36:59.959745-07:00.accessibility.json) |
| [October 8 at 10:24 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-08T22:24:54.248532-07:00.accessibility.json) |
| [October 8 at 10:42 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-08T10:41:58.739469-07:00.accessibility.json) |
| [October 7 at 10:45 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-07T22:45:13.665223-07:00.accessibility.json) |
| [October 7 at 11:03 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-07T11:03:18.706757-07:00.accessibility.json) |
| [October 6 at 11:22 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-06T23:22:16.418566-07:00.accessibility.json) |
| [October 6 at 10:50 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-06T10:49:55.108823-07:00.accessibility.json) |
| [October 5 at 10:47 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-05T22:47:42.804295-07:00.accessibility.json) |
| [October 5 at 11:29 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-05T11:28:55.499608-07:00.accessibility.json) |
| [October 4 at 10:52 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-04T22:52:43.487794-07:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 154 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/mlnow.json"
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
| [October 9 at 10:37 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-09T10:36:59.959745-07:00.lighthouse.json) |
| [October 8 at 10:25 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-08T22:24:54.248532-07:00.lighthouse.json) |
| [October 8 at 10:42 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-08T10:41:58.739469-07:00.lighthouse.json) |
| [October 7 at 10:45 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-07T22:45:13.665223-07:00.lighthouse.json) |
| [October 7 at 11:03 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-07T11:03:18.706757-07:00.lighthouse.json) |
| [October 6 at 11:22 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-06T23:22:16.418566-07:00.lighthouse.json) |
| [October 6 at 10:50 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-06T10:49:55.108823-07:00.lighthouse.json) |
| [October 5 at 10:47 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-05T22:47:42.804295-07:00.lighthouse.json) |
| [October 5 at 11:29 AM](https://archive.org/download/mlnow-2022/mlnow-2022-10-05T11:28:55.499608-07:00.lighthouse.json) |
| [October 4 at 10:52 PM](https://archive.org/download/mlnow-2022/mlnow-2022-10-04T22:52:43.487794-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[mlnow-2022](https://archive.org/details/mlnow-2022)|
