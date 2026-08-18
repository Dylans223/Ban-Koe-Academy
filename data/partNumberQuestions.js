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
question: "A fire alarm project calls for ordinary wall-mounted horn-strobes, and the schedule does not specify low-frequency output or a G4-specific requirement. Which Genesis family should you investigate first?",
answers: [
"Genesis LED GCS Series (Ceiling Mount Speakers)",
"Genesis LED G4LF Series (Low Frequency)",
"Genesis LED G4 Series (Wall Mount Notification)",
"Genesis LED G1 Series (Compact)"
],
correct: 3,
explanation: "For ordinary wall-mounted horn-strobe work that fits the common G1 family, investigate Genesis G1 first. G4 remains legitimate when the project specifically calls for G4 or its documented characteristics."
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
},

{
id: 44,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-HPR High Power Control Relay Module",
question: "Which product is identified by the catalog number SIGA-HPR?",
answers: [
"High Power Control Relay Module",
"Standard Control Relay Module",
"Dual Input Monitor Module",
"Universal Signal Module"
],
correct: 0,
explanation: "SIGA-HPR is the High Power Control Relay Module in the Edwards Signature module family."
},

{
id: 45,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-OSCD Signature Optica Smoke and Carbon Monoxide Detector",
question: "What product does the catalog number SIGA-OSCD identify?",
answers: [
"Signature Optica Smoke and Carbon Monoxide Detector",
"Signature Optica Smoke Detector",
"Signature Optica Smoke and Heat Detector",
"Intelligent Carbon Monoxide Detector"
],
correct: 0,
explanation: "SIGA-OSCD identifies the Signature Optica detector that combines smoke and carbon monoxide detection."
},

{
id: 46,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-COD Intelligent Carbon Monoxide Detector",
question: "An inventory label shows SIGA-COD. What product should you recognize?",
answers: [
"Intelligent Carbon Monoxide Detector",
"Signature Optica Smoke Detector",
"Intelligent Multisensor Detector",
"Remote LED Indicator"
],
correct: 0,
explanation: "SIGA-COD is the Intelligent Carbon Monoxide Detector in the Edwards Signature product data."
},

{
id: 48,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-PHCD Intelligent Multisensor Smoke, Heat and CO Detector",
question: "Which product is identified by the catalog number SIGA-PHCD?",
answers: [
"Intelligent Multisensor Smoke, Heat and CO Detector",
"Intelligent Multisensor Smoke and CO Detector",
"Signature Optica Smoke and Heat Detector",
"Intelligent Photoelectric Smoke Detector"
],
correct: 0,
explanation: "SIGA-PHCD is the Intelligent Multisensor Smoke, Heat and CO Detector."
},

{
id: 50,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-MDS Signature PIR Motion Detector Swivel Mount",
question: "An inventory label reads SIGA-MDS. Which product should be selected?",
answers: [
"Signature PIR Motion Detector Swivel Mount",
"Signature PIR Motion Detector",
"Complete Cabinet",
"Detector Mounting Plate"
],
correct: 0,
explanation: "SIGA-MDS is the Signature PIR Motion Detector Swivel Mount."
},

{
id: 52,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-TS Signature Series Box Trim Skirt/Ring",
question: "Which catalog number identifies the Signature Series Box Trim Skirt/Ring?",
answers: [
"SIGA-TS",
"SIGA-LED",
"SIGA-DMP",
"SIGA-SEC2"
],
correct: 0,
explanation: "SIGA-TS identifies the Signature Series Box Trim Skirt/Ring accessory."
},

{
id: 53,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-DMP Detector Mounting Plate",
question: "Which catalog number identifies the Signature detector mounting plate?",
answers: [
"SIGA-DMP",
"SIGA-TS",
"SIGA-SEC2",
"SIGA-SB"
],
correct: 0,
explanation: "SIGA-DMP is the Signature Detector Mounting Plate used for detector mounting in raised-floor and plenum applications."
},

{
id: 54,
category: "PartNumber",
difficulty: "Easy",
product: "SIGA-AB4G-LF Audible Sounder Base Low Frequency",
question: "Which catalog number identifies the low-frequency audible sounder base?",
answers: [
"SIGA-AB4G-LF",
"SIGA-AB4G",
"SIGA-SB4",
"SIGA-LED"
],
correct: 0,
explanation: "SIGA-AB4G-LF is the low-frequency variant of the Signature Audible Sounder Base."
},

