# E85/E850 Document-Number Quiz Audit

Audit date: 2026-08-21

## Scope

This was an audit only. No question bank, product data, quiz logic, UI, scoring, randomization, navigation, progress, runtime, or source report was modified. The six primary scored banks were scanned, along with `data/quizData.js` and the production pool wiring that feeds them. The derived Mixed Knowledge pool was not double-counted.

## Summary

| Measure | Result |
|---|---:|
| Primary question records audited | 590 |
| Derived Mixed Knowledge records | 471, not double-counted |
| PASS | 564 |
| REVIEW | 26 |
| FAIL | 0 |
| E85/E850 numbers in question stems | 0 |
| E85/E850 numbers in answer choices | 0 |
| Questions requiring document-number knowledge | 0 |

`PASS` means the learner is tested on an actual product/part number or on a non-document-number concept, and any E85/E850 identifier is limited to source metadata. `REVIEW` means an E85/E850 identifier is visible in an explanation, even though it is not required to answer. `FAIL` would require the learner to recognize or select the document number; no such question was found.

## Files scanned

- `data/questions.js` — 114 records; no E85/E850 occurrences
- `data/module1.js` — 199 records; 64 occurrences
- `data/module2.js` — 101 records; 46 occurrences
- `data/partNumberQuestions.js` — 64 records; 15 occurrences
- `data/wiringQuestions.js` — 44 records; 17 occurrences
- `data/finalBossQuestions.js` — 68 records; 14 occurrences
- `data/quizData.js` — contains only a guard regex for document-number text; no document number is presented as a question or answer

The product library `data/edwards/index.js` also contains E85/E850 identifiers in source URLs and product-source fields. Those records are source/product metadata and were not treated as scored question content.

## REVIEW findings

All 26 findings below contain the E85/E850 identifier only in the visible explanation. None contains an E85/E850 identifier in the question text or answer choices, and none requires document-number knowledge to select the correct answer. Recommended correction is to move the document citation out of learner-facing explanation text while retaining it in the `sourceDocument` metadata field.

