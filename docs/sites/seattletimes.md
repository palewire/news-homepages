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

This site was analyzed 12 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
        824
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
        319
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
        590
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
        295
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 153 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-19T10:25:23.402522-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-19T10:25:23.402522-07:00.jpg"
     alt="Seattle Times at 2022-09-19 10:25:29-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-19T10:25:23.402522-07:00.jpg">September 19 at 10:25 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T22:57:20.078255-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T22:57:20.078255-07:00.jpg"
     alt="Seattle Times at 2022-09-18 22:57:22-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T22:57:20.078255-07:00.jpg">September 18 at 10:57 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T10:17:05.800390-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T10:17:05.800390-07:00.jpg"
     alt="Seattle Times at 2022-09-18 10:17:12-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T10:17:05.800390-07:00.jpg">September 18 at 10:17 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T22:29:09.436872-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T22:29:09.436872-07:00.jpg"
     alt="Seattle Times at 2022-09-17 22:29:26-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T22:29:09.436872-07:00.jpg">September 17 at 10:29 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T09:53:02.843074-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T09:53:02.843074-07:00.jpg"
     alt="Seattle Times at 2022-09-17 09:53:04-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T09:53:02.843074-07:00.jpg">September 17 at 9:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T22:22:02.165642-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T22:22:02.165642-07:00.jpg"
     alt="Seattle Times at 2022-09-16 22:22:03-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T22:22:02.165642-07:00.jpg">September 16 at 10:22 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T09:56:57.583555-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T09:56:57.583555-07:00.jpg"
     alt="Seattle Times at 2022-09-16 09:56:59-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T09:56:57.583555-07:00.jpg">September 16 at 9:56 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T22:32:43.581490-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T22:32:43.581490-07:00.jpg"
     alt="Seattle Times at 2022-09-15 22:32:48-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T22:32:43.581490-07:00.jpg">September 15 at 10:32 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T10:12:35.114441-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T10:12:35.114441-07:00.jpg"
     alt="Seattle Times at 2022-09-15 10:12:41-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T10:12:35.114441-07:00.jpg">September 15 at 10:12 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T22:31:32.015755-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T22:31:32.015755-07:00.jpg"
     alt="Seattle Times at 2022-09-14 22:31:37-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T22:31:32.015755-07:00.jpg">September 14 at 10:31 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T10:15:52.182186-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T10:15:52.182186-07:00.jpg"
     alt="Seattle Times at 2022-09-14 10:16:01-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T10:15:52.182186-07:00.jpg">September 14 at 10:16 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-13T22:35:57.204741-07:00.jpg">
  <img src="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-13T22:35:57.204741-07:00.jpg"
     alt="Seattle Times at 2022-09-13 22:35:58-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/seattletimes-2022/seattletimes-2022-09-13T22:35:57.204741-07:00.jpg">September 13 at 10:35 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 154 hyperlink lists with the Internet Archive.


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
| [September 19 at 10:25 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-19T10:25:23.402522-07:00.hyperlinks.json) |
| [September 18 at 10:57 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T22:57:20.078255-07:00.hyperlinks.json) |
| [September 18 at 10:17 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T10:17:05.800390-07:00.hyperlinks.json) |
| [September 17 at 10:29 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T22:29:09.436872-07:00.hyperlinks.json) |
| [September 17 at 9:53 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T09:53:02.843074-07:00.hyperlinks.json) |
| [September 16 at 10:22 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T22:22:02.165642-07:00.hyperlinks.json) |
| [September 16 at 9:57 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T09:56:57.583555-07:00.hyperlinks.json) |
| [September 15 at 10:32 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T22:32:43.581490-07:00.hyperlinks.json) |
| [September 15 at 10:12 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T10:12:35.114441-07:00.hyperlinks.json) |
| [September 14 at 10:31 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T22:31:32.015755-07:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 154 accessibility trees with the Internet Archive.


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
| [September 19 at 10:25 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-19T10:25:23.402522-07:00.accessibility.json) |
| [September 18 at 10:57 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T22:57:20.078255-07:00.accessibility.json) |
| [September 18 at 10:17 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T10:17:05.800390-07:00.accessibility.json) |
| [September 17 at 10:29 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T22:29:09.436872-07:00.accessibility.json) |
| [September 17 at 9:53 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T09:53:02.843074-07:00.accessibility.json) |
| [September 16 at 10:22 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T22:22:02.165642-07:00.accessibility.json) |
| [September 16 at 9:57 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T09:56:57.583555-07:00.accessibility.json) |
| [September 15 at 10:32 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T22:32:43.581490-07:00.accessibility.json) |
| [September 15 at 10:12 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T10:12:35.114441-07:00.accessibility.json) |
| [September 14 at 10:31 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T22:31:32.015755-07:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 115 Lighthouse audits with the Internet Archive.


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
| [September 19 at 10:25 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-19T10:25:23.402522-07:00.lighthouse.json) |
| [September 18 at 10:57 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T22:57:20.078255-07:00.lighthouse.json) |
| [September 18 at 10:17 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-18T10:17:05.800390-07:00.lighthouse.json) |
| [September 17 at 10:29 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T22:29:09.436872-07:00.lighthouse.json) |
| [September 17 at 9:53 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-17T09:53:02.843074-07:00.lighthouse.json) |
| [September 16 at 10:22 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T22:22:02.165642-07:00.lighthouse.json) |
| [September 16 at 9:57 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-16T09:56:57.583555-07:00.lighthouse.json) |
| [September 15 at 10:32 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T22:32:43.581490-07:00.lighthouse.json) |
| [September 15 at 10:12 AM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-15T10:12:35.114441-07:00.lighthouse.json) |
| [September 14 at 10:31 PM](https://archive.org/download/seattletimes-2022/seattletimes-2022-09-14T22:31:32.015755-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[seattletimes-2022](https://archive.org/details/seattletimes-2022)|
