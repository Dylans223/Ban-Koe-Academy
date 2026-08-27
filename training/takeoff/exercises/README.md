# Future Takeoff Exercises

This directory is reserved for approved, source-backed drawing exercises. It is intentionally empty until readable drawing assets and reviewed annotations are available.

The empty `example-schema.js` file is loaded by `interactive-takeoff.js` as a data contract only. It contains no drawing, key, notes, products, colors, locations, quantities, or device relationships.

Do not add inferred symbols, part numbers, colors, quantities, notes, or device locations. Use the exact placeholder `Training data required` or `Awaiting approved drawing` when documenting an incomplete exercise.

## Required Exercise Shape

Each approved exercise will eventually define these fields:

```text
exerciseId
drawing
key
notes
products
symbols
partNumbers
colors
locations
expectedQuantities
existingDevices
excludedDevices
specialInstructions
```

## Field Requirements

- `exerciseId`: stable identifier for the approved exercise.
- `drawing`: approved image or rendered page reference; the original source remains read-only.
- `key`: reviewed drawing key/legend content.
- `notes`: all applicable notes that affect interpretation or counting.
- `products`: source-backed product identities.
- `symbols`: reviewed symbol definitions and their product relationships.
- `partNumbers`: verified part numbers tied to the exercise source.
- `colors`: approved Ban-Koe color assignments; never infer these from convention.
- `locations`: reviewed countable occurrences or regions.
- `expectedQuantities`: final product-level quantities derived from reviewed locations.
- `existingDevices`: locations identified as existing or remaining.
- `excludedDevices`: locations that must not be counted and the reason for exclusion.
- `specialInstructions`: source-backed counting or interpretation rules.

## Heat Detector Recognition Rule

For Academy-level takeoff training, `RATE-OF-RISE HEATS` and `FIXED HEATS` are one general `HEAT DETECTORS` recognition/counting category by default. Do not force a trainee to distinguish a Rate-of-Rise Heat from a Fixed Heat by symbol alone. Use a specific subtype only when the drawing notes, specifications, legend, or other authoritative project information explicitly requires it. Combination Heat types follow the project-specific requirement.

Before an exercise is used in the Academy, every populated field must be reviewed against the source and marked with appropriate provenance. Missing or unreadable information stays unresolved rather than being guessed.

## Interactive Framework Boundary

`training/takeoff/interactive-takeoff.js` owns the future drawing-practice state separately from `takeoff.js`. Its planned operations are:

- Acknowledging the key and notes before counting.
- Selecting a product category.
- Marking a matching location and maintaining a product tally.
- Undoing a marked location.
- Entering final quantities and reconciling them against approved expected quantities.
- Resetting the advanced exercise state without changing the current simulator.

With the current empty schema, the framework remains gated and displays `AWAITING APPROVED DRAWING DATA`.