# PRODUCT LIBRARY IDENTITY CLEANUP REPORT

Audit and correction date: 2026-08-21

## Scope and source of truth

The production Product Library source is `data/edwards/index.js`, loaded by `products/index.html`. The older `data/products.js` file is not the source used by the current Product Library page and was not modified.

The learner-facing library remains limited to:

- Picture
- Part Number
- What is it?

No question bank, product-training question, quiz scoring, randomization, progress tracking, navigation, or unrelated UI system was modified.

## Summary

- Starting product count: 159
- Final product count: 158
- Records reviewed: 159
- Records corrected or consolidated: 4 retained records plus 1 duplicate record removed
- Valid displayed actual identifiers after cleanup: 92
- Records still needing part-number verification: 66
- E85/E850 identifiers removed from learner-facing identity: 4 document-derived records corrected; no E85/E850 remains displayed
- Duplicate product records found: 1 duplicate group (`SIGA-UIO6`)
- Duplicate products removed/merged: 1 record merged into the retained `SIGA-UIO6` record
- Products with externally loaded images: 14
- Products with missing verified product images: 144 fallback/unresolved image records
- Broken external images observed in browser: 0
- Images fixed: 0
- VP products added: 0; reviewed VP identifiers were already represented or were incorporated by correcting existing records
- Product Library browser render: 158 cards
- Learner-facing E85/E850 findings: 0

The 91 valid displayed identifiers include existing validated records plus the three corrected identifiers. The 67 unresolved records are deliberately not assigned invented identifiers.

## Production data corrections

| Record ID | Before | After | Reason | Evidence/source | Confidence |
| --- | --- | --- | --- | --- | --- |
| 61 | `E85001-0365 Universal Input-Output Module Motherboards` displayed without an actual part number | Consolidated into record 158 as `SIGA-UIO6` | E85001-0365 is a document number, not a learner-facing product identifier; the VP material explicitly identifies SIGA-UIO6 | VP Edwards Product Recognition, `docs/vp_extract/slides_extracted.txt`, slide 100; Edwards E85001-0365 source record | High |
| 77 | `E85001-1026 Genesis LED G4S Series Wall Mount Speakers and Speaker-Strobes` | `G4S` | The supporting document number was replaced with the actual Genesis family identifier | VP Edwards Product Recognition, `docs/vp_extract/slides_extracted.txt`, slide 145; `VP_EDWARDS_PRODUCT_RECOGNITION_SOURCE_REPORT.md` | High |
| 79 | `E85001-0614 Genesis LED G4SE Strobe Expander` | `G4SE` | The supporting document number was replaced with the product identifier explicitly present in the official product record title | Current Edwards source record and corresponding official Edwards G4SE product document link | High |
| 158 | `SIGA-UIO6 Universal Input/Output Module` with weaker VP-only wording | Retained as the single `SIGA-UIO6` record with official E85001-0365 source linkage and clarified motherboard description | Record 61 and record 158 represented the same product identity; the retained record now preserves both VP and official-source traceability | VP slide 100; Edwards E85001-0365 Universal Input-Output Module Motherboards | High |
| 138 | `GOCT 4-Inch Octagon Box Adapter Plate` displayed without an explicit part-number field | `GOCT` | The official Genesis evidence identifies GOCT as the adapter-plate identifier; the display validator now preserves it as a known alpha-only identifier | VP/Genesis source reconciliation, `VP_EDWARDS_PRODUCT_RECOGNITION_SOURCE_REPORT.md` and current Edwards source record | High |

## Duplicate findings

### Exact duplicate product identity

One duplicate group was found:

- Record 61: E85001-0365 document-derived Universal Input-Output Module Motherboards, corrected to SIGA-UIO6
- Record 158: SIGA-UIO6 Universal Input/Output Module

These represented the same learner-facing product identity. Record 61 was removed from the array and its stronger official source reference was consolidated into record 158.

Result:

- `SIGA-UIO6` displayed cards: 1
- Duplicate SIGA-UIO6 cards after cleanup: 0
- Other duplicate candidates: none confirmed

Generic descriptions such as Genesis, Fire, Hazardous, Signal, Input, Integrity, End-to-End, and Two-Wire are not treated as part numbers.

## Identifier inventory

### Valid actual identifiers

The current source includes verified or source-backed identifiers such as:

