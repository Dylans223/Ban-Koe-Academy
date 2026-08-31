# Real-World Scenarios — Cleanup & QA Report

Scope: `training/scenarios/index.html`, `training/scenarios/scenarios.js`, `training/scenarios/scenarios.css` only. No other training modules, Product Library, Dashboard, or global navigation were modified. No commit, no push.

This report covers three passes on the same module. Pass 3 (content diversification) is the most recent; Pass 2's UI simplification and Pass 1's interaction/answer-state fixes are still in effect and re-verified after Pass 3's content changes.

**Real-World Scenarios is now organized around the trainee's actual task rather than around multiple overlapping framework panels.**

## Pass 3 — Content Diversification

### Problem

Scenarios 1, 3, 4, and 5 all asked some version of "select all the useful/required information," using the same question structure and similar-sized checklists. A trainee could learn to recognize the pattern ("most of these boxes are probably correct") instead of learning the underlying job judgment.

### What changed

- **Scenario 1 (HVAC Shutdown Request):** kept as-is. This is the one scenario that legitimately tests focused information-gathering via a multi-select checklist (6 of 8 required, 2 real distractors), per instructions.
- **Scenario 2 (Duct Detector Problem):** kept the situation, but replaced the two info-gathering steps. The old 8-item "what should you verify first?" checklist became two single-best-answer diagnostic questions: **"What should you investigate FIRST?"** (single best answer) followed by **"What would confirm your answer?"** (a smaller, distinct evidence question). No large checklist remains in this scenario.
- **Scenario 3:** replaced "Customer Needs Notification" (a gymnasium device-selection checklist) with **"Customer Substitute Request"** — a contractor asks to substitute a different manufacturer's pull station. Tests product verification and compatibility judgment using single-best-answer questions (recognize the real decision, choose the safest response) plus one small focused multi-select (2 of 4 required — what must be verified) and a single "trap" comparison question (general UL listing vs. confirmed system compatibility).
- **Scenario 4:** replaced "Something Doesn't Look Right" (a generic incomplete-request checklist) with **"Drawing vs. BOM Discrepancy"** — the riser drawing shows 14 second-floor smoke detectors, the BOM/quote request shows 18. Tests data-comparison and discrepancy-handling judgment with four single-best-answer questions ("which quantity should you trust," "what to request," "what would confirm the explanation," "what's the risk of guessing").
- **Scenario 5:** replaced "Full Project Request" (a large capstone checklist with a BOM builder) with **"Rush Quote Request"** — a customer wants a fast quote with no drawings. Tests prioritization and professional judgment with a "what should you do FIRST?" question, a "choose the best customer response" question comparing four draft replies, a minimum-information question, and an avoid-the-pitfall question.
- The Response Builder step (building the final customer/internal response) still appears in every scenario, but its size now varies with the scenario (4 options for Scenarios 2–5, 6 for Scenario 1) instead of always presenting a similarly sized list.
- Answer positions were varied so the correct answer isn't consistently first, longest, or a multi-select group (verified spot checks below).

### Scenario differentiation

| Scenario | Primary Skill | Question Format(s) | Why It's Different |
|---|---|---|---|
| 1. HVAC Shutdown Request | Identify what information is required before responsibly quoting a solution | Single best answer + one focused multi-select (6 of 8) + response selection | The only scenario that tests systematic information-gathering as its primary skill |
| 2. Duct Detector Problem | Diagnose an existing system and determine what to investigate first | Single best answer ("investigate FIRST"), single best answer (confirming evidence), single best answer (function type), single best answer (what NOT to do) | Tests sequential diagnostic reasoning (first move → confirming evidence) instead of information-gathering; no checklist |
| 3. Customer Substitute Request | Determine what must be verified before recommending an alternate product | Single best answer (recognize the decision), single best answer (safest action), small focused multi-select (2 of 4), single best answer ("trap" comparison: general listing vs. confirmed compatibility) | Tests substitution/compatibility judgment and a plausible-but-wrong technical trap, not information-gathering |
| 4. Drawing vs. BOM Discrepancy | Identify a quantity discrepancy and determine how to handle it | Single best answer (data comparison: "which number to trust"), single best answer (what to request), single best answer (what would confirm it), single best answer (impact/risk awareness) | Tests numeric/document discrepancy analysis against real side-by-side data, not a checklist or open-ended request |
| 5. Rush Quote Request | Prioritization and professional judgment under time pressure | Single best answer ("what should you do FIRST?"), single best answer (choose the best of four draft customer responses), single best answer (minimum viable information), single best answer (avoid the pitfall) | Tests urgency/communication judgment and response-quality comparison, not information completeness |

No two consecutive scenarios rely on the same reasoning pattern: 1 → 2 shifts from "what do I need to gather" to "what do I check first"; 2 → 3 shifts from diagnosing an existing system to judging a new request; 3 → 4 shifts from compatibility judgment to numeric/document discrepancy analysis; 4 → 5 shifts from resolving a discrepancy to prioritizing under time pressure.

