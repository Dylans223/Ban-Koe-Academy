// ===============================================
// Ban-Koe Academy
// Takeoff Training Simulator
// ===============================================

const takeoffScenario = {
    id: "small-office-fire-alarm-upgrade",
    name: "Small Office Fire Alarm Upgrade",
    difficulty: "Beginner",
    description: "You are preparing a basic material takeoff for a small two-story office building with 48 addressable devices total. This scenario is intentionally sized so the Edwards iO64 is a valid small-building option because it supports up to 64 devices and its capacity cannot be expanded. EST4 remains available when the project requires a different platform, but the device count here points to iO64.",
    requirements: [
        "1 fire alarm control panel",
        "48 addressable devices total",
        "2 floors",
        "10 smoke detectors per floor",
        "First floor: 2 single-action manual pull stations and 1 double-action manual pull station",
        "Second floor: 2 single-action manual pull stations",
        "4 wall-mounted low-frequency horn-strobes per floor",
        "The notification drawing specifies G4LFV appliances on 4-inch octagon boxes",
        "A separate ordinary wall horn-strobe schedule specifies red housing with FIRE marking at 7 new locations",
        "1 duct smoke detector",
        "Use one monitor module or input interface for the duct detector",
        "Use one control or relay interface for HVAC shutdown"
    ],
    identificationQuestions: [
        {
            id: "panel-selection-io64",
            requirement: "Match the project size to the correct control platform.",
            question: "Your project has 48 addressable devices. Which Edwards panel should you consider for this small-building project?",
            options: ["iO64", "iO1000", "EST4", "Edge Series"],
            answer: "iO64",
            explanation: "Correct. The iO64 supports up to 64 devices and its capacity cannot be expanded, which fits this 48-device project. The iO1000 is the expandable option for larger systems, while EST4 is not automatically the best fit for every small project."
        },
        {
            id: "smoke-detection",
            requirement: "Detect smoke throughout the occupied office areas.",
            question: "Select the correct device for smoke detection.",
            options: ["Smoke detector", "Pull station", "Horn/strobe", "Relay module"],
            answer: "Smoke detector",
            explanation: "Correct. Smoke detectors are initiating devices used to detect smoke and send an alarm condition to the fire alarm system."
        },
        {
            id: "single-action-manual-activation",
            requirement: "The first-floor drawing notes specify single-action manual initiating stations at two exit locations.",
            question: "Which exact device should be included for those two locations?",
            options: ["SIGA-270 Single Action Intelligent Pull Station", "SIGA-278 Double Action Intelligent Pull Station", "SIGA-CC1 Single Input Signal Module", "SIGA-CT1 Single Input Module"],
            answer: "SIGA-270 Single Action Intelligent Pull Station",
            explanation: "Correct. The verified Edwards SIGA-270 is the single-action intelligent pull station, so the takeoff needs two SIGA-270 devices for the specified first-floor locations."
        },
        {
            id: "double-action-manual-activation",
            requirement: "The first-floor drawing notes specify one double-action manual initiating station at a designated exit location.",
            question: "Which exact device should be included for that location?",
            options: ["SIGA-278 Double Action Intelligent Pull Station", "SIGA-270 Single Action Intelligent Pull Station", "SIGA-CC1 Single Input Signal Module", "SIGA-CR Control Relay Module"],
            answer: "SIGA-278 Double Action Intelligent Pull Station",
            explanation: "Correct. The verified Edwards SIGA-278 is the double-action intelligent pull station, so the takeoff needs one SIGA-278 device for the specified location."
        },
        {
            id: "audible-visual",
            requirement: "Provide wall-mounted 520 Hz low-frequency audible and visual notification throughout the building.",
            question: "The notification drawing specifies a Genesis LED low-frequency horn-strobe. Which exact product should be included?",
            options: ["G4LF", "G4LFV", "GCS ceiling speaker-strobe", "G1 compact notification device"],
            answer: "G4LFV",
            explanation: "Correct. G4LFV is the verified Genesis LED wall-mount low-frequency horn-strobe. G4LF is the distinct horn-only model."
        },
        {
            id: "g1-wall-horn-strobe",
            requirement: "A separate notification schedule specifies ordinary wall-mounted audible and visual notification with red housing and FIRE marking, without a low-frequency requirement.",
            question: "Which exact G1 product should be included for those locations?",
            options: ["G1ARF", "G1VRF", "G1AVRF", "G4LFV"],
            answer: "G1AVRF",
            explanation: "Correct. G1AV is the wall horn-strobe family, R is red housing, and F is FIRE marking. G4LFV remains the correct choice only for the separately specified low-frequency schedule."
        },
        {
            id: "duct-smoke",
            requirement: "Detect smoke in the HVAC ductwork.",
            question: "Select the correct device for duct smoke detection.",
            options: ["Duct smoke detector", "Pull station", "Control panel", "Speaker"],
            answer: "Duct smoke detector",
            explanation: "Correct. Duct smoke detectors are used to detect smoke inside air handling systems and often tie into HVAC shutdown or alarm logic."
        },
        {
            id: "hvac-interface",
            requirement: "Shut down HVAC equipment when required by the fire alarm sequence.",
            question: "Select the correct control function for HVAC shutdown.",
            options: ["Control or relay interface", "Smoke detector", "Notification appliance", "Manual station"],
            answer: "Control or relay interface",
            explanation: "Correct. HVAC shutdown typically uses a control or relay function so the panel can operate the connected equipment safely and as designed."
        }
    ],
    quantityQuestions: [
        {
            id: "easy-single-action-drawing",
            difficulty: "Easy",
            drawing: "Fire alarm drawing FP-1 shows five new single-action manual pull-station locations on Floor 1: Main Entrance, East Exit, Stairwell A, Loading Exit, and Office Lobby. No existing pull stations are marked at these locations.",
            question: "Extract the new BOM line from the drawing.",
            lines: [{ id: "easy-single-line", label: "Single-action pull stations", expectedProduct: "SIGA-270 Single Action Intelligent Pull Station", expectedQuantity: 5 }],
            explanation: "Five new single-action locations require SIGA-270 quantity 5."
        },
        {
            id: "g1-wall-horn-strobe-quantity",
            difficulty: "Medium",
            drawing: "The ordinary wall horn-strobe schedule identifies seven new locations: Floor 1 Main Entrance, East Exit, Stairwell A, and Floor 2 West Exit, East Exit, Conference Hall, and Loading Exit. The specification calls for red housing with FIRE marking and does not call for low-frequency output.",
            question: "Extract the G1 BOM line from the drawing.",
            lines: [{ id: "g1-wall-horn-strobe-line", label: "G1 wall horn-strobes", expectedProduct: "G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe", expectedQuantity: 7 }],
            rememberedKeys: [{ key: "g1-wall-horn-strobe-quantity", value: 7 }],
            explanation: "Seven ordinary wall horn-strobe locations with red housing and FIRE marking require G1AVRF quantity 7."
        },
        {
            id: "smoke-quantity",
            question: "Enter the total number of smoke detectors required for 10 per floor across 2 floors.",
            answer: 20,
            explanation: "10 detectors × 2 floors = 20 detectors"
        },
        {
            id: "single-pull-quantity",
            difficulty: "Medium",
            drawing: "Drawing FP-1 identifies four new single-action manual pull-station locations: Floor 1 Main Entrance and East Exit; Floor 2 West Exit and East Exit. These locations are marked as new work.",
            question: "Extract the SIGA-270 BOM line from the drawing.",
            lines: [{ id: "single-pull-line", label: "Single-action pull stations", expectedProduct: "SIGA-270 Single Action Intelligent Pull Station", expectedQuantity: 4 }],
            rememberedKeys: [{ key: "single-pull-quantity", value: 4 }],
            explanation: "The drawing has two new single-action locations on each floor, so the SIGA-270 quantity is 4."
        },
        {
            id: "double-pull-quantity",
            difficulty: "Medium",
            drawing: "Drawing FP-1 identifies one new double-action manual pull-station location at Floor 1 Stairwell Exit. The note calls for a double-action station.",
            question: "Extract the SIGA-278 BOM line from the drawing.",
            lines: [{ id: "double-pull-line", label: "Double-action pull stations", expectedProduct: "SIGA-278 Double Action Intelligent Pull Station", expectedQuantity: 1 }],
            rememberedKeys: [{ key: "double-pull-quantity", value: 1 }],
            explanation: "The drawing has one new double-action location, so the SIGA-278 quantity is 1."
        },
        {
            id: "hard-mixed-existing-drawing",
            difficulty: "Hard",
            drawing: "Project FP-2 covers Buildings A and B. Building A Floor 1 has new single-action stations at Rooms 101 and 104 plus an existing station at Room 101 marked REMAIN. Building A Floor 2 has new single-action stations at Rooms 201, 204, and 208. Building B Floor 1 has new double-action stations at Rooms 110 and 118, and Building B Floor 2 has a new double-action station at Room 210. The title block, PO 48217, and customer contact block do not change the device count.",
            question: "Separate new work by device type and exclude the existing station marked REMAIN.",
            lines: [
                { id: "hard-single-line", label: "New single-action pull stations", expectedProduct: "SIGA-270 Single Action Intelligent Pull Station", expectedQuantity: 5 },
                { id: "hard-double-line", label: "New double-action pull stations", expectedProduct: "SIGA-278 Double Action Intelligent Pull Station", expectedQuantity: 3 }
            ],
            explanation: "The existing Room 101 station is excluded. The new work is SIGA-270 quantity 5 and SIGA-278 quantity 3."
        },
        {
            id: "horn-quantity",
            difficulty: "Medium",
            drawing: "The notification drawing specifies four G4LFV wall-mounted low-frequency horn-strobes per floor across two floors. The G4LFV product selection was established in the identification step.",
            question: "Extract the exact G4LFV BOM line from the drawing.",
            lines: [{ id: "g4lfv-quantity-line", label: "Low-frequency wall horn-strobes", expectedProduct: "G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe", expectedQuantity: 8 }],
            rememberedKeys: [{ key: "horn-quantity", value: 8 }],
            explanation: "Four G4LFV locations per floor × two floors = G4LFV quantity 8."
        },
        {
            id: "duct-quantity",
            question: "Enter the number of duct smoke detectors required.",
            answer: 1,
            explanation: "The project brief specifies 1 duct smoke detector."
        },
        {
            id: "panel-quantity",
            question: "Enter the number of fire alarm control panels required.",
            answer: 1,
            explanation: "The project brief specifies 1 fire alarm control panel."
        }
    ],
    relationshipQuestions: [
        {
            id: "duct-monitor",
            scenario: "The duct smoke detector needs to send its alarm condition to the fire alarm control panel.",
            question: "Select the module or function used to monitor the duct detector.",
            options: ["Monitor module / input interface", "Notification appliance circuit", "Speaker circuit", "Battery charger"],
            answer: "Monitor module / input interface",
            explanation: "Correct. A duct detector often needs a monitoring input or interface so its alarm or trouble state can be reported to the panel."
        },
        {
            id: "hvac-control",
            scenario: "The fire alarm system needs to shut down an HVAC unit when the appropriate fire condition occurs.",
            question: "Select the device or function used to provide the HVAC control interface.",
            options: ["Control or relay interface", "Smoke detector", "Manual pull station", "Display annunciator"],
            answer: "Control or relay interface",
            explanation: "Correct. HVAC shutdown generally uses a control or relay function. The exact module and wiring arrangement depend on the system design and project requirements."
        },
        {
            id: "door-holder",
            scenario: "A system needs to release a door holder during a fire alarm condition.",
            question: "Select the device or function used to release the door holder.",
            options: ["Control or relay interface", "Detector base", "Monitor-only circuit", "Smoke sensor"],
            answer: "Control or relay interface",
            explanation: "Correct. Door holder release is typically handled by a control or relay function so the release logic can respond to the fire alarm condition."
        },
        {
            id: "genesis-octagon-adapter",
            scenario: "The notification drawing specifies a G4LFV appliance mounted on a 4-inch octagon box.",
            question: "Which additional Genesis mounting component is required for this box relationship?",
            options: ["GOCT 4-inch octagon box adapter plate", "GRT-10 device/cover removal tool", "G4TR red trim plate", "G4RSB red surface-mount box"],
            answer: "GOCT 4-inch octagon box adapter plate",
            explanation: "Correct. GOCT is required when installing the G4LF/G4LFV appliance onto a 4-inch octagon box."
        }
    ],
    bomDefaults: [
        {
            category: "Control Panel",
            item: "EST4 Fire Alarm Control Panel",
            quantity: 1,
            key: "control-panel"
        },
        {
            category: "Initiating Device",
            item: "Signature Optica Smoke Detector",
            quantity: 20,
            key: "smoke-detector"
        },
        {
            category: "Initiating Device",
            item: "SIGA-270 Single Action Intelligent Pull Station",
            quantity: 4,
            key: "single-pull-station"
        },
        {
            category: "Initiating Device",
            item: "SIGA-278 Double Action Intelligent Pull Station",
            quantity: 1,
            key: "double-pull-station"
        },
        {
            category: "Notification",
            item: "G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe",
            quantity: 8,
            key: "horn-strobe"
        },
        {
            category: "Notification",
            item: "G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe",
            quantity: 7,
            key: "g1-wall-horn-strobe"
        },
        {
            category: "Module",
            item: "GRSW-10 Room-Side Wiring Plate",
            quantity: 1,
            key: "genesis-room-side-plate"
        },
        {
            category: "Accessories",
            item: "GOCT 4-Inch Octagon Box Adapter Plate",
            quantity: 8,
            key: "genesis-octagon-adapter"
        },
        {
            category: "Duct Detection",
            item: "Duct Smoke Detector",
            quantity: 1,
            key: "duct-detector"
        },
        {
            category: "Module",
            item: "Monitor or input interface for duct detector",
            quantity: 1,
            key: "duct-monitor"
        },
        {
            category: "Module",
            item: "Control or relay interface for HVAC shutdown",
            quantity: 1,
            key: "hvac-interface"
        }
    ]
};

