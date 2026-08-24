# Takeoff Development Plan

## Purpose

This document records the current Takeoff architecture and the smallest safe extension point for a future drawing-based practice experience. The current 12 lessons and simulator remain the baseline experience.

## Existing Architecture

| Area | Current implementation | Safe implication |
| --- | --- | --- |
| Entry page | `training/takeoff/index.html` loads `styles/style.css`, `training/module-shell.css`, `training/takeoff/takeoff.css`, `scripts/navigation.js`, Edwards data, and `takeoff.js`. | Additive Takeoff UI belongs in this module; global navigation and product data should remain untouched. |
| Lesson layer | The page contains the 12 instructional lesson cards and the workflow strip before the simulator. | Preserve these lessons. A practical learning path can follow them without replacing them. |
| Begin Takeoff | `beginTakeoffFlow()` changes `scenarioState.currentStep` from 1 to 2, updates the step shell, and scrolls to the identification panel. | Keep the existing button and transition unchanged. |
| State machine | `scenarioState.currentStep` controls panels 1 through 6: Project, Identify, Quantities, Relationships, BOM, and Results. | Do not insert a new numeric state into the existing flow until the simulator contract is covered by tests. An advanced track should use a separate state object and entry point. |
| Scenario data | `takeoffScenario` in `training/takeoff/takeoff.js` contains the project description, requirements, identification questions, quantity questions, relationship questions, and BOM defaults. | Do not modify these arrays as part of interactive drawing work. New drawing exercises should be separate data with explicit source metadata. |
| Identification | Eight multiple-choice questions render into `#identifyQuestionArea`; the selected option is disabled and feedback is shown immediately. | Product recognition can be reused conceptually, but drawing interactions should not mutate the existing question controls or scores. |
| Quantities | Nine questions render into `#quantityQuestionArea`. Some accept numeric input; drawing lines require an exact product selection and quantity. Correct answers populate `scenarioState.rememberedCounts`. | A drawing exercise may produce a separate tally, then pass a final quantity into a later form. It must not silently write into `rememberedCounts`. |
| Relationships | Four multiple-choice scenarios render into `#relationshipQuestionArea` with immediate explanations. | Keep system-relationship training separate from drawing marks. |
| BOM | The BOM catalog renders category/item dropdowns. Users can add, remove, or prefill items. `evaluateTakeoff()` compares category, item, and quantity against `bomDefaults`. | A future drawing track may offer a handoff into BOM practice, but must not change the current catalog, defaults, or evaluation formula. |
| Feedback | Identification, quantity, and relationship answers show correct/incorrect feedback and a Continue button. BOM results show entered versus expected lines. | Drawing feedback should explain mark/count/tally discrepancies independently and should not reuse the simulator score fields. |
| Scoring | Identification is worth 20 points, quantities 30, relationships 20, and BOM 30. The score is stored in `scenarioState` and displayed in the existing results panel. | Advanced drawing practice needs a separate score or completion model. Do not change existing scoring. |
| Navigation | Sidebar buttons and module transitions use `scripts/navigation.js`; the Takeoff page also has Back to Training and Next Module actions. | Use existing navigation helpers for any new entry/exit control. Do not edit global navigation for this feature. |
| Source PDF | `../../Takeoffs/20260824110900240.pdf` is linked with a read-only, new-tab anchor. `TAKEOFF_SOURCE_REFERENCE.md` records it as visual context and preserves evidence boundaries. | Keep the PDF unchanged. Use it for human reference only until a permitted, stable practice asset and answer annotation are supplied. |
| Progress | The training landing page currently displays static module progress values; the Takeoff page has local step and score indicators only. No verified Takeoff lesson completion persistence is wired to the global progress system. | Do not create fake completion data or modify global progress. A future progress adapter should be designed and approved separately. |

## Current Simulator Flow

1. Project Brief
2. Identify Devices
3. Determine Quantities
4. Identify Related Modules
5. Build the BOM
6. Review Results

The simulator has working immediate feedback, remembered quantity counts, BOM prefill, exact BOM comparison, retry, review, and navigation. Its questions include simulated drawing descriptions such as FP-1 and FP-2; these are not the uploaded PDF and should not be presented as extracted source content.

## Proposed Learning Path

The practical path should be additive and staged after the instructional lessons:

1. **Stage 1 — Understand the Key**: require acknowledgement that symbols, abbreviations, product identity, and relevant takeoff items must be established before counting.
2. **Stage 2 — Understand the Notes**: require acknowledgement that applicable notes can change interpretation, inclusion, or quantity.
3. **Stage 3 — Identify Products**: select a verified product identity from a source-backed list; do not invent mappings.
4. **Stage 4 — Practice Counting**: present a controlled annotated drawing asset and count only the selected product type.
5. **Stage 5 — Practice Crossing Off**: mark each counted occurrence once and show an auditable counted state.
6. **Stage 6 — Build the Tally**: maintain product-to-quantity totals separately from the drawing marks.
7. **Stage 7 — Enter the Takeoff**: transfer the final tally into a structured takeoff form.
8. **Stage 8 — Reconcile the Takeoff**: compare marks, crossed-off occurrences, tally, and entered quantity; explain any mismatch.
9. **Stage 9 — Timed/Independent Takeoff**: unlock only after the underlying asset and interaction model are proven; avoid fabricated completion or speed metrics.

## Safe Implementation Boundary

### Can be implemented now

- Keep and refine the existing instructional lesson layer.
- Add a clearly labeled advanced-practice entry point that is disabled or marked future-ready until assets exist.
- Add documentation, source metadata conventions, and a feature flag for future drawing practice.
- Build a standalone prototype against a synthetic test fixture outside the production Takeoff simulator, provided it is not presented as a real Ban-Koe drawing.

### Must wait for source/asset approval

- A real interactive drawing exercise.
- Product-to-color assignments.
- Symbol coordinates or device counts extracted from the PDF.
- Expected answer annotations for counting and crossing off.
- Timed or independent scoring.
- Persistent lesson completion in the global progress system.

## Files That Would Be Modified Later

Likely production changes, after design approval and asset availability:

- `training/takeoff/index.html`: add an advanced-practice mount point and accessible controls.
- `training/takeoff/takeoff.css`: style the drawing viewport, mark controls, tally, and reconciliation feedback.
- A new `training/takeoff/interactive-takeoff.js`: own the drawing state and interaction model rather than extending the existing question handlers directly.
- A new source-backed exercise data file under `training/takeoff/`: define asset, source document, product identities, and answer annotations.
- `TAKEOFF_SOURCE_REFERENCE.md`: add only verified asset provenance and evidence boundaries.

The existing `training/takeoff/takeoff.js`, quiz banks, product library data, global navigation, and global progress code should not be changed unless a later implementation review proves a specific contract is required.

## Validation Required Before Implementation

- Existing Takeoff page loads with no JavaScript or CSS errors.
- All 12 lessons remain visible and ordered.
- `Begin Takeoff` still enters the existing identification step.
- Existing identification, quantity, relationship, BOM, results, retry, and navigation behavior still work.
- The source PDF link remains unchanged and read-only.
- `runtime-audit.html` reports `PASS — ALL RUNTIME CHECKS PASSED`.
- No question-bank or product-library files are changed.