{
id: 56,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-UM Universal Class B Signal Module",
question: "What is the catalog number for the Universal Class B Signal Module?",
answers: [
"SIGA-UM",
"SIGA-UM2",
"SIGA-CC2",
"SIGA-CT2"
],
correct: 0,
explanation: "SIGA-UM is the Universal Class B Signal Module; SIGA-UM2 is the Class A/B variant."
},

{
id: 58,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-SB Standard Detector Base",
question: "Which catalog number identifies the standard Signature detector base?",
answers: [
"SIGA-SB",
"SIGA-SB4",
"SIGA-IB",
"SIGA-AB4G"
],
correct: 0,
explanation: "SIGA-SB is the standard Signature Detector Base; SIGA-SB4 is the 4-inch footprint version."
},

{
id: 59,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-LED Remote LED Indicator",
question: "A quote needs a remote visual status indicator for an associated initiating device. Which catalog number should be entered?",
answers: [
"SIGA-LED",
"SIGA-AB4G",
"SIGA-DMP",
"SIGA-TS"
],
correct: 0,
explanation: "SIGA-LED is the Signature Remote LED Indicator accessory."
},

{
id: 60,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSHD Signature Optica Smoke and Heat Detector",
question: "Which catalog number corresponds to the Signature Optica Smoke and Heat Detector?",
answers: [
"SIGA-OSHD",
"SIGA-OSCD",
"SIGA-OSD",
"SIGA-OSHCD"
],
correct: 0,
explanation: "SIGA-OSHD is the Signature Optica Smoke and Heat Detector."
},

{
id: 61,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSCD Signature Optica Smoke and Carbon Monoxide Detector",
question: "Which catalog number corresponds to the Signature Optica Smoke and Carbon Monoxide Detector?",
answers: [
"SIGA-OSCD",
"SIGA-OSD",
"SIGA-OSHD",
"SIGA-COD"
],
correct: 0,
explanation: "SIGA-OSCD is the Signature Optica Smoke and Carbon Monoxide Detector."
},

{
id: 62,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-COD Intelligent Carbon Monoxide Detector",
question: "Which catalog number corresponds to the Intelligent Carbon Monoxide Detector?",
answers: [
"SIGA-COD",
"SIGA-OSCD",
"SIGA-PCD",
"SIGA-PHCD"
],
correct: 0,
explanation: "SIGA-COD is the Intelligent Carbon Monoxide Detector, distinct from the smoke-and-CO detector variants."
},

{
id: 63,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-HPR High Power Control Relay Module",
question: "Which catalog number corresponds to the High Power Control Relay Module?",
answers: [
"SIGA-HPR",
"SIGA-CR",
"SIGA-CRR",
"SIGA-CT2"
],
correct: 0,
explanation: "SIGA-HPR is the High Power Control Relay Module."
},

{
id: 65,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-DMP Detector Mounting Plate",
question: "Which catalog number corresponds to the Signature Detector Mounting Plate?",
answers: [
"SIGA-DMP",
"SIGA-IB4",
"SIGA-SB4",
"SIGA-LED"
],
correct: 0,
explanation: "SIGA-DMP is the Signature Detector Mounting Plate."
},

{
id: 66,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-MCC2 Miniature Dual Input Monitor Module",
question: "Which catalog number belongs to the miniature dual-input monitor module family?",
answers: [
"SIGA-MCC2",
"SIGA-MCC1",
"SIGA-CC2",
"SIGA-CT2"
],
correct: 0,
explanation: "SIGA-MCC2 is the miniature dual-input monitor module; SIGA-MCC1 is the miniature single-input version."
},

{
id: 68,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-SB Standard Detector Base",
question: "Which catalog number belongs to the standard Signature detector base family?",
answers: [
"SIGA-SB",
"SIGA-IB",
"SIGA-SB4",
"SIGA-AB4G"
],
correct: 0,
explanation: "SIGA-SB is the standard detector base; SIGA-IB is the isolator detector base."
},

{
id: 70,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-AB4G-LF Audible Sounder Base Low Frequency",
question: "Which catalog number belongs to the low-frequency Signature audible sounder base family?",
answers: [
"SIGA-AB4G-LF",
"SIGA-AB4G",
"SIGA-SB4",
"SIGA-IB4"
],
correct: 0,
explanation: "SIGA-AB4G-LF is the low-frequency audible sounder base; SIGA-AB4G is the standard audible sounder base."
},

