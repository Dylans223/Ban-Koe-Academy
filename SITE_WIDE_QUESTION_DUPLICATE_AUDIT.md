# SITE-WIDE QUESTION DUPLICATE AUDIT

Audit date: 2026-08-21

This was an audit-only pass. No question banks, product data, quiz logic, scoring, randomization, progress tracking, UI, or navigation were modified. No questions were removed. No GitHub push was performed.

## Audit scope and runtime path

The production quiz loads these scripts in this order:

1. `scripts/navigation.js`
2. `data/module1.js`
3. `data/module2.js`
4. `data/edwards/index.js`
5. `data/wiringQuestions.js`
6. `data/inventoryOrderCheckInQuestions.js`
7. `data/partNumberQuestions.js`
8. `data/finalBossQuestions.js`
9. `data/accessControlQuestions.js`
10. `data/quizData.js`
11. `quiz/quiz.js`

The six primary scored question sources requested for this audit are represented by:

- `data/questions.js` through the global `questions` array loaded by `data/module1.js` in the production quiz path
- `data/module1.js` / `questions`
- `data/module2.js` / `module2Questions`
- `data/partNumberQuestions.js` / `partNumberQuestions`
- `data/wiringQuestions.js` / `wiringQuestions`
- `data/finalBossQuestions.js` / `finalBossQuestions`

The runtime also loads `data/inventoryOrderCheckInQuestions.js` and `data/accessControlQuestions.js`; both were included because they generate learner-facing scored questions. `data/edwards/index.js` supplies product records, not question objects. No JSON file was found on the traced quiz question-loading path that generates scored questions.

`data/quizData.js` normalizes and maps raw records into category pools. It also derives `mixed-knowledge` by copying each question from eight standard categories and appending `_mx` to the source UID. Mixed Knowledge copies are generated encounters, not independent question records.

## Counts reviewed

### Live source pools

| Runtime pool | Questions |
| --- | ---: |
| Product Recognition | 56 |
| Part Number Mastery | 48 |
| Product Applications | 36 |
| Inventory & Order Check-In | 23 |
| Access Control | 140 |
| Wiring & Connections | 45 |
| Takeoff & Estimating | 39 |
| Modules & Systems | 70 |
| Real-World Scenarios | 36 |
| Final Boss | 92 |
| **Unique source questions reviewed** | **585** |
| Mixed Knowledge generated copies | 470 |
| **Total learner-facing pool entries** | **1,055** |

The 585 source questions are the unique questions in the live non-Mixed pools after runtime normalization and exact-text de-duplication. The 470 Mixed Knowledge entries are derived copies of source questions and are not counted as additional distinct learning opportunities.

## Normalization method

Question text was normalized for comparison by:

- trimming leading and trailing whitespace
- converting capitalization to lowercase
- normalizing curly quotation marks and apostrophes
- replacing punctuation and other non-alphanumeric separators with spaces
- collapsing repeated whitespace

Answer-set comparison normalized answer text the same way and compared sorted sets, so answer-order changes were not treated as unique questions.

Near-duplicate screening used token-set similarity as a candidate finder. Similarity candidates were then reviewed for the underlying knowledge unit. The similarity score is a triage signal, not an automatic duplicate decision.

## Level 1: Exact duplicates

**Exact normalized question duplicates: 0** across the 585 unique source questions.

The runtime audit also reports zero exact duplicate text in every live category pool and zero exact duplicates in Mixed Knowledge.

### Exact duplicate table

| Question ID | File | Duplicate ID | Duplicate File | Reason |
| --- | --- | --- | --- | --- |
| None | None | None | None | No normalized question text occurred more than once across the live source pools |

This does not mean the site is free of knowledge duplicates. Exact text is only the first audit level.

## Level 2: Near duplicates

The automated candidate screen produced 36 near-duplicate candidates at the configured similarity threshold. After review, these fall into two groups:

- **Legitimate parallel templates:** the wording is intentionally reused for different products, protocols, terminals, or replacement relationships.
- **Review candidates:** the wording is close enough that a future content pass should verify whether the knowledge unit adds distinct value.

The clearest review candidates are listed below. They are not automatically classified as duplicates and no recommendation was executed.

### Near-duplicate table

