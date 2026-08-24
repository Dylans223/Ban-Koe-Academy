const interactiveTakeoffStages = [
    "key",
    "notes",
    "product",
    "mark",
    "cross-off",
    "tally",
    "enter",
    "reconcile"
];

const takeoffColorHex = {
    "DARK BLUE": "#1d4ed8",
    RED: "#ef4444",
    "LIGHT BLUE": "#60a5fa",
    ORANGE: "#f97316",
    YELLOW: "#facc15",
    GREEN: "#22c55e",
    PINK: "#ec4899"
};

function createInteractiveTakeoffState(exercise = takeoffExerciseSchema) {
    return {
        exercise,
        stage: "awaiting-data",
        keyAcknowledged: false,
        notesAcknowledged: false,
        selectedProductId: null,
        selectedColor: "",
        mode: "takeoff",
        colorLearningIndex: 0,
        exercisePickerOpen: true,
        keyReferenceOpen: false,
        notesReferenceOpen: false,
        markedLocations: new Set(),
        crossedOffLocations: new Set(),
        tallyByProduct: {},
        finalQuantities: {},
        feedback: null,
        freeformMarks: [],
        viewport: { scale: 1, offsetX: 0, offsetY: 0 },
        score: {
            productIdentification: null,
            countingAccuracy: null,
            missedDevices: null,
            doubleCountedDevices: null,
            tallyAccuracy: null,
            finalQuantityAccuracy: null,
            reconciliationAccuracy: null
        }
    };
}

function isApprovedInteractiveExercise(exercise) {
    return Boolean(
        exercise &&
        exercise.status !== "AWAITING APPROVED DRAWING DATA" &&
        exercise.exerciseId &&
        exercise.drawing &&
        exercise.drawing.asset &&
        exercise.key.length &&
        exercise.notes.length &&
        exercise.products.length
    );
}

function acknowledgeInteractiveKey(state) {
    if (!isApprovedInteractiveExercise(state.exercise)) {
        state.feedback = "AWAITING APPROVED DRAWING DATA";
        return false;
    }

    state.keyAcknowledged = true;
    state.stage = "notes";
    return true;
}

function acknowledgeInteractiveNotes(state) {
    if (!state.keyAcknowledged || !isApprovedInteractiveExercise(state.exercise)) {
        state.feedback = "Review the key first, then use approved drawing notes.";
        return false;
    }

    state.notesAcknowledged = true;
    state.stage = "product";
    return true;
}

function selectInteractiveProduct(state, productId) {
    if (!state.notesAcknowledged) {
        state.feedback = "Read the key and drawing notes before selecting a product to count.";
        return false;
    }

    const product = state.exercise.products.find((entry) => entry.id === productId);
    if (!product) {
        state.feedback = "Select an approved product identity.";
        return false;
    }

    state.selectedProductId = productId;
    state.selectedColor = "";
    state.stage = "mark";
    return true;
}

function markInteractiveLocation(state, locationId) {
    if (state.stage !== "mark" || !state.selectedProductId) {
        state.feedback = "Select a product category first.";
        return false;
    }

    const location = state.exercise.locations.find((entry) => entry.id === locationId);
    if (!state.selectedColor) {
        state.feedback = "Select the Ban-Koe color before marking a device.";
        return false;
    }
    if (location && state.markedLocations.has(locationId)) {
        state.feedback = "ALREADY COUNTED";
        return false;
    }
    if (!location || location.productId !== state.selectedProductId) {
        state.feedback = "WRONG DEVICE";
        return false;
    }

    if (location.color !== state.selectedColor) {
        state.feedback = "WRONG COLOR";
        return false;
    }

    state.markedLocations.add(locationId);
    state.tallyByProduct[state.selectedProductId] = (state.tallyByProduct[state.selectedProductId] || 0) + 1;
    return true;
}

function crossOffInteractiveLocation(state, locationId) {
    if (!state.markedLocations.has(locationId)) {
        state.feedback = "Mark and count the occurrence before crossing it off.";
        return false;
    }

    state.crossedOffLocations.add(locationId);
    return true;
}

