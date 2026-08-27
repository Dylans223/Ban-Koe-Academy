# Exercise 002 Wall Speaker/Strobe Source Audit

Exercise: `TAKEOFF PRACTICE 002`
Project: `RIVERDALE OFFICE BUILDING`
Drawing: `FA-101`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`
Native source dimensions: **1536 x 1024**

## Audit Boundary

This is a source-only audit. The original Exercise 002 PNG was opened at its native 1536 x 1024 resolution. The source drawing and visible legend were used as the authority. Existing mapping and answer-key values were used only for comparison after the independent source count.

The source-confirmed correction has now been applied: the missing Electrical 109 S was added and the Wall Speaker/Strobe expected quantity was changed to 9. This produces 45 approved mapped devices because the prior Exercise 002 total of 44 already included the 8 existing S records.

## Legend Interpretation

The source legend distinguishes these symbols:

- `S` = Wall Speaker/Strobe, part-number example `(SS)`.
- `HS` = Wall Horn/Strobe, part-number example `(HS)`.

The six `HS` symbols were excluded from this Wall Speaker/Strobe count.

## Source-Observed Wall Speaker/Strobes

The original PNG contains **9 clearly visible `S` symbols**. The locations below are native-image pixel estimates from the source image, with normalized values calculated as pixel divided by 1536 or 1024. The table records the source symbol itself, not a viewport or CSS position.

| Proposed source ID | Room / location | Native X | Native Y | Normalized X | Normalized Y | Clearly Wall Speaker/Strobe? |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `source-s-001` | Open Office 101, upper/north area | 716 | 177 | 0.466 | 0.173 | YES, `S` |
| `source-s-002` | Open Office 101, west wall | 508 | 338 | 0.331 | 0.330 | YES, `S` |
| `source-s-003` | Conference 102, upper/north area | 968 | 177 | 0.630 | 0.173 | YES, `S` |
| `source-s-004` | Open Office 103, upper/north area | 1184 | 177 | 0.771 | 0.173 | YES, `S` |
| `source-s-005` | Open Office 103, east wall | 1444 | 339 | 0.940 | 0.331 | YES, `S` |
| `source-s-006` | Office 104, west wall | 508 | 560 | 0.331 | 0.547 | YES, `S` |
| `source-s-007` | Break Room 105, east wall | 991 | 548 | 0.645 | 0.535 | YES, `S` |
| `source-s-008` | Office 108, east/lower wall | 1441 | 625 | 0.938 | 0.610 | YES, `S` |
| `source-s-009` | Electrical 109, west/lower wall | 508 | 794 | 0.331 | 0.775 | YES, `S` |

These source-symbol centers were used for the approved Exercise 002 coordinate correction.

## Quantity Comparison

| Measure | Quantity |
| --- | ---: |
| Current Exercise 002 mapped Wall Speaker/Strobes | 9 |
| Independently observed source Wall Speaker/Strobes | 9 |
| Difference | **0** |

## Current-vs-Source Coordinate Comparison

| Current ID | Current normalized X/Y | Source comparison | Alignment result |
| --- | --- | --- | --- |
| `wall-speaker-strobe-001` | 0.466 / 0.173 | Open Office 101 upper/north `S` near 0.466 / 0.173 | PASS |
| `wall-speaker-strobe-002` | 0.630 / 0.173 | Conference 102 upper/north `S` near 0.630 / 0.173 | PASS |
| `wall-speaker-strobe-003` | 0.771 / 0.173 | Open Office 103 upper/north `S` near 0.771 / 0.173 | PASS |
| `wall-speaker-strobe-004` | 0.331 / 0.330 | Open Office 101 west-wall `S` near 0.331 / 0.330 | PASS |
| `wall-speaker-strobe-005` | 0.940 / 0.331 | Open Office 103 east-wall `S` near 0.940 / 0.331 | PASS |
| `wall-speaker-strobe-006` | 0.331 / 0.547 | Office 104 west-wall `S` near 0.331 / 0.547 | PASS |
| `wall-speaker-strobe-007` | 0.645 / 0.535 | Break Room 105 east-wall `S` near 0.645 / 0.535 | PASS |
| `wall-speaker-strobe-008` | 0.938 / 0.610 | Office 108 east/lower-wall `S` near 0.938 / 0.610 | PASS |
| `wall-speaker-strobe-009` | 0.331 / 0.775 | Electrical 109 west/lower-wall `S` near 0.331 / 0.775 | PASS, added |

## Source Count Determination

**Source-observed quantity: 9.** The original drawing visibly contains nine distinct `S` symbols. The result is not being adjusted to match the user's proposed number of 7.

## Missing Devices

None after the approved correction. Electrical 109 is represented by `wall-speaker-strobe-009`.

## Extra or Misclassified Devices

- No current Wall Speaker/Strobe record was identified as an `HS` symbol.
- `wall-speaker-strobe-008` is now aligned to the Office 108 `S`.
- No extra `S` beyond the nine source symbols was counted.

## Click-Region Alignment

**Corrected alignment: PASS for the complete source set.**

The corrected map contains 9 records for 9 source `S` symbols. The eight existing regions were rebased to the source symbols, the Electrical 109 S was added, and no regions overlap. The shared source-aspect frame remains correct.

## Status

- Current mapped quantity: **9**
- Source-observed quantity: **9**
- Difference: **0**
- Source count confidence: **High**
- Legend distinction `S` versus `HS`: **Confirmed**
- Current click regions directly aligned for every source `S`: **Yes, after correction**
- Data changes made: **9 S records and expected Wall Speaker/Strobe quantity updated**

## Total Arithmetic Discrepancy

The requested statement that the full Exercise 002 total should remain 44 conflicts with the confirmed source correction. The prior approved mapping contained 44 devices including 8 Wall Speaker/Strobes. Adding the ninth source S produces **45** approved mapped devices. No other category was reduced because the source audit found no other overcount. The corrected data reconciles at **45/45 — 100%**.

Runtime audit may be run as a non-mutating regression check. No commit or GitHub push was made.