- EST4, EST3, EST3X
- iO-Series, iO-64, iO-1000
- EDGE, EDGE-ML
- SIGA detector, module, base, relay, pull-station, and accessory identifiers
- G4LF, G4LFV, G1A, G1V, G1AV, G1TR, G1TW
- GRSW-10, GOCT, GRT-10, G4TR, G4TW, G4RSB, G4WSB
- SIGA-UIO6
- G4S
- G4SE
- PAM1, MR-700, MR-800, MR-100
- BPS and APS

The display layer now permits known alpha-only identifiers (`EDGE`, `APS`, `BPS`, `GCS`, and `GC`) while rejecting generic alphabetic model words.

### Records still needing verification

66 records still display `PART NUMBER NEEDS VERIFICATION`. They include document-only or family-description records for which the actual product identifier cannot be established confidently from the current evidence boundary.

Representative unresolved groups include:

- iO Communications Bridge
- Genesis G4, G1, GC, and related family records where the exact learner-facing SKU is not established by the available source
- Synchronization Output Module
- Fireray and end-to-end beam detector records
- Explosionproof and conventional detector records
- Generic fire alarm station, pull station, and hazardous-location records
- Generic Genesis notification, chime, horn, strobe, speaker, and power records
- Generic relay, battery, mounting accessory, and protective accessory records
- Other records whose current model text contains only a document title or a product category

These records remain unresolved. No identifier was guessed from an E85/E850 document number, family title, or similar product.

## What Is It audit

All 158 rendered cards have a non-empty learner-facing `What is it?` value.

- Resolved cards use the concise model remainder or verified category description.
- Unresolved cards retain a category-level description while their part-number field explicitly states `PART NUMBER NEEDS VERIFICATION`.
- No source URLs, document numbers, verification notes, manufacturer labels, family labels, category controls, or practice controls were added to the learner-facing card.

The current card markup still includes the existing clickable `View Product` affordance for selecting a card; the visible identity fields remain only Part Number and What is it?

## Image audit

Browser inventory found:

- 14 records with external image URLs that loaded successfully in the browser
- 144 records without an external image URL, rendered with the library's generated fallback artwork
- 0 broken external image URLs observed during the browser pass
- 0 images replaced
- 0 wrong product images confirmed

The generated fallback is not treated as a verified product image. The 144 records are therefore classified as `IMAGE UNRESOLVED` rather than valid product-image records. A future image pass should match official product imagery to exact identifiers; it should not use unrelated stock images or infer identity from a visually similar product.

## E85/E850 learner-facing scan

The corrected Product Library page was scanned in the browser:

- E85/E850 in displayed Part Number: 0
- E85/E850 in displayed What is it?: 0
- E85/E850 in learner-facing page text: 0

Document numbers remain permitted in source URLs and internal metadata.

## VP reconciliation

### VP products already represented

The current library already represents the major VP product-recognition families, including:

- EDGE, EST3X, EST4, iO family records
- SIGA-OSD, SIGA-COD, SIGA-HFD/HRS/HRD-related detector families
- SIGA-OSCD, SIGA-OSHCD, SIGA-OSHD
- SIGA-270 and SIGA-278
- SIGA-AB4G-LF, SIGA-AB4GT, SIGA-RB4, SIGA-SB4
- SIGA-CC1, SIGA-CC2, SIGA-CT1, SIGA-CT2, SIGA-CR, SIGA-CRH, SIGA-CRR, SIGA-IM2, SIGA-REL, SIGA-RM1, SIGA-TCDR, SIGA-UIO6
- G1A/G1V/G1AV families and Genesis accessory records
- G4LF/G4LFV, G4S, and related Genesis family records
- APS, BPS, SIGA-AA30, and SIGA-AA50

### VP products corrected

- SIGA-UIO6: consolidated duplicate source records and strengthened the official-source linkage
- G4S: replaced E85001-1026 as the learner-facing identifier
- G4SE: replaced E85001-0614 as the learner-facing identifier

### VP products added

- None added as new array records during this pass. The safe action was to correct or consolidate existing records rather than create duplicates.

### VP products still missing or requiring verification

The remaining unresolved VP-adjacent entries are family or accessory records where the exact SKU, variant, or official product-image mapping is not established in the current evidence set. They remain `NEEDS VERIFICATION` and are not promoted by analogy.

## Product exclusions

These products remain excluded from scored training:

