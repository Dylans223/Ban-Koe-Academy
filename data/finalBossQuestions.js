// ===============================================
// Ban-Koe Academy
// Final Boss Dedicated Question Bank
// ===============================================

const finalBossQuestions = [

// Product Recognition (15)
{
id: "fbq_001",
category: "Final Boss",
difficulty: "Easy",
product: "SIGA-CT2",
question: "A field note says two separate equipment outputs must be controlled at one location. Which Signature module function should you recognize as the best fit?",
answers: [
"Dual output control function",
"Dual input monitoring function",
"Detectors-only monitoring function",
"Remote visual status indication"
],
correct: 0,
explanation: "A dual output control module is the correct fit when the system must command two separate external actions from one location. The distinction is output control, not input supervision."
},
{
id: "fbq_003",
category: "Final Boss",
difficulty: "Medium",
product: "Genesis LED GCS Series",
question: "A ceiling-mount application calls for speaker-strobes, not wall-mounted horn-strobes. Which Genesis notification category should you recognize as the correct fit?",
answers: [
"Ceiling speaker and speaker-strobe family",
"Wall-mount horn-strobe family",
"Low-frequency signaling family",
"Compact detector accessory family"
],
correct: 0,
explanation: "Ceiling speaker-strobes are recognized as the Genesis ceiling speaker and speaker-strobe category, which is distinct from wall-mount and low-frequency notification families."
},
{
id: "fbq_004",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-AB4G",
question: "What type of Signature accessory is SIGA-AB4G?",
answers: [
"Audible Sounder Base",
"Remote LED Indicator",
"Standard Detector Base",
"Isolator Module"
],
correct: 0,
explanation: "SIGA-AB4G is an audible sounder base accessory used at the detector base location."
},
{
id: "fbq_005",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-OSD",
question: "An application calls for a detector that senses smoke only, with no heat or carbon monoxide input. Which Signature Optica detection category should you recognize?",
answers: [
"Smoke-only detector",
"Smoke and heat detector",
"Smoke, heat, and CO detector",
"CO-only detector"
],
correct: 0,
explanation: "A smoke-only Optica detector is the simplest detection category; the other options add heat or CO capability. This is a functional recognition issue, not a part-number identification exercise."
},
{
id: "fbq_007",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-CRR",
question: "A field sequence requires a relay interface that uses reverse-polarity switching for an external device. Which relay type should you recognize as the correct function?",
answers: [
"Reverse-polarity control relay",
"Standard control relay",
"Single-output control module",
"Single-input monitor module"
],
correct: 0,
explanation: "Reverse-polarity relay behavior is a distinct relay-function category, not just a generic control module. The correct fit is a reverse-polarity control relay module."
},
{
id: "fbq_008",
category: "Final Boss",
difficulty: "Medium",
product: "Signature Optica",
question: "A multi-hazard detector is required for a space that needs smoke and heat detection without CO sensing. Which Signature Optica category should you recognize?",
answers: [
"Smoke and heat detector",
"Smoke-only detector",
"CO-only detector",
"Universal signal module"
],
correct: 0,
explanation: "The smoke-and-heat category is the correct recognition fit when the requirement includes smoke and heat, but not CO. The Optica family includes multiple hazard combinations, each with a different detection profile."
},
{
id: "fbq_009",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-278",
question: "A campus standard requires two-step manual activation in public corridors. Which manual-station type should you recognize as the correct application?",
answers: [
"Double-action pull station",
"Single-action pull station",
"Monitor module",
"Relay module"
],
correct: 0,
explanation: "Two-step activation is a double-action manual-station function, which is distinct from a single-action pull station and from module-based interfaces."
},
{
id: "fbq_010",
category: "Final Boss",
difficulty: "Medium",
product: "Detector Bases",
question: "Which pair correctly identifies a standard 4-inch base and a 4-inch isolator base?",
answers: [
"SIGA-SB4 and SIGA-IB4",
"SIGA-SB and SIGA-SB4",
"SIGA-IB and SIGA-SB",
"SIGA-AB4G and SIGA-SB4"
],
correct: 0,
explanation: "SIGA-SB4 is the standard 4-inch base and SIGA-IB4 is the 4-inch isolator base."
},
{
id: "fbq_011",
category: "Final Boss",
difficulty: "Hard",
product: "Genesis LED G4LF",
question: "A design narrative explicitly requires low-frequency occupant notification. Which product characteristic should stand out as the deciding recognition factor?",
answers: [
"Low-frequency signaling requirement",
"Wall-mount horn-strobe layout",
"Ceiling speaker-strobe mounting",
"Detector base sounder output"
],
correct: 0,
explanation: "Low-frequency signaling is the key recognition factor for the Genesis low-frequency notification family; this is an application-driven classification rather than a part-number lookup."
},
{
id: "fbq_013",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-COD",
question: "A design note calls out a detector that monitors carbon monoxide only, with no smoke or heat alarm function. Which Optica detection category should you recognize?",
answers: [
"CO-only detector",
"Smoke-only detector",
"Smoke and heat detector",
"Smoke, heat, and CO detector"
],
correct: 0,
explanation: "A carbon-monoxide-only detector is a distinct Optica category. The recognition issue is the hazard profile, not a part-number match."
},
{
id: "fbq_014",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-UM2",
question: "A project requires a signal module that supports both Class A and Class B wiring topologies. Which module type should you recognize?",
answers: [
"Universal Class A/B signal module",
"Single-output control module",
"Dual-input monitor module",
"Isolator module"
],
correct: 0,
explanation: "A universal signal module with both Class A and Class B support is the correct recognition fit. This is a topology and function recognition question, not a part-number decode."
},
{
id: "fbq_015",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-CT1",
question: "A quote note says a field point requires one monitored input, but the listed device is described as a one-output control module. What is the main recognition issue?",
answers: [
"The listed device is the wrong function for an input-only point",
"The listed device is a detector base and should be ignored",
"The control module is always used for monitored inputs",
"The input point should be treated as a notification appliance"
],
correct: 0,
explanation: "An input-only point should be recognized as a monitor function, not a control-output module. CT1 is a one-output control module, while a monitored input is typically handled by a monitor module such as CC1."
},

// Part Number Mastery (15)
{
id: "fbq_016",
category: "Final Boss",
difficulty: "Easy",
product: "SIGA-270",
question: "Which part number corresponds to a single action intelligent pull station?",
answers: [
"SIGA-270",
"SIGA-278",
"SIGA-CC1",
"SIGA-CT1"
],
correct: 0,
explanation: "SIGA-270 is the single action pull station; SIGA-278 is double action."
},
{
id: "fbq_017",
category: "Final Boss",
difficulty: "Easy",
product: "SIGA-CC2",
question: "Which part number identifies a dual input monitor module?",
answers: [
"SIGA-CC2",
"SIGA-CT2",
"SIGA-MCC1",
"SIGA-IM2"
],
correct: 0,
explanation: "SIGA-CC2 is the dual input monitor module. CT2 is dual output control, not monitor input."
},
{
id: "fbq_019",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-CRR",
question: "Which part number is the reverse-polarity control relay module?",
answers: [
"SIGA-CRR",
"SIGA-CR",
"SIGA-CT1",
"SIGA-CC1"
],
correct: 0,
explanation: "CRR is the reverse-polarity relay variant; CR is the standard control relay module."
},
{
id: "fbq_020",
category: "Final Boss",
difficulty: "Medium",
product: "SIGA-LED",
question: "A remote visual status indicator is needed. Which Signature part number matches that accessory?",
answers: [
"SIGA-LED",
"SIGA-AB4G",
"SIGA-SB4",
"SIGA-IM2"
],
correct: 0,
explanation: "SIGA-LED is the remote LED indicator accessory."
},
{
id: "fbq_021",
category: "Final Boss",
difficulty: "Medium",
product: "Part Number Pairing",
question: "Which pairing is correct?",
answers: [
"SIGA-CT2 = Dual Output Control Module",
"SIGA-CC2 = Dual Output Control Module",
"SIGA-IM2 = Single Input Monitor Module",
"SIGA-CR = Isolator Module"
],
correct: 0,
explanation: "CT2 is dual output control. CC2 is dual input monitor, IM2 is isolator, and CR is control relay."
},
{
id: "fbq_022",
category: "Final Boss",
difficulty: "Medium",
product: "Part Number Pairing",
question: "Which pairing is NOT correct?",
answers: [
"SIGA-CC1 = Single Output Control Module",
"SIGA-CT1 = Single Output Control Module",
"SIGA-278 = Double Action Pull Station",
"SIGA-OSD = Smoke Detector"
],
correct: 0,
explanation: "SIGA-CC1 is a single input monitor module, not a single output control module."
},
{
id: "fbq_023",
category: "Final Boss",
difficulty: "Medium",
product: "Input and Output Selection",
question: "A field location needs one monitored input and one controlled output. Which pair best matches that requirement?",
answers: [
"SIGA-CC1 and SIGA-CT1",
"SIGA-CT1 and SIGA-CT2",
"SIGA-CC1 and SIGA-CC2",
"SIGA-IM2 and SIGA-CRR"
],
correct: 0,
explanation: "CC1 provides one monitored input and CT1 provides one controlled output."
},
{
id: "fbq_024",
category: "Final Boss",
difficulty: "Medium",
product: "Dual Input Selection",
question: "Two dry-contact inputs at the same location must each be supervised. Which part number is the most direct fit?",
answers: [
"SIGA-CC2",
"SIGA-CT2",
"SIGA-CC1",
"SIGA-CR"
],
correct: 0,
explanation: "CC2 is a dual input monitor module and directly fits two supervised inputs."
},
{
id: "fbq_027",
category: "Final Boss",
difficulty: "Hard",
product: "SIGA-SB4",
question: "A drawing indicates 4-inch boxes and standard bases, not isolator bases. Which part number most directly fits?",
answers: [
"SIGA-SB4",
"SIGA-IB4",
"SIGA-SB",
"SIGA-AB4G"
],
correct: 0,
explanation: "SB4 is the standard 4-inch base. IB4 is the isolator 4-inch base."
},
{
id: "fbq_029",
category: "Final Boss",
difficulty: "Hard",
product: "Genesis Series",
question: "Which series pairing is accurate for these applications: wall-mount notification and ceiling-mount speaker-strobes?",
answers: [
"G4 for wall-mount notification, GCS for ceiling speaker-strobes",
"GCS for wall-mount notification, G4 for ceiling speaker-strobes",
"G4LF for all wall and ceiling speaker-strobes",
"G1 for ceiling speaker-strobes, GCS for compact wall devices"
],
correct: 0,
explanation: "G4 identifies wall notification, while GCS identifies ceiling speaker and speaker-strobe products."
},
{
id: "fbq_030",
category: "Final Boss",
difficulty: "Hard",
product: "SIGA-OSHCD",
question: "Which hazard combination is represented by SIGA-OSHCD?",
answers: [
"Smoke, heat, and carbon monoxide",
"Smoke and heat only",
"Smoke only",
"Carbon monoxide only"
],
correct: 0,
explanation: "OSHCD combines smoke, heat, and CO sensing in one Signature Optica model."
},

// Product Applications (15)
{
id: "fbq_031",
category: "Final Boss",
difficulty: "Easy",
product: "Monitor Modules",
question: "A waterflow switch must report status to the panel. Which function should be investigated first?",
answers: [
"Monitor input function",
"Control output function",
"NAC output function",
"Isolator segmentation function"
],
correct: 0,
explanation: "Waterflow is an input condition, so monitor input function is the first fit."
},
{
id: "fbq_032",
category: "Final Boss",
difficulty: "Medium",
product: "Control Modules",
question: "A sequence requires the fire alarm system to command external equipment to change state. Which module function is application-appropriate?",
answers: [
"Control output",
"Monitor input",
"Detector base accessory",
"Isolator base"
],
correct: 0,
explanation: "Commanding external equipment is a control-output application."
},
{
id: "fbq_033",
category: "Final Boss",
difficulty: "Medium",
product: "Duct Detector Interface",
question: "A duct detector must both report alarm and trigger HVAC shutdown. What application mapping is most accurate?",
answers: [
"Monitor input for detector alarm plus control output for shutdown",
"Control output for both functions",
"Monitor input for both functions",
"NAC output plus detector base sounder"
],
correct: 0,
explanation: "Reporting an alarm is input monitoring; commanding shutdown is output control."
},
{
id: "fbq_034",
category: "Final Boss",
difficulty: "Medium",
product: "Manual Stations",
question: "A campus standard requires two-step station activation in public corridors. Which product type should be considered?",
answers: [
"Double action intelligent pull station",
"Single action intelligent pull station",
"Remote LED indicator",
"Universal signal module"
],
correct: 0,
explanation: "Double action pull stations are used where a two-step manual action is required."
},
{
id: "fbq_035",
category: "Final Boss",
difficulty: "Medium",
product: "Detector Bases",
question: "A BOM shows detector heads but no bases. What application-level check is most important before release?",
answers: [
"Verify required detector bases and compatibility are included",
"Replace all heads with pull stations",
"Convert all devices to NAC appliances",
"Assume bases are built into every detector"
],
correct: 0,
explanation: "Detector bases are often separate line items and should be confirmed during BOM review."
},
{
id: "fbq_036",
category: "Final Boss",
difficulty: "Medium",
product: "Genesis G4LF",
question: "A project specifically calls out low-frequency occupant notification. Which application direction is most appropriate?",
answers: [
"Investigate Genesis G4LF products",
"Default to any G4 wall model",
"Use GCS ceiling speakers only",
"Use monitor modules as audible outputs"
],
correct: 0,
explanation: "Low-frequency requirement points to the G4LF family."
},
{
id: "fbq_037",
category: "Final Boss",
difficulty: "Medium",
product: "SLC vs NAC",
question: "Addressable detectors and pull stations are being wired. Which circuit should be your primary focus?",
answers: [
"SLC communication circuit",
"NAC output circuit",
"120 VAC branch circuit",
"Speaker circuit"
],
correct: 0,
explanation: "Addressable detectors and pull stations communicate with the fire alarm control panel over the Signaling Line Circuit (SLC). The NAC is used for notification-appliance output, not addressable-device communication."
},
{
id: "fbq_039",
category: "Final Boss",
difficulty: "Hard",
product: "HVAC Shutdown",
question: "A design review note says \"monitor module used to shut down AHU.\" What is the key application concern?",
answers: [
"Shutdown is a control-output action and may require control function",
"Monitor modules are always preferred for shutdown commands",
"AHU shutdown belongs on NAC notification circuits",
"No concern, monitor and control modules are interchangeable"
],
correct: 0,
explanation: "AHU shutdown is a commanded action, so control output is the core function to verify."
},
{
id: "fbq_040",
category: "Final Boss",
difficulty: "Hard",
product: "Tamper and Waterflow",
question: "A riser room has both waterflow and tamper contacts needing panel visibility. Which application framing is correct?",
answers: [
"Both are monitored inputs, typically supervised through monitor-module functions",
"Both require only control outputs",
"Both are notification appliances",
"Both should be treated as detector bases"
],
correct: 0,
explanation: "Waterflow and tamper are field input contacts that must be supervised and reported to the panel."
},
{
id: "fbq_041",
category: "Final Boss",
difficulty: "Hard",
product: "Door Holder Release",
question: "A sequence states that corridor smoke alarm must release magnetic door holders. Which functional path best fits that application?",
answers: [
"Alarm input initiates logic, then control output commands door-holder release",
"Alarm input directly powers door holders through SLC",
"NAC appliances monitor door-holder status",
"Isolator modules replace release control logic"
],
correct: 0,
explanation: "The alarm condition is input; releasing holders is output control. Both pieces are required in sequence."
},
{
id: "fbq_042",
category: "Final Boss",
difficulty: "Hard",
product: "Isolator Use",
question: "Why are isolator modules selected in larger loop designs beyond simple device identification?",
answers: [
"To limit fault impact by isolating shorted segments of the loop",
"To increase detector sensitivity",
"To power NAC horn circuits",
"To replace all monitor modules"
],
correct: 0,
explanation: "Isolators reduce the scope of short-circuit impact on the SLC by segmenting faults."
},
{
id: "fbq_043",
category: "Final Boss",
difficulty: "Hard",
product: "SIGA-CT2 Application",
question: "A package has two separate controlled actions at the same equipment location. Which module type should you consider before using two single-output modules?",
answers: [
"Dual output control module",
"Dual input monitor module",
"Isolator module",
"Remote LED indicator"
],
correct: 0,
explanation: "Two independent controlled outputs often map directly to a dual output control module approach."
},
{
id: "fbq_044",
category: "Final Boss",
difficulty: "Hard",
product: "SIGA-CC2 Application",
question: "A mechanical room provides two dry contacts that must each report separately. Which module function best aligns with that requirement?",
answers: [
"Dual input monitoring",
"Dual output control",
"Single output control",
"Notification output"
],
correct: 0,
explanation: "Two separate reporting contacts align with dual input monitor function."
},
{
id: "fbq_045",
category: "Final Boss",
difficulty: "Hard",
product: "FACP Logic",
question: "A junior estimator says field devices trigger outputs directly without panel logic. What is the best correction?",
answers: [
"The panel processes device inputs and then activates programmed outputs",
"Only NAC devices can trigger outputs directly",
"Modules bypass the panel in addressable systems",
"Inputs and outputs are independent with no panel relation"
],
correct: 0,
explanation: "The fire alarm control panel is the decision point that processes inputs and commands outputs by programming."
},

// Modules and Systems (15)
{
id: "fbq_046",
category: "Final Boss",
difficulty: "Easy",
product: "SLC",
question: "In an addressable architecture, what is the SLC primarily responsible for?",
answers: [
"Panel-to-device communication",
"Primary horn/strobe power",
"Battery charging",
"Building internet connectivity"
],
correct: 0,
explanation: "SLC is the communication path between the panel and addressable field devices."
},
{
id: "fbq_047",
category: "Final Boss",
difficulty: "Medium",
product: "NAC",
question: "Which system path typically powers horns and strobes?",
answers: [
"Notification Appliance Circuit (NAC)",
"Signaling Line Circuit (SLC)",
"120 VAC branch circuit",
"Telephone line"
],
correct: 0,
explanation: "The NAC is the output circuit that powers notification appliances such as horns and strobes. The SLC carries communication with addressable devices."
},
{
id: "fbq_049",
category: "Final Boss",
difficulty: "Medium",
product: "Monitor vs Control",
question: "Which pairing is functionally correct?",
answers: [
"Monitor module = input supervision; Control module = commanded output",
"Monitor module = commanded output; Control module = input supervision",
"Both are input-only devices",
"Both are output-only devices"
],
correct: 0,
explanation: "Monitor modules supervise inputs; control modules provide controlled outputs."
},
{
id: "fbq_050",
category: "Final Boss",
difficulty: "Medium",
product: "Relay Interface",
question: "Why are control relay modules common at interfaces to other building systems?",
answers: [
"They provide switching interfaces for panel-driven control actions",
"They convert SLC into NAC power",
"They replace all monitor modules",
"They eliminate field wiring supervision"
],
correct: 0,
explanation: "Relay modules provide switching behavior used to interface panel logic with external circuits."
},
{
id: "fbq_051",
category: "Final Boss",
difficulty: "Medium",
product: "Isolator Strategy",
question: "What systems-level benefit is gained when isolators are distributed around an SLC loop?",
answers: [
"Short faults are segmented so fewer devices lose communication",
"NAC current capacity increases",
"Device addresses become optional",
"Class B becomes equivalent to Class A"
],
correct: 0,
explanation: "Distributed isolators localize short-fault effects to loop segments."
},
{
id: "fbq_052",
category: "Final Boss",
difficulty: "Medium",
product: "Duct and HVAC",
question: "For duct detector applications, which two system functions are frequently paired?",
answers: [
"Input monitoring and output control",
"NAC and battery charging",
"Loop isolation and detector base sounder",
"Speaker zoning and door holder release"
],
correct: 0,
explanation: "Duct alarm contact reporting is an input, while HVAC shutdown is a control output."
},
{
id: "fbq_053",
category: "Final Boss",
difficulty: "Medium",
product: "Supervisory",
question: "A sprinkler control valve tamper condition is typically treated as what type of panel condition?",
answers: [
"Supervisory",
"Alarm",
"Normal",
"Disabled"
],
correct: 0,
explanation: "Tamper is typically supervisory because it indicates a system impairment state that needs attention."
},
{
id: "fbq_054",
category: "Final Boss",
difficulty: "Hard",
product: "Class A and Class B",
question: "A customer asks why Class A might be chosen over Class B on a critical loop. What is the strongest system-level reason?",
answers: [
"Class A return path helps maintain communication after a single open circuit",
"Class A removes the need for supervision",
"Class A always lowers installation labor",
"Class A eliminates module requirements"
],
correct: 0,
explanation: "Class A includes a return path that supports continued communication after one open fault condition."
},
{
id: "fbq_055",
category: "Final Boss",
difficulty: "Hard",
product: "SLC Troubles",
question: "A panel reports SLC trouble while NACs test normally. Which subsystem should be prioritized first in troubleshooting?",
answers: [
"SLC wiring and addressable device path",
"NAC appliance quantity",
"Audio amplifier tuning",
"Door holder magnet voltage"
],
correct: 0,
explanation: "When SLC trouble is present, start with SLC path integrity and connected addressable devices."
},
{
id: "fbq_056",
category: "Final Boss",
difficulty: "Hard",
product: "System Mapping",
question: "Which sequence correctly reflects how a typical fire event propagates in an addressable system?",
answers: [
"Initiating device input to panel logic to commanded outputs",
"Output activation to panel logic to initiating device input",
"NAC activation to detector polling to panel shutdown",
"Relay state change to input creation to panel bypass"
],
correct: 0,
explanation: "Inputs are received first, then the panel executes programmed output actions."
},
{
id: "fbq_057",
category: "Final Boss",
difficulty: "Hard",
product: "Mixed Field Interfaces",
question: "One riser room point needs waterflow alarm, valve tamper supervisory, and HVAC shutdown command. What best describes the required system functions?",
answers: [
"At least two monitored inputs plus one controlled output",
"One monitored input only",
"One controlled output only",
"NAC output only"
],
correct: 0,
explanation: "Waterflow and tamper are separate monitored inputs, and shutdown is a controlled output action."
},
{
id: "fbq_058",
category: "Final Boss",
difficulty: "Hard",
product: "Output Verification",
question: "An output command is not occurring, but the initiating input appears valid. Which systems-level check should come next?",
answers: [
"Verify output module path and programming logic for that control action",
"Replace all input devices first",
"Assume the panel is wrong and ignore",
"Change wire gauge before checking logic"
],
correct: 0,
explanation: "After confirming input, verify control path and programmed output behavior for that sequence."
},
{
id: "fbq_059",
category: "Final Boss",
difficulty: "Hard",
product: "Device Family Awareness",
question: "Why is distinguishing Signature modules from Genesis notification families important during quotation review?",
answers: [
"They serve different system roles, so misclassification can break BOM accuracy",
"They are physically identical and only branding differs",
"Both always appear on the same circuit type",
"Either family can replace the other without verification"
],
correct: 0,
explanation: "Signature modules and Genesis notification products have different system functions and selection criteria."
},
{
id: "fbq_060",
category: "Final Boss",
difficulty: "Hard",
product: "Panel and Field Coordination",
question: "A field note says \"detector directly releases door holder.\" What is the most accurate systems interpretation?",
answers: [
"Detector input is processed by panel logic, then a control output releases the holder",
"Detector directly powers the holder release in all addressable systems",
"Door holder release is always a NAC function",
"No panel involvement is required"
],
correct: 0,
explanation: "Addressable detector events are panel inputs; release actions are output commands from panel logic."
},

// Wiring and Connections (15)
{
id: "fbq_061",
category: "Final Boss",
difficulty: "Easy",
product: "18/2",
question: "What does the cable notation 18/2 indicate?",
answers: [
"18 AWG with two conductors",
"18 circuits at two amps",
"18-foot maximum run",
"Two separate 18-loop trunks"
],
correct: 0,
explanation: "18/2 means 18 AWG cable with two conductors."
},
{
id: "fbq_062",
category: "Final Boss",
difficulty: "Medium",
product: "AWG",
question: "Which conductor is larger in physical size?",
answers: [
"14 AWG",
"18 AWG",
"They are equal",
"Depends on color code"
],
correct: 0,
explanation: "Lower AWG number indicates larger conductor size."
},
{
id: "fbq_063",
category: "Final Boss",
difficulty: "Medium",
product: "Class B",
question: "A Class B SLC has an open between two devices. What is the most likely effect?",
answers: [
"Devices beyond the break lose communication",
"No impact because Class B auto-reroutes",
"Only one adjacent device is affected",
"The panel changes it to Class A automatically"
],
correct: 0,
explanation: "Class B has no return path, so communication beyond the break is typically lost."
},
{
id: "fbq_064",
category: "Final Boss",
difficulty: "Medium",
product: "Class A",
question: "Why is Class A commonly described as more fault tolerant than Class B for opens?",
answers: [
"It provides a return communication path",
"It has no supervision requirements",
"It removes the need for isolators",
"It doubles NAC power"
],
correct: 0,
explanation: "Class A return path allows communication continuity after a single open-circuit fault."
},
{
id: "fbq_065",
category: "Final Boss",
difficulty: "Medium",
product: "Relay Contacts",
question: "In relay terminology, what does NO represent?",
answers: [
"Normally Open",
"No Output",
"Not Operational",
"New Option"
],
correct: 0,
explanation: "NO means Normally Open contact state before relay activation."
},
{
id: "fbq_066",
category: "Final Boss",
difficulty: "Medium",
product: "Relay Contacts",
question: "In relay terminology, what does NC represent?",
answers: [
"Normally Closed",
"No Circuit",
"Not Common",
"New Contact"
],
correct: 0,
explanation: "NC means Normally Closed contact state before relay activation."
},
{
id: "fbq_067",
category: "Final Boss",
difficulty: "Medium",
product: "Relay COM",
question: "What is the COM terminal role on a relay contact set?",
answers: [
"Common reference terminal shared with NO and NC switching paths",
"Permanent control-voltage source",
"SLC addressing terminal",
"Notification power output"
],
correct: 0,
explanation: "COM is the common terminal used with NO or NC based on desired switching behavior."
},
{
id: "fbq_068",
category: "Final Boss",
difficulty: "Medium",
product: "SLC vs NAC",
question: "A technician wired horn/strobes on an SLC pair. What is the primary wiring concept mistake?",
answers: [
"Notification appliances should be on NAC output circuits",
"SLC is only for batteries",
"Horn/strobes require detector bases only",
"SLC cannot carry any supervised wiring"
],
correct: 0,
explanation: "SLC is communication for addressable devices; NAC is the output path for notification appliances."
},
{
id: "fbq_069",
category: "Final Boss",
difficulty: "Hard",
product: "Isolator Fault Handling",
question: "An SLC short occurs between two distributed isolators. What best describes expected behavior?",
answers: [
"The shorted segment is isolated and unaffected segments can keep communicating",
"Entire loop is always lost regardless of isolators",
"All NAC circuits shut down automatically",
"Panel converts short to open without segmentation"
],
correct: 0,
explanation: "Distributed isolators are used to confine short impact to a segment."
},
{
id: "fbq_070",
category: "Final Boss",
difficulty: "Hard",
product: "Troubleshooting Flow",
question: "A monitored point is not reporting correctly. Which troubleshooting order is most systematic?",
answers: [
"Check wiring and terminations, then module behavior/configuration, then field contact",
"Replace panel CPU first, then inspect field wiring",
"Swap detector bases first, then check inputs",
"Ignore wiring and only inspect software"
],
correct: 0,
explanation: "Start with common physical causes, then verify module/program setup, then field-device details."
},
{
id: "fbq_071",
category: "Final Boss",
difficulty: "Hard",
product: "Output Path Troubleshooting",
question: "A shutdown output fails while monitored alarm input is confirmed. What should be checked first in the output path?",
answers: [
"Control module wiring and intended output mapping",
"Detector sensitivity setting",
"Speaker zone labels",
"Strobe flash cadence"
],
correct: 0,
explanation: "If the initiating input is valid, move next to control output path integrity and mapping."
},
{
id: "fbq_072",
category: "Final Boss",
difficulty: "Hard",
product: "Circuit Identification",
question: "A plan note says \"return path to panel maintained for single open continuity.\" Which wiring class is implied?",
answers: [
"Class A",
"Class B",
"NAC only",
"IDC only"
],
correct: 0,
explanation: "A maintained return path for open-circuit tolerance describes Class A behavior."
},
{
id: "fbq_073",
category: "Final Boss",
difficulty: "Hard",
product: "Combined Wiring Reasoning",
question: "A device must report status and also trigger a separate external action. Which wiring/interface concept combination fits best?",
answers: [
"Monitor-input path plus control-output path",
"NAC path only",
"Isolator path only",
"Detector-base accessory only"
],
correct: 0,
explanation: "Reporting and commanding are separate functions and typically use different interface paths."
},
{
id: "fbq_074",
category: "Final Boss",
difficulty: "Hard",
product: "SLC Fault Priority",
question: "During a service call, panel shows SLC trouble and multiple \"missing device\" points downstream. What wiring interpretation is most likely?",
answers: [
"A loop wiring fault is interrupting communication to downstream addresses",
"All devices failed at once from sensitivity drift",
"NAC overcurrent disabled SLC addressing",
"Door-holder release logic caused detector dropout"
],
correct: 0,
explanation: "SLC wiring faults commonly produce loss-of-communication behavior for downstream devices."
},
{
id: "fbq_075",
category: "Final Boss",
difficulty: "Hard",
product: "Module Function Wiring",
question: "Which statement best prevents wiring-function confusion in design reviews?",
answers: [
"Monitor modules supervise inputs, while control modules drive commanded outputs",
"Monitor and control modules can be wired interchangeably",
"Control modules should be used for all field contacts",
"Monitor modules should power NAC appliances"
],
correct: 0,
explanation: "Keeping input supervision and output control roles distinct avoids wiring and BOM errors."
},

// Takeoff and Estimating (10)
{
id: "fbq_076",
category: "Final Boss",
difficulty: "Easy",
product: "Takeoff Process",
question: "Before entering quantities into a BOM from a drawing, what should be verified first?",
answers: [
"The drawing scope and device callouts are understood and complete",
"Only panel cabinet color",
"Only distributor stock levels",
"Only software revision history"
],
correct: 0,
explanation: "Accurate BOM entry starts with clear understanding of the actual drawing scope and callouts."
},
{
id: "fbq_077",
category: "Final Boss",
difficulty: "Medium",
product: "Detector and Base",
question: "A takeoff shows detector heads but does not clearly list bases. What is the best estimator action?",
answers: [
"Verify whether compatible detector bases must be added as separate line items",
"Assume every head ships with a base",
"Remove all detectors from BOM",
"Replace detectors with pull stations"
],
correct: 0,
explanation: "Detector heads and bases are often separate BOM items and need explicit verification."
},
{
id: "fbq_078",
category: "Final Boss",
difficulty: "Medium",
product: "Notification Selection",
question: "A drawing calls for multiple notification appliances but omits exact series. What should be confirmed before final part selection?",
answers: [
"Mounting/application requirements such as wall vs ceiling and any low-frequency requirement",
"Only the building postal code",
"Only panel manufacturer logo",
"Only pull station action type"
],
correct: 0,
explanation: "Series selection must align with application details, including mounting style and special signaling requirements."
},
{
id: "fbq_079",
category: "Final Boss",
difficulty: "Medium",
product: "Unknown Part Number",
question: "You receive a part number with no description in a bid list. What is the best first step?",
answers: [
"Verify the part number identity and function before adding it",
"Insert it immediately as a generic device",
"Delete it from scope without comment",
"Convert it to a random equivalent"
],
correct: 0,
explanation: "Part number validation should happen before BOM inclusion to avoid incorrect products."
},
{
id: "fbq_080",
category: "Final Boss",
difficulty: "Medium",
product: "Quantity Reconciliation",
question: "Your detector quantity does not reconcile with marked plan symbols. What should you do?",
answers: [
"Reconcile counts and resolve discrepancy before finalizing BOM",
"Average the quantities and proceed",
"Use prior project quantities instead",
"Ignore the mismatch if schedule is tight"
],
correct: 0,
explanation: "Quantity mismatches should be resolved before release to prevent ordering and scope errors."
},
{
id: "fbq_081",
category: "Final Boss",
difficulty: "Medium",
product: "Function Check",
question: "A line item appears to be a monitor module, but the sequence requires control action. What should an estimator verify?",
answers: [
"Whether the specified module function matches required system behavior",
"Only the wire color",
"Only cabinet dimensions",
"Only battery shelf life"
],
correct: 0,
explanation: "Estimating should validate that selected device function aligns with required application behavior."
},
{
id: "fbq_082",
category: "Final Boss",
difficulty: "Hard",
product: "Cross-Reference Review",
question: "A schedule calls for SIGA-CT1, while notes describe two independent outputs. What is the best next step?",
answers: [
"Flag the mismatch and verify whether a dual-output module is actually required",
"Keep CT1 and ignore notes",
"Convert all outputs to monitor points",
"Delete the schedule line"
],
correct: 0,
explanation: "Two independent outputs can indicate dual-output requirement, so the inconsistency should be verified."
},
{
id: "fbq_083",
category: "Final Boss",
difficulty: "Hard",
product: "BOM Risk Control",
question: "What is the biggest estimating risk of treating similar part numbers as interchangeable without verification?",
answers: [
"Function mismatch leading to incorrect BOM and rework",
"Faster procurement cycle",
"Higher panel polling speed",
"Automatic compatibility guarantees"
],
correct: 0,
explanation: "Similar naming does not guarantee equivalent function, and wrong substitutions can break application fit."
},
{
id: "fbq_084",
category: "Final Boss",
difficulty: "Hard",
product: "Application Validation",
question: "A product appears inconsistent with the drawing application. Which response is best?",
answers: [
"Pause release and verify requirement/product alignment with documented clarification",
"Ship as-is to preserve timeline",
"Replace with any available stock item",
"Drop the item and do not record the change"
],
correct: 0,
explanation: "Misalignment between application and product should be clarified before release."
},
{
id: "fbq_085",
category: "Final Boss",
difficulty: "Hard",
product: "Estimator Workflow",
question: "When should ambiguous device descriptions be clarified in the estimating workflow?",
answers: [
"Before BOM finalization and quote issue",
"After product shipment",
"Only if a customer complains",
"Never if part numbers look similar"
],
correct: 0,
explanation: "Clarifying ambiguity early prevents incorrect quoting, ordering delays, and rework."
},

// Real-World Sales Support Scenarios (15)
{
id: "fbq_086",
category: "Final Boss",
difficulty: "Easy",
product: "Customer Part Inquiry",
question: "A customer sends only \"SIGA-CT2\" and asks for pricing. What is your best first response step?",
answers: [
"Confirm product identity and intended application before final quote",
"Quote it as a monitor module immediately",
"Replace it with SIGA-CC2 without asking",
"Ignore the request until drawings arrive"
],
correct: 0,
explanation: "Validating identity and intent before pricing reduces application mismatch risk."
},
{
id: "fbq_087",
category: "Final Boss",
difficulty: "Easy",
product: "Unknown Device",
question: "During BOM build, you encounter a device you do not recognize. What is the strongest sales-support action?",
answers: [
"Verify part number and function before committing the line item",
"Delete the item to keep moving",
"Assume it is a standard detector",
"Auto-substitute any similar prefix"
],
correct: 0,
explanation: "Unrecognized parts should be validated before inclusion in quote or BOM."
},
{
id: "fbq_088",
category: "Final Boss",
difficulty: "Medium",
product: "Similar Part Numbers",
question: "Two similar part numbers exist in stock records. What must be verified before selecting one for a quote?",
answers: [
"Functional fit to the required application",
"Only which one has a shorter name",
"Only which one appears first alphabetically",
"Only which one has a newer carton"
],
correct: 0,
explanation: "Selection should be based on application-correct function, not superficial similarity."
},
{
id: "fbq_089",
category: "Final Boss",
difficulty: "Medium",
product: "Quote Consistency",
question: "A quote line appears inconsistent with drawing intent. What is the most professional next step?",
answers: [
"Document and request clarification before final submission",
"Submit anyway and revise after award",
"Remove all related devices",
"Assume drawing is wrong without review"
],
correct: 0,
explanation: "Escalating and documenting clarification protects accuracy and reduces downstream rework."
},
{
id: "fbq_090",
category: "Final Boss",
difficulty: "Medium",
product: "Field Input vs Output",
question: "A team member proposes using a control module to supervise a valve tamper input. What is the best correction?",
answers: [
"Tamper supervision is an input-monitoring function",
"Control modules are always used for tamper supervision",
"Tamper should be treated as notification output",
"Tamper points do not require panel visibility"
],
correct: 0,
explanation: "Valve tamper is an input condition that should be supervised through monitor functionality."
},
{
id: "fbq_091",
category: "Final Boss",
difficulty: "Medium",
product: "AHU Interface",
question: "A customer says \"we need duct detector shutdown too.\" Which follow-up best clarifies scope?",
answers: [
"Confirm both alarm-monitor input and shutdown-control output requirements",
"Ask only for cable color",
"Assume one monitor point covers shutdown",
"Skip clarification and issue quote"
],
correct: 0,
explanation: "Duct applications often include two distinct functions: reporting and commanded shutdown."
},
{
id: "fbq_092",
category: "Final Boss",
difficulty: "Medium",
product: "Base Selection",
question: "A project moves from standard boxes to 4-inch boxes late in review. Which item type may need immediate BOM verification?",
answers: [
"Detector base variants",
"Only panel CPU",
"Only network firewalls",
"Only pull station labels"
],
correct: 0,
explanation: "Footprint changes directly affect detector base variant selection such as standard vs 4-inch models."
},
{
id: "fbq_093",
category: "Final Boss",
difficulty: "Hard",
product: "Substitution Risk",
question: "What is the biggest risk when substituting CC2 for CT2 because both are \"2-channel\" modules?",
answers: [
"Confusing input supervision with output control functionality",
"Increased Class A fault tolerance",
"Automatic panel compatibility issues are impossible",
"Reduced need for sequence programming"
],
correct: 0,
explanation: "CC2 and CT2 serve different roles: CC2 monitors inputs while CT2 controls outputs."
},
{
id: "fbq_094",
category: "Final Boss",
difficulty: "Hard",
product: "Escalation Judgment",
question: "A schedule, riser, and notes conflict on module type. Which response reflects strong sales-support judgment?",
answers: [
"Escalate the conflict with a documented clarification request before release",
"Use the lowest-cost module and proceed",
"Pick the first listed module and avoid questions",
"Ignore all notes and follow only inventory"
],
correct: 0,
explanation: "Conflicting design sources require formal clarification to protect accuracy and accountability."
},
{
id: "fbq_095",
category: "Final Boss",
difficulty: "Hard",
product: "Fault Investigation",
question: "After installation, multiple downstream devices disappear on one loop segment. Which prior design decision is most relevant to fault containment?",
answers: [
"Isolator placement strategy",
"Pull station action type",
"Door holder finish color",
"Speaker grille shape"
],
correct: 0,
explanation: "Isolator distribution is directly tied to how much of a loop is affected by a short fault."
},
{
id: "fbq_096",
category: "Final Boss",
difficulty: "Hard",
product: "Customer Communication",
question: "A customer requests a fast quote but omits key application details. What is the best balance of speed and quality?",
answers: [
"Provide a quick preliminary response while clearly requesting required clarifications before final commitment",
"Issue final quote without clarifications",
"Refuse to respond until full package arrives",
"Replace missing details with assumptions and hide them"
],
correct: 0,
explanation: "A preliminary response can be timely, but final commitment should follow required technical clarification."
},
{
id: "fbq_097",
category: "Final Boss",
difficulty: "Hard",
product: "Inventory Selection",
question: "Inventory has SIGA-CR and SIGA-CRR. The requirement states reverse-polarity relay behavior. Which action is correct?",
answers: [
"Select the reverse-polarity relay variant and document the basis",
"Use either relay since both are equivalent",
"Choose the module with lower stock count",
"Replace with CT1 to simplify ordering"
],
correct: 0,
explanation: "The requirement explicitly calls for reverse-polarity behavior, which maps to the CRR variant."
},
{
id: "fbq_098",
category: "Final Boss",
difficulty: "Hard",
product: "Cross-Category Reasoning",
question: "A line item says \"SIGA-CC1 for AHU shutdown\" and another says \"SIGA-CT1 for duct alarm monitoring.\" What is the best diagnosis?",
answers: [
"The two module functions appear reversed relative to typical application roles",
"Both lines are clearly correct and need no review",
"Both should be replaced with isolator modules",
"Both should be moved to NAC-only design"
],
correct: 0,
explanation: "CC1 is monitor input and CT1 is control output, so the listed intents appear swapped and should be corrected."
},
{
id: "fbq_099",
category: "Final Boss",
difficulty: "Hard",
product: "BOM Quality Control",
question: "What is the strongest indicator that a BOM is ready for final customer release?",
answers: [
"Part numbers, functions, and application context are reconciled with resolved ambiguities",
"All line items have short descriptions only",
"Every item uses the same product family",
"No questions were asked during review"
],
correct: 0,
explanation: "Release readiness depends on verified functional fit and resolution of ambiguities, not on superficial completeness."
},
{
id: "fbq_100",
category: "Final Boss",
difficulty: "Hard",
product: "Sales Support Decision Making",
question: "When technical uncertainty remains after internal review, what is the best next step before quote finalization?",
answers: [
"Request targeted clarification and record assumptions explicitly",
"Proceed silently with best guess",
"Delete uncertain items to avoid delay",
"Use unrelated historical project parts"
],
correct: 0,
explanation: "Explicit clarification and documented assumptions are core to high-quality sales-support decisions."
}

];
