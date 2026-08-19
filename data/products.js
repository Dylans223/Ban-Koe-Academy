// ===============================================
// Ban-Koe Academy
// Product Library v3.0
// ===============================================
//
// Verification Levels
//
// VERIFIED
//     Official manufacturer literature reviewed.
//
// INDUSTRY
//     General fire alarm knowledge.
//
// PENDING
//     Waiting for manufacturer verification.
//
// ===============================================

const productLibrary = {

manufacturers:[

{

id:1,

name:"Edwards",

website:"https://www.edwardsfiresafety.com",

verified:true,

families:[

"Intelligent Panels",

"Signature Series",

"Genesis",

"Networking",

"Power Supplies",

"Audio",

"Accessories"

]

}

],

products:[

//
// ===============================================
// EST4 PLATFORM
// ===============================================
//

{

id:1,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Intelligent Panels",

series:"EST4",

category:"Fire Alarm Control Panel",

model:"EST4",

verification:"VERIFIED",

source:
"Official Edwards EST4 Platform",

sourceURL:
"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:
"The Edwards EST4 is a modular, high-capacity life safety and emergency communication platform featuring an intuitive color touchscreen display, robust IPv6 cybersecurity architecture, and backward compatibility with legacy EST3 infrastructure.",

plainEnglish:
"The EST4 is the main control panel of the fire alarm system. It receives information from field devices, processes events, and controls system responses.",

features:[

"Modular platform",

"Color touchscreen display",

"IPv6 networking",

"Cybersecurity architecture",

"Backward compatible with EST3",

"Built-in email notifications",

"Built-in email-to-SMS",

"On-board web server",

"Supports Signature Series devices",

"Supports Genesis notification appliances"

],

applications:[

"Schools",

"Hospitals",

"Commercial Buildings",

"Industrial Facilities",

"Universities",

"Campus Environments"

],

relatedProducts:[

],

lessons:[

1

],

modules:[

1

],

quizQuestions:[

],

keywords:[

"EST4",

"Panel",

"FACP",

"Fire Alarm Control Panel"

],

training:{

whatIsIt:
"The primary fire alarm control panel responsible for monitoring field devices and controlling system operation.",

howToRecognize:
"Large modular cabinet with a color touchscreen display and multiple internal hardware modules.",

howItWorks:
"The panel communicates with initiating devices, processes events according to programming, and activates notification and control outputs.",

commonlyPairedWith:[
"Signature Series Devices",
"Genesis Notification Appliances",
"Remote Annunciators",
"Power Supplies"
],

commonMistakes:[
"Calling every fire alarm panel an EST4.",
"Assuming all EST4 systems contain identical hardware.",
"Confusing panel hardware with field devices."
],

salesSupportNotes:[
"Verify cabinet size.",
"Review network requirements.",
"Check required power supplies.",
"Review audio requirements.",
"Confirm expansion hardware."
],

warehouseRecognition:
"The largest product in most Edwards shipments with modular hardware installed inside metal cabinets.",

biddingTips:[
"Review the riser diagram.",
"Review the sequence of operations.",
"Review network requirements.",
"Confirm audio system requirements."
]

},

bomRelationships:[

"Waterflow Switch",

"Valve Tamper",

"EST4"

],

drawingKeywords:[

"MONITOR MODULE",

"CT1",

"SLC",

"INPUT MODULE"

],

acronyms:[

"SLC",

"IDC"

],

difficulty:1,

favorite:false,

mastered:false,

timesViewed:0,

timesQuizzed:0,

correctAnswers:0

},

//
// ===============================================
// EST4 PRODUCT FAMILIES
// ===============================================
//

{

id:2,

manufacturer:"Edwards",

family:"EST4",

series:"EST4",

category:"Control Display Modules",

model:"Control Display Modules",

verification:"VERIFIED",

source:"Official Edwards EST4 Platform",

sourceURL:
"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"The user interface modules used to operate and monitor an EST4 system.",

features:[],

applications:[
"EST4 Platform"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Display",
"Touchscreen"
]

},

{

id:3,

manufacturer:"Edwards",

family:"EST4",

series:"EST4",

category:"Central Processing Unit",

model:"CPU",

verification:"VERIFIED",

source:"Official Edwards EST4 Platform",

sourceURL:
"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"The processing hardware responsible for operating the EST4 platform.",

features:[],

applications:[
"EST4 Platform"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"CPU",
"Processor"
]

},

{

id:4,

manufacturer:"Edwards",

family:"EST4",

series:"EST4",

category:"Network Controllers",

model:"Network Controller",

verification:"VERIFIED",

source:"Official Edwards EST4 Platform",

sourceURL:
"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Allows EST4 systems to communicate across the network.",

features:[],

applications:[
"Networked Systems"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Network"
]

},

//
// ===============================================
// EST4 VERIFIED PRODUCT FAMILIES
// ===============================================
//


{
id:5,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Audio Units & Interfaces",

model:"Audio Units & Interfaces",

verification:"VERIFIED",

source:"EST4 Audio Units and Interfaces",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Audio hardware used for voice evacuation and emergency communications on the EST4 platform.",

features:[
"Voice evacuation",
"Emergency communications",
"Modular architecture"
],

applications:[
"Voice evacuation systems",
"Mass notification"
],

relatedProducts:[
"EST4",
"Zoned Audio Amplifiers"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Audio",
"Voice",
"Mass Notification"
]

},

{

id:6,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Remote Annunciators",

model:"Remote Annunciators",

verification:"VERIFIED",

source:"EST4 Remote Annunciators",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Remote user interface stations that display system status and provide control functions from locations throughout the facility.",

features:[
"Remote system status",
"Remote controls",
"LCD support",
"LED indicators"
],

applications:[
"Building entrances",
"Security desks",
"Command centers"
],

relatedProducts:[
"EST4",
"Control Display Modules"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Annunciator",
"Remote",
"Display"
]

},

{

id:7,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Cabinets & Chassis",

model:"Cabinets & Chassis",

verification:"VERIFIED",

source:"EST4 Cabinets and Chassis",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"The physical enclosures and mounting hardware that house EST4 system components.",

features:[
"Modular",
"Expandable",
"Equipment mounting"
],

applications:[
"Fire alarm control equipment"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Cabinet",
"Chassis"
]

},

{

id:8,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"LCD Display Modules",

model:"LCD Display Modules",

verification:"VERIFIED",

source:"EST4 Liquid Crystal Display Modules",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Color LCD display modules used for viewing and operating the EST4 system.",

features:[
"Color display",
"Touch interface"
],

applications:[
"Operator interface"
],

relatedProducts:[
"EST4",
"Control Display Modules"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"LCD",
"Display"
]

},

{

id:9,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Network Extenders",

model:"Network Extender",

verification:"VERIFIED",

source:"EST4 Network Extender",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Hardware used to extend the EST4 network where required by the system design.",

features:[
"Network expansion"
],

applications:[
"Large systems"
],

relatedProducts:[
"Network Controllers",
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Network",
"Extender"
]

},

{

id:10,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Network Firewalls",

model:"Network Firewall",

verification:"VERIFIED",

source:"EST4 Network Firewalls",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Security hardware that protects the EST4 network from external cyber threats.",

features:[
"Cybersecurity",
"AES encryption",
"Secure communications"
],

applications:[
"Networked EST4 systems"
],

relatedProducts:[
"EST4",
"Network Controllers"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Firewall",
"Cybersecurity"
]

},

{

id:11,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Network Adder Modules",

model:"Network Adder Module",

verification:"VERIFIED",

source:"EST4 Network Adder Module",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Expansion hardware that adds networking capability to the EST4 platform.",

features:[
"Network expansion"
],

applications:[
"Large networked systems"
],

relatedProducts:[
"EST4",
"Network Controllers"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Network",
"Adder"
]

},

{

id:12,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"USB Hub",

model:"USB Hub",

verification:"VERIFIED",

source:"EST4 USB Hub",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"USB expansion hardware used within the EST4 platform.",

features:[
"USB connectivity"
],

applications:[
"EST4 system expansion"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"USB"
]

},

{

id:13,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Zoned Audio Amplifiers",

model:"Audio Amplifier",

verification:"VERIFIED",

source:"EST4 Zoned Audio Amplifiers",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Amplifiers that distribute emergency voice messages to designated audio zones.",

features:[
"Voice evacuation",
"Zone audio"
],

applications:[
"Emergency communications"
],

relatedProducts:[
"Audio Units & Interfaces"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Amplifier",
"Audio"
]

},

{

id:14,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"System Power Supplies",

model:"Power Supply",

verification:"VERIFIED",

source:"System Power Supplies",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Power supplies that provide operating and standby power for EST4 equipment.",

features:[
"System power"
],

applications:[
"EST4 platform"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Power Supply"
]

},

{

id:15,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"EST4",

series:"EST4",

category:"Aspirating Smoke Detector CPU",

model:"Aspirating Smoke Detector CPU",

verification:"VERIFIED",

source:"EST4 Aspirating Smoke Detector CPU",

sourceURL:"https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform",

image:"",

officialDescription:"",

plainEnglish:
"Interface processor that integrates compatible aspirating smoke detection systems with the EST4 platform.",

features:[
"Aspirating detection integration"
],

applications:[
"High-sensitivity smoke detection"
],

relatedProducts:[
"EST4"
],

lessons:[],

modules:[2],

quizQuestions:[],

keywords:[
"Aspirating",
"Smoke Detection"
]

},//
// ===============================================
// SIGNATURE SERIES
// ===============================================
//

,

{
id:16,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Smoke Detectors",

model:"Smoke Detector Family",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"The Signature Series smoke detector family contains intelligent addressable smoke detectors used with compatible Edwards fire alarm systems.",

features:[
"Addressable",
"Signature Series"
],

applications:[
"Commercial Buildings",
"Schools",
"Hospitals"
],

relatedProducts:[
"Detector Bases"
],

lessons:[
2
],

modules:[
2
],

quizQuestions:[],

keywords:[
"Signature",
"Smoke Detector"
]

},

{

id:17,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Heat Detectors",

model:"Heat Detector Family",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"The Signature Series intelligent heat detector family.",

features:[
"Addressable"
],

applications:[
"Commercial Buildings"
],

relatedProducts:[
"Smoke Detectors"
],

lessons:[
2
],

modules:[
2
],

quizQuestions:[],

keywords:[
"Heat Detector"
]

},

{

id:18,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Detector Bases",

model:"Detector Bases",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"Compatible mounting bases for Signature Series detectors.",

features:[
"Detector mounting",
"Electrical connection"
],

applications:[
"Commercial Fire Alarm Systems"
],

relatedProducts:[
"Smoke Detectors",
"Heat Detectors"
],

lessons:[
3
],

modules:[
2
],

quizQuestions:[],

keywords:[
"Detector Base"
]

},

{

id:19,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Monitor Modules",

model:"Monitor Module Family",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"Addressable modules that monitor external initiating devices and report their status to the fire alarm control panel.",

features:[
"Addressable",
"Input monitoring"
],

applications:[
"Waterflow",
"Tamper Switches",
"Conventional Contacts"
],

relatedProducts:[

"Control Modules",

"Relay Modules"

],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Monitor Module"
]

},

{

id:20,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Control Modules",

model:"Control Module Family",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"Addressable modules that control external equipment through the fire alarm system.",

features:[
"Addressable",
"Output control"
],

applications:[
"Door Holders",
"HVAC Interfaces",
"Smoke Dampers"
],

relatedProducts:[

"Relay Modules"

],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Control Module"
]

},

