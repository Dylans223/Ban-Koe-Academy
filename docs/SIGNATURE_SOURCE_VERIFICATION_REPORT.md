# Signature Devices and Modules Source Verification Report

Research date: 2026-08-20

Scope: Evidence collection and read-only audit of existing scored Academy questions involving Edwards Signature devices, detectors, and intelligent input/output modules. No question bank, product data, quiz logic, UI, navigation, scoring, randomization, progress tracking, or runtime-audit code was modified during this audit.

## Evidence standard

Official Edwards datasheets and catalog sheets are the technical authority. The local PDFs in `_sources/edwards/signature/` are the primary module evidence. Existing Academy records, product descriptions, answer keys, theoretical naming patterns, and third-party images were not treated as evidence. A claim is verified only when Edwards explicitly states it at a mapped PDF page and section.

## 1. Scored Signature inventory

The scored question banks contain 39 exact `SIGA-` identifiers and a larger set of generic Signature/module/detector claims. `SIGA-HPR`, `SIGA-UM2`, and `SIGA-CC1S` do not occur in scored question-bank files. `SIGA-CC1S` occurs in the product index and official Edwards source PDF, but remains outside scored training until a separate content decision.

### Exact part numbers appearing in scored questions

| Identifier | Scored files | Question IDs / occurrences |
|---|---|---|
| SIGA-CT1 | questions.js, module1.js, partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | questions 61; module1 211/other distractors; part-number 1, 23-24, 26, 32, 40; wiring 23-24; fbq_015, fbq_021, fbq_022, fbq_043, fbq_082, fbq_093, fbq_098 |
| SIGA-CT2 | questions.js, partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | questions 62; part-number 12, 24; wiring 24; fbq_001, fbq_016, fbq_021, fbq_024, fbq_043, fbq_093 |
| SIGA-CC1 | questions.js, partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | part-number 9, 23, 25, 32; wiring 22-23; fbq_016, fbq_017, fbq_019, fbq_021-022, fbq_024, fbq_044, fbq_093, fbq_098 |
| SIGA-CC2 | partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | part-number 7, 23, 25, 32; wiring 24; fbq_016-017, fbq_021-022, fbq_024, fbq_044, fbq_093 |
| SIGA-CRH | partNumberQuestions.js | 44, 63, 78 |
| SIGA-CR | module1.js, module2.js, partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | part-number 33; wiring 29; final-boss and module distractors/selection scenarios including fbq_019, fbq_050, fbq_097 |
| SIGA-CRR | partNumberQuestions.js, finalBossQuestions.js | part-number 20, 33; fbq_007, fbq_019, fbq_097 |
| SIGA-IM2 | module1.js, partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | module1 151 distractor; part-number 21, 76; wiring 30-33; fbq_017, fbq_020, fbq_021, fbq_042 |
| SIGA-UM | partNumberQuestions.js, wiringQuestions.js, finalBossQuestions.js | part-number 23, 56; wiring 23 distractor; fbq_014, fbq_021 |
| SIGA-OSD | partNumberQuestions.js, finalBossQuestions.js | part-number 17, 72; fbq_005, fbq_022, fbq_030 |
| SIGA-OSHD | partNumberQuestions.js | 60, 73 |
| SIGA-OSCD | module2.js, partNumberQuestions.js, finalBossQuestions.js | module2 108, 147; part-number 45, 61, 72; fbq_005, fbq_008, fbq_013, fbq_022, fbq_030 |
| SIGA-OSHCD | module2.js, partNumberQuestions.js, finalBossQuestions.js | module2 107, 149-150; part-number 18, 73; fbq_004, fbq_008, fbq_013, fbq_030 |
| SIGA-COD | module2.js, partNumberQuestions.js, finalBossQuestions.js | module2 109, 148, 153; part-number 46, 62; fbq_013 |
| SIGA-DDOS | module1.js, module2.js, wiringQuestions.js | module1 184-189; module2 117; wiring 52 |
| SIGA-270 / SIGA-278 | module1.js, partNumberQuestions.js, finalBossQuestions.js | module1 194-196; part-number 4, 5, 15, 40; final-boss 9, 16, 34 |
| SIGA-AB4G / SIGA-AB4G-LF | partNumberQuestions.js, finalBossQuestions.js | part-number 8, 54, 70, 77; fbq_004, fbq_020 |
| SIGA-SB / SIGA-SB4 / SIGA-IB / SIGA-IB4 | partNumberQuestions.js, finalBossQuestions.js | part-number 19, 27, 43, 58, 65, 68, 76; fbq_020 |
| SIGA-LED | partNumberQuestions.js, finalBossQuestions.js | part-number 22, 59; fbq_020 |
| SIGA-DMP / SIGA-TS / SIGA-SEC2 / SIGA-MD / SIGA-MDS / SIGA-PCD / SIGA-PHCD / SIGA-RM1 / SIGA-MDM / SIGA-SD / SIGA-HD / SIGA-PS | questions.js and/or partNumberQuestions.js | Product-recognition and part-number IDs 48-82, questions 61-64 and related distractors |