const scoreWeights = {
    identification: 20,
    quantity: 30,
    relationships: 20,
    bom: 30
};

const scenarioState = {
    currentStep: 1,
    currentIdentificationIndex: 0,
    currentQuantityIndex: 0,
    currentRelationshipIndex: 0,
    bomItems: [],
    rememberedCounts: {},
    score: 0,
    identificationScore: 0,
    quantityScore: 0,
    relationshipScore: 0,
    bomScore: 0,
    reviewVisible: false,
    completed: false
};

const stepPanels = {
    1: document.getElementById("projectStep"),
    2: document.getElementById("identifyStep"),
    3: document.getElementById("quantityStep"),
    4: document.getElementById("relationshipStep"),
    5: document.getElementById("bomStep"),
    6: document.getElementById("resultsStep")
};

const beginTakeoffButton = document.getElementById("beginTakeoffButton");
const identifyQuestionArea = document.getElementById("identifyQuestionArea");
const quantityQuestionArea = document.getElementById("quantityQuestionArea");
const relationshipQuestionArea = document.getElementById("relationshipQuestionArea");
const bomCategory = document.getElementById("bomCategory");
const bomItem = document.getElementById("bomItem");
const bomQuantity = document.getElementById("bomQuantity");
const addBomItemButton = document.getElementById("addBomItemButton");
const bomTableBody = document.getElementById("bomTableBody");
const bomEmptyState = document.getElementById("bomEmptyState");
const rememberedCountsBody = document.getElementById("rememberedCountsBody");
const addRememberedCountsButton = document.getElementById("addRememberedCountsButton");
const submitTakeoffButton = document.getElementById("submitTakeoffButton");
const resetTakeoffButton = document.getElementById("resetTakeoffButton");
const resultsScore = document.getElementById("resultScore");
const resultsCorrectItems = document.getElementById("resultCorrectItems");
const resultsIncorrectItems = document.getElementById("resultIncorrectItems");
const resultsQuantityAccuracy = document.getElementById("resultQuantityAccuracy");
const resultsReview = document.getElementById("resultsReview");
const finalScoreBadge = document.getElementById("finalScoreBadge");
const reviewMistakesButton = document.getElementById("reviewMistakesButton");
const tryAgainButton = document.getElementById("tryAgainButton");
const returnTrainingButton = document.getElementById("returnTrainingButton");
const nextModuleButton = document.getElementById("nextModuleButton");
const liveScoreValue = document.getElementById("liveScoreValue");
const liveScoreNote = document.getElementById("liveScoreNote");
const topProgressBar = document.getElementById("topProgressBar");
const topProgressValue = document.getElementById("topProgressValue");
const stepIndicator = document.getElementById("stepIndicator");
const moduleStepList = document.getElementById("moduleStepList");
const moduleObjectiveChip = document.getElementById("moduleObjectiveChip");
const moduleObjectiveTitle = document.getElementById("moduleObjectiveTitle");
const moduleObjectiveText = document.getElementById("moduleObjectiveText");