{

id:21,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Relay Modules",

model:"Relay Module Family",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"Addressable relay modules used to switch external circuits under control of the fire alarm system.",

features:[
"Relay Output",
"Addressable"
],

applications:[
"Equipment Control",
"Building Interfaces"
],

relatedProducts:[
"Control Modules"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Relay"
]

},

{

id:22,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Isolator Modules",

model:"Isolator Module Family",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"Modules designed to isolate faults on the signaling line circuit.",

features:[
"SLC Isolation"
],

applications:[
"Addressable Systems"
],

relatedProducts:[
"Monitor Modules",
"Control Modules"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Isolator"
]

},

{

id:23,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signature",

category:"Accessories",

model:"Accessories",

verification:"VERIFIED",

source:"Official Edwards Signature Series",

sourceURL:"https://www.edwardsfiresafety.com",

image:"",

officialDescription:"",

plainEnglish:
"Accessories designed for installation, maintenance, and expansion of Signature Series devices.",

features:[

],

applications:[

],

relatedProducts:[

],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"Accessories"
]

},//
// ===============================================
// SIGNATURE SERIES - VERIFIED PRODUCTS
// ===============================================
//

,

{
id:24,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Input Modules",

category:"Single Input Module",

model:"SIGA-CT1",

verification:"VERIFIED",

source:"Edwards SIGA-CT1 Datasheet",

image:"",

officialDescription:
"Single Input Module",

plainEnglish:
"Provides one Signature input channel for supervised field-circuit applications configured by the system design.",

features:[
"One address",
"Electronic addressing",
"Self diagnostics",
"History log",
"Automatic device mapping"
],

applications:[
"Single input applications",
"Supervised field circuits",
"Signature system input functions"
],

relatedProducts:[
"SIGA-CT2",
"SIGA-CC1",
"EST4"
],

lessons:[1],

modules:[1],

quizQuestions:[],

keywords:[
"CT1",
"Input Module",
"Monitor Module"
],

training:{

whatIsIt:
"An addressable single input module used for one Signature input channel according to its configured application.",

howToRecognize:
"Usually installed inside a 4-inch square electrical box or enclosure. The module is labeled SIGA-CT1 and connects to the Signature Data Loop (SLC) while monitoring one field input.",

howItWorks:
"The module provides one input channel and communicates its configured field-circuit status to the fire alarm control panel over the Signature loop.",

commonlyUsedFor:[
"Waterflow switches",
"Valve tamper switches",
"Dry contact monitoring",
"Conventional initiating contacts"
],

commonlyPairedWith:[
"EST4",
"Signature Data Loop",
"Waterflow Switch",
"Valve Tamper Switch"
],

commonMistakes:[
"Treating CT1 as a dual-input module.",
"Confusing the CT1 input-module family with CC signal-module products.",
"Assigning a function without checking the applicable personality code and system documentation."
],

salesSupportNotes:[
"Count the number of monitored inputs on the drawings.",
"Verify whether each monitored circuit requires its own address.",
"Review specifications before selecting CT1 versus CT2."
],

warehouseRecognition:
"Small Signature Series module typically packaged individually with installation instructions.",

biddingTips:[
"Verify the required input function and quantity.",
"Confirm compatibility with the specified Edwards panel.",
"Check the applicable personality code and mounting requirements."
]

},

bomRelationships:[

"Waterflow Switch",

"Valve Tamper",

"EST4"

],

drawingKeywords:[

"MONITOR MODULE",

"CT1",

"SLC",

"INPUT MODULE"

],

acronyms:[

"SLC",

"IDC"

],

difficulty:1,

favorite:false,

mastered:false,

timesViewed:0,

timesQuizzed:0,

correctAnswers:0

},

