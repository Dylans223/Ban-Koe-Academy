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
question:"A drawing shows horn/strobes connected from the fire alarm panel to notification appliances. Which circuit should the estimator trace for that output path?",
answers:[
"SLC",
"NAC",
"IDC",
"LAN"
],
correct:1,
explanation:"The notification output path is the NAC. The SLC communicates with addressable devices; it is not the horn/strobe output circuit."
},

{
id:25,
module:1,
lesson:1,
category:"Fundamentals",
difficulty:"Easy",
product:"",
question:"A technician is tracing the addressable circuit connecting intelligent detectors and modules back to the fire alarm control panel. Which circuit is being traced?",
answers:[
"NAC",
"SLC",
"120 VAC",
"Telephone Line"
],
correct:1,
explanation:"The SLC is the communication path between the panel and addressable detectors, modules, and other addressable devices."
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
question:"A building has doors that must close automatically when the fire alarm activates. Which fire alarm function should the design review include?",
answers:[
"Control output for door-holder release",
"Additional speaker wattage",
"Battery charging logic",
"Manual pull station reset"
],
correct:0,
explanation:"Electrically held-open doors are commonly released by a fire alarm control output during an alarm condition."
},

{
id:32,
module:1,
lesson:1,
category:"Applications",
difficulty:"Medium",
product:"",
question:"A project includes smoke dampers in the ductwork. What type of fire alarm interface is commonly required?",
answers:[
"Control output to operate the damper",
"Additional strobe power only",
"A dedicated SLC amplifier",
"A photoelectric sensor reset"
],
correct:0,
explanation:"Smoke dampers are commonly controlled by the fire alarm system so they can close and help limit smoke movement."
},

{
id:33,
module:1,
lesson:1,
category:"Sales Support",
difficulty:"Medium",
product:"",
question:"An elevator recall sequence is required on alarm. Which building system should be reviewed as part of the fire alarm interface scope?",
answers:[
"Elevator controls",
"Internet router",
"Security camera network",
"Parking gate controls"
],
correct:0,
explanation:"Elevators commonly interface with the fire alarm system for recall and life-safety sequencing."
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
question:"A smoke damper must close during a fire alarm. Which system function is normally required to accomplish that?",
answers:[
"Control output from the fire alarm system",
"A separate lighting schedule",
"A battery test cycle",
"The annunciator panel alone"
],
correct:0,
explanation:"Smoke dampers are usually activated by a fire alarm control output to close and isolate smoke movement."
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
question:"Why are fire alarm interfaces important in mixed-use buildings?",
answers:[
"They allow the fire alarm system to coordinate with building systems such as doors, dampers, and elevators.",
"They increase speaker volume.",
"They replace batteries.",
"They eliminate programming."
],
correct:0,
explanation:"Fire alarm systems often interface with doors, dampers, elevators, and other life-safety systems to respond correctly to an alarm."
},

{
id:55,
module:1,
lesson:2,
category:"Applications",
difficulty:"Medium",
product:"",
question:"A fire alarm system is expected to coordinate with elevator recall. Which system is being interfaced?",
answers:[
"Elevator controls",
"Coffee machines",
"Printers",
"Televisions"
],
correct:0,
explanation:"Fire alarm systems commonly interface with elevators for recall and life-safety sequencing."
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
question:"Which skill improves fastest when you can recognize product families and understand their applications?",
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
question:"Which skill is most critical when evaluating fire alarm products for a quote or BOM review?",
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
question:"What category describes a signal module designed for Class A operation?",
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
question:"Which configurable option is associated with Genesis notification products?",
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
id:171,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"iO-Series Intelligent Fire Alarm Systems",
question:"Which pair of iO Series features is associated with the product family?",
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
question:"Which Edge Series capacity statement is accurate?",
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
question:"For signal modules, what does Class A operation most directly describe?",
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
question:"Which configurable pair is associated with Genesis notification devices?",
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
question:"What best describes the Genesis LED G1 Series?",
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
},

{
id:184,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Easy",
product:"SIGA-DDOS Intelligent Duct Smoke Detector",
question:"What is the SIGA-DDOS?",
answers:[
"An intelligent duct smoke detector",
"A control relay module",
"A notification appliance",
"A power supply"
],
correct:0,
explanation:"The SIGA-DDOS is Edwards' intelligent duct smoke detector, used to detect smoke in a building's HVAC ductwork."
},

