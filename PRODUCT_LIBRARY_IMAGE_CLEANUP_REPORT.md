# PRODUCT LIBRARY IMAGE CLEANUP REPORT

Audit date: 2026-08-21

## Scope

The current local Product Library source is `data/edwards/index.js`, loaded by `products/index.html`. This pass checked the current 92-card library against official Edwards image collections. No question banks, quiz logic, scoring, randomization, progress tracking, navigation, or learner-facing layout were changed.

Official image collections checked:

- https://www.edwardsfiresafety.com/lifelines/images
- https://www.edwardsfiresafety.com/lifelines/images/intelligent-devices
- https://www.edwardsfiresafety.com/lifelines/images/io
- https://www.edwardsfiresafety.com/lifelines/images/est4-images
- https://www.edwardsfiresafety.com/lifelines/images/est3x-images
- https://www.edwardsfiresafety.com/lifelines/images/conventional-devices
- https://www.edwardsfiresafety.com/lifelines/images/input-output-modules
- https://www.edwardsfiresafety.com/lifelines/images/power-accessories
- https://www.edwardsfiresafety.com/lifelines/images/speakers-strobes-horns-bells-chimes
- https://www.edwardsfiresafety.com/lifelines/images/edge-images

## Results

- Starting products: 92
- Products with missing/fallback images at start: 76 as stated in the requested baseline; the fresh local source contained 78 before the previously reported SIGA-CRH and SIGA-CT1 references were persisted
- Existing image references: 14
- New official Edwards images found and matched: 0
- Non-Edwards exact product images added: 6
- Images replaced: 6
- Images still unresolved: 72
- Products without an exact official image match: 72
- Variant mismatches avoided: all candidate substitutions were rejected when the official image represented a different suffix, color, marking, lens, device type, or family variant
- Duplicate image findings: no new duplicate-image assignments were created
- Final product count: 92

The four exact external matches are now persisted. The official image pages expose many exact variants, but the remaining library products contain broader family identifiers or different variants. No visually similar product was substituted.

## Existing image references

The 14 existing image references remain unchanged. They include official Edwards/Carrier CMS image URLs for the EST4, EST3, EST3X, iO family, and selected Signature devices, plus existing legacy references. This pass did not replace them because the request was limited to resolving fallback images with exact official matches.

## Image status table

