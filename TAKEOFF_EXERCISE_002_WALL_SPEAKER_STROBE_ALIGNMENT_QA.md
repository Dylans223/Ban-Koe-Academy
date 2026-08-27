# Exercise 002 Wall Speaker/Strobe Alignment QA

Exercise: `TAKEOFF PRACTICE 002`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`
Native source dimensions: **1536 x 1024**

## Source Correction

The original PNG contains **9 clear Wall Speaker/Strobe `S` symbols**. The six `HS` symbols remain Wall Horn/Strobes and were not included.

The eight existing S records were rebased to the native source positions, and the missing Electrical 109 S was added as `wall-speaker-strobe-009` at approximately normalized `(0.331, 0.775)`. No Exercise 002 source PNG or HS record was changed.

## Source Locations

| ID | Location | Native X | Native Y | Normalized X | Normalized Y |
| --- | --- | ---: | ---: | ---: | ---: |
| `wall-speaker-strobe-001` | Open Office 101, upper/north | 716 | 177 | 0.466 | 0.173 |
| `wall-speaker-strobe-002` | Open Office 101, west wall | 508 | 338 | 0.331 | 0.330 |
| `wall-speaker-strobe-003` | Conference 102, upper/north | 968 | 177 | 0.630 | 0.173 |
| `wall-speaker-strobe-004` | Open Office 103, upper/north | 1184 | 177 | 0.771 | 0.173 |
| `wall-speaker-strobe-005` | Open Office 103, east wall | 1444 | 339 | 0.940 | 0.331 |
| `wall-speaker-strobe-006` | Office 104, west wall | 508 | 560 | 0.331 | 0.547 |
| `wall-speaker-strobe-007` | Break Room 105, east wall | 991 | 548 | 0.645 | 0.535 |
| `wall-speaker-strobe-008` | Office 108, east/lower wall | 1441 | 625 | 0.938 | 0.610 |
| `wall-speaker-strobe-009` | Electrical 109, west/lower wall | 508 | 794 | 0.331 | 0.775 |

## Physical Direct-Click Test

The normal Exercise 002 page was used with `Wall Speaker/Strobes + YELLOW`. All nine mapped S targets were physically clicked through the drawing layer:

- Active S targets: **9**
- Direct clicks counted: **9/9**
- Selected training color: **YELLOW**
- Duplicate click: `ALREADY COUNTED`; tally increased only once
- Six HS symbols remain a separate category and do not count as S devices

## Geometry

- Source-aspect frame: `1536 / 1024`.
- Image and interaction frame occupied the same rectangle.
- No overlapping S target regions were found.
- The missing Electrical 109 target is now present.
- The source image remains unchanged.
- The application glyph presentation layer uses YELLOW for Exercise 002 S symbols without changing the source PNG.

## Negative Test

Empty space, room areas, and unrelated device categories did not count as Wall Speaker/Strobes. Inactive category targets remain non-interactive.

## Zoom / Pan

The S targets remain in the same transformed 1536:1024 frame as the source image through zoom and pan. No independent marker transform is used.

## Reconciliation Result

The corrected data contains 45 mapped locations and expected quantities totaling 45. Fresh no-cross-off reconciliation returned:

- Marked: 45
- Reconciled: **45/45 — 100%**

The requested total of 44 is arithmetically incompatible with adding the ninth S while retaining all other source-confirmed categories. The prior 44-device set already contained 8 S records; no other category was overcounted and reduced.

## Scope

Exercise 001 and Exercise 003 were not modified. Exercise 002 answer quantity for Wall Speaker/Strobes was changed from 8 to 9 as requested. No other Exercise 002 category quantity, HS mapping, source drawing, Product Library, quiz bank, simulator, global scoring, or navigation was changed.

No commit or GitHub push was made.
