# Exercise 003 Trainee QA

Exercise: `TAKEOFF PRACTICE 003`  
Drawing: `PRAIRIE MEDICAL CLINIC - LEVEL 1`, `FA-1.1`  
Source: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 03_13_27 PM.png`

Native source dimensions: **1536 x 1024**; aspect ratio **1.5000**. The key/legend and drawing notes are in the right-side source column. The approved 36-device mapping uses this source image's own normalized coordinate system.

## Trainee Workflow

The visible trainee path was completed from the normal Takeoff page:

1. Opened `Drawing Exercises`.
2. Selected `Takeoff Practice 003`.
3. Reviewed the visible Drawing Key / Legend.
4. Reviewed the visible Drawing Notes.
5. Used the existing full Takeoff workflow.
6. Selected a product category and Ban-Koe color.
7. Located mapped devices across the clinic areas.
8. Marked and crossed off devices.
9. Maintained the running tally.
10. Entered final quantities.
11. Reconciled the takeoff.
12. Reviewed the results.
13. Retried the exercise successfully.

## Difficulty Assessment

**Appropriate / Advanced.** Exercise 003 is more involved than Exercise 002 because the device set is distributed across exam rooms, corridors, imaging areas, support rooms, stairs, the vestibule, and mechanical/electrical areas. The difficulty comes from systematic search and multiple category changes rather than an artificial timer or hidden rule.

The approved scored exercise contains 36 mapped devices. The full drawing includes circular detector symbols that are intentionally outside the approved set because the supplied raster does not make Smoke Detector versus Rate of Rise Heat Detector reliably distinguishable at every location.

All 36 approved locations were checked against the original source drawing and remain **CONFIRMED**. Ambiguous circular detector symbols remain **UNRESOLVED / EXCLUDED FROM SCORING**.

## UX Review

| Area | Result | Observation |
| --- | --- | --- |
| Key clarity | PASS | The drawing's own legend explicitly names the symbols and categories used by the mapped set. |
| Notes clarity | PASS | The eight visible drawing notes provide readable guidance about mounting, duct locations, door holders, elevator recall, FACP/FAA locations, and coordination. |
| Color clarity | PASS | Product selection and the Ban-Koe color selector use text labels plus a visual color indicator. |
| Device identification | PASS | Mapped regions expose category, room, and `FA-1.1` reference through accessible labels. |
| Drawing usability | PASS | The real high-resolution drawing is displayed with a dominant viewport, zoom, pan, and reset view. |
| Tally usability | PASS | The tally remains adjacent to the drawing and does not expose expected quantities before submission. |
| Reconciliation | PASS | A perfect completion reconciles to 36 mapped devices and returns a 100% local score. |
| Cross-off | PASS | Marked and crossed-off state are separate and visible through the overlay/list controls. |
| Retry | PASS | Retry resets Exercise 003 state without changing Exercises 001 or 002. |

## Scoring Test

- Perfect Exercise 003: **PASS**, `CORRECT`, score `100%`, 36 marked and 36 crossed off.
- Wrong color: **PASS**, `WRONG COLOR`.
- Wrong device: **PASS**, `WRONG DEVICE`.
- Missed mapped device: **PASS**, review result with one missed device.
- Duplicate mark: **PASS**, `ALREADY COUNTED`.
- Incorrect quantity: **PASS**, category marked `Needs correction`.
- Correct reconciliation: **PASS**, all category results correct.
- Retry: **PASS**, state resets to the initial exercise state.

## Ambiguous Symbol Handling

**36-device answer set remains authoritative: YES**  
**Ambiguous circular symbols excluded: YES**

The Exercise 003 key displays Smoke Detector and Rate of Rise Heat Detector as separate categories, but the supplied image does not make every circular symbol sufficiently distinguishable for safe mapping. No circular detector location was added to the 36-device mapping or answer key. The trainee is not penalized for leaving those symbols alone.

## Responsive Review

| Viewport | Result | Drawing behavior |
| --- | --- | --- |
| Desktop | PASS | Large drawing viewport with compact control rail; no horizontal overflow. |
| Tablet | PASS | Drawing remains prominent; controls stack without horizontal overflow. |
| Mobile | PASS | Drawing remains usable within the narrow viewport; no horizontal overflow. |

Zoom increased to 125% and reset to 100% successfully. Pan uses the shared drawing transform, and fullscreen control is available.

## Final Recommendation

**READY** for the approved 36-device Exercise 003 training path. Keep the circular detector symbols excluded until a clearer source rendering or review establishes their identities and locations.
