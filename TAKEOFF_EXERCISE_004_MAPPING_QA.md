# Exercise 004 Mapping QA

## Source

- Approved PNG: `Takeoff Drawings/exercise-004-source.png`
- Native frame: 1536 x 1024
- Source inventory: 65 devices
- Mapping file: `training/takeoff/exercises/exercise-004/exercise-data.js`

Every mapped record uses the native source frame. `x` and `y` are source-symbol centers; `width` and `height` are tight source-symbol bounds. The shared drawing layer applies the same transform to image and markers.

## Complete Mapping Ledger

The following IDs are the complete 65-record approved mapping, grouped by category. Each record includes category, room/location, and source-centered normalized coordinates in `exercise-data.js`.

| Category | Count | Complete IDs |
| --- | ---: | --- |
| Smokes | 33 | `ex004-smoke-001` through `ex004-smoke-033` |
| Test Stations | 2 | `ex004-ts-001`, `ex004-ts-002` |
| Duct Smokes | 2 | `ex004-dd-001`, `ex004-dd-002` |
| Wall Horn/Strobes | 8 | `ex004-wall-hs-001` through `ex004-wall-hs-008` |
| Wall Speaker/Strobes | 6 | `ex004-wall-s-001` through `ex004-wall-s-006` |
| Ceiling Horn/Strobes | 1 | `ex004-ceiling-hs-001` |
| Ceiling Speaker/Strobes | 3 | `ex004-ceiling-s-001` through `ex004-ceiling-s-003` |
| Pulls | 4 | `ex004-pull-001` through `ex004-pull-004` |
| CR/CT Devices | 3 | `ex004-cr-001` through `ex004-cr-003` |
| Waterflow | 1 | `ex004-waterflow-001` |
| Tamper Switches | 2 | `ex004-tamper-001`, `ex004-tamper-002` |
| Heat Detectors | 0 | none |
| R of R Heats | 0 | none |
| Wall Strobes | 0 | none |
| Ceiling Strobes | 0 | none |
| Door Holders | 0 | none |
| FACP | 0 | none |
| FAA | 0 | none |
| **Total** | **65** | **all records above** |

## Coordinate and Category Details

The authoritative per-device records contain, for every ID above:

- unique ID
- product category
- room/location
- wall/ceiling mounting where applicable
- native source-centered `x` and `y` converted from the 1536 x 1024 PNG
- normalized `x` and `y`
- tight source width and height
- drawing reference `FA-104`

No viewport-relative coordinates, nearest-device fallback, room-sized target, minimum marker size, or separate Exercise 004 click system was added.

## Source/Mapping Match

| Measure | Count |
| --- | ---: |
| Source PNG devices | 65 |
| Mapped locations | 65 |
| Expected quantity total | 65 |
| Difference | 0 |

## Category Filtering

Only locations matching the selected product ID are enabled. Inactive marker buttons remain disabled and use the existing `pointer-events: none` rule. Wall and ceiling categories remain separate product IDs.

## Status

Mapping structure and source-count arithmetic pass. Physical and behavioral acceptance evidence is recorded in `TAKEOFF_EXERCISE_004_FINAL_QA.md`.
