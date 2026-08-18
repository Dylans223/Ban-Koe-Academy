// ===============================================
// Ban-Koe Academy
// System Builder Training Module
// ===============================================

const productLibraryData = typeof productLibrary !== "undefined" ? productLibrary : { products: [] };

function findProductBy(predicate) {
    return productLibraryData.products.find(predicate) || null;
}

const est4Product = findProductBy((product) => product.family === "EST4" || product.model === "EST4");
const est3Product = findProductBy((product) => product.model === "EST3");
const ioProduct = findProductBy((product) => product.family === "iO Series");
const io64Product = findProductBy((product) => product.model === "iO64");
const io1000Product = findProductBy((product) => product.model === "iO1000");
const edgeProduct = findProductBy((product) => product.family === "Edge Series");
const g4NotificationProduct = findProductBy((product) => product.model === "Genesis LED G4 Series Wall Mount Notification Devices");
const gcsNotificationProduct = findProductBy((product) => product.model === "Genesis LED GCS Series Ceiling Mount Speakers and Speaker-Strobes");
const g1NotificationProduct = findProductBy((product) => product.model === "Genesis LED G1 Series Compact Notification Devices");

const systemScenario = {
    id: "two-story-office-system",
    title: "Small Office Fire Alarm System",
    difficulty: "Beginner",
    description: "You are preparing a basic system concept for a small, single-building office. Determine the appropriate Edwards control platform family for a project of this size before building out the rest of the system.",
    requirements: [
        "Fire alarm control panel",
        "48 addressable devices total",
        "Smoke detection",
        "Manual pull stations",
        "Notification appliances",
        "Duct smoke detection",
        "HVAC shutdown interface",
        "Two floors",
        "Central fire alarm control panel"
    ]
};

const controlPanelChoices = [
    {
        id: "est4",
        title: est4Product ? est4Product.model : "Edwards EST4 Fire Alarm Control Platform",
        subtitle: est4Product ? est4Product.category : "Fire Alarm Control Platform",
        description: est4Product ? est4Product.officialDescription : "Edwards EST4 serves as the primary life safety control platform.",
        badge: "Verified",
        product: est4Product,
        correct: false,
        whyNot: "EST4 remains a valid larger-capacity platform, but this project is deliberately kept within the small-building iO64 fit; the scenario is intended to test device-count-based platform selection."
    },
    {
        id: "est3",
        title: est3Product ? est3Product.model : "Edwards EST3 Fire Alarm Control Platform",
        subtitle: est3Product ? est3Product.category : "Emergency Communications Platform",
        description: est3Product ? est3Product.officialDescription : "A modular control platform used in other Edwards system designs.",
        badge: "Verified",
        product: est3Product,
        correct: false,
        whyNot: "EST3 is a valid platform in other applications, but the explicit 48-device small-building fit in this scenario points to the iO64."
    },
    {
        id: "io64",
        title: io64Product ? io64Product.model : "Edwards iO64",
        subtitle: io64Product ? io64Product.category : "Small Building Fire Alarm Solution",
        description: io64Product ? "iO64 ships with one Signature loop controller and supports up to 64 devices of any type; its device capacity cannot be expanded." : "Small-building iO-Series panel designed for up to 64 devices with a fixed device capacity.",
        badge: "Verified",
        product: io64Product,
        correct: true,
        whyNot: "The project is only 48 addressable devices total, which fits within the iO64's fixed 64-device capacity. That makes iO64 the appropriate small-building platform for this scenario."
    },
    {
        id: "edge-series",
        title: edgeProduct ? edgeProduct.model : "Edwards Edge Series Fire Alarm System",
        subtitle: edgeProduct ? edgeProduct.category : "Fire Alarm Control System",
        description: edgeProduct ? edgeProduct.officialDescription : "A mid-size system family with touchscreen operation.",
        badge: "Verified",
        product: edgeProduct,
        correct: false,
        whyNot: "Edge Series is a valid platform for other applications, but this scenario is intentionally sized to match the fixed small-building fit of the iO64."
    }
];

