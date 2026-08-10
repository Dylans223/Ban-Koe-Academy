// ===============================================
// Ban-Koe Academy
// Part Number Mastery Question Bank
// All questions grounded in verified Academy product data.
// ===============================================

const partNumberQuestions = [

// ═══════════════════════════════════════════════
// TYPE 1 — PART NUMBER RECOGNITION (8 questions)
// Give the part number; identify the product.
// ═══════════════════════════════════════════════

{
id: 1,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CT1 Single Output Control Module",
question: "Which product is identified by the part number SIGA-CT1?",
answers: [
"Single Output Control Module",
"Single Input Monitor Module",
"Control Relay Module",
"Intelligent Isolator Module"
],
correct: 0,
explanation: "SIGA-CT1 is the Single Output Control Module in the Edwards Signature addressable module family. It provides one supervised output channel activated by panel logic."
},

{
id: 2,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CC1 Single Input Monitor Module",
question: "Which product is identified by the part number SIGA-CC1?",
answers: [
"Single Input Monitor Module",
"Single Output Control Module",
"Intelligent Isolator Module",
"Universal Signal Module"
],
correct: 0,
explanation: "SIGA-CC1 is the Single Input Monitor Module in the Edwards Signature addressable module family. It supervises one initiating input circuit."
},

{
id: 3,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CT2 Dual Output Control Module",
question: "Which product is identified by the part number SIGA-CT2?",
answers: [
"Dual Output Control Module",
"Dual Input Monitor Module",
"Control Relay Module",
"Universal Class A/B Signal Module"
],
correct: 0,
explanation: "SIGA-CT2 is the Dual Output Control Module, providing two independently supervised output channels activated by panel logic."
},

{
id: 4,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-278 Double Action Intelligent Pull Station",
question: "Which product is identified by the part number SIGA-278?",
answers: [
"Double Action Intelligent Pull Station",
"Single Action Intelligent Pull Station",
"Dual Input Monitor Module",
"Dual Output Control Module"
],
correct: 0,
explanation: "SIGA-278 is the Double Action Intelligent Pull Station — designed for applications where two-step manual initiation is required."
},

{
id: 5,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-270 Single Action Intelligent Pull Station",
question: "Which product is identified by the part number SIGA-270?",
answers: [
"Single Action Intelligent Pull Station",
"Double Action Intelligent Pull Station",
"Single Input Monitor Module",
"Single Output Control Module"
],
correct: 0,
explanation: "SIGA-270 is the Single Action Intelligent Pull Station in the Edwards Signature manual station family."
},

{
id: 6,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-IM2 Isolator Module",
question: "Which product is identified by the part number SIGA-IM2?",
answers: [
"Intelligent Isolator Module",
"Dual Input Monitor Module",
"Control Relay Module",
"Intelligent CO Detector"
],
correct: 0,
explanation: "SIGA-IM2 is the Intelligent Isolator Module in the Edwards Signature family — used to help isolate shorted sections of an addressable circuit."
},

{
id: 7,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CC2 Dual Input Monitor Module",
question: "Which product is identified by the part number SIGA-CC2?",
answers: [
"Dual Input Monitor Module",
"Dual Output Control Module",
"Miniature Dual Input Monitor Module",
"Class A Signal Module"
],
correct: 0,
explanation: "SIGA-CC2 is the Dual Input Monitor Module, providing supervision of two input channels in the Signature addressable module family."
},

{
id: 8,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-AB4G Audible Sounder Base",
question: "Which product is identified by the part number SIGA-AB4G?",
answers: [
"Audible Sounder Base",
"Isolator Detector Base (4-inch)",
"Standard Detector Base (4-inch)",
"Remote LED Indicator"
],
correct: 0,
explanation: "SIGA-AB4G is the Audible Sounder Base — a Signature detector base accessory that provides local audible output at the detector base location."
},

// ═══════════════════════════════════════════════
// TYPE 2 — DESCRIPTION → PART NUMBER (8 questions)
// Give the description; identify the part number.
// ═══════════════════════════════════════════════

{
id: 9,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CC1 Single Input Monitor Module",
question: "Which Edwards Signature part number represents a Single Input Monitor Module?",
answers: [
"SIGA-CC1",
"SIGA-CT1",
"SIGA-CR",
"SIGA-IM2"
],
correct: 0,
explanation: "SIGA-CC1 is the Single Input Monitor Module. It is commonly specified to supervise one external input contact and report its status to the fire alarm panel."
},

{
id: 10,
category: "PartNumber",
difficulty: "Easy",
product: "Genesis LED G4 Series Wall Mount Notification Devices",
question: "A project requires wall-mount notification appliances from the Genesis LED product family. Which series should you investigate?",
answers: [
"Genesis LED G4 Series",
"Genesis LED GCS Series",
"Genesis LED G4LF Series",
"Genesis LED G1 Series"
],
correct: 0,
explanation: "The Genesis LED G4 Series covers Wall Mount Notification Devices. GCS is ceiling-mount speakers; G4LF is low-frequency; G1 is compact notification."
},

{
id: 11,
category: "PartNumber",
difficulty: "Easy",
product: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
question: "A project requires ceiling-mount speakers and speaker-strobes from the Genesis LED family. Which series should you investigate?",
answers: [
"Genesis LED GCS Series",
"Genesis LED G4 Series",
"Genesis LED G4LF Series",
"Genesis LED G1 Series"
],
correct: 0,
explanation: "The Genesis LED GCS Series covers Ceiling Mount Speakers and Speaker-Strobes. The G4 Series is wall-mount notification appliances."
},

{
id: 12,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CT2 Dual Output Control Module",
question: "Which Edwards Signature part number represents a Dual Output Control Module?",
answers: [
"SIGA-CT2",
"SIGA-CC2",
"SIGA-CT1",
"SIGA-CR"
],
correct: 0,
explanation: "SIGA-CT2 is the Dual Output Control Module, providing two independently supervised output channels. SIGA-CT1 provides a single output; SIGA-CC2 is a dual input monitor (not control)."
},

{
id: 13,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-MCC1 Miniature Single Input Monitor Module",
question: "A design calls for a miniature form factor single input monitor module. Which Signature part number should be specified?",
answers: [
"SIGA-MCC1",
"SIGA-CC1",
"SIGA-MCC2",
"SIGA-RM1"
],
correct: 0,
explanation: "SIGA-MCC1 is the Miniature Single Input Monitor Module — same input supervision function as SIGA-CC1 but in a miniature physical form for constrained installations."
},

{
id: 14,
category: "PartNumber",
difficulty: "Medium",
product: "Genesis LED G4LF Series Low Frequency",
question: "A project requires low-frequency notification appliances. Which Genesis series is designed for this application?",
answers: [
"Genesis LED G4LF Series",
"Genesis LED G4 Series",
"Genesis LED GCS Series",
"Genesis LED G1 Series"
],
correct: 0,
explanation: "The Genesis LED G4LF Series is the Low Frequency notification product family. The 'LF' identifies low-frequency signaling capability, which is required for specific occupancy types."
},

{
id: 15,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-278 Double Action Intelligent Pull Station",
question: "A project specification requires a pull station that uses two-step manual activation. Which Edwards Signature part number matches this requirement?",
answers: [
"SIGA-278",
"SIGA-270",
"SIGA-CC2",
"SIGA-CT2"
],
correct: 0,
explanation: "SIGA-278 is the Double Action Intelligent Pull Station, designed for applications requiring double-action (two-step) operation. SIGA-270 is the single-action variant."
},

{
id: 16,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-IB Isolator Detector Base",
question: "A system design uses a detector base that includes loop isolation functionality. Which Signature detector base part number includes this feature?",
answers: [
"SIGA-IB",
"SIGA-SB",
"SIGA-SB4",
"SIGA-LED"
],
correct: 0,
explanation: "SIGA-IB is the Isolator Detector Base — it combines detector mounting with loop isolation capability, unlike SIGA-SB which is a standard base without isolation."
},

// ═══════════════════════════════════════════════
// TYPE 3 — PART NUMBER → DESCRIPTION (6 questions)
// Give the part number; identify the correct description.
// ═══════════════════════════════════════════════

{
id: 17,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSD Signature Optica Smoke Detector",
question: "SIGA-OSD is listed in the Academy as which type of Signature Optica detector?",
answers: [
"Intelligent Smoke Detector (smoke detection only)",
"Intelligent Smoke and Heat Detector",
"Intelligent Smoke, Heat and CO Detector",
"Intelligent CO Detector"
],
correct: 0,
explanation: "SIGA-OSD is the Signature Optica Smoke Detector — smoke only. For smoke + heat: SIGA-OSHD. For smoke + heat + CO: SIGA-OSHCD. For CO only: SIGA-COD."
},

{
id: 18,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSHCD Signature Optica Smoke, Heat & Carbon Monoxide Detector",
question: "SIGA-OSHCD is described in the Academy as detecting which combination of hazards?",
answers: [
"Smoke, Heat, and Carbon Monoxide",
"Smoke and Heat only",
"Smoke and Carbon Monoxide only",
"Heat and Carbon Monoxide only"
],
correct: 0,
explanation: "The SIGA-OSHCD is the Signature Optica Smoke, Heat & Carbon Monoxide Detector. It combines all three sensing functions in one device. Compare to SIGA-OSHD (no CO) and SIGA-OSD (smoke only)."
},

{
id: 19,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-SB4 Standard Detector Base (4-inch)",
question: "SIGA-SB4 is documented in the Academy as which product?",
answers: [
"Standard Detector Base with 4-inch footprint",
"Isolator Detector Base with 4-inch footprint",
"Audible Sounder Base",
"Standard Detector Base in standard size"
],
correct: 0,
explanation: "SIGA-SB4 is the Standard Detector Base in a 4-inch form factor. The standard-size variant is SIGA-SB. The 4-inch isolator base is SIGA-IB4."
},

{
id: 20,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CRR Reverse Polarity Control Relay Module",
question: "SIGA-CRR is documented in the Academy as which relay module variant?",
answers: [
"Reverse Polarity Control Relay Module",
"Standard Control Relay Module",
"High Power Control Relay Module",
"Riser Monitor Module"
],
correct: 0,
explanation: "SIGA-CRR is the Reverse Polarity Control Relay Module — a specific relay variant for applications requiring reverse-polarity behavior. The standard relay module is SIGA-CR."
},

{
id: 21,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-UM2 Universal Class A/B Signal Module",
question: "SIGA-UM2 is documented in the Academy as which type of signal module?",
answers: [
"Universal Class A/B Signal Module",
"Universal Class B Signal Module",
"Class A-only Signal Module",
"Dual Output Signal Module"
],
correct: 0,
explanation: "SIGA-UM2 is the Universal Class A/B Signal Module — it supports both Class A and Class B wiring topologies. The SIGA-UM (without the 2) is Class B only."
},

{
id: 22,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-LED Remote LED Indicator",
question: "The SIGA-LED is documented in the Academy as which type of accessory?",
answers: [
"Remote LED Indicator for associated initiating devices",
"LED notification strobe for corridor use",
"LED detector head for Signature bases",
"Panel-mounted LED status indicator"
],
correct: 0,
explanation: "SIGA-LED is the Remote LED Indicator — a Signature accessory that provides remote visual status indication for associated initiating devices at a more visible location."
},

// ═══════════════════════════════════════════════
// TYPE 4 — PART NUMBER DECODING (8 questions)
// Use only patterns verifiable from Academy product records.
// ═══════════════════════════════════════════════

{
id: 23,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy documents SIGA-CC1 as Single Input Monitor Module and SIGA-CC2 as Dual Input Monitor Module. What does the number suffix (1 vs 2) indicate in this naming pattern?",
answers: [
"The number of input channels (1 = single, 2 = dual)",
"The product generation number",
"The mounting configuration type",
"The Class A or Class B wiring topology"
],
correct: 0,
explanation: "In the Signature CC module family, the number suffix indicates the input channel count. SIGA-CC1 supervises one input; SIGA-CC2 supervises two inputs. This same pattern applies to SIGA-CT1 (one output) and SIGA-CT2 (two outputs)."
},

{
id: 24,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy documents SIGA-CT1 as Single Output Control Module and SIGA-CT2 as Dual Output Control Module. What does the number suffix indicate in the CT module naming?",
answers: [
"The number of output channels (1 = single, 2 = dual)",
"The product generation number",
"The SLC loop assignment",
"The device address capacity"
],
correct: 0,
explanation: "In the Signature CT module family, the number suffix indicates the output channel count. SIGA-CT1 has one output channel; SIGA-CT2 has two independently supervised output channels."
},

{
id: 25,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "Looking at SIGA-CC1 (Single Input Monitor Module) and SIGA-CC2 (Dual Input Monitor Module) in the Academy: what module function does the 'CC' portion identify?",
answers: [
"Monitor/input module category",
"Control/output module category",
"Control relay module category",
"Signal module category"
],
correct: 0,
explanation: "In the Signature module naming, 'CC' is associated with monitor/input module products. Both SIGA-CC1 and SIGA-CC2 are monitor modules that supervise input conditions."
},

{
id: 26,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "Looking at SIGA-CT1 (Single Output Control Module) and SIGA-CT2 (Dual Output Control Module): what module function does the 'CT' portion identify?",
answers: [
"Control/output module category",
"Monitor/input module category",
"Control relay module category",
"Sounder base category"
],
correct: 0,
explanation: "In the Signature module naming, 'CT' is associated with control/output module products. Both SIGA-CT1 and SIGA-CT2 provide supervised output channels activated by panel logic."
},

{
id: 27,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy lists SIGA-SB (Standard Detector Base) and SIGA-SB4 (Standard Detector Base 4-inch). What does the '4' suffix indicate in Signature detector base part numbers?",
answers: [
"A 4-inch footprint form factor variant",
"4-wire electrical connection",
"Fourth product generation",
"Four-ampere sounder capacity"
],
correct: 0,
explanation: "The '4' suffix in Signature base part numbers like SIGA-SB4 and SIGA-IB4 indicates the 4-inch footprint variant for installations where a 4-inch mounting form is required."
},

{
id: 28,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy documents SIGA-MCC1 (Miniature Single Input Monitor Module) and SIGA-CC1 (Single Input Monitor Module). What does the 'M' prefix in SIGA-MCC1 indicate?",
answers: [
"Miniature form factor variant of the same monitor function",
"Multi-channel operation",
"Manual addressing mode",
"Modular panel architecture compatibility"
],
correct: 0,
explanation: "The 'M' prefix in SIGA-MCC1 and SIGA-MCC2 identifies the miniature form factor variant. The monitoring function is the same as the standard CC modules, but in a compact physical size for constrained mounting locations."
},

{
id: 29,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "The Academy documents SIGA-UM (Universal Class B Signal Module) and SIGA-UM2 (Universal Class A/B Signal Module). What specific capability does the '2' in SIGA-UM2 add?",
answers: [
"Class A wiring topology support in addition to Class B",
"Two output channels instead of one",
"A second mounting option",
"A second address on the SLC"
],
correct: 0,
explanation: "SIGA-UM2 adds Class A topology support compared to SIGA-UM. UM2 supports both Class A and Class B wiring configurations; SIGA-UM is limited to Class B."
},

{
id: 30,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy documents Genesis G4 as Wall Mount Notification Devices and GCS as Ceiling Mount Speakers and Speaker-Strobes. What primary distinction do these series identifiers represent?",
answers: [
"G4 = wall-mount notification; GCS = ceiling-mount speakers and speaker-strobes",
"G4 = compact devices; GCS = standard-size devices",
"G4 = strobe only; GCS = horn/strobe only",
"G4 = indoor; GCS = outdoor applications"
],
correct: 0,
explanation: "G4 identifies the wall-mount notification series; GCS identifies the ceiling-mount speaker and speaker-strobe series. These are different product categories within the Genesis notification family."
},

// ═══════════════════════════════════════════════
// TYPE 5 — SIMILAR PART NUMBERS (5 questions)
// Distinguish between closely related part numbers.
// ═══════════════════════════════════════════════

{
id: 31,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy documents both SIGA-CC1 and SIGA-MCC1. Both are single input monitor modules. What is the documented difference between them?",
answers: [
"SIGA-MCC1 is the miniature form factor; SIGA-CC1 is the standard form factor",
"SIGA-CC1 is addressable; SIGA-MCC1 is conventional",
"SIGA-MCC1 monitors two inputs; SIGA-CC1 monitors one",
"There is no practical difference — they are the same product"
],
correct: 0,
explanation: "SIGA-MCC1 is the Miniature Single Input Monitor Module — the same monitoring function as SIGA-CC1 but in a miniature physical form for constrained installations."
},

{
id: 32,
category: "PartNumber",
difficulty: "Medium",
product: "",
question: "The Academy documents both SIGA-CT1 and SIGA-CC1 as Signature addressable modules. What is the key functional difference?",
answers: [
"SIGA-CT1 provides a controlled output; SIGA-CC1 supervises an input",
"SIGA-CT1 is Class A capable; SIGA-CC1 is Class B only",
"SIGA-CT1 is for NAC circuits; SIGA-CC1 is for SLC circuits only",
"They perform the same function — only the naming differs"
],
correct: 0,
explanation: "SIGA-CT1 is a control module (output function). SIGA-CC1 is a monitor module (input function). Despite similar part number structure, they serve opposite purposes."
},

{
id: 33,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "The Academy documents SIGA-CR (Control Relay Module) and SIGA-CRR (Reverse Polarity Control Relay Module). What is the documented distinction?",
answers: [
"SIGA-CRR provides reverse-polarity relay behavior; SIGA-CR is the standard Form C relay variant",
"SIGA-CRR has two relay outputs; SIGA-CR has one",
"SIGA-CRR is Class A capable; SIGA-CR is Class B only",
"SIGA-CRR is a monitor module; SIGA-CR is a control module"
],
correct: 0,
explanation: "Both are control relay modules. SIGA-CRR is specifically designed for applications requiring reverse-polarity relay behavior. SIGA-CR is the standard Form C relay variant for auxiliary equipment control."
},

{
id: 34,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "The Academy documents SIGA-IM (Short Circuit Isolator Module) and SIGA-IM2 (Intelligent Isolator Module) as separate products. What does this distinction tell you?",
answers: [
"They are separate isolator products listed under different categories in the Signature family",
"SIGA-IM2 is simply the newer generation of SIGA-IM with no functional difference",
"SIGA-IM is for addressable systems; SIGA-IM2 is for conventional systems",
"SIGA-IM handles open circuits; SIGA-IM2 handles short circuits"
],
correct: 0,
explanation: "The Academy lists SIGA-IM as 'Short Circuit Isolator Module' and SIGA-IM2 as 'Intelligent Isolator Module' — two distinct products. They should not be assumed to be identical or interchangeable without verifying specifications."
},

{
id: 35,
category: "PartNumber",
difficulty: "Hard",
product: "",
question: "The Academy documents Genesis G4 (Wall Mount Notification Devices) and Genesis G4LF (Low Frequency). What does the 'LF' suffix specifically indicate?",
answers: [
"Low frequency signaling capability for application-specific notification requirements",
"Left-side fixture mounting orientation",
"Larger form factor for high-output applications",
"Low-flash-rate strobe output"
],
correct: 0,
explanation: "The 'LF' in Genesis G4LF stands for Low Frequency. Low-frequency notification products are applied where low-frequency signaling is specified as part of the design criteria for a particular occupancy."
},

// ═══════════════════════════════════════════════
// TYPE 6 — REAL-WORLD PART SELECTION (8 questions)
// Apply part number knowledge to project scenarios.
// ═══════════════════════════════════════════════

{
id: 36,
category: "PartNumber",
difficulty: "Easy",
product: "Genesis LED G4 Series Wall Mount Notification Devices",
question: "A fire alarm project calls for horn/strobe notification appliances on walls throughout a building. Which Genesis series would you investigate first?",
answers: [
"Genesis LED G4 Series (Wall Mount Notification)",
"Genesis LED GCS Series (Ceiling Mount Speakers)",
"Genesis LED G4LF Series (Low Frequency)",
"Genesis LED G1 Series (Compact)"
],
correct: 0,
explanation: "The Genesis G4 Series covers Wall Mount Notification Devices. For standard wall-mounted horn/strobe applications, G4 is the appropriate starting point within the Genesis LED family."
},

{
id: 37,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-CC1 Single Input Monitor Module",
question: "A project requires monitoring a single dry contact input at a remote location. Which Signature module part number would you investigate?",
answers: [
"SIGA-CC1 (Single Input Monitor Module)",
"SIGA-CT1 (Single Output Control Module)",
"SIGA-CR (Control Relay Module)",
"SIGA-IM2 (Intelligent Isolator Module)"
],
correct: 0,
explanation: "SIGA-CC1 is the Single Input Monitor Module — the correct choice for supervising a single dry contact input and reporting its status to the fire alarm panel."
},

{
id: 38,
category: "PartNumber",
difficulty: "Medium",
product: "Genesis LED G4LF Series Low Frequency",
question: "An occupancy requires low-frequency notification appliances as part of the design basis. Which Genesis series should you specify?",
answers: [
"Genesis LED G4LF Series",
"Genesis LED G4 Series",
"Genesis LED G1 Series",
"Genesis LED GCS Series"
],
correct: 0,
explanation: "The Genesis LED G4LF Series is the Low Frequency notification product family. When the design criteria requires low-frequency signaling, G4LF is the appropriate Genesis series."
},

{
id: 39,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-CT2 Dual Output Control Module",
question: "An HVAC system shutdown requires two independently controlled fire alarm outputs at the same equipment location. Which Signature module part number should you investigate?",
answers: [
"SIGA-CT2 (Dual Output Control Module)",
"SIGA-CT1 (Single Output Control Module)",
"SIGA-CC2 (Dual Input Monitor Module)",
"SIGA-CR (Control Relay Module)"
],
correct: 0,
explanation: "SIGA-CT2 is the Dual Output Control Module, providing two independently supervised output channels. When two separate control outputs are needed at one location, CT2 is the appropriate choice over CT1."
},

{
id: 40,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-270 Single Action Intelligent Pull Station",
question: "A project requires pull stations with single-action activation throughout the building. Which Edwards Signature part number should you specify?",
answers: [
"SIGA-270 (Single Action)",
"SIGA-278 (Double Action)",
"SIGA-CT1 (Control Module)",
"SIGA-CC1 (Monitor Module)"
],
correct: 0,
explanation: "SIGA-270 is the Single Action Intelligent Pull Station. Single-action means one motion activates the station. SIGA-278 is the double-action (two-step) variant."
},

{
id: 41,
category: "PartNumber",
difficulty: "Medium",
product: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
question: "A corridor design calls for speaker-strobes in a ceiling-mount configuration. Which Genesis series is appropriate?",
answers: [
"Genesis LED GCS Series (Ceiling Mount Speakers and Speaker-Strobes)",
"Genesis LED G4 Series (Wall Mount)",
"Genesis LED G4LF Series (Low Frequency)",
"Genesis LED G1 Series (Compact)"
],
correct: 0,
explanation: "The Genesis GCS Series covers Ceiling Mount Speakers and Speaker-Strobes. For ceiling-mount speaker-strobe applications, GCS is the correct series within the Genesis LED family."
},

{
id: 42,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-CC1 Single Input Monitor Module",
question: "A project requires monitoring sprinkler valve tamper switches — each switch needs its own addressable monitored point. Which Signature part number is appropriate for each point?",
answers: [
"SIGA-CC1 (Single Input Monitor Module)",
"SIGA-CT1 (Single Output Control Module)",
"SIGA-CT2 (Dual Output Control Module)",
"SIGA-CR (Control Relay Module)"
],
correct: 0,
explanation: "Each tamper switch is a single dry contact input. SIGA-CC1 supervises one input and reports its status to the panel — the correct choice for a single monitored point. If two points are at the same location, SIGA-CC2 could be considered."
},

{
id: 43,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-SB4 Standard Detector Base (4-inch)",
question: "A BOM review shows SIGA-SB4 listed alongside smoke detectors on a project with 4-inch mounting boxes. What does this part number represent?",
answers: [
"Standard Detector Base with 4-inch footprint (SIGA-SB4)",
"Isolator Detector Base with 4-inch footprint (SIGA-IB4)",
"Audible Sounder Base (SIGA-AB4G)",
"Standard Detector Base in standard size (SIGA-SB)"
],
correct: 0,
explanation: "SIGA-SB4 is the Standard Detector Base with a 4-inch footprint — used when 4-inch mounting boxes are specified. The standard-footprint variant is SIGA-SB. The isolator variant is SIGA-IB4."
}

];
