# Remaining Edwards Product Family Audit

Audit date: 2026-08-21

## Scope

Inventory only. No question bank, product data, quiz logic, UI, navigation, scoring, randomization, progress, or runtime file was modified. The six requested scored banks were scanned, along with `data/quizData.js` and the production question-pool wiring.

Actual product/model identifiers are used below. E85/E850 values are treated only as source-document identifiers and are not counted as products or part numbers.

The six scanned banks contain 590 primary question records. The browser's Mixed Knowledge pool is derived and is not counted separately.

## Ranked remaining families

The main ranking excludes Genesis, Signature, EST4, and iO because those families have already received dedicated evidence phases. Residual unresolved claims inside those families are listed separately below.

| Rank | Product Family | Questions | Part Numbers | Verification Status | Documentation Available | Risk | Training Importance |
|---:|---|---:|---|---|---|---|---|
| 1 | EDGE-ML / Edge Series | 3 | `EDGE-ML` | SOURCE COLLECTION NEEDED; not page-level verified | Official Edwards Edge pages and candidate documents are identified in the repository matrix: Edge datasheet, control-display, networking accessories, brochure, and submittal guide. No private Edge PDF set is present under `_sources/edwards/`. | High: capacity, migration, networking, annunciation, and compatibility claims can affect product selection. | High: platform recognition and system-size selection are core Sales Support skills. |
| 2 | EST3X residual distractor reference | 1 distractor-only record | `EST3X` | Not a direct family question; product-family phase not opened in this audit | Official Edwards EST3X platform page and candidate submittal documentation are referenced in existing product data/reports, but no dedicated page-level audit was performed here. | Low as a distractor; medium if later promoted into platform selection or compatibility training. | Low in the current scored surface; higher only if the Academy adds a dedicated legacy-platform path. |

### EDGE-ML question inventory

| File | Question ID | Actual identifier | Topic |
|---|---:|---|---|
| `data/module1.js` | 158 | `EDGE-ML` | Mid-sized application positioning and migration-ready compatibility wording |
| `data/module1.js` | 172 | `EDGE-ML` | Loop and device-capacity statement |
| `data/module2.js` | 106 | `EDGE-ML` | Loop and device-capacity statement |

The three questions use `EDGE-ML`/Edge Series wording rather than E85/E850 document numbers. Their current explanations do not provide a page-level source mapping, so they should remain outside `VERIFIED` until the official Edge documents are collected and reviewed page by page.

## Residual unresolved claims inside completed families

These are not ranked as new families, but they remain relevant because the previous family phases explicitly left unresolved material.

| Family | Questions / files | Actual identifiers | Current status | Documentation status | Risk and reason |
|---|---|---|---|---|---|
| Signature: SIGA-DDOS | 8: `module1.js` 184-189; `module2.js` 117; `wiringQuestions.js` 52 | `SIGA-DDOS` | SOURCE NOT FOUND for exact product/wiring/relay claims | No dedicated official SIGA-DDOS wiring or product document mapped in the Signature report | High: onboard relay, terminal names, SLC address, and wiring claims could affect field selection and quoting. |
| Signature: detector bases/accessories | `partNumberQuestions.js` 8, 19, 22, 27, 43, 52-54, 58-59, 65, 68, 70, 76-77, 82; `finalBossQuestions.js` `fbq_020` distractor | `SIGA-AB4G`, `SIGA-AB4G-LF`, `SIGA-SB`, `SIGA-SB4`, `SIGA-IB`, `SIGA-IB4`, `SIGA-LED`, `SIGA-DMP`, `SIGA-TS`, `SIGA-SEC2` | Mostly SOURCE NOT FOUND; `SIGA-AB4G` is only PARTIALLY VERIFIED | Existing detector sheets and one relay-module reference are not a universal base/accessory compatibility matrix; no dedicated official pages are mapped for most accessories | High: compatibility, mounting, replacement, and accessory claims can create incorrect BOMs. |
| Signature: detector residuals | `partNumberQuestions.js` 17-18, 45-46, 60-62, 72-73 and related Final Boss records; `module2.js` detector records | `SIGA-OSD`, `SIGA-OSHD`, `SIGA-PHCD`, `SIGA-OSCD`, `SIGA-COD`, `SIGA-OSHCD` | Mixed: some sensing combinations are page-verified, while OSD/OSHD/PHCD and broader compatibility/application claims remain claim-specific or unresolved | Dedicated official pages are available for some combinations; the Signature report identifies missing or incomplete mappings for the remaining detector families and compatibility claims | High: detector selection and false compatibility assumptions are consequential. |
| Signature: manual stations | `module1.js` 194-196; `partNumberQuestions.js` 4, 5, 15, 40; `finalBossQuestions.js` `fbq_009`, `fbq_016`, `fbq_034` | `SIGA-270`, `SIGA-278` | PARTIALLY VERIFIED at family level; exact part-number/reset/compatibility claims remain unresolved in the current Signature report | Official manual-station page/document mapping was not completed | Medium-high: wrong action type or compatibility assumption affects takeoff and replacement selection. |
| Signature: generic module/application claims | Generic module IDs listed in the Signature report, including monitor/control, CT/CC/UM, relay, and isolator scenarios | `SIGA-CT1`, `SIGA-CT2`, `SIGA-CC1`, `SIGA-CC2`, `SIGA-CR`, `SIGA-CRR`, `SIGA-CRH`, `SIGA-IM2`, `SIGA-UM` | Product/personality facts are page-verified in parts, but broader generic claims remain partial or source-boundary dependent | Official module sheets exist for the mapped products; question-level claim reconciliation remains incomplete for some scenarios | High where a generic statement is mistaken for universal compatibility or circuit behavior. |
| Genesis residuals | Historical unresolved rows remain in the legacy/Genesis report, including G4/G4LF/GCS/G1, accessory, wiring, and model-suffix groups | `G4LF`, `G4LFV`, `G1A`, `G1V`, `G1AV`, `G1ARF`, `G1VRF`, `G1AVRF`, `GCS`, `GOCT`, `GRSW-10` | The recent Genesis correction record treated the mapped production set as corrected, but historical report tables still contain source-pending claims; this is a report-reconciliation item, not a new family ranking | Official Genesis documents and reports exist, but the repository contains historical page-pending classifications that should be reconciled before another correction phase | Medium-high: wiring, suffix, accessory, mounting, and compatibility claims are easy to over-infer. |
| EST4 residuals | No additional unresolved direct family row was identified beyond the superseding EST4 correction records | `EST4`, `4-NET`, `4-NET-XT`, `4-NET-AD`, `4-FWAL`, `4-CPU` and related component names | The mapped correction surface is complete for its reviewed IDs; historical report tables are superseded records | Official page-level component sources are available in `_sources/edwards/est4/` | Residual risk exists only outside the corrected mapped surface; do not treat historical tables as current unreviewed production status. |
| iO residuals | No additional unresolved direct iO question identified after the iO correction pass | `iO64`, `iO1000`, `iO-SDC1`, `iO-SDC2`, related options | The eight direct iO questions are recorded as corrected/verified; no new iO family ranking is needed | Official iO page-level source set is in private `io/` and mapped in the iO report | No new unresolved direct family item found; preserve the Ethernet-versus-networking and compatibility boundaries. |

