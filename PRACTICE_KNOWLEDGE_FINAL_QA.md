# Practice / Knowledge Simulator — Final QA

## Final Question Count

- Identification questions: **7** (was 8 — two near-duplicate part-number recognition questions merged into one reasoning question)
- Quantity questions: **9** (unchanged)
- Relationship questions: **9** (was 4 — added 5 to close coverage gaps)
- **Total scored questions: 25** (was 21)
- BOM builder step: unchanged (not a question bank)

## Question-Type Distribution

| Type | Count |
|---|---:|
| Single best answer (device/concept identification) | 7 |
| Single best answer (system relationship/scenario) | 9 |
| Numeric/BOM-line extraction from a drawing scenario | 9 |

## Topic Coverage

See `PRACTICE_KNOWLEDGE_COVERAGE_REVIEW.md`. Summary: closed real gaps in FACP/FAA, SLC/NAC, waterflow, tamper, and troubleshooting logic — all previously untested. CR/CT module recognition was deliberately left to Part Number Mastery rather than duplicated here.

## Questions Removed

- `double-action-manual-activation` — merged into `pull-station-activation-type` (was a near-duplicate of Part Number Mastery's SIGA-270/278 questions).

## Questions Rewritten

| Old ID | New ID | Why |
|---|---|---|
| `single-action-manual-activation` + `double-action-manual-activation` | `pull-station-activation-type` | Consolidated two part-number-recall duplicates into one reasoning question about why activation type matters |
| `audible-visual` | `notification-appliance-function` | Reframed from bare SKU recall (G4LF vs. G4LFV) to the underlying function concept (horn vs. horn-strobe) |
| `g1-wall-horn-strobe` | `verify-separate-notification-schedules` | Removed an under-sourced letter-by-letter suffix decode (flagged in Part Number Mastery's content review); replaced with a judgment question about not conflating two separate notification schedules |
| `hvac-interface` | `hvac-interface-verification` | Was a near-duplicate of the relationship step's HVAC question; rewritten to test a verification habit instead of repeating the same fact |

## Questions Added

Five new relationship questions: `facp-faa-roles`, `slc-vs-nac`, `waterflow-monitoring`, `tamper-monitoring`, `slc-device-not-reporting`. All test general, non-model-specific fire alarm system concepts (no Product Library-specific claims requiring additional source verification).

## Questions Requiring Technical Review

None newly introduced in this pass. One previously-flagged item (G1AVRF suffix decoding) was removed from this tool rather than re-verified — see the content review for detail. It remains flagged in `PART_NUMBER_MASTERY_CONTENT_REVIEW.md`, not silently reintroduced here.

## Source-Exposure Check

Searched all trainee-facing question, scenario, and explanation text in `takeoff.js`'s `takeoffScenario` object for "Product Library," "database," and "the Academy documents." **Zero matches** — all questions read as natural workplace scenarios.

## Selection Behavior / Feedback / Scoring (verified live, in-browser)

1. Opened the Practice tab, clicked "Begin Takeoff" — Section 2 (Identify the Devices) renders all 7 questions. ✅
2. Clicked an answer on Question 1 (`panel-selection-io64`) — the button immediately shows a `correct`/`incorrect` visual state, all options in that question disable, and a "Correct"/"Incorrect" banner with explanation and a "Continue →" button appears. Live score updated (0 → 3/100, reflecting 20 points ÷ 7 questions). ✅
3. Jumped to Section 4 (relationship questions) — confirmed all 9 questions render, including the 5 new ones (FACP/FAA, SLC/NAC, waterflow, tamper, troubleshooting), each with 4 answer options and independent feedback. ✅
4. Correct answer is never revealed before an option is clicked (feedback box stays hidden until an answer is selected). ✅

## Retry

"Try Again" / "Reset Exercise" resets `scenarioState` fully (step, scores, BOM items, remembered counts) back to Step 1 — logic unchanged by this pass, still functions correctly against the updated question arrays (score weights are computed as `weight ÷ question count`, so they auto-adjust to the new counts with no code change needed).

## Randomization

This simulator presents its identification/quantity/relationship questions in a fixed order per section (not per-attempt shuffled), which was true before this pass and is unchanged — no new randomization concern introduced. (Contrast with the Quiz Center's `quiz.js`, which does shuffle; that engine was not touched in this pass.)

## Mobile (~390px)

Verified: `scrollWidth === clientWidth` (375px) on the Practice tab after clicking through to Section 4, no horizontal overflow, questions and answer buttons remain readable and tappable.

## Accessibility

No new accessibility defects introduced. Answer options are real `<button>` elements (keyboard-operable), selection uses both a CSS class (`correct`/`incorrect`) and a text label ("Correct"/"Incorrect"), consistent with the rest of the Academy's non-color-only feedback pattern. No changes were made to the shared `:focus-visible` styling.

## Regression

Ran `runtime-audit.html` after this pass: **PASS — ALL RUNTIME CHECKS PASSED** (this simulator's question bank is not part of the shared `quizData.js` pools, so it isn't directly exercised by the runtime audit, but the audit confirms no other quiz category was affected by this pass's changes to `training/takeoff/takeoff.js`).

## Not Modified

Product Library, Part Number Mastery, Takeoff Learn (Learn tab), Real-World Scenarios, Exercise 001–004, source drawings, Takeoff mappings/quantities/answer keys, Dashboard, and global navigation were not touched. The BOM catalog/defaults and quantity-question drawing scenarios were left as-is (no technical or duplication issues found).