| Question ID | File | Similar question | File | Similarity | Recommendation |
| --- | --- | --- | --- | ---: | --- |
| `wq_22` | `data/wiringQuestions.js` | `wq_23`: Which Edwards Signature module model is identified as a Single Input Module? | `data/wiringQuestions.js` | 0.917 | KEEP both provisionally; verify that signal-module versus input-module distinction is intentional |
| `m2_31` | `data/module2.js` | `wq_34`: What is the primary purpose of a duct smoke detector? | `data/wiringQuestions.js` | 0.818 | KEEP; detector-base purpose and duct-detector purpose are distinct |
| `pn_23` | `data/partNumberQuestions.js` | `pn_24`: Which documented pairing is correct for the Signature CT modules? | `data/partNumberQuestions.js` | 0.857 | KEEP; CC-family and CT-family pairings test different distinctions |
| `pn_9` | `data/partNumberQuestions.js` | `pn_12`: Which Edwards Signature part number represents a Dual Input Module? | `data/partNumberQuestions.js` | 0.750 | KEEP; single-input signal versus dual-input module are distinct identities |
| `wq_27` | `data/wiringQuestions.js` | `fbq_067`: What is the COM terminal role on a relay contact set? | `data/finalBossQuestions.js` | 0.750 | KEEP provisionally; basic terminal definition versus relay contact-set application |
| `m1_152` | `data/module1.js` | `m2_101`: Which EST4 capability is documented for remote, device-independent access to system status reports? | `data/module2.js` | 0.867 | REVIEW; likely the same EST4 remote-status knowledge unit with superficial wording changes |
| `ac_19` | `data/accessControlQuestions.js` | `ac_22`: Which legacy HID product does the X300 serve as a form-and-fit replacement for? | `data/accessControlQuestions.js` | 0.875 | KEEP; X200/V200 and X300/V300 replacement mappings are distinct |
| `ac_32` | `data/accessControlQuestions.js` | `ac_33`: HID identifies the Aero X200 as a form-and-fit replacement for which VertX product? | `data/accessControlQuestions.js` | 0.875 | KEEP; each question tests a separate replacement mapping |
| `ac_134` | `data/accessControlQuestions.js` | `ac_135`: A BOM contains an HID X200. What should you expect it to be associated with? | `data/accessControlQuestions.js` | 0.875 | KEEP; X100 and X200 have different associated functions |
| `pn_60` | `data/partNumberQuestions.js` | `pn_61`: Which catalog number corresponds to the Signature Optica Smoke and Carbon Monoxide Detector? | `data/partNumberQuestions.js` | 0.786 | KEEP; OSHD and OSD/CO variants require different identity recognition |
| `ac_71` | `data/accessControlQuestions.js` | `ac_81`: What type of product is the HES 9600? | `data/accessControlQuestions.js` | 0.778 | KEEP; two different HES product identities |
| `ac_112` | `data/accessControlQuestions.js` | `ac_113`: What does NO commonly mean on a relay? | `data/accessControlQuestions.js` | 0.778 | KEEP; COM, NO, and NC are different relay terms |
| `ac_113` | `data/accessControlQuestions.js` | `ac_114`: What does NC commonly mean on a relay? | `data/accessControlQuestions.js` | 0.778 | KEEP; NO and NC are distinct terms |
| `m1_49` | `data/module1.js` | `m1_50`: What condition is normally generated by a valve tamper switch? | `data/module1.js` | 0.727 | KEEP; waterflow and tamper conditions are different system concepts |

The remaining candidate pairs were repeated question templates whose product, protocol, replacement, or terminal target differs. They are not knowledge duplicates merely because their grammatical structure is similar.

## Level 3: Knowledge duplicates

### Knowledge duplicate table

| Question ID | File | Knowledge unit | Duplicate ID | Duplicate File | Reason |
| --- | --- | --- | --- | --- | --- |
| None remaining | `data/module1.js` | EST4 remote, device-independent access to system status reports | `data/module2.js` | `m2_101` was rewritten during the correction phase | The duplicate was resolved by retaining `m1_152` as the stronger direct feature-recognition item and changing `m2_101` to verified EST3 retrofit compatibility |

**Resolution:** KEEP `m1_152`; REWRITE `m2_101` to test the distinct, verified EST4 retrofit-compatibility knowledge unit. This correction was applied after the original audit and validated by the browser runtime audit.

### Knowledge-duplicate determination

- Confirmed knowledge duplicates before correction: **1 pair**
- Confirmed knowledge duplicates after correction: **0**
- The former pair was resolved by retaining the stronger direct feature-recognition item and rewriting the weaker item to a distinct verified knowledge unit.
- Repeated part-number identities across recognition and application questions were retained when the learner had to perform a different task, such as choosing a product for a scenario rather than naming the product.

## Level 4: Partial overlaps

These questions share a product, family, or broad concept but require different knowledge. They should not be removed solely for overlap.