### Generic Signature and module questions

Generic module concepts appear in `questions.js` IDs 15, 16, 41, 47, 68-75, 80, 83-84, 93-94, 102-103, 117-121; `module1.js` IDs 15-16, 41-43, 47, 62-65, 68-75, 80, 83-84, 93-94, 102, 117-121, 163-164, 176-177; `wiringQuestions.js` IDs 7, 17-21, 27-30, 33, 43, 47-50; and `finalBossQuestions.js` IDs `fbq_039`, `fbq_041-042`, `fbq_049-050`, `fbq_059`, `fbq_071`, `fbq_081`, `fbq_086`, `fbq_090`, and `fbq_098`.

These questions teach monitor-versus-control distinctions, HVAC/door-holder interfaces, relay contacts, troubleshooting, SLC/NAC concepts, and system application behavior. They require claim-level review; generic fire-alarm knowledge was not promoted merely because it is plausible.

The complete extracted inventory, including each question text, answer array, correct index, and explanation, was generated read-only at `_sources/edwards/signature/question-inventory.txt` during this audit. Product-library records in `data/products.js` and `data/edwards/index.js` were excluded from the scored-question inventory.

## 2. Official Edwards documents collected

All documents below were downloaded from the official Edwards Intelligent Input-Output Modules page into the private source directory. Each local PDF is page-readable through embedded text extraction.

| Document | Official title | PDF pages | Primary products/topics |
|---|---|---:|---|
| E85001-0644 | High Power Control Relay Module | 4 | SIGA-CRH |
| E85001-0609 | Signal Modules with Class A Operation | 6 | CC2A/MCC2A class-A signal variants |
| E85001-0543 | Synchronization Output Module | 4 | synchronization output module family |
| E85001-0297 | Input Modules | 4 | input-module family candidate |
| E85001-0275 | Class A, B Signal Modules | 6 | SIGA-UM/MAB personality-code functions |
| E85001-0272 | Isolator Module SIGA-IM2 | 4 | SIGA-IM2 |
| E85001-0535 | Riser Monitor Modules | 4 | riser monitor family |
| E85001-0533 | Input-Output Modules | 6 | SIGA-IO/MIO personality-code functions |
| E85001-0241 | Input Modules | 4 | SIGA-CT1, SIGA-CT2 |
| E85001-0239 | Control Relay Modules | 6 | SIGA-CR, SIGA-CRR, MCR/MCRR, SIGA-AB4G reference |
| E85001-0237 | Signal Modules | 6 | SIGA-CC1, SIGA-CC2 |
| E85001-0531 | Releasing Module | 8 | releasing module family |
| E85001-0365 | Universal Input-Output Module Motherboards | 4 | UIO motherboard family |

Previously collected official detector documents remain the source set for Signature detector questions: E85001-1001 (OSD), E85001-1002 (OSCD), E85001-1003 (OSHD), E85001-1004 (OSHCD), and E85001-0648 (COD). Their page mappings already recorded in the source matrix were reused; no Academy data was treated as proof.

## 3. Page-level evidence

| Part number / family | Official Edwards fact | Document | PDF page | Section | Status |
|---|---|---|---:|---|---|
| SIGA-CT1 | Single Input Module; one Class B dry-contact IDC; personality code determines alarm, delayed alarm, active non-latching, or active latching function | E85001-0241 | 1-2, 4 | Overview; Application; Specifications | VERIFIED |
| SIGA-CT2 | Dual Input Module; two module addresses; two personality codes; Class B dry-contact input applications | E85001-0241 | 1-2, 4 | Overview; Application; Specifications | VERIFIED |
| SIGA-CC1 | Single Input Signal Module; single-riser signal/audio or telephone personality; supervised Class B circuit; code 5/6 | E85001-0237 | 1-2, 6 | Overview; Application; Specifications | VERIFIED |
| SIGA-CC2 | Dual Input Signal Module; dual-riser signal/audio personality; two addresses; code 7 | E85001-0237 | 1-2, 6 | Overview; Application; Specifications | VERIFIED |
| SIGA-CR | Form C dry relay contact for external appliances; relay contact state itself is not supervised | E85001-0239 | 1-2, 5 | Overview; Application; Specifications | VERIFIED |
| SIGA-CRR | Polarity Reversal Relay Module; reverses 24 VDC output to activate SIGA-AB4G sounder bases | E85001-0239 | 1-2, 5 | Overview; Application; Specifications | VERIFIED |
| SIGA-CRH | High Power Control Relay Module; two Form C contacts; external appliance/equipment shutdown interface; output not supervised | E85001-0644 | 1-3 | Description; Application; Specifications | VERIFIED |
| SIGA-IM2 | Fault Isolator Module; used only on Class A circuits; isolates a shorted section and restores after fault correction and reset | E85001-0272 | 1-3 | Overview; Application; Typical Wiring; Specifications | VERIFIED |
| SIGA-UM | Universal Class A/B Module; personality code selects input, NAC, two-wire smoke, or Form C relay use | E85001-0275 | 1, 3-4, 6 | Overview; Application (Personality Codes); Typical Wiring; Ordering | VERIFIED |
| SIGA-CC1S | Synchronization Output Module, standard mount; documented in official source | E85001-0533 | 1-4 | Overview; Specifications; Ordering Information | VERIFIED as a product/document fact; not present in scored questions |
| SIGA-UM2 | No occurrence found in the 13 collected module PDFs | All 13 collected PDFs | All pages searched | Exact identifier search | UNVERIFIED - DO NOT USE AS TRAINING FACT |
| SIGA-HPR | No occurrence found in scored question-bank files or collected module PDFs | Scored-bank scan; all 13 PDFs | All pages searched | Exact identifier search | UNVERIFIED / invalid training identifier; do not use |
| Signature loop controller | Modules download personality codes and/or addresses from the Signature loop controller; dedicated controller specification was not collected | E85001-0241, E85001-0237, E85001-0275 | 1-2 | Personality code; Electronic Addressing | PARTIALLY VERIFIED |

