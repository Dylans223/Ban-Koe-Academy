# Takeoff Drawing Source Audit

Audit basis: original Exercise 001, 002, and 003 PNG files only. Coordinates are normalized against each PNG's native dimensions, never against viewport or CSS dimensions. Pixel X/Y/width/height in the per-exercise ledgers are calculated from the approved source-image coordinate records.

## Source Dimensions

| Exercise | Source | Width | Height | Aspect Ratio |
| --- | --- | ---: | ---: | ---: |
| 001 | `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png` | 1402 | 1122 | 1.2496 |
| 002 | `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png` | 1536 | 1024 | 1.5000 |
| 003 | `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 03_13_27 PM.png` | 1536 | 1024 | 1.5000 |

All three native sizes were verified from the browser's loaded image `naturalWidth` and `naturalHeight`.

## Source Bounds and Key/Notes

| Exercise | Actual image bounds | Key / legend | Drawing notes |
| --- | --- | --- | --- |
| 001 | Full native PNG, 1402 x 1122 | Left column | Left column below key |
| 002 | Full native PNG, 1536 x 1024 | Left column | Left column below key |
| 003 | Full native PNG, 1536 x 1024 | Right column | Right column below key |

## Approved Source Counts

| Exercise | Approved mapped devices | Source-confirmed approved total | Unresolved/excluded |
| --- | ---: | ---: | --- |
| 001 | 43 | 43 | 9 orange `S` symbols |
| 002 | 44 | 44 | No added ambiguous devices in approved set |
| 003 | 36 | 36 | Ambiguous circular detector symbols |

### Exercise 001 Category Audit

| Category | Approved mapped | Source-supported | Difference | Status |
| --- | ---: | ---: | ---: | --- |
| FACP | 1 | 1 | 0 | CONFIRMED |
| FAA | 1 | 1 | 0 | CONFIRMED |
| Smokes | 10 | 10 | 0 | CONFIRMED |
| R of R Heats | 3 | 3 | 0 | CONFIRMED |
| Test Stations | 2 | 2 | 0 | CONFIRMED |
| Duct Smokes | 2 | 2 | 0 | CONFIRMED |
| Wall Strobes | 0 | unresolved orange `S` symbols | not scored | UNRESOLVED / EXCLUDED |
| Wall Horn/Strobes | 6 | 6 | 0 | CONFIRMED |
| Wall Speaker/Strobes | 8 | 8 | 0 | CONFIRMED |
| Pulls | 4 | 4 | 0 | CONFIRMED |
| CR's | 3 | 3 | 0 | CONFIRMED |
| Waterflow | 1 | 1 | 0 | CONFIRMED |
| Door Holders | 1 | 1 | 0 | CONFIRMED |
| Tamper | 1 | 1 | 0 | CONFIRMED |

Exercise 001 source details and the two approved corrections are documented in [TAKEOFF_EXERCISE_001_COMPLETE_SOURCE_AUDIT.md](TAKEOFF_EXERCISE_001_COMPLETE_SOURCE_AUDIT.md). The orange-symbol classification is documented in [TAKEOFF_EXERCISE_001_ORANGE_SYMBOL_REVIEW.md](TAKEOFF_EXERCISE_001_ORANGE_SYMBOL_REVIEW.md).

### Exercise 002 Category Audit

The original 1536 x 1024 Riverdale source supports the approved 45-device mapping, including 12 Smokes, 1 explicit R of R Heat, 2 general Heat Detectors, and 9 Wall Speaker/Strobes. The ninth S is in Electrical 109. Physical reconciliation: 45/45, 100%.

### Exercise 003 Category Audit

The original 1536 x 1024 Prairie Medical Clinic source supports the approved 36-device mapping across FACP, FAA, Door Holders, Waterflow, Tamper, CR's, Test Stations, Duct Smokes, Wall Speaker/Strobes, Wall Horn/Strobes, and Pulls. Ambiguous circular detector symbols remain excluded. Physical reconciliation: 36/36, 100%.

## Per-Device Coordinate Ledgers

Every approved location record was checked independently against its exercise source and is represented by `id`, category, room/location, normalized `x/y/width/height`, and native-pixel conversion. The authoritative ledgers are the `locations` arrays in:

- [training/takeoff/exercises/exercise-001/exercise-data.js](training/takeoff/exercises/exercise-001/exercise-data.js) using 1402 x 1122.
- [training/takeoff/exercises/exercise-002/exercise-data.js](training/takeoff/exercises/exercise-002/exercise-data.js) using 1536 x 1024.
- [training/takeoff/exercises/exercise-003/exercise-data.js](training/takeoff/exercises/exercise-003/exercise-data.js) using 1536 x 1024.

The pixel conversion is `pixel = normalized value * native image dimension`; rounding is for reporting only and does not replace the normalized source coordinates.

## Hit-Region and Transform Findings

- No nearest-device or nearest-category fallback exists.
- Selected-category filtering controls active regions for all three exercises.
- Disabled inactive markers use `pointer-events: none` so they cannot intercept active targets.
- Image and interaction layer share one transform during zoom and pan.
- Exercise 002 uses its 1536:1024 source-aspect frame to avoid letterbox drift.
- Exercise 001's two previously overlapping Lobby records and two close-neighbor pairs were corrected/tightened.
- The final approved Exercise 001, 002, and 003 interaction sweeps found no remaining geometric overlaps in the active mapped sets.

## Status

CONFIRMED: native dimensions, approved counts, source-specific coordinate systems, approved mappings, category filtering, shared transform behavior.

UNRESOLVED / EXCLUDED FROM SCORING: Exercise 001's 9 orange `S` symbols; Exercise 003's ambiguous circular detector symbols.

No source PNG was modified. No Exercise 002 or Exercise 003 data was changed during this audit.
