# Exercise 004 Missing Device Mapping QA

## Scope

Only the source-confirmed missing-device targets were reviewed. Existing working mappings and quantities were preserved unless a source-confirmed in-place replacement was possible.

## Results

| Device | Room | Source coordinate | Previous mapping status | Corrected mapping | Direct-click result | Color | Category filtering |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Smoke | Work Room 111 | approx. native `(649, 562)`, normalized `(0.423, 0.549)` | Existing record was displaced at `(0.536, 0.549)` | Existing `ex004-smoke-021` corrected in place | PASS, direct source click counted | RED | Correct Smoke category active; other categories inactive |
| Wall Speaker/Strobe | Office 105 | approx. native `(96, 446)`, normalized `(0.063, 0.436)` | No matching Office 105 record; existing six-record set included a displaced/unmatched record | Existing `ex004-wall-s-006` reused in place at Office 105 | PASS, direct source click counted | YELLOW | Wall Speaker/Strobes active only |
| Smoke | Kitchen 120 | approx. native `(1044, 844)`, normalized `(0.680, 0.824)` | No matching record | Not added; locked Smoke quantity is already 33 and no approved replacement disposition was established | Not testable | RED | No target exists |
| Smoke | Janitor 119 | approx. native `(934, 844)`, normalized `(0.608, 0.824)` | No matching record | Not added; locked Smoke quantity is already 33 and no approved replacement disposition was established | Not testable | RED | No target exists |
| Duct Smoke Detector 1 | Mechanical 118 / Return Air | approx. native `(740, 789)`, normalized `(0.482, 0.771)` | Existing record present and aligned | No mapping change; color already corrected to ORANGE | PASS, direct source click counted | ORANGE | Duct Smokes active only |
| Duct Smoke Detector 2 | Mechanical 118 / Return Air | approx. native `(826, 789)`, normalized `(0.538, 0.771)` | Existing record present and aligned | No mapping change; color already corrected to ORANGE | PASS, direct source click counted | ORANGE | Duct Smokes active only |

## Mechanical Room 118 Mounting Determination

The visible Mechanical Room 118 HS symbol uses the wall attachment convention. No circled HS source symbol was verified there. It remains classified as Wall Horn/Strobes; no Ceiling Horn/Strobe record was created.

## Quantity Preservation

- Existing Smoke quantity: 33, unchanged.
- Existing Wall Speaker/Strobe quantity: 6, unchanged.
- Existing Duct Smoke quantity: 2, unchanged.
- Existing total mapping quantity: 65, unchanged.

## Acceptance Status

The corrected Work Room 111 Smoke, Office 105 Wall Speaker/Strobe, both Duct Smokes, and Electrical Room 110 Tamper all passed direct source-coordinate normal-page clicks. Kitchen 120 and Janitor 119 remain missing mappings, and Mechanical Room 118 remains a source/mounting conflict requiring separate approval. No additional device records were invented.

No Exercise 001, Exercise 002, or Exercise 003 data was changed. No source PNG was modified. No commit or GitHub push was made.
