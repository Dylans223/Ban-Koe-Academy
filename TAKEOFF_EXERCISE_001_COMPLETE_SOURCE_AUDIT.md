# Exercise 001 Complete Source Audit

Exercise: `TAKEOFF PRACTICE 001`
Project: `SUNSET BUSINESS CENTER`
Drawing: `FA-101`
Source audited: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png`

## Audit Boundary

This audit used the original Exercise 001 PNG as the authority. The existing Exercise 001 map, answer key, previous QA report, and other exercise coordinates were used only afterward for comparison, not as proof of the source count.

Native source dimensions previously verified in the browser: **1402 x 1122**.

The confirmed source corrections have now been applied: one Office 108 Smoke and one second Test Station. Project-owner clarification confirms all 9 orange `S` symbols as Wall Speaker/Strobes with Ban-Koe color YELLOW.

## Smoke Audit

The source drawing contains **10 Smoke Detector symbols**. The nine existing Smoke records correspond to nine visible source symbols. The missing source symbol is the Smoke Detector in **Office 108**.

The following normalized regions use the existing symbol-sized region convention. X and Y identify the normalized region origin; width and height identify the normalized hit region. The source-observed positions are listed independently by room and visible source symbol.

| Device ID | Source location | Source evidence | X | Y | Width | Height | Status |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| `smoke-001` | Open Office 101 | Red Smoke symbol marked 1 in the upper-left open office | 0.405 | 0.188 | 0.014 | 0.014 | Existing record correct |
| `smoke-002` | Open Office 101 | Red Smoke symbol marked 2 below Smoke 1 | 0.405 | 0.335 | 0.014 | 0.014 | Existing record correct |
| `smoke-003` | Conference 102 | Red Smoke symbol marked 3 in the conference room | 0.608 | 0.270 | 0.014 | 0.014 | Existing record correct |
| `smoke-004` | Open Office 103 | Red Smoke symbol marked 4 in the upper-right open office | 0.858 | 0.188 | 0.014 | 0.014 | Existing record correct |
| `smoke-005` | Open Office 103 | Red Smoke symbol marked 5 below Smoke 4 | 0.835 | 0.335 | 0.014 | 0.014 | Existing record correct |
| `smoke-006` | Office 104 | Red Smoke symbol marked 6 | 0.365 | 0.550 | 0.014 | 0.014 | Existing record correct |
| `smoke-007` | Break Room 105 | Red Smoke symbol marked 7 | 0.570 | 0.550 | 0.014 | 0.014 | Existing record correct |
| `smoke-008` | Lobby 100 | Red Smoke symbol marked 10 near the lower lobby | 0.511 | 0.657 | 0.014 | 0.014 | Existing corrected record correct |
| `smoke-009` | Server 110 | Red Smoke symbol marked 9 | 0.870 | 0.681 | 0.014 | 0.014 | Existing record correct |
| `smoke-010` | Office 108 | Red Smoke symbol marked 8 in the right-side lower office; native-pixel center approximately (1245, 557) | 0.888 | 0.496 | 0.014 | 0.014 | Confirmed and mapped |

The source numbering is not used as the device ID. `smoke-010` is the stable ID for the confirmed Office 108 source occurrence and is included in application data.

### Smoke Conclusions

- Actual source count: **10**
- Current mapped count: **10**
- Difference: **0**
- Existing records incorrectly mapped: **0** found
- Office 108 Smoke Detector is mapped as `smoke-010`.
- Existing Smoke hit-region overlaps after the prior Lobby correction and region tightening: **0**
- Required quantity correction: applied; Exercise 001 Smokes is now 10

## Complete Category Audit

Counts below are from an independent visual review of the original PNG. `Current mapping` is shown only to identify discrepancies.

| Category | Current mapping | Actual source count | Difference | Status |
| --- | ---: | ---: | ---: | --- |
| FACP | 1 | 1 | 0 | PASS |
| FAA | 1 | 1 | 0 | PASS |
| Smokes | 10 | 10 | 0 | CONFIRMED correction applied |
| Heat Detectors | 3 R of R, 0 Fixed | 3 | 0 | PASS: three visible light-blue Heat symbols; no separate Fixed symbol counted |
| Test Stations | 2 | 2 | 0 | CONFIRMED correction applied |
| Duct Smokes | 2 | 2 | 0 | PASS |
| Wall Strobes | 0 | 0 | 0 | Orange `S` symbols are not Wall Strobes |
| Wall Horn/Strobes | 6 | 6 | 0 | PASS |
| Wall Speaker/Strobes | 9 | 9 | 0 | CONFIRMED by project-owner clarification; source symbols remain orange, training color YELLOW |
| Pulls | 4 | 4 | 0 | PASS |
| CR's | 3 | 3 | 0 | PASS |
| Waterflow | 1 | 1 | 0 | PASS |
| Door Holders | 1 | 1 | 0 | PASS |
| Tamper | 1 | 1 | 0 | PASS |

## Source Evidence for Additional Discrepancies

The original drawing visibly contains nine orange appliances labeled with `S`-style glyphs distributed across the upper-left room, upper-center area, upper-right room, middle-left office, Break Room, Office 108, and Electrical 109. Project-owner clarification confirms these symbols as Wall Speaker/Strobes. Their source appearance remains orange; their Ban-Koe training color is YELLOW.

A second orange `TS` symbol is visible near the lower-right side of the drawing in addition to the upper-center `TS` symbol. Both are included in the approved Test Station mapping.

## Current Totals

- Approved mapped devices after confirmed corrections: **44**
- The 9 orange `S` symbols are approved Wall Speaker/Strobes and are included in scoring.
- Approved total: **44**

Exercise 001 now includes the two confirmed corrections and the 9 project-owner-confirmed Wall Speaker/Strobes. Exercise 002, Exercise 003, and other Academy systems were not modified.
