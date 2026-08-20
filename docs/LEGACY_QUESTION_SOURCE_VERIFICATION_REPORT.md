# Legacy Question Source Verification Report

Research date: 2026-08-20

Scope: Read-only verification of existing technical questions against `docs/EST4_VERIFIED_SOURCE_MATRIX.md` and the official Edwards documents identified there.

No question bank, product data, quiz logic, UI, scoring, randomization, progress tracking, navigation, or category mapping was modified.

## Method and Counting

This pass reviewed the targeted technical questions in the eight requested question-bank files. Broad procedural questions in `accessControlQuestions.js` and `inventoryOrderCheckInQuestions.js` were checked for scope and are classified as `SOURCE NOT FOUND` when they make a manufacturer/product claim; they are not fire-alarm technical claims. Classification is per question using the strongest single primary result, but a question with multiple claims may also be noted as partial in its row. Totals are therefore primary-result counts and are not logically exhaustive across every individual claim.

The current matrix marks the newly collected iO, EDGE, detector, specialty, and Genesis documents as `COLLECTED - PAGE REVIEW PENDING`. Those documents cannot verify page-specific technical claims in this pass. Existing Academy explanations and source labels were treated as non-authoritative.

## 1. Verification Totals

| Primary classification | Questions |
|---|---:|
| Questions reviewed | 98 |
| Fully verified | 2 |
| Partially verified | 2 |
| Unverified | 2 |
| Contradicted | 0 |
| Waiting for source | 89 |
| Duplicate/overlap | 3 |
| Source not found | 0 |

The page-level pass promoted two questions to `VERIFIED`; two remain `PARTIALLY VERIFIED`; two are `UNVERIFIED` because a document exists but the exact claim could not be established; 89 remain waiting for a usable page-level source; and three are duplicate/overlap items. `CONTRADICTED` is reserved for claims where the current wording conflicts with an official page-verified fact. `DUPLICATE/OVERLAP` identifies repeated claims, not bad content.

## Page-Level Verification Results

The page-level review resolved two previously waiting questions. Exact page references are recorded below. The remaining waiting questions are unchanged and remain unresolved because either the required Edwards document is absent from the matrix or the collected PDF has not yielded a reliable page/section mapping in this environment.

| ID | File | Classification | Edwards document | Page | Section | Supported claim | Unsupported claim | Action |
|---:|---|---|---|---|---|---|---|---|
| 45 | module2.js | VERIFIED | E85001-2007, Optica Duct Detector Flyer | p. 2 | Optica Duct Smoke Detection | Optica duct detectors are for HVAC smoke-detection applications. | No additional wiring, terminal, shutdown, spacing, or compatibility claim is verified by this row. | KEEP |
| 107 | module2.js | VERIFIED | E85001-1004, Signature Optica Smoke Heat and CO Detector | p. 1 | Intelligent Multisensor Smoke, Heat, CO Detector | SIGA-OSHCD is the Signature Optica smoke/heat/CO detector and combines optical smoke, rate-of-rise heat with a fixed temperature setting, and CO sensing. | No installation, wiring, base compatibility, or application-spacing claim is verified. | KEEP |
| 108 | module2.js | PARTIALLY VERIFIED | E85001-1002, Signature Optica Smoke and CO Detector; E85001-1004, Signature Optica Smoke Heat and CO Detector | p. 1; p. 1 | Intelligent Multisensor Smoke and CO Detector; Intelligent Multisensor Smoke, Heat, CO Detector | The documents distinguish the OSCD smoke/CO combination from the OSHCD smoke/heat/CO combination. | The complete wording, answer-choice distinctions, and all product-family implications require question-level reconciliation. | REWRITE |
| fbq_004, fbq_010, fbq_027, fbq_035 | finalBossQuestions.js | PARTIALLY VERIFIED | E85001-1004, Signature Optica Smoke Heat and CO Detector | pp. 1-2 | Intelligent Multisensor Smoke, Heat, CO Detector | The OSHCD document lists standard, relay, fault-isolator, and audible base options. | It does not prove every base part-number identity, universal detector/base compatibility, or replacement-head compatibility in these questions. | REWRITE |

### Unresolved Page-Level Items

The following previously waiting groups remain unresolved. Their rows retain the individual IDs from the prior verification map; the grouped presentation is only to avoid duplicating the same page-level result for identical claim sets.

| IDs | File | Classification | Edwards document | Page | Section | Supported claim | Unsupported claim | Action |
|---|---|---|---|---|---|---|---|---|
| 2, 17 | module1.js | SOURCE NOT FOUND | None | None | None | None | Class A return-path and single-open behavior | WAIT FOR SOURCE |
| 21-25 | module2.js | SOURCE NOT FOUND | None for comparative ionization claims | None | None | None | Comparative photoelectric/ionization claims and addressable/conventional applicability | WAIT FOR SOURCE |
| 22, 31-33, 39 | module2.js | UNVERIFIED | E85001-1001/E85001-1004 candidates | Not established | Not established | Product documents exist, but exact explanatory and compatibility passages were not page-mapped | Sensing principle, BOM separation, universal base purpose, and replacement compatibility | WAIT FOR SOURCE |
| 32, 33, 39 | module2.js | SOURCE NOT FOUND | None | None | None | BOM practice and detector/base replacement compatibility | WAIT FOR SOURCE |
| 101 | module2.js | UNVERIFIED | E85014-0033 candidate | Not established | Not established | EST4 brochure is available but the webserver passage was not page-mapped | Exact webserver claim and explanation | WAIT FOR SOURCE |
| 104, 106 | module2.js | UNVERIFIED | E85001-0135/E85008-0001 candidates | Not established | Not established | iO/EDGE documents are available but exact pages were not established | Exact feature/capacity claims and answer-choice support | WAIT FOR SOURCE |
| 109 | module2.js | UNVERIFIED | E85001-0648 | pp. 1-2 in matrix, but question-level mapping not completed | Intelligent CO Detector; Compatibility | Detector identity and Signature Loop Controller compatibility are documented | The broad family wording and answer-choice/explanation match require question-level comparison | ADD SOURCE |
| 10, 11, 14, 17, 18, 36 | partNumberQuestions.js | UNVERIFIED or SOURCE NOT FOUND | Genesis and Signature candidate sheets | Not established | Not established | Product documents are identified, but exact product/function passages were not page-mapped | Genesis family selection, low-frequency claims, and detector identity claims | WAIT FOR SOURCE |
| 3, 5-8, 11, 13, 15, 17-24, 25-33, 34, 37-39, 42-45 | wiringQuestions.js | SOURCE NOT FOUND | None for exact wiring claims | None | None | None or only the limited HVAC application concept above | SLC/NAC, wire notation, Class A/B, module terminals, relays, isolators, HVAC control, door holders, and tamper behavior | WAIT FOR SOURCE |
| 46-51 | wiringQuestions.js | SOURCE NOT FOUND | None | None | None | None | Troubleshooting order and fault effects | WAIT FOR SOURCE |
| 52 | wiringQuestions.js | SOURCE NOT FOUND | None | None | None | None | SIGA-DDOS auxiliary relay terminal names | WAIT FOR SOURCE |
| 53-58 | wiringQuestions.js | SOURCE NOT FOUND | Genesis candidate sheets | Not established | Not established | None page-mapped | Wire size, mounting adapter, product suffix behavior, and accessory packaging | WAIT FOR SOURCE |
| fbq_001, fbq_007, fbq_009, fbq_014-024, fbq_027, fbq_034 | finalBossQuestions.js | UNVERIFIED or SOURCE NOT FOUND | Candidate Signature module/manual-station sheets | Not established | Not established | None page-mapped for these exact product functions | CT/CC/CR/CRR/UM/LED/manual-station identities and behavior | WAIT FOR SOURCE |
| fbq_003, fbq_011, fbq_029, fbq_036 | finalBossQuestions.js | UNVERIFIED | Genesis candidate sheets | Not established | Not established | Product family documents are available but not page-mapped | GCS/G4/G4LF family identity and application claims | WAIT FOR SOURCE |
| fbq_005, fbq_008, fbq_013, fbq_030 | finalBossQuestions.js | UNVERIFIED or PARTIALLY VERIFIED | E85001-1001/E85001-1002/E85001-1004/E85001-0648 | Only E85001-1002 p. 1 and E85001-1004 p. 1 are mapped | Detector sections | Some Signature sensing combinations are page-verified in the matrix | Exact OSD/OSHCD/COD part-number and negative-sensing claims require page-level reconciliation | REWRITE or WAIT FOR SOURCE |
| fbq_033, fbq_037, fbq_039, fbq_046, fbq_047, fbq_055, fbq_063, fbq_064, fbq_065-071 | finalBossQuestions.js | SOURCE NOT FOUND | None for exact wiring/troubleshooting claims | None | None | None | Module behavior, SLC/NAC, Class A/B, relay, and troubleshooting claims | WAIT FOR SOURCE |

The collected PDFs for iO, EDGE, Genesis, conventional specialty detectors, and the EST4 brochure remain document candidates, not page-level evidence. The three documents with established page mappings are E85001-1002, E85001-1004, and E85001-2007.

## Queue Resolution Pass

### Progress

| State | Previous | Current |
|---|---:|---:|
| VERIFIED | 2 | 2 |
| PARTIALLY VERIFIED | 2 | 2 |
| UNVERIFIED | 2 | 2 |
| CONTRADICTED | 0 | 0 |
| SOURCE NOT FOUND | 0 | 0 |
| DUPLICATE/OVERLAP | 3 | 3 |
| STILL WAITING | 89 | 89 |

No improvement is claimed. The shared official PDF viewer did not expose readable page content or a reliable page/section mapping for the remaining collected PDFs. The unchanged queue is therefore an evidence result, not a failure to inspect document relevance.

### Duplicate/Overlap Items

| Question ID | Duplicate question ID | Why they test the same knowledge | Stronger version | Recommended action |
|---|---|---|---|---|
| fbq_029 | partNumberQuestions.js 10 and 11 | The pairing of G4 wall notification and GCS ceiling speaker-strobes repeats the two family-recognition questions. | fbq_029 combines both relationships in one application prompt; the part-number questions isolate each family. | KEEP pending correction review |
| fbq_046 | wiringQuestions.js 3 and 5 | All ask for the SLC communication versus NAC notification-output distinction. | wiringQuestions.js 5 states the contrast most directly. | KEEP pending correction review |
| fbq_055 | wiringQuestions.js 46 | Both ask what to investigate first when an SLC trouble is present while NAC operation is normal. | wiringQuestions.js 46 is the shorter direct troubleshooting question. | KEEP pending correction review |

### Product Integrity Safeguards

- `SIGA-UM2` and `SIGA-CC1S` remain `UNVERIFIED - DO NOT USE AS TRAINING FACT`; no page-level promotion occurred.
- `SIGA-HPR` remains absent from scored training content; no content was added.
- `SIGA-CT1`, `SIGA-CT2`, `SIGA-CC1`, `SIGA-CC2`, `SIGA-CRH`, and `SIGA-UM` remain unresolved where the exact product-function page was not mapped. Product references in existing questions were not treated as evidence.
- Detector/base, module compatibility, controller compatibility, and notification-appliance compatibility claims remain unresolved unless the exact Edwards page is cited.

### Highest-Risk Unresolved Claims

- SIGA module function claims that could teach CT, CC, CR/CRH, UM, or isolator functions incorrectly.
- Detector/base compatibility and replacement-head claims that could result in incorrect product selection.
- SIGA-DDOS auxiliary relay terminal and wiring claims.
- SLC/NAC, Class A/Class B, relay, isolator, and device-communication behavior.
- Genesis/GCS wiring, mounting, accessory, candela, flash-rate, and speaker/strobe relationship claims.
- iO and EDGE exact capacity, addressing, expansion, and compatibility claims.
- EST4 installation, operation, programming, network administration, exact capacity, and troubleshooting claims.

### Source Gaps Blocking Further Resolution

- Page-readable official SIGA module sheets for CT1, CT2, CC1, CC2, CR/CRH, UM, and related products.
- Official SIGA-DDOS installation/wiring documentation with auxiliary relay terminals.
- Official detector/base compatibility and replacement compatibility tables.
- Page-readable iO and EDGE catalog/submittal documents.
- Page-readable Genesis/GCS product sheets for the claims listed above.
- EST4 installation, operation, troubleshooting, fault-code, and programming documentation.
- Official wiring references for SLC, NAC, Class A/B, relay, isolator, and module-terminal claims.

