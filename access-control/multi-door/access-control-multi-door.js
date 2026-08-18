// ==========================================
// Access Control Multi-Door (V2) engine — separate from V1's access-control-scenarios.js
// ==========================================
const ACMD_DOOR_CATEGORIES = [
    { key: "reader", label: "Reader" },
    { key: "lockHardware", label: "Lock Hardware" },
    { key: "doorContact", label: "Door Contact" },
    { key: "rex", label: "REX" }
];

const ACMD_SYSTEM_CATEGORIES = [
    { key: "controller", label: "Controller / Interface" },
    { key: "powerSupply", label: "Power Supply" },
    { key: "interfaceModule", label: "Other Interface Equipment" }
];

const acmdSession = {
    order: [],
    currentIndex: 0,
    completed: 0,
    correctFirstAttempt: 0,
    correctDoorDecisions: 0,
    incorrectDoorDecisions: 0,
    correctProjectTotals: 0,
    incorrectProjectTotals: 0,
    firstAttemptMade: false
};

function acmdShuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getCurrentAcmdScenario() {
    const id = acmdSession.order[acmdSession.currentIndex];
    return ACCESS_CONTROL_MULTI_DOOR_SCENARIOS.find((scenario) => scenario.id === id);
}

function computeAcmdExpectedTotals(scenario) {
    const totals = { reader: 0, lockHardware: 0, doorContact: 0, rex: 0 };
    scenario.doors.forEach((door) => {
        ACMD_DOOR_CATEGORIES.forEach((cat) => {
            totals[cat.key] += door[cat.key] || 0;
        });
    });
    return totals;
}

function startAcmdSession() {
    acmdSession.order = acmdShuffle(ACCESS_CONTROL_MULTI_DOOR_SCENARIOS.map((scenario) => scenario.id));
    acmdSession.currentIndex = 0;
    acmdSession.completed = 0;
    acmdSession.correctFirstAttempt = 0;
    acmdSession.correctDoorDecisions = 0;
    acmdSession.incorrectDoorDecisions = 0;
    acmdSession.correctProjectTotals = 0;
    acmdSession.incorrectProjectTotals = 0;
    document.getElementById("acmdCompletePanel").hidden = true;
    document.getElementById("acmdActivePanel").hidden = false;
    updateAcmdScoreDisplay();
    loadAcmdScenario();
}

