```{include} _templates/nav.html
```

# Performance ranking

As part of its archiving routine, our system conducts routine audits of code quality using Google's open-source [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool. This page ranks the 872 sites with 10 or more observations over the last seven days by median [performance score](https://developer.chrome.com/docs/lighthouse/performance/).

The value is the weighted average of a basket of speed and efficiency metrics gathered by Lighthouse. Scores of 90 or greater are considered good. Scores of 50 to 89 are described as needing improvement. Scores below 50 are rated as poor.

This past week the median across all sites was 27. Here's the distribution of scores.

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
      "field": "performance_decile",
      "title": "Number of sites",
      "type": "quantitative"
    }
  },
  "title": "Lighthouse performance scores",
  "width": "container",
  "height": 250,
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  "datasets": {
    "data-ff083e2caf4ea6428c61f01fb3b93afe": [{"index": 0, "performance_decile": 49}, {"index": 10, "performance_decile": 204}, {"index": 20, "performance_decile": 222}, {"index": 30, "performance_decile": 108}, {"index": 40, "performance_decile": 107}, {"index": 50, "performance_decile": 60}, {"index": 60, "performance_decile": 40}, {"index": 70, "performance_decile": 49}, {"index": 80, "performance_decile": 22}, {"index": 90, "performance_decile": 10}, {"index": 100, "performance_decile": 1}]
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
        <a href="https://palewi.re/docs/news-homepages/sites/insideclimate.html">
            Inside Climate News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        100
    </td>
  </tr>
  
  <tr>
    <td>2</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yediotahronot.html">
            Yedioth Ahronoth
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        98
    </td>
  </tr>
  
  <tr>
    <td>3</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/techmeme.html">
            TechMeme
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        97
    </td>
  </tr>
  
  <tr>
    <td>4</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bellingcat.html">
            Bellingcat
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        96
    </td>
  </tr>
  
  <tr>
    <td>5</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gigharbornow.html">
            Gig Harbor Now
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        95
    </td>
  </tr>
  
  <tr>
    <td>6</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/torrentfreak.html">
            TorrentFreak
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        93
    </td>
  </tr>
  
  <tr>
    <td>7</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aspenjournalism.html">
            Aspen Journalism
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>7</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lagrangenews.html">
            The LaGrange Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        92
    </td>
  </tr>
  
  <tr>
    <td>9</td>
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
    <td>10</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/blackbygodwv.html">
            Black by God
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>10</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thejaxtrib.html">
            Tributary
        </a>
    </td>
    <td style="text-align: right; background-color: green; color: white;">
        90
    </td>
  </tr>
  
  <tr>
    <td>12</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/austinvida.html">
            Austin Vida
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>12</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hwherald.html">
            Harvey World Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>12</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/simple_flying.html">
            Simple Flying
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        89
    </td>
  </tr>
  
  <tr>
    <td>15</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elpasomatters.html">
            El Paso Matters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        88
    </td>
  </tr>
  
  <tr>
    <td>16</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jornaldobrasil.html">
            Jornal do Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>16</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lobs.html">
            L’Obs
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        87
    </td>
  </tr>
  
  <tr>
    <td>18</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oklahomawatch.html">
            Oklahoma Watch
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        86
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/doorcountyknock.html">
            Door County Knock
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lehuffpost.html">
            Le Huffington Post
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>19</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/restofworld.html">
            Rest of World
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        85
    </td>
  </tr>
  
  <tr>
    <td>22</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcdefender.html">
            Kansas City Defender
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>23</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/marshallproj.html">
            Marshall Project
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>23</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mediaite.html">
            Mediaite
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>23</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtnstspotlight.html">
            Mountain State Spotlight
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        84
    </td>
  </tr>
  
  <tr>
    <td>26</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sahanjournal.html">
            Sahan Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>26</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spotlightpa.html">
            Spotlight PA
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        83
    </td>
  </tr>
  
  <tr>
    <td>28</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voiceofsandiego.html">
            Voice of San Diego
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>29</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/populardiario.html">
            Diario Popular
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        82
    </td>
  </tr>
  
  <tr>
    <td>30</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/beaconjournal.html">
            Akron Beacon Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>30</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/themarkup.html">
            The Markup
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        81
    </td>
  </tr>
  
  <tr>
    <td>32</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/onlineathens.html">
            Athens Banner-Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>32</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/laprensaar.html">
            La Prensa
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        80
    </td>
  </tr>
  
  <tr>
    <td>34</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reporternews.html">
            Abilene Reporter News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>34</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enquirer.html">
            Cincinnati Enquirer
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>34</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/htrnews.html">
            Herald Times Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>34</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thelensnola.html">
            Lens
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>34</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mlnow.html">
            Mission Local
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        79
    </td>
  </tr>
  
  <tr>
    <td>39</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thebafflermag.html">
            Baffler
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/postcrescent.html">
            Appleton Post Crescent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/azcentral.html">
            Arizona Republic
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aug_chronicle.html">
            Augusta Chronicle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/detroitnews.html">
            Detroit News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/courierjournal.html">
            Louisville Courier-Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lubbockonline.html">
            Lubbock Avalanche-Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theoklahoman_.html">
            Oklahoman
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/stevenspointjrl.html">
            Stevens Point Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spectrumnews.html">
            The Spectrum
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/usatoday.html">
            USA Today
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>40</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wausauherald.html">
            Wausau Daily Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        78
    </td>
  </tr>
  
  <tr>
    <td>51</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dmregister.html">
            Des Moines Register
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>51</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lemonde_en.html">
            Le Monde in English
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>51</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reveal.html">
            Reveal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>51</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vcstar.html">
            Ventura County Star
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>55</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/clarionledger.html">
            Clarion Ledger
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>55</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/marylandmatters.html">
            Maryland Matters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>55</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mydesert.html">
            The Desert Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        77
    </td>
  </tr>
  
  <tr>
    <td>58</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/commondreams.html">
            Common Dreams
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>59</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amestribnews.html">
            Ames Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>59</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lemondefr.html">
            Le Monde
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>59</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sjspotlight.html">
            San José Spotlight
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>59</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/savannahnow.html">
            Savannah Morning News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        76
    </td>
  </tr>
  
  <tr>
    <td>63</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gbpressgazette.html">
            Green Bay Press-Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>63</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/injusticewatch.html">
            Injustice Watch
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>63</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/johncombest.html">
            John Combest
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>63</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yorkdispatch.html">
            York Dispatch
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        75
    </td>
  </tr>
  
  <tr>
    <td>67</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedailyclimate.html">
            Daily Climate
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>67</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elpasotimes.html">
            El Paso Times
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>67</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/presscitizen.html">
            Iowa City Press-Citizen
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        74
    </td>
  </tr>
  
  <tr>
    <td>70</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/evroundtable.html">
            Evanston RoundTable
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>70</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/crucessunnews.html">
            Las Cruces Sun News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>70</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/orcapchronicle.html">
            Oregon Capital Chronicle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        73
    </td>
  </tr>
  
  <tr>
    <td>73</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gainesvillesun.html">
            Gainesville Sun
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>73</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jewishcurrents.html">
            Jewish Currents
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>75</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/inthesetimesmag.html">
            In These Times 
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>75</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/msn.html">
            MSN
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>75</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rnz_news.html">
            RNZ
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        72
    </td>
  </tr>
  
  <tr>
    <td>78</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/source_nm.html">
            Source New Mexico
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        71
    </td>
  </tr>
  
  <tr>
    <td>79</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/arknewsorg.html">
            Arkansas Nonprofit News Network
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>79</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cpublicpress.html">
            Carolina Public Press
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>79</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eastlansinginfo.html">
            East Lansing Info
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>79</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/prismreports.html">
            Prism
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        70
    </td>
  </tr>
  
  <tr>
    <td>83</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/flphoenixnews.html">
            Florida Phoenix
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>84</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atlciviccircle.html">
            Atlanta Civic Circle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>84</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mo_independent.html">
            Missouri Independent
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        69
    </td>
  </tr>
  
  <tr>
    <td>86</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/arizcir.html">
            Arizona Center for Investigative Reporting
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>86</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bonginoreport.html">
            Bongino Report
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>86</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dagbladet.html">
            Dagbladet
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>86</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/marfaradio.html">
            Marfa Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        68
    </td>
  </tr>
  
  <tr>
    <td>90</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/teamtrace.html">
            Trace
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        67
    </td>
  </tr>
  
  <tr>
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/avherald.html">
            Aviation Herald
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theblaze.html">
            Blaze
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dronedj.html">
            Drone DJ
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nikkei.html">
            Nikkei
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/objectivejrn.html">
            Objective
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>91</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vgnett.html">
            VG
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        66
    </td>
  </tr>
  
  <tr>
    <td>97</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gawker.html">
            Gawker
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        65
    </td>
  </tr>
  
  <tr>
    <td>97</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pucknews.html">
            Puck
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        65
    </td>
  </tr>
  
  <tr>
    <td>99</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kystandard.html">
            Kentucky Standard
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        64
    </td>
  </tr>
  
  <tr>
    <td>100</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bcn_foundation.html">
            Local News Matters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        64
    </td>
  </tr>
  
  <tr>
    <td>101</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/irishcathnews.html">
            Irish Catholic
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/discovermag.html">
            Discover
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/freethinkmedia.html">
            Freethink
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ilanganewspaper.html">
            Ilanga
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nrk.html">
            NRK
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nationaljournal.html">
            National Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pinjnews.html">
            Pittsburgh Institute for Nonprofit Journalism
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rtenews.html">
            RTE
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        63
    </td>
  </tr>
  
  <tr>
    <td>109</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/apmreports.html">
            APM Reports
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        62
    </td>
  </tr>
  
  <tr>
    <td>109</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chicagoreporter.html">
            Chicago Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        62
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gcm_nf.html">
            Austin Weekly News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/calmatters.html">
            Calmatters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chesbayjournal.html">
            Chesapeake Bay Journal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/engadget.html">
            Engadget
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hellgateny.html">
            Hell Gate
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/niemanlab.html">
            Nieman Lab
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>111</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/media_outlier.html">
            Outlier Media
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        61
    </td>
  </tr>
  
  <tr>
    <td>118</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/segodnya_online.html">
            Segodnya
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>119</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aspenpubradio.html">
            Aspen Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>119</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/france24.html">
            FRANCE 24
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>119</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mongabay.html">
            Mongabay
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>119</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/semafor.html">
            Semafor
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        60
    </td>
  </tr>
  
  <tr>
    <td>123</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mmfa.html">
            Media Matters
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/the74.html">
            74th
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chicago_reader.html">
            Chicago Reader
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/conversationus.html">
            Conversation U.S.
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ewnreporter.html">
            Eyewitness News
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>124</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/france24_en.html">
            France 24 English
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        59
    </td>
  </tr>
  
  <tr>
    <td>129</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jstor_daily.html">
            JSTOR Daily
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        58
    </td>
  </tr>
  
  <tr>
    <td>129</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/protocol.html">
            Protocol
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        58
    </td>
  </tr>
  
  <tr>
    <td>131</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/19thnews.html">
            19th
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>131</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/brecktexan.html">
            Breckenridge Texan
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>131</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jagrannews.html">
            Dainik Jagram
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>131</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/delawarepublic.html">
            Delaware Public Media
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>131</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mashable.html">
            Mashable
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>131</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rfi.html">
            RFI
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        57
    </td>
  </tr>
  
  <tr>
    <td>137</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/occrp.html">
            Organized Crime and Corruption Reporting Project
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>138</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/charlie_hebdo_.html">
            Charlie Hebdo
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>139</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enewsofnepal.html">
            Nepal Samacharpatra
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>139</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oaklandside.html">
            The Oaklandside
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>139</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kvpr.html">
            Valley Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        56
    </td>
  </tr>
  
  <tr>
    <td>142</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/indiancountry.html">
            Indian Country Today
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>142</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/truthout.html">
            Truthout
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>144</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/desert_oracle.html">
            Desert Oracle
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>144</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/repubblica.html">
            Repubblica
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>144</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sternde.html">
            Stern
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>144</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/texastribune.html">
            Texas Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>144</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thecityny.html">
            The City
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>144</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thesanews.html">
            The South African
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        55
    </td>
  </tr>
  
  <tr>
    <td>150</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/powerlineus.html">
            Power Line
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jessicavalenti.html">
            All in Her Head
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dainikbhaskar.html">
            Dainik Bhaskar
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kgounews.html">
            KGOU
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mediapart.html">
            Mediapart
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsweek.html">
            Newsweek
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/osnepalnews.html">
            OSNepal
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pointreyeslight.html">
            Point Reyes Light
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thepublicsource.html">
            Public Source
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sz.html">
            Süddeutsche Zeitung
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>151</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tprnews.html">
            Texas Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        54
    </td>
  </tr>
  
  <tr>
    <td>161</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/civio.html">
            Civio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        53
    </td>
  </tr>
  
  <tr>
    <td>161</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/democracynow.html">
            Democracy Now!
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        53
    </td>
  </tr>
  
  <tr>
    <td>161</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oldiemagazine.html">
            Oldie
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        53
    </td>
  </tr>
  
  <tr>
    <td>161</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sgfcitizen.html">
            Springfield Daily Citizen
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        53
    </td>
  </tr>
  
  <tr>
    <td>161</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/studyfindsorg.html">
            Study Finds
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        53
    </td>
  </tr>
  
  <tr>
    <td>161</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/inewsource.html">
            inewsource
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        53
    </td>
  </tr>
  
  <tr>
    <td>167</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltimorebrew.html">
            Baltimore Brew
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        52
    </td>
  </tr>
  
  <tr>
    <td>168</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/propublica.html">
            ProPublica
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>168</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dcexaminer.html">
            Washington Examiner
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>170</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/alternet.html">
            AlterNet
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>170</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rawstory.html">
            Raw Story
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>170</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/khabarkendra.html">
            Sanchar Kendra
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>170</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/umd_sbs.html">
            Stories Beneath the Shell
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>170</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ur_ninja.html">
            Unicorn Riot
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        51
    </td>
  </tr>
  
  <tr>
    <td>175</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/labornotes.html">
            Labor Notes
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>175</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/novayagazeta_eu.html">
            Novaya Gazeta
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>177</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/agenciapublica.html">
            Agência Pública
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>177</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ashlandornews.html">
            Ashland.news
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>177</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/btno.html">
            Bergens Tidende
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>177</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/minnpost.html">
            MinnPost
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>177</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtfreepress.html">
            Montana Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>177</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nhpr.html">
            New Hampshire Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: orange; color: white;">
        50
    </td>
  </tr>
  
  <tr>
    <td>183</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bariweiss.html">
            Common Sense
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>183</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/flintbeat.html">
            Flint Beat
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>183</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thegrio.html">
            Grio
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>183</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hiddencityphila.html">
            Hidden City Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>183</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theintercept.html">
            Intercept
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>188</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/airlinereporter.html">
            Airline Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>188</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbsnews.html">
            CBS News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>188</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedispatch.html">
            Dispatch
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>188</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/journalsentinel.html">
            Milwaukee Journal Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>188</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/observatorio.html">
            Observatório da Imprensa
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        49
    </td>
  </tr>
  
  <tr>
    <td>193</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/le_figaro.html">
            Le Figaro
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>193</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/setopati.html">
            Setopati
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>195</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/arthasarokar.html">
            Artha Sarokar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>195</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/buckscoherald.html">
            Bucks County Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>195</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/revistaistoe.html">
            ISTOÉ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>195</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcur.html">
            KCUR
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>195</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ycitynewsonline.html">
            Y-City News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        48
    </td>
  </tr>
  
  <tr>
    <td>200</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/statesman.html">
            Austin Statesman
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>200</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bulwarkonline.html">
            Bulwark
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>200</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ft.html">
            Financial Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>200</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kut.html">
            KUT
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bfmtv.html">
            BFMTV
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cityjournal.html">
            City Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mailonline.html">
            Daily Mail
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyyonder.html">
            Daily Yonder
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dainik_online.html">
            Danik Online
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/michigandaily.html">
            Michigan Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/naya_patrika.html">
            Naya Patrika
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/prisonjourn.html">
            Prison Journalism Project
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reason.html">
            Reason
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/salon.html">
            Salon
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>204</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/zeitonline.html">
            Zeit
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        47
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baynature.html">
            Bay Nature
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/capitalandmain.html">
            Capital & Main
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/colabnewsco.html">
            Colorado News Collaborative
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/forbes.html">
            Forbes
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/iowapublicradio.html">
            Iowa Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thejournal_ie.html">
            Journal.ie
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/karobar_daily.html">
            Karobar Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lanacion.html">
            La Nacion
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lesoir.html">
            Le Soir
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>215</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/venturebeat.html">
            VentureBeat
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        46
    </td>
  </tr>
  
  <tr>
    <td>225</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eveningstandard.html">
            Evening Standard
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>225</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thephilacitizen.html">
            Philadelphia Citizen
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theatlantic.html">
            Atlantic
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/business.html">
            Bloomberg
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cronica.html">
            Crónica
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enews.html">
            E!
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/macrumors.html">
            MacRumors
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nhk_news.html">
            NHK
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wsbtv.html">
            WSB-TV
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>227</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/washtimes.html">
            Washington Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        45
    </td>
  </tr>
  
  <tr>
    <td>235</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lastampa.html">
            La Stampa
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>236</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jerusalem_post.html">
            Jerusalem Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>236</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scottishsun.html">
            Scottish Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amazoniaagencia.html">
            Agência Amazônia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dallasfreepress.html">
            Dallas Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theinterceptbr.html">
            Intercept Brazil
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jacobin.html">
            Jacobin
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpbs.html">
            KPBS
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsday.html">
            Newsday
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/politifact.html">
            Politifact 
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reporte_indigo.html">
            Reporte Índigo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>238</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vtdigger.html">
            VT Digger
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        44
    </td>
  </tr>
  
  <tr>
    <td>247</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/platformer.html">
            Platformer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>247</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thesun.html">
            The Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amarujalanews.html">
            Amar Ujala
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltbeat.html">
            Baltimore Beat
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bhamwatch.html">
            BirminghamWatch
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/borderless_mag.html">
            Borderless
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cqnow.html">
            CQ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chalkbeat.html">
            Chalkbeat
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nextcityorg.html">
            Next City
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/omelete.html">
            Omelete
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/southsideweekly.html">
            South Side Weekly
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yahoonews.html">
            Yahoo! News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>249</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amabhungane.html">
            amaBhungane
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        43
    </td>
  </tr>
  
  <tr>
    <td>260</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/live_hindustan.html">
            Hindustan
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>260</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sbtnews.html">
            SBT news
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>260</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voiceofoc.html">
            Voice of OC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/diariope.html">
            Diario de Pernambuco
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/el_pais.html">
            El Pais
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpcwradio.html">
            KPCW
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/levernews.html">
            Lever
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedbk.html">
            The Diamondback
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telegraph.html">
            The Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>263</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/franceinfo.html">
            franceinfo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        42
    </td>
  </tr>
  
  <tr>
    <td>270</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newscientist.html">
            New Scientist
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/adnkronos.html">
            Adnkronos
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/billy_penn.html">
            Billy Penn
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bklyner.html">
            Bklyner
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailysunsa.html">
            Daily Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/flatwaterfreep.html">
            Flatwater Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/highcountrynews.html">
            High Country News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/humansofny.html">
            Humans of New York
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/izvestia_ru.html">
            Izvestia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lataco.html">
            L.A. Taco
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/maroelamedia.html">
            Maroela Media
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/netwerk24.html">
            Netwerk24
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>271</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/seikyoofficial.html">
            Seikyo Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        41
    </td>
  </tr>
  
  <tr>
    <td>283</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/20minutes.html">
            20 Minutes
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>284</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cookpolitical.html">
            Cook Political Report
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>284</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/crikey_news.html">
            Crikey
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>284</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ilisolezwe.html">
            I'solezwe lesiXhosa
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>284</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ocmediaorg.html">
            Open Caucasus Media
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>284</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/people.html">
            People
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>284</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/votebeatus.html">
            Votebeat
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        40
    </td>
  </tr>
  
  <tr>
    <td>290</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/metropoles.html">
            Metrópoles
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        39
    </td>
  </tr>
  
  <tr>
    <td>290</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/parisreview.html">
            Paris Review
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        39
    </td>
  </tr>
  
  <tr>
    <td>292</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc_es.html">
            ABC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        39
    </td>
  </tr>
  
  <tr>
    <td>292</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eenewsupdates.html">
            E&E News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        39
    </td>
  </tr>
  
  <tr>
    <td>292</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ek_business.html">
            Ekantipur
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        39
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/binjreports.html">
            Boston Institute for Nonprofit Journalism
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnsmd.html">
            Capital News Service
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chequeado.html">
            Chequeado
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/clarincom.html">
            Clarín
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/claytoncrescent.html">
            Clayton Crescent
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ctmirror.html">
            Connecticut Mirror
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/correio.html">
            Correio Braziliense
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/moreperfectus.html">
            More Perfect Union
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nysfocus.html">
            New York Focus
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/standardex.html">
            Ogden Standard-Examiner
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/opensecretsdc.html">
            OpenSecrets
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>295</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/punchbowlnews.html">
            Punchbowl News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        38
    </td>
  </tr>
  
  <tr>
    <td>307</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/humanevents.html">
            Human Events
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnnbrasil.html">
            CNN Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/deadspin.html">
            Deadspin
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/progressoms.html">
            O Progresso
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/proceso.html">
            Proceso
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/quillette.html">
            Quillette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/unichicago.html">
            Univision Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>308</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/enca.html">
            eNCA
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        37
    </td>
  </tr>
  
  <tr>
    <td>315</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rgvfox.html">
            Fox South Texas
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>315</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/iol.html">
            Independent Online
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>317</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bleepincomputer.html">
            BleepingComputer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>317</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gpbnews.html">
            Georgia Public Broadcasting
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>317</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gizmodo.html">
            Gizmodo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>317</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/statnews.html">
            STAT
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>317</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vryeweekblad.html">
            Vrye Weekblad
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>317</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/zerohedge.html">
            ZeroHedge
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        36
    </td>
  </tr>
  
  <tr>
    <td>323</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jijicom.html">
            Jiji
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>323</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voguemagazine.html">
            Vogue
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bbc.html">
            BBC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theblock__.html">
            Block
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/deadline.html">
            Deadline
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/deshsanchar1.html">
            Deshsanchar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/el_timpano.html">
            El Tímpano
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/getfandom.html">
            Fandom
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lavanguardia.html">
            La Vanguardia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lookoutscruz.html">
            Lookout Santa Cruz
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/morningbrew.html">
            Morning Brew
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/online_khabar.html">
            Online Khabar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newshour.html">
            PBS News Hour
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/portlandmercury.html">
            Portland Mercury
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/prabhatkhabar.html">
            Prabhat Khabar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theroot.html">
            Root
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>325</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sludge.html">
            Sludge
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        35
    </td>
  </tr>
  
  <tr>
    <td>340</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/indiatoday.html">
            India Today
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bettergov.html">
            Better Government Association
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbschicago.html">
            CBS Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cpipr.html">
            Centro de Periodismo Investigativo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/corriere.html">
            Corriere della Sera
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cronistacom.html">
            Cronista
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/defectormedia.html">
            Defector
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lavozdegalicia.html">
            La Voz de Galicia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mainemonitor.html">
            Maine Monitor
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pulitzercenter.html">
            Pulitzer Center
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reforma.html">
            Reforma
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sjvwater.html">
            SJV Water
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>341</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/georgiastraight.html">
            The Georgia Straight
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        34
    </td>
  </tr>
  
  <tr>
    <td>353</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/florida_bulldog.html">
            Florida Bulldog
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>353</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/libe.html">
            Libération
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>353</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/strikewave.html">
            Strikewave
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chinatimes.html">
            China Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cjr.html">
            Columbia Journalism Review
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/derspiegel.html">
            Der Spiegel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/larazon_es.html">
            La Razón
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/news12nj.html">
            News12NJ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spacedotcom.html">
            Space.com
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spectator.html">
            Spectator
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/stlpublicradio.html">
            St. Louis Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eltiempo.html">
            Tiempo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voxdotcom.html">
            Vox
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hromadskeua.html">
            hromadske
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>356</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theipaper.html">
            i
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        33
    </td>
  </tr>
  
  <tr>
    <td>368</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/belt_magazine.html">
            Belt Magazine
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        32
    </td>
  </tr>
  
  <tr>
    <td>368</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eyethunewskzn.html">
            Eyethu KwaZulu-Natal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        32
    </td>
  </tr>
  
  <tr>
    <td>368</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gatewaypundit.html">
            Gateway Pundit
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        32
    </td>
  </tr>
  
  <tr>
    <td>368</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/grist.html">
            Grist
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        32
    </td>
  </tr>
  
  <tr>
    <td>368</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lajornadaonline.html">
            Jornada
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        32
    </td>
  </tr>
  
  <tr>
    <td>368</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wbur.html">
            WBUR
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        32
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/news_letter.html">
            Belfast News Letter
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>374</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mdr_san.html">
            MDR Sachsen-Anhalt
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/beltel.html">
            Belfast Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dnyuzcom.html">
            Dnyuz
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elperiodico.html">
            El Periodico
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/khnews.html">
            Kaiser Health News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/knockdotla.html">
            Knock.LA
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/prensagrafica.html">
            Prensa Grafica
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uninoticias.html">
            Univision News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>376</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/news24.html">
            news24
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        31
    </td>
  </tr>
  
  <tr>
    <td>384</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ljworld.html">
            Lawrence Journal-World
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/airwaysmagazine.html">
            Airways
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aristeguionline.html">
            Aristegui Noticias
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltimoremag.html">
            Baltimore Magazine
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chesscom.html">
            Chess.com
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dagsavisen.html">
            Dagsavisen
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eater.html">
            Eater
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/harpers.html">
            Harper’s
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hotairblog.html">
            HotAir
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spotlight4dc.html">
            Spotlight DC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/unherd.html">
            UnHerd
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/variety.html">
            Variety
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vicenews.html">
            Vice News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>385</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/g1.html">
            g1
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        30
    </td>
  </tr>
  
  <tr>
    <td>398</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedailybeast.html">
            Daily Beast
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>398</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/npr.html">
            NPR
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ajenglish.html">
            Al Jazeera English
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/decisiondeskhq.html">
            Decision Desk HQ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/denverite.html">
            Denverite
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/documentedny.html">
            Documented
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ketv.html">
            KETV NewsWatch 7
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lex18news.html">
            LEX 18 News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lanuevaespana.html">
            La Nueva España
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/le_parisien.html">
            Le Parisien
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/meduzaproject.html">
            Meduza
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/miamiherald.html">
            Miami Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nytimes.html">
            New York Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theonion.html">
            Onion
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/townhallcom.html">
            Townhall
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wbez.html">
            WBEZ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/whas11.html">
            WHAS11 News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/freebeacon.html">
            Washington Free Beacon
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>400</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uhmallorca.html">
            Última Hora
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>417</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nebpublicmedia.html">
            Nebraska Public Media
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/12newsnow.html">
            12 News Now
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/axios.html">
            Axios
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/civic_lex.html">
            CivicLex
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailycaller.html">
            Daily Caller
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elmundoes.html">
            El Mundo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/flightglobal.html">
            Flight Global
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/folha.html">
            Folha de S.Paulo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/diarioonline.html">
            Fortaleza
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/independent_ie.html">
            Independent.ie
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpcc.html">
            KPCC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/laist.html">
            LAist
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lp_lapresse.html">
            La Presse
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>418</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/motherjones.html">
            Mother Jones
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        28
    </td>
  </tr>
  
  <tr>
    <td>431</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/timesofindia.html">
            Times of India
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abcnews.html">
            ABC News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aftenposten.html">
            Aftenposten
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/blockclubchi.html">
            Block Club Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/capitalb_atl.html">
            Capital B Atlanta
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elfinanciero_mx.html">
            Financiero
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/irishtimes.html">
            Irish Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jezebel.html">
            Jezebel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thescotsman.html">
            Scotsman
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telemundochi.html">
            Telemundo Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/texasobserver.html">
            Texas Observer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/independent.html">
            The Independent
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>432</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thewrap.html">
            Wrap
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        27
    </td>
  </tr>
  
  <tr>
    <td>444</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/green_footballs.html">
            Little Green Footballs
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>444</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thelasentinel.html">
            Los Angeles Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>444</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/verticalmag.html">
            Vertical
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/agenciabrasil.html">
            Agência Brasil
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/andscape.html">
            Andscape
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theathletic.html">
            Athletic
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/blaw.html">
            Bloomberg Law
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbcnews.html">
            CBC News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cuestion_p.html">
            Cuestion Publica
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/huffpostcanada.html">
            HuffPost Canada
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/huffpost.html">
            Huffington Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newstribune.html">
            Jefferson City News Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atarde.html">
            Jornal A Tarde
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/khou.html">
            KHOU
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nybooks.html">
            New York Review of Books
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oregonian.html">
            Oregonian
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pagina12.html">
            Página/12
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/berkeleyside.html">
            The Berkeleyside
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>447</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/windowscentral.html">
            Windows Central
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        26
    </td>
  </tr>
  
  <tr>
    <td>463</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sputnikint.html">
            Sputnik
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/9news.html">
            9NEWS Denver
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ap.html">
            Associated Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cprnews.html">
            Colorado Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/diariopopularrs.html">
            Diário Popular
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/excelsior.html">
            Excélsior
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fox12oregon.html">
            Fox 12 Oregon
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foxsports.html">
            Fox Sports
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcrg.html">
            KCRG
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/latimes.html">
            Los Angeles Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mailandguardian.html">
            Mail & Guardian
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/themendovoice.html">
            Mendoncino Voice
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mstodaynews.html">
            Mississippi Today
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcbayarea.html">
            NBC Bay Area
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcchicago.html">
            NBC Chicago
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcdfw.html">
            NBC DFW
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcphiladelphia.html">
            NBC10 Philadelphia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rianru.html">
            RIA Novosti
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/taskandpurpose.html">
            Task & Purpose
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/brunswick_news.html">
            The Brunswick News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theinformation.html">
            The Information
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uolnoticias.html">
            UOL Notícias
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wkyt.html">
            WKYT
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/worldnetdaily.html">
            WND News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wtoc11.html">
            WTOC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wtvm.html">
            WTVM News Leader 9
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/zn_ua.html">
            ZN.UA
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>464</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/zerohora.html">
            Zero Hora
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        25
    </td>
  </tr>
  
  <tr>
    <td>491</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/king5seattle.html">
            KING5
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/9to5mac.html">
            9to5Mac
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc7.html">
            ABC7
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbs46.html">
            CBS46
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnet.html">
            CNET
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/canopyatl.html">
            Canopy Atlanta
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/coindesk.html">
            CoinDesk
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailymirror.html">
            Daily Mirror
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gothamist.html">
            Gothamist
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/icijorg.html">
            ICIJ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lasvegassun.html">
            Las Vegas Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wrdw_wagt.html">
            News 12 NBC 26
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/peninsupress.html">
            Peninsula Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rajdhani_daily.html">
            Rajdhani Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spacenews_inc.html">
            Space News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/time.html">
            TIME
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/usnews.html">
            U.S. News & World Report
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kpr_frankfort.html">
            WFPL
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>492</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wplglocal10.html">
            WPLG Local 10 News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        24
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foreignpolicy.html">
            Foreign Policy
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/justthenews.html">
            Just the News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lentaruofficial.html">
            Lenta.ru
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/milenio.html">
            Milenio
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/perfilcom.html">
            Perfil
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sdut.html">
            San Diego Union Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/toacornnews.html">
            Thousand Oaks Acorn
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>510</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/udn.html">
            United Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/13wmaznews.html">
            13WMAZ News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/6abc.html">
            6abc
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc7newsbayarea.html">
            ABC7 News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abqbizfirst.html">
            Albuquerque Business First
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/avlwatchdog.html">
            Asheville Watchdog
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/austinchronicle.html">
            Austin Chronicle
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltbizonline.html">
            Baltimore Business Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/brooklynpaper.html">
            Brooklyn Paper
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbs7news.html">
            CBS7
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyherald.html">
            Daily Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dallasbiznews.html">
            Dallas Business Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fortworthreport.html">
            Fort Worth Report
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fortunemagazine.html">
            Fortune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gazetadopovo.html">
            Gazeta do Povo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/infoamazoniabr.html">
            InfoAmazonia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/komunews.html">
            KOMU
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mdjonline.html">
            Marietta Daily Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtlgazette.html">
            Montreal Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nbcnews.html">
            NBC News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/natgeo.html">
            National Geographic
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/opovo.html">
            O Povo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reuters.html">
            Reuters
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/searchlightnm.html">
            Searchlight New Mexico
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sowetanlive.html">
            Sowetan
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/spokesmanreview.html">
            Spokesman-Review
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sinow.html">
            Sports Illustrated
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/timesherald.html">
            The Newnan Times-Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/timeslive.html">
            TimesLIVE
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/voicesofbay.html">
            Voices of Monterey Bay
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/walbnews10.html">
            WALB News 10
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>518</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/yahoofinance.html">
            Yahoo Finance
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        23
    </td>
  </tr>
  
  <tr>
    <td>549</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/daily_record.html">
            Daily Record
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wowt6news.html">
            6 News WOWT
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/12khari.html">
            Baahrakhari
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/badger_project_.html">
            Badger Project
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltfishbowl.html">
            Baltimore Fishbowl
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bleacherreport.html">
            Bleacher Report
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bosbizjournal.html">
            Boston Business Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/coloradosun.html">
            Colorado Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/el_universal_mx.html">
            El Universal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/em_com.html">
            Estado de Minas
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fdrlst.html">
            Federalist
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/globalnews.html">
            Global News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/civilbeat.html">
            Honolulu Civil Beat
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/laopinioncoruna.html">
            La Opinión A Coruña
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/msnbc.html">
            MSNBC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mtvnews.html">
            MTV News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nationalpost.html">
            National Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nepalkhabar24.html">
            Nepal Khabar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nettavisen.html">
            Nettavisen
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nypost.html">
            New York Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/therealnews.html">
            Real News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wabenews.html">
            WABE News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wave3news.html">
            WAVE
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/whyynews.html">
            WHYY
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>550</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wral.html">
            WRAL
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        22
    </td>
  </tr>
  
  <tr>
    <td>574</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wsj.html">
            Wall Street Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/atlblog.html">
            Above the Law
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/asahi.html">
            Asahi Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aviationweek.html">
            Aviation Week
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/buzzfeednews.html">
            Buzzfeed News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/suntimes.html">
            Chicago Sun-Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailypenn.html">
            Daily Penn
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailytarheel.html">
            Daily Tarheel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/deseret.html">
            Deseret News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kccinews.html">
            KCCI
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/3newsnowomaha.html">
            KMTV 3 News Now
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lrb.html">
            London Review of Books
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/techreview.html">
            MIT Technology Review
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rpbreakingnews.html">
            Rajasthan Patrika
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theriotimes.html">
            Rio Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sankei_news.html">
            Sankei Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/seattletimes.html">
            Seattle Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/shillsalmanac.html">
            South Hills Almanac
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/guardian.html">
            The Guardian
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thenation.html">
            The Nation
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thetriibe.html">
            The TriiBE
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vancouversun.html">
            Vancouver Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>575</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/weatherchannel.html">
            Weather Channel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        21
    </td>
  </tr>
  
  <tr>
    <td>597</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theobserver.html">
            Charlotte Observer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>597</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/usweekly.html">
            Us Weekly
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/appalachia100.html">
            100 Days in Appalachia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc.html">
            ABC News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aspendailynews.html">
            Aspen Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theaspentimes.html">
            Aspen Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnbc.html">
            CNBC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/citylimitsnews.html">
            City Limits
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nydailynews.html">
            Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/realdailywire.html">
            Daily Wire
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thedepaulia.html">
            DePaulia
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telegraphherald.html">
            Dubuque Telegraph Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/epochtimes.html">
            Epoch Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fairmediawatch.html">
            Fairness and Accuracy in Reporting
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/financialpost.html">
            Financial Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/hartfordcourant.html">
            Hartford Courant
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mddailyrecord.html">
            Maryland Daily Record
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nymag.html">
            New York
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ottawacitizen.html">
            Ottawa Citizen
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/politico.html">
            POLITICO
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pittsburghpg.html">
            Pittsburgh Post-Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/poder360.html">
            Poder 360
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>599</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/postandcourier.html">
            Post and Courier
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        20
    </td>
  </tr>
  
  <tr>
    <td>620</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tb_times.html">
            Tampa Bay Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/11alivenews.html">
            11Alive News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc15.html">
            ABC15 Arizona
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/annapurna_post.html">
            Annapurna Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/calgaryherald.html">
            Calgary Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailymaverick.html">
            Daily Maverick
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/denverchannel.html">
            Denver7
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gridnews.html">
            Grid
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/neheadlines.html">
            Hardin News-Enterprise
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/imagekhabar.html">
            Imagekhabar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kyivindependent.html">
            Kyiv Independent
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ledevoir.html">
            Le Devoir
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newrepublic.html">
            New Republic
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ottumwacourier.html">
            Ottumwa Courier
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rt_com.html">
            RT
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tmz.html">
            TMZ
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/texasmonthly.html">
            Texas Monthly
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thecut.html">
            The Cut
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/globeandmail.html">
            The Globe and Mail
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thetorontosun.html">
            Toronto Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/verge.html">
            Verge
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wfaa.html">
            WFAA
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/washingtonpost.html">
            Washington Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chess24com.html">
            chess24
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/okayplayer.html">
            okayplayer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>621</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/revistapiaui.html">
            revista piauí
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        19
    </td>
  </tr>
  
  <tr>
    <td>646</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/knprnews.html">
            Nevada Public Radio
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>646</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/slate.html">
            Slate
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/la_ser.html">
            Cadena SER
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cityandstateny.html">
            City & State New York
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailykos.html">
            Daily Kos
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/discovery.html">
            Discovery
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/leadertelegram.html">
            Eau Claire Leader-Telegram
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/edsource.html">
            EdSource
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fivethirtyeight.html">
            FiveThirtyEight
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fla_pol.html">
            Florida Politics
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foxnews.html">
            Fox News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/frednewspost.html">
            Frederick News-Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gwinnettdaily.html">
            Gwinnett Daily Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcrw.html">
            KCRW
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/msfreepress.html">
            Mississippi Free Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thepearlpost.html">
            Pearl Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/punjabkesari.html">
            Punjab Kesari
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/teenvogue.html">
            Teen Vogue
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>648</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wired.html">
            Wired
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        18
    </td>
  </tr>
  
  <tr>
    <td>665</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gazettedotcom.html">
            Cedar Rapids Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>665</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/joplinglobe.html">
            Joplin Globe
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bild.html">
            Bild
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chunichi_denhen.html">
            Chunichi Shimbun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/comissourian.html">
            Columbia Missourian
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/estadao.html">
            Estadão
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/foxla.html">
            FOX 11 Los Angeles
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fox29philly.html">
            FOX29 Philly
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fastcompany.html">
            Fast Company
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fox5ny.html">
            Fox 5 New York
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/irishexaminer.html">
            Irish Examiner
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/israelhayomeng.html">
            Israel Hayom
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kvue.html">
            KVUE
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kerrville.html">
            Kerrville Daily Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lokaantar.html">
            Lokantar
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mvsnoticias.html">
            MVS Noticias
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nro.html">
            National Review
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oxciej.html">
            Oxpeckers
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pitchfork.html">
            Pitchfork
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/quintoelab.html">
            Quinto Elemento Lab
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thenewmexican.html">
            Santa Fe New Mexican
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/valoreconomico.html">
            Valor Econômico
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vulture.html">
            Vulture
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wjbf.html">
            WJBF
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>667</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jn_japanese.html">
            Yomiuri shinbun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        17
    </td>
  </tr>
  
  <tr>
    <td>690</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/firstthingsmag.html">
            First Things
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>690</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ringer.html">
            Ringer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/1newsnz.html">
            1News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/41nbc.html">
            41NBC / WMGT
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/albany_herald.html">
            Albany Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tw_nextmedia.html">
            Apple Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/arstechnica.html">
            Ars Technica
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bmtenterprise.html">
            Beaumont Enterprise
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/berkshireeagle.html">
            Berkshire Eagle
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/boingboing.html">
            Boing Boing
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bonappetit.html">
            Bon Appetit
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chessbase.html">
            ChessBase
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/chicagotribune.html">
            Chicago Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/csgazette.html">
            Colorado Springs Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dcnepal.html">
            DC Nepal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dwnews.html">
            DW
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fi2w.html">
            Feet in 2 Worlds
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/fox5atlanta.html">
            Fox 5 Atlanta
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gazetaru.html">
            Gazeta.Ru
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/houstonchron.html">
            Houston Chronicle
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kxan_news.html">
            KXAN
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/heraldleader.html">
            Lexington Herald-Leader
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ltntw.html">
            Liberty Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lokpath.html">
            Lokpath
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mcgilldaily.html">
            McGill Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mwtnews.html">
            Midland Reporter-Telegram
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nzherald.html">
            NZ Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jornaloglobo.html">
            O Globo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/phillyinquirer.html">
            Philadelphia Inquirer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rollcall.html">
            Roll Call
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/expressnews.html">
            San Antonio Express-News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thehill.html">
            The Hill
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tiftongazette1.html">
            Tifton Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tucsonsentinel.html">
            Tucson Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ukrinform.html">
            Ukrinform
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/vanityfair.html">
            Vanity Fair
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wgnnews.html">
            WGN
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wnyt.html">
            WNYT NewsChannel 13
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wrblnews3.html">
            WRBL News 3
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>692</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wttw.html">
            WTTW
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        16
    </td>
  </tr>
  
  <tr>
    <td>730</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyecho.html">
            Daily Echo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>730</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sfchronicle.html">
            San Francisco Chronicle
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wncn.html">
            CBS 17
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cnn.html">
            CNN
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dn_no.html">
            Dagens Næringsliv
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/espn.html">
            ESPN
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wfxl.html">
            Fox 31 WFXL-TV
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gradynewsource.html">
            Grady Newsource
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ktla.html">
            KTLA
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mercnews.html">
            Mercury News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nagarik_news.html">
            Nagarik News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newyorker.html">
            New Yorker
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kvoa.html">
            News 4
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newschannelne.html">
            News Channel Nebraska
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ntdaily.html">
            North Texas Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/openvallejo.html">
            Open Vallejo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/phillytrib.html">
            Philadelphia Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/qz.html">
            Quartz
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/cbnoficial.html">
            Rádio CBN
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scotusblog.html">
            SCOTUS Blog
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scalawagmag.html">
            Scalawag
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/nzstuff.html">
            Stuff
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/techcrunch.html">
            TechCrunch
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/mcall.html">
            The Morning Call
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theweek.html">
            The Week
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/torontostar.html">
            Toronto Star
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wdrbnews.html">
            WDRB News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wnyc.html">
            WNYC
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>732</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kansasdotcom.html">
            Wichita Eagle
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        15
    </td>
  </tr>
  
  <tr>
    <td>759</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/startelegram.html">
            Fort Worth Star-Telegram
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/100reporters.html">
            100Reporters
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/14eastmag.html">
            14 East
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ainonline.html">
            Aviation International News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bakersfieldcali.html">
            Bakersfield Californian
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bgdailynews.html">
            Bowling Green Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/codaily.html">
            Central Oregon Daily
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elcorreo_com.html">
            El Correo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/gothamgazette.html">
            Gotham Gazettee
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/the_ccij.html">
            InvestigateMidwest
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/news3lv.html">
            KSNV News 3
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ny1.html">
            NY1
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ncronline.html">
            National Catholic Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsobserver.html">
            News & Observer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>760</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sbnation.html">
            SB Nation
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        14
    </td>
  </tr>
  
  <tr>
    <td>774</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcstar.html">
            Kansas City Star
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>774</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sacbee_news.html">
            Sacramento Bee
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>774</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thehilltimes.html">
            The Hill Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aviationnews.html">
            AeroTime Hub
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theappeal.html">
            Appeal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltimorebanner.html">
            Baltimore Banner
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bostonglobe.html">
            Boston Globe
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theeconomist.html">
            Economist
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kqed.html">
            KQED
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scotnational.html">
            National
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/redstate.html">
            RedState
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newspressnow.html">
            St. Joseph News Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ledgerenquirer.html">
            The Ledger-Enquirer
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tylerpaper.html">
            Tyler Morning Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>777</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uvaldenews.html">
            Uvalde News-Leader
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        13
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ajc.html">
            Atlanta Journal-Constitution
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bloombergjapan.html">
            Bloomberg Japan
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ciceronoticias.html">
            Cicero Independiente
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/heraldscotland.html">
            Daily Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailyneb.html">
            Daily Nebraskan
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thr.html">
            Hollywood Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oglethorpe_echo.html">
            Oglethorpe Echo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/romenewstribune.html">
            Rome News-Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/stltoday.html">
            St. Louis Post-Dispatch
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thetimes.html">
            The Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/timesenterprise.html">
            The Times-Enterprise
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thevdt.html">
            Valdosta Daily Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>789</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wsav.html">
            WSAV News 3
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        12
    </td>
  </tr>
  
  <tr>
    <td>802</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/amerindependent.html">
            American Independent
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>802</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/breitbartnews.html">
            Breitbart
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>802</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/telegraphga.html">
            The Telegraph
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/aldiadallas.html">
            Al Dia Dallas
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ctmagazine.html">
            Christianity Today
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dallasnews.html">
            Dallas Morning News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/galvnews.html">
            Galveston County Daily News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kyivpost.html">
            KyivPost
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rollingstone.html">
            Rolling Stone
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sltimes.html">
            Storm Lake Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>805</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/baltimoresun.html">
            The Baltimore Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        11
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/alma_preta.html">
            Alma Preta
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsgorkhapatra.html">
            Gorakhapatra
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kakenews.html">
            KAKE News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ksnnews.html">
            KSN News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/littlevillage.html">
            Little Village
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/maarivonline.html">
            Maariv
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newstatesman.html">
            New Statesman
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/newsmax.html">
            Newsmax
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oann.html">
            One America News Network
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tpm.html">
            TPM
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>813</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ujyaalo.html">
            Ujyaalo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        10
    </td>
  </tr>
  
  <tr>
    <td>824</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sltrib.html">
            Salt Lake Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>825</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pajaropolitico.html">
            Animal Político
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>825</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/jdemontreal.html">
            La Journal de Montréal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>825</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reviewjournal.html">
            Las Vegas Review-Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>825</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rato_pati.html">
            Rato Pati
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>825</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/reductress.html">
            Reductress
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>825</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/sinembargomx.html">
            SinEmbargo
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        9
    </td>
  </tr>
  
  <tr>
    <td>831</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/theprospect.html">
            American Prospect
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        8
    </td>
  </tr>
  
  <tr>
    <td>831</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/publicintegrity.html">
            Center for Public Integrity
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        8
    </td>
  </tr>
  
  <tr>
    <td>831</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/kcautv.html">
            KCAU
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        8
    </td>
  </tr>
  
  <tr>
    <td>834</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/capitolnewsil.html">
            Capitol News Illinois
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        8
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/drudge.html">
            Drudge Report
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/infowars.html">
            Infowars
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/startribune.html">
            Minneapolis Star Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/oronline.html">
            Observer-Reporter
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/privateeyenews.html">
            Private Eye
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ynetalerts.html">
            Ynet
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>835</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/miwisconsin.html">
            mi wisconsin
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        7
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/curbed.html">
            Curbed
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/denverpost.html">
            Denver Post
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/elpaisuy.html">
            El Pais
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/statejournal.html">
            Frankfort State Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/ocregister.html">
            Orange County Register
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pagesix.html">
            Page Six
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pressenterprise.html">
            Riverside Press-Enterprise
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>842</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/uwogazette.html">
            Western Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        6
    </td>
  </tr>
  
  <tr>
    <td>850</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/dailycamera.html">
            Daily Camera
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        5
    </td>
  </tr>
  
  <tr>
    <td>850</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/eastbaytimes.html">
            East Bay Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        5
    </td>
  </tr>
  
  <tr>
    <td>850</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/haaretzcom.html">
            Haaretz
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        5
    </td>
  </tr>
  
  <tr>
    <td>850</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/scsentinel.html">
            Santa Cruz Sentinel
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        5
    </td>
  </tr>
  
  <tr>
    <td>850</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/pioneerpress.html">
            Twin Cities Pioneer Press
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        5
    </td>
  </tr>
  
  <tr>
    <td>855</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thealligator.html">
            Alligator
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        4
    </td>
  </tr>
  
  <tr>
    <td>855</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/azds.html">
            Arizona Daily Sun
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        4
    </td>
  </tr>
  
  <tr>
    <td>855</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thebabylonbee.html">
            Babylon Bee
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        4
    </td>
  </tr>
  
  <tr>
    <td>855</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/owhnews.html">
            Omaha World Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        4
    </td>
  </tr>
  
  <tr>
    <td>859</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lacrossetribune.html">
            LaCrosse Tribune
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abqjournal.html">
            Albuquerque Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/tucsonstar.html">
            Arizona Daily Star
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/capgaznews.html">
            Capital Gazette
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/abc7breaking.html">
            KVIA
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/journalstarnews.html">
            Lincoln Journal Star
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/qctimes.html">
            Quad City Times
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/rtdnews.html">
            Richmond Times-Dispatch
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wcfcourier.html">
            Waterloo-Cedar Falls Courier
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>860</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/wistatejournal.html">
            Wisconsin State Journal
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        3
    </td>
  </tr>
  
  <tr>
    <td>869</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/bostonherald.html">
            Boston Herald
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        2
    </td>
  </tr>
  
  <tr>
    <td>869</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/thebuffalonews.html">
            Buffalo News
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        2
    </td>
  </tr>
  
  <tr>
    <td>869</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/lancenet.html">
            Lance
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        2
    </td>
  </tr>
  
  <tr>
    <td>869</td>
    <td>
        <a href="https://palewi.re/docs/news-homepages/sites/portalimprensa.html">
            Portal Imprensa
        </a>
    </td>
    <td style="text-align: right; background-color: red; color: white;">
        2
    </td>
  </tr>
  
 </tbody>
</table>