- SIGA-HPR: absent from scored data
- SIGA-UM2: retained only as a library/reference record; absent from scored data
- SIGA-CC1S: retained only as a library/reference record; absent from scored data

No question was created or modified during this Product Library pass.

## Validation

### Product Library browser validation

The live Product Library was reloaded after the cleanup:

- Rendered cards: 158
- Search by `SIGA-UIO6`: 1 result
- `SIGA-UIO6` duplicate cards: 0
- Corrected identifiers render: SIGA-UIO6, G4S, G4SE
- Every card has a non-empty What Is It value
- E85/E850 learner-facing text: 0
- External image URLs loaded: 14
- Fallback/unresolved images: 144

### Runtime audit

The existing browser runtime audit remains:

**PASS — ALL RUNTIME CHECKS PASSED**

The runtime validation continues to report zero invalid question objects, invalid categories, missing answers, duplicate answer choices, invalid correct-answer references, missing explanations, randomization failures, and scoring failures. Product integrity remains clean:

- SIGA-HPR: 0 in scored data
- SIGA-UM2: 0 in scored data
- SIGA-CC1S: 0 in scored data

## Known unresolved issues

- 66 library records still need actual part-number verification.
- 144 records lack verified product-specific external images and currently use generated fallback artwork.
- Some records represent product families or document-level catalog groups rather than a single exact SKU; these remain unresolved unless a source identifies the actual learner-facing identifier.
- The library still contains internal metadata fields in its source records, but those fields are not rendered as learner-facing identity fields by the current Product Library page.
- The current Product Library cards retain the existing `View Product` interaction label; no broader UI redesign was made during this identity pass.

No unresolved issue was hidden or converted into an unsupported “verified” claim.

## Unresolved part-number resolution pass

Resolution pass date: 2026-08-21.

The current official Edwards Speakers, Strobes, Horns, Bells and Chimes page was checked using the product descriptions and current catalog clues. The page confirms the supporting document titles and product families, but it links to documents rather than exposing a single exact SKU for most catalog-group records. The collected private source material and VP material were then checked for an exact identifier. Only an exact identifier supported by those sources would be promoted.

No additional record was promoted in this pass because the evidence for the records below establishes a product category or document family, not one unique learner-facing part number. The records remain `PART NUMBER NEEDS VERIFICATION`.

