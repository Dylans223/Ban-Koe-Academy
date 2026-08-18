// ==========================================
// Access Control System Design (V3) engine — separate from V1/V2 engines
// ==========================================
const ACSD_DOOR_CATEGORIES = [
    { key: "reader", label: "Reader" },
    { key: "lockHardware", label: "Lock Hardware" },
    { key: "doorContact", label: "Door Contact" },
    { key: "rex", label: "REX" }
];

const ACSD_SYSTEM_CATEGORIES = [
    { key: "controller", label: "Controller / Interface" },
    { key: "powerSupply", label: "Power Supply" },
    { key: "interfaceModule", label: "Other Interface Equipment" }
];

const acsdSession = {
    order: [],
    currentIndex: 0,
    completed: 0,
    correctFirstAttempt: 0,
    correctDoorDecisions: 0,
    incorrectDoorDecisions: 0,
    correctSystemDecisions: 0,
    incorrectSystemDecisions: 0,
    correctProjectTotals: 0,
    incorrectProjectTotals: 0,
    firstAttemptMade: false
};

function acsdShuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getCurrentAcsdScenario() {
    const id = acsdSession.order[acsdSession.currentIndex];
    return ACCESS_CONTROL_SYSTEM_DESIGN_SCENARIOS.find((scenario) => scenario.id === id);
}

function computeAcsdExpectedTotals(scenario) {
    const totals = { reader: 0, lockHardware: 0, doorContact: 0, rex: 0 };
    scenario.doors.forEach((door) => {
        ACSD_DOOR_CATEGORIES.forEach((cat) => {
            totals[cat.key] += door[cat.key] || 0;
        });
    });
    return totals;
}

// Products used on 2+ doors trigger a dedicated "Product-Specific Equipment" totals section.
function computeAcsdProductTotals(scenario) {
    const counts = {};
    scenario.doors.forEach((door) => {
        if (door.productQuestion) {
            const id = door.productQuestion.correctOptionId;
            const option = door.productQuestion.options.find((opt) => opt.id === id);
            if (!counts[id]) counts[id] = { label: option.label, count: 0 };
            counts[id].count++;
        }
    });
    return counts;
}

function startAcsdSession() {
    acsdSession.order = acsdShuffle(ACCESS_CONTROL_SYSTEM_DESIGN_SCENARIOS.map((scenario) => scenario.id));
    acsdSession.currentIndex = 0;
    acsdSession.completed = 0;
    acsdSession.correctFirstAttempt = 0;
    acsdSession.correctDoorDecisions = 0;
    acsdSession.incorrectDoorDecisions = 0;
    acsdSession.correctSystemDecisions = 0;
    acsdSession.incorrectSystemDecisions = 0;
    acsdSession.correctProjectTotals = 0;
    acsdSession.incorrectProjectTotals = 0;
    document.getElementById("acsdCompletePanel").hidden = true;
    document.getElementById("acsdActivePanel").hidden = false;
    updateAcsdScoreDisplay();
    loadAcsdScenario();
}

