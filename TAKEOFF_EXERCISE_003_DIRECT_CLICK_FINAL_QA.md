# Exercise 003 Direct-Click Final QA

## Test Basis

- Normal page: `training/takeoff/index.html`
- Exercise: 003, BAN-KOE ACADEMY - LEVEL 3
- Source PNG: `Takeoff Drawings/97b81900-4fe0-4767-befe-a26e76618bee.png`
- Native source frame: 1536 x 1024
- Method: source-symbol mouse clicks on the visible rendered drawing, using the independently audited native source centers. No marker element was clicked and no nearest-device fallback was used.

## Complete Direct-Click Results

| ID | Category | Location | Source X/Y | Direct click | Highlight alignment | Result |
| --- | --- | --- | --- | --- | --- | --- |
| ex003-facp-001 | FACP | Fire alarm control panel | 45, 575 | PASS | PASS | PASS |
| ex003-faa-001 | FAA | Fire alarm annunciator | 45, 427 | PASS | PASS | PASS |
| ex003-smoke-001 | Smokes | Classroom 301 | 138, 164 | PASS | PASS | PASS |
| ex003-smoke-002 | Smokes | Classroom 301 | 350, 181 | PASS | PASS | PASS |
| ex003-smoke-003 | Smokes | Classroom 301 | 316, 249 | PASS | PASS | PASS |
| ex003-smoke-004 | Smokes | Classroom 302 | 138, 328 | PASS | PASS | PASS |
| ex003-smoke-005 | Smokes | Classroom 302 | 316, 339 | PASS | PASS | PASS |
| ex003-smoke-006 | Smokes | Lab 305 | 538, 193 | PASS | PASS | PASS |
| ex003-smoke-007 | Smokes | Lab 305 | 721, 181 | PASS | PASS | PASS |
| ex003-smoke-008 | Smokes | Lab 305 | 819, 199 | PASS | PASS | PASS |
| ex003-smoke-009 | Smokes | Open Area 307 | 492, 338 | PASS | PASS | PASS |
| ex003-smoke-010 | Smokes | Open Area 307 | 623, 338 | PASS | PASS | PASS |
| ex003-smoke-011 | Smokes | Open Area 307 | 747, 338 | PASS | PASS | PASS |
| ex003-smoke-012 | Smokes | Open Area 307 | 492, 479 | PASS | PASS | PASS |
| ex003-smoke-013 | Smokes | Open Area 307 | 747, 478 | PASS | PASS | PASS |
| ex003-smoke-014 | Smokes | Electrical 309 | 921, 476 | PASS | PASS | PASS |
| ex003-smoke-015 | Smokes | Conference 312 | 911, 666 | PASS | PASS | PASS |
| ex003-smoke-016 | Smokes | Southwest room | 252, 831 | PASS | PASS | PASS |
| ex003-smoke-017 | Smokes | Office 313 | 438, 808 | PASS | PASS | PASS |
| ex003-smoke-018 | Smokes | Office 314 | 617, 808 | PASS | PASS | PASS |
| ex003-smoke-019 | Smokes | Break Room 315 | 915, 782 | PASS | PASS | PASS |
| ex003-heat-001 | Heat Detectors | Mechanical 308 | 994, 368 | PASS | PASS | PASS |
| ex003-ror-heat-001 | R of R Heats | Lab 305 | 628, 235 | PASS | PASS | PASS |
| ex003-test-001 | Test Stations | Corridor 311 | 402, 604 | PASS | PASS | PASS |
| ex003-hs-001 | Wall Horn/Strobes | Classroom 301 / north wall | 366, 133 | PASS | PASS | PASS |
| ex003-hs-002 | Wall Horn/Strobes | Lab 305 / north wall | 805, 132 | PASS | PASS | PASS |
| ex003-hs-003 | Wall Horn/Strobes | Corridor 311 | 801, 598 | PASS | PASS | PASS |
| ex003-hs-004 | Wall Horn/Strobes | Conference 312 | 1043, 641 | PASS | PASS | PASS |
| ex003-hs-005 | Wall Horn/Strobes | Storage 306 / east wall | 1037, 177 | PASS | PASS | PASS |
| ex003-pull-001 | Pulls | Stair A | 216, 685 | PASS | PASS | PASS |
| ex003-pull-002 | Pulls | Southwest room / south wall | 323, 864 | PASS | PASS | PASS |
| ex003-pull-003 | Pulls | Stair B | 1050, 803 | PASS | PASS | PASS |
| ex003-wf-001 | Waterflow | South wall | 545, 931 | PASS | PASS | PASS |
| ex003-dh-001 | Door Holders | Women 304 | 320, 543 | PASS | PASS | PASS |
| ex003-dh-002 | Door Holders | Office 314 / south wall | 572, 866 | PASS | PASS | PASS |

## Category Tally Results

| Category | Expected | Directly clicked | Result |
| --- | ---: | ---: | --- |
| FACP | 1 | 1 | PASS |
| FAA | 1 | 1 | PASS |
| Smokes | 19 | 19 | PASS |
| Heat Detectors | 1 | 1 | PASS |
| R of R Heats | 1 | 1 | PASS |
| Test Stations | 1 | 1 | PASS |
| Duct Smokes | 0 | 0 | PASS |
| Wall Horn/Strobes | 5 | 5 | PASS |
| Wall Speaker/Strobes | 0 | 0 | PASS |
| Pulls | 3 | 3 | PASS |
| CR's | 0 | 0 | PASS |
| Waterflow | 1 | 1 | PASS |
| Door Holders | 2 | 2 | PASS |
| Tamper | 0 | 0 | PASS |
| **Total** | **35** | **35** | **PASS** |

## Interaction Checks

- Initial normal state: clean black-and-white source drawing; no permanent detector overlays.
- Category filtering: only the selected mapped category was active during each sweep.
- Duplicate behavior: existing shared handler returns `ALREADY COUNTED` and does not increase the tally.
- Direct visual mark: successful marks use the existing source-coordinate marker layer.
- Reset and Clear All: use the existing shared interaction actions and clear trainee marks.
- Source PNG: unchanged.
- Exercise 001 and Exercise 002: unchanged.

## Final Determination

SOURCE DRAWING COUNT = **35**

APPROVED MAPPING COUNT = **35**

EXPECTED QUANTITY TOTAL = **35**

Every mapped device was directly clicked at its visible source-symbol location during the normal-page sweep. No hidden marker center, enlarged hit region, nearest-device logic, or separate Exercise 003 click system was used.
