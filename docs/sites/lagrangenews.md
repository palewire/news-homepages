---
orphan: true
---

```{include} ../_templates/nav.html
```

# The LaGrange Daily News

![The LaGrange Daily News](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/lagrangenews.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.lagrangenews.com](https://www.lagrangenews.com)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/lagrangenews.xml)                                                              |
| Twitter handle | [@LagrangeNews](https://www.twitter.com/LagrangeNews)                                                                                  |
| Location       | LaGrange                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/georgia.html">Georgia</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/lagrangenews.json"
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
        711
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
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
    <td style="text-align: right;">
        8
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
        549
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 85 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/lagrangenews.json"
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
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T20:03:09.268549-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T20:03:09.268549-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-30 20:03:19-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T20:03:09.268549-04:00.jpg">August 30 at 8:03 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T08:09:49.016325-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T08:09:49.016325-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-30 08:09:52-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T08:09:49.016325-04:00.jpg">August 30 at 8:09 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T19:53:21.749549-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T19:53:21.749549-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-29 19:53:25-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T19:53:21.749549-04:00.jpg">August 29 at 7:53 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T07:58:32.400085-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T07:58:32.400085-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-29 07:58:36-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T07:58:32.400085-04:00.jpg">August 29 at 7:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T19:50:18.840493-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T19:50:18.840493-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-28 19:50:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T19:50:18.840493-04:00.jpg">August 28 at 7:50 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T08:00:37.301908-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T08:00:37.301908-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-28 08:00:40-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T08:00:37.301908-04:00.jpg">August 28 at 8:00 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T19:52:21.305207-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T19:52:21.305207-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-27 19:52:26-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T19:52:21.305207-04:00.jpg">August 27 at 7:52 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T07:54:18.715983-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T07:54:18.715983-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-27 07:54:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T07:54:18.715983-04:00.jpg">August 27 at 7:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T19:47:14.319270-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T19:47:14.319270-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-26 19:47:15-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T19:47:14.319270-04:00.jpg">August 26 at 7:47 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T07:58:54.204843-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T07:58:54.204843-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-26 07:59:00-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T07:58:54.204843-04:00.jpg">August 26 at 7:59 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-25T20:04:45.720179-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-25T20:04:45.720179-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-25 20:04:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-25T20:04:45.720179-04:00.jpg">August 25 at 8:04 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-25T08:03:44.627917-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-25T08:03:44.627917-04:00.jpg"
     alt="The LaGrange Daily News at 2022-08-25 08:03:46-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-25T08:03:44.627917-04:00.jpg">August 25 at 8:03 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 85 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/lagrangenews.json"
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
| [August 30 at 8:03 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T20:03:09.268549-04:00.hyperlinks.json) |
| [August 30 at 8:09 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T08:09:49.016325-04:00.hyperlinks.json) |
| [August 29 at 7:53 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T19:53:21.749549-04:00.hyperlinks.json) |
| [August 29 at 7:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T07:58:32.400085-04:00.hyperlinks.json) |
| [August 28 at 7:50 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T19:50:18.840493-04:00.hyperlinks.json) |
| [August 28 at 8:00 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T08:00:37.301908-04:00.hyperlinks.json) |
| [August 27 at 7:52 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T19:52:21.305207-04:00.hyperlinks.json) |
| [August 27 at 7:54 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T07:54:18.715983-04:00.hyperlinks.json) |
| [August 26 at 7:47 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T19:47:14.319270-04:00.hyperlinks.json) |
| [August 26 at 7:59 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T07:58:54.204843-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 85 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/lagrangenews.json"
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
| [August 30 at 8:03 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T20:03:09.268549-04:00.accessibility.json) |
| [August 30 at 8:09 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T08:09:49.016325-04:00.accessibility.json) |
| [August 29 at 7:53 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T19:53:21.749549-04:00.accessibility.json) |
| [August 29 at 7:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T07:58:32.400085-04:00.accessibility.json) |
| [August 28 at 7:50 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T19:50:18.840493-04:00.accessibility.json) |
| [August 28 at 8:00 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T08:00:37.301908-04:00.accessibility.json) |
| [August 27 at 7:52 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T19:52:21.305207-04:00.accessibility.json) |
| [August 27 at 7:54 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T07:54:18.715983-04:00.accessibility.json) |
| [August 26 at 7:47 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T19:47:14.319270-04:00.accessibility.json) |
| [August 26 at 7:59 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T07:58:54.204843-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 78 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/lagrangenews.json"
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
| [August 30 at 8:03 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T20:03:09.268549-04:00.lighthouse.json) |
| [August 30 at 8:09 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-30T08:09:49.016325-04:00.lighthouse.json) |
| [August 29 at 7:53 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T19:53:21.749549-04:00.lighthouse.json) |
| [August 29 at 7:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-29T07:58:32.400085-04:00.lighthouse.json) |
| [August 28 at 7:50 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T19:50:18.840493-04:00.lighthouse.json) |
| [August 28 at 8:00 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-28T08:00:37.301908-04:00.lighthouse.json) |
| [August 27 at 7:52 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T19:52:21.305207-04:00.lighthouse.json) |
| [August 27 at 7:54 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-27T07:54:18.715983-04:00.lighthouse.json) |
| [August 26 at 7:47 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T19:47:14.319270-04:00.lighthouse.json) |
| [August 26 at 7:59 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-08-26T07:58:54.204843-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[lagrangenews-2022](https://archive.org/details/lagrangenews-2022)|
