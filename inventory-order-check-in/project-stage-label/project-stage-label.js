const EXAMPLE_DATA = {
    projectName: "Great River Montessori School",
    salesRepFullName: "-SD",
    systemType: "Fire Alarm",
    ticketNumber: "192815"
};

// Converts a sales rep's full name to initials (e.g. "Kyle Williams" -> "-KW").
// A short, space-free value (e.g. "-SD") is treated as already-formatted initials and passed through.
function fullNameToInitials(rawInput) {
    const trimmed = String(rawInput || "").trim();
    if (!trimmed) return null;

    if (/^-?[A-Za-z]{1,5}$/.test(trimmed)) {
        return "-" + trimmed.replace(/^-/, "").toUpperCase();
    }

    const initials = trimmed
        .split(/\s+/)
        .map((word) => word.replace(/[^A-Za-z]/g, ""))
        .filter(Boolean)
        .map((word) => word[0].toUpperCase())
        .join("");

    return initials ? "-" + initials : null;
}

function getFormValues() {
    return {
        projectName: document.getElementById("projectName").value.trim(),
        salesRepFullName: document.getElementById("salesRepFullName").value.trim(),
        systemType: document.getElementById("systemType").value.trim(),
        ticketNumber: document.getElementById("ticketNumber").value.trim()
    };
}

function setFieldValues(values) {
    document.getElementById("projectName").value = values.projectName;
    document.getElementById("salesRepFullName").value = values.salesRepFullName;
    document.getElementById("systemType").value = values.systemType;
    document.getElementById("ticketNumber").value = values.ticketNumber;
}

function renderLabel(values) {
    document.getElementById("labelProjectName").textContent = values.projectName;
    document.getElementById("labelSalesRepInitials").textContent = values.salesRepInitials;
    document.getElementById("labelSystemType").textContent = values.systemType;
    document.getElementById("labelTicketNumber").textContent = values.ticketNumber;
    document.getElementById("labelOutputSection").hidden = false;
}

function handleSubmit(event) {
    event.preventDefault();
    const values = getFormValues();
    const errorEl = document.getElementById("formError");
    const initials = fullNameToInitials(values.salesRepFullName);
    const isValid = values.projectName && initials && values.systemType && values.ticketNumber;

    if (!isValid) {
        errorEl.hidden = false;
        Array.from(document.querySelectorAll("#stageLabelForm input")).forEach((input) => {
            input.classList.add("touched");
        });
        document.getElementById("labelOutputSection").hidden = true;
        return;
    }

    errorEl.hidden = true;
    renderLabel({
        projectName: values.projectName,
        salesRepInitials: initials,
        systemType: values.systemType,
        ticketNumber: values.ticketNumber
    });
}

function handleUseExample() {
    setFieldValues(EXAMPLE_DATA);
    document.getElementById("formError").hidden = true;
}

function handlePrint() {
    window.print();
}

function setActiveMode(mode) {
    const isCreate = mode === "create";
    document.getElementById("createLabelPanel").hidden = !isCreate;
    document.getElementById("practiceScenariosPanel").hidden = isCreate;
    document.getElementById("createLabelModeBtn").classList.toggle("active", isCreate);
    document.getElementById("createLabelModeBtn").setAttribute("aria-selected", String(isCreate));
    document.getElementById("practiceModeBtn").classList.toggle("active", !isCreate);
    document.getElementById("practiceModeBtn").setAttribute("aria-selected", String(!isCreate));

    if (!isCreate && !scenarioSession.order.length) {
        startScenarioSession();
    }
}

// ==========================================
// Practice Scenarios
// ==========================================
const SCENARIO_FIELDS = [
    { key: "projectName", label: "Project Name", inputId: "scenarioProjectName" },
    { key: "salesRepInitials", label: "Sales Rep Initials", inputId: "scenarioSalesRepInitials" },
    { key: "systemType", label: "Type of System", inputId: "scenarioSystemType" },
    { key: "ticketNumber", label: "Ticket #", inputId: "scenarioTicketNumber" }
];

const scenarioSession = {
    order: [],
    currentIndex: 0,
    completed: 0,
    correct: 0,
    firstAttemptMade: false
};

function normalize(value) {
    return String(value || "").trim().toLowerCase();
}

// Canonicalizes a project name: trims, lowercases, collapses whitespace, and drops trailing/incidental punctuation.
// Intentionally exact-match after canonicalization -- no fuzzy/substring matching, so a different project name never passes.
function canonicalizeProjectName(value) {
    return normalize(value).replace(/\s+/g, " ").replace(/[.,]/g, "").trim();
}