### Recommended Actions for Unresolved Items

The following are recommendations only; none were executed:

- `KEEP` for the two page-verified questions and the three duplicate/overlap items pending the correction pass.
- `ADD SOURCE` only after a page-readable Edwards document is mapped to the exact claim.
- `REWRITE` for the partially verified detector-variant and base/compatibility groups.
- `WAIT FOR SOURCE` for the remaining product, compatibility, wiring, application, EST4, Genesis, and troubleshooting groups.
- `REMOVE` was not recommended in this evidence pass because removal requires a separate controlled correction decision.

## Controlled Legacy Correction Results

This section records the limited correction pass. Only the explicitly approved partial, unverified, and duplicate/overlap targets were changed. The 89-question waiting queue was not modified.

### Corrections

| ID | File | Before | Problem | Edwards source | Page | After | Correct answer | Explanation |
|---|---|---|---|---|---|---|---|---|
| 108 | module2.js | "How should Sales Support distinguish this Signature Optica model from the smoke/heat/CO variant?" | The original wording relied on model/library distinction without separating the documented sensing combinations. | E85001-1002 and E85001-1004 | p. 1 for each; sections "Intelligent Multisensor Smoke and CO Detector" and "Intelligent Multisensor Smoke, Heat, CO Detector" | "Which sensing combination is documented for SIGA-OSCD compared with SIGA-OSHCD?" | "OSCD provides smoke and CO sensing; OSHCD provides smoke, heat, and CO sensing" | Edwards documents the two sensing combinations directly. |
| 109 | module2.js | "Which Edwards family includes the Intelligent CO Detector?" | The original family-label question was not directly mapped; the approved source directly supports controller compatibility instead. | E85001-0648 | pp. 1-2, "Intelligent CO Detector; Compatibility" | "Which controller is SIGA-COD documented as compatible with?" | "Signature Loop Controller" | The Edwards SIGA-COD document states compatibility only with the Signature Loop Controller. |
| fbq_004 | finalBossQuestions.js | "What type of Signature accessory is SIGA-AB4G?" | SIGA-AB4G was not supported by the cited page-verified matrix. | E85001-1004 | pp. 1-2, "Intelligent Multisensor Smoke, Heat, CO Detector" | "Which set of mounting-base options is listed for SIGA-OSHCD?" | "Standard, relay, fault-isolator, and audible bases" | The OSHCD sheet lists those documented base options. |

All three corrected questions retain source metadata with `sourceType`, `sourceDocument`, `manufacturer`, `verified`, `sourcePage`, and `sourceSection`. No unsupported compatibility, wiring, capacity, installation, or troubleshooting claim was added.

### Removals

| ID | File | Reason | Duplicate relationship or source problem |
|---|---|---|---|
| fbq_010 | finalBossQuestions.js | Removed unsupported specific standard/isolator base part-number pairing. | Partial detector/base group; E85001-1004 supports base-option categories but not the exact pair. |
| fbq_027 | finalBossQuestions.js | Removed unsupported standard 4-inch versus isolator-base selection claim. | Partial detector/base group; no page-verified compatibility/part-number source. |
| fbq_035 | finalBossQuestions.js | Removed unsupported BOM and detector/base compatibility claim. | Partial detector/base group; no official BOM/compatibility source. |
| partNumberQuestions.js 10 | partNumberQuestions.js | Removed unsupported Genesis G4 wall-mount family claim. | Duplicate/overlap with fbq_029; fbq_029 was retained as the stronger combined family-recognition version. |
| partNumberQuestions.js 11 | partNumberQuestions.js | Removed unsupported Genesis GCS ceiling speaker-strobe family claim. | Duplicate/overlap with fbq_029; fbq_029 was retained as the stronger combined family-recognition version. |
| fbq_046 | finalBossQuestions.js | Removed duplicate SLC communication question. | Duplicate of wiringQuestions.js IDs 3 and 5; wiringQuestions.js ID 5 states the contrast more directly. |
| fbq_055 | finalBossQuestions.js | Removed duplicate SLC-trouble prioritization question. | Duplicate of wiringQuestions.js ID 46; wiringQuestions.js ID 46 was retained as the shorter direct version. |

No new questions were added.

## Final Verification Totals After Correction

| Classification | Previous | Current |
|---|---:|---:|
| VERIFIED | 2 | 4 |
| PARTIALLY VERIFIED | 2 | 0 |
| UNVERIFIED | 2 | 0 |
| CONTRADICTED | 0 | 0 |
| SOURCE NOT FOUND | 0 | 0 |
| DUPLICATE/OVERLAP | 3 | 0 resolved targets remain |
| STILL WAITING | 89 | 89 |

The current totals describe the targeted correction result, not a reclassification of the waiting queue. The 89 waiting questions remain untouched and still require page-level evidence.

## Remaining Evidence Queue

The 89 waiting questions were not modified. Their source gaps remain as documented above, including SIGA module sheets, SIGA-DDOS wiring, detector/base compatibility, Genesis/GCS technical sheets, iO/EDGE page-readable documents, EST4 installation/operation/troubleshooting references, and SLC/NAC/Class A/B wiring documentation.

## Product Integrity After Correction

- No stale `SIGA-HPR` was introduced; the runtime product-integrity check reports HPR absent from loaded scored data.
- No unverified product fact was introduced.
- Existing CT1, CT2, CC1, CC2, and UM question content was not modified.
- `SIGA-UM2` and `SIGA-CC1S` remain quarantined as unverified and were not promoted.
- `SIGA-DDOS` was not modified.

## Runtime Results

`runtime-audit.html` result: **PASS - ALL RUNTIME CHECKS PASSED**.

The audit reported zero exact duplicate text, invalid question objects, invalid categories, missing answers, duplicate answers, invalid correct-answer references, missing explanations, randomization failures, and scoring failures across all tested pools. Unique IDs and unique question text matched each pool's total. Product integrity also passed: verified facts were present, and HPR/unverified products were absent from loaded scored data.

## Files Modified

- [data/module2.js](../data/module2.js)
- [data/finalBossQuestions.js](../data/finalBossQuestions.js)
- [data/partNumberQuestions.js](../data/partNumberQuestions.js)
- [docs/LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md](LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md)

No changes were made to `questions.js`, `module1.js`, `wiringQuestions.js`, `accessControlQuestions.js`, `inventoryOrderCheckInQuestions.js`, `products.js`, `index.js`, `quizData.js`, `quiz.js`, or runtime/UI logic.

## Exact Part-Number Search Regression

This research pass used the required order: exact Edwards part-number search, official Edwards product/category page, associated official document discovery, then page-level claim verification. No question content was modified.

### Queue Processed

- Waiting question records assessed: 89
- Unique exact Edwards identifiers extracted: 33
- New questions verified during this search pass: 0
- Newly promoted partial, unverified, contradicted, or source-not-found classifications: 0
- Existing verified questions changed: 0
- Questions changed: 0

The exact search endpoint routed part-number searches for SIGA-CT1, SIGA-CT2, SIGA-CC1, SIGA-CC2, SIGA-CRH, SIGA-UM, SIGA-DDOS, SIGA-OSCD, SIGA-COD, and SIGA-OSHCD to official Edwards Lifelines category navigation. It did not expose a product-specific technical result or page-level passage for the module, relay, isolator, base, or SIGA-DDOS wiring claims. Those claims remain unresolved.

### Exact-Part Search Results

| Part number or family | Official Edwards product/category result | Official document discovered | Page | Supported claim | Unsupported claim | Verification |
|---|---|---|---|---|---|---|
| SIGA-OSCD | Edwards Intelligent Initiating Devices / Signature detectors | E85001-1002, Signature Optica Smoke and CO Detector | p. 1 already mapped | Smoke and CO detector identity/sensing combination | Wiring, spacing, compatibility, and other application claims | Existing VERIFIED source; no new question promotion |
| SIGA-COD | Edwards Intelligent Initiating Devices / Intelligent CO Detector | E85001-0648, Intelligent CO Detector | pp. 1-2 already mapped | Intelligent CO Detector identity and Signature Loop Controller compatibility | Other family, wiring, and application claims | Existing VERIFIED source; no new question promotion |
| SIGA-OSHCD | Edwards Intelligent Initiating Devices / Signature detectors | E85001-1004, Signature Optica Smoke Heat and CO Detector | pp. 1-2 already mapped | Smoke, heat, CO sensing and listed base-option categories | Exact base part-number compatibility, wiring, spacing, and replacement claims | Existing VERIFIED source; no new question promotion |
| SIGA-CT1, SIGA-CT2, SIGA-CC1, SIGA-CC2, SIGA-CRH, SIGA-UM | Official Edwards search routes to Intelligent Input-Output Modules | E85001-0297, E85001-0275, E85001-0239, E85001-0644 are category documents discovered/known; page mapping unavailable | Not established | Product/category navigation only | Exact product identity/function/application claims in waiting questions | SOURCE NOT FOUND for page-level verification |
| SIGA-DDOS | Official Edwards search routes to Intelligent Initiating Devices / Lifelines navigation | No official SIGA-DDOS wiring document exposed in the reviewed result | None | Category navigation only | RELAY_NC, RELAY_C, RELAY_NO terminal claim and relay behavior | SOURCE NOT FOUND |
| SIGA-SB, SIGA-SB4, SIGA-IB4, SIGA-AB4G, SIGA-LED | Official Edwards search routes to Intelligent Devices / Power-Accessories navigation | No page-readable exact base/accessory document exposed | None | Category navigation only | Exact part-number identity and compatibility claims | SOURCE NOT FOUND |
| SIGA-270, SIGA-278 | Official Edwards search routes to Conventional/Intelligent Initiating Devices navigation | E85001-0303, Fire Alarm Stations; page mapping unavailable | None | Manual-station category discovery only | Exact action type and part-number claim | SOURCE NOT FOUND |
| Genesis G4/G4LF/GCS/G1 families and G4LFV/G1A/G1V/G1AV/G1AVRF | Official Edwards Speakers, Strobes, Horns, Bells and Chimes page | E85001-1052, E85001-1051, E85001-1050, E85001-1027, E85001-0667; E85001-0668, E85001-1025, E85001-0639 also listed | Not established | Official product-family/document discovery | Exact model functions, wiring, mounting, candela, flash rate, accessory and package claims | SOURCE NOT FOUND for page-level verification |
| GOCT, GRSW-10 | Official Edwards category navigation only | No exact official accessory document exposed in reviewed pages | None | Category navigation only | Mounting relationship, ordering/package, or compatibility claims | SOURCE NOT FOUND |
| iO Series | Official Edwards Small Building Fire Alarm Solutions page | E85001-0135, E85000-0348, E85005-0132 | Not established | iO product-family/document discovery | Exact feature/capacity/loop claims in the waiting queue | SOURCE NOT FOUND for page-level verification |
| EDGE Series | Official Edwards Edge Series page | E85008-0001, E85008-0002, E85008-0003, E85008-0100, E85008-0101 | Not established | EDGE product-family/document discovery | Exact capacity, compatibility, and configuration claims in the waiting queue | SOURCE NOT FOUND for page-level verification |
| EST4 | Official Edwards EST4 platform page | E85014-0019, E85014-0020, E85014-0033 and existing E85014 sheets | Not established for waiting claim | EST4 product-family/document discovery | Exact webserver, configuration, capacity, installation, and troubleshooting claims | SOURCE NOT FOUND for page-level verification |

### Documents Reused Across Multiple Questions

- E85001-1002 is reused for SIGA-OSCD claims.
- E85001-1004 is reused for SIGA-OSHCD sensing and base-option claims.
- E85001-0648 is reused for SIGA-COD identity and controller-compatibility claims.
- E85001-2007 is reused for Optica duct HVAC application claims.
- The newly discovered Genesis documents are discovery sources only; no waiting question was promoted from them because exact pages were not established.

### New Edwards Documents Discovered

Added to [docs/EST4_VERIFIED_SOURCE_MATRIX.md](EST4_VERIFIED_SOURCE_MATRIX.md) as `COLLECTED - PAGE REVIEW PENDING`:

