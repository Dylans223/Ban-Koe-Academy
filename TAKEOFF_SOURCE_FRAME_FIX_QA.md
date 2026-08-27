# Takeoff Source-Frame Fix QA

## Scope

This pass changed only the interaction-frame architecture and marker sizing. No individual device coordinates, mappings, answer quantities, source PNGs, Exercise 002/003 data, Product Library, quizzes, simulator, scoring, or navigation were changed.

## Exercise 001

**PASS**

- Native source: 1402 x 1122
- Frame aspect ratio: 1402 / 1122
- Image and source-aspect frame rectangle: identical at runtime
- Debug inspection: all 10 Smoke targets rendered in the source-aspect frame
- Smoke center alignment: each marker center matched the corresponding source-image coordinate within approximately 0.02px in the focused runtime measurement
- Marker sizing: Smoke regions rendered at approximately 8.2 x 6.6px, matching their normalized source-defined dimensions; the former global 44px minimum height is no longer applied
- Physical test: five visually separated Smokes marked directly on their visible symbols; tally reached 5
- Category switch: Pull regions became active and a Pull marked successfully while prior Smoke state remained
- Test Station, Pull, Heat Detector, Wall Horn/Strobe, and Wall Speaker/Strobe debug targets were inspected in the source-aspect frame
- Normal mode remains free of debug labels and outlines

**Coordinate data appears valid after source-frame correction.**

## Exercise 002

**PASS**

- Native source: 1536 x 1024
- Frame aspect ratio: 1536 / 1024
- Image and source-aspect frame rectangle: identical at runtime
- Physical regression: 5 Smoke devices marked with `Smokes + RED`
- Smoke tally: 5
- Exercise 002 data was not modified

## Exercise 003

**PASS**

- Native source: 1536 x 1024
- Frame aspect ratio: 1536 / 1024
- Image and source-aspect frame rectangle: identical at runtime
- Physical regression: 5 mapped Pull devices marked with `Pulls + GREEN`
- Pull tally: 5
- Exercise 003 data was not modified

## Zoom

**PASS**

The source-aspect frame is the transformed unit. Image and interaction regions remain in the same frame through zoom; no independent image/marker transforms are used.

## Pan

**PASS**

A real pan gesture changed the viewport offset on mobile to approximately `10px, 6.7px`. The source frame and interaction layer remained together, and marking continued through the shared transform.

## Mobile

**PASS**

At a 390px viewport, Exercise 001 `smoke-010` was physically tapped and incremented the Smoke tally. Document scroll width was 375px, so there was no horizontal overflow.

## Negative Clicks

**PASS**

Category filtering remains active. Only the selected category's regions are enabled; inactive markers use `pointer-events: none`. Empty drawing areas, walls, labels, notes, and unrelated device regions do not enter the marking handler.

## Marker Geometry

The interaction layer now uses these native source-aspect frames:

| Exercise | Frame |
| --- | --- |
| 001 | `1402 / 1122` |
| 002 | `1536 / 1024` |
| 003 | `1536 / 1024` |

The image fills the source frame with `width: 100%` and `height: 100%`; `object-fit: contain` is no longer used inside the interaction frame. Normalized device coordinates are interpreted relative to the matching source-aspect frame.

Global marker minimum width/height and padding were overridden for marker controls so source-defined inline dimensions are preserved.

## Coordinate Data Changed

**NO**

No individual `x`, `y`, `width`, or `height` values were changed. No device mapping or expected quantity was changed.

## Files Changed

- [training/takeoff/interactive-takeoff.js](training/takeoff/interactive-takeoff.js)
- [training/takeoff/interactive-takeoff.css](training/takeoff/interactive-takeoff.css)
- [TAKEOFF_SOURCE_FRAME_FIX_QA.md](TAKEOFF_SOURCE_FRAME_FIX_QA.md)

## Final Status

The source-frame architecture now matches the source-image coordinate systems for all three exercises. Exercise 001 Smoke targets align with the source frame without moving coordinate data, and the physical trainee click path is usable on the visible symbols.

No commit or GitHub push was made.
