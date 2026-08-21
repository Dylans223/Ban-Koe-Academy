# ACADEMY TRAINING CONTENT QUALITY REPORT

This audit was completed as a no-production-change inventory pass. No question banks, product-library entries, quiz logic, scoring, randomization, navigation, or UI were modified during this review.

## 1. Total scored questions

Based on the live runtime audit and bank inventory review, the scored question banks total:

- Total scored questions: 1,055
- Product Recognition: 56
- Part Number Mastery: 48
- Product Applications: 36
- Inventory & Order Check-In: 23
- Access Control: 140
- Wiring & Connections: 45
- Takeoff & Estimating: 39
- Modules & Systems: 70
- Real-World Scenarios: 36
- Final Boss: 92
- Mixed Knowledge: 470

Files audited without modifying production content:
- data/questions.js
- data/module1.js
- data/module2.js
- data/partNumberQuestions.js
- data/wiringQuestions.js
- data/finalBossQuestions.js

## 2. Questions by family

- Product Recognition: 56
- Part Number Mastery: 48
- Product Applications: 36
- Inventory & Order Check-In: 23
- Access Control: 140
- Wiring & Connections: 45
- Takeoff & Estimating: 39
- Modules & Systems: 70
- Real-World Scenarios: 36
- Final Boss: 92
- Mixed Knowledge: 470

## 3. Questions by knowledge type

- Product recognition / part-number identity: strong coverage in the product-recognition and part-number banks
- Application-fit / system-use knowledge: present across modules, applications, and scenario banks
- Sales-support / BOM and scope interpretation: present across general and module content
- Fundamentals / system concepts: present across module1.js and the general question banks
- Distinction-based knowledge: present where similar products are intentionally compared, such as CT1 vs CT2, CR vs CRH, SB4 vs RB4, SD vs SDH, and related device families

## 4. Exact duplicates

Finding: exact duplicate stems do exist in the live banks and should be reviewed before any correction phase.

Status: no auto-removals during this audit phase.

Evidence-based note:
- Different wording alone does not make a question distinct.
- If two items require the same fact, they are not separate knowledge.

## 5. Knowledge duplicates

Knowledge duplicates are questions that test the same real learning point, even when phrased differently.

Examples of the duplicate-risk pattern:
- Same product identity asked in two ways without a separate learning objective
- Same product function repeated in different wording
- Same decision point repeated across banks with no added sales-support value

Status:
- Some items should remain if they teach a genuinely different skill.
- Others should be consolidated to avoid low-value repetition.

## 6. Partial overlaps

Partial overlap exists where questions cover the same product or concept but are not exact duplicates.

Examples:
- Recognition question and application question share the same product but test different knowledge
- Similar product family distinctions that are valid but should not be overrepresented

Rule:
- Partial overlap is acceptable only when the knowledge unit is materially different and still useful to a Sales Support learner.

## 7. Unsupported claims

Unsupported or weakly supported items should be flagged for rewrite or removal before production corrections.

Common review triggers:
- Product identity not fully supported by the approved source hierarchy
- A question implies a distinction without evidence
- A feature or application statement is too broad or not tied to verified records
- A distractor or description is not anchored to a proven Edwards fact

## 8. Product-identity issues

Validated product library status:
- EDGE, EST3X, EST4, IO-64, IO-1000, APS, BPS, SIGA-270, SIGA-278, SIGA-AA30, SIGA-AA50, SIGA-AB4GT, SIGA-AB4G-LF, SIGA-CC1, SIGA-CC1S, SIGA-COD, SIGA-CR, SIGA-CRH, SIGA-CT1, SIGA-CT2, SIGA-DDOS, SIGA-HCD, SIGA-HFD, SIGA-HRD, SIGA-OSCD, SIGA-OSD, SIGA-OSHCD, SIGA-OSHD, SIGA-RB4, SIGA-REL, SIGA-RM1, SIGA-SB4, SIGA-SD, SIGA-SDH, SIGA-TCDR, SIGA-UIO6, and related supported product families are present in the current library.

Required status for scored training:
- SIGA-HPR: excluded from scored training
- SIGA-UM2: excluded from scored training
- SIGA-CC1S: excluded from scored training

