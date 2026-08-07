const questions = [

{
id:1,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What does SLC stand for?",
answers:[
"Signaling Line Circuit",
"Smoke Line Cable",
"Supervised Loop Circuit",
"Signal Logic Controller"
],
correct:0,
explanation:"SLC stands for Signaling Line Circuit. It is the communication loop used by addressable fire alarm systems."
},

{
id:2,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which wiring method continues operating if a single wire is broken?",
answers:[
"Class B",
"Class A",
"Conventional",
"NAC"
],
correct:1,
explanation:"Class A wiring returns to the panel, allowing communication to continue after a single open circuit."
},

{
id:3,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What is the primary purpose of an addressable fire alarm system?",
answers:[
"Reduce installation cost",
"Identify the exact device in alarm",
"Eliminate smoke detectors",
"Increase battery life"
],
correct:1,
explanation:"Each addressable device has its own address, allowing the panel to identify the exact device that activated."
},

{
id:4,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which circuit powers horn/strobes and speaker/strobes?",
answers:[
"SLC",
"NAC",
"IDC",
"LAN"
],
correct:1,
explanation:"Notification Appliance Circuits (NACs) provide power to notification appliances."
},

{
id:5,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which circuit communicates with addressable devices?",
answers:[
"NAC",
"SLC",
"120 VAC",
"Speaker Circuit"
],
correct:1,
explanation:"The SLC carries communication between the fire alarm panel and addressable devices."
},

{
id:6,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which device begins the alarm process?",
answers:[
"Initiating Device",
"Notification Appliance",
"Power Supply",
"Amplifier"
],
correct:0,
explanation:"Smoke detectors, pull stations, and waterflow switches are initiating devices."
},

{
id:7,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which device alerts building occupants?",
answers:[
"Smoke Detector",
"Horn/Strobe",
"Monitor Module",
"Control Module"
],
correct:1,
explanation:"Notification appliances such as horn/strobes notify occupants during an alarm."
},

{
id:8,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which contact type has no voltage supplied by the device itself?",
answers:[
"Wet Contact",
"Dry Contact",
"Line Voltage",
"Supervised Contact"
],
correct:1,
explanation:"Dry contacts simply open or close a circuit and do not provide voltage."
},

{
id:9,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What does a fire alarm control panel do?",
answers:[
"Controls only speakers",
"Receives inputs and controls system outputs",
"Supplies HVAC power",
"Operates lighting"
],
correct:1,
explanation:"The control panel is the brain of the system, monitoring inputs and activating outputs."
},

{
id:10,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What is the main purpose of supervision in a fire alarm system?",
answers:[
"Increase volume",
"Detect wiring or device problems",
"Reduce battery charging",
"Control lighting"
],
correct:1,
explanation:"Supervision continuously checks for opens, shorts, and other wiring faults."
},

{
id:11,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which type of fire alarm system allows each field device to have its own unique address?",
answers:[
"Conventional",
"Addressable",
"Analog",
"Standalone"
],
correct:1,
explanation:"Addressable systems assign a unique address to each device so the panel can identify exactly which device is in alarm."
},

{
id:12,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which type of device sends information TO the fire alarm panel?",
answers:[
"Initiating Device",
"Notification Appliance",
"Amplifier",
"Power Supply"
],
correct:0,
explanation:"Initiating devices such as smoke detectors and pull stations send alarm or supervisory information to the panel."
},

{
id:13,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which type of device receives commands FROM the fire alarm panel?",
answers:[
"Smoke Detector",
"Monitor Module",
"Notification Appliance",
"Heat Detector"
],
correct:2,
explanation:"Notification appliances receive commands from the control panel to alert building occupants."
},

{
id:14,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which system component is considered the 'brain' of the fire alarm system?",
answers:[
"Smoke Detector",
"Fire Alarm Control Panel",
"Monitor Module",
"Horn/Strobe"
],
correct:1,
explanation:"The Fire Alarm Control Panel (FACP) monitors inputs, makes decisions, and controls system outputs."
},

{
id:15,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What is the purpose of a monitor module?",
answers:[
"Sound the alarm",
"Monitor an external contact and report its status",
"Provide speaker audio",
"Power smoke detectors"
],
correct:1,
explanation:"Monitor modules supervise external contacts such as waterflow switches, tamper switches, or other dry contacts."
},

{
id:16,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What is the primary purpose of a control module?",
answers:[
"Monitor a contact",
"Control external equipment",
"Power horn/strobes",
"Charge batteries"
],
correct:1,
explanation:"Control modules allow the fire alarm system to operate external equipment such as door holders, fans, or HVAC shutdown."
},

{
id:17,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which fire alarm wiring class provides a return path to the control panel?",
answers:[
"Class B",
"Class A",
"Class C",
"Class D"
],
correct:1,
explanation:"Class A wiring loops back to the control panel, providing communication beyond a single open circuit."
},

{
id:18,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What is the main purpose of a horn/strobe?",
answers:[
"Monitor duct smoke",
"Notify building occupants",
"Control HVAC equipment",
"Detect heat"
],
correct:1,
explanation:"Horn/strobes provide audible and visual notification during an alarm."
},

{
id:19,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which of the following is NOT normally considered an initiating device?",
answers:[
"Smoke Detector",
"Manual Pull Station",
"Horn/Strobe",
"Heat Detector"
],
correct:2,
explanation:"Horn/strobes are notification appliances. They do not initiate alarms."
},

{
id:20,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What does FACP stand for?",
answers:[
"Fire Alarm Control Panel",
"Fire Alarm Communication Port",
"Fire Alarm Circuit Panel",
"Fire Alarm Control Processor"
],
correct:0,
explanation:"FACP stands for Fire Alarm Control Panel."
},

{
id:21,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which Edwards system component communicates with addressable devices over the SLC?",
answers:[
"Fire Alarm Control Panel",
"Horn/Strobe",
"Speaker",
"Power Supply"
],
correct:0,
explanation:"The Fire Alarm Control Panel communicates with all addressable devices over the SLC."
},

{
id:22,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"What is the primary purpose of a waterflow switch?",
answers:[
"Detect smoke",
"Detect sprinkler water movement",
"Monitor HVAC",
"Power notification appliances"
],
correct:1,
explanation:"A waterflow switch activates when water moves through the sprinkler piping, indicating sprinkler operation."
},

{
id:23,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"A tamper switch normally reports what type of condition?",
answers:[
"Alarm",
"Supervisory",
"Trouble",
"Power Loss"
],
correct:1,
explanation:"Valve tamper switches typically generate a supervisory condition because they monitor sprinkler control valves."
},

{
id:24,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which circuit normally powers horn/strobes?",
answers:[
"SLC",
"NAC",
"IDC",
"LAN"
],
correct:1,
explanation:"Notification Appliance Circuits (NACs) provide operating power to horn/strobes and other notification appliances."
},

{
id:25,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"Which circuit carries communication between the panel and addressable modules?",
answers:[
"NAC",
"SLC",
"120 VAC",
"Telephone Line"
],
correct:1,
explanation:"The Signaling Line Circuit (SLC) carries data between the fire alarm panel and addressable devices."
},

{
id:26,
module:1,
lesson:1,
category:"Sales Support",
difficulty:"Easy",
product:"",
question:"When reading a Bill of Materials (BOM), what does the quantity column indicate?",
answers:[
"Installation time",
"Number of each item required",
"Wire length",
"Voltage"
],
correct:1,
explanation:"The quantity column shows how many of each product must be supplied."
},

{
id:27,
module:1,
lesson:1,
category:"Sales Support",
difficulty:"Easy",
product:"",
question:"A customer orders 20 horn/strobes. What should you verify before shipping?",
answers:[
"The color and mounting style",
"The building occupancy",
"The panel password",
"The battery age"
],
correct:0,
explanation:"Color (red/white) and wall or ceiling mounting are common ordering details that should always be verified."
},

{
id:28,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which type of fire alarm device typically requires an address in an addressable system?",
answers:[
"Addressable smoke detector",
"Conventional horn",
"120V strobe",
"Mechanical bell"
],
correct:0,
explanation:"Every addressable field device must have a unique address so the panel can identify it."
},

{
id:29,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which condition is most commonly generated by an open circuit on a supervised fire alarm loop?",
answers:[
"Alarm",
"Supervisory",
"Trouble",
"Reset"
],
correct:2,
explanation:"An open or broken supervised circuit usually creates a trouble condition."
},

{
id:30,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Why are addressable systems preferred in larger buildings?",
answers:[
"They eliminate notification appliances",
"They identify the exact device in alarm",
"They require no programming",
"They do not require batteries"
],
correct:1,
explanation:"Knowing the exact device location speeds emergency response and troubleshooting."
},

{
id:31,
module:1,
lesson:1,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which building system is commonly interfaced with a fire alarm system for life safety?",
answers:[
"HVAC",
"Internet Router",
"Telephone",
"Security Camera"
],
correct:0,
explanation:"Fire alarm systems commonly interface with HVAC systems for smoke control and shutdown."
},

{
id:32,
module:1,
lesson:1,
category:"Applications",
difficulty:"Medium",
product:"",
question:"During an alarm, why might an HVAC unit be shut down?",
answers:[
"To reduce electrical usage",
"To prevent smoke from spreading",
"To save battery power",
"To reduce panel temperature"
],
correct:1,
explanation:"Shutting down HVAC equipment can help prevent smoke from spreading throughout a building."
},

{
id:33,
module:1,
lesson:1,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"A BOM includes multiple rooftop HVAC units. Which category of fire alarm device will likely be required?",
answers:[
"Control Modules",
"Smoke Detectors",
"Manual Pull Stations",
"Speakers"
],
correct:0,
explanation:"Control modules are commonly used to interface with rooftop HVAC equipment."
},

{
id:34,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which fire alarm circuit is responsible for communication rather than notification power?",
answers:[
"NAC",
"SLC",
"120 VAC",
"Speaker Circuit"
],
correct:1,
explanation:"The SLC carries communication between the control panel and addressable devices."
},

{
id:35,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which fire alarm condition indicates that the system itself has a problem?",
answers:[
"Alarm",
"Supervisory",
"Trouble",
"Normal"
],
correct:2,
explanation:"Trouble conditions indicate wiring faults, device failures, or other system issues."
},

{
id:36,
module:1,
lesson:1,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"Why is it important to verify manufacturer part numbers when quoting a project?",
answers:[
"To reduce labor cost",
"To ensure the correct products are ordered",
"To increase battery capacity",
"To simplify programming"
],
correct:1,
explanation:"Accurate part numbers prevent ordering errors and project delays."
},

{
id:37,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which fire alarm device provides visual notification?",
answers:[
"Smoke Detector",
"Strobe",
"Monitor Module",
"Control Module"
],
correct:1,
explanation:"Strobes provide visual notification for building occupants."
},

{
id:38,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which fire alarm device provides audible notification?",
answers:[
"Horn",
"Smoke Detector",
"Heat Detector",
"Monitor Module"
],
correct:0,
explanation:"Horns provide audible notification during emergency events."
},

{
id:39,
module:1,
lesson:1,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"When reviewing a BOM, what should you check first?",
answers:[
"Product quantities and part numbers",
"Programming passwords",
"Battery voltage",
"Installer certifications"
],
correct:0,
explanation:"The first step is verifying that the quantities and part numbers match the project requirements."
},

{
id:40,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which best describes the relationship between initiating devices and notification appliances?",
answers:[
"Initiating devices detect events; notification appliances alert occupants.",
"Both perform the same function.",
"Notification appliances communicate with the SLC while initiating devices do not.",
"Initiating devices only operate HVAC equipment."
],
correct:0,
explanation:"Initiating devices detect alarm conditions, while notification appliances inform occupants of the emergency."
},

{
id:41,
module:1,
lesson:2,
category:"Control & Monitor Modules",
difficulty:"Easy",
product:"",
question:"What is the primary difference between a monitor module and a control module?",
answers:[
"A monitor module receives information while a control module operates external equipment.",
"A monitor module is always conventional.",
"A control module detects smoke.",
"There is no difference."
],
correct:0,
explanation:"Monitor modules supervise external inputs. Control modules operate external equipment."
},

{
id:42,
module:1,
lesson:2,
category:"Control & Monitor Modules",
difficulty:"Easy",
product:"",
question:"Which type of module is commonly used to supervise a waterflow switch?",
answers:[
"Monitor Module",
"Control Module",
"Horn Module",
"Speaker Module"
],
correct:0,
explanation:"Waterflow switches are supervised by monitor modules."
},

{
id:43,
module:1,
lesson:2,
category:"Control & Monitor Modules",
difficulty:"Easy",
product:"",
question:"Which type of module is commonly used to control external equipment?",
answers:[
"Monitor Module",
"Control Module",
"Smoke Detector",
"Pull Station"
],
correct:1,
explanation:"Control modules activate or deactivate external equipment."
},

{
id:44,
module:1,
lesson:2,
category:"Applications",
difficulty:"Easy",
product:"",
question:"Which building system is commonly shut down during a fire alarm?",
answers:[
"HVAC",
"Lighting",
"Telephone",
"Wi-Fi"
],
correct:0,
explanation:"HVAC systems are commonly shut down to help prevent smoke spread."
},

{
id:45,
module:1,
lesson:2,
category:"Applications",
difficulty:"Easy",
product:"",
question:"Why are smoke dampers installed?",
answers:[
"To improve heating efficiency",
"To limit smoke movement through ducts",
"To reduce sound",
"To improve airflow"
],
correct:1,
explanation:"Smoke dampers help contain smoke during a fire event."
},

{
id:46,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"A rooftop HVAC unit must shut down when duct smoke is detected. Which type of fire alarm device usually performs that interface?",
answers:[
"Control Module",
"Smoke Detector",
"Horn/Strobe",
"Power Supply"
],
correct:0,
explanation:"A control module commonly interfaces with HVAC equipment for shutdown."
},

{
id:47,
module:1,
lesson:2,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"A BOM contains six rooftop units. What should you expect to see somewhere in the fire alarm design?",
answers:[
"Control modules",
"Additional pull stations",
"Extra speakers only",
"Battery chargers"
],
correct:0,
explanation:"Multiple rooftop units usually require multiple control interfaces."
},

{
id:48,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"What is the purpose of supervising a sprinkler valve tamper switch?",
answers:[
"Monitor whether the valve has been closed",
"Detect smoke",
"Activate speakers",
"Charge batteries"
],
correct:0,
explanation:"Tamper switches supervise sprinkler control valves and generate supervisory signals if the valve position changes."
},

{
id:49,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"What condition is normally generated by a waterflow switch?",
answers:[
"Alarm",
"Supervisory",
"Trouble",
"Normal"
],
correct:0,
explanation:"Waterflow switches normally generate an alarm condition."
},

{
id:50,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"What condition is normally generated by a valve tamper switch?",
answers:[
"Alarm",
"Supervisory",
"Trouble",
"Reset"
],
correct:1,
explanation:"Valve tamper switches usually generate supervisory conditions."
},

{
id:51,
module:1,
lesson:2,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which device typically provides the input that tells the fire alarm system to shut down HVAC equipment?",
answers:[
"Smoke detector or duct detector",
"Speaker",
"Strobe",
"Power supply"
],
correct:0,
explanation:"Smoke detection commonly initiates HVAC shutdown sequences."
},

{
id:52,
module:1,
lesson:2,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"When estimating a project, why is it important to recognize interface devices?",
answers:[
"They often require additional wiring and hardware.",
"They eliminate programming.",
"They reduce battery size.",
"They replace smoke detectors."
],
correct:0,
explanation:"Interface devices frequently affect wiring, hardware, and project costs."
},

{
id:53,
module:1,
lesson:2,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which devices are considered field devices?",
answers:[
"Devices installed throughout the building",
"Only the control panel",
"Only batteries",
"Only amplifiers"
],
correct:0,
explanation:"Field devices include detectors, modules, pull stations, and notification appliances."
},

{
id:54,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Why are fire alarm interfaces important?",
answers:[
"They allow the fire alarm system to communicate with other building systems.",
"They increase speaker volume.",
"They replace batteries.",
"They eliminate programming."
],
correct:0,
explanation:"Fire alarm systems often interface with HVAC, elevators, suppression systems, and access control."
},

{
id:55,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which building system is another common fire alarm interface besides HVAC?",
answers:[
"Elevators",
"Coffee machines",
"Printers",
"Televisions"
],
correct:0,
explanation:"Fire alarm systems commonly interface with elevators for recall functions."
},

{
id:56,
module:1,
lesson:2,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"Why should Sales Support understand common fire alarm interfaces?",
answers:[
"To recognize required products and avoid quoting errors.",
"To replace electricians.",
"To program panels.",
"To install devices."
],
correct:0,
explanation:"Understanding interfaces helps identify the correct products for a project."
},

{
id:57,
module:1,
lesson:2,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which is an example of an external device controlled by a fire alarm system?",
answers:[
"Door holder",
"Smoke detector",
"Pull station",
"Heat detector"
],
correct:0,
explanation:"Door holders are commonly released by the fire alarm system."
},

{
id:58,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"What is the purpose of releasing magnetic door holders during an alarm?",
answers:[
"To help contain smoke and fire",
"To reduce electrical load",
"To increase airflow",
"To improve sound quality"
],
correct:0,
explanation:"Releasing door holders helps close fire doors and limit smoke spread."
},

{
id:59,
module:1,
lesson:2,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which fire alarm component usually decides when outputs should activate?",
answers:[
"Fire Alarm Control Panel",
"Speaker",
"Horn",
"Strobe"
],
correct:0,
explanation:"The FACP evaluates inputs and controls system outputs."
},

{
id:60,
module:1,
lesson:2,
category:"Review",
difficulty:"Medium",
product:"",
question:"What is the main purpose of Lesson 2?",
answers:[
"Understanding how fire alarm systems interact with other building systems",
"Learning battery chemistry",
"Programming networks",
"Installing conduit"
],
correct:0,
explanation:"Lesson 2 focuses on interfaces, control, monitoring, and real-world building interactions."
},

{
id:61,
module:1,
lesson:3,
category:"Product Recognition",
difficulty:"Easy",
product:"SIGA-IM2 Isolator Module",
question:"The SIGA-IM2 belongs to which general category of fire alarm device?",
answers:[
"Intelligent Isolator Module",
"Smoke Detector",
"Heat Detector",
"Power Supply"
],
correct:0,
explanation:"The SIGA-IM2 is listed by Edwards as an intelligent isolator module in the Signature/SIGA module family."
},

{
id:62,
module:1,
lesson:3,
category:"Product Recognition",
difficulty:"Easy",
product:"High Power Control Relay Module",
question:"The High Power Control Relay Module belongs to which general category?",
answers:[
"Control Module",
"Monitor Module",
"Manual Pull Station",
"Speaker"
],
correct:0,
explanation:"Edwards lists the High Power Control Relay Module in Intelligent Input/Output Modules as a control relay category product."
},

{
id:63,
module:1,
lesson:3,
category:"Product Recognition",
difficulty:"Easy",
product:"Signal Modules with Class A Operation",
question:"Signal Modules with Class A Operation are primarily what type of device?",
answers:[
"Signal Module",
"Control Module",
"Horn",
"Smoke Detector"
],
correct:0,
explanation:"Edwards identifies this product as a signal module category that supports Class A operation."
},

{
id:64,
module:1,
lesson:3,
category:"Product Recognition",
difficulty:"Easy",
product:"SIGA-IM2 Isolator Module",
question:"Which Edwards SIGA device belongs to the isolator module category?",
answers:[
"SIGA-IM2",
"EST3X",
"G4LF",
"iO Bridge"
],
correct:0,
explanation:"SIGA-IM2 is the isolator module model listed in the Edwards library data."
},

{
id:65,
module:1,
lesson:3,
category:"Applications",
difficulty:"Easy",
product:"High Power Control Relay Module",
question:"A control module is commonly used to operate what type of equipment?",
answers:[
"External building equipment",
"Smoke detector LEDs",
"Panel batteries",
"Speaker circuits"
],
correct:0,
explanation:"Control modules are used to operate external equipment through controlled outputs."
},

{
id:66,
module:1,
lesson:3,
category:"Applications",
difficulty:"Medium",
product:"",
question:"A duct smoke detector activates. What building system is commonly affected next?",
answers:[
"HVAC",
"Elevator Lighting",
"Internet Network",
"Security Cameras"
],
correct:0,
explanation:"Duct smoke detection commonly results in HVAC shutdown."
},

{
id:67,
module:1,
lesson:3,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"When reviewing a BOM, why is recognizing module part numbers important?",
answers:[
"To verify the correct interface devices are included",
"To determine paint color",
"To calculate conduit fill",
"To determine sprinkler spacing"
],
correct:0,
explanation:"Recognizing module part numbers helps ensure the required interface devices are supplied."
},

{
id:68,
module:1,
lesson:3,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which type of fire alarm module would normally supervise a dry contact input?",
answers:[
"Monitor Module",
"Control Module",
"Horn Module",
"Speaker Module"
],
correct:0,
explanation:"Monitor modules supervise dry contact inputs from external devices."
},

{
id:69,
module:1,
lesson:3,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which type of fire alarm module normally provides an output to external equipment?",
answers:[
"Control Module",
"Monitor Module",
"Smoke Detector",
"Pull Station"
],
correct:0,
explanation:"Control modules provide outputs used to operate external equipment."
},

{
id:70,
module:1,
lesson:3,
category:"Fundamentals",
difficulty:"Medium",
product:"",
question:"Which device category is most commonly installed near controlled equipment such as HVAC units?",
answers:[
"Control Modules",
"Pull Stations",
"Speakers",
"Heat Detectors"
],
correct:0,
explanation:"Control modules are typically installed near the equipment they interface with."
},

{
id:71,
module:1,
lesson:3,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Why is HVAC shutdown an important fire alarm function?",
answers:[
"To help limit smoke movement",
"To improve heating efficiency",
"To reduce lighting load",
"To increase Wi-Fi coverage"
],
correct:0,
explanation:"Stopping air movement helps reduce smoke spread during a fire."
},

{
id:72,
module:1,
lesson:3,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"A project includes several smoke dampers. What should you expect to see on the BOM?",
answers:[
"Interface modules",
"Additional pull stations",
"Extra batteries only",
"More speaker strobes only"
],
correct:0,
explanation:"Smoke dampers normally require fire alarm interface devices."
},

{
id:73,
module:1,
lesson:3,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which module type supervises an external contact?",
answers:[
"Monitor Module",
"Control Module",
"Smoke Detector",
"Speaker"
],
correct:0,
explanation:"Monitor modules supervise the status of external contacts."
},

{
id:74,
module:1,
lesson:3,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which module type operates external equipment?",
answers:[
"Control Module",
"Monitor Module",
"Manual Pull Station",
"Smoke Detector"
],
correct:0,
explanation:"Control modules provide outputs to operate connected equipment."
},

{
id:75,
module:1,
lesson:3,
category:"Review",
difficulty:"Hard",
product:"",
question:"A project contains rooftop units, smoke dampers, magnetic door holders, and duct smoke detectors. What do all of these systems have in common?",
answers:[
"They typically require fire alarm interfaces.",
"They eliminate the need for notification appliances.",
"They replace smoke detectors.",
"They operate independently of the fire alarm system."
],
correct:0,
explanation:"These systems commonly interface with the fire alarm system using monitor modules, control modules, relay modules, or similar interface devices."
},

{
id:76,
module:1,
lesson:4,
category:"BOM Recognition",
difficulty:"Medium",
product:"",
question:"A Bill of Materials includes six duct smoke detectors. What additional type of product should you expect to see somewhere in the design?",
answers:[
"Interface modules",
"Additional pull stations",
"Extra batteries only",
"Speaker volume controls"
],
correct:0,
explanation:"Duct smoke detectors commonly require interface modules to communicate with the fire alarm system and perform control functions."
},

{
id:77,
module:1,
lesson:4,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"A customer asks for a replacement module but only gives you the Edwards part number. What should you verify before quoting?",
answers:[
"The exact part number and application",
"The building color",
"The electrician's name",
"The battery manufacturer"
],
correct:0,
explanation:"Always verify the exact part number and intended application before quoting a replacement."
},

{
id:78,
module:1,
lesson:4,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which fire alarm interface is commonly associated with magnetic door holders?",
answers:[
"Control Module",
"Smoke Detector",
"Heat Detector",
"Speaker"
],
correct:0,
explanation:"Magnetic door holders are commonly released through a fire alarm control output."
},

{
id:79,
module:1,
lesson:4,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which fire alarm interface is commonly associated with smoke dampers?",
answers:[
"Control Module",
"Manual Pull Station",
"Speaker",
"Smoke Detector"
],
correct:0,
explanation:"Smoke dampers are commonly controlled by a fire alarm output."
},

{
id:80,
module:1,
lesson:4,
category:"Applications",
difficulty:"Medium",
product:"",
question:"Which type of device most commonly supervises sprinkler system inputs?",
answers:[
"Monitor Module",
"Control Module",
"Speaker",
"Strobe"
],
correct:0,
explanation:"Monitor modules supervise sprinkler system devices such as waterflow and tamper switches."
},

{
id:81,
module:1,
lesson:4,
category:"Scenario",
difficulty:"Medium",
product:"",
question:"A project includes multiple elevator shafts. Which building system will likely interface with the fire alarm system?",
answers:[
"Elevator controls",
"Lighting controls",
"Telephone system",
"Parking gates"
],
correct:0,
explanation:"Fire alarm systems commonly interface with elevators for recall and other life-safety functions."
},

{
id:82,
module:1,
lesson:4,
category:"Scenario",
difficulty:"Medium",
product:"",
question:"A mechanical drawing shows four rooftop units. What should a Sales Support specialist expect to review on the fire alarm BOM?",
answers:[
"HVAC interface devices",
"Only smoke detectors",
"Only pull stations",
"Only batteries"
],
correct:0,
explanation:"Rooftop HVAC equipment usually requires fire alarm interface devices."
},

{
id:83,
module:1,
lesson:4,
category:"Product Recognition",
difficulty:"Easy",
product:"",
question:"Which type of product is most commonly responsible for monitoring an external dry contact?",
answers:[
"Monitor Module",
"Smoke Detector",
"Speaker",
"Power Supply"
],
correct:0,
explanation:"Monitor modules supervise dry contact inputs from external equipment."
},

{
id:84,
module:1,
lesson:4,
category:"Product Recognition",
difficulty:"Easy",
product:"",
question:"Which type of product is designed to operate external equipment?",
answers:[
"Control Module",
"Smoke Detector",
"Pull Station",
"Heat Detector"
],
correct:0,
explanation:"Control modules provide outputs that operate connected equipment."
},

{
id:85,
module:1,
lesson:4,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"Why is recognizing common part numbers valuable in Sales Support?",
answers:[
"You can identify products without looking them up.",
"You no longer need a BOM.",
"You can skip reviewing drawings.",
"You eliminate programming."
],
correct:0,
explanation:"Fast product recognition improves quoting, inventory, and customer support."
},

{
id:86,
module:1,
lesson:4,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"You receive a BOM with 18 interface modules. What should you expect about the project?",
answers:[
"It likely contains multiple building system interfaces.",
"It only contains pull stations.",
"It is a conventional system with no addressable devices.",
"It requires no programming."
],
correct:0,
explanation:"Large numbers of interface modules often indicate many connected building systems."
},

{
id:87,
module:1,
lesson:4,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"A customer says, 'The sprinkler contractor is providing waterflow switches.' What should you confirm?",
answers:[
"The correct monitor interfaces are included in the fire alarm quote.",
"The horn volume.",
"The battery manufacturer.",
"The conduit size."
],
correct:0,
explanation:"Even if another contractor supplies field devices, the fire alarm system still needs the proper interfaces."
},

{
id:88,
module:1,
lesson:4,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which fire alarm component usually communicates directly with addressable modules?",
answers:[
"The Fire Alarm Control Panel",
"The Speaker",
"The Horn",
"The Strobe"
],
correct:0,
explanation:"The control panel communicates with addressable devices over the SLC."
},

{
id:89,
module:1,
lesson:4,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which wiring circuit carries communication instead of notification power?",
answers:[
"SLC",
"NAC",
"120 VAC",
"Speaker Circuit"
],
correct:0,
explanation:"The SLC is the communication backbone for addressable systems."
},

{
id:90,
module:1,
lesson:4,
category:"Review",
difficulty:"Hard",
product:"",
question:"Which skill provides the biggest advantage for a Sales Support specialist reviewing a BOM?",
answers:[
"Recognizing products and understanding their applications",
"Programming the panel",
"Installing conduit",
"Testing batteries"
],
correct:0,
explanation:"The faster you recognize products and understand why they are used, the faster and more accurately you can quote projects."
},

{
id:91,
module:1,
lesson:5,
category:"Sales Support Scenario",
difficulty:"Medium",
product:"",
question:"A customer requests a quote for a new elementary school. Besides smoke detectors and pull stations, which product category would you expect to see throughout the building?",
answers:[
"Notification appliances",
"Telephone wiring",
"Lighting controls",
"Security cameras"
],
correct:0,
explanation:"Schools require notification appliances such as horn/strobes or speaker/strobes throughout the building."
},

{
id:92,
module:1,
lesson:5,
category:"BOM Recognition",
difficulty:"Medium",
product:"",
question:"A BOM lists 75 smoke detectors but only 20 notification appliances. What should you do first?",
answers:[
"Review the drawings or BOM for completeness",
"Assume the quantities are correct",
"Remove smoke detectors",
"Order extra batteries"
],
correct:0,
explanation:"Large quantity differences may be valid, but they should always be reviewed before quoting."
},

{
id:93,
module:1,
lesson:5,
category:"Application",
difficulty:"Medium",
product:"",
question:"A customer asks for the device that 'controls another piece of equipment.' Which product category are they most likely describing?",
answers:[
"Control Module",
"Smoke Detector",
"Heat Detector",
"Horn/Strobe"
],
correct:0,
explanation:"Control modules are used to operate external equipment through the fire alarm system."
},

{
id:94,
module:1,
lesson:5,
category:"Application",
difficulty:"Medium",
product:"",
question:"A customer asks for the device that 'monitors a dry contact.' Which product category are they describing?",
answers:[
"Monitor Module",
"Control Module",
"Power Supply",
"Speaker"
],
correct:0,
explanation:"Monitor modules supervise external dry contacts and report their status to the panel."
},

{
id:95,
module:1,
lesson:5,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"You notice several duct smoke detectors on the plans. Which additional building system should you expect to review?",
answers:[
"HVAC",
"Plumbing fixtures",
"Parking gates",
"Security cameras"
],
correct:0,
explanation:"Duct smoke detectors are commonly associated with HVAC equipment."
},

{
id:96,
module:1,
lesson:5,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"A customer asks if a fire alarm system can release magnetic door holders during an alarm. What is the correct answer?",
answers:[
"Yes, with the proper fire alarm interface.",
"No, never.",
"Only on conventional systems.",
"Only during supervisory events."
],
correct:0,
explanation:"Fire alarm systems commonly release magnetic door holders through properly designed interface circuits."
},

{
id:97,
module:1,
lesson:5,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"When reviewing a quote, which mistake is most likely to delay a project?",
answers:[
"Incorrect part number",
"Using blue ink",
"Printing double-sided",
"Alphabetizing the BOM"
],
correct:0,
explanation:"Incorrect part numbers frequently result in ordering delays or incorrect shipments."
},

{
id:98,
module:1,
lesson:5,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which circuit carries communication between the control panel and addressable field devices?",
answers:[
"SLC",
"NAC",
"120 VAC",
"Telephone Circuit"
],
correct:0,
explanation:"The SLC is the communication pathway for addressable devices."
},

{
id:99,
module:1,
lesson:5,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which circuit supplies power to horn/strobes?",
answers:[
"NAC",
"SLC",
"IDC",
"LAN"
],
correct:0,
explanation:"Notification Appliance Circuits supply power to notification devices."
},

{
id:100,
module:1,
lesson:5,
category:"Milestone Review",
difficulty:"Medium",
product:"",
question:"Which skill will improve the fastest by completing Ban-Koe Academy Module 1?",
answers:[
"Recognizing products and understanding their applications",
"Installing conduit",
"Programming every fire alarm panel",
"Performing annual inspections"
],
correct:0,
explanation:"Module 1 is designed to help Sales Support personnel recognize products, understand applications, and read BOMs more effectively."
},

{
id:101,
module:1,
lesson:6,
category:"Sales Support Scenario",
difficulty:"Hard",
product:"",
question:"A customer sends a BOM containing multiple rooftop units. Before quoting, what should you verify?",
answers:[
"That the required fire alarm interface devices are included",
"That the paint color matches",
"That all smoke detectors are white",
"That the batteries are already installed"
],
correct:0,
explanation:"Rooftop units commonly require fire alarm interfaces for shutdown or monitoring."
},

{
id:102,
module:1,
lesson:6,
category:"BOM Recognition",
difficulty:"Hard",
product:"",
question:"A project has numerous waterflow switches. Which additional fire alarm device type should you expect?",
answers:[
"Monitor modules",
"Speaker amplifiers",
"Manual pull stations",
"Power supplies"
],
correct:0,
explanation:"Waterflow switches must be monitored by the fire alarm system."
},

{
id:103,
module:1,
lesson:6,
category:"BOM Recognition",
difficulty:"Hard",
product:"",
question:"A project has numerous valve tamper switches. What fire alarm device category is typically associated with them?",
answers:[
"Monitor modules",
"Control modules",
"Heat detectors",
"Notification appliances"
],
correct:0,
explanation:"Valve tamper switches generate supervisory conditions and are monitored."
},

{
id:104,
module:1,
lesson:6,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"A customer says, 'The HVAC contractor is providing the duct detectors.' What should you still verify?",
answers:[
"The required fire alarm interface devices",
"The horn color",
"The conduit size",
"The battery brand"
],
correct:0,
explanation:"Even if another contractor supplies equipment, the fire alarm interfaces may still be required."
},

{
id:105,
module:1,
lesson:6,
category:"Application",
difficulty:"Hard",
product:"",
question:"What is usually the reason a fire alarm system interfaces with HVAC equipment?",
answers:[
"Smoke control",
"Energy savings",
"Cooling efficiency",
"Building automation"
],
correct:0,
explanation:"The purpose is life safety by helping control smoke movement."
},

{
id:106,
module:1,
lesson:6,
category:"Application",
difficulty:"Medium",
product:"",
question:"Which building feature commonly requires fire alarm monitoring?",
answers:[
"Sprinkler system",
"Parking lot lights",
"Office printers",
"Security cameras"
],
correct:0,
explanation:"Sprinkler system devices such as waterflow and tamper switches are commonly monitored."
},

{
id:107,
module:1,
lesson:6,
category:"Sales Support",
difficulty:"Hard",
product:"",
question:"Which skill helps identify missing products before a quote is submitted?",
answers:[
"Understanding product relationships",
"Programming panels",
"Installing conduit",
"Testing batteries"
],
correct:0,
explanation:"Knowing which products commonly appear together helps catch omissions."
},

{
id:108,
module:1,
lesson:6,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"A drawing contains many duct detectors but no interface devices. What should you do?",
answers:[
"Ask whether required interface devices are included",
"Ignore it",
"Delete the detectors",
"Order more pull stations"
],
correct:0,
explanation:"Always verify potential omissions before quoting."
},

{
id:109,
module:1,
lesson:6,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which circuit is responsible for addressable communication?",
answers:[
"SLC",
"NAC",
"IDC",
"120 VAC"
],
correct:0,
explanation:"The SLC carries communication between the panel and addressable devices."
},

{
id:110,
module:1,
lesson:6,
category:"Review",
difficulty:"Medium",
product:"",
question:"Which circuit powers notification appliances?",
answers:[
"NAC",
"SLC",
"LAN",
"IDC"
],
correct:0,
explanation:"Notification Appliance Circuits power horn/strobes and similar devices."
},

{
id:111,
module:1,
lesson:7,
category:"BOM Scenario",
difficulty:"Hard",
product:"",
question:"A school project includes 48 classrooms. Which product category would you expect to appear throughout the building?",
answers:[
"Notification appliances",
"Waterflow switches",
"Kitchen suppression systems",
"Sprinkler valves"
],
correct:0,
explanation:"Most classrooms require occupant notification devices as part of the fire alarm system."
},

{
id:112,
module:1,
lesson:7,
category:"Estimator",
difficulty:"Hard",
product:"",
question:"While reviewing a BOM, you notice smoke detectors but no detector bases. What should you do?",
answers:[
"Verify whether compatible bases are included elsewhere in the BOM.",
"Delete the smoke detectors.",
"Order additional horn/strobes.",
"Ignore it."
],
correct:0,
explanation:"Many smoke detectors require compatible bases. Always verify whether they are listed separately."
},

{
id:113,
module:1,
lesson:7,
category:"Sales Support",
difficulty:"Hard",
product:"",
question:"A customer asks for a replacement device but only knows the application, not the part number. What is your first step?",
answers:[
"Determine the application before selecting the correct replacement.",
"Guess the most common part number.",
"Quote a random module.",
"Tell them to order a new panel."
],
correct:0,
explanation:"Understanding the application helps identify the correct replacement product."
},

{
id:114,
module:1,
lesson:7,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"A warehouse project contains multiple overhead doors held open magnetically. Which fire alarm function is commonly associated with these doors?",
answers:[
"Automatic door release during an alarm",
"Battery charging",
"Elevator recall",
"Voice evacuation"
],
correct:0,
explanation:"Magnetic door holders are commonly released during a fire alarm to help contain smoke and fire."
},

{
id:115,
module:1,
lesson:7,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"An office building contains several air handling units. Which building system will most likely interface with the fire alarm system?",
answers:[
"HVAC",
"Telephone",
"Data Network",
"Lighting"
],
correct:0,
explanation:"HVAC systems commonly interface with fire alarm systems for smoke control."
},

{
id:116,
module:1,
lesson:7,
category:"Estimator",
difficulty:"Hard",
product:"",
question:"You see numerous sprinkler monitoring devices on a project. What should you verify before completing the quote?",
answers:[
"That appropriate monitoring interfaces are included.",
"That every smoke detector is ceiling mounted.",
"That all horns are white.",
"That batteries have already been installed."
],
correct:0,
explanation:"Monitoring devices require the proper interface hardware to communicate with the fire alarm system."
},

{
id:117,
module:1,
lesson:7,
category:"Product Recognition",
difficulty:"Medium",
product:"",
question:"Which type of product is most often associated with supervising an external contact?",
answers:[
"Monitor Module",
"Control Module",
"Power Supply",
"Notification Appliance"
],
correct:0,
explanation:"Monitor modules supervise external contacts such as sprinkler devices."
},

{
id:118,
module:1,
lesson:7,
category:"Product Recognition",
difficulty:"Medium",
product:"",
question:"Which type of product is typically associated with operating external equipment?",
answers:[
"Control Module",
"Monitor Module",
"Heat Detector",
"Pull Station"
],
correct:0,
explanation:"Control modules operate connected equipment through relay outputs or controlled circuits."
},

{
id:119,
module:1,
lesson:7,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"A project includes duct smoke detectors, rooftop units, and smoke dampers. What does this suggest?",
answers:[
"The project contains several building system interfaces.",
"The project only requires notification appliances.",
"The project is conventional only.",
"The project has no HVAC equipment."
],
correct:0,
explanation:"These devices commonly indicate multiple fire alarm interfaces with HVAC systems."
},

{
id:120,
module:1,
lesson:7,
category:"Review",
difficulty:"Hard",
product:"",
question:"What is the most valuable habit when reviewing a fire alarm BOM?",
answers:[
"Look for products that should normally appear together.",
"Count only the smoke detectors.",
"Verify conduit sizes.",
"Ignore quantities until ordering."
],
correct:0,
explanation:"Recognizing common product relationships helps identify omissions before the quote is sent."
},

{
id:121,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"You receive a BOM for a new elementary school. The list contains smoke detectors, pull stations, and control modules, but no notification appliances. What should you do first?",
answers:[
"Verify whether notification appliances were omitted from the BOM.",
"Submit the quote immediately.",
"Remove the smoke detectors.",
"Order additional batteries."
],
correct:0,
explanation:"Every occupied school requires occupant notification. Missing notification appliances should be verified before quoting."
},

{
id:122,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A project includes 24 rooftop HVAC units. What should immediately come to mind while reviewing the fire alarm equipment?",
answers:[
"HVAC interface devices",
"Additional pull stations",
"Extra smoke detectors only",
"Speaker amplifiers"
],
correct:0,
explanation:"Large numbers of rooftop units usually require multiple fire alarm interfaces."
},

{
id:123,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A hospital project contains duct smoke detectors on every air handling unit. Besides the detectors, what should you expect?",
answers:[
"Interface modules for HVAC shutdown",
"Extra batteries only",
"Door closers only",
"Additional horn/strobes only"
],
correct:0,
explanation:"Hospital HVAC systems commonly require fire alarm interfaces for smoke control."
},

{
id:124,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A customer asks why a fire alarm system needs to connect to HVAC equipment. What is the best answer?",
answers:[
"To help control smoke movement during a fire.",
"To improve cooling efficiency.",
"To reduce energy costs.",
"To operate thermostats."
],
correct:0,
explanation:"The primary purpose is life safety through smoke control."
},

{
id:125,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A warehouse contains numerous magnetic door holders. What fire alarm function would you expect?",
answers:[
"Automatic release during alarm conditions",
"Automatic battery charging",
"Automatic sprinkler testing",
"Automatic speaker paging"
],
correct:0,
explanation:"Door holders are commonly released during alarm events to close fire doors."
},

{
id:126,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"While reviewing a quote, you recognize several products but one unfamiliar Edwards part number. What is the best practice?",
answers:[
"Verify the manufacturer's documentation before quoting.",
"Guess based on appearance.",
"Replace it with another module.",
"Ignore it."
],
correct:0,
explanation:"Always verify unfamiliar part numbers to prevent ordering mistakes."
},

{
id:127,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"What is the greatest advantage of quickly recognizing Edwards part numbers?",
answers:[
"Faster and more accurate quoting",
"Less battery maintenance",
"Reduced programming time",
"Fewer inspections"
],
correct:0,
explanation:"Fast product recognition is one of the biggest advantages in Sales Support."
},

{
id:128,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A project includes numerous waterflow switches but no monitor interfaces. What should you do?",
answers:[
"Question whether the required monitoring devices are missing.",
"Delete the waterflow switches.",
"Order more smoke detectors.",
"Ignore it."
],
correct:0,
explanation:"Waterflow switches require monitoring by the fire alarm system."
},

{
id:129,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"You recognize every product on a BOM except one module. Which skill is most important now?",
answers:[
"Researching the part number before quoting",
"Programming the panel",
"Replacing batteries",
"Testing horn volume"
],
correct:0,
explanation:"Sales Support depends on correctly identifying every part number."
},

{
id:130,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"Which approach best describes an experienced estimator reviewing a BOM?",
answers:[
"Looking for products that logically belong together",
"Only counting smoke detectors",
"Checking battery expiration dates",
"Reading the project alphabetically"
],
correct:0,
explanation:"Experienced estimators recognize product relationships rather than reviewing items individually."
},

{
id:131,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A school project includes 60 classrooms. Which product category will likely have one of the highest quantities?",
answers:[
"Notification appliances",
"HVAC interface modules",
"Elevator recall devices",
"Kitchen suppression modules"
],
correct:0,
explanation:"Schools typically require extensive notification coverage."
},

{
id:132,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A sprinkler contractor provides all sprinkler devices. What should the fire alarm contractor still verify?",
answers:[
"The proper fire alarm monitoring interfaces",
"The sprinkler pipe size",
"The sprinkler head color",
"The water pressure"
],
correct:0,
explanation:"Fire alarm contractors still need the correct monitoring hardware."
},

{
id:133,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A quote contains every detector but no detector bases. What should you investigate?",
answers:[
"Whether the bases are listed separately",
"Whether the detectors are addressable",
"The battery voltage",
"The conduit routing"
],
correct:0,
explanation:"Many detectors require compatible bases that may appear as separate line items."
},

{
id:134,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A building has multiple smoke dampers. Which building system are they primarily associated with?",
answers:[
"HVAC",
"Electrical",
"Lighting",
"Communications"
],
correct:0,
explanation:"Smoke dampers are installed within HVAC duct systems."
},

{
id:135,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"Which habit will make you significantly faster at Ban-Koe?",
answers:[
"Instantly recognizing common products and their applications",
"Memorizing battery dates",
"Learning conduit bending",
"Sorting the BOM alphabetically"
],
correct:0,
explanation:"Rapid product recognition is one of the biggest productivity gains for Sales Support."
},

{
id:136,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"When reviewing a project, what is usually more valuable than memorizing specifications?",
answers:[
"Understanding why products are used together",
"Knowing box dimensions",
"Knowing wire colors",
"Knowing shipping weights"
],
correct:0,
explanation:"Understanding product relationships helps identify missing equipment and answer customer questions."
},

{
id:137,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"A project includes several building interfaces. Which skill becomes increasingly valuable?",
answers:[
"Recognizing module applications",
"Calculating conduit fill",
"Programming laptops",
"Replacing batteries"
],
correct:0,
explanation:"Understanding interface modules is essential for reviewing modern projects."
},

{
id:138,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"What should you do whenever an unfamiliar Edwards part number appears on a project?",
answers:[
"Research it before completing the quote",
"Replace it with a familiar product",
"Ignore it",
"Delete it"
],
correct:0,
explanation:"Accurate quoting depends on understanding every product listed."
},

{
id:139,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"Which Sales Support habit reduces quoting mistakes the most?",
answers:[
"Reviewing product relationships before submitting the quote",
"Printing the BOM twice",
"Changing product descriptions",
"Ordering extra batteries"
],
correct:0,
explanation:"Looking for missing companion products catches many quoting errors."
},

{
id:140,
module:1,
lesson:8,
category:"Final Exam",
difficulty:"Hard",
product:"",
question:"By the end of Module 1, what should your biggest improvement be?",
answers:[
"Recognizing fire alarm products and understanding why they are used",
"Programming every fire alarm panel",
"Performing inspections",
"Installing field devices"
],
correct:0,
explanation:"Module 1 is designed to build practical product recognition and application knowledge for Sales Support."
},

{
id:141,
module:1,
lesson:9,
category:"Final Assessment",
difficulty:"Hard",
product:"",
question:"You receive a BOM containing smoke detectors, pull stations, and horn/strobes, but no control interfaces for HVAC equipment shown on the plans. What is your best next step?",
answers:[
"Verify whether the required interface devices were omitted.",
"Remove the HVAC equipment.",
"Delete the smoke detectors.",
"Assume another contractor is supplying everything."
],
correct:0,
explanation:"Good Sales Support specialists compare the BOM to the drawings and verify potential omissions before quoting."
},

{
id:142,
module:1,
lesson:9,
category:"Final Assessment",
difficulty:"Hard",
product:"",
question:"What is usually the fastest way to recognize a missing fire alarm product?",
answers:[
"Knowing which products normally appear together",
"Memorizing wire colors",
"Checking battery sizes",
"Reading only the project title"
],
correct:0,
explanation:"Experienced estimators recognize common product relationships."
},

{
id:143,
module:1,
lesson:9,
category:"Inventory",
difficulty:"Hard",
product:"",
question:"Which skill will help you find products in the warehouse more quickly?",
answers:[
"Recognizing manufacturers and product families",
"Knowing conduit sizes",
"Programming panels",
"Reading sprinkler calculations"
],
correct:0,
explanation:"Product family recognition dramatically speeds warehouse work."
},

{
id:144,
module:1,
lesson:9,
category:"Sales Support",
difficulty:"Hard",
product:"",
question:"A customer provides only an application, not a part number. What should guide your recommendation?",
answers:[
"The function the product must perform",
"The product with the lowest price",
"The first part number in inventory",
"The newest catalog"
],
correct:0,
explanation:"Always choose products based on the required application."
},

{
id:145,
module:1,
lesson:9,
category:"Estimator",
difficulty:"Hard",
product:"",
question:"Before sending a quote, what is one of the most valuable final checks?",
answers:[
"Review the BOM for missing companion products",
"Increase every quantity by one",
"Remove all accessories",
"Change every manufacturer"
],
correct:0,
explanation:"Many quoting errors come from omitted companion products."
},

{
id:146,
module:1,
lesson:9,
category:"Review",
difficulty:"Hard",
product:"",
question:"Which skill is the primary goal of Ban-Koe Academy?",
answers:[
"Instantly recognizing products and understanding where they are used",
"Learning electrical code from memory",
"Replacing field technicians",
"Programming every control panel"
],
correct:0,
explanation:"The Academy is designed to build practical product knowledge for Sales Support."
},

{
id:147,
module:1,
lesson:9,
category:"Scenario",
difficulty:"Hard",
product:"",
question:"While reviewing drawings, you notice several building systems that interact with the fire alarm system. What should you expect to see on the quote?",
answers:[
"Products that provide the required fire alarm interfaces",
"Only notification appliances",
"Only smoke detectors",
"No additional hardware"
],
correct:0,
explanation:"Interface hardware is commonly required when the fire alarm system communicates with other building systems."
},

{
id:148,
module:1,
lesson:9,
category:"Review",
difficulty:"Hard",
product:"",
question:"What separates an experienced Sales Support specialist from a beginner?",
answers:[
"They recognize products, applications, and common combinations quickly.",
"They memorize every catalog page.",
"They only focus on prices.",
"They only review detector counts."
],
correct:0,
explanation:"Experience comes from recognizing patterns, applications, and product relationships."
},

{
id:149,
module:1,
lesson:9,
category:"Final Review",
difficulty:"Hard",
product:"",
question:"Which habit will save the most time when reviewing future projects?",
answers:[
"Recognizing product families instead of looking up every part number",
"Counting wire colors",
"Skipping accessory pages",
"Ignoring unfamiliar products"
],
correct:0,
explanation:"Fast product recognition dramatically improves quoting efficiency."
},

{
id:150,
module:1,
lesson:9,
category:"Graduation",
difficulty:"Hard",
product:"",
question:"You have completed Module 1. What should you now be comfortable doing?",
answers:[
"Recognizing core fire alarm concepts, reviewing BOMs, and understanding common fire alarm interfaces",
"Programming every fire alarm panel from memory",
"Installing complete fire alarm systems",
"Performing annual inspections without supervision"
],
correct:0,
explanation:"Module 1 builds the foundation for Sales Support: understanding fire alarm concepts, recognizing products, reading BOMs, and identifying common interfaces."
},

{
id:151,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"EST4",
question:"Which Edwards platform is described as using a new network architecture for fire alarm, mass notification, and integration?",
answers:[
"EST4",
"EST3",
"Genesis G4",
"SIGA-IM2"
],
correct:0,
explanation:"The official Edwards EST4 page describes EST4 as a new network architecture platform for fire alarm, mass notification, and building integration."
},

{
id:152,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"EST4",
question:"Which EST4 feature provides remote, device-independent access to system status reports?",
answers:[
"On-board webserver",
"Local bell circuit",
"Manual pull station",
"Conventional IDC"
],
correct:0,
explanation:"Edwards lists an on-board webserver for remote, device-independent access to system status reports."
},

{
id:153,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"EST3",
question:"EST3 is best described as what kind of platform?",
answers:[
"A modular control platform for standalone or multi-panel networks",
"A notification-only wall strobe",
"A detector base",
"A sprinkler valve"
],
correct:0,
explanation:"Edwards describes EST3 as a modular control platform for standalone and multi-panel network applications."
},

{
id:154,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"EST3X",
question:"According to Edwards, EST3X can network with up to how many EST3X nodes?",
answers:[
"8",
"2",
"16",
"64"
],
correct:0,
explanation:"The EST3X platform description states networking with up to eight EST3X nodes."
},

{
id:155,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"EST3X",
question:"EST3X can integrate with an EST3 network up to how many total nodes?",
answers:[
"64",
"8",
"32",
"4"
],
correct:0,
explanation:"Edwards states EST3X can integrate with EST3 networks comprising as many as 64 nodes."
},

{
id:156,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"iO-Series Intelligent Fire Alarm Systems",
question:"Which iO Series capability helps automatically organize connected devices?",
answers:[
"Automatic device mapping",
"Manual map-only mode",
"Battery bypass",
"Unsynchronized NAC"
],
correct:0,
explanation:"The iO Series description lists automatic device mapping as a key capability."
},

{
id:157,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"iO Communications Bridge",
question:"The iO Communications Bridge is best categorized as what?",
answers:[
"A communications accessory in the iO Series ecosystem",
"A smoke detector",
"A horn-strobe",
"A pull station"
],
correct:0,
explanation:"In the Edwards library, the iO Communications Bridge is categorized as a communications accessory."
},

{
id:158,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"EDGE-ML Fire Alarm Systems",
question:"Which Edge Series point is accurate?",
answers:[
"It is designed for mid-sized applications with migration-ready compatibility.",
"It is only a conventional 2-zone panel.",
"It has no display options.",
"It cannot support remote annunciators."
],
correct:0,
explanation:"Edwards positions Edge for mid-sized applications with migration-ready compatibility features."
},

{
id:159,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"Signature Optica Smoke Heat and CO Detector",
question:"What sensing combination is included in the Signature Optica Smoke Heat and CO Detector?",
answers:[
"Smoke, heat, and CO",
"Heat only",
"Strobe and horn",
"Waterflow and tamper"
],
correct:0,
explanation:"The model name and official listing identify smoke, heat, and carbon monoxide sensing in one detector."
},

{
id:160,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"Signature Optica Smoke and CO Detector",
question:"Which statement matches the Signature Optica Smoke and CO Detector listing?",
answers:[
"It combines smoke and CO detection.",
"It is a notification appliance.",
"It is a control relay module.",
"It is a power supply module."
],
correct:0,
explanation:"The official model listing identifies this detector as a smoke and CO combination model."
},

{
id:161,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"Intelligent CO Detector",
question:"The Intelligent CO Detector belongs to which Edwards family in the library?",
answers:[
"Signature Series",
"Genesis",
"EST4",
"Edge Series"
],
correct:0,
explanation:"The product is grouped under Signature Series intelligent initiating devices in the library."
},

{
id:162,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"SIGA-IM2 Isolator Module",
question:"SIGA-IM2 is categorized in the library as what type of module?",
answers:[
"Intelligent Isolator Module",
"Speaker Module",
"Detector Base",
"Battery Charger"
],
correct:0,
explanation:"The Edwards product library categorizes SIGA-IM2 as an intelligent isolator module."
},

{
id:163,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"High Power Control Relay Module",
question:"What is the primary function category for the High Power Control Relay Module?",
answers:[
"Intelligent Control Relay Module",
"Intelligent Detector",
"Notification Appliance",
"Fire Alarm Panel"
],
correct:0,
explanation:"It is listed as an intelligent control relay module in Edwards I/O module literature."
},

{
id:164,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"Signal Modules with Class A Operation",
question:"Signal Modules with Class A Operation are categorized as what in the library?",
answers:[
"Intelligent Signal Module",
"Intelligent CO Detector",
"Ceiling Speaker-Strobe",
"Control Panel"
],
correct:0,
explanation:"The product is categorized as an intelligent signal module supporting Class A operation."
},

{
id:165,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"Genesis LED G4 Series Wall Mount Notification Devices",
question:"Which configurable option is explicitly associated with Genesis notification products in the library content?",
answers:[
"Selectable candela output and flash rate",
"SLC device addressing only",
"Ethernet bridge licensing",
"Loop expansion to 64 nodes"
],
correct:0,
explanation:"Genesis family descriptions reference selectable candela output and flash rate among configurable options."
},

{
id:166,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
question:"The Genesis LED GCS series is categorized as which device type?",
answers:[
"Ceiling mount speaker and speaker-strobe",
"Intelligent smoke detector",
"Control relay module",
"Panel CPU"
],
correct:0,
explanation:"In the Edwards library, GCS series devices are categorized as ceiling mount speakers and speaker-strobes."
},

{
id:167,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"EST4",
question:"What documented migration advantage is associated with EST4?",
answers:[
"Backward compatibility with EST3 wiring, devices, and many local rail modules",
"No compatibility with previous Edwards systems",
"Requires only conventional initiating devices",
"Eliminates network programming"
],
correct:0,
explanation:"The EST4 platform documentation highlights backward compatibility with EST3 wiring, devices, and most local rail modules."
},

{
id:168,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"EST4",
question:"Which network media are explicitly listed for EST4 operation?",
answers:[
"Fiber, Ethernet, or copper",
"Only fiber",
"Only copper",
"Coax and serial only"
],
correct:0,
explanation:"EST4 literature describes operation using fiber, Ethernet, or copper wiring options."
},

{
id:169,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"EST3",
question:"Why is EST3 often considered flexible over a system lifecycle?",
answers:[
"Its operating features are software-controlled",
"It has no configurable options",
"It only supports single-panel sites",
"It cannot be upgraded after installation"
],
correct:0,
explanation:"EST3 documentation emphasizes software-controlled operating features for site flexibility and future changes."
},

{
id:170,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"EST3",
question:"Which set of functions is explicitly associated with EST3 unified applications?",
answers:[
"Fire alarm, security, and mass notification",
"Lighting control, CCTV, and access cards",
"Only smoke detection and paging",
"Sprinkler flow and elevator dispatch only"
],
correct:0,
explanation:"The official EST3 description includes unified fire alarm, security, and mass notification functions."
},

{
id:171,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"iO-Series Intelligent Fire Alarm Systems",
question:"Which pair of iO Series features is listed in the updated library?",
answers:[
"Automatic device mapping and optional Ethernet connectivity",
"Fiber-only networking and integrated voice evacuation",
"Fixed conventional zones and no addressing",
"Built-in waterflow switches and tamper valves"
],
correct:0,
explanation:"The iO Series entry includes automatic device mapping and optional Ethernet connectivity."
},

{
id:172,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"EDGE-ML Fire Alarm Systems",
question:"Which Edge Series capacity statement matches the library content?",
answers:[
"Up to 4 loops at 250 devices per loop",
"One loop only with no expansion",
"Up to 64 network nodes",
"No support for remote annunciators"
],
correct:0,
explanation:"The Edge Series data notes support for up to four loops with up to 250 devices per loop."
},

{
id:173,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"Signature Optica Smoke Heat and CO Detector",
question:"Which statement best differentiates the Signature Optica Smoke Heat and CO model?",
answers:[
"It combines smoke, heat, and CO sensing in one detector",
"It is a wall strobe for notification",
"It is a Class A signal module",
"It is a panel communications bridge"
],
correct:0,
explanation:"The model is listed as a multi-criteria detector that combines smoke, heat, and CO sensing."
},

{
id:174,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"Intelligent CO Detector",
question:"When comparing Signature detector listings, what is accurate about the Intelligent CO Detector entry?",
answers:[
"It is listed as a CO detector category, not the smoke/heat/CO model",
"It is the same model as Signature Optica smoke/heat/CO",
"It is a Genesis speaker-strobe",
"It is an EST3X panel option"
],
correct:0,
explanation:"The library separates the Intelligent CO Detector entry from multi-criteria Signature Optica combinations."
},

{
id:175,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"SIGA-IM2 Isolator Module",
question:"What is the practical role of the SIGA-IM2 Isolator Module in loop architecture?",
answers:[
"Help localize and manage loop fault impact",
"Provide audible occupant notification",
"Detect smoke in ducts",
"Power the panel touchscreen"
],
correct:0,
explanation:"The SIGA-IM2 description explains its use for managing loop fault impact based on placement and design."
},

{
id:176,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"High Power Control Relay Module",
question:"The High Power Control Relay Module is primarily used to do what?",
answers:[
"Interface panel logic with controlled external circuits",
"Serve as a smoke detector base",
"Generate low-frequency audible signals",
"Display panel network events"
],
correct:0,
explanation:"Its listed purpose is control relay interfacing between panel logic and external circuits."
},

{
id:177,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"Signal Modules with Class A Operation",
question:"In the library context, what does Class A operation most directly relate to for signal modules?",
answers:[
"A return-path wiring topology for survivability goals",
"A detector sensitivity class",
"A horn volume setting",
"A touchscreen user role"
],
correct:0,
explanation:"The signal module entry explains Class A as a return-path topology concept in life safety circuit design."
},

{
id:178,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"Genesis LED G4 Series Wall Mount Notification Devices",
question:"Which configurable pair is identified in Genesis notification content?",
answers:[
"Candela output and flash rate",
"Device address and loop class only",
"CO threshold and heat threshold",
"CPU clock and memory size"
],
correct:0,
explanation:"Genesis descriptions reference selectable candela output and flash rate among field-configurable options."
},

{
id:179,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"Genesis LED G1 Series Compact Notification Devices",
question:"What best describes the Genesis LED G1 Series entry in the library?",
answers:[
"A compact notification appliance within the Genesis LED family",
"An intelligent initiating detector",
"A control relay module",
"A network firewall module"
],
correct:0,
explanation:"The G1 series is categorized as a compact notification appliance in the Genesis family."
},

{
id:180,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"Genesis LED G4LF Series Low Frequency",
question:"When is the Genesis G4LF series typically selected?",
answers:[
"When low-frequency signaling is required by the design basis",
"When only SLC communication is needed",
"When replacing panel CPUs",
"When adding monitor modules"
],
correct:0,
explanation:"The G4LF entry is tied to low-frequency signaling applications and panel-driven notification logic."
},

{
id:181,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
question:"Which application description aligns with Genesis GCS ceiling speaker-strobes?",
answers:[
"Ceiling-mounted audible/visual notification in configured system logic",
"Loop isolation for SLC faults",
"Panel-to-panel communications bridging",
"Detection-only initiating service"
],
correct:0,
explanation:"The GCS entry describes ceiling-mounted speaker-strobe notification controlled by configured system logic."
},

{
id:182,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Hard",
product:"EST3X",
question:"Which statement correctly combines both EST3X network limits referenced in the library?",
answers:[
"Up to 8 EST3X nodes, and integration with EST3 networks up to 64 nodes",
"Up to 64 EST3X nodes with no EST3 integration",
"Up to 8 nodes total in any architecture",
"No network operation is supported"
],
correct:0,
explanation:"The updated EST3X entries distinguish local EST3X networking (up to 8 nodes) from EST3 integration (up to 64 nodes)."
},

{
id:183,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"Signature Optica Smoke and CO Detector",
question:"Which sensing combination matches the Signature Optica Smoke and CO Detector model name?",
answers:[
"Smoke and CO",
"Smoke, heat, and CO",
"Heat and CO only",
"CO only"
],
correct:0,
explanation:"This model is specifically listed as the smoke and CO detector variant."
}

];
