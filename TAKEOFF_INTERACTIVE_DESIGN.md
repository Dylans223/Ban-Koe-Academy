# Takeoff Interactive Design

## Recommendation

Build the future drawing practice as an additive, source-backed module beside the existing Takeoff simulator. Use a rendered drawing image in a stable viewport with an interaction overlay, not direct editing of the uploaded PDF. Keep the PDF as a read-only reference and keep the existing simulator as the simpler practice mode.

The recommended first implementation is a controlled raster drawing asset plus normalized annotation data. This is easier to test than free-form PDF markup, supports mouse and touch input, and makes the expected answer deterministic without claiming that unreadable source details were extracted.

## Proposed Component Model

```text
Takeoff page
  12 instructional lessons
  Existing simulator (unchanged)
  Advanced practice entry point
    AdvancedPracticeShell
      InstructionGate: key -> notes -> product identity
      DrawingViewport: image + overlay layer
      MarkToolbar: selected product, color status, undo, reset
      TallyPanel: product -> running count
      FinalEntryPanel: final quantities
      ReconciliationPanel: marks + tally + entry feedback
```

A future implementation should live in a new Takeoff-specific script, for example `training/takeoff/interactive-takeoff.js`, instead of adding drawing branches throughout the existing `takeoff.js` handlers.

## Asset Strategy

### Recommended first asset

Use a reviewed PNG or SVG rendering of a permitted training drawing, paired with explicit answer annotations. The rendering must be supplied or approved as a training asset. It must not be reconstructed from assumptions about the uploaded PDF.

The asset manifest should include:

```javascript
{
    id: "approved-exercise-id",
    sourceDocument: "approved-source-file.pdf",
    sourceType: "Ban-Koe takeoff training asset",
    manufacturer: "Edwards",
    verified: true,
    drawingAsset: "approved-exercise.png",
    pages: [{ id: "page-1", width: 2400, height: 1600 }],
    products: [{ partNumber: "verified-part", whatIsIt: "verified identity" }],
    annotations: []
}
```

Each annotation must be explicitly reviewed and should contain normalized coordinates, product identity, and whether the location is countable for the exercise. Example shape, not production data:

```javascript
{
    id: "location-001",
    pageId: "page-1",
    productId: "verified-product-id",
    shape: "point",
    x: 0.42,
    y: 0.31,
    radius: 0.018,
    expected: true
}
```

Do not populate these fields from the current PDF until the symbols, products, counts, and coordinates can be established confidently.

## Why Not Direct PDF Markup

- Browser PDF support is inconsistent for overlays and interaction.
- The uploaded PDF should remain unchanged and read-only.
- PDF page coordinates, zoom behavior, and browser rendering can vary.
- A reviewed image plus normalized annotations gives consistent hit testing and repeatable tests.
- The original PDF can remain linked beside the exercise for visual reference.

A PDF.js-based viewer is a possible later option if selectable text, page navigation, or high-fidelity source inspection becomes a real requirement. It should still render an external overlay and should not modify the source document.

## Interaction Contract

1. **Instruction gate**: the trainee confirms the key has been read.
2. **Notes gate**: the trainee confirms the applicable notes have been read.
3. **Product selection**: the trainee selects one verified product identity. If no source-backed mapping exists, the exercise stops and displays “Requires clarification.”
4. **Mark/count**: clicking or tapping a valid annotation marks that occurrence and increments the selected product tally. The mark must be visually distinct and keyboard reachable where practical.
5. **Cross off**: a counted occurrence becomes crossed off. Clicking it again should undo only with an explicit undo action or confirmation, preventing accidental double changes.
6. **Running tally**: tally state is derived from marked annotations, grouped by product ID. It is not written into the existing simulator’s `rememberedCounts`.
7. **Final entry**: the trainee enters final quantities by part number.
8. **Reconciliation**: compare expected annotation count, marked/crossed-off count, running tally, and final entry. Return category-specific feedback for missed, duplicated, wrong-product, and wrong-quantity conditions.
9. **Retry**: reset only the advanced exercise state. Do not reset the existing simulator state or global progress.