| File | Question ID | Question text | Answer choices | Correct answer | E85/E850 identifier | Why REVIEW | Recommended correction |
|---|---:|---|---|---|---|---|---|
| `module1.js` | 165 | Which statement is explicitly documented for Genesis G4 notification devices? | Selectable candela output and flash rate; 16 to 33 VDC operating voltage and 12 to 18 AWG wiring; 520 Hz low-frequency horn output; GRSW-10 room-side wiring plate | Selectable candela output and flash rate | E85001-0668 | Explanation visibly teaches the source document number. | Remove the identifier from the explanation; retain source metadata. |
| `module1.js` | 166 | Which documented Genesis category is intended for ceiling-mounted speaker notification? | Ceiling mount speaker and speaker-strobe; G4 wall-mount notification appliance; G4LF low-frequency notification appliance; G1 compact notification appliance | Ceiling mount speaker and speaker-strobe | E85001-1025 | Visible explanation citation; product knowledge remains the tested objective. | Keep product explanation, move citation to metadata. |
| `module1.js` | 178 | Which configuration pair is explicitly documented for Genesis G4 notification devices? | Candela output and flash rate; 16 to 33 VDC operating voltage and 12 to 18 AWG wiring; G4TR and G4TW trim plates; G4RSB and G4WSB surface-mount boxes | Candela output and flash rate | E85001-0668 | Visible explanation citation only. | Remove document number from explanation. |
| `module1.js` | 179 | Which documented category should be used when scoping the Genesis LED G1 Series? | A compact notification appliance within the Genesis LED family; A G4 wall-mount notification appliance; A G4LF low-frequency notification appliance; A GCS ceiling-mount speaker or speaker-strobe | A compact notification appliance within the Genesis LED family | E85001-0667 | Visible explanation citation only. | Remove document number from explanation. |
| `module1.js` | 180 | Which application is explicitly associated with the Genesis G4LF series? | Low-frequency 520 Hz notification for sleeping areas; G4 wall-mounted public-mode strobe notification; GCS ceiling speaker and speaker-strobe notification; G1 compact notification appliances | Low-frequency 520 Hz notification for sleeping areas | E85001-1052 | Visible explanation citation only. | Remove document number from explanation. |
| `module1.js` | 181 | Which device category is explicitly identified for the Genesis LED GCS Series? | Ceiling-mounted speakers and speaker-strobes; G4 wall-mounted notification appliances; G4LF low-frequency horns and horn-strobes; G1 compact notification devices | Ceiling-mounted speakers and speaker-strobes | E85001-1025 | Visible explanation citation only. | Remove document number from explanation. |
| `module1.js` | 156 | Which iO Series capability helps automatically organize connected devices? | Automatic device mapping; Electronic addressing; Optional Ethernet connectivity; Two Class B NACs | Automatic device mapping | E85001-0135 | Citation is visible, but the learner answers with a product capability. | Keep sourceDocument metadata; remove citation from learner-facing explanation. |
| `module1.js` | 171 | Which pair of iO Series features includes the documented optional Ethernet capability? | Automatic device mapping and optional Ethernet connectivity; Electronic addressing and automatic device mapping; Up to eight annunciators and incremental auto-programming; Standard wiring and retrofit applications | Automatic device mapping and optional Ethernet connectivity | E85001-0135 | Citation is visible, but document number is not answer knowledge. | Remove citation from explanation only. |
| `module1.js` | 188 | Which application positioning is documented for the Edwards iO Series? | It is intended for small to mid-size applications; It is limited to multi-building network applications; It is a conventional-only product family; It is a communications accessory rather than a fire alarm system | It is intended for small to mid-size applications | E85001-0135 | Citation is visible, but the learner answers an application-positioning claim. | Remove citation from explanation only. |
| `module1.js` | 190 | What is the maximum device capacity of an Edwards iO64? | 64 devices; One Class A or Class B intelligent device loop; Two Class B NACs; Eight remote annunciators | 64 devices | E85001-0135 | Citation is visible, but the learner answers with product capacity. | Remove citation from explanation only. |
| `module1.js` | 191 | Can the device capacity of an iO64 be expanded? | No; Yes, by adding another loop-controller module; Yes, by adding an iO-SDC2; Yes, by connecting it to an iO1000 | No | E85001-0135 | Citation is visible, but the learner answers the documented iO64 capacity rule. | Remove citation from explanation only. |
| `module1.js` | 192 | Based only on documented device-address capacity, which Edwards iO panel can accommodate a 48-device requirement? | iO64; iO1000; EST4 only; A communications bridge | iO64 | E85001-0135 | Citation is visible, but the learner answers with an actual product identifier. | Remove citation from explanation only. |
| `module1.js` | 193 | Which statement best describes the difference between iO64 and iO1000? | iO64 is fixed-capacity at 64 devices, while iO1000 is expandable up to 1,000 addressable devices; iO64 starts with four 250-device loops, while iO1000 has one fixed 64-device loop; Both have the same documented address capacity and expansion arrangement; Neither panel supports loop-controller expansion | First choice | E85001-0135 | Citation is visible, but the learner answers the actual iO product comparison. | Remove citation from explanation only. |
| `module2.js` | 104 | Which pairing names the documented iO Series device-addressing features? | Electronic addressing and automatic device mapping; Optional Ethernet connectivity and up to eight annunciators; Two Class B NACs and a 64-device loop; Incremental auto-programming and retrofit wiring | Electronic addressing and automatic device mapping | E85001-0135 | Citation is visible, but document number is not tested. | Remove citation from explanation only. |
| `partNumberQuestions.js` | 1 | Which product is identified by the part number SIGA-CT1? | Single Input Module; Dual Input Module; Single Input Signal Module; Control Relay Module | Single Input Module | E85001-0241 | Explanation cites a document number while testing SIGA-CT1. | Remove citation from explanation; retain source metadata if added later. |
| `partNumberQuestions.js` | 23 | Which documented pairing is correct for the Signature CC modules? | SIGA-CC1 is a Single Input Signal Module; SIGA-CC2 is a Dual Input Signal Module; SIGA-CC1 is a Dual Input Module; SIGA-CC2 is a Single Input Module; SIGA-CC1 is a Control Relay Module; SIGA-CC2 is an Isolator Module; SIGA-CC1 is a detector base; SIGA-CC2 is a notification appliance | First choice | E85001-0237 | Explanation citation only; actual product identifiers are the quiz knowledge. | Remove citation from explanation. |
| `partNumberQuestions.js` | 24 | Which documented pairing is correct for the Signature CT modules? | SIGA-CT1 is a Single Input Module; SIGA-CT2 is a Dual Input Module; SIGA-CT1 is a Dual Input Module; SIGA-CT2 is a Single Input Module; SIGA-CT1 is a Signal Module; SIGA-CT2 is a Control Relay Module; SIGA-CT1 is an Isolator Module; SIGA-CT2 is a detector base | First choice | E85001-0241 | Explanation citation only. | Remove citation from explanation. |
| `partNumberQuestions.js` | 25 | Looking at SIGA-CC1 and SIGA-CC2, what module function does the CC portion identify? | Signal module category; Monitor-only category; Control relay module category; Input module category | Signal module category | E85001-0237 | Explanation citation only. | Remove citation from explanation. |
| `partNumberQuestions.js` | 26 | Which documented category applies to the Signature CT modules? | Input module category; Signal module category; Control relay module category; Sounder base category | Input module category | E85001-0241 | Explanation citation only. | Remove citation from explanation. |
| `wiringQuestions.js` | 30 | What is the primary purpose of an isolator module on an addressable circuit? | On a Class A circuit, to isolate a shorted section so the remaining loop can continue operating; To provide additional power to the SLC; To replace a damaged detection device; To automatically reset the panel after a fault | First choice | E85001-0272 | Explanation citation only; product/function remains the tested knowledge. | Remove citation from explanation. |
| `wiringQuestions.js` | 32 | On an addressable SLC loop, a short circuit occurs in one section. If an isolator is present near the fault, what does it do? | On the documented Class A circuit, it electronically isolates the shorted section, allowing the remaining loop to continue communicating; It increases loop power to overcome the short; It automatically repairs the wiring damage; It generates an alarm condition and silences the system | First choice | E85001-0272 | Explanation citation only. | Remove citation from explanation. |
| `wiringQuestions.js` | 53 | Which documented Genesis specification gives the applicable wiring range? | 12–18 AWG; 16–33 VDC operating voltage; 15, 30, 75, or 110 candela; GRSW-10 room-side wiring plate | 12–18 AWG | E85001-1052 | Explanation citation only. | Remove citation from explanation. |
| `wiringQuestions.js` | 55 | A G4LF appliance is specified on a 4-inch octagon box. Which documented component should the estimator verify? | GRSW-10 room-side wiring plate; GRT-10 device and cover removal tool, 10-pack; G4WSB white wall 4-inch surface-mount box; GOCT 4-inch octagon box adapter plate | GOCT 4-inch octagon box adapter plate | E85001-1052 | Explanation citation only. | Remove citation from explanation. |
| `finalBossQuestions.js` | fbq_003 | A ceiling-mount application calls for speaker-strobes. Which documented Genesis category is the correct fit? | Ceiling speaker and speaker-strobe family; Wall-mount horn-strobe family; G4LF low-frequency horn and horn-strobe family; G1 compact notification family | Ceiling speaker and speaker-strobe family | E85001-1025 | Explanation citation only; actual Genesis family is tested. | Remove citation from explanation. |
| `finalBossQuestions.js` | fbq_011 | A design narrative explicitly requires low-frequency occupant notification. Which documented Genesis family matches that requirement? | G4LF low-frequency horns and horn-strobes; G4 wall-mount notification appliances; GCS ceiling speakers and speaker-strobes; G1 compact notification devices | G4LF low-frequency horns and horn-strobes | E85001-1052 | Explanation citation only. | Remove citation from explanation. |
| `finalBossQuestions.js` | fbq_014 | Which module has documented personality-code applications including Class A/B input, NAC, two-wire smoke, and Form C relay? | SIGA-UM Universal Class A/B Module; SIGA-CT2 Dual Input Module; SIGA-CC2 Dual Input Signal Module; SIGA-IM2 Fault Isolator Module | SIGA-UM Universal Class A/B Module | E85001-0275 | Explanation citation only; actual product identifier is tested. | Remove citation from explanation. |

