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
id: 2,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What is the primary function of the SLC in an addressable fire alarm system?",
answers: [
"Carry communication between the panel and addressable devices",
"Provide power to notification appliances",
"Supply battery backup to the panel",
"Monitor water pressure in the sprinkler system"
],
correct: 0,
explanation: "The SLC is the communication backbone of an addressable system. Every addressable device reports its status to the panel and receives commands over this circuit."
},

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
id: 4,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A project requires connecting addressable smoke detectors and addressable pull stations to the fire alarm panel. Which circuit are these devices most likely connected to?",
answers: [
"SLC",
"NAC",
"120 VAC",
"Speaker circuit"
],
correct: 0,
explanation: "Addressable smoke detectors and pull stations communicate through the SLC. The NAC is used for notification appliances, not initiating devices."
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
question: "A project includes horn/strobes throughout a building that need to operate during an alarm. Which circuit powers these devices?",
answers: [
"NAC",
"SLC",
"IDC",
"LAN"
],
correct: 0,
explanation: "Notification appliances are powered by the Notification Appliance Circuit (NAC). The SLC carries communication for addressable devices — it does not power notification output."
},

{
id: 9,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Which statement best describes the relationship between the SLC and NAC circuits?",
answers: [
"The SLC handles addressable device communication; the NAC handles notification appliance output",
"Both circuits carry device communication to the panel",
"The NAC handles addressable device communication; the SLC handles notification output",
"Both circuits carry output power only"
],
correct: 0,
explanation: "The SLC and NAC serve completely different functions. The SLC is for communication with addressable devices. The NAC is for powering notification output. Knowing which circuit does what is essential for reading drawings, troubleshooting, and quoting."
},

// -----------------------------------------------
// WIRE TYPES / GAUGE
// -----------------------------------------------

{
id: 10,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "What does the \"/2\" indicate in the wire notation \"18/2\"?",
answers: [
"Two conductors",
"Two circuits",
"Two panels",
"Two amps"
],
correct: 0,
explanation: "The /2 notation indicates the number of conductors in the cable. 18/2 means 18 AWG wire with two conductors. This notation is commonly used in fire alarm wiring specifications and training materials."
},

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
id: 12,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "Of the common conductor sizes 18 AWG, 14 AWG, and 12 AWG, which has the largest conductors?",
answers: [
"12 AWG",
"14 AWG",
"18 AWG",
"They are all the same conductor size"
],
correct: 0,
explanation: "In the AWG system, the lower the gauge number, the larger the conductor. 12 AWG is larger than 14 AWG, which is larger than 18 AWG."
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
id: 14,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Which wiring class does NOT route a return path back to the fire alarm panel?",
answers: [
"Class B",
"Class A",
"Both provide a return path",
"Neither provides a return path"
],
correct: 0,
explanation: "Class B wiring does not loop back to the panel. A single open circuit at any point will cut off communication to all devices beyond the break. Class A includes a return path, allowing the loop to communicate from both ends."
},

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

{
id: 16,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "A fire alarm system uses Class B wiring on an addressable SLC. A wire break occurs between two devices. What is the most likely impact?",
answers: [
"All devices beyond the break lose communication with the panel",
"No impact — Class B handles this condition automatically",
"Only the device immediately adjacent to the break is affected",
"The panel automatically reroutes communication around the break"
],
correct: 0,
explanation: "With Class B wiring, an open circuit cuts off communication to every device beyond the break point. This is a key reason why Class A is used in applications where continuity of communication past a single fault is required."
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
product: "SIGA-CC1 Single Input Monitor Module",
question: "Which Edwards Signature module model is identified as a Single Input Monitor Module?",
answers: [
"SIGA-CC1",
"SIGA-CT1",
"SIGA-CR",
"SIGA-IM2"
],
correct: 0,
explanation: "The SIGA-CC1 is the Single Input Monitor Module in the Edwards Signature addressable module family. It supervises one initiating input circuit and communicates its state to the panel over the SLC."
},

{
id: 23,
category: "Wiring",
difficulty: "Medium",
product: "SIGA-CT1 Single Output Control Module",
question: "Which Edwards Signature module model is identified as a Single Output Control Module?",
answers: [
"SIGA-CT1",
"SIGA-CC1",
"SIGA-CR",
"SIGA-UM"
],
correct: 0,
explanation: "The SIGA-CT1 is the Single Output Control Module in the Edwards Signature family. It provides one supervised output channel and is activated by the panel through programmed cause-and-effect logic."
},

