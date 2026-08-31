# Real-World Scenarios — Content Review

Per instructions, no technically questionable content was silently rewritten. Items below are recorded for a separate technical/content review pass.

## Pass 2 — Content Diversification

Scenarios 3, 4, and 5 were replaced with new topics (not just reworded) so each scenario tests a different Sales Support decision instead of repeating "select all the useful information":

- **Scenario 3** was "Customer Needs Notification" (gymnasium notification device selection) → now **"Customer Substitute Request"** (verify compatibility before approving an alternate pull station).
- **Scenario 4** was "Something Doesn't Look Right" (recognize an incomplete quote request) → now **"Drawing vs. BOM Discrepancy"** (14 vs. 18 smoke detectors between the riser drawing and BOM request — a data-comparison/discrepancy judgment, not an information checklist).
- **Scenario 5** was "Full Project Request" (large capstone BOM checklist) → now **"Rush Quote Request"** (prioritization and response quality under a time-pressured, incomplete request).

This also resolves the redundancy flagged in Pass 1 (the old Scenario 4 and Scenario 5 taught nearly the same "the request is incomplete, gather everything" lesson) — the new Scenario 5 tests a different decision (prioritization/professional judgment under pressure) instead of another incomplete-request checklist.

Scenario 2 (Duct Detector Problem) kept its situation but its two info-gathering steps were converted from an 8-item "select what you'd verify" checklist into two single-best-answer diagnostic questions ("What should you investigate FIRST?" then "What would confirm your answer?"), per the instruction to use a different question structure for this scenario. Scenario 1 (HVAC Shutdown Request) was left as the one scenario that legitimately tests focused information-gathering via multi-select, per instructions.

### Technical content introduced in the new scenarios

The new scenarios were built to avoid inventing facts:
- Scenario 3 references the already-verified `SIGA-278 Double Action Intelligent Pull Station` from the Product Library as "the specified" device; the correct answer ("verify system/manufacturer compatibility before approving a substitute, regardless of general UL listing") is a general estimating/compatibility principle, not a specific technical claim about any particular competitor's device.
- Scenario 4 references the already-verified `SIGA-OSD Signature Optica Smoke Detector` as "the specified" device; the 14-vs-18 quantities and drawing/BOM dates are fictional scenario data (not claimed as a real project), consistent with how other scenarios use illustrative numbers.
- Scenario 5 uses generic "small office" sizing and no specific part numbers, since it tests prioritization/communication judgment, not product selection.

**Flag for technical review:** Scenario 3's `productFunction` question states "the substitute pull station is UL listed for fire alarm use in general" as a given fact for the training prompt. This is a plausible generic industry scenario framing (many devices carry general UL listings), not a specific manufacturer claim, but a fire-alarm SME should confirm this framing (a device being "UL listed in general" but not confirmed compatible with a specific addressable system) matches how Ban-Koe actually wants this taught before treating it as final.

## Pass 1 — Redundant scenarios (resolved in Pass 2)

| Scenario | Question | Issue | Resolution |
|---|---|---|---|
| "Something Doesn't Look Right" (missing-information-quote) vs. "Full Project Request" (full-project-request) | Both scenarios' core lesson was "don't quote/build a BOM from an incomplete request — push back for drawings, specs, and interface scope first." | The two scenarios tested almost the same judgment call at two difficulty levels rather than two different skills. | Resolved in Pass 2 by replacing both with "Drawing vs. BOM Discrepancy" (Scenario 4) and "Rush Quote Request" (Scenario 5), which test discrepancy analysis and prioritization respectively — two distinct skills. |

## Pass 1 — Multi-select checklists trimmed for judgment, not content

Four multi-select questions had 8–11 required items with **zero distractors** (every option had to be selected to be marked correct), which tested recall/endurance rather than judgment. No options were deleted and no technical meaning changed — the extra items were moved from `required` to `optionalValid`, so they still display, are still explained, and still count as a valid choice, but are no longer required for a "correct" rating. (Two of the four affected questions — from the old Notification and Full Project scenarios — no longer exist after the Pass 2 rewrite; the HVAC Shutdown Request trim is still in effect.)

- **HVAC Shutdown Request → "What information do you need before selecting a specific solution?"** — required is 6 of 8 (`panel-system`, `hvac-controls`, `shutdown-behavior`, `drawings-specs`, `interface-type`, `hvac-count`), with 2 genuine distractors (`weather`, `favorite-brand`). Unchanged — this is the one scenario where a focused information-gathering checklist is the intended skill.

Recommend a technical reviewer confirm the "required" items chosen for HVAC Shutdown Request are the most important ones for that scenario (this was picked by contextual judgment, not domain authority).

## Pre-existing bug (fixed, not a content change)

Multi-select questions with an `optionalValid` list (e.g., Duct Detector Problem's "SIGA-DDOS has a built-in relay" option) were previously rendered with the same red "Selected · Not needed" styling as an actual wrong answer, even though selecting them is legitimately correct. Fixed the rendering logic so optionalValid selections show a neutral "Selected · Also valid" state instead of looking like a mistake. This is a UI bug fix, not a change to any technical answer.

## No other issues found

No questions were found with multiple arguably-correct answers, unclear technical wording, or terminology used inconsistently across scenarios during this review.
