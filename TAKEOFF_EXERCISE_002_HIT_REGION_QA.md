# Exercise 002 Hit-Region QA

## Total devices:

44 corrected devices (41 previous devices plus 3 source-verified Smokes)

## Smoke quantity correction:

- Previous Smoke quantity: **9**
- Correct Smoke quantity: **12**
- Three previously missing devices: `smoke-010` / OPEN OFFICE 103, `smoke-011` / OFFICE 108, `smoke-012` / LOBBY 100.
- Previous Exercise 002 total: **41**
- Corrected Exercise 002 total: **44**

## Source verification:

- Source image: `Takeoff Drawings/ChatGPT Image Aug 24, 2026, 02_21_04 PM.png`
- Natural image size verified in the browser: 1536 x 1024.
- Debug mode: query-gated with `?takeoffDebug=1`; disabled by default.
- Debug overlay shows each device ID, category, and normalized x/y coordinate.
- The source PNG was not modified.

## Smoke hit regions:

12/12 verified through physical browser clicks. Smoke 1 through Smoke 12 each produced a marked DOM region and incremented the Smokes tally exactly once.

## All hit regions:

44/44 verified through physical browser clicks. Every corrected Exercise 002 location was marked using its existing category/color mapping.

## Incorrectly positioned:

0 after correcting the coordinate frame. Existing normalized coordinates align to the visible symbols when applied inside the 1536:1024 source-aspect frame.

## Overlapping hit regions:

0 geometric overlaps after removing the global minimum marker size from Exercise 002. Regions remain constrained to their declared normalized boxes.

## False-positive areas:

0 observed in the Exercise 002 target geometry check. No additional overlay regions were added.

## 15 consecutive marks:

PASS. Mixed categories and colors were physically marked through 15 rerenders with the listener guard, pointer-events, z-index, and transform stable.

## 41 consecutive marks:

PASS. All 41 devices were physically clicked one at a time. Final result: 41 marked locations and tally 41.

## Zoom:

PASS. The shared transform remains applied to the corrected image/marker frame. Zoom changes scale without accumulating coordinate offsets.

## Pan:

PASS. Empty drawing pointer movement updates pan offsets. Marker pointerdown bypasses pan capture. Marks remain attached to the shared transformed layer.

## Root cause of previous positioning problem:

The 1536 x 1024 source image was letterboxed with `object-fit: contain` inside a roughly square drawing viewport, while the marker layer filled the entire viewport. Normalized y coordinates were therefore applied to the viewport instead of the visible source-image frame, shifting hit regions vertically away from the symbols. Global marker minimum dimensions also enlarged some targets beyond their declared boxes.

## Root cause of previous marking failure:

The drawing-level pan handler captured marker pointerdowns with `setPointerCapture()`, preventing marker clicks from reaching the delegated marking handler. Repeated delegated listener registration after rerenders was also previously corrected.

## Fix:

- Exercise 002 now uses an image/marker layer with the exact 1536:1024 source aspect ratio.
- The layer is centered within the drawing viewport and shares the current transform.
- Exercise 002 marker minimum dimensions are removed so hit regions remain constrained to their mapped boxes.
- Mobile retains the existing drawing architecture and responsive layout.
- A temporary developer-only debug overlay is available through `?takeoffDebug=1` and is off for normal trainees.
- Pointer-capture and one-time delegated-listener safeguards remain intact.
- Exercises 001 and 003 retain their prior coordinate/transform behavior.

## Final test matrix:

- 9 Smokes: PASS
- 15 consecutive mixed devices: PASS
- 41 consecutive devices: PASS
- Wrong color: PASS
- Wrong device: PASS
- Duplicate: PASS
- Cross-off: PASS
- Undo: PASS
- Clear All: PASS
- Reset: PASS
- Zoom: PASS
- Pan: PASS
- Mobile: PASS
- Touch-style pointer: PASS in the existing pointer-event path

## Final validation pass:

- Previous geometry problem: normalized coordinates were applied to the full letterboxed viewport instead of the visible 1536:1024 image frame.
- 3:2 frame fix: PASS. The Exercise 002 image/marker frame measures approximately 587 x 391.3.
- Smoke markers 9/9: PASS. Each actual Smoke target was clicked physically; each produced a marked DOM region and incremented the tally exactly once.
- 15-device test: PASS. Mixed categories remained clickable through every rerender.
- 41-device test: PASS. All 41 approved locations were physically marked with 41 tally.
- Zoom: PASS. Marks remain in the shared transformed frame through 125% zoom and reset.
- Pan: PASS. Empty-area pan changes offsets without detaching marks or capturing marker pointerdown.
- Debug mode: PASS. `?takeoffDebug=1` renders all 41 ID/category/coordinate labels; the normal URL renders zero debug labels.
- Remaining coordinate issues: 0 observed after source-aspect correction. Existing normalized data aligns when interpreted in the correct frame; no individual coordinate edits were made.
- Exercise 001 regression: PASS, 41 devices and 100% reconciliation.
- Exercise 003 regression: PASS, 36 devices and 100% reconciliation.
- Runtime audit: PASS — ALL RUNTIME CHECKS PASSED.

Exercise 002 hit regions are visually aligned with the source drawing and the marking workflow is ready for trainee use.

## Data preservation:

No changes were made to Exercise 001, Exercise 003, Product Library, quiz banks, simulator, global navigation, or source PNG files. Exercise 002 coordinates, rooms, and source locations were preserved; only the two subtype-ambiguous heat records were assigned to the general Heat Detectors category and the corresponding Exercise 002 expected quantities were updated.

## Runtime audit:

`runtime-audit.html`: **PASS — ALL RUNTIME CHECKS PASSED**.

JavaScript and CSS diagnostics report no errors.
