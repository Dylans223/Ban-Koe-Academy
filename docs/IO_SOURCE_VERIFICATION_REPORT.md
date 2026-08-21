# iO Series Source Verification Report

Research date: 2026-08-21

## Scope and controls

This is an evidence-collection and question-classification phase only. No scored question content, product data, quiz logic, runtime audit, UI, navigation, scoring, randomization, or progress tracking was modified. The private source directory is `io/` and is excluded by `.gitignore`.

Manufacturer scope: official Edwards sources only. Product identifiers were searched before document numbers. Existing Academy question wording and product-library descriptions were not treated as technical evidence.

## Scored-question inventory

The six requested scored banks contain 12 iO-related question records or distractor references across 2 files. Eight are direct iO questions; four are iO references used only as distractors in otherwise EST4 questions.

| File | ID | Category | iO identifier/reference | Question text | Claim summary | Classification |
|---|---:|---|---|---|---|---|
| `data/module1.js` | 156 | Edwards Product Library | iO Series | Which iO Series capability helps automatically organize connected devices? | Automatic device mapping | PARTIALLY VERIFIED |
| `data/module1.js` | 171 | Edwards Product Library | iO Series | Which pair of iO Series features is associated with the product family? | Automatic device mapping and optional Ethernet connectivity | PARTIALLY VERIFIED |
| `data/module1.js` | 188 | Applications | iO Series | For an appropriately small building project, which Edwards platform family should be considered as an alternative to automatically selecting an EST4? | iO positioning and platform-selection application | PARTIALLY VERIFIED |
| `data/module1.js` | 190 | Edwards Product Library | iO64 | What is the maximum device capacity of an Edwards iO64? | 64-device capacity | PARTIALLY VERIFIED |
| `data/module1.js` | 191 | Edwards Product Library | iO64 | Can the device capacity of an iO64 be expanded? | Fixed/non-expandable capacity | UNVERIFIED |
| `data/module1.js` | 192 | Applications | iO64, iO1000 | A small building has 48 addressable devices. Which Edwards platform should be considered based on the iO Series product family? | Project-specific platform selection from device count | PARTIALLY VERIFIED |
| `data/module1.js` | 193 | Edwards Product Library | iO64, iO1000 | Which statement best describes the difference between iO64 and iO1000? | Fixed 64-device iO64 versus expandable iO1000 up to 1,000 addresses | PARTIALLY VERIFIED |
| `data/module1.js` | 208 | Fundamentals, distractor only | iO64 | A standalone iO64 with no network components | iO reference used as an EST4 network-component distractor | UNVERIFIED distractor claim |
| `data/module1.js` | 211 | Fundamentals, distractor only | iO Series panel | An iO Series panel | iO reference used as an EST4 migration distractor | UNVERIFIED distractor claim |
| `data/module1.js` | 214 | Estimator, distractor only | iO64 | That the project is changed to an iO64 automatically | iO reference used as an EST4 audio-scope distractor | UNVERIFIED distractor claim |
| `data/module1.js` | 217 | Scenario, distractor only | iO Series panel | An iO Series panel is a documented replacement for every EST4 network and audio arrangement | Unsupported universal replacement/compatibility claim in a distractor | CONTRADICTED by the evidence boundary; do not infer compatibility |
| `data/module2.js` | 104 | Edwards Product Library | iO Series | Which feature pairing is associated with the iO-Series product family? | Electronic addressing and automatic device mapping | PARTIALLY VERIFIED |

No iO-related scored question was found in `questions.js`, `partNumberQuestions.js`, `wiringQuestions.js`, or `finalBossQuestions.js` using the identifier and phrase inventory described above. No scored occurrence was found for `iO64G`, `iO64R`, `iO1000G`, `iO1000R`, `iO-SDC1`, `SA-ETH`, or `SA-DACT`.

## Product and identifier inventory

