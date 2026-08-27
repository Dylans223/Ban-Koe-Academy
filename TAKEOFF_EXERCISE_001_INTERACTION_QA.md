# Exercise 001 Interaction QA

Exercise: `TAKEOFF PRACTICE 001`
Project: `SUNSET BUSINESS CENTER`
Drawing: `FA-101`
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_10_45 PM.png`

## Source Audit

The original Exercise 001 PNG was inspected directly. The browser-reported source dimensions are 1402 x 1122. The approved Exercise 001 set now contains 43 mapped device records, including 10 Smokes and 2 Test Stations. The 9 orange `S` symbols remain unresolved and excluded.

Two source-map defects were found and corrected:

- `smoke-008` was moved to the red Smoke symbol in Lobby 100.
- `ror-heat-003` was moved to the light-blue Heat symbol in Lobby 100.

The two records had previously shared a hit region. No Exercise 002 or Exercise 003 coordinates were reused or changed.

## Hit-Region Accuracy

- 43 approved mapped regions rendered over the Exercise 001 source image.
- Hit regions are now symbol-sized and forgiving rather than large room-sized rectangles.
- The two close-neighbor pairs were tightened to prevent overlap.
- Final geometric overlap check: 0 overlapping regions.
- Normal mode: no boxes, IDs, coordinates, or debug labels.
- Development mode: `?takeoffDebug=1` shows ID, category, normalized coordinates, and region outlines for Exercise 001.

## Smoke Test

All 10 mapped Smoke regions were physically clicked through the browser after selecting `Smokes`:

- Active Smoke regions: 10
- Smoke regions counted: 10
- Smoke tally: 10
- Unselected categories remained inactive
- Selected color displayed automatically as `RED`

## Category Filtering

Every configured Exercise 001 category was selected and its mapped regions were physically clicked. Active-region counts matched mapped counts. Clicking the same stable mapped device ID again displayed `ALREADY COUNTED` and did not increment its tally. The count remained 1 for the tested duplicate Smoke.
| Category | Mapped | Counted | Color |
| --- | ---: | ---: | --- |
| FACP | 1 | 1 | DARK BLUE |
| FAA | 1 | 1 | DARK BLUE |
| Smokes | 10 | 10 | RED |
| Test Stations | 2 | 2 | ORANGE |
| Wall Strobes | 0 | 0 | ORANGE |
| Wall Horn/Strobes | 6 | 6 | YELLOW |
| Wall Speaker/Strobes | 8 | 8 | YELLOW |
| Pulls | 4 | 4 | GREEN |
| CR's | 3 | 3 | PINK |
| Waterflow | 1 | 1 | PINK |
| Door Holders | 1 | 1 | PINK |
| Tamper | 1 | 1 | PINK |

Total physically counted: **43 approved devices**. The 9 unresolved orange `S` symbols were not mapped or counted.

## Wrong-Device Prevention

Only the selected category's mapped regions are enabled. All other location buttons are disabled and have `pointer-events: none`, preventing inactive overlapping layers from intercepting the active device click. No nearest-device or nearest-category fallback exists.

## Duplicate Prevention

The complete category sweep switched categories repeatedly. Each switch activated only the new category's regions, preserved prior counts, and left uncounted regions available.

## Zoom / Pan

- Zoom from 100% to 125% and back to 100% passed.
- A real empty-area pan changed the viewport offset and a subsequent active-device mark succeeded.
- Marker and image remain in the same transformed drawing layer.

## Mobile

At a 390 x 844 viewport:
- Smoke category selection and physical device tap incremented the tally.
- Document scroll width remained within the viewport.
- Inactive marker layers did not intercept the active mobile tap.

## Reconciliation

The full 43-device Exercise 001 workflow was physically completed:

`Select category -> Click devices -> Tally -> Cross off -> Enter final quantities -> Reconcile`

Result:

- Marked: 43
- Crossed off: 43
- Final quantities committed: 15 product rows
- Reconciliation status: `correct`
- Score: **100%**
- Expected quantity total: **43**

## Undo / Clear / Reset

- Undo removed the most recently counted device and reduced its tally.
- Clear All removed marks and reset tally state.
- Reset Exercise returned the exercise to its initial gated state.

## Regression Checks

Exercises 002 and 003 were not modified. Current targeted browser checks confirmed:

- 0 active drawing regions before category selection.
- Category plus Ban-Koe color selection required before marking.
- A qualified physical mark was accepted in each exercise.

Existing full regression validation remains unchanged: Exercise 002 and Exercise 003 reconciliation passed at 100% before this scoped Exercise 001 rebuild.

Exercise 001 is ready for trainee use as a Guided Count exercise.

## Remaining Issues

None found in the requested Exercise 001 interaction scope.

No source drawing, Exercise 002/003 data, global scoring, Product Library, quiz bank, simulator, or navigation files were changed. No commit or GitHub push was made.