### Detector evidence reused from the source matrix

| Product | Supported Edwards fact | Document/page | Status |
|---|---|---|---|
| SIGA-OSCD | Smoke and CO detector; smoke and CO sensors analyzed independently | E85001-1002 p. 1 | VERIFIED |
| SIGA-COD | Electrochemical CO detector; compatibility with Signature Loop Controller; approximately ten-year trouble note | E85001-0648 pp. 1-2 | VERIFIED |
| SIGA-OSHCD | Optical smoke, rate-of-rise/fixed-temperature heat, and CO; listed base-option categories | E85001-1004 pp. 1-2 | VERIFIED |
| SIGA-OSD / SIGA-OSHD | Product identity claims require their dedicated sheets; no broad compatibility or replacement claims inferred | E85001-1001 / E85001-1003 | PARTIALLY VERIFIED / claim-specific |

## 4. Claim audit classifications

### Product status summary

| Status | Products/families | Boundary |
|---|---|---|
| VERIFIED | SIGA-CT1, SIGA-CT2, SIGA-CC1, SIGA-CC2, SIGA-CR, SIGA-CRR, SIGA-CRH, SIGA-IM2, SIGA-UM, SIGA-CC1S; OSCD/COD/OSHCD claims already mapped in the matrix | Product identity and the specific functions listed in the page-level evidence table are explicit. This does not verify every Academy claim about the product. |
| PARTIALLY VERIFIED | Generic monitor/control module family claims; CT/CC application scenarios beyond the cited personality codes; UM claims that omit personality code; detector/base/accessory families without dedicated page mapping; SIGA-OSD/SIGA-OSHD product claims where the dedicated page was not re-mapped in this pass | The source set supports part of the concept, but not every application, compatibility, wiring, or replacement assertion. |
| UNVERIFIED | SIGA-UM2; SIGA-HPR; SIGA-DDOS wiring/relay details; SIGA-SB/SB4/IB/IB4, SIGA-LED, SIGA-DMP, SIGA-TS, SIGA-MDS, SIGA-PHCD and other accessory/product claims without a mapped official page | Do not use as training facts until an exact Edwards source page is mapped. |
| CONTRADICTED | None adjudicated in this evidence-only pass | Unsupported is not treated as contradicted. |

### Verified product and application claims

The following existing claim families have direct Edwards support: CT1/CT2 product identity and personality-driven input behavior; CC1/CC2 product identity, supervised signal/audio/telephone circuit behavior, and personality-code distinctions; CR/CRR relay identities and functions; CRH product identity, high-power relay application, two Form C contacts, SLC address, and compatibility listed on E85001-0644; IM2 fault isolation and Class A-only application; UM’s universal Class A/B role and documented personality-code choices; OSCD/COD/OSHCD detector combinations already mapped in the source matrix; and SIGA-270/SIGA-278 product names where the applicable official manual-station document is separately page-mapped.

### Partially verified claims