function updateAcmdScoreDisplay() {
    const accuracy = acmdSession.completed > 0 ? Math.round((acmdSession.correctFirstAttempt / acmdSession.completed) * 100) : 0;
    document.getElementById("acmdCompletedValue").textContent = acmdSession.completed;
    document.getElementById("acmdAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("acmdCorrectDoorValue").textContent = acmdSession.correctDoorDecisions;
    document.getElementById("acmdIncorrectDoorValue").textContent = acmdSession.incorrectDoorDecisions;
    document.getElementById("acmdCorrectTotalsValue").textContent = acmdSession.correctProjectTotals;
    document.getElementById("acmdIncorrectTotalsValue").textContent = acmdSession.incorrectProjectTotals;
}

function loadAcmdScenario() {
    const scenario = getCurrentAcmdScenario();
    acmdSession.firstAttemptMade = false;

    document.getElementById("acmdDifficultyBadge").textContent = scenario.difficulty;
    document.getElementById("acmdCounter").textContent = `Scenario ${acmdSession.currentIndex + 1} of ${acmdSession.order.length}`;
    document.getElementById("acmdProjectName").textContent = scenario.projectName;
    document.getElementById("acmdScenarioText").textContent = scenario.scenarioText;

    const doorsContainer = document.getElementById("acmdDoorsContainer");
    doorsContainer.innerHTML = "";
    scenario.doors.forEach((door) => {
        const card = document.createElement("div");
        card.className = "acmd-door-card";
        let html = `<h4>${door.label}</h4><div class="acmd-category-grid">${ACMD_DOOR_CATEGORIES.map((cat) => `
            <div class="acmd-category-field">
                <label for="acmd-door-${door.id}-${cat.key}">${cat.label}</label>
                <input type="number" min="0" max="9" step="1" id="acmd-door-${door.id}-${cat.key}" value="0">
            </div>`).join("")}</div>`;
        if (door.productQuestion) {
            html += `<div class="acmd-door-product">
                <p>${door.productQuestion.prompt}</p>
                <select id="acmd-product-${door.id}">
                    <option value="">-- Select a product --</option>
                    ${door.productQuestion.options.map((opt) => `<option value="${opt.id}">${opt.label}</option>`).join("")}
                </select>
            </div>`;
        }
        card.innerHTML = html;
        doorsContainer.appendChild(card);
    });

    const summaryFields = document.getElementById("acmdSummaryFields");
    summaryFields.innerHTML = ACMD_DOOR_CATEGORIES.map((cat) => `
        <div class="acmd-category-field">
            <label for="acmd-summary-${cat.key}">${cat.label}</label>
            <input type="number" min="0" max="99" step="1" id="acmd-summary-${cat.key}" value="0">
        </div>`).join("");

    const systemFields = document.getElementById("acmdSystemFields");
    systemFields.innerHTML = ACMD_SYSTEM_CATEGORIES.map((cat) => `
        <div class="acmd-category-field">
            <label for="acmd-system-${cat.key}">${cat.label}</label>
            <input type="number" min="0" max="9" step="1" id="acmd-system-${cat.key}" value="0">
        </div>`).join("");

    document.getElementById("acmdFormError").hidden = true;
    document.getElementById("acmdFeedback").hidden = true;
    document.getElementById("acmdExplanation").hidden = true;
    document.getElementById("acmdTryAgainBtn").hidden = true;
    document.getElementById("acmdNextScenarioBtn").hidden = true;
    document.getElementById("acmdForm").hidden = false;
}

function formatAcmdCategoryResult(label, entered, expected) {
    if (entered === expected) {
        return { text: `✅ ${label} — ${entered}`, correct: true };
    }
    if (expected === 0 && entered > 0) {
        return { text: `❌ ${label} — not required, but you entered ${entered}`, correct: false };
    }
    if (entered === 0 && expected > 0) {
        return { text: `❌ ${label} — missing (required ${expected})`, correct: false };
    }
    return { text: `❌ ${label} — you entered: ${entered}, required: ${expected}`, correct: false };
}

function handleAcmdSubmit(event) {
    event.preventDefault();
    const scenario = getCurrentAcmdScenario();

    const doorInputs = scenario.doors.map((door) => {
        const values = {};
        let hasInvalid = false;
        ACMD_DOOR_CATEGORIES.forEach((cat) => {
            const input = document.getElementById(`acmd-door-${door.id}-${cat.key}`);
            const value = Number(input.value);
            if (input.value === "" || Number.isNaN(value)) hasInvalid = true;
            values[cat.key] = value;
        });
        const productInput = door.productQuestion ? document.getElementById(`acmd-product-${door.id}`) : null;
        const productSelected = productInput ? productInput.value : null;
        const productMissing = Boolean(door.productQuestion) && !productSelected;
        return { door, values, hasInvalid, productSelected, productMissing };
    });

    const summaryValues = {};
    let summaryInvalid = false;
    ACMD_DOOR_CATEGORIES.forEach((cat) => {
        const input = document.getElementById(`acmd-summary-${cat.key}`);
        const value = Number(input.value);
        if (input.value === "" || Number.isNaN(value)) summaryInvalid = true;
        summaryValues[cat.key] = value;
    });

    const systemValues = {};
    let systemInvalid = false;
    ACMD_SYSTEM_CATEGORIES.forEach((cat) => {
        const input = document.getElementById(`acmd-system-${cat.key}`);
        const value = Number(input.value);
        if (input.value === "" || Number.isNaN(value)) systemInvalid = true;
        systemValues[cat.key] = value;
    });

    if (doorInputs.some((d) => d.hasInvalid || d.productMissing) || summaryInvalid || systemInvalid) {
        document.getElementById("acmdFormError").hidden = false;
        return;
    }
    document.getElementById("acmdFormError").hidden = true;

    const doorResults = doorInputs.map(({ door, values, productSelected }) => {
        const results = ACMD_DOOR_CATEGORIES.map((cat) => ({
            label: cat.label,
            ...formatAcmdCategoryResult(cat.label, values[cat.key], door[cat.key] || 0)
        }));
        let productResult = null;
        if (door.productQuestion) {
            const isCorrect = productSelected === door.productQuestion.correctOptionId;
            productResult = {
                label: "Product Selection",
                text: isCorrect ? "✅ Product Selection — correct" : "❌ Product Selection — incorrect choice",
                correct: isCorrect
            };
        }
        return { door, results, productResult };
    });

    const expectedTotals = computeAcmdExpectedTotals(scenario);
    const summaryResults = ACMD_DOOR_CATEGORIES.map((cat) => ({
        label: cat.label,
        ...formatAcmdCategoryResult(cat.label, summaryValues[cat.key], expectedTotals[cat.key])
    }));

    const systemResults = ACMD_SYSTEM_CATEGORIES.map((cat) => ({
        label: cat.label,
        ...formatAcmdCategoryResult(cat.label, systemValues[cat.key], scenario.systemEquipment[cat.key] || 0)
    }));

    const doorDecisions = doorResults.flatMap((d) => [...d.results, ...(d.productResult ? [d.productResult] : [])]);
    const systemDecisions = systemResults;
    const allDoorDecisions = [...doorDecisions, ...systemDecisions];
    const allCorrect = allDoorDecisions.every((r) => r.correct) && summaryResults.every((r) => r.correct);

    if (!acmdSession.firstAttemptMade) {
        acmdSession.firstAttemptMade = true;
        acmdSession.completed++;
        if (allCorrect) acmdSession.correctFirstAttempt++;
        allDoorDecisions.forEach((r) => {
            if (r.correct) acmdSession.correctDoorDecisions++;
            else acmdSession.incorrectDoorDecisions++;
        });
        summaryResults.forEach((r) => {
            if (r.correct) acmdSession.correctProjectTotals++;
            else acmdSession.incorrectProjectTotals++;
        });
        updateAcmdScoreDisplay();
    }

    renderAcmdFeedback(scenario, doorResults, summaryResults, systemResults, allCorrect);
}

function renderAcmdFeedback(scenario, doorResults, summaryResults, systemResults, allCorrect) {
    const feedback = document.getElementById("acmdFeedback");
    const message = document.getElementById("acmdFeedbackMessage");
    const detail = document.getElementById("acmdFeedbackDetail");
    const explanation = document.getElementById("acmdExplanation");
    const tryAgainBtn = document.getElementById("acmdTryAgainBtn");
    const nextScenarioBtn = document.getElementById("acmdNextScenarioBtn");

    feedback.hidden = false;
    detail.innerHTML = "";

    doorResults.forEach(({ door, results, productResult }) => {
        const allDoorItemsCorrect = results.every((r) => r.correct) && (!productResult || productResult.correct);
        const wrap = document.createElement("div");
        wrap.className = "acmd-result-block";
        const heading = document.createElement("h4");
        heading.textContent = door.label;
        wrap.appendChild(heading);
        if (!allDoorItemsCorrect && door.reasoning) {
            const note = document.createElement("p");
            note.className = "acmd-result-note";
            note.textContent = door.reasoning;
            wrap.appendChild(note);
        }
        const list = document.createElement("ul");
        list.className = "acmd-result-list";
        [...results, ...(productResult ? [productResult] : [])].forEach((r) => {
            const li = document.createElement("li");
            li.className = r.correct ? "correct" : "incorrect";
            li.textContent = r.text;
            list.appendChild(li);
        });
        wrap.appendChild(list);
        detail.appendChild(wrap);
    });

    const summaryAllCorrect = summaryResults.every((r) => r.correct);
    const summaryWrap = document.createElement("div");
    summaryWrap.className = "acmd-result-block";
    const summaryHeading = document.createElement("h4");
    summaryHeading.textContent = "Project Summary";
    summaryWrap.appendChild(summaryHeading);
    if (!summaryAllCorrect && scenario.summaryReasoning) {
        const note = document.createElement("p");
        note.className = "acmd-result-note";
        note.textContent = scenario.summaryReasoning;
        summaryWrap.appendChild(note);
    }
    const summaryList = document.createElement("ul");
    summaryList.className = "acmd-result-list";
    summaryResults.forEach((r) => {
        const li = document.createElement("li");
        li.className = r.correct ? "correct" : "incorrect";
        li.textContent = r.text;
        summaryList.appendChild(li);
    });
    summaryWrap.appendChild(summaryList);
    detail.appendChild(summaryWrap);

    const systemAllCorrect = systemResults.every((r) => r.correct);
    const systemWrap = document.createElement("div");
    systemWrap.className = "acmd-result-block";
    const systemHeading = document.createElement("h4");
    systemHeading.textContent = "System Equipment";
    systemWrap.appendChild(systemHeading);
    if (!systemAllCorrect && scenario.explanation) {
        const note = document.createElement("p");
        note.className = "acmd-result-note";
        note.textContent = scenario.explanation;
        systemWrap.appendChild(note);
    }
    const systemList = document.createElement("ul");
    systemList.className = "acmd-result-list";
    systemResults.forEach((r) => {
        const li = document.createElement("li");
        li.className = r.correct ? "correct" : "incorrect";
        li.textContent = r.text;
        systemList.appendChild(li);
    });
    systemWrap.appendChild(systemList);
    detail.appendChild(systemWrap);

    if (allCorrect) {
        message.textContent = "Correct!";
        explanation.textContent = scenario.explanation;
        explanation.hidden = false;
        document.getElementById("acmdForm").hidden = true;
        tryAgainBtn.hidden = true;
        nextScenarioBtn.hidden = false;
    } else {
        message.textContent = "Not quite — review the door-by-door and project totals below.";
        explanation.hidden = true;
        tryAgainBtn.hidden = false;
        nextScenarioBtn.hidden = true;
    }
}

function handleAcmdTryAgain() {
    document.getElementById("acmdFeedback").hidden = true;
    document.getElementById("acmdForm").hidden = false;
}

function handleAcmdNextScenario() {
    acmdSession.currentIndex++;
    if (acmdSession.currentIndex >= acmdSession.order.length) {
        showAcmdCompletion();
        return;
    }
    loadAcmdScenario();
}

function showAcmdCompletion() {
    const accuracy = acmdSession.completed > 0 ? Math.round((acmdSession.correctFirstAttempt / acmdSession.completed) * 100) : 0;
    const totalDecisions = acmdSession.correctDoorDecisions + acmdSession.incorrectDoorDecisions + acmdSession.correctProjectTotals + acmdSession.incorrectProjectTotals;
    const totalCorrect = acmdSession.correctDoorDecisions + acmdSession.correctProjectTotals;
    const overall = totalDecisions > 0 ? Math.round((totalCorrect / totalDecisions) * 100) : 0;

    document.getElementById("acmdFinalCompletedValue").textContent = acmdSession.completed;
    document.getElementById("acmdFinalAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("acmdFinalDoorValue").textContent = `${acmdSession.correctDoorDecisions} / ${acmdSession.correctDoorDecisions + acmdSession.incorrectDoorDecisions}`;
    document.getElementById("acmdFinalTotalsValue").textContent = `${acmdSession.correctProjectTotals} / ${acmdSession.correctProjectTotals + acmdSession.incorrectProjectTotals}`;
    document.getElementById("acmdFinalOverallValue").textContent = `${overall}%`;
    document.getElementById("acmdActivePanel").hidden = true;
    document.getElementById("acmdCompletePanel").hidden = false;
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("acmdForm").addEventListener("submit", handleAcmdSubmit);
    document.getElementById("acmdTryAgainBtn").addEventListener("click", handleAcmdTryAgain);
    document.getElementById("acmdNextScenarioBtn").addEventListener("click", handleAcmdNextScenario);
    document.getElementById("acmdPracticeAgainBtn").addEventListener("click", startAcmdSession);
    startAcmdSession();
});
