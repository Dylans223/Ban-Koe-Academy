# Exercise 002 Source Discrepancy Audit

## Source Authority

- Original source PNG: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`
- Native dimensions: 1536 x 1024
- Scope: original source drawing only; legend, notes, annotations, and decorative graphics excluded from floor-plan counts
- Exercise data was not modified during this audit.

## Wall Speaker/Strobe

### Open Office 103

| Check | Finding |
| --- | --- |
| Source symbol exists | YES |
| Source classification | YES, a real Wall Speaker/Strobe `S` associated with the `DD` duct detector callout on the east side of Open Office 103 |
| Current record exists | YES, `wall-speaker-strobe-005` |
| Current record | Wall Speaker/Strobes, YELLOW, `OPEN OFFICE 103 / EAST WALL` |
| Current source coordinate | normalized `(0.940, 0.331)`; native approximately `(1444, 339)` |
| Source symbol coordinate | native approximately `(1392, 297)`; normalized approximately `(0.906, 0.290)` |
| Current click target aligned | NO |
| Current rendered target | Active target rendered at approximately `(1089.85, 982.59)` with size `14.70 x 9.80` pixels in the inspected normal-page viewport |
| Visible source-symbol point | Approximately `(1069.43, 965.16)` in the same rendered source frame |
| Rendered displacement | Approximately `28` pixels right and `22` pixels down |
| Overlap | NO; the current small target does not cover the visible S symbol |
| Other marker interception | No overlapping active marker was observed; inactive markers use `pointer-events: none` |

### Corrected Result

The original PNG contains the Open Office 103 duct-area `S` Wall Speaker/Strobe. The existing `wall-speaker-strobe-005` record was corrected in place to normalized `(0.906, 0.290)`, approximately native `(1392, 297)`, with no second S record added and no quantity change.

## Heat Detectors

### Source-only count

| Category | Source count |
| --- | ---: |
| R of R Heats | 1 |
| Generic Heat Detectors | 0 |

The one clearly identified heat-type floor-plan symbol is the `H` Rate-of-Rise Heat symbol in Open Office 101, at approximately native `(711, 240)` and normalized `(0.463, 0.234)`. This agrees with the current explicit `ror-heat-001` record.

The source PNG does not show two additional generic Heat Detector symbols. The circular detector glyphs at the current `ror-heat-002` and `ror-heat-003` positions are Smoke Detector symbols according to the source legend's distinct Smoke glyph; they are not clearly identified as Heat symbols and must not be retained as generic Heat Detectors based only on proximity or old mapping.

### Current versus source

| Category | Current mapped count | Source count | Difference |
| --- | ---: | ---: | ---: |
| R of R Heats | 1 | 1 | 0 |
| Heat Detectors | 2 | 0 | +2 phantom records |

## Source Evidence

The embedded original legend distinguishes:

- Smoke Detector: circular glyph with center dot/cardinal details
- Heat Detector (Rate-of-Rise): circle containing `H`
- Heat Detector (Fixed Temp): circle containing `F`
- Wall Speaker/Strobe: square `S`
- Duct Smoke Detector: `DD` with duct callout

The floor plan contains one explicit `H` symbol and no additional `H` or `F` heat symbols. Open Office 103 contains a visible `S` immediately associated with the `DD` duct callout; this is a separate Wall Speaker/Strobe device and not the duct detector itself.

## Corrected Disposition

Source discrepancy confirmed and approved corrections applied:

- Open Office 103 `S` exists and the current record is displaced.
- Source supports one R-of-R Heat.
- Source supports zero generic Heat Detectors.

**Exercise 002 source discrepancy corrected.**

Final source-supported total: **43**. The existing Open Office 103 S record was repositioned in place, the two generic Heat Detector records were removed, and the resulting mapping and expected quantities reconcile at 43/43.

Only the approved Exercise 002 changes were made: the existing Open Office 103 S record was repositioned, the two phantom generic Heat Detector records were removed, Heat Detectors was set to 0, and the answer key total was updated to 43. No other Exercise 002 category, Exercise 001, Exercise 003, source PNG, Product Library, quiz bank, simulator, navigation, or global scoring file was modified.