### Partial-overlap table

| Question ID | File | Related question | File | Why both are useful |
| --- | --- | --- | --- | --- |
| `wq_22` | `data/wiringQuestions.js` | `wq_23`: SIGA-CT1 Single Input Module | `data/wiringQuestions.js` | CC1 tests signal-module identity; CT1 tests input-module identity |
| `pn_1` | `data/partNumberQuestions.js` | `wq_23`: SIGA-CT1 Single Input Module | `data/wiringQuestions.js` | Part Number Mastery asks direct product identity; Wiring asks module recognition in a wiring context |
| `pn_4` | `data/partNumberQuestions.js` | `pn_15`: SIGA-278 two-step activation | `data/partNumberQuestions.js` | One tests direct identity; the other tests application selection |
| `pn_5` | `data/partNumberQuestions.js` | `fbq_016`: SIGA-270 single-action pull station | `data/finalBossQuestions.js` | Direct part-number identity appears in two contexts, but the Final Boss item tests selection between related part numbers |
| `pn_7` | `data/partNumberQuestions.js` | `fbq_017`: SIGA-CC2 dual input signal module | `data/finalBossQuestions.js` | One is a direct identity item; the other is a final-assessment recognition item |
| `pn_20` | `data/partNumberQuestions.js` | `fbq_019`: SIGA-CRR reverse-polarity control relay | `data/finalBossQuestions.js` | Same product identity, but one uses the relay variant description and the other uses direct part-number recognition |
| `pn_30` | `data/partNumberQuestions.js` | `fbq_029`: Genesis G4/GCS series distinction | `data/finalBossQuestions.js` | Both cover Genesis family recognition; one decodes the series distinction and the other applies a pairing to two mounting/use contexts |
| `ac_17` | `data/accessControlQuestions.js` | `ac_20`: HID Aero X300 output control | `data/accessControlQuestions.js` | X200 input monitoring and X300 output control are parallel but distinct functions |
| `ac_32` | `data/accessControlQuestions.js` | `ac_35`: VertX-to-Aero upgrade review | `data/accessControlQuestions.js` | A direct replacement mapping supports a broader upgrade-review scenario |
| `ac_71` | `data/accessControlQuestions.js` | `ac_85`: HES 9600 rim-exit application review | `data/accessControlQuestions.js` | Product identity and application-fit reasoning are different learning tasks |
| `fbq_021` | `data/finalBossQuestions.js` | `pn_23`: Signature CC-module pairing | `data/partNumberQuestions.js` | Final Boss pairing tests cross-product recognition; Part Number Mastery tests a documented family pairing |
| `fbq_049` | `data/finalBossQuestions.js` | `wq_17` / `wq_18`: monitor/control module purposes | `data/wiringQuestions.js` | Final Boss tests the pairing; Wiring tests the individual functions |

## Level 5: Final Boss against every other bank

Final Boss was compared against the other live source pools, not just within its own file.

Findings:

- Exact normalized Final Boss duplicates against other source banks: **0**.
- The former EST4 remote-status duplicate (`m1_152` / `m2_101`) was resolved; `m2_101` now tests EST4 retrofit compatibility and is not a duplicate of `m1_152`.
- Final Boss contains legitimate overlap with product-recognition and application items, but the listed Final Boss questions generally add scenario framing, cross-product pairing, or multi-step reasoning.
- `fbq_021` and `fbq_049` are partial overlaps, not confirmed knowledge duplicates, because they test relationships rather than simply restating one product identity.

**Recommendation:** KEEP Final Boss items. Any future consolidation should compare distractor quality, verified source evidence, and Sales Support usefulness before choosing a survivor.

## Level 6: Generated and derived questions

### Generated-question table

| Source | Generated location | Knowledge unit | Duplicate risk |
| --- | --- | --- | --- |
| Every source question in the eight standard categories | `data/quizData.js` → `mixed-knowledge` pool | Same question and answer mapping as the source question, with category changed to Mixed Knowledge and UID suffix `_mx` | The learner can encounter the same underlying question in its source category and Mixed Knowledge; this is intentional derivation, not an independent question |
| `product-recognition`, `product-applications`, `modules-systems`, `wiring-connections`, `part-number-mastery`, `takeoff-estimating`, `real-world-scenarios`, `access-control` pools | `mixed-knowledge` | Cross-category mixed practice | `mixed-knowledge` has 470 derived copies from 470 source questions; it does not create additional distinct knowledge units |

Generated-copy validation:

