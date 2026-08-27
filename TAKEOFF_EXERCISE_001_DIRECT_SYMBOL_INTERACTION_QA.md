# Exercise 001 Direct-Symbol Interaction QA

Exercise: `TAKEOFF PRACTICE 001`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png`
Source dimensions: **1402 x 1122**

## Scope

This pass preserved the source-frame architecture and all approved quantities. The only behavior correction was the Exercise 001 Test Station training highlight color: Test Stations now use PINK. The source PNG remains unchanged; its orange `TS` symbols are not recolored.

## Direct-Symbol Acceptance

**PASS**

The trainee can look at the visible device symbol, place the cursor directly on that symbol, and click it without hunting for a separate invisible box. The exact mapped device counts and a translucent category-color highlight appears over the source symbol.

## Physical Category Results

| Category | Expected | Physically Tested | Result | Training highlight |
| --- | ---: | ---: | --- | --- |
| FACP | 1 | 1 | PASS | DARK BLUE |
| FAA | 1 | 1 | PASS | DARK BLUE |
| Smokes | 10 | 10 | PASS | RED |
| R of R Heats | 3 | 3 | PASS | LIGHT BLUE |
| Test Stations | 2 | 2 | PASS | PINK |
| Duct Smokes | 2 | 2 | PASS | ORANGE |
| Wall Horn/Strobes | 6 | 6 | PASS | YELLOW |
| Wall Speaker/Strobes | 9 | 9 | PASS | YELLOW |
| Pulls | 4 | 4 | PASS | GREEN |
| CR's | 3 | 3 | PASS | PINK |
| Waterflow | 1 | 1 | PASS | PINK |
| Door Holders | 1 | 1 | PASS | PINK |
| Tamper | 1 | 1 | PASS | PINK |

Excluded zero-record categories:

- Fixed Heats: 0
- Wall Strobes: 0

Approved total physically tested: **44/44**.

## Critical Color Checks

- Wall Speaker/Strobes selected color: `YELLOW`.
- All 9 confirmed orange `S` symbols counted under Wall Speaker/Strobes.
- Wall Speaker/Strobe highlight: translucent YELLOW.
- Test Stations selected color: `PINK`.
- Both actual orange `TS` symbols counted under Test Stations.
- Test Station highlight: translucent PINK.
- The original orange source symbols remained unchanged.

## Category Filtering

**PASS**

Only the selected category's mapped regions were active. The physical sweep confirmed:

- Smokes: 10 active regions.
- Test Stations: 2 active regions.
- Wall Horn/Strobes: 6 active regions.
- Wall Speaker/Strobes: 9 active regions.
- All other categories matched their approved mapped counts.

HS and S remain separate categories. No HS device counted as an S, and no S device counted as an HS.

## Negative Test

**PASS**

With Smokes selected, clicks on empty space, walls, and unrelated device regions produced no mark and no tally change. Inactive category regions did not intercept pointer events.

Negative result: **0 false-positive marks**.

## Duplicate Test

**PASS**

A confirmed Wall Speaker/Strobe was clicked twice:

- First click: counted once.
- Second click: `ALREADY COUNTED`.
- Tally remained at 1.

## Source Alignment and Hit Regions

**PASS**

- All 44 approved locations use the shared source-aspect frame.
- No giant 44px marker minimum is applied.
- Hit regions remain source-centered and category-specific.
- No nearest-device or nearest-category fallback exists.
- The source image and interaction layer share the same transform.
- No overlapping regions were observed in the corrected approved set.

## Other Interaction Checks

- Undo: PASS.
- Clear All: PASS.
- Reset: PASS.
- Zoom: PASS.
- Pan: PASS.
- Mobile marking: PASS with no horizontal overflow.
- Normal mode: PASS with no debug labels or boxes.
- Debug mode remains available only through `?takeoffDebug=1`.

## Final Reconciliation

From a fresh reset, every approved category was selected and every approved mapped device was physically clicked. All marked devices were crossed off, final quantities were entered, and the takeoff was reconciled.

- Marked: 44
- Crossed off: 44
- Approved total: 44
- Reconciliation: **44/44 — 100%**

## Scope Protection

Exercise 002 and Exercise 003 were not modified. Their mappings, quantities, answer keys, and source drawings remain unchanged. Smoke coordinates were not changed. The Exercise 001 source PNG, Product Library, quiz banks, simulator, global scoring, and navigation were not modified.

No commit or GitHub push was made.
