# Exercise 003 Final Source and Click QA

## Verdict

**FAIL for final human acceptance.**

The new PNG independently verifies exactly 36 physical devices, and the normal desktop Exercise 003 page supports direct visible-symbol clicking for all 36 mapped devices. The final acceptance is not complete because the mobile presentation collapses the drawing into a narrow vertical strip, making direct human location and touch use unreasonable at a 390px viewport.

No application or source PNG changes were made during the source inventory and click audit. This report was created after the read-only audit.

## Source under audit

- PNG: `Takeoff Drawings/97b81900-4fe0-4767-befe-a26e76618bee.png`
- Native dimensions: `1536 x 1024`
- Legend symbols were excluded from the device count.
- Native coordinates below are measured symbol-center coordinates in PNG pixels, rounded to the nearest pixel.

## Independent source inventory

### Control and annunciation

| Category | Symbol | Room/location | Native PNG X/Y | Count |
|---|---|---|---:|---:|
| FACP | FACP | Left side of plan, fire alarm control panel | 45, 574 | 1 |
| FAA | FA | Left side of plan, fire alarm annunciator | 45, 427 | 1 |

### Smoke detectors

| Category | Symbol | Room/location | Native PNG X/Y | Count |
|---|---|---|---:|---:|
| Smoke Detectors | S in circle | Classroom 301 | 138, 164; 352, 181; 318, 247 | 3 |
| Smoke Detectors | S in circle | Lab 305 | 536, 193; 720, 181; 819, 199 | 3 |
| Smoke Detectors | S in circle | Open Area 307 | 422, 322; 723, 321; 919, 321; 1044, 321 | 4 |
| Smoke Detectors | S in circle | Consult 309 | 167, 370 | 1 |
| Smoke Detectors | S in circle | Nurse Station 310 | 482, 421 | 1 |
| Smoke Detectors | S in circle | Electrical 309 | 1078, 400 | 1 |
| Smoke Detectors | S in circle | Waiting 314 | 192, 517 | 1 |
| Smoke Detectors | S in circle | Office 313 | 495, 573 | 1 |
| Smoke Detectors | S in circle | Office 314 | 728, 573 | 1 |
| Smoke Detectors | S in circle | Break Room 315 | 915, 620 | 1 |
| Smoke Detectors | S in circle | Conference 312 | 1081, 522 | 1 |
| **Smoke Detectors subtotal** | **S in circle** |  |  | **19** |

### Heat, test, and duct devices

| Category | Symbol | Room/location | Native PNG X/Y | Count |
|---|---|---|---:|---:|
| Heat Detector | H in diamond | Mechanical 308 | 995, 369 | 1 |
| Rate-of-Rise Heat | R in diamond | Lab 305 | 628, 235 | 1 |
| Test Station | TS | Open Area 307 | 381, 331 | 1 |
| Duct Smoke Detectors | D | Open Area 307 / return air | 843, 328 | 1 |
| Duct Smoke Detectors | D | Lower plan / return air | 140, 917 | 1 |

### Notification and initiating devices

| Category | Symbol | Room/location | Native PNG X/Y | Count |
|---|---|---|---:|---:|
| Wall Horn/Strobes | HS | Classroom 301, north wall | 364, 131 | 1 |
| Wall Horn/Strobes | HS | Lab 305, north wall | 805, 129 | 1 |
| Wall Horn/Strobes | HS | Corridor 311 | 786, 596 | 1 |
| Wall Horn/Strobes | HS | Conference 312 | 1048, 697 | 1 |
| Wall Horn/Strobes | HS | Conference 312 | 1048, 762 | 1 |
| **Wall Horn/Strobes subtotal** | **HS** |  |  | **5** |
| Wall Speaker/Strobes | S in square | Drawing plan | No physical plan symbols found; legend only | 0 |
| Pull Stations | P | Stair A | 207, 705 | 1 |
| Pull Stations | P | Stair A, lower landing | 342, 862 | 1 |
| Pull Stations | P | Stair B | 1039, 800 | 1 |
| **Pull Stations subtotal** | **P** |  |  | **3** |

### Auxiliary devices

| Category | Symbol | Room/location | Native PNG X/Y | Count |
|---|---|---|---:|---:|
| Control Relays | CR | No physical plan symbols found; legend only |  | 0 |
| Waterflow Switch | WF | South wall | 544, 928 | 1 |
| Door Holder | DH | Women 304 | 312, 518 | 1 |
| Tamper Switch | T | No physical plan symbols found; legend only |  | 0 |

## Independent source total

| Category | Source PNG count | Current Exercise 003 data | Difference |
|---|---:|---:|---:|
| FACP | 1 | 1 | 0 |
| Fire Alarm Annunciator | 1 | 1 | 0 |
| Smoke Detectors | 19 | 19 | 0 |
| Heat Detectors | 1 | 1 | 0 |
| Rate-of-Rise Heats | 1 | 1 | 0 |
| Test Stations | 1 | 1 | 0 |
| Duct Smoke Detectors | 2 | 2 | 0 |
| Wall Horn/Strobes | 5 | 5 | 0 |
| Wall Speaker/Strobes | 0 | 0 | 0 |
| Pull Stations | 3 | 3 | 0 |
| Control Relays | 0 | 0 | 0 |
| Waterflow Switch | 1 | 1 | 0 |
| Door Holder | 1 | 1 | 0 |
| Tamper Switch | 0 | 0 | 0 |
| **TOTAL** | **36** | **36** | **0** |

