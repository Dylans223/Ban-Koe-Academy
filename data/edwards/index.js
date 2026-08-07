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
            image: "https://www.fireprojects.co.in/assets/uploads/media-uploader/large-edwards-fsb-pc4-lw1760174804.JPG",
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
            image: "https://dyn.mktgcdn.com/p/R68L7TwCC-EEkyFZ1EeIfiKYsDSolMSSzFUG3xn6Eo8/width=640,height=966",
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
            image: "https://firealarm.com/wp-content/uploads/2021/01/Edwards-One-Gang-Module.jpg",
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
            image: "https://www.kidde-esfire.com/Content/Images/Genesis_LED_Mass_Notification_Series.jpg",
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
            image: "https://priority.edwardsfiresafety.com/Content/Images/LandingPages/genesis_group.png",
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
            id: 15,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Low Frequency Notification Appliance",
            model: "Genesis LED G4LF Series Low Frequency",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1052%20--%20Edwards%20Genesis%20LED%20G4LF%20Series%20Low%20Frequency%20Datasheet.pdf",
            image: "https://firealarm.com/wp-content/uploads/2018/07/Edwards-Signaling-G4FWF-H.jpg",
            officialDescription: "Genesis notification appliances provide a broad range of field-configurable options, including low frequency signaling product variants for application-specific notification requirements.",
            features: [
                "Low-frequency Genesis LED signaling category.",
                "Published as G4LF series in Edwards catalog sheets."
            ],
            quizQuestions: [165, 180, 115],
            howItWorks: "Low-frequency notification appliances are applied where low-frequency signaling is required by the design basis. Devices are activated by panel output logic and configured during commissioning to match the protected use case.",
            commonMistakes: [
                "Assuming standard frequency notification models are interchangeable with low-frequency models.",
                "Applying low-frequency devices without confirming occupancy-specific design criteria."
            ]
        },
        {
            id: 16,
            manufacturer: "Edwards",
            family: "Genesis",
            category: "Ceiling Mount Speaker and Speaker-Strobe",
            model: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes",
            verification: "VERIFIED",
            sourceURL: "https://myeddie.edwardsfiresafety.com/PublicMedia/Catalog%20Sheets/E85001-1025%20--%20Genesis%20LED%20GCS%20Series%20Ceiling%20Mount%20Speakers%20and%20Speaker-Strobes.pdf",
            image: "https://firealarm.com/wp-content/uploads/2023/01/GCSWF.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/d/s/dscn1141.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/i/m/img_0528_2_2.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/i/m/img_0528_2_1.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/d/s/dscn1026_1.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/d/s/dscn1671_2.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/d/s/dscn0852_2.png",
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
            image: "https://images.carriercms.com/image/upload/v1650658069/edwards/Lifelines/Images/Intelligent-Devices/SIGA-COD.png",
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
            image: "https://images.carriercms.com/image/upload/v1650657933/edwards/Lifelines/Images/Input-Output-Modules/One-gang-IO-Module.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/e/s/est_siga-cc2.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/i/m/img_4007_edited.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/d/s/dscn0530.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/i/m/img_3994_edited.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/d/s/dscn1134.png",
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
            image: "https://images.carriercms.com/image/upload/v1650657933/edwards/Lifelines/Images/Input-Output-Modules/Two-gang-IO-Module.jpg",
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
            image: "https://firealarm.com/wp-content/uploads/2021/01/Edwards-One-Gang-Module.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/e/d/edw_siga-crr.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/d/s/dscn0862.png",
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
            image: "https://images.carriercms.com/image/upload/v1650657933/edwards/Lifelines/Images/Input-Output-Modules/IO-Modules.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/i/m/img_4015_edited_1.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/d/s/dscn0897.png",
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
            image: "https://images.carriercms.com/image/upload/v1650657933/edwards/Lifelines/Images/Input-Output-Modules/278A-REL.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/d/s/dscn0883_1.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/d/s/dscn0881.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/e/s/est_siga-ib.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/e/s/est_siga-ib4.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/e/d/edwards_est_siga-ab4g-lf_2_edited.jpg",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/d/s/dscn0887.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/f32a31ae2a5f6b766abb5a113edc0501/d/s/dscn0854.png",
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
            image: "https://www.buyfirealarmparts.com/shop/pub/media/catalog/product/cache/c0bb0e9415247cb97707075204a89237/s/i/siga-278_edited.jpg",
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
        }
    ]
};
