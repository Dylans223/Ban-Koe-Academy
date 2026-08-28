# Exercise 004 Final QA

## Source and Counts

- Source: `Takeoff Drawings/exercise-004-source.png`
- Native dimensions: 1536 x 1024
- Source = mapped = expected: **66 = 66 = 66**

| Category | Expected | Direct source-click result |
| --- | ---: | --- |
| Smokes | 33 | 33/33 PASS |
| Heat Detectors | 0 | 0/0 PASS |
| R of R Heats | 0 | 0/0 PASS |
| Test Stations | 2 | 2/2 PASS |
| Duct Smokes | 2 | 2/2 PASS |
| Wall Horn/Strobes | 9 | 9/9 PASS |
| Wall Speaker/Strobes | 6 | 6/6 PASS |
| Wall Strobes | 0 | 0/0 PASS |
| Ceiling Horn/Strobes | 1 | 1/1 PASS |
| Ceiling Speaker/Strobes | 3 | 3/3 PASS |
| Ceiling Strobes | 0 | 0/0 PASS |
| Pulls | 4 | 4/4 PASS |
| CR/CT Devices | 3 | 3/3 PASS |
| Waterflow | 1 | 1/1 PASS |
| Door Holders | 0 | 0/0 PASS |
| Tamper Switches | 2 | 2/2 PASS |
| FACP | 0 | 0/0 PASS |
| FAA | 0 | 0/0 PASS |
| **Total** | **66** | **66/66 PASS** |

## Initial State

PASS. Fresh Exercise 004 opens with the black-and-white source PNG, zero marked locations, and zero detector overlays. The Key may show training colors; the drawing does not pre-color devices.

## Wall/Ceiling Tests

PASS. Wall-mounted HS, S, and O records use the source symbol plus attached wall line. Ceiling HS and S records use the circled source symbol. Each wall/ceiling category was selected separately and its visible source symbols counted without cross-category substitution.

## Direct Clicks

PASS. The full sweep used mouse clicks at visible source-image coordinates, not hidden marker-element centers. Each accepted click immediately updated its exact category tally and produced the corresponding training mark.

## Category Filtering and Negative Tests

PASS. Selecting a category enabled only that category's records. Wrong device type and wrong mounting type did not count. Empty areas and non-selected categories did not add marks or tally.

## Duplicate

PASS. Clicking the same visible Smoke twice returned `ALREADY COUNTED`; the tally increased only once.

## Undo, Clear All, Reset

PASS. Clear All removed all marked locations, overlays, and nonzero tallies. Reset returned the exercise to its clean initial state.

## Zoom and Pan

PASS. At 125%, a visible source-coordinate click counted. Reset View returned to 100%. Pan changed the shared drawing transform, and marks remained attached to the drawing; Clear All restored zero marks and overlays.

## Mobile

PASS. At approximately 390px, the document had no horizontal overflow (`scrollWidth` 375, `clientWidth` 375) and the source frame remained proportionally rendered. The source image remained available for direct touch-style interaction through the existing pointer path.

## Reconciliation

PASS. Final quantities entered from the approved inventory reconciled as:

- Correct categories: 18 / 18
- Devices accounted for: 66 / 66
- Quantity accuracy: 100%
- Overall score: 100%

Expected quantities were not needed or exposed before final submission; the final results showed the reconciliation summary after submission.

## Regression

Exercises 001, 002, and 003 remain registered and were not modified. Their existing source data and direct-click architecture were preserved.

## Final Determination

Exercise 004 is complete only because the source PNG count, mapping count, expected total, and visible-device direct-click results agree at **66**. No source PNG was modified. No commit or GitHub push was made.
