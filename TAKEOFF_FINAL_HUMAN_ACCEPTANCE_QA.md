# Takeoff Drawing Exercises
# Final Human-Use Acceptance QA

## Verdict

**FAIL.** The normal desktop drawing experience supports direct clicks on the visible source symbols for the approved mapped devices, but the final human-use acceptance standard is not met because:

1. Exercise 001 maps `test-002` and `duct-002` to the exact same visible source location. The source screenshot shows one orange mark there, so a first-day trainee cannot visually distinguish two devices.
2. At a normal mobile viewport of `390px`, the fixed navigation consumes most of the width and the drawing collapses into a narrow vertical strip. A trainee cannot reasonably locate or tap the actual device symbols.

No code, exercise data, quantity, mapping, or source PNG was changed during this acceptance pass.

## Method

- Used the normal Takeoff URL without `?takeoffDebug=1`.
- Opened Exercises 001, 002, and 003 through the normal webpage.
- Reviewed the visible key, notes, and source drawing screenshots.
- Clicked screen coordinates at the visible symbol locations with mouse input. Marker elements were not clicked directly.
- Used the approved source mappings only to identify which visible source symbol was being tested.
- DOM/reconciliation results were treated as supporting evidence only; the screenshot and human-visible result controlled the verdict.

## Exercise 001

Approved total: **44**

| Category | Device IDs tested at visible source symbols | Direct visible click | Highlight/source alignment | Result |
|---|---|---|---|---|
| FACP | `facp-001` | Pass | Pass | Pass |
| FAA | `faa-001` | Pass | Pass | Pass |
| Smokes | `smoke-001` through `smoke-010` | Pass, 10/10 | Pass | Pass |
| R of R Heats | `ror-heat-001` through `ror-heat-003` | Pass, 3/3 | Pass | Pass |
| Test Stations | `test-001`, `test-002` | `test-001` pass; `test-002` shares a source point with `duct-002` | Source point is not uniquely distinguishable | **Fail** |
| Duct Smokes | `duct-001`, `duct-002` | `duct-001` pass; `duct-002` shares a source point with `test-002` | Source point is not uniquely distinguishable | **Fail** |
| Wall Speaker/Strobes | `wall-speaker-strobe-001` through `wall-speaker-strobe-009` | Pass, 9/9 | Pass | Pass |
| Wall Horn/Strobes | `wall-horn-strobe-001` through `wall-horn-strobe-006` | Pass, 6/6 | Pass | Pass |
| Pulls | `pull-001` through `pull-004` | Pass, 4/4 | Pass | Pass |
| CR's | `cr-001` through `cr-003` | Pass, 3/3 | Pass | Pass |
| Waterflow | `waterflow-001` | Pass | Pass | Pass |
| Door Holders | `door-holder-001` | Pass | Pass | Pass |
| Tamper | `tamper-001` | Pass | Pass | Pass |

The visible drawing shows the 9 S symbols as YELLOW Wall Speaker/Strobes, the 6 HS symbols as separate YELLOW Wall Horn/Strobes, ORANGE Test Station presentation, RED Smoke presentation, and LIGHT BLUE Heat presentation. Smoke and Heat geometry is visibly different in both key and drawing.

## Exercise 002

Approved total: **45**

| Category | Device IDs tested at visible source symbols | Direct visible click | Highlight/source alignment | Result |
|---|---|---|---|---|
| FACP | `facp-001` | Pass | Pass | Pass |
| FAA | `faa-001` | Pass | Pass | Pass |
| Smokes | `smoke-001` through `smoke-012` | Pass, 12/12 | Pass | Pass |
| R of R Heats | `ror-heat-001` | Pass, 1/1 | Pass | Pass |
| Heat Detectors | `ror-heat-002`, `ror-heat-003` | Pass, 2/2 | Pass | Pass |
| Test Stations | `test-001` | Pass | Pass | Pass |
| Duct Smokes | `duct-001`, `duct-002` | Pass, 2/2 | Pass | Pass |
| Wall Strobes | No approved mapped devices | Not applicable | Not applicable | Pass |
| Wall Horn/Strobes | `wall-horn-strobe-001` through `wall-horn-strobe-006` | Pass, 6/6 | Pass | Pass |
| Wall Speaker/Strobes | `wall-speaker-strobe-001` through `wall-speaker-strobe-009` | Pass, 9/9 | Pass | Pass |
| Pulls | `pull-001` through `pull-004` | Pass, 4/4 | Pass | Pass |
| CR's | `cr-001` through `cr-003` | Pass, 3/3 | Pass | Pass |
| Waterflow | `waterflow-001` | Pass | Pass | Pass |
| Door Holders | `door-holder-001` | Pass | Pass | Pass |
| Tamper | `tamper-001` | Pass | Pass | Pass |

## Exercise 003

Approved total: **36**. There are no approved Smoke or Heat mapped devices in this exercise; no detector mappings were invented.

