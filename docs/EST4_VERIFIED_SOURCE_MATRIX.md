# EST4 Verified Source Matrix

Manufacturer: Edwards
Source policy: Official Edwards catalog sheets only. No Academy claim is treated as authoritative when it conflicts with these documents.

| Verified fact | Source type | Source document | Page/section | Verified |
|---|---|---|---|---|
| EST4 uses a self-configuring network; network data, audio data, and firefighter telephone data can share a twisted pair or single fiber strand. | Edwards catalog sheet | E85014-0001 | p. 1, Overview/Networking | true |
| 4-NET controllers are SFP transceivers that provide physical-media options; the controller selection determines the network media. | Edwards catalog sheet | E85014-0008 | p. 1, EST4 Network Controllers | true |
| 4-NET controllers plug into the network-module slots of 4-CPU, 4-ANNCPU, 4-CPUGRPH, and 4-NET-AD modules, and are hot-swappable. | Edwards catalog sheet | E85014-0008 | p. 1, EST4 Network Controllers | true |
| A 4-NET-XT network extender requires two modules, one at each end of the cable run, to complete a circuit path. | Edwards catalog sheet | E85014-0009 | p. 1, EST4 Network Extender | true |
| 4-NET-XT supports panel data and one live audio page channel and can extend the EST4 network or provide an external connection. | Edwards catalog sheet | E85014-0009 | pp. 1-2, EST4 Network Extender | true |
| 4-NET-AD provides two supplementary SFP network ports and two USB connectors; its SFP ports allow branches for star or mesh configurations. | Edwards catalog sheet | E85014-0015 | p. 1, EST4 Network Adder Module | true |
| The 4-NET-AD USB ports connect the adder to the node's 4-CPU board and establish the communications link between the SFP ports and the life-safety network. | Edwards catalog sheet | E85014-0015 | p. 1, EST4 Network Adder Module | true |
| 4-FWAL firewalls provide a secure interface between EST4 and outside networks, communicate with modules including 4-CPU and 4-NET-AD, and support IPv4 and IPv6. | Edwards catalog sheet | E85014-0012 | p. 1, EST4 Network Firewalls | true |
| The 4-CPU is the nexus for system-wide network communication, controls audio data, and acts as controller of the nodes. | Edwards catalog sheet | E85014-0010 | p. 1, EST4 Central Processing Unit | true |
| EST4 remote annunciators provide front-panel system status/control and connect over the high-speed life-safety network; network and audio data can share fiber or twisted pair. | Edwards catalog sheet | E85014-0003 | p. 1, EST4 Remote Annunciators | true |
| EST4 zoned audio amplifiers provide digital voice audio, include a speaker circuit, support Class A or Class B output, and receive power from standard system power supplies through the local rail. | Edwards catalog sheet | E85014-0017 | p. 1, Zoned Audio Amplifiers | true |
| EST4 system power supplies provide filtered and regulated power; each power supply produces 7 Amps and distributes power to the local rail. | Edwards catalog sheet | E85010-0060 | p. 1, System Power Supplies | true |
| EST4 audio is modular; audio units/interfaces and amplifiers are selected as system components, with audio and telephone data transmitted over copper or fiber. | Edwards catalog sheet | E85014-0002 | p. 1, EST4 Audio Units and Interfaces | true |
| EST4 cabinets/chassis support power supplies, amplifiers, SLC and other modules, and remote closet cabinets can support larger battery sizes. | Edwards catalog sheet | E85014-0004 | pp. 1-2, EST4 Cabinets and Chassis | true |
| EST4 lobby enclosures/backboxes/doors/chassis support up to two color LCD touch screens and LED/switch module configurations. | Edwards catalog sheet | E85014-0004 | p. 1, EST4 Cabinets and Chassis | true |
| EST4 control-display modules provide 24 LED indicators, large buttons, slide-in labels, and snap into inner-door display locations. | Edwards catalog sheet | E85014-0006 | p. 1, Display Modules | true |
| The 4-LCD display can show eight events without scrolling and can display messages at every LCD on the network or route them to specific LCDs. | Edwards catalog sheet | E85014-0007 | pp. 1-2, EST4 LCD Display Module | true |
| A 4-CPU node controls up to 19 additional local rail modules and automatically learns local rail module attributes and locations. | Edwards catalog sheet | E85014-0010 | p. 2, Intra-module Communications | true |
| EST4 system power supplies distribute power to local rail modules, control-display modules, and auxiliary outputs through the local rail. | Edwards catalog sheet | E85010-0060 | p. 1, System Power Supplies | true |
| The EST4 power-supply rules prohibit installing 4-PPS/M in the same cabinet as specified legacy 3-series power supplies because the combination can damage the power supply. | Edwards catalog sheet | E85010-0060 | p. 2, Power Supply Rules | true |
| Each power supply must connect to a battery set using identical wire length and gauge so voltage drops remain identical. | Edwards catalog sheet | E85010-0060 | p. 2, Power Supply Rules | true |
| The Signature Optica SIGA-OSCD analyzes its optical smoke sensor independently from its CO sensor for fire-alarm or life-safety CO decisions. | Edwards catalog sheet | E85001-1002 | p. 1, Intelligent Multisensor Smoke and CO Detector | true |
| The SIGA-COD uses advanced electrochemical CO sensing and is documented as compatible only with the Signature Loop Controller. | Edwards catalog sheet | E85001-0648 | pp. 1-2, Intelligent CO Detector, Compatibility | true |
| The SIGA-OSHCD combines optical smoke, rate-of-rise heat with a fixed temperature setting, and CO sensing. | Edwards catalog sheet | E85001-1004 | p. 1, Intelligent Multisensor Smoke, Heat, CO Detector | true |
| The SIGA-OSHCD lists standard, relay, fault-isolator, and audible mounting bases as documented base options. | Edwards catalog sheet | E85001-1004 | pp. 1-2, Intelligent Multisensor Smoke, Heat, CO Detector | true |
| Optica duct detectors are designed for HVAC smoke-detection applications and document nuisance-discrimination/sensing characteristics for duct conditions. | Edwards announcement/flyer | E85001-2007 | p. 2, Optica Duct Smoke Detection | true |
| Optica duct detectors use the Signature protocol and the same entry/exit pipe locations and dimensions as SuperDuct detectors for documented backwards-compatible upgrades. | Edwards announcement/flyer | E85001-2007 | p. 2, Backwards Compatible for Easier Upgrades | true |
| The SIGA-COD datasheet states that the detector signals a trouble condition after approximately ten years and refers users to control-panel documentation for specifics. | Edwards catalog sheet | E85001-0648 | p. 1, Intelligent CO Detector, Note 1 | true |