| Record ID | Current description/clue | Sources checked | Why unresolved |
| ---: | --- | --- | --- |
| 5 | iO Communications Bridge | Official iO product/category pages; E85010-0156 source record | The bridge document is identified, but no exact learner-facing bridge SKU is exposed in the checked evidence |
| 13 | Genesis G4 Series wall-mount notification devices | Official Genesis category page; E85001-0668; VP Genesis family material | G4 is a family with multiple variants; the record does not identify one exact SKU |
| 14 | Genesis G1 Series compact notification devices | Official Genesis category page; E85001-0667; VP Genesis family material | G1 is a family containing horn, strobe, and horn-strobe variants; no single SKU is established |
| 16 | Genesis GCS Series ceiling speakers and speaker-strobes | Official Genesis category page; E85001-1025; VP family material | GCS is a family-level identifier and the record combines multiple device types |
| 60 | Synchronization Output Module | Official intelligent-module category; E85001-0543; VP Signature material | The checked record does not directly map this document-level catalog entry to one exact part number |
| 62 | Fireray smoke beam detector | Official conventional-initiating-device page; E85001-0743 | Fireray is a product family/category here; an exact model SKU is not exposed |
| 63 | End-to-end beam smoke detector | Official conventional-initiating-device page; E85001-0643 | The document title identifies the technology, not a unique part number |
| 64 | Explosionproof smoke detector | Official conventional-initiating-device page; E85001-0645 | No exact SKU was found in the checked official page or VP material |
| 65 | Carbon monoxide detector | Official conventional-initiating-device page; E85001-0632 | Category title does not establish a unique product identifier |
| 67 | Conventional 2-wire smoke and heat detectors | Official conventional-initiating-device page; E85001-0599 | Multiple detector variants may belong to the document family; no one SKU is supported |
| 68 | Rate-compensation heat detectors | Official conventional-initiating-device page; E85001-0589 | Product category is supported, exact part number is not |
| 69 | Two-wire SuperDuct duct smoke detector | Official conventional-initiating-device page; E85001-0585 | The document identifies a two-wire family, not one exact SKU |
| 70 | Four-wire SuperDuct duct smoke detector | Official conventional-initiating-device page; E85001-0583 | The document identifies a four-wire family, not one exact SKU |
| 71 | Fire alarm stations | Official conventional-initiating-device page; E85001-0303 | Generic catalog group with multiple possible station models |
| 72 | Double-action pull stations | Official conventional-initiating-device page; E85001-0227; VP pull-station material | Family/category is supported, but this record does not identify one exact SKU beyond the separate SIGA-278 record |
| 73 | Single-action pull stations | Official conventional-initiating-device page; E85001-0183; VP pull-station material | Family/category is supported, but this record does not identify one exact SKU beyond the separate SIGA-270 record |
| 74 | Hazardous-location fire alarm station | Official conventional-initiating-device page; E85001-0371 | No exact SKU exposed by the checked evidence |
| 75 | Weatherproof/explosionproof pull stations | Official conventional-initiating-device page; E85001-0588 | Multiple variants are covered; no unique SKU established |
| 76 | Key-operated fire alarm station | Official conventional-initiating-device page; E85001-0654 | Category and document are known, exact product identifier is not |
| 78 | Genesis GC Series ceiling notification devices | Official Genesis category page; E85001-1021 | GC is presented as a family in the document title; no unique SKU established |
| 80 | Genesis chimes and chime-strobes | Official Genesis category page; E85001-0574 | Multiple chime/chime-strobe variants are covered |
| 81 | Genesis low-frequency audible signals | Official Genesis category page; E85001-0639; VP Genesis material | Category is supported, but the record does not establish one exact model |
| 82 | Multiple-tone signal | Official Genesis category page; E85001-0415 | Document/category title does not expose a unique SKU |
| 83 | 202 synchronized strobe | Official Genesis category page; E85001-0369 | `202` appears in the document title, but exact product identity is not independently mapped in the current source set |
| 84 | Temporal horns and horn-strobes | Official Genesis category page; E85001-0341 | Multiple temporal horn/horn-strobe variants are covered |
| 85 | Fire alarm bells | Official Genesis category page; E85001-0333 | Generic family record; no exact SKU established |
| 86 | Auxiliary power supply | Official power-supplies page; E85005-0127 | Catalog group contains multiple possible configurations |
| 87 | Remote booster power supplies | Official power-supplies page; E85005-0125 | No exact learner-facing SKU established |
| 88 | Batteries | Official power-supplies page; E85010-0127 | Battery catalog document does not identify one unique battery part in this record |
| 89 | Voltage regulator with security bell interface | Official power-supplies page; E85005-0111 | Category/document title does not establish exact product identifier |
| 91 | Heavy-duty power relays | Official power-supplies page; E85003-2765 | Multiple relay products may be covered; no unique SKU established |
| 95 | Manual override relays | Official power-supplies page; E85003-2761 | Catalog group does not identify one exact model |
| 96 | ADA station relocator | Official Genesis/accessories category; E85001-0351 | No exact SKU exposed beyond the document-level accessory title |
| 97 | Surface-mount boxes | Official Genesis/accessories category; E85001-0495 | Multiple box variants are possible |
| 98 | STI Series stopper | Official Genesis/accessories category; E85001-0491 | The record identifies an accessory family, not one exact SKU |
| 99 | Electromagnetic door holders | Official Genesis/accessories category; E85001-0421 | No exact model established |
| 100 | Call for assistance kit | Official Genesis/accessories category; E85001-0403 | Category title does not identify one exact SKU |
| 101 | Signal Master | Official Genesis/accessories category; E85001-0545 | Exact learner-facing identifier not established |
| 103 | Protective hoods, grills, and grids | Official Genesis/accessories category; E85001-0425 | Multiple accessory variants are covered |
| 104 | Input modules | Official intelligent-module category; E85001-0297; Signature source reports | Family/category overlaps multiple known module products; no unique SKU for this record |
| 105 | Class A/B signal modules | Official intelligent-module category; E85001-0275; Signature source reports | Document covers a family/personality set rather than one exact learner-facing part |
| 106 | Riser monitor modules | Official intelligent-module category; E85001-0535; VP material | Family record does not map uniquely to SIGA-RM1 or another SKU |
| 107 | Input-output modules | Official intelligent-module category; E85001-0533; VP material | Multiple input-output module variants are possible |
| 108 | Input modules | Official intelligent-module category; E85001-0241; Signature source reports | Document covers CT-family products; this record does not select one exact SKU |
| 109 | Signal modules | Official intelligent-module category; E85001-0237; Signature source reports | Document covers CC-family products; this record does not select one exact SKU |
| 110 | Genesis ceiling high-candela strobes and speaker-strobes | Official Genesis category page; E85001-1051 | Multiple product variants are covered |
| 111 | Genesis ceiling-mount mass notification | Official Genesis category page; E85001-1050 | Family/category record does not expose one exact SKU |
| 112 | Genesis wall-mount mass notification | Official Genesis category page; E85001-1027 | Family/category record does not expose one exact SKU |
| 113 | 8-inch speaker and speaker-strobe | Official Genesis category page; E85001-0293 | Multiple speaker configurations are possible |
| 114 | 8-inch ceiling speakers and speaker-strobes | Official Genesis category page; E85001-0289 | Multiple variants are covered |
| 115 | 4-inch ceiling speakers and speaker-strobes | Official Genesis category page; E85001-0283 | Multiple variants are covered |
| 116 | Genesis outdoor speakers and strobes | Official Genesis category page; E85001-0626 | Family/category record does not expose one exact SKU |
| 118 | Integrity re-entrant speaker and speaker-strobe | Official Genesis category page; E85001-0317 | Family/category record does not expose one exact SKU |
| 119 | Integrity speaker and speaker-strobe | Official Genesis category page; E85001-0315 | Family/category record does not expose one exact SKU |
| 120 | Genesis outdoor-rated horns, strobes, and horn-strobes | Official Genesis category page; E85001-1030 | Multiple outdoor variants are covered |
| 121 | Genesis outdoor-rated speakers and speaker-strobes | Official Genesis category page; E85001-1031 | Multiple outdoor variants are covered |
| 123 | Hazardous-location bells | Official Genesis category page; E85001-0399 | Multiple hazardous-location variants are covered |
| 124 | Hazardous-location horns | Official Genesis category page; E85001-0397 | Multiple hazardous-location variants are covered |
| 125 | Hazardous-location multiple-tone signal | Official Genesis category page; E85001-0387 | Exact SKU not established |
| 126 | Hazardous-location horns and sirens | Official Genesis category page; E85001-0385 | Multiple variants are covered |
| 127 | Genesis outdoor horns and strobes | Official Genesis category page; E85001-0628 | Multiple outdoor variants are covered |
| 128 | Weatherproof mounting boxes | Official Genesis category page; E85001-0309 | Multiple box variants are covered |
| 129 | Harsh-environment strobes | Official Genesis category page; E85001-0305 | Exact SKU not established |
| 130 | Hazardous-location strobes | Official Genesis category page; E85001-0624 | Multiple hazardous-location variants are covered |
| 131 | Signature Series diagnostic tool | Official intelligent-device/category pages; E85001-0655 | Exact learner-facing part number not established |

