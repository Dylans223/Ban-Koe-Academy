# EST4 Source Verification Report

Research date: 2026-08-20

## Scope

This is the initial evidence-collection phase for the next unresolved major product family after Genesis and Signature. No question banks, product data, quiz logic, UI, navigation, scoring, randomization, progress tracking, or runtime-audit code was modified.

## Family selected

**EST4 platform**

EST4 was selected because the scored question banks contain the largest concentrated unresolved Edwards family surface: approximately 30 or more questions covering platform selection, EST3 migration, network media, network controllers, extenders, adders, firewalls, CPUs, remote annunciators, audio units, zoned amplifiers, cabinets, displays, power supplies, and estimating scenarios. iO and EDGE appear in smaller groups. Genesis and Signature are treated as completed source-first phases for now.

## Product/component identifiers found in scored questions

| Identifier/family | Scored usage |
|---|---|
| EST4 | Platform, migration, networking, audio, cabinet, display, CPU, power, and project-scoping questions in module1.js/module2.js |
| 4-NET | EST4 network controller selection |
| 4-NET-XT | EST4 network extender and long-run questions |
| 4-NET-AD | EST4 network adder/branch questions |
| 4-FWAL | EST4 firewall/external-network questions |
| 4-CPU | EST4 CPU/local-rail/network questions |
| EST4 remote annunciators | Remote status/control questions |
| EST4 audio units/interfaces | Voice-audio scope questions |
| EST4 zoned audio amplifiers | Audio-zone and amplifier questions |
| EST4 cabinets/chassis | Cabinet/display/audio/power scope questions |
| EST4 control-display modules | LED/button/display questions |
| EST4 LCD modules | Multi-LCD message routing questions |
| EST4 system power supplies | Local-rail and cabinet power questions |

## Official Edwards documents collected

All PDFs were downloaded from official Edwards URLs into the private `_sources/edwards/est4/` directory. They are source/reference material only and are not public Academy content.

| Document | Official title | Collection status |
|---|---|---|
| E85014-0001 | EST4 Overview | COLLECTED; page-readable initial scan |
| E85014-0002 | EST4 Audio Units and Interfaces | COLLECTED; 6 pages |
| E85014-0003 | EST4 Remote Annunciators | COLLECTED; 9 pages |
| E85014-0004 | EST4 Cabinets and Chassis | COLLECTED; page-readable |
| E85014-0006 | EST4 Control Display Modules | COLLECTED; page-readable |
| E85014-0007 | EST4 Liquid Crystal Display Modules | COLLECTED; page-readable |
| E85014-0008 | EST4 Network Controllers | COLLECTED; page-readable |
| E85014-0009 | EST4 Network Extender | COLLECTED; page-readable |
| E85014-0010 | EST4 Central Processing Unit | COLLECTED; page-readable |
| E85014-0012 | EST4 Network Firewalls | COLLECTED; page-readable |
| E85014-0015 | EST4 Network Adder Module | COLLECTED; page-readable |
| E85014-0017 | EST4 Zoned Audio Amplifiers | COLLECTED; page-readable |
| E85010-0060 | System Power Supplies | COLLECTED; 4 pages |
| E85014-0019 | EST4 Submittal Guide | COLLECTED; page-level review pending |
| E85014-0033 | EST4 Brochure | COLLECTED; page-level review pending |

The official EST4 platform page provided the corrected paths for the overview, display sheets, brochure, and submittal guide. In particular, the brochure is under `PublicMedia/Brochures`, the submittal guide under `PublicMedia/Submittal Guides`, and the display titles are “Control Display Modules” and “Liquid Crystal Display Modules.”

## Initial evidence status

The catalog sheets are locally available and page-readable for the selected component families. This collection phase does not promote any scored question to `VERIFIED`. A separate audit phase must inspect every affected question, answer choice, correct answer, explanation, and technical claim against exact PDF pages and sections.

## Initial evidence observations

- E85014-0001 is the official EST4 Overview and exposes EST4 network, media, webserver, messaging, audio/data, and EST3 migration topics for later page mapping.
- E85014-0002, E85014-0003, E85014-0004, E85014-0006, E85014-0007, E85014-0008, E85014-0009, E85014-0010, E85014-0012, E85014-0015, E85014-0017, and E85010-0060 are collected component sheets for the highest-volume scored EST4 claims.
- E85014-0019 and E85014-0033 are collected for system-selection and platform claims, but their large-page review remains pending.
- Existing Academy descriptions and source metadata were not used as evidence.