function undoInteractiveMark(state, locationId) {
    const freeformMark = state.freeformMarks.find((mark) => mark.id === locationId);
    if (freeformMark) {
        state.freeformMarks = state.freeformMarks.filter((mark) => mark.id !== locationId);
        state.markedLocations.delete(locationId);
        state.crossedOffLocations.delete(locationId);
        state.tallyByProduct[freeformMark.productId] = Math.max(0, (state.tallyByProduct[freeformMark.productId] || 0) - 1);
        return true;
    }

    const location = state.exercise.locations.find((entry) => entry.id === locationId);
    if (!location || !state.markedLocations.has(locationId)) {
        return false;
    }

    state.markedLocations.delete(locationId);
    state.crossedOffLocations.delete(locationId);
    state.tallyByProduct[location.productId] = Math.max(0, (state.tallyByProduct[location.productId] || 0) - 1);
    return true;
}

function enterInteractiveQuantities(state, quantities) {
    if (!state.crossedOffLocations.size) {
        state.feedback = "Cross off counted occurrences before entering final quantities.";
        return false;
    }

    state.finalQuantities = { ...quantities };
    state.stage = "reconcile";
    return true;
}

function reconcileInteractiveTakeoff(state) {
    if (!Object.keys(state.exercise.expectedQuantities).length) {
        state.feedback = "Exercise answer data not yet configured";
        state.stage = "complete";
        return state.feedback;
    }

    const expected = Object.fromEntries(Object.entries(state.exercise.expectedQuantities).map(([category, quantity]) => {
        const product = state.exercise.products.find((entry) => entry.id === category || entry.whatIsIt === category);
        return [product ? product.id : category, quantity];
    }));
    const expectedLocations = state.exercise.locations;
    const products = new Set(Object.keys(expected));
    const discrepancies = [];
    const categoryResults = [];

    products.forEach((productId) => {
        const counted = state.tallyByProduct[productId] || 0;
        const entered = state.finalQuantities[productId] || 0;
        const expectedQuantity = expected[productId];
        const expectedIds = expectedLocations.filter((location) => location.productId === productId).map((location) => location.id);
        const crossed = expectedIds.filter((locationId) => state.crossedOffLocations.has(locationId)).length;
        const categoryCorrect = counted === expectedQuantity && entered === expectedQuantity && crossed === expectedQuantity;
        categoryResults.push({ productId, counted, entered, crossed, expected: expectedQuantity, status: categoryCorrect ? "correct" : "needs-correction" });
        if (!categoryCorrect) {
            discrepancies.push({ productId, counted, entered, crossed, expected: expectedQuantity });
        }
    });

    const totalLocations = expectedLocations.length;
    const markedExpected = expectedLocations.filter((location) => state.markedLocations.has(location.id)).length;
    const crossedExpected = expectedLocations.filter((location) => state.crossedOffLocations.has(location.id)).length;
    const correctCategories = categoryResults.filter((result) => result.status === "correct").length;
    const countAccuracy = totalLocations ? Math.round((markedExpected / totalLocations) * 100) : 0;
    const crossOffAccuracy = totalLocations ? Math.round((crossedExpected / totalLocations) * 100) : 0;
    const reconciliationAccuracy = categoryResults.length ? Math.round((correctCategories / categoryResults.length) * 100) : 0;
    state.score = {
        productIdentification: countAccuracy,
        colorCoding: countAccuracy,
        countingAccuracy: countAccuracy,
        missedDevices: totalLocations ? totalLocations - markedExpected : 0,
        doubleCountedDevices: 0,
        tallyAccuracy: countAccuracy,
        finalQuantityAccuracy: reconciliationAccuracy,
        crossOffCompletion: crossOffAccuracy,
        reconciliationAccuracy,
        total: Math.round((countAccuracy + crossOffAccuracy + reconciliationAccuracy) / 3)
    };
    state.feedback = discrepancies.length ? { status: "review", discrepancies, categoryResults, score: state.score } : { status: "correct", categoryResults, score: state.score };
    state.stage = "complete";
    return state.feedback;
}

function resetInteractiveTakeoff(state) {
    const freshState = createInteractiveTakeoffState(state.exercise);
    Object.keys(state).forEach((key) => {
        state[key] = freshState[key];
    });
    return state;
}

function setInteractiveMode(state, mode) {
    state.mode = mode;
    state.colorLearningIndex = 0;
    state.feedback = null;
}

function answerColorLearning(state, answer) {
    const location = state.exercise.locations[state.colorLearningIndex];
    if (!location) {
        return;
    }
    const product = state.exercise.products.find((entry) => entry.id === location.productId);
    const correct = answer === product.whatIsIt || answer === product.color;
    state.feedback = correct ? "CORRECT" : "Needs correction - review the key and color legend.";
    if (correct) {
        state.colorLearningIndex = (state.colorLearningIndex + 1) % state.exercise.locations.length;
    }
}

