# Practice / Knowledge Simulator — Content Review

Audit of the Takeoff Knowledge Simulator (`training/takeoff/index.html`, "Practice" tab, `id="projectStep"` onward; logic in `training/takeoff/takeoff.js`, `takeoffScenario` object). This is distinct from Takeoff Learn (the "Learn" tab) and Drawing Exercises (the "Drawing Exercises" tab, Exercises 001–004) — neither was touched.

## Inventory (before this pass)

| Section | Count | Format |
|---|---:|---|
| Identification questions | 8 | Single best answer |
| Quantity questions | 9 | Numeric entry / drawing-line extraction |
| Relationship questions | 4 | Single best answer (scenario-based) |
| BOM builder | n/a | Category/item/quantity builder, not a question bank |

## Comparison Against Part Number Mastery — Duplicates Found

| ID | Issue | Action |
|---|---|---|
| `single-action-manual-activation` | Asked "which exact device" among SIGA-270/278/CC1/CT1 — pure part-number recognition, functionally identical to Part Number Mastery's pull-station questions | **REWRITE** — merged with the double-action question below into one reasoning question about *why* the two activation types exist, since the actual product selection is still exercised later in the Quantity step's product dropdown |
| `double-action-manual-activation` | Same issue as above, same product pair | **REMOVE (merged)** — see `pull-station-activation-type` |
| `audible-visual` | "Which exact product" (G4LF vs. G4LFV) — bare SKU recall | **REWRITE** to `notification-appliance-function`, testing the *function* concept (horn vs. horn-strobe / audible+visual) rather than memorizing which SKU letter means what |
| `g1-wall-horn-strobe` | Asked the trainee to decode G1AVRF letter-by-letter (A/V/R/F) — this exact suffix-decoding claim was flagged and removed from Part Number Mastery as under-sourced trivia (page-citation only, not stated in the Product Library description text) | **REWRITE** to `verify-separate-notification-schedules` — same scenario context, but now tests the *judgment* skill of not double-counting or conflating two separate notification schedules, without relying on the contested letter-decoding claim |

## Comparison Against Part Number Mastery — Kept As Distinct

| ID | Why it's not a duplicate |
|---|---|
| `panel-selection-io64` | Tests system-architecture/capacity reasoning (iO64 vs. iO1000 vs. EST4 fit), not part-number recall |
| `smoke-detection`, `duct-smoke` | Foundational device-role recognition ("what detects X"), not SKU-level recognition |
| `hvac-interface` (rewritten to `hvac-interface-verification`) | Now tests the verification habit ("confirm the specific interface a project requires") rather than restating the same "control/relay interface" fact already tested in the relationship step |

## Internal Near-Duplicate Found (within the Simulator itself)

`identificationQuestions.hvac-interface` and `relationshipQuestions.hvac-control` asked the same fact twice ("HVAC shutdown = control/relay interface"). **Resolved** by rewriting the identification-step version (`hvac-interface-verification`) to test a related but distinct skill — verifying the specific interface needed rather than repeating the bare category fact, which the relationship step still covers.

## Quantity Questions — Reviewed, No Changes

All 9 quantity questions test arithmetic/BOM-line extraction from a fictional drawing narrative — a distinct skill from both Part Number Mastery (no recognition-only questions) and Takeoff Learn (no lesson text is reproduced; these are self-contained calculation scenarios). Technical claims (SIGA-270/278, G4LFV, G1AVRF as real part numbers) are consistent with the Product Library. No duplicates or technical issues found. Left unchanged.

## Relationship Questions — Added

The relationship section was the thinnest (4 questions) despite being the section best suited to this Simulator's actual purpose (system relationships and device roles). Added 5 new questions covering topics from the coverage checklist that had **zero** prior coverage in this tool: FACP vs. FAA roles, SLC vs. NAC circuit distinction, waterflow switch monitoring, tamper switch supervisory monitoring, and basic SLC troubleshooting logic (address/programming check before assuming a defective device). All five are grounded in general, non-model-specific fire alarm system concepts (not tied to a specific manufacturer claim requiring Product Library verification) and avoid engineering-calculation or code-citation trivia, per the "don't turn this into an engineering exam" instruction.

## Technical Accuracy

- No claim in the rewritten or added questions requires a manufacturer-PDF-only citation — all system-relationship facts (SLC vs. NAC, monitor vs. control function, supervisory vs. alarm condition) are standard, non-model-specific fire alarm concepts already used consistently elsewhere in the Academy (Real-World Scenarios, Wiring & Connections quiz category).
- No mention of "Product Library," "database," or "the Academy" appears in any trainee-facing question/scenario/explanation text (verified by search — see Final QA).
- The removed `g1-wall-horn-strobe` letter-decoding claim (A=horn-strobe family, R=red, F=FIRE marking) is not reintroduced here; it remains flagged in `PART_NUMBER_MASTERY_CONTENT_REVIEW.md` for SME review before use anywhere in the Academy.

## Questions Requiring SME Review

None newly introduced. The one pre-existing flagged item (G1AVRF letter decoding) was removed from this tool rather than re-verified, consistent with "do not invent an answer" — it can be reintroduced here or in Part Number Mastery once independently confirmed.

## Not Modified (out of strict scope)

Takeoff Learn, Real-World Scenarios, Exercise 001–004, source drawings/mappings, Product Library, Dashboard, and global navigation were not touched. The BOM builder step (category/item/quantity entry, not a question bank) was left as-is — it functions correctly and isn't part of the "question bank" audit requested.