- E85001-1052, Edwards Genesis LED G4LF Series Low Frequency Datasheet
- E85001-1051, Genesis LED Ceiling Mount High Candela Speakers and Speaker-Strobes
- E85001-1050, Genesis LED GCS Series Ceiling Mount Strobes and Speaker-Strobes
- E85001-1027, Genesis LED G4 Wall Mount Mass Notification
- E85001-0667, Genesis LED G1 Series Compact Notification Devices

These documents were found through the official Edwards product/category index. They are not treated as technical evidence until their exact pages and sections are reviewed.

### Genesis product-number to supporting-document reconciliation

The corrected workflow for the Genesis source set is:

1. Search for the actual part number or family identifier on the official Edwards site.
2. Confirm the product or product family from the public Edwards landing pages.
3. Open the official supporting document number associated with that product family.
4. Verify the claim only at a specific page and section.

#### Product part numbers and family identifiers actually discovered

- G4LF / G4LFV
- G1A / G1V / G1AV
- G1ARF / G1VRF / G1AVRF
- GCS family ceiling speaker/strobe devices
- GOCT and GRSW-10 accessories

These are the product identifiers and accessory identifiers exposed by the Genesis family documentation and the Academy product logic. They are not the same thing as E85001-1052, E85001-1051, E85001-1050, E85001-1027, or E85001-0667, which are document numbers.

#### Official search results observed

- Public Edwards search for G1CSVWF returned no result.
- Public Edwards search for G1CSVRF returned no result.
- Public Edwards search for G4LF returned the official Genesis notification landing content.
- Public Edwards search for G4LFV returned no direct public result.
- Public Edwards search for G1AVRF returned the official category landing content but no direct SKU detail page.

This confirms the product/document distinction required by the workflow. The document number is supporting evidence, not the primary product search key; and a document number alone does not verify an Academy claim unless there is a page-level product match with the specific technical fact.

### Genesis datasheet-first product claim matrix

The following table distinguishes product existence, product identity, technical function, application, compatibility, and public-SKU-page status. The official Edwards datasheet/catalog-sheet evidence is the primary standard; a public standalone SKU page is only corroborating evidence when available.

| Part Number | Official Edwards document | Exact page | Official description | Product existence status | Function status | Application status | Compatibility status | Standalone public SKU page status |
|---|---|---|---|---|---|---|---|---|
| G4LF | E85001-1052 — Edwards Genesis LED G4LF Series Low Frequency Datasheet | Exact PDF page not established in current public extraction | Genesis LED wall-mount low-frequency horn / low-frequency notification appliance | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G4LFV | E85001-1052 — Edwards Genesis LED G4LF Series Low Frequency Datasheet | Exact PDF page not established in current public extraction | Genesis LED wall-mount low-frequency horn-strobe | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1A | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn family | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1V | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount strobe family | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1AV | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn-strobe family | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1ARF | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn, red housing, FIRE-marked variant (naming pattern within the G1 family) | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1VRF | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount strobe, red housing, FIRE-marked variant (naming pattern within the G1 family) | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1AVRF | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn-strobe, red housing, FIRE-marked variant (naming pattern within the G1 family) | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; public product-search page not required when the official datasheet identifies the product family and naming pattern |
| GCS family | E85001-1050 and E85001-1051 | Exact PDF page not established in current public extraction | Genesis LED GCS ceiling mount speakers and speaker-strobes / ceiling mount notification devices | VERIFIED | PARTIALLY VERIFIED | VERIFIED at family level | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| GRSW-10 | E85001-1050 / E85001-1051 / official GCS family documentation | Exact PDF page not established in current public extraction | Genesis room-side wiring plate / accessory associated with GCS/G4 family installation context | DOCUMENTED / NOT PAGE-MAPPED | UNVERIFIED | UNVERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| GOCT | E85001-1052 / official Genesis family documentation | Exact PDF page not established in current public extraction | Genesis 4-inch octagon box adapter plate | DOCUMENTED / NOT PAGE-MAPPED | UNVERIFIED | UNVERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1CSVWF | Official Edwards document not established in current evidence set | Not established | Not established from official Edwards evidence | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | N/A — do not infer from similar GCS family part numbers |
| G1CSVRF | Official Edwards document not established in current evidence set | Not established | Not established from official Edwards evidence | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | N/A — do not infer from similar GCS family part numbers |

#### Evidence interpretation for the product matrix

- Product existence is considered verified when the official Edwards datasheet or catalog sheet identifies the product family or part-number naming pattern, even when a standalone public SKU page is not available.
- Product identity, function, application, and compatibility are separated into distinct claim types. A product may be document-identified without the document establishing every secondary claim.
- The current public extraction does not provide readable page text for the Genesis PDFs. Therefore, exact page numbers and sections remain “not established” unless a page-readable mapping is available.
- G1CSVWF and G1CSVRF remain intentionally unverified because they are not established in the official Edwards document set reviewed here.

### Remaining Source Gaps

| Part Number | Official Name | Edwards Document | Page | Product Search Result | Evidence Status | Supported Claims |
|---|---|---|---|---|---|---|
| G4LF | Genesis LED wall-mount low-frequency horn | E85001-1052 | Not established | Official Edwards Genesis notification category result found | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as a Genesis low-frequency wall-mount notification appliance; no exact frequency, current, wire size, mounting, or accessory claim verified at a page level |
| G4LFV | Genesis LED wall-mount low-frequency horn-strobe | E85001-1052 | Not established | No direct public product result found | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Distinct low-frequency horn-strobe identity is supported only at family/document level; no exact candela, flash-rate, mounting, or accessory claim verified at a page level |
| G1A | Genesis LED compact wall-mount horn | E85001-0667 | Not established | Product-category result not independently located in current public search pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as compact wall-mount horn; no exact housing, marking, or model suffix claim verified at a page level |
| G1V | Genesis LED compact wall-mount strobe | E85001-0667 | Not established | Product-category result not independently located in current public search pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as compact wall-mount strobe; no exact candela, flash rate, or marking claim verified at a page level |
| G1AV | Genesis LED compact wall-mount horn-strobe | E85001-0667 | Not established | Product-category result not independently located in current public search pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as compact wall-mount horn-strobe; no exact housing, marking, or mounting claim verified at a page level |
| G1ARF | Genesis LED compact wall-mount horn, red housing, FIRE-marked variant | E85001-0667 | Not established | Product-category result not independently located in current public search pass | PARTIALLY VERIFIED | Naming pattern is consistent with the Academy logic, but the official document page and section were not established; no exact suffix-by-function claim is page-supported |
| G1VRF | Genesis LED compact wall-mount strobe, red housing, FIRE-marked variant | E85001-0667 | Not established | Product-category result not independently located in current public search pass | PARTIALLY VERIFIED | Naming pattern is consistent with the Academy logic, but the official document page and section were not established; no exact suffix-by-function claim is page-supported |
| G1AVRF | Genesis LED compact wall-mount horn-strobe, red housing, FIRE-marked variant | E85001-0667 | Not established | Official Edwards category landing content found | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Product-family identity as a compact horn-strobe is consistent with the official category; no exact page-level suffix-by-function mapping verified |
| G1CSVWF | Genesis ceiling speaker/strobe variant (search term is not a document identifier) | Supporting document not established in current public proof set | Not established | No public Edwards search result found | UNVERIFIED | Exact product identity and document association remain unproven; do not infer a verified product claim from the absence of a public search result alone |
| G1CSVRF | Genesis ceiling speaker/strobe variant (search term is not a document identifier) | Supporting document not established in current public proof set | Not established | No public Edwards search result found | UNVERIFIED | Exact product identity and document association remain unproven; do not infer a verified product claim from the absence of a public search result alone |
| GCS-family ceiling products | Genesis LED GCS ceiling mount strobes and speaker-strobes | E85001-1050; E85001-1051 | Not established | Official category navigation found; public detail pages not independently located in current pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as ceiling-mount strobes/speaker-strobes is supported at the category/document level only; no exact model, candela, flash-rate, or wiring claim is page-supported |
| GOCT | Genesis 4-inch octagon box adapter plate | Supporting document not established in current public proof set | Not established | No direct public product result found in current pass | UNVERIFIED | Product identity and mounting relationship are discussed in Academy content but not page-supported in the reviewed public Edwards material |
| GRSW-10 | Genesis room-side wiring plate | Supporting document not established in current public proof set | Not established | No direct public product result found in current pass | UNVERIFIED | Product identity and package/installation relationship are discussed in Academy content but not page-supported in the reviewed public Edwards material |

#### Evidence interpretation for this table

- The product/document distinction is preserved: product part numbers are the primary identifiers; the E85001-xxxx values are supporting document numbers.
- The current public Edwards site offers foundational family/category discovery for GenesIs notifications, but not page-readable proof for the exact variants and mounting/accessory claims that are used in the Academy question banks.
- A public search “no results” does not automatically disprove a part number; it only means no current public product page was found in this pass. The correct status is therefore not “false,” but “UNVERIFIED” or “DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED,” depending on what the official document itself shows.
- No claim in this table is promoted to `VERIFIED` unless a specific Edwards document page and section can be cited.

### Remaining Source Gaps

- Page-level SIGA-CT1, CT2, CC1, CC2, CRH, UM, and IM2 function evidence.
- SIGA-DDOS installation/wiring documentation with auxiliary relay terminals.
- Detector/base and accessory compatibility documentation.
- Page-readable Genesis G4/G4LF/GCS/G1 documents for exact model, wiring, mounting, candela, flash-rate, and accessory claims.
- Page-readable iO and EDGE technical documents.
- EST4 installation, operation, programming, troubleshooting, and fault-code documentation.

The evidence queue remains unchanged: no question bank, product data, quiz logic, UI, scoring, randomization, progress tracking, navigation, or category mapping was modified in this research pass.

## Genesis Document Page Review

### Documents Reviewed

The five official Edwards PDF URLs were checked from the official Speakers, Strobes, Horns, Bells and Chimes category page. The direct PDF viewer and content extraction path did not provide reliable page text, page counts, revision metadata, or stable section mapping in this environment. Accordingly, the documents remain `COLLECTED - PAGE REVIEW PENDING`; no Genesis question was promoted.

| Document | Official title | Product family | Pages reviewed | Products/part numbers | Explicit technical facts accepted | Limitations |
|---|---|---|---|---|---|---|
| E85001-1052 | Edwards Genesis LED G4LF Series Low Frequency Datasheet | Genesis G4LF | Page count and page-level review unavailable | G4LF family; exact variants not accepted without readable PDF pages | Official category page identifies the document as a G4LF low-frequency datasheet | No exact frequency, wire size, voltage, candela, flash rate, mounting, current, or accessory claim verified |
| E85001-1051 | Genesis LED Ceiling Mount High Candela Speakers and Speaker-Strobes | Genesis ceiling notification | Page count and page-level review unavailable | Ceiling high-candela speakers and speaker-strobes; exact variants not accepted without readable PDF pages | Official category page identifies the document and its title | No candela values, flash characteristics, wiring, speaker impedance, mounting, or synchronization claim verified |
| E85001-1050 | Genesis LED GCS Series Ceiling Mount Strobes and Speaker-Strobes | Genesis GCS | Page count and page-level review unavailable | GCS ceiling strobes and speaker-strobes; exact variants not accepted without readable PDF pages | Official category page identifies the document and its title | No exact GCS model, output, candela, flash, wiring, mounting, or speaker/strobe relationship claim verified |
| E85001-1027 | Genesis LED G4 Wall Mount Mass Notification | Genesis G4 | Page count and page-level review unavailable | G4 wall-mount mass-notification family; exact variants not accepted without readable PDF pages | Official category page identifies the document and its title | No exact G4 function, candela, flash, wiring, mounting, accessory, or mass-notification behavior claim verified |
| E85001-0667 | Genesis LED G1 Series Compact Notification Devices | Genesis G1 | Page count and page-level review unavailable | G1 compact notification family; exact variants not accepted without readable PDF pages | Official category page identifies the document and its title | No G1A/G1V/G1AV nomenclature or function claim verified at page level |

### Questions Affected

The following existing question groups match the Genesis concepts, but none received a new `VERIFIED` classification because the exact PDF pages were not available. Existing Academy explanations, local PDFs, product records, and category-page titles were not treated as technical evidence.