function updateInteractiveViewport(state, scaleDelta = 0, offsetX = 0, offsetY = 0) {
    state.viewport.scale = Math.min(3, Math.max(1, state.viewport.scale + scaleDelta));
    state.viewport.offsetX += offsetX;
    state.viewport.offsetY += offsetY;
}

function resetInteractiveViewport(state) {
    state.viewport = { scale: 1, offsetX: 0, offsetY: 0 };
}

function clearInteractiveMarks(state) {
    state.freeformMarks = [];
    state.markedLocations.clear();
    state.crossedOffLocations.clear();
    state.tallyByProduct = {};
    state.stage = state.selectedProductId ? "mark" : "product";
}

function addFreeformInteractiveMark(state, x, y) {
    if (!isApprovedInteractiveExercise(state.exercise) || !state.notesAcknowledged || !state.selectedProductId) {
        state.feedback = "Read the key and notes, then select a product before marking.";
        return false;
    }

    const markId = `mark-${state.freeformMarks.length + 1}`;
    state.freeformMarks.push({ id: markId, productId: state.selectedProductId, x, y, crossedOff: false });
    state.markedLocations.add(markId);
    state.tallyByProduct[state.selectedProductId] = (state.tallyByProduct[state.selectedProductId] || 0) + 1;
    state.stage = "cross-off";
    return true;
}

function crossOffFreeformMark(state, markId) {
    const mark = state.freeformMarks.find((entry) => entry.id === markId);
    if (!mark) {
        return false;
    }
    mark.crossedOff = true;
    state.crossedOffLocations.add(markId);
    return true;
}

