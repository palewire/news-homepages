palette = dict(
    black="#000000",
    white="#ffffff",
    default="#cecece",
    accent="#727272",
    ramp=[
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
        "#ffffff",
    ],
)


def theme():
    """Create a @palewire theme for Altair."""
    fontFamily = '"Libre Franklin","Helvetica","Liberation Sans",Arial,sans-serif'

    # Headline stuff
    headlineFontSize = 20
    headlineFontWeight = "bold"
    headlineFont = fontFamily

    # Titles for axes and legends and such
    titleFont = fontFamily
    titleFontWeight = "normal"
    titleFontSize = 14

    # Labels for ticks and legend entries and such
    labelFont = fontFamily
    labelFontSize = 12
    labelFontWeight = "normal"

    return dict(
        config=dict(
            view=dict(
                width=500,
                height=300,
                stroke=0,
            ),
            padding=dict(top=15, bottom=15, left=10, right=10),
            background=palette["white"],
            title=dict(
                anchor="start",
                font=headlineFont,
                color=palette["black"],
                fontSize=headlineFontSize,
                fontWeight=headlineFontWeight,
                lineHeight=26,
                subtitleFont=headlineFont,
                subtitleFontSize=titleFontSize,
                subtitleLineHeight=18,
                subtitlePadding=5,
                offset=20,
            ),
            arc=dict(fill=palette["default"]),
            area=dict(fill=palette["default"]),
            line=dict(stroke=palette["default"], strokeWidth=3),
            path=dict(stroke=palette["default"]),
            rect=dict(fill=palette["default"]),
            bar=dict(fill=palette["default"]),
            point=dict(stroke=palette["default"]),
            axis=dict(
                titleFont=titleFont,
                titleFontSize=titleFontSize,
                titleFontWeight=titleFontWeight,
                labelFont=labelFont,
                labelFontSize=labelFontSize,
                labelFontWeight=labelFontWeight,
                tickColor=palette["accent"],
                labelColor=palette["accent"],
            ),
            axisX=dict(
                labelAngle=0,
                labelPadding=10,
                labelFlush=True,
                tickSize=0,
                domain=False,
            ),
            axisY=dict(
                labelBaseline="middle",
                labelPadding=5,
                labelFlush=True,
                tickSize=0,
                titleAlign="left",
                titleAngle=0,
                titleX=-45,
                titleY=-11,
                domain=False,
            ),
            legend=dict(
                titleFont=titleFont,
                titleFontSize=titleFontSize,
                titleFontWeight=titleFontWeight,
                symbolType="square",
                labelFont=labelFont,
                labelFontSize=labelFontSize + 1,
            ),
            range=dict(
                heatmap=palette["ramp"], ordinal=palette["ramp"], ramp=palette["ramp"]
            ),
        )
    )