## Official Edwards website evidence reconciliation (2026-08-20)

This pass used the current official Edwards website in addition to the previously collected PDFs. The official platform page and EST3 migration page materially strengthen several previously partial questions without permitting any rewrite yet. This is an evidence-only reconciliation; no question bank or production question files were modified.

### Questions whose evidence materially improved

| Question ID | File | Status BEFORE | Status AFTER | Official web evidence | What changed | Recommended action |
|---:|---|---|---|---|---|---|
| 152 | module1.js | PARTIALLY VERIFIED | VERIFIED | EST4 platform page states: “On-board Webserver — Remote device-independent access to system status reports.” | The exact remote, device-independent status-report claim is now directly supported. Broader remote-programming or remote-control claims remain outside the supported wording. | KEEP current scope; do not add programming/control claims |
| 167 | module1.js | VERIFIED | VERIFIED | EST3 migration page states EST4 offers backward compatibility without replacing wiring or peripheral devices. | This supports the explicit migration wording already in the question without expanding to every EST3 component. | KEEP; limit wording to documented compatibility |
| 168 | module1.js | VERIFIED | VERIFIED | EST4 platform page states flexible IPv6 network design in Class B, A, X, N, and full mesh using fiber, Ethernet, or copper. | The question remains supported because the platform language is specific to network architecture and media. | KEEP |
| 211 | module1.js | PARTIALLY VERIFIED | PARTIALLY VERIFIED | EST4 platform + EST3 migration pages explicitly support EST3 migration context and backward compatibility with EST3 wiring, devices, and most local rail modules. | The migration and compatibility claim is supported, but the “high-capacity platform selection” wording is broader than the official wording and remains unsupported. | NARROW claim scope before rewrite |
| 212 | module1.js | PARTIALLY VERIFIED | VERIFIED | EST4 platform page states: proxy firewall, AES encryption, FIPS Pub 197 certification, and external-network interface protection. | The documented firewall role and secure-interface wording are now supported. The question should stay limited to the external-network security relationship. | KEEP; avoid broader cyber-architecture claims |
| 101 | module2.js | PARTIALLY VERIFIED | VERIFIED | Same platform-language support as ID 152 for remote, device-independent access to system status reports. | The exact claim is supported without broadening to remote control, programming, or configuration. | KEEP the narrow scope |

### Questions that remain partial despite the current Edwards web support

| Question ID | File | Remaining issue | Why it stays partial |
|---:|---|---|---|
| 151 | module1.js | Product/distractor mapping | The platform page supports the general EST4 architecture statement, but product-level distractors and surrounding selection logic still require page-level mapping before full verification. |
| 218 | module1.js | Commercial-cost language | The platform and audio pages support network/audio hardware scope, but the question still contains estimating/cost framing that is outside the manufacturer technical evidence and company-sensitivity scope. |
| 216 | module1.js | Project-specific requirement | The pages support separate network hardware categories, but not a universal required component set for every project. |
| 217 | module1.js | Document-authority logic | The pages support reconciliation and scope review, but do not make the Edwards sheets a universal project requirement specifier. |
| 129-134, 138, 141-142, 144, 146 | module2.js | Scope, troubleshooting, and cabinet-specific workflow language | The platform page supports some system relationships and status concepts, but not project-specific quantity rules, repair procedures, or universal cabinet-variant claims. |

### Evidence-only conclusion

The official Edwards website provides the strongest current support yet for EST4 migration, network architecture, firewall/security, and webserver status-report access claims. No question was rewritten or removed in this pass. Questions that remain partial do so because of unsupported distractors, project-specific workflow language, or commercial-sensitivity wording, not because the official Edwards website was unavailable.

The website findings do not change the editorial boundary: no exact pricing, internal cost, margin, labor, freight, customer-specific pricing, or proprietary Ban-Koe commercial information is added or inferred.

## Remaining source gaps

- Exact page/section mapping for every scored EST4 question and every distractor/explanation claim.
- Brochure/submittal-guide page mapping for platform selection, network architecture, migration, and system-scope questions.
- Exact network topology, media, controller, extender, adder, and firewall claims at question level.
- Exact audio, amplifier, speaker-circuit, cabinet, display, CPU, local-rail, and power relationships at question level.
- EST4 installation, operation, programming, troubleshooting, fault-code, and compatibility claims unless directly stated in an official collected page.

## Evidence-only audit plan