{
id: 24,
category: "Wiring",
difficulty: "Hard",
product: "SIGA-CT2 Dual Output Control Module",
question: "A project requires two independently controlled output functions at the same location. Which Edwards Signature module is described as a dual output control module?",
answers: [
"SIGA-CT2",
"SIGA-CT1",
"SIGA-CC2",
"SIGA-CR"
],
correct: 0,
explanation: "The SIGA-CT2 is the Dual Output Control Module, providing two independently supervised output channels that can be activated by panel logic. The SIGA-CT1 provides a single output channel."
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
"Powering addressable detectors on the SLC",
"Providing output to horn/strobe notification appliances",
"Isolating shorted loop segments"
],
correct: 0,
explanation: "The SIGA-CR Control Relay Module features Form C relay contacts and is used for auxiliary equipment control — interfacing panel commands to external circuits that need to change state when a fire alarm condition occurs."
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
"To help isolate a shorted section so the rest of the loop can continue operating",
"To provide additional power to the SLC",
"To replace a damaged detection device",
"To automatically reset the panel after a fault"
],
correct: 0,
explanation: "An isolator electronically isolates a shorted section of an addressable circuit. The remaining portions of the loop beyond the isolator can continue to communicate with the panel, preserving system coverage during a fault."
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
"It electronically isolates the shorted section, allowing devices on the rest of the loop to continue communicating",
"It increases loop power to overcome the short",
"It automatically repairs the wiring damage",
"It generates an alarm condition and silences the system"
],
correct: 0,
explanation: "When a short occurs on an addressable loop, an isolator can electronically disconnect the affected segment. Devices on the far side of the isolator maintain communication with the panel, limiting the scope of the fault."
},

{
id: 33,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "Why are isolator modules typically placed at intervals throughout an addressable loop rather than only at one location near the panel?",
answers: [
"To limit the number of devices that lose communication when a short fault occurs at any given point",
"To increase the maximum device count on the loop",
"To provide additional power distribution at each segment",
"To create separate independent SLC networks"
],
correct: 0,
explanation: "Isolators placed throughout a loop limit the scope of a fault. Without distributed isolators, a single short anywhere on the loop affects all devices between the panel and the fault. With isolators at intervals, only the segment between two adjacent isolators is lost."
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
id: 35,
category: "Wiring",
difficulty: "Easy",
product: "",
question: "Where is a duct smoke detector typically installed?",
answers: [
"Inside HVAC ductwork",
"On the ceiling of occupied spaces like a standard detector",
"Inside the fire alarm control panel enclosure",
"On the exterior of the building near air intakes"
],
correct: 0,
explanation: "Duct smoke detectors are installed within HVAC ductwork to monitor air moving through the system. They are a specialized detector designed for that specific environment."
},

{
id: 36,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A duct smoke detector has an alarm contact that needs to report its condition to the fire alarm panel. Which module function is involved?",
answers: [
"Monitor input — the detector contact is an input reporting a condition",
"Control output — the detector activates the panel directly",
"NAC output — the duct detector is a notification appliance",
"Isolator function — to contain the duct fault"
],
correct: 0,
explanation: "The duct detector's alarm contact is an input — it reports that smoke was detected. A monitor module supervises that contact and communicates the alarm status to the panel over the SLC."
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

{
id: 40,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "Which type of fire alarm function is used to send a shutdown command to HVAC equipment?",
answers: [
"Control output",
"Monitor input",
"Supervisory input",
"NAC notification output"
],
correct: 0,
explanation: "Stopping HVAC equipment requires a control output — the fire alarm system must actively command the equipment to change state. A monitor input only reports conditions; it does not produce a control command on its own."
},

{
id: 41,
category: "Wiring",
difficulty: "Hard",
product: "",
question: "A technician asks whether a monitor module or a control module should be used for an HVAC shutdown application. Which is correct?",
answers: [
"Control module — the system needs to produce a command output to stop the HVAC unit",
"Monitor module — the system needs to track the HVAC on/off status",
"Either can be used — they are interchangeable for HVAC applications",
"Neither — HVAC shutdown only requires a direct wire without any module"
],
correct: 0,
explanation: "HVAC shutdown is a control action. A control module provides the output that commands the equipment to stop. A monitor module supervises an input condition — it does not generate a control output on its own. Choosing the right function type is fundamental to a correct system design."
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
id: 44,
category: "Wiring",
difficulty: "Medium",
product: "",
question: "A sprinkler waterflow switch needs to send an alarm condition to the fire alarm panel. Which module function is involved?",
answers: [
"Monitor input — the waterflow switch is an input device reporting a condition",
"Control output — the waterflow switch requires a control command",
"NAC output — the waterflow switch is a notification appliance",
"Isolator function — to separate the sprinkler circuit"
],
correct: 0,
explanation: "A waterflow switch is an input device that detects water flowing through sprinkler piping. A monitor module supervises that contact and reports the alarm condition to the panel."
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
}

];
