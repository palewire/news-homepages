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
        77
    </td>
    <td style="text-align: right;">
        908
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
        92
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
        783
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 156 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-05T09:13:44.777828-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-05T09:13:44.777828-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-05 09:14:06-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-05T09:13:44.777828-04:00.jpg">October 5 at 9:14 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T21:29:29.536157-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T21:29:29.536157-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-04 21:29:33-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T21:29:29.536157-04:00.jpg">October 4 at 9:29 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T09:01:15.443569-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T09:01:15.443569-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-04 09:01:37-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T09:01:15.443569-04:00.jpg">October 4 at 9:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T21:29:09.087827-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T21:29:09.087827-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-03 21:29:15-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T21:29:09.087827-04:00.jpg">October 3 at 9:29 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T08:58:26.589691-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T08:58:26.589691-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-03 08:58:31-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T08:58:26.589691-04:00.jpg">October 3 at 8:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T21:15:07.658353-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T21:15:07.658353-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-02 21:15:12-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T21:15:07.658353-04:00.jpg">October 2 at 9:15 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T08:58:31.800298-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T08:58:31.800298-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-02 08:58:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T08:58:31.800298-04:00.jpg">October 2 at 8:58 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T21:27:29.103811-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T21:27:29.103811-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-01 21:27:32-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T21:27:29.103811-04:00.jpg">October 1 at 9:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T08:54:38.344087-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T08:54:38.344087-04:00.jpg"
     alt="The LaGrange Daily News at 2022-10-01 08:54:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T08:54:38.344087-04:00.jpg">October 1 at 8:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T21:33:51.297901-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T21:33:51.297901-04:00.jpg"
     alt="The LaGrange Daily News at 2022-09-30 21:33:56-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T21:33:51.297901-04:00.jpg">September 30 at 9:33 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T09:04:30.191377-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T09:04:30.191377-04:00.jpg"
     alt="The LaGrange Daily News at 2022-09-30 09:04:40-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T09:04:30.191377-04:00.jpg">September 30 at 9:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-29T21:37:39.903470-04:00.jpg">
  <img src="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-29T21:37:39.903470-04:00.jpg"
     alt="The LaGrange Daily News at 2022-09-29 21:37:49-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-29T21:37:39.903470-04:00.jpg">September 29 at 9:37 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 156 hyperlink lists with the Internet Archive.


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
| [October 5 at 9:14 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-05T09:13:44.777828-04:00.hyperlinks.json) |
| [October 4 at 9:29 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T21:29:29.536157-04:00.hyperlinks.json) |
| [October 4 at 9:01 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T09:01:15.443569-04:00.hyperlinks.json) |
| [October 3 at 9:29 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T21:29:09.087827-04:00.hyperlinks.json) |
| [October 3 at 8:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T08:58:26.589691-04:00.hyperlinks.json) |
| [October 2 at 9:15 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T21:15:07.658353-04:00.hyperlinks.json) |
| [October 2 at 8:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T08:58:31.800298-04:00.hyperlinks.json) |
| [October 1 at 9:27 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T21:27:29.103811-04:00.hyperlinks.json) |
| [October 1 at 8:54 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T08:54:38.344087-04:00.hyperlinks.json) |
| [September 30 at 9:34 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T21:33:51.297901-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 157 accessibility trees with the Internet Archive.


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
| [October 5 at 9:14 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-05T09:13:44.777828-04:00.accessibility.json) |
| [October 4 at 9:29 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T21:29:29.536157-04:00.accessibility.json) |
| [October 4 at 9:01 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T09:01:15.443569-04:00.accessibility.json) |
| [October 3 at 9:29 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T21:29:09.087827-04:00.accessibility.json) |
| [October 3 at 8:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T08:58:26.589691-04:00.accessibility.json) |
| [October 2 at 9:15 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T21:15:07.658353-04:00.accessibility.json) |
| [October 2 at 8:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T08:58:31.800298-04:00.accessibility.json) |
| [October 1 at 9:27 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T21:27:29.103811-04:00.accessibility.json) |
| [October 1 at 8:54 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T08:54:38.344087-04:00.accessibility.json) |
| [September 30 at 9:33 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T21:33:51.297901-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 150 Lighthouse audits with the Internet Archive.


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
| [October 5 at 9:14 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-05T09:13:44.777828-04:00.lighthouse.json) |
| [October 4 at 9:29 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T21:29:29.536157-04:00.lighthouse.json) |
| [October 4 at 9:01 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-04T09:01:15.443569-04:00.lighthouse.json) |
| [October 3 at 9:29 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T21:29:09.087827-04:00.lighthouse.json) |
| [October 3 at 8:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-03T08:58:26.589691-04:00.lighthouse.json) |
| [October 2 at 9:15 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T21:15:07.658353-04:00.lighthouse.json) |
| [October 2 at 8:58 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-02T08:58:31.800298-04:00.lighthouse.json) |
| [October 1 at 9:27 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T21:27:29.103811-04:00.lighthouse.json) |
| [October 1 at 8:54 AM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-10-01T08:54:38.344087-04:00.lighthouse.json) |
| [September 30 at 9:34 PM](https://archive.org/download/lagrangenews-2022/lagrangenews-2022-09-30T21:33:51.297901-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[lagrangenews-2022](https://archive.org/details/lagrangenews-2022)|
