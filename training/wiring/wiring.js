// ===============================================
// Ban-Koe Academy
// Wiring & Connections Module
// ===============================================

const wiringData = {
    circuits: [
        {
            id: "slc",
            name: "SLC",
            fullName: "Signaling Line Circuit",
            category: "communication",
            description: "An SLC is used for communication with addressable initiating devices and other compatible addressable devices on the system.",
            typicalFunction: "Primarily communication / device signaling"
        },
        {
            id: "nac",
            name: "NAC",
            fullName: "Notification Appliance Circuit",
            category: "notification",
            description: "A NAC is used to provide power/output to notification appliances such as horns, strobes, or horn/strobes, depending on the system design.",
            typicalFunction: "Primarily notification output"
        }
    ],
    wireSizes: [
        {
            id: "18-2",
            name: "18/2",
            gauge: 18,
            conductors: 2,
            summary: "Common smaller conductor size used in appropriate low-voltage applications."
        },
        {
            id: "14-2",
            name: "14/2",
            gauge: 14,
            conductors: 2,
            summary: "Larger conductor than 18 AWG."
        },
        {
            id: "12-2",
            name: "12/2",
            gauge: 12,
            conductors: 2,
            summary: "Larger conductor than 14 AWG."
        }
    ],
    modules: [
        {
            id: "monitor",
            name: "Monitor Module",
            category: "input",
            description: "Used to monitor an input/contact or supervised external device and report its condition to the fire alarm system, depending on the system design.",
            memoryAid: "What's happening?"
        },
        {
            id: "control",
            name: "Control Module",
            category: "output",
            description: "Used to provide a controlled output to an external device or circuit, depending on the module and system design.",
            memoryAid: "Make something happen."
        }
    ],
    relayTerminals: [
        {
            id: "com",
            name: "COM",
            meaning: "Common",
            explanation: "COM is the shared contact reference for a relay output path."
        },
        {
            id: "no",
            name: "NO",
            meaning: "Normally Open",
            explanation: "NO is open in the normal state and closes when the relay changes state."
        },
        {
            id: "nc",
            name: "NC",
            meaning: "Normally Closed",
            explanation: "NC is closed in the normal state and opens when the relay changes state."
        }
    ],
    isolatorConcept: {
        description: "An isolator is used in certain addressable systems to help isolate a shorted section of the circuit so that the rest of the loop can continue operating, depending on the system architecture.",
        purpose: "Help isolate a shorted section of an addressable circuit."
    },
    traceExercises: [
        {
            id: "trace-1",
            title: "Exercise 1: Trace the basic addressable device communication path.",
            nodes: ["FACP", "SLC", "Addressable Device"],
            trainingNote: "Conceptual path only. Actual architecture depends on design and manufacturer documentation."
        },
        {
            id: "trace-2",
            title: "Exercise 2: Trace a notification circuit.",
            nodes: ["FACP", "NAC", "Notification Appliance"],
            trainingNote: "Conceptual path only."
        },
        {
            id: "trace-3",
            title: "Exercise 3: Trace a monitored external input.",
            nodes: ["External Contact / Device", "Monitor/Input Interface", "SLC / System", "FACP"],
            trainingNote: "Conceptual path only."
        },
        {
            id: "trace-4",
            title: "Exercise 4: Trace a control interface.",
            nodes: ["FACP / Control Logic", "Control Module / Relay Interface", "External System"],
            trainingNote: "Conceptual path only."
        }
    ],
    troubleshootingCases: [
        {
            id: "trouble-1",
            title: "Scenario 1",
            problem: "The fire alarm panel is not receiving the expected input from an external monitored device.",
            options: [
                "Incorrect module/function",
                "Wiring issue",
                "Open circuit",
                "Incorrect termination",
                "Configuration/programming issue",
                "Device issue"
            ],
            guidance: "Multiple categories can be valid. Start with a systematic check from wiring and configuration to device operation."
        },
        {
            id: "trouble-2",
            title: "Scenario 2",
            problem: "A notification appliance circuit is not operating as expected.",
            options: [
                "Circuit wiring",
                "Power",
                "Appliance compatibility",
                "Circuit configuration",
                "Open/short condition",
                "Device issue"
            ],
            guidance: "Investigate power and circuit integrity first, then compatibility and configuration."
        },
        {
            id: "trouble-3",
            title: "Scenario 3",
            problem: "An HVAC shutdown output is not producing the expected response.",
            options: [
                "Correct control interface",
                "Relay operation",
                "External HVAC interface",
                "Wiring",
                "Configuration",
                "Power",
                "Building system interface"
            ],
            guidance: "Use a sequence: output command, interface/relay behavior, then external system response."
        }
    ],
    questions: {
        circuitQuiz: [
            {
                id: "circuit-q1",
                prompt: "Which circuit would you generally associate with addressable device communication?",
                options: ["SLC", "NAC"],
                answer: "SLC"
            },
            {
                id: "circuit-q2",
                prompt: "Which circuit would you generally associate with notification appliances?",
                options: ["SLC", "NAC"],
                answer: "NAC"
            }
        ],
        wireQuiz: [
            {
                id: "wire-q1",
                prompt: "Which conductor is physically larger: 18/2 or 14/2?",
                options: ["18/2", "14/2"],
                answer: "14/2"
            },
            {
                id: "wire-q2",
                prompt: "Which conductor is physically larger: 14/2 or 12/2?",
                options: ["14/2", "12/2"],
                answer: "12/2"
            },
            {
                id: "wire-q3",
                prompt: "What does /2 indicate?",
                options: ["Two conductors", "Two circuits", "Two panels", "Two modules"],
                answer: "Two conductors"
            }
        ],
        moduleScenarios: [
            {
                id: "module-q1",
                prompt: "A duct detector has an alarm contact that needs to be monitored by the fire alarm system.",
                question: "Would you investigate a monitor/input function or a control/output function?",
                options: ["Monitor/Input", "Control/Output"],
                answer: "Monitor/Input"
            },
            {
                id: "module-q2",
                prompt: "The fire alarm system needs to provide a control signal to an external HVAC shutdown interface.",
                question: "Would you investigate a monitor/input function or a control/output function?",
                options: ["Monitor/Input", "Control/Output"],
                answer: "Control/Output"
            }
        ],
        relayScenario: {
            id: "relay-q1",
            prompt: "A fire alarm condition needs to cause an external device to change state.",
            question: "Why might a relay/interface be used?",
            options: [
                "To provide an electrical switching/interface function between the fire alarm control and an external circuit, when appropriate for the design.",
                "To replace all notification appliances",
                "To make every circuit addressable",
                "To bypass system logic"
            ],
            answer: "To provide an electrical switching/interface function between the fire alarm control and an external circuit, when appropriate for the design."
        },
        isolatorQuiz: {
            id: "isolator-q1",
            prompt: "What is the primary purpose of an isolator?",
            options: [
                "Increase speaker volume",
                "Help isolate a shorted section of an addressable circuit",
                "Replace the control panel",
                "Provide NAC power"
            ],
            answer: "Help isolate a shorted section of an addressable circuit"
        },
        finalChallenge: [
            {
                id: "final-q1",
                prompt: "Addressable smoke detectors and pull stations primarily point you to which circuit type?",
                options: ["SLC", "NAC", "Either always", "Battery circuit"],
                answer: "SLC"
            },
            {
                id: "final-q2",
                prompt: "For an external monitored contact, which function is most directly involved?",
                options: ["Monitor/Input", "Control/Output", "Notification-only", "Speaker tap"],
                answer: "Monitor/Input"
            },
            {
                id: "final-q3",
                prompt: "Where is a relay/interface often relevant in this scenario?",
                options: ["HVAC shutdown control path", "Detector sensitivity test only", "Label printing", "Panel enclosure color"],
                answer: "HVAC shutdown control path"
            },
            {
                id: "final-q4",
                prompt: "Where could an isolator concept be relevant?",
                options: ["Addressable loop short isolation strategy", "Speaker watt tap selection only", "Battery shelf location", "Cabinet paint"],
                answer: "Addressable loop short isolation strategy"
            },
            {
                id: "final-q5",
                prompt: "Which troubleshooting approach is most effective?",
                options: ["Replace random devices first", "Use a systematic check of wiring, configuration, interfaces, and device operation", "Ignore documentation", "Skip external system checks"],
                answer: "Use a systematic check of wiring, configuration, interfaces, and device operation"
            }
        ]
    }
};

