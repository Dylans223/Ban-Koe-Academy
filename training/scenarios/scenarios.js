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
        monitorModule: null,
        controlModule: null,
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
                prompt: "What should you investigate FIRST?",
                type: "single",
                options: [
                    { id: "check-paint", label: "What color the duct is painted", status: "needs-clarification" },
                    { id: "check-monitoring", label: "How the duct detector's alarm/trouble state is monitored and reported to the panel", status: "best-answer" },
                    { id: "check-headcount", label: "How many employees work in the building", status: "needs-clarification" },
                    { id: "assume-module", label: "Assume a generic module will work and move on", status: "needs-clarification" }
                ],
                correct: "check-monitoring",
                explanation: "Start with how the detector's state gets to the panel — that's the actual troubleshooting question here."
            },
            missingInformation: {
                prompt: "What would confirm your answer?",
                type: "single",
                options: [
                    { id: "guess-based", label: "Guessing based on what similar projects usually use", status: "needs-clarification" },
                    { id: "check-docs", label: "Reviewing the panel programming or riser diagram to see the monitored input for that detector", status: "best-answer" },
                    { id: "ask-color", label: "Asking the customer what color wire was used", status: "needs-clarification" },
                    { id: "assume-module2", label: "Assuming a module already works without checking", status: "needs-clarification" }
                ],
                correct: "check-docs",
                explanation: "The panel programming or riser tells you what's actually monitored, instead of guessing."
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
                explanation: "Do not assume a specific monitor/input interface is compatible without checking the system design and manufacturer documentation. Also recognize what the detector already provides — for example, a SIGA-DDOS includes its own onboard auxiliary relay, so a separate external relay for that same function shouldn't be automatically added, though other applications may still need one."
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
            id: "customer-substitute-request",
            title: "Customer Substitute Request",
            shortTitle: "Substitute Request",
            difficulty: "Intermediate",
            customerRole: "Contractor",
            customerMessage: `Our supplier is out of stock on the specified ${getVerifiedOrFallback(verifiedReferences.pullStation, "pull station")}. Can we substitute a different manufacturer's pull station instead?`,
            skills: ["Product Verification", "Compatibility Judgment", "Customer Communication"],
            whatYouKnow: {
                prompt: "What is the customer actually asking you to decide?",
                type: "single",
                options: [
                    { id: "cheaper", label: "Whether the substitute is cheaper than the specified device", status: "needs-clarification" },
                    { id: "compatible", label: "Whether a different manufacturer's device is compatible with the specified system and application", status: "best-answer" },
                    { id: "discontinued", label: "Whether the original device has been discontinued", status: "needs-clarification" },
                    { id: "brand-preference", label: "Whether the customer simply prefers a different brand", status: "needs-clarification" }
                ],
                correct: "compatible",
                explanation: "A substitution request is a compatibility question first. Price, brand preference, or availability don't answer whether the device will actually work on this system."
            },
            missingInformation: {
                prompt: "Which response is the safest next action?",
                type: "single",
                options: [
                    { id: "reject-auto", label: "Reject any substitute automatically, no exceptions", status: "needs-clarification" },
                    { id: "approve-now", label: "Approve the substitute now since the customer is in a hurry", status: "needs-clarification" },
                    { id: "customer-decides", label: "Let the customer decide since it's their project", status: "needs-clarification" },
                    { id: "verify-first", label: "Tell the customer you'll verify compatibility and listing before approving", status: "best-answer" }
                ],
                correct: "verify-first",
                explanation: "Sales Support can be responsive without approving something unverified. Confirming compatibility first protects the customer and the project."
            },
            investigate: {
                prompt: "Which of these must be verified before approving a substitute?",
                type: "multi",
                options: [
                    { id: "listing-compatibility", label: "Listing/compatibility with the specified fire alarm system", importance: "A substitute must be compatible with the specified system, not just \"a pull station.\"" },
                    { id: "mounting-fit", label: "Mounting/physical fit with existing back boxes or trim", importance: "Physical fit affects whether the substitute can actually be installed as specified." },
                    { id: "lower-price", label: "Whether it's a lower price", importance: "Price doesn't determine whether a substitute is technically acceptable." },
                    { id: "brand-liked", label: "Whether the customer has used the brand before", importance: "Familiarity isn't the same as verified compatibility." }
                ],
                required: ["listing-compatibility", "mounting-fit"]
            },
            productFunction: {
                prompt: "The substitute pull station is UL listed for fire alarm use in general, but you haven't confirmed it works with the specified addressable system. What should you do?",
                type: "single",
                options: [
                    { id: "approve-listed", label: "Approve it since it's UL listed for fire alarm use", status: "needs-clarification" },
                    { id: "reject-outright", label: "Reject it outright without checking anything further", status: "needs-clarification" },
                    { id: "confirm-system-compat", label: "Confirm compatibility with the specified system/manufacturer documentation before approving", status: "best-answer" },
                    { id: "installer-decides", label: "Approve it and let the installer sort out compatibility", status: "needs-clarification" }
                ],
                correct: "confirm-system-compat",
                explanation: "General UL listing doesn't guarantee compatibility with a specific addressable system. That still has to be verified against manufacturer documentation."
            },
            responseBuilder: {
                intro: "Build the response you would send back about the substitute request.",
                options: [
                    { id: "verify-first-rb", label: "I'd let you know we need to verify compatibility with the specified system before approving a substitute.", required: true },
                    { id: "confirm-listing", label: "I'd confirm listing and any approvals required by the project specifications.", required: true },
                    { id: "approve-any-instock", label: "I can approve any substitute that happens to be in stock right away.", required: false, incorrect: true },
                    { id: "follow-up", label: "I'll follow up as soon as compatibility is confirmed.", required: true }
                ]
            },
            reviewPrompt: "How confident are you in holding off on approval until compatibility is verified?"
        },
        {
            id: "drawing-bom-discrepancy",
            title: "Drawing vs. BOM Discrepancy",
            shortTitle: "Quantity Discrepancy",
            difficulty: "Advanced",
            customerRole: "Estimator (Internal)",
            customerMessage: `The riser drawing shows 14 second-floor smoke detectors (specified as ${getVerifiedOrFallback(verifiedReferences.smokeDetector, "smoke detector")}), but the BOM/quote request lists 18. Which number should we quote?`,
            skills: ["Drawing Review", "BOM Accuracy", "Attention to Detail"],
            scenarioMetadata: [
                "Riser drawing: 14 second-floor smoke detectors",
                "BOM/quote request: 18 second-floor smoke detectors",
                "Drawing date: 3/12",
                "BOM request date: 3/20"
            ],
            whatYouKnow: {
                prompt: "Which quantity should you trust at this point?",
                type: "single",
                options: [
                    { id: "trust-18", label: "18, because that's what the BOM request lists", status: "needs-clarification" },
                    { id: "trust-14", label: "14, because that's what the drawing shows", status: "needs-clarification" },
                    { id: "split", label: "Split the difference and quote 16", status: "needs-clarification" },
                    { id: "confirm-current", label: "Neither yet — confirm which one reflects the current design before quoting", status: "best-answer" }
                ],
                correct: "confirm-current",
                explanation: "A newer document isn't automatically correct, and an older one isn't automatically outdated. The discrepancy has to be resolved against the current design basis, not guessed."
            },
            missingInformation: {
                prompt: "What should you request from the estimator before finalizing the BOM?",
                type: "single",
                options: [
                    { id: "quote-18-now", label: "Nothing — just quote 18 since it's the newer number", status: "needs-clarification" },
                    { id: "revision-basis", label: "The drawing revision number/date the BOM request was based on", status: "best-answer" },
                    { id: "quote-14-now", label: "Nothing — just quote 14 since it's on the drawing", status: "needs-clarification" },
                    { id: "customer-floor-pref", label: "The customer's preferred floor number", status: "needs-clarification" }
                ],
                correct: "revision-basis",
                explanation: "Knowing which drawing revision the BOM was built from tells you whether the higher count reflects a real design change or a takeoff error."
            },
            investigate: {
                prompt: "If the BOM was based on a newer drawing revision, what should you check to confirm that?",
                type: "single",
                options: [
                    { id: "vendor-stock", label: "Whether the vendor has 18 units in stock", status: "needs-clarification" },
                    { id: "device-price", label: "The unit price of the smoke detectors", status: "needs-clarification" },
                    { id: "revision-match", label: "That the drawing revision date/number matches the basis used for the BOM", status: "best-answer" },
                    { id: "customer-mood", label: "How the customer feels about the extra units", status: "needs-clarification" }
                ],
                correct: "revision-match",
                explanation: "Matching the revision confirms the higher count is a real design update, not a takeoff mistake carried into the BOM."
            },
            productFunction: {
                prompt: "What is the risk if you quote the wrong quantity without resolving the discrepancy?",
                type: "single",
                options: [
                    { id: "no-risk", label: "No risk — quotes are always just estimates", status: "needs-clarification" },
                    { id: "shortchange-project", label: "Under-quoting could shortchange the project and lead to a costly change order later", status: "best-answer" },
                    { id: "looks-professional", label: "Over-quoting always looks more professional", status: "needs-clarification" },
                    { id: "estimator-fixes", label: "The estimator will just fix it later during ordering", status: "needs-clarification" }
                ],
                correct: "shortchange-project",
                explanation: "An unresolved quantity discrepancy either shortchanges the project or inflates it — both cost real money and trust later."
            },
            responseBuilder: {
                intro: "Build the note you'd send back about this discrepancy.",
                options: [
                    { id: "flag-discrepancy", label: "I'd flag the drawing vs. BOM discrepancy before finalizing the quote.", required: true },
                    { id: "confirm-revision", label: "I'd confirm which drawing revision the BOM request is based on.", required: true },
                    { id: "quote-bigger-safe", label: "I'd just quote the larger number to be safe, without asking.", required: false, incorrect: true },
                    { id: "note-for-estimator", label: "I'd note the discrepancy in the project file for the estimator to resolve.", required: true }
                ]
            },
            reviewPrompt: "How confident are you in resolving this discrepancy before quoting?"
        },
        {
            id: "rush-quote-request",
            title: "Rush Quote Request",
            shortTitle: "Rush Quote",
            difficulty: "Advanced",
            customerRole: "Customer",
            customerMessage: "I need a quote in the next hour — just send me pricing for a basic fire alarm system for a small office. I don't have drawings ready yet.",
            skills: ["Prioritization", "Professional Judgment", "Customer Communication"],
            whatYouKnow: {
                prompt: "What should you do FIRST?",
                type: "single",
                options: [
                    { id: "quote-generic-now", label: "Quote a generic system immediately so you don't miss the deadline", status: "needs-clarification" },
                    { id: "refuse-no-drawings", label: "Tell the customer no quote is possible without drawings", status: "needs-clarification" },
                    { id: "explain-whats-possible", label: "Explain what you can responsibly provide in the time available and what's still needed", status: "best-answer" },
                    { id: "wait-for-drawings", label: "Wait to respond at all until drawings arrive", status: "needs-clarification" }
                ],
                correct: "explain-whats-possible",
                explanation: "Being responsive and being accurate aren't opposites. Say what you can do now, and what you still need."
            },
            missingInformation: {
                prompt: "Which response best balances urgency and accuracy?",
                type: "single",
                options: [
                    { id: "exact-10-min", label: "\"Sure, I'll have an exact quote for you in 10 minutes.\"", status: "needs-clarification" },
                    { id: "no-drawings-no-help", label: "\"I can't help without drawings.\"", status: "needs-clarification" },
                    { id: "whenever-time", label: "\"I'll get to it whenever I have time.\"", status: "needs-clarification" },
                    { id: "budgetary-with-assumptions", label: "\"I can send a preliminary budgetary estimate now, but I'll need basic square footage and occupancy info to firm it up.\"", status: "best-answer" }
                ],
                correct: "budgetary-with-assumptions",
                explanation: "This response is honest about what's possible right now and tells the customer exactly what would make the number more accurate."
            },
            investigate: {
                prompt: "What is the minimum information needed to give even a rough budgetary number?",
                type: "single",
                options: [
                    { id: "part-numbers", label: "Exact device part numbers", status: "needs-clarification" },
                    { id: "any-number-works", label: "Nothing — any number works for a rough estimate", status: "needs-clarification" },
                    { id: "sqft-occupancy", label: "Approximate square footage and occupancy type", status: "best-answer" },
                    { id: "email-signature", label: "The customer's company letterhead", status: "needs-clarification" }
                ],
                correct: "sqft-occupancy",
                explanation: "Square footage and occupancy type are the minimum inputs that make even a rough budgetary range meaningful."
            },
            productFunction: {
                prompt: "What should you avoid doing under a tight deadline?",
                type: "single",
                options: [
                    { id: "ask-clarifying", label: "Asking clarifying questions", status: "needs-clarification" },
                    { id: "promise-firm-quote", label: "Promising a firm, itemized quote with no project basis", status: "best-answer" },
                    { id: "state-assumptions", label: "Providing a budgetary range with clearly stated assumptions", status: "needs-clarification" },
                    { id: "say-whats-needed", label: "Telling the customer what information you still need", status: "needs-clarification" }
                ],
                correct: "promise-firm-quote",
                explanation: "Promising exact pricing with no project basis sets an expectation you can't responsibly meet — the other three are all good practice, not mistakes."
            },
            responseBuilder: {
                intro: "Build the response you'd send back right now.",
                options: [
                    { id: "budgetary-range", label: "I'd provide a budgetary range based on typical small-office systems, with stated assumptions.", required: true },
                    { id: "final-depends", label: "I'd note that final pricing depends on drawings/specifications.", required: true },
                    { id: "ask-basics", label: "I'd ask for basic square footage and occupancy to firm up the range.", required: true },
                    { id: "exact-now", label: "I'd send an exact itemized quote right now with no details.", required: false, incorrect: true }
                ]
            },
            reviewPrompt: "How confident are you in this response given the time pressure?"
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
        scenarioProgressLabel: document.getElementById("scenarioProgressLabel"),
        completedCountBadge: document.getElementById("completedCountBadge"),
        scenarioCards: document.getElementById("scenarioCards"),
        activeScenarioTitle: document.getElementById("activeScenarioTitle"),
        activeScenarioDifficulty: document.getElementById("activeScenarioDifficulty"),
        scenarioStepShell: document.getElementById("scenarioStepShell"),
        prevScenarioButton: document.getElementById("prevScenarioButton"),
        nextScenarioButton: document.getElementById("nextScenarioButton"),
        finalReadinessPanel: document.getElementById("finalReadinessPanel"),
        readinessLevelBadge: document.getElementById("readinessLevelBadge"),
        overallReadinessScore: document.getElementById("overallReadinessScore"),
        overallCompletedScenarios: document.getElementById("overallCompletedScenarios"),
        skillBreakdownGrid: document.getElementById("skillBreakdownGrid")
    };

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

        el.prevScenarioButton.addEventListener("click", () => moveToScenario(-1));
        el.nextScenarioButton.addEventListener("click", () => moveToScenario(1));
    }

    function moveToScenario(direction) {
        const index = scenarioDefinitions.findIndex((scenario) => scenario.id === moduleState.selectedScenarioId);
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= scenarioDefinitions.length) {
            return;
        }
        moduleState.selectedScenarioId = scenarioDefinitions[targetIndex].id;
        updateHeader();
        renderScenarioCards();
        renderActiveScenario();
    }

    function renderScenarioCards() {
        el.scenarioCards.innerHTML = scenarioDefinitions.map((scenario, index) => {
            const scenarioState = getScenarioState(scenario.id);
            const isActive = moduleState.selectedScenarioId === scenario.id;
            const complete = scenarioState.completed;
            return `
                <article class="scenario-card ${isActive ? "is-active" : ""} ${complete ? "is-complete" : ""}">
                    <div class="scenario-card-top">
                        <div>
                            <p class="message-label">Scenario ${index + 1} · ${escapeHTML(scenario.difficulty)}</p>
                            <h3>${escapeHTML(scenario.title)}</h3>
                        </div>
                        <span class="status-chip ${complete ? "good" : "warn"}">${complete ? `${scenarioState.score.total}/100` : "In Progress"}</span>
                    </div>
                    <p>${escapeHTML(scenario.customerMessage)}</p>
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

        el.completedCountBadge.textContent = `${getCompletedScenarioCount()} of 5 complete`;
    }

    function updateHeader() {
        const activeScenario = getSelectedScenario();
        const index = scenarioDefinitions.findIndex((scenario) => scenario.id === activeScenario.id);
        el.scenarioProgressLabel.textContent = `Scenario ${index + 1} of 5`;
        el.activeScenarioTitle.textContent = activeScenario.title;
        el.activeScenarioDifficulty.textContent = activeScenario.difficulty;
        el.prevScenarioButton.disabled = index === 0;
        el.nextScenarioButton.disabled = index === scenarioDefinitions.length - 1;
    }

    function renderActiveScenario() {
        const scenario = getSelectedScenario();
        const scenarioState = getScenarioState(scenario.id);
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
                    ${question.type === "single" ? renderSingleChoiceQuestion(question, value, feedback) : renderMultiChoiceQuestion(question, value, feedback)}
                    ${feedback ? `<div class="feedback-box ${escapeHTML(feedback.type)}">${escapeHTML(feedback.message)}</div>` : ""}
                    ${question.type === "multi" ? renderImportanceLegend(question) : ""}
                </article>

                <div class="panel-actions">
                    <button class="btn btn-primary" type="button" data-check-question="${escapeHTML(key)}">${feedback ? "Re-check Step" : "Check Step"}</button>
                    ${feedback ? `<button class="btn btn-secondary" type="button" data-step-advance="${scenarioState.currentStep + 1}">Continue →</button>` : ""}
                </div>
            </section>
        `;
    }

    function renderSingleChoiceQuestion(question, selectedValue, feedback) {
        const revealed = Boolean(feedback);
        return `
            <div class="choice-grid" role="group" aria-label="Answer options">
                ${question.options.map((option) => {
                    const isSelected = selectedValue === option.id;
                    const isCorrectOption = option.id === question.correct;
                    let stateClass = isSelected ? "selected" : "";
                    let stateLabel = isSelected ? "Selected" : "";
                    const isAlsoReasonable = option.status === "also-reasonable" || (Array.isArray(question.alsoReasonable) && question.alsoReasonable.includes(option.id));
                    if (revealed) {
                        if (isSelected && isCorrectOption) {
                            stateClass += " correct";
                            stateLabel = "Selected · Correct";
                        } else if (isSelected && isAlsoReasonable) {
                            stateClass += " also-reasonable";
                            stateLabel = "Selected · Also reasonable";
                        } else if (isSelected && !isCorrectOption) {
                            stateClass += " incorrect";
                            stateLabel = "Selected · Not the best answer";
                        } else if (isCorrectOption) {
                            stateClass += " correct-answer";
                            stateLabel = "Best answer";
                        }
                    }
                    return `
                    <button type="button" class="choice-button ${stateClass}" data-single-choice="${escapeHTML(option.id)}" aria-pressed="${isSelected}">
                        <span class="choice-button-label">${escapeHTML(option.label)}</span>
                        ${stateLabel ? `<span class="choice-state-tag">${escapeHTML(stateLabel)}</span>` : ""}
                    </button>
                `;
                }).join("")}
            </div>
        `;
    }

    function renderMultiChoiceQuestion(question, selectedValues, feedback) {
        const revealed = Boolean(feedback);
        const requiredSet = new Set(question.required || []);
        const optionalValidSet = new Set(question.optionalValid || []);
        return `
            <div class="multi-choice-grid" role="group" aria-label="Answer options">
                ${question.options.map((option) => {
                    const isSelected = (selectedValues || []).includes(option.id);
                    const isRequired = requiredSet.has(option.id);
                    const isOptionalValid = optionalValidSet.has(option.id);
                    let stateClass = isSelected ? "selected" : "";
                    let stateLabel = isSelected ? "Selected" : "";
                    if (revealed) {
                        if (isSelected && isRequired) {
                            stateClass += " correct";
                            stateLabel = "Selected · Useful";
                        } else if (isSelected && isOptionalValid) {
                            stateClass += " also-reasonable";
                            stateLabel = "Selected · Also valid";
                        } else if (isSelected && !isRequired && !isOptionalValid) {
                            stateClass += " incorrect";
                            stateLabel = "Selected · Not needed";
                        } else if (isRequired) {
                            stateClass += " correct-answer";
                            stateLabel = "Missed · Should have been checked";
                        }
                    }
                    return `
                    <button type="button" class="multi-choice-button ${stateClass}" data-multi-choice="${escapeHTML(option.id)}" aria-pressed="${isSelected}">
                        <span class="choice-button-label">${escapeHTML(option.label)}</span>
                        ${stateLabel ? `<span class="choice-state-tag">${escapeHTML(stateLabel)}</span>` : ""}
                    </button>
                `;
                }).join("")}
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
        const feedback = scenarioState.feedback.responseBuilder;

        return `
            <section class="workspace-section">
                <div class="workspace-step-header">
                    <p class="message-label">Step 6 of 8</p>
                    <h3 class="workspace-title">Build Your Response</h3>
                    <p>${escapeHTML(scenario.responseBuilder.intro)}</p>
                </div>

                <article class="decision-card">
                    ${renderResponseChoices(scenario.responseBuilder, selectedIds, feedback)}
                    ${feedback ? `<div class="feedback-box ${escapeHTML(feedback.type)}">${escapeHTML(feedback.message)}</div>` : ""}
                </article>

                ${scenario.requiresBomBuilder ? renderBomBuilderStep(scenarioState) : ""}

                <div class="panel-actions">
                    <button class="btn btn-primary" type="button" data-check-response>${feedback ? "Re-check Response" : "Check Response"}</button>
                    ${feedback ? `<button class="btn btn-secondary" type="button" data-step-advance="7">Continue →</button>` : ""}
                </div>
            </section>
        `;
    }

    function renderResponseChoices(responseBuilder, selectedIds, feedback) {
        const revealed = Boolean(feedback);
        return `
            <div class="multi-choice-grid" role="group" aria-label="Response elements">
                ${responseBuilder.options.map((option) => {
                    const isSelected = selectedIds.includes(option.id);
                    let stateClass = isSelected ? "selected" : "";
                    let stateLabel = isSelected ? "Selected" : "";
                    if (revealed) {
                        if (isSelected && option.required) {
                            stateClass += " correct";
                            stateLabel = "Selected · Good addition";
                        } else if (isSelected && option.incorrect) {
                            stateClass += " incorrect";
                            stateLabel = "Selected · Leave this out";
                        } else if (option.required) {
                            stateClass += " correct-answer";
                            stateLabel = "Missed · Should be included";
                        }
                    }
                    return `
                    <button type="button" class="multi-choice-button ${stateClass}" data-response-choice="${escapeHTML(option.id)}" aria-pressed="${isSelected}">
                        <span class="choice-button-label">${escapeHTML(option.label)}</span>
                        ${stateLabel ? `<span class="choice-state-tag">${escapeHTML(stateLabel)}</span>` : ""}
                    </button>
                `;
                }).join("")}
            </div>
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
                goTraining();
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
                scenarioState.feedback[activeKey] = null;
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
                scenarioState.feedback[activeKey] = null;
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
        el.scenarioStepShell.querySelectorAll("[data-response-choice]").forEach((button) => {
            button.addEventListener("click", () => {
                const optionId = button.getAttribute("data-response-choice");
                const current = scenarioState.responseBuilder.selected;
                if (current.includes(optionId)) {
                    scenarioState.responseBuilder.selected = current.filter((id) => id !== optionId);
                } else {
                    scenarioState.responseBuilder.selected = [...current, optionId];
                }
                scenarioState.feedback.responseBuilder = null;
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
                    message: `Also reasonable, but not the strongest answer here. ${question.explanation}`,
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
                message: `Also reasonable, but you're missing: ${formatMissingItems(question, selectedValues)}.`,
                ratio
            };
        }

        return {
            type: "incorrect",
            message: `Not enough yet. Still missing: ${formatMissingItems(question, selectedValues)}.`,
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
        el.overallCompletedScenarios.textContent = `${completed.length} / 5`;
        el.readinessLevelBadge.textContent = readinessLevel;

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
        const selectedOptions = scenario.responseBuilder.options.filter((option) => responseIds.includes(option.id));
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