const moduleSteps = [
    {
        label: "Project",
        chip: "Project Brief",
        title: "Understand the project requirements.",
        objective: "Your goal is to read the project scope and understand what you will need to identify before building the takeoff."
    },
    {
        label: "Identify",
        chip: "Identify Devices",
        title: "Identify which devices the project requires.",
        objective: "Your goal is to match each requirement to the correct fire alarm device before moving on to quantities."
    },
    {
        label: "Quantities",
        chip: "Determine Quantities",
        title: "Calculate the required material counts.",
        objective: "Your goal is to determine the total quantity required for each major device across the full project."
    },
    {
        label: "Relationships",
        chip: "System Relationships",
        title: "Recognize the related modules and interfaces.",
        objective: "Your goal is to identify when the system needs monitoring or control functions beyond the major field devices."
    },
    {
        label: "BOM",
        chip: "Build BOM",
        title: "Build the project material list.",
        objective: "Your goal is to turn the project requirements and remembered counts into an organized BOM."
    }
];

// Navigation is handled by global functions in navigation.js
// Add module-specific navigation if needed
function goSystemBuilder() {
    window.location.href = buildNavigationUrl("training/system-builder/index.html");
}

const bomCatalog = {
    "Control Panel": [
        { label: "EST4 Fire Alarm Control Panel", type: "verified" }
    ],
    "Initiating Device": [
        { label: "Signature Optica Smoke Detector", type: "verified" },
        { label: "SIGA-278 Double Action Intelligent Pull Station", type: "verified" },
        { label: "SIGA-270 Single Action Intelligent Pull Station", type: "verified" },
        { label: "Signature Optica Smoke and Heat Detector", type: "verified" }
    ],
    "Notification": [
        { label: "Genesis LED G4 Series Wall Mount Notification Devices", type: "verified" },
        { label: "G4LF Genesis LED Wall-Mount Low-Frequency Horn", type: "verified" },
        { label: "G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe", type: "verified" },
        { label: "G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe", type: "verified" },
        { label: "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes", type: "verified" },
        { label: "Genesis LED G1 Series Compact Notification Devices", type: "verified" }
    ],
    "Duct Detection": [
        { label: "Duct Smoke Detector", type: "generic" }
    ],
    "Module": [
        { label: "SIGA-CC1 Single Input Signal Module", type: "verified" },
        { label: "SIGA-CT1 Single Input Module", type: "verified" },
        { label: "Monitor or input interface for duct detector", type: "generic" },
        { label: "Control or relay interface for HVAC shutdown", type: "generic" },
        { label: "Control or relay interface for door holder release", type: "generic" }
    ],
    "Power": [
        { label: "System power supply / batteries", type: "generic" },
        { label: "Secondary power / battery set", type: "generic" }
    ],
    "Accessories": [
        { label: "GRSW-10 Room-Side Wiring Plate", type: "verified" },
        { label: "GOCT 4-Inch Octagon Box Adapter Plate", type: "verified" },
        { label: "GRT-10 Genesis LED Device/Cover Removal Tool", type: "verified" },
        { label: "G4TR Red G4 Trim Plate", type: "verified" },
        { label: "G4TW White G4 Trim Plate", type: "verified" },
        { label: "G4RSB Red 4-Inch Surface-Mount Box", type: "verified" },
        { label: "G4WSB White 4-Inch Surface-Mount Box", type: "verified" },
        { label: "Device labels and mounting accessories", type: "generic" },
        { label: "Mounting hardware and trim accessories", type: "generic" }
    ]
};