Identifiers searched: `iO64`, `iO64G`, `iO64R`, `iO1000`, `iO1000G`, `iO1000R`, `iO-SDC1`, `SA-ETH`, `SA-DACT`, `iO Series`, `iO-Series`, `iO panel`, `iO system`, and `iO Communications Bridge`.

Identifiers found in scored content: `iO64`, `iO1000`, `iO Series`, `iO-Series`, and generic `iO` references in the records listed above. The remaining searched identifiers were not present in the six scored banks.

Official iO image/product identifiers found on Edwards pages: `iO64G`, `iO64R`, `iO1000G`, `iO1000R`, and `iO-SDC1`.

## Official Edwards webpages used

1. [iO Intelligent Life Safety Systems](https://www.edwardsfiresafety.com/products/life-safety-systems/intelligent-panels/io)
2. [Small Building Fire Alarm Solutions](https://www.edwardsfiresafety.com/lifelines/control-panel/small-building-fire-alarm-solutions)
3. [Submittal Guides](https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/submittal-guides)
4. [Platform Brochures](https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/platform-brochures)
5. [CAD Drawings](https://www.edwardsfiresafety.com/lifelines/cad-drawings)
6. [iO Series Images](https://www.edwardsfiresafety.com/lifelines/images/io)
7. [Edwards Learning Center / Priority](https://priority.edwardsfiresafety.com/)
8. [Connected Solutions](https://www.edwardsfiresafety.com/lifelines/connected-solutions)
9. [Power Supplies and Accessories](https://www.edwardsfiresafety.com/lifelines/power-supplies-and-accessories)

## Official web evidence captured

| Evidence | Official source | Page/section | Audit boundary |
|---|---|---|---|
| iO Series uses intelligent detection, electronic addressing, automatic device mapping, and optional Ethernet connectivity for remote diagnostics, central monitoring services, and digital applications | iO product page | iO Intelligent Life Safety Systems | Does not establish remote programming, unrestricted remote control, remote configuration, authentication, or cybersecurity behavior |
| iO Series panels are not networkable | iO product page | iO Intelligent Life Safety Systems | Must not be confused with optional Ethernet connectivity |
| iO Series connections use standard wiring and are suited to retrofit applications | iO product page | Retrofitting | Does not establish wiring rules, distance limits, loading, or compatibility |
| Up to eight annunciators; compatible LED/LCD models provide zone or point annunciation and common control capabilities | iO product page | Remote Annunciation | Exact model compatibility remains unmapped |
| Incremental auto programming is described for iO Series systems | iO product page | Incremental Auto Programming | Does not establish programming steps or procedures |
| iO64 has one Class B intelligent device loop, up to 64 device addresses, and two Class B NACs | Small Building Fire Alarm Solutions page | Intelligent iO Series Addressable Systems | Does not establish Class A operation, NAC loading, wiring, or battery calculations |
| iO1000 loop-controller modules can expand system capacity in 250-point increments up to 1,000 device addresses | Small Building Fire Alarm Solutions page | Intelligent iO Series Addressable Systems | Does not establish exact controller part-number compatibility or installation/configuration procedure |
| iO64G and iO64R are shown as one-loop, 64-device FACP variants; iO1000G and iO1000R are shown as four-loop variants; iO-SDC1 is shown as an expansion module with one 250-device loop | iO Series Images page | Product image entries | Image-page identifiers are not a substitute for a technical compatibility or wiring document |
| ESTMobile is identified as a digital solution for remote access to iO panels and service support | iO product page; Connected Solutions page; Priority training page | ESTMobile / Edwards iO64 & iO1000 | Does not establish remote programming, remote control, or remote troubleshooting authority |
| The Edwards iO64 & iO1000 training course covers NAC configuration, SA-DACT, SA-ETH, onboard relays, Class A/B loop operation, Signature sensors/modules/CO detectors, and front-panel operations | Priority training page | EDWARDS IO64 & IO1000 | Training-topic listing is not a technical specification or proof of exact product compatibility; course access may require credentials |

## Official document inventory

| Document number | Official title | Edwards URL | Local filename | Download status | PDF page readability |
|---|---|---|---|---|---|
| E85001-0135 | iO Series Intelligent Fire Alarm Systems | `myeddie.../PublicMedia/Catalog Sheets/E85001-0135...pdf` | `io/E85001-0135_iO-Series_Intelligent_Fire_Alarm_Systems.pdf` | DOWNLOADED | Pending; no local PDF extractor available |
| E85010-0156 | iO Communications Bridge | `myeddie.../PublicMedia/Catalog Sheets/E85010-0156...pdf` | `io/E85010-0156_iO_Communications_Bridge.pdf` | DOWNLOADED | Pending; no local PDF extractor available |
| E85005-0132 | iO Series Submittal Guide | `myeddie.../PublicMedia/Submittal Guides/E85005-0132...pdf` | `io/E85005-0132_iO_Series_Submittal_Guide.pdf` | DOWNLOADED | Pending; no local PDF extractor available |
| E85000-0348 | iO-Series Brochure | `myeddie.../PublicMedia/Brochures/E85000-0348...pdf` | `io/E85000-0348_iO-Series_Brochure.pdf` | DOWNLOADED | Pending; no local PDF extractor available |
| E85001-0136 | ESTMobile | `myeddie.../PublicMedia/Catalog Sheets/E85001-0136...pdf` | `io/E85001-0136_ESTMobile.pdf` | DOWNLOADED | Pending; no local PDF extractor available |
| 3102535 | iO64 and iO1000 Drawing Package | `myeddie.../PublicMedia/CAD Drawings/3102535...zip` | `io/3102535_iO64_iO1000_CAD_Drawings.zip` | DOWNLOADED | CAD archive not page-text evidence |

No official page-level PDF mapping for dedicated `SA-ETH`, `SA-DACT`, annunciator model relationships, iO loop-controller compatibility, batteries, wiring, installation, operation, or programming documentation was exposed by the reviewed public Edwards pages. The Priority course confirms these topics exist in training scope but does not replace the missing technical documents.

The official iO image page identifies `iO64G`, `iO64R`, `iO1000G`, `iO1000R`, and `iO-SDC1`. The `iO64G` and `iO-SDC1` image files were downloaded successfully into `io/`. The three remaining image URLs exposed by the page returned HTTP 404 during collection and are retained as page-level identifier evidence only.

### Page-resolution attempt

The downloaded PDFs were inspected using the local file browser viewer, the hosted Edwards PDF viewer, page anchors, screenshots, and the available webpage extractor. Both local and hosted PDF views rendered as a blank viewer surface, and the PDF extractor returned no meaningful content. No OCR or alternate PDF runtime was available in the environment. Accordingly, no PDF page number or section is asserted below unless it was already available from an explicit official webpage; the downloaded documents remain `COLLECTED - PAGE REVIEW PENDING`.

## Claim-by-claim question audit

The following classifications are intentionally conservative. A question is not `VERIFIED` unless the question, correct answer, every distractor, explanation, and any compatibility/application conclusion are all supported.

| ID | Evidence assessment | Unsupported or risky claim |
|---:|---|---|
| 156 | PARTIALLY VERIFIED | Automatic device mapping is explicit on the iO page, but the answer-choice set and explanation lack question-level source metadata and the negative modes are not independently mapped. |
| 171 | PARTIALLY VERIFIED | Automatic mapping and optional Ethernet are explicit; fiber-only networking, integrated voice evacuation, fixed conventional zones, and built-in field devices are not established by the cited web evidence. |
| 188 | PARTIALLY VERIFIED | Small-to-mid-size positioning is explicit, but “should be considered” as an alternative to EST4 is project-selection reasoning rather than a universal Edwards rule. |
| 190 | PARTIALLY VERIFIED | The 64-address claim is explicit on the small-building page; alternative capacities and the exact explanation require page-level question mapping. |
| 191 | UNVERIFIED | Fixed/non-expandable capacity is present in existing Academy wording but was not explicitly established by the reviewed web text; the brochure PDF is downloaded but not page-readable here. |
| 192 | PARTIALLY VERIFIED | A 48-device scenario fits the published 64-address ceiling, but the platform-selection conclusion is project-specific and does not establish all other design requirements. |
| 193 | PARTIALLY VERIFIED | The web page supports iO1000 expansion and 1,000 addresses and iO64’s 64 addresses; fixed iO64 capacity and every distractor still require page-level mapping. |
| 104 | PARTIALLY VERIFIED | Electronic addressing and automatic mapping are explicit; distractor claims and explanation lack page-level metadata. |
| 208, 211, 214, 217 | UNVERIFIED distractor references | iO is used as an unrelated distractor. ID 217 additionally asserts universal EST4 replacement, which is outside and inconsistent with the documented iO boundary that panels are not networkable and compatibility must not be inferred. |

### Answer-choice and explanation audit

| ID | Correct answer | Distractor assessment | Explanation assessment |
|---:|---|---|---|
| 156 | Automatic device mapping | `Manual map-only mode`, `Battery bypass`, and `Unsynchronized NAC` are not established as iO alternatives by the reviewed web evidence. | The family-level mapping claim is supported, but the explanation has no source metadata and does not identify the official page section. |
| 171 | Automatic device mapping and optional Ethernet connectivity | Fiber-only networking, integrated voice evacuation, fixed conventional zones, and built-in waterflow/tamper devices are not established by the iO evidence. | The two-feature explanation matches the official web wording but remains page-level PDF-unmapped. |
| 188 | The iO Series | `EST3X`, a duct smoke detector, and a notification power supply are technically distinct categories, but the “consider as an alternative” conclusion is project-selection reasoning. | Small-to-mid-size positioning is supported; the automatic selection conclusion is not a universal Edwards rule. |
| 190 | 64 devices | `125`, `250`, and `1,000` are unsupported alternative capacity values for iO64. | The 64-device statement is web-supported; fixed-capacity language is not page-mapped locally. |
| 191 | No | Controller-card expansion, loop doubling, and pairing with EST4 are not established. | Fixed/non-expandable capacity is asserted but remains PDF-pending. |
| 192 | iO64 | iO1000, EST4-only, and communications bridge are distinct product/application choices, but the evidence does not make iO64 universally correct for every 48-device design. | The 64-device fit is supported; the project-selection conclusion remains partial. |
| 193 | iO64 is fixed-capacity at 64 devices, while iO1000 is expandable up to 1,000 addressable devices | The reverse capacity statement, cabinet-color equivalence, and “not an Edwards product” are not supported alternatives. | The web page supports the capacity contrast in part; fixed iO64 capacity and expansion details require PDF mapping. |
| 104 | Electronic addressing and automatic device mapping | Conventional-only/no mapping, no Ethernet/no addressing, and audio/strobe-only claims are not supported iO alternatives. | The family-level feature pairing is web-supported; the explanation lacks page-level metadata. |

The four distractor-only references are not treated as verified iO facts: ID 208 uses “A standalone iO64 with no network components,” ID 211 uses “An iO Series panel,” ID 214 uses “the project is changed to an iO64 automatically,” and ID 217 uses the universal replacement claim. These were not corrected in this phase.

## Status totals

| Classification | Count |
|---|---:|
| VERIFIED | 0 |
| PARTIALLY VERIFIED | 8 direct questions |
| UNVERIFIED | 1 direct question; 4 distractor references |
| CONTRADICTED | 0 primary questions; one distractor claim conflicts with the evidence boundary |
| DUPLICATE/OVERLAP | 0 confirmed duplicates |

## Required audit areas

- iO64 versus iO1000: web capacity distinction supported; exact configuration and fixed-capacity claims remain PDF-pending.
- Device-address capacity: 64 and 1,000 web claims supported; do not infer beyond them.
- Loop-controller expansion: 250-point increments and up to 1,000 addresses supported; exact module compatibility pending.
- NAC architecture: two Class B NACs for iO64 supported; Class A, loading, and calculations pending.
- Class A/B loop operation: training page names the topic; no technical page mapping established.
- Intelligent addressing and automatic mapping: web-supported at family level.
- Ethernet, SA-ETH, remote diagnostics, central monitoring, and digital applications: web-supported only at the stated relationship; no remote programming/control inference.
- ESTMobile: official page/training relationship found; detailed operational claims pending.
- Retrofit and incremental auto programming: web-supported at stated feature level only.
- Signature devices, modules, and CO detectors: training page names them; no compatibility claim is promoted.
- Annunciators: up to eight and LED/LCD zone/point/common-control description web-supported; exact models pending.
- Onboard relays, power, batteries, wiring, installation, operation, programming, troubleshooting, fault codes, replacement, and BOM calculations: source gaps remain unless a page-level technical document is mapped.

## Product-integrity concerns

No iO question content was changed. No new product fact was added to scored data. The iO evidence does not authorize compatibility claims for Signature devices, modules, or CO detectors. The official image page identifies product variants but does not establish all technical relationships. `SA-ETH` and `SA-DACT` were found in official training-topic text, not in scored questions and not in a page-readable technical specification.

## Company-sensitivity review

No prices, vendor costs, internal Ban-Koe costs, margins, discounts, customer-specific pricing, or confidential commercial values were added. Edwards marketing language about budgets, costs, or timelines was not used as Ban-Koe pricing evidence. Existing unrelated commercial wording in scored banks was not modified during this evidence-only phase.

## Source gaps and next phase

The next controlled phase must obtain page-readable official technical documentation for the iO Series datasheet, brochure, submittal guide, communications bridge, ESTMobile, SA-ETH, SA-DACT, annunciators, power/batteries, wiring, installation, operation, and programming claims. It must then re-audit each answer choice and explanation before any correction. This report does not authorize rewriting questions.

## Files changed

- `docs/IO_SOURCE_VERIFICATION_REPORT.md`
- `docs/EST4_VERIFIED_SOURCE_MATRIX.md`
- `.gitignore` (private `io/` exclusion)
- Private downloaded source files under `io/`

Question banks and runtime files were not modified during the earlier evidence-only phase.

## iO Series page-level evidence correction pass

Correction date: 2026-08-21. This section records the completed correction pass controlled by the page-level Edwards facts supplied for the collected official documents. Question-bank edits were limited to `data/module1.js` and `data/module2.js`; no quiz logic, product data, runtime, UI, navigation, scoring, randomization, or progress code was changed.

### Direct iO questions

| ID | File | Status before | Change | Correct answer | Edwards document/page/section | Status after |
|---:|---|---|---|---|---|---|
| 156 | `module1.js` | PARTIALLY VERIFIED | Replaced unsupported negative modes with documented feature alternatives and added metadata. | Automatic device mapping | E85001-0135, pp. 1-2, iO Series / Features and Benefits | VERIFIED |
| 171 | `module1.js` | PARTIALLY VERIFIED | Made the stem uniquely test the pair containing optional Ethernet; all alternatives are separate documented feature pairs. | Automatic device mapping and optional Ethernet connectivity | E85001-0135, pp. 1-2, iO Series / Features and Benefits | VERIFIED |
| 188 | `module1.js` | PARTIALLY VERIFIED | Reframed project-selection wording as documented application positioning. | It is intended for small to mid-size applications | E85001-0135, p. 1, iO Series | VERIFIED |
| 190 | `module1.js` | PARTIALLY VERIFIED | Replaced unsupported numeric distractors with other documented iO64 facts. | 64 devices | E85001-0135, p. 3, iO64 / Device Capacity | VERIFIED |
| 191 | `module1.js` | UNVERIFIED | Preserved the fixed-capacity objective and cited the base iO64 limit plus iO-SDC1 boundary. | No | E85001-0135, pp. 3, 5, iO64 / Device Capacity; iO-SDC1 | VERIFIED |
| 192 | `module1.js` | PARTIALLY VERIFIED | Limited the platform comparison to documented address capacity and retained a scope caveat. | iO64 | E85001-0135, pp. 1, 3, iO64 / Device Capacity | VERIFIED |
| 193 | `module1.js` | PARTIALLY VERIFIED | Replaced unsupported distractor claims and cited both platform capacity/expansion descriptions. | iO64 is fixed-capacity at 64 devices, while iO1000 is expandable up to 1,000 addressable devices | E85001-0135, pp. 1, 3, 7, iO64; iO1000; Device Capacity; Loop Configuration | VERIFIED |
| 104 | `module2.js` | PARTIALLY VERIFIED | Made the stem uniquely test the documented addressing pair and replaced unsupported distractors with separate documented feature pairs. | Electronic addressing and automatic device mapping | E85001-0135, pp. 1-2, iO Series / Features and Benefits | VERIFIED |

Every changed direct question retains `sourceType`, `sourceDocument`, `manufacturer`, `verified`, `sourcePage`, and `sourceSection` metadata. Corrected claims are limited to the supplied Edwards wording. No claim was added for unsupported Signature compatibility, wiring limits, battery calculations, loading, fault codes, repair, or unrestricted remote control.

### iO distractor references

| ID | File | Before | Disposition | Result |
|---:|---|---|---|---|
| 208 | `module1.js` | “A standalone iO64 with no network components” | Rewritten as “A standalone control panel with no network expansion component.” | Removed unsupported iO distractor reference |
| 211 | `module1.js` | “An iO Series panel” | Rewritten as “An EST4 remote annunciator.” | Removed unrelated iO distractor reference |
| 214 | `module1.js` | “That the project is changed to an iO64 automatically” | Rewritten as “That the project is changed to a conventional-only panel automatically.” | Removed unsupported automatic-selection claim |
| 217 | `module1.js` | Universal EST4 replacement claim for an iO Series panel | Rewritten as “Replace the EST4 with an unrelated conventional panel without reviewing the project.” | Removed unsupported compatibility claim |

Supported iO distractors retained: **0**. Distractor references rewritten: **4**. Distractor references removed as standalone questions: **0**.

### Final correction totals

- Direct iO questions verified: **8** (`module1.js` 156, 171, 188, 190-193; `module2.js` 104)
- Direct iO questions remaining partially verified: **0**
- Direct iO questions remaining unverified: **0**
- Direct iO questions contradicted: **0**
- Direct iO questions removed: **0**
- iO distractor references supported unchanged: **0**
- iO distractor references rewritten: **4**
- iO distractor references removed: **0**

This result applies only to the corrected mapped questions. It does not declare the entire iO family fully verified; any iO claim outside these records remains subject to its own source and claim-level review.

### Post-correction validation

The browser runtime audit reports **PASS - ALL RUNTIME CHECKS PASSED**. Across all tested pools: exact duplicate question text `0`, invalid question objects `0`, invalid categories `0`, missing answers `0`, duplicate answers `0`, invalid correct-answer references `0`, missing explanations `0`, randomization failures `0`, and scoring failures `0`. Product-integrity checks pass; `SIGA-HPR`, `SIGA-UM2`, and `SIGA-CC1S` are absent from loaded scored data. Editor diagnostics report no errors in the corrected question banks or reports.

The corrected iO records contain no unsupported `iO64G`, `iO64R`, `iO1000G`, `iO1000R`, `SA-ETH`, or `SA-DACT` claim. `iO-SDC2` remains only as a documented false alternative in ID 191 and is explicitly distinguished from base iO64 expansion in the explanation.
