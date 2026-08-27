# Exercise 002 Marking Failure Report

## Root cause:
No remaining local marking failure was reproduced. The local implementation contains the required pointer-capture guard and one-time delegated click listener guard. The drawing-level pan handler ignores pointerdown events that originate on mapped marker buttons, allowing those clicks to reach the delegated marker handler.

The published URL identified by the workspace documentation, `https://dylans223.github.io/BKA/`, currently returns GitHub Pages 404. The Takeoff URL also returns 404. Therefore the live published application could not be exercised and cannot be considered identical to the local version.

## Local/deployed comparison:

- LOCAL VERSION: Current workspace Takeoff implementation with marker pointer-capture guard and one-time delegated listener binding.
- DEPLOYED VERSION: GitHub Pages 404 response: `There isn't a GitHub Pages site here.`
- ARE THEY IDENTICAL: NO. The deployed site is unavailable, not a serving copy of the local application.

## Exact device/interaction where failure occurred:

The requested “stops after a few devices” failure did not occur locally. Exercise 002 accepted 15 consecutive physical browser clicks and then all 41 mapped devices.

## Why marking stopped:

Not applicable to the current local version. The earlier failure mode was drawing-level pointer capture intercepting marker pointerdowns, compounded by repeated delegated click listener registration after rerenders. Both safeguards are present locally.

## Fix:

No new application fix was required in this pass because the local implementation already contains the fix. No mappings, answer data, UI layout, scoring, or source drawings were changed.

## 15-device test:

Passed physically in the local browser. Devices 1 through 15 marked consecutively. `markedLocations` increased from 1 through 15. Category and color switches worked across Smokes, Pulls, Wall Speaker/Strobes, and Wall Horn/Strobes. Every tested marker retained `pointer-events: auto`, z-index 2, and the shared transform stayed `translate(0px, 0px) scale(1)`.

## 41-device test:

Passed physically in the local browser. All 41 Exercise 002 mapped devices were clicked one at a time. Final state: 41 marked locations and tally total 41.

## Cross-off test:

Passed. A marked device exposed `CROSS OFF`; cross-off increased the crossed-off set and preserved the marked state.

## Undo test:

Passed. Undo removed the marked device, removed its crossed-off state, and decremented the tally. Marking then continued successfully.

## Clear All test:

Passed. Clear All removed marked locations, crossed-off locations, and tally entries.

## Zoom/pan test:

Passed. A mark remained after zooming to 125%. A second device was marked while zoomed. Zoom-out restored 100%. Panning changed the shared drawing offsets while preserving both marks.

## Published-site test:

Blocked by deployment availability. Both `https://dylans223.github.io/BKA/` and `/BKA/training/takeoff/index.html` returned GitHub Pages 404. No push was performed because the user did not authorize deployment.

## Additional state checks:

- Wrong color: `WRONG COLOR`, no mark or tally increase.
- Wrong device: `WRONG DEVICE`, no mark or tally increase.
- Duplicate: `ALREADY COUNTED` only for a previously marked device.
- Category and color switching: passed during the 15-device sequence.
- Listener registration: the mount dataset guard remained `interactiveClickBound=true` throughout rerenders, indicating one delegated listener binding.
- Marker coordinates and transforms: remained stable through rerenders; marked elements stayed constrained to their own normalized boxes.
- Empty drawing pointerdown: pan offsets changed, while marker pointerdown did not start pan capture.

## Runtime audit:

`runtime-audit.html`: `PASS — ALL RUNTIME CHECKS PASSED`.

Local JavaScript and CSS diagnostics report no errors. The published-site 404 is the remaining deployment issue and requires repository/deployment access or an explicitly authorized push to resolve.