## Summary table

| File | Question ID | E85/E850 Found | Visible to Learner | Required for Answer | Status |
|---|---|---|---|---|---|
| `module1.js` | 156, 165-166, 171, 178-181, 188, 190-193 | Yes | Yes, explanations only | No | REVIEW |
| `module2.js` | 104 | Yes | Yes, explanation only | No | REVIEW |
| `partNumberQuestions.js` | 1, 23-26 | Yes | Yes, explanations only | No | REVIEW |
| `wiringQuestions.js` | 30, 32, 53, 55 | Yes | Yes, explanations only | No | REVIEW |
| `finalBossQuestions.js` | fbq_003, fbq_011, fbq_014 | Yes | Yes, explanations only | No | REVIEW |
| All six banks | All other audited records | No | No | No | PASS |

## FAIL findings

None. No question stem, answer choice, correct-answer reference, or indirect scoring path requires the learner to know an E85/E850 document number. No E85/E850 identifier appears as a scored answer choice.

## Files containing E85/E850 identifiers

| File or location | Visible to learner? | Classification |
|---|---|---|
| `data/module1.js` | Yes, in 13 explanations; no stems or answers | REVIEW |
| `data/module2.js` | Yes, in 1 explanation; no stems or answers | REVIEW |
| `data/partNumberQuestions.js` | Yes, in 5 explanations; no stems or answers | REVIEW |
| `data/wiringQuestions.js` | Yes, in 4 explanations; no stems or answers | REVIEW |
| `data/finalBossQuestions.js` | Yes, in 3 explanations; no stems or answers | REVIEW |
| `data/questions.js` | No | PASS, no occurrences |
| `data/quizData.js` | No literal document number; guard regex only | PASS |
| `data/edwards/index.js` | Product/source metadata and URLs, outside learner-facing question text | PASS, metadata-only |
| `docs/`, `_sources/`, `io/` | Documentation/private evidence only | PASS, allowed source evidence |

