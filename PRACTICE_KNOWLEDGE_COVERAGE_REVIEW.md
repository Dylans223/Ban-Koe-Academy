# Practice / Knowledge Simulator — Coverage Review

Checks whether the Takeoff Knowledge Simulator adequately covers core fire-alarm system knowledge, after this pass's rewrite.

| Topic | Coverage | Notes |
|---|---|---|
| System architecture (panel sizing/selection) | ✅ Good | `panel-selection-io64` (iO64 vs. iO1000 vs. EST4 capacity reasoning) |
| FACP | ✅ Added | `facp-faa-roles` |
| FAA | ✅ Added | `facp-faa-roles` |
| SLC | ✅ Added | `slc-vs-nac`, `slc-device-not-reporting` |
| NAC | ✅ Added | `slc-vs-nac` |
| Initiating devices (smoke) | ✅ Good | `smoke-detection` |
| Notification appliances (horn/strobe function) | ✅ Improved | `notification-appliance-function` now tests the horn vs. horn-strobe function concept instead of bare SKU recall |
| Speakers / speaker-strobes | ⚠️ Light | Only touched indirectly via the BOM catalog list, no dedicated question; acceptable given this scenario's requirements don't call for speakers — not a priority gap |
| Duct smoke detection | ✅ Good | `duct-smoke` (device identity), `duct-monitor` (monitoring interface) |
| HVAC shutdown | ✅ Good | `hvac-interface-verification` (verification habit), `hvac-control` (control/relay function) |
| Door holders | ✅ Good | `door-holder` |
| Waterflow | ✅ Added | `waterflow-monitoring` |
| Tamper | ✅ Added | `tamper-monitoring` |
| Monitor modules | ✅ Good | `duct-monitor`, `waterflow-monitoring` |
| Control/relay modules | ✅ Good | `hvac-control`, `door-holder` |
| CR/CT modules | ⚠️ Not directly tested here | Intentional — this is Part Number Mastery's territory (SIGA-CR/CRR/CRH, SIGA-CT1/CT2 recognition/discrimination already covered there); duplicating it here would violate the Part Number Mastery boundary |
| Isolator modules | ⚠️ Not tested | Minor gap; could add a relationship question ("a wiring short occurs on the SLC — what protects the rest of the loop?") in a future pass if isolator concepts are judged a priority |
| Power supplies / batteries | ⚠️ Not tested | Minor gap; low priority for a Sales Support-focused simulator |
| Wiring basics | ✅ Touched | `slc-vs-nac` covers the core SLC/NAC wiring-role distinction; deeper wiring detail is Wiring & Connections quiz territory |
| Takeoff concepts (quantities, BOM extraction) | ✅ Strong | 9 quantity questions + BOM builder step |
| BOM concepts | ✅ Strong | BOM builder step, remembered counts, reconciliation scoring |
| Troubleshooting logic | ✅ Added | `slc-device-not-reporting` |
| Acronyms (FACP/FAA/SLC/NAC) | ✅ Added | `facp-faa-roles`, `slc-vs-nac` |
| Product relationships (device ↔ accessory) | ✅ Good | `genesis-octagon-adapter` |

## Summary

Before this pass, the relationship section (the part of this tool best suited to teaching "how the system works" rather than "what is this part") had only 4 questions and zero coverage of FACP/FAA, SLC/NAC, waterflow, tamper, or troubleshooting — despite all being explicitly called out as priority topics. Added 5 questions to close those specific gaps. Did not add filler questions for topics that are either low-priority for Sales Support (advanced isolator/power-supply detail) or already well-covered elsewhere (CR/CT module recognition belongs to Part Number Mastery). Identification-step content was trimmed/rewritten rather than expanded, since several of its questions were duplicating Part Number Mastery rather than adding coverage.
