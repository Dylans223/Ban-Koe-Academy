const interactiveTakeoffStages = [
    "key",
    "notes",
    "product",
    "mark",
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

function isCountOnlyInteractiveExercise(exercise) {
    return exercise?.exerciseId === "takeoff-practice-001";
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
    if (!state.exercise || !state.exercise.products?.length) {
        state.feedback = "Select a product category.";
        return false;
    }

    const product = state.exercise.products.find((entry) => entry.id === productId);
    if (!product) {
        state.feedback = "Select a product category first.";
        return false;
    }

    state.selectedProductId = productId;
    if (isCountOnlyInteractiveExercise(state.exercise)) {
        state.selectedColor = product.color;
    }
    state.stage = "mark";
    return true;
}

function markInteractiveLocation(state, locationId) {
    const countOnly = isCountOnlyInteractiveExercise(state.exercise);
    if (state.stage !== "mark" || !state.selectedProductId) {
        state.feedback = "Select a product category first.";
        return false;
    }

    const location = state.exercise.locations.find((entry) => entry.id === locationId);
    if (!state.selectedColor && !countOnly) {
        state.feedback = "Select a Ban-Koe color first.";
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

    if (!countOnly && location.color !== state.selectedColor) {
        state.feedback = "WRONG COLOR";
        return false;
    }

    state.markedLocations.add(locationId);
    state.tallyByProduct[state.selectedProductId] = (state.tallyByProduct[state.selectedProductId] || 0) + 1;
    return true;
}

function undoInteractiveMark(state, locationId) {
    const freeformMark = state.freeformMarks.find((mark) => mark.id === locationId);
    if (freeformMark) {
        state.freeformMarks = state.freeformMarks.filter((mark) => mark.id !== locationId);
        state.markedLocations.delete(locationId);
        state.tallyByProduct[freeformMark.productId] = Math.max(0, (state.tallyByProduct[freeformMark.productId] || 0) - 1);
        return true;
    }

    const location = state.exercise.locations.find((entry) => entry.id === locationId);
    if (!location || !state.markedLocations.has(locationId)) {
        return false;
    }

    state.markedLocations.delete(locationId);
    state.tallyByProduct[location.productId] = Math.max(0, (state.tallyByProduct[location.productId] || 0) - 1);
    return true;
}

function enterInteractiveQuantities(state, quantities) {
    if (!state.markedLocations.size) {
        state.feedback = "Count devices before entering final quantities.";
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
        const categoryCorrect = counted === expectedQuantity && entered === expectedQuantity;
        categoryResults.push({ productId, counted, entered, expected: expectedQuantity, status: categoryCorrect ? "correct" : "needs-correction" });
        if (!categoryCorrect) {
            discrepancies.push({ productId, counted, entered, expected: expectedQuantity });
        }
    });

    const totalLocations = expectedLocations.length;
    const markedExpected = expectedLocations.filter((location) => state.markedLocations.has(location.id)).length;
    const correctCategories = categoryResults.filter((result) => result.status === "correct").length;
    const countAccuracy = totalLocations ? Math.round((markedExpected / totalLocations) * 100) : 0;
    const reconciliationAccuracy = categoryResults.length ? Math.round((correctCategories / categoryResults.length) * 100) : 0;
    state.score = {
        productIdentification: countAccuracy,
        colorCoding: countAccuracy,
        countingAccuracy: countAccuracy,
        missedDevices: totalLocations ? totalLocations - markedExpected : 0,
        doubleCountedDevices: 0,
        tallyAccuracy: countAccuracy,
        finalQuantityAccuracy: reconciliationAccuracy,
        reconciliationAccuracy,
        total: Math.round((countAccuracy + reconciliationAccuracy) / 2)
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
    state.tallyByProduct = {};
    state.stage = state.selectedProductId ? "mark" : "product";
}

function addFreeformInteractiveMark(state, x, y) {
    if (!isApprovedInteractiveExercise(state.exercise) || !state.notesAcknowledged || !state.selectedProductId) {
        state.feedback = "Read the key and notes, then select a product before marking.";
        return false;
    }

    const markId = `mark-${state.freeformMarks.length + 1}`;
    state.freeformMarks.push({ id: markId, productId: state.selectedProductId, x, y });
    state.markedLocations.add(markId);
    state.tallyByProduct[state.selectedProductId] = (state.tallyByProduct[state.selectedProductId] || 0) + 1;
    state.stage = "mark";
    return true;
}

function applyExercise001SymbolColors(state) {
    if (!['takeoff-practice-001', 'takeoff-practice-002'].includes(state.exercise.exerciseId)) {
        return;
    }

    const image = document.querySelector(".interactive-drawing-layer img");
    const canvas = document.querySelector(".interactive-symbol-color-layer");
    if (!image || !canvas || !image.naturalWidth || !image.naturalHeight) {
        return;
    }

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const isOrange = (x, y) => {
        const index = (y * canvas.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        return red > 170 && green > 45 && green < 210 && blue < 150 && red > green * 1.2;
    };
    const isWhite = (x, y) => {
        const index = (y * canvas.width + x) * 4;
        return pixels[index] > 220 && pixels[index + 1] > 220 && pixels[index + 2] > 220;
    };
    const recolorGlyph = (location, color) => {
        const red = Number.parseInt(color.slice(1, 3), 16);
        const green = Number.parseInt(color.slice(3, 5), 16);
        const blue = Number.parseInt(color.slice(5, 7), 16);
        const padding = 3;
        const startX = Math.max(0, Math.floor(location.x * canvas.width) - padding);
        const startY = Math.max(0, Math.floor(location.y * canvas.height) - padding);
        const endX = Math.min(canvas.width, Math.ceil((location.x + location.width) * canvas.width) + padding);
        const endY = Math.min(canvas.height, Math.ceil((location.y + location.height) * canvas.height) + padding);
        const width = endX - startX;
        const height = endY - startY;
        const background = new Uint8Array(width * height);
        const queue = [];
        for (let x = 0; x < width; x += 1) {
            queue.push([x, 0], [x, height - 1]);
        }
        for (let y = 1; y < height - 1; y += 1) {
            queue.push([0, y], [width - 1, y]);
        }
        while (queue.length) {
            const [x, y] = queue.pop();
            const localIndex = y * width + x;
            if (background[localIndex] || !isWhite(startX + x, startY + y)) {
                continue;
            }
            background[localIndex] = 1;
            for (const [nextX, nextY] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
                if (nextX >= 0 && nextX < width && nextY >= 0 && nextY < height) {
                    queue.push([nextX, nextY]);
                }
            }
        }
        for (let y = 1; y < height - 1; y += 1) {
            for (let x = 1; x < width - 1; x += 1) {
                const sourceX = startX + x;
                const sourceY = startY + y;
                if (background[y * width + x] || !isWhite(sourceX, sourceY)) {
                    continue;
                }
                const hasOrangeNeighbor = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]
                    .some(([offsetX, offsetY]) => isOrange(sourceX + offsetX, sourceY + offsetY));
                if (hasOrangeNeighbor) {
                    const index = (sourceY * canvas.width + sourceX) * 4;
                    pixels[index] = red;
                    pixels[index + 1] = green;
                    pixels[index + 2] = blue;
                }
            }
        }
    };

    const recolorDarkGlyph = (location, color) => {
        const red = Number.parseInt(color.slice(1, 3), 16);
        const green = Number.parseInt(color.slice(3, 5), 16);
        const blue = Number.parseInt(color.slice(5, 7), 16);
        const startX = Math.max(0, Math.floor((location.x + location.width * 0.2) * canvas.width));
        const startY = Math.max(0, Math.floor((location.y + location.height * 0.2) * canvas.height));
        const endX = Math.min(canvas.width, Math.ceil((location.x + location.width * 0.8) * canvas.width));
        const endY = Math.min(canvas.height, Math.ceil((location.y + location.height * 0.8) * canvas.height));
        for (let y = startY; y < endY; y += 1) {
            for (let x = startX; x < endX; x += 1) {
                const index = (y * canvas.width + x) * 4;
                if (pixels[index] < 120 && pixels[index + 1] < 120 && pixels[index + 2] < 120) {
                    pixels[index] = red;
                    pixels[index + 1] = green;
                    pixels[index + 2] = blue;
                }
            }
        }
    };

    if (state.exercise.exerciseId === "takeoff-practice-001") {
        state.exercise.locations.filter((location) => location.productId === "wall-speaker-strobes")
            .forEach((location) => recolorGlyph(location, "#facc15"));
        state.exercise.locations.filter((location) => location.productId === "test-stations")
            .forEach((location) => recolorGlyph(location, "#ec4899"));
    } else {
        state.exercise.locations.filter((location) => location.productId === "wall-speaker-strobes")
            .forEach((location) => recolorDarkGlyph(location, "#facc15"));
    }

    context.putImageData(imageData, 0, 0);
}

function renderDetectorSymbol(type, color, label = "") {
    const stroke = takeoffColorHex[color] || color;
    if (type === "smoke") {
        return `<span class="takeoff-key-symbol takeoff-key-symbol-smoke" style="--key-symbol-color:${stroke}" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11"></circle>${label ? `<text x="16" y="16" text-anchor="middle" dominant-baseline="central">${label}</text>` : "<circle cx=\"16\" cy=\"16\" r=\"3\" fill=\"currentColor\"></circle><path d=\"M16 5v5M16 22v5M5 16h5M22 16h5\"></path>"}</svg></span>`;
    }
    return `<span class="takeoff-key-symbol takeoff-key-symbol-heat" style="--key-symbol-color:${stroke}" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 4 28 16 16 28 4 16Z"></path>${label ? `<text x="16" y="16" text-anchor="middle" dominant-baseline="central">${label}</text>` : "<path d=\"M16 9v14M9 16h14\"></path><circle cx=\"16\" cy=\"16\" r=\"2\" fill=\"currentColor\"></circle>"}</svg></span>`;
}

function renderInteractiveKeyEntry(entry) {
    const text = `${entry.symbol} ${entry.description}`.toLowerCase();
    const isSmoke = text.includes("smoke") && !text.includes("duct");
    const isHeat = text.includes("heat");
    const sourceLabel = ["S", "H", "R"].includes(entry.symbol) ? entry.symbol : "";
    const symbol = isSmoke ? renderDetectorSymbol("smoke", "RED", sourceLabel) : isHeat ? renderDetectorSymbol("heat", "LIGHT BLUE", sourceLabel) : "";
    return `<li>${symbol}<strong>${entry.symbol}</strong> - ${entry.description} - ${entry.color}</li>`;
}

function renderDetectorOverlay(state) {
    const detectorLocations = state.exercise.locations.filter((location) => location.productId === "smokes" || location.productId === "ror-heats" || location.productId === "heat-detectors");
    if (!detectorLocations.length) {
        return "";
    }
    const isExercise003 = state.exercise.exerciseId === "takeoff-practice-003";
    return `<svg class="interactive-detector-symbol-layer" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">${detectorLocations.map((location) => {
        const isSmoke = location.productId === "smokes";
        const color = isSmoke ? takeoffColorHex.RED : takeoffColorHex["LIGHT BLUE"];
        const centerX = isExercise003 ? location.x : location.x + location.width / 2;
        const centerY = isExercise003 ? location.y : location.y + location.height / 2;
        const radiusX = location.width * 0.42;
        const radiusY = location.height * 0.42;
        return isSmoke
            ? `<g class="interactive-detector-symbol interactive-detector-smoke" transform="translate(${centerX} ${centerY}) scale(${radiusX} ${radiusY})" style="color:${color}"><circle r="1"></circle><circle r="0.25" fill="currentColor"></circle><path d="M0 -1V-0.45M0 .45V1M-1 0H-.45M.45 0H1"></path></g>`
            : `<g class="interactive-detector-symbol interactive-detector-heat" transform="translate(${centerX} ${centerY}) scale(${radiusX} ${radiusY})" style="color:${color}"><path d="M0 -1 1 0 0 1-1 0Z"></path><path d="M0 -.6V.6M-.6 0H.6"></path><circle r=".16" fill="currentColor"></circle></g>`;
    }).join("")}</svg>`;
}

function renderInteractiveTakeoff(state) {
    const mount = document.getElementById("interactiveTakeoffMount");
    if (!mount) {
        return;
    }

    const approved = isApprovedInteractiveExercise(state.exercise);
    const stageLabels = ["Key / Legend", "Drawing Notes", "Select Product", "Mark / Count", "Tally", "Enter", "Reconcile"];
    const currentStageIndex = interactiveTakeoffStages.indexOf(state.stage);
    const selectedProduct = state.exercise.products.find((product) => product.id === state.selectedProductId);
    const debugMode = new URLSearchParams(window.location.search).get("takeoffDebug") === "1";
    const sourceFrameClass = state.exercise.exerciseId === "takeoff-practice-001"
        ? "is-exercise-001"
        : state.exercise.exerciseId === "takeoff-practice-002"
            ? "is-exercise-002"
            : "is-exercise-003";

    const exerciseLibrary = window.takeoffExerciseLibrary || [];
    mount.innerHTML = `
        <div class="interactive-takeoff-shell">
            ${state.exercisePickerOpen ? `<div class="interactive-exercise-intro"><p class="eyebrow">DRAWING EXERCISES</p><h2>DRAWING TAKEOFF PRACTICE</h2><p>Practice the complete Ban-Koe takeoff workflow on real training drawings.</p></div><div class="interactive-takeoff-exercise-list" aria-label="Drawing takeoff practice exercises">${exerciseLibrary.map((exercise, index) => { const levels = ["Guided Count", "Independent Takeoff", "Advanced Takeoff"]; const descriptions = ["Color-coded source drawing. Count, tally, and reconcile.", "Black-and-white drawing. Apply the Ban-Koe color system yourself.", "More involved black-and-white drawing with multiple areas and device types."]; return `<button type="button" class="interactive-exercise-card exercise-level-${index + 1}" data-interactive-exercise="${exercise.exerciseId}"><span class="interactive-exercise-number">EXERCISE ${String(index + 1).padStart(3, "0")}</span><strong>${exercise.drawing.project.replace(" - LEVEL 1", "")}</strong><b>${levels[index]}</b><span>${descriptions[index]}</span><small>START EXERCISE</small></button>`; }).join("")}</div>` : `<div class="interactive-takeoff-breadcrumb"><button type="button" class="btn btn-secondary" data-interactive-action="back-to-exercises">← Back to Exercises</button><span>${state.exercise.title}</span></div>`}
            <div class="interactive-takeoff-heading">
                <div>
                    <button type="button" class="interactive-back-link" data-interactive-action="back-to-exercises">← Exercises</button>
                    <p class="interactive-exercise-label">${approved ? state.exercise.exerciseId.replace("takeoff-practice-", "EXERCISE ") : "EXERCISE 001"}</p>
                    <h3>${approved ? state.exercise.drawing.project : "Drawing Takeoff Practice"}</h3>
                </div>
                <div class="interactive-header-actions"><button type="button" class="btn btn-secondary" data-interactive-action="toggle-key">[KEY]</button><button type="button" class="btn btn-secondary" data-interactive-action="toggle-notes">[NOTES]</button><button type="button" class="btn btn-secondary" data-interactive-action="fullscreen" ${approved ? "" : "disabled"}>EXPAND DRAWING</button></div>
            </div>
            ${approved && state.exercise.exerciseId === "takeoff-practice-001" ? `<div class="interactive-mode-actions"><button type="button" class="btn btn-secondary ${state.mode === "colors" ? "is-selected" : ""}" data-interactive-action="colors">Learn the Colors</button><button type="button" class="btn btn-secondary ${state.mode === "takeoff" ? "is-selected" : ""}" data-interactive-action="takeoff">Guided Count</button></div>${state.mode === "colors" ? renderColorLearning(state) : ""}` : ""}
            <p class="interactive-takeoff-notice">${approved ? (isCountOnlyInteractiveExercise(state.exercise) ? "Pick what you are counting, then click those devices on the color-coded drawing." : "Review the key and notes, then select a category and color to mark the drawing.") : "AWAITING APPROVED DRAWING DATA."}</p>
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
                    <ul>${approved && (!state.keyAcknowledged || state.keyReferenceOpen) ? state.exercise.key.map(renderInteractiveKeyEntry).join("") : "<li>Key reference minimized</li>"}</ul>
                </section>
                <section class="interactive-takeoff-panel">
                    <h4>Drawing Notes</h4>
                    <ul>${approved && (!state.notesAcknowledged || state.notesReferenceOpen) ? state.exercise.notes.map((note) => `<li>${note}</li>`).join("") : "<li>Notes reference minimized</li>"}</ul>
                </section>
            </div>` : ""}
            <div class="interactive-takeoff-workspace ${state.stage === "complete" ? "is-results" : ""}">
                <section class="interactive-takeoff-panel">
                    <div class="interactive-takeoff-drawing" role="img" aria-label="Interactive drawing viewport">
                        ${approved && state.exercise.drawing.asset ? `<div class="interactive-drawing-layer ${sourceFrameClass}" data-selected-color="${state.selectedColor}" style="transform: translate(calc(-50% + ${state.viewport.offsetX}px), calc(-50% + ${state.viewport.offsetY}px)) scale(${state.viewport.scale})"><img src="${state.exercise.drawing.asset}" alt="${state.exercise.title}">${["takeoff-practice-001", "takeoff-practice-002", "takeoff-practice-003"].includes(state.exercise.exerciseId) ? renderDetectorOverlay(state) : ""}${["takeoff-practice-001", "takeoff-practice-002"].includes(state.exercise.exerciseId) ? "<canvas class=\"interactive-symbol-color-layer\" aria-hidden=\"true\"></canvas>" : ""}${state.exercise.locations.map((location) => `<button type="button" class="interactive-location-marker ${state.markedLocations.has(location.id) ? "is-marked" : ""}" data-interactive-location="${location.id}" style="left:${location.x * 100}%;top:${location.y * 100}%;width:${location.width * 100}%;height:${location.height * 100}%" ${!state.selectedProductId || location.productId !== state.selectedProductId ? "disabled" : ""} aria-label="${state.markedLocations.has(location.id) ? "Counted" : "Mark"} ${location.type} ${location.room}">${state.markedLocations.has(location.id) ? "✓" : ""}${debugMode ? `<span class="interactive-marker-debug">${location.id}<br>${location.type}<br>x: ${location.x.toFixed(3)} y: ${location.y.toFixed(3)}</span>` : ""}</button>`).join("")}</div>` : `<div><strong>AWAITING APPROVED DRAWING</strong><p>The original PDF remains read-only source material. An approved image or SVG is required for marking.</p></div>`}
                    </div>
                    <div class="interactive-takeoff-toolbar" aria-label="Drawing view controls">
                        <button type="button" class="btn btn-secondary" data-interactive-action="zoom-out" ${approved ? "" : "disabled"}>Zoom out</button>
                        <span class="interactive-takeoff-status">${Math.round(state.viewport.scale * 100)}%</span>
                        <button type="button" class="btn btn-secondary" data-interactive-action="zoom-in" ${approved ? "" : "disabled"}>Zoom in</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="reset-view" ${approved ? "" : "disabled"}>Reset view</button>
                    </div>
                    <div class="interactive-takeoff-actions">
                        <button type="button" class="btn btn-secondary" data-interactive-action="undo" ${state.markedLocations.size ? "" : "disabled"}>Undo Mark</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="clear">Clear All</button>
                        <button type="button" class="btn btn-secondary" data-interactive-action="reset">Reset Exercise</button>
                    </div>
                </section>
                <aside class="interactive-takeoff-panel">
                    <h4>CURRENT TASK</h4>
                    <div class="interactive-selector-group">
                        <label for="interactiveProductSelect">WHAT ARE YOU COUNTING?</label>
                        <select id="interactiveProductSelect" ${approved ? "" : "disabled"}>
                            <option value="">${approved ? "Select Product Category" : "Awaiting approved drawing data"}</option>
                            ${approved ? state.exercise.products.map((product) => `<option value="${product.id}" ${state.selectedProductId === product.id ? "selected" : ""}>${product.whatIsIt || product.id}</option>`).join("") : ""}
                        </select>
                        <strong class="interactive-selected-value">${selectedProduct ? selectedProduct.whatIsIt : "Select a category"}</strong>
                    </div>
                    <div class="interactive-selector-group">
                        <label for="interactiveColorSelect">BAN-KOE COLOR</label>
                        <select id="interactiveColorSelect" ${approved && state.selectedProductId && !isCountOnlyInteractiveExercise(state.exercise) ? "" : "disabled"}>
                            <option value="">Select color</option>
                            ${Object.keys(takeoffColorHex).map((color) => `<option value="${color}" ${state.selectedColor === color ? "selected" : ""}>${color}</option>`).join("")}
                        </select>
                        <strong class="interactive-selected-value"><i style="background:${state.selectedColor ? takeoffColorHex[state.selectedColor] : "#64748b"}" aria-hidden="true"></i>${state.selectedColor || "Select a color"}</strong>
                    </div>
                    <div class="interactive-rail-divider"></div>
                    <div class="interactive-current-task"><span>READY TO MARK</span><strong>${selectedProduct && state.selectedColor ? `${selectedProduct.whatIsIt} • ${state.selectedColor}` : "SELECT CATEGORY + COLOR"}</strong></div>
                    <div class="interactive-rail-divider"></div>
                    <h4>CURRENT TALLY</h4>
                    <table class="interactive-takeoff-tally">
                        <thead><tr><th>Product</th><th>Counted</th>${state.stage === "reconcile" || state.stage === "complete" ? "<th>Final</th>" : ""}</tr></thead>
                        <tbody>${approved ? state.exercise.products.map((product) => `<tr><td>${product.whatIsIt || product.id}</td><td>${state.tallyByProduct[product.id] || 0}</td>${state.stage === "reconcile" || state.stage === "complete" ? `<td><input type="number" min="0" inputmode="numeric" data-interactive-final="${product.id}" value="${state.finalQuantities[product.id] || ""}"></td>` : ""}</tr>`).join("") : `<tr><td colspan="2">No product categories loaded</td></tr>`}</tbody>
                    </table>
                    <div class="interactive-takeoff-summary"><span>Counted: ${state.markedLocations.size}</span></div>
                    <div class="interactive-counted-list">${[...state.markedLocations].filter((locationId) => state.exercise.locations.some((location) => location.id === locationId)).map((locationId) => { const location = state.exercise.locations.find((entry) => entry.id === locationId); return `<div><span>${location.type}</span></div>`; }).join("")}</div>
                    <div class="interactive-takeoff-actions">
                        <button type="button" class="btn btn-primary" data-interactive-action="enter" ${approved && state.markedLocations.size ? "" : "disabled"}>Enter Final Quantities</button>
                        <button type="button" class="btn btn-primary" data-interactive-action="reconcile" ${state.stage === "reconcile" ? "" : "disabled"}>Reconcile Takeoff</button>
                    </div>
                    <div class="interactive-feedback-details" aria-live="polite">${renderInteractiveFeedback(state)}</div>
                </aside>
            </div>
            ${state.stage === "complete" ? renderInteractiveResults(state) : ""}
            ${approved && state.stage !== "complete" ? `<section class="interactive-takeoff-panel interactive-location-index"><h4>Countable Locations</h4><div class="interactive-takeoff-actions">${state.exercise.locations.map((location) => `<button type="button" class="btn btn-secondary" data-interactive-location="${location.id}" ${!state.selectedProductId || location.productId !== state.selectedProductId ? "disabled" : ""}>${state.markedLocations.has(location.id) ? "COUNTED" : "Mark location"} ${location.id}</button>`).join("")}</div></section>` : ""}
        </div>
    `;

    const colorizeImage = () => applyExercise001SymbolColors(state);
    mount.querySelector(".interactive-drawing-layer img")?.addEventListener("load", colorizeImage, { once: true });
    colorizeImage();

    if (mount.dataset.interactiveClickBound !== "true") {
        mount.dataset.interactiveClickBound = "true";
        mount.addEventListener("click", (event) => {
        const activeState = window.takeoffInteractive?.state || state;
        const actionTarget = event.target.closest("[data-interactive-action]");
        if (actionTarget) {
            event.stopPropagation();
            handleInteractiveAction(actionTarget.getAttribute("data-interactive-action"), activeState);
            return;
        }

        const exerciseTarget = event.target.closest("[data-interactive-exercise]");
        if (exerciseTarget) {
            event.stopPropagation();
            selectInteractiveExercise(exerciseTarget.getAttribute("data-interactive-exercise"));
            return;
        }

        const learningTarget = event.target.closest("[data-interactive-learning-answer]");
        if (learningTarget) {
            event.stopPropagation();
            answerColorLearning(activeState, learningTarget.getAttribute("data-interactive-learning-answer"));
            renderInteractiveTakeoff(activeState);
            return;
        }

        const locationTarget = event.target.closest("[data-interactive-location]");
        if (locationTarget) {
            event.stopPropagation();
            markInteractiveLocation(activeState, locationTarget.getAttribute("data-interactive-location"));
            renderInteractiveTakeoff(activeState);
            return;
        }

        });
    }
    mount.querySelector("#interactiveProductSelect")?.addEventListener("change", (event) => {
        const nextValue = event.target.value;
        if (!nextValue) {
            state.selectedProductId = null;
            state.feedback = "Select a product category first.";
            state.stage = "product";
            renderInteractiveTakeoff(state);
            return;
        }
        selectInteractiveProduct(state, nextValue);
        renderInteractiveTakeoff(state);
    });
    mount.querySelector("#interactiveColorSelect")?.addEventListener("change", (event) => {
        state.selectedColor = event.target.value;
        state.feedback = !event.target.value ? "Select a Ban-Koe color first." : null;
        renderInteractiveTakeoff(state);
    });
    const drawingViewport = mount.querySelector(".interactive-takeoff-drawing");
    let dragStart = null;
    drawingViewport?.addEventListener("pointerdown", (event) => {
        if (!approved) {
            return;
        }
        if (event.target.closest("[data-interactive-location]")) {
            dragStart = null;
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
            drawingLayer.style.transform = `translate(calc(-50% + ${state.viewport.offsetX}px), calc(-50% + ${state.viewport.offsetY}px)) scale(${state.viewport.scale})`;
        }
    });
    drawingViewport?.addEventListener("pointerup", (event) => {
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
        document.querySelector(".interactive-takeoff-workspace")?.requestFullscreen?.();
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