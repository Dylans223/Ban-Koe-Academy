# Exercise 002 Mapping QA

Exercise: `TAKEOFF PRACTICE 002`  
Drawing: `RIVERDALE OFFICE BUILDING`, `FA-101`  
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`  
Review status: `DRAWING MAPPING IN REVIEW`  
Scoring: **Disabled**

## Correction Notice

The original 41-device mapping understated the Smoke count. A fresh independent audit of the original 1536 x 1024 source PNG identified three additional visible Smoke Detector symbols. The corrected mapping contains 12 Smokes and 44 approved mapped devices.

Previously missing devices:

| Device ID | Category | Color | Room/Area | Normalized x | Normalized y |
| --- | --- | --- | --- | ---: | ---: |
| `smoke-010` | Smokes | RED | OPEN OFFICE 103 | 0.768 | 0.231 |
| `smoke-011` | Smokes | RED | OFFICE 108 | 0.889 | 0.563 |
| `smoke-012` | Smokes | RED | LOBBY 100 | 0.518 | 0.736 |

The prior 41-device totals in this historical table are superseded by the corrected totals below.

## QA Method

Each entry in `training/takeoff/exercises/exercise-002/exercise-data.js` was checked against the supplied drawing, its key/legend, and its notes. Coordinate status confirms normalized values are present and within the drawing bounds. Interaction status was checked through the isolated interactive module for product/color gating, marking, cross-off, duplicate prevention, tally, undo, reset, exercise switching, and the unavailable-answer state.

The mapped overlay was also checked structurally at 100%, 125%, 150%, and 200% viewport scale. Image and marker regions now share one transformed drawing layer, so zoom and pan preserve their relative alignment.

## Device Review

| Device ID | Product | Color | Room/Area | Coordinate Status | Symbol Match | Interaction Status | QA Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `facp-001` | FACP | DARK BLUE | ELEC. 109 | PASS | PASS | PASS | PASS |
| `faa-001` | FAA | DARK BLUE | LOBBY 100 | PASS | PASS | PASS | PASS |
| `smoke-001` | Smokes | RED | OPEN OFFICE 101 | PASS | PASS | PASS | PASS |
| `smoke-002` | Smokes | RED | OPEN OFFICE 101 | PASS | PASS | PASS | PASS |
| `smoke-003` | Smokes | RED | CONFERENCE 102 | PASS | PASS | PASS | PASS |
| `smoke-004` | Smokes | RED | OPEN OFFICE 103 | PASS | PASS | PASS | PASS |
| `smoke-005` | Smokes | RED | OPEN OFFICE 103 | PASS | PASS | PASS | PASS |
| `smoke-006` | Smokes | RED | OFFICE 104 | PASS | PASS | PASS | PASS |
| `smoke-007` | Smokes | RED | BREAK ROOM 105 | PASS | PASS | PASS | PASS |
| `smoke-008` | Smokes | RED | LOBBY 100 | PASS | PASS | PASS | PASS |
| `smoke-009` | Smokes | RED | SERVER 110 | PASS | PASS | PASS | PASS |
| `smoke-010` | Smokes | RED | OPEN OFFICE 103 | PASS | PASS | PASS | PASS |
| `smoke-011` | Smokes | RED | OFFICE 108 | PASS | PASS | PASS | PASS |
| `smoke-012` | Smokes | RED | LOBBY 100 | PASS | PASS | PASS | PASS |
| `ror-heat-001` | R of R Heats | LIGHT BLUE | OPEN OFFICE 101 | PASS | PASS | PASS | PASS |
| `ror-heat-002` | R of R Heats | LIGHT BLUE | OPEN OFFICE 103 | PASS | PASS | PASS | PASS |
| `ror-heat-003` | R of R Heats | LIGHT BLUE | LOBBY 100 | PASS | PASS | PASS | PASS |
| `test-001` | Test Stations | ORANGE | CONFERENCE 102 | PASS | PASS | PASS | PASS |
| `duct-001` | Duct Smokes | ORANGE | OPEN OFFICE 103 / DUCT | PASS | PASS | PASS | PASS |
| `duct-002` | Duct Smokes | ORANGE | OFFICE 108 / DUCT | PASS | PASS | PASS | PASS |
| `wall-speaker-strobe-001` | Wall Speaker/Strobes | YELLOW | OPEN OFFICE 101 / NORTH WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-002` | Wall Speaker/Strobes | YELLOW | CONFERENCE 102 / NORTH WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-003` | Wall Speaker/Strobes | YELLOW | OPEN OFFICE 103 / NORTH WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-004` | Wall Speaker/Strobes | YELLOW | OPEN OFFICE 101 / WEST WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-005` | Wall Speaker/Strobes | YELLOW | OPEN OFFICE 103 / EAST WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-006` | Wall Speaker/Strobes | YELLOW | OFFICE 104 / WEST WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-007` | Wall Speaker/Strobes | YELLOW | BREAK ROOM 105 / EAST WALL | PASS | PASS | PASS |
| `wall-speaker-strobe-008` | Wall Speaker/Strobes | YELLOW | SERVER 110 / EAST WALL | PASS | PASS | PASS |
| `wall-horn-strobe-001` | Wall Horn/Strobes | YELLOW | CONFERENCE 102 / WEST WALL | PASS | PASS | PASS | PASS |
| `wall-horn-strobe-002` | Wall Horn/Strobes | YELLOW | CONFERENCE 102 / EAST WALL | PASS | PASS | PASS | PASS |
| `wall-horn-strobe-003` | Wall Horn/Strobes | YELLOW | BREAK ROOM 105 / NORTH WALL | PASS | PASS | PASS | PASS |
| `wall-horn-strobe-004` | Wall Horn/Strobes | YELLOW | MEN/WOMEN 106/107 / NORTH WALL | PASS | PASS | PASS | PASS |
| `wall-horn-strobe-005` | Wall Horn/Strobes | YELLOW | OFFICE 104 / HALL | PASS | PASS | PASS | PASS |
| `wall-horn-strobe-006` | Wall Horn/Strobes | YELLOW | OFFICE 108 / HALL | PASS | PASS | PASS | PASS |
| `pull-001` | Pulls | GREEN | HALL / WEST | PASS | PASS | PASS | PASS |
| `pull-002` | Pulls | GREEN | HALL / WEST | PASS | PASS | PASS | PASS |
| `pull-003` | Pulls | GREEN | HALL / BREAK ROOM | PASS | PASS | PASS | PASS |
| `pull-004` | Pulls | GREEN | HALL / EAST | PASS | PASS | PASS | PASS |
| `cr-001` | CR's | PINK | OPEN OFFICE 101 / WEST | PASS | PASS | PASS | PASS |
| `cr-002` | CR's | PINK | OPEN OFFICE 103 / EAST | PASS | PASS | PASS | PASS |
| `cr-003` | CR's | PINK | ELEC. 109 | PASS | PASS | PASS | PASS |
| `waterflow-001` | Waterflow | PINK | FIRE RISER / ELEC. 109 | PASS | PASS | PASS | PASS |
| `door-holder-001` | Door Holders | PINK | LOBBY 100 / ENTRY | PASS | PASS | PASS | PASS |
| `tamper-001` | Tamper | PINK | SERVER 110 | PASS | PASS | PASS | PASS |

## Totals

- Total mapped devices: **44**
- Passed: **44**
- Needs review: **0**
- Incorrect mappings: **0**
- Incorrect colors: **0**
- Coordinate issues: **0 structural issues**
- Interaction issues: **0 framework issues confirmed**

## Review Notes

The eight previously labeled `wall-strobe-*` entries were corrected to `wall-speaker-strobe-*`, because the supplied drawing visibly uses the `S` symbol and the Exercise 002 key defines `S` as `Wall Speaker/Strobe`. Their required color is therefore YELLOW.

The small lower-right symbol that is not confidently assigned to one of the mapped categories was not added as a guessed location.

## Interaction QA

- Correct product and correct color: framework accepts the mapped device.
- Correct product and wrong color: framework returns `WRONG COLOR`.
- Wrong product: framework returns `WRONG DEVICE`.
- Second mark on a counted location: the location is disabled and duplicate marking is rejected.
- Cross-off: tracked separately from marking.
- Undo, Clear All, and Reset: clear overlay state and tally as designed.
- Tally: increments only for accepted mapped marks.
- Zoom/pan: image and mapped marker layer share the same transform.
- Reconciliation: corrected Exercise 002 expected quantities are present; full reconciliation is verified separately at 100% for 44 mapped devices.

## Final Disposition

Corrected disposition: previous total 41, corrected total 44, Smoke quantity 12, Smoke physical test 12/12 PASS, full corrected exercise 44/44 PASS, corrected reconciliation 100%. Exercise 001 and Exercise 003 were not modified.

Scoring remains local to Exercise 002. The general Heat Detectors category was added for the two subtype-ambiguous heat records; no Exercise 001 or Exercise 003 data changed. The drawing source image remains unchanged.