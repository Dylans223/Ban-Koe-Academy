// ===============================================
// Ban-Koe Academy
// Part Number Mastery Question Bank
// Rebuilt for product recognition, discrimination, and real-world selection.
// ===============================================

const partNumberQuestions = [

// ===============================================
// DIRECT RECOGNITION (10 questions)
// ===============================================

{
id: 1,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CT1 Single Input Module",
question: "What is SIGA-CT1?",
answers: [
"A Control Relay Module",
"A Single Input Module",
"A Dual Input Module",
"A Single Input Signal Module"
],
correct: 1,
explanation: "SIGA-CT1 is the Single Input Module in the Signature input-module family."
},

{
id: 2,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-278 Double Action Intelligent Pull Station",
question: "What is SIGA-278?",
answers: [
"The Single Action Intelligent Pull Station",
"A Dual Input Signal Module",
"The Double Action Intelligent Pull Station",
"A Single Input Module"
],
correct: 2,
explanation: "SIGA-278 is the Double Action Intelligent Pull Station, used where two-step manual activation is required."
},

{
id: 3,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CC2 Dual Input Signal Module",
question: "What is SIGA-CC2?",
answers: [
"A Dual Input Signal Module",
"A Dual Input Module",
"A Control Relay Module",
"An Isolator Module"
],
correct: 0,
explanation: "SIGA-CC2 is the Dual Input Signal Module, used for signal/riser circuit applications."
},

{
id: 4,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CRH High Power Control Relay Module",
question: "What is SIGA-CRH?",
answers: [
"The Standard Control Relay Module",
"The Reverse Polarity Control Relay Module",
"The High Power Control Relay Module",
"A Dual Input Monitor Module"
],
correct: 2,
explanation: "SIGA-CRH is the High Power Control Relay Module, used when a load exceeds the standard relay's rating."
},

{
id: 5,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-OSD Signature Optica Smoke Detector",
question: "What is SIGA-OSD?",
answers: [
"A smoke and heat detector",
"A smoke detector (smoke sensing only)",
"A smoke, heat, and carbon monoxide detector",
"A carbon monoxide detector"
],
correct: 1,
explanation: "SIGA-OSD is the Signature Optica Smoke Detector — smoke sensing only. Heat and CO sensing are added in the OSHD, OSCD, and OSHCD variants."
},

{
id: 6,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-DDOS Intelligent Duct Smoke Detector",
question: "What is SIGA-DDOS?",
answers: [
"A pull station",
"A control relay module",
"An intelligent duct smoke detector",
"A detector base"
],
correct: 2,
explanation: "SIGA-DDOS is the Intelligent Duct Smoke Detector, installed at HVAC duct locations."
},

{
id: 7,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-MD Signature PIR Motion Detector",
question: "What is SIGA-MD?",
answers: [
"A Signature PIR motion detector",
"A duct smoke detector",
"A riser monitor module",
"An audible sounder base"
],
correct: 0,
explanation: "SIGA-MD is the Signature PIR (motion) Detector."
},

{
id: 8,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-RM1 Riser Monitor Module",
question: "What is SIGA-RM1?",
answers: [
"A relay module",
"A riser monitor module",
"A remote LED indicator",
"A signal module"
],
correct: 1,
explanation: "SIGA-RM1 is the Riser Monitor Module."
},

{
id: 9,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-IM2 Isolator Module",
question: "What is SIGA-IM2?",
answers: [
"A dual input module",
"A control relay module",
"An isolator module",
"A signal module"
],
correct: 2,
explanation: "SIGA-IM2 is an Isolator Module, used to isolate a wiring fault on an addressable circuit."
},

{
id: 10,
category: "PartNumber",
difficulty: "Easy",
product: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
question: "What does the Genesis GCS series cover?",
answers: [
"Wall-mount horn-strobes",
"Compact wall-mount notification devices",
"Ceiling mount speakers and speaker-strobes",
"Low-frequency wall horns"
],
correct: 2,
explanation: "GCS is the Genesis ceiling mount speaker and speaker-strobe series."
},

// ===============================================
// DESCRIPTION -> PART NUMBER (6 questions)
// ===============================================

{
id: 11,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CC1 Single Input Signal Module",
question: "Which part number is a Single Input Signal Module?",
answers: [
"SIGA-CT1",
"SIGA-CC1",
"SIGA-CR",
"SIGA-IM2"
],
correct: 1,
explanation: "SIGA-CC1 is the Single Input Signal Module."
},

{
id: 12,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CT2 Dual Input Module",
question: "Which part number is a Dual Input Module (not a signal module)?",
answers: [
"SIGA-CC2",
"SIGA-CT1",
"SIGA-CT2",
"SIGA-CR"
],
correct: 2,
explanation: "SIGA-CT2 is the Dual Input Module. SIGA-CC2 looks similar but is a Dual Input Signal Module, a different category."
},

{
id: 13,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-270 Single Action Intelligent Pull Station",
question: "Which part number is the single-action pull station?",
answers: [
"SIGA-278",
"SIGA-270",
"SIGA-CT1",
"SIGA-CC1"
],
correct: 1,
explanation: "SIGA-270 is the Single Action Intelligent Pull Station. SIGA-278 is the double-action variant."
},

{
id: 14,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSHCD Signature Optica Smoke, Heat & Carbon Monoxide Detector",
question: "Which part number detects smoke, heat, and carbon monoxide in one device?",
answers: [
"SIGA-OSD",
"SIGA-OSHD",
"SIGA-OSCD",
"SIGA-OSHCD"
],
correct: 3,
explanation: "SIGA-OSHCD combines smoke, heat, and carbon monoxide sensing. The other three each cover a smaller combination."
},

{
id: 15,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CRR Reverse Polarity Control Relay Module",
question: "Which part number is the reverse-polarity control relay module?",
answers: [
"SIGA-CR",
"SIGA-CRH",
"SIGA-CRR",
"SIGA-UM"
],
correct: 2,
explanation: "SIGA-CRR is the reverse-polarity control relay module."
},

{
id: 16,
category: "PartNumber",
difficulty: "Medium",
product: "Genesis LED G4LF Series Low Frequency",
question: "Which Genesis series is built for low-frequency notification?",
answers: [
"Genesis LED G4 Series",
"Genesis LED G4LF Series",
"Genesis LED G1 Series",
"Genesis LED GCS Series"
],
correct: 1,
explanation: "The Genesis G4LF series is the low-frequency wall-mount notification family."
},

// ===============================================
// PART NUMBER -> DESCRIPTION (6 questions)
// ===============================================

{
id: 17,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-COD Intelligent Carbon Monoxide Detector",
question: "An inventory label reads SIGA-COD. What is it?",
answers: [
"An intelligent multisensor detector",
"A carbon monoxide detector",
"A smoke and heat detector",
"A duct smoke detector"
],
correct: 1,
explanation: "SIGA-COD is a carbon monoxide detector — no smoke or heat sensing."
},

{
id: 18,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-SB4 Standard Detector Base (4-inch)",
question: "An inventory label reads SIGA-SB4. What is it?",
answers: [
"An isolator detector base",
"An audible sounder base",
"A standard detector base sized for a 4-inch box",
"A standard detector base for a standard-size box"
],
correct: 2,
explanation: "SIGA-SB4 is the standard detector base sized for a 4-inch box/application. SIGA-IB4 is the isolator equivalent."
},

{
id: 19,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-UM Universal Class A/B Module",
question: "A drawing calls out SIGA-UM. What should you recognize it as?",
answers: [
"A Universal Class A/B module",
"A single input module",
"A dual input signal module",
"A riser monitor module"
],
correct: 0,
explanation: "SIGA-UM is the Universal Class A/B Module."
},

{
id: 20,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-MCC2 Miniature Dual Input Monitor Module",
question: "A BOM lists SIGA-MCC2. What is it?",
answers: [
"A miniature single input monitor module",
"A miniature dual input monitor module",
"A dual input signal module",
"A riser monitor module"
],
correct: 1,
explanation: "SIGA-MCC2 is the miniature dual input monitor module. SIGA-MCC1 is the single input equivalent."
},

{
id: 21,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-PHCD Intelligent Multisensor Smoke, Heat and CO Detector",
question: "A quote lists SIGA-PHCD. What does it detect?",
answers: [
"Smoke and heat only",
"Smoke and carbon monoxide only",
"Smoke, heat, and carbon monoxide",
"Carbon monoxide only"
],
correct: 2,
explanation: "SIGA-PHCD is the multisensor detector covering smoke, heat, and carbon monoxide."
},

{
id: 22,
category: "PartNumber",
difficulty: "Easy",
product: "Genesis LED G1 Series Compact Notification Devices",
question: "A drawing key references the Genesis G1 series. What does it represent?",
answers: [
"Ceiling mount speakers and speaker-strobes",
"Compact notification devices",
"Low-frequency wall horns",
"Outdoor-rated notification appliances"
],
correct: 1,
explanation: "The Genesis G1 series is the compact notification device family (individual devices include G1A horn, G1V strobe, and G1AV horn-strobe)."
},

// ===============================================
// PART NUMBER DECODING (4 questions)
// Only patterns supported directly by the current product names/descriptions.
// ===============================================

{
id: 23,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "In SIGA-SB4 and SIGA-IB4, what does the trailing '4' identify?",
answers: [
"A 4-inch footprint/box variant",
"The fourth product released in the base family",
"A 4-wire electrical connection",
"A 4-amp current rating"
],
correct: 0,
explanation: "The '4' suffix on Signature bases like SIGA-SB4 and SIGA-IB4 identifies the 4-inch footprint/box variant."
},

{
id: 24,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "In Genesis G4LF, what does 'LF' identify?",
answers: [
"Left-side fixture orientation",
"Low frequency signaling",
"Large form factor",
"Low flash rate"
],
correct: 1,
explanation: "'LF' identifies low-frequency signaling in the Genesis notification family."
},

{
id: 25,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "Genesis G1 and G4 are both notification families. What's the main difference the numbers point to?",
answers: [
"G1 is the compact device family; G4 is the standard wall-mount family",
"G1 is ceiling-mount; G4 is wall-mount",
"G1 is outdoor-rated; G4 is indoor-only",
"There is no real difference — the numbers are cosmetic"
],
correct: 0,
explanation: "G1 covers the compact notification devices, while G4 covers the standard wall-mount notification family."
},

{
id: 26,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "SIGA-OSD, SIGA-OSHD, SIGA-OSCD, and SIGA-OSHCD share the 'OS' Optica prefix. What do the added letters (H, C) tell you?",
answers: [
"H and C are cosmetic housing-color codes",
"H adds heat sensing; C adds carbon monoxide sensing, on top of the shared smoke sensing",
"H and C both mean the device also detects heat",
"They indicate mounting location, not sensing capability"
],
correct: 1,
explanation: "Across the Optica smoke-detector family, adding 'H' adds heat sensing and adding 'C' adds carbon monoxide sensing to the base smoke-sensing device."
},

// ===============================================
// SIMILAR-PART DISCRIMINATION (10 questions)
// ===============================================

{
id: 27,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "SIGA-CT1 and SIGA-CC1 look similar but are different categories. What's the real difference?",
answers: [
"CT1 is an input module; CC1 is a signal module for signal/riser circuit applications",
"CT1 is Class A only; CC1 is Class B only",
"CT1 is for NAC circuits; CC1 is for SLC circuits",
"They're functionally identical — only the label differs"
],
correct: 0,
explanation: "SIGA-CT1 is a Single Input Module, while SIGA-CC1 is a Single Input Signal Module intended for signal/riser circuit applications — different module categories."
},

{
id: 28,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "SIGA-CR, SIGA-CRR, and SIGA-CRH are all relay modules. What actually separates them?",
answers: [
"CR is the standard relay; CRR adds reverse-polarity behavior; CRH is rated for higher power loads",
"CR is Class A; CRR is Class B; CRH is either",
"CRR and CRH are both discontinued versions of CR",
"They differ only in housing color"
],
correct: 0,
explanation: "SIGA-CR is the standard control relay module, SIGA-CRR is the reverse-polarity variant, and SIGA-CRH is the high-power variant for loads that exceed the standard relay's rating."
},

{
id: 29,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "SIGA-SB4 and SIGA-IB4 both have the '4' footprint suffix. What's the actual difference between them?",
answers: [
"SB4 is a standard base; IB4 is an isolator base that also isolates a wiring fault",
"SB4 is for smoke detectors; IB4 is for heat detectors only",
"SB4 supports Class A; IB4 supports Class B only",
"There is no functional difference"
],
correct: 0,
explanation: "SIGA-SB4 is a standard detector base. SIGA-IB4 is the isolator-base equivalent, which also protects the loop against a wiring fault at that base."
},

{
id: 30,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "SIGA-270 and SIGA-278 are both intelligent pull stations. When would you choose SIGA-278 over SIGA-270?",
answers: [
"When the project requires single-action (one-motion) activation",
"When the project requires double-action (two-step) activation",
"When the pull station needs to be weatherproof",
"They're interchangeable — the choice doesn't matter"
],
correct: 1,
explanation: "SIGA-278 is the double-action (two-step) pull station. SIGA-270 is the single-action variant."
},

{
id: 31,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "SIGA-OSHD and SIGA-OSCD are both two-sensor Optica detectors. What distinguishes them?",
answers: [
"OSHD is smoke + heat; OSCD is smoke + carbon monoxide",
"OSHD is smoke only; OSCD is heat only",
"OSHD includes carbon monoxide; OSCD does not",
"They detect the same hazards but at different sensitivities"
],
correct: 0,
explanation: "SIGA-OSHD adds heat sensing to smoke; SIGA-OSCD adds carbon monoxide sensing to smoke instead."
},

{
id: 32,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "SIGA-MCC1 and SIGA-MCC2 are both miniature monitor modules. What's the difference?",
answers: [
"MCC1 has one input; MCC2 has two",
"MCC1 is miniature; MCC2 is full-size",
"MCC1 monitors; MCC2 controls",
"MCC2 is the Class A version of MCC1"
],
correct: 0,
explanation: "SIGA-MCC1 is the miniature single-input monitor module; SIGA-MCC2 is the miniature dual-input version."
},

{
id: 33,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "SIGA-IM and SIGA-IM2 are both isolator modules. What distinguishes them?",
answers: [
"SIGA-IM is a short-circuit isolator module; SIGA-IM2 is the isolator module used in the current Signature lineup",
"SIGA-IM2 is simply two SIGA-IM modules bundled together",
"SIGA-IM is for detectors; SIGA-IM2 is for pull stations",
"They are the exact same product listed twice"
],
correct: 0,
explanation: "SIGA-IM is described as a short-circuit isolator module, while SIGA-IM2 is the isolator module referenced in current Signature system documentation — confirm which one a project specifies rather than assuming they're interchangeable."
},

{
id: 34,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "Genesis GCS and G4 both cover notification appliances. Which distinction is correct?",
answers: [
"GCS is ceiling-mount speakers/speaker-strobes; G4 is wall-mount notification devices",
"GCS is wall-mount; G4 is ceiling-mount",
"GCS and G4 are the same series under two names",
"GCS is low-frequency only; G4 is standard-frequency only"
],
correct: 0,
explanation: "GCS covers ceiling mount speakers and speaker-strobes; G4 covers the wall-mount notification family."
},

{
id: 35,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "SIGA-AB4G and SIGA-AB4G-LF are both audible sounder bases. What separates them?",
answers: [
"AB4G-LF adds low-frequency audible output; AB4G is the standard-frequency version",
"AB4G-LF is for heat detectors only",
"AB4G is Class A; AB4G-LF is Class B",
"AB4G-LF is a discontinued version of AB4G"
],
correct: 0,
explanation: "SIGA-AB4G-LF is the low-frequency audible sounder base; SIGA-AB4G is the standard-frequency version."
},

{
id: 36,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "SIGA-HRD and SIGA-HFD are both intelligent heat detectors. What's the real distinction Sales Support should verify?",
answers: [
"HRD senses rate-of-rise; HFD senses a fixed temperature threshold",
"HRD is analog; HFD is digital",
"HFD is the newer replacement for HRD",
"They are the same sensing technology with different housings"
],
correct: 0,
explanation: "SIGA-HRD is the rate-of-rise heat detector; SIGA-HFD is the fixed-temperature heat detector. Both are still valid — the correct choice depends on what the project specifies."
},

// ===============================================
// REAL-WORLD PRODUCT SELECTION (10 questions)
// ===============================================

{
id: 37,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CT2 Dual Input Module",
question: "A customer needs to monitor two separate dry-contact inputs on one module. Which part number fits?",
answers: [
"SIGA-CT1",
"SIGA-CT2",
"SIGA-CC1",
"SIGA-CR"
],
correct: 1,
explanation: "SIGA-CT2 is the Dual Input Module — built for exactly this two-input requirement. SIGA-CT1 only supports one input."
},

{
id: 38,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CRH High Power Control Relay Module",
question: "A control requirement calls for switching a higher-power load than a standard relay module can handle. Which part number should you select?",
answers: [
"SIGA-CR",
"SIGA-CRR",
"SIGA-CRH",
"SIGA-UM"
],
correct: 2,
explanation: "SIGA-CRH is the high-power control relay module, built for loads beyond the standard SIGA-CR's rating."
},

{
id: 39,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-270 Single Action Intelligent Pull Station",
question: "A project specifies pull stations with ordinary single-motion activation throughout the building. Which part number should you specify?",
answers: [
"SIGA-270",
"SIGA-278",
"SIGA-CT1",
"SIGA-CC1"
],
correct: 0,
explanation: "SIGA-270 is the single-action pull station. Reach for SIGA-278 only when the spec calls for double-action activation."
},

{
id: 40,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-DDOS Intelligent Duct Smoke Detector",
question: "A takeoff shows a detector mounted at an HVAC return-air duct. Which category does it belong to?",
answers: [
"Standard area smoke detector",
"Duct smoke detector",
"Heat detector",
"Motion detector"
],
correct: 1,
explanation: "A device installed at a duct location is a duct smoke detector (SIGA-DDOS), not a standard area detector."
},

{
id: 41,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-IM2 Isolator Module",
question: "A salesperson tells you a customer wants \"something to protect the SLC loop if a wire shorts.\" Which category are they describing?",
answers: [
"A signal module",
"An isolator module",
"A control relay module",
"A monitor module"
],
correct: 1,
explanation: "An isolator module (SIGA-IM2) protects the loop by isolating a shorted section so the rest of the circuit keeps communicating."
},

{
id: 42,
category: "PartNumber",
difficulty: "Medium",
product: "Genesis LED G4LF Series Low Frequency",
question: "A design narrative requires low-frequency notification appliances as part of the basis of design. Which Genesis series should you specify?",
answers: [
"Genesis LED G4 Series",
"Genesis LED G1 Series",
"Genesis LED G4LF Series",
"Genesis LED GCS Series"
],
correct: 2,
explanation: "When low-frequency signaling is specifically required, the Genesis G4LF series is the appropriate family — not the standard G4 series."
},

{
id: 43,
category: "PartNumber",
difficulty: "Medium",
product: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
question: "A corridor design calls for ceiling-mounted speaker-strobes. Which Genesis series should you investigate?",
answers: [
"Genesis LED G4 Series (wall-mount)",
"Genesis LED GCS Series (ceiling-mount)",
"Genesis LED G4LF Series (low frequency)",
"Genesis LED G1 Series (compact)"
],
correct: 1,
explanation: "GCS is the ceiling-mount speaker/speaker-strobe series — the right starting point for a ceiling-mount speaker-strobe requirement."
},

{
id: 44,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "A BOM lists SIGA-CC1 next to a note that says \"monitor a single dry contact.\" Should you accept this as written?",
answers: [
"Yes — SIGA-CC1 is built for a single dry-contact input",
"No — SIGA-CC1 is a signal module for signal/riser circuits, not a dry-contact input module; verify whether SIGA-CT1 was intended",
"Yes — all Signature CC and CT modules are interchangeable",
"No — dry contacts cannot be monitored on this system at all"
],
correct: 1,
explanation: "SIGA-CC1 is a Single Input Signal Module for signal/riser circuit applications, not a general dry-contact input module. A BOM pairing it with a plain dry-contact-monitoring note is worth double-checking against SIGA-CT1."
},

{
id: 45,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "A customer asks whether SIGA-OSD can be substituted where the spec calls for SIGA-OSHCD. What should you tell them?",
answers: [
"Yes, they're the same detector with different labels",
"No — SIGA-OSD only senses smoke, while SIGA-OSHCD also senses heat and carbon monoxide",
"Yes, as long as the mounting base matches",
"No — SIGA-OSD is a heat detector, not a smoke detector"
],
correct: 1,
explanation: "SIGA-OSD is smoke-only. SIGA-OSHCD adds heat and carbon monoxide sensing. Substituting OSD would remove sensing capability the spec requires."
},

{
id: 46,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "A drawing calls for compact wall-mount horn-strobes in a small mechanical closet with limited wall space. Which Genesis series is the appropriate starting point?",
answers: [
"Genesis LED GCS Series (ceiling mount speakers)",
"Genesis LED G1 Series (compact notification)",
"Genesis LED G4LF Series (low frequency)",
"Genesis LED G4S Series (speaker family)"
],
correct: 1,
explanation: "The G1 series is the compact notification device family, which fits limited wall space better than the standard G4 wall-mount family."
}

];