- Mixed Knowledge entries: 470
- Unique source IDs represented: 470
- Generated UID convention: source UID + `_mx`
- Exact duplicate text inside Mixed Knowledge: 0
- Learner duplicate risk: yes, a learner can encounter a source question and its Mixed Knowledge copy in separate quiz sessions
- Content duplicate classification: generated copy, not a second distinct source question

## Level 7: Product-recognition duplicates

Product-recognition and part-number questions were reviewed separately from generic text similarity. Multiple questions about the same product were not automatically flagged.

Findings:

- Direct identity questions are often useful in Product Recognition, Part Number Mastery, Wiring, and Final Boss because each bank can use a different task context.
- `SIGA-CT1`, `SIGA-CT2`, `SIGA-CC1`, `SIGA-CC2`, `SIGA-270`, `SIGA-278`, and `SIGA-CRR` each appear in multiple contexts, but the reviewed examples are mostly identity versus application or family distinction.
- The strongest duplicate-risk item is not a picture question; it is the EST4 remote-status pair already listed under Knowledge Duplicates.
- No picture/product-recognition item was removed or recommended for automatic removal.

## Level 8: Answer and distractor duplicates

Across the 585 source questions:

- Duplicate answer choices within a question: **0** in the runtime audit.
- Exact normalized answer-set duplicates among separately worded source questions: **not classified as learner duplicates by themselves**; identical option sets can support different correct answers or different knowledge prompts.
- Answer-order-only differences: **none identified as a separate source-question duplicate** in the reviewed candidates.
- Mixed Knowledge copies preserve the source answer set and are generated duplicates by design.

Recommendation: do not use answer-set similarity alone to remove content. Compare the stem, correct answer, distractor function, and learning objective together.

## E85/E850 check

The learner-facing loaded scored pools contain:

- E85/E850 in question stems: **0**
- E85/E850 in answer choices: **0**
- E85/E850 in learner-facing explanations: **0**

E85/E850 identifiers remain only in permitted source metadata and internal evidence paths.

## Permanent exclusions

The loaded scored question pools contain:

- `SIGA-HPR`: **0**
- `SIGA-UM2`: **0**
- `SIGA-CC1S`: **0**

These exclusions remain intact.

## Runtime validation

The existing browser audit was run against the actual loaded scripts and reported:

**PASS — ALL RUNTIME CHECKS PASSED**

The runtime output showed zero for:

- exact duplicate text in every live category pool
- invalid question objects
- invalid categories
- missing answers
- duplicate answers
- invalid correct-answer references
- missing explanations
- randomization failures
- scoring failures

The engine's correct-answer and incorrect-answer tests passed for every category. Mixed Knowledge reported 470 entries, 470 unique IDs, zero exact duplicates, and zero invalid questions.

## Production-change verification

This audit created only this report. No production question source, product data, quiz logic, scoring, randomization, progress tracking, UI, or navigation file was modified during the audit. The local shell did not expose `git`, so a command-line worktree status check was unavailable; the report was created as a standalone markdown artifact and the runtime audit was run after the audit work.

## Recommendations not executed

- **KEEP:** all questions after the targeted correction; `m1_152` was retained as the stronger direct feature-recognition item.
- **REWRITE:** `m2_101` was rewritten to test verified EST4 retrofit compatibility.
- **REMOVE:** none recommended after the correction.
- **ADD:** none recommended from this duplicate audit; this audit does not justify new content.

The original duplicate-audit recommendation for the EST4 pair was executed in the subsequent correction phase and then runtime-validated.

## Final report summary

Total scored questions: **1,055 learner-facing pool entries** (**585 distinct source questions + 470 generated Mixed Knowledge copies**)

Exact duplicates: **0**

Near duplicates: **36 automated candidates; 14 representative candidates documented above; no automatic duplicate classifications**

Knowledge duplicates: **0 after correction**; the former pair (`m1_152` / `m2_101`) was resolved

Partial overlaps: **11 representative relationships documented above; legitimate overlaps remain where the tested knowledge differs**

Distinct questions: **585 source questions classified distinct after correction**; generated Mixed Knowledge copies are not additional distinct questions

Generated duplicate risks: **470 intentional `_mx` copies; 470 unique source IDs represented; source/Mixed encounter duplication is possible across sessions**

Recommended removals: **0**

Recommended rewrites: **0 pending**; `m2_101` was rewritten during the correction phase

Questions requiring no change: **584 source questions; `m2_101` is the single corrected source question; all 470 generated copies remain unchanged**

**NO PRODUCTION CHANGES WERE MADE DURING THIS DUPLICATE AUDIT.** The separate correction phase changed `m2_101` after the original audit.
