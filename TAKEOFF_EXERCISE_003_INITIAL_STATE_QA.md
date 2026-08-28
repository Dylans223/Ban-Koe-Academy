# Exercise 003 Initial State QA

## Scope

Exercise 003 uses the original black-and-white source PNG as the initial drawing presentation. Mapped device data remains available for direct clicking, but it does not pre-color the drawing.

## Initial Drawing State

**PASS.** On a fresh normal-page opening of Exercise 003, before category selection or device interaction:

- The original black-and-white drawing is visible.
- Zero detector overlay SVGs are rendered.
- Zero red Smoke overlays are rendered.
- Zero light-blue Heat or Rate-of-Rise overlays are rendered.
- No colored device overlays, blobs, or rectangles are added.
- The Key/Legend and Notes remain available as the educational reference.

## Category Behavior

Selecting `Smokes` does not pre-color any Smoke symbols. After a successful direct mark, only the marked Smoke receives the RED training mark.

Selecting `Heat Detectors` does not pre-color any Heat symbols. After a successful direct mark, only the marked Heat receives the LIGHT BLUE training mark.

Selecting `R of R Heats` does not pre-color any Rate-of-Rise symbols. After a successful direct mark, only the marked R symbol receives the LIGHT BLUE training mark.

The click target and visual training mark remain separate. The direct-click handler and source-mapped marker geometry are unchanged.

## Reset

Reset recreates the exercise state and removes trainee-added marks. The Exercise 003 detector presentation returns to the clean black-and-white source drawing with zero detector overlays.

## Clear All

Clear All removes trainee-added marks and tally state. The Exercise 003 detector presentation returns to the clean black-and-white source drawing with zero detector overlays.

## Direct Clicking

Direct clicking remains the existing visible-device workflow:

`SEE DEVICE -> CLICK ACTUAL DEVICE -> DEVICE COUNTS -> TRAINING COLOR APPEARS`

No nearest-device detection, enlarged hit region, coordinate change, mapping change, quantity change, or source PNG change was introduced.

## Key Behavior

The Key remains educational and continues to show:

- Smoke Detector: RED
- Heat Detector: LIGHT BLUE
- Rate-of-Rise Heat Detector: LIGHT BLUE
- Test Station: ORANGE

Key colors are independent of the drawing's initial presentation.

## Implementation Result

Exercise 003 opens with a clean black-and-white source drawing and only displays training colors after a trainee successfully marks a device.

## Validation

- Fresh Exercise 003 initial render: PASS, zero detector overlay SVGs.
- Runtime audit: PASS, ALL RUNTIME CHECKS PASSED.
- Exercise 001 and Exercise 002 code paths were not changed.
- Exercise 003 device quantities, approved mappings, source coordinates, source PNG, scoring, answer keys, Product Library, quiz banks, and navigation were not changed.

No commit or GitHub push was made.