## Detector Source Documents Still Needed

The official Edwards initiating-device catalog identifies, but the Academy has not yet added to this matrix, dedicated documents for beam detectors, explosionproof detectors, rate-compensation heat detectors, conventional smoke/heat detectors, specialty manual stations, and the Signature Loop Controller. Do not treat those topics as fully source-verified until the relevant official documents are collected.

## Official Documents Discovered for Future Verification

These official Edwards documents were identified on the Edwards Lifelines source pages. They were cataloged during the read-only legacy audit but no questions were created from them:

| Document | Title/topic | Official Edwards source page | Intended use | Add to matrix |
|---|---|---|---|---|
| E85014-0018 | EST4 Aspirating Smoke Detector CPU | EST4 Platform | Aspirating/EST4 relationship verification | Yes, source gap remains until reviewed |
| E85001-1040 | ModuLaser Detector Module | Aspirating Smoke Detection | ModuLaser architecture | Yes, source gap remains until reviewed |
| E85001-1041 | ModuLaser Command Display Module | Aspirating Smoke Detection | Aspirating display relationship | Yes, source gap remains until reviewed |
| E85001-1042 | ModuLaser Standard Display Module | Aspirating Smoke Detection | Aspirating display relationship | Yes, source gap remains until reviewed |
| E85001-1043 | ModuLaser Minimum Display Module | Aspirating Smoke Detection | Aspirating display relationship | Yes, source gap remains until reviewed |
| E85001-1044 | PipeCAD Software | Aspirating Smoke Detection | Sampling-pipe design support | Yes, source gap remains until reviewed |
| E85001-1058 | MiniLaser Detector Module | Aspirating Smoke Detection | MiniLaser architecture | Yes, source gap remains until reviewed |
| E85001-0633 | Air Sampling Pipe and Fittings | Aspirating Smoke Detection | Sampling infrastructure | Yes, source gap remains until reviewed |
| E85001-0743 | Fireray Smoke Beam Detector | Conventional Initiating Devices | Beam detection | Yes, source gap remains until reviewed |
| E85001-0643 | End-to-End Beam Smoke Detector | Conventional Initiating Devices | Beam detection | Yes, source gap remains until reviewed |
| E85001-0645 | Explosionproof Smoke Detector | Conventional Initiating Devices | Hazardous-location detection | Yes, source gap remains until reviewed |
| E85001-0632 | Carbon Monoxide Detector | Conventional Initiating Devices | Conventional CO detection | Yes, source gap remains until reviewed |
| E85001-0616 | EC5000R Reflective Beam Detector | Conventional Initiating Devices | Reflective beam detection | Yes, source gap remains until reviewed |
| E85001-0599 | Conventional 2-Wire Smoke & Heat Detectors | Conventional Initiating Devices | Conventional detector technology | Yes, source gap remains until reviewed |
| E85001-0589 | Rate Compensation Heat Detectors | Conventional Initiating Devices | Heat detection | Yes, source gap remains until reviewed |
| E85001-0585 | Two-Wire SuperDuct Duct Smoke Detector | Conventional Initiating Devices | Duct detection | Yes, source gap remains until reviewed |
| E85001-0583 | Four-Wire SuperDuct Duct Smoke Detector | Conventional Initiating Devices | Duct detection | Yes, source gap remains until reviewed |
| E85001-0303 | Fire Alarm Stations | Conventional Initiating Devices | Manual initiating devices | Yes, source gap remains until reviewed |
| E85001-0371 | Hazardous Location Fire Alarm Station | Conventional Initiating Devices | Specialty manual station | Yes, source gap remains until reviewed |
| E85001-0588 | Weatherproof/Explosionproof Pull Stations | Conventional Initiating Devices | Specialty manual station | Yes, source gap remains until reviewed |
| E85001-0654 | Key-operated Fire Alarm Station | Conventional Initiating Devices | Specialty manual station | Yes, source gap remains until reviewed |

