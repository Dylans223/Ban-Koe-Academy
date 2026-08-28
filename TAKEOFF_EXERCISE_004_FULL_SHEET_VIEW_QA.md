# Exercise 004 Full-Sheet View QA

## Viewport Fit

| Check | Result | Evidence |
| --- | --- | --- |
| Initial fit | PASS | Exercise 004 calculates fit scale from the available drawing viewport |
| Complete sheet visible | PASS | Entire 1536 x 1024 source layer fits inside the drawing viewport without cropping |
| Complete Key visible | PASS | Key remains part of the fitted source PNG and is visible with the sheet |
| Complete title block visible | PASS | Title block remains inside the fitted source frame |
| Entire floor plan visible | PASS | Full source image frame is rendered, including left/right plan areas |
| Sheet border visible | PASS | Source image is not cropped or stretched |
| Direct click at fit scale | PASS | Direct mouse click on the visible Classroom 101 Smoke counted `Smokes = 1` |
| Zoom | PASS | Zoom In produced 125%; direct click on a visible Classroom 101 Smoke counted `Smokes = 2` |
| Pan | PASS | Pan changed the shared transform; direct click on visible Classroom 102 Smoke counted `Smokes = 3` |
| Direct click after zoom | PASS | Source-coordinate click remained attached to the visible device at 125% |
| Direct click after pan | PASS | Source-coordinate click remained attached after `translate(30px, 20px) scale(1.25)` |
| Mobile | PASS | At 390px, document `scrollWidth` was 375 and `clientWidth` was 375; no horizontal overflow |

## Initial State

At initial Exercise 004 load, the fitted image and complete sheet are shown with zero trainee marks and zero detector overlays. No debug labels or click-box outlines are shown in normal mode.

Measured desktop fit example:

- Drawing viewport: approximately `589 x 605`
- Source layer/image: approximately `587 x 391`
- Native aspect ratio preserved: `1536 / 1024 = 1.5`
- Initial transform centered with zero pan offsets

## Reset View

Reset View returns to the calculated full-sheet fit rather than an arbitrary fixed 100% scale. Window resize handling recalculates the fit when Exercise 004 remains in an unpanned, non-zoomed state.

Full Exercise Reset also clears marks and restores the fit state.

## Direct-Click Preservation

The image and interaction markers remain children of the same transformed source-coordinate layer. No click-region dimensions, mappings, coordinates, or device quantities were changed for the fit fix.

## Scope

Only Exercise 004 fit-to-sheet behavior was changed. Exercise 001, Exercise 002, Exercise 003, source PNG, Key content, device symbols, wall/ceiling conventions, and direct-click mechanics were not changed.

## Final Acceptance Statement

At initial load, the trainee can see the complete Exercise 004 drawing and complete Key simultaneously without manually dragging the drawing.

No commit or GitHub push was made.