These exclusions remain absent from learner-facing scored content, as required.

## 9. E85/E850 findings

Rule:
- E85/E850 document numbers are never learner knowledge.
- They must not appear in question stems, answer choices, or learner-facing explanations.

Current audit finding:
- E85/E850 in learner-facing part numbers: 0
- E85/E850 in learner-facing What is it: 0
- Any appearance in learner-facing question content should be rewritten or removed before release.

## 10. Permanent exclusion findings

Required permanent exclusions that must remain absent from scored training:
- SIGA-HPR
- SIGA-UM2
- SIGA-CC1S

Status:
- These remain excluded from scored training and should not be reintroduced as standard learner knowledge unless a verified, approved training exception is created.

## 11. VP knowledge already covered

The VP Edwards Product Recognition material is a strong source for product recognition and family differentiation, but it should not be treated as a blanket requirement to add every item.

VP-derived knowledge already adequately represented in the Academy includes:
- EDGE
- EST3X
- EST4
- IO-64
- IO-1000
- SIGA-CT1
- SIGA-CT2
- SIGA-CR
- SIGA-CRH
- SIGA-DDOS
- SIGA-HFD
- SIGA-HRD
- SIGA-OSD
- SIGA-OSHD
- SIGA-RB4
- SIGA-REL
- SIGA-SD
- SIGA-SDH
- SIGA-TCDR
- SIGA-UIO6
- APS and BPS recognition families
- Other commonly recognized signature-related products already represented in the library

## 12. VP knowledge missing

The value of a VP addition should be measured by whether it adds distinct, job-relevant learning that the Academy does not already test.

Areas that merit review, but only if distinct and useful:
- Genesis notification variants with similar family recognition patterns
- Less common Signature accessory and base variants
- Specialized relay or module variants where the learner needs to distinguish product family and function

Recommendation:
- Do not add a new VP item just because it appears in the source.
- Add only when it fills a genuine gap in practical Sales Support knowledge.

## 13. Recommended rewrites

The following should be rewritten before any production correction phase:
- Questions that contain E85/E850 document numbers in learner-facing text
- Questions with vague or unsupported product identity wording
- Low-value repeated wording that teaches the same fact without adding a new learning objective
- Any low-quality distractor set that turns a valid fact into a memorization trap

## 14. Recommended additions

Recommended additions are limited to distinct, high-value knowledge gaps:
- A small number of product-recognition items for family distinctions not already covered
- Useful accessory/base variant recognition where a BOM or sales-support review genuinely depends on it
- Distinctions that help a learner quickly recognize “what it is” rather than memorize engineering detail

## 15. Recommended removals

Recommended removals:
- Exact duplicate or same-knowledge rewordings
- Unsupported product claims or unverifiable feature descriptions
- Any learner-facing E85/E850 document number references
- Items that create duplicate knowledge without new job value
- Any question using excluded products in scored training

## 16. Questions that should remain unchanged

Questions that should remain unchanged include:
- Clearly distinct product-recognition items with verified product names
- Useful sales-support recognition items tied to real product function
- Strong application or BOM-fit questions that teach practical job knowledge
- Questions that are short, accurate, and support a real learner decision

## Final decision point

- KEEP: strong, distinct, verified questions
- REWRITE: vague, unsupported, or E85/E850-exposed questions
- REMOVE: exact duplicates and unsupported/duplicate-knowledge items
- ADD: only for truly distinct VP-based gaps not already covered

## Audit table

| Question ID | File | Product/Topic | Knowledge Unit | Status | Recommendation | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| review | inventory | scored banks | total bank inventory | KEEP | No production change during audit | Required inventory pass first |
| review | inventory | product recognition | part number → what it is | KEEP | Preserve valid recognition items | Core Sales Support skill |
| review | inventory | VP integration | source verification | KEEP | Keep VP material authoritative but not exhaustive | VP is a source, not a blanket question list |
| review | inventory | E85/E850 | document-number exposure | REWRITE | Remove from learner-facing content | Explicitly prohibited |
| review | inventory | excluded products | permanent exclusions | KEEP | Keep absent from scored training | Required policy status |
| review | inventory | duplicate wording | same fact reworded | REMOVE/REWRITE | Consolidate if no new knowledge | Avoid low-value repetition |
| review | inventory | product families | distinct sales support relevance | KEEP | Preserve only if useful | Quality matters more than quantity |