The next controlled phase will audit every EST4 question and every answer choice/explanation against the collected PDFs. It will classify each question or individual claim as `VERIFIED`, `PARTIALLY VERIFIED`, `UNVERIFIED`, `CONTRADICTED`, `SOURCE NOT FOUND`, or `DUPLICATE/OVERLAP`, with exact file, question ID, product, document, PDF page, section, and recommended action. No question will be changed during that audit phase.

The initial source set supports detailed review of EST4 network controllers, extenders, adders, firewalls, CPU/local rail, remote annunciators, audio units, zoned amplifiers, cabinets, displays, and power supplies. Brochure and submittal-guide claims remain page-review pending until their pages are explicitly mapped.

## EST4 page-level evidence audit

Audit date: 2026-08-20

No question content was changed. Existing Academy source metadata was treated as a pointer only; the classifications below use the collected Edwards PDFs and the exact pages/sections already mapped in the source matrix. `PARTIALLY VERIFIED` means the central claim has Edwards support but at least one answer choice, explanation addition, or broader scenario claim is not independently supported.

### Question-level evidence table

| Question ID | File | Product/Topic | Claim | Source | Page | Section | Status | Unsupported Claim | Recommended Action |
|---:|---|---|---|---|---:|---|---|---|---|
| 151 | module1.js | EST4 platform | EST4 uses a new architecture for fire alarm, mass notification, and building integration | E85014-0001 | 1 | EST4 Overview | PARTIALLY VERIFIED | Distractor product identities are not individually mapped here | REWRITE |
| 152 | module1.js | EST4 webserver | On-board webserver provides remote, device-independent status-report access | E85014-0001 | 1 | EST4 Overview | PARTIALLY VERIFIED | Remote control, authentication, and broader network-access claims are not established | REWRITE |
| 167 | module1.js | EST4 migration | EST3 wiring, devices, and most local rail modules are described as backward compatible | E85014-0001 | 1 | EST4 Overview/Backward Compatibility | VERIFIED | No additional compatibility matrix is established | KEEP |
| 168 | module1.js | EST4 network media | EST4 can operate using fiber, Ethernet, or copper; overview also lists IPv6 topologies | E85014-0001 | 1 | Overview/Networking | VERIFIED | No unsupported media claim in the question | KEEP |
| 208 | module1.js | EST4 network components | Network controllers, extenders, and adders are distinct network-scope components | E85014-0008; E85014-0009; E85014-0015 | 1 | Network Controllers; Network Extender; Network Adder | PARTIALLY VERIFIED | Exact design-required relationship is project-dependent | REWRITE |
| 209 | module1.js | Remote annunciator | Remote annunciator provides remote system status/control | E85014-0003 | 1 | EST4 Remote Annunciators | PARTIALLY VERIFIED | Security-desk scenario is application reasoning, not a universal requirement | KEEP |
| 210 | module1.js | Audio units/amplifiers | Audio units/interfaces pair with zoned audio amplifiers for emergency voice audio | E85014-0002; E85014-0017 | 1 | Audio Units and Interfaces; Zoned Audio Amplifiers | PARTIALLY VERIFIED | Designated-zone distribution is not a universal sizing/configuration rule | REWRITE |
| 211 | module1.js | EST4 vs iO/migration | EST4 supports integration/migration context and high-capacity platform selection | E85014-0001; E85014-0033 | 1; pending | Overview; Brochure | PARTIALLY VERIFIED | “High-capacity” and selection-first conclusion require page-level support; brochure page mapping pending | WAIT FOR SOURCE |
| 212 | module1.js | 4-FWAL | Firewall addresses external-network security | E85014-0012 | 1 | EST4 Network Firewalls | PARTIALLY VERIFIED | “Protects communications from cyber threats” is broader than the mapped interface claim | REWRITE |
| 213 | module1.js | 4-CPU | CPU is processing/control hardware rather than remote user interface | E85014-0010 | 1-2 | EST4 Central Processing Unit | PARTIALLY VERIFIED | “Responsible for operating the platform” is broader than exact source wording | REWRITE |
| 214 | module1.js | Voice evacuation BOM | Audio units/interfaces and zoned amplifiers belong in voice-audio scope review | E85014-0002; E85014-0017 | 1 | Audio Units and Interfaces; Zoned Audio Amplifiers | PARTIALLY VERIFIED | Complete BOM requirement is project-specific | KEEP |
| 215 | module1.js | Remote annunciator scope | Remote annunciator should be reviewed for remote status/control location | E85014-0003 | 1 | EST4 Remote Annunciators | PARTIALLY VERIFIED | “Required” cannot be assumed from a plan label alone | KEEP |
| 216 | module1.js | Network expansion | Network controllers, extenders/adders, and firewall/security scope are separate considerations | E85014-0008; E85014-0009; E85014-0012; E85014-0015 | 1 | Network component sheets | PARTIALLY VERIFIED | Exact required component set depends on design documents | KEEP |
| 217 | module1.js | Project coordination | Riser, schedule, and EST4 scope should be reconciled | E85014-0001; component sheets | 1 | Overview/Networking | PARTIALLY VERIFIED | General reconciliation decision is not an Edwards product specification; distractors overstate document authority | REWRITE |
| 218 | module1.js | Network/audio estimating | EST4 network/audio scope may affect wiring/hardware/project cost | E85014-0001; E85014-0002 | 1 | Overview/Networking; Audio Units | PARTIALLY VERIFIED | Cost claim is outside manufacturer technical evidence and company-sensitivity scope | REWRITE |
| 219 | module1.js | 4-NET | Network controller selection determines physical-media options | E85014-0008 | 1 | EST4 Network Controllers | VERIFIED | No material unsupported claim in choices/explanation | KEEP |
| 220 | module1.js | 4-NET-XT | Two extenders are used, one at each end of the cable run | E85014-0009 | 1-2 | EST4 Network Extender | VERIFIED | No material unsupported claim in choices/explanation | KEEP |
| 221 | module1.js | 4-NET-AD | Adder provides supplementary SFP/USB branching relationship to 4-CPU | E85014-0015 | 1 | EST4 Network Adder Module | VERIFIED | No star/mesh capacity beyond the sheet is accepted | KEEP |
| 222 | module1.js | 4-FWAL | Firewall is secure interface to outside networks and supports IPv4/IPv6 | E85014-0012 | 1 | EST4 Network Firewalls | VERIFIED | No material unsupported claim in choices/explanation | KEEP |
| 223 | module1.js | 4-CPU | 4-CPU handles system-wide network communication, node control, and audio data | E85014-0010 | 1-2 | EST4 Central Processing Unit | VERIFIED | No additional capacity claim in this question | KEEP |
| 224 | module1.js | Remote annunciator | Remote annunciator provides status/control over the life-safety network | E85014-0003 | 1 | EST4 Remote Annunciators | VERIFIED | No material unsupported claim in choices/explanation | KEEP |
| 225 | module1.js | Zoned audio amplifier | Amplifier provides digital audio decoding, built-in speaker circuit, Class A/B output | E85014-0017 | 1 | Zoned Audio Amplifiers | VERIFIED | No sizing, impedance, coverage, or loading claim accepted | KEEP |
| 226 | module1.js | System power | Power supplies distribute filtered/regulated power to local rail/modules | E85010-0060 | 1 | System Power Supplies | VERIFIED | No calculation or commercial claim accepted | KEEP |
| 227 | module1.js | Audio architecture | EST4 audio is modular, using audio units/interfaces and amplifiers | E85014-0002 | 1 | Audio Units and Interfaces | VERIFIED | No unsupported sizing claim in the question | KEEP |
| 228 | module1.js | Network/audio scope | Network, audio, power, and cabinet groups should be reconciled | E85014-0001; E85014-0002; E85010-0060; E85014-0004 | 1-2 | Overview/Networking; Audio; Power; Cabinets | PARTIALLY VERIFIED | Broad required-component conclusion is estimating reasoning, not a universal technical rule | KEEP |
| 229 | module1.js | 4-NET vs 4-NET-XT | Controllers select media; paired extenders serve cable-run ends | E85014-0008; E85014-0009 | 1-2 | Network Controllers; Network Extender | VERIFIED | No unsupported interchangeability claim; question explicitly rejects it | KEEP |
| 230 | module1.js | 4-NET-AD vs 4-FWAL | Adder branching and firewall external-network roles are distinct | E85014-0012; E85014-0015 | 1 | Network Firewalls; Network Adder | VERIFIED | No material unsupported claim in choices/explanation | KEEP |
| 101 | module2.js | EST4 webserver | On-board webserver supports remote device-independent status access | E85014-0001 | 1 | EST4 Overview | PARTIALLY VERIFIED | Broader capability interpretation and distractor claims remain unsupported | REWRITE |
| 126 | module2.js | Audio architecture | Audio units/interfaces and zoned amplifiers are modular EST4 components | E85014-0002; E85014-0017 | 1 | Audio Units; Zoned Amplifiers | VERIFIED | No unsupported sizing claim | KEEP |
| 127 | module2.js | Zoned amplifier | Digital audio decoding, built-in speaker circuit, Class A/B outputs | E85014-0017 | 1 | Zoned Audio Amplifiers | VERIFIED | No unsupported sizing/impedance claim | KEEP |
| 128 | module2.js | Audio/network | Network, audio, and firefighter-telephone data share twisted pair/fiber | E85014-0001; E85014-0002 | 1 | Overview/Networking; Audio Units | VERIFIED | No additional media claim | KEEP |
| 129 | module2.js | Audio scope | Audio units, amplifiers, speaker circuits, and power are related scope areas | E85014-0002; E85014-0017; E85010-0060 | 1 | Audio; Amplifiers; Power | PARTIALLY VERIFIED | “Must be represented” is estimating reasoning rather than universal product requirement | KEEP |
| 130 | module2.js | Audio BOM change | Audio scope should be compared with audio, amplifier, cabinet, and power BOM areas | E85014-0002; E85014-0004; E85014-0017; E85010-0060 | 1-2 | Audio; Cabinets; Amplifiers; Power | PARTIALLY VERIFIED | Cross-check is general estimating reasoning; source does not prescribe a workflow | KEEP |
| 131 | module2.js | Remote audio cabinets | Audio equipment/cabinet/amplifier/power relationships should be reconciled | E85014-0002; E85014-0004; E85014-0017 | 1-2 | Audio; Cabinets; Amplifiers | PARTIALLY VERIFIED | Exact remote-cabinet requirement not established | REWRITE |
| 132 | module2.js | Voice-audio clarification | Missing audio interface/amplifier/speaker configuration prevents complete selection | E85014-0002; E85014-0017 | 1 | Audio Units; Zoned Amplifiers | PARTIALLY VERIFIED | “Determines BOM scope” is estimating reasoning, not exact Edwards specification | KEEP |
| 133 | module2.js | Audio/notification coordination | Modular audio components and amplifiers are distinct from endpoint notification devices | E85014-0002; E85014-0017 | 1 | Audio Units; Zoned Amplifiers | PARTIALLY VERIFIED | Speaker-strobe endpoint relationship is not fully mapped by these sheets | REWRITE |
| 134 | module2.js | Cabinets/chassis | Cabinet arrangement supports documented LCD/control-display/module configuration | E85014-0004 | 1-2 | EST4 Cabinets and Chassis | PARTIALLY VERIFIED | Exact two-screen/configuration claim requires precise cabinet variant mapping | REWRITE |
| 135 | module2.js | Control-display modules | LED indicators/buttons/labels mount in cabinet-door display locations | E85014-0006 | 1-2 | Display Modules | VERIFIED | No material unsupported claim | KEEP |
| 136 | module2.js | 4-LCD | LCD can show events across network or route messages to specific LCDs | E85014-0007 | 1-2 | LCD Display Module | VERIFIED | No material unsupported claim | KEEP |
| 137 | module2.js | 4-CPU/local rail | 4-CPU controls up to 19 additional local-rail modules and learns attributes/locations | E85014-0010 | 2 | Intra-module Communications | VERIFIED | No material unsupported claim | KEEP |
| 138 | module2.js | Cabinets/chassis | Cabinet space must be reconciled for power/display/SLC/amplifier/local modules | E85014-0004 | 2 | EST4 Cabinets and Chassis | PARTIALLY VERIFIED | “Available space” is configuration reasoning; exact compatibility remains variant-specific | KEEP |
| 139 | module2.js | Power/local rail | Power-supply arrangement distributes power to local-rail/control-display modules | E85010-0060 | 1 | System Power Supplies | VERIFIED | No unsupported calculation | KEEP |
| 140 | module2.js | 4-PPS/M | Official power rules prohibit specified legacy 3-series power-supply combination | E85010-0060 | 2 | Power Supply Rules | VERIFIED | No material unsupported claim | KEEP |
| 141 | module2.js | EST4 configuration | Cabinet, display, CPU, local-module, and power requirements must be reconciled | E85014-0004; E85014-0006; E85014-0007; E85014-0010; E85010-0060 | 1-2 | Component sections | PARTIALLY VERIFIED | “Incomplete for final BOM” is process reasoning, not a direct Edwards rule | KEEP |
| 142 | module2.js | 4-NET-XT troubleshooting | Power, DSL, Ethernet, and Link Trouble LED states are documented | E85014-0009 | 1 | EST4 Network Extender | PARTIALLY VERIFIED | Location/run context and escalation workflow are not an Edwards diagnostic procedure | REWRITE |
| 143 | module2.js | 4-LCD events | LCD displays multiple events and highest-priority event behavior | E85014-0007 | 1-2 | LCD Display Module | VERIFIED | No repair diagnosis is supported or taught | KEEP |
| 144 | module2.js | Control-display status | CPU Fail and Trouble indicators are documented status indicators | E85014-0006 | 1-2 | Display Modules | PARTIALLY VERIFIED | “Safest interpretation” and escalation are support policy, not Edwards procedure | KEEP |
| 145 | module2.js | 4-CPU/local rail | 4-CPU learns local-rail attributes and locations on power-up | E85014-0010 | 2 | Intra-module Communications | VERIFIED | No replacement/repair claim is taught | KEEP |
| 146 | module2.js | Power/local rail | Power arrangement, affected modules, and status information should be gathered | E85010-0060 | 1 | System Power Supplies | PARTIALLY VERIFIED | Cause-assignment information request is not a documented troubleshooting procedure | REWRITE |