| Category | Device IDs tested at visible source symbols | Direct visible click | Highlight/source alignment | Result |
|---|---|---|---|---|
| FACP | `ex003-facp-001` | Pass | Pass | Pass |
| FAA | `ex003-faa-001` | Pass | Pass | Pass |
| Door Holders | `ex003-dh-001` through `ex003-dh-003` | Pass, 3/3 | Pass | Pass |
| Waterflow | `ex003-wf-001` | Pass | Pass | Pass |
| Tamper | `ex003-tamper-001` through `ex003-tamper-003` | Pass, 3/3 | Pass | Pass |
| CR's | `ex003-cr-001` through `ex003-cr-003` | Pass, 3/3 | Pass | Pass |
| Test Stations | `ex003-test-001` through `ex003-test-004` | Pass, 4/4 | Pass | Pass |
| Duct Smokes | `ex003-duct-001` through `ex003-duct-003` | Pass, 3/3 | Pass | Pass |
| Wall Speaker/Strobes | `ex003-ss-001` through `ex003-ss-005` | Pass, 5/5 | Pass | Pass |
| Wall Horn/Strobes | `ex003-hs-001` through `ex003-hs-003` | Pass, 3/3 | Pass | Pass |
| Pulls | `ex003-pull-001` through `ex003-pull-009` | Pass, 9/9 | Pass | Pass |

## Wrong-category tests

- Exercise 001: selecting Smokes and clicking the visible `ror-heat-001` did not count; selecting R of R Heats and clicking that same visible heat counted it.
- Exercise 002: selecting Smokes and clicking the visible `ror-heat-001` did not count; selecting R of R Heats and clicking it counted it.
- Exercise 003: selecting Pulls and clicking the visible `ex003-cr-001` did not count; selecting CR's and clicking it counted it.
- The shared direct-symbol mechanism therefore rejected the tested wrong categories without nearest-device substitution.

## Nearby-device tests

- Exercise 001: `test-002` and `duct-002` are an exact-coordinate pair (`distance 0`). Both category selections can count the point, but the source screenshot presents one visible orange mark. This is the human-use failure.
- Exercise 002: closest tested pair was `smoke-006` and `wall-speaker-strobe-006`; each counted independently when its own category was selected.
- Exercise 003: closest tested pair was `ex003-tamper-003` and `ex003-pull-008`; each counted independently when its own category was selected.

## Duplicate and state controls

- Same visible Smoke clicked twice: first click counted; second returned `ALREADY COUNTED`; tally stayed at 1.
- Undo removed the most recent visible-device mark.
- Clear All returned the visible-device tally to zero.
- Reset Exercise returned the exercise to its initial awaiting state. A fresh normal-page run was required before reviewing the key and notes again.

## Color and symbol consistency

- Exercise 001 S/Wall Speaker-Strobes: YELLOW.
- Exercise 001 HS/Wall Horn-Strobes: YELLOW and separate from S.
- Exercise 001 Test Stations: ORANGE.
- Smoke: RED.
- Heat: LIGHT BLUE.
- Key Smoke symbol: circular outline, center dot, and cardinal details.
- Drawing Smoke symbol: same circular geometry.
- Key Heat symbol: diamond outline, internal cross, and center dot.
- Drawing Heat symbol: same diamond geometry.
- Source symbols remain visible beneath the presentation layer; no large translucent blob or room-sized rectangle was observed at desktop size.

## Zoom, pan, and mobile

- Desktop screenshots showed the drawing and source symbols at 100% and 125%, with a real pan producing a translated drawing view.
- A later coordinate-only transform run returned zero because its viewport coordinate reference was stale; those zeroes are not accepted as human-use pass evidence.
- Mobile screenshot at `390px` is a confirmed **FAIL**: the fixed sidebar remains wide, the main content is squeezed, and the drawing becomes a narrow vertical strip. Direct trainee use is not reasonable in this state.
- The mobile page had no horizontal document overflow (`scrollWidth` 375 versus viewport 390), but absence of overflow does not compensate for the unusable collapsed drawing.

## Reconciliation and runtime audit

Supporting reconciliation results were:

- Exercise 001: `44/44`, `100%`.
- Exercise 002: `45/45`, `100%`.
- Exercise 003: `36/36`, `100%`.

The runtime audit was run at the end on the normal local audit page and displayed exactly:

`PASS — ALL RUNTIME CHECKS PASSED`

That audit does not override the two human-visible acceptance failures above.

## Required follow-up

Before declaring final human acceptance, independently resolve the Exercise 001 source/mapping ambiguity for `test-002` and `duct-002`, and make the mobile layout present the source drawing at a usable width with directly tappable visible symbols. Do not enlarge invisible hit boxes or alter quantities without source evidence.

No commit or GitHub push was made.

## Exercise 003 source update addendum

The authoritative source for Exercise 003 was subsequently updated to `Takeoff Drawings/97b81900-4fe0-4767-befe-a26e76618bee.png`. The old Prairie Medical mapping described earlier in this report is retired and must not be used for Exercise 003 acceptance.

The new source inventory is exactly 36 devices: FACP 1, FAA 1, Smokes 19, Heat Detectors 1, R of R Heats 1, Test Stations 1, Duct Smokes 2, Wall Horn/Strobes 5, Wall Speaker/Strobes 0, Pulls 3, CR's 0, Waterflow 1, Door Holders 1, and Tamper 0. The new legend uses circle `S`, diamond `H`, and diamond `R`; the key and drawing presentation were updated to match those symbols.

Normal-page validation after the source update loaded the new PNG at 1536x1024, counted all 36 mapped locations by visible source coordinates, and reconciled at `36/36`, `100%`. The source PNG was not modified. A new human-visibility review of the replacement drawing remains required before declaring the overall acceptance verdict resolved; the earlier Exercise 001 overlap and mobile-layout failures remain separate blockers.