{
id:185,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Easy",
product:"SIGA-DDOS Intelligent Duct Smoke Detector",
question:"What signaling circuit does the SIGA-DDOS use?",
answers:[
"Signature SLC",
"A conventional NAC circuit",
"A dry contact-only circuit",
"An RS-485 network only"
],
correct:0,
explanation:"The SIGA-DDOS is a Signature SLC device, addressed on the Signature Signaling Line Circuit."
},

{
id:186,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Easy",
product:"SIGA-DDOS Intelligent Duct Smoke Detector",
question:"How many Signature SLC addresses does a SIGA-DDOS require?",
answers:[
"One",
"Two",
"Four",
"None — it is a conventional device"
],
correct:0,
explanation:"The SIGA-DDOS requires one address on the Signature SLC."
},

{
id:187,
module:1,
lesson:10,
category:"Applications",
difficulty:"Medium",
product:"SIGA-DDOS Intelligent Duct Smoke Detector",
question:"A project specifies a SIGA-DDOS and requires the relay function that the detector's onboard auxiliary relay can provide. What should the estimator recognize?",
answers:[
"The SIGA-DDOS already provides that relay function, so an additional external relay should not automatically be added",
"A SIGA-CT1 must always be added alongside every SIGA-DDOS",
"Duct detectors never require any relay or control function",
"The SIGA-DDOS cannot provide any relay function"
],
correct:0,
explanation:"The SIGA-DDOS has a built-in auxiliary Form C relay. When that onboard relay satisfies the application's relay requirement, an additional external relay is not automatically needed. Other duct-detector configurations or applications may still require a separate device such as a SIGA-CT1, CT2, or CR depending on the system design."
},

{
id:188,
module:1,
lesson:10,
category:"Applications",
difficulty:"Medium",
product:"iO-Series Intelligent Fire Alarm Systems",
question:"For an appropriately small building project, which Edwards platform family should be considered as an alternative to automatically selecting an EST4?",
answers:[
"The iO Series",
"EST3X",
"A duct smoke detector",
"A notification power supply"
],
correct:0,
explanation:"Edwards positions the iO Series as an intelligent system family for small to mid-sized applications. For a project sized appropriately for that family, it should be considered rather than defaulting to EST4 for every building."
},

{
id:189,
module:1,
lesson:10,
category:"Control & Monitor Modules",
difficulty:"Easy",
product:"SIGA-DDOS Intelligent Duct Smoke Detector",
question:"What relay feature is built into the SIGA-DDOS?",
answers:[
"One onboard auxiliary Form C relay",
"Two onboard Form A relays",
"No relay — an external module is always required",
"A built-in NAC power supply"
],
correct:0,
explanation:"The SIGA-DDOS includes one onboard auxiliary relay with Form C contacts (RELAY_NC, RELAY_C, RELAY_NO terminals)."
},

{
id:190,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"iO64",
question:"What is the maximum device capacity of an Edwards iO64?",
answers:[
"64 devices",
"125 devices",
"250 devices",
"1,000 devices"
],
correct:0,
explanation:"The Edwards brochure identifies the iO64 as a fixed-capacity small-building panel supporting up to 64 devices of any type."
},

{
id:191,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Easy",
product:"iO64",
question:"Can the device capacity of an iO64 be expanded?",
answers:[
"No",
"Yes, by adding another controller card",
"Yes, by doubling every loop",
"Only if it is paired with an EST4"
],
correct:0,
explanation:"The iO64 has a fixed device capacity and cannot be expanded beyond its 64-device limit."
},

{
id:192,
module:1,
lesson:10,
category:"Applications",
difficulty:"Medium",
product:"iO64",
question:"A small building has 48 addressable devices. Which Edwards platform should be considered based on the iO Series product family?",
answers:[
"iO64",
"iO1000",
"EST4 only",
"A communications bridge"
],
correct:0,
explanation:"The iO64 supports 64 devices and has fixed, non-expandable capacity, which makes it a purpose-built option for an appropriately small building with 48 addressable devices."
},

