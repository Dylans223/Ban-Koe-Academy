# Exercise 003 Direct-Symbol Alignment QA

Exercise: `TAKEOFF PRACTICE 003`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 03_13_27 PM.png`
Native source dimensions: **1536 x 1024**

## Result

**PASS**

Exercise 003 uses the shared direct-symbol interaction architecture. A trainee can select a category, click the actual mapped device symbol, receive an immediate tally increment, and see the counted mark on that device without a cross-off action or invisible-box hunting.

## Source Frame and Geometry

- Source-aspect frame: `1536 / 1024`.
- Image and interaction frame occupied the same rendered rectangle.
- Runtime frame geometry: approximately `587 x 391.3` for both image and marker frame.
- 36 approved mapped markers rendered.
- Maximum measured marker-center error against the source-frame position: approximately `0.02px`.
- No frame letterboxing mismatch was observed.
- No geometric overlaps were detected among the approved mapped regions.
- No individual coordinates were changed in this pass because the source-frame audit showed the existing 003 coordinates aligned.

## Source Locations by Category

The approved Exercise 003 locations were checked against the original source drawing and remain source-supported:

| Category | Source symbol / location coverage | Mapped count | Result |
| --- | --- | ---: | --- |
| FACP | FACP in Fire Room / Break Room 125 | 1 | PASS |
| FAA | FAA at Nurse Station 110 | 1 | PASS |
| Door Holders | Consult 109, Exam 3 104, Office 108 | 3 | PASS |
| Waterflow | WF at Waiting 114 west wall | 1 | PASS |
| Tamper | Top corridor and Stair 1 | 3 | PASS |
| CR's | Stair 1 / Mechanical 127, Stair 2, Vestibule 100 | 3 | PASS |
| Test Stations | Central and lower corridor TS locations | 4 | PASS |
| Duct Smokes | Return-air DD locations | 3 | PASS |
| Wall Speaker/Strobes | SS locations in Office 108, Ultrasound 119, Women 121, Men 122, Lockers 126 | 5 | PASS |
| Wall Horn/Strobes | HS locations in X-Ray 118 and Conference 124 | 3 | PASS |
| Pulls | Corridor, stairs, and Vestibule 100 P locations | 9 | PASS |

Ambiguous circular detector symbols remain outside the approved set and are not scored.

## Physical Direct-Click Test

The normal Exercise 003 page was used. Each category was selected and mapped symbols were physically clicked:

- FACP: **1/1**
- FAA: **1/1**
- Test Stations: **4/4**
- Duct Smokes: **3/3**
- Wall Speaker/Strobes: **5/5**
- Wall Horn/Strobes: **3/3**
- Pulls: **9/9**
- CR's: **3/3**
- Waterflow: **1/1**
- Door Holders: **3/3**
- Tamper: **3/3**

All 36 approved devices were physically marked across the category tests.

## Category Filtering

**PASS**

Only the selected category's target regions were active. Unrelated categories did not count when their symbols were clicked.

## Negative Test

**PASS**

From a fresh Pull category state, clicks on empty drawing space and non-device areas produced zero marks and zero tally change.

## Duplicate Behavior

**PASS**

Clicking the same mapped Pull twice left the tally at 1 and returned `ALREADY COUNTED` on the second click.

## Undo / Clear All / Reset

- Undo: PASS. The counted Pull became available again and its tally decreased.
- Clear All: PASS. Marks and tally values cleared.
- Reset: PASS. Initial state restored with no selected category and no marks.

## Zoom and Pan

**PASS**

- Zoom reached 125% and reset successfully.
- A real pan changed the viewport offset.
- The shared transformed source frame retained the marker alignment.
- Direct marking remained available after the transform.

## Mobile

**PASS**

At a 390px viewport, a mapped Pull was physically tapped and counted. Document scroll width remained within the viewport, and normal mode had no debug labels.

## Full Reconciliation

A fresh Exercise 003 run marked all approved records and reconciled without any cross-off action:

- Approved total: **36**
- Marked: **36**
- Result: **36/36 — 100%**

## Final Determination

A human can look at the approved visible Exercise 003 device symbols and click them directly. The current source-frame architecture keeps the image and target regions together, and the physical direct-click workflow passes for every approved category.

No Exercise 001 or Exercise 002 data was modified. No source PNG, answer quantity, Product Library, quiz bank, simulator, global scoring, or navigation was modified. No commit or GitHub push was made.
