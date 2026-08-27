# Exercise 001 Symbol Color QA

Exercise: `TAKEOFF PRACTICE 001`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png`
Source dimensions: **1402 x 1122**

## Result

**PASS**

The confirmed Exercise 001 training symbols now visually match their Ban-Koe training colors in the normal training view without modifying the original source PNG. The prior blob-producing rectangular pixel recoloring was replaced with a glyph-only source-pixel mask.

## Wall Speaker/Strobes

- Confirmed symbols: 9 orange `S` symbols.
- Application training color: **YELLOW**.
- Key entry: `Wall Speaker/Strobe - YELLOW`.
- Canvas color-layer samples: all 9 mapped S regions contain exact YELLOW glyph pixels (`250, 204, 21`) while retaining the original orange symbol pixels.
- Normal-page and 150% visual inspection: the S glyphs visibly read yellow without a colored rectangle/blob around them.
- Direct interaction: **9/9** physically counted.
- Post-click highlight: translucent YELLOW and centered over the source symbol.

## Test Stations

- Confirmed symbols: 2 orange `TS` symbols.
- Application training color: **PINK**.
- Key entry: `Test Station - PINK`.
- Canvas color-layer samples: both mapped TS regions contain PINK glyph pixels while retaining the original orange symbol pixels.
- Normal-page and 150% visual inspection: the TS lettering visibly reads pink without a colored rectangle/blob around it.
- Direct interaction: **2/2** physically counted.
- Post-click highlight: translucent PINK and centered over the source symbol.

The original orange source PNG remains unchanged. The application canvas layer presents only the confirmed S and TS glyphs in training colors; symbol bodies, walls, labels, notes, and unrelated source symbols are not recolored.

## Drawing / Key Consistency

**PASS**

| Symbol | Source appearance | Training presentation | Key color | Result |
| --- | --- | --- | --- | --- |
| S / Wall Speaker-Strobe | Orange in preserved source PNG | Yellow application layer | YELLOW | PASS |
| TS / Test Station | Orange in preserved source PNG | Pink application layer | PINK | PASS |

The same Exercise 001 product color definition drives the Key, category display, canvas color treatment, and post-click highlight. The source PNG is retained as the read-only base asset.

## Direct-Click Regression

Fresh normal-page physical regression passed:

- Wall Speaker/Strobes: **9/9**
- Test Stations: **2/2**
- Smokes: **10/10**
- Wall Horn/Strobes: **6/6**
- All other approved Exercise 001 categories: exact mapped counts
- Full Exercise 001 reconciliation: **44/44 — 100%**

## Negative and Duplicate Behavior

- Negative clicks on empty space and unrelated device categories: no mark, no tally change.
- Duplicate click on a confirmed S symbol: `ALREADY COUNTED`; tally increased only once.
- Category filtering remained intact; only the selected category's hit regions were active.

## Symbols Not Colorized

No confirmed S or TS glyph was left uncolorized. Unrelated source symbols, including Smoke, HS, Heat, Pull, and other device categories, were intentionally left unchanged during this pass.

## Implementation Boundary

- Visual symbol and click target are separate layers.
- Click target dimensions remain source-mapped and unchanged.
- The color canvas is `pointer-events: none` and cannot intercept direct clicks.
- The source image remains the unmodified base visual.

## Scope Protection

- Source PNG: not modified.
- Exercise 001 quantities: unchanged.
- Exercise 001 coordinates: unchanged during the color-layer pass.
- Exercise 002 and Exercise 003: not modified.
- Product Library, quiz banks, simulator, global scoring, and navigation: not modified.

No commit or GitHub push was made.
