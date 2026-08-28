# Exercise 004 Smoke Mapping Audit

## Scope and Source

- Source of truth: `Takeoff Drawings/exercise-004-source.png`
- Native source frame: 1536 x 1024
- Scope: Smoke category only
- No data, quantity, coordinate, answer-key, or click-region changes were made during this audit.

## Physical Smoke Count

The approved source inventory records **33 physical Smoke Detector symbols**. The source scan confirms Smoke `S` symbols in the following floor-plan areas, including the two currently unrepresented rooms:

- Classroom 101: 3
- Classroom 102: 2
- Classroom 103: 2
- Multipurpose Room 104: 3
- Corridor 100: 4
- Office 105: 1
- Open Office 107: 5
- Storage 109: 1
- Work Room 111: 1
- Women 112: 1
- Men 113: 1
- Office 106: 1
- Corridor 117: 3
- Lobby 114: 1
- Administration 115: 1
- Reception 116: 1
- Mechanical Room 118: 1
- Janitor 119: 1
- Kitchen 120: 1

The source drawing also contains circled `S` notification symbols and wall-attached `S` notification symbols. Those are not counted as Smoke Detectors; they are separate Ceiling Speaker/Strobe and Wall Speaker/Strobe symbols under the source Key.

## Complete Source Coordinate Table

Coordinates are native PNG center estimates read from the approved 1536 x 1024 source. Normalized values are native X/1536 and native Y/1024. The two newly confirmed symbols are called out explicitly.

| Source ID | Room | Native X | Native Y | Normalized X | Normalized Y |
| --- | --- | ---: | ---: | ---: | ---: |
| source-smoke-001 | Classroom 101 | 174 | 143 | 0.113 | 0.140 |
| source-smoke-002 | Classroom 101 | 239 | 143 | 0.156 | 0.140 |
| source-smoke-003 | Classroom 101 | 270 | 210 | 0.176 | 0.205 |
| source-smoke-004 | Classroom 102 | 394 | 143 | 0.257 | 0.140 |
| source-smoke-005 | Classroom 102 | 460 | 143 | 0.299 | 0.140 |
| source-smoke-006 | Classroom 103 | 610 | 143 | 0.397 | 0.140 |
| source-smoke-007 | Classroom 103 | 674 | 143 | 0.439 | 0.140 |
| source-smoke-008 | Multipurpose Room 104 | 837 | 143 | 0.545 | 0.140 |
| source-smoke-009 | Multipurpose Room 104 | 934 | 143 | 0.608 | 0.140 |
| source-smoke-010 | Multipurpose Room 104 | 982 | 200 | 0.639 | 0.195 |
| source-smoke-011 | Corridor 100 | 317 | 302 | 0.206 | 0.295 |
| source-smoke-012 | Corridor 100 | 674 | 302 | 0.439 | 0.295 |
| source-smoke-013 | Corridor 100 | 765 | 302 | 0.498 | 0.295 |
| source-smoke-014 | Corridor 100 | 911 | 302 | 0.593 | 0.295 |
| source-smoke-015 | Office 105 | 151 | 410 | 0.098 | 0.400 |
| source-smoke-016 | Open Office 107 | 353 | 460 | 0.230 | 0.449 |
| source-smoke-017 | Open Office 107 | 484 | 460 | 0.315 | 0.449 |
| source-smoke-018 | Open Office 107 | 431 | 528 | 0.281 | 0.516 |
| source-smoke-019 | Open Office 107 | 511 | 565 | 0.333 | 0.552 |
| source-smoke-020 | Work Room 111 | 649 | 562 | 0.423 | 0.549 |
| source-smoke-021 | Storage 109 | 824 | 422 | 0.536 | 0.412 |
| source-smoke-022 | Women 112 | 799 | 562 | 0.520 | 0.549 |
| source-smoke-023 | Men 113 | 925 | 562 | 0.602 | 0.549 |
| source-smoke-024 | Office 106 | 146 | 542 | 0.095 | 0.529 |
| source-smoke-025 | Corridor 117 | 610 | 668 | 0.397 | 0.652 |
| source-smoke-026 | Corridor 117 | 721 | 668 | 0.469 | 0.652 |
| source-smoke-027 | Corridor 117 | 868 | 668 | 0.565 | 0.652 |
| source-smoke-028 | Lobby 114 | 163 | 777 | 0.106 | 0.759 |
| source-smoke-029 | Administration 115 | 310 | 695 | 0.202 | 0.679 |
| source-smoke-030 | Reception 116 | 456 | 695 | 0.297 | 0.679 |
| source-smoke-031 | Mechanical Room 118 | 447 | 800 | 0.291 | 0.781 |
| source-smoke-032 | Janitor 119 | 934 | 844 | 0.608 | 0.824 |
| source-smoke-033 | Kitchen 120 | 1044 | 844 | 0.680 | 0.824 |

## Current Smoke Mapping Table

The current approved data contains 33 Smoke records. Current coordinates are listed exactly as stored; source comparison is based on the PNG, not on DOM marker position.

