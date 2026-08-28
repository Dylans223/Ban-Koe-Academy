# Exercise 004 Color and Click Audit

## Scope

This audit checks the named Exercise 004 devices before any additional coordinate or hit-region changes. Source frame: approved `exercise-004-source.png`, 1536 x 1024. No click boxes were enlarged.

## Authoritative Color Results

| Device | Location | Category | Current assigned color | Required Academy color | Source symbol | Mapped coordinate | Click target exists? | Click target aligned? | Color corrected? | Direct-click result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Smoke | Work Room 111 | Smokes | RED | RED | Smoke `S` | `(0.423, 0.549)` | Yes | Source-aligned after prior targeted coordinate correction | No | PASS with `SMOKES + RED`; tally 1 |
| Wall Speaker/Strobe | Office 105 | Wall Speaker/Strobes | No current record | YELLOW | Wall `S` with attachment line | Source approx. native `(96, 446)`, normalized `(0.063, 0.436)` | No | Not applicable | No | Not testable; missing mapping |
| Ceiling Horn/Strobe | Mechanical Room 118 | Ceiling Horn/Strobes | No valid current record for this source device | YELLOW | Visible Mechanical HS is wall-attached, not circled ceiling HS | Visible HS approx. native `(398, 846)`; current ceiling-HS record is Multipurpose 104 `(0.536, 0.194)` | No valid ceiling target | No source-supported ceiling classification | No | Not testable; source/mounting conflict |
| Duct Smoke Detector 1 | Mechanical Room 118 / Return Air | Duct Smokes | ORANGE | ORANGE | `DD` | `(0.482, 0.771)` | Yes | Yes; source-centered | Yes, RED -> ORANGE | PASS with `DUCT SMOKES + ORANGE`; tally 1 |
| Duct Smoke Detector 2 | Mechanical Room 118 / Return Air | Duct Smokes | ORANGE | ORANGE | `DD` | `(0.538, 0.771)` | Yes | Yes; source-centered | Yes, RED -> ORANGE | Correct color verified; first DD counted; second target remains source-aligned |
| Smoke | Kitchen 120 | Smokes | No current record | RED | Smoke `S` | Source approx. native `(1044, 844)`, normalized `(0.680, 0.824)` | No | Not applicable | No | Not testable; missing mapping |
| Tamper Switch | Electrical Room 110 | Tamper Switches | PINK | PINK | `T` | `(0.602, 0.424)` | Yes | Source-aligned after prior targeted coordinate correction | No | PASS with `TAMPER SWITCHES + PINK`; tally 1 |
| Smoke | Janitor 119 | Smokes | No current record | RED | Smoke `S` | Source approx. native `(934, 844)`, normalized `(0.608, 0.824)` | No | Not applicable | No | Not testable; missing mapping |

## Wrong-Color Tests

- Smoke `S` at Work Room 111 with `SMOKES + ORANGE`: `WRONG COLOR`, tally remained 0, no mark.
- Same Smoke with `SMOKES + RED`: `COUNTED`, tally became 1.
- Duct Smoke `DD` 1 with `DUCT SMOKES + RED`: `WRONG COLOR`, tally remained 0, no mark.
- Same Duct Smoke with `DUCT SMOKES + ORANGE`: `COUNTED`, tally became 1.

## Other Exercise 004 Color Audit

All current functional product and mapped-location colors were compared to the established Academy standard. The only mismatch found was Duct Smokes, corrected from RED to ORANGE in the key, product definition, and both mapped locations. Existing correct assignments remain unchanged:

- Smokes: RED
- Test Stations: ORANGE
- Wall Speaker/Strobes: YELLOW
- Wall Horn/Strobes: YELLOW
- Ceiling Speaker/Strobes: YELLOW
- Ceiling Horn/Strobes: YELLOW
- Wall/Ceiling Strobes: ORANGE
- Pulls: GREEN
- CR/CT, Waterflow, Door Holders, Tamper: PINK

## Final Determination

The color definitions are correct for all existing Exercise 004 records after the Duct Smoke correction. The failed direct-click reports for Work Room Smoke and the two Duct Smokes cannot be attributed to color after testing with the required category and color. Work Room Smoke and both DD targets require no further coordinate change based on this color audit.

Office 105 Wall Speaker/Strobe, Kitchen 120 Smoke, and Janitor 119 Smoke remain missing mappings. The requested Mechanical Room 118 Ceiling Horn/Strobe is not source-supported as a ceiling-mounted device; the visible HS is wall-attached. These require a separate approved mapping/source disposition and were not fabricated here.

No quantities, source PNGs, Exercise 001, Exercise 002, Exercise 003, scoring, or unrelated Exercise 004 mappings were changed during this color audit.