const systemComponents = [
    {
        id: "io64-panel",
        name: io64Product ? io64Product.model : "iO64",
        category: "control",
        categoryLabel: "Control",
        description: io64Product ? io64Product.category : "Small Building Fire Alarm Solution",
        function: io64Product ? io64Product.howItWorks : "Provides centralized control and supervision for a small-building system with a fixed 64-device capacity.",
        step3Available: false,
        step4Available: false,
        finalAvailable: true
    },
    {
        id: "smoke-detector",
        name: "Smoke Detector",
        category: "initiating",
        categoryLabel: "Initiating Devices",
        description: "Detects smoke and sends an initiating signal.",
        function: "Provides an initiating input to the fire alarm system.",
        step3Available: true,
        step4Available: false,
        finalAvailable: true
    },
    {
        id: "manual-pull-station",
        name: "Manual Pull Station",
        category: "initiating",
        categoryLabel: "Initiating Devices",
        description: "Allows an occupant to manually initiate an alarm condition.",
        function: "Provides a manual initiating input to the panel.",
        step3Available: true,
        step4Available: false,
        finalAvailable: true
    },
    {
        id: "duct-smoke-detector",
        name: "Duct Smoke Detector",
        category: "initiating",
        categoryLabel: "Initiating Devices",
        description: "Detects smoke in HVAC ductwork.",
        function: "Provides an initiating input so the panel can respond to duct smoke conditions.",
        step3Available: true,
        step4Available: false,
        finalAvailable: true
    },
    {
        id: "horn-strobe",
        name: "Horn/Strobe",
        category: "notification",
        categoryLabel: "Notification Appliances",
        description: g4NotificationProduct ? g4NotificationProduct.category : "Provides audible and visual notification.",
        function: g4NotificationProduct ? g4NotificationProduct.howItWorks : "Alerts occupants with sound and visible flashing light.",
        step3Available: true,
        step4Available: true,
        finalAvailable: true
    },
    {
        id: "speaker",
        name: "Speaker",
        category: "notification",
        categoryLabel: "Notification Appliances",
        description: gcsNotificationProduct ? gcsNotificationProduct.category : "Provides audible notification.",
        function: gcsNotificationProduct ? gcsNotificationProduct.howItWorks : "Provides audible occupant notification.",
        step3Available: true,
        step4Available: true,
        finalAvailable: true
    },
    {
        id: "strobe",
        name: "Strobe",
        category: "notification",
        categoryLabel: "Notification Appliances",
        description: g1NotificationProduct ? g1NotificationProduct.category : "Provides visible notification.",
        function: g1NotificationProduct ? g1NotificationProduct.howItWorks : "Provides visible occupant notification.",
        step3Available: true,
        step4Available: true,
        finalAvailable: true
    },
    {
        id: "monitor-module",
        name: "Monitor Module",
        category: "interfaces",
        categoryLabel: "Interfaces",
        description: "Supervises an external device or contact.",
        function: "Provides a monitored input path to the control system.",
        step3Available: true,
        step4Available: false,
        finalAvailable: false,
        wrongStepMessage: "This belongs in the interface family, not the initiating-device list."
    },
    {
        id: "control-module",
        name: "Control Module",
        category: "interfaces",
        categoryLabel: "Interfaces",
        description: "Provides an output function for external equipment.",
        function: "Uses panel logic to drive an external control function.",
        step3Available: true,
        step4Available: false,
        finalAvailable: false,
        wrongStepMessage: "This belongs in the interface family, not the initiating-device list."
    },
    {
        id: "relay",
        name: "Relay",
        category: "interfaces",
        categoryLabel: "Interfaces",
        description: "Provides a switching function for external equipment.",
        function: "Used when the fire alarm system needs to switch or energize an external circuit.",
        step3Available: true,
        step4Available: false,
        finalAvailable: false,
        wrongStepMessage: "This belongs in the interface family, not the initiating-device list."
    },
    {
        id: "monitor-input-module",
        name: "Monitor/Input Module",
        category: "interfaces",
        categoryLabel: "Interfaces",
        description: "Provides a monitored input interface.",
        function: "Connects a supervised external contact or device to the panel.",
        step3Available: false,
        step4Available: false,
        finalAvailable: true
    },
    {
        id: "control-relay-interface",
        name: "Control/Relay Interface",
        category: "interfaces",
        categoryLabel: "Interfaces",
        description: "Provides a control output for external building systems.",
        function: "Drives HVAC shutdown, door holder release, or similar external functions when required by the design.",
        step3Available: false,
        step4Available: false,
        finalAvailable: true
    }
];

const interfaceScenarios = [
    {
        id: "duct-monitor-scenario",
        label: "Scenario A",
        prompt: "The duct smoke detector must communicate its alarm/supervisory condition to the fire alarm system.",
        question: "What type of interface would you investigate?",
        options: ["Monitor/Input Module", "Horn/Strobe", "Smoke Detector", "Battery"],
        answer: "Monitor/Input Module",
        explanation: "A monitoring/input module can provide an interface between a supervised external contact/device and the fire alarm system, depending on the device and system design.",
        concept: "monitoring"
    },
    {
        id: "hvac-control-scenario",
        label: "Scenario B",
        prompt: "The fire alarm system must provide a control signal for HVAC shutdown.",
        question: "What type of function would you investigate?",
        options: ["Control/Relay Interface", "Smoke Detector", "Pull Station", "Strobe"],
        answer: "Control/Relay Interface",
        explanation: "A control or relay interface can provide the required output to an external building system, depending on the system design and equipment.",
        concept: "control"
    },
    {
        id: "door-holder-scenario",
        label: "Scenario C",
        prompt: "A fire alarm condition must release a door holder.",
        question: "What type of interface would you investigate?",
        options: ["Control/Relay Interface", "Monitor/Input Module", "Smoke Detector", "Speaker"],
        answer: "Control/Relay Interface",
        explanation: "Door holder release is normally handled by a control or relay interface because the fire alarm system needs an output that can command the connected building equipment.",
        concept: "control"
    }
];

const finalSections = [
    { key: "control", label: "Control Panel", expected: ["io64-panel"] },
    { key: "initiating", label: "Initiating Devices", expected: ["smoke-detector", "manual-pull-station", "duct-smoke-detector"] },
    { key: "logic", label: "Logic / Control", fixed: true },
    { key: "notification", label: "Notification Appliances", expected: ["horn-strobe", "speaker", "strobe"] },
    { key: "interfaces", label: "Building Interfaces", expected: ["monitor-input-module", "control-relay-interface"] }
];

const requiredStep3 = ["smoke-detector", "manual-pull-station", "duct-smoke-detector"];
const requiredStep4 = ["horn-strobe", "speaker", "strobe"];

const stepPanels = {
    1: document.getElementById("scenarioStep"),
    2: document.getElementById("controlStep"),
    3: document.getElementById("initiatingStep"),
    4: document.getElementById("notificationStep"),
    5: document.getElementById("interfacesStep"),
    6: document.getElementById("finalStep"),
    completion: document.getElementById("completionStep")
};

