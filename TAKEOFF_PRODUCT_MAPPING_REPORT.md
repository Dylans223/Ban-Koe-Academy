# Takeoff Product Mapping Report

Research date: 2026-08-24

## Summary

- Total Takeoff product-type categories: **22**
- Categories with at least one verified part number: **14**
- Categories with no verified part number: **8**
- Total verified part-number mappings: **30**
- Multiple-part-number categories: **FACP (6), Smokes (8), Duct Smokes (3), Ceiling Speaker/Strobes (3), CR's (2), and Pulls (2)**
- Generic Takeoff categories: **12**

The complete mapping detail is in [TAKEOFF_PRODUCT_MAPPING.md](TAKEOFF_PRODUCT_MAPPING.md).

## Verified Mappings

| Color | Product type | Verified part numbers |
| --- | --- | --- |
| DARK BLUE | FACP | EST4, EST3, EST3X, iO-64, iO-1000, EDGE |
| RED | Smokes | SIGA-OSD, SIGA-OSCD, SIGA-OSHD, SIGA-OSHCD, SIGA-PD, SIGA-PS, SIGA-PHS, SIGA-PHD |
| LIGHT BLUE | R of R Heats | SIGA-HRS |
| LIGHT BLUE | Fixed Heats | SIGA-HFS |
| ORANGE | Duct Smokes | SIGA-DDOS, SIGA-SD, SIGA-SDH |
| ORANGE | Wall Strobes | G1V |
| ORANGE | Ceiling Strobes | GCVH |
| YELLOW | Wall Horn/Strobes | G1AV, G4LFV |
| YELLOW | Wall Speaker/Strobes | G4S |
| YELLOW | Ceiling Speaker/Strobes | GCSVH, GCSVWF, GCSVRF |
| GREEN | Pulls | SIGA-270, SIGA-278 |
| PINK | CR's | SIGA-CR, SIGA-CRR |
| PINK | CT-1 | SIGA-CT1 |
| PINK | CT-2 | SIGA-CT2 |

These are category associations based on exact verified Academy model records and descriptions. They are not assignments to any specific drawing symbol, occurrence, or quantity.

## Generic Takeoff Categories

The following categories are intentionally taught as generic Takeoff categories. They are not errors or missing training content. The Academy teaches recognition, primary use, and Takeoff color; exact engineered SKU selection belongs to Sales Engineering.

- DARK BLUE: FAA
- ORANGE: Test Stations
- YELLOW: Ceiling Horn/Strobes; Weatherproof Devices
- PINK: Dampers; Waterflow; Door Holders; Tamper

Generic primary-use descriptions:

| Color | Product type | What it is / primary use | Status |
| --- | --- | --- | --- |
| DARK BLUE | FAA | Fire alarm annunciation/control interface category used for system notification and control. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| ORANGE | Duct Smokes | Smoke detectors used in HVAC duct applications. | GENERIC ACADEMY CATEGORY; verified recognition examples are listed above |
| ORANGE | Test Stations | Devices used to provide a testing or activation point for fire alarm equipment. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| ORANGE | Ceiling Strobes | Ceiling-mounted visual notification appliances. | GENERIC ACADEMY CATEGORY; verified recognition examples are listed above |
| YELLOW | Wall Speaker/Strobes | Wall-mounted speaker and visual notification appliances. | GENERIC ACADEMY CATEGORY; verified recognition examples are listed above |
| YELLOW | Ceiling Horn/Strobes | Ceiling-mounted audible and visual notification appliances. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| YELLOW | Ceiling Speaker/Strobes | Ceiling-mounted speaker and visual notification appliances. | GENERIC ACADEMY CATEGORY; verified recognition examples are listed above |
| YELLOW | Weatherproof Devices | Notification devices intended for weather-exposed or outdoor applications. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Dampers | Fire/smoke damper-related devices or interfaces used with building HVAC systems. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Waterflow | Devices associated with sprinkler waterflow alarm indication. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Door Holders | Devices used to hold fire doors open and release them during a fire alarm condition. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |
| PINK | Tamper | Devices associated with sprinkler valve supervisory or tamper indication. | GENERIC ACADEMY CATEGORY — EXACT SKU DETERMINED BY SALES ENGINEERING |

Family-level records, generic module descriptions, and catalog-sheet identifiers were not treated as exact product mappings. In particular, an `E850...` or `E85...` identifier is a document identifier, not a part number.

## Sources Used

1. **Existing verified Academy Product Library:** [data/edwards/index.js](data/edwards/index.js) was used for the verified model names, categories, descriptions, verification status, and source references for panels, detectors, Genesis wall notification products, pull stations, and Signature modules.
2. **Existing Academy product records:** [data/products.js](data/products.js) was considered for existing product identity records. It was not modified and was not used to promote generic family records into exact mappings.
3. **Existing source and provenance reports:** [TAKEOFF_SOURCE_REFERENCE.md](TAKEOFF_SOURCE_REFERENCE.md) and [TAKEOFF_SOURCE_EXTRACTION_REPORT.md](TAKEOFF_SOURCE_EXTRACTION_REPORT.md) establish the user-confirmed Takeoff color categories and the boundary that the original PDF did not establish exact mappings.
4. **Existing VP integration documentation:** [VP_PRODUCT_LIBRARY_INTEGRATION_REPORT.md](VP_PRODUCT_LIBRARY_INTEGRATION_REPORT.md) was used as an audit aid. Entries listed there as still needing verification were not promoted to verified learner-facing mappings.
5. **Existing Edwards verification records:** Records in `data/edwards/index.js` with `verification: "VERIFIED"` and exact model descriptions were preferred. Document-only or page-mapping-pending entries were excluded from the verified count.

## Evidence Handling

- No external research was silently added.
- No E85/E850 document number is presented as a learner-facing part number.
- No color was added to or written into Product Library identity records.
- No Takeoff category was assigned a part number solely because its name appeared similar.
- Multi-function products were listed only where the verified Academy description directly supports the named category; drawing-specific applicability still requires project review.

## Recommended Next Research

1. Leave exact engineered SKU selection for FAA, Test Stations, Ceiling Horn/Strobes, Weatherproof Devices, Dampers, Waterflow, Door Holders, and Tamper to Sales Engineering.
2. Confirm the intended Takeoff category for each verified recognition example with Ban-Koe before exposing it in an interactive exercise.
3. Keep drawing symbols, colors, locations, expected quantities, existing devices, and exclusions separate until an approved readable drawing is available.

## Validation Scope

This was a research-only pass. No production data, Product Library records, quiz banks, Takeoff simulator logic, scoring, randomization, or navigation were changed.