## State Boundary

Use a separate state object such as:

```javascript
{
    stage: "key",
    selectedProductId: null,
    markedLocations: new Set(),
    crossedOffLocations: new Set(),
    tallyByProduct: {},
    finalQuantities: {},
    feedback: null,
    startedAt: null,
    completedAt: null
}
```

The drawing state should remain isolated from:

- `scenarioState.currentStep`
- `scenarioState.rememberedCounts`
- Existing identification, quantity, relationship, or BOM scores
- Global progress storage

## Color Handling

The UI may show the currently selected color as a tool state only after Ban-Koe supplies the approved color/product relationship. Until then:

- Do not assign a color to a product.
- Do not infer a mapping from the PDF image.
- Label the color relationship as requiring clarification.
- Permit the interaction design to use a neutral selection state in a prototype.

## Stage and Difficulty Design

The nine stages should be progressively enabled, not presented as one complicated drawing:

| Stage | Experience | Completion signal |
| --- | --- | --- |
| 1 | Understand the Key | Key acknowledgement |
| 2 | Understand the Notes | Notes acknowledgement |
| 3 | Identify Products | Source-backed product selected |
| 4 | Practice Counting | Valid occurrences counted |
| 5 | Practice Crossing Off | Counted occurrences crossed off |
| 6 | Build the Tally | Running tally reviewed |
| 7 | Enter the Takeoff | Final quantities entered |
| 8 | Reconcile the Takeoff | All comparison categories reviewed |
| 9 | Timed/Independent Takeoff | Approved exercise completed without hints |

Do not add Levels 1 through 4 until the controlled exercise works, is source-backed, and has stable validation coverage.

## Error Feedback Scenarios

Feedback should be event-based and practical rather than another multiple-choice bank:

- **Key skipped**: block counting and explain that symbol meaning must be established first.
- **Notes skipped**: block counting and direct the trainee back to applicable notes.
- **Wrong symbol**: identify the selected product mismatch without inventing a new mapping.
- **Duplicate mark**: explain that the occurrence is already crossed off.
- **Missed device**: identify the unmarked expected occurrence after submission.
- **Wrong part number**: distinguish identity error from quantity error.
- **Wrong quantity**: show drawing tally versus final entry.
- **Tally mismatch**: show the product-level running tally and expected count.
- **Spreadsheet mismatch**: show final entry versus reconciled tally.

## Accessibility and Responsive Behavior

- Use buttons or keyboard-operable controls for each annotation where feasible; provide a non-canvas list fallback for the same locations.
- Provide text labels for selected product, count, crossed-off count, and reconciliation status.
- Keep drawing aspect ratio stable and scale annotation hit areas with the viewport.
- Ensure controls remain usable on touch screens and narrow layouts.
- Do not rely on color alone; pair any approved color with product text and a state indicator.

## Testing Plan

Before enabling production practice:

- Verify the source asset loads and preserves aspect ratio at desktop and mobile widths.
- Verify key and notes gates block counting in the correct order.
- Verify one valid mark increments exactly one product tally.
- Verify duplicate clicks cannot silently double-count.
- Verify undo/reset behavior.
- Verify wrong-product, missed-device, wrong-part-number, and wrong-quantity feedback.
- Verify final reconciliation against a fixture with known annotations.
- Verify retry resets only advanced-practice state.
- Verify existing simulator questions, scoring, feedback, BOM behavior, navigation, and runtime audit remain unchanged.

## Information Still Required

- A permitted training drawing asset suitable for interaction.
- Confirmed page(s) and drawing regions to use.
- A reviewed symbol-to-product/part-number mapping.
- Confirmed Ban-Koe color assignments.
- Reviewed countable occurrence coordinates or regions.
- Expected product totals and treatment of existing, excluded, or special locations.
- Decision on whether the final “spreadsheet” is a Takeoff-only form or an existing Academy surface.
- Approved completion/progress persistence rules.