window.addEventListener("DOMContentLoaded", initializeTakeoffTraining);

function initializeTakeoffTraining() {
    beginTakeoffButton.addEventListener("click", beginTakeoffFlow);
    addBomItemButton.addEventListener("click", addBomItem);
    addRememberedCountsButton.addEventListener("click", addRememberedCountsToBom);
    submitTakeoffButton.addEventListener("click", submitTakeoff);
    resetTakeoffButton.addEventListener("click", resetScenario);
    reviewMistakesButton.addEventListener("click", scrollToResults);
    tryAgainButton.addEventListener("click", resetScenario);
    returnTrainingButton.addEventListener("click", goTraining);
    nextModuleButton.addEventListener("click", goSystemBuilder);

    bomCategory.addEventListener("change", renderBomItemOptions);
    renderBomCategoryOptions();
    renderBomItemOptions();
    renderIdentificationStep();
    renderQuantityStep();
    renderRelationshipStep();
    renderRememberedCounts();
    renderBomTable();
    updateStepState();
    updateScoreDisplay();
    updateProgressDisplay();
}

function renderModuleShell() {
    const visualStep = Math.min(scenarioState.currentStep, 5);
    moduleStepList.innerHTML = moduleSteps.map((step, index) => {
        const stepNumber = index + 1;
        const isComplete = scenarioState.currentStep === 6 ? true : stepNumber < visualStep;
        const isActive = scenarioState.currentStep !== 6 && stepNumber === visualStep;
        const icon = isComplete ? "✓" : isActive ? "●" : "○";
        return `<span class="module-step-item ${isComplete ? "is-complete" : isActive ? "is-active" : ""}"><span class="module-step-icon">${icon}</span>${stepNumber} ${step.label}</span>`;
    }).join("");

    const activeConfig = scenarioState.currentStep === 6
        ? {
            chip: "Review & Learn",
            title: "Review why your takeoff was correct or incorrect.",
            objective: "Your goal is to understand the result, review any missed items, and carry those lessons into the next module."
        }
        : moduleSteps[visualStep - 1];

    moduleObjectiveChip.textContent = activeConfig.chip;
    moduleObjectiveTitle.textContent = activeConfig.title;
    moduleObjectiveText.textContent = activeConfig.objective;
}

function beginTakeoffFlow() {
    scenarioState.currentStep = 2;
    updateStepState();
    scrollToStep(2);
}

function renderIdentificationStep() {
    identifyQuestionArea.innerHTML = takeoffScenario.identificationQuestions.map((question, index) => `
        <article class="question-card" data-identification-card="${question.id}">
            <div class="question-meta">
                <span class="badge">Question ${index + 1}</span>
                <span class="question-title">Identify the Device</span>
            </div>
            <p class="question-prompt"><strong>Requirement:</strong> ${question.requirement}</p>
            <p class="question-prompt"><strong>Question:</strong> ${question.question}</p>
            <div class="question-options">
                ${question.options.map((option) => `<button type="button" class="question-option" data-identification-option="${question.id}" data-option-value="${option}">${option}</button>`).join("")}
            </div>
            <div class="feedback-box hidden" data-identification-feedback="${question.id}"></div>
        </article>
    `).join("");

    identifyQuestionArea.querySelectorAll("[data-identification-option]").forEach((button) => {
        button.addEventListener("click", () => handleIdentificationAnswer(button));
    });
}

