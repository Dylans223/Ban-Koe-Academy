# Part Number Mastery — Content Review

Audit of the previous 58-question bank in `data/partNumberQuestions.js`, and the record of what changed in the rebuild. Product-fact verification uses the current Product Library (`data/edwards/index.js`, loaded by `products/index.html`) as the source of truth, per instructions. Source citations are documented here only — trainee-facing question/answer/explanation text never names the Product Library, "the Academy," or any database.

## Inventory Summary (previous bank)

| Category | Previous count | Notes |
|---|---:|---|
| Part number → description (direct recognition) | ~18 | Many were near-duplicate flashcards on low-priority accessories (SIGA-TS, SIGA-DMP, SIGA-LED, SIGA-MDS, etc.) |
| Description → part number | ~6 | Reasonable, kept most |
| Part number decoding | ~17 | Roughly half tested granular suffix codes (G4LFVRF, G1 marking letters AV/R/N, FIRE/FEU housing marking) not stated in the Product Library's product names/descriptions themselves — traceable only to page citations in `source` fields |
| Similar-part discrimination | ~5 | Good concept, underused |
| Real-world selection | ~8 | Good concept, underused |
| Comparison/pairing ("what's the distinction") | ~4 | Overlapped heavily with the plain recognition questions for the same part numbers |

## Duplicate / Near-Duplicate Findings

- **CC1/CC2 and CT1/CT2 recognition were tested 3-4 times each** across "what is X," "which pairing is correct," and "what does the CC/CT portion identify" — all testing the same underlying fact (CC = signal module, CT = input module) with different wording. **Consolidated** into one direct-recognition question per part number plus one discrimination question per pair (kept in the new bank as questions 1, 3, 11, 12, 27).
- **SIGA-SB4/IB4 "4" suffix** was asked as a decoding question, a discrimination question, and embedded again in a real-world BOM question — three angles on one fact. **Kept one decoding question and one discrimination question**, dropped the redundant BOM-flashcard version (new bank: questions 23, 29).
- **Genesis G4/G4LF/GCS/G1 family identity** was asked 6+ times with overlapping wording ("which series," "what does LF mean," "what's the difference," "which family fits this project"). **Consolidated to one recognition, one decoding, one discrimination, and two real-world questions** covering G1, G4, G4LF, and GCS without repeating the same fact a sixth time (new bank: 10, 16, 22, 24, 25, 34, 42, 43, 46).
- **SIGA-OS* detector family (OSD/OSHD/OSCD/OSHCD/COD)** was tested with 5 separate near-identical "which catalog number is X" flashcards. **Consolidated to recognition (5, 17), description→part-number (14), decoding of the H/C letters (26), a discrimination question (31), and one real-world substitution question (45)** — same fact set, fewer redundant flashcards, more skill variety.

## Removed as Low Job-Relevance Trivia

The following previous questions tested granular suffix/marking codes only sourced to a manufacturer datasheet page citation, not stated anywhere in the Product Library's product names or descriptions themselves. Per instructions ("do not invent an answer" / "flag for technical review" when the Product Library doesn't establish the claim), these were **removed rather than re-verified against outside manufacturer PDFs**, since accurately re-confirming exact datasheet page content was outside what this pass could verify independently:

| Removed topic | Issue | Recommended action |
|---|---|---|
| G4LFVRF full suffix decode | Tests memorizing a multi-letter combination code, not something a trainee would need to reconstruct from memory on the job | REMOVE (trivia) — keep if SME wants it reintroduced, sourced directly to the datasheet |
| G4LF vs. G4LFV distinction | Reasonable fact (horn vs. horn-strobe) but only sourced via page citation, not in the Product Library description text | SME REVIEW — could be reintroduced once confirmed against the current Product Library `officialDescription`/`features` fields |
| GRSW-10 identity | Accessory-level trivia (a wiring plate part number), low job frequency | REMOVE (trivia) |
| G1/G4 housing-marking letter codes (AV, R, N, FIRE/FEU) | Tests memorizing single-letter marking codes with no stated real-world consequence in the question itself | REMOVE (trivia / unnecessary memorization) |
| G1 "accessory vs. primary appliance" identification | Low priority; not tied to a common Sales Support task | REMOVE |

## Verified vs. Needs Review (new bank)

All 46 questions in the rebuilt bank are supported directly by the `model` field text (and, where present, `officialDescription`) of the corresponding Product Library record — every fact used is literally present in the product's name/description (e.g., "SIGA-CT2 Dual Input Module," "SIGA-OSHCD Signature Optica Smoke, Heat & Carbon Monoxide Detector"). No claim in the new bank requires outside manufacturer-PDF verification beyond what the Product Library record already states.

**One item flagged for SME review, not silently assumed:**
- Question 36 (SIGA-HRD vs. SIGA-HFD) states HRD = rate-of-rise and HFD = fixed-temperature sensing, based directly on the Product Library's product names ("Intelligent Rate-of-Rise Heat Detector" / "Intelligent Fixed Temperature Heat Detector"). This is a straightforward name-based fact, but since heat-detector sensing technology can have subtleties beyond the name, flag for a quick SME confirmation before treating it as fully authoritative.

## Technical/Structural Bug Found and Fixed (not a content issue)

The previous bank's `source: { sourceType, sourceDocument: "E85001-XXXX", ... }` metadata fields were being used by `data/quizData.js`'s pool-building filter (`if (sourcePrefix === "pn" && /E8500[0-9]{1,2}-\d{4}/i.test(questionText)) return;`) to silently **drop the entire question** from the live quiz whenever its JSON contained an E85/E850-style document number — not just hide the citation. This meant several of the previous bank's best-sourced questions (the Genesis decoding set near the end of the file) likely never reached a trainee at all. The rebuilt bank has no `source` fields on any question, which both satisfies "don't expose the source" and avoids re-triggering this filter. Documented here rather than silently changing `quizData.js`'s filter logic, since that file is shared across every quiz category and modifying it was outside this pass's scope.

## Product-Integrity Safeguard Caught a Real Mistake

The site's `runtime-audit.html` explicitly treats `SIGA-UM2` and `SIGA-CC1S` as **unverified — do not use as a training fact** (per `docs/LEGACY_QUESTION_SOURCE_VERIFICATION_REPORT.md`'s "Product Integrity Safeguards"). An early draft of the rebuilt bank included a SIGA-UM vs. SIGA-UM2 discrimination question, which the runtime audit correctly flagged as a FAIL ("unverified product appears in loaded scored data"). That question was replaced with a SIGA-IM vs. SIGA-IM2 discrimination question instead (both verified in the Product Library), and the runtime audit now passes cleanly. This confirms the audit safeguard is working as intended and that no unverified product identifier reaches the final bank.

## Final Bank Composition

46 questions: 10 direct recognition, 6 description→part number, 6 part number→description, 4 part-number decoding, 10 similar-part discrimination, 10 real-world selection. See `PART_NUMBER_MASTERY_FINAL_QA.md` for the full type/difficulty/answer-position breakdown and testing record.