const builderState = {
    currentStep: 1,
    controlSelection: null,
    step3Selections: [],
    step4Selections: [],
    interfaceAnswers: {},
    finalSectionSelection: "control",
    finalSections: {
        control: [],
        initiating: [],
        notification: [],
        interfaces: []
    },
    lastFeedback: "",
    incorrectInteractions: 0
};

const startBuilderButton = document.getElementById("startBuilderButton");
const controlPanelOptions = document.getElementById("controlPanelOptions");
const controlPanelFeedback = document.getElementById("controlPanelFeedback");
const continueToStep3Button = document.getElementById("continueToStep3Button");
const initiatingComponentList = document.getElementById("initiatingComponentList");
const initiatingSystemTree = document.getElementById("initiatingSystemTree");
const initiatingFeedback = document.getElementById("initiatingFeedback");
const continueToStep4Button = document.getElementById("continueToStep4Button");
const notificationComponentList = document.getElementById("notificationComponentList");
const notificationSystemTree = document.getElementById("notificationSystemTree");
const notificationFeedback = document.getElementById("notificationFeedback");
const continueToStep5Button = document.getElementById("continueToStep5Button");
const interfaceScenarioList = document.getElementById("interfaceScenarioList");
const continueToStep6Button = document.getElementById("continueToStep6Button");
const finalSectionSelector = document.getElementById("finalSectionSelector");
const finalComponentPalette = document.getElementById("finalComponentPalette");
const finalSystemCanvas = document.getElementById("finalSystemCanvas");
const finalPlacementFeedback = document.getElementById("finalPlacementFeedback");
const checkSystemButton = document.getElementById("checkSystemButton");
const resetSystemButton = document.getElementById("resetSystemButton");
const completionScoreBadge = document.getElementById("completionScoreBadge");
const completionScoreValue = document.getElementById("completionScoreValue");
const completionCorrectValue = document.getElementById("completionCorrectValue");
const completionIncorrectValue = document.getElementById("completionIncorrectValue");
const completionOrganizationValue = document.getElementById("completionOrganizationValue");
const completionExplanationList = document.getElementById("completionExplanationList");
const conceptMasteryList = document.getElementById("conceptMasteryList");
const nextModuleMessage = document.getElementById("nextModuleMessage");
const completionTryAgainButton = document.getElementById("completionTryAgainButton");
const completionReturnButton = document.getElementById("completionReturnButton");
const completionNextButton = document.getElementById("completionNextButton");
const builderStepIndicator = document.getElementById("builderStepIndicator");
const builderProgressBar = document.getElementById("builderProgressBar");
const builderProgressValue = document.getElementById("builderProgressValue");
const moduleStepList = document.getElementById("moduleStepList");
const moduleObjectiveChip = document.getElementById("moduleObjectiveChip");
const moduleObjectiveTitle = document.getElementById("moduleObjectiveTitle");
const moduleObjectiveText = document.getElementById("moduleObjectiveText");

const moduleSteps = [
    { label: "Project", chip: "Project Scenario", title: "Understand the scenario before selecting components.", objective: "Your goal is to review the project and identify the system functions the build must support." },
    { label: "Control", chip: "Choose Control", title: "Choose the correct control platform.", objective: "Your goal is to confirm the central panel platform that matches the training scenario before building the rest of the system." },
    { label: "Initiating", chip: "Initiating Devices", title: "Add the initiating devices to the system.", objective: "Your goal is to place the required initiating devices so the project scope is represented correctly." },
    { label: "Notification", chip: "Notification Appliances", title: "Add the occupant notification devices.", objective: "Your goal is to build the notification side of the system with the devices required by the scenario." },
    { label: "Interfaces", chip: "System Interfaces", title: "Identify the monitoring and control interfaces.", objective: "Your goal is to recognize when the system needs monitor or control functions beyond the major field devices." },
    { label: "Build", chip: "Build Your System", title: "Assemble the full conceptual fire alarm system.", objective: "Your goal is to place the components into the correct sections so the full system organization is clear and reviewable." }
];

window.addEventListener("DOMContentLoaded", initializeSystemBuilder);

function initializeSystemBuilder() {
    startBuilderButton.addEventListener("click", () => setStep(2));
    continueToStep3Button.addEventListener("click", () => setStep(3));
    continueToStep4Button.addEventListener("click", () => setStep(4));
    continueToStep5Button.addEventListener("click", () => setStep(5));
    continueToStep6Button.addEventListener("click", () => setStep(6));
    checkSystemButton.addEventListener("click", submitSystemBuild);
    resetSystemButton.addEventListener("click", resetFinalSystem);
    completionTryAgainButton.addEventListener("click", restartModule);
    completionReturnButton.addEventListener("click", goTraining);
    completionNextButton.addEventListener("click", goToWiringConnections);

    controlPanelOptions.addEventListener("click", handleControlPanelSelection);
    initiatingComponentList.addEventListener("click", handleInitiatingComponentClick);
    notificationComponentList.addEventListener("click", handleNotificationComponentClick);
    interfaceScenarioList.addEventListener("click", handleInterfaceScenarioClick);
    finalSectionSelector.addEventListener("click", handleFinalSectionSelection);
    finalComponentPalette.addEventListener("click", handleFinalPaletteClick);
    finalSystemCanvas.addEventListener("click", handleFinalCanvasClick);

    renderControlPanelOptions();
    renderInitiatingWorkspace();
    renderNotificationWorkspace();
    renderInterfaceScenarios();
    renderFinalBuilder();
    updateStepState();
}