const wiringState = {
    currentStep: 1,
    selectedCircuitCard: null,
    answers: {},
    relayTerminalsViewed: {},
    traceProgress: {},
    traceCompleted: {},
    troubleshootingSelections: {},
    completionVisible: false
};

const el = {
    navButtons: document.querySelectorAll("[data-nav-target]"),
    stepIndicator: document.getElementById("stepIndicator"),
    progressFill: document.getElementById("progressFill"),
    progressValue: document.getElementById("progressValue"),
    steps: {
        1: document.getElementById("step1"),
        2: document.getElementById("step2"),
        3: document.getElementById("step3"),
        4: document.getElementById("step4"),
        5: document.getElementById("step5"),
        6: document.getElementById("step6"),
        7: document.getElementById("step7")
    },
    completion: document.getElementById("completion"),
    circuitCards: document.querySelectorAll("[data-circuit-card]"),
    circuitFeedback: document.getElementById("circuitFeedback"),
    circuitQuiz: document.getElementById("circuitQuiz"),
    wireCards: document.getElementById("wireCards"),
    wireQuiz: document.getElementById("wireQuiz"),
    moduleCards: document.getElementById("moduleCards"),
    moduleScenarios: document.getElementById("moduleScenarios"),
    relayTerminalButtons: document.getElementById("relayTerminalButtons"),
    relayTerminalFeedback: document.getElementById("relayTerminalFeedback"),
    relayScenario: document.getElementById("relayScenario"),
    isolatorQuiz: document.getElementById("isolatorQuiz"),
    traceExercises: document.getElementById("traceExercises"),
    troubleshootingCases: document.getElementById("troubleshootingCases"),
    finalChallengeQuestions: document.getElementById("finalChallengeQuestions"),
    nextModuleMessage: document.getElementById("nextModuleMessage"),
    completionScore: document.getElementById("completionScore"),
    scoreCircuit: document.getElementById("scoreCircuit"),
    scoreWire: document.getElementById("scoreWire"),
    scoreModule: document.getElementById("scoreModule"),
    scoreRelay: document.getElementById("scoreRelay"),
    scoreIsolator: document.getElementById("scoreIsolator"),
    scoreTroubleshooting: document.getElementById("scoreTroubleshooting"),
    conceptSummary: document.getElementById("conceptSummary"),
    step1Next: document.getElementById("step1Next"),
    step2Next: document.getElementById("step2Next"),
    step3Next: document.getElementById("step3Next"),
    step4Next: document.getElementById("step4Next"),
    step5Next: document.getElementById("step5Next"),
    step6Next: document.getElementById("step6Next"),
    submitChallenge: document.getElementById("submitChallenge"),
    tryAgain: document.getElementById("tryAgain"),
    returnTraining: document.getElementById("returnTraining"),
    continueNext: document.getElementById("continueNext"),
    moduleStepList: document.getElementById("moduleStepList"),
    moduleObjectiveChip: document.getElementById("moduleObjectiveChip"),
    moduleObjectiveTitle: document.getElementById("moduleObjectiveTitle"),
    moduleObjectiveText: document.getElementById("moduleObjectiveText")
};

