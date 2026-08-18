const productLibrary = {
    manufacturers: [
        { id: 1, name: "Edwards", verified: true }
    ],
    products: [
        {
            id: 1,
            manufacturer: "Edwards",
            family: "EST4",
            category: "Fire Alarm and Emergency Communications Platform",
            model: "EST4",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/control-panel/est4-platform/",
            image: "https://images.carriercms.com/image/upload/v1650657812/edwards/Lifelines/Images/EST4-Panels/EST4-Family.jpg",
            officialDescription: "Featuring a new network architecture, EST4 makes fire alarm, mass notification, and building integration easy to implement, quick to service, and secure in the face of today's cyber threats. The result is an emergency communications system equally suited to new and retrofit projects.",
            features: [
                "Flexible IPv6 network design with Class B, A, X, N, or full mesh operation.",
                "Can operate over fiber, Ethernet, or copper wiring.",
                "On-board webserver for remote, device-independent access to system status reports.",
                "Built-in e-mail and e-mail-to-SMS messaging for event notification.",
                "Backwards compatibility with EST3 wiring, devices, and most local rail modules."
            ],
            quizQuestions: [151, 152, 167, 168, 101],
            howItWorks: "EST4 serves as the primary life safety control platform. Field devices report to the control architecture, which then manages alarm logic, network communications, mass notification functions, and system integration workflows.",
            commonMistakes: [
                "Assuming EST4 requires fully new field infrastructure without checking documented EST3 backward compatibility.",
                "Treating network design as single-media only instead of confirming copper, fiber, or Ethernet architecture."
            ]
        },
        {
            id: 2,
            manufacturer: "Edwards",
            family: "EST3",
            category: "Emergency Communications Platform",
            model: "EST3",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/control-panel/est3-platform/",
            image: "https://images.carriercms.com/image/upload/v1650657738/edwards/Lifelines/Images/EST3-Panels/3-CAB5.png",
            officialDescription: "EST3 is a modular control platform uniquely designed to meet the needs of applications ranging from standalone fire alarm systems to multi-panel networks with unified fire alarm, security, and mass notification functions.",
            features: [
                "Modular control platform architecture.",
                "Supports standalone fire alarm systems and multi-panel network configurations.",
                "Unifies fire alarm, security, and mass notification functions.",
                "Software-controlled operating features for site flexibility and future upgrades."
            ],
            quizQuestions: [153, 169, 170, 102],
            howItWorks: "EST3 coordinates life safety events through modular hardware and software-controlled features. It can operate as a local panel or as part of a multi-panel system that combines fire alarm, security event display, and mass notification workflows.",
            commonMistakes: [
                "Quoting EST3 as only a fire alarm panel when projects require unified mass notification and security event support.",
                "Overlooking software-based flexibility when evaluating upgrade paths for existing systems."
            ]
        },
        {
            id: 3,
            manufacturer: "Edwards",
            family: "EST3X",
            category: "Mid-Range Life Safety Control Panel",
            model: "EST3X",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/control-panel/est3x-platform/",
            image: "https://images.carriercms.com/image/upload/v1650657738/edwards/Lifelines/Images/EST3X-Panels/3X-SFS1R.jpg",
            officialDescription: "EST3X represents the latest generation of life safety control panels for mid sized applications. The wide range of configurations include standalone operation, networking with up to eight nodes, or integration with an EST3 network comprising as many as 64 nodes, complete with mass notification capabilities and display of security events.",
            features: [
                "Mid-range life safety control platform.",
                "Standalone or network operation with up to eight EST3X nodes.",
                "Integration with EST3 networks up to 64 nodes.",
                "Supports mass notification capabilities and display of security events."
            ],
            quizQuestions: [154, 155, 182, 103],
            howItWorks: "EST3X processes initiating events locally and can distribute event/state information across connected nodes. In networked designs it extends panel-level functions into broader EST3 infrastructure for coordinated notification and system supervision.",
            commonMistakes: [
                "Confusing EST3X local node limits with total system capacity in integrated EST3 networks.",
                "Assuming all deployments require network operation when some sites are configured for standalone use."
            ]
        },
        {
            id: 4,
            manufacturer: "Edwards",
            family: "iO Series",
            category: "Small Building Fire Alarm Solution",
            model: "iO-Series Intelligent Fire Alarm Systems",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0135%20--%20iO%20Series%20Intelligent%20Fire%20Alarm%20Systems.pdf",
            image: "https://images.carriercms.com/image/upload/v1651509559/edwards/Lifelines/Images/iO-Series/Edwards-iO64---iO1000.jpg",
            officialDescription: "iO-Series intelligent life safety systems offer the speed of high-end intelligent processing in an uncomplicated solution for small to mid-sized applications. With intelligent detection, electronic addressing, automatic device mapping, and optional Ethernet connectivity, iO Series brings features that were previously available only on larger systems.",
            features: [
                "Intelligent detection and electronic addressing.",
                "Automatic device mapping.",
                "Optional Ethernet connectivity.",
                "Positioned for small to mid-sized applications."
            ],
            quizQuestions: [156, 171, 104],
            howItWorks: "iO-Series panels provide addressable control for smaller buildings by receiving field-device events, applying programmed logic, and driving notification/supervisory responses while maintaining simplified deployment and service workflows.",
            commonMistakes: [
                "Selecting iO-Series for very large multi-building projects without confirming scaling requirements.",
                "Assuming small-building positioning means conventional-only architecture despite addressable capabilities."
            ]
        },
        {
            id: 5,
            manufacturer: "Edwards",
            family: "iO Series",
            category: "Communications Accessory",
            model: "iO Communications Bridge",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85010-0156%20--%20iO%20Communications%20Bridge.pdf",
            image: "",
            officialDescription: "Official Edwards catalog sheet listing for the iO Communications Bridge under Small Building Fire Alarm Solutions.",
            features: [
                "Listed by Edwards as an iO Series communications bridge component.",
                "Belongs to the Intelligent iO Series addressable systems literature set."
            ],
            quizQuestions: [157, 171, 105],
            howItWorks: "A communications bridge supports iO Series communications pathways so panel-level data can be exchanged through the configured architecture. In Sales Support, this is typically positioned as infrastructure hardware that enables the intended integration path.",
            commonMistakes: [
                "Treating communications bridge hardware as a generic network switch instead of a panel ecosystem component.",
                "Assuming every iO deployment needs a bridge without confirming the required communications topology."
            ]
        },
        {
            id: 6,
            manufacturer: "Edwards",
            family: "Edge Series",
            category: "Fire Alarm Control System",
            model: "EDGE-ML Fire Alarm Systems",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85008-0001%20--%20EDGE-ML%20Fire%20Alarm%20Systems%20Datasheet.pdf",
            image: "",
            officialDescription: "The Edge Series gives you the quality of Edwards systems tailored for mid-sized applications with faster installation, simpler maintenance, affordable system upgrades, and user-friendly operation.",
            features: [
                "10-inch touchscreen with tap-and-go navigation.",
                "Supports up to 30 remote annunciators.",
                "Supports up to 4 loops at 250 devices per loop.",
                "Backwards compatible with IO1000 and IO500 initiating and notification devices.",
                "Extended wire runs support beyond traditional notification circuits."
            ],
            quizQuestions: [158, 172, 106],
            howItWorks: "Edge Series panels provide mid-size building control by combining panel processing, annunciation, and loop management with migration-ready options for compatible existing Edwards iO field devices and infrastructure.",
            commonMistakes: [
                "Treating Edge as a direct equivalent to large enterprise panels without validating loop/device limits.",
                "Missing retrofit compatibility advantages during upgrade budgeting discussions."
            ]
        },
        {
            id: 133,
            manufacturer: "Edwards",
            family: "iO Series",
            category: "Small Building Fire Alarm Solution",
            model: "iO64",
            verification: "VERIFIED",
            source: "Edwards iO Series brochure, E85000-0348, V3.1, page 5",
            sourceURL: "",
            image: "https://images.carriercms.com/image/upload/v1651509559/edwards/Lifelines/Images/iO-Series/Edwards-iO64---iO1000.jpg",
            officialDescription: "Edwards iO64 is a compact iO-Series fire alarm control panel for appropriately small buildings. It ships with one Signature loop controller and supports up to 64 devices of any type. Its device capacity cannot be expanded.",
            features: [
                "Ships with one Signature loop controller.",
                "Supports 64 devices of any type.",
                "Device capacity cannot be expanded.",
                "Supports up to 8 remote annunciators.",
                "Has two Class B or two optional Class A NACs.",
                "Has two Form C relays and one Form A relay.",
                "Supports Ethernet via SA-ETH.",
                "Supports DACT/Dialer via SA-DACT2.",
                "Supports Cellular Gateway via ECG1.",
                "Supports RS-232 via SA-232 / SA-USB.",
                "Has 16 conventional IDCs.",
                "Can add two additional NACs with the RZI16-2 module.",
                "Can use the SA-FSB Field Server Bridge for third-party Building Management System interface."
            ],
            quizQuestions: [],
            howItWorks: "The iO64 is sized as a fixed-capacity small-building panel. Its one Signature loop controller handles the addressed device count up to 64 devices, and the panel's device capacity is not expandable beyond that fixed limit.",
            commonMistakes: [
                "Assuming iO64 is universal for every project instead of checking device count and platform fit.",
                "Confusing iO64 with the iO Communications Bridge or treating iO64 as expandable.",
                "Treating iO64 and iO1000 as the same platform when the brochure distinguishes them by capacity and expansion capability."
            ]
        },
        {
            id: 134,
            manufacturer: "Edwards",
            family: "iO Series",
            category: "Expandable Fire Alarm Platform",
            model: "iO1000",
            verification: "VERIFIED",
            source: "Edwards iO Series brochure, E85000-0348, V3.1, page 5",
            sourceURL: "",
            image: "https://images.carriercms.com/image/upload/v1651509559/edwards/Lifelines/Images/iO-Series/Edwards-iO64---iO1000.jpg",
            officialDescription: "Edwards iO1000 is the larger expandable iO-Series platform. It supports up to 1,000 addressable devices and can accommodate up to two Signature loop controller cards, with single or dual 250-device loops.",
            features: [
                "Supports up to 1,000 addressable devices.",
                "Has room for up to two Signature loop controller cards.",
                "Supports single or dual 250-device loops.",
                "iO1000 addressable loops support 125 detectors and 125 modules.",
                "Has expansion capability.",
                "Supports up to 8 remote annunciators."
            ],
            quizQuestions: [],
            howItWorks: "The iO1000 is the expandable iO-Series platform for larger or growth-oriented applications. It is distinguished from the fixed-capacity iO64 by its higher addressable device capacity and expansion capability.",
            commonMistakes: [
                "Using iO64 capacity assumptions on projects that exceed 64 devices.",
                "Confusing iO1000's expansion capability with the fixed-capacity iO64."
            ]
        },
        {
            id: 7,
            manufacturer: "Edwards",
            family: "Signature Series",
            category: "Intelligent Multi-Criteria Detector",
            model: "SIGA-OSHCD Signature Optica Smoke, Heat & Carbon Monoxide Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1004%20--%20Signature%20Optica%20Smoke%20Heat%20and%20CO%20Detector.pdf",
            image: "https://images.carriercms.com/image/upload/v1650658068/edwards/Lifelines/Images/Intelligent-Devices/SIGA-OSHCD-front.jpg",
            officialDescription: "Signature Series devices are the life safety industry's first modular detectors. Combining smoke, heat, and carbon monoxide sensing technologies in a single compact unit, these detectors eliminate the need for separate devices to sense fire and CO.",
            features: [
                "Combines smoke, heat, and CO sensing in one compact device.",
                "Modular Signature Series detector architecture.",
                "Uses proprietary indirect photoelectric sensing technology for greater optical stability and reliability."
            ],
            quizQuestions: [159, 173, 107],
            howItWorks: "The detector monitors smoke, thermal, and CO signatures and reports states to the fire alarm system as an intelligent initiating device. This enables consolidated detection points while supporting panel-driven alarm and supervisory logic.",
            commonMistakes: [
                "Specifying separate single-function devices when one listed multi-criteria Signature Optica model fits project needs.",
                "Confusing Signature Optica detector categories with notification appliance categories."
            ]
        },
        {
            id: 8,
            manufacturer: "Edwards",
            family: "Signature Series",
            category: "Intelligent Smoke and CO Detector",
            model: "SIGA-OSCD Signature Optica Smoke & Carbon Monoxide Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1002%20--%20Signature%20Optica%20Smoke%20and%20CO%20Detector.pdf",
            image: "https://images.carriercms.com/image/upload/v1650658068/edwards/Lifelines/Images/Intelligent-Devices/SIGA-OSCD-front.jpg",
            officialDescription: "Signature Series devices combine advanced sensing technologies and modular design to provide intelligent initiating device options with smoke and carbon monoxide detection in one compact platform.",
            features: [
                "Smoke and CO detection in one Signature Optica device category.",
                "Part of the modular Signature Series intelligent initiating device family.",
                "Listed by Edwards under Smoke, Heat and CO detectors."
            ],
            quizQuestions: [160, 183, 108],
            howItWorks: "This model combines smoke and CO sensing in a single intelligent detector workflow. It reports device state to the control panel for alarm, supervisory, and event-handling decisions.",
            commonMistakes: [
                "Assuming this model includes heat sensing when only smoke/CO functions are specified by model title.",
                "Mixing Optica model variants without checking datasheet-specific sensing combinations."
            ]
        },
        {
            id: 9,
            manufacturer: "Edwards",
            family: "Signature Series",
            category: "Intelligent CO Detector",
            model: "SIGA-COD Intelligent Carbon Monoxide Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0648%20--%20Intelligent%20CO%20Detector.pdf",
            image: "https://images.carriercms.com/image/upload/v1650658069/edwards/Lifelines/Images/Intelligent-Devices/SIGA-COD.png",
            officialDescription: "Official Edwards Smoke, Heat and CO detectors catalog listing for the Intelligent CO Detector within the Intelligent Initiating Devices product family.",
            features: [
                "Intelligent carbon monoxide detector category.",
                "Published under Edwards Intelligent Initiating Devices literature."
            ],
            quizQuestions: [161, 174, 109],
            howItWorks: "The detector monitors carbon monoxide conditions and communicates status to the life safety control system as an intelligent initiating device. Panel programming determines supervisory/alarm handling based on the configured project response.",
            commonMistakes: [
                "Assuming a CO-only detector also provides smoke sensing without checking the exact model datasheet.",
                "Using CO detector model names interchangeably with Signature Optica multi-criteria detector models."
            ]
        },
        {
            id: 10,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Intelligent Isolator Module",
            model: "SIGA-IM2 Isolator Module",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0272%20--%20Isolator%20Module%20SIGA-IM2.pdf",
            image: "https://firealarm.com/wp-content/uploads/2023/01/SIGA-IM2.jpg",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for the SIGA-IM2 Isolator Module.",
            features: [
                "Listed as SIGA-IM2 within Edwards Intelligent Input/Output Modules.",
                "Associated with Signature intelligent module architecture."
            ],
            quizQuestions: [162, 175, 110],
            howItWorks: "An isolator module is applied within addressable loop architecture to help localize and manage loop fault impact according to module placement and system design.",
            commonMistakes: [
                "Confusing isolator modules with output/control modules during BOM development.",
                "Placing isolator modules without confirming loop segmentation intent in design documents."
            ]
        },
        {
            id: 11,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Intelligent Control Relay Module",
            model: "SIGA-HPR High Power Control Relay Module",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0644%20--%20High%20Power%20Control%20Relay%20Module.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for the High Power Control Relay Module.",
            features: [
                "High-power control relay module category.",
                "Published in Edwards Intelligent Input/Output Modules literature."
            ],
            quizQuestions: [163, 176, 111],
            howItWorks: "A control relay module interfaces panel logic with controlled external circuits so programmed events can trigger auxiliary functions within the project design scope.",
            commonMistakes: [
                "Selecting relay module families without checking electrical duty requirements in the listed datasheet.",
                "Assuming every control module is suitable for high-power switching applications."
            ]
        },
        {
            id: 12,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Intelligent Signal Module",
            model: "SIGA-CC2A Signal Modules with Class A Operation",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0609%20--%20Signal%20Modules%20with%20Class%20A%20Operation.pdf",
            image: "https://firealarm.com/wp-content/uploads/2018/09/SIGA-CC2A.jpg",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Signal Modules with Class A Operation.",
            features: [
                "Signal module category supporting Class A operation.",
                "Published under Edwards Intelligent Input/Output Modules."
            ],
            quizQuestions: [164, 177, 112],
            howItWorks: "Signal modules provide addressable output pathways governed by panel programming, while Class A operation supports a return-path topology commonly used for survivability goals in life safety circuits.",
            commonMistakes: [
                "Treating Class A and Class B signaling modules as interchangeable without validating project wiring topology.",
                "Assuming output module selection is independent of NAC/circuit architecture decisions."
            ]
        },
        {
            id: 13,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Wall Mount Notification Appliance",
            model: "Genesis LED G4 Series Wall Mount Notification Devices",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0668%20--%20Genesis%20LED%20G4%20Series%20Wall%20Mount%20Notification%20Devices.pdf",
            image: "",
            officialDescription: "Genesis notification appliances deliver the latest notification technology along with looks and features ideal for facilities of all sizes. Genesis brings on-demand notification to every application with field-configurable options including high/low dB output settings, wattage tap selections, and selectable candela output and flash rate.",
            features: [
                "Wall-mount notification device category.",
                "Field-configurable high/low dB settings.",
                "Field-configurable wattage tap selections.",
                "Selectable candela output and flash rate options."
            ],
            quizQuestions: [165, 178, 113],
            howItWorks: "Genesis wall notification devices are controlled by the fire alarm system to provide visible and/or audible occupant alerting. Field-selectable settings are configured during commissioning to match code and application requirements.",
            commonMistakes: [
                "Using default candela or dB assumptions instead of confirming room-by-room notification requirements.",
                "Confusing wall-mount model families with ceiling-mount model families during submittal preparation."
            ]
        },
        {
            id: 14,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Compact Notification Appliance",
            model: "Genesis LED G1 Series Compact Notification Devices",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0667%20--%20Genesis%20LED%20G1%20Series%20Compact%20Notification%20Devices.pdf",
            image: "",
            officialDescription: "Genesis notification appliances are designed to deliver on-demand notification with configurable visual and audible options while maintaining discreet device profiles.",
            features: [
                "Compact notification device category.",
                "Part of Edwards Genesis LED notification family."
            ],
            quizQuestions: [165, 179, 114],
            howItWorks: "Compact Genesis devices provide occupant notification outputs commanded by the fire alarm control system. Model and setting selection are matched to the project's required audible and visual signaling plan.",
            commonMistakes: [
                "Choosing compact devices for all spaces without validating candela/audibility requirements.",
                "Mixing compact and standard model assumptions when creating submittal schedules."
            ]
        },
        {
            id: 144,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Wall-Mount Horn",
            model: "G1A Genesis LED Compact Wall-Mount Horn",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "G1A is the Genesis LED G1 compact wall notification horn family.",
            features: [
                "G1 = Genesis wall-mount appliance.",
                "A = horn.",
                "Verified horn variants: G1ARF, G1ARF-FR, G1ARF-SP, G1ARN, G1AWF, G1AWF-FR, G1AWF-SP, G1AWN."
            ],
            quizQuestions: [],
            howItWorks: "G1A provides audible wall notification. Choose the documented housing and marking variant from the project requirements.",
            commonMistakes: ["Calling G1A a horn-strobe or treating it as a strobe-only appliance."]
        },
        {
            id: 145,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Wall-Mount Strobe",
            model: "G1V Genesis LED Compact Wall-Mount Strobe",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "G1V is the Genesis LED G1 compact wall notification strobe family.",
            features: [
                "G1 = Genesis wall-mount appliance.",
                "V = strobe.",
                "Verified strobe variants: G1VRF, G1VRF-FR, G1VRF-SP, G1VRN, G1VWA, G1VWF, G1VWF-FR, G1VWF-SP, G1VWN."
            ],
            quizQuestions: [],
            howItWorks: "G1V provides visual wall notification. Choose the documented housing and marking variant from the project requirements.",
            commonMistakes: ["Calling G1V a horn or treating it as an audible appliance."]
        },
        {
            id: 146,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Wall-Mount Horn-Strobe",
            model: "G1AV Genesis LED Compact Wall-Mount Horn-Strobe",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "G1AV is the Genesis LED G1 compact wall notification horn-strobe family.",
            features: [
                "G1 = Genesis wall-mount appliance.",
                "AV = horn-strobe.",
                "Verified horn-strobe variants: G1AVRF, G1AVRF-FR, G1AVRF-SP, G1AVRN, G1AVWF, G1AVWF-FR, G1AVWF-SP, G1AVWN."
            ],
            quizQuestions: [],
            howItWorks: "G1AV provides both audible and visual wall notification. Choose the documented housing and marking variant from the project requirements.",
            commonMistakes: ["Calling G1AV a speaker-strobe or collapsing it into the horn-only G1A family."]
        },
        {
            id: 147,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis G1 Accessory",
            model: "G1TR Red G1 Trim Ring",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "G1TR is the red G1 trim ring accessory.",
            features: ["Red G1 trim ring."],
            quizQuestions: [],
            howItWorks: "G1TR is selected when the documented G1 trim-ring requirement calls for the red option.",
            commonMistakes: ["Treating G1TR as a primary notification appliance."]
        },
        {
            id: 148,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis G1 Accessory",
            model: "G1TW White G1 Trim Ring",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "G1TW is the white G1 trim ring accessory.",
            features: ["White G1 trim ring."],
            quizQuestions: [],
            howItWorks: "G1TW is selected when the documented G1 trim-ring requirement calls for the white option.",
            commonMistakes: ["Treating G1TW as a primary notification appliance."]
        },
        {
            id: 149,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis G1 Accessory",
            model: "27193-11 Red One-Gang Surface-Mount Box",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "27193-11 is the red one-gang surface-mount box accessory for the documented G1 family.",
            features: ["Red one-gang surface-mount box."],
            quizQuestions: [],
            howItWorks: "27193-11 is selected when the G1 installation specifies the red one-gang surface-mount box.",
            commonMistakes: ["Adding a surface-mount box without checking the specified mounting arrangement and color."]
        },
        {
            id: 150,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis G1 Accessory",
            model: "27193-16 White One-Gang Surface-Mount Box",
            verification: "VERIFIED",
            source: "Verified Edwards Genesis G1 product information supplied with Genesis documentation",
            sourceURL: "",
            image: "",
            officialDescription: "27193-16 is the white one-gang surface-mount box accessory for the documented G1 family.",
            features: ["White one-gang surface-mount box."],
            quizQuestions: [],
            howItWorks: "27193-16 is selected when the G1 installation specifies the white one-gang surface-mount box.",
            commonMistakes: ["Adding a surface-mount box without checking the specified mounting arrangement and color."]
        },
        {
            id: 15,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Low Frequency Horn",
            model: "G4LF Genesis LED Wall-Mount Low-Frequency Horn",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "G4LF is a Genesis LED wall-mount low-frequency horn with 520 Hz audible output.",
            features: [
                "520 Hz low-frequency audible output.",
                "Selectable high/low dB output.",
                "Selectable temporal/steady horn output where applicable.",
                "LED technology and low device current.",
                "Wall-mount design.",
                "16–33 VDC / 16–33 VFWR operating range.",
                "12–18 AWG wiring.",
                "Indoor/dry environmental classification.",
                "Field-configurable settings and diagnostics test points.",
                "Room-side wiring plate relationship."
            ],
            quizQuestions: [],
            howItWorks: "G4LF provides 520 Hz low-frequency audible notification from a Genesis wall-mount horn. Selection and configuration must follow the project documents and applicable AHJ direction.",
            commonMistakes: [
                "Treating G4LF as interchangeable with G4LFV; G4LF is the low-frequency horn, while G4LFV is the low-frequency horn-strobe.",
                "Assuming a low-frequency device is required without checking the project design basis and AHJ direction."
            ]
        },
        {
            id: 136,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Low Frequency Horn-Strobe",
            model: "G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "G4LFV is a Genesis LED wall-mount low-frequency horn-strobe with 520 Hz audible output and applicable selectable strobe candela.",
            features: [
                "520 Hz low-frequency audible output.",
                "Selectable 15, 30, 75, or 110 candela for applicable strobe models.",
                "Selectable high/low dB output.",
                "Selectable temporal/steady horn output where applicable.",
                "LED technology and low device current.",
                "Wall-mount design.",
                "16–33 VDC / 16–33 VFWR operating range.",
                "12–18 AWG wiring.",
                "Indoor/dry environmental classification.",
                "Field-configurable settings and diagnostics test points.",
                "Room-side wiring plate relationship."
            ],
            quizQuestions: [],
            howItWorks: "G4LFV combines 520 Hz low-frequency audible notification with visual strobe notification from a Genesis wall-mount appliance. Select candela and other field settings only when supported by the project documents.",
            commonMistakes: [
                "Treating G4LFV as the horn-only G4LF model.",
                "Adding a strobe setting without confirming that the selected model supports that candela choice."
            ]
        },
        {
            id: 137,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "GRSW-10 Room-Side Wiring Plate",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "GRSW-10 is the required Genesis room-side wiring plate and is ordered separately in packs of 10.",
            features: ["Required room-side wiring plate.", "Ordered separately in packs of 10."],
            quizQuestions: [],
            howItWorks: "GRSW-10 provides the room-side wiring plate relationship for the applicable Genesis appliance installation.",
            commonMistakes: ["Omitting the required room-side wiring plate from a Genesis takeoff."]
        },
        {
            id: 138,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "GOCT 4-Inch Octagon Box Adapter Plate",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "GOCT is the required 4-inch octagon box adapter plate when installing a G4LF/G4LFV appliance onto a 4-inch octagon box.",
            features: ["4-inch octagon box adapter plate.", "Required for the documented G4LF/G4LFV to 4-inch octagon box installation relationship."],
            quizQuestions: [],
            howItWorks: "GOCT adapts the applicable Genesis low-frequency appliance installation to a 4-inch octagon box when the project specifies that box type.",
            commonMistakes: ["Adding GOCT to every Genesis installation instead of checking the electrical box type."]
        },
        {
            id: 139,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "GRT-10 Genesis LED Device/Cover Removal Tool",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "GRT-10 is the Genesis LED device/cover removal tool supplied in a 10-pack.",
            features: ["Genesis LED device/cover removal tool.", "10-pack."],
            quizQuestions: [],
            howItWorks: "GRT-10 supports Genesis device/cover removal during installation or service.",
            commonMistakes: ["Treating the removal tool as a required per-device BOM quantity."]
        },
        {
            id: 140,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "G4TR Red G4 Trim Plate",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "G4TR is the red G4 trim plate.",
            features: ["Red G4 trim plate."],
            quizQuestions: [],
            howItWorks: "G4TR provides the documented red trim-plate option for applicable G4 installations.",
            commonMistakes: ["Selecting a trim plate without checking the specified housing or finish requirement."]
        },
        {
            id: 141,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "G4TW White G4 Trim Plate",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "G4TW is the white G4 trim plate.",
            features: ["White G4 trim plate."],
            quizQuestions: [],
            howItWorks: "G4TW provides the documented white trim-plate option for applicable G4 installations.",
            commonMistakes: ["Selecting a trim plate without checking the specified housing or finish requirement."]
        },
        {
            id: 142,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "G4RSB Red 4-Inch Surface-Mount Box",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "G4RSB is the red 4-inch surface-mount box.",
            features: ["Red 4-inch surface-mount box."],
            quizQuestions: [],
            howItWorks: "G4RSB is the documented red surface-mount box option for applicable Genesis installations.",
            commonMistakes: ["Adding a surface-mount box when the project specifies a different mounting arrangement."]
        },
        {
            id: 143,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Genesis Accessory",
            model: "G4WSB White 4-Inch Surface-Mount Box",
            verification: "VERIFIED",
            source: "Edwards Genesis datasheets supplied in Genesis/Genesis 1.pdf and Genesis/Genesis 2.pdf",
            sourceURL: "",
            image: "",
            officialDescription: "G4WSB is the white 4-inch surface-mount box.",
            features: ["White 4-inch surface-mount box."],
            quizQuestions: [],
            howItWorks: "G4WSB is the documented white surface-mount box option for applicable Genesis installations.",
            commonMistakes: ["Adding a surface-mount box when the project specifies a different mounting arrangement."]
        },
        {
            id: 16,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Mount Speaker and Speaker-Strobe",
            model: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1025%20--%20Genesis%20LED%20GCS%20Series%20Ceiling%20Mount%20Speakers%20and%20Speaker-Strobes.pdf",
            image: "",
            officialDescription: "Genesis speakers and speaker-strobes are part of the Edwards notification lineup, designed to blend with facilities while providing configurable notification output options.",
            features: [
                "Ceiling-mount speaker and speaker-strobe category.",
                "Part of Genesis LED notification family."
            ],
            quizQuestions: [166, 181, 116],
            howItWorks: "Ceiling speaker and speaker-strobe devices receive notification commands from system audio/notification pathways and provide audible/visual occupant notification based on configured cause-and-effect logic.",
            commonMistakes: [
                "Treating speaker-strobe scheduling the same as strobe-only scheduling without confirming audio requirements.",
                "Selecting ceiling devices where wall-mount models are required by room geometry and code application."
            ]
        },
        {
            id: 17,
            manufacturer: "Edwards",
            family: "Signature Optica",
            category: "Intelligent Smoke Detector",
            model: "SIGA-OSD Signature Optica Smoke Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1001%20--%20Signature%20Optica%20Smoke%20Detector.pdf",
            image: "https://images.carriercms.com/image/upload/v1650658068/edwards/Lifelines/Images/Intelligent-Devices/SIGA-OSD-front.jpg",
            officialDescription: "Current Signature Optica detector model listed by Edwards and part of the UL 268 7th Edition compliant Optica detector family.",
            features: [
                "Optica-series intelligent smoke detection.",
                "Part of the current UL 268 7th Edition compliant Signature Optica lineup."
            ],
            quizQuestions: [],
            howItWorks: "This detector monitors smoke conditions and reports intelligent status to the control panel for programmed alarm and supervisory responses.",
            commonMistakes: [
                "Confusing this smoke-only Optica model with combination smoke/heat or smoke/CO variants.",
                "Specifying legacy Signature detector models when Optica-series compliance is required."
            ]
        },
        {
            id: 18,
            manufacturer: "Edwards",
            family: "Signature Optica",
            category: "Intelligent Smoke and Heat Detector",
            model: "SIGA-OSHD Signature Optica Smoke & Heat Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1003%20--%20Signature%20Optica%20Smoke%20and%20Heat%20Detector.pdf",
            image: "https://images.carriercms.com/image/upload/v1650658068/edwards/Lifelines/Images/Intelligent-Devices/SIGA-OSHD-front.jpg",
            officialDescription: "Current Signature Optica smoke and heat detector model in Edwards literature and within the UL 268 7th Edition compliant Optica family.",
            features: [
                "Combined smoke and heat sensing.",
                "Part of the current Signature Optica detector platform."
            ],
            quizQuestions: [],
            howItWorks: "The detector evaluates smoke and thermal signatures and communicates addressable status updates to the panel logic.",
            commonMistakes: [
                "Treating this model as a CO-capable detector without verifying sensing functions.",
                "Using smoke-only assumptions for spaces that require multi-criteria detection."
            ]
        },
        {
            id: 21,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Photoelectric Smoke Detector",
            model: "SIGA-PD Intelligent Photoelectric Smoke Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature detection model maintained in Edwards Signature ecosystem references.",
            features: [
                "Legacy Signature photoelectric smoke detection.",
                "Commonly encountered on existing systems and retrofit documentation."
            ],
            quizQuestions: [],
            howItWorks: "This photoelectric initiating device reports smoke conditions to the panel over the Signature data loop.",
            commonMistakes: [
                "Confusing legacy PD variants with newer Optica series devices.",
                "Assuming all existing sites have been migrated to current detector families."
            ]
        },
        {
            id: 22,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Photoelectric Smoke Detector",
            model: "SIGA-PS Intelligent Photoelectric Smoke Detector (legacy variant)",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature photoelectric detector variant still seen in installed-base documentation and service workflows.",
            features: [
                "Legacy Signature photoelectric smoke detector variant.",
                "Appears in existing field inventories and maintenance records."
            ],
            quizQuestions: [],
            howItWorks: "The detector provides intelligent smoke initiation reporting to compatible Edwards Signature control systems.",
            commonMistakes: [
                "Replacing this legacy variant without checking panel compatibility and migration plans.",
                "Assuming equivalent behavior across all historical Signature smoke detector revisions."
            ]
        },
        {
            id: 23,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Photoelectric Smoke and Heat Detector",
            model: "SIGA-PHS Intelligent Photoelectric Smoke & Heat Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature combined smoke and heat detector listed within Edwards Signature initiating device ecosystem references.",
            features: [
                "Combined photoelectric smoke and heat sensing.",
                "Legacy Signature detector family model."
            ],
            quizQuestions: [],
            howItWorks: "This detector evaluates smoke and thermal conditions and signals intelligent device states to the control panel.",
            commonMistakes: [
                "Assuming this model includes CO sensing functions.",
                "Treating legacy multi-sensor products as identical to current Optica models."
            ]
        },
        {
            id: 24,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Multisensor Detector",
            model: "SIGA-PHD Intelligent Multisensor Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature multisensor detector model listed in Edwards Signature initiating device references.",
            features: [
                "Legacy multisensor detector model.",
                "Used in historical Signature detection deployments."
            ],
            quizQuestions: [],
            howItWorks: "The detector combines multiple sensing inputs and reports processed states to the addressable control system.",
            commonMistakes: [
                "Assuming every multisensor model has the same enabled sensing channels.",
                "Skipping model verification during replacement planning."
            ]
        },
        {
            id: 25,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Fixed Temperature Heat Detector",
            model: "SIGA-HFS Fixed Temperature Heat Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature fixed-temperature heat detection model in Edwards Signature initiating device ecosystem references.",
            features: [
                "Fixed-temperature intelligent heat detection.",
                "Part of legacy Signature detection offerings."
            ],
            quizQuestions: [],
            howItWorks: "The detector initiates based on fixed thermal threshold criteria and communicates intelligent status to the control panel.",
            commonMistakes: [
                "Applying fixed-temperature heat devices where rate-of-rise behavior is required.",
                "Using heat-only models where smoke detection criteria applies."
            ]
        },
        {
            id: 26,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Rate-of-Rise Heat Detector",
            model: "SIGA-HRS Rate-of-Rise Heat Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature rate-of-rise heat detection model in Edwards Signature initiating device references.",
            features: [
                "Rate-of-rise thermal detection behavior.",
                "Legacy Signature intelligent heat detector model."
            ],
            quizQuestions: [],
            howItWorks: "The detector tracks temperature rise characteristics and reports qualifying thermal events to panel logic.",
            commonMistakes: [
                "Treating rate-of-rise and fixed-temperature models as interchangeable.",
                "Ignoring environmental factors that affect heat detection strategy."
            ]
        },
        {
            id: 27,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Carbon Monoxide Detector",
            model: "SIGA-CO Intelligent Carbon Monoxide Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Legacy Signature intelligent CO detector model found in Edwards Signature detection references and installed-base documentation.",
            features: [
                "CO-specific intelligent detection.",
                "Legacy Signature detection family model."
            ],
            quizQuestions: [],
            howItWorks: "The detector monitors carbon monoxide conditions and transmits intelligent status for panel-based event handling.",
            commonMistakes: [
                "Assuming this model also provides smoke detection.",
                "Using legacy CO model assumptions for newer Optica detector selections."
            ]
        },
        {
            id: 28,
            manufacturer: "Edwards",
            family: "Monitor Modules",
            category: "Single Input Monitor Module",
            model: "SIGA-CC1 Single Input Monitor Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Common Signature monitor module used for single input monitoring in Edwards addressable module architecture.",
            features: [
                "Single input monitor module.",
                "Commonly shown on life safety drawings and BOMs."
            ],
            quizQuestions: [],
            howItWorks: "The module supervises one initiating input circuit and reports state changes to the panel as an addressable Signature module.",
            commonMistakes: [
                "Selecting monitor modules without matching input circuit requirements.",
                "Mixing standard and miniature module assumptions in BOMs."
            ]
        },
        {
            id: 29,
            manufacturer: "Edwards",
            family: "Monitor Modules",
            category: "Dual Input Monitor Module",
            model: "SIGA-CC2 Dual Input Monitor Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Signature dual input monitor module used for monitoring two initiating inputs within Edwards addressable systems.",
            features: [
                "Dual input monitoring capability.",
                "Part of common Signature module selections."
            ],
            quizQuestions: [],
            howItWorks: "This module supervises two input channels and reports input state transitions to the control panel.",
            commonMistakes: [
                "Assuming dual-input modules are direct drop-in replacements for single-input quantities.",
                "Overlooking wiring and enclosure constraints when converting module types."
            ]
        },
        {
            id: 30,
            manufacturer: "Edwards",
            family: "Monitor Modules",
            category: "Miniature Single Input Monitor Module",
            model: "SIGA-MCC1 Miniature Single Input Monitor Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Miniature Signature single input monitor module used where compact installation form factor is required.",
            features: [
                "Miniature form factor.",
                "Single supervised initiating input."
            ],
            quizQuestions: [],
            howItWorks: "The miniature module provides addressable supervision for one input while fitting constrained mounting locations.",
            commonMistakes: [
                "Ignoring mounting and accessibility constraints during module selection.",
                "Treating miniature models as equivalent to all standard-mount packaging options."
            ]
        },
        {
            id: 31,
            manufacturer: "Edwards",
            family: "Monitor Modules",
            category: "Miniature Dual Input Monitor Module",
            model: "SIGA-MCC2 Miniature Dual Input Monitor Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Miniature Signature dual input monitor module for compact two-channel input monitoring applications.",
            features: [
                "Miniature dual input monitoring.",
                "Common module for compact install scenarios."
            ],
            quizQuestions: [],
            howItWorks: "This miniature dual-input module supervises two initiating input channels and reports states to the panel loop.",
            commonMistakes: [
                "Selecting a miniature device without confirming enclosure and serviceability requirements.",
                "Assuming all dual-input variants share identical installation constraints."
            ]
        },
        {
            id: 32,
            manufacturer: "Edwards",
            family: "Monitor Modules",
            category: "Riser Monitor Module",
            model: "SIGA-RM1 Riser Monitor Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Signature riser monitor module used in riser monitoring applications within Edwards intelligent module architectures.",
            features: [
                "Riser monitor functionality.",
                "Part of Edwards Signature monitor module family."
            ],
            quizQuestions: [],
            howItWorks: "The module supervises designated riser input conditions and communicates status to the panel for system logic execution.",
            commonMistakes: [
                "Using generic monitor module assumptions where riser-specific behavior is needed.",
                "Not aligning module type with riser topology and design intent."
            ]
        },
        {
            id: 33,
            manufacturer: "Edwards",
            family: "Control Modules",
            category: "Single Output Control Module",
            model: "SIGA-CT1 Single Output Control Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Common Signature control module used for single output control in Edwards addressable systems.",
            features: [
                "Single output control.",
                "Frequently specified on fire alarm drawings and BOMs."
            ],
            quizQuestions: [],
            howItWorks: "The module switches a commanded output circuit under panel control according to programmed cause-and-effect logic.",
            commonMistakes: [
                "Assuming any control module meets all output electrical requirements.",
                "Not validating output module selection against the controlled load."
            ]
        },
        {
            id: 34,
            manufacturer: "Edwards",
            family: "Control Modules",
            category: "Dual Output Control Module",
            model: "SIGA-CT2 Dual Output Control Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "https://firealarm.com/wp-content/uploads/2021/01/SIGA-CT2-main.jpg",
            officialDescription: "Common Signature dual output control module used for two-channel output control in Edwards systems.",
            features: [
                "Dual output control channels.",
                "Common module family for output-side field control."
            ],
            quizQuestions: [],
            howItWorks: "The module provides two independently supervised output channels that can be activated by panel logic.",
            commonMistakes: [
                "Treating dual-output modules as simple quantity substitutions without design review.",
                "Failing to coordinate output channel use with sequence of operations."
            ]
        },
        {
            id: 35,
            manufacturer: "Edwards",
            family: "Relay Modules",
            category: "Control Relay Module",
            model: "SIGA-CR Control Relay Module",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0239%20--%20Control%20Relay%20Modules.pdf",
            image: "",
            officialDescription: "Signature control relay module for interfacing panel commands to external controlled circuits.",
            features: [
                "Form C relay style control interface.",
                "Used for auxiliary equipment control via panel logic."
            ],
            quizQuestions: [],
            howItWorks: "The relay module changes contact state when commanded, allowing panel events to control external equipment.",
            commonMistakes: [
                "Overlooking contact rating requirements for controlled loads.",
                "Treating relay modules as direct equivalents to notification control modules."
            ]
        },
        {
            id: 36,
            manufacturer: "Edwards",
            family: "Relay Modules",
            category: "Reverse Polarity Control Relay Module",
            model: "SIGA-CRR Reverse Polarity Control Relay Module",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0239%20--%20Control%20Relay%20Modules.pdf",
            image: "",
            officialDescription: "Signature reverse-polarity relay module variant used where reverse-polarity relay behavior is required by the design.",
            features: [
                "Reverse polarity relay behavior.",
                "Part of the Signature control relay module family."
            ],
            quizQuestions: [],
            howItWorks: "This module provides relay-based output control aligned with reverse-polarity control use cases defined in system design.",
            commonMistakes: [
                "Using standard relay assumptions where reverse-polarity behavior is required.",
                "Skipping specification checks for model-specific relay characteristics."
            ]
        },
        {
            id: 38,
            manufacturer: "Edwards",
            family: "Signal Modules",
            category: "Universal Class B Signal Module",
            model: "SIGA-UM Universal Class B Signal Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Signature universal signal module variant for Class B signaling applications in Edwards intelligent module ecosystems.",
            features: [
                "Universal signaling functionality.",
                "Class B signaling application category."
            ],
            quizQuestions: [],
            howItWorks: "This signal module provides addressable output signaling in Class B wiring topologies under panel command.",
            commonMistakes: [
                "Using Class B modules where Class A survivability topology is required.",
                "Assuming all signal module variants have identical wiring constraints."
            ]
        },
        {
            id: 39,
            manufacturer: "Edwards",
            family: "Signal Modules",
            category: "Universal Class A/B Signal Module",
            model: "SIGA-UM2 Universal Class A/B Signal Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Signature universal signal module variant supporting Class A/B signaling applications depending on project topology requirements.",
            features: [
                "Class A/B signaling flexibility.",
                "Universal signal module family variant."
            ],
            quizQuestions: [],
            howItWorks: "The module enables addressable signaling outputs configured for Class A or Class B topologies per system design.",
            commonMistakes: [
                "Assuming topology flexibility removes the need for detailed circuit design checks.",
                "Applying market-specific variant assumptions to all regions."
            ]
        },
        {
            id: 40,
            manufacturer: "Edwards",
            family: "Signal Modules",
            category: "Class A Signal Module",
            model: "SIGA-CC1S Class A Signal Module (varies by market)",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0609%20--%20Signal%20Modules%20with%20Class%20A%20Operation.pdf",
            image: "",
            officialDescription: "Class A signal module variant documented in Edwards signal module literature, with availability and naming that can vary by market.",
            features: [
                "Class A signaling application focus.",
                "Referenced alongside dedicated Class A operation signal module documentation."
            ],
            quizQuestions: [],
            howItWorks: "This module provides supervised Class A signaling behavior under panel command in applicable Edwards system designs.",
            commonMistakes: [
                "Ignoring regional naming and availability differences during submittal creation.",
                "Assuming Class A variants are identical to Class B-only module behavior."
            ]
        },
        {
            id: 41,
            manufacturer: "Edwards",
            family: "Isolators",
            category: "Short Circuit Isolator Module",
            model: "SIGA-IM Short Circuit Isolator Module",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-input-output-modules/",
            image: "",
            officialDescription: "Signature short-circuit isolator module used to limit fault impact in intelligent loop architectures.",
            features: [
                "Loop fault isolation functionality.",
                "Applied for survivability and fault-containment design intent."
            ],
            quizQuestions: [],
            howItWorks: "The module opens isolation points when short-circuit conditions occur, helping confine loop faults to designed segments.",
            commonMistakes: [
                "Placing isolators without planned segmentation strategy.",
                "Treating all isolator models as equivalent across generations."
            ]
        },
        {
            id: 43,
            manufacturer: "Edwards",
            family: "Releasing Modules",
            category: "Releasing Module",
            model: "SIGA-RM Releasing Module",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0531%20--%20Releasing%20Module.pdf",
            image: "",
            officialDescription: "Signature releasing module used in releasing-service applications such as pre-action, deluge, and clean-agent systems.",
            features: [
                "Releasing-service application module.",
                "Used in special hazard and suppression control workflows."
            ],
            quizQuestions: [],
            howItWorks: "The module interfaces releasing logic from the fire alarm panel to releasing circuits in accordance with configured sequence-of-operations.",
            commonMistakes: [
                "Applying standard control-module assumptions to releasing-service design.",
                "Skipping releasing sequence and supervision validation during engineering review."
            ]
        },
        {
            id: 44,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Standard Detector Base",
            model: "SIGA-SB Standard Detector Base",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Standard Signature detector base used for compatible Signature detector head mounting and loop connectivity.",
            features: [
                "Standard Signature detector base format.",
                "Supports compatible Signature detector heads."
            ],
            quizQuestions: [],
            howItWorks: "The base provides mechanical mounting and electrical interface between the detector head and Signature loop.",
            commonMistakes: [
                "Mixing incompatible base and detector head families.",
                "Selecting base type without confirming mounting box and footprint requirements."
            ]
        },
        {
            id: 45,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Standard Detector Base (4-inch)",
            model: "SIGA-SB4 Standard Detector Base (4-inch)",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "4-inch Signature standard detector base variant used where specific footprint or mounting standards apply.",
            features: [
                "4-inch base footprint.",
                "Part of Signature detector base/accessory ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "This base performs standard Signature detector mounting and electrical interfacing with a 4-inch form factor.",
            commonMistakes: [
                "Substituting 4-inch bases without confirming backbox and trim compatibility.",
                "Assuming physical footprint changes do not affect field fit-up."
            ]
        },
        {
            id: 46,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Isolator Detector Base",
            model: "SIGA-IB Isolator Detector Base",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Signature isolator detector base variant adding isolation functionality at detector base locations.",
            features: [
                "Detector base with isolation behavior.",
                "Supports Signature loop fault-management strategy at point locations."
            ],
            quizQuestions: [],
            howItWorks: "The base combines detector mounting with loop-isolation capability to help contain short-circuit impact.",
            commonMistakes: [
                "Using standard base assumptions where isolator-base behavior is required.",
                "Placing isolator bases without coordinated segmentation intent."
            ]
        },
        {
            id: 47,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Isolator Detector Base (4-inch)",
            model: "SIGA-IB4 Isolator Detector Base (4-inch)",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "4-inch Signature isolator detector base variant for detector mounting with integrated isolation behavior.",
            features: [
                "4-inch isolator base footprint.",
                "Combines mounting interface with loop-isolation function."
            ],
            quizQuestions: [],
            howItWorks: "This base provides detector interfacing while offering isolation behavior in a 4-inch installation format.",
            commonMistakes: [
                "Mismatching footprint and electrical isolation requirements during replacements.",
                "Treating 4-inch isolator bases as direct mechanical equivalents to all base types."
            ]
        },
        {
            id: 48,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Audible Sounder Base",
            model: "SIGA-AB4G Audible Sounder Base",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Signature audible sounder base accessory used to provide local audible output at detector base positions.",
            features: [
                "Audible sounder base functionality.",
                "Accessory within the Signature detector base ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "The base adds local sounder notification behavior tied to programmed panel events while supporting detector mounting.",
            commonMistakes: [
                "Assuming detector sounder bases replace dedicated corridor notification design.",
                "Overlooking coordination between detector and local sounder operation logic."
            ]
        },
        {
            id: 49,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Remote LED Indicator",
            model: "SIGA-LED Remote LED Indicator",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Signature remote LED indicator accessory used for remote visual status indication of associated initiating devices.",
            features: [
                "Remote visual indication.",
                "Accessory used with Signature detector/base configurations."
            ],
            quizQuestions: [],
            howItWorks: "The indicator mirrors configured device status indications at a remote visible location to aid monitoring and serviceability.",
            commonMistakes: [
                "Assuming remote indicators provide standalone initiating functionality.",
                "Skipping coordination of indicator locations with access and visibility needs."
            ]
        },
        {
            id: 50,
            manufacturer: "Edwards",
            family: "Manual Pull Stations",
            category: "Single Action Intelligent Pull Station",
            model: "SIGA-270 Single Action Intelligent Pull Station",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices/",
            image: "",
            officialDescription: "Signature intelligent manual pull station model for single-action manual initiation in Edwards system designs.",
            features: [
                "Single-action manual initiation.",
                "Part of Edwards Signature manual station ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "Manual station activation initiates an alarm event to the addressable control system according to programmed response logic.",
            commonMistakes: [
                "Confusing single-action and double-action station requirements by occupancy or AHJ direction.",
                "Treating all manual station models as functionally identical during submittal preparation."
            ]
        },
        {
            id: 51,
            manufacturer: "Edwards",
            family: "Manual Pull Stations",
            category: "Double Action Intelligent Pull Station",
            model: "SIGA-278 Double Action Intelligent Pull Station",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/conventional-initiating-devices/",
            image: "",
            officialDescription: "Signature intelligent double-action pull station model for manual fire alarm initiation where double-action operation is required.",
            features: [
                "Double-action manual initiation.",
                "Used in applications requiring two-step pull station operation."
            ],
            quizQuestions: [],
            howItWorks: "The station initiates an alarm after its required double-action sequence and reports to the system for programmed notification response.",
            commonMistakes: [
                "Selecting station action type without confirming project and AHJ requirements.",
                "Mixing single-action and double-action station assumptions in BOM counts."
            ]
        },
        {
            id: 52,
            manufacturer: "Edwards",
            family: "Detector Bases",
            category: "Audible Sounder Base (Low Frequency)",
            model: "SIGA-AB4G-LF Audible Sounder Base (Low Frequency)",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards listing for the Signature audible sounder base low-frequency variant used where low-frequency notification is specified.",
            features: [
                "Low-frequency sounder base variant.",
                "Fits the Signature detector base accessory ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "The base adds low-frequency audible signaling at detector locations while keeping the detector mounting and loop interface intact.",
            commonMistakes: [
                "Assuming standard sounder bases are interchangeable with low-frequency variants.",
                "Ignoring occupancy-specific low-frequency design criteria."
            ]
        },
        {
            id: 53,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Multisensor Smoke and CO Detector",
            model: "SIGA-PCD Intelligent Multisensor Smoke and CO Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent initiating device listing for the Signature multisensor smoke and CO detector family variant.",
            features: [
                "Multisensor smoke and CO detection capability.",
                "Part of the legacy Signature initiating device ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "The detector evaluates smoke and carbon monoxide conditions and reports intelligent status to compatible panel logic.",
            commonMistakes: [
                "Assuming multisensor smoke and CO devices provide the same sensing profile as single-criteria detector variants.",
                "Using model names interchangeably without checking the exact sensing combination."
            ]
        },
        {
            id: 54,
            manufacturer: "Edwards",
            family: "Legacy Signature Detection",
            category: "Intelligent Multisensor Smoke, Heat and CO Detector",
            model: "SIGA-PHCD Intelligent Multisensor Smoke, Heat and CO Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent initiating device listing for the Signature multisensor smoke, heat, and CO detector variant.",
            features: [
                "Combined smoke, heat, and CO sensing capability.",
                "Part of the legacy Signature multisensor detector family."
            ],
            quizQuestions: [],
            howItWorks: "The detector combines smoke, thermal, and CO sensing inputs and communicates addressable status to the fire alarm system.",
            commonMistakes: [
                "Treating this as a standard smoke-only device without verifying its heat and CO functions.",
                "Assuming all multisensor products use the same sensing mix."
            ]
        },
        {
            id: 55,
            manufacturer: "Edwards",
            family: "Motion Detection",
            category: "PIR Motion Detector",
            model: "SIGA-MD Signature PIR Motion Detector",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent device listing for the Signature PIR motion detector accessory family.",
            features: [
                "PIR-based motion detection capability.",
                "Used in Signature system accessory and monitoring workflows."
            ],
            quizQuestions: [],
            howItWorks: "The detector reports occupancy or motion-related status through the Signature system architecture for the intended application logic.",
            commonMistakes: [
                "Assuming motion detectors behave like standard initiating devices in all applications.",
                "Ignoring the intended use case and placement criteria when selecting motion-based devices."
            ]
        },
        {
            id: 56,
            manufacturer: "Edwards",
            family: "Motion Detection",
            category: "PIR Motion Detector (Swivel Mount)",
            model: "SIGA-MDS Signature PIR Motion Detector Swivel Mount",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent device listing for the Signature PIR motion detector swivel-mount variant.",
            features: [
                "Swivel-mount mechanical adaptation for PIR motion detection.",
                "Designed for applications where detector orientation needs adjustment."
            ],
            quizQuestions: [],
            howItWorks: "The swivel-mount version provides the same motion-detection function with a fixed orientation option suited to installation geometry.",
            commonMistakes: [
                "Assuming all PIR detectors share the same mounting approach.",
                "Overlooking placement geometry when selecting the swivel-mount variant."
            ]
        },
        {
            id: 57,
            manufacturer: "Edwards",
            family: "System Cabinets",
            category: "Complete Cabinet",
            model: "SIGA-SEC2 Complete Cabinet",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent device listing for the Signature complete cabinet used with local rail module spaces.",
            features: [
                "Wallbox and door with five local rail module spaces.",
                "Used as a cabinet solution within the Signature ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "The cabinet provides enclosure support and module-space capacity for Signature-system equipment layouts.",
            commonMistakes: [
                "Treating cabinet hardware as interchangeable with field device modules.",
                "Ignoring module-space capacity and enclosure planning."
            ]
        },
        {
            id: 58,
            manufacturer: "Edwards",
            family: "Accessories",
            category: "System Accessory",
            model: "SIGA-TS Signature System Accessory",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent device listing for the Signature accessory identified as SIGA-TS.",
            features: [
                "Listed by Edwards as a Signature accessory.",
                "Supports the broader Signature module and device ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "This accessory item is part of the Signature product family and should be treated as a system accessory rather than a primary initiating device.",
            commonMistakes: [
                "Assuming every Signature accessory has the same function as a detector or module.",
                "Overlooking accessory-specific installation context during BOM review."
            ]
        },
        {
            id: 59,
            manufacturer: "Edwards",
            family: "Accessories",
            category: "Detector Mounting Plate",
            model: "SIGA-DMP Detector Mounting Plate",
            verification: "VERIFIED",
            sourceURL: "https://www.edwardsfiresafety.com/lifelines/intelligent-initiating-devices/",
            image: "",
            officialDescription: "Official Edwards intelligent device listing for the Signature detector mounting plate used in raised-floor and plenum applications.",
            features: [
                "Raised-floor and plenum mounting support.",
                "Used as a detector mounting accessory within the Signature ecosystem."
            ],
            quizQuestions: [],
            howItWorks: "The mounting plate provides the required mechanical interface for detector placement in non-standard or constrained ceiling or floor spaces.",
            commonMistakes: [
                "Assuming a standard detector base is sufficient in plenum or raised-floor layouts.",
                "Ignoring mounting-plate requirements when reviewing installation details."
            ]
        },
        {
            id: 60,
            manufacturer: "Edwards",
            family: "Input/Output Modules",
            category: "Synchronization Output Module",
            model: "E85001-0543 Synchronization Output Module",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0543%20--%20Synchronization%20Output%20Module.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for the Synchronization Output Module.",
            features: [
                "Listed by Edwards as a synchronization output module.",
                "Included in the Intelligent Input/Output Modules literature set."
            ],
            quizQuestions: [44],
            howItWorks: "The module provides synchronization output behavior in Edwards intelligent system architectures according to the documented product listing.",
            commonMistakes: [
                "Treating the module as a generic control module without confirming its synchronization role.",
                "Assuming all output modules share the same function and wiring intent."
            ]
        },
        {
            id: 61,
            manufacturer: "Edwards",
            family: "Input/Output Modules",
            category: "Universal Input-Output Module Motherboards",
            model: "E85001-0365 Universal Input-Output Module Motherboards",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0365%20--%20Universal%20Input-Output%20Module%20Motherboards.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Universal Input-Output Module Motherboards.",
            features: [
                "Listed by Edwards as universal input-output module motherboards.",
                "Part of the Edwards intelligent module ecosystem documentation."
            ],
            quizQuestions: [45],
            howItWorks: "These motherboards provide a documented hardware platform for Edwards intelligent input-output module applications in the product listing.",
            commonMistakes: [
                "Assuming all module hardware is interchangeable without checking the documented motherboard listing.",
                "Treating the product as a generic field device rather than a module platform component."
            ]
        },
        {
            id: 62,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Beam Smoke Detector",
            model: "E85001-0743 Fireray Smoke Beam Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0743%20--%20Fireray%20Smoke%20Beam%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the Fireray Smoke Beam Detector.",
            features: [
                "Listed by Edwards as a beam smoke detector product.",
                "Part of the conventional initiating devices collection."
            ],
            quizQuestions: [46],
            howItWorks: "The detector is documented as a dedicated beam smoke detector product in Edwards conventional initiating devices literature.",
            commonMistakes: [
                "Assuming all smoke detectors are point-type detectors without checking the beam-detector category.",
                "Using conventional detector assumptions when a beam detector is actually specified."
            ]
        },
        {
            id: 63,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Beam Smoke Detector",
            model: "E85001-0643 End-to-End Beam Smoke Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0643%20--%20End-to-End%20Beam%20Smoke%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the End-to-End Beam Smoke Detector.",
            features: [
                "Listed by Edwards as an end-to-end beam smoke detector.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a conventional beam detector option in Edwards initiating device literature.",
            commonMistakes: [
                "Treating beam detectors as interchangeable with point detectors without confirming the application.",
                "Overlooking detector technology differences when reviewing project documents."
            ]
        },
        {
            id: 64,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Explosionproof Smoke Detector",
            model: "E85001-0645 Explosionproof Smoke Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0645%20--%20Explosionproof%20Smoke%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the Explosionproof Smoke Detector.",
            features: [
                "Listed by Edwards as an explosionproof smoke detector.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "The device is documented as an explosionproof detector product within the conventional initiating devices offering.",
            commonMistakes: [
                "Assuming all smoke detectors are suitable for hazardous locations without confirming the product category.",
                "Ignoring the environmental requirements that drive hazardous-location detector selection."
            ]
        },
        {
            id: 65,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Carbon Monoxide Detector",
            model: "E85001-0632 Carbon Monoxide Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0632%20--%20Carbon%20Monoxide%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the Carbon Monoxide Detector.",
            features: [
                "Listed by Edwards as a carbon monoxide detector.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "The detector is documented as a carbon monoxide detector product in the conventional initiating devices portfolio.",
            commonMistakes: [
                "Assuming CO detection products provide smoke detection as well.",
                "Using product names interchangeably when the sensing technology differs."
            ]
        },
        {
            id: 66,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Reflective Beam Detector",
            model: "E85001-0616 EC5000R Reflective Beam Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0616%20--%20EC5000R%20Reflective%20Beam%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the EC5000R Reflective Beam Detector.",
            features: [
                "Listed by Edwards as a reflective beam detector.",
                "Part of the conventional initiating devices beam-detector offering."
            ],
            quizQuestions: [],
            howItWorks: "The detector is documented as a reflective beam detector product in the conventional initiating devices collection.",
            commonMistakes: [
                "Assuming beam detectors are the same as point-type detectors without confirming the application.",
                "Ignoring the need to verify the exact detector model chosen for the project."
            ]
        },
        {
            id: 67,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Conventional Smoke and Heat Detector",
            model: "E85001-0599 Conventional 2-Wire Smoke & Heat Detectors",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0599%20--%20Conventional%202-Wire%20Smoke%20and%20Heat%20Detectors.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for Conventional 2-Wire Smoke & Heat Detectors.",
            features: [
                "Listed by Edwards as conventional 2-wire smoke and heat detectors.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "This product listing documents a conventional smoke and heat detector family in the initiating device line.",
            commonMistakes: [
                "Assuming conventional detectors behave the same as addressable detectors.",
                "Skipping the exact model review when selecting detector families."
            ]
        },
        {
            id: 68,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Heat Detector",
            model: "E85001-0589 Rate Compensation Heat Detectors",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0589%20--%20Rate%20Compensation%20Heat%20Detectors.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for Rate Compensation Heat Detectors.",
            features: [
                "Listed by Edwards as rate compensation heat detectors.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a heat detector family in the conventional initiating devices portfolio.",
            commonMistakes: [
                "Treating all heat detectors as identical without checking the design basis.",
                "Using smoke-detector assumptions when a heat detector is actually needed."
            ]
        },
        {
            id: 69,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Duct Smoke Detector",
            model: "E85001-0585 Two-Wire SuperDuct Duct Smoke Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0585%20--%20Two-Wire%20SuperDuct%20Duct%20Smoke%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the Two-Wire SuperDuct Duct Smoke Detector.",
            features: [
                "Listed by Edwards as a two-wire SuperDuct duct smoke detector.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a duct smoke detector option in Edwards conventional initiating devices literature.",
            commonMistakes: [
                "Assuming all duct detectors use the same mounting strategy without checking the model.",
                "Ignoring the distinction between two-wire and four-wire duct detector products."
            ]
        },
        {
            id: 70,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Duct Smoke Detector",
            model: "E85001-0583 Four-Wire SuperDuct Duct Smoke Detector",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0583%20--%20Four-Wire%20SuperDuct%20Duct%20Smoke%20Detector.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the Four-Wire SuperDuct Duct Smoke Detector.",
            features: [
                "Listed by Edwards as a four-wire SuperDuct duct smoke detector.",
                "Appears in the conventional initiating devices collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a four-wire duct smoke detector option in the conventional initiating devices collection.",
            commonMistakes: [
                "Assuming two-wire and four-wire devices are interchangeable without reviewing the application.",
                "Ignoring the distinction between duct detector wiring methods."
            ]
        },
        {
            id: 71,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Fire Alarm Station",
            model: "E85001-0303 Fire Alarm Stations",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0303%20--%20Fire%20Alarm%20Stations.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for Fire Alarm Stations.",
            features: [
                "Listed by Edwards as fire alarm stations.",
                "Appears in the conventional initiating devices manual stations collection."
            ],
            quizQuestions: [],
            howItWorks: "This listing documents the conventional manual station offering in the Edwards initiating device collection.",
            commonMistakes: [
                "Assuming manual stations are all identical without checking the station type.",
                "Ignoring project-specific station action requirements."
            ]
        },
        {
            id: 72,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Pull Station",
            model: "E85001-0227 Double Action Pull Stations",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0227%20--%20Double%20Action%20Pull%20Stations.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for Double Action Pull Stations.",
            features: [
                "Listed by Edwards as double action pull stations.",
                "Appears in the conventional initiating devices manual stations collection."
            ],
            quizQuestions: [47],
            howItWorks: "The station is documented as a double-action manual initiating device in the conventional portfolio.",
            commonMistakes: [
                "Assuming all manual stations use the same operating action.",
                "Ignoring station-action requirements specified by the project or AHJ."
            ]
        },
        {
            id: 73,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Pull Station",
            model: "E85001-0183 Single Action Pull Stations",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0183%20--%20Single%20Action%20Pull%20Stations.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for Single Action Pull Stations.",
            features: [
                "Listed by Edwards as single action pull stations.",
                "Appears in the conventional initiating devices manual stations collection."
            ],
            quizQuestions: [],
            howItWorks: "The station is documented as a single-action manual initiating device in the conventional portfolio.",
            commonMistakes: [
                "Assuming single-action and double-action station requirements are interchangeable.",
                "Ignoring the operation type when reviewing station schedules."
            ]
        },
        {
            id: 74,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Hazardous-Location Station",
            model: "E85001-0371 Hazardous location Fire Alarm Station",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0371%20--%20Hazardous%20location%20Fire%20Alarm%20Station.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for a Hazardous location Fire Alarm Station.",
            features: [
                "Listed by Edwards as a hazardous-location fire alarm station.",
                "Appears in the conventional initiating devices manual station collection."
            ],
            quizQuestions: [],
            howItWorks: "The station is documented as a hazardous-location manual station option in Edwards conventional initiating devices literature.",
            commonMistakes: [
                "Assuming standard stations are suitable for hazardous locations without checking the listed product.",
                "Ignoring environmental conditions when planning manual station selection."
            ]
        },
        {
            id: 75,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Weatherproof/Explosionproof Pull Station",
            model: "E85001-0588 Weatherproof, Explosionproof Pull Stations",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0588%20--%20Weatherproof,%20Explosionproof%20Pull%20Stations.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for Weatherproof and Explosionproof Pull Stations.",
            features: [
                "Listed by Edwards as weatherproof/explosionproof pull stations.",
                "Appears in the conventional initiating devices manual stations collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a weatherproof or explosionproof station option within the Edwards conventional initiating devices line.",
            commonMistakes: [
                "Assuming standard pull stations are suitable for harsh-environment locations.",
                "Ignoring special application requirements in station selection."
            ]
        },
        {
            id: 76,
            manufacturer: "Edwards",
            family: "Conventional Initiating Devices",
            category: "Key-Operated Station",
            model: "E85001-0654 Key-operated Fire Alarm Station",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0654%20--%20Key-operated%20Fire%20Alarm%20Station.pdf",
            image: "",
            officialDescription: "Official Edwards Conventional Initiating Devices catalog listing for the Key-operated Fire Alarm Station.",
            features: [
                "Listed by Edwards as a key-operated fire alarm station.",
                "Appears in the conventional initiating devices manual stations collection."
            ],
            quizQuestions: [],
            howItWorks: "The station is documented as a key-operated manual station option in Edwards conventional initiating device literature.",
            commonMistakes: [
                "Assuming all manual stations share the same operation method.",
                "Ignoring the need to verify key-operated station requirements."
            ]
        },
        {
            id: 77,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Wall Mount Speaker and Speaker-Strobe",
            model: "E85001-1026 Genesis LED G4S Series Wall Mount Speakers and Speaker-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1026%20--%20Genesis%20LED%20G4S%20Series%20Wall%20Mount%20Speakers%20and%20Speaker-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for the Genesis LED G4S Series Wall Mount Speakers and Speaker-Strobes.",
            features: [
                "Listed by Edwards as a Genesis wall-mount speaker and speaker-strobe product.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [48],
            howItWorks: "This product is documented as a Genesis wall-mount speaker and speaker-strobe offering in the Edwards notification portfolio.",
            commonMistakes: [
                "Assuming all Genesis wall notification products use the same form factor.",
                "Mixing wall-mount speakers with ceiling-mount models without reviewing the listed product."
            ]
        },
        {
            id: 78,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Mount Notification Device",
            model: "E85001-1021 Genesis LED GC Series Ceiling Mount Notification Devices",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1021%20--%20Genesis%20LED%20GC%20Series%20Ceiling%20Mount%20Notification%20Devices.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for the Genesis LED GC Series Ceiling Mount Notification Devices.",
            features: [
                "Listed by Edwards as a Genesis ceiling mount notification device family.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a Genesis ceiling-mount notification device offering in Edwards notification literature.",
            commonMistakes: [
                "Assuming ceiling-mounted notification devices are interchangeable with wall-mounted models.",
                "Ignoring the ceiling-mount product family when reviewing notification schedules."
            ]
        },
        {
            id: 79,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Strobe Expander",
            model: "E85001-0614 Genesis LED G4SE Strobe Expander",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0614%20---%20Genesis%20LED%20G4SE%20Strobe%20Expander.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for the Genesis LED G4SE Strobe Expander.",
            features: [
                "Listed by Edwards as a Genesis strobe expander.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "The strobe expander is documented as a Genesis notification accessory within the Edwards notification lineup.",
            commonMistakes: [
                "Treating the strobe expander as a complete notification appliance rather than an accessory component.",
                "Ignoring the distinction between appliance and expander products."
            ]
        },
        {
            id: 80,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Chime and Chime-Strobe",
            model: "E85001-0574 Genesis Chimes and Chime-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0574%20--%20Genesis%20Chimes%20and%20Chime-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for Genesis Chimes and Chime-Strobes.",
            features: [
                "Listed by Edwards as Genesis chimes and chime-strobes.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a Genesis chime and chime-strobe offering in the Edwards notification portfolio.",
            commonMistakes: [
                "Assuming all audible notification appliances are horns or speakers.",
                "Ignoring chime and chime-strobe products when reviewing notification schedules."
            ]
        },
        {
            id: 81,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Low Frequency Audible Signal",
            model: "E85001-0639 Genesis Low Frequency Audible Signals",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0639%20--%20Genesis%20Low%20Frequency%20Audible%20Signals.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for Genesis Low Frequency Audible Signals.",
            features: [
                "Listed by Edwards as Genesis low frequency audible signals.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a low-frequency audible signal offering within the Edwards Genesis line.",
            commonMistakes: [
                "Assuming standard audible appliances are interchangeable with low-frequency variants.",
                "Ignoring application-specific low-frequency requirements."
            ]
        },
        {
            id: 82,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Multiple Tone Signal",
            model: "E85001-0415 Multiple Tone Signal",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0415%20--%20Multiple%20Tone%20Signal.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for the Multiple Tone Signal.",
            features: [
                "Listed by Edwards as a multiple tone signal.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a signal appliance within the Edwards notification portfolio.",
            commonMistakes: [
                "Assuming all notification appliances are strobes or speakers.",
                "Ignoring audible signal options when reviewing the notification schedule."
            ]
        },
        {
            id: 83,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Synchronized Strobe",
            model: "E85001-0369 202 Synchronized Strobe",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0369%20--%20202%20Synchronized%20Strobe.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for the 202 Synchronized Strobe.",
            features: [
                "Listed by Edwards as a synchronized strobe product.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a synchronized strobe option in the Edwards notification offering.",
            commonMistakes: [
                "Assuming all strobes are identical without checking for synchronized operation.",
                "Ignoring the distinction between standard and synchronized strobe products."
            ]
        },
        {
            id: 84,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Horn and Horn-Strobe",
            model: "E85001-0341 Temporal Horns and Horn-strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0341%20--%20Temporal%20Horns%20and%20Horn-strobes.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for Temporal Horns and Horn-strobes.",
            features: [
                "Listed by Edwards as temporal horns and horn-strobes.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a horn and horn-strobe offering in the Edwards notification portfolio.",
            commonMistakes: [
                "Assuming all audible notification devices are speakers or chimes.",
                "Ignoring the distinction between horn and horn-strobe products."
            ]
        },
        {
            id: 85,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Bell",
            model: "E85001-0333 Fire Alarm Bells",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0333%20--%20Fire%20Alarm%20Bells.pdf",
            image: "",
            officialDescription: "Official Edwards speakers and strobes page listing for Fire Alarm Bells.",
            features: [
                "Listed by Edwards as fire alarm bells.",
                "Appears in the speakers, strobes, horns, bells and chimes collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a bell-type notification appliance within the Edwards notification portfolio.",
            commonMistakes: [
                "Assuming all notification products are strobes or speakers.",
                "Ignoring bell products when reviewing audible notification options."
            ]
        },
        {
            id: 86,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Power Supply",
            model: "E85005-0127 Auxiliary Power Supply",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85005-0127%20--%20Auxiliary%20Power%20Supply.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for the Auxiliary Power Supply.",
            features: [
                "Listed by Edwards as an auxiliary power supply.",
                "Appears in the power supplies and accessories collection."
            ],
            quizQuestions: [49],
            howItWorks: "The product is documented as a power supply item in the Edwards accessories and power supplies collection.",
            commonMistakes: [
                "Assuming all power supply products are identical without confirming the listed model.",
                "Ignoring power-supply selection differences when reviewing system architecture."
            ]
        },
        {
            id: 87,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Power Supply",
            model: "E85005-0125 Remote Booster Power Supplies",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85005-0125%20--%20Remote%20Booster%20Power%20Supplies.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Remote Booster Power Supplies.",
            features: [
                "Listed by Edwards as remote booster power supplies.",
                "Appears in the power supplies and accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "This product is documented as a booster power supply offering within the Edwards power supplies and accessories line.",
            commonMistakes: [
                "Assuming every power supply is a primary panel supply.",
                "Ignoring the need to verify the specific booster power supply product."
            ]
        },
        {
            id: 88,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Battery",
            model: "E85010-0127 Batteries",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85010-0127%20--%20Batteries.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Batteries.",
            features: [
                "Listed by Edwards as batteries.",
                "Appears in the power supplies and accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a battery offering within the Edwards power supplies and accessories collection.",
            commonMistakes: [
                "Assuming battery selection is independent of the installed system architecture.",
                "Ignoring the need to verify the correct battery product for the project."
            ]
        },
        {
            id: 89,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Power Supply / Interface",
            model: "E85005-0111 Voltage Regulator with Security Bell Interface",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85005-0111%20--%20Voltage%20Regulator%20with%20Security%20Bell%20Interface.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for a Voltage Regulator with Security Bell Interface.",
            features: [
                "Listed by Edwards as a voltage regulator with security bell interface.",
                "Appears in the power supplies and accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a voltage-regulator accessory within the Edwards power supplies and accessories collection.",
            commonMistakes: [
                "Assuming every voltage regulator is a general-purpose power supply.",
                "Ignoring the need to verify the interface role described in the product listing."
            ]
        },
        {
            id: 90,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Control Relay",
            model: "E85003-2766 PAM1 Multi-Voltage Control Relay",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85003-2766%20--%20PAM1%20Multi-Voltage%20Control%20Relay.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for the PAM1 Multi-Voltage Control Relay.",
            features: [
                "Listed by Edwards as a multi-voltage control relay.",
                "Appears in the power supplies and accessories relays collection."
            ],
            quizQuestions: [],
            howItWorks: "The relay is documented as a control relay product in the Edwards power-supplies and accessories portfolio.",
            commonMistakes: [
                "Assuming all relay products are interchangeable without checking the listed type.",
                "Ignoring the multi-voltage relay distinction when reviewing control requirements."
            ]
        },
        {
            id: 91,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Control Relay",
            model: "E85003-2765 Heavy Duty Power Relays",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85003-2765%20--%20Heavy%20Duty%20Power%20Relays.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Heavy Duty Power Relays.",
            features: [
                "Listed by Edwards as heavy duty power relays.",
                "Appears in the power supplies and accessories relays collection."
            ],
            quizQuestions: [],
            howItWorks: "The relays are documented as heavy-duty control relay items in the Edwards power-supplies portfolio.",
            commonMistakes: [
                "Assuming all relay products have the same duty rating without confirming the listed variant.",
                "Ignoring the need to review the exact relay model."
            ]
        },
        {
            id: 92,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Control Relay",
            model: "E85003-2764 MR-700 Multi-Voltage Control Relays",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85003-2764%20--%20MR-700%20Multi-Voltage%20Control%20Relays.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for MR-700 Multi-Voltage Control Relays.",
            features: [
                "Listed by Edwards as MR-700 multi-voltage control relays.",
                "Appears in the power supplies and accessories relays collection."
            ],
            quizQuestions: [],
            howItWorks: "The relays are documented as MR-700 multi-voltage control relay items in the Edwards offerings.",
            commonMistakes: [
                "Assuming every multi-voltage relay shares the same exact model designation.",
                "Ignoring the specific relay family when reviewing panel control requirements."
            ]
        },
        {
            id: 93,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Control Relay",
            model: "E85003-2763 MR-800 Multi-Voltage Control Relays",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85003-2763%20--%20MR-800%20Multi-Voltage%20Control%20Relays.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for MR-800 Multi-Voltage Control Relays.",
            features: [
                "Listed by Edwards as MR-800 multi-voltage control relays.",
                "Appears in the power supplies and accessories relays collection."
            ],
            quizQuestions: [],
            howItWorks: "The relays are documented as MR-800 multi-voltage control relay items in the Edwards offerings.",
            commonMistakes: [
                "Assuming the MR-700 and MR-800 relay families are interchangeable without checking the listed model.",
                "Ignoring the exact control-relay family during product selection."
            ]
        },
        {
            id: 94,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Control Relay",
            model: "E85003-2762 MR-100 and 200 Multi-Voltage Control Relays",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85003-2762%20--%20MR-100%20and%20200%20Multi-Voltage%20Control%20Relays.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for MR-100 and 200 Multi-Voltage Control Relays.",
            features: [
                "Listed by Edwards as MR-100 and 200 multi-voltage control relays.",
                "Appears in the power supplies and accessories relays collection."
            ],
            quizQuestions: [],
            howItWorks: "The relays are documented as MR-100 and 200 multi-voltage control relay items in the Edwards power-supplies offering.",
            commonMistakes: [
                "Assuming all multi-voltage relays are one family without confirming the exact model.",
                "Ignoring the need to review the specific relay product."
            ]
        },
        {
            id: 95,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Control Relay",
            model: "E85003-2761 Manual Override Relays",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85003-2761%20--%20Manual%20Override%20Relays.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Manual Override Relays.",
            features: [
                "Listed by Edwards as manual override relays.",
                "Appears in the power supplies and accessories relays collection."
            ],
            quizQuestions: [],
            howItWorks: "The relay is documented as a manual override relay item within the Edwards power-supplies and accessories offerings.",
            commonMistakes: [
                "Assuming all relays are automatically controlled without checking the manual override product.",
                "Ignoring the specific relay function when reviewing the product list."
            ]
        },
        {
            id: 96,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Mounting Accessory",
            model: "E85001-0351 ADA Station Relocator",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0351%20--%20ADA%20Station%20Relocator.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for the ADA Station Relocator.",
            features: [
                "Listed by Edwards as an ADA station relocator.",
                "Appears in the power supplies and accessories mounting accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The accessory is documented as a mounting-related accessory in the Edwards power-supplies and accessories offering.",
            commonMistakes: [
                "Assuming all mounting accessories are interchangeable without checking the listed product.",
                "Ignoring location and accessibility planning when reviewing the accessory list."
            ]
        },
        {
            id: 97,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Mounting Accessory",
            model: "E85001-0495 Surface Mount Boxes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0495%20--%20Surface%20Mount%20Boxes.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Surface Mount Boxes.",
            features: [
                "Listed by Edwards as surface mount boxes.",
                "Appears in the power supplies and accessories mounting accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a surface-mount accessory within the Edwards power-supplies and accessories collection.",
            commonMistakes: [
                "Assuming all mounting accessories are the same without checking the listed box type.",
                "Ignoring enclosure and installation requirements."
            ]
        },
        {
            id: 98,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Accessory",
            model: "E85001-0491 STI Series Stopper",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0491%20--%20STI%20Series%20Stopper.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for the STI Series Stopper.",
            features: [
                "Listed by Edwards as an STI Series stopper.",
                "Appears in the power supplies and accessories mounting accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as an accessory item in the Edwards power-supplies and accessories offering.",
            commonMistakes: [
                "Assuming all accessories are generic without reviewing the specific listed product.",
                "Ignoring the need to verify accessory selection in the project setup."
            ]
        },
        {
            id: 99,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Door Holder",
            model: "E85001-0421 Electromagnetic Door Holders",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0421%20--%20Electromagnetic%20Door%20Holders.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Electromagnetic Door Holders.",
            features: [
                "Listed by Edwards as electromagnetic door holders.",
                "Appears in the power supplies and accessories other equipment collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as an accessory item within the Edwards power-supplies and accessories collection.",
            commonMistakes: [
                "Assuming all door-holder products are the same without checking the listed device.",
                "Ignoring compatibility and installation planning requirements."
            ]
        },
        {
            id: 100,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Accessory Kit",
            model: "E85001-0403 Call for Assistance Kit",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0403%20--%20Call%20for%20Assistance%20Kit.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for the Call for Assistance Kit.",
            features: [
                "Listed by Edwards as a call for assistance kit.",
                "Appears in the power supplies and accessories other equipment collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as a packaged accessory item in the Edwards power-supplies and accessories collection.",
            commonMistakes: [
                "Assuming all accessory kits are interchangeable without confirming the listed product.",
                "Ignoring the need to verify the intended application."
            ]
        },
        {
            id: 101,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Accessory",
            model: "E85001-0545 Signal Master",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0545%20--%20Signal%20Master.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Signal Master.",
            features: [
                "Listed by Edwards as Signal Master.",
                "Appears in the power supplies and accessories accessories collection."
            ],
            quizQuestions: [50],
            howItWorks: "The product is documented as an accessory item in the Edwards power-supplies and accessories collection.",
            commonMistakes: [
                "Assuming all signal accessories are interchangeable without checking the listed product.",
                "Ignoring the specific accessory function described in the product listing."
            ]
        },
        {
            id: 102,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Accessory",
            model: "E85001-0441 Bell-Strobe Plate",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0441%20--%20Bell-Strobe%20Plate.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Bell-Strobe Plate.",
            features: [
                "Listed by Edwards as a bell-strobe plate.",
                "Appears in the power supplies and accessories accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as an accessory item in the Edwards notification and accessories lineup.",
            commonMistakes: [
                "Assuming all accessory plates are interchangeable without checking the listed product.",
                "Ignoring accessory-specific application context."
            ]
        },
        {
            id: 103,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Accessory",
            model: "E85001-0425 Protective Hoods, Grills, and Grids",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0425%20--%20Protective%20Hoods,%20Grills,%20and%20Grids.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for Protective Hoods, Grills, and Grids.",
            features: [
                "Listed by Edwards as protective hoods, grills, and grids.",
                "Appears in the power supplies and accessories accessories collection."
            ],
            quizQuestions: [],
            howItWorks: "The product is documented as an accessory item in the Edwards power-supplies and accessories collection.",
            commonMistakes: [
                "Assuming all protective accessories are the same without checking the listed product.",
                "Ignoring the need to verify the specific accessory type."
            ]
        },
        {
            id: 104,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Input Module",
            model: "E85001-0297 Input Modules",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0297%20--%20Input%20Modules.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for the Input Modules product.",
            features: [
                "Listed by Edwards as an input module.",
                "Part of the Intelligent Input/Output Modules collection.",
                "Used for addressable input monitoring and supervision."
            ],
            quizQuestions: [51],
            howItWorks: "These modules support supervised input monitoring in addressable fire alarm systems by reporting field contact status to the panel.",
            commonMistakes: [
                "Assuming every intelligent module is an output device.",
                "Ignoring the input-supervision role when reviewing module selection."
            ]
        },
        {
            id: 105,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Signal Module",
            model: "E85001-0275 Class A, B Signal Modules",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0275%20--%20Class%20A,%20B%20Signal%20Modules.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Class A and Class B signal modules.",
            features: [
                "Listed by Edwards as signal modules for class A and class B operation.",
                "Used in addressable module architectures for signaling applications.",
                "Part of the Intelligent Input/Output Modules family."
            ],
            quizQuestions: [52],
            howItWorks: "Signal modules provide supervised signaling output functions within Edwards addressable system architectures and support the documented system wiring strategy.",
            commonMistakes: [
                "Confusing signal modules with input monitor modules.",
                "Overlooking the class A/class B operating distinction."
            ]
        },
        {
            id: 106,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Monitor Module",
            model: "E85001-0535 Riser Monitor Modules",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0535%20--%20Riser%20Monitor%20Modules.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Riser Monitor Modules.",
            features: [
                "Listed by Edwards as riser monitor modules.",
                "Supports connection and supervision of riser-related signaling paths.",
                "Used in intelligent input/output module system design."
            ],
            quizQuestions: [53],
            howItWorks: "Riser monitor modules are applied in system layouts where riser monitoring and supervision are needed for the installed architecture.",
            commonMistakes: [
                "Assuming riser monitor modules are generic input modules.",
                "Ignoring the riser-specific application context."
            ]
        },
        {
            id: 107,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Input-Output Module",
            model: "E85001-0533 Input-Output Modules",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0533%20--%20Input-Output%20Modules.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Input-Output Modules.",
            features: [
                "Listed by Edwards as input-output modules.",
                "Supports mixed input and output functions in intelligent systems.",
                "Belongs to the Edwards Intelligent Input/Output Modules family."
            ],
            quizQuestions: [54],
            howItWorks: "Input-output modules support both monitored input and control output functions in a single addressable module footprint.",
            commonMistakes: [
                "Treating the product as a simple monitor module.",
                "Ignoring its combined input/output role."
            ]
        },
        {
            id: 108,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Input Module",
            model: "E85001-0241 Input Modules",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0241%20--%20Input%20Modules.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Input Modules.",
            features: [
                "Listed by Edwards as input modules.",
                "Used for supervised input monitoring.",
                "Part of the intelligent module literature set."
            ],
            quizQuestions: [55],
            howItWorks: "These modules monitor field input conditions and report them to the fire alarm system for alarm and supervisory processing.",
            commonMistakes: [
                "Assuming input modules and output modules are interchangeable.",
                "Forgetting that the product is part of the module supervision architecture."
            ]
        },
        {
            id: 109,
            manufacturer: "Edwards",
            family: "SIGA",
            category: "Signal Module",
            model: "E85001-0237 Signal Modules",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0237%20--%20Signal%20Modules.pdf",
            image: "",
            officialDescription: "Official Edwards Intelligent Input/Output Modules catalog listing for Signal Modules.",
            features: [
                "Listed by Edwards as signal modules.",
                "Used in addressable signaling applications.",
                "Supports Edwards intelligent module architecture."
            ],
            quizQuestions: [56],
            howItWorks: "Signal modules provide addressable signaling output support within the documented intelligent system design approach.",
            commonMistakes: [
                "Assuming signal modules are the same as monitor modules.",
                "Ignoring signal-module role in the intended notification architecture."
            ]
        },
        {
            id: 110,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Mount Speaker and Speaker-Strobe",
            model: "E85001-1051 Genesis Ceiling Mount High Candela Strobes & Speaker Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1051%20--%20Genesis%20Ceiling%20Mount%20High%20Candela%20Strobes%20and%20Speaker-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for ceiling-mount high-candela strobes and speaker-strobes.",
            features: [
                "Listed by Edwards in the Genesis notification device portfolio.",
                "Designed for ceiling-mount audible/visible notification.",
                "Supports high-candela visual output applications."
            ],
            quizQuestions: [57],
            howItWorks: "These devices provide visible and audible occupant notification from ceiling mount locations in line with the project notification plan.",
            commonMistakes: [
                "Assuming a high-candela ceiling speaker-strobe is the same as a standard wall-mounted device.",
                "Ignoring the mounting and light-output distinction."
            ]
        },
        {
            id: 111,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Mount Notification Device",
            model: "E85001-1050 Genesis Ceiling Mount Mass Notification",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1050%20--%20Genesis%20Ceiling%20Mount%20Mass%20Notification.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis notification listing for ceiling-mount mass notification appliances.",
            features: [
                "Listed by Edwards as a Genesis ceiling-mount mass notification device.",
                "Suitable for occupant alerting in large or open spaces.",
                "Belongs to the Genesis notification family."
            ],
            quizQuestions: [58],
            howItWorks: "The device provides audible and/or visual mass notification output from a ceiling-mount position for building-wide or area-specific coverage.",
            commonMistakes: [
                "Treating mass notification appliances as generic speakers.",
                "Ignoring the ceiling-mount application context."
            ]
        },
        {
            id: 112,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Wall Mount Notification Device",
            model: "E85001-1027 Genesis Wall Mount Mass Notification",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1027%20--%20Genesis%20Wall%20Mount%20Mass%20Notification.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis notification listing for wall-mount mass notification appliances.",
            features: [
                "Listed by Edwards as a Genesis wall-mount mass notification device.",
                "Designed for wall placement in occupied spaces.",
                "Supports the broader Genesis notification lineup."
            ],
            quizQuestions: [59],
            howItWorks: "Wall-mount mass notification appliances provide occupant alerting from a wall-mounted position and are selected based on coverage and system design requirements.",
            commonMistakes: [
                "Assuming wall-mounted notification appliances are interchangeable with ceiling-mounted devices.",
                "Ignoring the required coverage geometry and mounting context."
            ]
        },
        {
            id: 113,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Speaker and Speaker-Strobe",
            model: "E85001-0293 8-inch Speaker and Speaker-Strobe",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0293%20--%208-inch%20Speaker%20and%20Speaker-Strobe.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for an 8-inch speaker and speaker-strobe.",
            features: [
                "Listed by Edwards as an 8-inch speaker and speaker-strobe.",
                "Part of the Genesis speaker and speaker-strobe product range.",
                "Used for audible and visible occupant notification."
            ],
            quizQuestions: [60],
            howItWorks: "This appliance combines audible output with visual notification in a compact 8-inch form factor suited to the installation layout.",
            commonMistakes: [
                "Treating it as a speaker-only device.",
                "Ignoring the speaker-strobe combination."
            ]
        },
        {
            id: 114,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Speaker and Speaker-Strobe",
            model: "E85001-0289 8-inch Ceiling Speakers and Speaker-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0289%20--%208-inch%20Ceiling%20Speakers%20and%20Speaker-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for 8-inch ceiling speakers and speaker-strobes.",
            features: [
                "Listed by Edwards as 8-inch ceiling speakers and speaker-strobes.",
                "Designed for ceiling mounting.",
                "Supports combined audible and visible notification."
            ],
            quizQuestions: [61],
            howItWorks: "Ceiling speaker-strobes provide audible and visible notification from overhead locations where ceiling placement is preferred.",
            commonMistakes: [
                "Assuming ceiling and wall devices are interchangeable.",
                "Ignoring mounting-position differences."
            ]
        },
        {
            id: 115,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Speaker and Speaker-Strobe",
            model: "E85001-0283 4-inch Ceiling Speakers and Speaker-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0283%20--%204-inch%20Ceiling%20Speakers%20and%20Speaker-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for 4-inch ceiling speakers and speaker-strobes.",
            features: [
                "Listed by Edwards as 4-inch ceiling speakers and speaker-strobes.",
                "Used for compact ceiling-mounted notification.",
                "Supports a combination of audio and visible signaling."
            ],
            quizQuestions: [62],
            howItWorks: "These ceiling-mounted devices provide compact audible and visible occupant notification where smaller-profile appliances fit the design.",
            commonMistakes: [
                "Assuming all ceiling speaker-strobes are the same size.",
                "Ignoring the 4-inch form factor in selection."
            ]
        },
        {
            id: 116,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Outdoor Speaker and Speaker-Strobe",
            model: "E85001-0626 Genesis Outdoor Speakers and Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0626%20--%20Genesis%20Outdoor%20Speakers%20and%20Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for outdoor speakers and strobes.",
            features: [
                "Listed by Edwards as outdoor speakers and strobes.",
                "Designed for exterior notification applications.",
                "Belongs to the Genesis outdoor notification offering."
            ],
            quizQuestions: [63],
            howItWorks: "Outdoor notification appliances are selected for exterior coverage where weather-resistant installation is required.",
            commonMistakes: [
                "Using indoor-only notification products in exterior applications.",
                "Ignoring the outdoor suitability requirement."
            ]
        },
        {
            id: 117,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Loudspeaker",
            model: "E85001-0591 Multi-purpose Loudspeaker, 15 Watt",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0591%20--%20Multi-purpose%20Loudspeaker,%2015%20Watt.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for a multi-purpose 15-watt loudspeaker.",
            features: [
                "Listed by Edwards as a multi-purpose loudspeaker.",
                "15-watt rating for audio output applications.",
                "Part of the Genesis audible notification family."
            ],
            quizQuestions: [64],
            howItWorks: "The loudspeaker provides audible notification output and is selected based on wattage and coverage needs in the system design.",
            commonMistakes: [
                "Treating all loudspeakers as identical regardless of wattage.",
                "Ignoring the power-rating distinction."
            ]
        },
        {
            id: 118,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Re-entrant Speaker and Speaker-Strobe",
            model: "E85001-0317 Integrity Re-entrant Speaker and Speaker-Strobe",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0317%20--%20Integrity%20Re-entrant%20Speaker%20and%20Speaker-Strobe.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for the Integrity re-entrant speaker and speaker-strobe.",
            features: [
                "Listed by Edwards as an Integrity re-entrant speaker and speaker-strobe.",
                "Supports audible and visible notification in integrated systems.",
                "Belongs to the Genesis/notification product group."
            ],
            quizQuestions: [65],
            howItWorks: "This device provides hearing-impaired occupant notification while maintaining a re-entrant speaker profile for the intended installation arrangement.",
            commonMistakes: [
                "Assuming re-entrant and standard speaker-strobes are the same.",
                "Ignoring the re-entrant form distinction."
            ]
        },
        {
            id: 119,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Speaker and Speaker-Strobe",
            model: "E85001-0315 Integrity Speaker and Speaker-Strobe",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0315%20--%20Integrity%20Speaker%20and%20Speaker-Strobe.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for the Integrity speaker and speaker-strobe.",
            features: [
                "Listed by Edwards as an Integrity speaker and speaker-strobe.",
                "Supports combined audible and visible occupancy signaling.",
                "Appears in the Genesis/notification literature."
            ],
            quizQuestions: [66],
            howItWorks: "The speaker-strobe combines audio and visual signaling to support occupant notification and audible alerting in one appliance.",
            commonMistakes: [
                "Treating it as a speaker-only device.",
                "Ignoring the visual signaling component."
            ]
        },
        {
            id: 120,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Outdoor Horn and Horn-Strobe",
            model: "E85001-1030 Genesis Outdoor-Rated Horns, Strobes, and Horn-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1030%20--%20Genesis%20Outdoor-Rated%20Horns,%20Strobes,%20and%20Horn-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for outdoor-rated horns, strobes, and horn-strobes.",
            features: [
                "Listed by Edwards as outdoor-rated horns, strobes, and horn-strobes.",
                "Used for exterior audible/visible notification.",
                "Part of the Genesis outdoor notification product family."
            ],
            quizQuestions: [67],
            howItWorks: "Outdoor-rated appliances are selected when exterior notification coverage and environmental durability are required.",
            commonMistakes: [
                "Using indoor-only notification appliances outside.",
                "Ignoring the environmental-rating requirement."
            ]
        },
        {
            id: 121,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Outdoor Speaker and Speaker-Strobe",
            model: "E85001-1031 Genesis Outdoor-Rated Speakers and Speaker-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1031%20--%20Genesis%20Outdoor-Rated%20Speakers%20and%20Speaker-Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for outdoor-rated speakers and speaker-strobes.",
            features: [
                "Listed by Edwards as outdoor-rated speakers and speaker-strobes.",
                "Intended for exterior audible/visible notification.",
                "Fits the Genesis outdoor product range."
            ],
            quizQuestions: [68],
            howItWorks: "These devices supply audible and visible notification from outdoor locations while meeting the system's environmental requirements.",
            commonMistakes: [
                "Assuming indoor speakers work outdoors without checking suitability.",
                "Confusing outdoor speaker-strobes with indoor units."
            ]
        },
        {
            id: 122,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Horn-Siren Combination",
            model: "E85001-0391 Horn-Siren Combination",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0391%20--%20Horn-Siren%20Combination.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for the horn-siren combination appliance.",
            features: [
                "Listed by Edwards as a horn-siren combination.",
                "Used for audible notification with broader siren functionality.",
                "Appears in the Edwards Genesis notification set."
            ],
            quizQuestions: [69],
            howItWorks: "The appliance provides an audible output suited to applications requiring a horn and siren-style signaling function.",
            commonMistakes: [
                "Treating it as a standard horn-only device.",
                "Ignoring the siren-combination function."
            ]
        },
        {
            id: 123,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Bell",
            model: "E85001-0399 Hazardous Location Bells",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0399%20--%20Hazardous%20Location%20Bells.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for hazardous-location bells.",
            features: [
                "Listed by Edwards as hazardous-location bells.",
                "Used where special environmental conditions require a bell-type appliance.",
                "Part of the hazardous-location notification product set."
            ],
            quizQuestions: [70],
            howItWorks: "Bell-type appliances are selected for audible signaling applications that specifically require the bell form factor and environment suitability.",
            commonMistakes: [
                "Assuming all hazardous-location notification products are strobes.",
                "Ignoring the bell-specific category."
            ]
        },
        {
            id: 124,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Horn",
            model: "E85001-0397 Hazardous Location Horns",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0397%20--%20Hazardous%20Location%20Horns.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for hazardous-location horns.",
            features: [
                "Listed by Edwards as hazardous-location horns.",
                "Used when horn-type audible signaling is required in hazardous areas.",
                "Belongs to the Genesis hazardous-location notification group."
            ],
            quizQuestions: [71],
            howItWorks: "Hazardous-location horns provide audible signaling in environments where special-rated appliances are required.",
            commonMistakes: [
                "Assuming hazardous-location horns are interchangeable with standard horns.",
                "Ignoring the environmental-rating and spacing requirements."
            ]
        },
        {
            id: 125,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Multiple Tone Signal",
            model: "E85001-0387 Hazardous Location Multiple Tone Signal",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0387%20--%20Hazardous%20Location%20Multiple%20Tone%20Signal.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for hazardous-location multiple tone signal appliances.",
            features: [
                "Listed by Edwards as a hazardous-location multiple tone signal.",
                "Used where multi-tone audible signaling is required in hazardous areas.",
                "Belongs to the Genesis notification hardware set."
            ],
            quizQuestions: [72],
            howItWorks: "The appliance provides a multiple-tone audible output suited to hazardous-location applications and the notification design intent.",
            commonMistakes: [
                "Assuming all hazardous-location audible appliances are simple horns.",
                "Ignoring the tone-signaling distinction."
            ]
        },
        {
            id: 126,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Horn and Siren",
            model: "E85001-0385 Hazardous Location Horns and Sirens",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0385%20--%20Hazardous%20Location%20Horns%20and%20Sirens.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for hazardous-location horns and sirens.",
            features: [
                "Listed by Edwards as hazardous-location horns and sirens.",
                "Used where a horn and siren-type alert is required.",
                "Part of the Genesis hazardous-location notification family."
            ],
            quizQuestions: [73],
            howItWorks: "These appliances provide audible notification with a horn/siren functionality suited to hazardous-location applications.",
            commonMistakes: [
                "Assuming all hazardous-location appliances are simple bells.",
                "Ignoring the horn-and-siren function."
            ]
        },
        {
            id: 127,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Outdoor Horn and Horn-Strobe",
            model: "E85001-0628 Genesis Outdoor Horns and Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0628%20--%20Genesis%20Outdoor%20Horns%20and%20Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for outdoor horns and strobes.",
            features: [
                "Listed by Edwards as outdoor horns and strobes.",
                "Used for weather-rated exterior notification.",
                "Supports outdoor audible/visual signaling."
            ],
            quizQuestions: [74],
            howItWorks: "Outdoor horns and strobes are applied where audible and visual signaling must be delivered from exterior locations.",
            commonMistakes: [
                "Using indoor horns and strobes outside.",
                "Ignoring the outdoor environmental requirement."
            ]
        },
        {
            id: 128,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Mounting Accessory",
            model: "E85001-0309 Weatherproof Mounting Boxes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0309%20--%20Weatherproof%20Mounting%20Boxes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for weatherproof mounting boxes.",
            features: [
                "Listed by Edwards as weatherproof mounting boxes.",
                "Used to support exterior notification appliance installation.",
                "Belongs to the Genesis notification accessory range."
            ],
            quizQuestions: [75],
            howItWorks: "These boxes provide the required enclosure and mounting support for outdoor notification appliances in exposed locations.",
            commonMistakes: [
                "Assuming standard boxes are suitable for exterior installation.",
                "Ignoring weatherproof mounting requirements."
            ]
        },
        {
            id: 129,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Strobe",
            model: "E85001-0305 Harsh Environment Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0305%20--%20Harsh%20Environment%20Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for harsh-environment strobes.",
            features: [
                "Listed by Edwards as harsh-environment strobes.",
                "Used where environmental durability is part of the product requirement.",
                "Part of the Genesis notification appliance line."
            ],
            quizQuestions: [76],
            howItWorks: "Harsh-environment strobes are selected when visual notification must operate in demanding conditions.",
            commonMistakes: [
                "Assuming all strobes are suitable for harsh environments.",
                "Ignoring environmental-rating differences."
            ]
        },
        {
            id: 130,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Strobe",
            model: "E85001-0624 Hazardous Location Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0624%20--%20Hazardous%20Location%20Strobes.pdf",
            image: "",
            officialDescription: "Official Edwards Genesis listing for hazardous-location strobes.",
            features: [
                "Listed by Edwards as hazardous-location strobes.",
                "Used for visible notification in hazardous environments.",
                "Belongs to the Genesis notification product group."
            ],
            quizQuestions: [77],
            howItWorks: "Hazardous-location strobes provide visible signaling in applications that require special-rated notification appliances.",
            commonMistakes: [
                "Assuming standard strobes are acceptable in hazardous areas.",
                "Ignoring the hazardous-location requirement."
            ]
        },
        {
            id: 131,
            manufacturer: "Edwards",
            family: "Power Supplies and Accessories",
            category: "Diagnostic Tool",
            model: "E85001-0655 Signature Series Diagnostic Tool",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-0655%20--%20Signature%20Series%20Diagnostic%20Tool.pdf",
            image: "",
            officialDescription: "Official Edwards Power Supplies and Accessories catalog listing for the Signature Series Diagnostic Tool.",
            features: [
                "Listed by Edwards as a diagnostic tool.",
                "Used for troubleshooting and verification activities.",
                "Belongs to the Edwards power and accessory literature set."
            ],
            quizQuestions: [78],
            howItWorks: "This tool supports field verification and troubleshooting workflows for the associated Edwards system components.",
            commonMistakes: [
                "Treating it as a primary panel or power supply.",
                "Ignoring its diagnostic troubleshooting role."
            ]
        },
        {
            id: 132,
            manufacturer: "Edwards",
            family: "Signature Series",
            category: "Intelligent Duct Smoke Detector",
            model: "SIGA-DDOS Intelligent Duct Smoke Detector",
            verification: "VERIFIED",
            source: "SIGA-DDOS Intelligent Duct Smoke Detector Installation Sheet, Edwards / Walter Kidde Portable Equipment, LLC, P/N 3102774-EN, Rev 002, REB 28AUG25",
            sourceURL: "",
            image: "",
            officialDescription: "Intelligent duct smoke detector used to detect smoke in a building's HVAC system. Requires one address on the Signature Signaling Line Circuit (SLC) and uses photoelectric smoke detection.",
            features: [
                "Signature SLC device — requires one SLC address.",
                "Photoelectric smoke detection.",
                "Built-in auxiliary relay (1, Zone/Programmable operation, Form C contacts).",
                "Auxiliary relay terminals: RELAY_NC, RELAY_C, RELAY_NO.",
                "Sampling tubes are ordered separately."
            ],
            quizQuestions: [],
            howItWorks: "The SIGA-DDOS monitors a duct sampling airflow photoelectrically and reports its state to the panel over the Signature SLC. Its onboard auxiliary relay (Form C) can provide a relay/control function for the applicable duct-detector application without requiring a separate external relay for that same function.",
            commonMistakes: [
                "Automatically adding a separate external relay (such as a SIGA-CT1, CT2, or CR) for a function the SIGA-DDOS's built-in auxiliary relay already provides.",
                "Assuming the SIGA-DDOS eliminates every external control/relay module — other applications may still legitimately need a separate device.",
                "Assuming every duct detector includes a built-in relay — this is specific to the SIGA-DDOS."
            ]
        }
    ]
};

// Literature identifiers are source references, never product part numbers.
productLibrary.products.forEach(product => {
    product.quizQuestions = (product.quizQuestions || []).filter(id => id < 44);

    const match = String(product.model || "").match(/^(E8500[0-9]{1,2}-\d{4})\s+(.+)$/i);
    if (!match) {
        product.partNumber = product.model || "";
        return;
    }

    product.documentReference = match[1];
    product.partNumber = "";
    product.model = match[2];
});