function renderModuleShell() {
    const visualStep = Math.min(builderState.currentStep, 6);
    const completionVisible = stepPanels.completion.classList.contains("is-visible");

    moduleStepList.innerHTML = moduleSteps.map((step, index) => {
        const stepNumber = index + 1;
        const isComplete = completionVisible ? true : stepNumber < visualStep;
        const isActive = !completionVisible && stepNumber === visualStep;
        const icon = isComplete ? "✓" : isActive ? "●" : "○";
        return `<span class="module-step-item ${isComplete ? "is-complete" : isActive ? "is-active" : ""}"><span class="module-step-icon">${icon}</span>${stepNumber} ${step.label}</span>`;
    }).join("");

    const activeConfig = completionVisible
        ? {
            chip: "Module Complete",
            title: "Review why the system works before moving on.",
            objective: "Your goal is to review the final organization, understand any errors, and carry that reasoning into the next module."
        }
        : moduleSteps[visualStep - 1];

    moduleObjectiveChip.textContent = activeConfig.chip;
    moduleObjectiveTitle.textContent = activeConfig.title;
    moduleObjectiveText.textContent = activeConfig.objective;
}

function setStep(stepNumber) {
    builderState.currentStep = stepNumber;
    updateStepState();
    scrollToStep(stepNumber);
}

function updateStepState() {
    Object.entries(stepPanels).forEach(([key, panel]) => {
        if (!panel) {
            return;
        }

        if (key === "completion") {
            panel.classList.toggle("hidden", builderState.currentStep !== 6 || !panel.classList.contains("is-visible"));
            return;
        }

        const stepNumber = Number(key);
        panel.classList.toggle("hidden", stepNumber !== builderState.currentStep);
    });

    const progressPercent = Math.round((Math.min(builderState.currentStep, 6) / 6) * 100);
    builderStepIndicator.textContent = `Step ${Math.min(builderState.currentStep, 6)} of 6`;
    builderProgressBar.style.width = `${progressPercent}%`;
    builderProgressValue.textContent = `${progressPercent}%`;
    renderModuleShell();
}

function renderControlPanelOptions() {
    controlPanelOptions.innerHTML = controlPanelChoices.map((choice) => {
        const selected = builderState.controlSelection === choice.id;
        return `
            <article class="control-option-card ${selected ? "is-selected" : ""} ${selected && !choice.correct ? "is-incorrect" : ""} ${selected && choice.correct ? "is-correct" : ""}" data-control-choice="${choice.id}">
                <div class="option-top">
                    <div>
                        <span class="option-badge">${escapeHTML(choice.badge)}</span>
                        <h3 class="option-title">${escapeHTML(choice.title)}</h3>
                        <p class="option-copy">${escapeHTML(choice.subtitle)}</p>
                    </div>
                </div>
                <p class="option-copy">${escapeHTML(choice.description)}</p>
                <button class="btn btn-secondary" type="button" data-control-select="${choice.id}">${selected ? "Selected" : "Select This Control Platform"}</button>
            </article>
        `;
    }).join("");

    updateControlFeedback();
    continueToStep3Button.disabled = !builderState.controlSelection || !isControlCorrect();
}

function handleControlPanelSelection(event) {
    const button = event.target.closest("[data-control-select]");
    if (!button) {
        return;
    }

    const choiceId = button.getAttribute("data-control-select");
    builderState.controlSelection = choiceId;
    renderControlPanelOptions();
}

function updateControlFeedback() {
    if (!builderState.controlSelection) {
        controlPanelFeedback.classList.add("hidden");
        controlPanelFeedback.textContent = "";
        return;
    }

    const selectedChoice = controlPanelChoices.find((choice) => choice.id === builderState.controlSelection);
    if (!selectedChoice) {
        controlPanelFeedback.classList.add("hidden");
        controlPanelFeedback.textContent = "";
        return;
    }

    controlPanelFeedback.classList.remove("hidden");
    controlPanelFeedback.className = `feedback-banner ${selectedChoice.correct ? "correct" : "incorrect"}`;
    controlPanelFeedback.innerHTML = selectedChoice.correct
        ? `<strong>Correct.</strong> ${escapeHTML(selectedChoice.whyNot)}`
        : `<strong>Incorrect.</strong> ${escapeHTML(selectedChoice.whyNot)}`;

    continueToStep3Button.disabled = !selectedChoice.correct;
}

function isControlCorrect() {
    return builderState.controlSelection === "io64";
}

function renderInitiatingWorkspace() {
    const availableComponents = systemComponents.filter((component) => component.step3Available);
    initiatingComponentList.innerHTML = availableComponents.map((component) => {
        const allowed = component.category === "initiating";
        return `
            <article class="component-card" data-initiating-component="${component.id}">
                <div class="component-top">
                    <div>
                        <span class="component-badge">${escapeHTML(component.categoryLabel)}</span>
                        <h3 class="component-title">${escapeHTML(component.name)}</h3>
                        <p class="component-copy">${escapeHTML(component.description)}</p>
                    </div>
                </div>
                <p class="component-copy">${escapeHTML(component.function)}</p>
                <button class="btn btn-secondary" type="button" data-initiating-add="${component.id}">${allowed ? "Add to Initiating System" : "Use in Step 5"}</button>
            </article>
        `;
    }).join("");

    renderInitiatingTree();
    continueToStep4Button.disabled = !requiredStep3.every((id) => builderState.step3Selections.includes(id));
}

