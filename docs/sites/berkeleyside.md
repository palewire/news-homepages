---
orphan: true
---

```{include} ../_templates/nav.html
```

# The Berkeleyside

![The Berkeleyside](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/berkeleyside.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://berkeleyside.org/](https://berkeleyside.org/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/berkeleyside.xml)                                                              |
| Twitter handle | [@Berkeleyside](https://www.twitter.com/Berkeleyside)                                                                                  |
| Location       | Berkeley                                                                                                                              |
| Timezone       | America/Los_Angeles                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/bay-area.html">California Bay Area</a>  |


## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 16 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/berkeleyside.json"
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
        98
    </td>
    <td style="text-align: right;">
        25
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
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
    <td style="text-align: right;">
        503
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
        277
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 320 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/berkeleyside.json"
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
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-11T03:54:14.204580-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-11T03:54:14.204580-07:00.jpg"
     alt="The Berkeleyside at 2022-09-11 03:54:16-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-11T03:54:14.204580-07:00.jpg">September 11 at 3:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T16:06:05.274793-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T16:06:05.274793-07:00.jpg"
     alt="The Berkeleyside at 2022-09-10 16:06:06-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T16:06:05.274793-07:00.jpg">September 10 at 4:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T03:53:56.786292-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T03:53:56.786292-07:00.jpg"
     alt="The Berkeleyside at 2022-09-10 03:53:58-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T03:53:56.786292-07:00.jpg">September 10 at 3:53 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T16:03:57.849925-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T16:03:57.849925-07:00.jpg"
     alt="The Berkeleyside at 2022-09-09 16:03:59-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T16:03:57.849925-07:00.jpg">September 9 at 4:03 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T04:04:43.002670-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T04:04:43.002670-07:00.jpg"
     alt="The Berkeleyside at 2022-09-09 04:04:44-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T04:04:43.002670-07:00.jpg">September 9 at 4:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T16:58:07.142924-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T16:58:07.142924-07:00.jpg"
     alt="The Berkeleyside at 2022-09-08 16:58:08-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T16:58:07.142924-07:00.jpg">September 8 at 4:58 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T04:01:46.532754-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T04:01:46.532754-07:00.jpg"
     alt="The Berkeleyside at 2022-09-08 04:01:55-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T04:01:46.532754-07:00.jpg">September 8 at 4:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T15:59:20.301421-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T15:59:20.301421-07:00.jpg"
     alt="The Berkeleyside at 2022-09-07 15:59:21-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T15:59:20.301421-07:00.jpg">September 7 at 3:59 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T05:13:05.135906-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T05:13:05.135906-07:00.jpg"
     alt="The Berkeleyside at 2022-09-07 05:13:07-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T05:13:05.135906-07:00.jpg">September 7 at 5:13 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T16:05:58.423609-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T16:05:58.423609-07:00.jpg"
     alt="The Berkeleyside at 2022-09-06 16:06:00-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T16:05:58.423609-07:00.jpg">September 6 at 4:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T03:54:48.580941-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T03:54:48.580941-07:00.jpg"
     alt="The Berkeleyside at 2022-09-06 03:54:50-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T03:54:48.580941-07:00.jpg">September 6 at 3:54 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-05T16:00:06.638309-07:00.jpg">
  <img src="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-05T16:00:06.638309-07:00.jpg"
     alt="The Berkeleyside at 2022-09-05 16:00:08-07:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-05T16:00:06.638309-07:00.jpg">September 5 at 4:00 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 310 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/berkeleyside.json"
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
| [September 11 at 3:54 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-11T03:54:14.204580-07:00.hyperlinks.json) |
| [September 10 at 4:06 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T16:06:05.274793-07:00.hyperlinks.json) |
| [September 10 at 3:54 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T03:53:56.786292-07:00.hyperlinks.json) |
| [September 9 at 4:04 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T16:03:57.849925-07:00.hyperlinks.json) |
| [September 9 at 4:04 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T04:04:43.002670-07:00.hyperlinks.json) |
| [September 8 at 4:58 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T16:58:07.142924-07:00.hyperlinks.json) |
| [September 8 at 4:01 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T04:01:46.532754-07:00.hyperlinks.json) |
| [September 7 at 3:59 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T15:59:20.301421-07:00.hyperlinks.json) |
| [September 7 at 5:13 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T05:13:05.135906-07:00.hyperlinks.json) |
| [September 6 at 4:06 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T16:05:58.423609-07:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 311 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/berkeleyside.json"
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
| [September 11 at 3:54 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-11T03:54:14.204580-07:00.accessibility.json) |
| [September 10 at 4:06 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T16:06:05.274793-07:00.accessibility.json) |
| [September 10 at 3:54 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T03:53:56.786292-07:00.accessibility.json) |
| [September 9 at 4:04 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T16:03:57.849925-07:00.accessibility.json) |
| [September 9 at 4:04 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T04:04:43.002670-07:00.accessibility.json) |
| [September 8 at 4:58 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T16:58:07.142924-07:00.accessibility.json) |
| [September 8 at 4:01 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T04:01:46.532754-07:00.accessibility.json) |
| [September 7 at 3:59 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T15:59:20.301421-07:00.accessibility.json) |
| [September 7 at 5:13 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T05:13:05.135906-07:00.accessibility.json) |
| [September 6 at 4:06 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T16:05:58.423609-07:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 101 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/berkeleyside.json"
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
| [September 11 at 3:54 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-11T03:54:14.204580-07:00.lighthouse.json) |
| [September 10 at 4:06 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T16:06:05.274793-07:00.lighthouse.json) |
| [September 10 at 3:54 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-10T03:53:56.786292-07:00.lighthouse.json) |
| [September 9 at 4:04 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T16:03:57.849925-07:00.lighthouse.json) |
| [September 9 at 4:04 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-09T04:04:43.002670-07:00.lighthouse.json) |
| [September 8 at 4:58 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T16:58:07.142924-07:00.lighthouse.json) |
| [September 8 at 4:02 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-08T04:01:46.532754-07:00.lighthouse.json) |
| [September 7 at 3:59 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T15:59:20.301421-07:00.lighthouse.json) |
| [September 7 at 5:13 AM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-07T05:13:05.135906-07:00.lighthouse.json) |
| [September 6 at 4:06 PM](https://archive.org/download/berkeleyside-2022/berkeleyside-2022-09-06T16:05:58.423609-07:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[berkeleyside-2022](https://archive.org/details/berkeleyside-2022)|
