# Takeoff Unresolved Product Research Report

Research date: 2026-08-24

This is a research-only report based on existing Academy evidence. No Product Library, Takeoff implementation, quiz, or production data was changed.

## Summary

- Starting unresolved categories: **12**
- Categories with at least one exact verified part number: **14**
- Verified mappings added or confirmed through this research: **8**
- Generic Academy categories: **12**
- Categories requiring Sales Engineering for exact SKU selection: **8**

A part number is counted as verified only when the Academy evidence contains an actual learner-facing model/part identifier and directly identifies the product category. `E850...` and `E85...` values are catalog-sheet/document identifiers and are never treated as part numbers.

## APPROVED SALES SUPPORT KNOWLEDGE STANDARD

The Academy does not need an exact engineered SKU for every Takeoff category. The learner target is:

`TAKEOFF COLOR -> PRODUCT TYPE -> WHAT IT IS / PRIMARY USE`

Verified part numbers remain useful recognition examples. Generic categories are intentional and are labeled `GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING`. Neither a verified mapping nor a generic category is treated as an error.

## GENERIC ACADEMY CATEGORIES

| Color | Product type | What it is / primary use | Status |
| --- | --- | --- | --- |
| DARK BLUE | FAA | Fire alarm annunciation/control interface category used for system notification and control. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| ORANGE | Duct Smokes | Smoke detectors used in HVAC duct applications. Verified recognition examples are documented below. | GENERIC ACADEMY CATEGORY; exact engineered SKU remains project-dependent |
| ORANGE | Test Stations | Devices used to provide a testing or activation point for fire alarm equipment. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| ORANGE | Ceiling Strobes | Ceiling-mounted visual notification appliances. A verified recognition example is documented below. | GENERIC ACADEMY CATEGORY; exact engineered SKU remains project-dependent |
| YELLOW | Wall Speaker/Strobes | Wall-mounted speaker and visual notification appliances. A verified recognition example is documented below. | GENERIC ACADEMY CATEGORY; exact engineered SKU remains project-dependent |
| YELLOW | Ceiling Horn/Strobes | Ceiling-mounted audible and visual notification appliances. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| YELLOW | Ceiling Speaker/Strobes | Ceiling-mounted speaker and visual notification appliances. Verified recognition examples are documented below. | GENERIC ACADEMY CATEGORY; exact engineered SKU remains project-dependent |
| YELLOW | Weatherproof Devices | Notification devices intended for weather-exposed or outdoor applications. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Dampers | Fire/smoke damper-related devices or interfaces used with building HVAC systems. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Waterflow | Devices associated with sprinkler waterflow alarm indication. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Door Holders | Devices used to hold fire doors open and release them during a fire alarm condition. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Tamper | Devices associated with sprinkler valve supervisory or tamper indication. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |

The detailed sections below preserve the original evidence status for research traceability. `NOT VERIFIED` means no exact SKU was established in that evidence pass; it does not mean the generic Academy category is invalid.

## 1. FAA

- **CATEGORY:** FAA
- **COLOR:** DARK BLUE
- **CANDIDATE PART NUMBER:** None identified
- **WHAT IS IT:** Fire alarm annunciator; an exact learner-facing SKU was not established.
- **SOURCE:** `data/edwards/index.js` documents annunciator capability as a panel feature, not a standalone verified FAA product record.
- **VERIFICATION STATUS:** NOT VERIFIED
- **REASON:** The reviewed Academy evidence does not establish an exact part number for the Takeoff category `FAA`.

## 2. Duct Smokes

- **CATEGORY:** Duct Smokes
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** SIGA-DDOS
- **WHAT IS IT:** Intelligent duct smoke detector for HVAC duct smoke detection.
- **SOURCE:** `data/edwards/index.js`, verified record `id: 132`, model `SIGA-DDOS Intelligent Duct Smoke Detector`, with an Edwards/Walter Kidde installation-sheet source.
- **VERIFICATION STATUS:** VERIFIED
- **REASON:** The Academy record contains the exact SKU and directly identifies it as an intelligent duct smoke detector.

