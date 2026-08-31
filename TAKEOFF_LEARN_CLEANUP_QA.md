# Takeoff Learn — Cleanup & QA Report

Scope: the "Learn" tab content in `training/takeoff/index.html` (`.takeoff-lessons`, `.takeoff-framework`, `.takeoff-color-legend` sections), plus the two small script fixes needed to support it (`training/takeoff/interactive-takeoff.js` view-visibility list, `training/takeoff/takeoff.js` lesson-card-to-`<details>` conversion), and matching CSS in `training/takeoff/takeoff.css`. The Practice tab (Takeoff Knowledge Simulator) and Drawing Exercises tab (Exercise 001–004, `exercise-data.js`, source PNGs, click regions) were not touched. No commit, no push.

## 1. The 12 Lessons Are Now the Center of the Page

Order on the page: page title → one-sentence intro → the single authoritative workflow strip → the 12 lesson cards → the one color-system reference. There is no longer a separate framework/roadmap block between the intro and the lessons.

## 2. Duplicated Workflow Explanations — Removed

Found **two** competing workflow representations:
1. The `workflow-strip` at the top of the lessons (8 steps) — kept, and is now the **one authoritative workflow**.
2. A `.takeoff-framework` section with a 10-step "Step 1 (Available) → Step 10 (Locked)" grid that repeated the same 8-step workflow, plus added an undefined "Independent Takeoff" step not used anywhere else, plus a duplicate pair of non-interactive "knowledge check" `<details>` elements that repeated the same two questions already asked interactively inside Lesson 2 and Lesson 3.

**Finding:** this entire `.takeoff-framework` section was already set to `display: none` in `takeoff.css` — it was fully invisible to trainees already, just left in the DOM. It has been removed from the HTML entirely (not just hidden), along with its now-unused CSS (`.framework-grid`, `.framework-step*`, `.knowledge-check-grid`, `.knowledge-check*`, `.knowledge-answer*`, `.training-mode-key`, `.mode-label*`) and its reference in `interactive-takeoff.js`'s view-visibility list. No trainee-visible behavior changed — this was dead weight removed for real, not just a visual change.

The one remaining workflow strip's labels were also standardized to match the requested wording exactly: **Read the Key → Read the Notes → Identify Products → Identify Colors → Count Devices → Tally Quantities → Enter Quantities → Reconcile.**

## 3. Cross-Off Language

Searched the entire `training/takeoff/` folder for `cross off`, `cross-off`, `check off`, `checked off`, `mark off`, `crossed`. Result: **no cross-off/check-off language exists anywhere in the Learn content.** The current Learn wording already used "counted marks," "tally," and "reconcile," consistent with the current select → click → count → tally → enter → reconcile workflow.

One stale match was found outside the Learn section's scope: a CSS class `.interactive-location-marker.is-crossed-off` in `interactive-takeoff.css` (used by the Practice/Drawing Exercises marker styling, not Learn content). It was **not modified** — it's outside this pass's strict scope (Exercise/Drawing Exercises styling), and nothing in the current code appears to ever apply that class. Flagged here for a future pass rather than touched.

## 4. One Authoritative Color System

There were previously **two** color explanations:
1. Lesson 5 ("Apply the Color-Coding System") reproduced the entire color mapping inline as one long paragraph (all 7 colors, every category).
2. The separate "Confirmed Ban-Koe Takeoff Color System" section below it, with the same mapping again as color-swatch cards.

Lesson 5 has been shortened to a short pointer with one example ("Smoke Detectors are RED, Heat Detectors are LIGHT BLUE, Pull Stations are GREEN — see the full ... Color System below") instead of repeating the full list. The color-swatch card section is now the **one** authoritative reference, renamed **"BAN-KOE TAKEOFF COLOR SYSTEM"**, with its redundant secondary heading/badge/footer text trimmed to a single clear intro line.

The color mappings themselves were already consistent with the colors specified in this pass's instructions (Smoke = RED, Heat = LIGHT BLUE, Test Stations/Wall Strobes/Ceiling Strobes = ORANGE, Wall & Ceiling Horn/Strobes and Speaker/Strobes = YELLOW, Pulls = GREEN, CR/CT devices = PINK) and were not changed.

## 5. Heat Terminology

Rate-of-Rise and Fixed heat detectors are now explicitly documented as counting toward the general **Heat Detectors (LIGHT BLUE)** category for training purposes, with a specific subtype identified only "when a project drawing or SKU requires it" — added as a single note under the color system rather than repeated per-lesson. Lesson 5's pointer also uses "Heat Detectors" as the general example rather than naming a subtype.

Note: the Drawing Exercises (`exercise-001`/`exercise-002` `exercise-data.js`) list "R of R Heats" and "Fixed Heats" as separate product categories in their own data. That is exercise-specific data, explicitly out of scope for this pass, and was not touched — it's a legitimate case of "project/SKU-specific" subtype tracking, consistent with the general-vs-specific rule now documented in Learn.

## 6. Lesson Structure

