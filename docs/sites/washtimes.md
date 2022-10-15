---
orphan: true
---

```{include} ../_templates/nav.html
```

# Washington Times

![Washington Times](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/washtimes.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.washingtontimes.com/](https://www.washingtontimes.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/washtimes.xml)                                                              |
| Twitter handle | [@WashTimes](https://www.twitter.com/WashTimes)                                                                                  |
| Location       | Washington                                                                                                                              |
| Timezone       | America/New_York                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/us-right-wing.html">U.S. right wing</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 22 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/washtimes.json"
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
        83
    </td>
    <td style="text-align: right;">
        730
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
        40
    </td>
    <td style="text-align: right;">
        490
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
        158
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 444 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/washtimes.json"
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
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T16:44:50.577760-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T16:44:50.577760-04:00.jpg"
     alt="Washington Times at 2022-10-14 16:44:52-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T16:44:50.577760-04:00.jpg">October 14 at 4:44 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T12:39:13.212731-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T12:39:13.212731-04:00.jpg"
     alt="Washington Times at 2022-10-14 12:39:44-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T12:39:13.212731-04:00.jpg">October 14 at 12:39 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T02:21:06.916132-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T02:21:06.916132-04:00.jpg"
     alt="Washington Times at 2022-10-14 02:21:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-14T02:21:06.916132-04:00.jpg">October 14 at 2:21 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T16:25:13.964301-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T16:25:13.964301-04:00.jpg"
     alt="Washington Times at 2022-10-13 16:25:42-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T16:25:13.964301-04:00.jpg">October 13 at 4:25 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T12:12:22.187538-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T12:12:22.187538-04:00.jpg"
     alt="Washington Times at 2022-10-13 12:12:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T12:12:22.187538-04:00.jpg">October 13 at 12:12 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T00:40:01.379606-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T00:40:01.379606-04:00.jpg"
     alt="Washington Times at 2022-10-13 00:40:13-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-13T00:40:01.379606-04:00.jpg">October 13 at 12:40 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T15:34:48.569980-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T15:34:48.569980-04:00.jpg"
     alt="Washington Times at 2022-10-12 15:34:50-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T15:34:48.569980-04:00.jpg">October 12 at 3:34 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T12:01:02.801349-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T12:01:02.801349-04:00.jpg"
     alt="Washington Times at 2022-10-12 12:01:31-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T12:01:02.801349-04:00.jpg">October 12 at 12:01 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T02:26:46.988232-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T02:26:46.988232-04:00.jpg"
     alt="Washington Times at 2022-10-12 02:26:58-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-12T02:26:46.988232-04:00.jpg">October 12 at 2:26 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T15:52:16.199169-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T15:52:16.199169-04:00.jpg"
     alt="Washington Times at 2022-10-11 15:52:17-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T15:52:16.199169-04:00.jpg">October 11 at 3:52 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T12:24:50.862580-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T12:24:50.862580-04:00.jpg"
     alt="Washington Times at 2022-10-11 12:25:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T12:24:50.862580-04:00.jpg">October 11 at 12:25 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T02:25:44.342378-04:00.jpg">
  <img src="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T02:25:44.342378-04:00.jpg"
     alt="Washington Times at 2022-10-11 02:26:29-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/washtimes-2022/washtimes-2022-10-11T02:25:44.342378-04:00.jpg">October 11 at 2:26 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 437 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/washtimes.json"
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
| [October 14 at 4:44 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T16:44:50.577760-04:00.hyperlinks.json) |
| [October 14 at 12:39 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T12:39:13.212731-04:00.hyperlinks.json) |
| [October 14 at 2:21 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T02:21:06.916132-04:00.hyperlinks.json) |
| [October 13 at 4:25 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T16:25:13.964301-04:00.hyperlinks.json) |
| [October 13 at 12:12 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T12:12:22.187538-04:00.hyperlinks.json) |
| [October 13 at 12:40 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T00:40:01.379606-04:00.hyperlinks.json) |
| [October 12 at 3:34 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T15:34:48.569980-04:00.hyperlinks.json) |
| [October 12 at 12:01 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T12:01:02.801349-04:00.hyperlinks.json) |
| [October 12 at 2:27 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T02:26:46.988232-04:00.hyperlinks.json) |
| [October 11 at 3:52 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-11T15:52:16.199169-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 440 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/washtimes.json"
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
| [October 14 at 4:44 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T16:44:50.577760-04:00.accessibility.json) |
| [October 14 at 12:39 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T12:39:13.212731-04:00.accessibility.json) |
| [October 14 at 2:21 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T02:21:06.916132-04:00.accessibility.json) |
| [October 13 at 4:25 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T16:25:13.964301-04:00.accessibility.json) |
| [October 13 at 12:12 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T12:12:22.187538-04:00.accessibility.json) |
| [October 13 at 12:40 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T00:40:01.379606-04:00.accessibility.json) |
| [October 12 at 3:34 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T15:34:48.569980-04:00.accessibility.json) |
| [October 12 at 12:01 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T12:01:02.801349-04:00.accessibility.json) |
| [October 12 at 2:27 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T02:26:46.988232-04:00.accessibility.json) |
| [October 11 at 3:52 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-11T15:52:16.199169-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 244 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/washtimes.json"
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
| [October 14 at 4:45 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T16:44:50.577760-04:00.lighthouse.json) |
| [October 14 at 12:39 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T12:39:13.212731-04:00.lighthouse.json) |
| [October 14 at 2:21 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-14T02:21:06.916132-04:00.lighthouse.json) |
| [October 13 at 4:25 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T16:25:13.964301-04:00.lighthouse.json) |
| [October 13 at 12:12 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T12:12:22.187538-04:00.lighthouse.json) |
| [October 13 at 12:40 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-13T00:40:01.379606-04:00.lighthouse.json) |
| [October 12 at 3:34 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T15:34:48.569980-04:00.lighthouse.json) |
| [October 12 at 12:01 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T12:01:02.801349-04:00.lighthouse.json) |
| [October 12 at 2:27 AM](https://archive.org/download/washtimes-2022/washtimes-2022-10-12T02:26:46.988232-04:00.lighthouse.json) |
| [October 11 at 3:52 PM](https://archive.org/download/washtimes-2022/washtimes-2022-10-11T15:52:16.199169-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[washtimes-2022](https://archive.org/details/washtimes-2022)|
