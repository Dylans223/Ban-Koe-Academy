# EST4 Verified Source Matrix

Research date: 2026-08-20

Manufacturer scope: Edwards only.

Source rule: Existing Academy content is not evidence. A claim is verified only when an official Edwards document supports it. Documents listed as collected below are source candidates until their PDF pages are reviewed. Do not use a candidate to verify a question until a later controlled verification pass maps the claim to a specific page.

## Collection Status

| Status | Meaning |
|---|---|
| VERIFIED | The official Edwards document was reviewed and the listed fact is supported at the cited page or section. |
| COLLECTED - PAGE REVIEW PENDING | An official Edwards source page exposes the document and the direct PDF is available, but revision/date and page-level claim mapping were not established during this collection pass. |
| SOURCE NOT FOUND - DO NOT VERIFY | No publicly accessible official Edwards document was located for the requested topic during this pass. |

## iO Series source collection and evidence audit

Audit date: 2026-08-21. This is an evidence-only phase; no question content or product data was modified.

Official Edwards pages reviewed:

- https://www.edwardsfiresafety.com/products/life-safety-systems/intelligent-panels/io
- https://www.edwardsfiresafety.com/lifelines/control-panel/small-building-fire-alarm-solutions
- https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/submittal-guides
- https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/platform-brochures
- https://www.edwardsfiresafety.com/lifelines/cad-drawings
- https://www.edwardsfiresafety.com/lifelines/images/io
- https://priority.edwardsfiresafety.com/
- https://www.edwardsfiresafety.com/lifelines/connected-solutions

The complete iO audit inventory and claim classifications are recorded in `docs/IO_SOURCE_VERIFICATION_REPORT.md`. The reviewed scored set contains direct iO IDs `module1.js` 156, 171, 188, 190-193 and `module2.js` 104, plus iO distractor references in `module1.js` 208, 211, 214, and 217. No direct iO question was found in `questions.js`, `partNumberQuestions.js`, `wiringQuestions.js`, or `finalBossQuestions.js`.

Official documents downloaded into the private, ignored `io/` directory: E85001-0135, E85010-0156, E85005-0132, E85000-0348, E85001-0136, and CAD package 3102535. The local environment could download the PDFs but could not extract PDF text, so PDF page/section mapping remains pending. No question is promoted to `VERIFIED` from web summaries alone.

Local and hosted PDF viewers, page anchors, screenshots, and the available webpage extractor were also attempted for page-level resolution. Both PDF views rendered blank and no alternate OCR/PDF runtime was available; no page number or section is invented as a result.

Initial iO statuses: 0 VERIFIED, 8 PARTIALLY VERIFIED direct questions, 1 UNVERIFIED direct question, 4 UNVERIFIED distractor references, 0 confirmed duplicates, and 0 primary contradictions. ID 217 contains an unsupported universal EST4 replacement claim in a distractor; compatibility must not be inferred. No question content was rewritten.

## iO Series page-level evidence correction pass

Correction date: 2026-08-21. The eight direct iO questions were corrected using the page-level Edwards evidence supplied for E85001-0135. IDs `module1.js` 156, 171, 188, 190-193 and `module2.js` 104 are now `VERIFIED`; each retains source metadata with exact document, page, and section. Four unrelated EST4 distractor references in `module1.js` IDs 208, 211, 214, and 217 were rewritten to remove unsupported iO or compatibility claims.

| Question IDs | Document | Pages | Sections | Evidence applied |
|---|---|---:|---|---|
| module1 156, 171; module2 104 | E85001-0135 | 1-2 | iO Series; Features and Benefits | Automatic device mapping, electronic addressing, optional Ethernet, and other documented family features |
| module1 188 | E85001-0135 | 1 | iO Series | Small to mid-size application positioning |
| module1 190, 192 | E85001-0135 | 1, 3 | iO64; Device Capacity | One Class A/B intelligent loop and up to 64 intelligent devices/addresses |
| module1 191 | E85001-0135 | 3, 5 | iO64; Device Capacity; iO-SDC1 | Base iO64 capacity cannot be expanded; iO-SDC1 replacement/expansion boundary |
| module1 193 | E85001-0135 | 1, 3, 7 | iO64; iO1000; Device Capacity; Loop Configuration | Fixed iO64 capacity and iO1000 expansion in 250-point increments up to 1,000 addresses |

Final mapped correction result: `8 VERIFIED`, `0 PARTIALLY VERIFIED`, `0 UNVERIFIED`, `0 primary CONTRADICTED`, and `0 removed`. Distractor references: `0` retained unchanged, `4` rewritten, `0` removed as questions. No claim for unsupported compatibility, loading, battery calculation, fault code, repair, or unrestricted remote control was promoted.

## EDGE-ML / Edge Series source collection and page-level audit

Audit date: 2026-08-21. Official Edwards Edge Series pages identify the Edge Series as a mid-sized platform with a 10-inch touchscreen, up to 30 remote annunciators, up to four loops at 250 devices per loop, and a documented iO1000/iO500 migration boundary covering initiating devices, notification devices, wiring, and backboxes. These are webpage claims and are not substituted for PDF page evidence.

Official Edge documents identified and downloaded privately: E85008-0001 (EDGE-ML Fire Alarm Systems Datasheet), E85008-0002 (EDGE-ML Control Display Modules), E85008-0003 (Edge Networking Accessories Datasheet), E85008-0100 (Edge Fire Alarm Systems Brochure), and E85008-0101 (Edge Submittal Guide). The local PDF viewer rendered the priority E85008-0001 page blank, so no PDF page or section is asserted without readable inspection.

Actual Edge identifiers recorded for later product-focused review: `EDGE-ML`, `EDGE-ML-G`, `EDGE-ML-R`, `EDGE-SLC-250`, `EDGE-SLC-500`, `EDGE-CLA1`, `RZI16-2`, `EDGE-24L24S`, `SA-DACT`, and `EDGE-PTK2`. These are product/model identifiers; the E85008 values remain source-document identifiers only.

Current Edge question status: `module1.js` IDs `158` and `172`, and `module2.js` ID `106`, remain `PARTIALLY VERIFIED`. No Edge question was promoted to `VERIFIED`, `UNVERIFIED`, `CONTRADICTED`, or removed. The complete question-by-question evidence and correction recommendations are recorded in `EDGE_SOURCE_VERIFICATION_REPORT.md`.

### Superseding EDGE-ML targeted correction pass

Correction date: 2026-08-21. The three Edge questions were narrowed to explicit official Edwards webpage claims. `module1.js` IDs `158` and `172`, and `module2.js` ID `106`, are now `VERIFIED`; each uses actual Edge product/family language and retains source metadata. No E85/E850 identifier appears in learner-facing Edge content.

| Question IDs | Official source | Web section | Evidence applied |
|---|---|---|---|
| module1 158 | Edwards Edge Series webpage | Edge Series; Migration-Ready | Mid-sized positioning and the explicit iO1000/iO500 initiating-device, notification-device, wiring, and backbox migration boundary |
| module1 172 | Edwards Edge Series webpage | Edge Series; Pure Performance, Perfectly Scaled | Up to four loops at 250 devices per loop |
| module2 106 | Edwards Edge Series webpage | Edge Series; Pure Performance, Perfectly Scaled | Up to four loops at 250 devices per loop and up to 30 remote annunciators |

Final Edge result: `3 VERIFIED`, `0 PARTIALLY VERIFIED`, `0 UNVERIFIED`, `0 CONTRADICTED`, and `0 removed`. The result is limited to these three revised questions and does not promote unrelated Edge identifiers or technical claims without their own exact official source mapping.

Post-correction browser validation: **PASS - ALL RUNTIME CHECKS PASSED**. Duplicate text, invalid question objects/categories, missing or duplicate answers, invalid answer references, missing explanations, randomization failures, and scoring failures all report `0`. Product-integrity checks pass with `SIGA-HPR`, `SIGA-UM2`, and `SIGA-CC1S` absent from loaded scored data. No question-bank diagnostics errors were reported.

## Official Edwards website evidence reconciliation (2026-08-20)

The current EST4 platform page and EST3 migration page were added to the evidence set. This update does not change the question banks or introduce any rewrite. It narrows the status of a few previously partial claims and preserves the no-commercial-pricing rule.

