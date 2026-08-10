// ===============================================
// Ban-Koe Academy
// Real-World Scenarios Training Module
// ===============================================

(function () {
    const productLibraryData = typeof productLibrary !== "undefined" ? productLibrary : { products: [] };

    function findProductBy(predicate) {
        return productLibraryData.products.find(predicate) || null;
    }

    const verifiedReferences = {
        est4: findProductBy((product) => product.family === "EST4" || product.model === "EST4"),
        monitorModule: findProductBy((product) => /SIGA-CC1 Single Input Monitor Module/i.test(product.model || "")),
        controlModule: findProductBy((product) => /SIGA-CT1 Single Output Control Module/i.test(product.model || "")),
        relayModule: findProductBy((product) => /SIGA-CR Control Relay Module/i.test(product.model || "")),
        notificationSpeaker: findProductBy((product) => /Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes/i.test(product.model || "")),
        notificationWall: findProductBy((product) => /Genesis LED G4 Series Wall Mount Notification Devices/i.test(product.model || "")),
        smokeDetector: findProductBy((product) => /SIGA-OSD Signature Optica Smoke Detector/i.test(product.model || "")),
        pullStation: findProductBy((product) => /SIGA-278 Double Action Intelligent Pull Station/i.test(product.model || ""))
    };

    const scoreModel = {
        understanding: 20,
        informationGathering: 20,
        productFunction: 20,
        systemReasoning: 20,
        professionalResponse: 20
    };

    const scenarioDefinitions = [
        {
            id: "hvac-shutdown-request",
            title: "HVAC Shutdown Request",
            shortTitle: "HVAC Shutdown",
            difficulty: "Intermediate",
            customerRole: "Customer",
            customerMessage: "We have a fire alarm project where the HVAC units need to shut down when the appropriate fire alarm condition occurs. What do we need?",
            skills: ["System Thinking", "Information Gathering", "Customer Communication"],
            whatYouKnow: {
                prompt: "What is the customer actually asking for?",
                type: "single",
                options: [
                    { id: "detect-smoke", label: "A device that detects smoke", status: "needs-clarification" },
                    { id: "control-signal", label: "A way for the fire alarm system to provide a control signal to the HVAC system", status: "best-answer" },
                    { id: "more-notification", label: "More notification appliances", status: "needs-clarification" },
                    { id: "larger-battery", label: "A larger battery", status: "needs-clarification" }
                ],
                correct: "control-signal",
                explanation: "The request is about an interface between the fire alarm system and the HVAC system. The exact interface depends on the system design, equipment, HVAC controls, and project requirements."
            },
            missingInformation: {
                prompt: "What information do you need before selecting a specific solution?",
                type: "multi",
                options: [
                    { id: "panel-system", label: "Fire alarm control panel/system", importance: "Determines what compatible control/interface options are even available." },
                    { id: "hvac-controls", label: "HVAC equipment/control information", importance: "You need to know what the HVAC side expects from the fire alarm interface." },
                    { id: "shutdown-behavior", label: "Required shutdown behavior", importance: "The intended action matters because the sequence and trigger condition must be understood." },
                    { id: "drawings-specs", label: "Existing drawings/specifications", importance: "The project documents often define the required interface or sequence." },
                    { id: "interface-type", label: "Required interface type", importance: "You should confirm whether the project needs a monitored input, a control output, a relay, or another specific function." },
                    { id: "hvac-count", label: "Number of HVAC units", importance: "Quantity affects BOM scope and interface count." },
                    { id: "weather", label: "Current weather", importance: "This does not control interface selection." },
                    { id: "favorite-brand", label: "Customer's favorite manufacturer", importance: "Preference is not a substitute for functional compatibility." }
                ],
                required: ["panel-system", "hvac-controls", "shutdown-behavior", "drawings-specs", "interface-type", "hvac-count"]
            },
            investigate: {
                prompt: "What type of function are you investigating?",
                type: "single",
                options: [
                    { id: "monitor-input", label: "Monitor/Input", status: "also-reasonable" },
                    { id: "control-output", label: "Control/Output", status: "best-answer" },
                    { id: "notification", label: "Notification", status: "needs-clarification" },
                    { id: "detection", label: "Detection", status: "needs-clarification" }
                ],
                correct: "control-output",
                explanation: "MONITOR = What's happening? CONTROL = Make something happen. HVAC shutdown is a control/output investigation."
            },
            productFunction: {
                prompt: "What should you do before promising the customer a specific part number?",
                type: "single",
                options: [
                    { id: "cheapest-relay", label: "Pick the cheapest relay", status: "needs-clarification" },
                    { id: "random-module", label: "Choose a random Edwards module", status: "needs-clarification" },
                    { id: "verify-interface", label: "Verify the required interface against the system design and manufacturer documentation", status: "best-answer" },
                    { id: "any-relay", label: "Tell the customer any relay will work", status: "needs-clarification" }
                ],
                correct: "verify-interface",
                explanation: "Never assume that any relay or module is compatible with every fire alarm system or HVAC interface."
            },
            responseBuilder: {
                intro: "Build the response you would send back before quoting materials.",
                options: [
                    { id: "confirm-system", label: "Before I select a specific product, I'd first confirm the fire alarm panel/system.", required: true },
                    { id: "confirm-hvac", label: "I'd also confirm the HVAC control requirements and intended shutdown behavior.", required: true },
                    { id: "review-docs", label: "I'd review the drawings/specifications to determine the required interface.", required: true },
                    { id: "verify-product", label: "Then I'd verify a compatible control/relay interface against manufacturer documentation.", required: true },
                    { id: "confirm-quantity", label: "After that, I'd confirm quantity for the BOM and quote scope.", required: true },
                    { id: "confirm-wiring", label: "I'd confirm any required wiring/interface expectations with the project documents.", required: true },
                    { id: "quote-random", label: "I can quote the first relay found in inventory without verification.", required: false, incorrect: true }
                ]
            },
            reviewPrompt: "How confident are you in this response?"
        },
        {
            id: "duct-detector-problem",
            title: "Duct Detector Problem",
            shortTitle: "Duct Detector",
            difficulty: "Intermediate",
            customerRole: "Customer",
            customerMessage: "The duct smoke detector is on the project, but we're not sure how it communicates with the fire alarm panel.",
            skills: ["Troubleshooting", "Wiring Awareness", "System Compatibility"],
            whatYouKnow: {
                prompt: "What information should you verify first?",
                type: "multi",
                options: [
                    { id: "fa-system", label: "Fire alarm system", importance: "The fire alarm platform affects compatible initiating and interface options." },
                    { id: "detector-model", label: "Detector type/model", importance: "You need to know what kind of device or contacts are actually present." },
                    { id: "monitor-function", label: "Required monitoring function", importance: "You are trying to understand how the detector reports its state." },
                    { id: "existing-module", label: "Existing module/interface", importance: "A module may already be shown or specified on the project documents." },
                    { id: "drawings", label: "Drawings", importance: "The plans or riser often show how the device is intended to connect." },
                    { id: "manufacturer-docs", label: "Manufacturer documentation", importance: "You need documented compatibility and functional details." },
                    { id: "employee-count", label: "Number of employees in the building", importance: "This does not explain how the detector communicates to the panel." },
                    { id: "paint-color", label: "Paint color of the duct", importance: "This does not affect communication method." }
                ],
                required: ["fa-system", "detector-model", "monitor-function", "existing-module", "drawings", "manufacturer-docs"]
            },
            missingInformation: {
                prompt: "What key idea is still missing if the customer only says the detector is on the project?",
                type: "single",
                options: [
                    { id: "monitoring-path", label: "How the detector's state is monitored and reported to the system", status: "best-answer" },
                    { id: "battery-size", label: "Whether the batteries are large enough", status: "needs-clarification" },
                    { id: "speaker-tap", label: "Which speaker watt tap is needed", status: "needs-clarification" },
                    { id: "cabinet-color", label: "What color the panel enclosure should be", status: "needs-clarification" }
                ],
                correct: "monitoring-path",
                explanation: "The core question is how the duct detector communicates or is supervised by the fire alarm system."
            },
            investigate: {
                prompt: "What general function are you investigating?",
                type: "single",
                options: [
                    { id: "monitor-input", label: "Monitoring/Input", status: "best-answer" },
                    { id: "control-output", label: "Control/Output", status: "also-reasonable" },
                    { id: "notification", label: "Notification", status: "needs-clarification" },
                    { id: "speaker-audio", label: "Speaker audio", status: "needs-clarification" }
                ],
                correct: "monitor-input",
                explanation: "A duct detector often needs a monitored path so the system can supervise its alarm or trouble condition."
            },
            productFunction: {
                prompt: "What should you NOT do?",
                type: "single",
                options: [
                    { id: "assume-module", label: "Assume a specific module is compatible without verification", status: "best-answer" },
                    { id: "review-docs", label: "Review the project documentation", status: "also-reasonable" },
                    { id: "check-platform", label: "Confirm the fire alarm platform", status: "also-reasonable" },
                    { id: "verify-function", label: "Verify the intended monitoring function", status: "also-reasonable" }
                ],
                correct: "assume-module",
                explanation: "Do not assume a specific monitor/input interface is compatible without checking the system design and manufacturer documentation."
            },
            responseBuilder: {
                intro: "Build the customer response you would send before naming a specific module.",
                options: [
                    { id: "confirm-system", label: "I'd first confirm the fire alarm system and the duct detector model or contact arrangement.", required: true },
                    { id: "review-drawings", label: "I'd review the drawings and manufacturer documentation to see how the detector is intended to be monitored.", required: true },
                    { id: "check-existing", label: "I'd verify whether a module/interface is already shown or specified.", required: true },
                    { id: "verify-compatible", label: "Then I'd verify a compatible monitor/input solution before adding it to the BOM.", required: true },
                    { id: "guess-module", label: "We can assume a generic module will work and quote it immediately.", required: false, incorrect: true }
                ]
            },
            reviewPrompt: "How confident are you in this troubleshooting response?"
        },
        {
            id: "customer-needs-notification",
            title: "Customer Needs Notification",
            shortTitle: "Notification Request",
            difficulty: "Intermediate",
            customerRole: "Customer",
            customerMessage: "We're adding notification devices to a school gymnasium. What should we use?",
            skills: ["Application Thinking", "Product Recognition", "Clarifying Questions"],
            whatYouKnow: {
                prompt: "What should you ask before selecting a device?",
                type: "multi",
                options: [
                    { id: "room-application", label: "Room/application", importance: "The physical application affects the type of device you investigate." },
                    { id: "ceiling-height", label: "Ceiling height", importance: "Mounting conditions can affect the device family or configuration to investigate." },
                    { id: "existing-system", label: "Existing system", importance: "The platform and device family must be compatible with the system." },
                    { id: "notification-type", label: "Required notification type", importance: "You need to understand whether the application requires voice, tone, visible, or combined signaling." },
                    { id: "notification-circuit", label: "Existing notification circuit", importance: "Existing circuit architecture can affect compatibility and approach." },
                    { id: "drawings-specs", label: "Project drawings/specifications", importance: "The documents define the intended application and constraints." },
                    { id: "coverage", label: "Coverage requirements", importance: "You need to know what the design is trying to accomplish in the space." },
                    { id: "compatibility", label: "Manufacturer/system compatibility", importance: "Product family compatibility must be verified." }
                ],
                required: ["room-application", "ceiling-height", "existing-system", "notification-type", "notification-circuit", "drawings-specs", "coverage", "compatibility"]
            },
            missingInformation: {
                prompt: "What is the most important reminder before naming the exact device?",
                type: "single",
                options: [
                    { id: "more-info", label: "The answer requires more project information before device selection", status: "best-answer" },
                    { id: "always-wall", label: "Gyms always use one wall device type", status: "needs-clarification" },
                    { id: "always-pull", label: "A pull station solves the problem", status: "needs-clarification" },
                    { id: "any-speaker", label: "Any speaker is acceptable if it fits", status: "needs-clarification" }
                ],
                correct: "more-info",
                explanation: "Notification selection depends on the system design, required notification method, acoustics, mounting conditions, and project specifications."
            },
            investigate: {
                prompt: "For a large gymnasium, which type of notification appliance would you investigate first?",
                type: "single",
                options: [
                    { id: "surface-speaker", label: "Surface-mounted speaker", status: "also-reasonable" },
                    { id: "ceiling-speaker", label: getVerifiedNotificationLabel(), status: "best-answer" },
                    { id: "duct-detector", label: "Duct detector", status: "needs-clarification" },
                    { id: "monitor-module", label: "Monitor module", status: "needs-clarification" },
                    { id: "pull-station", label: "Pull station", status: "needs-clarification" }
                ],
                correct: "ceiling-speaker",
                alsoReasonable: ["surface-speaker"],
                explanation: `${getVerifiedNotificationExplanation()} Selection still depends on the design and specifications.`
            },
            productFunction: {
                prompt: "What product/function lesson matters most here?",
                type: "single",
                options: [
                    { id: "compatibility-first", label: "Investigate the notification family that fits the room and verify compatibility", status: "best-answer" },
                    { id: "pick-any-genesis", label: "Pick any Genesis device without reviewing the space", status: "needs-clarification" },
                    { id: "skip-docs", label: "Skip drawings because the room name is enough", status: "needs-clarification" },
                    { id: "treat-as-duct", label: "Treat it as a duct detection question", status: "needs-clarification" }
                ],
                correct: "compatibility-first",
                explanation: "Start with the application, then verify the compatible notification family and mounting approach against the project documents."
            },
            responseBuilder: {
                intro: "Build the response you would send before recommending a final notification product.",
                options: [
                    { id: "ask-room", label: "I'd confirm the room conditions, mounting constraints, and required notification type.", required: true },
                    { id: "review-system", label: "I'd confirm the existing system and compatible notification family.", required: true },
                    { id: "review-docs", label: "I'd review drawings/specifications and coverage expectations for the gym.", required: true },
                    { id: "investigate-speaker", label: `Then I'd investigate ${getVerifiedNotificationShort()} or another compatible notification appliance that matches the application.`, required: true },
                    { id: "promise-device", label: "I can promise a single device now without checking the documents.", required: false, incorrect: true }
                ]
            },
            reviewPrompt: "How confident are you in this application-based response?"
        },
        {
            id: "missing-information-quote",
            title: "Something Doesn't Look Right",
            shortTitle: "Missing Quote Info",
            difficulty: "Advanced",
            customerRole: "Customer",
            customerMessage: "Please quote the fire alarm devices for our new building.",
            skills: ["Estimating Judgment", "BOM Thinking", "Professional Communication"],
            whatYouKnow: {
                prompt: "Can you confidently produce a complete BOM from this information?",
                type: "single",
                options: [
                    { id: "yes-complete", label: "Yes, the request is complete enough to quote accurately", status: "needs-clarification" },
                    { id: "no-not-enough", label: "No, there is not enough information for a complete and accurate BOM", status: "best-answer" }
                ],
                correct: "no-not-enough",
                explanation: "Sales Support should recognize when there is not enough information to build an accurate BOM or quote."
            },
            missingInformation: {
                prompt: "What should you request before building the BOM?",
                type: "multi",
                options: [
                    { id: "floor-plans", label: "Floor plans", importance: "You need layout information to determine scope and quantities." },
                    { id: "device-quantities", label: "Device quantities or takeoff basis", importance: "BOM accuracy depends on quantity information." },
                    { id: "panel-requirements", label: "Panel/system requirements", importance: "The system platform affects compatible devices and interfaces." },
                    { id: "notification-requirements", label: "Notification requirements", importance: "You need to know what type of signaling is required." },
                    { id: "duct-detectors", label: "Duct detector requirements", importance: "Related detection scope must be understood." },
                    { id: "hvac-interfaces", label: "HVAC interfaces", importance: "Building system interfaces affect materials and scope." },
                    { id: "door-holders", label: "Door holder release requirements", importance: "These add interface scope." },
                    { id: "elevator", label: "Elevator interfaces", importance: "Elevator-related scope is often easy to miss if not clarified." },
                    { id: "power", label: "Battery/power requirements", importance: "Power scope may affect BOM completeness." },
                    { id: "specifications", label: "Specifications", importance: "Specifications define design and product expectations." },
                    { id: "existing-system", label: "Existing system information", importance: "If the project ties into existing equipment, compatibility matters." }
                ],
                required: ["floor-plans", "device-quantities", "panel-requirements", "notification-requirements", "duct-detectors", "hvac-interfaces", "door-holders", "elevator", "power", "specifications", "existing-system"]
            },
            investigate: {
                prompt: "What should you investigate before calling the BOM quote-ready?",
                type: "multi",
                options: [
                    { id: "drawings-scope", label: "Drawings/specifications and actual project scope", importance: "The project scope must be understood before pricing or quoting materials." },
                    { id: "required-interfaces", label: "Required interfaces and related system functions", importance: "These often drive missing BOM scope." },
                    { id: "compatibility", label: "Product family compatibility", importance: "Device and system compatibility must be verified." },
                    { id: "revisions", label: "Current revisions and assumptions", importance: "Quote scope can change with project revisions." },
                    { id: "ship-color", label: "Preferred truck color", importance: "This does not affect BOM readiness." }
                ],
                required: ["drawings-scope", "required-interfaces", "compatibility", "revisions"]
            },
            productFunction: {
                prompt: "What is the strongest professional move in this situation?",
                type: "single",
                options: [
                    { id: "request-clarification", label: "Request the missing project information before building the final BOM", status: "best-answer" },
                    { id: "guess-devices", label: "Guess the common devices and hope the quote is close", status: "needs-clarification" },
                    { id: "skip-interfaces", label: "Ignore interface questions until after the quote is sent", status: "needs-clarification" },
                    { id: "quote-anyway", label: "Quote immediately because Edwards was mentioned", status: "needs-clarification" }
                ],
                correct: "request-clarification",
                explanation: "Before I build the BOM, I'd need the project drawings/specifications and clarification on the system requirements and required interfaces."
            },
            responseBuilder: {
                intro: "Build the professional response to the quote request.",
                options: [
                    { id: "acknowledge-request", label: "I'd be glad to help, but I need a clearer project basis before building the BOM.", required: true },
                    { id: "request-docs", label: "Please send the project drawings/specifications and any available system requirements.", required: true },
                    { id: "clarify-interfaces", label: "I also need clarification on notification scope and any required interfaces such as duct detectors, HVAC shutdown, door holders, or elevator functions.", required: true },
                    { id: "confirm-quantities", label: "Once the missing information is verified, I can build a cleaner BOM and quote response.", required: true },
                    { id: "quote-now", label: "I can provide a complete BOM now without further clarification.", required: false, incorrect: true }
                ]
            },
            reviewPrompt: "How confident are you in pushing back for more information?"
        },
        {
            id: "full-project-request",
            title: "Full Project Request",
            shortTitle: "Full Project",
            difficulty: "Advanced",
            customerRole: "Contractor",
            customerMessage: "A contractor sends you a project request for a three-story commercial office building and wants a material quote.",
            skills: ["Capstone Reasoning", "BOM/Estimating", "Customer Communication"],
            scenarioMetadata: [
                "Edwards system requested",
                "Three floors",
                "Smoke detection required",
                "Manual pull stations",
                "Horn/strobes",
                "Two duct smoke detectors",
                "HVAC shutdown",
                "Door holder release",
                "Elevator interface",
                "Exterior notification",
                "Customer wants a material quote",
                "Drawings are available"
            ],
            whatYouKnow: {
                prompt: "What should you review first?",
                type: "multi",
                options: [
                    { id: "drawings", label: "Drawings", importance: "They define scope, quantity clues, and interface needs." },
                    { id: "specifications", label: "Specifications", importance: "They define the required system expectations and product direction." },
                    { id: "system-requirements", label: "System requirements", importance: "The system platform and required functions drive compatibility." },
                    { id: "existing-system", label: "Existing system information if applicable", importance: "If the project touches existing equipment, you need to understand it." },
                    { id: "invoice-format", label: "Invoice formatting", importance: "This can wait until the technical scope is understood." }
                ],
                required: ["drawings", "specifications", "system-requirements", "existing-system"]
            },
            missingInformation: {
                prompt: "What information still needs clarification?",
                type: "multi",
                options: [
                    { id: "quantity-requirements", label: "Quantity requirements", importance: "A project request does not automatically equal a verified takeoff." },
                    { id: "notification-type", label: "Notification type", importance: "Different signaling approaches can change the products involved." },
                    { id: "hvac-interface", label: "HVAC interface requirements", importance: "The building interface details matter." },
                    { id: "door-holder", label: "Door holder interface", importance: "Door holder release scope can add interfaces and accessories." },
                    { id: "elevator-interface", label: "Elevator interface", importance: "Elevator-related scope must be clarified instead of assumed." },
                    { id: "exterior-notification", label: "Exterior notification requirements", importance: "Exterior devices often require specific review." },
                    { id: "battery-power", label: "Battery/power requirements", importance: "Power scope should not be assumed complete." },
                    { id: "compatibility", label: "Product compatibility", importance: "Product family compatibility must be checked." },
                    { id: "special-requirements", label: "Special project requirements", importance: "Special conditions can change the BOM." }
                ],
                required: ["quantity-requirements", "notification-type", "hvac-interface", "door-holder", "elevator-interface", "exterior-notification", "battery-power", "compatibility", "special-requirements"]
            },
            investigate: {
                prompt: "Which high-level system components must you identify for this project?",
                type: "multi",
                options: [
                    { id: "control-panel", label: "Control panel", importance: "The central system platform must be identified." },
                    { id: "initiating", label: "Initiating devices", importance: "Smoke detectors and pull stations are part of the scope." },
                    { id: "notification", label: "Notification", importance: "Horn/strobe or other notification scope must be captured." },
                    { id: "duct-detection", label: "Duct detection", importance: "The request includes duct smoke detectors." },
                    { id: "monitoring", label: "Monitoring", importance: "Some external devices may require monitored inputs." },
                    { id: "control-interfaces", label: "Control interfaces", importance: "HVAC, door holders, and elevator functions imply interface scope." },
                    { id: "power-batteries", label: "Power/batteries", importance: "Power scope may need to be accounted for." },
                    { id: "accessories", label: "Accessories", importance: "Accessories and related items may affect BOM completeness." }
                ],
                required: ["control-panel", "initiating", "notification", "duct-detection", "monitoring", "control-interfaces", "power-batteries", "accessories"]
            },
            productFunction: {
                prompt: "Are you ready to quote immediately after the customer request?",
                type: "single",
                options: [
                    { id: "not-yet", label: "Not until the project requirements, interfaces, and compatibility are verified", status: "best-answer" },
                    { id: "quote-now", label: "Yes, because the building type is already known", status: "needs-clarification" },
                    { id: "skip-review", label: "Yes, if we assume the common system components", status: "needs-clarification" },
                    { id: "only-panel", label: "Yes, as long as the control panel is identified", status: "needs-clarification" }
                ],
                correct: "not-yet",
                explanation: "Never rush from a customer request directly to a quote. Good estimating requires verification."
            },
            responseBuilder: {
                intro: "Build the high-level Sales Support response and BOM approach.",
                options: [
                    { id: "review-first", label: "I'd review the drawings, specifications, and system requirements first.", required: true },
                    { id: "identify-scope", label: "I'd identify the major system categories and related interfaces before finalizing the BOM.", required: true },
                    { id: "clarify-open-items", label: "I'd clarify notification type, HVAC, door holder, elevator, exterior notification, and power requirements.", required: true },
                    { id: "verify-products", label: "Then I'd verify compatible products or use functional placeholders until the exact product is confirmed.", required: true },
                    { id: "build-bom", label: "After that, I'd build a high-level BOM and review it before quote release.", required: true },
                    { id: "rush-quote", label: "I can skip verification and rush the quote because drawings are available.", required: false, incorrect: true }
                ]
            },
            requiresBomBuilder: true,
            reviewPrompt: "How confident are you that the project is quote-ready right now?"
        }
    ];

    const challengeBomCatalog = [
        { id: "est4-platform", functionalGroup: "control", category: "control", label: getVerifiedOrFallback(verifiedReferences.est4, "EST4 Platform") },
        { id: "smoke-detector", functionalGroup: "initiating", category: "initiating", label: getVerifiedOrFallback(verifiedReferences.smokeDetector, "Smoke Detector - Signature Series") },
        { id: "manual-pull", functionalGroup: "initiating", category: "initiating", label: getVerifiedOrFallback(verifiedReferences.pullStation, "Manual Pull Station - Signature Series") },
        { id: "horn-strobe", functionalGroup: "notification", category: "notification", label: getVerifiedOrFallback(verifiedReferences.notificationWall, "Horn/Strobe - Genesis Series") },
        { id: "duct-detector", functionalGroup: "duct-detection", category: "duct-detection", label: "Duct Smoke Detector" },
        { id: "monitor-module", functionalGroup: "monitoring", category: "monitoring", label: getVerifiedOrFallback(verifiedReferences.monitorModule, "Monitor/Input Module") },
        { id: "control-interface", functionalGroup: "control-interface", category: "control-interfaces", label: getVerifiedOrFallback(verifiedReferences.controlModule || verifiedReferences.relayModule, "Control/Relay Interface") },
        { id: "battery-power", functionalGroup: "power-batteries", category: "power-batteries", label: "Power / Battery Consideration" },
        { id: "accessories", functionalGroup: "accessories", category: "accessories", label: "Mounting / Installation Accessories" }
    ];

    const skillCategories = [
        { id: "productKnowledge", label: "Product Knowledge" },
        { id: "systemKnowledge", label: "System Knowledge" },
        { id: "estimating", label: "Estimating" },
        { id: "troubleshooting", label: "Troubleshooting" },
        { id: "customerCommunication", label: "Customer Communication" },
        { id: "professionalJudgment", label: "Professional Judgment" }
    ];

    const confidenceOptions = ["Very Confident", "Somewhat Confident", "Need More Information", "Not Sure"];

    const moduleState = {
        selectedScenarioId: scenarioDefinitions[0].id,
        answers: Object.fromEntries(scenarioDefinitions.map((scenario) => [scenario.id, createInitialScenarioState(scenario)]))
    };

    const el = {
        navButtons: document.querySelectorAll("[data-nav-target]"),
        scenarioHeaderLabel: document.getElementById("scenarioHeaderLabel"),
        scenarioProgressFill: document.getElementById("scenarioProgressFill"),
        scenarioProgressValue: document.getElementById("scenarioProgressValue"),
        completedCountBadge: document.getElementById("completedCountBadge"),
        scenarioCards: document.getElementById("scenarioCards"),
        activeScenarioTitle: document.getElementById("activeScenarioTitle"),
        activeScenarioDifficulty: document.getElementById("activeScenarioDifficulty"),
        activeScenarioSkills: document.getElementById("activeScenarioSkills"),
        scenarioStepShell: document.getElementById("scenarioStepShell"),
        finalReadinessPanel: document.getElementById("finalReadinessPanel"),
        readinessLevelBadge: document.getElementById("readinessLevelBadge"),
        overallReadinessScore: document.getElementById("overallReadinessScore"),
        overallReadinessAverage: document.getElementById("overallReadinessAverage"),
        overallCompletedScenarios: document.getElementById("overallCompletedScenarios"),
        skillsDemonstratedList: document.getElementById("skillsDemonstratedList"),
        skillBreakdownGrid: document.getElementById("skillBreakdownGrid"),
        moduleStepList: document.getElementById("moduleStepList"),
        moduleObjectiveChip: document.getElementById("moduleObjectiveChip"),
        moduleObjectiveTitle: document.getElementById("moduleObjectiveTitle"),
        moduleObjectiveText: document.getElementById("moduleObjectiveText")
    };

    const scenarioFlowSteps = [
        { label: "Customer", chip: "Customer Request", title: "Separate the request from the solution.", objective: "Your goal is to read the customer message and understand the actual need before jumping to products." },
        { label: "Know", chip: "What Do You Know?", title: "Identify what the request already tells you.", objective: "Your goal is to recognize the clearest meaning of the request before deciding what information is still missing." },
        { label: "Missing", chip: "Information Needed", title: "Identify what information is still missing.", objective: "Your goal is to decide what you still need before choosing a product, function, or BOM approach." },
        { label: "Investigate", chip: "What To Investigate", title: "Decide what type of problem you are solving.", objective: "Your goal is to recognize whether the scenario is about monitoring, control, application fit, documentation, or scope review." },
        { label: "Function", chip: "Product / Function", title: "Choose the strongest product or function approach.", objective: "Your goal is to investigate the right function first and avoid promising products without verification." },
        { label: "Respond", chip: "Build Your Response", title: "Draft the professional response you would send back.", objective: "Your goal is to include the important confirmation, compatibility, and scope-review points in your response." },
        { label: "Review", chip: "Review", title: "Check your reasoning before you submit it.", objective: "Your goal is to review the decision, identify uncertainty, and choose the confidence level that matches the information you actually have." },
        { label: "Score", chip: "Score", title: "Review the result and why it matters.", objective: "Your goal is to learn from the decision and carry the reasoning pattern into the next real-world scenario." }
    ];

    window.addEventListener("DOMContentLoaded", initializeScenarioModule);

    function initializeScenarioModule() {
        bindNavigation();
        renderScenarioCards();
        updateHeader();
        renderActiveScenario();
        renderFinalReadiness();
    }

    function bindNavigation() {
        const navPaths = {
            dashboard: "../../index.html",
            training: "../index.html",
            quiz: "../../quiz/index.html",
            products: "../../products/index.html",
            progress: "../../progress/index.html",
            settings: "../../settings/index.html"
        };

        el.navButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const target = button.getAttribute("data-nav-target");
                const path = navPaths[target];
                if (path) {
                    window.location.href = path;
                }
            });
        });
    }

    function renderScenarioCards() {
        el.scenarioCards.innerHTML = scenarioDefinitions.map((scenario, index) => {
            const scenarioState = getScenarioState(scenario.id);
            const isActive = moduleState.selectedScenarioId === scenario.id;
            const complete = scenarioState.completed;
            const progressLabel = complete ? `${scenarioState.score.total}/100` : `Step ${scenarioState.currentStep} of 8`;
            return `
                <article class="scenario-card ${isActive ? "is-active" : ""} ${complete ? "is-complete" : ""}">
                    <div class="scenario-card-top">
                        <div>
                            <p class="message-label">Scenario ${index + 1}</p>
                            <h3>${escapeHTML(scenario.title)}</h3>
                        </div>
                        <span class="status-chip ${complete ? "good" : "warn"}">${complete ? "Complete" : "In Progress"}</span>
                    </div>
                    <p>${escapeHTML(scenario.customerMessage)}</p>
                    <div class="skill-chip-list">
                        ${scenario.skills.map((skill) => `<span class="skill-chip">${escapeHTML(skill)}</span>`).join("")}
                    </div>
                    <div class="review-summary-row">
                        <span class="muted-label">Difficulty</span>
                        <strong>${escapeHTML(scenario.difficulty)}</strong>
                    </div>
                    <div class="review-summary-row">
                        <span class="muted-label">Completion Status</span>
                        <strong>${escapeHTML(progressLabel)}</strong>
                    </div>
                    <div class="scenario-actions">
                        <button class="btn btn-primary" type="button" data-start-scenario="${escapeHTML(scenario.id)}">${isActive ? "Continue Scenario" : "Start Scenario"}</button>
                        ${complete ? `<button class="btn btn-secondary" type="button" data-reset-scenario="${escapeHTML(scenario.id)}">Try Again</button>` : ""}
                    </div>
                </article>
            `;
        }).join("");

        el.scenarioCards.querySelectorAll("[data-start-scenario]").forEach((button) => {
            button.addEventListener("click", () => {
                moduleState.selectedScenarioId = button.getAttribute("data-start-scenario");
                updateHeader();
                renderScenarioCards();
                renderActiveScenario();
            });
        });

        el.scenarioCards.querySelectorAll("[data-reset-scenario]").forEach((button) => {
            button.addEventListener("click", () => {
                const scenarioId = button.getAttribute("data-reset-scenario");
                moduleState.answers[scenarioId] = createInitialScenarioState(getScenarioById(scenarioId));
                moduleState.selectedScenarioId = scenarioId;
                updateHeader();
                renderScenarioCards();
                renderActiveScenario();
                renderFinalReadiness();
            });
        });

        el.completedCountBadge.textContent = `${getCompletedScenarioCount()} / 5 Complete`;
    }

    function updateHeader() {
        const activeScenario = getSelectedScenario();
        const index = scenarioDefinitions.findIndex((scenario) => scenario.id === activeScenario.id);
        const progressPercent = Math.round(((index + 1) / scenarioDefinitions.length) * 100);
        el.scenarioHeaderLabel.textContent = `Scenario ${index + 1} of 5`;
        el.scenarioProgressFill.style.width = `${progressPercent}%`;
        el.scenarioProgressValue.textContent = `${progressPercent}%`;
        el.activeScenarioTitle.textContent = activeScenario.title;
        el.activeScenarioDifficulty.textContent = activeScenario.difficulty;
        el.activeScenarioSkills.textContent = activeScenario.skills.join(" • ");
    }

    function renderModuleShell() {
        const scenario = getSelectedScenario();
        const scenarioState = getScenarioState(scenario.id);
        const visualStep = Math.min(scenarioState.currentStep, 8);

        el.moduleStepList.innerHTML = scenarioFlowSteps.map((step, index) => {
            const stepNumber = index + 1;
            const isComplete = scenarioState.completed ? true : stepNumber < visualStep;
            const isActive = !scenarioState.completed && stepNumber === visualStep;
            const icon = isComplete ? "✓" : isActive ? "●" : "○";
            return `<span class="module-step-item ${isComplete ? "is-complete" : isActive ? "is-active" : ""}"><span class="module-step-icon">${icon}</span>${stepNumber} ${step.label}</span>`;
        }).join("");

        const activeConfig = scenarioState.completed ? scenarioFlowSteps[7] : scenarioFlowSteps[visualStep - 1];
        el.moduleObjectiveChip.textContent = `${scenario.title} • ${activeConfig.chip}`;
        el.moduleObjectiveTitle.textContent = activeConfig.title;
        el.moduleObjectiveText.textContent = activeConfig.objective;
    }

    function renderActiveScenario() {
        const scenario = getSelectedScenario();
        const scenarioState = getScenarioState(scenario.id);
        renderModuleShell();
        el.scenarioStepShell.innerHTML = renderStepMarkup(scenario, scenarioState);
        bindStepInteractions(scenario, scenarioState);
    }

    function renderStepMarkup(scenario, scenarioState) {
        switch (scenarioState.currentStep) {
            case 1:
                return renderCustomerRequestStep(scenario);
            case 2:
                return renderQuestionStep(scenario, scenarioState, scenario.whatYouKnow, "whatYouKnow", "What Do You Know?", "Step 2 of 8");
            case 3:
                return renderQuestionStep(scenario, scenarioState, scenario.missingInformation, "missingInformation", "What Information Is Missing?", "Step 3 of 8");
            case 4:
                return renderQuestionStep(scenario, scenarioState, scenario.investigate, "investigate", "What Should You Investigate?", "Step 4 of 8");
            case 5:
                return renderQuestionStep(scenario, scenarioState, scenario.productFunction, "productFunction", "What Product/Function Is Involved?", "Step 5 of 8");
            case 6:
                return renderResponseBuilderStep(scenario, scenarioState);
            case 7:
                return renderReviewStep(scenario, scenarioState);
            case 8:
                return renderScoreStep(scenario, scenarioState);
            default:
                return "";
        }
    }

    function renderCustomerRequestStep(scenario) {
        return `
            <section class="workspace-section">
                <div class="workspace-step-header">
                    <p class="message-label">Step 1 of 8</p>
                    <h3 class="workspace-title">Customer Request</h3>
                    <p>You're at work. A real person needs help. Read the request first, then decide what the customer actually needs before naming products.</p>
                </div>

                <article class="customer-message">
                    <p class="message-label">${escapeHTML(scenario.customerRole)}</p>
                    <div class="message-bubble">${escapeHTML(scenario.customerMessage)}</div>
                </article>

                ${scenario.scenarioMetadata ? `
                    <article class="helper-card">
                        <h3>Project Information Provided</h3>
                        <ul class="review-list">
                            ${scenario.scenarioMetadata.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
                        </ul>
                    </article>
                ` : ""}

                <div class="panel-actions">
                    <button class="btn btn-primary" type="button" data-step-advance="2">Continue →</button>
                    <button class="btn btn-secondary" type="button" data-return-training>Return to Training</button>
                </div>
            </section>
        `;
    }

    function renderQuestionStep(scenario, scenarioState, question, key, title, stepLabel) {
        const value = scenarioState.answers[key];
        const feedback = scenarioState.feedback[key];
        return `
            <section class="workspace-section">
                <div class="workspace-step-header">
                    <p class="message-label">${stepLabel}</p>
                    <h3 class="workspace-title">${escapeHTML(title)}</h3>
                    <p>${escapeHTML(question.prompt)}</p>
                </div>

                <article class="decision-card">
                    ${question.type === "single" ? renderSingleChoiceQuestion(question, value) : renderMultiChoiceQuestion(question, value)}
                    ${feedback ? `<div class="feedback-box ${escapeHTML(feedback.type)}">${escapeHTML(feedback.message)}</div>` : ""}
                    ${question.type === "multi" ? renderImportanceLegend(question) : ""}
                </article>

                <div class="panel-actions">
                    <button class="btn btn-primary" type="button" data-check-question="${escapeHTML(key)}">Check Step</button>
                    ${feedback ? `<button class="btn btn-secondary" type="button" data-step-advance="${scenarioState.currentStep + 1}">Continue →</button>` : ""}
                </div>
            </section>
        `;
    }

    function renderSingleChoiceQuestion(question, selectedValue) {
        return `
            <div class="choice-grid">
                ${question.options.map((option) => `
                    <button type="button" class="choice-button ${selectedValue === option.id ? "selected" : ""} ${option.status === "also-reasonable" ? "also-reasonable" : ""}" data-single-choice="${escapeHTML(option.id)}">
                        ${escapeHTML(option.label)}
                    </button>
                `).join("")}
            </div>
        `;
    }

    function renderMultiChoiceQuestion(question, selectedValues) {
        return `
            <div class="multi-choice-grid">
                ${question.options.map((option) => `
                    <button type="button" class="multi-choice-button ${(selectedValues || []).includes(option.id) ? "selected" : ""}" data-multi-choice="${escapeHTML(option.id)}">
                        ${escapeHTML(option.label)}
                    </button>
                `).join("")}
            </div>
        `;
    }

    function renderImportanceLegend(question) {
        return `
            <div class="explanation-list">
                ${question.options.map((option) => `
                    <div>
                        <strong>${escapeHTML(option.label)}</strong>
                        <p class="question-importance">${escapeHTML(option.importance || "")}</p>
                    </div>
                `).join("")}
            </div>
        `;
    }

    function renderResponseBuilderStep(scenario, scenarioState) {
        const selectedIds = scenarioState.responseBuilder.selected;
        const available = scenario.responseBuilder.options.filter((option) => !selectedIds.includes(option.id));
        const selectedOptions = selectedIds.map((id) => scenario.responseBuilder.options.find((option) => option.id === id)).filter(Boolean);

        return `
            <section class="workspace-section">
                <div class="workspace-step-header">
                    <p class="message-label">Step 6 of 8</p>
                    <h3 class="workspace-title">Build Your Response</h3>
                    <p>${escapeHTML(scenario.responseBuilder.intro)}</p>
                </div>

                <article class="response-builder">
                    <div class="response-builder-shell">
                        <div class="response-column">
                            <h3>Available Response Elements</h3>
                            <div class="response-option-list">
                                ${available.map((option) => `
                                    <div class="response-option">
                                        <p>${escapeHTML(option.label)}</p>
                                        <button class="btn btn-secondary" type="button" data-response-add="${escapeHTML(option.id)}">Add</button>
                                    </div>
                                `).join("") || `<p class="response-hint">All response elements are in your draft.</p>`}
                            </div>
                        </div>
                        <div class="response-column">
                            <h3>Your Response Draft</h3>
                            <div class="response-selected-list">
                                ${selectedOptions.map((option, index) => `
                                    <div class="response-item">
                                        <p>${escapeHTML(option.label)}</p>
                                        <div class="response-item-controls">
                                            <button class="btn btn-secondary" type="button" data-response-move="up" data-response-id="${escapeHTML(option.id)}" ${index === 0 ? "disabled" : ""}>Move Up</button>
                                            <button class="btn btn-secondary" type="button" data-response-move="down" data-response-id="${escapeHTML(option.id)}" ${index === selectedOptions.length - 1 ? "disabled" : ""}>Move Down</button>
                                            <button class="btn btn-secondary" type="button" data-response-remove="${escapeHTML(option.id)}">Remove</button>
                                        </div>
                                    </div>
                                `).join("") || `<p class="response-hint">Add the concepts you want in the customer response.</p>`}
                            </div>
                            <div class="response-preview">
                                ${escapeHTML(buildResponsePreview(selectedOptions))}
                            </div>
                        </div>
                    </div>
                </article>

                ${scenario.requiresBomBuilder ? renderBomBuilderStep(scenarioState) : ""}

                ${scenarioState.feedback.responseBuilder ? `<div class="feedback-box ${escapeHTML(scenarioState.feedback.responseBuilder.type)}">${escapeHTML(scenarioState.feedback.responseBuilder.message)}</div>` : ""}

                <div class="panel-actions">
                    <button class="btn btn-primary" type="button" data-check-response>Review Response</button>
                    ${scenarioState.feedback.responseBuilder ? `<button class="btn btn-secondary" type="button" data-step-advance="7">Continue →</button>` : ""}
                </div>
            </section>
        `;
    }

    function renderBomBuilderStep(scenarioState) {
        const bomItems = scenarioState.bomBuilder.items;
        return `
            <article class="bom-builder-card">
                <div class="workspace-step-header">
                    <h3>Build a High-Level BOM</h3>
                    <p class="bom-builder-note">Do not force exact part numbers when a verified record is not required. Functional placeholders are acceptable here.</p>
                </div>
                <div class="bom-builder-toolbar">
                    <div class="bom-builder-grid">
                        <label>
                            Category
                            <select id="capstoneBomCategory">
                                <option value="">Select</option>
                                <option value="control">Control</option>
                                <option value="initiating">Initiating</option>
                                <option value="notification">Notification</option>
                                <option value="duct-detection">Duct Detection</option>
                                <option value="monitoring">Monitoring</option>
                                <option value="control-interfaces">Control Interfaces</option>
                                <option value="power-batteries">Power/Batteries</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </label>
                        <label>
                            Material
                            <select id="capstoneBomMaterial">
                                <option value="">Select</option>
                                ${challengeBomCatalog.map((item) => `<option value="${escapeHTML(item.id)}">${escapeHTML(item.label)}</option>`).join("")}
                            </select>
                        </label>
                        <button class="btn btn-secondary" type="button" data-bom-add>Add Item</button>
                    </div>
                </div>
                <div class="bom-preview-list">
                    ${bomItems.map((item, index) => `
                        <div class="bom-preview-item">
                            <div>
                                <strong>${escapeHTML(item.categoryLabel)}</strong>
                                <p>${escapeHTML(item.label)}</p>
                            </div>
                            <button class="btn btn-secondary" type="button" data-bom-remove="${index}">Remove</button>
                        </div>
                    `).join("") || `<p class="response-hint">Add the major categories and materials you expect before the quote is finalized.</p>`}
                </div>
            </article>
        `;
    }

    function renderReviewStep(scenario, scenarioState) {
        const review = scenarioState.review;
        return `
            <section class="workspace-section">
                <div class="workspace-step-header">
                    <p class="message-label">Step 7 of 8</p>
                    <h3 class="workspace-title">Review</h3>
                    <p>Check your reasoning before you submit the scenario. Recognizing uncertainty is part of the job.</p>
                </div>

                <article class="review-card">
                    <h3>Professional Review</h3>
                    <ul class="review-list">
                        <li><strong>Understanding:</strong> ${escapeHTML(review.understanding)}</li>
                        <li><strong>Information Gathering:</strong> ${escapeHTML(review.information)}</li>
                        <li><strong>Product / Function:</strong> ${escapeHTML(review.productFunction)}</li>
                        <li><strong>System Reasoning:</strong> ${escapeHTML(review.systemReasoning)}</li>
                        <li><strong>Response Draft:</strong> ${escapeHTML(review.response)}</li>
                    </ul>
                </article>

                <article class="confidence-card">
                    <h3>How confident are you?</h3>
                    <p>${escapeHTML(scenario.reviewPrompt)}</p>
                    <div class="confidence-options">
                        ${confidenceOptions.map((option) => `
                            <button type="button" class="confidence-button ${scenarioState.confidence === option ? "selected" : ""}" data-confidence-option="${escapeHTML(option)}">${escapeHTML(option)}</button>
                        `).join("")}
                    </div>
                    ${scenarioState.feedback.confidence ? `<div class="feedback-box ${escapeHTML(scenarioState.feedback.confidence.type)}">${escapeHTML(scenarioState.feedback.confidence.message)}</div>` : ""}
                </article>

                <div class="panel-actions">
                    <button class="btn btn-primary" type="button" data-submit-scenario>Submit Scenario</button>
                </div>
            </section>
        `;
    }

    function renderScoreStep(scenario, scenarioState) {
        const score = scenarioState.score;
        const canAdvance = getNextScenario(scenario.id) !== null;
        return `
            <section class="workspace-section">
                <div class="workspace-step-header">
                    <p class="message-label">Step 8 of 8</p>
                    <h3 class="workspace-title">Score</h3>
                    <p>This capstone rewards good reasoning and professional judgment, not guesswork.</p>
                </div>

                <div class="quick-stats-grid">
                    <article class="score-card">
                        <p class="muted-label">Scenario Score</p>
                        <strong class="summary-value">${score.total}/100</strong>
                        <p>${escapeHTML(score.rating)}</p>
                    </article>
                    <article class="score-card">
                        <p class="muted-label">Confidence Reflection</p>
                        <strong>${escapeHTML(scenarioState.confidence || "Not Selected")}</strong>
                        <p>${escapeHTML(score.confidenceReflection)}</p>
                    </article>
                </div>

                <article class="review-card">
                    <h3>Decision-Based Scoring</h3>
                    <ul class="review-list">
                        <li><strong>Understanding the request:</strong> ${score.breakdown.understanding}/20</li>
                        <li><strong>Information gathering:</strong> ${score.breakdown.informationGathering}/20</li>
                        <li><strong>Product/function identification:</strong> ${score.breakdown.productFunction}/20</li>
                        <li><strong>System reasoning:</strong> ${score.breakdown.systemReasoning}/20</li>
                        <li><strong>Professional response:</strong> ${score.breakdown.professionalResponse}/20</li>
                    </ul>
                </article>

                <article class="review-card">
                    <h3>Recommended Sales Support Response</h3>
                    <div class="response-preview">${escapeHTML(score.recommendedResponse)}</div>
                </article>

                <div class="panel-actions">
                    <button class="btn btn-secondary" type="button" data-restart-selected>Try Again</button>
                    ${canAdvance ? `<button class="btn btn-primary" type="button" data-start-next>Next Scenario</button>` : `<button class="btn btn-primary" type="button" data-show-readiness>View Final Readiness</button>`}
                    <button class="btn btn-secondary" type="button" data-return-training>Return to Training</button>
                </div>
            </section>
        `;
    }

    function bindStepInteractions(scenario, scenarioState) {
        bindSharedActions();

        if (scenarioState.currentStep === 1) {
            return;
        }

        if (scenarioState.currentStep >= 2 && scenarioState.currentStep <= 5) {
            bindQuestionInteractions(scenario, scenarioState);
        }

        if (scenarioState.currentStep === 6) {
            bindResponseBuilderInteractions(scenario, scenarioState);
        }

        if (scenarioState.currentStep === 7) {
            bindReviewInteractions(scenario, scenarioState);
        }

        if (scenarioState.currentStep === 8) {
            bindScoreActions(scenario);
        }
    }

    function bindSharedActions() {
        const returnButton = el.scenarioStepShell.querySelector("[data-return-training]");
        if (returnButton) {
            returnButton.addEventListener("click", () => {
                window.location.href = "../index.html";
            });
        }

        const continueButton = el.scenarioStepShell.querySelector("[data-step-advance]");
        if (continueButton) {
            continueButton.addEventListener("click", () => {
                const nextStep = Number(continueButton.getAttribute("data-step-advance"));
                const activeState = getScenarioState(moduleState.selectedScenarioId);
                activeState.currentStep = nextStep;
                renderScenarioCards();
                renderActiveScenario();
            });
        }
    }

    function bindQuestionInteractions(scenario, scenarioState) {
        const activeKey = getQuestionKeyByStep(scenarioState.currentStep);
        const question = scenario[activeKey];

        el.scenarioStepShell.querySelectorAll("[data-single-choice]").forEach((button) => {
            button.addEventListener("click", () => {
                scenarioState.answers[activeKey] = button.getAttribute("data-single-choice");
                renderActiveScenario();
            });
        });

        el.scenarioStepShell.querySelectorAll("[data-multi-choice]").forEach((button) => {
            button.addEventListener("click", () => {
                const optionId = button.getAttribute("data-multi-choice");
                const current = scenarioState.answers[activeKey] || [];
                if (current.includes(optionId)) {
                    scenarioState.answers[activeKey] = current.filter((entry) => entry !== optionId);
                } else {
                    scenarioState.answers[activeKey] = [...current, optionId];
                }
                renderActiveScenario();
            });
        });

        const checkButton = el.scenarioStepShell.querySelector("[data-check-question]");
        if (checkButton) {
            checkButton.addEventListener("click", () => {
                scenarioState.feedback[activeKey] = evaluateQuestion(question, scenarioState.answers[activeKey]);
                updateReviewSummary(scenario, scenarioState, activeKey);
                renderActiveScenario();
            });
        }
    }

    function bindResponseBuilderInteractions(scenario, scenarioState) {
        el.scenarioStepShell.querySelectorAll("[data-response-add]").forEach((button) => {
            button.addEventListener("click", () => {
                const optionId = button.getAttribute("data-response-add");
                scenarioState.responseBuilder.selected.push(optionId);
                renderActiveScenario();
            });
        });

        el.scenarioStepShell.querySelectorAll("[data-response-remove]").forEach((button) => {
            button.addEventListener("click", () => {
                const optionId = button.getAttribute("data-response-remove");
                scenarioState.responseBuilder.selected = scenarioState.responseBuilder.selected.filter((id) => id !== optionId);
                renderActiveScenario();
            });
        });

        el.scenarioStepShell.querySelectorAll("[data-response-move]").forEach((button) => {
            button.addEventListener("click", () => {
                const direction = button.getAttribute("data-response-move");
                const optionId = button.getAttribute("data-response-id");
                moveResponseOption(scenarioState.responseBuilder.selected, optionId, direction);
                renderActiveScenario();
            });
        });

        const addBomButton = el.scenarioStepShell.querySelector("[data-bom-add]");
        if (addBomButton) {
            addBomButton.addEventListener("click", () => {
                const categorySelect = document.getElementById("capstoneBomCategory");
                const materialSelect = document.getElementById("capstoneBomMaterial");
                if (!categorySelect || !materialSelect || !categorySelect.value || !materialSelect.value) {
                    scenarioState.feedback.responseBuilder = {
                        type: "warning",
                        message: "Choose both a category and a material before adding the item to the high-level BOM."
                    };
                    renderActiveScenario();
                    return;
                }

                const catalogItem = challengeBomCatalog.find((item) => item.id === materialSelect.value);
                scenarioState.bomBuilder.items.push({
                    category: categorySelect.value,
                    categoryLabel: getCapstoneCategoryLabel(categorySelect.value),
                    materialId: materialSelect.value,
                    label: catalogItem ? catalogItem.label : materialSelect.value,
                    functionalGroup: catalogItem ? catalogItem.functionalGroup : materialSelect.value
                });
                scenarioState.feedback.responseBuilder = null;
                renderActiveScenario();
            });
        }

        el.scenarioStepShell.querySelectorAll("[data-bom-remove]").forEach((button) => {
            button.addEventListener("click", () => {
                const index = Number(button.getAttribute("data-bom-remove"));
                scenarioState.bomBuilder.items.splice(index, 1);
                renderActiveScenario();
            });
        });

        const reviewButton = el.scenarioStepShell.querySelector("[data-check-response]");
        if (reviewButton) {
            reviewButton.addEventListener("click", () => {
                scenarioState.feedback.responseBuilder = evaluateResponseBuilder(scenario, scenarioState);
                updateReviewSummary(scenario, scenarioState, "responseBuilder");
                renderActiveScenario();
            });
        }
    }

    function bindReviewInteractions(scenario, scenarioState) {
        el.scenarioStepShell.querySelectorAll("[data-confidence-option]").forEach((button) => {
            button.addEventListener("click", () => {
                scenarioState.confidence = button.getAttribute("data-confidence-option");
                scenarioState.feedback.confidence = buildConfidenceFeedback(scenarioState.confidence);
                renderActiveScenario();
            });
        });

        const submitButton = el.scenarioStepShell.querySelector("[data-submit-scenario]");
        if (submitButton) {
            submitButton.addEventListener("click", () => {
                if (!scenarioState.confidence) {
                    scenarioState.feedback.confidence = {
                        type: "warning",
                        message: "Select a confidence level before submitting. Good judgment includes knowing when you still need more information."
                    };
                    renderActiveScenario();
                    return;
                }

                scenarioState.score = scoreScenario(scenario, scenarioState);
                scenarioState.completed = true;
                scenarioState.currentStep = 8;
                renderScenarioCards();
                renderActiveScenario();
                renderFinalReadiness();
            });
        }
    }

    function bindScoreActions(scenario) {
        const restartButton = el.scenarioStepShell.querySelector("[data-restart-selected]");
        if (restartButton) {
            restartButton.addEventListener("click", () => {
                moduleState.answers[scenario.id] = createInitialScenarioState(scenario);
                renderScenarioCards();
                renderActiveScenario();
                renderFinalReadiness();
            });
        }

        const nextButton = el.scenarioStepShell.querySelector("[data-start-next]");
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                const nextScenario = getNextScenario(scenario.id);
                if (!nextScenario) {
                    return;
                }
                moduleState.selectedScenarioId = nextScenario.id;
                updateHeader();
                renderScenarioCards();
                renderActiveScenario();
            });
        }

        const readinessButton = el.scenarioStepShell.querySelector("[data-show-readiness]");
        if (readinessButton) {
            readinessButton.addEventListener("click", () => {
                el.finalReadinessPanel.classList.remove("hidden");
                el.finalReadinessPanel.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    }

    function evaluateQuestion(question, value) {
        if (question.type === "single") {
            if (!value) {
                return { type: "warning", message: "Select an answer before checking this step.", ratio: 0 };
            }

            const selected = question.options.find((option) => option.id === value);
            const alsoReasonable = Array.isArray(question.alsoReasonable) && question.alsoReasonable.includes(value);
            if (value === question.correct) {
                return {
                    type: "correct",
                    message: `Best answer. ${question.explanation}`,
                    ratio: 1
                };
            }

            if (alsoReasonable || (selected && selected.status === "also-reasonable")) {
                return {
                    type: "warning",
                    message: `Also reasonable, but not the strongest answer for this training prompt. ${question.explanation}`,
                    ratio: 0.75
                };
            }

            return {
                type: "incorrect",
                message: `Needs clarification. ${question.explanation}`,
                ratio: 0.25
            };
        }

        const selectedValues = Array.isArray(value) ? value : [];
        if (selectedValues.length === 0) {
            return { type: "warning", message: "Select one or more items before checking this step.", ratio: 0 };
        }

        const requiredSet = new Set(question.required);
        const optionalValid = new Set((question.optionalValid || []).concat(question.required));
        const correctMatches = selectedValues.filter((item) => requiredSet.has(item)).length;
        const missingCount = question.required.filter((item) => !selectedValues.includes(item)).length;
        const extras = selectedValues.filter((item) => !optionalValid.has(item)).length;
        const ratio = clampRatio((correctMatches / question.required.length) - (extras * 0.08));

        if (missingCount === 0 && extras === 0) {
            return {
                type: "correct",
                message: "Best answer. You gathered the information needed to move forward responsibly.",
                ratio
            };
        }

        if (ratio >= 0.65) {
            return {
                type: "warning",
                message: `Also reasonable overall, but some items still need clarification. Missing: ${formatMissingItems(question, selectedValues)}.`,
                ratio
            };
        }

        return {
            type: "incorrect",
            message: `Needs clarification. Missing: ${formatMissingItems(question, selectedValues)}.`,
            ratio
        };
    }

    function evaluateResponseBuilder(scenario, scenarioState) {
        const selectedIds = scenarioState.responseBuilder.selected;
        const required = scenario.responseBuilder.options.filter((option) => option.required).map((option) => option.id);
        const incorrect = scenario.responseBuilder.options.filter((option) => option.incorrect).map((option) => option.id);
        const requiredCount = required.filter((id) => selectedIds.includes(id)).length;
        const incorrectCount = incorrect.filter((id) => selectedIds.includes(id)).length;
        const missingRequired = required.filter((id) => !selectedIds.includes(id));
        let ratio = clampRatio((requiredCount / required.length) - (incorrectCount * 0.2));

        if (scenario.requiresBomBuilder) {
            const bomRatio = evaluateCapstoneBomRatio(scenarioState.bomBuilder.items);
            ratio = clampRatio((ratio + bomRatio) / 2);
        }

        if (selectedIds.length === 0) {
            return {
                type: "warning",
                message: "Build the response before reviewing it.",
                ratio: 0
            };
        }

        if (missingRequired.length === 0 && incorrectCount === 0 && (!scenario.requiresBomBuilder || evaluateCapstoneBomRatio(scenarioState.bomBuilder.items) >= 0.7)) {
            return {
                type: "correct",
                message: "Best answer. The response covers the important professional checkpoints before quote release.",
                ratio
            };
        }

        if (ratio >= 0.65) {
            return {
                type: "warning",
                message: `Also reasonable, but strengthen the response by adding: ${missingRequired.map((id) => getResponseOptionLabel(scenario, id)).join(", ") || "no major additions"}.`,
                ratio
            };
        }

        return {
            type: "incorrect",
            message: `Needs clarification. Add the required concepts before treating this as a professional response.`,
            ratio
        };
    }

    function updateReviewSummary(scenario, scenarioState, key) {
        if (key === "whatYouKnow") {
            scenarioState.review.understanding = buildReviewSummary(scenarioState.feedback[key]);
            return;
        }
        if (key === "missingInformation") {
            scenarioState.review.information = buildReviewSummary(scenarioState.feedback[key]);
            return;
        }
        if (key === "investigate") {
            scenarioState.review.systemReasoning = buildReviewSummary(scenarioState.feedback[key]);
            return;
        }
        if (key === "productFunction") {
            scenarioState.review.productFunction = buildReviewSummary(scenarioState.feedback[key]);
            return;
        }
        if (key === "responseBuilder") {
            scenarioState.review.response = buildReviewSummary(scenarioState.feedback[key]);
        }
    }

    function scoreScenario(scenario, scenarioState) {
        const what = scenarioState.feedback.whatYouKnow || { ratio: 0 };
        const missing = scenarioState.feedback.missingInformation || { ratio: 0 };
        const investigate = scenarioState.feedback.investigate || { ratio: 0 };
        const product = scenarioState.feedback.productFunction || { ratio: 0 };
        const response = scenarioState.feedback.responseBuilder || { ratio: 0 };

        const breakdown = {
            understanding: Math.round(what.ratio * scoreModel.understanding),
            informationGathering: Math.round(missing.ratio * scoreModel.informationGathering),
            productFunction: Math.round(product.ratio * scoreModel.productFunction),
            systemReasoning: Math.round(investigate.ratio * scoreModel.systemReasoning),
            professionalResponse: Math.round(response.ratio * scoreModel.professionalResponse)
        };

        const total = breakdown.understanding + breakdown.informationGathering + breakdown.productFunction + breakdown.systemReasoning + breakdown.professionalResponse;
        const rating = total >= 90 ? "Excellent" : total >= 80 ? "Good" : total >= 70 ? "Needs minor clarification" : "Needs review";

        return {
            total,
            rating,
            breakdown,
            confidenceReflection: buildConfidenceFeedback(scenarioState.confidence).message,
            recommendedResponse: buildRecommendedResponse(scenario, scenarioState)
        };
    }

    function renderFinalReadiness() {
        const completed = scenarioDefinitions.filter((scenario) => getScenarioState(scenario.id).completed);
        if (completed.length !== scenarioDefinitions.length) {
            el.finalReadinessPanel.classList.add("hidden");
            return;
        }

        const totals = completed.map((scenario) => getScenarioState(scenario.id).score.total);
        const overall = totals.reduce((sum, value) => sum + value, 0);
        const average = Math.round(overall / scenarioDefinitions.length);
        const readinessLevel = average >= 90
            ? "Advanced Sales Support Readiness"
            : average >= 80
                ? "Strong Sales Support Foundation"
                : average >= 70
                    ? "Developing Sales Support Skills"
                    : "Continue Training";

        el.finalReadinessPanel.classList.remove("hidden");
        el.overallReadinessScore.textContent = `${overall} / 500`;
        el.overallReadinessAverage.textContent = `${average}%`;
        el.overallCompletedScenarios.textContent = `${completed.length} / 5`;
        el.readinessLevelBadge.textContent = readinessLevel;
        el.skillsDemonstratedList.innerHTML = [
            "Product Recognition",
            "Information Gathering",
            "System Thinking",
            "Wiring Awareness",
            "Takeoff Thinking",
            "BOM/Estimating",
            "Customer Communication",
            "Professional Judgment"
        ].map((item) => `<li>${escapeHTML(item)}</li>`).join("");

        const breakdown = computeSkillBreakdown();
        el.skillBreakdownGrid.innerHTML = skillCategories.map((category) => `
            <article class="skill-breakdown-card">
                <span class="summary-label">${escapeHTML(category.label)}</span>
                <strong>${breakdown[category.id]}/100</strong>
            </article>
        `).join("");
    }

    function computeSkillBreakdown() {
        const completedScores = scenarioDefinitions.map((scenario) => getScenarioState(scenario.id).score).filter((score) => score.total >= 0);
        const averagePoints = completedScores.length
            ? completedScores.reduce((sum, score) => sum + score.total, 0) / completedScores.length
            : 0;

        const productAvg = averageBreakdownValue("productFunction");
        const understandingAvg = averageBreakdownValue("understanding");
        const infoAvg = averageBreakdownValue("informationGathering");
        const reasoningAvg = averageBreakdownValue("systemReasoning");
        const responseAvg = averageBreakdownValue("professionalResponse");

        return {
            productKnowledge: scaleTwentyPointMetric(productAvg),
            systemKnowledge: scaleTwentyPointMetric((understandingAvg + reasoningAvg) / 2),
            estimating: scaleTwentyPointMetric((infoAvg + responseAvg) / 2),
            troubleshooting: scaleTwentyPointMetric((reasoningAvg + infoAvg) / 2),
            customerCommunication: scaleTwentyPointMetric(responseAvg),
            professionalJudgment: Math.round((scaleTwentyPointMetric((infoAvg + reasoningAvg) / 2) + Math.round(averagePoints)) / 2)
        };
    }

    function averageBreakdownValue(key) {
        const completed = scenarioDefinitions.filter((scenario) => getScenarioState(scenario.id).completed);
        if (completed.length === 0) {
            return 0;
        }
        return completed.reduce((sum, scenario) => sum + getScenarioState(scenario.id).score.breakdown[key], 0) / completed.length;
    }

    function scaleTwentyPointMetric(value) {
        return Math.round((value / 20) * 100);
    }

    function buildConfidenceFeedback(value) {
        if (value === "Need More Information") {
            return {
                type: "correct",
                message: "You selected 'Need More Information.' Good judgment. Recognizing when you do not yet have enough information is an important Sales Support skill."
            };
        }
        if (value === "Very Confident") {
            return {
                type: "warning",
                message: "Confidence is useful, but keep it tied to verified information, documentation, and compatibility checks."
            };
        }
        if (value === "Somewhat Confident") {
            return {
                type: "correct",
                message: "Balanced judgment. Keep working from documented requirements and verified compatibility."
            };
        }
        return {
            type: "warning",
            message: "If you are not sure, slow down and confirm the missing information before promising scope or products."
        };
    }

    function buildRecommendedResponse(scenario, scenarioState) {
        const responseIds = scenarioState.responseBuilder.selected;
        const selectedOptions = responseIds.map((id) => scenario.responseBuilder.options.find((option) => option.id === id)).filter(Boolean);
        if (selectedOptions.length === 0) {
            return buildResponsePreview(scenario.responseBuilder.options.filter((option) => option.required));
        }
        return buildResponsePreview(selectedOptions);
    }

    function buildResponsePreview(options) {
        if (!options || options.length === 0) {
            return "No response drafted yet. Add the points you would send back to the customer.";
        }
        return options.map((option) => option.label).join(" ");
    }

    function buildReviewSummary(feedback) {
        if (!feedback) {
            return "Not reviewed yet.";
        }
        if (feedback.type === "correct") {
            return "Best answer.";
        }
        if (feedback.type === "warning") {
            return "Also reasonable, but still worth tightening before quoting or recommending products.";
        }
        return "Needs clarification before this should go back to the customer.";
    }

    function evaluateCapstoneBomRatio(items) {
        if (!items.length) {
            return 0;
        }
        const requiredGroups = ["control", "initiating", "notification", "duct-detection", "monitoring", "control-interface", "power-batteries", "accessories"];
        const foundGroups = new Set(items.map((item) => item.functionalGroup));
        const coverage = requiredGroups.filter((group) => foundGroups.has(group)).length / requiredGroups.length;
        return clampRatio(coverage);
    }

    function getQuestionKeyByStep(step) {
        if (step === 2) {
            return "whatYouKnow";
        }
        if (step === 3) {
            return "missingInformation";
        }
        if (step === 4) {
            return "investigate";
        }
        return "productFunction";
    }

    function moveResponseOption(list, optionId, direction) {
        const index = list.indexOf(optionId);
        if (index === -1) {
            return;
        }
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= list.length) {
            return;
        }
        const updated = [...list];
        const [item] = updated.splice(index, 1);
        updated.splice(targetIndex, 0, item);
        const scenarioState = getScenarioState(moduleState.selectedScenarioId);
        scenarioState.responseBuilder.selected = updated;
    }

    function formatMissingItems(question, selectedValues) {
        const missing = question.required.filter((item) => !selectedValues.includes(item));
        if (!missing.length) {
            return "no critical missing items";
        }
        return missing.map((itemId) => {
            const option = question.options.find((entry) => entry.id === itemId);
            return option ? option.label : itemId;
        }).join(", ");
    }

    function createInitialScenarioState(scenario) {
        return {
            currentStep: 1,
            completed: false,
            confidence: "",
            answers: {
                whatYouKnow: scenario.whatYouKnow.type === "multi" ? [] : "",
                missingInformation: scenario.missingInformation.type === "multi" ? [] : "",
                investigate: scenario.investigate.type === "multi" ? [] : "",
                productFunction: scenario.productFunction.type === "multi" ? [] : ""
            },
            responseBuilder: {
                selected: []
            },
            bomBuilder: {
                items: []
            },
            feedback: {
                whatYouKnow: null,
                missingInformation: null,
                investigate: null,
                productFunction: null,
                responseBuilder: null,
                confidence: null
            },
            review: {
                understanding: "Not reviewed yet.",
                information: "Not reviewed yet.",
                productFunction: "Not reviewed yet.",
                systemReasoning: "Not reviewed yet.",
                response: "Not reviewed yet."
            },
            score: {
                total: 0,
                rating: "Not started",
                breakdown: {
                    understanding: 0,
                    informationGathering: 0,
                    productFunction: 0,
                    systemReasoning: 0,
                    professionalResponse: 0
                },
                confidenceReflection: "",
                recommendedResponse: ""
            }
        };
    }

    function getSelectedScenario() {
        return getScenarioById(moduleState.selectedScenarioId);
    }

    function getScenarioById(scenarioId) {
        return scenarioDefinitions.find((scenario) => scenario.id === scenarioId);
    }

    function getScenarioState(scenarioId) {
        return moduleState.answers[scenarioId];
    }

    function getCompletedScenarioCount() {
        return scenarioDefinitions.filter((scenario) => getScenarioState(scenario.id).completed).length;
    }

    function getNextScenario(currentId) {
        const index = scenarioDefinitions.findIndex((scenario) => scenario.id === currentId);
        if (index === -1 || index === scenarioDefinitions.length - 1) {
            return null;
        }
        return scenarioDefinitions[index + 1];
    }

    function getResponseOptionLabel(scenario, optionId) {
        const option = scenario.responseBuilder.options.find((entry) => entry.id === optionId);
        return option ? option.label : optionId;
    }

    function getCapstoneCategoryLabel(categoryId) {
        const labels = {
            control: "Control",
            initiating: "Initiating",
            notification: "Notification",
            "duct-detection": "Duct Detection",
            monitoring: "Monitoring",
            "control-interfaces": "Control Interfaces",
            "power-batteries": "Power/Batteries",
            accessories: "Accessories"
        };
        return labels[categoryId] || categoryId;
    }

    function getVerifiedOrFallback(product, fallback) {
        return product ? product.model : fallback;
    }

    function getVerifiedNotificationLabel() {
        return verifiedReferences.notificationSpeaker
            ? `${verifiedReferences.notificationSpeaker.model}`
            : "Ceiling speaker";
    }

    function getVerifiedNotificationShort() {
        return verifiedReferences.notificationSpeaker
            ? verifiedReferences.notificationSpeaker.model
            : "a ceiling speaker option";
    }

    function getVerifiedNotificationExplanation() {
        if (verifiedReferences.notificationSpeaker) {
            return `Best answer for this training prompt: investigate the verified ${verifiedReferences.notificationSpeaker.model} family or an equivalent compatible ceiling notification approach for the space.`;
        }
        return "Best answer for this training prompt: investigate a ceiling speaker approach first for the large gymnasium application.";
    }

    function clampRatio(value) {
        if (!Number.isFinite(value)) {
            return 0;
        }
        return Math.max(0, Math.min(1, value));
    }

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
})();
