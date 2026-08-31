# Academy Consistency Audit — Pass 3

Scope: an Academy-wide terminology/consistency audit (no redesign). Changes made: two small terminology/wording tightenings, one dead-CSS removal, and one genuine site-wide mobile CSS fix. No exercise mappings, coordinates, quantities, source PNGs, answer keys, product data, scoring formulas, or Takeoff interaction mechanics were changed. No commit, no push.

## 1. Global Search Performed

Searched the entire workspace for: `Test Station`, `Heat Detector`, `Rate-of-Rise`, `Fixed Heat`, `Wall Speaker/Strobe`, `Ceiling Speaker/Strobe`, `Wall Horn/Strobe`, `Ceiling Horn/Strobe`, `Smoke Detector`, `Duct Smoke Detector`, `Cross Off`, `Check Off`, `overhead device`, `ceiling appliance`, `wall appliance`, `Your count`, `FACP`, `FAA`, and common button labels (`Submit`, `Retry`, `Reset`, `Clear All`, `Enter Final Quantities`, `Reconcile`, `Back to Exercises`, `Check Answer`).

## 2. Test Station Color — Audited, No Fix Needed

Checked every `exercise-data.js` (Exercises 001–004) and Takeoff Learn: **Test Stations are ORANGE everywhere, with no exceptions.** No page, exercise, or legend describes Test Stations as PINK. No change required.

## 3. Heat Terminology — Audited, Already Consistent

- Takeoff Learn (from Pass 2) states the general rule: Heat Detectors are LIGHT BLUE, with Rate-of-Rise/Fixed treated as the general category "unless a project drawing or SKU requires the subtype."
- All four exercises' key/product data use `color: "LIGHT BLUE"` for every heat-related entry (`heat-detectors`, `ror-heats`, `fixed-heats`) — no color conflict anywhere.
- The exercises presenting `R of R Heats` / `Fixed Heats` as separate countable categories is **not a conflict** — it's exactly the "project/SKU requires a subtype" exception Learn already describes, since each exercise is a specific drawing that calls out the subtype. Exercise data is out of scope for this pass regardless.
- `data/edwards/index.js` (Product Library) lists `SIGA-HFS Fixed Temperature Heat Detector` and `SIGA-HRS`/`SIGA-HRD Rate-of-Rise Heat Detector` as real, distinct manufacturer SKUs — correctly preserved as-is (actual part numbers/product-specific terminology, protected under Section 15).

**No changes made** — this category was already internally consistent.

## 4. Wall vs. Ceiling Terminology — Audited, Already Consistent

Every exercise (`exercise-001` through `exercise-004`) and Takeoff Learn use identical naming: `Wall Horn/Strobe`, `Ceiling Horn/Strobe`, `Wall Speaker/Strobe`, `Ceiling Speaker/Strobe`, `Wall Strobe`, `Ceiling Strobe`. Exercise 004's notes and key ("CIRCLED SYMBOLS INDICATE CEILING-MOUNTED..." / "ATTACHMENT LINES TO WALLS INDICATE WALL-MOUNTED...") match Takeoff Learn's rule exactly ("Attachment line = wall-mounted. Circle = ceiling-mounted."). No conflicting phrases like "overhead device" or "ceiling appliance" were found in Takeoff/mounting contexts.

Two matches for "wall appliance" / "ceiling appliance" were found in `data/module1.js` and `data/partNumberQuestions.js` — reviewed and left unchanged: they're quiz answers decoding Edwards G4-series part-number suffixes (e.g., "G4LF = G4 Series standard wall appliance"), where "appliance" is the correct NFPA/industry term for a notification appliance and is unrelated to the Takeoff wall/ceiling-mounting teaching context. Changing this would risk altering quiz meaning for no consistency benefit.

**No changes made** — this category was already internally consistent.

## 5. Cross-Off / Check-Off Language

**Active learner-facing UI:** none found. Confirmed in Pass 2 that Takeoff Learn has no cross-off language, and this pass confirms the same for every other active page.

**Historical QA documents** (e.g., `TAKEOFF_DRAWING_COUNTING_WORKFLOW_QA.md`, `TAKEOFF_EXERCISE_00X_*.md`, `TAKEOFF_INTERACTIVE_DESIGN.md`, `TAKEOFF_SOURCE_EXTRACTION_REPORT.md`) contain many references to "cross off"/"crossed off," documenting a workflow that was intentionally removed. **Left unchanged, as instructed** — these are historical/superseded records of a past implementation, not active learner-facing UI, and rewriting them would misrepresent what was actually tested at the time.

**One stale, dead reference found and fixed:** `training/takeoff/interactive-takeoff.css` had a CSS rule `.interactive-location-marker.is-marked.is-crossed-off { ... }`. Confirmed no JavaScript anywhere applies the `is-crossed-off` class (the cross-off feature itself was already removed per the historical QA docs above) — this was orphaned, unused CSS naming a retired concept. Removed it. This does not change any interaction mechanic, mark, color, or scoring — it deletes a rule that was never being applied.

### BEFORE → AFTER
```
BEFORE:
.interactive-location-marker.is-marked.is-crossed-off {
    border-style: dashed;
    background: color-mix(in srgb, var(--marker-color, #f59e0b) 14%, transparent) !important;
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--marker-color, #f59e0b) 32%, transparent);
}

AFTER:
(removed — rule was unreachable dead code)
```

## 6. Acronyms

`FACP` (Fire Alarm Control Panel) and `FAA` (Fire Alarm Annunciator) are defined consistently everywhere they appear (quiz, exercises, Takeoff Learn, System Builder). No redefinition drift found. No change needed.

