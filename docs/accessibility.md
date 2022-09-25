```{include} _templates/nav.html
```

# Accessibility ranking

As part of its archiving routine, our system conducts routine accessibility audits using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. [Accessibility](https://web.dev/what-is-accessibility/) is a measurement of how legible and useful a page is for users, including those with disabilities like visual impairment.

This page ranks the 228 sites with 10 or more observations over the last seven days by median [accessibility score](https://web.dev/lighthouse-accessibility/). The value is the weighted average of a basket of metrics gathered by Lighthouse. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

This past week the median across all sites was 85. Here's the distribution of scores.

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
    "data-ff083e2caf4ea6428c61f01fb3b93afe": [{"index": 0, "accessibility_decile": 0.0}, {"index": 10, "accessibility_decile": 0.0}, {"index": 20, "accessibility_decile": 0.0}, {"index": 30, "accessibility_decile": 0.0}, {"index": 40, "accessibility_decile": 1.0}, {"index": 50, "accessibility_decile": 4.0}, {"index": 60, "accessibility_decile": 15.0}, {"index": 70, "accessibility_decile": 50.0}, {"index": 80, "accessibility_decile": 90.0}, {"index": 90, "accessibility_decile": 63.0}, {"index": 100, "accessibility_decile": 5.0}]
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
        <a href="https://palewi.re/docs/news-homepages/sites/globeandmail.html">
            The Globe and Mail
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>6</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
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
    <td>7</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spectator.html">
            Spectator
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>7</td>
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
    <td>22</td>
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
    <td>22</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jezebel.html">
            Jezebel
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>22</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/npr.html">
            NPR
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>22</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/parisreview.html">
            Paris Review
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>26</td>
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
    <td>36</td>
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
    <td>36</td>
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
    <td>36</td>
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
    <td>36</td>
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
    <td>40</td>
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
    <td>40</td>
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
    <td>40</td>
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
    <td>40</td>
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
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newstatesman.html">
            New Statesman
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>40</td>
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
    <td>40</td>
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
    <td>40</td>
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
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/inewsource.html">
            inewsource
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        94
    </td>
  </tr>
  
  <tr>
    <td>49</td>
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
    <td>49</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nytimes.html">
            New York Times
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>49</td>
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
    <td>52</td>
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
    <td>52</td>
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
    <td>52</td>
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
    <td>52</td>
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
    <td>52</td>
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
    <td>52</td>
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
    <td>52</td>
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
    <td>59</td>
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
    <td>59</td>
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
    <td>59</td>
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
    <td>59</td>
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
    <td>59</td>
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
    <td>59</td>
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
    <td>65</td>
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
    <td>65</td>
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
    <td>65</td>
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
    <td>65</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telegraph.html">
            The Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>69</td>
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
    <td>69</td>
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
    <td>69</td>
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
    <td>69</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/justthenews.html">
            Just the News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>69</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/motherjones.html">
            Mother Jones
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>69</td>
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
    <td>75</td>
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
    <td>75</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/beltel.html">
            Belfast Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>75</td>
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
    <td>90</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gatewaypundit.html">
            Gateway Pundit
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>91</td>
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
    <td>102</td>
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
    <td>102</td>
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
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/breitbartnews.html">
            Breitbart
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>102</td>
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
    <td>102</td>
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
    <td>102</td>
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
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/folha.html">
            Folha de S.Paulo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thetimes.html">
            The Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>102</td>
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
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/worldnetdaily.html">
            WND News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>112</td>
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
    <td>112</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ocregister.html">
            Orange County Register
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>112</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pressenterprise.html">
            Riverside Press-Enterprise
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>112</td>
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
    <td>112</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltimoresun.html">
            The Baltimore Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>112</td>
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
    <td>112</td>
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
    <td>119</td>
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
    <td>119</td>
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
    <td>119</td>
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
    <td>122</td>
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
    <td>122</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foxnews.html">
            Fox News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>122</td>
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
    <td>122</td>
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
    <td>122</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rt_com.html">
            RT
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>122</td>
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
    <td>122</td>
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
    <td>122</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/revistapiaui.html">
            revista piauí
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>130</td>
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
    <td>130</td>
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
    <td>130</td>
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
    <td>130</td>
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
    <td>130</td>
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
    <td>130</td>
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
    <td>130</td>
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
    <td>130</td>
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
    <td>138</td>
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
    <td>138</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theprospect.html">
            American Prospect
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>138</td>
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
    <td>138</td>
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
    <td>138</td>
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
    <td>138</td>
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
    <td>138</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/humanevents.html">
            Human Events
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>138</td>
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
    <td>138</td>
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
    <td>138</td>
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
    <td>138</td>
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
    <td>149</td>
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
    <td>149</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/asahi.html">
            Asahi Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>149</td>
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
    <td>149</td>
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
    <td>149</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnn.html">
            CNN
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>149</td>
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
    <td>149</td>
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
    <td>149</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcautv.html">
            KCAU
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>149</td>
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
    <td>149</td>
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
    <td>159</td>
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
    <td>159</td>
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
    <td>159</td>
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
    <td>159</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/metropoles.html">
            Metrópoles
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>159</td>
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
    <td>159</td>
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
    <td>165</td>
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
    <td>165</td>
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
    <td>165</td>
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
    <td>165</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jijicom.html">
            Jiji
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>165</td>
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
    <td>165</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsmax.html">
            Newsmax
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>165</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scottishsun.html">
            Scottish Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>165</td>
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
    <td>173</td>
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
    <td>173</td>
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
    <td>173</td>
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
    <td>173</td>
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
    <td>173</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atarde.html">
            Jornal A Tarde
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>173</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jornaldobrasil.html">
            Jornal do Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>173</td>
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
    <td>173</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sankei_news.html">
            Sankei Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>173</td>
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
    <td>173</td>
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
    <td>173</td>
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
    <td>184</td>
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
    <td>184</td>
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
    <td>184</td>
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
    <td>187</td>
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
    <td>187</td>
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
    <td>187</td>
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
    <td>190</td>
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
    <td>190</td>
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
    <td>192</td>
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
    <td>192</td>
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
    <td>192</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/revistaistoe.html">
            ISTOÉ
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>192</td>
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
    <td>192</td>
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
    <td>197</td>
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
    <td>197</td>
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
    <td>197</td>
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
    <td>197</td>
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
    <td>197</td>
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
    <td>197</td>
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
    <td>197</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/independent.html">
            The Independent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>204</td>
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
    <td>204</td>
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
    <td>204</td>
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
    <td>207</td>
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
    <td>207</td>
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
    <td>209</td>
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
    <td>209</td>
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
    <td>209</td>
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
    <td>209</td>
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
    <td>213</td>
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
    <td>213</td>
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
    <td>213</td>
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
    <td>213</td>
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
    <td>213</td>
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
    <td>218</td>
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
    <td>219</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mailonline.html">
            Daily Mail
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>220</td>
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
    <td>221</td>
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
    <td>221</td>
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
    <td>223</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/seikyoofficial.html">
            Seikyo Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>224</td>
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
    <td>224</td>
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
    <td>224</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sputnikint.html">
            Sputnik
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>227</td>
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
    <td>228</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rianru.html">
            RIA Novosti
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
 </tbody>
</table>