| Current ID | Current room/location | Current normalized X/Y | Actual source comparison | Status |
| --- | --- | --- | --- | --- |
| ex004-smoke-001 | Classroom 101 | 0.113 / 0.140 | Classroom 101 S | CORRECT |
| ex004-smoke-002 | Classroom 101 | 0.156 / 0.140 | Classroom 101 S | CORRECT |
| ex004-smoke-003 | Classroom 101 | 0.176 / 0.207 | Classroom 101 S | CORRECT |
| ex004-smoke-004 | Classroom 102 | 0.257 / 0.140 | Classroom 102 S | CORRECT |
| ex004-smoke-005 | Classroom 102 | 0.300 / 0.140 | Classroom 102 S | CORRECT |
| ex004-smoke-006 | Classroom 103 | 0.397 / 0.140 | Classroom 103 S | CORRECT |
| ex004-smoke-007 | Classroom 103 | 0.440 / 0.140 | Classroom 103 S | CORRECT |
| ex004-smoke-008 | Multipurpose Room 104 | 0.544 / 0.140 | Multipurpose Room 104 S | CORRECT |
| ex004-smoke-009 | Multipurpose Room 104 | 0.607 / 0.140 | Multipurpose Room 104 S | CORRECT |
| ex004-smoke-010 | Multipurpose Room 104 | 0.638 / 0.198 | Multipurpose Room 104 S | CORRECT |
| ex004-smoke-011 | Corridor 100 | 0.205 / 0.296 | Corridor 100 S | CORRECT |
| ex004-smoke-012 | Corridor 100 | 0.438 / 0.296 | Corridor 100 S | CORRECT |
| ex004-smoke-013 | Corridor 100 | 0.499 / 0.296 | Corridor 100 S | CORRECT |
| ex004-smoke-014 | Corridor 100 | 0.594 / 0.296 | Corridor 100 S | CORRECT |
| ex004-smoke-015 | Office 105 | 0.100 / 0.401 | Office 105 S | CORRECT |
| ex004-smoke-016 | Open Office 107 | 0.230 / 0.449 | Open Office 107 S | CORRECT |
| ex004-smoke-017 | Open Office 107 | 0.315 / 0.449 | Open Office 107 S | CORRECT |
| ex004-smoke-018 | Open Office 107 | 0.203 / 0.517 | Circled S notification symbol, not a plain Smoke symbol | NOT A SMOKE |
| ex004-smoke-019 | Open Office 107 | 0.281 / 0.517 | Open Office 107 S | CORRECT |
| ex004-smoke-020 | Open Office 107 | 0.333 / 0.552 | Open Office 107 S | CORRECT |
| ex004-smoke-021 | Work Room 111 | 0.423 / 0.549 | Work Room 111 S | CORRECT |
| ex004-smoke-022 | Storage 109 | 0.520 / 0.411 | Storage 109 S, approximately 0.536 / 0.412 | MISLOCATED |
| ex004-smoke-023 | Women 112 | 0.519 / 0.548 | Women 112 S | CORRECT |
| ex004-smoke-024 | Men 113 | 0.602 / 0.548 | Men 113 S | CORRECT |
| ex004-smoke-025 | Office 106 | 0.095 / 0.529 | Office 106 S | CORRECT |
| ex004-smoke-026 | Corridor 117 | 0.397 / 0.654 | Corridor 117 S | CORRECT |
| ex004-smoke-027 | Corridor 117 | 0.469 / 0.654 | Corridor 117 S | CORRECT |
| ex004-smoke-028 | Corridor 117 | 0.564 / 0.654 | Corridor 117 S | CORRECT |
| ex004-smoke-029 | Lobby 114 | 0.106 / 0.759 | Lobby 114 S | CORRECT |
| ex004-smoke-030 | Administration 115 | 0.202 / 0.679 | Administration 115 S | CORRECT |
| ex004-smoke-031 | Reception 116 | 0.297 / 0.679 | Reception 116 S | CORRECT |
| ex004-smoke-032 | Mechanical Room 118 | 0.291 / 0.781 | Mechanical Room 118 S | CORRECT |
| ex004-smoke-033 | Mechanical Room 118 | 0.547 / 0.842 | Mechanical-area S near the lower-right interface area | CORRECT, but not Janitor/Kitchen |

## Discrepancy Findings

- Physical Smoke symbols: **33** per the approved source inventory.
- Current Smoke records: **33**.
- Kitchen 120 Smoke: physical source symbol exists at approximately native `(1044, 844)`, normalized `(0.680, 0.824)`; no current Smoke record is assigned to Kitchen 120.
- Janitor 119 Smoke: physical source symbol exists at approximately native `(934, 844)`, normalized `(0.608, 0.824)`; no current Smoke record is assigned to Janitor 119.
- `ex004-smoke-018` is mapped to a circled `S` notification symbol rather than a plain Smoke symbol and is therefore a candidate incorrect Smoke record.
- `ex004-smoke-022` is displaced from the Storage 109 source Smoke and is a candidate mislocated record.
- The current lower-right `ex004-smoke-033` record is not labeled Janitor 119 or Kitchen 120 and must not be silently reassigned without confirming which physical source symbol it represents.

## Can Existing Records Represent Kitchen and Janitor?

Not safely from this audit alone. The source count and current count are both 33, but the current set contains at least one `NOT A SMOKE` record and one mislocated record, while the two confirmed Kitchen/Janitor source symbols are both absent by room label. A one-to-one reassignment may be possible, but it requires approval of the exact replacement identities and a final source-coordinate review; moving a correct lower-right device or deleting a valid source Smoke would be unsafe.

No Smoke quantity change is authorized by this report. No mapping change is made.

## Stop Condition

The audit identifies exactly why Kitchen 120 and Janitor 119 are unmapped: there are no current Smoke records assigned to those rooms, and the existing 33-record set contains records that do not correspond cleanly to the plain Smoke source inventory. Approval is required before reassigning or removing any Smoke record.

No commit or GitHub push was made.
