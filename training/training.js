// ===============================================
// Ban-Koe Academy
// Job Skills Training Center
// ===============================================

const trainingModules = [
    {
        id: "takeoff-training",
        icon: "🏗️",
        name: "Takeoff Training",
        difficulty: "Beginner",
        progress: 0,
        description: "Practice reading layouts, identifying devices, and determining material quantities.",
        preview: "Future lessons can include floor plans, device identification, quantity calculations, placement decisions, and full takeoff exercises."
    },
    {
        id: "system-builder",
        icon: "🧩",
        name: "System Builder",
        difficulty: "Beginner / Intermediate",
        progress: 0,
        description: "Build complete fire alarm systems from real-world scenarios.",
        preview: "Future scenarios can connect FACP, SLC, NAC, detectors, pull stations, notification appliances, modules, HVAC shutdown, dampers, elevators, and door holders."
    },
    {
        id: "wiring-connections",
        icon: "🔌",
        name: "Wiring & Connections",
        difficulty: "Intermediate",
        progress: 0,
        description: "Learn SLC, NAC, power, relay, and module connections.",
        preview: "Future lessons can cover SLC, NAC, 18/2, 14/2, 12/2, power-limited circuits, CT1, CT2, relays, isolators, duct detector wiring, and HVAC shutdown connections."
    },
    {
        id: "bom-estimating",
        icon: "📋",
        name: "BOM & Estimating",
        difficulty: "Intermediate / Advanced",
        progress: 0,
        description: "Practice building accurate BOMs from project requirements.",
        preview: "Future workflows can turn project requirements into product lists, quantities, complete BOMs, answer checks, and later pricing or quoting practice."
    },
    {
        id: "real-world-scenarios",
        icon: "🎯",
        name: "Real-World Scenarios",
        difficulty: "Advanced",
        progress: 0,
        description: "Solve realistic customer, estimating, and system-design situations.",
        preview: "Future scenario drills can include HVAC shutdown, duct smoke detection, door-holder release, exterior notification, gym speakers, classroom ceiling speakers, extra SLC devices, relay interfaces, module selection, and incomplete project information."
    }
];

const moduleContainer = document.getElementById("trainingModules");
const modal = document.getElementById("trainingModal");
const modalTitle = document.getElementById("trainingModalTitle");
const modalDifficulty = document.getElementById("trainingModalDifficulty");
const modalDescription = document.getElementById("trainingModalDescription");
const modalPreview = document.getElementById("trainingModalPreview");
const modalCloseButton = document.getElementById("trainingModalCloseButton");
const overallProgressValue = document.getElementById("overallProgressValue");
const modulesStartedValue = document.getElementById("modulesStartedValue");
const skillsMasteredValue = document.getElementById("skillsMasteredValue");
const trainingXpValue = document.getElementById("trainingXpValue");

window.addEventListener("DOMContentLoaded", initializeTrainingPage);
window.addEventListener("keydown", handleKeyboardShortcuts);

function initializeTrainingPage() {
    renderTrainingModules();
    renderTrainingSummary();
    bindModalControls();
}

function renderTrainingModules() {
    moduleContainer.innerHTML = trainingModules.map((module) => `
        <article class="training-module-card" data-module-id="${module.id}">
            <div class="training-module-top">
                <div>
                    <div class="training-module-icon" aria-hidden="true">${module.icon}</div>
                </div>
                <span class="badge">Future ready</span>
            </div>

            <div>
                <h2 class="training-module-title">${module.name}</h2>
                <p class="training-module-description">${module.description}</p>
            </div>

            <div class="training-module-preview">
                <h3>Preview</h3>
                <p>${module.preview}</p>
            </div>

            <div class="module-meta">
                <span class="module-difficulty">${module.difficulty}</span>
                <span class="module-progress-text">${module.progress}%</span>
            </div>

            <div class="progress-track" aria-hidden="true">
                <div class="progress-fill" style="width: ${module.progress}%"></div>
            </div>

            <div class="module-actions">
                <button class="btn btn-primary" type="button" data-module-start="${module.id}">${module.id === "takeoff-training" ? "Start Takeoff Training" : module.id === "system-builder" ? "Start System Builder" : module.id === "wiring-connections" ? "Start Wiring & Connections" : module.id === "bom-estimating" ? "Start BOM & Estimating" : module.id === "real-world-scenarios" ? "Start Real-World Scenarios" : "Start Training"}</button>
            </div>
        </article>
    `).join("");

    moduleContainer.querySelectorAll("[data-module-start]").forEach((button) => {
        button.addEventListener("click", () => {
            const moduleId = button.getAttribute("data-module-start");
            if (moduleId === "takeoff-training") {
                goToTakeoffTraining();
                return;
            }

            if (moduleId === "system-builder") {
                goToSystemBuilder();
                return;
            }

            if (moduleId === "wiring-connections") {
                goToWiringConnections();
                return;
            }

            if (moduleId === "bom-estimating") {
                goToBomEstimating();
                return;
            }

            if (moduleId === "real-world-scenarios") {
                goToRealWorldScenarios();
                return;
            }

            openTrainingModule(moduleId);
        });
    });
}

function renderTrainingSummary() {
    overallProgressValue.textContent = "0%";
    modulesStartedValue.textContent = "0 / 5";
    skillsMasteredValue.textContent = "0";
    trainingXpValue.textContent = "0 XP";
}

function bindModalControls() {
    modalCloseButton.addEventListener("click", closeTrainingModal);
    modal.querySelector("[data-close-training-modal]").addEventListener("click", closeTrainingModal);
}

function openTrainingModule(moduleId) {
    const module = trainingModules.find((entry) => entry.id === moduleId);

    if (!module) {
        return;
    }

    modalTitle.textContent = module.name;
    modalDifficulty.textContent = module.difficulty;
    modalDescription.textContent = module.description;
    modalPreview.textContent = module.preview;

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    modalCloseButton.focus();
}

function closeTrainingModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
}

function goToTakeoffTraining() {
    window.location.href = "takeoff/index.html";
}

function goToSystemBuilder() {
    window.location.href = "system-builder/index.html";
}

function goToWiringConnections() {
    window.location.href = "wiring/index.html";
}

function goToBomEstimating() {
    window.location.href = "bom-estimating/index.html";
}

function goToRealWorldScenarios() {
    window.location.href = "scenarios/index.html";
}

function handleKeyboardShortcuts(event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeTrainingModal();
    }
}
