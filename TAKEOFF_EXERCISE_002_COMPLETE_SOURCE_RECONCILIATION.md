# Exercise 002 Complete Source Reconciliation

Exercise: `TAKEOFF PRACTICE 002`
Project: `RIVERDALE OFFICE BUILDING`
Drawing: `FA-101`
Source authority: original `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`
Native source dimensions: **1536 x 1024**

## Audit Boundary

The original PNG was inspected at native resolution. The drawing Key/Legend and Notes were used to identify categories. Existing mapping and answer-key values were used only as comparison data. This reconciliation pass did not modify Exercise 001, Exercise 003, source PNGs, or any Exercise 002 data beyond the already-applied ninth S correction documented separately.

## Category Comparison

| Category | Current mapped | Source-observed | Difference | Status |
| --- | ---: | ---: | ---: | --- |
| FACP | 1 | 1 | 0 | CONFIRMED |
| FAA | 1 | 1 | 0 | CONFIRMED |
| Smokes | 12 | 12 | 0 | CONFIRMED |
| R of R Heats | 1 | 1 explicit H | 0 | CONFIRMED |
| Heat Detectors | 2 | 2 general heat symbols | 0 | CONFIRMED |
| Test Stations | 1 | 1 TS | 0 | CONFIRMED |
| Duct Smokes | 2 | 2 DD | 0 | CONFIRMED |
| Wall Strobes | 0 | 0 O symbols | 0 | CONFIRMED / none present |
| Wall Horn/Strobes | 6 | 6 HS | 0 | CONFIRMED |
| Wall Speaker/Strobes | 9 | 9 S | 0 | CONFIRMED |
| Pulls | 4 | 4 P | 0 | CONFIRMED |
| CR's | 3 | 3 CR | 0 | CONFIRMED |
| Waterflow | 1 | 1 WF | 0 | CONFIRMED |
| Door Holders | 1 | 1 DH | 0 | CONFIRMED |
| Tamper | 1 | 1 T | 0 | CONFIRMED |

R of R and Fixed Heat are treated as the general Heat Detectors recognition category unless authoritative project information requires a subtype. The six HS symbols are not S symbols and were counted only as Wall Horn/Strobes.

## Source-Supported Locations

- FACP: ELEC. 109.
- FAA: LOBBY 100.
- Smokes: 12 devices across Open Office 101, Conference 102, Open Office 103, Office 104, Break Room 105, Lobby 100, Office 108, and Server 110.
- R of R Heat: Open Office 101, the clearly identifiable H symbol.
- General Heat Detectors: Open Office 103 and Lobby 100.
- Test Station: Conference 102, TS.
- Duct Smokes: Open Office 103 duct and Office 108 duct, DD symbols.
- Wall Horn/Strobes: six HS devices at Conference 102 west/east, Break Room 105 north, Men/Women 106/107 north, Office 104 hall, and Office 108 hall.
- Wall Speaker/Strobes: nine S devices at Open Office 101 upper/north and west wall, Conference 102 upper/north, Open Office 103 upper/north and east wall, Office 104 west wall, Break Room 105 east wall, Office 108 east/lower wall, and Electrical 109 west/lower wall.
- Pulls: four P devices at west/east hall, Break Room hall, and Lobby entry.
- CR's: three CR devices in Open Office 101 west, Open Office 103 east, and ELEC. 109.
- Waterflow: one WF at the Fire Riser in ELEC. 109.
- Door Holder: one DH at Lobby 100 entry.
- Tamper: one T in Server 110.

## Unsupported, Missing, or Misclassified Records

- Missing records: none after the ninth S correction.
- Unsupported records: none in the approved mapped set.
- Misclassified HS as S: none.
- Misclassified S as HS: none.
- Wall Strobes: no approved O symbol is present.
- Ambiguous symbols: none added to this approved category set.

## Source Coordinate and Click Alignment

The corrected nine S records use the native source coordinate system:

| ID | Native source center | Normalized center | Location |
| --- | --- | --- | --- |
| `wall-speaker-strobe-001` | approximately `(716, 177)` | `(0.466, 0.173)` | Open Office 101 upper/north |
| `wall-speaker-strobe-002` | approximately `(508, 338)` | `(0.331, 0.330)` | Open Office 101 west wall |
| `wall-speaker-strobe-003` | approximately `(968, 177)` | `(0.630, 0.173)` | Conference 102 upper/north |
| `wall-speaker-strobe-004` | approximately `(1184, 177)` | `(0.771, 0.173)` | Open Office 103 upper/north |
| `wall-speaker-strobe-005` | approximately `(1444, 339)` | `(0.940, 0.331)` | Open Office 103 east wall |
| `wall-speaker-strobe-006` | approximately `(508, 560)` | `(0.331, 0.547)` | Office 104 west wall |
| `wall-speaker-strobe-007` | approximately `(991, 548)` | `(0.645, 0.535)` | Break Room 105 east wall |
| `wall-speaker-strobe-008` | approximately `(1441, 625)` | `(0.938, 0.610)` | Office 108 east/lower wall |
| `wall-speaker-strobe-009` | approximately `(508, 794)` | `(0.331, 0.775)` | Electrical 109 west/lower wall |

The image and interaction layer use the same centered 1536:1024 frame. Current S click regions are directly aligned with the source symbols, use small source-defined dimensions, and have no overlaps. The full corrected S set was physically clicked at 9/9.

## Physical Reconciliation Evidence

Fresh no-cross-off physical validation of the current Exercise 002 data produced:

- All mapped locations marked: **45**
- Wall Speaker/Strobes: **9/9** direct clicks
- Category filtering: only selected category targets were active
- Duplicate S click: `ALREADY COUNTED`; tally remained 1
- Negative empty/unrelated clicks: no additional count
- Full reconciliation: **45/45 — 100%**

The result is source-driven. It is not forced to 44.

## Total Determination

Current mapped total:

`1 + 1 + 12 + 1 + 2 + 1 + 2 + 0 + 6 + 9 + 4 + 3 + 1 + 1 + 1 = 45`

Source-supported total: **45**

Current mapped total: **45**

Difference: **0**

## Final Determination

The correct Exercise 002 total is **45**, not 44. The original source supports 45 approved mapped devices after including the ninth Wall Speaker/Strobe in Electrical 109. No other category is reduced to force the total lower.

No Exercise 001 or Exercise 003 files were changed. No source PNG was changed. No Product Library, quiz bank, simulator, global scoring, or navigation files were changed. No commit or GitHub push was made.