### Totals by primary classification

| Classification | Count | Question IDs |
|---|---:|---|
| VERIFIED | 23 | 167, 168, 219-227, 229-230, 126-128, 135-137, 139-140, 143, 145 |
| PARTIALLY VERIFIED | 26 | 151-152, 208-216, 217-218, 228, 101, 129-134, 138, 141-142, 144, 146 |
| UNVERIFIED | 0 | None |
| CONTRADICTED | 0 | None |
| SOURCE NOT FOUND | 0 | None; all 49 have at least a candidate official document, but several claims remain partial |
| DUPLICATE/OVERLAP | 0 primary classifications | Overlaps are listed separately below |

The counts above are primary question classifications. They do not mean every individual claim inside a `PARTIALLY VERIFIED` question is supported.

### Unsupported claims and sensitivity flags

- EST4 platform “high-capacity” and selection conclusions in IDs 151, 211, and related scenarios are broader than the mapped catalog wording; brochure/submittal pages remain pending.
- EST3 migration in ID 167 is supported only at the explicit “EST3 wiring, devices, and most local rail modules” wording. No universal component compatibility is inferred.
- Webserver questions 101 and 152 do not establish remote control, authentication, programming, or cybersecurity behavior beyond remote device-independent status access.
- Network component questions do not transfer 4-NET, 4-NET-XT, 4-NET-AD, or 4-FWAL capabilities between products.
- Audio questions do not establish amplifier sizing, impedance, coverage, loading, or cable distance.
- Cabinet/display questions do not establish universal physical compatibility across cabinet variants.
- Troubleshooting questions 142-146 are not official repair or diagnosis procedures; only documented indicators, events, learning, and configuration relationships are source-supported.
- Question 218 contains project-cost language. Costs are outside the manufacturer technical evidence and company-sensitivity scope; recommended action is `REWRITE` in a later content pass.

