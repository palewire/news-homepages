---
orphan: true
---

```{include} ../_templates/nav.html
```

# WBUR

![WBUR](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/wbur.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.wbur.org/](https://www.wbur.org/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/wbur.xml)                                                              |
| Twitter handle | [@WBUR](https://www.twitter.com/WBUR)                                                                                  |
| Location       | Boston                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/massachusetts.html">Massachusetts</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/wbur.json"
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
        79
    </td>
    <td style="text-align: right;">
        860
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
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
    <td style="text-align: right;">
        520
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
    <td style="text-align: right;">
        723
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 149 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/wbur.json"
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
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-11T12:23:52.770362-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-11T12:23:52.770362-04:00.jpg"
     alt="WBUR at 2022-10-11 12:24:00-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-11T12:23:52.770362-04:00.jpg">October 11 at 12:24 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-11T02:26:40.506924-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-11T02:26:40.506924-04:00.jpg"
     alt="WBUR at 2022-10-11 02:26:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-11T02:26:40.506924-04:00.jpg">October 11 at 2:26 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-10T12:43:08.709053-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-10T12:43:08.709053-04:00.jpg"
     alt="WBUR at 2022-10-10 12:43:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-10T12:43:08.709053-04:00.jpg">October 10 at 12:43 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-10T02:26:33.868710-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-10T02:26:33.868710-04:00.jpg"
     alt="WBUR at 2022-10-10 02:26:39-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-10T02:26:33.868710-04:00.jpg">October 10 at 2:26 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-09T12:02:00.097545-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-09T12:02:00.097545-04:00.jpg"
     alt="WBUR at 2022-10-09 12:02:07-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-09T12:02:00.097545-04:00.jpg">October 9 at 12:02 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-09T01:18:03.367386-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-09T01:18:03.367386-04:00.jpg"
     alt="WBUR at 2022-10-09 01:18:07-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-09T01:18:03.367386-04:00.jpg">October 9 at 1:18 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-08T12:14:46.734691-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-08T12:14:46.734691-04:00.jpg"
     alt="WBUR at 2022-10-08 12:15:04-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-08T12:14:46.734691-04:00.jpg">October 8 at 12:15 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-08T01:39:00.892100-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-08T01:39:00.892100-04:00.jpg"
     alt="WBUR at 2022-10-08 01:39:05-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-08T01:39:00.892100-04:00.jpg">October 8 at 1:39 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-07T12:32:44.357254-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-07T12:32:44.357254-04:00.jpg"
     alt="WBUR at 2022-10-07 12:32:53-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-07T12:32:44.357254-04:00.jpg">October 7 at 12:32 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-07T00:39:35.778167-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-07T00:39:35.778167-04:00.jpg"
     alt="WBUR at 2022-10-07 00:39:39-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-07T00:39:35.778167-04:00.jpg">October 7 at 12:39 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-06T12:04:16.526972-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-06T12:04:16.526972-04:00.jpg"
     alt="WBUR at 2022-10-06 12:04:20-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-06T12:04:16.526972-04:00.jpg">October 6 at 12:04 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/wbur-2022/wbur-2022-10-06T00:24:20.172071-04:00.jpg">
  <img src="https://archive.org/download/wbur-2022/wbur-2022-10-06T00:24:20.172071-04:00.jpg"
     alt="WBUR at 2022-10-06 00:24:24-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/wbur-2022/wbur-2022-10-06T00:24:20.172071-04:00.jpg">October 6 at 12:24 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 150 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/wbur.json"
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
| [October 11 at 12:24 PM](https://archive.org/download/wbur-2022/wbur-2022-10-11T12:23:52.770362-04:00.hyperlinks.json) |
| [October 11 at 2:26 AM](https://archive.org/download/wbur-2022/wbur-2022-10-11T02:26:40.506924-04:00.hyperlinks.json) |
| [October 10 at 12:43 PM](https://archive.org/download/wbur-2022/wbur-2022-10-10T12:43:08.709053-04:00.hyperlinks.json) |
| [October 10 at 2:26 AM](https://archive.org/download/wbur-2022/wbur-2022-10-10T02:26:33.868710-04:00.hyperlinks.json) |
| [October 9 at 12:02 PM](https://archive.org/download/wbur-2022/wbur-2022-10-09T12:02:00.097545-04:00.hyperlinks.json) |
| [October 9 at 1:18 AM](https://archive.org/download/wbur-2022/wbur-2022-10-09T01:18:03.367386-04:00.hyperlinks.json) |
| [October 8 at 12:15 PM](https://archive.org/download/wbur-2022/wbur-2022-10-08T12:14:46.734691-04:00.hyperlinks.json) |
| [October 8 at 1:39 AM](https://archive.org/download/wbur-2022/wbur-2022-10-08T01:39:00.892100-04:00.hyperlinks.json) |
| [October 7 at 12:33 PM](https://archive.org/download/wbur-2022/wbur-2022-10-07T12:32:44.357254-04:00.hyperlinks.json) |
| [October 7 at 12:39 AM](https://archive.org/download/wbur-2022/wbur-2022-10-07T00:39:35.778167-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 149 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/wbur.json"
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
| [October 11 at 12:24 PM](https://archive.org/download/wbur-2022/wbur-2022-10-11T12:23:52.770362-04:00.accessibility.json) |
| [October 11 at 2:26 AM](https://archive.org/download/wbur-2022/wbur-2022-10-11T02:26:40.506924-04:00.accessibility.json) |
| [October 10 at 12:43 PM](https://archive.org/download/wbur-2022/wbur-2022-10-10T12:43:08.709053-04:00.accessibility.json) |
| [October 10 at 2:26 AM](https://archive.org/download/wbur-2022/wbur-2022-10-10T02:26:33.868710-04:00.accessibility.json) |
| [October 9 at 12:02 PM](https://archive.org/download/wbur-2022/wbur-2022-10-09T12:02:00.097545-04:00.accessibility.json) |
| [October 9 at 1:18 AM](https://archive.org/download/wbur-2022/wbur-2022-10-09T01:18:03.367386-04:00.accessibility.json) |
| [October 8 at 12:15 PM](https://archive.org/download/wbur-2022/wbur-2022-10-08T12:14:46.734691-04:00.accessibility.json) |
| [October 8 at 1:39 AM](https://archive.org/download/wbur-2022/wbur-2022-10-08T01:39:00.892100-04:00.accessibility.json) |
| [October 7 at 12:32 PM](https://archive.org/download/wbur-2022/wbur-2022-10-07T12:32:44.357254-04:00.accessibility.json) |
| [October 7 at 12:39 AM](https://archive.org/download/wbur-2022/wbur-2022-10-07T00:39:35.778167-04:00.accessibility.json) |



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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/wbur.json"
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
| [October 11 at 12:24 PM](https://archive.org/download/wbur-2022/wbur-2022-10-11T12:23:52.770362-04:00.lighthouse.json) |
| [October 11 at 2:26 AM](https://archive.org/download/wbur-2022/wbur-2022-10-11T02:26:40.506924-04:00.lighthouse.json) |
| [October 10 at 12:43 PM](https://archive.org/download/wbur-2022/wbur-2022-10-10T12:43:08.709053-04:00.lighthouse.json) |
| [October 10 at 2:26 AM](https://archive.org/download/wbur-2022/wbur-2022-10-10T02:26:33.868710-04:00.lighthouse.json) |
| [October 9 at 12:02 PM](https://archive.org/download/wbur-2022/wbur-2022-10-09T12:02:00.097545-04:00.lighthouse.json) |
| [October 9 at 1:18 AM](https://archive.org/download/wbur-2022/wbur-2022-10-09T01:18:03.367386-04:00.lighthouse.json) |
| [October 8 at 12:15 PM](https://archive.org/download/wbur-2022/wbur-2022-10-08T12:14:46.734691-04:00.lighthouse.json) |
| [October 8 at 1:39 AM](https://archive.org/download/wbur-2022/wbur-2022-10-08T01:39:00.892100-04:00.lighthouse.json) |
| [October 7 at 12:33 PM](https://archive.org/download/wbur-2022/wbur-2022-10-07T12:32:44.357254-04:00.lighthouse.json) |
| [October 7 at 12:39 AM](https://archive.org/download/wbur-2022/wbur-2022-10-07T00:39:35.778167-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[wbur-2022](https://archive.org/details/wbur-2022)|