function renderInteractiveTakeoff(state) {
    const mount = document.getElementById("interactiveTakeoffMount");
    if (!mount) {
        return;
    }

    const approved = isApprovedInteractiveExercise(state.exercise);
    const stageLabels = ["Key / Legend", "Drawing Notes", "Select Product", "Mark / Count", "Cross Off", "Tally", "Enter", "Reconcile"];
    const currentStageIndex = interactiveTakeoffStages.indexOf(state.stage);
    const selectedProduct = state.exercise.products.find((product) => product.id === state.selectedProductId);

    const exerciseLibrary = window.takeoffExerciseLibrary || [];
    mount.innerHTML = `
        <div class="interactive-takeoff-shell">
            ${state.exercisePickerOpen ? `<div class="interactive-takeoff-exercise-list" aria-label="Drawing takeoff practice exercises">${exerciseLibrary.map((exercise) => `<button type="button" class="interactive-exercise-card ${exercise.exerciseId === state.exercise.exerciseId ? "is-active" : ""}" data-interactive-exercise="${exercise.exerciseId}"><strong>${exercise.title}</strong><span>${exercise.drawing.project} · ${exercise.drawing.drawingNumber}</span><small>Open Exercise</small></button>`).join("")}</div>` : `<div class="interactive-takeoff-breadcrumb"><button type="button" class="btn btn-secondary" data-interactive-action="back-to-exercises">← Back to Exercises</button><span>${state.exercise.title}</span></div>`}
            <div class="interactive-takeoff-heading">
                <div>
                    <h3>Real Drawing Takeoff Practice</h3>
                    <p>${approved ? state.exercise.title || state.exercise.exerciseId : "TAKEOFF PRACTICE 001"}</p>
                </div>
                <span class="framework-status">${approved ? "Approved exercise" : "Awaiting approved drawing"}</span>
            </div>
            ${approved && state.exercise.exerciseId === "takeoff-practice-001" ? `<div class="interactive-mode-actions"><button type="button" class="btn btn-secondary ${state.mode === "colors" ? "is-selected" : ""}" data-interactive-action="colors">Learn the Colors</button><button type="button" class="btn btn-secondary ${state.mode === "takeoff" ? "is-selected" : ""}" data-interactive-action="takeoff">Full Takeoff Practice</button></div>${state.mode === "colors" ? renderColorLearning(state) : ""}` : ""}
            <p class="interactive-takeoff-notice">${approved ? "Read the key and notes before counting. The drawing remains unchanged; your marks are an overlay." : "AWAITING APPROVED DRAWING DATA. Add a reviewed drawing, key, notes, product identities, locations, and expected quantities before enabling this practice."}</p>
            <div class="interactive-takeoff-stage-list" aria-label="Drawing takeoff practice stages">
                ${stageLabels.map((label, index) => `<span class="interactive-takeoff-stage ${currentStageIndex === index ? "is-current" : currentStageIndex > index ? "is-complete" : ""}">${index + 1}. ${label}</span>`).join("")}
            </div>
            ${!state.keyAcknowledged || !state.notesAcknowledged ? `<div class="interactive-takeoff-gates">
                <section class="interactive-takeoff-gate">
                    <h4>Drawing Key / Legend</h4>
                    <p>${approved ? "Review the approved key before counting." : "Awaiting approved drawing data"}</p>
                    <button type="button" class="btn btn-secondary" data-interactive-action="key" ${approved ? "" : "disabled"}>I've reviewed the Key</button>
                </section>
                <section class="interactive-takeoff-gate">
                    <h4>Drawing Notes</h4>
                    <p>${approved ? "Review all applicable notes before counting." : "Awaiting approved drawing data"}</p>
                    <button type="button" class="btn btn-secondary" data-interactive-action="notes" ${approved && state.keyAcknowledged ? "" : "disabled"}>I've reviewed the Notes</button>
                </section>
            </div>` : `<div class="interactive-reference-controls"><button type="button" class="btn btn-secondary" data-interactive-action="toggle-key">[KEY]</button><button type="button" class="btn btn-secondary" data-interactive-action="toggle-notes">[NOTES]</button></div>`}
            ${!state.keyAcknowledged || state.keyReferenceOpen || state.notesReferenceOpen ? `<div class="interactive-takeoff-source-data">
                <section class="interactive-takeoff-panel">
                    <h4>Drawing Key / Legend</h4>
                    <ul>${approved && (!state.keyAcknowledged || state.keyReferenceOpen) ? state.exercise.key.map((entry) => `<li><strong>${entry.symbol}</strong> - ${entry.description} - ${entry.color}</li>`).join("") : "<li>Key reference minimized</li>"}</ul>
                </section>
                <section class="interactive-takeoff-panel">
                    <h4>Drawing Notes</h4>
                    <ul>${approved && (!state.notesAcknowledged || state.notesReferenceOpen) ? state.exercise.notes.map((note) => `<li>${note}</li>`).join("") : "<li>Notes reference minimized</li>"}</ul>
                </section>
            </div>` : ""}
            <div class="interactive-takeoff-workspace ${state.stage === "complete" ? "is-results" : ""}">
                <section class="interactive-takeoff-panel">
                    <div class="interactive-takeoff-toolbar">
                        <label for="interactiveProductSelect">What Are You Counting?</label>
                        <select id="interactiveProductSelect" ${approved && state.notesAcknowledged ? "" : "disabled"}>
                            <option value="">${approved ? "Select Product Category" : "Awaiting approved drawing data"}</option>
                            ${approved ? state.exercise.products.map((product) => `<option value="${product.id}" ${state.selectedProductId === product.id ? "selected" : ""}>${product.partNumber || product.id} - ${product.whatIsIt || "Approved product"}</option>`).join("") : ""}
                        </select>
                        <span class="interactive-color-indicator"><i style="background:${state.selectedColor ? takeoffColorHex[state.selectedColor] : "#64748b"}" aria-hidden="true"></i>${selectedProduct ? `CATEGORY: ${selectedProduct.whatIsIt}` : "No category selected"}</span>
                    </div>
                    <div class="interactive-takeoff-toolbar">
                        <label for="interactiveColorSelect">Ban-Koe Color</label>
                        <select id="interactiveColorSelect" ${approved && state.notesAcknowledged && state.selectedProductId ? "" : "disabled"}>
                            <option value="">Select color</option>
                            ${Object.keys(takeoffColorHex).map((color) => `<option value="${color}" ${state.selectedColor === color ? "selected" : ""}>${color}</option>`).join("")}
                        </select>
                    </div>
                    <div class="interactive-takeoff-drawing" role="img" aria-label="Interactive drawing viewport">
                        ${approved && state.exercise.drawing.asset ? `<div class="interactive-drawing-layer" style="transform: translate(${state.viewport.offsetX}px, ${state.viewport.offsetY}px) scale(${state.viewport.scale})"><img src="${state.exercise.drawing.asset}" alt="${state.exercise.title}">${state.exercise.locations.map((location) => `<button type="button" class="interactive-location-marker ${state.markedLocations.has(location.id) ? "is-marked" : ""}" data-interactive-location="${location.id}" style="left:${location.x * 100}%;top:${location.y * 100}%;width:${location.width * 100}%;height:${location.height * 100}%" ${state.markedLocations.has(location.id) ? "disabled" : ""} aria-label="${state.markedLocations.has(location.id) ? "Counted" : "Mark"} ${location.type} ${location.room}">${state.markedLocations.has(location.id) ? "✓" : ""}</button>`).join("")}${state.freeformMarks.map((mark) => `<button type="button" class="interactive-mark ${mark.crossedOff ? "is-crossed-off" : ""}" data-interactive-cross-mark="${mark.id}" style="left:${mark.x * 100}%;top:${mark.y * 100}%" aria-label="${mark.crossedOff ? "Crossed off" : "Counted"} mark ${mark.id}">${mark.crossedOff ? "X" : "✓"}</button>`).join("")}</div>` : `<div><strong>AWAITING APPROVED DRAWING</strong><p>The original PDF remains read-only source material. An approved image or SVG is required for marking.</p></div>`}
                        <div class="interactive-drawing-layer" data-selected-color="${state.selectedColor}" style="transform: translate(${state.viewport.offsetX}px, ${state.viewport.offsetY}px) scale(${state.viewport.scale})"><img src="${state.exercise.drawing.asset}" alt="${state.exercise.title}">${state.exercise.locations.map((location) => `<button type="button" class="interactive-location-marker ${state.markedLocations.has(location.id) ? "is-marked" : ""}" data-interactive-location="${location.id}" style="left:${location.x * 100}%;top:${location.y * 100}%;width:${location.width * 100}%;height:${location.height * 100}%" ${state.markedLocations.has(location.id) ? "disabled" : ""} aria-label="${state.markedLocations.has(location.id) ? "Counted" : "Mark"} ${location.type} ${location.room}">${state.markedLocations.has(location.id) ? "✓" : ""}</button>`).join("")}${state.freeformMarks.map((mark) => `<button type="button" class="interactive-mark ${mark.crossedOff ? "is-crossed-off" : ""}" data-interactive-cross-mark="${mark.id}" style="left:${mark.x * 100}%;top:${mark.y * 100}%" aria-label="${mark.crossedOff ? "Crossed off" : "Counted"} mark ${mark.id}">${mark.crossedOff ? "X" : "✓"}</button>`).join("")}</div>
                    </div>
                    <div class="interactive-current-task"><span>READY TO MARK</span><strong>${selectedProduct && state.selectedColor ? `${selectedProduct.whatIsIt} • ${state.selectedColor}` : "SELECT CATEGORY + COLOR"}</strong></div>
                    <div class="interactive-takeoff-toolbar" aria-label="Drawing view controls">
                        <button type="button" class="btn btn-secondary" data-interactive-action="zoom-out" ${approved ? "" : "disabled"}>Zoom out</button>
                        <span class="interactive-takeoff-status">${Math.round(state.viewport.scale * 100)}%</span>
                        <button type="button" class="btn btn-secondary" data-interactive-action="zoom-in" ${approved ? "" : "disabled"}>Zoom in</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="reset-view" ${approved ? "" : "disabled"}>Reset view</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="fullscreen" ${approved ? "" : "disabled"}>Expand Drawing</button>
                    </div>
                    <div class="interactive-takeoff-actions">
                        <button type="button" class="btn btn-secondary" data-interactive-action="undo" ${state.markedLocations.size ? "" : "disabled"}>Undo Mark</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="clear">Clear All</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="reset">Reset Exercise</button>
                    </div>
                </section>
                <aside class="interactive-takeoff-panel">
                    <h4>Takeoff Tally</h4>
                    <table class="interactive-takeoff-tally">
                        <thead><tr><th>Product</th><th>Counted</th><th>Final</th></tr></thead>
                        <tbody>${approved ? state.exercise.products.map((product) => `<tr><td>${product.partNumber || product.id}</td><td>${state.tallyByProduct[product.id] || 0}</td><td><input type="number" min="0" inputmode="numeric" data-interactive-final="${product.id}" value="${state.finalQuantities[product.id] || ""}" ${state.stage === "reconcile" || state.stage === "complete" ? "" : "disabled"}></td></tr>`).join("") : `<tr><td colspan="3">No approved products loaded</td></tr>`}</tbody>
                    </table>
                    <div class="interactive-takeoff-summary"><span>Counted: ${state.markedLocations.size}</span><span>Crossed off: ${state.crossedOffLocations.size}</span></div>
                    <div class="interactive-mark-list">${state.freeformMarks.length ? state.freeformMarks.map((mark) => `<div><span>${mark.productId}</span><button type="button" class="btn btn-secondary" data-interactive-cross-mark="${mark.id}" ${mark.crossedOff ? "disabled" : ""}>${mark.crossedOff ? "Crossed Off" : "Cross Off / Counted"}</button></div>`).join("") : "<p class=\"interactive-takeoff-status\">No marked devices yet.</p>"}</div>
                    <div class="interactive-takeoff-actions">
                        <button type="button" class="btn btn-primary" data-interactive-action="enter" ${approved && state.crossedOffLocations.size ? "" : "disabled"}>Enter Final Quantities</button>
                        <button type="button" class="btn btn-primary" data-interactive-action="reconcile" ${state.stage === "reconcile" ? "" : "disabled"}>Reconcile Takeoff</button>
                    </div>
                    <div class="interactive-feedback-details" aria-live="polite">${renderInteractiveFeedback(state)}</div>
                </aside>
            </div>
            ${state.stage === "complete" ? renderInteractiveResults(state) : ""}
            ${approved && state.stage !== "complete" ? `<section class="interactive-takeoff-panel"><h4>Countable Locations</h4><div class="interactive-takeoff-actions">${state.exercise.locations.map((location) => `<button type="button" class="btn btn-secondary" data-interactive-location="${location.id}" ${location.productId !== state.selectedProductId || state.markedLocations.has(location.id) ? "disabled" : ""}>${state.markedLocations.has(location.id) ? "COUNTED" : "Mark location"} ${location.id}</button><button type="button" class="btn btn-secondary" data-interactive-cross="${location.id}" ${!state.markedLocations.has(location.id) || state.crossedOffLocations.has(location.id) ? "disabled" : ""}>${state.crossedOffLocations.has(location.id) ? "CROSSED OFF" : "Cross off"}</button>`).join("")}</div></section>` : ""}
        </div>
    `;

    mount.querySelectorAll("[data-interactive-action]").forEach((button) => {
        button.addEventListener("click", () => handleInteractiveAction(button.getAttribute("data-interactive-action"), state));
    });
    mount.querySelectorAll("[data-interactive-exercise]").forEach((button) => {
        button.addEventListener("click", () => selectInteractiveExercise(button.getAttribute("data-interactive-exercise")));
    });
    mount.querySelectorAll("[data-interactive-learning-answer]").forEach((button) => {
        button.addEventListener("click", () => {
            answerColorLearning(state, button.getAttribute("data-interactive-learning-answer"));
            renderInteractiveTakeoff(state);
        });
    });
    mount.querySelectorAll("[data-interactive-cross-mark]").forEach((button) => {
        button.addEventListener("pointerdown", (event) => event.stopPropagation());
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            crossOffFreeformMark(state, button.getAttribute("data-interactive-cross-mark"));
            renderInteractiveTakeoff(state);
        });
    });
    mount.querySelector("#interactiveProductSelect")?.addEventListener("change", (event) => {
        selectInteractiveProduct(state, event.target.value);
        renderInteractiveTakeoff(state);
    });
    mount.querySelector("#interactiveColorSelect")?.addEventListener("change", (event) => {
        state.selectedColor = event.target.value;
        renderInteractiveTakeoff(state);
    });
    mount.querySelectorAll("[data-interactive-location]").forEach((button) => {
        button.addEventListener("pointerdown", (event) => event.stopPropagation());
        button.addEventListener("click", () => {
            markInteractiveLocation(state, button.getAttribute("data-interactive-location"));
            renderInteractiveTakeoff(state);
        });
    });
    mount.querySelectorAll("[data-interactive-cross]").forEach((button) => {
        button.addEventListener("click", () => {
            crossOffInteractiveLocation(state, button.getAttribute("data-interactive-cross"));
            renderInteractiveTakeoff(state);
        });
    });
    const drawingViewport = mount.querySelector(".interactive-takeoff-drawing");
    let dragStart = null;
    drawingViewport?.addEventListener("pointerdown", (event) => {
        if (!approved) {
            return;
        }
        dragStart = { x: event.clientX, y: event.clientY };
        drawingViewport.setPointerCapture(event.pointerId);
    });
    drawingViewport?.addEventListener("pointermove", (event) => {
        if (!dragStart || !approved) {
            return;
        }
        updateInteractiveViewport(state, 0, event.clientX - dragStart.x, event.clientY - dragStart.y);
        dragStart = { x: event.clientX, y: event.clientY };
        const drawingLayer = drawingViewport.querySelector(".interactive-drawing-layer");
        if (drawingLayer) {
            drawingLayer.style.transform = `translate(${state.viewport.offsetX}px, ${state.viewport.offsetY}px) scale(${state.viewport.scale})`;
        }
    });
    drawingViewport?.addEventListener("pointerup", (event) => {
        if (event.target.closest("[data-interactive-cross-mark]")) {
            dragStart = null;
            return;
        }
        if (dragStart && Math.abs(event.clientX - dragStart.x) < 5 && Math.abs(event.clientY - dragStart.y) < 5 && approved && state.selectedProductId && !state.exercise.locations.length) {
            const bounds = drawingViewport.getBoundingClientRect();
            addFreeformInteractiveMark(state, (event.clientX - bounds.left) / bounds.width, (event.clientY - bounds.top) / bounds.height);
            renderInteractiveTakeoff(state);
        }
        dragStart = null;
    });
    drawingViewport?.addEventListener("pointercancel", () => { dragStart = null; });
}