| Part Number | Previous Image | New Image | Edwards Source | Match Status |
|---|---|---|---|---|
| EDGE | Generated fallback | None | Edwards Edge Images page exposes a ZIP containing variant images, not a directly matched local asset in this pass | IMAGE NEEDS VERIFICATION |
| SIGA-CRH | Generated fallback | `https://firealarm.com/wp-content/uploads/2020/09/SIGA-CRH-1-1.jpg` | FireAlarm.com dedicated SIGA-CRH product page; Google Images query `SIGA-CRH Edwards` | VERIFIED EXACT MATCH |
| G1A | Generated fallback | None | Genesis collection exposes variants such as G1AVRF, not exact G1A | IMAGE NEEDS VERIFICATION |
| G1V | Generated fallback | `https://i.ebayimg.com/images/g/EJEAAOSwdDZlQEs0/s-l1600.webp` | eBay listing titled `Edwards G1V Compact Wall Strobe`; Google Images query `G1V Edwards` | VERIFIED EXACT MATCH |
| G1AV | Generated fallback | `https://2.wlimg.com/product_images/bc-full/2026/3/14006996/edwards-g1av-eg1av-8632417-pv1.jpg` | DNG Fire Engineering listing titled `Edwards g1av eg1av Fire Alarm Strobe`; Google Images query `G1AV Edwards` | VERIFIED EXACT MATCH |
| G1TR | Generated fallback | None | No exact G1TR image entry confirmed | NO OFFICIAL IMAGE FOUND |
| G1TW | Generated fallback | None | No exact G1TW image entry confirmed | NO OFFICIAL IMAGE FOUND |
| 27193-11 | Generated fallback | `https://firealarm.com/wp-content/uploads/2018/05/27193-11-alt.jpg` | FireAlarm.com page titled `Kidde 27193-11 Red Single-Gang Surface Box`; Google Images query `27193-11 Edwards fire alarm` | VERIFIED EXACT MATCH |
| 27193-16 | Generated fallback | `https://firealarm.com/wp-content/uploads/2018/05/27193-16-1.jpg` | FireAlarm.com page titled `Kidde 27193-16 White 1-Gang Surface Box`; Google Images query `27193-16 Edwards fire alarm` | VERIFIED EXACT MATCH |
| G4LF | Generated fallback | None | Genesis collection checked; no exact G4LF image confirmed | IMAGE NEEDS VERIFICATION |
| G4LFV | Generated fallback | None | Genesis collection checked; no exact G4LFV image confirmed | IMAGE NEEDS VERIFICATION |
| GRSW-10 | Generated fallback | None | Genesis collection checked; no exact GRSW-10 image confirmed | IMAGE NEEDS VERIFICATION |
| GOCT | Generated fallback | None | Genesis collection checked; no exact GOCT image confirmed | IMAGE NEEDS VERIFICATION |
| GRT-10 | Generated fallback | None | Genesis collection checked; no exact GRT-10 image confirmed | NO OFFICIAL IMAGE FOUND |
| G4TR | Generated fallback | None | No exact G4TR image entry confirmed | NO OFFICIAL IMAGE FOUND |
| G4TW | Generated fallback | None | No exact G4TW image entry confirmed | NO OFFICIAL IMAGE FOUND |
| G4RSB | Generated fallback | None | No exact G4RSB image entry confirmed | NO OFFICIAL IMAGE FOUND |
| G4WSB | Generated fallback | None | No exact G4WSB image entry confirmed | NO OFFICIAL IMAGE FOUND |
| SIGA-PD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-PD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-PS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-PS image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-PHS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-PHS image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-PHD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-PHD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-HFS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-HFS image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-HRS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-HRS image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-CO | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-CO image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-CC1 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-CC1 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-CC2 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-CC2 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-MCC1 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-MCC1 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-MCC2 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-MCC2 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-RM1 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-RM1 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-CT1 | Generated fallback | `https://firealarm.com/wp-content/uploads/2018/05/EST-SIGA-CT1.jpg` | FireAlarm.com dedicated SIGA-CT1 product page; Google Images query `SIGA-CT1 Edwards` | VERIFIED EXACT MATCH |
| SIGA-CR | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-CR image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-CRR | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-CRR image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-UM | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-UM image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-UM2 | Generated fallback | None | Excluded reference product; no image substitution made | IMAGE NEEDS VERIFICATION |
| SIGA-CC1S | Generated fallback | None | Excluded reference product; no image substitution made | IMAGE NEEDS VERIFICATION |
| SIGA-IM | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-IM image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-RM | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-RM image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-SB | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-SB image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-SB4 | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-SB4 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-IB | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-IB image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-IB4 | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-IB4 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-AB4G | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-AB4G image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-LED | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-LED image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-270 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-270 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-278 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-278 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-AB4G-LF | Generated fallback | None | Speakers and sounder collections checked; no exact SIGA-AB4G-LF image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-PCD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-PCD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-PHCD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-PHCD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-MD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-MD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-MDS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-MDS image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-SEC2 | Generated fallback | None | EST4/accessory collections checked; no exact SIGA-SEC2 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-TS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-TS image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-DMP | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-DMP image confirmed | IMAGE NEEDS VERIFICATION |
| EC5000R | Generated fallback | None | Conventional Devices collection checked; no exact EC5000R image confirmed | IMAGE NEEDS VERIFICATION |
| G4S | Generated fallback | None | Official collection exposes exact variants such as G4HFRF-S2 and G4HFWA-S2, not the broader G4S family identifier | IMAGE NEEDS VERIFICATION |
| G4SE | Generated fallback | None | Speakers/strobes collection checked; no exact G4SE image confirmed | IMAGE NEEDS VERIFICATION |
| PAM1 | Generated fallback | None | Power Accessories collection checked; no exact PAM1 image confirmed | IMAGE NEEDS VERIFICATION |
| MR-700 | Generated fallback | None | Power Accessories collection checked; no exact MR-700 image confirmed | IMAGE NEEDS VERIFICATION |
| MR-800 | Generated fallback | None | Power Accessories collection checked; no exact MR-800 image confirmed | IMAGE NEEDS VERIFICATION |
| MR-100 | Generated fallback | None | Power Accessories collection checked; no exact MR-100 image confirmed | IMAGE NEEDS VERIFICATION |
| Bell-Strobe | Generated fallback | None | Generic description is not an exact part number; no image match attempted | IMAGE NEEDS VERIFICATION |
| Input-Output | Generated fallback | None | Generic description is not an exact part number; no image match attempted | IMAGE NEEDS VERIFICATION |
| SIGA-DDOS | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-DDOS image confirmed | IMAGE NEEDS VERIFICATION |
| BPS | Generated fallback | None | Power Accessories collection exposes specific variants such as BPS10A-6, not generic BPS | IMAGE NEEDS VERIFICATION |
| APS | Generated fallback | None | Power Accessories collection checked; no exact APS variant image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-HRD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-HRD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-HFD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-HFD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-HCD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-HCD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-TCDR | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-TCDR image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-REL | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-REL image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-UIO6 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-UIO6 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-RB4 | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-RB4 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-AB4GT | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-AB4GT image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-SD | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-SD image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-SDH | Generated fallback | None | Intelligent Devices collection checked; no exact SIGA-SDH image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-AA30 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-AA30 image confirmed | IMAGE NEEDS VERIFICATION |
| SIGA-AA50 | Generated fallback | None | Input/Output Modules collection checked; no exact SIGA-AA50 image confirmed | IMAGE NEEDS VERIFICATION |

