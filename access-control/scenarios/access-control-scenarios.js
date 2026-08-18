// ==========================================
// Access Control Scenarios engine
// ==========================================
const DOOR_CATEGORIES = [
    { key: "reader", label: "Reader" },
    { key: "lockHardware", label: "Lock Hardware" },
    { key: "doorContact", label: "Door Contact" },
    { key: "rex", label: "REX" }
];

const SYSTEM_CATEGORIES = [
    { key: "controller", label: "Controller / Interface" },
    { key: "powerSupply", label: "Power Supply" },
    { key: "interfaceModule", label: "Other Interface Equipment" }
];

const acsSession = {
    order: [],
    currentIndex: 0,
    completed: 0,
    correctFirstAttempt: 0,
    correctDecisions: 0,
    incorrectDecisions: 0,
    firstAttemptMade: false
};

function acsShuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getCurrentAcsScenario() {
    const id = acsSession.order[acsSession.currentIndex];
    return ACCESS_CONTROL_SCENARIOS.find((scenario) => scenario.id === id);
}

function startAcsSession() {
    acsSession.order = acsShuffle(ACCESS_CONTROL_SCENARIOS.map((scenario) => scenario.id));
    acsSession.currentIndex = 0;
    acsSession.completed = 0;
    acsSession.correctFirstAttempt = 0;
    acsSession.correctDecisions = 0;
    acsSession.incorrectDecisions = 0;
    document.getElementById("acsCompletePanel").hidden = true;
    document.getElementById("acsActivePanel").hidden = false;
    updateAcsScoreDisplay();
    loadAcsScenario();
}