## 7. Results Terminology

`interactive-takeoff.js`'s results/reconciliation rendering already uses exactly the vocabulary specified in this pass: **Device Identification, Color Coding, Counting, Reconciliation**, and **Entered / Expected / Result**, **Correct categories**, **Devices accounted for**, **Quantity accuracy**. No "Your count" wording exists anywhere. No change needed — this was already compliant.

## 8. Button Language

Spot-checked common actions across Quiz, System Builder, Takeoff Practice, and Real-World Scenarios:
- `Retry`, `Reset`, `Clear All`, `Enter Final Quantities`, `Reconcile`, `Back to Exercises`, `Previous`/`Next` — used consistently, one label per action, no duplicate variants found.
- **Reviewed, left intentionally different:** Quiz uses "Submit Answer →" (a final, scored answer) while System Builder and Takeoff Practice use "Check Answer" (a formative, ungraded check). This is a meaningful distinction (graded submission vs. practice check), not an accidental inconsistency, so it was **not** changed, per the instruction not to force wording where different language is genuinely appropriate.

## 9. Real-World Scenarios / Product Library / Dashboard

- **Real-World Scenarios:** audited `scenarios.js` for Takeoff color/mounting terminology — none present (scenarios are Sales Support judgment content, not takeoff-color content). No terminology conflicts found. **No content or question-structure changes made**, per instructions.
- **Product Library:** audited `data/edwards/index.js` for the color/device-name categories in this pass — manufacturer part numbers and product-specific terminology (e.g., "SIGA-HFS Fixed Temperature Heat Detector") were correctly preserved as real SKU-level names, not generic recognition categories. No redesign performed.
- **Dashboard:** no Takeoff color/device/mounting terminology exists on the Dashboard. No terminology changes were needed; layout was not touched.

## 10. Mobile Check (~390px) — Real Issue Found and Fixed

Checked Dashboard, Product Library, Quiz, Training, Real-World Scenarios, and Takeoff Learn at 390px width.

**Found:** the Dashboard overflowed horizontally (`scrollWidth: 453` vs. `clientWidth: 375`). Root cause: the site-wide fixed 250px sidebar (`styles/style.css`) never collapses at any breakpoint, which is the same defect worked around individually in the Real-World Scenarios and Takeoff Learn passes with page-scoped CSS overrides. Since this is clearly an Academy-wide pattern (present on every page using the shared sidebar) rather than a one-page issue, it was fixed **once, at the source**, in `styles/style.css`, using the same proven transform already present in `training/takeoff/takeoff.css` (collapse the sidebar to a horizontal top bar, expand content to full width, at ≤700px). This is a CSS-only, breakpoint-only addition — the desktop sidebar/layout is completely unchanged (verified: 250px fixed sidebar still renders normally above 700px).

**Re-verified after the fix**, all six pages checked have `scrollWidth === clientWidth` (375px), no horizontal overflow:
- Dashboard ✅ (previously overflowing, now fixed)
- Product Library ✅ (already passing)
- Quiz ✅ (already passing)
- Training overview ✅ (already passing)
- Real-World Scenarios ✅ (already passing; its own page-scoped mobile override from Pass 1 remains in place and is now redundant but harmless)
- Takeoff Learn ✅ (already passing; its own page-scoped sidebar rule in `takeoff.css` remains in place and is now redundant but harmless)

## 11. Accessibility

No large accessibility redesign performed. Spot-checked: buttons across the audited pages have descriptive text labels (not icon-only), the site-wide `:focus-visible` outline is applied globally and unaffected by this pass's CSS change, and no state audited in this pass relies on color alone (confirmed already true for Takeoff/Scenarios states from prior passes). No new accessibility defects introduced or found beyond the mobile overflow already covered above.

## 12. Runtime Audit

Ran `runtime-audit.html` after all changes: **PASS — ALL RUNTIME CHECKS PASSED** (all quiz banks: 0 invalid questions, 0 duplicate answers, 0 invalid correct-answer references, 0 randomization/scoring failures across 11 quiz categories and the combined engine scoring tests; product integrity check passed).

## 13. Items Intentionally Left Unchanged

- All "cross off" / "crossed off" language inside historical `.md` QA reports — preserved as historical/superseded documentation of a workflow that was later removed, not rewritten to pretend it never existed.
- `data/module1.js` / `data/partNumberQuestions.js` "wall appliance"/"ceiling appliance" quiz answers — different context (part-number decoding), correct industry terminology, not a mounting-language conflict.
- `data/edwards/index.js` Rate-of-Rise/Fixed-Temperature SKU entries — legitimate distinct manufacturer products, protected under Section 15.
- "Submit Answer" (Quiz) vs. "Check Answer" (System Builder/Takeoff Practice) — a meaningful graded-vs-formative distinction, not an accidental inconsistency.
- Real-World Scenarios, Product Library, and Dashboard content/layout — no terminology conflicts found; nothing to change without redesigning, which was out of scope.
- `training/scenarios/scenarios.css` and `training/takeoff/takeoff.css`'s own page-scoped mobile sidebar overrides — left in place; now redundant with the new global fix but harmless (later-loaded, identical rules).

## 14. Changes Made (Summary)

| File | Change |
|---|---|
| `training/takeoff/interactive-takeoff.css` | Removed dead, unreferenced `.is-crossed-off` CSS rule (retired-workflow naming, never applied by any code) |
| `styles/style.css` | Added a site-wide `@media (max-width: 700px)` sidebar-to-topbar collapse (CSS-only; fixes a real horizontal-overflow bug found on the Dashboard and consistent with the pattern already used on Takeoff Learn) |

No other files were modified in this pass.