- Generic “monitor module” and “control module” definitions are broader than any one module sheet. CT personality codes support specific input/monitor applications; CR/CRH/UM support specific output/relay applications. Do not generalize every monitor/control statement to every Signature product.
- CT1/CT2 questions that teach only “single/dual input” are verified. Questions that add universal Class A/B, NAC, relay, or arbitrary application behavior are partial or unsupported unless the exact product/personality source is cited.
- CC1/CC2 questions that teach only “single/dual input signal module” are verified. Claims about telephone circuits, audio power, signal supervision, code selection, or wiring are verified only where they match E85001-0237 pages 1-2 and 6.
- UM questions that say “supports Class A and Class B” are only partial unless they specify the documented personality/application. E85001-0275 explicitly lists multiple Class A/B input, NAC, two-wire smoke, and relay personalities; it does not make every UM use interchangeable.
- SIGA-IM2 questions that say an isolator generally protects “the rest of the loop” are partial unless they preserve Edwards’ Class A-only boundary and fault-isolation behavior.
- Detector/base, replacement, and compatibility claims remain claim-specific; no system-wide compatibility matrix was inferred.

### Unverified or contradicted claims

- `SIGA-UM2`: no official evidence in the collected module set; retain `UNVERIFIED - DO NOT USE AS TRAINING FACT`.
- `SIGA-HPR`: no scored occurrence and no official evidence in the collected set; do not introduce or use it.
- `SIGA-CC1S`: official E85001-0533 evidence exists, but no scored question currently teaches it. Its prior “unverified” product-data status should not be silently promoted in production because this phase does not modify product data.
- No direct Edwards contradiction was adjudicated for an existing scored question in this evidence-only pass. Unsupported claims remain unsupported rather than contradicted.

## 5. Unsupported question claims

The following existing claims require later question-level correction or source metadata before they can be treated as fully supported:

- Generic monitor/control explanations that state universal behavior, universal circuit type, or universal compatibility across Signature modules.
- `SIGA-CT1`/`SIGA-CT2` scenarios that call CT devices control/output modules, NAC modules, or generic monitor modules without selecting a documented personality code.
- `SIGA-CC1`/`SIGA-CC2` scenarios that call them monitor-only modules, control relays, or generic SLC input modules instead of signal modules.
- `SIGA-CR`/`SIGA-CRR` claims that omit the distinction between a Form C dry relay and polarity reversal output, or that assert relay-contact supervision when E85001-0239 says the CR contact state is not supervised.
- `SIGA-CRH` claims that use the old `SIGA-HPR` name, omit its two Form C high-power contacts, or imply its relay outputs are supervised.
- `SIGA-IM2` claims that infer Class B operation, generic loop placement, automatic repair, or compatibility outside E85001-0272’s explicit Class A-only and listed compatibility boundaries.
- `SIGA-UM` claims that reduce “Universal” to an unspecified universal module or imply every personality code is available on every related UIO product.
- `SIGA-DDOS` claims about `RELAY_NC`, `RELAY_C`, `RELAY_NO`, built-in relay behavior, or one-address behavior remain unverified in this module-document pass because no dedicated official SIGA-DDOS wiring sheet was collected.
- Base, accessory, PIR, detector-mounting, and manual-station claims not mapped to an official Edwards page remain source gaps.

## 6. Unsupported answer choices

Unsupported or risky distractor families include:

- CT1/CT2 presented as control relays, signal modules, detectors, or notification outputs without a cited product/personality source.
- CC1/CC2 presented as standard input modules, control relays, isolators, or generic monitor modules.
- CR/CRR presented as input modules, isolators, or interchangeable relays.
- IM2 presented as a power booster, detector replacement, automatic panel reset, or unrestricted Class B isolator.
- UM presented as a detector, generic signal-only module, or universal device with no personality boundary.
- Generic module questions whose distractors assert exact SLC/NAC behavior, troubleshooting sequence, circuit survivability, or compatibility without an official page.
- Detector/base/accessory distractors involving SIGA-SB, SIGA-SB4, SIGA-IB, SIGA-IB4, SIGA-AB4G-LF, SIGA-LED, SIGA-DMP, SIGA-TS, SIGA-MDS, SIGA-PHCD, and related identifiers where no page-level source was mapped in this pass.
- Any distractor containing `SIGA-HPR`, `SIGA-UM2`, or `SIGA-CC1S` must be handled explicitly in a later correction pass; none should be promoted by analogy.

## 7. Unsupported explanations

Flagged explanation patterns include:

- “Monitor modules supervise all external inputs” or “control modules operate all external equipment” when the question names a specific module whose personality/application is not identified.
- Statements that CT1/CT2 are interchangeable with CC1/CC2 because both have input counts.
- Statements that all relays supervise their contact state; E85001-0239 explicitly says the SIGA-CR relay contact state is not supervised.
- Statements that an IM2 can be used on Class B circuits or that it automatically repairs wiring; E85001-0272 states Class A-only use and restoration after correction/reset.
- Statements that UM is universally interchangeable across applications without citing personality codes.
- SIGA-DDOS built-in relay and terminal claims, until a dedicated official Edwards DDOS wiring document is mapped.
- Product-index or Academy-library wording used as the source for exact module facts instead of the Edwards PDF.