// Canonicalizes Sales Rep Initials: trims, uppercases, strips internal whitespace and an optional leading dash.
function canonicalizeInitials(value) {
    return String(value || "").trim().toUpperCase().replace(/\s+/g, "").replace(/^-/, "");
}

// Canonicalizes a system type: trims, lowercases, collapses whitespace, and drops a single trailing "system" word.
// "Fire Alarm System" and "Fire Alarm" both canonicalize to "fire alarm"; combined/unrelated systems are left untouched
// (and therefore still rejected) since only a single trailing "system" token is stripped, never a substring match.
function canonicalizeSystemType(value) {
    return normalize(value).replace(/\s+/g, " ").replace(/\s+system$/, "").trim();
}

// Ticket numbers are compared strictly: trimmed exact match only, no normalization that could mask a PO/SO/invoice/tracking number.
function canonicalizeTicketNumber(value) {
    return String(value || "").trim();
}

// Checks a single field's entered value against a scenario's canonical answer plus any scenario-specific accepted variations.
function isFieldAnswerCorrect(fieldKey, enteredValue, scenario) {
    switch (fieldKey) {
        case "projectName": {
            const accepted = [scenario.projectName, ...(scenario.acceptedProjectNames || [])];
            const entered = canonicalizeProjectName(enteredValue);
            return accepted.some((value) => canonicalizeProjectName(value) === entered);
        }
        case "salesRepInitials": {
            const accepted = [scenario.salesRepInitials, ...(scenario.acceptedSalesRepInitials || [])];
            const entered = canonicalizeInitials(enteredValue);
            return accepted.some((value) => canonicalizeInitials(value) === entered);
        }
        case "systemType": {
            const accepted = [scenario.systemType, ...(scenario.acceptedSystemTypes || [])];
            const entered = canonicalizeSystemType(enteredValue);
            return accepted.some((value) => canonicalizeSystemType(value) === entered);
        }
        case "ticketNumber": {
            const accepted = [scenario.ticketNumber, ...(scenario.acceptedTicketNumbers || [])];
            const entered = canonicalizeTicketNumber(enteredValue);
            return accepted.some((value) => canonicalizeTicketNumber(value) === entered);
        }
        default:
            return false;
    }
}

function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startScenarioSession() {
    scenarioSession.order = shuffle(PROJECT_STAGE_LABEL_SCENARIOS.map((scenario) => scenario.id));
    scenarioSession.currentIndex = 0;
    scenarioSession.completed = 0;
    scenarioSession.correct = 0;
    document.getElementById("scenarioCompletePanel").hidden = true;
    document.getElementById("scenarioActivePanel").hidden = false;
    updateScenarioScoreDisplay();
    loadScenario();
}

function getCurrentScenario() {
    const id = scenarioSession.order[scenarioSession.currentIndex];
    return PROJECT_STAGE_LABEL_SCENARIOS.find((scenario) => scenario.id === id);
}

function loadScenario() {
    const scenario = getCurrentScenario();
    scenarioSession.firstAttemptMade = false;

    document.getElementById("scenarioDifficultyBadge").textContent = scenario.difficulty;
    document.getElementById("scenarioCounter").textContent = `Scenario ${scenarioSession.currentIndex + 1} of ${scenarioSession.order.length}`;
    document.getElementById("scenarioText").textContent = scenario.scenarioText;

    SCENARIO_FIELDS.forEach((field) => {
        document.getElementById(field.inputId).value = "";
    });
    document.getElementById("scenarioFormError").hidden = true;

    const feedback = document.getElementById("scenarioFeedback");
    feedback.hidden = true;
    document.getElementById("scenarioCorrectLabelWrap").hidden = true;
    document.getElementById("scenarioExplanation").hidden = true;
    document.getElementById("tryAgainBtn").hidden = true;
    document.getElementById("nextScenarioBtn").hidden = true;
    document.getElementById("scenarioForm").hidden = false;
}

function updateScenarioScoreDisplay() {
    const accuracy = scenarioSession.completed > 0 ? Math.round((scenarioSession.correct / scenarioSession.completed) * 100) : 0;
    document.getElementById("scenarioCompletedValue").textContent = scenarioSession.completed;
    document.getElementById("scenarioCorrectValue").textContent = scenarioSession.correct;
    document.getElementById("scenarioAccuracyValue").textContent = `${accuracy}%`;
}

