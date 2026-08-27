# Exercise 001 Visual Acceptance

Exercise: `TAKEOFF PRACTICE 001`
Project: `SUNSET BUSINESS CENTER`
Drawing: `FA-101`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png`
Test URL: normal Exercise 001 page, without `?takeoffDebug=1`

## Overall Result

**PASS**

Exercise 001 passes visual acceptance and is suitable for Guided Count training.

## Source and Approved Scope

- Native source dimensions: **1402 x 1122**
- Approved mapped total: **44**
- Smokes: **10**
- Test Stations: **2**
- Nine orange `S` symbols are confirmed Wall Speaker/Strobes and included in scoring with Ban-Koe training color YELLOW.

## Smoke Visual Alignment

**10/10 PASS**

The normal Exercise 001 drawing was opened, `Smokes` was selected, and all 10 visible Smoke symbols were physically clicked directly on the source drawing. Each click:

- Marked exactly one Smoke.
- Increased the Smoke tally by exactly 1.
- Added a translucent red highlight while leaving the source symbol readable.
- Placed the highlight directly over the visible Smoke symbol, including the corrected Office 108 `smoke-010`.

Final Smoke tally: **10**.

A post-click visual screenshot showed no Smoke highlight displaced from its source symbol.

## Test Station Visual Alignment

**2/2 PASS**

Both visible `TS` symbols were physically clicked directly on the source drawing. Each received an orange highlight over the source symbol and incremented the Test Stations tally. No unrelated device counted.

Final Test Station tally: **2**.

## All Other Categories

**PASS**

The following categories were physically tested by selecting each category and clicking its visible mapped symbols:

- FACP: 1/1
- FAA: 1/1
- R of R Heats: 3/3
- Duct Smokes: 2/2
- Wall Horn/Strobes: 6/6
- Wall Speaker/Strobes: 9/9
- Pulls: 4/4
- CR's: 3/3
- Waterflow: 1/1
- Door Holders: 1/1
- Tamper: 1/1

The `Wall Strobes` category has zero approved mapped regions. The 9 orange `S` symbols are separately mapped as Wall Speaker/Strobes.

## Negative Click Test

**PASS**

With `Smokes` selected, physical clicks on the following did not change the tally, create a mark, or count a wrong device:

- Empty drawing space
- Wall
- Room label
- Notes
- Pull
- Heat Detector
- Speaker/Strobe
- Test Station

Result: **0 false-positive clicks**.

## Visual Hit-Region Test

**PASS**

- Displaced hit regions: **0**
- Overlapping hit regions: **0**
- Every approved active target was reachable by clicking the visible source symbol directly.
- No enlarged hit region was used to compensate for a displaced coordinate.
- The original source drawing remained unchanged.

The normal screenshot showed no debug boxes, IDs, coordinates, or debug overlays.

## Category Filtering

**PASS**

Selecting a category enabled only that category's mapped target regions. Inactive categories did not intercept clicks and did not count when selected Smokes were tested.

## Zoom and Pan

**PASS**

- Marked a Smoke at 100%.
- Zoomed to 125%.
- Confirmed the image and interaction layer remained together.
- Reset to 100%.
- Performed a real pan from an empty drawing area.
- Verified the viewport offset changed.
- Clicked another active Smoke after panning and confirmed the tally increased.

## Human Usability

**PASS**

A trainee can identify the source-colored device, select its category, and click the symbol itself. The visible highlight follows the source symbol, and the task rail displays the selected category and associated color without requiring manual color selection for Exercise 001.

## Final Reconciliation

**44/44 — 100%**

From a fresh reset, all 44 approved mapped devices were physically marked, all 44 were crossed off, final quantities were entered, and reconciliation returned `CORRECT` at **100%**.

## Runtime Audit

`runtime-audit.html`: **PASS — ALL RUNTIME CHECKS PASSED**

No code or data was modified during the visual acceptance test itself. No commit or GitHub push was made.