{

id:25,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Input Modules",

category:"Dual Input Module",

model:"SIGA-CT2",

verification:"VERIFIED",

source:"Edwards SIGA-CT2 Datasheet",

image:"",

officialDescription:
"Dual Input Module",

plainEnglish:
"Provides two Signature input channels for supervised field-circuit applications configured by the system design.",

features:[
"Dual input",
"Electronic addressing",
"Self diagnostics",
"History log",
"Automatic device mapping"
],

applications:[
"Two-input applications",
"Supervised field circuits",
"Signature system input functions"
],

relatedProducts:[
"SIGA-CT1"
],

lessons:[1],

modules:[1],

quizQuestions:[],

keywords:[
"CT2",
"Dual Input"
],

training:{

whatIsIt:
"An addressable dual input module used for two Signature input channels according to the configured application.",

howToRecognize:
"Labeled SIGA-CT2 and designed for two monitored inputs.",

howItWorks:
"The module provides two input channels and communicates their configured field-circuit statuses to the fire alarm control panel.",

commonlyUsedFor:[
"Two waterflow switches",
"Two valve tampers",
"Two dry contact circuits"
],

commonlyPairedWith:[
"EST4",
"Signature Data Loop"
],

commonMistakes:[
"Using a CT2 when only one input channel is required.",
"Confusing the CT2 input-module family with CC signal-module products.",
"Assigning a function without checking the applicable personality codes and system documentation."
],

salesSupportNotes:[
"Determine the number of monitored points before selecting CT1 or CT2."
]

},

bomRelationships:[

"Waterflow Switch",

"Valve Tamper",

"EST4"

],

drawingKeywords:[

"MONITOR MODULE",

"CT2",

"SLC",

"INPUT MODULE"

],

acronyms:[

"SLC",

"IDC"

],

difficulty:1,

favorite:false,

mastered:false,

timesViewed:0,

timesQuizzed:0,

correctAnswers:0

},