function handleInitiatingComponentClick(event) {
    const button = event.target.closest("[data-initiating-add]");
    if (!button) {
        return;
    }

    const componentId = button.getAttribute("data-initiating-add");
    const component = getComponentById(componentId);
    if (!component) {
        return;
    }

    if (component.category !== "initiating") {
        builderState.incorrectInteractions += 1;
        showFeedback(initiatingFeedback, component.wrongStepMessage || `${component.name} does not belong in the initiating-device section.`, "warning");
        return;
    }

    if (builderState.step3Selections.includes(componentId)) {
        showFeedback(initiatingFeedback, `${component.name} is already in the initiating system.`, "correct");
        return;
    }

    builderState.step3Selections.push(componentId);
    showFeedback(initiatingFeedback, `${component.name} added to the initiating system.`, "correct");
    renderInitiatingTree();
    continueToStep4Button.disabled = !requiredStep3.every((id) => builderState.step3Selections.includes(id));
}

function renderInitiatingTree() {
    const selectedComponents = builderState.step3Selections.map((componentId) => getComponentById(componentId)).filter(Boolean);
    initiatingSystemTree.innerHTML = `
        <div class="tree-root">
            <div class="tree-root-title">FACP</div>
            <div class="tree-list">
                <div class="tree-section">
                    <div class="section-title">Initiating Devices</div>
                    <div class="tree-chip-list">
                        ${selectedComponents.length ? selectedComponents.map((component) => `<span class="system-chip">${escapeHTML(component.name)}</span>`).join("") : `<span class="small-note">Add Smoke Detector, Manual Pull Station, and Duct Smoke Detector.</span>`}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderNotificationWorkspace() {
    const availableComponents = systemComponents.filter((component) => component.step4Available);
    notificationComponentList.innerHTML = availableComponents.map((component) => `
        <article class="component-card" data-notification-component="${component.id}">
            <div class="component-top">
                <div>
                    <span class="component-badge">Notification</span>
                    <h3 class="component-title">${escapeHTML(component.name)}</h3>
                    <p class="component-copy">${escapeHTML(component.description)}</p>
                </div>
            </div>
            <p class="component-copy">${escapeHTML(component.function)}</p>
            <div class="small-note">${getNotificationReferenceText(component.id)}</div>
            <button class="btn btn-secondary" type="button" data-notification-add="${component.id}">Add to Notification System</button>
        </article>
    `).join("");

    renderNotificationTree();
    continueToStep5Button.disabled = !requiredStep4.every((id) => builderState.step4Selections.includes(id));
}

function handleNotificationComponentClick(event) {
    const button = event.target.closest("[data-notification-add]");
    if (!button) {
        return;
    }

    const componentId = button.getAttribute("data-notification-add");
    const component = getComponentById(componentId);
    if (!component) {
        return;
    }

    if (!builderState.step3Selections.includes("smoke-detector")) {
        // The user can still explore this step, but the training flow encourages building the initiating system first.
    }

    if (builderState.step4Selections.includes(componentId)) {
        showFeedback(notificationFeedback, `${component.name} is already in the notification system.`, "correct");
        return;
    }

    builderState.step4Selections.push(componentId);
    showFeedback(notificationFeedback, `${component.name} added to notification.`, "correct");
    renderNotificationTree();
    continueToStep5Button.disabled = !requiredStep4.every((id) => builderState.step4Selections.includes(id));
}

function renderNotificationTree() {
    const initiatingComponents = builderState.step3Selections.map((componentId) => getComponentById(componentId)).filter(Boolean);
    const notificationComponents = builderState.step4Selections.map((componentId) => getComponentById(componentId)).filter(Boolean);

    notificationSystemTree.innerHTML = `
        <div class="tree-root">
            <div class="tree-root-title">FACP</div>
            <div class="tree-list">
                <div class="tree-section">
                    <div class="section-title">Initiating Devices</div>
                    <div class="tree-chip-list">
                        ${initiatingComponents.length ? initiatingComponents.map((component) => `<span class="system-chip">${escapeHTML(component.name)}</span>`).join("") : `<span class="small-note">Initiating devices will appear here.</span>`}
                    </div>
                </div>
                <div class="tree-section">
                    <div class="section-title">Notification Appliances</div>
                    <div class="tree-chip-list">
                        ${notificationComponents.length ? notificationComponents.map((component) => `<span class="system-chip">${escapeHTML(component.name)}</span>`).join("") : `<span class="small-note">Add horn/strobe, speaker, and strobe devices here.</span>`}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getNotificationReferenceText(componentId) {
    if (componentId === "horn-strobe" && g4NotificationProduct) {
        return `Verified product reference: ${g4NotificationProduct.model}`;
    }

    if (componentId === "speaker" && gcsNotificationProduct) {
        return `Verified product reference: ${gcsNotificationProduct.model}`;
    }

    if (componentId === "strobe" && g1NotificationProduct) {
        return `Verified product reference: ${g1NotificationProduct.model}`;
    }

    return "Use the notification device that matches the signaling requirement.";
}

function renderInterfaceScenarios() {
    interfaceScenarioList.innerHTML = interfaceScenarios.map((scenario) => {
        const selected = builderState.interfaceAnswers[scenario.id] || "";
        const isCorrect = selected === scenario.answer;
        const isAnswered = Object.prototype.hasOwnProperty.call(builderState.interfaceAnswers, scenario.id);

        return `
            <article class="scenario-card ${isAnswered ? (isCorrect ? "is-correct" : "is-incorrect") : ""}" data-scenario-id="${scenario.id}">
                <div class="scenario-top">
                    <div>
                        <span class="scenario-badge">${escapeHTML(scenario.label)}</span>
                        <h3 class="scenario-title">${escapeHTML(scenario.question)}</h3>
                        <p class="scenario-copy">${escapeHTML(scenario.prompt)}</p>
                    </div>
                </div>
                <div class="scenario-options">
                    ${scenario.options.map((option) => `<button type="button" class="scenario-option ${selected === option ? "is-selected" : ""}" data-scenario-option="${scenario.id}" data-option-value="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
                </div>
                <div class="scenario-actions">
                    <button type="button" class="btn btn-secondary" data-scenario-check="${scenario.id}">Check Answer</button>
                </div>
                <div class="feedback-banner ${isAnswered ? (isCorrect ? "correct" : "incorrect") : "hidden"}" data-scenario-feedback="${scenario.id}">
                    ${isAnswered ? `<strong>${isCorrect ? "Correct." : "Incorrect."}</strong> ${escapeHTML(isCorrect ? scenario.explanation : `The correct answer is ${scenario.answer}. ${scenario.explanation}`)}` : ""}
                </div>
            </article>
        `;
    }).join("");

    continueToStep6Button.disabled = !interfaceScenarios.every((scenario) => builderState.interfaceAnswers[scenario.id] === scenario.answer);
}

function handleInterfaceScenarioClick(event) {
    const optionButton = event.target.closest("[data-scenario-option]");
    if (optionButton) {
        const scenarioId = optionButton.getAttribute("data-scenario-option");
        const optionValue = optionButton.getAttribute("data-option-value");
        builderState.interfaceAnswers[scenarioId] = optionValue;
        renderInterfaceScenarios();
        return;
    }

    const checkButton = event.target.closest("[data-scenario-check]");
    if (!checkButton) {
        return;
    }

    const scenarioId = checkButton.getAttribute("data-scenario-check");
    const scenario = interfaceScenarios.find((entry) => entry.id === scenarioId);
    if (!scenario) {
        return;
    }

    const selectedValue = builderState.interfaceAnswers[scenarioId];
    const feedback = interfaceScenarioList.querySelector(`[data-scenario-feedback="${scenarioId}"]`);

    if (!selectedValue) {
        showFeedback(feedback, "Select an answer before checking this scenario.", "warning");
        return;
    }

    const isCorrect = selectedValue === scenario.answer;
    if (!isCorrect) {
        builderState.incorrectInteractions += 1;
    }

    showFeedback(feedback, isCorrect ? scenario.explanation : `The correct answer is ${scenario.answer}. ${scenario.explanation}`, isCorrect ? "correct" : "incorrect");
    renderInterfaceScenarios();
}

function renderFinalBuilder() {
    renderSectionSelector();
    renderFinalPalette();
    renderFinalSystemCanvas();
}

function renderSectionSelector() {
    finalSectionSelector.innerHTML = finalSections
        .filter((section) => !section.fixed)
        .map((section) => `
            <button type="button" class="section-selector-button ${builderState.finalSectionSelection === section.key ? "is-selected" : ""}" data-final-section="${section.key}">${escapeHTML(section.label)}</button>
        `)
        .join("");
}

function handleFinalSectionSelection(event) {
    const button = event.target.closest("[data-final-section]");
    if (!button) {
        return;
    }

    builderState.finalSectionSelection = button.getAttribute("data-final-section");
    renderSectionSelector();
    renderFinalPalette();
    renderFinalSystemCanvas();
    showFeedback(finalPlacementFeedback, `Selected ${getSectionLabel(builderState.finalSectionSelection)}. Add a component to this section.`, "warning");
}

function renderFinalPalette() {
    const availableComponents = systemComponents.filter((component) => component.finalAvailable);
    finalComponentPalette.innerHTML = availableComponents.map((component) => `
        <article class="component-card" data-final-component="${component.id}">
            <div class="component-top">
                <div>
                    <span class="component-badge">${escapeHTML(component.categoryLabel)}</span>
                    <h3 class="component-title">${escapeHTML(component.name)}</h3>
                    <p class="component-copy">${escapeHTML(component.description)}</p>
                </div>
            </div>
            <p class="component-copy">${escapeHTML(component.function)}</p>
            <button class="btn btn-secondary" type="button" data-final-add="${component.id}">Place in Selected Section</button>
        </article>
    `).join("");
}

function handleFinalPaletteClick(event) {
    const button = event.target.closest("[data-final-add]");
    if (!button) {
        return;
    }

    const componentId = button.getAttribute("data-final-add");
    placeFinalComponent(componentId);
}

function placeFinalComponent(componentId) {
    const component = getComponentById(componentId);
    if (!component) {
        return;
    }

    const sectionKey = builderState.finalSectionSelection;
    const sectionItems = builderState.finalSections[sectionKey];

    if (!sectionItems) {
        return;
    }

    if (findPlacedComponent(componentId)) {
        showFeedback(finalPlacementFeedback, `${component.name} is already placed. Remove it first if you want to move it.`, "warning");
        return;
    }

    const isCorrect = component.category === sectionKey;
    sectionItems.push({
        id: component.id,
        wrong: !isCorrect
    });

    showFeedback(finalPlacementFeedback, isCorrect ? `Placed ${component.name} in ${getSectionLabel(sectionKey)}.` : getIncorrectPlacementMessage(component, sectionKey), isCorrect ? "correct" : "incorrect");
    renderFinalSystemCanvas();
}

function renderFinalSystemCanvas() {
    finalSystemCanvas.innerHTML = finalSections.map((section) => {
        if (section.fixed) {
            return `
                <div class="final-section-card">
                    <div class="final-section-header">
                        <div>
                            <div class="final-section-title">${escapeHTML(section.label)}</div>
                            <p class="small-note">Panel logic supervises the entire system and ties the layers together.</p>
                        </div>
                    </div>
                </div>
            `;
        }

        const placedItems = builderState.finalSections[section.key].map((entry) => {
            const component = getComponentById(entry.id);
            if (!component) {
                return "";
            }

            return `
                <span class="final-section-chip ${entry.wrong ? "is-wrong" : ""}" data-final-chip="${component.id}" data-final-section-key="${section.key}">
                    ${escapeHTML(component.name)}
                    <button type="button" class="chip-remove" aria-label="Remove ${escapeHTML(component.name)}">×</button>
                </span>
            `;
        }).join("");

        return `
            <div class="final-section-card ${builderState.finalSectionSelection === section.key ? "is-selected" : ""}" data-section-card="${section.key}">
                <div class="final-section-header">
                    <div>
                        <div class="final-section-title">${escapeHTML(section.label)}</div>
                        <p class="small-note">${getSectionHelperText(section.key)}</p>
                    </div>
                    <div class="final-section-actions">
                        <button type="button" class="btn btn-secondary" data-select-final-section="${section.key}">Select Section</button>
                        <button type="button" class="btn btn-secondary" data-clear-final-section="${section.key}">Clear Section</button>
                    </div>
                </div>
                <div class="final-chip-list">
                    ${placedItems || `<span class="small-note">No components placed yet.</span>`}
                </div>
            </div>
        `;
    }).join("");
}

function handleFinalCanvasClick(event) {
    const removeButton = event.target.closest("[data-final-chip]")?.querySelector(".chip-remove");
    if (removeButton && event.target === removeButton) {
        const chip = event.target.closest("[data-final-chip]");
        const componentId = chip.getAttribute("data-final-chip");
        const sectionKey = chip.getAttribute("data-final-section-key");
        removeFinalComponent(sectionKey, componentId);
        return;
    }

    const selectButton = event.target.closest("[data-select-final-section]");
    if (selectButton) {
        builderState.finalSectionSelection = selectButton.getAttribute("data-select-final-section");
        renderSectionSelector();
        renderFinalSystemCanvas();
        renderFinalPalette();
        return;
    }

    const clearButton = event.target.closest("[data-clear-final-section]");
    if (clearButton) {
        clearFinalSection(clearButton.getAttribute("data-clear-final-section"));
    }
}

function removeFinalComponent(sectionKey, componentId) {
    const sectionItems = builderState.finalSections[sectionKey];
    if (!sectionItems) {
        return;
    }

    const index = sectionItems.findIndex((entry) => entry.id === componentId);
    if (index >= 0) {
        sectionItems.splice(index, 1);
    }

    renderFinalSystemCanvas();
    showFeedback(finalPlacementFeedback, `Removed ${getComponentById(componentId)?.name || "component"} from ${getSectionLabel(sectionKey)}.`, "warning");
}

function clearFinalSection(sectionKey) {
    const sectionItems = builderState.finalSections[sectionKey];
    if (!sectionItems) {
        return;
    }

    builderState.finalSections[sectionKey] = [];
    renderFinalSystemCanvas();
    showFeedback(finalPlacementFeedback, `Cleared ${getSectionLabel(sectionKey)}.`, "warning");
}

function submitSystemBuild() {
    const evaluation = evaluateSystem();
    builderState.currentStep = 6;
    updateCompletionScreen(evaluation);

    stepPanels[6].classList.add("hidden");
    stepPanels.completion.classList.remove("hidden");
    stepPanels.completion.classList.add("is-visible");
    stepPanels.completion.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateCompletionScreen(evaluation) {
    completionScoreBadge.textContent = `${evaluation.total}/100`;
    completionScoreValue.textContent = `${evaluation.total}/100`;
    completionCorrectValue.textContent = String(evaluation.correctComponents);
    completionIncorrectValue.textContent = String(evaluation.incorrectComponents);
    completionOrganizationValue.textContent = `${evaluation.organization}/20`;

    completionExplanationList.innerHTML = [
        "The FACP provides centralized control and supervision.",
        "Initiating devices provide information to the system.",
        "Notification appliances alert occupants.",
        "Monitoring interfaces allow external initiating devices or contacts to communicate with the system where required.",
        "Control/relay interfaces allow the fire alarm system to interact with external building systems where required."
    ].map((item) => `<li>${escapeHTML(item)}</li>`).join("");

    conceptMasteryList.innerHTML = [
        "Control",
        "Initiating",
        "Notification",
        "Monitoring",
        "Control Interfaces"
    ].map((item) => `<li>${escapeHTML(item)}</li>`).join("");

    nextModuleMessage.classList.add("hidden");
    nextModuleMessage.textContent = "";
}

function resetFinalSystem() {
    builderState.finalSections = {
        control: [],
        initiating: [],
        notification: [],
        interfaces: []
    };
    builderState.finalSectionSelection = "control";
    renderSectionSelector();
    renderFinalSystemCanvas();
    renderFinalPalette();
    showFeedback(finalPlacementFeedback, "System reset. Start placing components again.", "warning");
}

function restartModule() {
    builderState.currentStep = 1;
    builderState.controlSelection = null;
    builderState.step3Selections = [];
    builderState.step4Selections = [];
    builderState.interfaceAnswers = {};
    builderState.finalSections = {
        control: [],
        initiating: [],
        notification: [],
        interfaces: []
    };
    builderState.finalSectionSelection = "control";
    builderState.lastFeedback = "";
    builderState.incorrectInteractions = 0;

    renderControlPanelOptions();
    renderInitiatingTree();
    renderNotificationTree();
    renderInterfaceScenarios();
    renderFinalBuilder();

    stepPanels.completion.classList.add("hidden");
    stepPanels.completion.classList.remove("is-visible");
    stepPanels[1].classList.remove("hidden");
    updateStepState();
    scrollToStep(1);
}

function evaluateSystem() {
    const controlCorrect = isControlCorrect() ? 1 : 0;
    const control = controlCorrect ? 15 : 0;

    const initiatingCorrect = requiredStep3.filter((componentId) => builderState.step3Selections.includes(componentId)).length;
    const initiating = Math.round((initiatingCorrect / requiredStep3.length) * 20);

    const notificationCorrect = requiredStep4.filter((componentId) => builderState.step4Selections.includes(componentId)).length;
    const notification = Math.round((notificationCorrect / requiredStep4.length) * 20);

    const interfaceCorrect = interfaceScenarios.filter((scenario) => builderState.interfaceAnswers[scenario.id] === scenario.answer).length;
    const interfaces = Math.round((interfaceCorrect / interfaceScenarios.length) * 25);

    const organization = evaluateOrganization();

    const correctComponents = controlCorrect + initiatingCorrect + notificationCorrect + interfaceCorrect + countCorrectFinalPlacements();
    const incorrectComponents = builderState.incorrectInteractions + countIncorrectFinalPlacements() + (builderState.controlSelection && !isControlCorrect() ? 1 : 0);

    return {
        control,
        initiating,
        notification,
        interfaces,
        organization,
        total: control + initiating + notification + interfaces + organization,
        correctComponents,
        incorrectComponents
    };
}

function evaluateOrganization() {
    let score = 0;

    finalSections.forEach((section) => {
        if (section.fixed) {
            score += 5;
            return;
        }

        const sectionItems = builderState.finalSections[section.key];
        const hasCorrectComponent = sectionItems.some((entry) => {
            const component = getComponentById(entry.id);
            return component && component.category === section.key;
        });

        if (hasCorrectComponent) {
            score += 5;
        }
    });

    const wrongPlacements = countIncorrectFinalPlacements();
    score -= wrongPlacements * 2;

    return Math.max(0, Math.min(20, score));
}

function countCorrectFinalPlacements() {
    let count = 0;
    finalSections.forEach((section) => {
        if (section.fixed) {
            return;
        }

        const sectionItems = builderState.finalSections[section.key];
        sectionItems.forEach((entry) => {
            const component = getComponentById(entry.id);
            if (component && component.category === section.key && !entry.wrong) {
                count += 1;
            }
        });
    });

    return count;
}

function countIncorrectFinalPlacements() {
    let count = 0;
    finalSections.forEach((section) => {
        if (section.fixed) {
            return;
        }

        const sectionItems = builderState.finalSections[section.key];
        sectionItems.forEach((entry) => {
            const component = getComponentById(entry.id);
            if (component && component.category !== section.key) {
                count += 1;
            }
        });
    });

    return count;
}

function findPlacedComponent(componentId) {
    for (const section of Object.keys(builderState.finalSections)) {
        const sectionItems = builderState.finalSections[section];
        if (sectionItems.some((entry) => entry.id === componentId)) {
            return section;
        }
    }

    return null;
}

function getComponentById(componentId) {
    return systemComponents.find((component) => component.id === componentId) || null;
}

function getSectionLabel(sectionKey) {
    const section = finalSections.find((entry) => entry.key === sectionKey);
    return section ? section.label : sectionKey;
}

function getSectionHelperText(sectionKey) {
    switch (sectionKey) {
        case "control":
            return "Place the central control platform here.";
        case "initiating":
            return "Place smoke detectors, pull stations, and duct smoke detectors here.";
        case "notification":
            return "Place horn/strobes, speakers, and strobes here.";
        case "interfaces":
            return "Place the monitoring and control interfaces here.";
        default:
            return "Use the selected section to organize the system.";
    }
}

function getIncorrectPlacementMessage(component, sectionKey) {
    const sectionLabel = getSectionLabel(sectionKey);
    return `Not quite. A ${component.name.toLowerCase()} belongs in ${component.categoryLabel}, not ${sectionLabel}.`;
}

function showFeedback(element, message, tone) {
    if (!element) {
        return;
    }

    element.classList.remove("hidden", "correct", "incorrect", "warning");
    element.classList.add(tone);
    element.innerHTML = `<strong>${tone === "correct" ? "Correct." : tone === "warning" ? "Note." : "Incorrect."}</strong> ${escapeHTML(message)}`;
    builderState.lastFeedback = message;
}

function showNextModuleMessage() {
    nextModuleMessage.classList.remove("hidden");
    nextModuleMessage.className = "feedback-banner warning";
    nextModuleMessage.innerHTML = "<strong>Coming next.</strong> Wiring &amp; Connections is not available yet. When that module is created, this button will open it here instead of sending you to a 404.";
    nextModuleMessage.scrollIntoView({ behavior: "smooth", block: "center" });
}

function goToWiringConnections() {
    window.location.href = buildNavigationUrl("training/wiring/index.html");
}

function scrollToStep(stepNumber) {
    const panel = stepNumber === 6 && !stepPanels[6].classList.contains("hidden") ? stepPanels[6] : stepPanels[stepNumber];
    if (panel) {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Navigation functions are provided by global navigation.js
// Local overrides for module-specific navigation removed