{
id: 71,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-MDS Signature PIR Motion Detector Swivel Mount",
question: "Which catalog number belongs to the Signature PIR motion detector swivel-mount family?",
answers: [
"SIGA-MDS",
"SIGA-MD",
"SIGA-DMP",
"SIGA-TS"
],
correct: 0,
explanation: "SIGA-MDS is the Signature PIR Motion Detector Swivel Mount; SIGA-MD is the non-swivel PIR motion detector listing."
},

{
id: 72,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSCD and SIGA-OSD",
question: "Which catalog number identifies the Signature Optica model that adds carbon monoxide detection to smoke detection?",
answers: [
"SIGA-OSCD",
"SIGA-OSD",
"SIGA-OSHD",
"SIGA-COD"
],
correct: 0,
explanation: "SIGA-OSCD is the smoke-and-carbon-monoxide model; SIGA-OSD is the smoke-only model."
},

{
id: 73,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-OSHD and SIGA-OSHCD",
question: "Which catalog number identifies the Signature Optica model with smoke and heat detection but without carbon monoxide detection?",
answers: [
"SIGA-OSHD",
"SIGA-OSHCD",
"SIGA-OSCD",
"SIGA-COD"
],
correct: 0,
explanation: "SIGA-OSHD is the smoke-and-heat detector; SIGA-OSHCD adds carbon monoxide detection."
},

{
id: 75,
category: "PartNumber",
difficulty: "Medium",
product: "SIGA-MCC1 and SIGA-MCC2",
question: "Which catalog number identifies the miniature dual-input monitor module rather than the miniature single-input version?",
answers: [
"SIGA-MCC2",
"SIGA-MCC1",
"SIGA-CC2",
"SIGA-CT2"
],
correct: 0,
explanation: "SIGA-MCC2 is the miniature dual-input monitor module; SIGA-MCC1 is the miniature single-input version."
},

{
id: 76,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-SB and SIGA-IB",
question: "Which catalog number identifies the standard detector base rather than the isolator detector base?",
answers: [
"SIGA-SB",
"SIGA-IB",
"SIGA-SB4",
"SIGA-IB4"
],
correct: 0,
explanation: "SIGA-SB is the standard detector base; SIGA-IB is the isolator detector base."
},

{
id: 77,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-AB4G and SIGA-AB4G-LF",
question: "Which catalog number identifies the low-frequency audible sounder base rather than the standard audible sounder base?",
answers: [
"SIGA-AB4G-LF",
"SIGA-AB4G",
"SIGA-SB4",
"SIGA-IB4"
],
correct: 0,
explanation: "SIGA-AB4G-LF is the low-frequency variant; SIGA-AB4G is the standard audible sounder base."
},

{
id: 78,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-HPR High Power Control Relay Module",
question: "A control requirement calls for the high-power relay product rather than a standard control relay. Which catalog number should be selected?",
answers: [
"SIGA-HPR",
"SIGA-CR",
"SIGA-CRR",
"SIGA-CT1"
],
correct: 0,
explanation: "SIGA-HPR is the High Power Control Relay Module; SIGA-CR and SIGA-CRR are separate control relay products."
},

{
id: 82,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-DMP Detector Mounting Plate",
question: "A mounting detail requires the Signature detector mounting plate for a raised-floor or plenum installation. Which catalog number should be entered?",
answers: [
"SIGA-DMP",
"SIGA-SB",
"SIGA-IB",
"SIGA-LED"
],
correct: 0,
explanation: "SIGA-DMP is the Detector Mounting Plate associated with raised-floor and plenum mounting support."
},

{
id: 83,
category: "PartNumber",
difficulty: "Hard",
product: "SIGA-UM2 Universal Class A/B Signal Module",
question: "A design requires the Signature universal signal module that supports both Class A and Class B. Which catalog number should be selected?",
answers: [
"SIGA-UM2",
"SIGA-UM",
"SIGA-CT2",
"SIGA-CR"
],
correct: 0,
explanation: "SIGA-UM2 is the Universal Class A/B Signal Module; SIGA-UM is the Class B variant."
},