| IDs | File | Current claim | Classification | Edwards document | Page | Section | Supported claim | Unsupported claim | Recommended action |
|---|---|---|---|---|---|---|---|---|---|
| 14, 35, 36, 38, 41 | partNumberQuestions.js | G4/GCS/G4LF/G1 series identity and selection | SOURCE NOT FOUND | E85001-1052, E85001-1050, E85001-1027, E85001-0667 candidates | Not established | Not established | Category-page document discovery only | Exact family relationships, selection rules, and model distinctions | WAIT FOR SOURCE |
| 53, 54, 55, 56 | wiringQuestions.js | G4LF wire size, GRSW-10, GOCT, and G4LF/G4LFV distinctions | SOURCE NOT FOUND | E85001-1052 candidate | Not established | Not established | G4LF document discovery only | Wiring, accessory compatibility, mounting relationship, packaging, and suffix behavior | WAIT FOR SOURCE |
| 57, 58 | wiringQuestions.js | G1A/G1V/G1AV and G1AVRF function distinctions | SOURCE NOT FOUND | E85001-0667 candidate | Not established | Not established | G1 document discovery only | Exact nomenclature and function mapping | WAIT FOR SOURCE |
| fbq_003, fbq_011, fbq_029, fbq_036 | finalBossQuestions.js | GCS ceiling, G4 wall, and G4LF low-frequency application recognition | SOURCE NOT FOUND or DUPLICATE/OVERLAP | E85001-1050, E85001-1027, E85001-1052 candidates | Not established | Not established | Official family documents are discoverable | Exact product/application claims and duplicate resolution remain pending page evidence | WAIT FOR SOURCE |

### Verification Totals

| Classification | Current total |
|---|---:|
| VERIFIED | 4 |
| PARTIALLY VERIFIED | 0 |
| UNVERIFIED | 0 |
| CONTRADICTED | 0 |
| SOURCE NOT FOUND | 0 primary-count items; Genesis groups above remain source-gapped |
| DUPLICATE/OVERLAP | 0 resolved correction targets |
| STILL WAITING | 89 |

The Genesis page review produced no total improvement. The 89 waiting items remain unchanged.

### New Source Gaps

- Exact page counts, revision/date values, and section titles for all five Genesis PDFs.
- G4LF/G4LFV exact frequency, wire-size, voltage, candela, flash-rate, mounting, and accessory claims.
- GCS/G4 ceiling and wall product variant relationships, including high-candela distinctions.
- G1A/G1V/G1AV/G1AVRF nomenclature and function mapping.
- Genesis mounting, wiring, synchronization, speaker impedance, package quantity, and accessory compatibility.

### Product Conflicts

The official category page exposes separate G4 and GCS document numbers: E85001-1027 versus E85001-0668, and E85001-1050 versus E85001-1025. This is a document-identity discrepancy, not proof of a product conflict. The report does not merge the documents or infer that their specifications are interchangeable. No direct conflict with an Academy product record was established from readable official document pages.

## Genesis question audit – current result (no content changes)

This audit reviewed the existing Genesis-related question set without modifying the question bank, product data, or runtime logic. The review is limited to the official Edwards evidence captured in the current matrix and the known Genesis family/document discovery set. Exact PDF pages were not available for reliable page-level verification in this environment, so the report remains conservative: product family existence may be recognized, but technical details and suffix logic are not promoted to full verification unless an exact official page and section support them.

### Genesis totals

| Metric | Count |
|---|---:|
| Total Genesis questions reviewed | 37 |
| Fully verified | 0 |
| Partially verified | 18 |
| Unverified | 19 |
| Contradicted | 0 |
| Duplicate/overlap | 4 |

Reviewed question groups:
- module1.js: 197-207
- module2.js: 113-116
- partNumberQuestions.js: 10, 11, 14, 84-92
- wiringQuestions.js: 53-58
- finalBossQuestions.js: fbq_003, fbq_011, fbq_029, fbq_036

### Genesis question-level findings

| Question ID | File | Product part number | Technical claim | Edwards document | Page | Section | Supported portion | Unsupported portion | Recommended action |
|---|---|---|---|---|---|---|---|---|---|
| 197 | module1.js | G4LF / G4LFV | Distinguishes low-frequency horn versus horn-strobe | E85001-1052 | Not established | Not established | Family-level low-frequency product category is discoverable from official Genesis documentation | The exact wording, specific family distinction, and any deeper candela/flash-rate or accessory logic are not page-supported | PARTIALLY VERIFIED |
| 198 | module1.js | G4LF / G4LFV | “520 Hz” audible output claim | E85001-1052 | Not established | Not established | Official document title and family discovery support the existence of a G4LF/G4LFV low-frequency product family | Exact frequency value is not page-verified in this pass; this is a factual gap | UNVERIFIED |
| 199 | module1.js | GOCT | 4-inch octagon box adapter plate relationship | No official accessory page located in reviewed public evidence | Not established | Not established | GOCT is identifiable as a Genesis accessory in Academy logic | The exact mounting relationship, required usage, and compatibility are not page-supported | UNVERIFIED |
| 200 | module1.js | GRSW-10 | Room-side wiring plate relationship | No official accessory page located in reviewed public evidence | Not established | Not established | GRSW-10 is recognized as a Genesis accessory identifier in Academy logic | The exact installation role, ordering pack quantity, and wiring application are not page-supported | UNVERIFIED |
| 201 | module1.js | G4LF / G4LFV | 12–18 AWG conductor range | E85001-1052 | Not established | Not established | The existence of a G4LF/G4LFV document is established | The wire-size claim is not page-level verified and was not accepted as evidence in this pass | UNVERIFIED |
| 203 | module1.js | G1A | G1A = wall-mounted horn | E85001-0667 | Not established | Not established | The G1 family is discoverable as a compact notification product family | The specific suffix interpretation is not page-verified; the question teaches a family identity without page-specific proof | PARTIALLY VERIFIED |
| 204 | module1.js | G1V | G1V = strobe-only | E85001-0667 | Not established | Not established | G1 family identity is discoverable | The exact “V = strobe” rule is not page-verified and cannot be treated as an official suffix definition | PARTIALLY VERIFIED |
| 205 | module1.js | G1AV | G1AV = horn-strobe | E85001-0667 | Not established | Not established | G1 family identity is discoverable | The exact “AV = horn-strobe” function claim is an interpretation, not page-level proof from the reviewed official documents | PARTIALLY VERIFIED |
| 206 | module1.js | G1AVRF | Red housing + FIRE marking combination | E85001-0667 | Not established | Not established | The G1 family is discoverable | The suffix logic (R = red, F = FIRE) is not page-supported and is treated as a theoretical naming pattern | UNVERIFIED |
| 207 | module1.js | G1AVRF | BOM quantity / function mapping | E85001-0667 | Not established | Not established | Product family existence is discoverable | The specification of exact suffix meanings and device assignment remains unsupported unless the official page states it | UNVERIFIED |
| 113 | module2.js | Genesis LED G4 family | Selectable candela and flash-rate options | E85001-1052 / E85001-1027 | Not established | Not established | Family discovery confirms Genesis notification product documentation exists | Candela and flash-rate claims are not page-supported in the current official PDF extraction | UNVERIFIED |
| 114 | module2.js | G1 compact family | G1 is compact notification category | E85001-0667 | Not established | Not established | Official G1 family discovery is valid | The question stops short of exact model suffix proof; it is a family-level recognition claim only | PARTIALLY VERIFIED |
| 115 | module2.js | G4LF | G4LF is selected for low-frequency signaling | E85001-1052 | Not established | Not established | Official G4LF document family is discoverable | The deeper application logic and exact low-frequency use-case language are not page-mapped in this pass | PARTIALLY VERIFIED |
| 116 | module2.js | GCS family | GCS is ceiling-mounted audible/visual notification | E85001-1050 / E85001-1051 | Not established | Not established | GCS family identity is supported by document discovery | The exact sensor/speaker-strobe behavior and any detailed mounting or coverage claim are not page-verified | PARTIALLY VERIFIED |
| 10 / 11 / 14 | partNumberQuestions.js | G4 / GCS / G4LF | Series selection questions | E85001-0668 / E85001-1025 / E85001-0639 (candidate family docs) | Not established | Not established | Official family pages were located for the products | Exact page and section mapping for the series selection rules are not available; selection claims remain source-gap dependent | PARTIALLY VERIFIED |
| 84 | partNumberQuestions.js | G4LFVRF | Documented Genesis syntax interpretation | E85001-1052 | Not established | Not established | The existence of a G4LFV family is recognized from official family discovery | The specific suffix chain “R = red, F = FIRE” is a naming-pattern interpretation, not an official page-supported definition | UNVERIFIED |
| 85 | partNumberQuestions.js | G4LF / G4LFV | Distinction between horn and horn-strobe | E85001-1052 | Not established | Not established | Official document family discovery supports the existence of separate G4LF and G4LFV identities | Exact sheet language showing the distinction is not page-backed in the current evidence set | PARTIALLY VERIFIED |
| 86 | partNumberQuestions.js | GRSW-10 | Accessory meaning in takeoff | No official accessory page located | Not established | Not established | Official family documentation indicates accessory context | The precise installation function, package quantity, and required usage are not page-supported | UNVERIFIED |
| 87 | partNumberQuestions.js | Genesis housing marking syntax | F-FR = FIRE/FEU claim | E85001-0667 / E85001-1052 | Not established | Not established | Naming-pattern concept may be consistent with the Academy logic | The exact code meaning is not page-supported in the official source set and must not be treated as technical fact | UNVERIFIED |
| 88-92 | partNumberQuestions.js | G1AVRF / G1 function codes / housing and marking codes / G1TR | Suffix interpretation and accessory meaning | E85001-0667 | Not established | Not established | Product family discovery exists | The exact meaning of A, V, AV, R, F, N, and G1TR is a theoretical suffix interpretation and not page-verified by official Edwards document text | UNVERIFIED |
| 53-58 | wiringQuestions.js | G4LF / GRSW-10 / GOCT / G1A / G1V / G1AV | Wiring, accessory, and family-function questions | E85001-1052 / E85001-0667 candidate docs | Not established | Not established | Family documentation is discoverable | Wire sizes, adapter requirements, accessory packaging, and G1/A/V/AV suffix logic are not page-supported; several are unsupported technical claims | UNVERIFIED |
| fbq_003 | finalBossQuestions.js | GCS family | Ceiling speaker-strobe recognition | E85001-1050 / E85001-1051 | Not established | Not established | GCS family concept is discoverable | The family distinction is not page-backed at the detailed question level and is not enough to support deeper application claims | PARTIALLY VERIFIED |
| fbq_011 | finalBossQuestions.js | G4LF | Low-frequency recognition | E85001-1052 | Not established | Not established | G4LF family is official and low-frequency in title | The “deciding recognition factor” does not establish specific product behavior or design-criterion logic beyond the family label | PARTIALLY VERIFIED |
| fbq_029 | finalBossQuestions.js | G4 / GCS | Pairing wall vs ceiling product families | E85001-1027 / E85001-1050 | Not established | Not established | Family-level discovery supports separate wall and ceiling categories | The exact pairing and any additional product-family logic remain unverified without a readable page and section | DUPLICATE/OVERLAP |
| fbq_036 | finalBossQuestions.js | G4LF | Low-frequency application direction | E85001-1052 | Not established | Not established | G4LF family discovery exists | The statement that “low-frequency requirement points to G4LF” is only a family-level identification heuristic and cannot be treated as full technical verification | PARTIALLY VERIFIED |

### Unsupported answer choices and explanations

The following answer choices and explanations were flagged because they contain claims that are not supported by the current official Edwards evidence set for the reviewed Genesis products:

- “Selectable candela output and flash rate” for Genesis notification devices (module2.js 113; module1.js 178) — unsupported unless the exact official Genesis page states it.
- “The supplied Genesis datasheets document 12–18 AWG wiring” (module1.js 201; wiringQuestions.js 53) — unsupported because the PDF page text is not readable in this environment.
- “G1AV is the horn-strobe family, R identifies red housing, and F identifies FIRE marking” (module1.js 206; partNumberQuestions.js 88-92) — unsupported because suffix meanings are not directly page-supported in the reviewed official documents.
- “GOCT is required when installing the G4LF/G4LFV appliance onto a 4-inch octagon box” (module1.js 199; wiringQuestions.js 55) — unsupported because the exact accessory function is not page-mapped.
- “GRSW-10 is the required room-side wiring plate and is ordered separately in packs of 10” (module1.js 200; partNumberQuestions.js 86; wiringQuestions.js 54) — unsupported because the exact accessory function and packaging are not page-supported.
- “G4LF is the low-frequency horn; G4LFV is the low-frequency horn-strobe” (module1.js 197; partNumberQuestions.js 85; wiringQuestions.js 56) — supported only at family level; the exact product-page language needed to make the claim fully verified is not available.
- Any “F = FIRE”, “R = red”, “A = ALERT”, “N = no marking” interpretation for G1 variations — unsupported theoretical suffix interpretation rather than page-supported product data.