### Technical accuracy

No existing correct answers were changed to make questions "more varied." The three new scenarios reference already-verified Product Library entries (`SIGA-278` pull station, `SIGA-OSD` smoke detector) rather than inventing new part numbers or specs. One framing was flagged for SME confirmation rather than silently finalized — see `REAL_WORLD_SCENARIOS_CONTENT_REVIEW.md`.

### Scenarios tested (manual, in-browser) after Pass 3

- **Scenario 3:** stepped through whatYouKnow (single, correct answer) → missingInformation (single, correct answer) → investigate (multi-select, both required items selected, rendered `Selected · Useful`) → productFunction (single, correct answer selected, rendered green `Selected · Correct` with explanation) ✅
- **Scenario 4:** confirmed the "Project Information Provided" list on the Customer Request step shows the drawing (14) vs. BOM (18) data side by side before the question is asked ✅
- **Scenario 5:** confirmed the "What should you do FIRST?" question renders with four single-choice options and no checklist ✅
- Re-verified 390px mobile width after the content changes: `scrollWidth === clientWidth` (375px), no overflow, on all three new scenarios ✅
- Re-verified scenario-card grid shows all 5 updated titles/messages correctly, and Previous/Next navigation still moves between the new scenario set correctly ✅

## Pass 2 — Trainee-First UI Simplification

### 1. UI Cleanup — Removed Redundant Framework Panels

Removed, per scenario:
- The **"Where Am I?" stepper** and **"Current Objective"** panel (`module-overview` section) — this duplicated the step title/prompt already shown in the workspace, and duplicated the "Scenario Structure" list in the old sidebar.
- The **"Scenario Structure" workflow list**, the **"Useful Questions to Ask"** panel, and the **"Technical Accuracy" reminder** — these lived in a separate sticky sidebar that competed with the actual scenario content. Consolidated into **one** compact, collapsed-by-default "Field notes" panel at the bottom of the page with a short 4-item question list and a single-line accuracy reminder.
- The **"Think like Sales Support" mindset banner** — decorative restatement of the page subtitle, removed.
- The two-column progress card with a progress bar, percent, and "Scenario X of 5" label (three ways of saying the same thing) — replaced with a single badge: **"Scenario X of 5"**, plus **"Y of 5 complete"** on the scenario selector.
- Duplicate scenario-card metadata ("Difficulty" row and "Completion Status" row shown separately from the card header) — folded into one line: `Scenario N · Difficulty` plus a single status chip (`In Progress` / score once complete).
- "Skills Demonstrated" list on the final readiness screen — redundant with the Skill Breakdown grid directly below it; removed. Also removed the separate "Average %" stat (kept Overall Score and Scenarios Completed).

The page now follows: **Scenario title → Situation → Question → Answer options → Submit → Feedback → Next/Retry**, with only the scenario selector and a collapsed field-notes panel as secondary content.

### 2. Response Builder — Simplified

Previously required: Add, Remove, Move Up, Move Down, a two-column "Available/Draft" layout, and a live preview box. None of the five scenarios score on response *order* (`evaluateResponseBuilder` only checks which items are present), so ordering added interaction cost without a learning objective.

**Changed to:** a single toggleable checklist ("What should your response include?"), reusing the same selected/correct/incorrect visual states as the other question types, with one "Check Response" button. The final recommended-response text (shown on the Score screen) now assembles selected items in their original defined order rather than click order, so it still reads as a coherent response.

### 3. Multi-Select Checklist Sizing

Four multi-select questions required selecting 8–11 items with zero distractors (everything had to be checked to be "correct" — testing recall, not judgment). Trimmed the **required** set to 5–6 core items per question and moved the rest to **optionalValid** (still shown, still explained, still valid if picked, just not required for a correct rating). No options were removed and no technical meaning changed. Full list of changes in `REAL_WORLD_SCENARIOS_CONTENT_REVIEW.md`.

### 4. Pre-existing bug fixed

