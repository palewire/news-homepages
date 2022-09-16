```{include} _templates/nav.html
```

# Accessibility ranking

As part of its archiving routine, our system conducts routine accessibility audits using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. [Accessibility](https://web.dev/what-is-accessibility/) is a measurement of how legible and useful a page is for users, including those with disabilities like visual impairment.

This page ranks the 543 sites with 10 or more observations over the last seven days by median [accessibility score](https://web.dev/lighthouse-accessibility/). The value is the weighted average of a basket of metrics gathered by Lighthouse. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

This past week the median across all sites was 86. Here's the distribution of scores.

<div id="vis" style="width: 100%; height: 250px;"></div>
  <script>
    const spec = {
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
      "lineHeight": 20,
      "subtitleFont": "\"Libre Franklin\",\"Helvetica\",\"Liberation Sans\",Arial,sans-serif",
      "subtitleFontSize": 14,
      "subtitleLineHeight": 18,
      "subtitlePadding": 5,
      "offset": 10
    },
    "arc": {"fill": "#cecece"},
    "area": {"fill": "#cecece"},
    "line": {"stroke": "#cecece", "strokeWidth": 3},
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
      "domain": false
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
  "data": {"name": "data-ff083e2caf4ea6428c61f01fb3b93afe"},
  "mark": {"type": "bar", "opacity": 0.9},
  "encoding": {
    "x": {
      "axis": {"format": ".0f"},
      "bin": true,
      "field": "index",
      "title": "Median score",
      "type": "quantitative"
    },
    "y": {
      "field": "accessibility_decile",
      "title": "Number of sites",
      "type": "quantitative"
    }
  },
  "title": "Lighthouse accessibility scores",
  "width": "container",
  "height": 250,
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  "datasets": {
    "data-ff083e2caf4ea6428c61f01fb3b93afe": [{"index": 0, "accessibility_decile": 0.0}, {"index": 10, "accessibility_decile": 0.0}, {"index": 20, "accessibility_decile": 0.0}, {"index": 30, "accessibility_decile": 0.0}, {"index": 40, "accessibility_decile": 3.0}, {"index": 50, "accessibility_decile": 10.0}, {"index": 60, "accessibility_decile": 29.0}, {"index": 70, "accessibility_decile": 106.0}, {"index": 80, "accessibility_decile": 221.0}, {"index": 90, "accessibility_decile": 159.0}, {"index": 100, "accessibility_decile": 15.0}]
  }
};
    vegaEmbed("#vis", spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);
  </script>

Here's a ranking of all sites from best to worst.

<table class="colwidths-auto docutils align-default">
 <thead>
  <tr>
    <th class="head">Rank</th>
    <th class="head">Site</th>
    <th class="head" style="text-align: right;">Score</th>
  </tr>
 </thead>
 <tbody>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/calgaryherald.html">
            Calgary Herald
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/charlie_hebdo_.html">
            Charlie Hebdo
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/suntimes.html">
            Chicago Sun-Times
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/evroundtable.html">
            Evanston RoundTable
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/financialpost.html">
            Financial Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ft.html">
            Financial Times
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kgounews.html">
            KGOU
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtlgazette.html">
            Montreal Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nationalpost.html">
            National Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ottawacitizen.html">
            Ottawa Citizen
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sowetanlive.html">
            Sowetan
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/globeandmail.html">
            The Globe and Mail
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vanityfair.html">
            Vanity Fair
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/venturebeat.html">
            VentureBeat
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>1</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thewrap.html">
            Wrap
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>16</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/latimes.html">
            Los Angeles Times
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        99
    </td>
  </tr>
  
  <tr>
    <td>16</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/npr.html">
            NPR
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        99
    </td>
  </tr>
  
  <tr>
    <td>16</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nytimes.html">
            New York Times
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        99
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theatlantic.html">
            Atlantic
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/blockclubchi.html">
            Block Club Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bloombergjapan.html">
            Bloomberg Japan
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbcnews.html">
            CBC News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/denverpost.html">
            Denver Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theeconomist.html">
            Economist
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elmundoes.html">
            El Mundo
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/engadget.html">
            Engadget
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/france24.html">
            FRANCE 24
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fdrlst.html">
            Federalist
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/france24_en.html">
            France 24 English
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/globalnews.html">
            Global News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gridnews.html">
            Grid
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kccinews.html">
            KCCI
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lemonde_en.html">
            Le Monde in English
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bcn_foundation.html">
            Local News Matters
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lrb.html">
            London Review of Books
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/marylandmatters.html">
            Maryland Matters
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mcgilldaily.html">
            McGill Daily
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mediapart.html">
            Mediapart
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtnstspotlight.html">
            Mountain State Spotlight
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/osnepalnews.html">
            OSNepal
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pitchfork.html">
            Pitchfork
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pointreyeslight.html">
            Point Reyes Light
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rfi.html">
            RFI
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sbtnews.html">
            SBT news
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sdut.html">
            San Diego Union Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/time.html">
            TIME
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/teenvogue.html">
            Teen Vogue
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tprnews.html">
            Texas Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/texastribune.html">
            Texas Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telegraph.html">
            The Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/okayplayer.html">
            okayplayer
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/apmreports.html">
            APM Reports
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aspenpubradio.html">
            Aspen Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/business.html">
            Bloomberg
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gawker.html">
            Gawker
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gizmodo.html">
            Gizmodo
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpcwradio.html">
            KPCW
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/phillytrib.html">
            Philadelphia Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theroot.html">
            Root
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>52</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spectator.html">
            Spectator
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atlblog.html">
            Above the Law
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abqbizfirst.html">
            Albuquerque Business First
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/andscape.html">
            Andscape
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bfmtv.html">
            BFMTV
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltbeat.html">
            Baltimore Beat
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bonginoreport.html">
            Bongino Report
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bosbizjournal.html">
            Boston Business Journal
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/clarincom.html">
            Clarín
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dagbladet.html">
            Dagbladet
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailysunsa.html">
            Daily Sun
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eater.html">
            Eater
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/firstthingsmag.html">
            First Things
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/inthesetimesmag.html">
            In These Times 
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/insideclimate.html">
            Inside Climate News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/johncombest.html">
            John Combest
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/levernews.html">
            Lever
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nhk_news.html">
            NHK
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newstatesman.html">
            New Statesman
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nextcityorg.html">
            Next City
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/opensecretsdc.html">
            OpenSecrets
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oregonian.html">
            Oregonian
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newshour.html">
            PBS News Hour
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/parisreview.html">
            Paris Review
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pulitzercenter.html">
            Pulitzer Center
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/quillette.html">
            Quillette
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reforma.html">
            Reforma
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/shillsalmanac.html">
            South Hills Almanac
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spacedotcom.html">
            Space.com
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/umd_sbs.html">
            Stories Beneath the Shell
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/texasobserver.html">
            Texas Observer
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thejaxtrib.html">
            Tributary
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>61</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wbez.html">
            WBEZ
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/news_letter.html">
            Belfast News Letter
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bklyner.html">
            Bklyner
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bulwarkonline.html">
            Bulwark
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dallasnews.html">
            Dallas Morning News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/doorcountyknock.html">
            Door County Knock
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/freethinkmedia.html">
            Freethink
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hwherald.html">
            Harvey World Herald
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ilisolezwe.html">
            I'solezwe lesiXhosa
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theonion.html">
            Onion
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oaklandside.html">
            The Oaklandside
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>93</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/zerohedge.html">
            ZeroHedge
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amazoniaagencia.html">
            Agência Amazônia
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/airwaysmagazine.html">
            Airways
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/asahi.html">
            Asahi Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baynature.html">
            Bay Nature
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/brooklynpaper.html">
            Brooklyn Paper
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/colabnewsco.html">
            Colorado News Collaborative
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/conversationus.html">
            Conversation U.S.
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dnyuzcom.html">
            Dnyuz
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fastcompany.html">
            Fast Company
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/flightglobal.html">
            Flight Global
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcur.html">
            KCUR
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lemondefr.html">
            Le Monde
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/libe.html">
            Libération
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mlnow.html">
            Mission Local
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/observatorio.html">
            Observatório da Imprensa
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oklahomawatch.html">
            Oklahoma Watch
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newspressnow.html">
            St. Joseph News Press
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/georgiastraight.html">
            The Georgia Straight
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/truthout.html">
            Truthout
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>104</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jn_japanese.html">
            Yomiuri shinbun
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/axios.html">
            Axios
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/citylimitsnews.html">
            City Limits
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/civic_lex.html">
            CivicLex
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/curbed.html">
            Curbed
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ewnreporter.html">
            Eyewitness News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wfxl.html">
            Fox 31 WFXL-TV
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/frednewspost.html">
            Frederick News-Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jezebel.html">
            Jezebel
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/knockdotla.html">
            Knock.LA
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mailandguardian.html">
            Mail & Guardian
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/therealnews.html">
            Real News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thescotsman.html">
            Scotsman
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thecut.html">
            The Cut
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailycaller.html">
            Daily Caller
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyherald.html">
            Daily Herald
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dainik_online.html">
            Danik Online
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/huffpost.html">
            Huffington Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newstribune.html">
            Jefferson City News Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/laist.html">
            LAist
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lesoir.html">
            Le Soir
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/moreperfectus.html">
            More Perfect Union
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nhpr.html">
            New Hampshire Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nypost.html">
            New York Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/peninsupress.html">
            Peninsula Press
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reuters.html">
            Reuters
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theriotimes.html">
            Rio Times
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wnyc.html">
            WNYC
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/g1.html">
            g1
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyyonder.html">
            Daily Yonder
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dallasfreepress.html">
            Dallas Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/flatwaterfreep.html">
            Flatwater Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thr.html">
            Hollywood Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpbs.html">
            KPBS
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/media_outlier.html">
            Outlier Media
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/southsideweekly.html">
            South Side Weekly
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/strikewave.html">
            Strikewave
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thenation.html">
            The Nation
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/timeslive.html">
            TimesLIVE
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/washingtonpost.html">
            Washington Post
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>152</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wonkette.html">
            Wonkette
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        91
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bbc.html">
            BBC
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ciceronoticias.html">
            Cicero Independiente
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/crikey_news.html">
            Crikey
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/el_pais.html">
            El Pais
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gradynewsource.html">
            Grady Newsource
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/injusticewatch.html">
            Injustice Watch
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lavozdegalicia.html">
            La Voz de Galicia
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thepublicsource.html">
            Public Source
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/searchlightnm.html">
            Searchlight New Mexico
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spotlight4dc.html">
            Spotlight DC
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>164</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/texasmonthly.html">
            Texas Monthly
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>175</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chesscom.html">
            Chess.com
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atlciviccircle.html">
            Atlanta Civic Circle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltfishbowl.html">
            Baltimore Fishbowl
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bellingcat.html">
            Bellingcat
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/belt_magazine.html">
            Belt Magazine
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/btno.html">
            Bergens Tidende
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gazettedotcom.html">
            Cedar Rapids Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chicago_reader.html">
            Chicago Reader
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/correio.html">
            Correio Braziliense
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/el_timpano.html">
            El Tímpano
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gpbnews.html">
            Georgia Public Broadcasting
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/irishexaminer.html">
            Irish Examiner
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mashable.html">
            Mashable
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsday.html">
            Newsday
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/phillyinquirer.html">
            Philadelphia Inquirer
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reporte_indigo.html">
            Reporte Índigo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voxdotcom.html">
            Vox
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>176</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yahoofinance.html">
            Yahoo Finance
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>193</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bonappetit.html">
            Bon Appetit
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/alma_preta.html">
            Alma Preta
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amestribnews.html">
            Ames Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/postcrescent.html">
            Appleton Post Crescent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theaspentimes.html">
            Aspen Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/badger_project_.html">
            Badger Project
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/billy_penn.html">
            Billy Penn
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chunichi_denhen.html">
            Chunichi Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dwnews.html">
            DW
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/deshsanchar1.html">
            Deshsanchar
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/epochtimes.html">
            Epoch Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/getfandom.html">
            Fandom
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/folha.html">
            Folha de S.Paulo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gbpressgazette.html">
            Green Bay Press-Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/htrnews.html">
            Herald Times Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/infoamazoniabr.html">
            InfoAmazonia
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/presscitizen.html">
            Iowa City Press-Citizen
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/karobar_daily.html">
            Karobar Daily
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/larazon_es.html">
            La Razón
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/le_figaro.html">
            Le Figaro
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ltntw.html">
            Liberty Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/themendovoice.html">
            Mendoncino Voice
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/motherjones.html">
            Mother Jones
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newscientist.html">
            New Scientist
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nikkei.html">
            Nikkei
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oglethorpe_echo.html">
            Oglethorpe Echo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/orcapchronicle.html">
            Oregon Capital Chronicle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pinjnews.html">
            Pittsburgh Institute for Nonprofit Journalism
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/savannahnow.html">
            Savannah Morning News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/slate.html">
            Slate
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spokesmanreview.html">
            Spokesman-Review
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/stevenspointjrl.html">
            Stevens Point Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/taskandpurpose.html">
            Task & Purpose
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thecityny.html">
            The City
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mydesert.html">
            The Desert Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spectrumnews.html">
            The Spectrum
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theweek.html">
            The Week
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uolnoticias.html">
            UOL Notícias
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/usatoday.html">
            USA Today
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vcstar.html">
            Ventura County Star
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wdrbnews.html">
            WDRB News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wttw.html">
            WTTW
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>194</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/inewsource.html">
            inewsource
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>236</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/onlineathens.html">
            Athens Banner-Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>236</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theoklahoman_.html">
            Oklahoman
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reporternews.html">
            Abilene Reporter News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/beaconjournal.html">
            Akron Beacon Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/azcentral.html">
            Arizona Republic
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/breitbartnews.html">
            Breitbart
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnnbrasil.html">
            CNN Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chicagotribune.html">
            Chicago Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/clarionledger.html">
            Clarion Ledger
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailycamera.html">
            Daily Camera
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elpasotimes.html">
            El Paso Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fairmediawatch.html">
            Fairness and Accuracy in Reporting
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foxnews.html">
            Fox News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kerrville.html">
            Kerrville Daily Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/courierjournal.html">
            Louisville Courier-Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lubbockonline.html">
            Lubbock Avalanche-Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newrepublic.html">
            New Republic
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oann.html">
            One America News Network
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbnoficial.html">
            Rádio CBN
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thesanews.html">
            The South African
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thetimes.html">
            The Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voiceofsandiego.html">
            Voice of San Diego
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wsj.html">
            Wall Street Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dcexaminer.html">
            Washington Examiner
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yahoonews.html">
            Yahoo! News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theipaper.html">
            i
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>262</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abcnews.html">
            ABC News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ap.html">
            Associated Press
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/beltel.html">
            Belfast Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/borderless_mag.html">
            Borderless
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/capgaznews.html">
            Capital Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chicagoreporter.html">
            Chicago Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cuestion_p.html">
            Cuestion Publica
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/realdailywire.html">
            Daily Wire
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/diariopopularrs.html">
            Diário Popular
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtfreepress.html">
            Montana Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/objectivejrn.html">
            Objective
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/online_khabar.html">
            Online Khabar
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/occrp.html">
            Organized Crime and Corruption Reporting Project
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rollingstone.html">
            Rolling Stone
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sbnation.html">
            SB Nation
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sjvwater.html">
            SJV Water
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sahanjournal.html">
            Sahan Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/studyfindsorg.html">
            Study Finds
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pioneerpress.html">
            Twin Cities Pioneer Press
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voiceofoc.html">
            Voice of OC
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/revistapiaui.html">
            revista piauí
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>283</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fox12oregon.html">
            Fox 12 Oregon
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>283</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/walbnews10.html">
            WALB News 10
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gcm_nf.html">
            Austin Weekly News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bgdailynews.html">
            Bowling Green Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/humanevents.html">
            Human Events
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/maroelamedia.html">
            Maroela Media
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nysfocus.html">
            New York Focus
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/salon.html">
            Salon
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spacenews_inc.html">
            Space News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spotlightpa.html">
            Spotlight PA
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/townhallcom.html">
            Townhall
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tylerpaper.html">
            Tyler Morning Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/whyynews.html">
            WHYY
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/franceinfo.html">
            franceinfo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>285</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uhmallorca.html">
            Última Hora
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>298</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/journalsentinel.html">
            Milwaukee Journal Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chinatimes.html">
            China Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/estadao.html">
            Estadão
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gatewaypundit.html">
            Gateway Pundit
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/grist.html">
            Grist
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcrg.html">
            KCRG
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lookoutscruz.html">
            Lookout Santa Cruz
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wrdw_wagt.html">
            News 12 NBC 26
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pagesix.html">
            Page Six
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pressenterprise.html">
            Riverside Press-Enterprise
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/simple_flying.html">
            Simple Flying
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wkyt.html">
            WKYT
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wtvm.html">
            WTVM News Leader 9
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/zerohora.html">
            Zero Hora
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>299</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amabhungane.html">
            amaBhungane
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>313</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wowt6news.html">
            6 News WOWT
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>313</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enquirer.html">
            Cincinnati Enquirer
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>313</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cronica.html">
            Crónica
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>313</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vicenews.html">
            Vice News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>313</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wtoc11.html">
            WTOC
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amerindependent.html">
            American Independent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbs46.html">
            CBS46
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/espn.html">
            ESPN
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elpasomatters.html">
            El Paso Matters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcrw.html">
            KCRW
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lanuevaespana.html">
            La Nueva España
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/laopinioncoruna.html">
            La Opinión A Coruña
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcbayarea.html">
            NBC Bay Area
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcchicago.html">
            NBC Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ocregister.html">
            Orange County Register
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rajdhani_daily.html">
            Rajdhani Daily
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sltimes.html">
            Storm Lake Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telemundochi.html">
            Telemundo Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uvaldenews.html">
            Uvalde News-Leader
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/votebeatus.html">
            Votebeat
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>318</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/washtimes.html">
            Washington Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>334</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theprospect.html">
            American Prospect
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>335</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/whas11.html">
            WHAS11 News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/arthasarokar.html">
            Artha Sarokar
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dcnepal.html">
            DC Nepal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailytarheel.html">
            Daily Tarheel
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/drudge.html">
            Drudge Report
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eastlansinginfo.html">
            East Lansing Info
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/izvestia_ru.html">
            Izvestia
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpcc.html">
            KPCC
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ktla.html">
            KTLA
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lataco.html">
            L.A. Taco
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lobs.html">
            L’Obs
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/poder360.html">
            Poder 360
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>336</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ur_ninja.html">
            Unicorn Riot
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc_es.html">
            ABC
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/alternet.html">
            AlterNet
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tucsonstar.html">
            Arizona Daily Star
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thebuffalonews.html">
            Buffalo News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cityjournal.html">
            City Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/civio.html">
            Civio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/daily_record.html">
            Daily Record
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dmregister.html">
            Des Moines Register
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedispatch.html">
            Dispatch
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eveningstandard.html">
            Evening Standard
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcautv.html">
            KCAU
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mmfa.html">
            Media Matters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/meduzaproject.html">
            Meduza
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oronline.html">
            Observer-Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/owhnews.html">
            Omaha World Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/openvallejo.html">
            Open Vallejo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/punchbowlnews.html">
            Punchbowl News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/qctimes.html">
            Quad City Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rt_com.html">
            RT
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rtdnews.html">
            Richmond Times-Dispatch
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sjspotlight.html">
            San José Spotlight
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltimoresun.html">
            The Baltimore Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mcall.html">
            The Morning Call
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/valoreconomico.html">
            Valor Econômico
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wcfcourier.html">
            Waterloo-Cedar Falls Courier
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>348</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wistatejournal.html">
            Wisconsin State Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/20minutes.html">
            20 Minutes
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/the74.html">
            74th
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbschicago.html">
            CBS Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbsnews.html">
            CBS News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cpipr.html">
            Centro de Periodismo Investigativo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/csgazette.html">
            Colorado Springs Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ctmirror.html">
            Connecticut Mirror
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailykos.html">
            Daily Kos
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ek_business.html">
            Ekantipur
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foxla.html">
            FOX 11 Los Angeles
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hartfordcourant.html">
            Hartford Courant
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atarde.html">
            Jornal A Tarde
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/justthenews.html">
            Just the News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ledevoir.html">
            Le Devoir
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mercnews.html">
            Mercury News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nationaljournal.html">
            National Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jornaloglobo.html">
            O Globo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oldiemagazine.html">
            Oldie
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scotusblog.html">
            SCOTUS Blog
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sinow.html">
            Sports Illustrated
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tmz.html">
            TMZ
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/usnews.html">
            U.S. News & World Report
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/agenciabrasil.html">
            Agência Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thealligator.html">
            Alligator
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pajaropolitico.html">
            Animal Político
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/azds.html">
            Arizona Daily Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/arstechnica.html">
            Ars Technica
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/leadertelegram.html">
            Eau Claire Leader-Telegram
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lancenet.html">
            Lance
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lehuffpost.html">
            Le Huffington Post
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sankei_news.html">
            Sankei Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scottishsun.html">
            Scottish Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thesun.html">
            The Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/unichicago.html">
            Univision Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>396</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/worldnetdaily.html">
            WND News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wncn.html">
            CBS 17
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnn.html">
            CNN
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedailyclimate.html">
            Daily Climate
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telegraphherald.html">
            Dubuque Telegraph Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enews.html">
            E!
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/diarioonline.html">
            Fortaleza
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fox5ny.html">
            Fox 5 New York
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/humansofny.html">
            Humans of New York
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/iowapublicradio.html">
            Iowa Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jacobin.html">
            Jacobin
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/le_parisien.html">
            Le Parisien
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/heraldleader.html">
            Lexington Herald-Leader
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mdjonline.html">
            Marietta Daily Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/morningbrew.html">
            Morning Brew
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsobserver.html">
            News & Observer
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wjbf.html">
            WJBF
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wnyt.html">
            WNYT NewsChannel 13
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/freebeacon.html">
            Washington Free Beacon
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kansasdotcom.html">
            Wichita Eagle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>409</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/miwisconsin.html">
            mi wisconsin
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tw_nextmedia.html">
            Apple Daily
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thebafflermag.html">
            Baffler
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theblaze.html">
            Blaze
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailypenn.html">
            Daily Penn
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedepaulia.html">
            DePaulia
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gazetadopovo.html">
            Gazeta do Povo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/imagekhabar.html">
            Imagekhabar
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mainemonitor.html">
            Maine Monitor
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/metropoles.html">
            Metrópoles
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/opovo.html">
            O Povo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oxciej.html">
            Oxpeckers
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thepearlpost.html">
            Pearl Post
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/politifact.html">
            Politifact 
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sinembargomx.html">
            SinEmbargo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/guardian.html">
            The Guardian
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/unherd.html">
            UnHerd
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>429</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wgnnews.html">
            WGN
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theathletic.html">
            Athletic
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/avherald.html">
            Aviation Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/infowars.html">
            Infowars
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theintercept.html">
            Intercept
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jijicom.html">
            Jiji
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lajornadaonline.html">
            Jornada
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/labornotes.html">
            Labor Notes
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsweek.html">
            Newsweek
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>446</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sputnikint.html">
            Sputnik
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/14eastmag.html">
            14 East
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailymaverick.html">
            Daily Maverick
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/documentedny.html">
            Documented
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theinterceptbr.html">
            Intercept Brazil
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcnews.html">
            NBC News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsmax.html">
            Newsmax
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pucknews.html">
            Puck
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pagina12.html">
            Página/12
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rato_pati.html">
            Rato Pati
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ujyaalo.html">
            Ujyaalo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>455</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uninoticias.html">
            Univision News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thebabylonbee.html">
            Babylon Bee
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nybooks.html">
            New York Review of Books
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ocmediaorg.html">
            Open Caucasus Media
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/portalimprensa.html">
            Portal Imprensa
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reason.html">
            Reason
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ycitynewsonline.html">
            Y-City News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>466</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enca.html">
            eNCA
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>473</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lp_lapresse.html">
            La Presse
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/commondreams.html">
            Common Dreams
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/heraldscotland.html">
            Daily Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/derspiegel.html">
            Der Spiegel
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gigharbornow.html">
            Gig Harbor Now
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thelasentinel.html">
            Los Angeles Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mongabay.html">
            Mongabay
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/privateeyenews.html">
            Private Eye
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/independent.html">
            The Independent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>474</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tiftongazette1.html">
            Tifton Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/highcountrynews.html">
            High Country News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/revistaistoe.html">
            ISTOÉ
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lentaruofficial.html">
            Lenta.ru
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/msnbc.html">
            MSNBC
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nzherald.html">
            NZ Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scotnational.html">
            National
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/novayagazeta_eu.html">
            Novaya Gazeta
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ottumwacourier.html">
            Ottumwa Courier
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rawstory.html">
            Raw Story
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>483</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/variety.html">
            Variety
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>493</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bettergov.html">
            Better Government Association
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        71
    </td>
  </tr>
  
  <tr>
    <td>493</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theblock__.html">
            Block
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        71
    </td>
  </tr>
  
  <tr>
    <td>493</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bariweiss.html">
            Common Sense
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        71
    </td>
  </tr>
  
  <tr>
    <td>493</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/omelete.html">
            Omelete
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        71
    </td>
  </tr>
  
  <tr>
    <td>493</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thevdt.html">
            Valdosta Daily Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        71
    </td>
  </tr>
  
  <tr>
    <td>498</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/canopyatl.html">
            Canopy Atlanta
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>498</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/diariope.html">
            Diario de Pernambuco
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>498</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elpaisuy.html">
            El Pais
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>498</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/powerlineus.html">
            Power Line
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>502</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc.html">
            ABC News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>502</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyecho.html">
            Daily Echo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>502</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mailonline.html">
            Daily Mail
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>502</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/democracynow.html">
            Democracy Now!
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>502</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jornaldobrasil.html">
            Jornal do Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>502</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/toacornnews.html">
            Thousand Oaks Acorn
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ajc.html">
            Atlanta Journal-Constitution
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailymirror.html">
            Daily Mirror
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hotairblog.html">
            HotAir
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kyivindependent.html">
            Kyiv Independent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nro.html">
            National Review
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ntdaily.html">
            North Texas Daily
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>508</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/redstate.html">
            RedState
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>515</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc7breaking.html">
            KVIA
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        67
    </td>
  </tr>
  
  <tr>
    <td>515</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/progressoms.html">
            O Progresso
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        67
    </td>
  </tr>
  
  <tr>
    <td>515</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/khabarkendra.html">
            Sanchar Kendra
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        67
    </td>
  </tr>
  
  <tr>
    <td>515</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chess24com.html">
            chess24
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        67
    </td>
  </tr>
  
  <tr>
    <td>519</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/startribune.html">
            Minneapolis Star Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>520</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/niemanlab.html">
            Nieman Lab
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>520</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thetriibe.html">
            The TriiBE
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>522</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enewsofnepal.html">
            Nepal Samacharpatra
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        65
    </td>
  </tr>
  
  <tr>
    <td>522</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/timesherald.html">
            The Newnan Times-Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        65
    </td>
  </tr>
  
  <tr>
    <td>524</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reductress.html">
            Reductress
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>524</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wbur.html">
            WBUR
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>526</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc7.html">
            ABC7
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>526</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/capitalandmain.html">
            Capital & Main
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>526</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elcorreo_com.html">
            El Correo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>529</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/littlevillage.html">
            Little Village
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>529</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mwtnews.html">
            Midland Reporter-Telegram
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>531</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tucsonsentinel.html">
            Tucson Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>532</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elperiodico.html">
            El Periodico
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>532</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lokpath.html">
            Lokpath
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>534</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/agenciapublica.html">
            Agência Pública
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>534</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/em_com.html">
            Estado de Minas
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>534</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sz.html">
            Süddeutsche Zeitung
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>537</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc7newsbayarea.html">
            ABC7 News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>537</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/seikyoofficial.html">
            Seikyo Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>539</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nagarik_news.html">
            Nagarik News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>540</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gazetaru.html">
            Gazeta.Ru
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        52
    </td>
  </tr>
  
  <tr>
    <td>541</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rianru.html">
            RIA Novosti
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>542</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jdemontreal.html">
            La Journal de Montréal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>542</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yediotahronot.html">
            Yedioth Ahronoth
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
 </tbody>
</table>