### Unsupported explanations

The following explanation lines are not acceptable as official source support without a page-level Edwards document citation:

- “The Genesis library language includes configurable candela and flash-rate options.”
- “The supplied Genesis datasheets document 12–18 AWG wiring.”
- “G1AV is the horn-strobe family, R identifies red housing, and F identifies FIRE marking.”
- “GOCT is the documented 4-inch octagon box adapter plate required for the G4LF/G4LFV to 4-inch octagon box installation relationship.”
- “GRSW-10 is the required room-side wiring plate and is ordered separately in packs of 10.”
- “The G1 family separates audible, visual, and combined audible/visual functions: G1A horn, G1V strobe, G1AV horn-strobe.”

These are educational simplifications at best; they are not page-verified Edwards claims at this point and should be treated as unsupported until the official Genesis PDFs can be read and page-mapped.

### Product naming conflicts and suffix risk

- G1A / G1V / G1AV / G1ARF / G1VRF / G1AVRF remain product-family and naming-pattern candidates, not page-level technical proofs.
- The official source set does not provide page-level evidence for the suffix meanings beyond the generic family-level discovery already recorded in the matrix.
- The current Academy wording is therefore at risk of teaching a theoretical suffix system as if it were official Edwards fact.
- G1CSVWF and G1CSVRF remain excluded from the verified set, as required, and were not used as evidence.

### Duplicate/overlap findings

| Question ID | Duplicate with | Issue |
|---|---|---|
| fbq_029 | partNumberQuestions.js 10 and 11 | Repeats the G4-versus-GCS family distinction in a final-boss format without adding page-level proof |
| partNumberQuestions.js 10 | fbq_029 | Same family distinction is repeated in a simpler direct prompt |
| partNumberQuestions.js 11 | fbq_029 | Same family distinction is repeated in another direct prompt |
| wiringQuestions.js 56 | module1.js 197 / partNumberQuestions.js 85 | Repeats the G4LF versus G4LFV distinction without a source-backed page-level explanation |

### Recommended actions for the Genesis question set

Recommended actions below are for audit tracking only; none were executed.

- KEEP: only the low-level family recognition statements that remain clearly tied to the official Genesis family document discovery, without deeper technical details.
- ADD SOURCE METADATA: for any question that can be page-supported once the official Genesis PDF is readable and mapped.
- REWRITE: for the suffix-logic questions, mounting/accessory relationship questions, and wire-size questions that currently teach unsupported technical specifics.
- REMOVE: only if a future correction pass confirms the claim is not supported by Edwards pages and the question is not salvageable.
- WAIT FOR SOURCE: for the full set of unsupported G1 suffix, GCS accessory, GOCT, GRSW-10, and candela/flash-rate claims.

No question content was changed in this audit pass, as required.

## Genesis PDF Readability Investigation

### Attempt to Extract Official Edwards PDFs

The following official Edwards Genesis PDFs were located on the official Edwards public website:

| Document | Title | URL Status | Text extraction | Page readability |
|---|---|---|---|---|
| E85001-1052 | Edwards Genesis LED G4LF Series Low Frequency Datasheet | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-0667 | Genesis LED G1 Series Compact Notification Devices | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-1050 | Genesis LED GCS Series Ceiling Mount Strobes and Speaker-Strobes | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-1027 | Genesis LED G4 Wall Mount Mass Notification | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-1051 | Genesis LED Ceiling Mount High Candela Speakers and Speaker-Strobes | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-1025 | Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-0668 | Genesis LED G4 Series Wall Mount Notification Devices | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |
| E85001-0639 | Genesis Low Frequency Audible Signals | ✓ Located at myeddie.edwardsfiresafety.com | ✗ FAILED | PDF PAGE TEXT UNAVAILABLE |

### PDF Extraction Limitation

The official Edwards Genesis PDF documents are stored on the official Edwards public website (myeddie.edwardsfiresafety.com). Standard web content extraction tools cannot reliably extract readable text from these PDFs in the current environment. The PDFs are confirmed to exist at their official Edwards URLs, but their page-level text content is not accessible for verification in this phase.

This is the blocker identified in the Genesis audit: **the official datasheets exist but cannot be read programmatically.**

### Academy Product Database Specifications

The Academy product database (data/edwards/index.js) contains Genesis specifications with source citations to "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf." These specifications include:

#### G4LF (Genesis LED Wall-Mount Low-Frequency Horn)

**Claimed specifications from Academy database:**
- 520 Hz low-frequency audible output
- Selectable high/low dB output
- Selectable temporal/steady horn output where applicable
- 16–33 VDC / 16–33 VFWR operating range
- 12–18 AWG wiring
- Room-side wiring plate relationship

**Verification status:** UNVERIFIED against official Edwards page-level evidence; specifications are documented in Academy product database with source citation to Edwards datasheets, but the datasheets themselves are not readable for confirmation.

#### G4LFV (Genesis LED Wall-Mount Low-Frequency Horn-Strobe)

**Claimed specifications from Academy database:**
- 520 Hz low-frequency audible output
- Selectable 15, 30, 75, or 110 candela for applicable strobe models
- Selectable high/low dB output
- Selectable temporal/steady horn output where applicable
- 16–33 VDC / 16–33 VFWR operating range
- 12–18 AWG wiring
- Room-side wiring plate relationship

**Verification status:** UNVERIFIED against official Edwards page-level evidence; candela values and other function claims are documented in Academy product database, but the source Edwards datasheets are not readable for confirmation.

#### G1A / G1V / G1AV (Genesis LED G1 Compact Notification Devices)

**Academy database citations:** E85001-0667

**Claimed specifications:**
- G1A: compact wall-mount horn family
- G1V: compact wall-mount strobe family
- G1AV: compact wall-mount horn-strobe family
- Suffix interpretation (A=horn, V=strobe, AV=horn-strobe, R=red housing, F=FIRE marking)

**Verification status:** UNVERIFIED against official Edwards page-level evidence; product family identities are discoverable from official document titles, but exact suffix meanings and variant specifications are not readable in the current environment.

#### GCS Family (Genesis LED Ceiling Mount Speakers and Speaker-Strobes)

**Academy database citations:** E85001-1050, E85001-1051, E85001-1025

**Claimed specifications:**
- Ceiling-mounted audible/visual notification devices
- Speaker and speaker-strobe variants
- Selectable candela and flash-rate options

**Verification status:** UNVERIFIED against official Edwards page-level evidence; family identity is confirmed by official document existence, but specific model, candela, and compatibility claims are not readable.

#### GRSW-10 (Room-Side Wiring Plate)

**Academy database claim:**
- Required Genesis room-side wiring plate
- Ordered separately in packs of 10

**Verification status:** UNVERIFIED against official Edwards page-level evidence; the accessory is known to exist from official documentation context, but its exact installation function and packaging are not page-verified.

#### GOCT (4-Inch Octagon Box Adapter Plate)

**Academy database claim:**
- Required 4-inch octagon box adapter plate for G4LF/G4LFV installations

**Verification status:** UNVERIFIED against official Edwards page-level evidence; the accessory is known to exist from official documentation context, but its exact mounting relationship and required usage are not page-verified.

### Resolution Path Blocked

To promote any of the above specifications from UNVERIFIED to VERIFIED or PARTIALLY VERIFIED, the following must be accomplished:

1. **PDF page text extraction** must succeed for at least one of the official Edwards Genesis datasheets (E85001-1052, E85001-0667, E85001-1050, etc.)
2. **Exact page and section identification** must establish which official Edwards page contains the specification
3. **Verbatim or near-verbatim technical facts** from the Edwards source must be linked to the Academy question claims
4. **No inference** may be used to fill gaps between what Edwards states and what the Academy question teaches

Without readable PDF content, all Genesis product technical claims remain in SOURCE NOT FOUND or UNVERIFIED status, even though the official source documents exist and are linked in the Academy product database.

## Files Modified for Genesis Review

Only these two source/research reports were modified:

- [docs/LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md](LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md)
- [docs/EST4_VERIFIED_SOURCE_MATRIX.md](EST4_VERIFIED_SOURCE_MATRIX.md)

No question bank, product data, quiz logic, UI, scoring, randomization, progress tracking, navigation, or category mapping was modified.

## 2. By Source File

| Source file | Reviewed | Verified | Partially verified | Unverified | Contradicted | Source not found / waiting |
|---|---:|---:|---:|---:|---:|---:|
| [questions.js](../data/questions.js) | 0 targeted technical | 0 | 0 | 0 | 0 | 0 |
| [module1.js](../data/module1.js) | 2 | 0 | 0 | 0 | 0 | 2 |
| [module2.js](../data/module2.js) | 16 | 2 | 1 | 0 | 0 | 13 |
| [partNumberQuestions.js](../data/partNumberQuestions.js) | 8 | 0 | 0 | 0 | 0 | 8 |
| [wiringQuestions.js](../data/wiringQuestions.js) | 43 | 0 | 1 | 0 | 0 | 42 |
| [finalBossQuestions.js](../data/finalBossQuestions.js) | 29 | 0 | 0 | 0 | 0 | 29 |
| [accessControlQuestions.js](../data/accessControlQuestions.js) | 0 fire-alarm technical | 0 | 0 | 0 | 0 | 0 |
| [inventoryOrderCheckInQuestions.js](../data/inventoryOrderCheckInQuestions.js) | 0 fire-alarm technical | 0 | 0 | 0 | 0 | 0 |

`WAIT FOR SOURCE` and `SOURCE NOT FOUND` are combined in this summary column. The detailed map distinguishes them.

## 3. Question-Level Verification Map

### module1.js

| Question ID | Source file | Category | Current question text | Technical claim(s) | Classification | Edwards document | Page | Section | Exact supported concept | Recommended action |
|---:|---|---|---|---|---|---|---|---|---|---|
| 2 | module1.js | Fundamentals | Which wiring method continues operating if wire broken...? | Class A return path and single-open behavior | SOURCE NOT FOUND | None in current matrix | None | None | Current source set does not provide the required Class A installation/wiring behavior page | WAIT FOR SOURCE |
| 17 | module1.js | Fundamentals | Which fire alarm wiring class provides return path...? | Class A returns to panel | SOURCE NOT FOUND | None in current matrix | None | None | Same gap; do not substitute general fire-alarm knowledge | WAIT FOR SOURCE |

### module2.js