### Cross-quiz overlap recommendations

No questions were removed. Recommended overlap handling only:

| Overlap | IDs | Recommendation |
|---|---|---|
| Webserver/status access | module1 152; module2 101 | REWRITE or retain one product-recognition and one application variant only after page mapping |
| EST4 remote annunciator | module1 209, 215, 224 | KEEP distinct recognition/scope/application skills; avoid cosmetic duplication |
| Audio units/amplifiers | module1 210, 214, 227; module2 126, 129-133 | KEEP distinct architecture, BOM, and coordination skills; REWRITE unsupported workflow wording |
| CPU/local rail | module1 213, 223; module2 137, 145 | KEEP role, capacity, and learning questions as distinct skills |
| Network components | module1 208, 216, 219-223, 228-230; module2 142 | KEEP component-specific questions; avoid repeating the same role distinction |
| Cabinet/display/power | module2 134-141, 143-146; module1 225-227 | KEEP technical component questions separate from estimating scenarios |

### Company-sensitivity result

No pricing, margin, labor, freight, supplier, customer, inventory-value, availability, lead-time, or proprietary Ban-Koe information was introduced. Existing cost language in question 218 is flagged for later correction and was not modified in this audit.

### Final safety confirmation

- Question banks modified: **NO**
- Product data modified: **NO**
- Quiz logic modified: **NO**
- Scoring/randomization/progress tracking modified: **NO**
- UI/navigation/runtime-audit modified: **NO**
- No production-content correction pass was run.