## Official Documents Still Missing

- Signature Loop Controller product documentation
- EST4 installation and operation manuals with fault-code/diagnostic tables
- EST4 troubleshooting documentation
- Official detector/base compatibility tables
- Official iO/EDGE selection and configuration documentation
- Detailed EST4 audio design/sizing documentation
- Detailed EST4 network configuration and cybersecurity administration documentation
| SIGA-OSCD uses optical smoke detection with carbon-monoxide sensing and analyzes the smoke sensor independently from the CO sensor to determine whether to initiate a fire alarm or life-safety CO alarm. | Edwards catalog sheet | E85001-1002 | p. 1, Intelligent Multisensor Smoke and CO Detector | true |
| SIGA-COD uses advanced electrochemical CO sensing and is documented as compatible only with the Signature Loop Controller. | Edwards catalog sheet | E85001-0648 | pp. 1-2, Intelligent CO Detector | true |
| SIGA-OSHCD provides an optical smoke sensor, a rate-of-rise heat sensor with a fixed temperature setting, and CO sensing. | Edwards catalog sheet | E85001-1004 | p. 1, Intelligent Multisensor Smoke, Heat, CO Detector | true |
| SIGA-OSHCD documentation lists standard, relay, fault-isolator, and audible mounting bases as base options. | Edwards catalog sheet | E85001-1004 | pp. 1-2, Intelligent Multisensor Smoke, Heat, CO Detector | true |
| Optica duct detectors are designed for HVAC smoke-detection applications with a free-flowing chamber, dual-wall construction, and anti-fog coating for the sensing area. | Edwards announcement/flyer | E85001-2007 | p. 2, Optica Duct Smoke Detection | true |
| Optica duct detectors use the Signature protocol and the same entry/exit pipe locations and dimensions as SuperDuct detectors for backwards-compatible upgrades. | Edwards announcement/flyer | E85001-2007 | p. 2, Optica Duct Smoke Detection | true |
| SIGA-COD documentation states that after approximately ten years the detector signals a trouble condition and directs users to the control-panel documentation for specifics. | Edwards catalog sheet | E85001-0648 | p. 1, Intelligent CO Detector, Note 1 | true |
| The 4-NET-XT has status LEDs for Power, DSL, Ethernet, and Link Trouble. | Edwards catalog sheet | E85014-0009 | p. 1, EST4 Network Extender | true |
| The 4-LCD displays up to eight events without scrolling and displays the highest-priority event; messages can display at every LCD or route to specific LCDs. | Edwards catalog sheet | E85014-0007 | pp. 1-2, EST4 LCD Display Module | true |
| EST4 control-display documentation identifies discrete Alarm, CPU Fail, Trouble, and Power indicators. | Edwards catalog sheet | E85014-0006 | pp. 1-2, Display Modules | true |
| The 4-CPU automatically learns local-rail module attributes and locations on power-up and controls local panel responses. | Edwards catalog sheet | E85014-0010 | p. 2, Intra-module Communications | true |
| EST4 power supplies use a monitor module to distribute supply power to the local rail and connected local-rail modules. | Edwards catalog sheet | E85010-0060 | p. 1, System Power Supplies | true |

## Troubleshooting Source Boundary

The reviewed approved catalog sheets document status indicators, event displays, and component relationships. They do not provide a complete fault-code table, field repair procedure, component-replacement decision tree, or safe electrical diagnostic procedure. Those questions remain SOURCE GAP — ADDITIONAL EDWARDS TROUBLESHOOTING DOCUMENTATION REQUIRED.

## Explicit Source Gaps

The following were not used as training facts because the reviewed approved documents did not provide enough specific evidence for a defensible question:

- Customer-specific or supplier lead times
- Inventory availability or backorder claims
- Pricing, margins, labor, freight, or cost numbers
- Unsupported exact compatibility between individual panel SKUs and components
- Unverified SIGA-UM2 and SIGA-CC1S claims