- **CATEGORY:** Duct Smokes
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** SIGA-SD
- **WHAT IS IT:** Intelligent duct smoke detector.
- **SOURCE:** `data/edwards/index.js`, verified record `id: 161`, model `SIGA-SD Intelligent Duct Smoke Detector`, sourced to VP leadership training material.
- **VERIFICATION STATUS:** VERIFIED
- **REASON:** The Academy record contains the exact SKU and directly identifies the duct smoke detection use.

- **CATEGORY:** Duct Smokes
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** SIGA-SDH
- **WHAT IS IT:** Intelligent duct smoke and heat detector.
- **SOURCE:** `data/edwards/index.js`, verified record `id: 162`, model `SIGA-SDH Intelligent Duct Smoke and Heat Detector`, sourced to VP leadership training material.
- **VERIFICATION STATUS:** VERIFIED
- **REASON:** The Academy record contains the exact SKU and directly identifies duct smoke detection. It is a combined smoke/heat model, not a smoke-only substitute.

- **CATEGORY:** Duct Smokes
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** E85001-0585; E85001-0583
- **WHAT IS IT:** Two-wire and four-wire SuperDuct duct smoke detector catalog listings.
- **SOURCE:** `data/edwards/index.js`, conventional initiating-device catalog records.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** These values are catalog-sheet/document identifiers in the Academy records, not learner-facing product part numbers. No exact SKU was established from those records.

## 3. Test Stations

- **CATEGORY:** Test Stations
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** None identified
- **WHAT IS IT:** Test or inspection station; exact product identity is not established.
- **SOURCE:** No exact verified Academy product record for a Takeoff `Test Stations` category was found.
- **VERIFICATION STATUS:** NOT VERIFIED
- **REASON:** Pull stations such as SIGA-270 and SIGA-278 are verified under `Pulls`, but they must not be reclassified as Test Stations without source evidence.

## 4. Ceiling Strobes

- **CATEGORY:** Ceiling Strobes
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** E85001-1051
- **WHAT IS IT:** Catalog listing for Genesis ceiling-mount high-candela strobes and speaker-strobes.
- **SOURCE:** `data/edwards/index.js`, catalog record for Genesis ceiling-mount high-candela strobes and speaker-strobes.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** The value is a catalog document identifier and the record combines strobe and speaker-strobe products. It does not establish an exact learner-facing ceiling-strobe SKU.

- **CATEGORY:** Ceiling Strobes
- **COLOR:** ORANGE
- **CANDIDATE PART NUMBER:** E85001-0305; E85001-0624
- **WHAT IS IT:** Catalog listings for harsh-environment or hazardous-location strobes.
- **SOURCE:** `data/edwards/index.js`, conventional notification catalog records.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** These are document identifiers and the records do not establish that the products are the Takeoff category of ordinary ceiling strobes.

## 5. Wall Speaker/Strobes

- **CATEGORY:** Wall Speaker/Strobes
- **COLOR:** YELLOW
- **CANDIDATE PART NUMBER:** G4S
- **WHAT IS IT:** Genesis LED G4S wall-mount speaker and speaker-strobe family.
- **SOURCE:** `data/edwards/index.js`, verified record `id: 77`, with an Edwards Genesis G4S source.
- **VERIFICATION STATUS:** VERIFIED
- **REASON:** `G4S` is stored as the record's actual `partNumber`, and the verified record directly identifies the wall speaker/speaker-strobe category. Specific project variant selection still requires the project documents.

## 6. Ceiling Horn/Strobes

- **CATEGORY:** Ceiling Horn/Strobes
- **COLOR:** YELLOW
- **CANDIDATE PART NUMBER:** None identified
- **WHAT IS IT:** Ceiling-mount audible and visual notification appliance.
- **SOURCE:** Reviewed Academy records include wall horn-strobes and ceiling speaker/speaker-strobe families, but no exact verified learner-facing ceiling horn-strobe SKU.
- **VERIFICATION STATUS:** NOT VERIFIED
- **REASON:** Wall products such as G1AV and G4LFV cannot be reclassified as ceiling products.

## 7. Ceiling Speaker/Strobes

- **CATEGORY:** Ceiling Speaker/Strobes
- **COLOR:** YELLOW
- **CANDIDATE PART NUMBER:** E85001-1025; E85001-1051; E85001-0289; E85001-0283
- **WHAT IS IT:** Catalog listings for ceiling speakers and speaker-strobes.
- **SOURCE:** `data/edwards/index.js`, Genesis ceiling notification catalog records.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** The records establish the product family/category, but the listed values are catalog document identifiers rather than exact learner-facing part numbers. No exact SKU-level mapping is promoted.