function setTakeoffView(view) {
    const viewVisibility = {
        learn: [".takeoff-framework", ".takeoff-lessons", ".takeoff-color-legend"],
        practice: [".takeoff-layout"],
        drawings: [".future-practice"]
    };
    Object.values(viewVisibility).flat().forEach((selector) => {
        document.querySelector(selector)?.classList.toggle("hidden", !viewVisibility[view].includes(selector));
    });
    document.querySelectorAll("[data-takeoff-view]").forEach((button) => {
        const isActive = button.getAttribute("data-takeoff-view") === view;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });
}

function renderInteractiveFeedback(state) {
    if (typeof state.feedback === "string") {
        return `<p class="interactive-takeoff-status">${state.feedback}</p>`;
    }
    if (!state.feedback) {
        return `<p class="interactive-takeoff-status">${Object.keys(state.exercise.expectedQuantities).length ? "Select a product after reviewing the key and notes." : "Exercise answer data not yet configured"}</p>`;
    }
    const scoreText = state.feedback.score ? `<strong>Takeoff Practice Score: ${state.feedback.score.total}%</strong>` : "";
    const categoryText = state.feedback.categoryResults ? state.feedback.categoryResults.map((result) => {
        const product = state.exercise.products.find((entry) => entry.id === result.productId);
        return `<div><span>${product ? product.whatIsIt : result.productId}</span><small>Your count: ${result.counted} | Expected: ${result.expected} | ${result.status === "correct" ? "✓ Correct" : "Needs correction"}</small></div>`;
    }).join("") : "";
    return `<div class="interactive-feedback-result ${state.feedback.status === "correct" ? "is-correct" : "is-review"}">${scoreText}<p>${state.feedback.status === "correct" ? "CORRECT" : "Review the discrepancies."}</p>${categoryText}</div>`;
}