## Change-scope confirmation

- Question banks modified: **No**
- Product data modified: **No**
- Quiz logic, scoring, randomization, progress tracking, UI, navigation, and runtime audit modified: **No**
- Genesis and Signature content was not changed or reopened.
- Signature exclusions remain permanent: `SIGA-UM2` not for training, `SIGA-CC1S` not for scored training, and `SIGA-HPR` not for training.

## EST4 Correction Pass

Correction date: 2026-08-20

The evidence audit above controlled the correction pass. Only claims explicitly supported by the mapped Edwards documents were retained. No quiz engine, scoring, randomization, progress, navigation, UI, runtime-audit logic, product library, Final Boss, Genesis, or Signature content was changed.

### Questions rewritten

| File | IDs | Reason | Supporting Edwards evidence |
|---|---|---|---|
| `module1.js` | 151 | Removed unmapped product-identity distractors and retained only the documented EST4 platform claim. | E85014-0001, p. 1, EST4 Overview |
| `module1.js` | 152 | Narrowed the webserver item to remote, device-independent status-report access; explicitly excluded remote control, programming, authentication, and cybersecurity claims. | E85014-0001, p. 1, EST4 Overview |
| `module1.js` | 208 | Converted a project-required component conclusion into documented component-role recognition. | E85014-0008, E85014-0009, E85014-0015, p. 1, network component sections |
| `module1.js` | 210 | Removed the unsupported designated-zone/configuration conclusion. | E85014-0002 and E85014-0017, p. 1, audio and amplifier sections |
| `module1.js` | 211 | Narrowed EST3 migration wording to the documented wiring, devices, and most local rail modules statement. | E85014-0001, p. 1, EST4 Overview/Backward Compatibility |
| `module1.js` | 212 | Replaced the broader cyber-threat claim with the documented outside-network interface role. | E85014-0012, p. 1, EST4 Network Firewalls |
| `module1.js` | 213 | Replaced the broad platform-operation claim with the documented CPU role. | E85014-0010, pp. 1-2, EST4 Central Processing Unit |
| `module1.js` | 217 | Kept this as document reconciliation and removed the implication that the Edwards sheets determine project component requirements. | E85014-0001 and E85014-0002, p. 1, overview/networking and audio sections |
| `module1.js` | 218 | Removed project-cost language and rewrote the item as technical BOM/document reconciliation. | E85014-0001, E85014-0002, E85014-0004, E85014-0017, E85010-0060, pp. 1-2 |
| `module2.js` | 101 | Applied the same documented-status-access boundary as ID 152. | E85014-0001, p. 1, EST4 Overview |
| `module2.js` | 131 | Removed the unsupported universal remote-cabinet conclusion and retained scope reconciliation. | E85014-0002, E85014-0004, E85014-0017, pp. 1-2 |
| `module2.js` | 133 | Reframed the speaker-strobe/audio conflict as an information-recording and reconciliation task. | E85014-0002 and E85014-0017, p. 1 |
| `module2.js` | 134 | Narrowed the cabinet item to the documented display arrangement and warned against universal cabinet-variant assumptions. | E85014-0004, pp. 1-2 |
| `module2.js` | 142 | Limited troubleshooting to the documented 4-NET-XT status indicators. | E85014-0009, p. 1, EST4 Network Extender |
| `module2.js` | 146 | Limited support handling to gathering documented power/local-rail status information; no cause or repair instruction remains. | E85010-0060, p. 1, System Power Supplies |