## 8. Product naming conflicts and contamination

- `SIGA-CRH` is the official high-power relay identifier in E85001-0644. `SIGA-HPR` is not accepted and does not occur in scored questions.
- The downloaded file `E85001-0272.pdf` has a first-page printed header reading `E85001-0271` while the official Edwards library link and file name identify it as E85001-0272. The SIGA-IM2 product and page evidence are retained, but the document-number discrepancy should be preserved in any future citation.
- E85001-0237 documents `SIGA-CC1` and `SIGA-CC2` as signal modules, not generic monitor/control modules.
- E85001-0241 documents `SIGA-CT1` and `SIGA-CT2` as input modules whose application is selected by personality code.
- E85001-0533 documents `SIGA-CC1S` as a Synchronization Output Module. This is distinct from `SIGA-CC1`; the names must not be merged.
- `SIGA-UM2` remains unverified despite a product-index record. No official PDF evidence was found.
- Genesis references are mixed into some Signature-oriented answer choices and cross-category questions, including `module1.js` 151/211 and `finalBossQuestions.js` `fbq_059`, plus Genesis distractors in product-recognition questions. These should be separated during a later correction pass; this report does not modify them.
- `SIGA-AB4G` appears in E85001-0239 as an audible sounder-base reference, but that does not verify every Academy claim about base compatibility or low-frequency variants.

## 9. Cross-quiz overlaps and recommendations

No questions were removed or changed. Recommendations only:

| Overlap group | Files / IDs | Recommendation | Reason |
|---|---|---|---|
| CT1/CT2 identity | questions 61-62; part-number 1, 12, 23-24, 26; wiring 23-24; fbq_001, fbq_015, fbq_021, fbq_024, fbq_043 | KEEP one concise identity item per learning objective; REWRITE application variants | Same single/dual input fact repeats across product recognition, part number, wiring, and Final Boss. |
| CC1/CC2 identity | part-number 7, 9, 23, 25, 32; wiring 22; fbq_017, fbq_021-022, fbq_024, fbq_044, fbq_093, fbq_098 | KEEP one identity and one application item; REWRITE/REMOVE redundant copies later | Same single/dual signal-module distinction is repeated. |
| CR/CRR | part-number 20, 33; wiring 29; fbq_019, fbq_050, fbq_097 | KEEP one relay-function comparison; REWRITE unsupported generic relay explanations | CR Form C and CRR polarity reversal are distinct documented functions. |
| IM2 fault isolation | wiring 30-33; fbq_042 | KEEP one identity plus one Class A fault-isolation application; REWRITE generic Class B/loop claims | The same fault-isolation objective is repeated and must preserve the Class A-only boundary. |
| UM personality/application | part-number 56; fbq_014; wiring 23 distractor | KEEP one identity and one personality-code application; REWRITE broad universal claims | “Universal” is explicitly personality-driven, not unrestricted interchangeability. |
| Detector combinations | module2 107-109, 147-153; part-number 17-18, 45-46, 60-62, 72-73; Final Boss detector IDs | KEEP distinct sensing combinations; REWRITE unsupported compatibility/base claims | OSCD, COD, OSHCD, and OSHD are different documented combinations. |
| Monitor/control generic concepts | questions/module1/wiring/final-boss generic IDs listed above | REWRITE or WAIT FOR SOURCE | Broad statements are not interchangeable with product-specific Edwards behavior. |

## 10. Required quarantines

- `SIGA-HPR`: zero scored occurrences found; do not reintroduce.
- `SIGA-UM2`: zero scored occurrences found; product remains `UNVERIFIED - DO NOT USE AS TRAINING FACT`.
- `SIGA-CC1S`: zero scored occurrences found; official PDF evidence exists, but do not alter product data or add training content in this audit phase.

## 11. Company-sensitivity result

No pricing, costs, margins, labor, freight, supplier information, customer information, customer-specific projects, internal inventory values, availability commitments, lead times, or Ban-Koe proprietary procedures were introduced.

## 12. Initial audit verification

- Question banks modified during the initial evidence-only audit: **No**
- Product data modified: **No**
- Quiz logic modified: **No**
- Scoring modified: **No**
- Randomization modified: **No**
- Progress tracking modified: **No**
- UI modified: **No**
- Navigation modified: **No**
- Runtime audit modified: **No**

The purpose of this report is evidence collection and audit only. Recommended KEEP/REWRITE/REMOVE actions are not executed here.

## Applied Signature source corrections

Cleanup date: 2026-08-20

The following change plan was applied after reading this report in full. Only claims explicitly mapped in the page-level evidence table were changed. No new Signature product was added, and no unsupported DDOS, detector-base, accessory, manual-station, or compatibility claim was promoted.

### Questions rewritten or corrected