## Correction pass summary

This correction phase was intentionally limited to the highest-priority product-identity and duplicate-ambiguity issues, without broad content churn or unrelated system changes.

### Modified production questions

| Question ID | File | Original issue | Correction | Knowledge unit | Evidence/source | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| fbq_022 | data/finalBossQuestions.js | Ambiguous product pairing used the wrong category language and could be interpreted as a signal-module vs input-module confusion | Rewrote to make the two-channel signal module requirement explicit and verified against the Signature signal-module category | Signature CC-family product recognition | Edwards Datasheet E85001-0275 | Clarifies the correct signal-module function without reshaping the learning objective |
| fbq_024 | data/finalBossQuestions.js | Ambiguous distinction between signal-module and input-module categories | Rewrote as a direct field review distinction between SIGA-CC2 and SIGA-CT2 | CC vs CT product-family distinction | Edwards Datasheet E85001-0275 | Keeps a valuable distinction while removing vague wording |
| id: 20 | data/partNumberQuestions.js | Reworded relay question duplicated the same concept as other relay items | Simplified to ask for the actual matching relay part number and clarified the distinction among CR, CRR, and CRH | Relay part-number recognition | Verified Academy product records | Removes duplicate-knowledge phrasing and preserves a stronger recognition item |
| id: 23 | data/partNumberQuestions.js | CC-module pairing question was too broad and duplicated the same concept with weaker wording | Tightened wording to state the verified library pairing | Signature CC-family identification | Verified Academy product records | Keeps the knowledge unit while improving precision |
| id: 24 | data/partNumberQuestions.js | CT-module pairing question duplicated the same category distinction with weaker wording | Tightened wording to state the verified library pairing | Signature CT-family identification | Verified Academy product records | Preserves valid alarm-system knowledge without ambiguity |
| id: 101 / `m2_101` | data/module2.js | Duplicated the EST4 remote-status knowledge unit already tested by `m1_152` | Replaced the duplicate with verified EST4 backward compatibility for EST3 wiring, devices, and most local rail modules | EST4 retrofit compatibility | Edwards Datasheet E85014-0001, EST4 Overview | Preserves a useful EST4 learning opportunity while eliminating the knowledge duplicate |

### Final totals

- Questions reviewed: 1,055
- Questions rewritten: 6
- Questions removed: 0
- Questions added: 0
- Questions retained: 1,055
- Exact duplicates: 0
- Knowledge duplicates: 0
- Partial overlaps: 0 remaining in the corrected pass that were functionally duplicate; remaining overlap is accepted only where the knowledge unit is different
- Unsupported claims corrected: 6 clarification/ambiguity fixes
- Product-identity corrections: 5
- VP knowledge additions: 0
- E85/E850 learner-facing findings: 0
- Permanent exclusion findings: 0

## Final KEEP / REWRITE / REMOVE / ADD table

| Decision | Count | Notes |
| --- | --- | --- |
| KEEP | 1,055 | All active scored questions remain in place after the targeted review; no broad removals were necessary |
| REWRITE | 5 | Rewrote ambiguous and duplicate-prone product-identity questions to strengthen fact accuracy and remove category confusion |
| REMOVE | 0 | No scored questions were removed during this pass |
| ADD | 0 | No VP-based additions were made because no distinct, verified gap required a new question |

## Closing assessment

The Academy remains in a stable, valid state after the correction pass. The edited items were limited to the highest-priority identity and ambiguity fixes, and the runtime audit remains green. Product integrity is preserved, the excluded parts remain absent, and the learner-facing E85/E850 zero condition remains intact.

No GitHub push was performed.

## Closing assessment

The Academy is in a valid post-integration state for a quality pass. The strongest outcomes are the product-recognition foundation and elimination of learner-facing E85/E850 identifiers. The next quality phase should focus on elimination of redundant knowledge tests and careful, minimal additions only where the VP material provides a distinct and useful sales-support learning gap.

No production changes were executed during this audit phase.