function renderInteractiveResults(state) {
    if (typeof state.feedback === "string") {
        return `<section class="interactive-results"><p class="interactive-takeoff-status">${state.feedback}</p><div class="interactive-takeoff-actions"><button type="button" class="btn btn-primary" data-interactive-action="reset">Retry</button><button type="button" class="btn btn-secondary" data-interactive-action="back-to-exercises">Back to Exercises</button></div></section>`;
    }
    const score = state.feedback?.score;
    return `<section class="interactive-results"><div class="interactive-results-heading"><div><p class="eyebrow">Takeoff Results</p><h3>${state.feedback?.status === "correct" ? "Correct Takeoff" : "Review Your Takeoff"}</h3></div><strong>${score ? `${score.total}%` : "Review"}</strong></div><div class="interactive-results-grid"><span>Device Identification <b>${score ? `${score.productIdentification}%` : "Review"}</b></span><span>Color Coding <b>${score ? `${score.colorCoding}%` : "Review"}</b></span><span>Counting <b>${score ? `${score.countingAccuracy}%` : "Review"}</b></span><span>Reconciliation <b>${score ? `${score.reconciliationAccuracy}%` : "Review"}</b></span></div><div class="interactive-takeoff-actions"><button type="button" class="btn btn-primary" data-interactive-action="reset">Retry</button><button type="button" class="btn btn-secondary" data-interactive-action="back-to-exercises">Back to Exercises</button></div></section>`;
}