### Questions removed

None. The overlap groups were retained because their learning objectives differ. No question was genuinely redundant after the correction pass.

### Questions retained unchanged

All other reviewed EST4 questions were retained unchanged, including `167`, `168`, `209`, `214-216`, `219-230`, `126-130`, `132`, `135-141`, and `143-145`. Their remaining partial classifications are documented below.

### Company-sensitivity result

- Corrected EST4 content: **0** pricing, project-cost, margin, internal-cost, labor, freight, supplier, customer-specific, inventory-value, or internal-lead-time claims.
- Question `218` no longer contains commercial language and now tests document/BOM reconciliation only.
- A repository-wide scan still finds pre-existing commercial wording in unrelated legacy questions and distractors. Those findings were not changed because they are outside this EST4 correction scope.

### Residual partial and unsupported claims

EST4 is **not fully verified**. Remaining partial boundaries are:

- `209`, `215`, and `224`: remote-annunciator application/requirement wording remains project-scope reasoning, not a universal requirement.
- `214`, `216`, `228`, `129`, `130`, and `132`: BOM and scope reconciliation remains Sales Support process reasoning; the Edwards sheets do not prescribe a universal project configuration or quantity.
- `138` and `141`: cabinet space and final configuration remain variant- and project-specific.
- `144` and `145`: documented indicators and module learning are supported, but no official repair or fault-diagnosis procedure is established.
- Across the EST4 pool, no Edwards evidence was used to teach remote control, remote programming/configuration, cybersecurity capability, audio sizing, impedance, coverage, loading, cable distance, field repair, component replacement, electrical testing, bypassing, resetting, or disabling supervision.
- Existing non-EST4 scored content still contains unrelated commercial or troubleshooting language; it was not part of this controlled EST4 pass and is not represented as EST4 evidence.

