---
orphan: true
---

```{include} ../_templates/nav.html
```

# Detroit Free Press

![Detroit Free Press](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/freep.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.freep.com/](https://www.freep.com/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/freep.xml)                                                              |
| Twitter handle | [@freep](https://www.twitter.com/freep)                                                                                  |
| Location       | Detroit                                                                                                                              |
| Timezone       | America/Detroit                                                                                                                              |
| Country        | [United States of America](https://palewi.re/docs/news-homepages/countries/us.html)
| Language       | [English](https://palewi.re/docs/news-homepages/languages/en.html)
| Bundles        | <a href="../bundles/michigan.html">Michigan</a>,  <a href="../bundles/gannett.html">Gannett</a>  |


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/freep.json"
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
        87
    </td>
    <td style="text-align: right;">
        438
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
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
    <td style="text-align: right;">
        156
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

The archiving routine has saved 17 screenshots with the Internet Archive.



Here are the 12 most recent screenshots.

<div class="latest-parent">

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-29T02:21:27.477118-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-29T02:21:27.477118-04:00.jpg"
     alt="Detroit Free Press at 2022-09-29 02:21:28-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-29T02:21:27.477118-04:00.jpg">September 29 at 2:21 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-28T13:56:37.369556-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-28T13:56:37.369556-04:00.jpg"
     alt="Detroit Free Press at 2022-09-28 13:56:39-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-28T13:56:37.369556-04:00.jpg">September 28 at 1:56 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-28T02:27:03.346411-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-28T02:27:03.346411-04:00.jpg"
     alt="Detroit Free Press at 2022-09-28 02:27:06-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-28T02:27:03.346411-04:00.jpg">September 28 at 2:27 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-27T03:02:07.263727-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-27T03:02:07.263727-04:00.jpg"
     alt="Detroit Free Press at 2022-09-27 03:02:10-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-27T03:02:07.263727-04:00.jpg">September 27 at 3:02 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-26T13:48:24.323639-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-26T13:48:24.323639-04:00.jpg"
     alt="Detroit Free Press at 2022-09-26 13:48:38-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-26T13:48:24.323639-04:00.jpg">September 26 at 1:48 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-26T02:18:24.255594-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-26T02:18:24.255594-04:00.jpg"
     alt="Detroit Free Press at 2022-09-26 02:18:26-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-26T02:18:24.255594-04:00.jpg">September 26 at 2:18 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-25T13:27:15.774299-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-25T13:27:15.774299-04:00.jpg"
     alt="Detroit Free Press at 2022-09-25 13:27:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-25T13:27:15.774299-04:00.jpg">September 25 at 1:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-25T01:52:24.228735-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-25T01:52:24.228735-04:00.jpg"
     alt="Detroit Free Press at 2022-09-25 01:52:27-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-25T01:52:24.228735-04:00.jpg">September 25 at 1:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-24T13:27:17.012503-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-24T13:27:17.012503-04:00.jpg"
     alt="Detroit Free Press at 2022-09-24 13:27:18-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-24T13:27:17.012503-04:00.jpg">September 24 at 1:27 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-24T01:52:40.147912-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-24T01:52:40.147912-04:00.jpg"
     alt="Detroit Free Press at 2022-09-24 01:52:42-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-24T01:52:40.147912-04:00.jpg">September 24 at 1:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-23T13:41:32.761691-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-23T13:41:32.761691-04:00.jpg"
     alt="Detroit Free Press at 2022-09-23 13:41:35-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-23T13:41:32.761691-04:00.jpg">September 23 at 1:41 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/freep-2022/freep-2022-09-23T03:15:41.908303-04:00.jpg">
  <img src="https://archive.org/download/freep-2022/freep-2022-09-23T03:15:41.908303-04:00.jpg"
     alt="Detroit Free Press at 2022-09-23 03:15:43-04:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/freep-2022/freep-2022-09-23T03:15:41.908303-04:00.jpg">September 23 at 3:15 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 18 hyperlink lists with the Internet Archive.



Here are the 10 most recent hyperlink lists.

| Time  |
| :---- |
| [September 29 at 2:21 AM](https://archive.org/download/freep-2022/freep-2022-09-29T02:21:27.477118-04:00.hyperlinks.json) |
| [September 28 at 1:56 PM](https://archive.org/download/freep-2022/freep-2022-09-28T13:56:37.369556-04:00.hyperlinks.json) |
| [September 28 at 2:27 AM](https://archive.org/download/freep-2022/freep-2022-09-28T02:27:03.346411-04:00.hyperlinks.json) |
| [September 27 at 1:56 PM](https://archive.org/download/freep-2022/freep-2022-09-27T13:56:31.159051-04:00.hyperlinks.json) |
| [September 27 at 3:02 AM](https://archive.org/download/freep-2022/freep-2022-09-27T03:02:07.263727-04:00.hyperlinks.json) |
| [September 26 at 1:48 PM](https://archive.org/download/freep-2022/freep-2022-09-26T13:48:24.323639-04:00.hyperlinks.json) |
| [September 26 at 2:18 AM](https://archive.org/download/freep-2022/freep-2022-09-26T02:18:24.255594-04:00.hyperlinks.json) |
| [September 25 at 1:27 PM](https://archive.org/download/freep-2022/freep-2022-09-25T13:27:15.774299-04:00.hyperlinks.json) |
| [September 25 at 1:52 AM](https://archive.org/download/freep-2022/freep-2022-09-25T01:52:24.228735-04:00.hyperlinks.json) |
| [September 24 at 1:27 PM](https://archive.org/download/freep-2022/freep-2022-09-24T13:27:17.012503-04:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 18 accessibility trees with the Internet Archive.



Here are the 10 most recent accessibility trees.

| Time  |
| :---- |
| [September 29 at 2:21 AM](https://archive.org/download/freep-2022/freep-2022-09-29T02:21:27.477118-04:00.accessibility.json) |
| [September 28 at 1:56 PM](https://archive.org/download/freep-2022/freep-2022-09-28T13:56:37.369556-04:00.accessibility.json) |
| [September 28 at 2:27 AM](https://archive.org/download/freep-2022/freep-2022-09-28T02:27:03.346411-04:00.accessibility.json) |
| [September 27 at 1:56 PM](https://archive.org/download/freep-2022/freep-2022-09-27T13:56:31.159051-04:00.accessibility.json) |
| [September 27 at 3:02 AM](https://archive.org/download/freep-2022/freep-2022-09-27T03:02:07.263727-04:00.accessibility.json) |
| [September 26 at 1:48 PM](https://archive.org/download/freep-2022/freep-2022-09-26T13:48:24.323639-04:00.accessibility.json) |
| [September 26 at 2:18 AM](https://archive.org/download/freep-2022/freep-2022-09-26T02:18:24.255594-04:00.accessibility.json) |
| [September 25 at 1:27 PM](https://archive.org/download/freep-2022/freep-2022-09-25T13:27:15.774299-04:00.accessibility.json) |
| [September 25 at 1:52 AM](https://archive.org/download/freep-2022/freep-2022-09-25T01:52:24.228735-04:00.accessibility.json) |
| [September 24 at 1:27 PM](https://archive.org/download/freep-2022/freep-2022-09-24T13:27:17.012503-04:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 18 Lighthouse audits with the Internet Archive.



Here are the 10 most recent Lighthouse audits.

| Time  |
| :---- |
| [September 29 at 2:21 AM](https://archive.org/download/freep-2022/freep-2022-09-29T02:21:27.477118-04:00.lighthouse.json) |
| [September 28 at 1:56 PM](https://archive.org/download/freep-2022/freep-2022-09-28T13:56:37.369556-04:00.lighthouse.json) |
| [September 28 at 2:27 AM](https://archive.org/download/freep-2022/freep-2022-09-28T02:27:03.346411-04:00.lighthouse.json) |
| [September 27 at 1:56 PM](https://archive.org/download/freep-2022/freep-2022-09-27T13:56:31.159051-04:00.lighthouse.json) |
| [September 27 at 3:02 AM](https://archive.org/download/freep-2022/freep-2022-09-27T03:02:07.263727-04:00.lighthouse.json) |
| [September 26 at 1:48 PM](https://archive.org/download/freep-2022/freep-2022-09-26T13:48:24.323639-04:00.lighthouse.json) |
| [September 26 at 2:18 AM](https://archive.org/download/freep-2022/freep-2022-09-26T02:18:24.255594-04:00.lighthouse.json) |
| [September 25 at 1:27 PM](https://archive.org/download/freep-2022/freep-2022-09-25T13:27:15.774299-04:00.lighthouse.json) |
| [September 25 at 1:52 AM](https://archive.org/download/freep-2022/freep-2022-09-25T01:52:24.228735-04:00.lighthouse.json) |
| [September 24 at 1:27 PM](https://archive.org/download/freep-2022/freep-2022-09-24T13:27:17.012503-04:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[freep-2022](https://archive.org/details/freep-2022)|