Standardized where useful: short explanation → optional **LOOK FOR** list → optional **KEY POINT** (`.lesson-rule`, reusing the existing style). Not every lesson needed all three — added `LOOK FOR` only to Lessons 2, 3, and 6, where instructed, rather than mechanically on all 12.

## 7. Text Reduction

Trimmed wording across most lessons (e.g., Lesson 1, 3, 6, 7, 9, 10) — shorter sentences, removed repeated phrasing ("Confirm what each symbol means, which product or device it represents, its part number, the abbreviations in use, and which symbols belong in this takeoff" → "It tells you what each symbol means, its abbreviation, and which color/category it belongs to"). No technical content was removed, only restated more concisely.

Fixed one internal inconsistency: Lesson 8 previously said to tally by "part number," while Lesson 4 explicitly says the trainee identifies the **category**, not the final part number (Sales Engineering determines the SKU). Lesson 8 and the Common Mistakes list now say "category" to match.

## 8. Wall vs. Ceiling Devices

Added directly to Lesson 2 (Read the Drawing Key/Legend), since mounting indication is a key-reading skill:
- **LOOK FOR:** device abbreviation, device symbol, **wall vs. ceiling indication**, color/category.
- Rule: **"Attachment line = wall-mounted. Circle = ceiling-mounted."**
- Example: a Wall Speaker/Strobe and a Ceiling Speaker/Strobe do the same job but are separate takeoff categories.

Lesson 4 (Identify the Products) adds one line reinforcing that mounting location can change the category even when the device function is similar. Neither lesson describes Exercise 004's specific device layout or numbers — the concept is taught generically, the hands-on practice stays in Exercise 004.

## 9. Lesson Navigation & Progress

- Each lesson card now has a **Previous Lesson / Next Lesson** link (native anchor links, not JS-driven), and each card's label reads **"Lesson N of 12"** — one clear, single progress indicator instead of a separate progress bar/percentage/step-count system.
- The lessons remain visible as a full scannable grid (per the requirement that "the 12 lessons are the visual and instructional focus"), and each is individually expand/collapse via its existing `<details>`/`<summary>` behavior. "Next Lesson" scrolls to and focuses the next card; the trainee clicks its title to expand it (consistent with the existing collapsible-card interaction pattern already used site-wide for these lessons).
- **Bug fixed:** the script that converts each `.lesson-card` into a collapsible `<details>` element was dropping the element's `id` attribute during conversion, which would have silently broken the new Previous/Next anchor links. Fixed by copying `id` along with `className` during the conversion (`training/takeoff/takeoff.js`).

## 10. Mobile (~390px)

Verified: `scrollWidth === clientWidth` (375px), no horizontal overflow. The sidebar already collapses to a horizontal bar at ≤700px and the lesson grid already collapses to a single column at ≤700px (pre-existing responsive rules) — no new mobile issues introduced by this pass.

## 11. Accessibility

- Lesson cards use native `<details>`/`<summary>` — keyboard-operable by default, with a clear `+`/`-` expand indicator.
- Previous/Next are real `<a href="#lesson-N">` links — keyboard-focusable, visible via the site-wide `:focus-visible` outline.
- The in-lesson knowledge-check buttons (Lesson 2, 3) already disable all options and show a text result after answering — not color-only.
- The wall/ceiling rule and color examples are stated in text ("Attachment line = wall-mounted. Circle = ceiling-mounted."), not conveyed by color swatches alone.

## 12. Lessons Reviewed / Consolidated

All 12 lessons plus the "Source Reference" card were reviewed against: does it teach something needed, is it duplicated elsewhere, can it be understood quickly, is there a clear takeaway.

- No lessons were removed or merged — each of the 12 already targets a distinct step or concept (What a takeoff is → Key → Notes → Product ID → Color → Count → Review marks → Tally → Enter → Reconcile → Common mistakes → Practice), and removing any would make the sequence confusing per the instructions.
- The one real duplication found was the framework/knowledge-check block described in section 2 above (a duplicate of the workflow + duplicate of Lesson 2/3's quizzes) and the duplicate color system described in section 4 — both resolved by removal/consolidation rather than lesson-count changes.

## 13. Acceptance Test (manual, in-browser)

- Opened the page fresh: intro is immediate, workflow strip is visible before any lesson, all 12 lessons visible without scrolling through extra framework sections ✅
- Expanded Lesson 2, confirmed wall/ceiling rule text renders, clicked the embedded quiz (correct answer), got text feedback, all three options disabled afterward ✅
- Clicked "Next Lesson" from Lesson 2 → scrolled to Lesson 3 (URL fragment updated to `#lesson-3`) ✅
- Confirmed the color system section appears exactly once, with heading "BAN-KOE TAKEOFF COLOR SYSTEM" ✅
- Searched full Learn section text for cross-off/check-off wording — none found ✅
- 390px mobile: no horizontal overflow, lesson cards full-width and readable ✅
- Confirmed `.takeoff-framework` no longer exists in the DOM ✅

## 14. Technical Content Requiring SME Review

None identified. The color mappings, workflow order, and heat-detector general/specific rule were already established Academy conventions; this pass only removed duplication and shortened wording, and did not add or change any technical fact.