| Question ID | File | Status BEFORE | Status AFTER | Official Edwards web source | PDF source | Page / section | Evidence support | Remaining unsupported element |
|---:|---|---|---|---|---|---|---|---|
| 152 | module1.js | PARTIALLY VERIFIED | VERIFIED | EST4 Platform page | E85014-0001 | Platform overview: on-board webserver; remote device-independent access to system status reports | Directly supports the exact remote status-report claim | Does not support remote control, programming, authentication, or broader configuration actions |
| 167 | module1.js | VERIFIED | VERIFIED | EST3 migration page | E85014-0001 | EST3 migration / backward compatibility | Confirms EST4 migration without replacing wiring or peripheral devices | Still excludes universal compatibility across every EST3 component |
| 168 | module1.js | VERIFIED | VERIFIED | EST4 Platform page | E85014-0001 | Overview / networking | Confirms IPv6, Class A/B/X/N/full mesh, fiber/Ethernet/copper | No unsupported media claim beyond the exact platform wording |
| 211 | module1.js | PARTIALLY VERIFIED | PARTIALLY VERIFIED | EST4 Platform + EST3 migration page | E85014-0001 | Backward compatibility / migration context | Supports migration language and documented compatibility for EST3 wiring, devices, and most local rail modules | High-capacity selection wording remains broader than the official wording |
| 212 | module1.js | PARTIALLY VERIFIED | VERIFIED | EST4 Platform page | E85014-0012 | Proxy firewall / AES / FIPS Pub 197 | Supports the firewall role and secure interface language for EST4 | Does not support remote authentication, configuration steps, or wider cyber-architecture claims |
| 101 | module2.js | PARTIALLY VERIFIED | VERIFIED | EST4 Platform page | E85014-0001 | On-board webserver / status-report access | Supports the exact remote status access claim | Does not support remote programming or broader control behavior |
| 218 | module1.js | PARTIALLY VERIFIED | PARTIALLY VERIFIED | EST4 Platform page + EST4 audio/network pages | E85014-0001 / E85014-0002 | Overview/networking; audio units | Supports network/audio scope awareness and document reconciliation | Cost/estimating language remains outside manufacturer technical evidence and company-sensitivity scope |

### Web-evidence status update

This second evidence pass upgrades the following claims to a supported state:
- 152 and 101 — exact webserver status-access wording
- 167 — migration compatibility wording within the documented EST3 boundary
- 168 — network media/topology wording from the EST4 platform page
- 212 — firewall/security wording tied to the exact Edwards description

The following items remain partial even with the official website evidence:
- 151 — product/distractor mapping is not yet fully page-mapped
- 211 — migration support is confirmed, but the broader platform-selection claim remains too expansive
- 216-218 — project-specific design and estimating/scoping language still requires narrowing or rewrite
- 129-146 — scope/troubleshooting/cabinet-specific workflow language remains project-specific and cannot be treated as universal product rules

No exact pricing, margin, labor, freight, customer pricing, discount, vendor pricing, or confidential commercial value was introduced or supported by the website evidence.

## Documents Found

All URLs below are official Edwards domains: `edwardsfiresafety.com` or `myeddie.edwardsfiresafety.com`.

