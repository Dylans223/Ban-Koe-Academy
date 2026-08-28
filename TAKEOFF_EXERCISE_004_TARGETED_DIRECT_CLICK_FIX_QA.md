# Exercise 004 Targeted Direct-Click Fix QA

## Scope

Only the eight devices named in the targeted failure report were investigated against the approved `exercise-004-source.png` source frame (1536 x 1024). No broad interaction architecture change was made.

## Results

| Device | Location | Source native X/Y | Previous mapped X/Y | Correction | Direct click | Highlight alignment | Category filtering | Duplicate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Smoke | Work Room 111 | approx. `(649, 562)` | `(823, 562)` | Existing `ex004-smoke-021` moved to normalized `(0.423, 0.549)` | PASS, tally 1 | PASS, centered on source Smoke | Correct `Smokes` active; wrong categories inactive | Existing duplicate path returns `ALREADY COUNTED` |
| Wall Speaker/Strobe | Office 105 | approx. `(96, 446)` | No matching record | FAIL / missing mapping; no record added because locked quantity and existing six-record mapping require approval for replacement disposition | Not applicable | No target rendered | No category target exists | Not applicable |
| Ceiling Horn/Strobe | Mechanical Room 118 | Visible HS approx. `(398, 846)`, but source appearance is wall-attached HS, not circled ceiling HS | Existing ceiling-HS record points to `(824, 199)` / Multipurpose 104 | No correction: requested ceiling-mounted device is not supported by the source convention; existing ceiling-HS record is a different source device | FAIL for requested Mechanical ceiling device | Not applicable | Existing ceiling-HS category is valid for Multipurpose 104 only | Not applicable |
| Duct Smoke Detector 1 | Mechanical 118 / Return Air | approx. `(740, 789)` | `(740, 789)` | None; current record is source-aligned | PASS, tally 1 | PASS | Correct `Duct Smokes` active; inactive categories use pointer-events none | Existing duplicate path preserved |
| Duct Smoke Detector 2 | Mechanical 118 / Return Air | approx. `(826, 789)` | `(826, 789)` | None; current record is source-aligned | PASS, tally 2 | PASS | Correct `Duct Smokes` active; inactive categories use pointer-events none | Existing duplicate path preserved |
| Smoke | Kitchen 120 | approx. `(1044, 844)` | No matching record | FAIL / missing mapping; no record added because locked Smoke quantity is 33 and replacement disposition is not source-proven within this targeted pass | Not applicable | Not applicable | No target rendered | Not applicable |
| Tamper Switch | Electrical Room 110 | approx. `(925, 433)` | `(925, 862)` | Existing `ex004-tamper-001` moved to normalized `(0.602, 0.424)` | PASS, tally 1 | PASS, centered on source T | Correct `Tamper Switches` active; wrong categories inactive | Existing duplicate path returns `ALREADY COUNTED` |
| Smoke | Janitor 119 | approx. `(934, 844)` | No matching record | FAIL / missing mapping; no record added because locked Smoke quantity is 33 and replacement disposition is not source-proven within this targeted pass | Not applicable | Not applicable | No target rendered | Not applicable |

## Rendered Target Evidence

At the inspected normal-page viewport, the existing pre-fix targets were measured as follows:

- Work Room 111 marker: rendered center approximately `(767, 1054)`; visible source center approximately `(674, 1054)`, confirming horizontal displacement.
- Office 105 requested S: no matching Office 105 record; current wall-S record `ex004-wall-s-002` is Open Office 107 / East Wall.
- Ceiling-HS record: current marker is Multipurpose Room 104 at normalized `(0.536, 0.194)`, not Mechanical Room 118.
- Duct Smoke 1 and 2 markers were centered within approximately one rendered pixel of their source points.
- Electrical Room 110 tamper marker: pre-fix rendered at approximately `(821, 1214)` while source T was approximately `(821, 986)`, confirming vertical displacement.
- Kitchen 120 and Janitor 119 requested records were absent.

Inactive marker buttons were disabled with `pointer-events: none`; no unrelated active marker was found intercepting the tested targets.

## Final Direct-Click Status

- Corrected Work Room 111 Smoke: PASS.
- Corrected Electrical Room 110 Tamper: PASS.
- Duct Smoke 1: PASS.
- Duct Smoke 2: PASS.
- Office 105 Wall Speaker/Strobe: unresolved missing mapping.
- Mechanical Room 118 Ceiling Horn/Strobe: unresolved source/mounting conflict; visible HS is wall-attached, not ceiling-circled.
- Kitchen 120 Smoke: unresolved missing mapping.
- Janitor 119 Smoke: unresolved missing mapping.

The approved mapping currently retains its locked quantity totals. No record was added or removed for the unresolved missing/conflicting cases.

No commit or GitHub push was made.