| Question ID | Source file | Category | Current question text | Technical claim(s) | Classification | Edwards document | Page | Section | Exact supported concept | Recommended action |
|---:|---|---|---|---|---|---|---|---|---|---|
| 21 | module2.js | Detector Technologies | What are the two most common smoke detection technologies? | Photoelectric and ionization are the two most common technologies | SOURCE NOT FOUND | None | None | None | No approved Edwards document in the matrix supports this comparative claim | WAIT FOR SOURCE |
| 22 | module2.js | Detector Technologies | Which smoke detector technology uses a light source and sensor to detect smoke? | Photoelectric sensing principle | SOURCE NOT FOUND | E85001-1001 is collected, page review pending | Pending | Pending | Product identity is available, but the current matrix does not page-verify the sensing explanation | WAIT FOR SOURCE |
| 23 | module2.js | Detector Technologies | Which smoke detector technology contains a small ionization chamber? | Ionization detector construction | SOURCE NOT FOUND | None | None | None | No approved Edwards ionization document was located | WAIT FOR SOURCE |
| 24 | module2.js | Detector Technologies | Do all smoke detectors operate using the same sensing technology? | Smoke technologies differ | SOURCE NOT FOUND | None | None | None | No approved Edwards comparative source | WAIT FOR SOURCE |
| 25 | module2.js | Fundamentals | Can both photoelectric and ionization detectors be used in addressable fire alarm systems? | Both technologies exist in addressable and conventional versions | SOURCE NOT FOUND | None | None | None | No approved Edwards source supports the broad cross-platform claim | WAIT FOR SOURCE |
| 31 | module2.js | Detector Bases | What is the primary purpose of a smoke detector base? | Mounting and electrical connection | SOURCE NOT FOUND | E85001-1004 | pp. 1-2 | Base options | One detector sheet lists base options, but does not establish a universal base-purpose rule | WAIT FOR SOURCE |
| 32 | module2.js | Detector Bases | Can a detector base and detector be separate line items on a BOM? | Base/head may be separate BOM items | SOURCE NOT FOUND | None | None | None | No approved Edwards BOM source | WAIT FOR SOURCE |
| 33 | module2.js | BOM Recognition | If a project includes smoke detectors, what should you verify during a BOM review? | Required detector bases are included | SOURCE NOT FOUND | None | None | None | No approved Edwards BOM or compatibility matrix | WAIT FOR SOURCE |
| 39 | module2.js | BOM Recognition | A customer says they only need replacement detector heads. What is the first thing you should verify? | Existing bases are compatible with replacement heads | SOURCE NOT FOUND | E85001-1004; E85001-0648 | pp. 1-2 | Base options/compatibility | Individual product facts do not establish replacement-head/base compatibility | WAIT FOR SOURCE |
| 45 | module2.js | Applications | A duct smoke detector is primarily associated with which building system? | HVAC duct application | VERIFIED | E85001-2007 | p. 2 | Optica Duct Smoke Detection | Official flyer supports HVAC smoke-detection application | KEEP |
| 101 | module2.js | Edwards Product Library | Which EST4 capability supports remote status access without being tied to one device type? | EST4 on-board webserver remote status access | WAIT FOR SOURCE | E85014-0033 | Pending | EST4 brochure is collected but not page-reviewed in this pass | ADD SOURCE METADATA |
| 104 | module2.js | Edwards Product Library | Which feature pairing is associated with the iO-Series product family? | Electronic addressing and automatic device mapping | WAIT FOR SOURCE | E85001-0135 | Pending | Official iO source page identifies intelligent addressing/mapping, but PDF page mapping remains pending | ADD SOURCE METADATA |
| 106 | module2.js | Edwards Product Library | Which capacity point is associated with the Edge Series entry? | Up to four loops with up to 250 devices per loop | WAIT FOR SOURCE | E85008-0001 | Pending | Official EDGE source page states this capacity, but the matrix requires PDF page mapping | ADD SOURCE METADATA |
| 107 | module2.js | Edwards Product Library | Which answer correctly identifies the Signature Optica smoke/heat/CO variant? | SIGA-OSHCD identity and smoke/heat/CO sensing | VERIFIED | E85001-1004 | p. 1 | Intelligent Multisensor Smoke, Heat, CO Detector | The sheet identifies SIGA-OSHCD and supports its smoke, heat, and CO sensing combination | KEEP |
| 108 | module2.js | Edwards Product Library | How should Sales Support distinguish this Signature Optica model from the smoke/heat/CO variant? | Product differentiation between Optica variants | PARTIALLY VERIFIED | E85001-1002; E85001-1004 | pp. 1-2 | The documents identify different sensing combinations; the complete distinction is not mapped here | REWRITE |
| 109 | module2.js | Edwards Product Library | Which Edwards family includes the Intelligent CO Detector? | SIGA-COD belongs to Signature family | WAIT FOR SOURCE | E85001-0648 | pp. 1-2 | Official sheet identifies the Intelligent CO Detector and Signature Loop Controller compatibility | ADD SOURCE METADATA |

### partNumberQuestions.js

| Question ID | Source file | Category | Current question text | Technical claim(s) | Classification | Edwards document | Page | Section | Exact supported concept | Recommended action |
|---:|---|---|---|---|---|---|---|---|---|---|
| 10 | partNumberQuestions.js | Part Number | Project requires wall-mount notification from Genesis LED... | G4 is wall-mount notification family | WAIT FOR SOURCE | E85001-0668 | Pending | Genesis LED G4 Series | Official document is identified but not page-reviewed | WAIT FOR SOURCE |
| 11 | partNumberQuestions.js | Part Number | Project requires ceiling-mount speakers/speaker-strobes... | GCS is ceiling speaker/speaker-strobe family | WAIT FOR SOURCE | E85001-1025 | Pending | Genesis LED GCS Series | Official document is identified but not page-reviewed | WAIT FOR SOURCE |
| 14 | partNumberQuestions.js | Part Number | Project requires low-frequency notification appliances... | G4LF is low-frequency family | WAIT FOR SOURCE | E85001-0639 | Pending | Genesis low-frequency audible signals | Official document is not in the verified baseline and page mapping is absent | WAIT FOR SOURCE |
| 17 | partNumberQuestions.js | Part Number | SIGA-OSD identified as...? | SIGA-OSD is smoke-only Optica detector | WAIT FOR SOURCE | E85001-1001 | Pending | Signature Optica Smoke Detector | Product sheet is collected but not page-reviewed | WAIT FOR SOURCE |
| 18 | partNumberQuestions.js | Part Number | SIGA-OSHCD detects...? | SIGA-OSHCD detects smoke, heat, and CO | WAIT FOR SOURCE | E85001-1004 | Pending | Signature Optica Smoke Heat and CO Detector | Product sheet is collected but not page-reviewed for this report | WAIT FOR SOURCE |
| 36 | partNumberQuestions.js | Part Number | Project calls for ordinary wall-mount horn-strobes... | G1/G4 series distinction and selection | SOURCE NOT FOUND | None | None | None | Current source matrix does not include the required exact product relationship | WAIT FOR SOURCE |

### wiringQuestions.js

| Question IDs | Category / subject | Current claim set | Classification | Edwards document / page | Exact supported concept | Recommended action |
|---|---|---|---|---|---|---|
| 3, 5, 6, 7, 8 | Wiring; SLC/NAC | SLC communicates with addressable devices; NAC powers notification appliances; NAC means Notification Appliance Circuit | SOURCE NOT FOUND | None for these exact wiring rules | Current EST4 catalog facts do not establish generic SLC/NAC field wiring behavior | WAIT FOR SOURCE |
| 11, 13 | Wiring; wire gauge | AWG size and 18/2 notation | SOURCE NOT FOUND | None | No official Edwards wire requirement page in matrix | WAIT FOR SOURCE |
| 15 | Wiring; Class A/B | Class A return path and single-open behavior | SOURCE NOT FOUND | None | No approved page for this wiring behavior | WAIT FOR SOURCE |
| 17-21 | Wiring; monitor/control/HVAC | Monitor input, control output, duct alarm input, HVAC shutdown mapping | SOURCE NOT FOUND | E85001-2007 p. 2 supports HVAC duct smoke application only | Duct application is supported, module terminal/control mapping is not | WAIT FOR SOURCE |
| 22 | Wiring; SIGA-CC1 | SIGA-CC1 is Single Input Signal Module | SOURCE NOT FOUND | None in current matrix | Product sheet is not among page-verified matrix facts | WAIT FOR SOURCE |
| 23 | Wiring; SIGA-CT1 | SIGA-CT1 is Single Input Module | SOURCE NOT FOUND | None in current matrix | No page-verified CT1 source in matrix | WAIT FOR SOURCE |
| 24 | Wiring; SIGA-CT2 | SIGA-CT2 is Dual Input Module | SOURCE NOT FOUND | None in current matrix | No page-verified CT2 source in matrix | WAIT FOR SOURCE |
| 25-29 | Wiring; relay contacts | NO, NC, COM, Form C, SIGA-CR auxiliary control | SOURCE NOT FOUND | None | General relay concepts and product-specific behavior lack approved Edwards pages | WAIT FOR SOURCE |
| 30-33 | Wiring; isolators | SIGA-IM2 and distributed isolation limit short-circuit loss | SOURCE NOT FOUND | None | No page-verified SIGA-IM2 or isolator wiring document in current matrix | WAIT FOR SOURCE |
| 34, 37-39, 42-45 | Wiring; duct/HVAC/interfaces | Duct detector application, HVAC shutdown, door holders, tamper state | SOURCE NOT FOUND | E85001-2007 p. 2 only supports HVAC duct smoke application | Application fragment only; wiring and sequence claims remain unsupported | WAIT FOR SOURCE |
| 46-51 | Troubleshooting | SLC/NAC/input/HVAC troubleshooting order and fault effects | SOURCE NOT FOUND | None | Matrix expressly says complete troubleshooting and diagnostic procedures are unavailable | WAIT FOR SOURCE |
| 52 | Wiring; SIGA-DDOS | RELAY_NC, RELAY_C, RELAY_NO are auxiliary relay terminals | SOURCE NOT FOUND | None | No official SIGA-DDOS wiring sheet in matrix | WAIT FOR SOURCE |
| 53-58 | Genesis wiring/accessories | G4LF wire size, GOCT adapter, G4LF/G4LFV function, G1 functions, GRSW-10 packaging | SOURCE NOT FOUND | None | No page-verified Genesis wiring, mounting, accessory, or package source | WAIT FOR SOURCE |

### finalBossQuestions.js

| Question IDs | Category / subject | Current claim set | Classification | Edwards document / page | Exact supported concept | Recommended action |
|---|---|---|---|---|---|---|
| fbq_001, fbq_015, fbq_017, fbq_019, fbq_020, fbq_021, fbq_022, fbq_024, fbq_027 | Signature modules/accessories | CT1, CT2, CC1, CC2, CR/CRR, LED, SB4/IB4 identities and relationships | WAIT FOR SOURCE | No page mapping for these documents in current matrix | Existing explanations are not evidence; several claims require exact product sheets | WAIT FOR SOURCE |
| fbq_003, fbq_011, fbq_029, fbq_036 | Genesis product families | GCS ceiling, G4 wall, G4LF low-frequency | WAIT FOR SOURCE | E85001-0668, E85001-1025, E85001-0639; pages pending | Product identities are collected/known only from unreviewed candidate documents | WAIT FOR SOURCE |
| fbq_004, fbq_010, fbq_027, fbq_035 | Detector bases | Audible base, standard/isolator base, separate BOM base, compatibility | PARTIALLY VERIFIED | E85001-1004 pp. 1-2 | OSHCD sheet lists base options; it does not establish all listed base identities or replacement compatibility | REWRITE |
| fbq_005, fbq_008, fbq_013, fbq_030 | Signature detector technology | OSD smoke-only, OSHCD smoke/heat/CO, COD CO-only, category differentiation | PARTIALLY VERIFIED | E85001-0648 pp. 1-2; E85001-1002 p. 1; E85001-1004 pp. 1-2 | Baseline supports COD/OSCD/OSHCD sensing concepts, but exact question-specific part-number mappings need controlled page mapping | REWRITE |
| fbq_007, fbq_014, fbq_033, fbq_037, fbq_039, fbq_046, fbq_047, fbq_055, fbq_063, fbq_064, fbq_065-071 | Wiring, relays, SLC/NAC, Class A/B, troubleshooting | Circuit topology, module behavior, relay behavior, troubleshooting order | SOURCE NOT FOUND | None for exact claims | Current matrix does not provide wiring or troubleshooting manuals | WAIT FOR SOURCE |
| fbq_009, fbq_016, fbq_034 | Manual stations | Double-action/single-action station application and part-number identity | WAIT FOR SOURCE | E85001-0303 and related sheets are candidate documents; pages pending | Product documents are identified but not page-reviewed | WAIT FOR SOURCE |
| fbq_029 | Genesis series pairing | G4 wall notification and GCS ceiling speaker-strobes | DUPLICATE/OVERLAP | E85001-0668; E85001-1025; pages pending | Same family distinction is already represented by part-number questions 10 and 11 | KEEP |

### questions.js, accessControlQuestions.js, inventoryOrderCheckInQuestions.js

No targeted fire-alarm technical questions from these files were included in the 98-question verification subset. Access-control and inventory/check-in content is outside the Edwards fire-alarm source scope. No edits are recommended in this phase.

## 4. Product Conflicts

The following conflicts or integrity risks were found in the reviewed question claims. They are recorded, not corrected.