| ID | File | Change | Edwards support |
|---|---|---|---|
| 1 | partNumberQuestions.js | Corrected the mislabeled CT1 question: answer is now Single Input Module instead of the unrelated CT2 answer set. | E85001-0241 pp. 1, 4, Overview; Ordering Information |
| 7, 9, 12 | partNumberQuestions.js | Added source metadata to CC2, CC1, and CT2 identity questions. | E85001-0237 pp. 1, 6; E85001-0241 pp. 1, 4 |
| 20, 33, 44, 56, 63, 78 | partNumberQuestions.js | Added exact Edwards metadata to CRR, CR/CRR distinction, CRH, and UM identity/function questions. | E85001-0239 pp. 1-2, 5; E85001-0644 pp. 1-3; E85001-0275 pp. 1, 3-4, 6 |
| 22-24, 29, 30-33 | wiringQuestions.js | Corrected CC1/CT1/CT2 identity choices, narrowed CR to documented Form C external-appliance use, and constrained IM2 fault-isolation claims to Class A circuits only. | E85001-0237 pp. 1-2, 6; E85001-0241 pp. 1-2, 4; E85001-0239 pp. 1-2; E85001-0272 pp. 1-3 |
| 61-62 | questions.js | Added source metadata to CT1 and CT2 product-recognition questions. | E85001-0241 pp. 1, 4 |
| 62-63, 65, 176-177 | module1.js | Added exact source metadata to CRH, Class A signal-module, and relay/class-A product-library questions. | E85001-0644 pp. 1-3; E85001-0609 pp. 1-2, 5 |
| 111-112 | module2.js | Replaced unsupported CRH/Class A distractor claims with documented Signature product categories and added source metadata. | E85001-0644 pp. 1-3; E85001-0609 pp. 1-2, 5 |
| fbq_001, fbq_007, fbq_014-015 | finalBossQuestions.js | Added metadata to CT2, CRR, CT1, and made the UM question explicitly personality/application based. | E85001-0241 pp. 1-2, 4; E85001-0239 pp. 1-2, 5; E85001-0275 pp. 1, 3-4 |

No question was removed. The audit identified overlaps for later KEEP/REWRITE/REMOVE consideration, but no duplicate removal was required to apply a source correction safely in this pass. Distinct product-recognition, part-number, wiring, and application skills were retained.

### Questions retained unchanged

Questions not listed above were left unchanged, including detector/base/accessory and SIGA-DDOS groups whose exact Edwards evidence was not mapped by the controlling audit. They remain documented as source gaps rather than being “fixed” by inference.

### Required product handling

- `SIGA-CC1S`: **DOCUMENTED BY EDWARDS — NOT CURRENTLY USED IN SCORED TRAINING**. E85001-0533 pages 1-4 identify it as a Synchronization Output Module. No question was created and no production product record was changed.
- `SIGA-UM2`: remains **UNVERIFIED — DO NOT USE AS TRAINING FACT**; absent from the 13 collected official module PDFs and absent from scored questions.
- `SIGA-HPR`: remains absent from scored training; zero scored occurrences and no official evidence were found.

### Remaining unsupported or partially verified claims

The bank is not fully verified. Remaining gaps include generic monitor/control explanations, unsupported SLC/NAC/troubleshooting generalizations, SIGA-DDOS relay/terminal claims, detector/base/accessory claims without mapped Edwards pages, manual-station claims not mapped in this pass, and any UM/CT/CC application statement that goes beyond the cited personality code. These remain unchanged and require a later controlled source pass.

### Post-cleanup validation

- Browser runtime audit: **PASS - ALL RUNTIME CHECKS PASSED**.
- Exact duplicate question text: `0`.
- Invalid question objects: `0`.
- Duplicate answers: `0`.
- Invalid correct-answer references: `0`.
- Missing explanations: `0`.
- Randomization failures: `0`.
- Scoring failures: `0`.
- `SIGA-HPR` scored occurrences: `0`.
- `SIGA-UM2` scored occurrences: `0`.
- `SIGA-CC1S` scored occurrences: `0`.
- Browser product-integrity check: passed; verified records present and quarantined products absent from loaded scored data.

No claim is made that the entire Signature bank is fully verified.

## Final Signature evidence corrections applied

Correction date: 2026-08-20

### Questions rewritten or corrected