## Exact variant mismatches avoided

The following official images were deliberately not substituted:

- `G1AVRF` for `G1AV`
- `G4SVWF` or `G4HFRF-S2VMC` for `G4S`
- `iO64G` or `iO64R` for generic `iO-64`
- `iO1000G` or `iO1000R` for generic `iO-1000`
- `BPS10A-6` for generic `BPS`
- `4-CAB8D`, `4-CAB16D`, or `4-CAB24D*` for generic `EST4`
- `SIGA-OSD`, `SIGA-OSCD`, or `SIGA-OSHD` for a different Signature detector model

## Validation

- Product Library final cards: 92
- Updated cards: 6
- Fallback images remaining: 72
- Existing external image references: 14 plus 6 exact external additions
- Learner-facing E85/E850 in Part Number: 0
- Learner-facing E85/E850 in What Is It: 0
- Duplicate cards created: 0
- Exact variant substitutions: 0
- Runtime audit: `PASS — ALL RUNTIME CHECKS PASSED`
- Scored `SIGA-HPR`: 0
- Scored `SIGA-UM2`: 0
- Scored `SIGA-CC1S`: 0

## Full remaining-product processing result

All 72 fallback-image products in the current local library were processed using the exact current Part Number as the search key. The official Edwards image collections were checked first, followed by Google/Bing image queries in the form `[Part Number] Edwards` and, where useful, `[Part Number] fire alarm`. No search-engine thumbnail was used as a final asset. The table above records every remaining product and its unresolved disposition; the six exact matches are recorded as `VERIFIED EXACT MATCH`.

## Final status

Six exact non-Edwards product images were added after Google Images review. The remaining 72 fallback images stay marked `NO VERIFIED IMAGE FOUND` rather than being replaced with visually similar products.

Source totals:

- Official Edwards images added: 0
- Official Edwards document images added: 0
- Distributor/catalog images added: 6
- Other credible web images added: 0
- Images rejected for variant mismatch: 8 documented examples

No GitHub push was performed.