| Product/claim | Conflict or risk | Classification | Recommended action |
|---|---|---|---|
| Detector/base combinations | Questions generalize from base listings or Academy BOM practice to universal compatibility or replacement-head compatibility. | PARTIALLY VERIFIED / SOURCE NOT FOUND | REWRITE or WAIT FOR SOURCE |
| SIGA-CC1, SIGA-CT1, SIGA-CC2, SIGA-CT2 | Academy explanations assert exact module functions, but those product sheets are not page-verified in the current matrix. | WAIT FOR SOURCE | WAIT FOR SOURCE |
| SIGA-CR, SIGA-CRR, SIGA-UM, SIGA-UM2, SIGA-CC1S | Exact relay, universal-module, or product-family claims lack page-level source mapping in the current matrix. | SOURCE NOT FOUND | WAIT FOR SOURCE |
| SIGA-DDOS | Exact auxiliary relay terminal names are unsupported by the current official source set. | SOURCE NOT FOUND | WAIT FOR SOURCE |
| Genesis/GCS | Family, wire size, mounting, accessory, flash, candela, and package claims lack page-verified Edwards evidence. | SOURCE NOT FOUND | WAIT FOR SOURCE |
| iO | The official page distinguishes iO64 one Class B loop/64 addresses from iO1000 expansion up to 1,000 addresses; questions must not generalize capacities across models. | WAIT FOR SOURCE | ADD SOURCE METADATA only after page review |
| EDGE | The official page describes up to four loops and 250 devices per loop, but the datasheet remains page-review-pending. | WAIT FOR SOURCE | ADD SOURCE METADATA only after page review |
| EST4 | Webserver, networking, compatibility, exact capacities, installation, operation, programming, and fault/troubleshooting claims require specific document/page mapping; catalog facts do not validate all older claims. | WAIT FOR SOURCE | WAIT FOR SOURCE |

No direct official contradiction was established for a question wording from the current page-verified matrix. Product-integrity risks are recorded as `WAIT FOR SOURCE`, `PARTIALLY VERIFIED`, or `SOURCE NOT FOUND` until an official Edwards page establishes the conflict.

## 5. Questions That Should Remain Untouched

No question is approved for a content correction in this pass. The following major families should remain untouched until the next controlled pass has page-mapped the relevant official documents:

- EST4 network, CPU, display, audio, power, and cabinet questions that match the existing page-verified E85014/E85010 facts.
- SIGA-OSCD optical/CO independence, SIGA-COD electrochemical sensing and documented Signature Loop Controller compatibility, and SIGA-OSHCD sensing/base-option questions, subject to exact page mapping.
- Optica duct HVAC application questions limited to the concept supported by E85001-2007 page 2.
- Repeated SLC/NAC, Class A/B, isolator, relay, Genesis, and troubleshooting questions should not be broadly rewritten; they need source resolution first.

## 6. Source Gaps Remaining

- EST4 installation procedures, operation procedures, programming procedures, fault-code tables, troubleshooting workflows, component replacement, and safe electrical diagnostics.
- Dedicated Signature Loop Controller specifications and wiring documentation.
- Detector/base compatibility matrix and replacement-head/base compatibility rules.
- SIGA-DDOS installation and terminal wiring documentation.
- Page-reviewed official iO and EDGE catalog/submittal documents.
- Page-reviewed official photoelectric and ionization documentation, especially comparative technology claims.
- Page-reviewed beam, explosionproof, rate-compensation, conventional smoke/heat, and hazardous-location device sheets.
- Page-reviewed Genesis/GCS documents for candela, flash rate, wiring, mounting, accessory compatibility, speaker/strobe relationships, and package quantities.
- Page-reviewed SLC, NAC, Class A/B, module-terminal, relay, isolator, and device-communication wiring documents.
- Official diagnostic references for troubleshooting claims.

## 7. Company-Sensitivity Result

No pricing, margins, costs, labor, freight, supplier information, customer information, internal inventory values, lead times, availability commitments, or proprietary Ban-Koe procedures were introduced into this report.

## 8. Files Modified

Created only:

- [docs/LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md](LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md)

Question banks, product data, quiz logic, UI, scoring, randomization, progress tracking, navigation, and category mappings were not modified.

## 9. Runtime

No runtime audit was run because no content or runtime behavior was modified.

No runtime behavior changed.

## Final Rule Confirmation

This is a verification map only. Do not correct, delete, rewrite, or add questions until a separate controlled correction pass uses this report and maps each changed question to an official Edwards document and page.

## Superseding Genesis page-level evidence audit

Review date: 2026-08-20

This section supersedes the earlier Genesis entries that were based only on document discovery. The nine official Edwards PDFs in `_sources/edwards/genesis/` were inspected page by page using their embedded page text. No Academy product record, theoretical suffix pattern, third-party description, or question-bank wording was used as evidence. No question content was changed.

### Final Genesis totals

| Primary result | Count |
|---|---:|
| Genesis questions reviewed | 37 |
| Fully verified | 22 |
| Partially verified | 11 |
| Unverified | 0 |
| Contradicted | 0 |
| Duplicate/overlap | 4 |

The four duplicate/overlap items are counted separately from the 33 substantive classifications: `partNumberQuestions.js` 10, `partNumberQuestions.js` 11, `wiringQuestions.js` 56, and `finalBossQuestions.js` `fbq_029`. No official Edwards contradiction was found. `G1CSVWF` and `G1CSVRF` were searched across all nine PDFs, did not occur, and remain `UNVERIFIED - DO NOT USE AS TRAINING FACT`; neither identifier appears in the reviewed question set.

### Question-by-question results

| Question ID | File | Part number(s) | Classification | Edwards evidence | Unsupported claim or issue | Recommended action |
|---|---|---|---|---|---|---|
| 197 | module1.js | G4LF/G4LFV | VERIFIED | E85001-1052 pp. 1, 5; Overview and Model Number Syntax explicitly distinguish low-frequency horns and horn-strobes. | None material in the question, choices, or explanation. | KEEP |
| 198 | module1.js | G4LF/G4LFV | PARTIALLY VERIFIED | E85001-1052 pp. 1-2; Overview and Audible Signal Application explicitly state 520 Hz. | Distractor frequencies 250 Hz, 1,000 Hz, and 60 Hz are not independently documented as Genesis alternatives. | REWRITE |
| 199 | module1.js | GOCT | VERIFIED | E85001-1052 pp. 2, 5; Installation and Accessories explicitly state GOCT is required for a 4-inch octagon box. | No material unsupported claim found. | KEEP |
| 200 | module1.js | GRSW-10 | VERIFIED | E85001-1052 pp. 2, 5-6; Installation, Accessories, and Specifications identify the required room-side plate and 10-pack. | No material unsupported claim found. | KEEP |
| 201 | module1.js | G4LF | PARTIALLY VERIFIED | E85001-1052 pp. 1, 6; Standard Features and Specifications state 12 to 18 AWG. | Alternative wire ranges are not Edwards-supported Genesis ranges. | REWRITE |
| 202 | module1.js | G4LFV/GRSW-10/GOCT | VERIFIED | E85001-1052 pp. 2, 5; Installation and Accessories support the appliance, required plate, and octagon adapter relationship. | The negative choices are contradicted by the required accessory relationship or identify documented but different accessories. | KEEP |
| 203 | module1.js | G1A | VERIFIED | E85001-0667 p. 5; Model Number Syntax states `A = Horn only`; G1 is wall-mount appliances. | No material unsupported claim found. | KEEP |
| 204 | module1.js | G1V | VERIFIED | E85001-0667 p. 5; Model Number Syntax states `V = Strobe only`. | No material unsupported claim found. | KEEP |
| 205 | module1.js | G1AV | VERIFIED | E85001-0667 p. 5; Model Number Syntax states `AV = Horn-Strobe`. | No material unsupported claim found. | KEEP |
| 206 | module1.js | G1AVRF | VERIFIED | E85001-0667 p. 5; the syntax defines AV, R, and F, and the color table lists G1AVRF as Red FIRE. | No material unsupported claim found. | KEEP |
| 207 | module1.js | G1AVRF | VERIFIED | E85001-0667 p. 5; G1AVRF is explicitly listed as Red FIRE horn-strobe. Quantity 7 is supplied by the scenario. | No manufacturer quantity claim is made; the quantity is a question scenario. | KEEP |
| 113 | module2.js | G4 | PARTIALLY VERIFIED | E85001-0668 pp. 3-4; Field Configuration and Specifications state selectable candela and approximately 1 fps flash rate. | Correct Genesis configuration claim is supported, but detector-map, CPU-frequency, and ground-fault-module distractor claims are not established by these PDFs. | REWRITE |
| 114 | module2.js | G1 Series | PARTIALLY VERIFIED | E85001-0667 p. 1; title and Overview identify Compact Notification Devices. | The detector, network-gateway, and detector-base distractor claims are not established by the G1 sheet. | REWRITE |
| 115 | module2.js | G4LF | PARTIALLY VERIFIED | E85001-1052 pp. 1-2; Overview and Audible Signal Application identify 520 Hz sleeping-area low-frequency notification. | “Controlled by panel output logic” is broader than the mapped Edwards wording; unrelated SLC, relay, and EST3X distractors are unsupported. | REWRITE |
| 116 | module2.js | GCS | PARTIALLY VERIFIED | E85001-1025 pp. 1-2; Overview and Application identify ceiling speakers and speaker-strobes. | “Driven by configured system logic” and the unrelated isolator, detector, and networking distractor claims are not established by the GCS sheet. | REWRITE |
| 10 | partNumberQuestions.js | G4 | DUPLICATE/OVERLAP | E85001-0668 pp. 1-2 explicitly identifies G4 wall-mount notification appliances. | Substantively supported, but repeats the G4 side of `fbq_029`. | KEEP |
| 11 | partNumberQuestions.js | GCS | DUPLICATE/OVERLAP | E85001-1025 pp. 1-2 explicitly identifies GCS ceiling speakers and speaker-strobes. | Substantively supported, but repeats the GCS side of `fbq_029`. | KEEP |
| 14 | partNumberQuestions.js | G4LF | VERIFIED | E85001-1052 pp. 1-2 and 5; low-frequency family and `LF = Low Frequency Horn only` are explicit. | No material unsupported claim found. | KEEP |
| 84 | partNumberQuestions.js | G4LFVRF | VERIFIED | E85001-1052 p. 5; syntax explicitly defines G4 wall appliance, LFV horn-strobe, R red, and F FIRE. | No material unsupported claim found. | KEEP |
| 85 | partNumberQuestions.js | G4LF/G4LFV | VERIFIED | E85001-1052 pp. 1, 5; title, Overview, and syntax distinguish horn and horn-strobe. | No material unsupported claim found. | KEEP |
| 86 | partNumberQuestions.js | GRSW-10 | VERIFIED | E85001-1052 pp. 2, 5-6; room-side plate and 10-pack are explicit. | No material unsupported claim found. | KEEP |
| 87 | partNumberQuestions.js | F-FR | VERIFIED | E85001-0667 p. 5; syntax explicitly defines F-FR as FEU/FIRE and lists the marking options. | No material unsupported claim found. | KEEP |
| 88 | partNumberQuestions.js | G1AVRF | VERIFIED | E85001-0667 p. 5; G1AVRF is explicitly Red FIRE and AV is horn-strobe. | No material unsupported claim found. | KEEP |
| 89 | partNumberQuestions.js | G1 AV | VERIFIED | E85001-0667 p. 5; AV is explicitly Horn-Strobe. | No material unsupported claim found. | KEEP |
| 90 | partNumberQuestions.js | G1 R | VERIFIED | E85001-0667 p. 5; R is explicitly Red and W is White. | No material unsupported claim found. | KEEP |
| 91 | partNumberQuestions.js | G1 N | VERIFIED | E85001-0667 p. 5; N is explicitly None and the other marking codes are listed. | No material unsupported claim found. | KEEP |
| 92 | partNumberQuestions.js | G1TR/G1AVRF/G1ARF/G1VRF | VERIFIED | E85001-0667 p. 5; Accessories lists G1TR and the appliance table lists the three appliance variants. | No material unsupported claim found. | KEEP |
| 53 | wiringQuestions.js | G4LF | PARTIALLY VERIFIED | E85001-1052 pp. 1, 6; 12 to 18 AWG is explicit. | Alternative wire ranges are not independently supported by the Genesis documents. | REWRITE |
| 54 | wiringQuestions.js | GRSW-10 | VERIFIED | E85001-1052 pp. 2, 5-6; required room-side plate and 10-pack are explicit. | No material unsupported claim found. | KEEP |
| 55 | wiringQuestions.js | GOCT | PARTIALLY VERIFIED | E85001-1052 pp. 2, 5; GOCT requirement and 4-inch octagon relationship are explicit. | `GRT-10 per appliance` is unsupported; the sheet instead lists GRT-10 as a 10-pack. Other unrelated distractors are not established. | REWRITE |
| 56 | wiringQuestions.js | G4LF/G4LFV | DUPLICATE/OVERLAP | E85001-1052 pp. 1, 5 explicitly distinguishes the two functions. | Substantively supported, but repeats question 197 and part-number question 85. | KEEP |
| 57 | wiringQuestions.js | G1A/G1V/G1AV | VERIFIED | E85001-0667 p. 5; A, V, and AV functions are explicit. | No material unsupported claim found. | KEEP |
| 58 | wiringQuestions.js | G1AVRF | VERIFIED | E85001-0667 p. 5; G1AVRF is Red FIRE and AV is Horn-Strobe. | No material unsupported claim found. | KEEP |
| fbq_003 | finalBossQuestions.js | GCS | PARTIALLY VERIFIED | E85001-1025 pp. 1-2; GCS ceiling speaker/speaker-strobe category is explicit. | “Low-frequency signaling family” and “compact detector accessory family” distractor descriptions are not established by the GCS sheet. | REWRITE |
| fbq_011 | finalBossQuestions.js | G4LF | PARTIALLY VERIFIED | E85001-1052 pp. 1-2; G4LF is an official low-frequency family. | “Investigate” is a reasonable selection direction, but the distractor product behavior claims are not independently supported by the cited sheet. | REWRITE |
| fbq_029 | finalBossQuestions.js | G4/GCS | DUPLICATE/OVERLAP | E85001-0668 pp. 1-2 and E85001-1025 pp. 1-2 support the separate wall and ceiling categories. | Repeats part-number questions 10 and 11. | KEEP |
| fbq_036 | finalBossQuestions.js | G4LF | PARTIALLY VERIFIED | E85001-1052 pp. 1-2 explicitly link G4LF to low-frequency sleeping-area notification. | The phrase “most appropriate” is a design-selection conclusion broader than the source statement; unrelated distractor product claims are unsupported. | REWRITE |