function handleInteractiveAction(action, state) {
    if (action === "key") {
        acknowledgeInteractiveKey(state);
    } else if (action === "notes") {
        acknowledgeInteractiveNotes(state);
    } else if (action === "undo") {
        const lastLocation = [...state.markedLocations].pop();
        if (lastLocation) {
            undoInteractiveMark(state, lastLocation);
        }
    } else if (action === "enter") {
        const quantities = {};
        document.querySelectorAll("[data-interactive-final]").forEach((input) => { quantities[input.getAttribute("data-interactive-final")] = Number(input.value) || 0; });
        enterInteractiveQuantities(state, quantities);
    } else if (action === "reconcile") {
        reconcileInteractiveTakeoff(state);
    } else if (action === "reset") {
        resetInteractiveTakeoff(state);
    } else if (action === "clear") {
        clearInteractiveMarks(state);
    } else if (action === "zoom-in") {
        updateInteractiveViewport(state, 0.25);
    } else if (action === "zoom-out") {
        updateInteractiveViewport(state, -0.25);
    } else if (action === "reset-view") {
        resetInteractiveViewport(state);
    } else if (action === "fullscreen") {
        document.querySelector(".interactive-takeoff-drawing")?.requestFullscreen?.();
    } else if (action === "back-to-exercises") {
        resetInteractiveTakeoff(state);
        state.exercisePickerOpen = true;
    } else if (action === "colors") {
        setInteractiveMode(state, "colors");
    } else if (action === "takeoff") {
        setInteractiveMode(state, "takeoff");
    } else if (action === "color-answer") {
        answerColorLearning(state, action);
    }

    if (action === "toggle-key") {
        state.keyReferenceOpen = !state.keyReferenceOpen;
    } else if (action === "toggle-notes") {
        state.notesReferenceOpen = !state.notesReferenceOpen;
    }

    renderInteractiveTakeoff(state);
}