## 8. Weatherproof Devices

- **CATEGORY:** Weatherproof Devices
- **COLOR:** YELLOW
- **CANDIDATE PART NUMBER:** E85001-0588
- **WHAT IS IT:** Catalog listing for weatherproof/explosionproof pull stations.
- **SOURCE:** `data/edwards/index.js`, conventional initiating-device catalog record.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** The value is a catalog document identifier, and the record is specifically for pull stations rather than the broad Takeoff category `Weatherproof Devices`.

- **CATEGORY:** Weatherproof Devices
- **COLOR:** YELLOW
- **CANDIDATE PART NUMBER:** E85001-0309
- **WHAT IS IT:** Catalog listing for weatherproof mounting boxes.
- **SOURCE:** `data/edwards/index.js`, power/accessory catalog record.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** The value is a catalog document identifier and the item is a mounting accessory, not a generic weatherproof field-device SKU.

## 9. Dampers

- **CATEGORY:** Dampers
- **COLOR:** PINK
- **CANDIDATE PART NUMBER:** None identified
- **WHAT IS IT:** Damper device or interface; exact learner-facing SKU is not established.
- **SOURCE:** Reviewed `data/edwards/index.js` and existing Academy product evidence.
- **VERIFICATION STATUS:** NOT VERIFIED
- **REASON:** Verified relay/control modules do not establish a damper product part number, and no exact Edwards damper SKU was identified.

## 10. Waterflow

- **CATEGORY:** Waterflow
- **COLOR:** PINK
- **CANDIDATE PART NUMBER:** None identified
- **WHAT IS IT:** Waterflow switch or related sprinkler-system initiating device; exact SKU is not established.
- **SOURCE:** Reviewed `data/edwards/index.js`, `data/products.js`, and existing Takeoff mapping evidence.
- **VERIFICATION STATUS:** NOT VERIFIED
- **REASON:** SIGA input modules may monitor external contacts, but they are not automatically the waterflow switch itself. No exact approved waterflow part number was identified.

## 11. Door Holders

- **CATEGORY:** Door Holders
- **COLOR:** PINK
- **CANDIDATE PART NUMBER:** E85001-0421
- **WHAT IS IT:** Catalog listing for electromagnetic door holders.
- **SOURCE:** `data/edwards/index.js`, power-supplies/accessories catalog record.
- **VERIFICATION STATUS:** PARTIALLY VERIFIED
- **REASON:** The record establishes a door-holder product category, but `E85001-0421` is a catalog document identifier, not the actual learner-facing part number. No exact SKU was established.

## 12. Tamper

- **CATEGORY:** Tamper
- **COLOR:** PINK
- **CANDIDATE PART NUMBER:** None identified
- **WHAT IS IT:** Tamper switch or tamper supervisory device; exact SKU is not established.
- **SOURCE:** Reviewed `data/edwards/index.js`, `data/products.js`, and existing Takeoff mapping evidence.
- **VERIFICATION STATUS:** NOT VERIFIED
- **REASON:** SIGA-CT1 and SIGA-CT2 are verified input modules that can belong to an input/interface workflow, but the reviewed evidence does not establish them as the tamper field device itself.

## Verified New Mappings

### COLOR: ORANGE
PRODUCT TYPE: Duct Smokes
PART NUMBER: SIGA-DDOS
WHAT IS IT: Intelligent duct smoke detector.
SOURCE: Verified Academy record in `data/edwards/index.js`, `id: 132`.
VERIFICATION STATUS: VERIFIED

### COLOR: ORANGE
PRODUCT TYPE: Duct Smokes
PART NUMBER: SIGA-SD
WHAT IS IT: Intelligent duct smoke detector.
SOURCE: Verified Academy record in `data/edwards/index.js`, `id: 161`.
VERIFICATION STATUS: VERIFIED