function handleIdentificationAnswer(button) {
    const questionId = button.getAttribute("data-identification-option");
    const selected = button.getAttribute("data-option-value");
    const questionIndex = takeoffScenario.identificationQuestions.findIndex((entry) => entry.id === questionId);
    const question = takeoffScenario.identificationQuestions[questionIndex];
    const feedback = identifyQuestionArea.querySelector(`[data-identification-feedback="${questionId}"]`);
    const isCorrect = selected === question.answer;

    identifyQuestionArea.querySelectorAll(`[data-identification-option="${questionId}"]`).forEach((optionButton) => {
        optionButton.disabled = true;
        optionButton.classList.remove("correct", "incorrect");
    });

    button.classList.add(isCorrect ? "correct" : "incorrect");

    feedback.classList.remove("hidden");
    feedback.className = `feedback-box ${isCorrect ? "correct" : "incorrect"}`;
    feedback.innerHTML = `
        <span class="feedback-label ${isCorrect ? "correct" : "incorrect"}">${isCorrect ? "Correct" : "Incorrect"}</span>
        <p>${question.explanation}</p>
        <button type="button" class="btn btn-secondary" data-next-question="identification" data-question-index="${questionIndex}">Continue →</button>
    `;

    if (isCorrect && !button.dataset.scored) {
        button.dataset.scored = "true";
        scenarioState.identificationScore += scoreWeights.identification / takeoffScenario.identificationQuestions.length;
        updateScoreState();
    }

    feedback.querySelector("[data-next-question='identification']").addEventListener("click", () => advanceQuestion("identification", questionIndex));
}

function renderQuantityStep() {
    quantityQuestionArea.innerHTML = takeoffScenario.quantityQuestions.map((question, index) => `
        <article class="quantity-card" data-quantity-card="${question.id}">
            <div class="question-meta">
                <span class="badge">Question ${index + 1}${question.difficulty ? ` · ${question.difficulty}` : ""}</span>
                <span class="question-title">Quantity Check</span>
            </div>
            ${question.drawing ? `<div class="drawing-note"><strong>Drawing / project information</strong><p>${question.drawing}</p></div>` : ""}
            <p class="question-prompt">${question.question}</p>
            ${question.lines ? question.lines.map((line) => `
                <div class="quantity-grid drawing-line" data-quantity-line="${line.id}">
                    <div class="field-group">
                        <label for="product-select-${line.id}">${line.label} · Product</label>
                        <select id="product-select-${line.id}">
                            <option value="">Select verified product</option>
                            <option value="SIGA-270 Single Action Intelligent Pull Station">SIGA-270 Single Action Intelligent Pull Station</option>
                            <option value="SIGA-278 Double Action Intelligent Pull Station">SIGA-278 Double Action Intelligent Pull Station</option>
                            <option value="G4LF Genesis LED Wall-Mount Low-Frequency Horn">G4LF Genesis LED Wall-Mount Low-Frequency Horn</option>
                            <option value="G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe">G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe</option>
                            <option value="G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe">G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe</option>
                        </select>
                    </div>
                    <div class="field-group">
                        <label for="quantity-input-${line.id}">${line.label} · Quantity</label>
                        <input id="quantity-input-${line.id}" type="text" inputmode="numeric" placeholder="Count locations">
                    </div>
                </div>
            `).join("") : `
                <div class="quantity-grid">
                    <div class="field-group">
                        <label for="quantity-input-${question.id}">Answer</label>
                        <input id="quantity-input-${question.id}" type="text" inputmode="numeric" placeholder="Enter quantity">
                    </div>
                </div>
            `}
            <button type="button" class="btn btn-primary" data-quantity-submit="${question.id}">Check Answer</button>
            <div class="feedback-box hidden" data-quantity-feedback="${question.id}"></div>
        </article>
    `).join("");

    quantityQuestionArea.querySelectorAll("[data-quantity-submit]").forEach((button) => {
        button.addEventListener("click", () => handleQuantityAnswer(button));
    });
}

function handleQuantityAnswer(button) {
    const questionId = button.getAttribute("data-quantity-submit");
    const questionIndex = takeoffScenario.quantityQuestions.findIndex((entry) => entry.id === questionId);
    const question = takeoffScenario.quantityQuestions[questionIndex];
    const feedback = quantityQuestionArea.querySelector(`[data-quantity-feedback="${questionId}"]`);
    const lineResults = question.lines
        ? question.lines.map((line) => {
            const product = document.getElementById(`product-select-${line.id}`).value;
            const quantity = normalizeQuantityInput(document.getElementById(`quantity-input-${line.id}`).value);
            return { line, product, quantity, isCorrect: product === line.expectedProduct && quantity === line.expectedQuantity };
        })
        : [{ line: null, product: "", quantity: normalizeQuantityInput(document.getElementById(`quantity-input-${questionId}`).value), isCorrect: normalizeQuantityInput(document.getElementById(`quantity-input-${questionId}`).value) === question.answer }];
    const isCorrect = lineResults.every((result) => result.isCorrect);

    feedback.classList.remove("hidden");
    feedback.className = `feedback-box ${isCorrect ? "correct" : "incorrect"}`;
    const expectedText = question.lines
        ? question.lines.map((line) => `${line.expectedProduct} — Qty ${line.expectedQuantity}`).join("<br>")
        : `Expected ${question.answer}`;
    feedback.innerHTML = isCorrect
        ? `<span class="feedback-label correct">Correct</span><p>${question.explanation}</p><button type="button" class="btn btn-secondary" data-next-question="quantity" data-question-index="${questionIndex}">Continue →</button>`
        : `<span class="feedback-label incorrect">Incorrect</span><p>${expectedText}. ${question.explanation}</p><button type="button" class="btn btn-secondary" data-next-question="quantity" data-question-index="${questionIndex}">Continue →</button>`;

    const scoreTarget = question.lines ? button.closest(".quantity-card") : document.getElementById(`quantity-input-${questionId}`);
    if (isCorrect && !scoreTarget.dataset.scored) {
        scoreTarget.dataset.scored = "true";
        scenarioState.quantityScore += scoreWeights.quantity / takeoffScenario.quantityQuestions.length;
        if (question.rememberedKeys) {
            question.rememberedKeys.forEach(({ key, value }) => { scenarioState.rememberedCounts[key] = value; });
        } else if (!question.lines) {
            scenarioState.rememberedCounts[questionId] = question.answer;
        }
        renderRememberedCounts();
        updateScoreState();
    }

    feedback.querySelector("[data-next-question='quantity']").addEventListener("click", () => advanceQuestion("quantity", questionIndex));
}