const moduleSteps = [
    { label: "Circuits", chip: "Know Your Circuits", title: "Understand the concept before answering questions.", objective: "Your goal is to learn the difference between SLC and NAC before applying that knowledge." },
    { label: "Wire Sizes", chip: "Understanding Wire Sizes", title: "Compare conductor sizes and what the labels mean.", objective: "Your goal is to recognize the basic meaning behind common wire-size notation used in training examples." },
    { label: "Functions", chip: "Monitor vs Control", title: "Differentiate monitoring from control behavior.", objective: "Your goal is to understand whether the system is reporting a condition or commanding an action." },
    { label: "Relays", chip: "Understanding Relays", title: "Connect control logic to external switching concepts.", objective: "Your goal is to understand what a relay does and why it matters in interface scenarios." },
    { label: "Isolators", chip: "Understanding Isolators", title: "Understand the purpose of isolator concepts.", objective: "Your goal is to see how isolators help manage loop faults in the affected section of a circuit." },
    { label: "Trace", chip: "Trace the Circuit", title: "Practice following the signal path conceptually.", objective: "Your goal is to trace the circuit path in the correct order before moving into troubleshooting." },
    { label: "Challenge", chip: "Find the Wiring Problem", title: "Apply the concepts in a troubleshooting challenge.", objective: "Your goal is to use the wiring concepts together and justify the most reasonable troubleshooting path." }
];

window.addEventListener("DOMContentLoaded", initializeWiringModule);

function initializeWiringModule() {
    bindNavigation();
    bindStepButtons();
    bindCircuitCards();

    renderWireCards();
    renderQuiz("circuitQuiz", wiringData.questions.circuitQuiz, el.circuitQuiz);
    renderQuiz("wireQuiz", wiringData.questions.wireQuiz, el.wireQuiz);
    renderModuleCards();
    renderModuleScenarios();
    renderRelayTerminals();
    renderRelayScenario();
    renderIsolatorQuiz();
    renderTraceExercises();
    renderTroubleshootingCases();
    renderFinalChallenge();
    updateStepView();
    updateGateStates();
}