| Document number | Exact document title | Product/family | Document type | Edwards source | Revision/date | Relevant pages | Technical topics supported | Existing question families | Status |
|---|---|---|---|---|---|---|---|---|---|
| E85014-0019 | EST4 Submittal Guide | EST4 | Submittal guide | [EST4 platform](https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform/) | Not exposed by official HTML index | PDF page mapping pending | EST4 system selection, fire alarm, emergency communications, mass notification, building integration, network architecture, project submittal scope | EST4 platform, system selection, network/audio scope | COLLECTED - PAGE REVIEW PENDING |
| E85014-0033 | EST4 Brochure | EST4 | Brochure | [EST4 platform](https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform/) | Not exposed by official HTML index | PDF page mapping pending | EST4 overview, IPv6 network design, Class B/A/X/N/full mesh, fiber/Ethernet/copper, webserver, messaging, shared network data/audio/telephone data, EST3 migration | EST4 platform, network architecture, retrofit/migration, audio/data networking | COLLECTED - PAGE REVIEW PENDING |
| E85014-0020 | EST4 Cybersecurity White Paper | EST4 | White paper | [EST4 platform](https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform/) | Not exposed by official HTML index | PDF page mapping pending | EST4 cybersecurity considerations and connected life-safety systems | EST4 cybersecurity and network administration, Sales Support scope only | COLLECTED - PAGE REVIEW PENDING |
| E85001-0135 | iO Series Intelligent Fire Alarm Systems | iO Series | Catalog sheet | [Small Building Fire Alarm Solutions](https://www.edwardsfiresafety.com/lifelines/control-panel/small-building-fire-alarm-solutions/) | Not exposed by official HTML index | PDF page mapping pending | iO64 one Class B intelligent loop and up to 64 addresses; iO1000 loop-controller expansion in 250-point increments up to 1,000 addresses; NACs and Ethernet option | iO product selection, loop capacity, addressing, expansion | COLLECTED - PAGE REVIEW PENDING |
| E85000-0348 | iO-Series Brochure | iO Series | Brochure | [Platform brochures](https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/platform-brochures/) | Not exposed by official HTML index | PDF page mapping pending | iO positioning, intelligent detection, small-building life-safety system capabilities | iO product family and application scope | COLLECTED - PAGE REVIEW PENDING |
| E85005-0132 | iO Series Submittal Guide | iO Series | Submittal guide | [Submittal guides](https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/submittal-guides/) | Not exposed by official HTML index | PDF page mapping pending | iO configuration, selection, expansion, and project submittal information | iO configuration and estimating | COLLECTED - PAGE REVIEW PENDING |
| E85008-0001 | EDGE-ML Fire Alarm Systems Datasheet | Edge Series / EDGE-ML | Datasheet | [Edge Series](https://www.edwardsfiresafety.com/lifelines/control-panel/edge-series) | Not exposed by official HTML index | PDF page mapping pending | EDGE-ML system architecture, loops, device capacity, annunciators, migration compatibility | EDGE product selection and capacity | COLLECTED - PAGE REVIEW PENDING |
| E85008-0002 | EDGE-ML Control Display Modules | Edge Series / EDGE-ML | Catalog sheet | [Edge Series](https://www.edwardsfiresafety.com/lifelines/control-panel/edge-series) | Not exposed by official HTML index | PDF page mapping pending | EDGE control-display module options | EDGE display and panel configuration | COLLECTED - PAGE REVIEW PENDING |
| E85008-0003 | Edge Networking Accessories Datasheet | Edge Series | Datasheet | [Edge Series](https://www.edwardsfiresafety.com/lifelines/control-panel/edge-series) | Not exposed by official HTML index | PDF page mapping pending | EDGE networking accessories and related system configuration | EDGE networking | COLLECTED - PAGE REVIEW PENDING |
| E85008-0100 | Edge Fire Alarm Systems Brochure | Edge Series | Brochure | [Edge Series](https://www.edwardsfiresafety.com/lifelines/control-panel/edge-series) | Not exposed by official HTML index | PDF page mapping pending | Mid-sized applications, touchscreen operation, expansion, remote annunciators, loops, switches, migration compatibility | EDGE product selection, migration, operation scope | COLLECTED - PAGE REVIEW PENDING |
| E85008-0101 | Edge Submittal Guide | Edge Series | Submittal guide | [Edge Series](https://www.edwardsfiresafety.com/lifelines/control-panel/edge-series) | Not exposed by official HTML index | PDF page mapping pending | EDGE system selection and project submittal information | EDGE configuration and estimating | COLLECTED - PAGE REVIEW PENDING |
| E85001-0743 | Fireray Smoke Beam Detector | Conventional initiating devices / Fireray | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Fireray beam smoke detector product and application data | Beam detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-0643 | End-to-End Beam Smoke Detector | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | End-to-end beam smoke detector product and application data | Beam detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-0616 | EC5000R Reflective Beam Detector | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Reflective beam detector product and application data | Beam detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-0645 | Explosionproof Smoke Detector | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Explosionproof smoke detector product and hazardous-location application data | Explosionproof detector, hazardous-location initiating devices | COLLECTED - PAGE REVIEW PENDING |
| E85001-0599 | Conventional 2-Wire Smoke and Heat Detectors | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Conventional two-wire smoke and heat detector product data | Conventional smoke/heat detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-0589 | Rate Compensation Heat Detectors | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Rate-compensation heat detector product data | Rate-compensation heat detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-0371 | Hazardous location Fire Alarm Station | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Hazardous-location manual initiating device product data | Hazardous-location initiating devices | COLLECTED - PAGE REVIEW PENDING |
| E85001-0588 | Weatherproof, Explosionproof Pull Stations | Conventional initiating devices | Catalog sheet | [Conventional Initiating Devices](https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices) | Not exposed by official HTML index | PDF page mapping pending | Weatherproof and explosionproof manual station product data | Hazardous-location initiating devices | COLLECTED - PAGE REVIEW PENDING |
| E85001-1001 | Signature Optica Smoke Detector | Signature intelligent initiating devices | Catalog sheet | [Intelligent Initiating Devices](https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/) | Not exposed by official HTML index | PDF page mapping pending | Dedicated Signature photoelectric/Optica smoke detector product data | Photoelectric detector family, Signature detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-1003 | Signature Optica Smoke and Heat Detector | Signature intelligent initiating devices | Catalog sheet | [Intelligent Initiating Devices](https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/) | Not exposed by official HTML index | PDF page mapping pending | Signature Optica smoke and heat detector product data | Photoelectric detector family, smoke/heat detector family | COLLECTED - PAGE REVIEW PENDING |
| E85001-1052 | Edwards Genesis LED G4LF Series Low Frequency Datasheet | Genesis LED G4LF | Datasheet | [Speakers, Strobes, Horns, Bells and Chimes](https://www.edwardsfiresafety.com/lifelines/speakers-strobes-horns-bells-and-chimes) | Not exposed by official HTML index | PDF page mapping pending | G4LF low-frequency notification product documentation; exact model/function claims require PDF review | Genesis G4LF/G4LFV identity, application, wiring | COLLECTED - PAGE REVIEW PENDING |
| E85001-1051 | Genesis LED Ceiling Mount High Candela Speakers and Speaker-Strobes | Genesis LED ceiling notification | Catalog sheet | [Speakers, Strobes, Horns, Bells and Chimes](https://www.edwardsfiresafety.com/lifelines/speakers-strobes-horns-bells-and-chimes) | Not exposed by official HTML index | PDF page mapping pending | Ceiling high-candela speakers and speaker-strobes; exact ratings and relationships require PDF review | Genesis/GCS notification identity and application | COLLECTED - PAGE REVIEW PENDING |
| E85001-1050 | Genesis LED GCS Series Ceiling Mount Strobes and Speaker-Strobes | Genesis LED GCS | Catalog sheet | [Speakers, Strobes, Horns, Bells and Chimes](https://www.edwardsfiresafety.com/lifelines/speakers-strobes-horns-bells-and-chimes) | Not exposed by official HTML index | PDF page mapping pending | GCS ceiling strobes and speaker-strobes; exact model/function claims require PDF review | Genesis GCS identity and application | COLLECTED - PAGE REVIEW PENDING |
| E85001-1027 | Genesis LED G4 Wall Mount Mass Notification | Genesis LED G4 | Catalog sheet | [Speakers, Strobes, Horns, Bells and Chimes](https://www.edwardsfiresafety.com/lifelines/speakers-strobes-horns-bells-and-chimes) | Not exposed by official HTML index | PDF page mapping pending | Official category-page discovery only; exact G4 model/function claims require PDF review | Genesis G4 identity and application | COLLECTED - PAGE REVIEW PENDING |
| E85001-0667 | Genesis LED G1 Series Compact Notification Devices | Genesis LED G1 | Catalog sheet | [Speakers, Strobes, Horns, Bells and Chimes](https://www.edwardsfiresafety.com/lifelines/speakers-strobes-horns-bells-and-chimes) | Not exposed by official HTML index | PDF page mapping pending | G1 compact notification product documentation; exact G1A/G1V/G1AV claims require PDF review | Genesis G1 identity and function | COLLECTED - PAGE REVIEW PENDING |

Document-number reconciliation note: the official Genesis category page separately exposes E85001-1027 (Genesis LED G4 Wall Mount Mass Notification) and E85001-0668 (Genesis LED G4 Series Wall Mount Notification Devices), and separately exposes E85001-1050 (GCS ceiling strobes/speaker-strobes) and E85001-1025 (GCS ceiling speakers/speaker-strobes). These are retained as separate candidate documents. No product claim is merged across them without page-level review.

## Genesis product-number reconciliation (official search-first workflow)

The correct Edwards research path is product part number → official product/family page → supporting document number → page-level verification. The document numbers E85001-1052, E85001-1051, E85001-1050, E85001-1027, and E85001-0667 are supporting documents, not the primary product identifiers.

### Actual product part numbers and family identifiers found from the Genesis source set

- G4LF / G4LFV — low-frequency wall-mount notification products; public search for G4LF and G4LFV reaches the official Genesis notification category and document family pages, but no public product-detail page was exposed in the public search index.
- G1A / G1V / G1AV — compact Genesis wall-mount appliance families for horn, strobe, and horn-strobe.
- G1ARF / G1VRF / G1AVRF — the red housing, FIRE-marked variants that appear in the Academy product and part-number logic. Public search for G1AVRF reaches the official speaker/strobe category landing content, but not a direct SKU detail page.
- GCS family — ceiling-mount speaker/strobe family identifiers. The official public site indexes the family pages and associated catalog/document references, but not a direct part-number detail page for all listed variants in the public search results.
- GOCT and GRSW-10 — accessory/adapter part numbers associated with G4LF/G4LFV mounting relationships. These are accessory identifiers, not document identifiers.

### Official search results observed

- Public Edwards search for G1CSVWF and G1CSVRF returned “Sorry, no results were found.”
- Public Edwards search for G4LF returned official category landing content for Speakers, Strobes, Horns, Bells and Chimes and the Genesis family index.
- Public Edwards search for G4LFV returned no direct public result page.
- Public Edwards search for G1AVRF returned the official category landing content but no direct public product-detail result.

This confirms the core distinction from the instructions: product identifiers and document identifiers are different. The document number is the acquired support document; it is not the product part number to search first, and it is not sufficient evidence for a product claim without a page-level mapping.

### Genesis datasheet-first product claim matrix

The following table distinguishes product existence, identity, function, application, compatibility, and public-SKU-page status. The official Edwards datasheet/catalog-sheet evidence is the primary standard; a public standalone SKU page is only corroborating evidence when available.

| Part Number | Official Edwards document | Exact page | Official description | Product existence status | Function status | Application status | Compatibility status | Standalone public SKU page status |
|---|---|---|---|---|---|---|---|---|
| G4LF | E85001-1052 — Edwards Genesis LED G4LF Series Low Frequency Datasheet | Exact PDF page not established in current public extraction | Genesis LED wall-mount low-frequency horn / low-frequency notification appliance | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G4LFV | E85001-1052 — Edwards Genesis LED G4LF Series Low Frequency Datasheet | Exact PDF page not established in current public extraction | Genesis LED wall-mount low-frequency horn-strobe | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1A | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn family | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1V | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount strobe family | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1AV | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn-strobe family | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1ARF | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn, red housing, FIRE-marked variant | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1VRF | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount strobe, red housing, FIRE-marked variant | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1AVRF | E85001-0667 — Genesis LED G1 Series Compact Notification Devices | Exact PDF page not established in current public extraction | Genesis LED compact wall-mount horn-strobe, red housing, FIRE-marked variant | VERIFIED | PARTIALLY VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | Not required; public product-search page not required when the official datasheet identifies the product family and naming pattern |
| GCS family | E85001-1050 and E85001-1051 | Exact PDF page not established in current public extraction | Genesis LED GCS ceiling mount speakers and speaker-strobes / ceiling mount notification devices | VERIFIED | PARTIALLY VERIFIED | VERIFIED at family level | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| GRSW-10 | E85001-1050 / E85001-1051 / official GCS family documentation | Exact PDF page not established in current public extraction | Genesis room-side wiring plate / accessory associated with GCS/G4 family installation context | DOCUMENTED / NOT PAGE-MAPPED | UNVERIFIED | UNVERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| GOCT | E85001-1052 / official Genesis family documentation | Exact PDF page not established in current public extraction | Genesis 4-inch octagon box adapter plate | DOCUMENTED / NOT PAGE-MAPPED | UNVERIFIED | UNVERIFIED | UNVERIFIED | Not required; no standalone public SKU page found in current pass |
| G1CSVWF | Official Edwards document not established in current evidence set | Not established | Not established from official Edwards evidence | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | N/A — do not infer from similar GCS family part numbers |
| G1CSVRF | Official Edwards document not established in current evidence set | Not established | Not established from official Edwards evidence | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | N/A — do not infer from similar GCS family part numbers |

### Verification scope note

- Official Edwards datasheet evidence is sufficient to establish product existence and product identity when the document itself identifies the product.
- A missing public SKU page does not by itself make an Edwards-documented product unverified.
- Product existence is separate from function, application, and compatibility; those higher-order claims remain unsupported unless the official document explicitly states them on a mapped page.
- No question content changed; no product records changed; no quiz logic changed; no navigation or runtime files changed.

## Previously Page-Verified Edwards Sources

| Part Number | Official Name | Edwards Document | Page | Product Search Result | Evidence Status | Supported Claims |
|---|---|---|---|---|---|---|
| G4LF | Genesis LED wall-mount low-frequency horn | E85001-1052 | Not established | Official Edwards Genesis notification category result found | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as a Genesis low-frequency wall-mount notification appliance; exact frequency, wire size, installation, and accessory claims remain page-unverified |
| G4LFV | Genesis LED wall-mount low-frequency horn-strobe | E85001-1052 | Not established | No direct public product result found | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity as a low-frequency horn-strobe is supported at document/family level only; page-level candela/flash-rate and mounting claims remain unsupported |
| G1A | Genesis LED compact wall-mount horn | E85001-0667 | Not established | Family/category search result not independently located in current pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Compact wall-mount horn family identity only; no page section for housing/marking claims |
| G1V | Genesis LED compact wall-mount strobe | E85001-0667 | Not established | Family/category search result not independently located in current pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Compact wall-mount strobe family identity only; no page section for candela/flash-rate claims |
| G1AV | Genesis LED compact wall-mount horn-strobe | E85001-0667 | Not established | Family/category search result not independently located in current pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Compact wall-mount horn-strobe family identity only; no page section for housing or marking claims |
| G1ARF | Genesis LED compact wall-mount horn, red housing, FIRE-marked variant | E85001-0667 | Not established | Family/category search result not independently located in current pass | PARTIALLY VERIFIED | Suffix pattern is consistent with the Academy naming logic, but no official page-level mapping is in hand |
| G1VRF | Genesis LED compact wall-mount strobe, red housing, FIRE-marked variant | E85001-0667 | Not established | Family/category search result not independently located in current pass | PARTIALLY VERIFIED | Suffix pattern is consistent with the Academy naming logic, but no official page-level mapping is in hand |
| G1AVRF | Genesis LED compact wall-mount horn-strobe, red housing, FIRE-marked variant | E85001-0667 | Not established | Official Edwards category landing content found | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Family identity is consistent with the public category page; no exact page-level suffix mapping verified |
| G1CSVWF | Genesis ceiling speaker/strobe variant (search term not a document identifier) | Supporting document not established in current public proof set | Not established | No public Edwards search result found | UNVERIFIED | Exact product identity and official document association remain unsupported in this pass |
| G1CSVRF | Genesis ceiling speaker/strobe variant (search term not a document identifier) | Supporting document not established in current public proof set | Not established | No public Edwards search result found | UNVERIFIED | Exact product identity and official document association remain unsupported in this pass |
| GCS family | Genesis LED GCS ceiling-mount speakers and speaker-strobes | E85001-1050; E85001-1051 | Not established | Official category navigation found; public detail pages not independently located in current pass | DOCUMENT-VERIFIED / PUBLIC PAGE NOT LOCATED | Ceiling family identity is supported only at the product-family/document level; no exact candela, flash, or wiring claim verified at a page level |
| GOCT | Genesis 4-inch octagon box adapter plate | Supporting document not established in current public proof set | Not established | No direct public product result found in current pass | UNVERIFIED | Product identity and mounting relationship discussed in Academy logic, but no official page-level support in the reviewed public Edwards material |
| GRSW-10 | Genesis room-side wiring plate | Supporting document not established in current public proof set | Not established | No direct public product result found in current pass | UNVERIFIED | Product identity and package/installation relationship remain unsupported in the reviewed public Edwards material |

### Verification scope note

- No question content changed.
- No Academy product data changed.
- No quiz logic changed.
- No navigation changed.
- No runtime audit or scoring logic changed.
- The evidence status remains intentionally conservative: the goal is to identify exactly what the Edwards documentation proves and what it does not prove.

## Previously Page-Verified Edwards Sources

These entries were already in the baseline matrix and remain unchanged. They are retained here so this file remains the single source-matrix record.

| Verified fact | Source type | Source document | Relevant page/section | Verified |
|---|---|---|---|---|
| EST4 uses a self-configuring network; network, audio, and firefighter telephone data can share twisted pair or single fiber. | Edwards catalog sheet | E85014-0001 | p. 1, Overview/Networking | true |
| 4-NET controllers provide physical-media options and plug into supported network-module slots; they are hot-swappable. | Edwards catalog sheet | E85014-0008 | p. 1, EST4 Network Controllers | true |
| 4-NET-XT requires two modules, one at each end of the cable run, and supports panel data plus one live audio page channel. | Edwards catalog sheet | E85014-0009 | pp. 1-2, EST4 Network Extender | true |
| 4-NET-AD provides supplementary SFP ports and USB connections for branches and the node communications link. | Edwards catalog sheet | E85014-0015 | p. 1, EST4 Network Adder Module | true |
| 4-FWAL provides a secure EST4 interface to outside networks and supports IPv4 and IPv6. | Edwards catalog sheet | E85014-0012 | p. 1, EST4 Network Firewalls | true |
| 4-CPU is the nexus for system-wide network communication, controls audio data, and controls the nodes. | Edwards catalog sheet | E85014-0010 | pp. 1-2, EST4 Central Processing Unit | true |
| EST4 remote annunciators provide front-panel status/control over the life-safety network. | Edwards catalog sheet | E85014-0003 | p. 1, EST4 Remote Annunciators | true |
| EST4 audio units/interfaces and amplifiers are selected as system components, with audio and telephone data transmitted over copper or fiber. | Edwards catalog sheets | E85014-0002, E85014-0017 | p. 1, Audio Units and Interfaces; Zoned Audio Amplifiers | true |
| EST4 power supplies provide filtered and regulated power, produce 7 Amps, distribute power to the local rail, and document battery/power-supply rules. | Edwards catalog sheet | E85010-0060 | pp. 1-2, System Power Supplies and Power Supply Rules | true |
| EST4 cabinets/chassis support power, amplifiers, SLC and other modules; lobby enclosures support up to two color LCD touch screens. | Edwards catalog sheet | E85014-0004 | pp. 1-2, EST4 Cabinets and Chassis | true |
| EST4 control-display modules provide 24 LED indicators, buttons, and slide-in labels. | Edwards catalog sheet | E85014-0006 | pp. 1-2, Display Modules | true |
| 4-LCD displays eight events without scrolling and can display messages at every LCD or route them to specific LCDs. | Edwards catalog sheet | E85014-0007 | pp. 1-2, EST4 LCD Display Module | true |
| A 4-CPU node controls up to 19 additional local rail modules and learns their attributes and locations. | Edwards catalog sheet | E85014-0010 | p. 2, Intra-module Communications | true |
| SIGA-OSCD analyzes optical smoke independently from CO sensing for fire-alarm or life-safety CO decisions. | Edwards catalog sheet | E85001-1002 | p. 1, Intelligent Multisensor Smoke and CO Detector | true |
| SIGA-COD uses electrochemical CO sensing and is documented as compatible only with the Signature Loop Controller. | Edwards catalog sheet | E85001-0648 | pp. 1-2, Intelligent CO Detector, Compatibility | true |
| SIGA-OSHCD combines optical smoke, rate-of-rise heat with a fixed temperature setting, and CO sensing, with documented base options. | Edwards catalog sheet | E85001-1004 | pp. 1-2, Intelligent Multisensor Smoke, Heat, CO Detector | true |
| Optica duct detectors are designed for HVAC smoke detection and use the Signature protocol with documented backwards-compatible SuperDuct pipe locations/dimensions. | Edwards announcement/flyer | E85001-2007 | p. 2, Optica Duct Smoke Detection; Backwards Compatible for Easier Upgrades | true |
| SIGA-COD signals a trouble condition after approximately ten years and directs users to control-panel documentation for specifics. | Edwards catalog sheet | E85001-0648 | p. 1, Note 1 | true |

## Documents Still Unavailable

The following requested topics remain `SOURCE NOT FOUND - DO NOT VERIFY` after checking the official Edwards Lifelines pages and public Edwards document links:

| Requested topic | Result | Verification boundary |
|---|---|---|
| Signature Loop Controller dedicated product documentation | SOURCE NOT FOUND - DO NOT VERIFY | The iO official page mentions loop-controller modules, and E85001-0648 identifies Signature Loop Controller compatibility, but no dedicated controller document was located. Do not infer controller specifications. |
| EST4 Installation Manual | SOURCE NOT FOUND - DO NOT VERIFY | No public official Edwards document located. |
| EST4 Operation Manual | SOURCE NOT FOUND - DO NOT VERIFY | No public official Edwards document located. |
| EST4 Troubleshooting / diagnostic manual | SOURCE NOT FOUND - DO NOT VERIFY | No public official Edwards document located. |
| EST4 fault-code / diagnostic reference | SOURCE NOT FOUND - DO NOT VERIFY | No public official Edwards fault-code table located. |
| Official detector/base compatibility matrix | SOURCE NOT FOUND - DO NOT VERIFY | Individual catalog-sheet base listings are not a system-wide compatibility matrix. |
| Dedicated official photoelectric detector documentation | SOURCE NOT FOUND - DO NOT VERIFY | The collected E85001-0599 sheet is a conventional smoke/heat family sheet; no separate dedicated photoelectric sheet was collected in this pass. |
| Dedicated official ionization detector documentation | SOURCE NOT FOUND - DO NOT VERIFY | No dedicated official Edwards ionization detector document was located in this pass. |

## Legacy Question-Family Mapping

The collected documents are candidates for the following existing families only. Individual question-to-page mapping belongs to the next controlled verification pass.

| Document group | Existing families it may verify after page review |
|---|---|
| EST4 E85014-0019, E85014-0033, and existing E85014 catalog sheets | EST4 platform, network architecture, audio/data networking, retrofit/migration, display/control, power, cybersecurity Sales Support scope |
| E85001-0135, E85000-0348, E85005-0132 | iO product selection, addressing, loop capacity, expansion, configuration, and estimating |
| E85008-0001, E85008-0002, E85008-0003, E85008-0100, E85008-0101 | EDGE product selection, display, networking, capacity, migration, configuration, and estimating |
| E85001-0743, E85001-0643, E85001-0616 | Beam detector family and application questions |
| E85001-0645, E85001-0371, E85001-0588 | Explosionproof and hazardous-location initiating-device questions |
| E85001-0599 | Conventional smoke/heat detector family questions |
| E85001-0589 | Rate-compensation heat detector questions |
| Existing E85001-0648, E85001-1002, E85001-1004 | Signature multisensor, CO, detector sensing, and documented base-option questions |

## Unsupported Claims and Unverified Products

- EST4 installation steps, operating procedures, troubleshooting procedures, fault-code meanings, field repair decisions, replacement procedures, and safe electrical diagnostic procedures remain unsupported.
- A dedicated Signature Loop Controller specification, capacity, wiring rule, or universal compatibility statement remains unsupported.
- A complete Edwards detector/base compatibility matrix remains unavailable. Do not generalize from one detector sheet to other detector families.
- Dedicated photoelectric and ionization detector claims remain unsupported unless mapped to a specific official Edwards document.
- Exact revision/date claims for the newly collected PDFs remain unsupported because the public HTML index does not expose them and page-level PDF metadata was not established during this collection pass.
- Pricing, margin, labor, freight, inventory, supplier availability, lead times, customer/project details, and other commercial claims remain permanently out of scope.

## Conflicts Discovered

- The official EST4 platform page describes EST3 wiring, devices, and most local rail modules as backwards compatible. This broad statement must not be expanded into specific detector/base or SKU compatibility without a dedicated Edwards compatibility source.
- The official iO page describes iO64 as one Class B intelligent loop supporting up to 64 addresses and iO1000 expansion up to 1,000 addresses in 250-point increments. Any Academy claim that treats all iO models as having identical loop capacity is unsupported until checked against the iO documents.
- The official pages position iO as small-to-mid-sized and Edge as mid-sized. Their positioning does not establish interchangeable devices, wiring, bases, or panels.
- No direct conflict with a current question was adjudicated in this collection pass because questions were not modified and newly collected PDFs were not page-mapped.

## Required Confirmations

1. No quiz questions were created, rewritten, deleted, or changed.
2. Only `docs/EST4_VERIFIED_SOURCE_MATRIX.md` was modified.
3. No distributor, forum, Reddit, generic fire-alarm, competitor, search-snippet, or AI-generated source was used as evidence.
4. The next step is a separate controlled pass mapping individual legacy questions to specific Edwards documents and pages before any content change.

## EST4 Correction Pass Record

The later correction pass rewrote only the following EST4 scored questions using the page-level relationships above: `module1.js` IDs `151`, `152`, `208`, `210`, `211`, `212`, `213`, `217`, `218`; and `module2.js` IDs `101`, `131`, `133`, `134`, `142`, `146`.

- ID `218` was rewritten to remove project-cost language and now tests technical BOM/document reconciliation.
- IDs `152` and `101` are limited to documented remote, device-independent status-report access through the on-board webserver.
- ID `211` preserves only the documented EST3 migration wording for wiring, devices, and most local rail modules.
- Network, audio, cabinet, and troubleshooting scenarios were narrowed to documented component roles, display relationships, status indicators, and information gathering.
- No questions were removed because the reviewed overlap groups retain distinct learning objectives.
- No claims were added for compatibility, capacity, functionality, configuration, topology, sizing, repair, programming, or cybersecurity beyond the mapped Edwards pages.
- `data/module1.js` and `data/module2.js` are the only production question-bank files changed in this correction pass.

## Genesis page-level verification pass

Review date: 2026-08-20

The nine locally collected PDFs in `_sources/edwards/genesis/` were used as the primary evidence set. Page numbers below are the PDF page numbers printed in the Edwards sheets. Text was extracted from the local PDF pages; the Academy product database was not used as evidence.

### Documents inspected

| Document | PDF pages | Result |
|---|---:|---|
| E85001-1052 | 6 | Page-readable; G4LF/G4LFV, GRSW-10, and GOCT evidence mapped |
| E85001-1051 | 6 | Page-readable; high-candela GCVH/GCSVH, GRSW-10, and GOCT evidence mapped |
| E85001-1050 | 6 | Page-readable; GCS/mass-notification, GRSW-10, and GCS variants mapped |
| E85001-1027 | 6 | Page-readable; G4 wall mass-notification family and lens variants mapped |
| E85001-1025 | 6 | Page-readable; GCS ceiling speakers/speaker-strobes, GRSW-10, and GCS variants mapped |
| E85001-1026 | 6 | Page-readable; G4S wall speakers/speaker-strobes and GRSW-10 mapped |
| E85001-0668 | 6 | Page-readable; G4 wall appliance functions, candela, wiring, and markings mapped |
| E85001-0667 | 6 | Page-readable; G1 functions, suffix definitions, variants, and wiring mapped |
| E85001-0639 | 4 | Page-readable; G4LF family, 520 Hz, candela, and wiring corroborated |

### Page-level evidence table

| Question ID | Part Number | Claim | Edwards Document | Page | Section | Status |
|---|---|---|---|---:|---|---|
| 197 | G4LF/G4LFV | G4LFV is the low-frequency horn-strobe; G4LF is the horn-only appliance | E85001-1052 | 1, 5 | Overview; Model Number Syntax, Appliances | VERIFIED |
| 198 | G4LF/G4LFV | Low-frequency audible output is 520 Hz | E85001-1052 | 1-2 | Overview; Audible Signal Application | VERIFIED |
| 199 | GOCT | GOCT is the required 4-inch octagon box adapter for G4LF/G4LFV mounting | E85001-1052 | 2, 5 | Installation; Accessories | VERIFIED |
| 200 | GRSW-10 | GRSW-10 is the required room-side wiring plate, ordered separately in a 10-pack | E85001-1052 | 2, 5-6 | Installation; Accessories; Specifications | VERIFIED |
| 201 | G4LF/G4LFV | Applicable wiring is 12 to 18 AWG | E85001-1052 | 1, 6 | Standard Features; Specifications | VERIFIED |
| 202 | G4LFV, GRSW-10, GOCT | G4LFV plus GRSW-10 and GOCT matches a 4-inch octagon mounting takeoff | E85001-1052 | 2, 5 | Installation; Accessories | VERIFIED |
| 203 | G1A | G1A is a horn-only appliance | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 204 | G1V | G1V is a strobe-only appliance | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 205 | G1AV | G1AV is a horn-strobe appliance | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 206 | G1AVRF | G1AVRF is a red FIRE-marked G1 horn-strobe | E85001-0667 | 5 | Model Number Syntax, Appliances; Notification Appliances Color Marking | VERIFIED |
| 207 | G1AVRF | Seven red FIRE-marked G1 horn-strobes are represented as G1AVRF quantity 7 in the scenario BOM | E85001-0667 | 5 | Model Number Syntax, Appliances; Notification Appliances Color Marking | VERIFIED |
| 113, 165, 178 | G4/G4LF | Selectable candela output and flash rate are documented for Genesis notification appliances | E85001-0668 | 3-4 | Field Configuration; Specifications | PARTIALLY VERIFIED |
| 114, 179 | G1 Series | G1 is a compact notification appliance family | E85001-0667 | 1 | Overview; Standard Features | PARTIALLY VERIFIED |
| 115, 180 | G4LF | G4LF is selected for low-frequency signaling, including sleeping-room applications | E85001-1052 | 1-2 | Overview; Audible Signal Application | PARTIALLY VERIFIED |
| 116, 166, 181 | GCS | GCS products are ceiling-mounted speakers and speaker-strobes | E85001-1025 | 1-2 | Overview; Application | PARTIALLY VERIFIED |
| 10 | G4 | G4 is the wall-mount notification family | E85001-0668 | 1-2 | Overview; Application | VERIFIED |
| 11 | GCS | GCS is the ceiling-mount speaker and speaker-strobe family | E85001-1025 | 1-2 | Overview; Application | VERIFIED |
| 14 | G4LF | G4LF is the low-frequency notification family | E85001-1052 | 1-2, 5 | Overview; Audible Signal Application; Model Number Syntax | VERIFIED |
| 84 | G4LFVRF | G4LFVRF identifies a G4 wall appliance, LFV low-frequency horn-strobe, red housing, FIRE marking | E85001-1052 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 85 | G4LF/G4LFV | G4LF is horn-only and G4LFV is horn-strobe | E85001-1052 | 1, 5 | Overview; Model Number Syntax, Appliances | VERIFIED |
| 86 | GRSW-10 | GRSW-10 is the room-side wiring plate accessory ordered in a 10-pack | E85001-1052 | 2, 5-6 | Installation; Accessories; Specifications | VERIFIED |
| 87 | F-FR | F-FR is the FIRE/FEU marking code | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 88 | G1AVRF | G1AVRF identifies a red G1 horn-strobe with FIRE marking | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 89 | G1 AV | AV means horn-strobe in the G1 syntax | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 90 | G1 R | R means red housing in the G1 syntax | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 91 | G1 N | N means no marking in the G1 syntax | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 92 | G1TR | G1TR is a red G1 trim-ring accessory | E85001-0667 | 5 | Ordering Information; Accessories | VERIFIED |
| 53 | G4LF | G4LF wiring is 12 to 18 AWG | E85001-1052 | 1, 6 | Standard Features; Specifications | PARTIALLY VERIFIED |
| 54 | GRSW-10 | GRSW-10 is the required room-side wiring plate ordered separately in packs of 10 | E85001-1052 | 2, 5-6 | Installation; Accessories; Specifications | VERIFIED |
| 55 | GOCT | GOCT is required for a G4LF/G4LFV appliance on a 4-inch octagon box | E85001-1052 | 2, 5 | Installation; Accessories | PARTIALLY VERIFIED |
| 56 | G4LF/G4LFV | G4LFV is horn-strobe; G4LF is horn-only | E85001-1052 | 1, 5 | Overview; Model Number Syntax, Appliances | VERIFIED |
| 57 | G1A/G1V/G1AV | G1A is horn, G1V is strobe, G1AV is horn-strobe | E85001-0667 | 5 | Model Number Syntax, Appliances | VERIFIED |
| 58 | G1AVRF | G1AVRF is the red FIRE-marked G1 horn-strobe | E85001-0667 | 5 | Model Number Syntax, Appliances; Notification Appliances Color Marking | VERIFIED |
| fbq_003 | GCS | Ceiling application calls for the Genesis ceiling speaker/speaker-strobe family | E85001-1025 | 1-2 | Overview; Application | PARTIALLY VERIFIED |
| fbq_011 | G4LF | Low-frequency notification points to the G4LF family | E85001-1052 | 1-2 | Overview; Audible Signal Application | PARTIALLY VERIFIED |
| fbq_029 | G4/GCS | G4 wall notification and GCS ceiling speaker-strobes are distinct families | E85001-0668; E85001-1025 | 1-2 | Overview; Application | DUPLICATE/OVERLAP |
| fbq_036 | G4LF | A low-frequency occupant-notification requirement points to G4LF products | E85001-1052 | 1-2 | Overview; Audible Signal Application | PARTIALLY VERIFIED |

### Product identifier search results

The exact identifiers `G4LF`, `G4LFV`, `G1A`, `G1V`, `G1AV`, `G1ARF`, `G1VRF`, `G1AVRF`, `GCS`, `GRSW-10`, and `GOCT` occur in the official local PDF set. `G1CSVWF` and `G1CSVRF` do not occur in any of the nine PDFs and remain `UNVERIFIED - DO NOT USE AS TRAINING FACT`; no inference from G1 or GCS naming was used.

### Important source distinction

E85001-0667 page 5 explicitly defines the G1 syntax: `A = Horn only`, `V = Strobe only`, `AV = Horn-Strobe`, `R = Red`, `W = White`, `N = None`, `F = FIRE`, `F-FR = FEU/FIRE`, `F-SP = FUEGO`, and `A = ALERT`. E85001-1052 page 5 separately defines `LF = Low Frequency Horn only` and `LFV = Low Frequency Horn-Strobe` for G4 wall appliances. These are explicit Edwards definitions, not inferred suffix patterns.

### Cleanup disposition

The evidence-based question cleanup retained only page-supported Genesis claims, rewrote unsupported distractors and explanation additions, and removed the redundant question IDs `partNumberQuestions.js` 10, `partNumberQuestions.js` 11, and `wiringQuestions.js` 56. `G1CSVWF` and `G1CSVRF` remain unverified and are absent from scored training content. The detailed change log and validation results are recorded in `LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md`.

## Next family: EST4 platform source-first collection

Review date: 2026-08-20

### Selection rationale

EST4 is the next major unresolved product family selected for source-first auditing. The scored banks contain approximately 30 or more EST4 platform, network, audio, cabinet, CPU, display, power, and estimating questions, which is a larger concentrated unresolved surface than the remaining iO or EDGE groups. Genesis and Signature are treated as completed phases for now and are not being reopened.

### Scored EST4 surface

Affected scored content includes EST4 platform and migration questions in `module1.js` and `module2.js`, plus network controllers/extenders/adders/firewalls, CPUs, remote annunciators, audio units/amplifiers, cabinets, displays, power supplies, and project-estimating scenarios. Exact product/component names occurring in the scored surface include `EST4`, `4-NET`, `4-NET-XT`, `4-NET-AD`, `4-FWAL`, `4-CPU`, remote annunciators, LCD/control-display modules, zoned audio amplifiers, cabinets/chassis, and system power supplies.

### Official EST4 PDFs collected privately

The following official Edwards PDFs were collected under `_sources/edwards/est4/` and are not public Academy content:

| Document | Official title | Collection status | Initial page status |
|---|---|---|---|
| E85014-0001 | EST4 Overview | COLLECTED | Page-readable; initial scan found EST4/network terms |
| E85014-0002 | EST4 Audio Units and Interfaces | COLLECTED | Page-readable; 6 pages |
| E85014-0003 | EST4 Remote Annunciators | COLLECTED | Page-readable; 9 pages |
| E85014-0004 | EST4 Cabinets and Chassis | COLLECTED | Page-readable; large catalog sheet |
| E85014-0006 | EST4 Control Display Modules | COLLECTED | Page-readable |
| E85014-0007 | EST4 Liquid Crystal Display Modules | COLLECTED | Page-readable |
| E85014-0008 | EST4 Network Controllers | COLLECTED | Page-readable |
| E85014-0009 | EST4 Network Extender | COLLECTED | Page-readable |
| E85014-0010 | EST4 Central Processing Unit | COLLECTED | Page-readable |
| E85014-0012 | EST4 Network Firewalls | COLLECTED | Page-readable |
| E85014-0015 | EST4 Network Adder Module | COLLECTED | Page-readable |
| E85014-0017 | EST4 Zoned Audio Amplifiers | COLLECTED | Page-readable |
| E85010-0060 | System Power Supplies | COLLECTED | Page-readable; 4 pages |
| E85014-0019 | EST4 Submittal Guide | COLLECTED | Large PDF collected; page-level review pending |
| E85014-0033 | EST4 Brochure | COLLECTED | Large PDF collected; page-level review pending |

The official EST4 platform page confirmed the exact URLs for the overview, display sheets, brochure, and submittal guide. The initial source collection did not modify any question or product content.

### Initial verification status

The component catalog sheets are collected and page-readable, but no EST4 question has been promoted to verified in this collection step. The next controlled phase must map each scored claim to the exact Edwards PDF page and section, including answer choices and explanations.

### Remaining EST4 source gaps

- Exact page-level mapping for every EST4 scored question and distractor.
- EST4 platform/system-selection claims from the brochure and submittal guide.
- Network topology, media, controller, extender, adder, and firewall claims at question level.
- Audio units, zoned amplifiers, speaker circuits, cabinet, display, CPU, and power relationships at question level.
- Installation, operation, programming, troubleshooting, fault-code, and compatibility claims not explicitly supported by the collected catalog pages.

### EST4 evidence-only audit boundary

The selected EST4 documents are now the primary source set for the next question-by-question audit. No scored claim is promoted by document existence alone. The audit must map each question, answer choice, correct answer, explanation, capacity, topology, migration, network, audio, cabinet, display, CPU, local-rail, and power claim to a specific PDF page and section before any content correction is considered.

## EST4 page-level evidence relationships

Review date: 2026-08-20

The initial page-level audit mapped the following verified relationships from the collected official EST4 PDFs. Question-level classifications and unsupported claim details are recorded in `EST4_SOURCE_VERIFICATION_REPORT.md`.

| Product/component | Edwards-supported claim | Document | PDF page | Section |
|---|---|---|---:|---|
| EST4 | Network/media overview, fiber/Ethernet/copper, EST3 migration context, shared network/audio/telephone data | E85014-0001 | 1 | Overview/Networking; Backward Compatibility |
| 4-NET | Physical network-media selection through network controllers | E85014-0008 | 1 | EST4 Network Controllers |
| 4-NET-XT | Paired extenders at cable-run ends | E85014-0009 | 1-2 | EST4 Network Extender |
| 4-NET-AD | Supplementary SFP/USB network branching relationship | E85014-0015 | 1 | EST4 Network Adder Module |
| 4-FWAL | Secure EST4 interface to outside networks; IPv4/IPv6 support | E85014-0012 | 1 | EST4 Network Firewalls |
| 4-CPU | System-wide network communication, node control, and audio-data control; local-rail learning/limit | E85014-0010 | 1-2 | EST4 Central Processing Unit; Intra-module Communications |
| Remote annunciators | Remote front-panel system status/control over life-safety network | E85014-0003 | 1 | EST4 Remote Annunciators |
| Audio units/interfaces | Modular EST4 voice-audio component architecture | E85014-0002 | 1 | EST4 Audio Units and Interfaces |
| Zoned audio amplifiers | Digital audio decoding, built-in speaker circuit, Class A/Class B outputs | E85014-0017 | 1 | Zoned Audio Amplifiers |
| EST4 audio/network | Network, audio, and firefighter-telephone data sharing over twisted pair/fiber | E85014-0001; E85014-0002 | 1 | Overview/Networking; Audio Units and Interfaces |
| Cabinets/chassis | Documented cabinet/module/display arrangement relationships | E85014-0004 | 1-2 | EST4 Cabinets and Chassis |
| Control-display modules | LED indicators, buttons, labels, cabinet-door display locations | E85014-0006 | 1-2 | Display Modules |
| 4-LCD | Multiple events and routing messages to every or selected LCDs | E85014-0007 | 1-2 | EST4 LCD Display Module |
| System power supplies | Filtered/regulated power distribution to local rail/system modules | E85010-0060 | 1 | System Power Supplies |
| 4-PPS/M | Prohibited combination with specified legacy 3-series power supplies | E85010-0060 | 2 | Power Supply Rules |

These relationships are evidence mappings, not permission to rewrite questions. The 23 fully supported question classifications still require the question-level boundaries documented in the report; 26 remain partial because one or more distractor, explanation, or broader scenario claims exceed the mapped Edwards language.

## Signature devices and modules source-first audit

Review date: 2026-08-20

The official Edwards Intelligent Input-Output Modules library and Intelligent Initiation and Detection page were used to identify source documents. The actual PDFs were downloaded into the private `_sources/edwards/signature/` directory. No question bank, product data, or runtime file was modified during this audit.

### Official Signature documents collected

| Document | Official title | PDF pages | Products/topics | Status |
|---|---|---:|---|---|
| E85001-0644 | High Power Control Relay Module | 4 | SIGA-CRH | COLLECTED - PAGE REVIEWED |
| E85001-0609 | Signal Modules with Class A Operation | 6 | CC2A/MCC2A signal variants | COLLECTED - PAGE REVIEWED |
| E85001-0543 | Synchronization Output Module | 4 | synchronization output family | COLLECTED - PAGE REVIEWED |
| E85001-0297 | Input Modules | 4 | input-module family candidate | COLLECTED - PAGE REVIEWED |
| E85001-0275 | Class A, B Signal Modules | 6 | SIGA-UM/MAB personality-code functions | COLLECTED - PAGE REVIEWED |
| E85001-0272 | Isolator Module SIGA-IM2 | 4 | SIGA-IM2 | COLLECTED - PAGE REVIEWED |
| E85001-0535 | Riser Monitor Modules | 4 | riser monitor family | COLLECTED - PAGE REVIEWED |
| E85001-0533 | Input-Output Modules | 6 | SIGA-IO/MIO personality-code functions; SIGA-CC1S documented in this source set | COLLECTED - PAGE REVIEWED |
| E85001-0241 | Input Modules | 4 | SIGA-CT1, SIGA-CT2 | COLLECTED - PAGE REVIEWED |
| E85001-0239 | Control Relay Modules | 6 | SIGA-CR, SIGA-CRR, MCR/MCRR, SIGA-AB4G reference | COLLECTED - PAGE REVIEWED |
| E85001-0237 | Signal Modules | 6 | SIGA-CC1, SIGA-CC2 | COLLECTED - PAGE REVIEWED |
| E85001-0531 | Releasing Module | 8 | releasing module family | COLLECTED - PAGE REVIEWED |
| E85001-0365 | Universal Input-Output Module Motherboards | 4 | UIO motherboard family | COLLECTED - PAGE REVIEWED |

### Signature page-level evidence

| Part number/family | Edwards-stated fact | Document | Page | Section | Status |
|---|---|---|---:|---|---|
| SIGA-CT1 | Single Input Module; one Class B dry-contact IDC; personality code selects alarm, delayed alarm, active non-latching, or active latching behavior | E85001-0241 | 1-2, 4 | Overview; Application; Specifications | VERIFIED |
| SIGA-CT2 | Dual Input Module; two module addresses; two personality codes; Class B dry-contact input applications | E85001-0241 | 1-2, 4 | Overview; Application; Specifications | VERIFIED |
| SIGA-CC1 | Single Input Signal Module; single-riser signal/audio or telephone circuit personality | E85001-0237 | 1-2, 6 | Overview; Application; Specifications | VERIFIED |
| SIGA-CC2 | Dual Input Signal Module; dual-riser signal/audio personality; two addresses | E85001-0237 | 1-2, 6 | Overview; Application; Specifications | VERIFIED |
| SIGA-CR | Form C dry relay contact for external appliances; relay contact state is not supervised | E85001-0239 | 1-2, 5 | Overview; Application; Specifications | VERIFIED |
| SIGA-CRR | Polarity Reversal Relay Module; reverses 24 VDC output to activate SIGA-AB4G sounder bases | E85001-0239 | 1-2, 5 | Overview; Application; Specifications | VERIFIED |
| SIGA-CRH | High Power Control Relay Module; two Form C contacts; external appliance/equipment shutdown interface; output not supervised | E85001-0644 | 1-3 | Description; Application; Specifications | VERIFIED |
| SIGA-IM2 | Fault Isolator Module; Class A-only use; isolates a shorted section and restores after correction/reset | E85001-0272 | 1-3 | Overview; Application; Typical Wiring; Specifications | VERIFIED |
| SIGA-UM | Universal Class A/B Module; personality codes select input, NAC, two-wire smoke, or Form C relay use | E85001-0275 | 1, 3-4, 6 | Overview; Application (Personality Codes); Typical Wiring; Ordering | VERIFIED |
| SIGA-CC1S | Synchronization Output Module, standard mount | E85001-0533 | 1-4 | Overview; Specifications; Ordering Information | DOCUMENTED BY EDWARDS — NOT CURRENTLY USED IN SCORED TRAINING |
| SIGA-UM2 | Exact identifier absent from all 13 collected module PDFs | All 13 Signature PDFs | All pages searched | Exact identifier search | UNVERIFIED - DO NOT USE AS TRAINING FACT |
| SIGA-HPR | Exact identifier absent from scored question banks and all 13 collected module PDFs | Scored-bank scan; Signature PDF set | All pages searched | Exact identifier search | UNVERIFIED / invalid training identifier |

### Detector sources reused

The previously mapped official detector sheets remain authoritative for scored detector claims: E85001-1002 p. 1 for SIGA-OSCD smoke/CO sensing and independent analysis; E85001-0648 pp. 1-2 for SIGA-COD electrochemical CO sensing, Signature Loop Controller compatibility, and the service-life trouble note; and E85001-1004 pp. 1-2 for SIGA-OSHCD smoke/heat/CO sensing and listed base-option categories. No system-wide detector/base compatibility was inferred.

### Signature audit boundary

- `SIGA-CRH` is the official high-power relay identifier used by the source set. `SIGA-HPR` must not be introduced.
- The official library/file identifier for the SIGA-IM2 source is E85001-0272, but the first page of the downloaded PDF prints E85001-0271. Preserve both identifiers in future citations until Edwards resolves the document-number discrepancy.
- `SIGA-CC1S` is distinct from `SIGA-CC1`: the collected Edwards source identifies CC1S as a Synchronization Output Module.
- `SIGA-UM2` remains unverified despite any existing product-index record.
- Generic monitor/control, SLC/NAC, troubleshooting, HVAC, relay, detector-base, accessory, and manual-station claims remain claim-specific and require their exact source page.
- Genesis references appearing in Signature-oriented distractors or cross-category questions are contamination risks and are documented in `SIGNATURE_SOURCE_VERIFICATION_REPORT.md`; they were not changed in this evidence-only pass.

### Remaining Signature evidence gaps

| Product/family | Official evidence result | Status |
|---|---|---|
| SIGA-DDOS | Supplied `3102774-EN R002 SIGA-DDOS Intelligent Duct Smoke Detector Installation Sheet` and `E85001-2006 Optica Duct Smoke Detector` provide the mapped identity, SLC address, auxiliary relay, and terminal evidence recorded below. | VERIFIED for listed SIGA-DDOS claims; broader Signature family remains unresolved |

### SIGA-DDOS evidence correction update

On 2026-08-21, the supplied `3102774-EN R002 SIGA-DDOS Intelligent Duct Smoke Detector Installation Sheet` and `E85001-2006 Optica Duct Smoke Detector` were used to correct the seven existing SIGA-DDOS scored records: `module1.js` IDs `184-187` and `189`, `module2.js` ID `117`, and `wiringQuestions.js` ID `52`.

| Question IDs | Source pages and sections | Final status | Supported boundary |
|---|---|---|---|
| module1 184 | 3102774-EN R002 p. 1, Description/Application; E85001-2006 p. 1, Optica Intelligent Duct Smoke Detector | VERIFIED | SIGA-DDOS identity and HVAC duct application |
| module1 185-186 | 3102774-EN R002 pp. 1-2, Electronic Addressing/Wiring; E85001-2006 p. 2, Electronic Addressing | VERIFIED | One electronically assigned Signature SLC address |
| module1 187, 189; module2 117 | 3102774-EN R002 pp. 1-4, Auxiliary Relay/Wiring/Terminal Connections; E85001-2006 pp. 1, 4, Auxiliary Relay/Specifications/Ordering Information | VERIFIED | One unsupervised Form C auxiliary/common alarm relay; no universal HVAC sequence or BOM rule inferred |
| wiringQuestions 52 | 3102774-EN R002 pp. 2, 4, Wiring/Terminal Connections | VERIFIED | RELAY_NC, RELAY_C, RELAY_NO terminals and unsupervised auxiliary relay circuit |

Final SIGA-DDOS result: `7 VERIFIED`, `0 PARTIALLY VERIFIED`, `0 UNVERIFIED`, `0 CONTRADICTED`, `0 removed`. This update does not verify the entire Signature family; only the listed SIGA-DDOS records are promoted.

### Signature detector bases and accessories audit

Audit date: 2026-08-21. Exact part-number-first searches were performed for `SIGA-SB`, `SIGA-SB4`, `SIGA-IB`, `SIGA-IB4`, `SIGA-AB4G`, `SIGA-AB4G-LF`, `SIGA-LED`, `SIGA-DMP`, `SIGA-TS`, and `SIGA-SEC2`. The official Edwards Signature/intelligent-device pages exposed the literature library but no dedicated base/accessory technical document for these identifiers in the reviewed source set.

The only limited page-level reference is `SIGA-AB4G` in E85001-0239, p. 5, “Catalog Number,” where Edwards identifies it as an “Audible (Sounder) Detector Base.” This supports identity/reference only, not universal compatibility or the other accessory claims.

Affected direct questions are concentrated in `partNumberQuestions.js` IDs `8`, `19`, `22`, `27`, `43`, `52-54`, `58-59`, `65`, `68`, `70-71`, `76-77`, and `82`, with `finalBossQuestions.js` `fbq_020` as an accessory-related question. `SIGA-SEC2` appears only as a distractor. The complete product and question inventory, status classifications, and KEEP/REWRITE/REMOVE recommendations are recorded in `SIGNATURE_SOURCE_VERIFICATION_REPORT.md`.

Final accessory/base status: `0 VERIFIED`, `1 PARTIALLY VERIFIED` (`SIGA-AB4G` identity reference), remaining targeted claims `UNVERIFIED`, `0 CONTRADICTED`, and `0 confirmed duplicates`. No question content was modified. E85/E850 learner-facing scan remains `0` in stems, answers, and explanations.

### Secondary official-source search update

On 2026-08-21, a deeper exact-part-number search was completed for `SIGA-SB`, `SIGA-SB4`, `SIGA-IB`, `SIGA-IB4`, `SIGA-AB4G-LF`, `SIGA-LED`, `SIGA-DMP`, `SIGA-TS`, and `SIGA-SEC2`. Official Edwards Signature/intelligent-device pages and all page-readable local Signature source text were checked. No new dedicated official base/accessory document or page-level technical mapping was found.

The limited `SIGA-AB4G` reference remains E85001-0239, p. 5, “Catalog Number,” where it is identified as an “Audible (Sounder) Detector Base.” This does not establish `SIGA-AB4G-LF`, compatibility, wiring, power, or sounder behavior.

The complete secondary-search result, affected question IDs, unsupported relationships, and recommendations are recorded in `SIGNATURE_SOURCE_VERIFICATION_REPORT.md`. No questions were modified, and the learner-facing E85/E850 scan remains zero in stems, answer choices, and explanations.

### Sales Support scope alignment

Signature research is limited to product recognition and application knowledge. For each part number, the minimum target is the product identity, primary use, and only those distinctions needed for quoting, estimating, recognition, or product selection. Exhaustive electrical, dimensional, terminal, operating, environmental, and compatibility details are out of scope unless an existing scored question directly tests them.

Under this scope, an official Edwards identity/application source is sufficient for a basic training question; absence of a dedicated SKU document is not proof that a product does not exist. The intended trainee-knowledge items for affected Signature accessory and base products are recorded in `SIGNATURE_SOURCE_VERIFICATION_REPORT.md` and serve as the concrete target for all `REWRITE` questions.

Current accessory dispositions remain: `SIGA-AB4G` identity question `KEEP` within its narrow mapped boundary; other affected direct questions `REWRITE` or `WAIT FOR SOURCE` to align with the intended trainee knowledge; `REMOVE` none. This is a research-threshold clarification only and does not promote unsupported claims or modify question content.
| SIGA-SB, SIGA-SB4, SIGA-IB, SIGA-IB4 | No dedicated official detector-base document or universal compatibility matrix was mapped. | SOURCE NOT FOUND - DO NOT VERIFY |
| SIGA-AB4G | Referenced by E85001-0239 as an Audible Sounder Base; broader compatibility claims remain unmapped. | PARTIALLY VERIFIED |
| SIGA-AB4G-LF, SIGA-LED, SIGA-DMP, SIGA-TS, SIGA-SEC2 | No exact official page mapped in this pass. | SOURCE NOT FOUND - DO NOT VERIFY |
| SIGA-270, SIGA-278 | Edwards detection page confirms Signature single-action and double-action formats, but exact part-number/reset/compatibility documentation was not located. | PARTIALLY VERIFIED |
| SIGA-SD, SIGA-SD-PH, SIGA-SD-UI, SIGA-SC, SIGA-MD, SIGA-PD, SIGA-PHS, SIGA-PD4, SIGA-HRS | No exact official document mapped for these identifiers in this pass. | SOURCE NOT FOUND - DO NOT VERIFY |

The detailed question IDs, claim boundaries, and personality-code table are recorded in `SIGNATURE_SOURCE_VERIFICATION_REPORT.md`. No production content was modified during this remaining-evidence collection pass.

### Final Signature correction disposition

The final correction pass applied only page-supported CT1/CT2, CC1/CC2, CR/CRR/CRH, IM2, and UM changes recorded in the Signature report. No questions were removed. `SIGA-UM2`, `SIGA-CC1S`, and `SIGA-HPR` remain excluded from scored training, and all remaining `SOURCE NOT FOUND` products remain unpromoted.

## Superseding EST4 partial-question correction pass

Correction date: 2026-08-21. This entry supersedes the earlier partial-status disposition for the affected EST4 IDs while preserving the historical evidence tables above.

| File | IDs rewritten | Promoted status | Evidence boundary |
|---|---|---|---|
| `data/module1.js` | 151, 209, 211, 214-218, 228 | VERIFIED for this mapped correction set | Platform, EST3 migration, remote-annunciator, network, audio, power, cabinet, and hardware-group claims remain limited to the cited Edwards pages and sections. |
| `data/module2.js` | 129-134, 138, 141-142, 144, 146 | VERIFIED for this mapped correction set | Audio, cabinet, configuration, power/local-rail, and documented indicator claims contain no universal compatibility, repair, programming, sizing, or project-required conclusion. |

No question was removed. ID 218 contains qualitative BOM-scope awareness only; no pricing, cost, margin, vendor, customer-specific, or confidential commercial value remains. Each changed question retains `sourceType`, `sourceDocument`, `manufacturer`, `verified`, `sourcePage`, and `sourceSection` metadata. The broader EST4 family remains **not fully verified** because other historical partial or source-pending claims remain outside this correction set.

## Superseding EST4 partial-question correction pass

Correction date: 2026-08-21. This entry supersedes the earlier partial-status disposition for the affected EST4 IDs while preserving the historical evidence tables above.

| File | IDs rewritten | Promoted status | Evidence boundary |
|---|---|---|---|
| `data/module1.js` | 151, 209, 211, 214-218, 228 | VERIFIED for this mapped correction set | Platform, EST3 migration, remote-annunciator, network, audio, power, cabinet, and hardware-group claims remain limited to the cited Edwards pages and sections. |
| `data/module2.js` | 129-134, 138, 141-142, 144, 146 | VERIFIED for this mapped correction set | Audio, cabinet, configuration, power/local-rail, and documented indicator claims contain no universal compatibility, repair, programming, sizing, or project-required conclusion. |

No question was removed. ID 218 contains qualitative BOM-scope awareness only; no pricing, cost, margin, vendor, customer-specific, or confidential commercial value remains. Each changed question retains `sourceType`, `sourceDocument`, `manufacturer`, `verified`, `sourcePage`, and `sourceSection` metadata. The broader EST4 family remains **not fully verified** because other historical partial or source-pending claims remain outside this correction set.
