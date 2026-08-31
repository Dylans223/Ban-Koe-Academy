# Part Number Mastery — Product Coverage Review

Reviews which Product Library (`data/edwards/index.js`) families with real, displayable part numbers are covered by the rebuilt Part Number Mastery bank, and which are not.

## Families With Real Part Numbers (candidates for this quiz)

Only products with an actual part number (not a bare manufacturer document number like `E85001-XXXX`) are realistic candidates for part-number recognition questions — this matches the Product Library's own "valid identifier" cleanup (see `PRODUCT_LIBRARY_IDENTITY_CLEANUP_REPORT.md`).

| Product family | Library products (valid part numbers) | Mastery coverage | Coverage quality | Recommended additions |
|---|---|---|---|---|
| Control panels/platforms | EST4, EST3, EST3X, iO-Series, iO-64, iO-1000, EDGE | None | **Gap** | Low priority for this quiz — panel selection is better tested in Product Applications/Modules & Systems, since it's a system-level decision, not a part-number recognition task. Not recommended here. |
| Signature input/signal modules | SIGA-CT1, SIGA-CT2, SIGA-CC1, SIGA-CC2 | Recognition (1, 3, 11, 12), discrimination (27), real-world (37, 44) | **Strong** | None needed |
| Signature relay modules | SIGA-CR, SIGA-CRR, SIGA-CRH | Recognition (4), description→PN (15), discrimination (28), real-world (38) | **Strong** | None needed |
| Signature isolator/monitor modules | SIGA-IM, SIGA-IM2, SIGA-MCC1, SIGA-MCC2, SIGA-RM1, SIGA-UM, SIGA-UM2 | Recognition (8, 9), description→PN (20), discrimination (32, 33), real-world (41) | **Adequate** | Could add one recognition question for SIGA-RM1 vs. a monitor module if a future pass wants more depth; not required now |
| Signature Optica smoke/heat/CO detectors | SIGA-OSD, SIGA-OSHD, SIGA-OSCD, SIGA-OSHCD, SIGA-COD | Recognition (5, 17), description→PN (14), decoding (26), discrimination (31), real-world (45) | **Strong** | None needed |
| Legacy/multisensor detectors | SIGA-PCD, SIGA-PHCD, SIGA-HRD, SIGA-HFD, SIGA-HCD | PN→description (21), discrimination (36) | **Adequate** | SIGA-PCD and SIGA-HCD are not individually tested — acceptable given they follow the same OS-family naming logic already taught; flagged, not required |
| Duct smoke detection | SIGA-DDOS | Recognition (6), real-world (40) | **Adequate** | None needed |
| Motion detection | SIGA-MD, SIGA-MDS | Recognition (7) | **Light** | Previous bank's MDS flashcard was trivia-level; acceptable to leave lighter since motion detection is a minor Sales Support category |
| Detector bases | SIGA-SB, SIGA-SB4, SIGA-IB, SIGA-IB4, SIGA-AB4G, SIGA-AB4G-LF, SIGA-LED | Description→PN (18), decoding (23), discrimination (29, 35) | **Adequate** | None needed — trimmed from 8 previous flashcards to 4 stronger questions per Phase 10 |
| Manual pull stations | SIGA-270, SIGA-278 | Recognition (2), description→PN (13), discrimination (30), real-world (39) | **Strong** | None needed |
| Genesis notification (wall) | G4, G4LF, G4LFV, G4S, G4SE, G1, G1A, G1V, G1AV | Recognition (22), description→PN (16), decoding (24, 25), discrimination (34), real-world (42, 46) | **Strong** | None needed |
| Genesis notification (ceiling) | GCS | Recognition (10), real-world (43) | **Adequate** | None needed |
| Genesis accessories | G1TR/G1TW, G4TR/G4TW, G4RSB/G4WSB, GRSW-10, GOCT, GRT-10, 27193-11/16 | None | **Gap (intentional)** | Accessory hardware (trim rings, boxes, tools) — low value for a part-number *recognition* quiz; better suited to a takeoff/BOM-accessory context if ever needed. Not recommended for this bank. |
| Power supplies | BPS, APS | None | **Gap** | Minor gap; could add one recognition question in a future pass if power-supply quoting becomes a bigger part of Sales Support work |
| Signature accessories | SIGA-TS, SIGA-DMP, SIGA-SEC2 | None | **Gap (intentional)** | These were flashcard-only trivia in the previous bank with little selection/discrimination value; removed rather than kept as filler, consistent with "don't inflate the bank" |
| SIGA-TCDR | None | **Gap** | Minor/specialty module; not a priority |

## Families Explicitly Out of Scope for This Quiz

- Access control, conventional (non-addressable) initiating devices, and most items still carrying an `E85001-XXXX` document number instead of a real part number (per the Product Library's own "NEEDS PART NUMBER" classification) were intentionally excluded — there is no verified real part number to quiz on.

## Summary

Coverage is strong across every Sales-Support-relevant family that has a real, verified part number: input/signal modules, relay modules, monitor/isolator modules, the Optica detector family, pull stations, and the Genesis notification lineup. The intentional gaps (accessories, power supplies, motion detectors, control panels) are either low-frequency in real Sales Support work or better tested in a different quiz category (panels/system selection belongs in Product Applications or Modules & Systems, not part-number recognition).
