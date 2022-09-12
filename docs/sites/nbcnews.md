---
orphan: true
---

```{include} ../_templates/nav.html
```

# NBC News

![NBC News](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/nbcnews.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.nbcnews.com/](https://www.nbcnews.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/nbcnews.xml)                                                              |
| Twitter handle | [@NBCNews](https://www.twitter.com/NBCNews)                                                                                  |
| Location       | New York City                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-national.html">U.S. national news</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 30 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/nbcnews.json"
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
        75
    </td>
    <td style="text-align: right;">
        726
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
        316
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
    <td style="text-align: right;">
        513
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
    <td style="text-align: right;">
        799
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 648 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/nbcnews.json"
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
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T17:17:55.827295-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T17:17:55.827295-04:00.jpg"
     alt="NBC News at 2022-09-11 17:17:57-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T17:17:55.827295-04:00.jpg">September 11 at 5:17 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:59:04.319340-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:59:04.319340-04:00.jpg"
     alt="NBC News at 2022-09-11 08:59:06-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:59:04.319340-04:00.jpg">September 11 at 8:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:00:21.458940-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:00:21.458940-04:00.jpg"
     alt="NBC News at 2022-09-11 08:00:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:00:21.458940-04:00.jpg">September 11 at 8:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T20:17:18.280574-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T20:17:18.280574-04:00.jpg"
     alt="NBC News at 2022-09-10 20:17:20-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T20:17:18.280574-04:00.jpg">September 10 at 8:17 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T17:19:09.360775-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T17:19:09.360775-04:00.jpg"
     alt="NBC News at 2022-09-10 17:19:11-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T17:19:09.360775-04:00.jpg">September 10 at 5:19 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T09:01:21.971998-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T09:01:21.971998-04:00.jpg"
     alt="NBC News at 2022-09-10 09:01:23-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T09:01:21.971998-04:00.jpg">September 10 at 9:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T08:01:47.148997-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T08:01:47.148997-04:00.jpg"
     alt="NBC News at 2022-09-10 08:02:12-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T08:01:47.148997-04:00.jpg">September 10 at 8:02 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T20:08:24.797766-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T20:08:24.797766-04:00.jpg"
     alt="NBC News at 2022-09-09 20:08:26-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T20:08:24.797766-04:00.jpg">September 9 at 8:08 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T17:19:00.723442-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T17:19:00.723442-04:00.jpg"
     alt="NBC News at 2022-09-09 17:19:02-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T17:19:00.723442-04:00.jpg">September 9 at 5:19 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T09:29:16.935892-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T09:29:16.935892-04:00.jpg"
     alt="NBC News at 2022-09-09 09:29:19-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T09:29:16.935892-04:00.jpg">September 9 at 9:29 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T08:18:48.411320-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T08:18:48.411320-04:00.jpg"
     alt="NBC News at 2022-09-09 08:18:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T08:18:48.411320-04:00.jpg">September 9 at 8:18 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-08T20:10:35.886189-04:00.jpg">
  <img src="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-08T20:10:35.886189-04:00.jpg"
     alt="NBC News at 2022-09-08 20:10:37-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/nbcnews-2022/nbcnews-2022-09-08T20:10:35.886189-04:00.jpg">September 8 at 8:10 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 629 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/nbcnews.json"
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
| [September 11 at 5:18 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T17:17:55.827295-04:00.hyperlinks.json) |
| [September 11 at 8:59 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:59:04.319340-04:00.hyperlinks.json) |
| [September 11 at 8:00 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:00:21.458940-04:00.hyperlinks.json) |
| [September 10 at 8:17 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T20:17:18.280574-04:00.hyperlinks.json) |
| [September 10 at 5:19 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T17:19:09.360775-04:00.hyperlinks.json) |
| [September 10 at 9:01 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T09:01:21.971998-04:00.hyperlinks.json) |
| [September 10 at 8:02 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T08:01:47.148997-04:00.hyperlinks.json) |
| [September 9 at 8:08 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T20:08:24.797766-04:00.hyperlinks.json) |
| [September 9 at 5:19 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T17:19:00.723442-04:00.hyperlinks.json) |
| [September 9 at 9:29 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T09:29:16.935892-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 631 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/nbcnews.json"
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
| [September 11 at 5:17 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T17:17:55.827295-04:00.accessibility.json) |
| [September 11 at 8:59 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:59:04.319340-04:00.accessibility.json) |
| [September 11 at 8:00 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:00:21.458940-04:00.accessibility.json) |
| [September 10 at 8:17 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T20:17:18.280574-04:00.accessibility.json) |
| [September 10 at 5:19 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T17:19:09.360775-04:00.accessibility.json) |
| [September 10 at 9:01 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T09:01:21.971998-04:00.accessibility.json) |
| [September 10 at 8:02 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T08:01:47.148997-04:00.accessibility.json) |
| [September 9 at 8:08 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T20:08:24.797766-04:00.accessibility.json) |
| [September 9 at 5:19 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T17:19:00.723442-04:00.accessibility.json) |
| [September 9 at 9:29 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T09:29:16.935892-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 196 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/nbcnews.json"
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
| [September 11 at 5:18 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T17:17:55.827295-04:00.lighthouse.json) |
| [September 11 at 8:59 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:59:04.319340-04:00.lighthouse.json) |
| [September 11 at 8:00 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-11T08:00:21.458940-04:00.lighthouse.json) |
| [September 10 at 8:17 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T20:17:18.280574-04:00.lighthouse.json) |
| [September 10 at 5:19 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T17:19:09.360775-04:00.lighthouse.json) |
| [September 10 at 9:01 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T09:01:21.971998-04:00.lighthouse.json) |
| [September 10 at 8:02 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-10T08:01:47.148997-04:00.lighthouse.json) |
| [September 9 at 8:08 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T20:08:24.797766-04:00.lighthouse.json) |
| [September 9 at 5:19 PM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T17:19:00.723442-04:00.lighthouse.json) |
| [September 9 at 9:29 AM](https://archive.org/download/nbcnews-2022/nbcnews-2022-09-09T09:29:16.935892-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[nbcnews-2022](https://archive.org/details/nbcnews-2022)|
