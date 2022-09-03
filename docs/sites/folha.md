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

This site was analyzed 17 times over the last seven days. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

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
        88
    </td>
    <td style="text-align: right;">
        297
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
        404
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
        390
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
        425
    </td>
  </tr>

</tbody>
</table>


## Artifacts

Assets gathered by our system and stored in the Internet Archive

### Screenshots

The archiving routine has saved 79 screenshots with the Internet Archive.


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
 <a href="https://archive.org/download/folha-2022/folha-2022-08-31T12:05:01.375857-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-31T12:05:01.375857-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-31 12:05:02-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-31T12:05:01.375857-03:00.jpg">August 31 at 12:05 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-31T09:04:07.966745-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-31T09:04:07.966745-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-31 09:04:09-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-31T09:04:07.966745-03:00.jpg">August 31 at 9:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-31T00:46:17.504735-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-31T00:46:17.504735-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-31 00:46:19-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-31T00:46:17.504735-03:00.jpg">August 31 at 12:46 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-30T12:26:01.024925-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-30T12:26:01.024925-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-30 12:26:02-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-30T12:26:01.024925-03:00.jpg">August 30 at 12:26 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-30T09:15:10.593810-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-30T09:15:10.593810-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-30 09:15:12-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-30T09:15:10.593810-03:00.jpg">August 30 at 9:15 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-30T00:51:57.915720-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-30T00:51:57.915720-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-30 00:52:00-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-30T00:51:57.915720-03:00.jpg">August 30 at 12:52 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-29T12:06:39.605949-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-29T12:06:39.605949-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-29 12:06:45-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-29T12:06:39.605949-03:00.jpg">August 29 at 12:06 PM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-29T09:01:58.989940-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-29T09:01:58.989940-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-29 09:02:03-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-29T09:01:58.989940-03:00.jpg">August 29 at 9:02 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-29T00:42:28.046065-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-29T00:42:28.046065-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-29 00:42:29-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-29T00:42:28.046065-03:00.jpg">August 29 at 12:42 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-28T11:55:26.199438-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-28T11:55:26.199438-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-28 11:55:28-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-28T11:55:26.199438-03:00.jpg">August 28 at 11:55 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-28T09:04:00.102377-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-28T09:04:00.102377-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-28 09:04:04-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-28T09:04:00.102377-03:00.jpg">August 28 at 9:04 AM</a></p>
</div>

<div class="latest-child">
 <a href="https://archive.org/download/folha-2022/folha-2022-08-28T00:40:03.091876-03:00.jpg">
  <img src="https://archive.org/download/folha-2022/folha-2022-08-28T00:40:03.091876-03:00.jpg"
     alt="Folha de S.Paulo at 2022-08-28 00:40:04-03:00 local time"
     loading="lazy">
 </a>
 <p><a href="https://archive.org/download/folha-2022/folha-2022-08-28T00:40:03.091876-03:00.jpg">August 28 at 12:40 AM</a></p>
</div>

</div>

### Hyperlinks

