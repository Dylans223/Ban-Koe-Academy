# Exercise 003 Mapping QA

Exercise: `TAKEOFF PRACTICE 003`  
Drawing: `PRAIRIE MEDICAL CLINIC - LEVEL 1`, `FA-1.1`  
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 03_13_27 PM.png`  
Total mapped devices: **36**  
QA passed: **36**  
Needs review: **0**  
Scoring: **Enabled locally for Exercise 003 only**

This review covers every positively identifiable labeled symbol included in the Exercise 003 mapping. Each record was checked for ID, product type, Ban-Koe color, room/area, normalized coordinate bounds, clickable region structure, and `FA-1.1` drawing reference.

## Device Review

| Device IDs | Product | Color | Room/Area coverage | Coordinate / region | Symbol match | Interaction | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ex003-facp-001` | FACP | DARK BLUE | Fire Room / Break Room 125 | PASS | PASS | PASS | PASS |
| `ex003-faa-001` | FAA | DARK BLUE | Nurse Station 110 | PASS | PASS | PASS | PASS |
| `ex003-dh-001` to `ex003-dh-003` | Door Holders | PINK | Consult 109, Exam 3 104, Office 108 | PASS | PASS | PASS | PASS |
| `ex003-wf-001` | Waterflow | PINK | Waiting 114 | PASS | PASS | PASS | PASS |
| `ex003-tamper-001` to `ex003-tamper-003` | Tamper | PINK | Top corridor and Stair 1 | PASS | PASS | PASS | PASS |
| `ex003-cr-001` to `ex003-cr-003` | CR's | PINK | Stair 1, Stair 2, Vestibule 100 | PASS | PASS | PASS | PASS |
| `ex003-test-001` to `ex003-test-004` | Test Stations | ORANGE | Central/lower corridors and Mechanical 127 | PASS | PASS | PASS | PASS |
| `ex003-duct-001` to `ex003-duct-003` | Duct Smokes | ORANGE | Return-air locations in corridors | PASS | PASS | PASS | PASS |
| `ex003-ss-001` to `ex003-ss-005` | Wall Speaker/Strobes | YELLOW | Office 108, Ultrasound 119, Women 121, Men 122, Lockers 126 | PASS | PASS | PASS | PASS |
| `ex003-hs-001` to `ex003-hs-003` | Wall Horn/Strobes | YELLOW | X-Ray 118 and Conference 124 | PASS | PASS | PASS | PASS |
| `ex003-pull-001` to `ex003-pull-009` | Pulls | GREEN | Top, central, lower corridors and Vestibule 100 | PASS | PASS | PASS | PASS |

## Category Tally

| Product Category | Color | Expected Quantity | Mapped IDs |
| --- | --- | ---: | ---: |
| FACP | DARK BLUE | 1 | 1 |
| FAA | DARK BLUE | 1 | 1 |
| Door Holders | PINK | 3 | 3 |
| Waterflow | PINK | 1 | 1 |
| Tamper | PINK | 3 | 3 |
| CR's | PINK | 3 | 3 |
| Test Stations | ORANGE | 4 | 4 |
| Duct Smokes | ORANGE | 3 | 3 |
| Wall Speaker/Strobes | YELLOW | 5 | 5 |
| Wall Horn/Strobes | YELLOW | 3 | 3 |
| Pulls | GREEN | 9 | 9 |

Expected quantity total: **36**

## Evidence Boundary

- The drawing's unlabeled circular detector symbols were not guessed as Smokes or R of R Heats because the supplied raster does not make that distinction reliably enough for a device-level answer key.
- No device outside the mapping was added to expected quantities.
- No part numbers were invented.
- The black-and-white source image remains unchanged.

## Interaction QA

- Correct product and color: accepted.
- Wrong color: `WRONG COLOR`.
- Wrong product: `WRONG DEVICE`.
- Duplicate marking: `ALREADY COUNTED`.
- Cross-off, undo, Clear All, reset, tally, zoom, pan, and exercise switching: verified through the shared interactive framework.
- Scoring is local to Exercise 003 and does not alter Exercises 001 or 002 or global Academy scoring.