### Unsupported answer choices

These are flagged independently of the supported correct answers, as required by the audit rule:

| Question IDs | Unsupported answer-choice claims |
|---|---|
| 198 | 250 Hz, 1,000 Hz, and 60 Hz as alternative Genesis low-frequency values |
| 113, 165, 178 | Detector address-map upload, panel CPU frequency, ground-fault module isolation, SLC-only addressing, CO/heat thresholds, and CPU memory claims |
| 114, 179 | Intelligent detector, control relay, network firewall/gateway, and detector-base interpretations of G1 |
| 115, 180 | SLC-loop, control-relay, EST3X-node, panel-CPU, and monitor-module interpretations of G4LF |
| 116, 166, 181 | Loop isolation, detector-only, panel-networking, and configured-system-logic claims not stated in the GCS sheets |
| 201, 53 | Alternative wire-size ranges 20-24, 6-8, and 2-4 AWG |
| 55 | GRT-10 ordered per appliance; the official sheet documents a 10-pack instead |
| fbq_003, fbq_011, fbq_036 | Unmapped claims about detector accessories, monitor modules, universal G4 behavior, and GCS/G4LF product behavior |

### Unsupported explanations

The following explanation claims require correction or narrower wording in a later controlled pass even though their associated correct answers are supported:

- `module2.js` 113: “The Genesis library language includes configurable candela and flash-rate options” is supported for G4 by E85001-0668 pp. 3-4, but the explanation should cite the document rather than the Academy library.
- `module1.js` 115 and `module2.js` 115: “controlled by panel output logic” is not the exact mapped wording in E85001-1052; the page supports notification appliance circuits and low-frequency application.
- `module1.js` 181 and `module2.js` 116: “configured system logic” is not stated in the mapped E85001-1025 application text.
- `wiringQuestions.js` 55: the GOCT relationship is supported, but the explanation should not imply GRT-10 is per appliance anywhere in the surrounding choice set; E85001-1052 p. 5 lists GRT-10 as a 10-pack.
- `finalBossQuestions.js` `fbq_011` and `fbq_036`: the Edwards pages support the G4LF low-frequency family and sleeping-area application, not an unrestricted project-selection rule.

### Product naming and suffix findings

- E85001-0667 page 5 explicitly defines `G1 = Wall mount appliances`, `A = Horn only`, `V = Strobe only`, `AV = Horn-Strobe`, `R = Red`, `W = White`, `N = None`, `F = FIRE`, `F-FR = FEU/FIRE`, `F-SP = FUEGO`, and `A = ALERT`.
- E85001-0667 page 5 explicitly lists `G1ARF`, `G1VRF`, and `G1AVRF` as Red FIRE appliance variants.
- E85001-1052 page 5 explicitly defines `G4 = Wall mount appliances`, `LF = Low Frequency Horn only`, and `LFV = Low Frequency Horn-Strobe`; it lists `G4LFVRF` as Red FIRE.
- `G1CSVWF` and `G1CSVRF` were absent from all nine official PDFs. They remain unverified and must not be inferred from G1 or GCS syntax.
- E85001-1025 page 5 uses GCS-family identifiers such as `GCSVWF` and `GCSVRF`; that does not establish either `G1CSVWF` or `G1CSVRF`.

### Remaining evidence gaps

- No Genesis question in this reviewed set has an Edwards contradiction.
- Questions classified `PARTIALLY VERIFIED` need narrower wording or source metadata because unsupported distractors or explanation additions remain.
- GCS candela values differ by document family: E85001-1025 documents 15/30/75/115 cd, while E85001-1051 documents 135/150/177/185 cd. No existing Genesis question was promoted using an unsupported cross-family candela value.
- E85001-1050 and E85001-1027 support additional GCS/G4 mass-notification variants and lens values, but those details are not needed to verify the 37-question set beyond the mapped family claims.
- This audit does not approve any correction. The listed actions are recommendations only and must be executed, if at all, in a separate controlled content pass.

### Company-sensitivity result

No pricing, cost, margin, labor, freight, supplier, customer, inventory-value, availability, lead-time, or customer-specific project information was introduced.

## Genesis evidence-based cleanup applied

Cleanup date: 2026-08-20

The recommendations above were applied using only the page-level Edwards evidence in this report and the source matrix. No new technical claims were introduced, and no quiz-engine, scoring, randomization, navigation, UI, pool-construction, or runtime-audit logic was changed.

### Questions retained

The following audited content remains in the banks because its technical claims are explicitly supported, with source metadata added where the object format supports it:

- `module1.js`: 197, 199-207
- `partNumberQuestions.js`: 14, 84-92
- `wiringQuestions.js`: 54, 57-58

Primary sources are E85001-1052 pages 1-2 and 5-6 for G4LF/G4LFV, GOCT, and GRSW-10, and E85001-0667 page 5 for G1 functions, suffixes, markings, variants, and G1TR.

### Questions rewritten

| IDs | File | Change | Edwards support |
|---|---|---|---|
| 165, 178 | module1.js | Replaced unsupported distractors and library-only explanation wording with documented G4 candela/flash, voltage/wiring, trim, and box facts. | E85001-0668 pp. 3-5, Field Configuration; Specifications; Accessories |
| 166, 181 | module1.js | Replaced detector/module/panel claims and “configured system logic” wording with documented GCS, G4, G4LF, and G1 family categories. | E85001-1025 pp. 1-2; E85001-0668 pp. 1-2; E85001-1052 pp. 1-2; E85001-0667 p. 1 |
| 179 | module1.js | Replaced unsupported detector, relay, and firewall distractors with documented Genesis family categories. | E85001-0667 p. 1; E85001-0668 pp. 1-2; E85001-1052 pp. 1-2; E85001-1025 pp. 1-2 |
| 180 | module1.js | Replaced unsupported SLC, CPU, and module claims with documented Genesis application categories. | E85001-1052 pp. 1-2; E85001-0668 pp. 1-2; E85001-1025 pp. 1-2; E85001-0667 p. 1 |
| 198, 201 | module1.js | Replaced unsupported frequency and wire-range distractors with documented specifications. | E85001-1052 pp. 1-2, 6 |
| 113 | module2.js | Replaced unsupported system-setting distractors and library-only explanation with G4 documented configuration facts. | E85001-0668 pp. 3-4 |
| 114 | module2.js | Replaced unsupported detector/gateway/base claims with documented Genesis family categories. | E85001-0667 p. 1; E85001-0668 pp. 1-2; E85001-1052 pp. 1-2; E85001-1025 pp. 1-2 |
| 115 | module2.js | Replaced unsupported SLC/relay/EST3X claims and panel-logic wording with the documented 520 Hz sleeping-area application. | E85001-1052 pp. 1-2 |
| 116 | module2.js | Replaced unsupported isolator/detector/networking claims and configured-logic wording with documented family categories. | E85001-1025 pp. 1-2; E85001-0668 pp. 1-2; E85001-1052 pp. 1-2; E85001-0667 p. 1 |
| 53 | wiringQuestions.js | Replaced unsupported wire-size distractors with documented Genesis specifications. | E85001-1052 pp. 1, 6 |
| 55 | wiringQuestions.js | Removed the unsupported “GRT-10 per appliance” distractor and retained the documented GOCT mounting relationship. | E85001-1052 pp. 2, 5 |
| 57-58 | wiringQuestions.js | Retained the supported G1 function and G1AVRF claims and added E85001-0667 metadata. | E85001-0667 p. 5 |
| fbq_003 | finalBossQuestions.js | Replaced unsupported detector-accessory and generic low-frequency distractors with documented Genesis family choices. | E85001-1025 pp. 1-2; E85001-1052 pp. 1-2; E85001-0667 p. 1 |
| fbq_011 | finalBossQuestions.js | Reframed the selection heuristic as a documented G4LF family match and replaced unsupported behavior distractors. | E85001-1052 pp. 1-2 |
| fbq_029 | finalBossQuestions.js | Retained the distinct combined wall-versus-ceiling learning objective and replaced unsupported/reversed distractor claims with documented family combinations. | E85001-0668 pp. 1-2; E85001-1025 pp. 1-2 |
| fbq_036 | finalBossQuestions.js | Reframed “most appropriate” as the explicit G4LF sleeping-area application and replaced unsupported distractors. | E85001-1052 pp. 1-2 |

The G4LF/G4LFV, GRSW-10, GOCT, G1 suffix, G1 variant, and GCS retained questions also received source metadata using the same page mappings. No GCS candela range was added to any question; E85001-1025 and E85001-1051 remain separate source families.

### Questions removed

| ID | File | Reason |
|---|---|---|
| 10 | partNumberQuestions.js | Redundant direct G4 family question; retained `fbq_029` as the broader wall-versus-ceiling application item. |
| 11 | partNumberQuestions.js | Redundant direct GCS family question; retained `fbq_029` as the broader wall-versus-ceiling application item. |
| 56 | wiringQuestions.js | Redundant G4LF/G4LFV distinction already covered by module1 197 and partNumberQuestions.js 85. |

No question was removed because of a contradicted Edwards claim. Removals were limited to duplicate/overlap cleanup.

### Post-cleanup evidence status

The cleaned Genesis questions no longer contain the previously flagged unsupported distractors or explanation additions. No remaining partially verified Genesis question was intentionally retained. `G1CSVWF` and `G1CSVRF` remain absent from the scored question banks and remain unverified outside the banks.

### Cleanup validation results

- Browser runtime audit: **PASS - ALL RUNTIME CHECKS PASSED**.
- Runtime duplicate question text: `0`.
- Invalid question objects: `0`.
- Duplicate answer choices: `0`.
- Invalid correct-answer references: `0`.
- Missing explanations: `0`.
- Randomization failures: `0`.
- Scoring failures: `0`.
- Browser product-integrity result: verified facts present; HPR and unverified products absent from loaded scored data.
- Repository product-integrity script: executed with a process-scoped PowerShell policy bypass; its tracked-part inventory showed no Genesis integrity failure. Existing duplicate Signature records reported by that broad script are outside this Genesis cleanup and were not modified.
- Focused Genesis product-record check: 21 Genesis model records checked across `data/products.js` and `data/edwards/index.js`; `0` duplicate Genesis model records found.
- Focused scored-bank scan: no `G1CSVWF`, `G1CSVRF`, or audited stale unsupported Genesis claim strings remain.

The Genesis question set is not declared universally verified beyond the audited and cleaned scope. Any future Genesis content must still be mapped to an explicit Edwards document page before being added or promoted.