function renderRelationshipStep() {
    relationshipQuestionArea.innerHTML = takeoffScenario.relationshipQuestions.map((question, index) => `
        <article class="relationship-card" data-relationship-card="${question.id}">
            <div class="question-meta">
                <span class="badge">Scenario ${index + 1}</span>
                <span class="question-title">System Relationship</span>
            </div>
            <p class="question-prompt"><strong>Scenario:</strong> ${question.scenario}</p>
            <p class="question-prompt"><strong>Question:</strong> ${question.question}</p>
            <div class="question-options">
                ${question.options.map((option) => `<button type="button" class="question-option" data-relationship-option="${question.id}" data-option-value="${option}">${option}</button>`).join("")}
            </div>
            <div class="feedback-box hidden" data-relationship-feedback="${question.id}"></div>
        </article>
    `).join("");

    relationshipQuestionArea.querySelectorAll("[data-relationship-option]").forEach((button) => {
        button.addEventListener("click", () => handleRelationshipAnswer(button));
    });
}

function handleRelationshipAnswer(button) {
    const questionId = button.getAttribute("data-relationship-option");
    const selected = button.getAttribute("data-option-value");
    const questionIndex = takeoffScenario.relationshipQuestions.findIndex((entry) => entry.id === questionId);
    const question = takeoffScenario.relationshipQuestions[questionIndex];
    const feedback = relationshipQuestionArea.querySelector(`[data-relationship-feedback="${questionId}"]`);
    const isCorrect = selected === question.answer;

    relationshipQuestionArea.querySelectorAll(`[data-relationship-option="${questionId}"]`).forEach((optionButton) => {
        optionButton.disabled = true;
    });

    button.classList.add(isCorrect ? "correct" : "incorrect");
    feedback.classList.remove("hidden");
    feedback.className = `feedback-box ${isCorrect ? "correct" : "incorrect"}`;
    feedback.innerHTML = `
        <span class="feedback-label ${isCorrect ? "correct" : "incorrect"}">${isCorrect ? "Correct" : "Incorrect"}</span>
        <p>${question.explanation}</p>
        <button type="button" class="btn btn-secondary" data-next-question="relationship" data-question-index="${questionIndex}">Continue →</button>
    `;

    if (isCorrect && !button.dataset.scored) {
        button.dataset.scored = "true";
        scenarioState.relationshipScore += scoreWeights.relationships / takeoffScenario.relationshipQuestions.length;
        scenarioState.rememberedCounts[questionId] = 1;
        renderRememberedCounts();
        updateScoreState();
    }

    feedback.querySelector("[data-next-question='relationship']").addEventListener("click", () => advanceQuestion("relationship", questionIndex));
}