| IDs | File | Correction | Edwards support |
|---|---|---|---|
| 1 | partNumberQuestions.js | Corrected the CT1 part-number answer from the unrelated CT2 description to `Single Input Module`. | E85001-0241 pp. 1, 4, Overview; Ordering Information |
| 7, 9, 12 | partNumberQuestions.js | Added source metadata for CC2, CC1, and CT2 identity claims. | E85001-0237 pp. 1, 6; E85001-0241 pp. 1, 4 |
| 20, 33, 44, 56, 63, 78 | partNumberQuestions.js | Added source metadata for CRR, CR/CRR, CRH, and UM claims. | E85001-0239 pp. 1-2, 5; E85001-0644 pp. 1-3; E85001-0275 pp. 1, 3-4, 6 |
| 23-26 | partNumberQuestions.js | Removed unsupported suffix-inference wording and changed CT/CC questions to explicit Edwards-documented pairings/categories. | E85001-0237 pp. 1, 6; E85001-0241 pp. 1, 4 |
| 22-24 | wiringQuestions.js | Added source metadata for CC1, CT1, and CT2 identity/application claims. | E85001-0237 pp. 1-2, 6; E85001-0241 pp. 1-2, 4 |
| 29 | wiringQuestions.js | Replaced unsupported relay distractors and narrowed SIGA-CR to Form C external-appliance control; retained the non-supervised contact boundary. | E85001-0239 pp. 1-2 |
| 30-33 | wiringQuestions.js | Constrained IM2 fault-isolation questions to Edwards’ Class A-only application. | E85001-0272 pp. 1-3; first printed page identifies E85001-0271 |
| 62, 63, 65, 176, 177 | module1.js | Added source metadata for CRH, signal-module, and relay/class-A product-library claims. | E85001-0644 pp. 1-3; E85001-0609 pp. 1-2, 5 |
| 111-112 | module2.js | Replaced unsupported CRH/Class A distractor claims with documented Signature product categories and source metadata. | E85001-0644 pp. 1-3; E85001-0609 pp. 1-2, 5 |
| fbq_001, fbq_007, fbq_014-015 | finalBossQuestions.js | Added metadata to CT2/CRR/CT1 and made UM explicitly personality/application based. | E85001-0241 pp. 1-2, 4; E85001-0239 pp. 1-2, 5; E85001-0275 pp. 1, 3-4 |

No questions were removed. Questions involving `SIGA-DDOS`, unmapped detector bases/accessories, and exact manual-station details remain outside this correction because the controlling report classifies their required evidence as `SOURCE NOT FOUND` or only family-level partial support.

### Retained and excluded products

- `SIGA-UM2` remains excluded from scored training and `UNVERIFIED — DO NOT USE AS TRAINING FACT`.
- `SIGA-CC1S` remains excluded from scored training despite E85001-0533 documentation.
- `SIGA-HPR` remains absent from scored training.
- `SIGA-AB4G` was not promoted beyond the documented E85001-0239 Audible Sounder Base reference; no unsupported compatibility or low-frequency claim was added.
- `SIGA-270` and `SIGA-278` were not expanded beyond their existing family-level claims because exact part-number/reset/compatibility pages remain unmapped.

### Remaining SOURCE NOT FOUND claims

- SIGA-DDOS relay terminals, contact behavior, address count, wiring, and dedicated duct-detector interface documentation.
- SIGA-SB, SIGA-SB4, SIGA-IB, SIGA-IB4 detector-base identity and compatibility relationships.
- SIGA-AB4G-LF, SIGA-LED, SIGA-DMP, SIGA-TS, SIGA-SEC2, and related accessories.
- Exact SIGA-270/SIGA-278 reset, housing, addressability, and compatible-system claims.
- Unmapped detector identifiers and generic monitor/control or troubleshooting claims that exceed a cited personality/product page.

### Final validation

- Browser runtime audit: **PASS — ALL RUNTIME CHECKS PASSED**.
- Exact duplicate question text: `0`.
- Invalid question objects: `0`.
- Duplicate answers: `0`.
- Invalid correct-answer references: `0`.
- Missing explanations: `0`.
- Randomization failures: `0`.
- Scoring failures: `0`.
- `SIGA-HPR` scored occurrences: `0`.
- `SIGA-UM2` scored occurrences: `0`.
- `SIGA-CC1S` scored occurrences: `0`.
- Browser product-integrity check: passed; HPR and unverified products absent from loaded scored data.

The Signature bank is not declared fully verified because the remaining `SOURCE NOT FOUND` claims remain unchanged and excluded from promotion.

## Remaining-evidence source collection pass

Review date: 2026-08-20

This pass was evidence collection only. The question-bank edits attempted during routing were reverted before completion. No question content, product data, quiz logic, or runtime file remains changed by this pass.

### Remaining-evidence inventory