## Answer-choice and requirement result

- E85/E850 identifiers in answer choices: **0**
- Questions asking what an E85/E850 document contains: **0**
- Questions matching a product to an E85/E850 number: **0**
- Questions requiring indirect document-number memorization: **0**
- E85/E850 identifiers treated as product/model numbers in scored questions: **0**
- Actual product/part-number knowledge remains the intended training target: **CONFIRMED**

## Recommended corrections

No urgent FAIL correction is required. The 26 `REVIEW` explanations should eventually have their visible E85/E850 citations removed or moved into source metadata so the learner-facing content consistently teaches product identifiers rather than document identifiers. This is a separate correction pass and was not performed here.

## Final learner-facing cleanup result

Cleanup date: 2026-08-21. The targeted cleanup removed E85/E850 identifiers from learner-facing explanations while retaining the corresponding `sourceDocument`, `sourcePage`, `sourceSection`, `sourceType`, `manufacturer`, and `verified` metadata.

The original audit listed 26 REVIEW records. A complete post-edit scan found 10 additional legacy explanation citations outside that list, so 36 learner-visible explanation citations were removed in total. No question text, answer choice, correct answer, technical meaning, or question count was changed.

Final scan of the six scored banks:

- E85/E850 identifiers in question stems: **0**
- E85/E850 identifiers in answer choices: **0**
- E85/E850 identifiers in learner-visible explanations: **0**
- E85/E850 identifiers remaining in source metadata: **present and preserved**
- Questions requiring E85/E850 knowledge: **0**
- FAIL findings: **0**

The additional legacy explanation records cleaned were `module2.js` IDs `111-116` and `134`, `wiringQuestions.js` ID `29`, and `finalBossQuestions.js` IDs `fbq_029` and `fbq_036`. These were explanation-only citation removals; no source metadata was removed.

## Post-cleanup validation

The browser audit reports **PASS - ALL RUNTIME CHECKS PASSED**. Duplicate question text, invalid question objects, invalid categories, missing answers, duplicate answers, invalid correct-answer references, missing explanations, randomization failures, and scoring failures all report `0`. Product-integrity checks pass, with `SIGA-HPR`, `SIGA-UM2`, and `SIGA-CC1S` absent from loaded scored data. Editor diagnostics report no errors in the cleaned banks.

Permanent rule confirmed: actual product/part numbers remain learner knowledge; E85/E850 identifiers remain internal source evidence only.