{
id:84,
category:"PartNumber",
difficulty:"Hard",
product:"G4LFVRF Genesis LED Wall-Mount Low-Frequency Horn-Strobe",
question:"Using the documented Genesis syntax, what does G4LFVRF identify?",
answers:["G4 ceiling appliance, LF low-frequency horn, W white housing, N no marking","G4 wall appliance, LFV low-frequency horn-strobe, W white housing, A ALERT marking","G4 wall-mount appliance, LFV low-frequency horn-strobe, R red housing, F FIRE marking","G4 compact appliance, LF standard horn, R red housing, F-FR FIRE/FEU marking"],
correct:2,
explanation:"The supplied syntax documents G4 as the Genesis wall-mount appliance, LFV as low-frequency horn-strobe, R as red housing, and F as FIRE marking."
},
{
id:85,
category:"PartNumber",
difficulty:"Medium",
product:"G4LF and G4LFV Genesis LED Appliances",
question:"What is the documented distinction between G4LF and G4LFV?",
answers:["G4LF is ceiling-mounted; G4LFV is a detector base","G4LF is the low-frequency horn; G4LFV is the low-frequency horn-strobe","G4LF is white; G4LFV is always red","G4LF is a removal tool; G4LFV is a trim plate"],
correct:1,
explanation:"G4LF and G4LFV are separate Genesis families: LF identifies the low-frequency horn, while LFV identifies the low-frequency horn-strobe."
},
{
id:86,
category:"PartNumber",
difficulty:"Medium",
product:"GRSW-10 Room-Side Wiring Plate",
question:"What does GRSW-10 represent in a Genesis takeoff?",
answers:["A red 4-inch surface-mount box","A device/cover removal tool for one appliance","The required room-side wiring plate, ordered separately in a 10-pack","A white G4 trim plate"],
correct:2,
explanation:"GRSW-10 is the required room-side wiring plate and is ordered separately in packs of 10."
},
{
id:87,
category:"PartNumber",
difficulty:"Hard",
product:"Genesis Housing Markings",
question:"In the documented Genesis housing-marking syntax, which code indicates FIRE/FEU?",
answers:["F","F-SP","A","F-FR"],
correct:3,
explanation:"The supplied Genesis syntax identifies F-FR as FIRE/FEU, F as FIRE, F-SP as FUEGO, and A as ALERT."
},
{
id:88,
category:"PartNumber",
difficulty:"Hard",
product:"G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe",
question:"Using the documented G1 syntax, what does G1AVRF identify?",
answers:["A white Genesis G1 wall-mounted ALERT strobe","A red Genesis G1 wall-mounted FIRE horn","A red Genesis G1 wall-mounted FIRE horn-strobe","A red Genesis G4 low-frequency horn-strobe"],
correct:2,
explanation:"G1 is the Genesis wall-mount appliance, AV is horn-strobe, R is red, and F is FIRE."
},
{
id:89,
category:"PartNumber",
difficulty:"Medium",
product:"Genesis G1 Function Codes",
question:"What does AV indicate in a documented G1 model number?",
answers:["Horn only","Strobe only","Surface-mount box","Horn-strobe"],
correct:3,
explanation:"AV identifies the G1 horn-strobe function. A identifies horn and V identifies strobe."
},
{
id:90,
category:"PartNumber",
difficulty:"Medium",
product:"Genesis G1 Housing Codes",
question:"What does R indicate in a documented G1 model number?",
answers:["White housing","No marking","Red housing","FIRE marking"],
correct:2,
explanation:"R identifies the red housing option; W identifies white housing."
},
{
id:91,
category:"PartNumber",
difficulty:"Medium",
product:"Genesis G1 Marking Codes",
question:"What does N indicate in a documented G1 model number?",
answers:["FIRE marking","FUEGO marking","ALERT marking","No marking"],
correct:3,
explanation:"N identifies no marking. F, F-FR, F-SP, and A identify the documented marking options."
},
{
id:92,
category:"PartNumber",
difficulty:"Medium",
product:"G1TR Red G1 Trim Ring",
question:"Which item is a G1 accessory rather than a primary notification appliance?",
answers:["G1AVRF horn-strobe","G1TR red trim ring","G1ARF horn","G1VRF strobe"],
correct:1,
explanation:"G1TR is the red G1 trim ring accessory. G1AVRF, G1ARF, and G1VRF are primary notification appliance variants."
},

];