| Product/family | Question IDs | Claim area | Edwards document | Page | Status | Notes |
|---|---|---|---|---:|---|---|
| SIGA-DDOS | module1 184-189; module2 117; wiring 52 | Product identity, SLC address, onboard relay, RELAY_NC/RELAY_C/RELAY_NO terminals, relay behavior | No dedicated official SIGA-DDOS document located on the reviewed Edwards pages or in the collected source set | None | SOURCE NOT FOUND | Do not verify terminal, address, built-in relay, or wiring claims from generic duct-detector knowledge. |
| SIGA-SB, SIGA-SB4, SIGA-IB, SIGA-IB4 | part-number 19, 27, 43, 58, 65, 68, 76; fbq_020 distractors | Exact detector-base identity, 4-inch relationship, detector compatibility | No dedicated official base document located in the reviewed source set | None | SOURCE NOT FOUND | Individual detector sheets list base options but do not establish a universal base matrix. |
| SIGA-AB4G, SIGA-AB4G-LF | part-number 8, 54, 70, 77; fbq_004/fbq_020 distractors | Audible base identity and low-frequency variant | E85001-0239 references SIGA-AB4G as an Audible Sounder Base | 1, 5 | PARTIALLY VERIFIED | The source supports the SIGA-AB4G reference; no collected source verifies every Academy claim about AB4G-LF or compatibility. |
| SIGA-LED | part-number 22, 59; fbq_020 distractor | Remote LED indicator identity and associated-device relationship | No dedicated official SIGA-LED document located | None | SOURCE NOT FOUND | Do not promote the Academy accessory description. |
| SIGA-DMP, SIGA-TS, SIGA-SEC2 | part-number 52-53, 65, 82 and distractors | Mounting plate, trim skirt/ring, accessory relationships | No dedicated official source mapped in this pass | None | SOURCE NOT FOUND | Product-index descriptions are not evidence. |
| SIGA-270, SIGA-278 | module1 194-196; part-number 4, 5, 15, 40; final-boss 9, 16, 34 | Single/double action, reset, addressability, housing, application, compatible systems | Official manual-station document not located on the reviewed Edwards pages | None | PARTIALLY VERIFIED | Edwards detection page confirms Signature single-action and double-action formats; exact part-number/reset/compatibility claims remain unmapped. |
| SIGA-SD, SIGA-SD-PH, SIGA-SD-UI, SIGA-SC, SIGA-MD, SIGA-PD, SIGA-PHS, SIGA-PD4, SIGA-HRS | Identifiers searched; exact scored occurrences documented in inventory where present | Detector technology and product identity | No exact official document mapped for these identifiers in this pass | None | SOURCE NOT FOUND | Do not infer from model names or other detector sheets. |

### Personality-code evidence retained for later question correction

| Product | Personality | Edwards-documented application | Source | Page |
|---|---|---|---|---:|
| SIGA-CT1 / CT2 | 1 | Class B normally-open alarm-latching dry-contact initiating devices | E85001-0241 | 2 |
| SIGA-CT1 / CT2 | 2 | Class B normally-open delayed-latching alarm inputs such as waterflow alarm switches | E85001-0241 | 2 |
| SIGA-CT1 / CT2 | 3 | Class B normally-open active non-latching monitoring inputs such as fans, dampers, and doors | E85001-0241 | 2 |
| SIGA-CT1 / CT2 | 4 | Class B normally-open active latching monitoring inputs such as supervisory and tamper switches | E85001-0241 | 2 |
| SIGA-CC1 | 5 | Class B signal power/audio evacuation single-riser application; output wiring monitored | E85001-0237 | 2 |
| SIGA-CC1 | 6 | Telephone with ring-tone single-riser application | E85001-0237 | 2 |
| SIGA-CC2 | 7 | Class B signal power/audio evacuation dual-riser application | E85001-0237 | 2 |
| SIGA-UM | 1-4, 8-16, 20-21 | Explicit Class A/B input, NAC, two-wire smoke, relay, and related personality applications | E85001-0275 | 3-4 |

### Final evidence status

- SIGA-DDOS relay/terminal claims: `SOURCE NOT FOUND`; no official Edwards source was located.
- Detector-base/accessory claims: mostly `SOURCE NOT FOUND`; SIGA-AB4G is only partially supported by its reference in E85001-0239.
- Manual-station claims: `PARTIALLY VERIFIED` at family level only; exact part-number pages were not located.
- Generic monitor/control generalizations: `PARTIALLY VERIFIED` or `SOURCE NOT FOUND` unless tied to a specific product/personality page.
- CT/CC/UM application claims: verified only at the personality-code boundaries listed above; broader claims remain partial or unsupported.
- `SIGA-CC1S`: **DOCUMENTED BY EDWARDS — NOT CURRENTLY USED IN SCORED TRAINING**.
- `SIGA-UM2`: **UNVERIFIED — DO NOT USE AS TRAINING FACT**.
- `SIGA-HPR`: absent from scored training and unsupported by the collected official source set.

### No-content-change confirmation

- Question banks modified by this remaining-evidence pass: **No**
- Product data modified: **No**
- Quiz logic, scoring, randomization, progress tracking, UI, navigation, and runtime audit modified: **No**
- Runtime audit code modified: **No**. The browser runtime audit was run during investigation and returned `PASS - ALL RUNTIME CHECKS PASSED`; it was not rerun after the final restoration because no production content remained changed.
