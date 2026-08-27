# Takeoff Smoke and Heat Symbol QA

## Scope

This QA covers the shared interactive Takeoff renderer and the approved drawing exercises 001, 002, and 003. The original source PNG files and approved exercise quantities/mappings were not modified.

## Symbol treatment

- Smoke Detector: circular outline with a center dot and four cardinal detail marks.
- Heat Detector: diamond outline with an internal cross and center dot.
- Key and drawing presentation use the same symbol geometry.
- Smoke symbols render RED (`#ef4444`).
- Heat symbols render LIGHT BLUE (`#60a5fa`).
- Detector overlays are presentation-only SVG layers with `pointer-events: none`; the direct-click location controls remain the interaction targets.
- Duct Smoke Detector key entries are excluded from the Smoke icon match.

## Exercise results

| Exercise | Approved total | Detector presentation | Full reconciliation |
|---|---:|---|---|
| 001 | 44 | 10 Smoke, 3 Rate-of-Rise Heat overlays | 44/44, 100%, correct |
| 002 | 45 | 12 Smoke, 1 Rate-of-Rise Heat, 2 Heat Detector overlays | 45/45, 100%, correct |
| 003 | 36 | 19 Smoke, 1 Heat, and 1 Rate-of-Rise Heat location on the new authoritative source | 36/36, 100%, correct |

Exercise 003 now uses the new authoritative source PNG. Its approved 36-device data maps the visible circle `S`, diamond `H`, and diamond `R` symbols directly; no devices from the retired drawing were carried forward.

## Interaction checks

- Exercise 001 detector sweep: 10/10 Smokes and 3/3 Rate-of-Rise Heats counted.
- Exercise 002 detector sweep: 12/12 Smokes, 1/1 Rate-of-Rise Heat, and 2/2 Heat Detectors counted.
- Full category sweeps reconciled exactly for all three exercises.
- Direct clicks remain tied to the exact mapped location controls; no nearest-device detection or giant invisible hit regions were added.
- Existing duplicate, undo, clear, reset, and tally behavior remained operational during the full reconciliation checks.

## Responsive and transform checks

- Source image natural dimensions: Exercise 001 `1402 x 1122`; Exercises 002 and 003 `1536 x 1024`.
- Key and drawing detector symbols rendered in normal mode without debug labels.
- Zoom check reached scale `1.25` and preserved direct clicking.
- Mobile viewport check at `390 x 844` produced `scrollWidth: 375`, so there was no horizontal overflow.
- A mobile drag gesture did not change the pan offset in that state; no incorrect pan-alignment claim is made from that check. Desktop source-frame alignment and prior zoom/pan validation remain the controlling evidence for the shared transform.

## Verification

- `get_errors`: no errors for the modified JavaScript, CSS, HTML, or exercise README.
- Runtime reconciliation: exact PASS results for 44, 45, and 36 devices.
- Source PNGs remain read-only.
- No commit or GitHub push was made.