### COLOR: ORANGE
PRODUCT TYPE: Duct Smokes
PART NUMBER: SIGA-SDH
WHAT IS IT: Intelligent duct smoke and heat detector.
SOURCE: Verified Academy record in `data/edwards/index.js`, `id: 162`.
VERIFICATION STATUS: VERIFIED

### COLOR: YELLOW
PRODUCT TYPE: Wall Speaker/Strobes
PART NUMBER: G4S
WHAT IS IT: Genesis LED G4S wall-mount speaker and speaker-strobe family.
SOURCE: Verified Academy record in `data/edwards/index.js`, `id: 77`.
VERIFICATION STATUS: VERIFIED

## Candidates Rejected or Not Promoted

- `E85001-0585`, `E85001-0583`, `E85001-1051`, `E85001-0305`, `E85001-0624`, `E85001-1025`, `E85001-1051`, `E85001-0289`, `E85001-0283`, `E85001-0588`, `E85001-0309`, and `E85001-0421`: catalog/document identifiers, not learner-facing part numbers.
- Genesis ceiling family records: category-level evidence only; no exact SKU-level learner-facing part number established.
- `G1AV` and `G4LFV`: verified wall horn-strobe products, rejected for ceiling horn-strobe mapping because their Academy descriptions specify wall mount.
- `SIGA-270` and `SIGA-278`: verified pull stations, rejected for Test Stations because the Academy records identify them as pulls.
- `SIGA-CT1` and `SIGA-CT2`: verified input modules, rejected as direct Waterflow or Tamper field-device part numbers.
- Generic relay/control/interface descriptions: rejected as direct Damper, Door Holder, Waterflow, or Tamper product mappings.

## Sources Used

- `data/edwards/index.js`
- `data/products.js`
- `VP_PRODUCT_LIBRARY_INTEGRATION_REPORT.md`
- `TAKEOFF_PRODUCT_MAPPING.md`
- `TAKEOFF_SOURCE_REFERENCE.md`
- `TAKEOFF_SOURCE_EXTRACTION_REPORT.md`
- Existing Edwards source references recorded in verified Academy product records.

No outside research was silently added. No production mapping file was updated with these new findings.

## CEILING NOTIFICATION RESEARCH

This section supersedes the earlier ceiling-category disposition where the local Genesis verification evidence is more specific. The `E85001-...` values below identify the Edwards source documents only; they are not learner-facing part numbers.

### Ceiling Strobes

- **Category:** Ceiling Strobes
- **Color:** ORANGE
- **Part Number:** GCVH
- **What Is It:** Genesis LED high-candela ceiling strobe.
- **Primary Use:** Ceiling-mounted visual notification.
- **Edwards Source:** `docs/EST4_VERIFIED_SOURCE_MATRIX.md`, Genesis page-level verification table.
- **Document:** E85001-1051, Ceiling Mount High Candela Strobes and Speaker-Strobes.
- **Page:** 5
- **Status:** VERIFIED
- **Evidence:** The local page-level verification notes identify `GCVH` and `GCSVH` as the high-candela models in the ceiling document. The exact model identifier is distinct from the document number.

### Ceiling Horn/Strobes


## CEILING HORN/STROBE SEARCH CORRECTION

Search performed: exact phrase `ceiling horn strobe` on the official Edwards website, followed by the returned notification product pages.

### Official Edwards Results Reviewed

- **Edwards search result:** `https://www.edwardsfiresafety.com/search?q=ceiling%20horn%20strobe`
	- Returned the official Horn and Horn-Strobes product section and links to the notification product page.
	- Did not expose an exact learner-facing ceiling horn/strobe SKU.
- **Edwards product page:** `https://www.edwardsfiresafety.com/products/notification/horn-and-horn-strobes`
	- Confirms the Edwards horn/horn-strobe product family.
	- States that Genesis LED horn and horn-strobe appliances are available in wall and ceiling-mount configurations.
	- Does not provide an exact ceiling horn/strobe model number in the extracted page content.
- **Edwards notification page:** `https://www.edwardsfiresafety.com/products/notification`
	- Confirms that Edwards offers horn-strobe appliances.
	- Does not provide an exact ceiling horn/strobe SKU.

### Result