{
id:193,
module:1,
lesson:10,
category:"Edwards Product Library",
difficulty:"Medium",
product:"iO1000",
question:"Which statement best describes the difference between iO64 and iO1000?",
answers:[
"iO64 is fixed-capacity at 64 devices, while iO1000 is the expandable platform up to 1,000 addressable devices",
"iO64 supports 1,000 devices and iO1000 supports only 64",
"Both are identical except for their external cabinet color",
"The iO1000 is not an Edwards product"
],
correct:0,
explanation:"The brochure distinguishes iO64 as a fixed-capacity 64-device platform and iO1000 as the expandable platform supporting up to 1,000 addressable devices."
},

{
id:194,
module:1,
lesson:10,
category:"BOM Recognition",
difficulty:"Medium",
product:"SIGA-270 Single Action Intelligent Pull Station",
question:"A fire alarm drawing specifies single-action manual pull stations at seven locations. Which Edwards device should be included in the takeoff?",
answers:[
"SIGA-270 Single Action Intelligent Pull Station",
"SIGA-278 Double Action Intelligent Pull Station",
"SIGA-CC1 Single Input Signal Module",
"SIGA-CT1 Single Input Module"
],
correct:0,
explanation:"The verified Edwards SIGA-270 is the single-action intelligent pull station, so the takeoff line is SIGA-270, quantity 7."
},

{
id:195,
module:1,
lesson:10,
category:"BOM Recognition",
difficulty:"Medium",
product:"SIGA-278 Double Action Intelligent Pull Station",
question:"The fire alarm notes specify double-action manual pull stations at four designated locations. Which Edwards device should be included in the takeoff?",
answers:[
"SIGA-278 Double Action Intelligent Pull Station",
"SIGA-270 Single Action Intelligent Pull Station",
"SIGA-CC1 Single Input Signal Module",
"SIGA-CR Control Relay Module"
],
correct:0,
explanation:"The verified Edwards SIGA-278 is the double-action intelligent pull station, so the takeoff line is SIGA-278, quantity 4."
},

{
id:196,
module:1,
lesson:10,
category:"BOM Recognition",
difficulty:"Hard",
product:"SIGA-270 and SIGA-278 Intelligent Pull Stations",
question:"A two-floor drawing calls for four single-action manual pull stations and three double-action manual pull stations. What should appear on the BOM?",
answers:[
"SIGA-270 — Qty 4; SIGA-278 — Qty 3",
"SIGA-270 — Qty 7 only",
"SIGA-278 — Qty 7 only",
"SIGA-270 — Qty 3; SIGA-278 — Qty 4"
],
correct:0,
explanation:"The takeoff must preserve both the device type and quantity: four single-action locations require SIGA-270 quantity 4, and three double-action locations require SIGA-278 quantity 3."
},