function updateAcsScoreDisplay() {
    const accuracy = acsSession.completed > 0 ? Math.round((acsSession.correctFirstAttempt / acsSession.completed) * 100) : 0;
    document.getElementById("acsCompletedValue").textContent = acsSession.completed;
    document.getElementById("acsAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("acsCorrectDecisionsValue").textContent = acsSession.correctDecisions;
    document.getElementById("acsIncorrectDecisionsValue").textContent = acsSession.incorrectDecisions;
}

function loadAcsScenario() {
    const scenario = getCurrentAcsScenario();
    acsSession.firstAttemptMade = false;

    document.getElementById("acsDifficultyBadge").textContent = scenario.difficulty;
    document.getElementById("acsCounter").textContent = `Scenario ${acsSession.currentIndex + 1} of ${acsSession.order.length}`;
    document.getElementById("acsTitle").textContent = scenario.title;
    document.getElementById("acsScenarioText").textContent = scenario.scenarioText;

    const doorsContainer = document.getElementById("acsDoorsContainer");
    doorsContainer.innerHTML = "";
    scenario.doors.forEach((door) => {
        const card = document.createElement("div");
        card.className = "acs-door-card";
        card.innerHTML = `<h4>${door.label}</h4><div class="acs-category-grid">${DOOR_CATEGORIES.map((cat) => `
            <div class="acs-category-field">
                <label for="door-${door.id}-${cat.key}">${cat.label}</label>
                <input type="number" min="0" max="9" step="1" id="door-${door.id}-${cat.key}" value="0">
            </div>`).join("")}</div>`;
        doorsContainer.appendChild(card);
    });

    const systemFields = document.getElementById("acsSystemFields");
    systemFields.innerHTML = SYSTEM_CATEGORIES.map((cat) => `
        <div class="acs-category-field">
            <label for="system-${cat.key}">${cat.label}</label>
            <input type="number" min="0" max="9" step="1" id="system-${cat.key}" value="0">
        </div>`).join("");

    const productWrap = document.getElementById("acsProductQuestionWrap");
    const productSelect = document.getElementById("acsProductSelect");
    if (scenario.productQuestion) {
        document.getElementById("acsProductPrompt").textContent = scenario.productQuestion.prompt;
        productSelect.innerHTML = `<option value="">-- Select a product --</option>` +
            scenario.productQuestion.options.map((opt) => `<option value="${opt.id}">${opt.label}</option>`).join("");
        productWrap.hidden = false;
    } else {
        productWrap.hidden = true;
        productSelect.innerHTML = `<option value="">-- Select a product --</option>`;
    }

    document.getElementById("acsFormError").hidden = true;
    const feedback = document.getElementById("acsFeedback");
    feedback.hidden = true;
    document.getElementById("acsExplanation").hidden = true;
    document.getElementById("acsTryAgainBtn").hidden = true;
    document.getElementById("acsNextScenarioBtn").hidden = true;
    document.getElementById("acsForm").hidden = false;
}

function formatCategoryResult(label, entered, expected) {
    if (entered === expected) {
        return { text: `✅ ${label} — ${entered}`, correct: true };
    }
    if (expected === 0 && entered > 0) {
        return { text: `❌ ${label} — not required, but you entered ${entered}`, correct: false };
    }
    if (entered === 0 && expected > 0) {
        return { text: `❌ ${label} — missing (required ${expected})`, correct: false };
    }
    return { text: `❌ ${label} — entered ${entered}, required ${expected}`, correct: false };
}

function handleAcsSubmit(event) {
    event.preventDefault();
    const scenario = getCurrentAcsScenario();

    const doorInputs = scenario.doors.map((door) => {
        const values = {};
        let hasInvalid = false;
        DOOR_CATEGORIES.forEach((cat) => {
            const input = document.getElementById(`door-${door.id}-${cat.key}`);
            const value = Number(input.value);
            if (input.value === "" || Number.isNaN(value)) hasInvalid = true;
            values[cat.key] = value;
        });
        return { door, values, hasInvalid };
    });

    const systemValues = {};
    let systemInvalid = false;
    SYSTEM_CATEGORIES.forEach((cat) => {
        const input = document.getElementById(`system-${cat.key}`);
        const value = Number(input.value);
        if (input.value === "" || Number.isNaN(value)) systemInvalid = true;
        systemValues[cat.key] = value;
    });

    const productSelect = document.getElementById("acsProductSelect");
    const productSelected = scenario.productQuestion ? productSelect.value : null;
    const productMissing = Boolean(scenario.productQuestion) && !productSelected;

    if (doorInputs.some((d) => d.hasInvalid) || systemInvalid || productMissing) {
        document.getElementById("acsFormError").hidden = false;
        return;
    }
    document.getElementById("acsFormError").hidden = true;

    const doorResults = doorInputs.map(({ door, values }) => ({
        door,
        results: DOOR_CATEGORIES.map((cat) => ({
            label: cat.label,
            ...formatCategoryResult(cat.label, values[cat.key], door[cat.key] || 0)
        }))
    }));

    const systemResults = SYSTEM_CATEGORIES.map((cat) => ({
        label: cat.label,
        ...formatCategoryResult(cat.label, systemValues[cat.key], scenario.systemEquipment[cat.key] || 0)
    }));

    let productResult = null;
    if (scenario.productQuestion) {
        const isCorrect = productSelected === scenario.productQuestion.correctOptionId;
        productResult = {
            label: "Product Selection",
            text: isCorrect ? "✅ Product Selection — correct" : "❌ Product Selection — incorrect choice",
            correct: isCorrect
        };
    }

    const allDecisions = [
        ...doorResults.flatMap((d) => d.results),
        ...systemResults,
        ...(productResult ? [productResult] : [])
    ];
    const allCorrect = allDecisions.every((r) => r.correct);

    if (!acsSession.firstAttemptMade) {
        acsSession.firstAttemptMade = true;
        acsSession.completed++;
        if (allCorrect) acsSession.correctFirstAttempt++;
        allDecisions.forEach((r) => {
            if (r.correct) acsSession.correctDecisions++;
            else acsSession.incorrectDecisions++;
        });
        updateAcsScoreDisplay();
    }

    renderAcsFeedback(scenario, doorResults, systemResults, productResult, allCorrect);
}

function renderAcsFeedback(scenario, doorResults, systemResults, productResult, allCorrect) {
    const feedback = document.getElementById("acsFeedback");
    const message = document.getElementById("acsFeedbackMessage");
    const detail = document.getElementById("acsFeedbackDetail");
    const explanation = document.getElementById("acsExplanation");
    const tryAgainBtn = document.getElementById("acsTryAgainBtn");
    const nextScenarioBtn = document.getElementById("acsNextScenarioBtn");

    feedback.hidden = false;
    detail.innerHTML = "";

    doorResults.forEach(({ door, results }) => {
        const wrap = document.createElement("div");
        wrap.className = "acs-door-result";
        const heading = document.createElement("h4");
        heading.textContent = door.label;
        wrap.appendChild(heading);
        const list = document.createElement("ul");
        list.className = "acs-result-list";
        results.forEach((r) => {
            const li = document.createElement("li");
            li.className = r.correct ? "correct" : "incorrect";
            li.textContent = r.text;
            list.appendChild(li);
        });
        wrap.appendChild(list);
        detail.appendChild(wrap);
    });

    const systemWrap = document.createElement("div");
    systemWrap.className = "acs-door-result";
    const systemHeading = document.createElement("h4");
    systemHeading.textContent = "System Equipment";
    systemWrap.appendChild(systemHeading);
    const systemList = document.createElement("ul");
    systemList.className = "acs-result-list";
    systemResults.forEach((r) => {
        const li = document.createElement("li");
        li.className = r.correct ? "correct" : "incorrect";
        li.textContent = r.text;
        systemList.appendChild(li);
    });
    systemWrap.appendChild(systemList);
    detail.appendChild(systemWrap);

    if (productResult) {
        const productWrap = document.createElement("div");
        productWrap.className = "acs-door-result";
        const productHeading = document.createElement("h4");
        productHeading.textContent = "Product Selection";
        productWrap.appendChild(productHeading);
        const productList = document.createElement("ul");
        productList.className = "acs-result-list";
        const li = document.createElement("li");
        li.className = productResult.correct ? "correct" : "incorrect";
        li.textContent = productResult.text;
        productList.appendChild(li);
        productWrap.appendChild(productList);
        detail.appendChild(productWrap);
    }

    if (allCorrect) {
        message.textContent = "Correct!";
        explanation.textContent = scenario.explanation;
        explanation.hidden = false;
        document.getElementById("acsForm").hidden = true;
        tryAgainBtn.hidden = true;
        nextScenarioBtn.hidden = false;
    } else {
        message.textContent = "Not quite — review the equipment list below.";
        explanation.hidden = true;
        tryAgainBtn.hidden = false;
        nextScenarioBtn.hidden = true;
    }
}

function handleAcsTryAgain() {
    document.getElementById("acsFeedback").hidden = true;
    document.getElementById("acsForm").hidden = false;
}

function handleAcsNextScenario() {
    acsSession.currentIndex++;
    if (acsSession.currentIndex >= acsSession.order.length) {
        showAcsCompletion();
        return;
    }
    loadAcsScenario();
}

function showAcsCompletion() {
    const accuracy = acsSession.completed > 0 ? Math.round((acsSession.correctFirstAttempt / acsSession.completed) * 100) : 0;
    document.getElementById("acsFinalCompletedValue").textContent = acsSession.completed;
    document.getElementById("acsFinalAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("acsFinalCorrectDecisionsValue").textContent = acsSession.correctDecisions;
    document.getElementById("acsFinalIncorrectDecisionsValue").textContent = acsSession.incorrectDecisions;
    document.getElementById("acsActivePanel").hidden = true;
    document.getElementById("acsCompletePanel").hidden = false;
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("acsForm").addEventListener("submit", handleAcsSubmit);
    document.getElementById("acsTryAgainBtn").addEventListener("click", handleAcsTryAgain);
    document.getElementById("acsNextScenarioBtn").addEventListener("click", handleAcsNextScenario);
    document.getElementById("acsPracticeAgainBtn").addEventListener("click", startAcsSession);
    startAcsSession();
});
