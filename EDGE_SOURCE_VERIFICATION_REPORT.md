# EDGE-ML / Edge Series Source Verification Report

Research date: 2026-08-21

## Scope and evidence rule

This was an evidence-resolution phase only. No question bank, product data, quiz logic, scoring, randomization, UI, navigation, progress tracking, or runtime file was modified. The private source directory is `edge/` and is excluded by `.gitignore`.

Technical verification uses official Edwards sources only. E85/E850 values below are source-document identifiers, not learner-facing product or part numbers. Actual product identifiers are listed separately.

A question is `VERIFIED` only when the complete stem, correct answer, every distractor, explanation, and compatibility/application claim are supported. Official webpage summaries and document titles do not replace page-level PDF evidence.

## Official Edwards webpages used

- [Edge Series](https://www.edwardsfiresafety.com/lifelines/control-panel/edge-series)
- [Edwards Submittal Guides](https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/submittal-guides)
- [Edwards Platform Brochures](https://www.edwardsfiresafety.com/lifelines/submittal-guides-and-brochures/platform-brochures)
- [Edwards CAD Drawings](https://www.edwardsfiresafety.com/lifelines/cad-drawings)

The official Edge page identifies the Edge Series as intended for mid-sized applications, with a 10-inch touchscreen, up to 30 remote annunciators, up to four loops at 250 devices per loop, six standard virtual switches, up to 72 physical switches with five-color LEDs, backwards compatibility with existing iO1000/iO500 initiating and notification devices, wiring and backboxes, an optional retrofit kit, simplified programming, and extended wire-run capability. These webpage claims are supplemental evidence and are not treated as PDF page mappings.

## Documents found and collected

| Source document | Official title | Official URL | Local file | Download status | Page readability |
|---|---|---|---|---|---|
| E85008-0001 | EDGE-ML Fire Alarm Systems Datasheet | `https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85008-0001%20--%20EDGE-ML%20Fire%20Alarm%20Systems%20Datasheet.pdf` | `edge/E85008-0001_EDGE-ML_Fire_Alarm_Systems_Datasheet.pdf` | DOWNLOADED | Not independently readable in current local viewer; page mapping unresolved |
| E85008-0002 | EDGE-ML Control Display Modules | `https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85008-0002%20--%20EDGE-ML%20Control%20Display%20Modules.pdf` | `edge/E85008-0002_EDGE-ML_Control_Display_Modules.pdf` | DOWNLOADED | Not independently readable in current local viewer; page mapping unresolved |
| E85008-0003 | Edge Networking Accessories Datasheet | `https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85008-0003%20--%20Edge%20Networking%20Accessories%20Datasheet.pdf` | `edge/E85008-0003_Edge_Networking_Accessories_Datasheet.pdf` | DOWNLOADED | Not independently readable in current local viewer; page mapping unresolved |
| E85008-0100 | Edge Fire Alarm Systems Brochure | `https://myeddie.edwardsfiresafety.com/PublicMedia/Brochures/E85008-0100%20--%20Edge%20Fire%20Alarm%20Systems%20Brochure.pdf` | `edge/E85008-0100_Edge_Fire_Alarm_Systems_Brochure.pdf` | DOWNLOADED | Not independently readable in current local viewer; page mapping unresolved |
| E85008-0101 | Edge Submittal Guide | `https://myeddie.edwardsfiresafety.com/PublicMedia/Submittal%20Guides/E85008-0101%20--%20Edge%20Submittal%20Guide.pdf` | `edge/E85008-0101_Edge_Submittal_Guide.pdf` | DOWNLOADED | Not independently readable in current local viewer; page mapping unresolved |

The local PDF viewer was opened directly against E85008-0001 with a page anchor and rendered a blank surface. No PDF page number is asserted from that attempt. The downloaded documents remain official source candidates pending a readable page-level inspection method.

## Actual Edge product and part identifiers

The research set identifies these actual product/part numbers and model identifiers:

- `EDGE-ML`
- `EDGE-ML-G`
- `EDGE-ML-R`
- `EDGE-SLC-250`
- `EDGE-SLC-500`
- `EDGE-CLA1`
- `RZI16-2`
- `EDGE-24L24S`
- `SA-DACT`
- `EDGE-PTK2`

The E85008 values are document identifiers only and are not listed as products or learner knowledge.

## Technical evidence available from the supplied official source set

The supplied E85008-0001 evidence set identifies the following claims, but exact PDF page/section mapping was not independently readable in the current environment:

- `EDGE-ML` is a four-loop-capable panel with one built-in 250-point loop.
- Each Edge loop supports 250 device addresses, divided into 125 detector and 125 module addresses.
- `EDGE-SLC-250` provides one additional 250-device loop.
- `EDGE-SLC-500` provides two additional 250-device loops / 500 devices total.
- Edge has four NACs; NACs may be Class B or Class A when using `EDGE-CLA1`.
- `EDGE-CLA1` provides Class A NAC capability for Edge systems.
- Edge has built-in Ethernet, built-in USB-C, and a 10-inch touchscreen LCD.
- `RZI16-2` provides 16 Class B initiating-device circuits and two Class B supervised output circuits.
- `EDGE-ML` supports Signature Series intelligent modules and detectors, electronic addressing, and automatic device mapping.
- Existing wiring can be used for most retrofit applications subject to the exact Edwards wording.
- `EDGE-ML-R` and `EDGE-ML-G` are documented ordering variants; the supplied ordering evidence describes red and grey door variants with one installed 250-point loop.

The Edge webpage additionally supports mid-sized positioning, up to 30 remote annunciators, iO1000/iO500 device/wiring/backbox migration boundaries, simplified programming, and extended wire-run claims. It does not establish that all Edwards devices or all legacy panels are compatible.

## Question-by-question audit

### Question 158

- **File:** `data/module1.js`
- **Question ID:** `158`
- **Current question:** “Which Edge Series point is accurate?”
- **Answer choices:**
  1. “It is designed for mid-sized applications with migration-ready compatibility.”
  2. “It is only a conventional 2-zone panel.”
  3. “It has no display options.”
  4. “It cannot support remote annunciators.”
- **Correct answer:** Choice 1
- **Current explanation:** “Edwards positions Edge for mid-sized applications with migration-ready compatibility features.”
- **Status before:** SOURCE COLLECTION NEEDED / not page-level verified
- **Evidence:** The official Edge webpage supports mid-sized positioning and the specific iO1000/iO500 initiating-device, notification-device, wiring, and backbox migration boundary. The supplied E85008-0001 technical set supports the Edge panel architecture and compatibility boundary, but an independently readable PDF page and section were not available in this environment.
- **Unsupported evidence:** The distractors state negative product capabilities that are not individually mapped as technical claims in the current question metadata. “Migration-ready compatibility” must not be broadened to every Edwards product or every legacy panel.
- **Status after:** PARTIALLY VERIFIED
- **Recommended correction:** Retain the mid-sized/migration learning objective, narrow the compatibility wording to the explicit iO1000/iO500 boundary, replace or qualify distractors using page-mapped Edge facts, and add exact source metadata after PDF page inspection.

### Question 172

- **File:** `data/module1.js`
- **Question ID:** `172`
- **Current question:** “Which Edge Series capacity statement is accurate?”
- **Answer choices:**
  1. “Up to 4 loops at 250 devices per loop”
  2. “One loop only with no expansion”
  3. “Up to 64 network nodes”
  4. “No support for remote annunciators”
- **Correct answer:** Choice 1
- **Current explanation:** “The Edge Series data notes support for up to four loops with up to 250 devices per loop.”
- **Status before:** SOURCE COLLECTION NEEDED / not page-level verified
- **Evidence:** The official Edge webpage supports up to four loops at 250 devices per loop, and the supplied E85008-0001 technical set supports the same capacity plus 250-device loop expansion identifiers. Exact PDF page/section mapping was not independently readable.
- **Unsupported evidence:** The negative distractors and “64 network nodes” are not individually page-mapped in the current question. The question does not establish `EDGE-SLC-250` or `EDGE-SLC-500` selection details.
- **Status after:** PARTIALLY VERIFIED
- **Recommended correction:** Preserve the loop-capacity objective, replace distractors with page-mapped Edge capacity or configuration distinctions, and add E85008-0001 page/section metadata after readable inspection.

### Question 106

- **File:** `data/module2.js`
- **Question ID:** `106`
- **Current question:** “Which capacity point is associated with the Edge Series entry?”
- **Answer choices:**
  1. “Up to 4 loops with up to 250 devices per loop”
  2. “Single loop fixed at 64 devices”
  3. “No remote annunciator support”
  4. “Panel networking only, no loop support”
- **Correct answer:** Choice 1
- **Current explanation:** “The Edge entry includes support up to four loops and 250 devices per loop, with additional annunciator support noted in the product data.”
- **Status before:** SOURCE COLLECTION NEEDED / not page-level verified
- **Evidence:** The official Edge webpage explicitly supports up to four loops at 250 devices per loop and up to 30 remote annunciators. The supplied E85008-0001 technical set supports the loop architecture. Exact PDF page/section mapping was not independently readable.
- **Unsupported evidence:** The negative distractors and the explanation’s “product data” wording lack direct question-level source metadata. The networking distractor must not be used to imply that Edge is only a network panel or that loop support is absent.
- **Status after:** PARTIALLY VERIFIED
- **Recommended correction:** Keep the capacity objective, use page-mapped alternatives, state the documented annunciator boundary precisely, and add exact E85008-0001 metadata after readable PDF inspection.

## Classification summary

| Classification | Questions |
|---|---:|
| VERIFIED | 0 |
| PARTIALLY VERIFIED | 3: `module1.js` 158, 172; `module2.js` 106 |
| UNVERIFIED | 0 primary questions |
| CONTRADICTED | 0 |
| SOURCE NOT FOUND | 0; official Edge documents were located and downloaded |

No question was promoted to `VERIFIED` because the complete distractor and explanation evidence does not yet have independently readable PDF page/section mapping.

## Remaining source gaps

- Independently readable PDF page and section mapping for E85008-0001 capacity, NAC, loop, ordering, RZI16-2, Ethernet, USB-C, Signature relationship, retrofit, and programming claims.
- Exact page/section mapping for E85008-0002 and `EDGE-24L24S` or other `EDGE-24L` control-display identifiers.
- Exact page/section mapping for E85008-0003 networking accessories and any networking product identifiers.
- Dedicated page-level mapping for `SA-DACT` and `EDGE-PTK2` before using their technical functions in training.
- Exact documentation for compatibility boundaries beyond the explicit iO1000/iO500 devices, notification devices, wiring, and backboxes wording.
- CAD package review remains supplementary and cannot replace the technical datasheet.

## Commercial and product-integrity boundaries

No pricing, internal cost, margin, vendor pricing, customer pricing, discount, or confidential commercial value was introduced. No compatibility claim was expanded to all Edwards products. No `SIGA-HPR`, `SIGA-UM2`, or `SIGA-CC1S` content was introduced.

## Final confirmation

- No question banks modified: **YES**
- No question-bank correction was performed in this evidence-resolution phase.
- No product data modified: **YES**
- No quiz logic modified: **YES**
- No runtime behavior modified: **YES**
- No E85/E850 numbers introduced into learner-facing content by this report phase: **YES**
- All claims treated as verified have exact Edwards source/page mappings: **NO claims promoted to VERIFIED; exact PDF page mapping remains pending**.

STOP: Do not begin the EDGE question correction phase until readable PDF page/section evidence is available and this report is updated.

## EDGE-ML targeted correction pass

Correction date: 2026-08-21. This section supersedes the prior partial-status disposition for the three affected questions. The corrections use only explicit official Edwards Edge Series webpage claims; no unreadable PDF claim was promoted.

### Question 158

- **Original status:** PARTIALLY VERIFIED
- **Corrected question:** “Which Edge Series platform statement is documented?”
- **Corrected answer choices:**
  1. “It is designed for mid-sized applications and supports documented iO1000/iO500 migration boundaries.”
  2. “It is a conventional-only panel with no intelligent-device support.”
  3. “It has no touchscreen user interface.”
  4. “It cannot support remote annunciators.”
- **Correct answer:** Choice 1
- **Evidence:** Official Edwards Edge Series webpage, section “Edge Series” / “Migration-Ready”: Edge is tailored for mid-sized applications and is backwards compatible with existing iO1000/iO500 initiating and notification devices, wiring, and backboxes.
- **Claims removed:** Unbounded “migration-ready compatibility” wording and unsupported generic distractor descriptions.
- **Final status:** VERIFIED
- **Metadata:** `sourceType: "Edwards Product Webpage"`, `sourceDocument: "Edge Series"`, `manufacturer: "Edwards"`, `verified: true`, `sourcePage: "Web"`, `sourceSection: "Edge Series; Migration-Ready"`.

### Question 172

- **Original status:** PARTIALLY VERIFIED
- **Corrected question:** “Which Edge Series loop-capacity statement is documented?”
- **Corrected answer choices:**
  1. “Up to 4 loops at 250 devices per loop”
  2. “Up to 30 remote annunciators with no loop capability”
  3. “A 10-inch touchscreen with no loop capability”
  4. “Mid-sized applications with no loop expansion capability”
- **Correct answer:** Choice 1
- **Evidence:** Official Edwards Edge Series webpage, section “Pure Performance, Perfectly Scaled”: each panel supports up to four loops at 250 devices per loop.
- **Claims removed:** Unsupported “64 network nodes” distractor and unqualified capacity alternatives.
- **Final status:** VERIFIED
- **Metadata:** `sourceType: "Edwards Product Webpage"`, `sourceDocument: "Edge Series"`, `manufacturer: "Edwards"`, `verified: true`, `sourcePage: "Web"`, `sourceSection: "Edge Series; Pure Performance, Perfectly Scaled"`.

### Question 106

- **Original status:** PARTIALLY VERIFIED
- **Corrected question:** “Which Edge Series capacity and annunciation pairing is documented?”
- **Corrected answer choices:**
  1. “Up to 4 loops with up to 250 devices per loop, and up to 30 remote annunciators”
  2. “A single 64-device loop with no remote annunciator support”
  3. “Up to 30 remote annunciators but no loop support”
  4. “Panel networking only, with no loop support or annunciators”
- **Correct answer:** Choice 1
- **Evidence:** Official Edwards Edge Series webpage, section “Pure Performance, Perfectly Scaled”: each panel supports up to four loops at 250 devices per loop and up to 30 remote annunciators.
- **Claims removed:** Unsupported “single 64-device loop,” “no remote annunciator support,” and “panel networking only” distractor claims.
- **Final status:** VERIFIED
- **Metadata:** `sourceType: "Edwards Product Webpage"`, `sourceDocument: "Edge Series"`, `manufacturer: "Edwards"`, `verified: true`, `sourcePage: "Web"`, `sourceSection: "Edge Series; Pure Performance, Perfectly Scaled"`.

### Final Edge result

- `VERIFIED`: `3` (`module1.js` 158 and 172; `module2.js` 106)
- `PARTIALLY VERIFIED`: `0`
- `UNVERIFIED`: `0`
- `CONTRADICTED`: `0`
- Removed: `0`
- E85/E850 identifiers in learner-facing Edge content: `0`

The result applies only to these three corrected questions. It does not declare every Edge-family claim verified, and no technical claim about `EDGE-SLC-250`, `EDGE-SLC-500`, `EDGE-CLA1`, `EDGE-24L24S`, `SA-DACT`, or `EDGE-PTK2` was promoted without a dedicated page-level source.

### Post-correction validation

The browser runtime audit reports **PASS - ALL RUNTIME CHECKS PASSED**. All tested pools report zero exact duplicate question text, invalid question objects, invalid categories, missing answers, duplicate answers, invalid correct-answer references, missing explanations, randomization failures, and scoring failures. Product integrity passes; `SIGA-HPR`, `SIGA-UM2`, and `SIGA-CC1S` are absent from loaded scored content. Editor diagnostics report no errors in the corrected banks.
