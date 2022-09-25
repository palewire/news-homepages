---
orphan: true
---

```{include} ../_templates/nav.html
```

# Folha de S.Paulo

![Folha de S.Paulo](https://raw.githubusercontent.com/palewire/news-homepages/main/latest-screenshots/folha.jpg)

| Attribute      | Value                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site           | [https://www.folha.uol.com.br/](https://www.folha.uol.com.br/)                                                                                                                 |
| RSS            | [🔗](https://palewi.re/docs/news-homepages/rss/sites/folha.xml)                                                              |
| Twitter handle | [@folha](https://www.twitter.com/folha)                                                                                  |
| Location       | São Paulo                                                                                                                              |
| Timezone       | America/Sao_Paulo                                                                                                                              |
| Country        | [Brazil](https://palewi.re/docs/news-homepages/countries/br.html)
| Language       | [Portuguese](https://palewi.re/docs/news-homepages/languages/pt.html)



## Analysis

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. It rates sites against standards for [performance](https://developer.chrome.com/docs/lighthouse/performance/), [accessibility](https://web.dev/lighthouse-accessibility/), [search-engine optimization](https://developer.chrome.com/docs/lighthouse/seo/) and [best practices](https://developer.chrome.com/docs/lighthouse/best-practices/).

This site was analyzed 11 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse-analysis/folha.json"
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
        86
    </td>
    <td style="text-align: right;">
        102
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
        86
    </td>
  </tr>

  <tr>
    <td>
        Performance
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        29
    </td>
    <td style="text-align: right;">
        114
    </td>
  </tr>

  <tr>
    <td>
        SEO
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
    <td style="text-align: right;">
        110
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 132 screenshots with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/screenshots/folha.json"
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
 <a href="https://archive.org/download/folha-2022/folha-2022-09-19T13:01:59.514677-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-19T13:01:59.514677-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-19 13:02:01-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-19T13:01:59.514677-03:00.jpg">September 19 at 1:02 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-19T09:01:07.670329-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-19T09:01:07.670329-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-19 09:01:14-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-19T09:01:07.670329-03:00.jpg">September 19 at 9:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-19T01:46:19.169984-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-19T01:46:19.169984-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-19 01:46:20-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-19T01:46:19.169984-03:00.jpg">September 19 at 1:46 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-18T09:01:20.027916-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-18T09:01:20.027916-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-18 09:01:22-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-18T09:01:20.027916-03:00.jpg">September 18 at 9:01 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-18T00:49:52.126292-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-18T00:49:52.126292-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-18 00:49:58-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-18T00:49:52.126292-03:00.jpg">September 18 at 12:49 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-17T11:52:30.385301-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-17T11:52:30.385301-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-17 11:52:31-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-17T11:52:30.385301-03:00.jpg">September 17 at 11:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-17T09:03:30.406211-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-17T09:03:30.406211-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-17 09:03:41-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-17T09:03:30.406211-03:00.jpg">September 17 at 9:03 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-17T00:43:27.420363-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-17T00:43:27.420363-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-17 00:43:35-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-17T00:43:27.420363-03:00.jpg">September 17 at 12:43 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-16T12:02:02.739038-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-16T12:02:02.739038-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-16 12:02:19-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-16T12:02:02.739038-03:00.jpg">September 16 at 12:02 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-16T09:02:34.173924-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-16T09:02:34.173924-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-16 09:02:40-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-16T09:02:34.173924-03:00.jpg">September 16 at 9:02 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-16T00:51:35.538809-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-16T00:51:35.538809-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-16 00:51:40-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-16T00:51:35.538809-03:00.jpg">September 16 at 12:51 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-09-15T13:12:33.032419-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-09-15T13:12:33.032419-03:00.jpg"
     alt="Folha de S.Paulo at 2022-09-15 13:12:35-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-09-15T13:12:33.032419-03:00.jpg">September 15 at 1:12 PM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 132 hyperlink lists with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/hyperlinks/folha.json"
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
| [September 19 at 1:02 PM](https://archive.org/download/folha-2022/folha-2022-09-19T13:01:59.514677-03:00.hyperlinks.json) |
| [September 19 at 9:01 AM](https://archive.org/download/folha-2022/folha-2022-09-19T09:01:07.670329-03:00.hyperlinks.json) |
| [September 19 at 1:46 AM](https://archive.org/download/folha-2022/folha-2022-09-19T01:46:19.169984-03:00.hyperlinks.json) |
| [September 18 at 9:01 AM](https://archive.org/download/folha-2022/folha-2022-09-18T09:01:20.027916-03:00.hyperlinks.json) |
| [September 18 at 12:50 AM](https://archive.org/download/folha-2022/folha-2022-09-18T00:49:52.126292-03:00.hyperlinks.json) |
| [September 17 at 11:52 AM](https://archive.org/download/folha-2022/folha-2022-09-17T11:52:30.385301-03:00.hyperlinks.json) |
| [September 17 at 9:03 AM](https://archive.org/download/folha-2022/folha-2022-09-17T09:03:30.406211-03:00.hyperlinks.json) |
| [September 17 at 12:43 AM](https://archive.org/download/folha-2022/folha-2022-09-17T00:43:27.420363-03:00.hyperlinks.json) |
| [September 16 at 12:02 PM](https://archive.org/download/folha-2022/folha-2022-09-16T12:02:02.739038-03:00.hyperlinks.json) |
| [September 16 at 9:02 AM](https://archive.org/download/folha-2022/folha-2022-09-16T09:02:34.173924-03:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 132 accessibility trees with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/accessibility/folha.json"
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
| [September 19 at 1:02 PM](https://archive.org/download/folha-2022/folha-2022-09-19T13:01:59.514677-03:00.accessibility.json) |
| [September 19 at 9:01 AM](https://archive.org/download/folha-2022/folha-2022-09-19T09:01:07.670329-03:00.accessibility.json) |
| [September 19 at 1:46 AM](https://archive.org/download/folha-2022/folha-2022-09-19T01:46:19.169984-03:00.accessibility.json) |
| [September 18 at 9:01 AM](https://archive.org/download/folha-2022/folha-2022-09-18T09:01:20.027916-03:00.accessibility.json) |
| [September 18 at 12:50 AM](https://archive.org/download/folha-2022/folha-2022-09-18T00:49:52.126292-03:00.accessibility.json) |
| [September 17 at 11:52 AM](https://archive.org/download/folha-2022/folha-2022-09-17T11:52:30.385301-03:00.accessibility.json) |
| [September 17 at 9:03 AM](https://archive.org/download/folha-2022/folha-2022-09-17T09:03:30.406211-03:00.accessibility.json) |
| [September 17 at 12:43 AM](https://archive.org/download/folha-2022/folha-2022-09-17T00:43:27.420363-03:00.accessibility.json) |
| [September 16 at 12:02 PM](https://archive.org/download/folha-2022/folha-2022-09-16T12:02:02.739038-03:00.accessibility.json) |
| [September 16 at 9:02 AM](https://archive.org/download/folha-2022/folha-2022-09-16T09:02:34.173924-03:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 133 Lighthouse audits with the Internet Archive.


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
    "url": "https://raw.githubusercontent.com/palewire/news-homepages/main/docs/_extra/charts/sites/lighthouse/folha.json"
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
| [September 19 at 1:02 PM](https://archive.org/download/folha-2022/folha-2022-09-19T13:01:59.514677-03:00.lighthouse.json) |
| [September 19 at 9:01 AM](https://archive.org/download/folha-2022/folha-2022-09-19T09:01:07.670329-03:00.lighthouse.json) |
| [September 19 at 1:46 AM](https://archive.org/download/folha-2022/folha-2022-09-19T01:46:19.169984-03:00.lighthouse.json) |
| [September 18 at 9:01 AM](https://archive.org/download/folha-2022/folha-2022-09-18T09:01:20.027916-03:00.lighthouse.json) |
| [September 18 at 12:50 AM](https://archive.org/download/folha-2022/folha-2022-09-18T00:49:52.126292-03:00.lighthouse.json) |
| [September 17 at 11:52 AM](https://archive.org/download/folha-2022/folha-2022-09-17T11:52:30.385301-03:00.lighthouse.json) |
| [September 17 at 9:03 AM](https://archive.org/download/folha-2022/folha-2022-09-17T09:03:30.406211-03:00.lighthouse.json) |
| [September 17 at 12:43 AM](https://archive.org/download/folha-2022/folha-2022-09-17T00:43:27.420363-03:00.lighthouse.json) |
| [September 16 at 12:02 PM](https://archive.org/download/folha-2022/folha-2022-09-16T12:02:02.739038-03:00.lighthouse.json) |
| [September 16 at 9:02 AM](https://archive.org/download/folha-2022/folha-2022-09-16T09:02:34.173924-03:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[folha-2022](https://archive.org/details/folha-2022)|
