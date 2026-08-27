# Exercise 002 All-Device Direct-Click QA

Exercise: `TAKEOFF PRACTICE 002`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`
Native source dimensions: **1536 x 1024**

## Result

**PASS**

The corrected Exercise 002 interaction uses the shared source-aspect frame. The trainee can select a category, click the visible mapped device symbol directly, and receive an immediate counted mark and tally increment.

## Category Direct-Click Results

| Category | Expected | Physical test | Direct click |
| --- | ---: | ---: | --- |
| FACP | 1 | 1/1 | PASS |
| FAA | 1 | 1/1 | PASS |
| Smokes | 12 | 3 direct devices plus full run | PASS |
| R of R Heats | 1 | 1/1 | PASS |
| Heat Detectors | 2 | 2/2 | PASS |
| Test Stations | 1 | 1/1 | PASS |
| Duct Smokes | 2 | 2/2 | PASS |
| Wall Strobes | 0 | 0/0 | PASS / no approved O symbols |
| Wall Horn/Strobes | 6 | 3 direct devices plus full run | PASS |
| Wall Speaker/Strobes | 9 | 3 direct devices plus full 9/9 run | PASS |
| Pulls | 4 | 3 direct devices plus full run | PASS |
| CR's | 3 | 3/3 | PASS |
| Waterflow | 1 | 1/1 | PASS |
| Door Holders | 1 | 1/1 | PASS |
| Tamper | 1 | 1/1 | PASS |

The complete physical run marked all **45/45** approved mapped devices.

## Source Alignment

- Current source-supported S quantity: **9**.
- Electrical 109 S is mapped as `wall-speaker-strobe-009`.
- Six HS symbols remain Wall Horn/Strobes and are not counted as S devices.
- S regions use source-audited native coordinates and small source-defined dimensions.
- No S target regions overlap.
- Image and interaction layer share the centered `1536 / 1024` source frame.
- The source PNG remains unchanged.

## Category Filtering

**PASS**

Selecting a category activated only that category's mapped regions. Unselected device categories, HS symbols, room labels, walls, and empty areas did not count as the selected category.

## Color Treatment

Wall Speaker/Strobes use the established YELLOW training color. The source PNG remains the preserved base image, and the application presentation layer adds the training treatment without changing the source asset.

## Duplicate Behavior

**PASS**

The same physical Wall Horn/Strobe was clicked twice. The first click counted once; the second returned `ALREADY COUNTED`; the tally remained unchanged.

## Negative Clicks

**PASS**

With a category selected, clicks on empty space and unrelated source regions produced no additional mark or tally increment.

## Zoom and Pan

**PASS**

- Zoom reached 125%.
- Reset returned the view to 100%.
- A real pan changed offsets to approximately `(10, 6.7)`.
- The source frame and interaction layer remained attached during the transform.

## Mobile

**PASS**

At a 390px viewport, the Electrical 109 `S` target was physically tapped and counted. Document scroll width remained 375px, so there was no horizontal overflow. Debug labels were absent from normal mode.

## Full Reconciliation

The current source-supported total is **45**, not 44:

- Existing approved set: 44 devices, including 8 S records.
- Confirmed Electrical 109 S addition: +1.
- Corrected total: **45**.

Fresh no-cross-off reconciliation:

- Marked: 45
- Entered final quantities: all category rows
- Result: **45/45 — 100%**

## Scope

Only Exercise 002 Wall Speaker/Strobe geometry, its ninth S record, expected Wall Speaker/Strobe quantity, related answer/report documentation, and reusable S presentation handling were involved. Exercise 001, Exercise 003, their quantities and mappings, source PNGs, Product Library, quiz banks, simulator, global scoring, and navigation were not modified during this final direct-click QA pass.

No commit or GitHub push was made.