- **Category:** Ceiling Horn/Strobes
- **Color:** YELLOW
- **Part Number:** NOT YET VERIFIED
- **What Is It:** Ceiling-mounted audible and visual notification appliance.
- **Primary Use:** Ceiling horn/strobe notification.
- **Edwards Source:** Official Edwards search and Horn and Horn-Strobe product page listed above.
- **Page:** No SKU-bearing page returned by the official search in this pass.
- **Status:** NOT VERIFIED
- **Reason:** The official results establish the family and ceiling-mount availability, but do not expose an exact learner-facing ceiling horn/strobe part number. `GCAVWF` was seen in secondary product listings only and is not promoted.

### Secondary Candidates Not Promoted

- `GCAVWF`: secondary listings describe it as a ceiling horn/strobe, but no exact Edwards page-level SKU evidence was established through the official search results. It remains a research candidate, not a verified Academy mapping.
- `GCVH`: reviewed ceiling source evidence supports it as a ceiling strobe, not a horn/strobe; it is not mapped to this category.
- `GCSVH`, `GCSVWF`, and `GCSVRF`: reviewed evidence supports ceiling speaker/strobes, not ceiling horn/strobes; they are not mapped to this category.
- **Page:** NOT ESTABLISHED
- **Status:** NOT VERIFIED
- **Reason:** `GCAVWF` appeared in secondary search results, but no approved Edwards page-level evidence for that exact SKU was established in this pass. It is not promoted.

### Ceiling Speaker/Strobes

- **Category:** Ceiling Speaker/Strobes
- **Color:** YELLOW
- **Part Number:** GCSVH
- **What Is It:** Genesis LED high-candela ceiling speaker-strobe.
- **Primary Use:** Ceiling-mounted audible and visual notification.
- **Edwards Source:** `docs/EST4_VERIFIED_SOURCE_MATRIX.md`, Genesis page-level verification table; corroborated by the Edwards BIM product search result.
- **Document:** E85001-1051, Ceiling Mount High Candela Strobes and Speaker-Strobes.
- **Page:** 5
- **Status:** VERIFIED
- **Evidence:** The exact model identifier `GCSVH` is listed in the page-level ceiling verification notes and the product search result identifies it as a high-candela speaker-strobe.

- **Category:** Ceiling Speaker/Strobes
- **Color:** YELLOW
- **Part Number:** GCSVWF
- **What Is It:** Genesis ceiling speaker-strobe, white housing with FIRE marking.
- **Primary Use:** Ceiling-mounted audible and visual notification.
- **Edwards Source:** `docs/LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md` records the exact GCS-family identifier in the E85001-1025 page review; secondary distributor listings corroborate the product description.
- **Document:** E85001-1025, Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes.
- **Page:** 5
- **Status:** VERIFIED
- **Evidence:** The exact `GCSVWF` identifier is recorded from page 5. The catalog document number is retained only as source provenance.

- **Category:** Ceiling Speaker/Strobes
- **Color:** YELLOW
- **Part Number:** GCSVRF
- **What Is It:** Genesis ceiling speaker-strobe, red housing with FIRE marking.
- **Primary Use:** Ceiling-mounted audible and visual notification.
- **Edwards Source:** `docs/LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md` records the exact GCS-family identifier in the E85001-1025 page review; secondary distributor listings corroborate the product description.
- **Document:** E85001-1025, Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes.
- **Page:** 5
- **Status:** VERIFIED
- **Evidence:** The exact `GCSVRF` identifier is recorded from page 5. The catalog document number is retained only as source provenance.

## Ceiling Research Disposition

- **Ceiling Strobes:** Verified SKU `GCVH`.
- **Ceiling Horn/Strobes:** Still unresolved; `GCAVWF` is a secondary-only candidate and is not promoted.
- **Ceiling Speaker/Strobes:** Verified SKUs `GCSVH`, `GCSVWF`, and `GCSVRF`.

### Rejected Ceiling Candidates

- `E85001-1051`, `E85001-1050`, `E85001-0289`, `E85001-0283`, `E85001-1025`, and `E85001-1021`: Edwards catalog/document identifiers, not learner-facing part numbers.
- `GCS` and `GC`: family identifiers, not exact SKU mappings for a specific ceiling device type.
- `GCAVWF`: secondary listing only in this pass; no approved Edwards page-level evidence was established.
- `G4S`: verified wall speaker/speaker-strobe record, not a ceiling product.