### Validation result

- Browser runtime audit: **PASS — ALL RUNTIME CHECKS PASSED**.
- Runtime counts: 0 exact duplicate text, 0 invalid question objects, 0 invalid categories, 0 missing answers, 0 duplicate answers, 0 invalid correct-answer references, 0 missing explanations, 0 randomization failures, and 0 scoring failures.
- Product-integrity verification: **PASS**; verified tracked product facts present and excluded unverified Signature products absent from loaded scored data.
- Editor diagnostics: no errors in corrected `module1.js` or `module2.js`.

### Correction scope

- Questions rewritten: **15**.
- Questions removed: **0**.
- Questions retained unchanged from the reviewed EST4 set: **34**.
- Production files changed: `data/module1.js` and `data/module2.js` only, plus this audit report and the source matrix.
- Quiz logic, scoring, randomization, progress tracking, navigation, UI, runtime-audit logic, product library, and Final Boss: **unchanged**.

### Superseding EST4 partial-question correction pass

Correction date: 2026-08-21. This section supersedes the earlier partial-status disposition for the IDs listed below. Earlier sections remain historical evidence records.

| File | Questions rewritten in this pass | Reason |
|---|---|---|
| `data/module1.js` | 151, 209, 211, 214-218, 228 | Replaced unmapped distractor or project-required wording with documented EST4 platform, migration, remote-annunciator, audio, network, power, cabinet, and hardware-group relationships. |
| `data/module2.js` | 129-134, 138, 141-142, 144, 146 | Removed project-specific BOM workflow, cabinet-variant, endpoint, escalation, and troubleshooting conclusions; retained documented component relationships and status indicators. |

Question `218` retains general BOM-scope awareness but contains no price, cost, margin, vendor, customer, or confidential commercial value. No question was removed. The affected questions are promoted to `VERIFIED` within this mapped correction set because their wording, answers, distractors, explanations, and metadata now stay within the cited Edwards evidence.

Supporting sources are the Edwards documents already mapped in this report and matrix: E85014-0001, E85014-0002, E85014-0003, E85014-0004, E85014-0006, E85014-0007, E85014-0008, E85014-0009, E85014-0010, E85014-0012, E85014-0015, E85014-0017, and E85010-0060, using the page and section metadata stored on each changed question.

Questions remaining partially verified or waiting for source elsewhere in the EST4 family were not promoted by this pass. Therefore, the entire EST4 family is **not** claimed to be fully verified.

### Superseding EST4 partial-question correction pass

Correction date: 2026-08-21. This section supersedes the earlier partial-status disposition for the IDs listed below. Earlier sections remain historical evidence records.

| File | Questions rewritten in this pass | Reason |
|---|---|---|
| `data/module1.js` | 151, 209, 211, 214-218, 228 | Replaced unmapped distractor or project-required wording with documented EST4 platform, migration, remote-annunciator, audio, network, power, cabinet, and hardware-group relationships. |
| `data/module2.js` | 129-134, 138, 141-142, 144, 146 | Removed project-specific BOM workflow, cabinet-variant, endpoint, escalation, and troubleshooting conclusions; retained documented component relationships and status indicators. |

Question `218` retains general BOM-scope awareness but contains no price, cost, margin, vendor, customer, or confidential commercial value. No question was removed. The affected questions are promoted to `VERIFIED` within this mapped correction set because their wording, answers, distractors, explanations, and metadata now stay within the cited Edwards evidence.

Supporting sources are the Edwards documents already mapped in this report and matrix: E85014-0001, E85014-0002, E85014-0003, E85014-0004, E85014-0006, E85014-0007, E85014-0008, E85014-0009, E85014-0010, E85014-0012, E85014-0015, E85014-0017, and E85010-0060, using the page and section metadata stored on each changed question.

Questions remaining partially verified or waiting for source elsewhere in the EST4 family were not promoted by this pass. Therefore, the entire EST4 family is **not** claimed to be fully verified.