The residual table intentionally separates unresolved claims from the main ranking. It does not reopen or recorrect any completed family.

## Other scored content that is not a product family

Several records teach generic fire-alarm concepts rather than an identifiable Edwards product or part number: SLC/NAC concepts, generic monitor/control functions, HVAC and elevator interfaces, waterflow/tamper, detector-base estimating practice, wiring notation, and general BOM review. These should not be treated as a product-family audit target until an actual product identifier and an official Edwards source are selected.

The access-control bank contains HID Aero/VertX/Signo, HES, and Von Duprin products. Those are not Edwards fire-alarm product families, so they are excluded from this Edwards ranking. They represent a separate manufacturer/product-domain audit scope.

## Documentation status overview

| Family or scope | Existing official documentation | Additional collection needed | Current decision |
|---|---|---|---|
| EDGE-ML | Official Edwards Edge pages and candidate document references are known | Yes: collect the exact Edge datasheet, submittal, networking, display, and migration documents, then map pages | Rank 1 / next family |
| Signature residuals | Several module/detector sheets already exist; dedicated DDOS, base/accessory, manual-station, and compatibility gaps remain | Yes, targeted source collection | Keep separate from new-family ranking |
| Genesis residuals | Official Genesis source set and correction reports exist | Reconcile historical status records before any further correction | Do not rank as new family |
| EST4 residuals | Official component sheets and correction records exist | Only if a new unresolved claim is found outside the mapped correction surface | Do not rank as new family |
| iO residuals | Official iO source set and correction records exist | No new direct family collection identified | Do not rank as new family |
| Generic fire-alarm concepts | No single Edwards product document can verify generic claims as a family | Depends on future product-specific scoping | Not rankable as a product family |
| HID/HES/Von Duprin access control | Existing content is manufacturer-specific but outside Edwards fire-alarm scope | Separate audit needed | Excluded from Edwards ranking |

## Permanent training exclusions

The following identifiers remain excluded from scored training under the existing Academy rules:

- `SIGA-HPR` — invalid/unverified training identifier; do not use.
- `SIGA-UM2` — unverified; do not use as a training fact.
- `SIGA-CC1S` — documented in the source set but not approved for scored training in the current product-integrity policy.

No new excluded product was added by this inventory. E85/E850 values remain source-document identifiers only and are not product-family identifiers.

## Recommended next family

### EDGE-ML / Edge Series

EDGE-ML is the single recommended next family because it is the only clearly identifiable non-completed Edwards family with direct scored coverage, it affects three product-selection/capacity questions, and the official Edwards document set is discoverable even though it has not yet been collected and page-mapped in this repository. The technical risk is meaningful: loop capacity, annunciation, migration compatibility, and networking claims can change a quote or replacement recommendation. Its question count is smaller than the residual Signature backlog, but it is a clean, bounded family with a realistic path to page-level verification.

No evidence collection or correction phase was started. This report is inventory and prioritization only.