function handleScenarioSubmit(event) {
    event.preventDefault();
    const scenario = getCurrentScenario();
    const entries = {};
    SCENARIO_FIELDS.forEach((field) => {
        entries[field.key] = document.getElementById(field.inputId).value;
    });

    const isFieldEmpty = SCENARIO_FIELDS.some((field) => !entries[field.key].trim());
    if (isFieldEmpty) {
        document.getElementById("scenarioFormError").hidden = false;
        return;
    }
    document.getElementById("scenarioFormError").hidden = true;

    const results = SCENARIO_FIELDS.map((field) => ({
        ...field,
        isCorrect: isFieldAnswerCorrect(field.key, entries[field.key], scenario)
    }));
    const allCorrect = results.every((result) => result.isCorrect);

    if (!scenarioSession.firstAttemptMade) {
        scenarioSession.firstAttemptMade = true;
        scenarioSession.completed++;
        if (allCorrect) {
            scenarioSession.correct++;
        }
        updateScenarioScoreDisplay();
    }

    renderScenarioFeedback(scenario, entries, results, allCorrect);
}

function renderScenarioFeedback(scenario, entries, results, allCorrect) {
    const feedback = document.getElementById("scenarioFeedback");
    const message = document.getElementById("scenarioFeedbackMessage");
    const checklist = document.getElementById("scenarioFieldChecklist");
    const explanation = document.getElementById("scenarioExplanation");
    const labelWrap = document.getElementById("scenarioCorrectLabelWrap");
    const tryAgainBtn = document.getElementById("tryAgainBtn");
    const nextScenarioBtn = document.getElementById("nextScenarioBtn");

    feedback.hidden = false;
    checklist.innerHTML = "";
    results.forEach((result) => {
        const li = document.createElement("li");
        li.className = result.isCorrect ? "correct" : "incorrect";
        li.textContent = `${result.isCorrect ? "✅" : "❌"} ${result.label}`;
        checklist.appendChild(li);
    });

    if (allCorrect) {
        message.textContent = "Correct!";
        explanation.textContent = "You correctly transferred the project information into the staging label.";
        explanation.hidden = false;

        document.getElementById("scenarioLabelProjectName").textContent = scenario.projectName;
        document.getElementById("scenarioLabelSalesRepInitials").textContent = scenario.salesRepInitials;
        document.getElementById("scenarioLabelSystemType").textContent = scenario.systemType;
        document.getElementById("scenarioLabelTicketNumber").textContent = scenario.ticketNumber;
        labelWrap.hidden = false;

        document.getElementById("scenarioForm").hidden = true;
        tryAgainBtn.hidden = true;
        nextScenarioBtn.hidden = false;
    } else {
        message.textContent = "Not quite — check the information in the scenario.";
        explanation.hidden = true;
        labelWrap.hidden = true;

        tryAgainBtn.hidden = false;
        nextScenarioBtn.hidden = true;
    }
}

function handleTryAgain() {
    document.getElementById("scenarioFeedback").hidden = true;
    document.getElementById("scenarioForm").hidden = false;
}

function handleNextScenario() {
    scenarioSession.currentIndex++;
    if (scenarioSession.currentIndex >= scenarioSession.order.length) {
        showScenarioCompletion();
        return;
    }
    loadScenario();
}

function showScenarioCompletion() {
    const accuracy = scenarioSession.completed > 0 ? Math.round((scenarioSession.correct / scenarioSession.completed) * 100) : 0;
    document.getElementById("finalCompletedValue").textContent = scenarioSession.completed;
    document.getElementById("finalCorrectValue").textContent = scenarioSession.correct;
    document.getElementById("finalAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("scenarioActivePanel").hidden = true;
    document.getElementById("scenarioCompletePanel").hidden = false;
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("stageLabelForm").addEventListener("submit", handleSubmit);
    document.getElementById("useExampleBtn").addEventListener("click", handleUseExample);
    document.getElementById("printLabelBtn").addEventListener("click", handlePrint);

    document.getElementById("createLabelModeBtn").addEventListener("click", () => setActiveMode("create"));
    document.getElementById("practiceModeBtn").addEventListener("click", () => setActiveMode("practice"));
    document.getElementById("scenarioForm").addEventListener("submit", handleScenarioSubmit);
    document.getElementById("tryAgainBtn").addEventListener("click", handleTryAgain);
    document.getElementById("nextScenarioBtn").addEventListener("click", handleNextScenario);
    document.getElementById("practiceAgainBtn").addEventListener("click", startScenarioSession);
});
