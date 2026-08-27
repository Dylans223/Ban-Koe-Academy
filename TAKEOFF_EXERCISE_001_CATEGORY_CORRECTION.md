# Exercise 001 Category Correction

Authoritative project-owner counts supersede previous inferred mapping counts.

## Authoritative Counts

- Wall Horn/Strobes: **6** (`HS`)
- Wall Speaker/Strobes: **9** (`S`), Ban-Koe training color **YELLOW**
- Smokes: **10**
- Test Stations: **2**

The six `HS` devices and nine `S` devices are separate categories. No `HS` device is counted as an `S`, and no `S` device is counted as an `HS`.

## Complete Exercise 001 Category Table

| Category | Approved records | Expected quantity | Source/designation | Status |
| --- | ---: | ---: | --- | --- |
| FACP | 1 | 1 | FACP | CONFIRMED |
| FAA | 1 | 1 | FAA | CONFIRMED |
| Smokes | 10 | 10 | Smoke symbols | CONFIRMED |
| R of R Heats | 3 | 3 | Heat symbols | CONFIRMED |
| Fixed Heats | 0 | 0 | No approved records | EXCLUDED |
| Test Stations | 2 | 2 | `TS` | CONFIRMED |
| Duct Smokes | 2 | 2 | Duct smoke symbols | CONFIRMED |
| Wall Strobes | 0 | 0 | No approved records | EXCLUDED |
| Wall Horn/Strobes | 6 | 6 | `HS` | CONFIRMED |
| Wall Speaker/Strobes | 9 | 9 | `S`; source glyphs remain orange, training color YELLOW | CONFIRMED |
| Pulls | 4 | 4 | Pull symbols | CONFIRMED |
| CR's | 3 | 3 | `CR` | CONFIRMED |
| Waterflow | 1 | 1 | `WF` | CONFIRMED |
| Door Holders | 1 | 1 | `DH` | CONFIRMED |
| Tamper | 1 | 1 | `T` | CONFIRMED |

## Calculated Total

The total is calculated from the approved category records:

`1 + 1 + 10 + 3 + 2 + 2 + 6 + 9 + 4 + 3 + 1 + 1 + 1 = 44`

Exercise 001 approved total: **44 devices**.

## Source Mapping

The 9 Wall Speaker/Strobes are mapped to the 9 project-owner-confirmed orange `S` symbols in the original Exercise 001 PNG. Their interaction highlights use YELLOW, while the source PNG remains unchanged. The 6 Wall Horn/Strobes are mapped separately to the 6 `HS` symbols.

## Physical Validation

Fresh browser validation on the Guided Count workflow passed:

- Wall Horn/Strobes: **6/6** direct symbol clicks
- Wall Speaker/Strobes: **9/9** direct symbol clicks
- Smokes: **10/10** direct symbol clicks
- Test Stations: **2/2** direct symbol clicks
- All other approved categories: exact mapped counts
- Category filtering: only the selected category was active
- Negative clicks: no mark and no tally change
- Duplicate test: second click returned `ALREADY COUNTED`; tally remained unchanged
- Full Exercise 001 reconciliation: **44/44 — 100%**

## Scope Protection

Exercise 002 and Exercise 003 were not modified. Their mappings, quantities, answer keys, and source drawings remain unchanged. The Exercise 001 source PNG, Product Library, quiz banks, simulator, scoring, and navigation were not modified.

No commit or GitHub push was made.
