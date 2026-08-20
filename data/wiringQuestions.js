// ===============================================
// Ban-Koe Academy
// Wiring & Connections Question Bank
// All questions grounded in existing Academy material.
// ===============================================

const wiringQuestions = [

// -----------------------------------------------
// SLC BASICS
// -----------------------------------------------

{
id: 3,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "Which of the following devices typically communicates on the SLC?",
answers: [
"Addressable smoke detector",
"Horn/strobe",
"Battery charger",
"Power supply"
],
correct: 0,
explanation: "Addressable smoke detectors communicate their state to the panel over the SLC. Notification appliances such as horn/strobes are powered by the NAC, not the SLC."
},
{
id: 5,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "What is the key operational difference between the SLC and the NAC?",
answers: [
"The SLC carries device communication; the NAC provides output power to notification appliances",
"The SLC provides alarm output power; the NAC carries device communication",
"Both circuits serve the same function in the system",
"The SLC only works with conventional devices; the NAC is addressable"
],
correct: 0,
explanation: "The SLC is a communication circuit: devices report status and receive commands over it. The NAC is an output circuit that powers notification appliances such as horn/strobes. Understanding this distinction helps you trace a signal path or troubleshoot the right circuit."
},

// -----------------------------------------------
// NAC BASICS
// -----------------------------------------------

{
id: 6,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What does NAC stand for?",
answers: [
"Notification Appliance Circuit",
"Network Access Control",
"Notification Alarm Channel",
"Neutral and Common circuit"
],
correct: 0,
explanation: "NAC stands for Notification Appliance Circuit. It provides output power to notification devices such as horns, strobes, and horn/strobes."
},

{
id: 7,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "Which devices are typically powered by a NAC?",
answers: [
"Horns, strobes, and horn/strobes",
"Addressable smoke detectors",
"Fire alarm control panels",
"Monitor modules on the SLC"
],
correct: 0,
explanation: "The NAC provides output power to notification appliances such as horns, strobes, and horn/strobes. Addressable initiating devices communicate on the SLC, not the NAC."
},

{
id: 8,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "During troubleshooting, horn/strobes have no output during an alarm while addressable devices still communicate. Which circuit should be checked first?",
answers: [
"NAC",
"SLC",
"IDC",
"LAN"
],
correct: 0,
explanation: "Check the NAC first because it provides notification-appliance output power. Continued SLC communication does not prove that the NAC output path is operating."
},

// -----------------------------------------------
// WIRE TYPES / GAUGE
// -----------------------------------------------

{
id: 11,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "Which conductor is physically larger: 18 AWG or 14 AWG?",
answers: [
"14 AWG",
"18 AWG",
"They are exactly the same size",
"It depends on the insulation color"
],
correct: 0,
explanation: "In the American Wire Gauge (AWG) system, a lower number indicates a larger conductor. 14 AWG is physically larger than 18 AWG."
},

{
id: 13,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A fire alarm specification calls out \"18/2\" wire for a run of addressable devices. What information does this notation provide?",
answers: [
"18 AWG conductors, 2 conductors in the cable",
"18 conductors total, 2 AWG gauge",
"18-foot run, 2-circuit home run",
"18 watts maximum load, 2-amp rating"
],
correct: 0,
explanation: "Wire notation always follows the pattern: gauge AWG / number of conductors. So 18/2 = 18 AWG gauge with two conductors in the cable."
},

// -----------------------------------------------
// CLASS A / CLASS B WIRING
// -----------------------------------------------

{
id: 15,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Why is Class A wiring considered more fault-tolerant than Class B for the same addressable circuit?",
answers: [
"Class A routes a return path back to the panel, so a single open circuit does not cut off all remaining devices",
"Class A uses more conductors so it carries more devices per loop",
"Class A automatically detects and repairs wiring faults",
"Class A eliminates the need for supervision"
],
correct: 0,
explanation: "Class A wiring returns to the panel, creating a complete loop. If one wire breaks, communication can still reach devices from the opposite direction. Class B has no return path — a single break cuts off everything beyond it."
},

// -----------------------------------------------
// MONITOR vs CONTROL MODULES
// -----------------------------------------------

{
id: 17,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What is the primary purpose of a monitor module in a fire alarm system?",
answers: [
"To supervise an input contact and report its condition to the panel",
"To activate external equipment on command",
"To power notification appliances",
"To extend the physical range of the NAC"
],
correct: 0,
explanation: "A monitor module supervises a contact or input device and reports its state to the fire alarm panel. A useful memory aid: it answers \"What's happening?\" — it listens to an input and reports."
},

{
id: 18,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What is the primary purpose of a control module in a fire alarm system?",
answers: [
"To provide a controlled output to an external device",
"To supervise an input contact",
"To carry addressable device communication on the SLC",
"To charge backup batteries"
],
correct: 0,
explanation: "A control module provides a controlled output that causes an external device to change state or take an action. A useful memory aid: it answers \"Make something happen.\" — it commands and controls."
},

{
id: 19,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "A waterflow switch needs to send its alarm condition to the fire alarm system. Which type of module function is most directly involved?",
answers: [
"Monitor input",
"Control output",
"Notification output",
"Isolator function"
],
correct: 0,
explanation: "A waterflow switch is an input device — it is reporting a condition (water flow detected). A monitor module supervises that input and brings the information to the panel."
},

{
id: 20,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "The fire alarm system needs to command an HVAC unit to shut down during an alarm condition. Which type of module function is most directly involved?",
answers: [
"Control output",
"Monitor input",
"Isolator function",
"NAC signal module"
],
correct: 0,
explanation: "Shutting down HVAC is a control action — the system is commanding something to stop. A control module provides that output function."
},

{
id: 21,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A duct smoke detector has an alarm contact that must report its condition to the fire alarm panel. Is this primarily a monitoring or control function?",
answers: [
"Monitoring — the detector's alarm contact is an input to the system",
"Control — the detector activates the panel directly",
"Both equally — monitoring and control are the same function",
"Neither — duct detectors do not interface with the panel"
],
correct: 0,
explanation: "The duct detector's alarm contact is an input — it reports a condition. A monitor module is used to supervise that contact and communicate its state to the panel. Control functions are for outputs that command external equipment."
},

{
id: 22,
category: "Wiring",
difficulty: "Medium",
product: "SIGA-CC1 Single Input Signal Module",
question: "Which Edwards Signature module model is identified as a Single Input Signal Module?",
answers: [
"SIGA-CC1",
"SIGA-CT1",
"SIGA-CR",
"SIGA-IM2"
],
correct: 0,
explanation: "Official Edwards documentation identifies the SIGA-CC1 as a Single Input Signal Module for signal/riser circuit applications."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0237", manufacturer: "Edwards", verified: true, sourcePage: "1-2, 6", sourceSection: "Overview; Application; Ordering Information" }
},

{
id: 23,
category: "Wiring",
difficulty: "Medium",
product: "SIGA-CT1 Single Input Module",
question: "Which Edwards Signature module model is identified as a Single Input Module?",
answers: [
"SIGA-CT1",
"SIGA-CC1",
"SIGA-CR",
"SIGA-UM"
],
correct: 0,
explanation: "Official Edwards documentation identifies the SIGA-CT1 as a Single Input Module."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0241", manufacturer: "Edwards", verified: true, sourcePage: "1-2, 4", sourceSection: "Overview; Application; Ordering Information" }
},

{
id: 24,
category: "Wiring",
difficulty: "Hard",
product: "SIGA-CT2 Dual Input Module",
question: "A project requires two Signature input channels at the same location. Which Edwards Signature module is described as a dual input module?",
answers: [
"SIGA-CT2",
"SIGA-CT1",
"SIGA-CC2",
"SIGA-CR"
],
correct: 0,
explanation: "Official Edwards documentation identifies the SIGA-CT2 as a Dual Input Module."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0241", manufacturer: "Edwards", verified: true, sourcePage: "1-2, 4", sourceSection: "Overview; Application; Ordering Information" }
},

// -----------------------------------------------
// RELAY CONCEPTS
// -----------------------------------------------

{
id: 25,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What does the relay terminal designation \"NO\" stand for?",
answers: [
"Normally Open",
"Not Operational",
"New Output",
"No Override"
],
correct: 0,
explanation: "NO stands for Normally Open. This contact is open in the relay's normal (non-activated) state and closes when the relay changes state."
},

{
id: 26,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What does the relay terminal designation \"NC\" stand for?",
answers: [
"Normally Closed",
"New Circuit",
"Not Connected",
"No Current"
],
correct: 0,
explanation: "NC stands for Normally Closed. This contact is closed in the relay's normal state and opens when the relay changes state."
},

{
id: 27,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What is the role of the COM terminal on a relay?",
answers: [
"It is the common reference point for the relay output circuit",
"It is the command terminal that triggers the relay from the panel",
"It connects directly to the notification appliance",
"It provides the SLC address for the relay module"
],
correct: 0,
explanation: "COM (Common) is the shared reference contact. The NC and NO contacts both reference COM. The controlled circuit connects between COM and either NO or NC depending on the desired behavior."
},

{
id: 28,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Why is a relay module often used when a fire alarm system needs to interface with an external building system?",
answers: [
"It provides a switching function between the fire alarm output and the external circuit without requiring a direct electrical connection between the two systems",
"It replaces the notification appliance circuit for that interface",
"It eliminates the need for addressable devices on the SLC",
"It increases the total number of SLC loops"
],
correct: 0,
explanation: "A relay provides an electrically isolated switching function. The fire alarm system commands the relay, which then switches a separate external circuit. This interface approach is appropriate when two electrical systems need to interact without being directly wired together."
},

{
id: 29,
category: "Wiring",
difficulty: "Medium",
product: "SIGA-CR Control Relay Module",
question: "The SIGA-CR is described as providing Form C relay contact behavior. In which type of application is this module used?",
answers: [
"Interfacing fire alarm panel commands to controlled external circuits",
"Controlling door closers, fans, or dampers with a Form C dry relay contact",
"Reversing 24 VDC polarity to activate SIGA-AB4G sounder bases",
"Isolating a shorted Class A loop section"
],
correct: 0,
explanation: "E85001-0239 documents SIGA-CR as a Form C dry relay contact for external appliances such as door closers, fans, and dampers; the relay contact state is not supervised.",
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0239", manufacturer: "Edwards", verified: true, sourcePage: "1-2", sourceSection: "Overview; Application" }
},

// -----------------------------------------------
// ISOLATOR MODULES
// -----------------------------------------------

{
id: 30,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What is the primary purpose of an isolator module on an addressable circuit?",
answers: [
"On a Class A circuit, to isolate a shorted section so the remaining loop can continue operating",
"To provide additional power to the SLC",
"To replace a damaged detection device",
"To automatically reset the panel after a fault"
],
correct: 0,
explanation: "E85001-0272 documents SIGA-IM2 for Class A circuits: it isolates a shorted section so the remaining data loop can continue operating.",
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0272 (printed page 1 identifies E85001-0271)", manufacturer: "Edwards", verified: true, sourcePage: "1-3", sourceSection: "Overview; Application; Typical Wiring" }
},

{
id: 31,
category: "Wiring",
difficulty: "Easy",
product: "SIGA-IM2 Isolator Module",
question: "Which Edwards Signature product is specifically identified as an Intelligent Isolator Module?",
answers: [
"SIGA-IM2",
"SIGA-CT1",
"SIGA-CC1",
"SIGA-CR"
],
correct: 0,
explanation: "The SIGA-IM2 is the Intelligent Isolator Module in the Edwards Signature addressable module family. It is used to isolate shorted sections of an addressable circuit."
},

{
id: 32,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "On an addressable SLC loop, a short circuit occurs in one section. If an isolator is present near the fault, what does it do?",
answers: [
"On the documented Class A circuit, it electronically isolates the shorted section, allowing the remaining loop to continue communicating",
"It increases loop power to overcome the short",
"It automatically repairs the wiring damage",
"It generates an alarm condition and silences the system"
],
correct: 0,
explanation: "E85001-0272 states that SIGA-IM2 is used only on Class A circuits and isolates the shorted section so the remaining data loop can continue operating.",
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0272 (printed page 1 identifies E85001-0271)", manufacturer: "Edwards", verified: true, sourcePage: "1-3", sourceSection: "Overview; Application; Typical Wiring" }
},

{
id: 33,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "Why are isolator modules typically placed at intervals throughout an addressable loop rather than only at one location near the panel?",
answers: [
"On a Class A circuit, to limit the number of devices that lose communication when a short fault occurs at any given point",
"To increase the maximum device count on the loop",
"To provide additional power distribution at each segment",
"To create separate independent SLC networks"
],
correct: 0,
explanation: "Isolators placed throughout a loop limit the scope of a fault. Without distributed isolators, a single short anywhere on the loop affects all devices between the panel and the fault. With isolators at intervals, only the segment between two adjacent isolators is lost."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0272 (printed page 1 identifies E85001-0271)", manufacturer: "Edwards", verified: true, sourcePage: "1-3", sourceSection: "Overview; Application; Typical Wiring" }
},

// -----------------------------------------------
// DUCT SMOKE DETECTORS
// -----------------------------------------------

{
id: 34,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What is the primary purpose of a duct smoke detector?",
answers: [
"To detect smoke moving through HVAC ductwork",
"To notify building occupants directly during an alarm",
"To control elevator recall functions",
"To power notification appliances in the HVAC space"
],
correct: 0,
explanation: "A duct smoke detector is installed in HVAC ductwork to sample air moving through the system and detect smoke. HVAC systems can transport smoke throughout a building, making duct detection an important part of life safety design."
},

{
id: 37,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "In addition to monitoring the duct detector's alarm contact, the fire alarm system also needs to shut down the HVAC unit when smoke is detected. Which additional function is required?",
answers: [
"A control output function to command the HVAC unit to stop",
"A second monitor input for the HVAC unit",
"An additional SLC device address for the same module",
"A notification appliance circuit connected to the HVAC unit"
],
correct: 0,
explanation: "Shutting down the HVAC unit is a control action — the system must send a command output. This is separate from monitoring the detector's alarm contact. A duct detector application may require both a monitor input (for the detector) and a control output (for the HVAC shutdown)."
},

{
id: 38,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "A project includes four air handling units, each with a duct smoke detector that must report an alarm AND trigger an HVAC shutdown. What combination of module functions would you expect to investigate for each unit?",
answers: [
"A monitor input (for the detector alarm contact) and a control output (for the HVAC shutdown)",
"Two monitor inputs and no control outputs",
"One control output only — no monitoring needed",
"Notification appliances connected to the HVAC circuit"
],
correct: 0,
explanation: "Each AHU with a duct detector scenario typically requires both functions: a monitor input to receive the detector's alarm condition AND a control output to execute the HVAC shutdown. These are two distinct fire alarm functions that may require separate modules."
},

// -----------------------------------------------
// HVAC SHUTDOWN
// -----------------------------------------------

{
id: 39,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Why might a fire alarm system be designed to shut down HVAC equipment during an alarm?",
answers: [
"To help prevent smoke from spreading through the building via the air handling system",
"To reduce electrical costs during an alarm event",
"To test the HVAC system as part of the fire alarm sequence",
"To extend battery life during an emergency"
],
correct: 0,
explanation: "HVAC systems can transport smoke from a fire throughout a building. Shutting down the air handling equipment helps limit smoke spread, which is an important life-safety objective."
},

// -----------------------------------------------
// OTHER INTERFACES
// -----------------------------------------------

{
id: 42,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "A magnetic door holder keeps a fire door open during normal building operation. What happens to the holder when the fire alarm activates?",
answers: [
"It releases, allowing the fire door to close",
"It holds the door more firmly to prevent panic evacuation",
"It activates a horn/strobe notification appliance",
"It resets the fire alarm panel"
],
correct: 0,
explanation: "Magnetic door holders release when the fire alarm activates, allowing fire doors to close. Closing fire doors helps contain smoke and fire to a section of the building, which is an important life-safety function."
},

{
id: 43,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Which fire alarm function is used to command a magnetic door holder to release?",
answers: [
"Control output",
"Monitor input",
"NAC notification output",
"Battery backup function"
],
correct: 0,
explanation: "Releasing a door holder is a control action — the fire alarm system commands the device to change state. A control module or relay provides that output function as part of the fire alarm sequence of operations."
},

{
id: 45,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "A sprinkler valve tamper switch needs to report to the fire alarm panel. What type of system condition does a tamper switch on a sprinkler control valve normally generate?",
answers: [
"Supervisory",
"Alarm",
"Trouble",
"Normal"
],
correct: 0,
explanation: "Valve tamper switches typically generate supervisory conditions. A supervisory condition indicates that a protected feature — such as a sprinkler control valve — may not be in its fully operational position, which requires attention but is not necessarily a fire alarm."
},

// -----------------------------------------------
// TROUBLESHOOTING
// -----------------------------------------------

{
id: 46,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A fire alarm panel shows a trouble condition on an addressable SLC. Which category of problem should you investigate first?",
answers: [
"Wiring and connectivity of the SLC circuit",
"Battery voltage at the panel only",
"Notification appliance output circuits",
"Occupant use of the building"
],
correct: 0,
explanation: "A trouble on an addressable SLC suggests a wiring or connectivity issue — an open, short, or grounded conductor. Systematic troubleshooting starts with the circuit itself before moving to device function or configuration."
},

{
id: 47,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "An HVAC shutdown control output is not producing the expected response. What is the most logical first step?",
answers: [
"Verify the control module and its wiring back to the panel",
"Replace all the detection devices in the building",
"Reset the entire fire alarm system and observe",
"Assume the fire alarm panel is defective"
],
correct: 0,
explanation: "When a control output is not performing as expected, the most systematic first step is to verify the control module, its wiring, and the connection to the controlled equipment. This is more efficient than replacing devices or resetting the system before the cause is identified."
},

{
id: 48,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A notification appliance circuit is not operating correctly. Which categories of problems should be investigated?",
answers: [
"Circuit wiring integrity, power, device compatibility, and circuit configuration",
"SLC addressing issues only",
"Only the panel CPU and software version",
"Monitor module malfunction only"
],
correct: 0,
explanation: "NAC troubleshooting typically covers several areas: circuit integrity (opens or shorts), available power, device compatibility, and circuit configuration. A systematic approach investigates each area rather than focusing on only one."
},

{
id: 49,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "What is the most significant risk of a short circuit fault on an addressable SLC that has NO isolators installed?",
answers: [
"Communication to all devices on the loop may be lost",
"Only the single device closest to the fault is affected",
"The panel automatically reroutes around the short",
"A supervisory condition only is generated"
],
correct: 0,
explanation: "Without isolators, a short circuit on an SLC can disable communication to all devices on the affected loop. Isolators limit the scope of a fault to the segment between adjacent isolators — which is why their placement is an important design consideration."
},

{
id: 50,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "A fire alarm panel indicates that a monitored external input is not being received correctly. What is the most systematic troubleshooting approach?",
answers: [
"Check wiring and termination first, then verify module function and configuration, then investigate the external device",
"Replace the module first, then investigate wiring afterward",
"Ignore the issue until an alarm condition occurs",
"Only check the external device — never the module or wiring"
],
correct: 0,
explanation: "Systematic troubleshooting of an input monitoring problem starts with the most accessible and common causes: wiring and termination. Then verify that the monitor module is functioning and programmed correctly, then investigate the external device. Starting with module replacement before confirming wiring is correct wastes time and cost."
},

{
id: 51,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "Why is a systematic troubleshooting approach important when diagnosing fire alarm wiring and interface issues?",
answers: [
"Multiple different root causes can produce the same symptom, so random replacement is inefficient and may not solve the real problem",
"All wiring faults produce unique fault codes that identify the exact cause",
"The panel always identifies the specific component that has failed",
"Manufacturer documentation is not needed once you have experience"
],
correct: 0,
explanation: "Fire alarm wiring problems can share symptoms across different root causes. A device not communicating could be a wire break, connection problem, module failure, or configuration error. A systematic approach — checking from wiring and connections outward — avoids wasted effort and identifies the real root cause."
},

{
id: 52,
category: "Wiring",
difficulty: "Easy",
product: "SIGA-DDOS Intelligent Duct Smoke Detector",
question: "Which terminals are provided for the SIGA-DDOS onboard auxiliary relay?",
answers: [
"RELAY_NC, RELAY_C, and RELAY_NO",
"NAC1 and NAC2 only",
"SLC+ and SLC- only",
"EOL and Trouble only"
],
correct: 0,
explanation: "The SIGA-DDOS wiring diagram identifies RELAY_NC, RELAY_C, and RELAY_NO terminals for its built-in Form C auxiliary relay."
},

{
id:53,
category:"Wiring",
difficulty:"Medium",
product:"G4LF Genesis LED Wall-Mount Low-Frequency Horn",
question:"Which documented Genesis specification gives the applicable wiring range?",
answers:["12–18 AWG","16–33 VDC operating voltage","15, 30, 75, or 110 candela","GRSW-10 room-side wiring plate"],
correct:0,
explanation:"E85001-1052 specifies 12 to 18 AWG in-out screw terminals for G4LF Series appliances.",
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-1052", manufacturer: "Edwards", verified: true, sourcePage: "1, 6", sourceSection: "Standard Features; Specifications" }
},
{
id:54,
category:"Wiring",
difficulty:"Medium",
product:"GRSW-10 Room-Side Wiring Plate",
question:"What installation relationship does GRSW-10 represent?",
answers:["The 4-inch octagon box adapter plate","The red device/cover removal tool","The required room-side wiring plate ordered separately in packs of 10","The white surface-mount box"],
correct:2,
explanation:"GRSW-10 is the required room-side wiring plate and is ordered separately in packs of 10."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-1052", manufacturer: "Edwards", verified: true, sourcePage: "2, 5-6", sourceSection: "Installation; Accessories; Specifications" }
},
{
id:55,
category:"Wiring",
difficulty:"Hard",
product:"GOCT 4-Inch Octagon Box Adapter Plate",
question:"A G4LF appliance is specified on a 4-inch octagon box. Which documented component should the estimator verify?",
answers:["GRSW-10 room-side wiring plate","GRT-10 device and cover removal tool, 10-pack","G4WSB white wall 4-inch surface-mount box","GOCT 4-inch octagon box adapter plate"],
correct:3,
explanation:"E85001-1052 states that GOCT is required when installing a G4LF Series appliance onto a 4-inch octagon box.",
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-1052", manufacturer: "Edwards", verified: true, sourcePage: "2, 5", sourceSection: "Installation; Accessories" }
},
{
id:57,
category:"Wiring",
difficulty:"Medium",
product:"G1A, G1V, and G1AV Genesis LED Appliances",
question:"Which functional distinction matters when connecting a G1 notification appliance to the planned notification circuit?",
answers:["All G1 models are speaker-strobes","G1A is horn, G1V is strobe, and G1AV is horn-strobe","G1V is horn-only and G1A is strobe-only","G1AV is a detector base"],
correct:1,
explanation:"The G1 family separates audible, visual, and combined audible/visual functions: G1A horn, G1V strobe, G1AV horn-strobe."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0667", manufacturer: "Edwards", verified: true, sourcePage: "5", sourceSection: "Model Number Syntax, Appliances" }
},
{
id:58,
category:"Wiring",
difficulty:"Hard",
product:"G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe",
question:"A wall notification circuit requires both audible and visual output, and the schedule identifies G1AVRF. Which device function should the installer expect?",
answers:["Horn only","Strobe only","Horn-strobe","Speaker-strobe"],
correct:2,
explanation:"G1AV identifies the wall-mounted horn-strobe function; RF identifies the red FIRE-marked variant."
,
source: { sourceType: "Edwards Datasheet", sourceDocument: "E85001-0667", manufacturer: "Edwards", verified: true, sourcePage: "5", sourceSection: "Model Number Syntax, Appliances; Notification Appliances Color Marking" }
}

];