{
id:197,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Easy",
product:"G4LF and G4LFV Genesis LED Appliances",
question:"Which Genesis family is the low-frequency horn-strobe rather than the horn-only appliance?",
answers:["G4LF","G4LFV","G4 Series standard wall appliance","GCS ceiling speaker-strobe"],
correct:1,
explanation:"G4LF is the Genesis LED wall-mount low-frequency horn. G4LFV is the distinct low-frequency horn-strobe."
},
{
id:198,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Medium",
product:"G4LF Genesis LED Wall-Mount Low-Frequency Horn",
question:"What audible frequency is documented for the Genesis G4LF/G4LFV low-frequency appliances?",
answers:["250 Hz","520 Hz","1,000 Hz","60 Hz"],
correct:1,
explanation:"The supplied Genesis datasheets document 520 Hz low-frequency audible output."
},
{
id:199,
module:1,
lesson:10,
category:"Applications",
difficulty:"Medium",
product:"GOCT 4-Inch Octagon Box Adapter Plate",
question:"A drawing specifies a G4LFV appliance mounted on a 4-inch octagon box. Which additional Genesis component is required by that mounting relationship?",
answers:["G4TR red trim plate","GRT-10 removal tool","GOCT 4-inch octagon box adapter plate","G4RSB red surface-mount box"],
correct:2,
explanation:"GOCT is the documented 4-inch octagon box adapter plate required for the G4LF/G4LFV to 4-inch octagon box installation relationship."
},
{
id:200,
module:1,
lesson:10,
category:"Control & Monitor Modules",
difficulty:"Medium",
product:"GRSW-10 Room-Side Wiring Plate",
question:"Which Genesis accessory is the required room-side wiring plate and is ordered separately in packs of 10?",
answers:["GRT-10","GRSW-10","G4TW","G4WSB"],
correct:1,
explanation:"GRSW-10 is the required room-side wiring plate and is ordered separately in packs of 10."
},
{
id:201,
module:1,
lesson:10,
category:"Wiring",
difficulty:"Medium",
product:"G4LF Genesis LED Wall-Mount Low-Frequency Horn",
question:"Which conductor range is documented for the applicable Genesis appliance wiring?",
answers:["20–24 AWG","6–8 AWG","12–18 AWG","2–4 AWG"],
correct:2,
explanation:"The supplied Genesis datasheets document 12–18 AWG wiring."
},
{
id:202,
module:1,
lesson:10,
category:"BOM Recognition",
difficulty:"Hard",
product:"G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe",
question:"A takeoff calls for a wall-mounted low-frequency horn-strobe on a 4-inch octagon box. Which BOM set matches the documented appliance and mounting relationship?",
answers:["G4LF only, with no room-side wiring plate","G4LFV, GRSW-10, and GOCT","G4TW and G4WSB only","GRT-10 for each appliance, with no adapter plate"],
correct:1,
explanation:"The appliance is G4LFV. GRSW-10 is the required room-side wiring plate, and GOCT is required for the documented 4-inch octagon box relationship."
},
{
id:203,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Easy",
product:"G1A Genesis LED Compact Wall-Mount Horn",
question:"What is G1A in the Genesis G1 family?",
answers:["A wall-mounted strobe","A wall-mounted horn","A wall-mounted horn-strobe","A ceiling speaker-strobe"],
correct:1,
explanation:"G1A is the Genesis LED compact wall-mount horn family."
},
{
id:204,
module:1,
lesson:10,
category:"Product Recognition",
difficulty:"Easy",
product:"G1V Genesis LED Compact Wall-Mount Strobe",
question:"Which G1 family provides strobe-only notification?",
answers:["G1AV","G1A","G1V","G4LFV"],
correct:2,
explanation:"G1V is the Genesis LED compact wall-mount strobe family. G1A is horn-only and G1AV is horn-strobe."
},
{
id:205,
module:1,
lesson:10,
category:"Control & Monitor Modules",
difficulty:"Medium",
product:"G1AV Genesis LED Compact Wall-Mount Horn-Strobe",
question:"Which G1 family provides both audible and visual notification?",
answers:["G1V","G1A","GCS","G1AV"],
correct:3,
explanation:"G1AV is the wall-mounted horn-strobe family, providing both audible and visual notification."
},
{
id:206,
module:1,
lesson:10,
category:"Applications",
difficulty:"Medium",
product:"G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe",
question:"A drawing specifies a wall-mounted audible and visual notification appliance with red housing and FIRE marking. Which G1 product matches the documented function, color, and marking?",
answers:["G1ARF","G1VRF","G1AVRF","G1AVRN"],
correct:2,
explanation:"G1AV is the horn-strobe family, R identifies red housing, and F identifies FIRE marking, producing G1AVRF."
},
{
id:207,
module:1,
lesson:10,
category:"BOM Recognition",
difficulty:"Hard",
product:"G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe",
question:"A drawing lists seven new wall horn-strobe locations with red housing and FIRE marking. What should appear on the BOM?",
answers:["G1A — Qty 7","G1VRF — Qty 7","G1AVRF — Qty 7","G4LFV — Qty 7"],
correct:2,
explanation:"The G1AV function is horn-strobe, R is red housing, F is FIRE marking, and the drawing has seven new locations."
},

