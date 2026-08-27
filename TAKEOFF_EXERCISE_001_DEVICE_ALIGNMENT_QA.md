# Exercise 001 Device Alignment QA

Exercise: `TAKEOFF PRACTICE 001`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png`
Source dimensions: **1402 x 1122**

## Method

The normal Exercise 001 page was used for physical category testing. The development-only `?takeoffDebug=1` view was used to inspect source-frame geometry and confirm marker centers against the source image. No Exercise 002 or Exercise 003 data was changed. The working Smoke coordinates were not changed.

## Category Results

| Category | Expected | Physically Tested | Correctly Aligned | Result |
| --- | ---: | ---: | ---: | --- |
| FACP | 1 | 1 | 1 | PASS |
| FAA | 1 | 1 | 1 | PASS |
| Smokes | 10 | 10 | 10 | PASS |
| R of R Heats | 3 | 3 | 3 | PASS |
| Fixed Heats | 0 | 0 | 0 | PASS / no approved records |
| Test Stations | 2 | 2 | 2 | PASS |
| Duct Smokes | 2 | 2 | 2 | PASS |
| Wall Strobes | 0 | 0 | 0 | PASS / no approved Wall Strobe records |
| Wall Horn/Strobes | 6 | 6 | 6 | PASS |
| Wall Speaker/Strobes | 8 | 8 | 8 | PASS |
| Pulls | 4 | 4 | 4 | PASS |
| CR's | 3 | 3 | 3 | PASS |
| Waterflow | 1 | 1 | 1 | PASS |
| Door Holders | 1 | 1 | 1 | PASS |
| Tamper | 1 | 1 | 1 | PASS |

Total approved devices physically tested: **44/44**.

## Source-Frame Geometry

- Source-aspect frame: `1402 / 1122`.
- Source image and interaction frame occupied the same rendered rectangle.
- Normalized marker centers were checked against the image rectangle, not the viewport rectangle.
- Marker regions use source-defined dimensions; the global 44px button minimum is overridden.
- All approved category targets remained source-centered after the frame correction.
- Remaining displaced devices: **0 observed**.
- Remaining overlapping hit regions: **0** after source-specific sizing of adjacent regions.

## Physical Category Testing

Every approved Exercise 001 category was selected and its mapped devices were clicked through the normal page. Results matched the expected mapped counts:

- Smokes: 10/10, including direct clicks on all ten Smoke symbols.
- Test Stations: 2/2, including both visible `TS` symbols.
- Pulls: 4/4.
- Heat Detectors / R of R Heats: 3/3.
- Duct Smokes: 2/2.
- Wall Horn/Strobes: 6/6.
- Wall Speaker/Strobes: 9/9, including all nine project-owner-confirmed orange `S` symbols.
- FACP: 1/1.
- FAA: 1/1.
- CR's: 3/3.
- Waterflow: 1/1.
- Door Holders: 1/1.
- Tamper: 1/1.

Highlights remained directly over the visible source symbols, including the visually inspected Wall Horn/Strobe state and the close Test Station/Speaker-Strobe pair.

## Category Filtering

**PASS**

When a category was selected, only its mapped regions were active. Inactive categories used `pointer-events: none` and did not intercept clicks. The six `HS` symbols remain Wall Horn/Strobes and the nine `S` symbols are separately mapped as Wall Speaker/Strobes.

## Negative Test

**PASS**

With Smokes selected, clicks on empty space, walls, room labels, notes, Pulls, Heat Detectors, Speaker/Strobes, and Test Stations produced no mark and no tally change.

False-positive clicks: **0**.

## Duplicate Behavior

**PASS**

Clicking the same stable device twice produced:

- First click: counted once.
- Second click: `ALREADY COUNTED`.
- Tally remained unchanged after the second click.

## Zoom / Pan

**PASS**

- Zoomed from 100% to 125% and retained the shared source frame.
- Reset to 100% successfully.
- Performed a real pan and confirmed nonzero viewport offsets.
- Marked another active device after panning.

## Mobile

**PASS**

At a 390px viewport, a selected-category device marked correctly. Document scroll width remained within the viewport and inactive markers did not intercept the tap.

## Debug and Normal Mode

- Normal mode: **PASS**, no debug boxes, IDs, coordinate labels, or debug overlays.
- Debug mode: **PASS**, mapped device IDs/categories/coordinates are visible for geometry inspection.

## Coordinate Data

**No Smoke coordinates were changed.** The confirmed source coordinate for `test-002` was corrected to the actual second TS symbol; nine Wall Speaker/Strobe records were added at the confirmed orange `S` locations.

Exercise 001 now has 6 Wall Horn/Strobes and 9 Wall Speaker/Strobes, per authoritative project-owner counts.

## Remaining Issues

None observed for the approved Exercise 001 device categories. The nine orange `S` symbols are confirmed Wall Speaker/Strobes and included in the approved scored set.

No commit or GitHub push was made.