function renderColorLearning(state) {
    const location = state.exercise.locations[state.colorLearningIndex];
    const product = state.exercise.products.find((entry) => entry.id === location.productId);
    const choices = [product.whatIsIt, product.color];
    return `<section class="interactive-color-learning"><h4>Learn the Colors</h4><p>What product/category is represented by this mapped ${location.color} device in ${location.room}?</p><div class="interactive-learning-choices">${choices.map((choice) => `<button type="button" class="btn btn-secondary" data-interactive-learning-answer="${choice}">${choice}</button>`).join("")}</div><p class="interactive-takeoff-status">The source drawing remains color-coded; trainee overlay marks are separate.</p></section>`;
}

function selectInteractiveExercise(exerciseId) {
    const nextState = window.takeoffInteractive.states[exerciseId];
    if (!nextState) {
        return;
    }
    window.takeoffInteractive.state = nextState;
    nextState.exercisePickerOpen = false;
    renderInteractiveTakeoff(nextState);
}

function initializeInteractiveTakeoff() {
    const exercises = [takeoffExercise001, takeoffExercise002, window.takeoffExercise003];
    const states = Object.fromEntries(exercises.map((exercise) => [exercise.exerciseId, createInteractiveTakeoffState(exercise)]));
    const state = states[exercises[0].exerciseId];
    window.takeoffExerciseLibrary = exercises;
    window.takeoffInteractive = {
        state,
        states,
        stages: interactiveTakeoffStages,
        acknowledgeKey: () => acknowledgeInteractiveKey(window.takeoffInteractive.state),
        acknowledgeNotes: () => acknowledgeInteractiveNotes(window.takeoffInteractive.state),
        selectProduct: (productId) => selectInteractiveProduct(window.takeoffInteractive.state, productId),
        markLocation: (locationId) => markInteractiveLocation(window.takeoffInteractive.state, locationId),
        crossOffLocation: (locationId) => crossOffInteractiveLocation(window.takeoffInteractive.state, locationId),
        undoMark: (locationId) => undoInteractiveMark(window.takeoffInteractive.state, locationId),
        enterQuantities: (quantities) => enterInteractiveQuantities(window.takeoffInteractive.state, quantities),
        reconcile: () => reconcileInteractiveTakeoff(window.takeoffInteractive.state),
        reset: () => resetInteractiveTakeoff(window.takeoffInteractive.state)
    };
    document.querySelectorAll("[data-takeoff-view]").forEach((button) => {
        button.addEventListener("click", () => setTakeoffView(button.getAttribute("data-takeoff-view")));
    });
    setTakeoffView("learn");
    renderInteractiveTakeoff(state);
}

window.addEventListener("DOMContentLoaded", initializeInteractiveTakeoff);