{
id:208,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Hard",
product:"EST4 Network Components",
question:"A campus project requires multiple EST4 systems to communicate across a network. Which component relationship should the design review account for?",
answers:[
"Network controllers, with network expansion components such as extenders or adders as required by the design",
"Only detector bases and manual stations",
"Only NAC appliances with no network hardware",
"A standalone iO64 with no network components"
],
correct:0,
explanation:"The EST4 product material identifies network controllers for system communication and network extenders or network adder modules for network expansion where the design requires them."
},
{
id:209,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Remote Annunciators",
question:"An EST4 project requires system status and control from a security desk away from the main cabinet. Which panel-related component should be evaluated?",
answers:[
"Remote annunciator",
"Detector base",
"NAC isolator",
"Waterflow switch"
],
correct:0,
explanation:"The EST4 material describes remote annunciators as remote user-interface stations that display system status and provide control functions from locations such as security desks and command centers."
},
{
id:210,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Audio Units and Interfaces",
question:"A project requires emergency voice messages to be distributed to designated audio zones. Which EST4 relationship should be reviewed?",
answers:[
"Audio units/interfaces paired with zoned audio amplifiers",
"Detector bases paired with monitor modules",
"Network firewalls paired with pull stations",
"NAC isolators paired with waterflow switches"
],
correct:0,
explanation:"The EST4 product material identifies audio units and interfaces for voice evacuation and emergency communications, with zoned audio amplifiers distributing messages to designated audio zones."
},
{
id:211,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Hard",
product:"EST4 and iO Series",
question:"A project requires a modular, high-capacity platform for fire alarm, mass notification, and building integration, with possible EST3 migration needs. Which family should be evaluated first?",
answers:[
"EST4",
"iO64 only",
"SIGA-CC1",
"Genesis G1"
],
correct:0,
explanation:"The Academy material describes EST4 as a modular, high-capacity platform for fire alarm, mass notification, and building integration, with backward compatibility to EST3 infrastructure."
},
{
id:212,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Network Firewall",
question:"An EST4 networked system requires security hardware to protect communications from external cyber threats. Which component addresses that requirement?",
answers:[
"EST4 network firewall",
"EST4 remote annunciator",
"Genesis speaker-strobe",
"SIGA-CT1"
],
correct:0,
explanation:"The EST4 product material describes network firewalls as security hardware that protects the EST4 network from external cyber threats."
},
{
id:213,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Central Processing Unit",
question:"When reviewing an EST4 configuration, which component is responsible for processing and operating the platform rather than providing a remote user interface?",
answers:[
"Central processing unit",
"Remote annunciator",
"Network extender",
"Zoned audio amplifier"
],
correct:0,
explanation:"The EST4 product material identifies the CPU as the processing hardware responsible for operating the platform. Remote annunciators provide user interface functions, while network and audio components serve different roles."
},
{
id:214,
module:1,
lesson:10,
category:"Estimator",
difficulty:"Hard",
product:"EST4 Voice Evacuation Configuration",
question:"An EST4 project specification adds voice evacuation to a fire alarm scope that previously listed only detection and notification devices. What should the estimator verify before releasing the BOM?",
answers:[
"That the required audio units/interfaces and zoned audio amplifiers are accounted for",
"That all detector bases are replaced with pull stations",
"That network firewalls are removed because audio replaces networking",
"That the project is changed to an iO64 automatically"
],
correct:0,
explanation:"The EST4 material identifies audio units/interfaces and zoned audio amplifiers as the hardware relationships for voice evacuation and emergency communications."
},
{
id:215,
module:1,
lesson:10,
category:"Estimator",
difficulty:"Hard",
product:"EST4 Remote Annunciators",
question:"The security-desk location appears on the plans, but the EST4 equipment list contains no remote user-interface component. What should the estimator review?",
answers:[
"Whether an EST4 remote annunciator is required for the stated status and control location",
"Whether all notification appliances should be deleted",
"Whether the security desk should receive a detector base",
"Whether the network should be replaced with a NAC"
],
correct:0,
explanation:"Remote annunciators are the EST4 components described for remote status display and control from locations such as security desks. The discrepancy should be reviewed against the project scope before release."
},
{
id:216,
module:1,
lesson:10,
category:"Estimator",
difficulty:"Hard",
product:"EST4 Network Expansion",
question:"A design revision changes an EST4 project from a single-panel arrangement to a larger networked arrangement. Which scope change should be reconciled across the documents?",
answers:[
"Network controllers and any required network extenders or adders, along with network security requirements",
"Only the color of the notification appliances",
"Only the detector base type",
"Only the manual station action type"
],
correct:0,
explanation:"The EST4 product material identifies network controllers, network expansion hardware, and network firewalls as distinct networked-system considerations. A design revision should be reconciled against those requirements before quoting."
},
{
id:217,
module:1,
lesson:10,
category:"Scenario",
difficulty:"Hard",
product:"EST4 Project Coordination",
question:"The riser shows a networked EST4 system with voice evacuation, while the equipment schedule lists only a basic panel cabinet. What is the best sales-support response?",
answers:[
"Reconcile the riser, schedule, and EST4 requirements, then document the unresolved panel, network, and audio scope before quoting",
"Quote the basic cabinet and assume the other components are included",
"Replace the EST4 with an iO64 without reviewing the project",
"Ignore the riser because the equipment schedule always controls every detail"
],
correct:0,
explanation:"The EST4 material identifies separate panel, network, and audio relationships. Conflicting project documents should be reconciled and unresolved scope documented before quote release."
},
{
id:218,
module:1,
lesson:10,
category:"Estimator",
difficulty:"Hard",
product:"EST4 Network and Audio Scope",
question:"A revision adds EST4 networking and voice evacuation to a project. What qualitative estimating impact should be reviewed before the quote is updated?",
answers:[
"Additional panel, network, audio, wiring, and related hardware requirements may affect project cost",
"The revision cannot affect the quote because the control panel remains the same family",
"Only the color of the notification appliances can change project cost",
"The added functions eliminate the need to review the BOM"
],
correct:0,
explanation:"The Academy material states that interface devices can affect wiring, hardware, and project costs. EST4 networking and voice evacuation introduce additional documented component relationships that should be reconciled in the estimate."
},
{
id:219,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Network Controllers",
question:"An EST4 project must use a specified network medium between nodes. Which component selection directly determines the available network-media option?",
answers:[
"4-NET network controller",
"Remote annunciator",
"Zoned audio amplifier",
"Cabinet chassis"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0008", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Network Controllers" },
explanation:"The official Edwards network-controller sheet identifies 4-NET controllers as SFP transceivers that provide physical-media options, with controller selection determining the network media."
},
{
id:220,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Hard",
product:"EST4 Network Extender",
question:"A long cable run is being added between two EST4 network locations using 4-NET-XT extenders. What should the BOM review verify?",
answers:[
"Two extenders are included, one at each end of the cable run",
"One extender is included at the main panel only",
"A zoned amplifier replaces the second extender",
"A remote annunciator replaces the cable-end extender"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0009", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Network Extender" },
explanation:"The official Edwards network-extender sheet states that two 4-NET-XT modules are needed to complete a circuit path, with one at each end of the cable run."
},
{
id:221,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Hard",
product:"EST4 Network Adder Module",
question:"A design needs network branches leaving an EST4 cabinet for a star or mesh arrangement. Which component relationship should be investigated?",
answers:[
"4-NET-AD supplementary SFP ports connected to the node's 4-CPU board",
"4-FWAL firewall ports connected directly to speaker circuits",
"Remote annunciator LEDs connected to detector bases",
"Zoned amplifier outputs connected to network controllers"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0015", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Network Adder Module" },
explanation:"The official Edwards adder sheet identifies two supplementary SFP ports for branching and USB connections to the node's 4-CPU board."
},
{
id:222,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Hard",
product:"EST4 Network Firewall",
question:"An EST4 design includes an external network connection that must be protected and may use IPv4 or IPv6 addressing. Which component should be evaluated?",
answers:[
"4-FWAL network firewall",
"4-NET-XT network extender",
"4-LCD display module",
"System power supply"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0012", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Network Firewalls" },
explanation:"The official Edwards firewall sheet describes 4-FWAL as a secure interface between EST4 and outside networks and states support for both IPv4 and IPv6 networks."
},
{
id:223,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Hard",
product:"EST4 Central Processing Unit",
question:"A BOM includes a 4-CPU and separate network and audio components. Which architecture role should the estimator associate with the 4-CPU?",
answers:[
"System-wide network communication, node control, and audio-data control",
"Only the remote display function at a security desk",
"Only the physical mounting of batteries",
"Only the speaker circuit output"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0010", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Central Processing Unit" },
explanation:"The official Edwards CPU sheet describes the 4-CPU as the nexus for system-wide network communication, controller of nodes, and controller of audio data."
},
{
id:224,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Remote Annunciators",
question:"A project requires system status and control at a location away from the main EST4 cabinet. Which component should be evaluated?",
answers:[
"EST4 remote annunciator connected over the life-safety network",
"4-NET-XT alone with no user-interface component",
"System power supply mounted as a display",
"Detector base with a local relay"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0003", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Remote Annunciators" },
explanation:"The official Edwards annunciator sheet describes remote annunciators as front-panel system status/control stations connected over the high-speed life-safety network."
},
{
id:225,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Zoned Audio Amplifiers",
question:"A voice-evacuation design needs digital audio delivered through speaker circuits with a selectable Class A or Class B output. Which component should be reviewed?",
answers:[
"EST4 zoned audio amplifier",
"EST4 network firewall",
"EST4 central processing unit only",
"EST4 remote annunciator only"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0017", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"Zoned Audio Amplifiers" },
explanation:"The official Edwards amplifier sheet describes zoned audio amplifiers with built-in speaker circuits and Class A or Class B output options."
},
{
id:226,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 System Power Supplies",
question:"When reviewing an EST4 cabinet configuration, why should system power supplies be considered alongside the local-rail modules?",
answers:[
"They distribute filtered, regulated power to the local rail and connected system modules",
"They select the network media type for every node",
"They replace the central processing unit",
"They provide the remote annunciator display"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85010-0060", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"System Power Supplies" },
explanation:"The official Edwards power-supply sheet describes filtered, regulated power supplies that distribute power to the local rail and other modules."
},
{
id:227,
module:1,
lesson:10,
category:"Fundamentals",
difficulty:"Medium",
product:"EST4 Audio Units and Interfaces",
question:"A project adds voice audio to an EST4 system. Which statement reflects the documented architecture?",
answers:[
"Audio is built modularly from audio units/interfaces and amplifiers selected for the project",
"Audio requires replacing all network controllers with detector bases",
"Audio is provided only by remote annunciator LEDs",
"Audio is unrelated to EST4 cabinets and power supplies"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0002", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Audio Units and Interfaces" },
explanation:"The official Edwards audio sheet describes EST4 voice audio as a modular collection of audio components that are selected and assembled for the project."
},
{
id:228,
module:1,
lesson:10,
category:"Estimator",
difficulty:"Hard",
product:"EST4 Network and Audio Scope",
question:"A revised drawing adds a networked EST4 node and voice audio to a scope that previously listed only the main cabinet. What should the estimator reconcile before quote release?",
answers:[
"The required network controllers or expansion components, audio components, power, and cabinet space",
"Only the detector count, because network and audio do not affect the BOM",
"Only the color of the notification appliances",
"Only the manual pull-station action type"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0001", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"Overview/Networking" },
explanation:"The official EST4 overview and component sheets document separate network, audio, power, and cabinet relationships. A scope revision should reconcile those component groups before release."
},
{
id:229,
module:1,
lesson:10,
category:"Scenario",
difficulty:"Hard",
product:"EST4 Network Controllers and Extenders",
question:"A drawing specifies a long EST4 connection but does not show whether the design uses direct network-media controllers or a paired extender arrangement. What should Sales Support document for clarification?",
answers:[
"The cable-run requirement and whether the design calls for 4-NET controller media selection or two 4-NET-XT modules at the run ends",
"Only the customer billing address",
"Only the notification-appliance color",
"Nothing, because either arrangement is automatically interchangeable"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0008/E85014-0009", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Network Controllers; EST4 Network Extender" },
explanation:"The Edwards sheets describe different roles: 4-NET controllers provide network-media options, while 4-NET-XT extenders are used as a pair at the ends of a cable run. The design intent must be clarified before quoting."
},
{
id:230,
module:1,
lesson:10,
category:"Scenario",
difficulty:"Hard",
product:"EST4 Network Firewall and Network Adder",
question:"A BOM lists a 4-NET-AD for network branching and a 4-FWAL for an external network interface. What should the reviewer verify before treating them as interchangeable network hardware?",
answers:[
"That the adder's SFP/USB branching role and the firewall's external-network security role match the documented design requirements",
"That both devices are simply alternate power supplies",
"That either device can replace the 4-CPU without review",
"That the devices are both speaker amplifiers"
],
correct:0,
source:{ sourceType:"Edwards Datasheet", sourceDocument:"E85014-0012/E85014-0015", manufacturer:"Edwards", verified:true, sourcePage:"1", sourceSection:"EST4 Network Firewalls; EST4 Network Adder Module" },
explanation:"The Edwards sheets give the components different roles: 4-NET-AD provides SFP/USB network expansion and branching, while 4-FWAL provides a secure interface to outside networks."
}

];