The archiving routine has saved 80 hyperlink lists with the Internet Archive.


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
| [August 31 at 12:05 PM](https://archive.org/download/folha-2022/folha-2022-08-31T12:05:01.375857-03:00.hyperlinks.json) |
| [August 31 at 9:04 AM](https://archive.org/download/folha-2022/folha-2022-08-31T09:04:07.966745-03:00.hyperlinks.json) |
| [August 31 at 12:46 AM](https://archive.org/download/folha-2022/folha-2022-08-31T00:46:17.504735-03:00.hyperlinks.json) |
| [August 30 at 12:26 PM](https://archive.org/download/folha-2022/folha-2022-08-30T12:26:01.024925-03:00.hyperlinks.json) |
| [August 30 at 9:15 AM](https://archive.org/download/folha-2022/folha-2022-08-30T09:15:10.593810-03:00.hyperlinks.json) |
| [August 30 at 12:52 AM](https://archive.org/download/folha-2022/folha-2022-08-30T00:51:57.915720-03:00.hyperlinks.json) |
| [August 29 at 12:06 PM](https://archive.org/download/folha-2022/folha-2022-08-29T12:06:39.605949-03:00.hyperlinks.json) |
| [August 29 at 9:02 AM](https://archive.org/download/folha-2022/folha-2022-08-29T09:01:58.989940-03:00.hyperlinks.json) |
| [August 29 at 12:42 AM](https://archive.org/download/folha-2022/folha-2022-08-29T00:42:28.046065-03:00.hyperlinks.json) |
| [August 28 at 11:55 AM](https://archive.org/download/folha-2022/folha-2022-08-28T11:55:26.199438-03:00.hyperlinks.json) |


### Accessibility

The archiving routine has saved 80 accessibility trees with the Internet Archive.


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
| [August 31 at 12:05 PM](https://archive.org/download/folha-2022/folha-2022-08-31T12:05:01.375857-03:00.accessibility.json) |
| [August 31 at 9:04 AM](https://archive.org/download/folha-2022/folha-2022-08-31T09:04:07.966745-03:00.accessibility.json) |
| [August 31 at 12:46 AM](https://archive.org/download/folha-2022/folha-2022-08-31T00:46:17.504735-03:00.accessibility.json) |
| [August 30 at 12:26 PM](https://archive.org/download/folha-2022/folha-2022-08-30T12:26:01.024925-03:00.accessibility.json) |
| [August 30 at 9:15 AM](https://archive.org/download/folha-2022/folha-2022-08-30T09:15:10.593810-03:00.accessibility.json) |
| [August 30 at 12:52 AM](https://archive.org/download/folha-2022/folha-2022-08-30T00:51:57.915720-03:00.accessibility.json) |
| [August 29 at 12:06 PM](https://archive.org/download/folha-2022/folha-2022-08-29T12:06:39.605949-03:00.accessibility.json) |
| [August 29 at 9:02 AM](https://archive.org/download/folha-2022/folha-2022-08-29T09:01:58.989940-03:00.accessibility.json) |
| [August 29 at 12:42 AM](https://archive.org/download/folha-2022/folha-2022-08-29T00:42:28.046065-03:00.accessibility.json) |
| [August 28 at 11:55 AM](https://archive.org/download/folha-2022/folha-2022-08-28T11:55:26.199438-03:00.accessibility.json) |



### Lighthouse

The archiving routine has saved 80 Lighthouse audits with the Internet Archive.


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
| [August 31 at 12:05 PM](https://archive.org/download/folha-2022/folha-2022-08-31T12:05:01.375857-03:00.lighthouse.json) |
| [August 31 at 9:04 AM](https://archive.org/download/folha-2022/folha-2022-08-31T09:04:07.966745-03:00.lighthouse.json) |
| [August 31 at 12:46 AM](https://archive.org/download/folha-2022/folha-2022-08-31T00:46:17.504735-03:00.lighthouse.json) |
| [August 30 at 12:26 PM](https://archive.org/download/folha-2022/folha-2022-08-30T12:26:01.024925-03:00.lighthouse.json) |
| [August 30 at 9:15 AM](https://archive.org/download/folha-2022/folha-2022-08-30T09:15:10.593810-03:00.lighthouse.json) |
| [August 30 at 12:52 AM](https://archive.org/download/folha-2022/folha-2022-08-30T00:51:57.915720-03:00.lighthouse.json) |
| [August 29 at 12:06 PM](https://archive.org/download/folha-2022/folha-2022-08-29T12:06:39.605949-03:00.lighthouse.json) |
| [August 29 at 9:02 AM](https://archive.org/download/folha-2022/folha-2022-08-29T09:01:58.989940-03:00.lighthouse.json) |
| [August 29 at 12:42 AM](https://archive.org/download/folha-2022/folha-2022-08-29T00:42:28.046065-03:00.lighthouse.json) |
| [August 28 at 11:55 AM](https://archive.org/download/folha-2022/folha-2022-08-28T11:55:26.199438-03:00.lighthouse.json) |



### Internet Archive collections

Assets are stored in the following collections at archive.org:

| Item  |
| :---- |
|[folha-2022](https://archive.org/details/folha-2022)|
