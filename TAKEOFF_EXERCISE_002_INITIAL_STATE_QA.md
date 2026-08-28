# Exercise 002 Initial State QA

## Result

**PASS**

Exercise 002 opens with a clean source drawing and trainee colors appear only after successful device clicks.

## Acceptance Checks

| Check | Result | Evidence |
| --- | --- | --- |
| Initial drawing clean | PASS | Fresh normal page: 0 detector overlays, 0 marked locations, source image only |
| Selecting category without click | PASS | `Smokes` selected: 0 detector overlays, 0 marked locations |
| Selecting color without click | PASS | `Smokes + RED` selected: 0 detector overlays, 0 marked locations |
| Post-click mark appears correctly | PASS | Direct mouse click on visible Smoke source position produced `Smokes = 1` and one detector mark |
| Reset removes marks | PASS | Reset returned to 0 marked locations and 0 detector overlays |
| Clear All removes marks | PASS | Clear All returned to 0 marked locations, 0 overlays, and zero nonzero tallies |
| No blobs | PASS | Existing source-coordinate mark layer remained bounded to the mapped device; no room-sized or global color region was added |
| Direct-click regression | PASS | All 45 approved locations were clicked at visible source-image coordinates and counted exactly |
| Full reconciliation | PASS | Category totals matched all 45 approved Exercise 002 locations |

## Direct-Click Regression

Normal-page source-coordinate mouse sweep results:

- FACP: 1/1
- FAA: 1/1
- Smokes: 12/12
- R of R Heats: 1/1
- Heat Detectors: 2/2
- Duct Smokes: 2/2
- Test Stations: 1/1
- Wall Horn/Strobes: 6/6
- Wall Speaker/Strobes: 9/9
- Pulls: 4/4
- CR's: 3/3
- Waterflow: 1/1
- Door Holders: 1/1
- Tamper: 1/1

Total: **45/45**.

The Test Station used ORANGE, Wall Speaker/Strobes used YELLOW, Smoke used RED, and Heat/R-of-R used LIGHT BLUE. Direct clicks were performed against the visible source drawing coordinates, not hidden marker elements.

## Duplicate Behavior

A visible Smoke source symbol was clicked twice. The first click produced `Smokes = 1`; the second produced `ALREADY COUNTED` and the tally remained `1`.

## State Rule

Unmarked mapped devices do not generate colored detector or speaker presentation overlays. Only device IDs in `markedLocations` generate trainee color presentation. Inactive markers remain non-interactive through the existing disabled-marker behavior.

## Scope Protection

Only Exercise 002's renderer condition was changed. Exercise 001, Exercise 003, mappings, coordinates, quantities, answer keys, source PNG, Product Library, quiz banks, simulator, navigation, scoring, and click mechanics were not modified.

No commit or GitHub push was made.