function updateAcsdScoreDisplay() {
    const accuracy = acsdSession.completed > 0 ? Math.round((acsdSession.correctFirstAttempt / acsdSession.completed) * 100) : 0;
    document.getElementById("acsdCompletedValue").textContent = acsdSession.completed;
    document.getElementById("acsdAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("acsdCorrectDoorValue").textContent = acsdSession.correctDoorDecisions;
    document.getElementById("acsdIncorrectDoorValue").textContent = acsdSession.incorrectDoorDecisions;
    document.getElementById("acsdCorrectSystemValue").textContent = acsdSession.correctSystemDecisions;
    document.getElementById("acsdIncorrectSystemValue").textContent = acsdSession.incorrectSystemDecisions;
    document.getElementById("acsdCorrectTotalsValue").textContent = acsdSession.correctProjectTotals;
    document.getElementById("acsdIncorrectTotalsValue").textContent = acsdSession.incorrectProjectTotals;
}

function loadAcsdScenario() {
    const scenario = getCurrentAcsdScenario();
    acsdSession.firstAttemptMade = false;

    document.getElementById("acsdDifficultyBadge").textContent = scenario.difficulty;
    document.getElementById("acsdCounter").textContent = `Scenario ${acsdSession.currentIndex + 1} of ${acsdSession.order.length}`;
    document.getElementById("acsdProjectName").textContent = scenario.projectName;
    document.getElementById("acsdScenarioText").textContent = scenario.scenarioText;

    const doorsContainer = document.getElementById("acsdDoorsContainer");
    doorsContainer.innerHTML = "";
    scenario.doors.forEach((door) => {
        const card = document.createElement("div");
        card.className = "acsd-door-card";
        let html = `<h4>${door.label}</h4><div class="acsd-category-grid">${ACSD_DOOR_CATEGORIES.map((cat) => `
            <div class="acsd-category-field">
                <label for="acsd-door-${door.id}-${cat.key}">${cat.label}</label>
                <input type="number" min="0" max="9" step="1" id="acsd-door-${door.id}-${cat.key}" value="0">
            </div>`).join("")}</div>`;
        if (door.productQuestion) {
            html += `<div class="acsd-door-product">
                <p>${door.productQuestion.prompt}</p>
                <select id="acsd-product-${door.id}">
                    <option value="">-- Select a product --</option>
                    ${door.productQuestion.options.map((opt) => `<option value="${opt.id}">${opt.label}</option>`).join("")}
                </select>
            </div>`;
        }
        card.innerHTML = html;
        doorsContainer.appendChild(card);
    });

    const systemFields = document.getElementById("acsdSystemFields");
    systemFields.innerHTML = ACSD_SYSTEM_CATEGORIES.map((cat) => `
        <div class="acsd-category-field">
            <label for="acsd-system-${cat.key}">${cat.label}</label>
            <input type="number" min="0" max="9" step="1" id="acsd-system-${cat.key}" value="0">
        </div>`).join("");

    const productTotals = computeAcsdProductTotals(scenario);
    const productTotalsPanel = document.getElementById("acsdProductTotalsPanel");
    const productTotalsFields = document.getElementById("acsdProductTotalsFields");
    const productIdsNeedingTotals = Object.keys(productTotals).filter((id) => productTotals[id].count >= 2);
    if (productIdsNeedingTotals.length > 0) {
        productTotalsFields.innerHTML = productIdsNeedingTotals.map((id) => `
            <div class="acsd-category-field">
                <label for="acsd-producttotal-${id}">${productTotals[id].label}</label>
                <input type="number" min="0" max="20" step="1" id="acsd-producttotal-${id}" value="0">
            </div>`).join("");
        productTotalsPanel.hidden = false;
    } else {
        productTotalsFields.innerHTML = "";
        productTotalsPanel.hidden = true;
    }

    const summaryFields = document.getElementById("acsdSummaryFields");
    summaryFields.innerHTML = ACSD_DOOR_CATEGORIES.map((cat) => `
        <div class="acsd-category-field">
            <label for="acsd-summary-${cat.key}">${cat.label}</label>
            <input type="number" min="0" max="99" step="1" id="acsd-summary-${cat.key}" value="0">
        </div>`).join("");

    document.getElementById("acsdFormError").hidden = true;
    document.getElementById("acsdFeedback").hidden = true;
    document.getElementById("acsdExplanation").hidden = true;
    document.getElementById("acsdTryAgainBtn").hidden = true;
    document.getElementById("acsdNextScenarioBtn").hidden = true;
    document.getElementById("acsdForm").hidden = false;
}

function formatAcsdCategoryResult(label, entered, expected) {
    if (entered === expected) {
        return { text: `✅ ${label} — ${entered}`, correct: true };
    }
    if (expected === 0 && entered > 0) {
        return { text: `❌ ${label} — not required, but you entered ${entered}`, correct: false };
    }
    if (entered === 0 && expected > 0) {
        return { text: `❌ ${label}\nYou entered: 0\nRequired: ${expected}`, correct: false };
    }
    return { text: `❌ ${label}\nYou entered: ${entered}\nRequired: ${expected}`, correct: false };
}

function handleAcsdSubmit(event) {
    event.preventDefault();
    const scenario = getCurrentAcsdScenario();

    const doorInputs = scenario.doors.map((door) => {
        const values = {};
        let hasInvalid = false;
        ACSD_DOOR_CATEGORIES.forEach((cat) => {
            const input = document.getElementById(`acsd-door-${door.id}-${cat.key}`);
            const value = Number(input.value);
            if (input.value === "" || Number.isNaN(value)) hasInvalid = true;
            values[cat.key] = value;
        });
        const productInput = door.productQuestion ? document.getElementById(`acsd-product-${door.id}`) : null;
        const productSelected = productInput ? productInput.value : null;
        const productMissing = Boolean(door.productQuestion) && !productSelected;
        return { door, values, hasInvalid, productSelected, productMissing };
    });

    const summaryValues = {};
    let summaryInvalid = false;
    ACSD_DOOR_CATEGORIES.forEach((cat) => {
        const input = document.getElementById(`acsd-summary-${cat.key}`);
        const value = Number(input.value);
        if (input.value === "" || Number.isNaN(value)) summaryInvalid = true;
        summaryValues[cat.key] = value;
    });

    const systemValues = {};
    let systemInvalid = false;
    ACSD_SYSTEM_CATEGORIES.forEach((cat) => {
        const input = document.getElementById(`acsd-system-${cat.key}`);
        const value = Number(input.value);
        if (input.value === "" || Number.isNaN(value)) systemInvalid = true;
        systemValues[cat.key] = value;
    });

    const productTotals = computeAcsdProductTotals(scenario);
    const productIdsNeedingTotals = Object.keys(productTotals).filter((id) => productTotals[id].count >= 2);
    const productTotalValues = {};
    let productTotalsInvalid = false;
    productIdsNeedingTotals.forEach((id) => {
        const input = document.getElementById(`acsd-producttotal-${id}`);
        const value = Number(input.value);
        if (input.value === "" || Number.isNaN(value)) productTotalsInvalid = true;
        productTotalValues[id] = value;
    });

    if (doorInputs.some((d) => d.hasInvalid || d.productMissing) || summaryInvalid || systemInvalid || productTotalsInvalid) {
        document.getElementById("acsdFormError").hidden = false;
        return;
    }
    document.getElementById("acsdFormError").hidden = true;

    const doorResults = doorInputs.map(({ door, values, productSelected }) => {
        const results = ACSD_DOOR_CATEGORIES.map((cat) => ({
            label: cat.label,
            ...formatAcsdCategoryResult(cat.label, values[cat.key], door[cat.key] || 0)
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

    const expectedTotals = computeAcsdExpectedTotals(scenario);
    const summaryResults = ACSD_DOOR_CATEGORIES.map((cat) => ({
        label: cat.label,
        ...formatAcsdCategoryResult(cat.label, summaryValues[cat.key], expectedTotals[cat.key])
    }));

    const systemResults = ACSD_SYSTEM_CATEGORIES.map((cat) => ({
        label: cat.label,
        ...formatAcsdCategoryResult(cat.label, systemValues[cat.key], scenario.systemEquipment[cat.key] || 0)
    }));

    const productTotalResults = productIdsNeedingTotals.map((id) => ({
        label: productTotals[id].label,
        ...formatAcsdCategoryResult(productTotals[id].label, productTotalValues[id], productTotals[id].count)
    }));

    const doorDecisions = doorResults.flatMap((d) => [...d.results, ...(d.productResult ? [d.productResult] : [])]);
    const systemDecisions = systemResults;
    const totalDecisions = [...summaryResults, ...productTotalResults];
    const allCorrect = doorDecisions.every((r) => r.correct) && systemDecisions.every((r) => r.correct) && totalDecisions.every((r) => r.correct);

    if (!acsdSession.firstAttemptMade) {
        acsdSession.firstAttemptMade = true;
        acsdSession.completed++;
        if (allCorrect) acsdSession.correctFirstAttempt++;
        doorDecisions.forEach((r) => {
            if (r.correct) acsdSession.correctDoorDecisions++;
            else acsdSession.incorrectDoorDecisions++;
        });
        systemDecisions.forEach((r) => {
            if (r.correct) acsdSession.correctSystemDecisions++;
            else acsdSession.incorrectSystemDecisions++;
        });
        totalDecisions.forEach((r) => {
            if (r.correct) acsdSession.correctProjectTotals++;
            else acsdSession.incorrectProjectTotals++;
        });
        updateAcsdScoreDisplay();
    }

    renderAcsdFeedback(scenario, doorResults, summaryResults, systemResults, productTotalResults, allCorrect);
}

function appendAcsdResultBlock(container, title, results, noteText) {
    const wrap = document.createElement("div");
    wrap.className = "acsd-result-block";
    const heading = document.createElement("h4");
    heading.textContent = title;
    wrap.appendChild(heading);
    const allCorrect = results.every((r) => r.correct);
    if (!allCorrect && noteText) {
        const note = document.createElement("p");
        note.className = "acsd-result-note";
        note.textContent = noteText;
        wrap.appendChild(note);
    }
    const list = document.createElement("ul");
    list.className = "acsd-result-list";
    results.forEach((r) => {
        const li = document.createElement("li");
        li.className = r.correct ? "correct" : "incorrect";
        li.textContent = r.text;
        list.appendChild(li);
    });
    wrap.appendChild(list);
    container.appendChild(wrap);
}

function renderAcsdFeedback(scenario, doorResults, summaryResults, systemResults, productTotalResults, allCorrect) {
    const feedback = document.getElementById("acsdFeedback");
    const message = document.getElementById("acsdFeedbackMessage");
    const detail = document.getElementById("acsdFeedbackDetail");
    const explanation = document.getElementById("acsdExplanation");
    const tryAgainBtn = document.getElementById("acsdTryAgainBtn");
    const nextScenarioBtn = document.getElementById("acsdNextScenarioBtn");

    feedback.hidden = false;
    detail.innerHTML = "";

    doorResults.forEach(({ door, results, productResult }) => {
        appendAcsdResultBlock(detail, door.label, [...results, ...(productResult ? [productResult] : [])], door.reasoning);
    });

    appendAcsdResultBlock(detail, "System Equipment", systemResults, scenario.systemReasoning);

    if (productTotalResults.length > 0) {
        appendAcsdResultBlock(detail, "Product-Specific Equipment", productTotalResults, scenario.explanation);
    }

    appendAcsdResultBlock(detail, "Project Summary (Door Devices)", summaryResults, scenario.summaryReasoning);

    if (allCorrect) {
        message.textContent = "Correct!";
        explanation.textContent = scenario.explanation;
        explanation.hidden = false;
        document.getElementById("acsdForm").hidden = true;
        tryAgainBtn.hidden = true;
        nextScenarioBtn.hidden = false;
    } else {
        message.textContent = "Not quite — review the sections below.";
        explanation.hidden = true;
        tryAgainBtn.hidden = false;
        nextScenarioBtn.hidden = true;
    }
}

function handleAcsdTryAgain() {
    document.getElementById("acsdFeedback").hidden = true;
    document.getElementById("acsdForm").hidden = false;
}

function handleAcsdNextScenario() {
    acsdSession.currentIndex++;
    if (acsdSession.currentIndex >= acsdSession.order.length) {
        showAcsdCompletion();
        return;
    }
    loadAcsdScenario();
}

function showAcsdCompletion() {
    const accuracy = acsdSession.completed > 0 ? Math.round((acsdSession.correctFirstAttempt / acsdSession.completed) * 100) : 0;
    const totalDecisions = acsdSession.correctDoorDecisions + acsdSession.incorrectDoorDecisions
        + acsdSession.correctSystemDecisions + acsdSession.incorrectSystemDecisions
        + acsdSession.correctProjectTotals + acsdSession.incorrectProjectTotals;
    const totalCorrect = acsdSession.correctDoorDecisions + acsdSession.correctSystemDecisions + acsdSession.correctProjectTotals;
    const overall = totalDecisions > 0 ? Math.round((totalCorrect / totalDecisions) * 100) : 0;

    document.getElementById("acsdFinalCompletedValue").textContent = acsdSession.completed;
    document.getElementById("acsdFinalAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("acsdFinalDoorValue").textContent = `${acsdSession.correctDoorDecisions} / ${acsdSession.correctDoorDecisions + acsdSession.incorrectDoorDecisions}`;
    document.getElementById("acsdFinalSystemValue").textContent = `${acsdSession.correctSystemDecisions} / ${acsdSession.correctSystemDecisions + acsdSession.incorrectSystemDecisions}`;
    document.getElementById("acsdFinalTotalsValue").textContent = `${acsdSession.correctProjectTotals} / ${acsdSession.correctProjectTotals + acsdSession.incorrectProjectTotals}`;
    document.getElementById("acsdFinalOverallValue").textContent = `${overall}%`;
    document.getElementById("acsdActivePanel").hidden = true;
    document.getElementById("acsdCompletePanel").hidden = false;
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("acsdForm").addEventListener("submit", handleAcsdSubmit);
    document.getElementById("acsdTryAgainBtn").addEventListener("click", handleAcsdTryAgain);
    document.getElementById("acsdNextScenarioBtn").addEventListener("click", handleAcsdNextScenario);
    document.getElementById("acsdPracticeAgainBtn").addEventListener("click", startAcsdSession);
    startAcsdSession();
});
