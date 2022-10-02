---
orphan: true
---

```{include} ../_templates/nav.html
```

# Wall Street Journal

![Wall Street Journal](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/wsj.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.wsj.com/](https://www.wsj.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/wsj.xml)                                                              |
| Twitter handle | [@wsj](https://www.twitter.com/wsj)                                                                                  |
| Location       | New York City                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-national.html">U.S. national news</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 28 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/wsj.json"
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
        327
    </td>
  </tr>

  <tr>
    <td>
        Best practices
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
    <td style="text-align: right;">
        766
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
    <td style="text-align: right;">
        748
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
    <td style="text-align: right;">
        1
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 585 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/wsj.json"
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
 <a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T17:18:47.529678-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-10-01T17:18:47.529678-04:00.jpg"
     alt="Wall Street Journal at 2022-10-01 17:18:49-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T17:18:47.529678-04:00.jpg">October 1 at 5:18 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T15:41:08.899364-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-10-01T15:41:08.899364-04:00.jpg"
     alt="Wall Street Journal at 2022-10-01 15:41:21-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T15:41:08.899364-04:00.jpg">October 1 at 3:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T08:49:03.464317-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-10-01T08:49:03.464317-04:00.jpg"
     alt="Wall Street Journal at 2022-10-01 08:49:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T08:49:03.464317-04:00.jpg">October 1 at 8:49 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T03:53:04.073930-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-10-01T03:53:04.073930-04:00.jpg"
     alt="Wall Street Journal at 2022-10-01 03:53:32-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-10-01T03:53:04.073930-04:00.jpg">October 1 at 3:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T17:19:08.631910-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-30T17:19:08.631910-04:00.jpg"
     alt="Wall Street Journal at 2022-09-30 17:19:10-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T17:19:08.631910-04:00.jpg">September 30 at 5:19 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T15:57:16.251085-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-30T15:57:16.251085-04:00.jpg"
     alt="Wall Street Journal at 2022-09-30 15:57:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T15:57:16.251085-04:00.jpg">September 30 at 3:57 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T08:57:24.671375-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-30T08:57:24.671375-04:00.jpg"
     alt="Wall Street Journal at 2022-09-30 08:57:46-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T08:57:24.671375-04:00.jpg">September 30 at 8:57 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T04:15:21.989689-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-30T04:15:21.989689-04:00.jpg"
     alt="Wall Street Journal at 2022-09-30 04:15:24-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-30T04:15:21.989689-04:00.jpg">September 30 at 4:15 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T17:19:31.208417-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-29T17:19:31.208417-04:00.jpg"
     alt="Wall Street Journal at 2022-09-29 17:19:33-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T17:19:31.208417-04:00.jpg">September 29 at 5:19 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T15:04:32.691253-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-29T15:04:32.691253-04:00.jpg"
     alt="Wall Street Journal at 2022-09-29 15:04:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T15:04:32.691253-04:00.jpg">September 29 at 3:04 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T08:53:20.331595-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-29T08:53:20.331595-04:00.jpg"
     alt="Wall Street Journal at 2022-09-29 08:53:22-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T08:53:20.331595-04:00.jpg">September 29 at 8:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T03:34:57.130153-04:00.jpg">
  <img src="https://archive.org/download/wsj-2022/wsj-2022-09-29T03:34:57.130153-04:00.jpg"
     alt="Wall Street Journal at 2022-09-29 03:35:25-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wsj-2022/wsj-2022-09-29T03:34:57.130153-04:00.jpg">September 29 at 3:35 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 568 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/wsj.json"
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
| [October 1 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-10-01T17:18:47.529678-04:00.hyperlinks.json) |
| [October 1 at 3:41 PM](https://archive.org/download/wsj-2022/wsj-2022-10-01T15:41:08.899364-04:00.hyperlinks.json) |
| [October 1 at 8:49 AM](https://archive.org/download/wsj-2022/wsj-2022-10-01T08:49:03.464317-04:00.hyperlinks.json) |
| [October 1 at 3:53 AM](https://archive.org/download/wsj-2022/wsj-2022-10-01T03:53:04.073930-04:00.hyperlinks.json) |
| [September 30 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-30T17:19:08.631910-04:00.hyperlinks.json) |
| [September 30 at 3:57 PM](https://archive.org/download/wsj-2022/wsj-2022-09-30T15:57:16.251085-04:00.hyperlinks.json) |
| [September 30 at 8:57 AM](https://archive.org/download/wsj-2022/wsj-2022-09-30T08:57:24.671375-04:00.hyperlinks.json) |
| [September 30 at 4:15 AM](https://archive.org/download/wsj-2022/wsj-2022-09-30T04:15:21.989689-04:00.hyperlinks.json) |
| [September 29 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-29T17:19:31.208417-04:00.hyperlinks.json) |
| [September 29 at 3:04 PM](https://archive.org/download/wsj-2022/wsj-2022-09-29T15:04:32.691253-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 558 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/wsj.json"
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
| [October 1 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-10-01T17:18:47.529678-04:00.accessibility.json) |
| [October 1 at 3:41 PM](https://archive.org/download/wsj-2022/wsj-2022-10-01T15:41:08.899364-04:00.accessibility.json) |
| [October 1 at 8:49 AM](https://archive.org/download/wsj-2022/wsj-2022-10-01T08:49:03.464317-04:00.accessibility.json) |
| [October 1 at 3:53 AM](https://archive.org/download/wsj-2022/wsj-2022-10-01T03:53:04.073930-04:00.accessibility.json) |
| [September 30 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-30T17:19:08.631910-04:00.accessibility.json) |
| [September 30 at 3:57 PM](https://archive.org/download/wsj-2022/wsj-2022-09-30T15:57:16.251085-04:00.accessibility.json) |
| [September 30 at 8:57 AM](https://archive.org/download/wsj-2022/wsj-2022-09-30T08:57:24.671375-04:00.accessibility.json) |
| [September 30 at 4:15 AM](https://archive.org/download/wsj-2022/wsj-2022-09-30T04:15:21.989689-04:00.accessibility.json) |
| [September 29 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-29T17:19:31.208417-04:00.accessibility.json) |
| [September 29 at 3:04 PM](https://archive.org/download/wsj-2022/wsj-2022-09-29T15:04:32.691253-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 276 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/wsj.json"
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
| [October 1 at 5:18 PM](https://archive.org/download/wsj-2022/wsj-2022-10-01T17:18:47.529678-04:00.lighthouse.json) |
| [October 1 at 3:41 PM](https://archive.org/download/wsj-2022/wsj-2022-10-01T15:41:08.899364-04:00.lighthouse.json) |
| [October 1 at 8:49 AM](https://archive.org/download/wsj-2022/wsj-2022-10-01T08:49:03.464317-04:00.lighthouse.json) |
| [October 1 at 3:53 AM](https://archive.org/download/wsj-2022/wsj-2022-10-01T03:53:04.073930-04:00.lighthouse.json) |
| [September 30 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-30T17:19:08.631910-04:00.lighthouse.json) |
| [September 30 at 3:57 PM](https://archive.org/download/wsj-2022/wsj-2022-09-30T15:57:16.251085-04:00.lighthouse.json) |
| [September 30 at 8:57 AM](https://archive.org/download/wsj-2022/wsj-2022-09-30T08:57:24.671375-04:00.lighthouse.json) |
| [September 30 at 4:15 AM](https://archive.org/download/wsj-2022/wsj-2022-09-30T04:15:21.989689-04:00.lighthouse.json) |
| [September 29 at 5:19 PM](https://archive.org/download/wsj-2022/wsj-2022-09-29T17:19:31.208417-04:00.lighthouse.json) |
| [September 29 at 3:04 PM](https://archive.org/download/wsj-2022/wsj-2022-09-29T15:04:32.691253-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[wsj-2022](https://archive.org/details/wsj-2022)|
