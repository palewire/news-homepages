---
orphan: true
---

```{include} ../_templates/nav.html
```

# Roll Call

![Roll Call](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/rollcall.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://rollcall.com/](https://rollcall.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/rollcall.xml)                                                              |
| Twitter handle | [@rollcall](https://www.twitter.com/rollcall)                                                                                  |
| Location       | Washington                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/capitol-hill.html">Capitol Hill</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/rollcall.json"
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
        17
    </td>
    <td style="text-align: right;">
        881
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        99
    </td>
    <td style="text-align: right;">
        35
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 183 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/rollcall.json"
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
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-05T03:27:16.430493-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-05T03:27:16.430493-04:00.jpg"
     alt="Roll Call at 2022-10-05 03:27:28-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-05T03:27:16.430493-04:00.jpg">October 5 at 3:27 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-04T15:36:38.514309-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-04T15:36:38.514309-04:00.jpg"
     alt="Roll Call at 2022-10-04 15:36:47-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-04T15:36:38.514309-04:00.jpg">October 4 at 3:36 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-04T03:48:14.574217-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-04T03:48:14.574217-04:00.jpg"
     alt="Roll Call at 2022-10-04 03:48:28-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-04T03:48:14.574217-04:00.jpg">October 4 at 3:48 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-03T15:22:19.228563-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-03T15:22:19.228563-04:00.jpg"
     alt="Roll Call at 2022-10-03 15:22:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-03T15:22:19.228563-04:00.jpg">October 3 at 3:22 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-03T03:40:50.231735-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-03T03:40:50.231735-04:00.jpg"
     alt="Roll Call at 2022-10-03 03:40:54-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-03T03:40:50.231735-04:00.jpg">October 3 at 3:40 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-02T15:09:42.734133-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-02T15:09:42.734133-04:00.jpg"
     alt="Roll Call at 2022-10-02 15:09:56-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-02T15:09:42.734133-04:00.jpg">October 2 at 3:09 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-02T03:23:34.416060-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-02T03:23:34.416060-04:00.jpg"
     alt="Roll Call at 2022-10-02 03:23:42-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-02T03:23:34.416060-04:00.jpg">October 2 at 3:23 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-01T15:08:25.525885-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-01T15:08:25.525885-04:00.jpg"
     alt="Roll Call at 2022-10-01 15:08:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-01T15:08:25.525885-04:00.jpg">October 1 at 3:08 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-01T03:58:18.742807-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-10-01T03:58:18.742807-04:00.jpg"
     alt="Roll Call at 2022-10-01 03:58:23-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-10-01T03:58:18.742807-04:00.jpg">October 1 at 3:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-09-30T16:16:13.412079-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-09-30T16:16:13.412079-04:00.jpg"
     alt="Roll Call at 2022-09-30 16:16:21-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-09-30T16:16:13.412079-04:00.jpg">September 30 at 4:16 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-09-30T04:04:15.536668-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-09-30T04:04:15.536668-04:00.jpg"
     alt="Roll Call at 2022-09-30 04:04:24-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-09-30T04:04:15.536668-04:00.jpg">September 30 at 4:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/rollcall-2022/rollcall-2022-09-29T15:34:33.031127-04:00.jpg">
  <img src="https://archive.org/download/rollcall-2022/rollcall-2022-09-29T15:34:33.031127-04:00.jpg"
     alt="Roll Call at 2022-09-29 15:34:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/rollcall-2022/rollcall-2022-09-29T15:34:33.031127-04:00.jpg">September 29 at 3:34 PM</a></p>
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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/rollcall.json"
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
| [October 5 at 3:27 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-05T03:27:16.430493-04:00.hyperlinks.json) |
| [October 4 at 3:36 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-04T15:36:38.514309-04:00.hyperlinks.json) |
| [October 4 at 3:48 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-04T03:48:14.574217-04:00.hyperlinks.json) |
| [October 3 at 3:22 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-03T15:22:19.228563-04:00.hyperlinks.json) |
| [October 3 at 3:40 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-03T03:40:50.231735-04:00.hyperlinks.json) |
| [October 2 at 3:09 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-02T15:09:42.734133-04:00.hyperlinks.json) |
| [October 2 at 3:23 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-02T03:23:34.416060-04:00.hyperlinks.json) |
| [October 1 at 3:08 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-01T15:08:25.525885-04:00.hyperlinks.json) |
| [October 1 at 3:58 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-01T03:58:18.742807-04:00.hyperlinks.json) |
| [September 30 at 4:16 PM](https://archive.org/download/rollcall-2022/rollcall-2022-09-30T16:16:13.412079-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 181 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/rollcall.json"
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
| [October 5 at 3:27 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-05T03:27:16.430493-04:00.accessibility.json) |
| [October 4 at 3:36 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-04T15:36:38.514309-04:00.accessibility.json) |
| [October 4 at 3:48 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-04T03:48:14.574217-04:00.accessibility.json) |
| [October 3 at 3:22 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-03T15:22:19.228563-04:00.accessibility.json) |
| [October 3 at 3:40 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-03T03:40:50.231735-04:00.accessibility.json) |
| [October 2 at 3:09 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-02T15:09:42.734133-04:00.accessibility.json) |
| [October 2 at 3:23 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-02T03:23:34.416060-04:00.accessibility.json) |
| [October 1 at 3:08 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-01T15:08:25.525885-04:00.accessibility.json) |
| [October 1 at 3:58 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-01T03:58:18.742807-04:00.accessibility.json) |
| [September 30 at 4:16 PM](https://archive.org/download/rollcall-2022/rollcall-2022-09-30T16:16:13.412079-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 146 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/rollcall.json"
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
| [October 5 at 3:27 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-05T03:27:16.430493-04:00.lighthouse.json) |
| [October 4 at 3:36 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-04T15:36:38.514309-04:00.lighthouse.json) |
| [October 4 at 3:48 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-04T03:48:14.574217-04:00.lighthouse.json) |
| [October 3 at 3:22 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-03T15:22:19.228563-04:00.lighthouse.json) |
| [October 3 at 3:41 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-03T03:40:50.231735-04:00.lighthouse.json) |
| [October 2 at 3:10 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-02T15:09:42.734133-04:00.lighthouse.json) |
| [October 2 at 3:23 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-02T03:23:34.416060-04:00.lighthouse.json) |
| [October 1 at 3:08 PM](https://archive.org/download/rollcall-2022/rollcall-2022-10-01T15:08:25.525885-04:00.lighthouse.json) |
| [October 1 at 3:58 AM](https://archive.org/download/rollcall-2022/rollcall-2022-10-01T03:58:18.742807-04:00.lighthouse.json) |
| [September 30 at 4:16 PM](https://archive.org/download/rollcall-2022/rollcall-2022-09-30T16:16:13.412079-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[rollcall-2022](https://archive.org/details/rollcall-2022)|