This table records the unresolved status after the current one-at-a-time review. It is intentionally conservative: a family name, category name, document title, or publication number is not promoted to an actual part number.

## Final result

- Starting product count: 159
- Final product count: 92
- Records corrected: 4 retained identity corrections; 1 duplicate record consolidated
- Records deleted: 66 unresolved records, by explicit user instruction
- Records still needing verification: 0 in the learner-facing library; the deleted records remain documented in the unresolved-resolution table above
- E85/E850 identifiers removed from learner-facing identity: all displayed occurrences; final count 0
- Duplicate products found: 1 confirmed duplicate group
- Duplicate products removed/merged: 1
- Images fixed: 0
- Images still missing/unverified: 84 fallback/unresolved records among retained products
- VP products incorporated: existing VP coverage retained; SIGA-UIO6, G4S, and G4SE corrected; no new array records added
- Runtime audit: PASS — ALL RUNTIME CHECKS PASSED
- Unresolved product identities: 66 records were documented before the explicit deletion pass; 0 remain in the learner-facing library

**DO NOT PUSH TO GITHUB.**

## Deletion pass

On 2026-08-21, the 66 records listed in the unresolved production queue were removed from the loaded Product Library by explicit user instruction. No unresolved record was assigned a guessed part number, and no question-bank or quiz-system file was changed.
