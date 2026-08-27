# Exercise 002 Complete Source Audit

Exercise: `TAKEOFF PRACTICE 002`  
Drawing: `RIVERDALE OFFICE BUILDING`, `FA-101`  
Source authority: original `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`  
Native source size: **1536 x 1024**

## Audit method

This audit was performed independently against the native source PNG at its original dimensions. The existing answer key and existing mapping were used only to obtain the current mapped quantities and device labels, not as evidence of source presence. Symbols were counted only where the source drawing and its visible legend support the category. Ambiguous glyphs were not counted as a new category.

## Category comparison

| Category | Current Mapping | Source Count | Difference | Status |
|----------|-----------------|--------------|------------|--------|
| FACP | 1 | 1 | 0 | VERIFIED |
| FAA | 1 | 1 | 0 | VERIFIED |
| Smokes | 12 | 12 | 0 | VERIFIED |
| R of R Heats | 1 explicit subtype | 1 clearly identifiable H symbol | 0 | VERIFIED |
| Heat Detectors | 2 general heat records | 2 visible detector symbols without proven subtype | 0 | VERIFIED |
| Test Stations | 1 | 1 | 0 | VERIFIED |
| Duct Smokes | 2 | 2 | 0 | VERIFIED |
| Wall Strobes | 0 | 0 | 0 | VERIFIED |
| Wall Horn/Strobes | 6 | 6 | 0 | VERIFIED |
| Wall Speaker/Strobes | 8 | 8 | 0 | VERIFIED |
| Pulls | 4 | 4 | 0 | VERIFIED |
| CR's | 3 | 3 | 0 | VERIFIED |
| Waterflow | 1 | 1 | 0 | VERIFIED |
| Door Holders | 1 | 1 | 0 | VERIFIED |
| Tamper | 1 | 1 | 0 | VERIFIED |

## Resolved heat-detector distinction

### R of R Heats

The source legend identifies Rate-of-Rise Heat with a circle containing `H`. A manual scan of the full source image finds one clearly identifiable `H` symbol in OPEN OFFICE 101, near the upper central portion of the room. The Academy training rule treats ROR and Fixed Heat as one general Heat Detectors category unless project information explicitly requires a subtype.

- `ror-heat-001` — OPEN OFFICE 101 — current normalized position `x=0.463`, `y=0.234`. This is the one record that corresponds to the clearly visible H symbol.
- `ror-heat-002` — OPEN OFFICE 103 — general `Heat Detectors`, LIGHT BLUE; no subtype inferred.
- `ror-heat-003` — LOBBY 100 — general `Heat Detectors`, LIGHT BLUE; no subtype inferred.

The two latter records are now resolved at the Academy recognition level as general Heat Detectors. No specific ROR or Fixed subtype was inferred.

## Source-supported category locations

The following source-supported visible counts were confirmed during the audit:

- FACP: one `FA` panel symbol in ELEC. 109.
- FAA: one `FA` annunciator symbol in the lower central Lobby 100 area.
- Smokes: twelve visible Smoke Detector glyphs distributed across Open Office 101, Conference 102, Open Office 103, Office 104, Break Room 105, Lobby 100, Office 108, and Server 110. The three corrected records are `smoke-010` in Open Office 103, `smoke-011` in Office 108, and `smoke-012` in Lobby 100.
- Test Stations: one `TS` symbol in Conference 102.
- Duct Smokes: two `DD` symbols on the east side, serving Open Office 103 and Office 108.
- Wall Strobes: no visible `O` symbols.
- Wall Horn/Strobes: six visible `HS` symbols.
- Wall Speaker/Strobes: eight visible `S` symbols.
- Pulls: four visible `P` symbols.
- CR's: three visible `CR` symbols.
- Waterflow: one `WF` symbol at the Fire Riser in ELEC. 109.
- Door Holders: one `DH` symbol at the Lobby 100 entry.
- Tamper: one `T` symbol in Server 110.

## Audit disposition

Exercise 002 source audit is complete under the Academy general-heat rule. The source supports one explicit ROR Heat and two additional general Heat Detector records. Smokes are verified at 12, and the approved mapped total remains 44.

No files were modified during the source audit except this report. In particular, the following were not changed:

- `training/takeoff/exercises/exercise-002/exercise-data.js`
- `TAKEOFF_EXERCISE_002_ANSWER_KEY.md`
- Exercise 002 expected quantities
- Mapping coordinates
- Exercise 001 or Exercise 003
- Source PNG
- Product Library
- Quiz banks
- Simulator
- Global scoring
- Global navigation

Runtime audit should be run only as a regression check; it does not resolve the source-mapping discrepancy identified here.