Multi-select options in the `optionalValid` list (valid but not required, e.g. Duct Detector Problem's "SIGA-DDOS has a built-in relay" option) were previously rendered identically to a wrong answer ("Selected · Not needed," red) once revealed. They now render as a neutral "Selected · Also valid" state. This is a UI bug fix, not a change to any technical answer.

### 5. Scenario Navigation

Added explicit **"← Previous Scenario" / "Next Scenario →"** buttons in the workspace header (disabled at the first/last scenario) so moving between scenarios doesn't require returning to the card grid. The scenario selector cards remain for jumping directly to any scenario, and "← Back to Training" / "Return to Training" remain for leaving the module.

### 6. Question Wording

Reviewed all five scenarios. Removed meta/AI-sounding phrasing (e.g., "Best answer for this training prompt: investigate the verified..." → "Start with the verified... family..."). Simplified repetitive feedback templates. No technical facts, terminology, or question intent were changed — see `REAL_WORLD_SCENARIOS_CONTENT_REVIEW.md` for anything flagged rather than silently rewritten.

### 7. Redundant Questions

See `REAL_WORLD_SCENARIOS_CONTENT_REVIEW.md`. Top finding (Pass 1): **"Something Doesn't Look Right"** and **"Full Project Request"** taught nearly the same lesson (don't quote from an incomplete request) at two difficulty levels. **Resolved in Pass 3** by replacing both scenarios with "Drawing vs. BOM Discrepancy" and "Rush Quote Request," which test discrepancy analysis and prioritization respectively.

### 8. Feedback

Feedback stays a short state + one-line explanation per step (e.g., "Not enough yet. Still missing: HVAC equipment/control information, Required shutdown behavior..."). Not rewritten into literal CORRECT/NOT QUITE labels site-wide because the existing "Best answer / Also reasonable / Not enough yet" language already carries partial-credit nuance (some answers are "also reasonable," not simply wrong) that a binary label would lose — flagging this as an intentional deviation from the literal spec wording rather than an oversight.

### 9. Mobile Re-check (~390px)

Re-verified after removing the old two-rail layout: `scrollWidth === clientWidth` (375px), no horizontal scroll, answer options full-width with 44px minimum tap height, selected/correct/incorrect states remain visible and text-labeled at mobile width. Removing the old side-by-side header and sidebar/rail layout also reduced the breakpoints needed — the page is close to single-column by default now.

### 10. Retry (re-verified)

"Try Again" (from a scenario card, or the Score screen) fully resets that scenario's answers, response builder selection, BOM builder items, confidence, feedback, and step back to 1 — verified live end-to-end.

## Pass 1 — Interaction & Answer-State Fixes (still in effect)

### Answer Selection

- The entire option button (not a radio/checkbox) is the click target — clicking the text or the surrounding card selects it.
- Selected state is a solid 2px blue border + fill + outer glow, plus a visible "Selected" tag (not color-only).
- `aria-pressed` is set on every option button for assistive tech.
- Global `:focus-visible` outline (site-wide) applies to these buttons; a stronger scenario-specific focus ring was added as well.
- Changing an answer after seeing feedback clears the stale feedback immediately, instead of leaving old correct/incorrect coloring on screen.

### Answer States

| State | Visual | Text label (not color-only) |
|---|---|---|
| Unselected | default card | none |
| Selected (before check) | blue border/glow | "Selected" |
| Correct (after check) | green border/fill + ✓ | "Selected · Correct" |
| Incorrect (after check) | red border/fill + ✗ | "Selected · Not the best answer" |
| Best answer revealed (if you picked wrong) | dashed green outline | "Best answer" |
| "Also reasonable" answer | amber outline | "Selected · Also reasonable" |
| Multi-select: selected & required | green + ✓ | "Selected · Useful" |
| Multi-select: selected & optionally valid | amber | "Selected · Also valid" |
| Multi-select: selected & not needed | red + ✗ | "Selected · Not needed" |
| Multi-select: missed a required item | dashed green | "Missed · Should have been checked" |

The correct answer is never shown until "Check Step" / "Check Response" is pressed — verified by inspecting the DOM before and after the check click.

### Accessibility

All options are real `<button>` elements with `aria-pressed`, inside a labeled `role="group"`. Keyboard focus uses `:focus-visible`. No state depends on hover or color alone.

### Mobile fix (original)

At 390px, the page previously overflowed horizontally because the fixed 250px sidebar doesn't collapse at any breakpoint site-wide (a pre-existing, site-wide layout limitation in the shared `/styles/style.css`, not modified per scope). Fixed by adding a scoped override inside `scenarios.css` (loads only on this page) that hides the sidebar and expands the content area at ≤640px, keeping "← Back to Training" available for navigation.

## Scenarios Tested (manual, in-browser, both passes)

Full 8-step run of **HVAC Shutdown Request**:
1. Opened scenario ✅
2. Clicked an answer — visible selected state immediately ✅
3. Changed answer — new one selected, stale feedback cleared ✅
4. Checked step — correct/incorrect states rendered on the options themselves ✅
5. Advanced through Missing Info (multi-select, including an optionalValid item rendering correctly as neutral), Investigate, Product/Function, the simplified Response Builder, Review (confidence), Submit ✅
6. Score screen showed a numeric score with breakdown and recommended response ✅
7. "Try Again" reset the scenario fully to Step 1 ✅

Spot-checked the redesigned scenario-card grid, Previous/Next scenario navigation, the collapsed Field Notes panel, and mobile layout at 390px — all functional.

## Not Changed

No changes were made to Takeoff Drawing Exercises, Exercise 001–004, Product Library, Dashboard, global navigation, global scoring outside this module, source drawings, answer keys, or product quantities. `styles/style.css` and `training/module-shell.css` (shared across all training modules) were left untouched; all fixes live in the three scenario-only files listed above.