**Source status: SOURCE VERIFIED.** The PNG contains exactly 36 physical plan devices after excluding legend-only symbols, and the current Exercise 003 data matches the source category by category.

## Key and source-symbol consistency

The normal Exercise 003 key was inspected and contains the same source-specific symbols:

- Smoke: circle containing `S`, RED.
- Heat: diamond containing `H`, LIGHT BLUE.
- Rate-of-Rise Heat: diamond containing `R`, LIGHT BLUE.
- Test Station: `TS`, ORANGE.
- Duct Smoke: `D`, ORANGE.
- Wall Horn/Strobe: `HS`, YELLOW.
- Wall Speaker/Strobe: `S` in square, YELLOW, legend only.
- Pull: `P`, GREEN.
- CR: `CR`, PINK, legend only.
- Waterflow: `WF`, PINK.
- Door Holder: `DH`, PINK.
- Tamper: `T`, PINK, legend only.

No large translucent detector blobs or architectural-covering rectangles were observed in the desktop drawing presentation. The source PNG remains visible beneath the presentation layer.

## Direct visible-symbol click audit

Method: normal URL, no debug query, source image inspected first, then `page.mouse` clicks at the measured visible symbol coordinates transformed into the displayed drawing. DOM marker elements were not clicked as the acceptance action.

| Category | Visible devices clicked | Counted at visible symbol | Result |
|---|---:|---:|---|
| FACP | 1 | 1 | PASS |
| FAA | 1 | 1 | PASS |
| Smokes | 19 | 19 | PASS |
| Heat Detectors | 1 | 1 | PASS |
| R of R Heats | 1 | 1 | PASS |
| Test Stations | 1 | 1 | PASS |
| Duct Smokes | 2 | 2 | PASS |
| Wall Horn/Strobes | 5 | 5 | PASS |
| Wall Speaker/Strobes | 0 | 0 | PASS / not applicable |
| Pulls | 3 | 3 | PASS |
| CR's | 0 | 0 | PASS / not applicable |
| Waterflow | 1 | 1 | PASS |
| Door Holders | 1 | 1 | PASS |
| Tamper | 0 | 0 | PASS / not applicable |
| **TOTAL** | **36** | **36** | **PASS** |

Every nonzero mapped device counted when clicked at the visible source symbol location. No device required clicking beside its symbol during the desktop audit.

## Hit-region and interference checks

- Marker regions were inspected against the source-symbol locations and were centered by the shared `translate(-50%, -50%)` marker rule.
- Marker dimensions are small source-relative regions, not 44px minimum buttons or room-sized rectangles.
- No visible marker rectangle was used as the acceptance target.
- Empty-space click: no count.
- Wrong category: selecting Smokes and clicking the visible `H` did not count; selecting Heat Detectors and clicking that same visible `H` counted it.
- Nearby pair: the closest tested source pair was `ex003-smoke-007` and `ex003-test-001`; clicking each with its own category selected counted only the selected visible device.
- Duplicate: clicking the same visible Smoke twice returned `ALREADY COUNTED` and left the tally at 1.

## State and transform checks

- Undo removed the most recent visible-device count.
- Clear All removed counts.
- Reset returned the exercise to its initial state.
- 100%: visible Smoke click counted.
- 125%: another visible Smoke click counted.
- Reset to 100%: another visible Smoke click counted.
- Pan: a blank-area drag moved the drawing by approximately `(120, -35)` pixels; a visible Smoke clicked after panning counted.
- Normal mode contained no debug labels or debug boxes.

## Mobile check

**FAIL.** At a 390px viewport, the normal page rendered the drawing as a very narrow vertical strip beside the fixed navigation. Although a direct tap at the transformed visible-symbol coordinate incremented a count and document `scrollWidth` was 375, the source drawing was not presented at a reasonable human-usable width. This fails the requirement that a trainee can look at the drawing, locate the actual symbol, and tap it directly without understanding layout internals.

## Reconciliation and runtime audit

After the direct click sweep, the exercise reconciled at:

**36/36 — 100%**

The final runtime audit displayed:

`PASS — ALL RUNTIME CHECKS PASSED`

The runtime audit and reconciliation support the implementation, but they do not override the mobile human-visibility failure.

## Final disposition

- Source PNG count: **verified at 36**.
- Current Exercise 003 data: **matches source exactly by category**.
- Desktop direct-symbol clicking: **PASS for all 36 mapped devices**.
- Wrong-category, nearby-device, duplicate, undo, clear, reset, zoom, and pan checks: **PASS**.
- Mobile human-use acceptance: **FAIL**.
- Overall final human acceptance: **FAIL pending mobile layout correction**.
- No commit or GitHub push was made.