{

id:26,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signal Modules",

category:"Single Signal Module",

model:"SIGA-CC1",

verification:"VERIFIED",

source:"Edwards SIGA-CC1 Datasheet",

image:"",

officialDescription:
"Single Signal Module",

plainEnglish:
"Provides one supervised signal output channel for notification-appliance or telephone-circuit applications when commanded by the control panel.",

features:[
"One output circuit",
"24 VDC signaling",
"25/70 VRMS audio support",
"Electronic addressing"
],

applications:[
"Notification appliance circuits",
"Speaker circuits",
"Telephone circuits"
],

relatedProducts:[
"SIGA-CC2",
"Genesis"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"CC1",
"Signal Module",
"NAC"
]

},

{

id:27,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"Signal Modules",

category:"Dual Signal Module",

model:"SIGA-CC2",

verification:"VERIFIED",

source:"Edwards SIGA-CC2 Datasheet",

image:"",

officialDescription:
"Dual Signal Module",

plainEnglish:
"Provides two supervised signal output channels for notification-appliance or telephone-circuit applications from the Signature loop.",

features:[
"Two output circuits",
"Electronic addressing"
],

applications:[
"Notification appliance circuits",
"Audio circuits",
"Telephone circuits"
],

relatedProducts:[
"SIGA-CC1"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"CC2"
]

},

{

id:28,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"UIO Modules",

category:"Single Signal Module",

model:"SIGA-MCC1",

verification:"VERIFIED",

source:"Edwards SIGA-MCC1 Datasheet",

image:"",

officialDescription:
"Single Signal Module (UIO)",

plainEnglish:
"A motherboard-mounted version of the SIGA-CC1 used in UIO installations.",

features:[
"UIO compatible",
"Shared motherboard"
],

applications:[
"Cabinet installations"
],

relatedProducts:[
"SIGA-CC1"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"MCC1"
]

},

{

id:29,

manufacturer:"Edwards",

division:"Life Safety Systems",

family:"Signature Series",

series:"UIO Modules",

category:"Dual Signal Module",

model:"SIGA-MCC2",

verification:"VERIFIED",

source:"Edwards SIGA-MCC2 Datasheet",

image:"",

officialDescription:
"Dual Signal Module (UIO)",

plainEnglish:
"Motherboard-mounted dual signal module for UIO systems.",

features:[
"Dual output",
"UIO compatible"
],

applications:[
"Cabinet installations"
],

relatedProducts:[
"SIGA-CC2"
],

lessons:[],

modules:[1],

quizQuestions:[],

keywords:[
"MCC2"
]

}

]

}; 