function renderBomCategoryOptions() {
    bomCategory.innerHTML = Object.keys(bomCatalog).map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderBomItemOptions() {
    const selectedCategory = bomCategory.value || Object.keys(bomCatalog)[0];
    bomItem.innerHTML = bomCatalog[selectedCategory].map((entry) => `<option value="${entry.label}">${entry.label}</option>`).join("");
    applyBomSuggestion();
}

function renderRememberedCounts() {
    if (!rememberedCountsBody) {
        return;
    }

    const rows = [
        { label: "Smoke detectors", count: scenarioState.rememberedCounts["smoke-quantity"] || 0 },
        { label: "SIGA-270 single-action pull stations", count: scenarioState.rememberedCounts["single-pull-quantity"] || 0 },
        { label: "SIGA-278 double-action pull stations", count: scenarioState.rememberedCounts["double-pull-quantity"] || 0 },
        { label: "G1AVRF wall horn-strobes", count: scenarioState.rememberedCounts["g1-wall-horn-strobe-quantity"] || 0 },
        { label: "G4LFV low-frequency wall horn-strobes", count: scenarioState.rememberedCounts["horn-quantity"] || 0 },
        { label: "Duct smoke detectors", count: scenarioState.rememberedCounts["duct-quantity"] || 0 },
        { label: "Fire alarm control panels", count: scenarioState.rememberedCounts["panel-quantity"] || 0 },
        { label: "Duct detector interface", count: scenarioState.rememberedCounts["duct-monitor"] || 0 },
        { label: "HVAC shutdown interface", count: scenarioState.rememberedCounts["hvac-interface"] || 0 }
    ];

    rememberedCountsBody.innerHTML = rows.map((row) => `
        <tr>
            <td>${row.label}</td>
            <td>${row.count}</td>
        </tr>
    `).join("");
}

function getBomSuggestedQuantity(item) {
    const suggestions = {
        "EST4 Fire Alarm Control Panel": scenarioState.rememberedCounts["panel-quantity"] || 1,
        "Signature Optica Smoke Detector": scenarioState.rememberedCounts["smoke-quantity"] || 20,
        "SIGA-278 Double Action Intelligent Pull Station": scenarioState.rememberedCounts["double-pull-quantity"] || 1,
        "SIGA-270 Single Action Intelligent Pull Station": scenarioState.rememberedCounts["single-pull-quantity"] || 4,
        "Signature Optica Smoke and Heat Detector": scenarioState.rememberedCounts["smoke-quantity"] || 20,
        "Genesis LED G4 Series Wall Mount Notification Devices": scenarioState.rememberedCounts["horn-quantity"] || 8,
        "G4LF Genesis LED Wall-Mount Low-Frequency Horn": scenarioState.rememberedCounts["horn-quantity"] || 8,
        "G4LFV Genesis LED Wall-Mount Low-Frequency Horn-Strobe": scenarioState.rememberedCounts["horn-quantity"] || 8,
        "G1AVRF Genesis LED Compact Wall-Mount Horn-Strobe": scenarioState.rememberedCounts["g1-wall-horn-strobe-quantity"] || 7,
        "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes": scenarioState.rememberedCounts["horn-quantity"] || 8,
        "Genesis LED G1 Series Compact Notification Devices": scenarioState.rememberedCounts["horn-quantity"] || 8,
        "Duct Smoke Detector": scenarioState.rememberedCounts["duct-quantity"] || 1,
        "Monitor or input interface for duct detector": scenarioState.rememberedCounts["duct-monitor"] || 1,
        "SIGA-CC1 Single Input Signal Module": scenarioState.rememberedCounts["duct-monitor"] || 1,
        "Control or relay interface for HVAC shutdown": scenarioState.rememberedCounts["hvac-interface"] || 1,
        "SIGA-CT1 Single Input Module": scenarioState.rememberedCounts["hvac-interface"] || 1,
        "Control or relay interface for door holder release": 1,
        "GRSW-10 Room-Side Wiring Plate": 1,
        "GOCT 4-Inch Octagon Box Adapter Plate": 8,
        "GRT-10 Genesis LED Device/Cover Removal Tool": 1,
        "G4TR Red G4 Trim Plate": 1,
        "G4TW White G4 Trim Plate": 1,
        "G4RSB Red 4-Inch Surface-Mount Box": 1,
        "G4WSB White 4-Inch Surface-Mount Box": 1,
        "System power supply / batteries": 1,
        "Secondary power / battery set": 1,
        "Device labels and mounting accessories": 1,
        "Mounting hardware and trim accessories": 1
    };

    return suggestions[item] || 1;
}

function applyBomSuggestion() {
    const suggestedQuantity = getBomSuggestedQuantity(bomItem.value);
    if (suggestedQuantity > 0 && !bomQuantity.value) {
        bomQuantity.value = String(suggestedQuantity);
    }
}

function addRememberedCountsToBom() {
    takeoffScenario.bomDefaults.forEach((entry) => {
        const existingIndex = scenarioState.bomItems.findIndex((item) => item.category === entry.category && item.item === entry.item);
        if (existingIndex >= 0) {
            scenarioState.bomItems[existingIndex].quantity = entry.quantity;
            return;
        }

        scenarioState.bomItems.push({
            category: entry.category,
            item: entry.item,
            quantity: entry.quantity
        });
    });

    renderBomTable();
    scenarioState.currentStep = 5;
    updateStepState();
    scrollToStep(5);
}

function addBomItem() {
    const category = bomCategory.value;
    const item = bomItem.value;
    const quantity = normalizeQuantityInput(bomQuantity.value);

    if (!category || !item || !quantity) {
        return;
    }

    const existingIndex = scenarioState.bomItems.findIndex((entry) => entry.category === category && entry.item === item);
    if (existingIndex >= 0) {
        scenarioState.bomItems[existingIndex].quantity += quantity;
    } else {
        scenarioState.bomItems.push({ category, item, quantity });
    }

    bomQuantity.value = "";
    renderBomTable();
    scenarioState.currentStep = 5;
    updateStepState();
    scrollToStep(5);
}

function renderBomTable() {
    if (scenarioState.bomItems.length === 0) {
        bomTableBody.innerHTML = "";
        bomEmptyState.classList.remove("hidden");
        return;
    }

    bomEmptyState.classList.add("hidden");
    bomTableBody.innerHTML = scenarioState.bomItems.map((entry, index) => `
        <tr>
            <td>${entry.category}</td>
            <td>${entry.item}</td>
            <td>${entry.quantity}</td>
            <td><button type="button" class="btn btn-secondary" data-remove-bom="${index}">Remove</button></td>
        </tr>
    `).join("");

    bomTableBody.querySelectorAll("[data-remove-bom]").forEach((button) => {
        button.addEventListener("click", () => {
            const index = Number(button.getAttribute("data-remove-bom"));
            scenarioState.bomItems.splice(index, 1);
            renderBomTable();
        });
    });
}

function submitTakeoff() {
    const evaluation = evaluateTakeoff();
    scenarioState.bomScore = evaluation.scoreContribution;
    scenarioState.score = Math.round(
        scenarioState.identificationScore +
        scenarioState.quantityScore +
        scenarioState.relationshipScore +
        scenarioState.bomScore
    );

    updateScoreState();
    showResults(evaluation);
}

function evaluateTakeoff() {
    const expectedMap = new Map(takeoffScenario.bomDefaults.map((entry) => [`${entry.category}::${entry.item}`, entry]));
    let correctItems = 0;
    let incorrectItems = 0;
    let matchedItems = 0;
    const reviewLines = [];

    scenarioState.bomItems.forEach((item) => {
        const expected = expectedMap.get(`${item.category}::${item.item}`);
        if (expected && item.quantity === expected.quantity) {
            correctItems += 1;
            matchedItems += 1;
            reviewLines.push({ status: "correct", label: item.item, actual: item.quantity, expected: expected.quantity, explanation: "Correct" });
            return;
        }

        incorrectItems += 1;
        if (expected) {
            reviewLines.push({
                status: "incorrect",
                label: item.item,
                actual: item.quantity,
                expected: expected.quantity,
                explanation: expected.key === "smoke-detector" ? "10 detectors × 2 floors = 20 detectors" : "Review the project brief and matching requirements."
            });
        } else {
            reviewLines.push({
                status: "incorrect",
                label: item.item,
                actual: item.quantity,
                expected: "Not expected",
                explanation: "This item does not match the current project scenario."
            });
        }
    });

    takeoffScenario.bomDefaults.forEach((expected) => {
        if (!scenarioState.bomItems.some((item) => item.category === expected.category && item.item === expected.item)) {
            incorrectItems += 1;
            reviewLines.push({
                status: "incorrect",
                label: expected.item,
                actual: 0,
                expected: expected.quantity,
                explanation: expected.key === "duct-monitor"
                    ? "The duct detector needs a monitoring input or interface so its alarm or trouble state can be reported to the panel."
                    : expected.key === "hvac-interface"
                        ? "HVAC shutdown typically uses a control or relay function so the panel can operate the connected equipment safely and as designed."
                        : "This required item was not added to the BOM."
            });
        }
    });

    const totalExpectedItems = takeoffScenario.bomDefaults.length;
    const quantityAccuracy = Math.max(0, Math.round((correctItems / totalExpectedItems) * 100));
    const scoreContribution = Math.round((quantityAccuracy / 100) * scoreWeights.bom);

    return {
        correctItems,
        incorrectItems,
        totalExpectedItems,
        quantityAccuracy,
        scoreContribution,
        reviewLines
    };
}

function showResults(evaluation) {
    scenarioState.currentStep = 6;
    scenarioState.completed = true;
    scenarioState.reviewVisible = true;

    updateStepState();

    resultsScore.textContent = `${scenarioState.score}/100`;
    resultsCorrectItems.textContent = `${evaluation.correctItems}/${evaluation.totalExpectedItems}`;
    resultsIncorrectItems.textContent = `${evaluation.incorrectItems}/${evaluation.totalExpectedItems}`;
    resultsQuantityAccuracy.textContent = `${evaluation.quantityAccuracy}%`;
    finalScoreBadge.textContent = `${scenarioState.score} / 100`;

    resultsReview.innerHTML = evaluation.reviewLines.map((line) => `
        <div class="result-line">
            <strong class="${line.status === "correct" ? "correct-result" : "incorrect-result"}">${line.status === "correct" ? "✓" : "✗"} ${line.label}</strong>
            <small>Entered: ${line.actual} | Expected: ${line.expected}</small>
            <small>${line.explanation}</small>
        </div>
    `).join("");

    scrollToStep(6);
}

function resetScenario() {
    scenarioState.currentStep = 1;
    scenarioState.currentIdentificationIndex = 0;
    scenarioState.currentQuantityIndex = 0;
    scenarioState.currentRelationshipIndex = 0;
    scenarioState.bomItems = [];
    scenarioState.rememberedCounts = {};
    scenarioState.score = 0;
    scenarioState.identificationScore = 0;
    scenarioState.quantityScore = 0;
    scenarioState.relationshipScore = 0;
    scenarioState.bomScore = 0;
    scenarioState.reviewVisible = false;
    scenarioState.completed = false;

    renderIdentificationStep();
    renderQuantityStep();
    renderRelationshipStep();
    renderRememberedCounts();
    renderBomTable();
    updateStepState();
    updateScoreState();
    updateProgressDisplay();
    resultsReview.innerHTML = "";
    resultsScore.textContent = "0/100";
    resultsCorrectItems.textContent = "0/0";
    resultsIncorrectItems.textContent = "0/0";
    resultsQuantityAccuracy.textContent = "0%";
    finalScoreBadge.textContent = "0 / 100";

    stepPanels[2].querySelectorAll("button").forEach((button) => button.disabled = false);
    stepPanels[3].querySelectorAll("input").forEach((input) => {
        input.value = "";
        delete input.dataset.scored;
    });
    stepPanels[3].querySelectorAll("button").forEach((button) => button.disabled = false);
    stepPanels[4].querySelectorAll("button").forEach((button) => button.disabled = false);
    bomQuantity.value = "";
    scrollToStep(1);
}

function advanceQuestion(section, questionIndex) {
    if (section === "identification") {
        const nextCard = identifyQuestionArea.querySelectorAll(".question-card")[questionIndex + 1];
        if (nextCard) {
            nextCard.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        scenarioState.currentStep = 3;
        updateStepState();
        scrollToStep(3);
        return;
    }

    if (section === "quantity") {
        const nextCard = quantityQuestionArea.querySelectorAll(".quantity-card")[questionIndex + 1];
        if (nextCard) {
            nextCard.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        scenarioState.currentStep = 4;
        updateStepState();
        scrollToStep(4);
        return;
    }

    if (section === "relationship") {
        const nextCard = relationshipQuestionArea.querySelectorAll(".relationship-card")[questionIndex + 1];
        if (nextCard) {
            nextCard.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        scenarioState.currentStep = 5;
        updateStepState();
        scrollToStep(5);
    }
}

function updateStepState() {
    Object.entries(stepPanels).forEach(([step, panel]) => {
        panel.classList.toggle("hidden", Number(step) !== scenarioState.currentStep);
    });

    stepIndicator.textContent = scenarioState.currentStep === 6 ? "Module Complete" : `Step ${scenarioState.currentStep} of 5`;
    renderModuleShell();
    updateProgressDisplay();
}

function updateScoreDisplay() {
    updateScoreState();
}

function updateScoreState() {
    scenarioState.score = Math.round(
        scenarioState.identificationScore +
        scenarioState.quantityScore +
        scenarioState.relationshipScore +
        scenarioState.bomScore
    );
    liveScoreValue.textContent = `${scenarioState.score} / 100`;
    liveScoreNote.textContent = scenarioState.completed ? "Takeoff submitted. Review your results below." : "Work through the steps to build your total.";
    finalScoreBadge.textContent = `${scenarioState.score} / 100`;
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const progressMap = {
        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 90,
        6: 100
    };

    const progress = progressMap[scenarioState.currentStep] || 20;
    topProgressBar.style.width = `${progress}%`;
    topProgressValue.textContent = `${progress}%`;
}

function normalizeQuantityInput(value) {
    const match = String(value).match(/\d+/);
    return match ? Number(match[0]) : 0;
}

function scrollToStep(step) {
    const target = stepPanels[step] || stepPanels[1];
    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToResults() {
    if (scenarioState.completed) {
        scrollToStep(6);
        return;
    }

    submitTakeoff();
}