function renderModuleShell() {
    const visualStep = Math.min(wiringState.currentStep, 7);
    const completionVisible = wiringState.completionVisible;
    el.moduleStepList.innerHTML = moduleSteps.map((step, index) => {
        const stepNumber = index + 1;
        const isComplete = completionVisible ? true : stepNumber < visualStep;
        const isActive = !completionVisible && stepNumber === visualStep;
        const icon = isComplete ? "✓" : isActive ? "●" : "○";
        return `<span class="module-step-item ${isComplete ? "is-complete" : isActive ? "is-active" : ""}"><span class="module-step-icon">${icon}</span>${stepNumber} ${step.label}</span>`;
    }).join("");

    const activeConfig = completionVisible
        ? {
            chip: "Module Complete",
            title: "Review the wiring concepts you just applied.",
            objective: "Your goal is to review the challenge results and carry the key wiring concepts into the next module."
        }
        : moduleSteps[visualStep - 1];

    el.moduleObjectiveChip.textContent = activeConfig.chip;
    el.moduleObjectiveTitle.textContent = activeConfig.title;
    el.moduleObjectiveText.textContent = activeConfig.objective;
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

function bindStepButtons() {
    el.step1Next.addEventListener("click", () => goToStep(2));
    el.step2Next.addEventListener("click", () => goToStep(3));
    el.step3Next.addEventListener("click", () => goToStep(4));
    el.step4Next.addEventListener("click", () => goToStep(5));
    el.step5Next.addEventListener("click", () => goToStep(6));
    el.step6Next.addEventListener("click", () => goToStep(7));
    el.submitChallenge.addEventListener("click", submitFinalChallenge);
    el.tryAgain.addEventListener("click", resetModule);
    el.returnTraining.addEventListener("click", () => {
        goTraining();
    });
    el.continueNext.addEventListener("click", () => {
        window.location.href = buildNavigationUrl("training/bom-estimating/index.html");
    });
}

function bindCircuitCards() {
    el.circuitCards.forEach((card) => {
        card.addEventListener("click", () => {
            const circuitId = card.getAttribute("data-circuit-card");
            wiringState.selectedCircuitCard = circuitId;
            el.circuitCards.forEach((entry) => entry.classList.remove("active"));
            card.classList.add("active");

            const circuit = wiringData.circuits.find((item) => item.id === circuitId);
            if (circuit) {
                showFeedback(el.circuitFeedback, circuit.description, "correct");
            }

            updateGateStates();
        });
    });
}

function renderWireCards() {
    el.wireCards.innerHTML = wiringData.wireSizes.map((wire) => `
        <article class="concept-card" data-wire-card="${escapeHTML(wire.id)}">
            <h3>${escapeHTML(wire.name)}</h3>
            <p class="concept-subtitle">${escapeHTML(String(wire.gauge))} AWG, ${escapeHTML(String(wire.conductors))} conductors</p>
            <p>${escapeHTML(wire.summary)}</p>
        </article>
    `).join("");

    el.wireCards.querySelectorAll("[data-wire-card]").forEach((card) => {
        card.addEventListener("click", () => {
            el.wireCards.querySelectorAll("[data-wire-card]").forEach((entry) => entry.classList.remove("active"));
            card.classList.add("active");
        });
    });
}

function renderModuleCards() {
    el.moduleCards.innerHTML = wiringData.modules.map((module) => `
        <article class="concept-card">
            <h3>${escapeHTML(module.name)}</h3>
            <p>${escapeHTML(module.description)}</p>
            <p class="concept-subtitle">Memory aid: ${escapeHTML(module.memoryAid)}</p>
        </article>
    `).join("");
}

function renderModuleScenarios() {
    el.moduleScenarios.innerHTML = wiringData.questions.moduleScenarios.map((scenario) => {
        const selected = wiringState.answers[scenario.id] || "";
        const answered = selected !== "";
        const correct = selected === scenario.answer;

        return `
            <article class="module-scenario">
                <h3>${escapeHTML(scenario.prompt)}</h3>
                <p>${escapeHTML(scenario.question)}</p>
                <div class="option-row">
                    ${scenario.options.map((option) => `<button type="button" class="${selected === option ? "selected" : ""}" data-answer-id="${escapeHTML(scenario.id)}" data-answer-value="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
                </div>
                <div class="feedback-box ${answered ? "" : "hidden"} ${correct ? "correct" : "incorrect"}">${answered ? (correct ? "Correct. This matches the function for that scenario." : "Not quite. Re-check whether the system is monitoring a condition or commanding an action.") : ""}</div>
            </article>
        `;
    }).join("");

    el.moduleScenarios.querySelectorAll("[data-answer-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const answerId = button.getAttribute("data-answer-id");
            const value = button.getAttribute("data-answer-value");
            wiringState.answers[answerId] = value;
            renderModuleScenarios();
            updateGateStates();
        });
    });
}

function renderRelayTerminals() {
    const viewedCount = Object.keys(wiringState.relayTerminalsViewed).length;
    el.relayTerminalButtons.innerHTML = wiringData.relayTerminals.map((terminal) => {
        const selected = wiringState.relayTerminalsViewed[terminal.id];
        return `<button type="button" class="${selected ? "selected" : ""}" data-terminal-id="${escapeHTML(terminal.id)}">${escapeHTML(terminal.name)}</button>`;
    }).join("");

    el.relayTerminalButtons.querySelectorAll("[data-terminal-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const terminalId = button.getAttribute("data-terminal-id");
            const terminal = wiringData.relayTerminals.find((item) => item.id === terminalId);
            if (!terminal) {
                return;
            }

            wiringState.relayTerminalsViewed[terminalId] = true;
            showFeedback(el.relayTerminalFeedback, `${terminal.name} means ${terminal.meaning}. ${terminal.explanation}`, "correct");
            renderRelayTerminals();
            renderRelayScenario();
            updateGateStates();
        });
    });

    if (viewedCount === 0) {
        el.relayTerminalFeedback.classList.add("hidden");
    }
}

function renderRelayScenario() {
    const scenario = wiringData.questions.relayScenario;
    const selected = wiringState.answers[scenario.id] || "";
    const answered = selected !== "";
    const correct = selected === scenario.answer;

    el.relayScenario.innerHTML = `
        <article class="module-scenario">
            <h3>${escapeHTML(scenario.prompt)}</h3>
            <p>${escapeHTML(scenario.question)}</p>
            <div class="option-row">
                ${scenario.options.map((option) => `<button type="button" class="${selected === option ? "selected" : ""}" data-relay-answer="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
            </div>
            <div class="feedback-box ${answered ? "" : "hidden"} ${correct ? "correct" : "incorrect"}">${answered ? (correct ? "Correct. A relay/interface can provide switching between the fire alarm system and external circuitry when required." : "Not quite. Re-check the interface purpose for external circuit control.") : ""}</div>
        </article>
    `;

    el.relayScenario.querySelectorAll("[data-relay-answer]").forEach((button) => {
        button.addEventListener("click", () => {
            wiringState.answers[scenario.id] = button.getAttribute("data-relay-answer");
            renderRelayScenario();
            updateGateStates();
        });
    });
}

function renderIsolatorQuiz() {
    const question = wiringData.questions.isolatorQuiz;
    const selected = wiringState.answers[question.id] || "";
    const answered = selected !== "";
    const correct = selected === question.answer;

    el.isolatorQuiz.innerHTML = `
        <article class="quiz-card">
            <h3>${escapeHTML(question.prompt)}</h3>
            <div class="quiz-options">
                ${question.options.map((option) => `<button type="button" class="${selected === option ? "selected" : ""}" data-isolator-answer="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
            </div>
            <div class="feedback-box ${answered ? "" : "hidden"} ${correct ? "correct" : "incorrect"}">${answered ? (correct ? "Correct. Isolators can help maintain operation in unaffected loop sections." : "Not quite. Focus on short-circuit section isolation within addressable loop architecture.") : ""}</div>
        </article>
    `;

    el.isolatorQuiz.querySelectorAll("[data-isolator-answer]").forEach((button) => {
        button.addEventListener("click", () => {
            wiringState.answers[question.id] = button.getAttribute("data-isolator-answer");
            renderIsolatorQuiz();
            updateGateStates();
        });
    });
}

function renderTraceExercises() {
    el.traceExercises.innerHTML = wiringData.traceExercises.map((exercise) => {
        const sequence = wiringState.traceProgress[exercise.id] || [];
        const expectedNext = exercise.nodes[sequence.length];
        const completed = wiringState.traceCompleted[exercise.id] === true;

        return `
            <article class="trace-card" data-trace-id="${escapeHTML(exercise.id)}">
                <h3>${escapeHTML(exercise.title)}</h3>
                <p class="small-note">${escapeHTML(exercise.trainingNote)}</p>
                <div class="trace-nodes">
                    ${exercise.nodes.map((node) => `<button type="button" class="${sequence.includes(node) ? "selected" : ""}" data-trace-node="${escapeHTML(exercise.id)}" data-node-value="${escapeHTML(node)}">${escapeHTML(node)}</button>`).join("")}
                </div>
                <p class="trace-progress">Progress: ${escapeHTML(sequence.join(" -> ")) || "No components selected yet"}</p>
                <div class="feedback-box ${sequence.length === 0 ? "hidden" : ""} ${completed ? "correct" : "warning"}">${completed ? "Complete. Sequence traced correctly." : `Select next: ${escapeHTML(expectedNext || "done")}`}</div>
                <button type="button" class="btn btn-secondary" data-reset-trace="${escapeHTML(exercise.id)}">Reset Exercise</button>
            </article>
        `;
    }).join("");

    el.traceExercises.querySelectorAll("[data-trace-node]").forEach((button) => {
        button.addEventListener("click", () => {
            const traceId = button.getAttribute("data-trace-node");
            const nodeValue = button.getAttribute("data-node-value");
            handleTraceSelection(traceId, nodeValue);
        });
    });

    el.traceExercises.querySelectorAll("[data-reset-trace]").forEach((button) => {
        button.addEventListener("click", () => {
            const traceId = button.getAttribute("data-reset-trace");
            wiringState.traceProgress[traceId] = [];
            wiringState.traceCompleted[traceId] = false;
            renderTraceExercises();
            updateGateStates();
        });
    });
}

function handleTraceSelection(traceId, nodeValue) {
    const exercise = wiringData.traceExercises.find((item) => item.id === traceId);
    if (!exercise) {
        return;
    }

    const current = wiringState.traceProgress[traceId] || [];
    const expected = exercise.nodes[current.length];
    if (nodeValue !== expected) {
        wiringState.traceProgress[traceId] = [];
        wiringState.traceCompleted[traceId] = false;
        renderTraceExercises();
        return;
    }

    const updated = [...current, nodeValue];
    wiringState.traceProgress[traceId] = updated;

    if (updated.length === exercise.nodes.length) {
        wiringState.traceCompleted[traceId] = true;
    }

    renderTraceExercises();
    updateGateStates();
}

function renderTroubleshootingCases() {
    el.troubleshootingCases.innerHTML = wiringData.troubleshootingCases.map((scenario) => {
        const selected = wiringState.troubleshootingSelections[scenario.id] || [];

        return `
            <article class="scenario-case">
                <h3>${escapeHTML(scenario.title)}</h3>
                <p>${escapeHTML(scenario.problem)}</p>
                <div class="multi-options">
                    ${scenario.options.map((option) => `<button type="button" class="${selected.includes(option) ? "selected" : ""}" data-trouble-id="${escapeHTML(scenario.id)}" data-trouble-option="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
                </div>
                <p class="small-note">${escapeHTML(scenario.guidance)}</p>
                <p class="small-note">Selected: ${selected.length}</p>
            </article>
        `;
    }).join("");

    el.troubleshootingCases.querySelectorAll("[data-trouble-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const scenarioId = button.getAttribute("data-trouble-id");
            const option = button.getAttribute("data-trouble-option");
            toggleTroubleshootingOption(scenarioId, option);
            renderTroubleshootingCases();
            updateGateStates();
        });
    });
}

function toggleTroubleshootingOption(scenarioId, option) {
    const selected = wiringState.troubleshootingSelections[scenarioId] || [];
    if (selected.includes(option)) {
        wiringState.troubleshootingSelections[scenarioId] = selected.filter((entry) => entry !== option);
        return;
    }

    wiringState.troubleshootingSelections[scenarioId] = [...selected, option];
}

function renderFinalChallenge() {
    el.finalChallengeQuestions.innerHTML = wiringData.questions.finalChallenge.map((question) => {
        const selected = wiringState.answers[question.id] || "";
        const answered = selected !== "";

        return `
            <article class="quiz-card">
                <h3>${escapeHTML(question.prompt)}</h3>
                <div class="quiz-options">
                    ${question.options.map((option) => `<button type="button" class="${selected === option ? "selected" : ""}" data-final-id="${escapeHTML(question.id)}" data-final-value="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
                </div>
                <div class="small-note ${answered ? "hidden" : ""}">Select one answer.</div>
            </article>
        `;
    }).join("");

    el.finalChallengeQuestions.querySelectorAll("[data-final-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const questionId = button.getAttribute("data-final-id");
            const value = button.getAttribute("data-final-value");
            wiringState.answers[questionId] = value;
            renderFinalChallenge();
            updateGateStates();
        });
    });
}

function renderQuiz(quizKey, questions, container) {
    container.innerHTML = questions.map((question) => {
        const selected = wiringState.answers[question.id] || "";
        const answered = selected !== "";
        const correct = selected === question.answer;

        return `
            <article class="quiz-card">
                <h3>${escapeHTML(question.prompt)}</h3>
                <div class="quiz-options">
                    ${question.options.map((option) => `<button type="button" class="${selected === option ? "selected" : ""}" data-quiz-key="${escapeHTML(quizKey)}" data-question-id="${escapeHTML(question.id)}" data-value="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
                </div>
                <div class="feedback-box ${answered ? "" : "hidden"} ${correct ? "correct" : "incorrect"}">${answered ? (correct ? "Correct." : `Not quite. The best conceptual answer is ${question.answer}.`) : ""}</div>
            </article>
        `;
    }).join("");

    container.querySelectorAll("[data-question-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const questionId = button.getAttribute("data-question-id");
            const value = button.getAttribute("data-value");
            wiringState.answers[questionId] = value;

            if (quizKey === "circuitQuiz") {
                renderQuiz("circuitQuiz", wiringData.questions.circuitQuiz, el.circuitQuiz);
            }

            if (quizKey === "wireQuiz") {
                renderQuiz("wireQuiz", wiringData.questions.wireQuiz, el.wireQuiz);
            }

            updateGateStates();
        });
    });
}

function updateGateStates() {
    const circuitComplete = wiringData.questions.circuitQuiz.every((q) => wiringState.answers[q.id] === q.answer);
    const wireComplete = wiringData.questions.wireQuiz.every((q) => wiringState.answers[q.id] === q.answer);
    const moduleComplete = wiringData.questions.moduleScenarios.every((q) => wiringState.answers[q.id] === q.answer);
    const relayTerminalsComplete = wiringData.relayTerminals.every((t) => wiringState.relayTerminalsViewed[t.id]);
    const relayScenarioComplete = wiringState.answers[wiringData.questions.relayScenario.id] === wiringData.questions.relayScenario.answer;
    const isolatorComplete = wiringState.answers[wiringData.questions.isolatorQuiz.id] === wiringData.questions.isolatorQuiz.answer;
    const traceComplete = wiringData.traceExercises.every((exercise) => wiringState.traceCompleted[exercise.id]);

    const troubleshootingComplete = wiringData.troubleshootingCases.every((scenario) => {
        const selected = wiringState.troubleshootingSelections[scenario.id] || [];
        return selected.length >= 2;
    });

    const finalChallengeComplete = wiringData.questions.finalChallenge.every((q) => !!wiringState.answers[q.id]);

    el.step1Next.disabled = !(wiringState.selectedCircuitCard && circuitComplete);
    el.step2Next.disabled = !wireComplete;
    el.step3Next.disabled = !moduleComplete;
    el.step4Next.disabled = !(relayTerminalsComplete && relayScenarioComplete);
    el.step5Next.disabled = !isolatorComplete;
    el.step6Next.disabled = !traceComplete;
    el.submitChallenge.disabled = !(troubleshootingComplete && finalChallengeComplete);
}

function goToStep(stepNumber) {
    wiringState.currentStep = stepNumber;
    updateStepView();
}

function updateStepView() {
    Object.entries(el.steps).forEach(([stepNumber, panel]) => {
        panel.classList.toggle("hidden", Number(stepNumber) !== wiringState.currentStep);
    });

    el.completion.classList.toggle("hidden", !wiringState.completionVisible);

    const progress = Math.round((wiringState.currentStep / 7) * 100);
    el.stepIndicator.textContent = wiringState.completionVisible ? "Module Complete" : `Step ${wiringState.currentStep} of 7`;
    el.progressFill.style.width = `${progress}%`;
    el.progressValue.textContent = `${progress}%`;
    renderModuleShell();

    const currentPanel = el.steps[wiringState.currentStep];
    if (currentPanel) {
        currentPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function submitFinalChallenge() {
    const scoring = evaluateScores();

    wiringState.completionVisible = true;
    Object.values(el.steps).forEach((panel) => panel.classList.add("hidden"));
    el.completion.classList.remove("hidden");

    el.completionScore.textContent = `${scoring.total} / 100`;
    el.scoreCircuit.textContent = `${scoring.circuit}/20`;
    el.scoreWire.textContent = `${scoring.wire}/10`;
    el.scoreModule.textContent = `${scoring.module}/20`;
    el.scoreRelay.textContent = `${scoring.relay}/15`;
    el.scoreIsolator.textContent = `${scoring.isolator}/15`;
    el.scoreTroubleshooting.textContent = `${scoring.troubleshooting}/20`;

    el.conceptSummary.innerHTML = [
        "SLC is primarily the addressable communication/signaling path.",
        "NAC is primarily the notification output path.",
        "Monitor functions report what is happening; control functions make something happen.",
        "Relays/interfaces are used when electrical switching is needed between system logic and external circuits.",
        "Isolators can help maintain loop operation in unaffected sections when short isolation strategy is part of the architecture.",
        "Always follow engineered drawings, applicable codes, manufacturer documentation, and AHJ requirements for real installations."
    ].map((item) => `<li>${escapeHTML(item)}</li>`).join("");

    el.completion.scrollIntoView({ behavior: "smooth", block: "start" });
}

function evaluateScores() {
    const circuitCorrect = wiringData.questions.circuitQuiz.filter((q) => wiringState.answers[q.id] === q.answer).length;
    const wireCorrect = wiringData.questions.wireQuiz.filter((q) => wiringState.answers[q.id] === q.answer).length;
    const moduleCorrect = wiringData.questions.moduleScenarios.filter((q) => wiringState.answers[q.id] === q.answer).length;
    const relayTerminalCount = wiringData.relayTerminals.filter((t) => wiringState.relayTerminalsViewed[t.id]).length;
    const relayScenarioCorrect = wiringState.answers[wiringData.questions.relayScenario.id] === wiringData.questions.relayScenario.answer ? 1 : 0;
    const isolatorCorrect = wiringState.answers[wiringData.questions.isolatorQuiz.id] === wiringData.questions.isolatorQuiz.answer ? 1 : 0;

    const troubleshootingCaseCount = wiringData.troubleshootingCases.filter((scenario) => {
        const selected = wiringState.troubleshootingSelections[scenario.id] || [];
        return selected.length >= 2;
    }).length;

    const finalChallengeCorrect = wiringData.questions.finalChallenge.filter((q) => wiringState.answers[q.id] === q.answer).length;

    const circuitScore = Math.round((circuitCorrect / wiringData.questions.circuitQuiz.length) * 20);
    const wireScore = Math.round((wireCorrect / wiringData.questions.wireQuiz.length) * 10);
    const moduleScore = Math.round((moduleCorrect / wiringData.questions.moduleScenarios.length) * 20);
    const relayScore = Math.round(((relayTerminalCount / wiringData.relayTerminals.length) * 6) + ((relayScenarioCorrect / 1) * 9));
    const isolatorScore = isolatorCorrect ? 15 : 0;
    const troubleshootingScore = Math.round(((troubleshootingCaseCount / wiringData.troubleshootingCases.length) * 8) + ((finalChallengeCorrect / wiringData.questions.finalChallenge.length) * 12));

    const total = circuitScore + wireScore + moduleScore + relayScore + isolatorScore + troubleshootingScore;

    return {
        circuit: circuitScore,
        wire: wireScore,
        module: moduleScore,
        relay: relayScore,
        isolator: isolatorScore,
        troubleshooting: troubleshootingScore,
        total
    };
}

function resetModule() {
    wiringState.currentStep = 1;
    wiringState.selectedCircuitCard = null;
    wiringState.answers = {};
    wiringState.relayTerminalsViewed = {};
    wiringState.traceProgress = {};
    wiringState.traceCompleted = {};
    wiringState.troubleshootingSelections = {};
    wiringState.completionVisible = false;

    el.circuitCards.forEach((card) => card.classList.remove("active"));
    el.circuitFeedback.classList.add("hidden");
    el.nextModuleMessage.classList.add("hidden");

    renderQuiz("circuitQuiz", wiringData.questions.circuitQuiz, el.circuitQuiz);
    renderQuiz("wireQuiz", wiringData.questions.wireQuiz, el.wireQuiz);
    renderModuleScenarios();
    renderRelayTerminals();
    renderRelayScenario();
    renderIsolatorQuiz();
    renderTraceExercises();
    renderTroubleshootingCases();
    renderFinalChallenge();

    updateGateStates();
    updateStepView();
}

function showFeedback(target, message, type) {
    target.classList.remove("hidden", "correct", "incorrect", "warning");
    target.classList.add(type);
    target.textContent = message;
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
