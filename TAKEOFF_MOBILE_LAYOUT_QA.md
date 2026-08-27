# Takeoff Mobile Layout QA

## Scope

This QA covers the responsive layout change for the Takeoff page at a 390px viewport. Exercise data, device coordinates, mappings, source PNGs, S/H/R symbols, colors, and desktop interaction code were not changed.

## Mobile layout result

**PASS.** The fixed desktop sidebar was replaced at the Takeoff mobile breakpoint with a compact full-width top navigation. The Takeoff parent grid now uses one flexible column, and mobile panel padding was reduced so the drawing can use the available content width.

Measured at 390px viewport width:

- Layout viewport: `390px`.
- Document width: `375px` with no horizontal overflow.
- Mobile content width: `375px`.
- Exercise 003 drawing frame: approximately `315px` wide inside the padded content area.
- Source image layer: approximately `313px` wide and `208.7px` high.
- Native image aspect ratio preserved: `1536 / 1024 = 1.5`.
- No debug query, debug labels, or coordinate boxes used.

The former mobile state rendered the drawing at approximately 45px wide. The corrected state presents the complete source drawing at a usable width with the architectural plan and device symbols visible in the normal screenshot.

## Required direct visible-symbol taps

Using the normal Exercise 003 URL at 390px, the source drawing was visually inspected first. Each tap was sent to the visible symbol location after the category/color controls were changed and the drawing was allowed to reflow.

| Visible source symbol | Category | Device tested | Result |
|---|---|---|---|
| Circle containing S | Smokes | `ex003-smoke-001` | PASS, count 1 |
| Diamond containing H | Heat Detectors | `ex003-heat-001` | PASS, count 1 |
| Diamond containing R | R of R Heats | `ex003-ror-heat-001` | PASS, count 1 |
| TS | Test Stations | `ex003-test-001` | PASS, count 1 |
| D | Duct Smokes | `ex003-duct-001` | PASS, count 1 |
| HS | Wall Horn/Strobes | `ex003-hs-001` | PASS, count 1 |
| P | Pulls | `ex003-pull-001` | PASS, count 1 |

The seven taps incremented the expected category tallies. No invisible enlarged touch zones were added.

## Desktop regression

Normal desktop direct-symbol sweeps after the mobile CSS change produced:

- Exercise 001: `44` mapped devices counted.
- Exercise 002: `45` mapped devices counted.
- Exercise 003: `36` mapped devices counted.

Exercise 003 state checks passed:

- Wrong category: visible H did not count while Smokes was selected; it counted after Heat Detectors was selected.
- Empty space: no count.
- Duplicate visible click: `ALREADY COUNTED`; tally unchanged.
- Undo: removed the most recent count.
- Clear All: returned count to zero.
- Reset: returned the exercise to its initial state.
- Zoom 100% to 125% and back: direct visible clicks remained functional.
- Pan: blank-area drag moved the drawing; a device remained directly clickable after panning.

## Preservation checks

- Exercise 003 source data and device coordinates were not changed for this layout fix.
- Exercise 003 source PNG was not changed.
- Exercise 001 and Exercise 002 data were not changed.
- Desktop drawing frame and direct-click mechanics were preserved.
- Source image and click layer continue to share the same transformed frame.
- No colored blobs, debug labels, or distorted PNG rendering were observed.

## Final audit

`get_errors` reported no errors for the modified Takeoff CSS. The final runtime audit displayed:

`PASS — ALL RUNTIME CHECKS PASSED`

No commit or GitHub push was made.
