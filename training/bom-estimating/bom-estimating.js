// ===============================================
// Ban-Koe Academy
// BOM & Estimating Training Module
// ===============================================

(function () {
    const projects = [
        {
            id: "small-office-fire-alarm-upgrade",
            name: "Small Office Fire Alarm Upgrade",
            difficulty: "Beginner",
            scenario: "You have completed the initial takeoff for a two-story office building. Your next job is to turn the takeoff information into a clean material list that can be reviewed and eventually used for quoting."
        }
    ];

    const requirements = [
        "1 fire alarm control panel",
        "2 floors",
        "20 smoke detectors",
        "4 manual pull stations",
        "8 horn/strobes",
        "1 duct smoke detector",
        "HVAC shutdown interface",
        "Appropriate monitoring/control interfaces as required by the system design"
    ];

    const bomCategories = [
        { id: "control", label: "CONTROL" },
        { id: "initiating", label: "INITIATING" },
        { id: "notification", label: "NOTIFICATION" },
        { id: "duct-detection", label: "DUCT DETECTION" },
        { id: "modules-interfaces", label: "MODULES / INTERFACES" },
        { id: "power", label: "POWER" },
        { id: "accessories", label: "ACCESSORIES" }
    ];

    const bomItems = [
        {
            id: "control-panel",
            label: "Fire Alarm Control Panel",
            category: "control",
            expectedQuantity: 1,
            requiredMajor: true
        },
        {
            id: "smoke-detector",
            label: "Smoke Detector",
            category: "initiating",
            expectedQuantity: 20,
            requiredMajor: true
        },
        {
            id: "manual-pull-station",
            label: "Manual Pull Station",
            category: "initiating",
            expectedQuantity: 4,
            requiredMajor: true
        },
        {
            id: "horn-strobe",
            label: "Horn/Strobe",
            category: "notification",
            expectedQuantity: 8,
            requiredMajor: true
        },
        {
            id: "duct-smoke-detector",
            label: "Duct Smoke Detector",
            category: "duct-detection",
            expectedQuantity: 1,
            requiredMajor: true
        },
        {
            id: "monitor-input-module",
            label: "Monitor/Input Module",
            category: "modules-interfaces",
            expectedQuantity: null,
            requiredMajor: false
        },
        {
            id: "control-relay-interface",
            label: "Control/Relay Interface",
            category: "modules-interfaces",
            expectedQuantity: 1,
            requiredMajor: true
        },
        {
            id: "battery",
            label: "Battery",
            category: "power",
            expectedQuantity: null,
            requiredMajor: false
        },
        {
            id: "mounting-accessories",
            label: "Mounting / Installation Accessories",
            category: "accessories",
            expectedQuantity: null,
            requiredMajor: false
        }
    ];

    const reviewRules = {
        requiredCategories: ["control", "initiating", "notification", "duct-detection", "modules-interfaces"],
        recommendedCategories: ["power", "accessories"],
        requiredMajorDevices: {
            "control-panel": 1,
            "smoke-detector": 20,
            "manual-pull-station": 4,
            "horn-strobe": 8,
            "duct-smoke-detector": 1,
            "control-relay-interface": 1
        },
        missingItemOptions: [
            { id: "duct-smoke-detector", label: "Duct Smoke Detector", correct: true },
            { id: "hvac-interface", label: "HVAC Interface", correct: true },
            { id: "battery", label: "Battery", correct: true },
            { id: "mounting-accessories", label: "Required mounting/accessory items", correct: true },
            { id: "control-panel", label: "Fire Alarm Control Panel", correct: false },
            { id: "pull-stations", label: "Manual Pull Stations", correct: false }
        ]
    };

    const pricingExercises = [
        {
            id: "pricing-smoke",
            product: "Smoke Detector",
            quantity: 20,
            trainingUnitPrice: 50,
            expectedExtended: 1000
        },
        {
            id: "pricing-horn",
            product: "Horn/Strobe",
            quantity: 8,
            trainingUnitPrice: 75,
            expectedExtended: 600
        }
    ];

    const scenarios = {
        initial: projects[0],
        challenge: {
            id: "three-story-office",
            title: "Three-story office building",
            expected: {
                "challenge-control-panel": 1,
                "challenge-smoke": 36,
                "challenge-pull": 6,
                "challenge-horn": 18,
                "challenge-duct": 2,
                "challenge-hvac": 1
            }
        }
    };

    const scoring = {
        materialOrganization: 15,
        productSelection: 20,
        quantityAccuracy: 25,
        missingItemDetection: 15,
        bomOrganization: 10,
        estimatingMath: 15
    };

    const products = buildProductsFromLibrary();

    const state = {
        currentStep: 1,
        categoryAssignments: {},
        selectedProducts: {},
        quantityEntries: {},
        quantityNotes: {},
        step2Score: 0,
        step3Score: 0,
        step4Score: 0,
        step5Score: 0,
        bomReviewScores: {
            completeness: 0,
            quantityAccuracy: 0,
            productSelection: 0,
            organization: 0,
            overall: 0
        },
        pricingScore: 0,
        challengeScore: 0,
        finalBomRows: [],
        nextRowId: 1
    };

    const el = {
        navButtons: document.querySelectorAll("[data-nav-target]"),
        stepIndicator: document.getElementById("stepIndicator"),
        progressFill: document.getElementById("progressFill"),
        progressValue: document.getElementById("progressValue"),

        step1: document.getElementById("step1"),
        step2: document.getElementById("step2"),
        step3: document.getElementById("step3"),
        step4: document.getElementById("step4"),
        step5: document.getElementById("step5"),
        step6: document.getElementById("step6"),

        projectRequirementsList: document.getElementById("projectRequirementsList"),
        buildBomButton: document.getElementById("buildBomButton"),

        categoryCards: document.getElementById("categoryCards"),
        categoryFeedback: document.getElementById("categoryFeedback"),
        checkCategoriesButton: document.getElementById("checkCategoriesButton"),
        toStep3Button: document.getElementById("toStep3Button"),

        productSelectionRows: document.getElementById("productSelectionRows"),
        productSelectionFeedback: document.getElementById("productSelectionFeedback"),
        reviewProductsButton: document.getElementById("reviewProductsButton"),
        toStep4Button: document.getElementById("toStep4Button"),

        quantityTableBody: document.getElementById("quantityTableBody"),
        quantityFeedback: document.getElementById("quantityFeedback"),
        checkQuantitiesButton: document.getElementById("checkQuantitiesButton"),
        toStep5Button: document.getElementById("toStep5Button"),

        missingItemOptions: document.getElementById("missingItemOptions"),
        missingFeedback: document.getElementById("missingFeedback"),
        checkMissingButton: document.getElementById("checkMissingButton"),
        toStep6Button: document.getElementById("toStep6Button"),

        projectNameField: document.getElementById("projectNameField"),
        customerField: document.getElementById("customerField"),
        projectNumberField: document.getElementById("projectNumberField"),
        estimatorField: document.getElementById("estimatorField"),
        revisionField: document.getElementById("revisionField"),
        dateField: document.getElementById("dateField"),

        finalBomBody: document.getElementById("finalBomBody"),
        addBomRowButton: document.getElementById("addBomRowButton"),
        clearBomButton: document.getElementById("clearBomButton"),
        checkBomButton: document.getElementById("checkBomButton"),

        completenessScore: document.getElementById("completenessScore"),
        quantityScore: document.getElementById("quantityScore"),
        selectionScore: document.getElementById("selectionScore"),
        organizationScore: document.getElementById("organizationScore"),
        overallReviewScore: document.getElementById("overallReviewScore"),
        bomReviewMessages: document.getElementById("bomReviewMessages"),

        pricingExerciseRows: document.getElementById("pricingExerciseRows"),
        checkPricingButton: document.getElementById("checkPricingButton"),
        pricingFeedback: document.getElementById("pricingFeedback"),

        quoteChecklist: document.getElementById("quoteChecklist"),

        challengeInputs: document.getElementById("challengeInputs"),
        checkChallengeButton: document.getElementById("checkChallengeButton"),
        challengeFeedback: document.getElementById("challengeFeedback"),

        finalScoreValue: document.getElementById("finalScoreValue"),
        finalScoreRating: document.getElementById("finalScoreRating"),
        finalScoreBreakdown: document.getElementById("finalScoreBreakdown"),

        tryAgainButton: document.getElementById("tryAgainButton"),
        returnTrainingButton: document.getElementById("returnTrainingButton"),
        nextModuleButton: document.getElementById("nextModuleButton"),
        nextModuleMessage: document.getElementById("nextModuleMessage"),

        productInfoModal: document.getElementById("productInfoModal"),
        productInfoTitle: document.getElementById("productInfoTitle"),
        productInfoMeta: document.getElementById("productInfoMeta"),
        productInfoDescription: document.getElementById("productInfoDescription"),
        closeProductModalButton: document.getElementById("closeProductModalButton"),
        closeProductModalArea: document.querySelector("[data-close-product-modal]"),
        moduleStepList: document.getElementById("moduleStepList"),
        moduleObjectiveChip: document.getElementById("moduleObjectiveChip"),
        moduleObjectiveTitle: document.getElementById("moduleObjectiveTitle"),
        moduleObjectiveText: document.getElementById("moduleObjectiveText")
    };

    const moduleSteps = [
        { label: "Project", chip: "Project Brief", title: "Understand the project before organizing materials.", objective: "Your goal is to read the project brief and understand what the takeoff requires before building the BOM." },
        { label: "Organize", chip: "Organize Materials", title: "Sort the requirements into the correct BOM categories.", objective: "Your goal is to organize the material requirements so the BOM structure makes sense before selecting products." },
        { label: "Products", chip: "Select Products", title: "Convert the functional needs into product choices.", objective: "Your goal is to select verified products where available and use placeholders responsibly when exact products are not yet confirmed." },
        { label: "Quantities", chip: "Verify Quantities", title: "Check the required quantities before review.", objective: "Your goal is to verify that the major device quantities match the scenario before moving into BOM review." },
        { label: "Review", chip: "BOM Review", title: "Identify missing scope before finalizing the BOM.", objective: "Your goal is to catch omitted devices, interfaces, power, and accessory considerations before finalizing the material list." },
        { label: "Finalize", chip: "Final Estimate", title: "Complete the final BOM workspace and readiness checks.", objective: "Your goal is to build, review, and challenge-test the final BOM so the material list is organized and ready for the next workflow step." }
    ];

    window.addEventListener("DOMContentLoaded", initializeModule);

    function initializeModule() {
        bindNavigation();
        bindCoreButtons();
        renderProjectRequirements();
        renderCategoryCards();
        renderProductSelection();
        renderQuantityTable();
        renderMissingItemOptions();
        initializeFinalBomBuilder();
        renderPricingExercises();
        renderQuoteChecklist();
        renderChallengeFields();
        setDefaultDate();
        updateStepView(1);
        updateFinalScore();
    }

    function renderModuleShell(step) {
        const visualStep = Math.min(step, 6);
        el.moduleStepList.innerHTML = moduleSteps.map((entry, index) => {
            const stepNumber = index + 1;
            const isComplete = stepNumber < visualStep;
            const isActive = stepNumber === visualStep;
            const icon = isComplete ? "✓" : isActive ? "●" : "○";
            return `<span class="module-step-item ${isComplete ? "is-complete" : isActive ? "is-active" : ""}"><span class="module-step-icon">${icon}</span>${stepNumber} ${entry.label}</span>`;
        }).join("");

        const activeConfig = moduleSteps[visualStep - 1];
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
                if (navPaths[target]) {
                    window.location.href = navPaths[target];
                }
            });
        });
    }

    function bindCoreButtons() {
        el.buildBomButton.addEventListener("click", () => updateStepView(2));
        el.checkCategoriesButton.addEventListener("click", checkCategories);
        el.toStep3Button.addEventListener("click", () => updateStepView(3));

        el.reviewProductsButton.addEventListener("click", reviewProductSelections);
        el.toStep4Button.addEventListener("click", () => updateStepView(4));

        el.checkQuantitiesButton.addEventListener("click", checkQuantities);
        el.toStep5Button.addEventListener("click", () => updateStepView(5));

        el.checkMissingButton.addEventListener("click", checkMissingItems);
        el.toStep6Button.addEventListener("click", () => updateStepView(6));

        el.addBomRowButton.addEventListener("click", addFinalBomRow);
        el.clearBomButton.addEventListener("click", clearFinalBom);
        el.checkBomButton.addEventListener("click", checkFinalBom);

        el.checkPricingButton.addEventListener("click", checkPricingExercise);
        el.checkChallengeButton.addEventListener("click", checkChallenge);

        el.tryAgainButton.addEventListener("click", resetModule);
        el.returnTrainingButton.addEventListener("click", () => {
            window.location.href = "../index.html";
        });
        el.nextModuleButton.addEventListener("click", () => {
            window.location.href = "../scenarios/index.html";
        });

        el.closeProductModalButton.addEventListener("click", closeProductModal);
        el.closeProductModalArea.addEventListener("click", closeProductModal);
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !el.productInfoModal.classList.contains("hidden")) {
                closeProductModal();
            }
        });
    }

    function renderProjectRequirements() {
        el.projectRequirementsList.innerHTML = requirements.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
    }

    function renderCategoryCards() {
        el.categoryCards.innerHTML = bomItems.map((item) => {
            const selected = state.categoryAssignments[item.id] || "";
            const cardClass = selected === "" ? "" : selected === item.category ? "correct" : "incorrect";

            return `
                <article class="category-card ${cardClass}">
                    <div class="card-top">
                        <h3>${escapeHTML(item.label)}</h3>
                        <span class="status-chip ${getCategoryChipClass(item.id)}">${escapeHTML(getCategoryChipText(item.id))}</span>
                    </div>
                    <label for="category-${escapeHTML(item.id)}">BOM Category</label>
                    <select id="category-${escapeHTML(item.id)}" data-category-select="${escapeHTML(item.id)}">
                        <option value="">Select category</option>
                        ${bomCategories.map((category) => `<option value="${escapeHTML(category.id)}" ${selected === category.id ? "selected" : ""}>${escapeHTML(category.label)}</option>`).join("")}
                    </select>
                </article>
            `;
        }).join("");

        el.categoryCards.querySelectorAll("[data-category-select]").forEach((select) => {
            select.addEventListener("change", () => {
                const itemId = select.getAttribute("data-category-select");
                state.categoryAssignments[itemId] = select.value;
                renderCategoryCards();
            });
        });
    }

    function checkCategories() {
        const results = bomItems.map((item) => {
            const selected = state.categoryAssignments[item.id] || "";
            return {
                id: item.id,
                label: item.label,
                selected,
                expected: item.category,
                correct: selected === item.category
            };
        });

        const correctCount = results.filter((item) => item.correct).length;
        const total = results.length;
        const incorrect = results.filter((item) => item.selected !== "" && !item.correct);
        const unanswered = results.filter((item) => item.selected === "").length;

        state.step2Score = Math.round((correctCount / total) * 100);
        renderCategoryCards();

        if (unanswered > 0) {
            showFeedback(el.categoryFeedback, `You still have ${unanswered} material card(s) to place.`, "warning");
            el.toStep3Button.disabled = true;
            updateFinalScore();
            return;
        }

        if (incorrect.length === 0) {
            showFeedback(el.categoryFeedback, "Great work. Materials are organized correctly. Example checks: Smoke Detector -> Initiating, Horn/Strobe -> Notification, Monitor/Input Module -> Modules / Interfaces.", "correct");
            el.toStep3Button.disabled = false;
        } else {
            const firstIssue = incorrect[0];
            const expectedLabel = getCategoryLabel(firstIssue.expected);
            showFeedback(el.categoryFeedback, `${firstIssue.label} is currently in the wrong category. It belongs in ${expectedLabel}.`, "incorrect");
            el.toStep3Button.disabled = true;
        }

        updateFinalScore();
    }

    function renderProductSelection() {
        el.productSelectionRows.innerHTML = bomItems.map((item) => {
            const options = products[item.id] || [];
            const selectedKey = state.selectedProducts[item.id] || "";
            const selected = options.find((entry) => entry.key === selectedKey) || null;

            return `
                <article class="selection-row">
                    <div class="row-top">
                        <h3>${escapeHTML(item.label)}</h3>
                        <span class="status-chip ${selected ? (selected.verified ? "good" : "warn") : ""}">${selected ? (selected.verified ? "Verified Product" : "Functional Placeholder") : "Not Selected"}</span>
                    </div>
                    <p>Select a product record where available. If no verified part exists, use the functional placeholder.</p>
                    <div class="selection-controls">
                        <select data-product-select="${escapeHTML(item.id)}">
                            <option value="">Select product</option>
                            ${options.map((option) => `<option value="${escapeHTML(option.key)}" ${selectedKey === option.key ? "selected" : ""}>${escapeHTML(getProductOptionLabel(option))}</option>`).join("")}
                        </select>
                        <button type="button" class="btn btn-secondary" data-product-info="${escapeHTML(item.id)}" ${selected ? "" : "disabled"}>Product Info</button>
                    </div>
                    <div>
                        <strong>Manufacturer:</strong> ${escapeHTML(selected ? selected.manufacturer : "-")}
                        <span class="inline-separator">|</span>
                        <strong>Part Number:</strong> ${escapeHTML(selected ? (selected.partNumber || "Functional Placeholder") : "-")}
                        <span class="inline-separator">|</span>
                        <strong>Category:</strong> ${escapeHTML(selected ? selected.category : "-")}
                    </div>
                </article>
            `;
        }).join("");

        el.productSelectionRows.querySelectorAll("[data-product-select]").forEach((select) => {
            select.addEventListener("change", () => {
                const itemId = select.getAttribute("data-product-select");
                state.selectedProducts[itemId] = select.value;
                renderProductSelection();
                renderQuantityTable();
            });
        });

        el.productSelectionRows.querySelectorAll("[data-product-info]").forEach((button) => {
            button.addEventListener("click", () => {
                const itemId = button.getAttribute("data-product-info");
                openProductInfo(itemId);
            });
        });
    }

    function reviewProductSelections() {
        const missing = bomItems.filter((item) => !state.selectedProducts[item.id]);
        if (missing.length > 0) {
            showFeedback(el.productSelectionFeedback, `Select products for all BOM lines before continuing. Missing: ${missing.map((item) => item.label).join(", ")}.`, "warning");
            el.toStep4Button.disabled = true;
            state.step3Score = 0;
            updateFinalScore();
            return;
        }

        const selectedList = bomItems.map((item) => getSelectedProduct(item.id)).filter(Boolean);
        const verifiedCount = selectedList.filter((item) => item.verified).length;
        const verifiedRatio = selectedList.length === 0 ? 0 : verifiedCount / selectedList.length;
        state.step3Score = Math.round((verifiedRatio * 70 + 30) * 100) / 100;

        const placeholderCount = selectedList.length - verifiedCount;
        if (placeholderCount === 0) {
            showFeedback(el.productSelectionFeedback, "All selections are mapped to verified product records. Continue to quantity verification.", "correct");
        } else {
            showFeedback(el.productSelectionFeedback, `${placeholderCount} selection(s) use functional placeholders because a verified product record was not found. Verify part numbers before real quoting.`, "warning");
        }

        el.toStep4Button.disabled = false;
        updateFinalScore();
    }

    function renderQuantityTable() {
        el.quantityTableBody.innerHTML = bomItems.map((item) => {
            const product = getSelectedProduct(item.id);
            const quantity = state.quantityEntries[item.id] !== undefined ? String(state.quantityEntries[item.id]) : "";
            const notes = state.quantityNotes[item.id] || "";

            return `
                <tr>
                    <td>${escapeHTML(getCategoryLabel(item.category))}</td>
                    <td>${escapeHTML(product ? product.manufacturer : "-")}</td>
                    <td>${escapeHTML(product ? (product.partNumber || "Verify") : "-")}</td>
                    <td>${escapeHTML(product ? product.name : item.label)}</td>
                    <td><input type="number" min="0" data-quantity-input="${escapeHTML(item.id)}" value="${escapeHTML(quantity)}" placeholder="Enter quantity"></td>
                    <td><input type="text" data-quantity-note="${escapeHTML(item.id)}" value="${escapeHTML(notes)}" placeholder="Optional"></td>
                    <td><span class="status-chip ${getQuantityStatus(item.id).className}">${escapeHTML(getQuantityStatus(item.id).text)}</span></td>
                </tr>
            `;
        }).join("");

        el.quantityTableBody.querySelectorAll("[data-quantity-input]").forEach((input) => {
            input.addEventListener("input", () => {
                const itemId = input.getAttribute("data-quantity-input");
                const numeric = parseInt(input.value, 10);
                state.quantityEntries[itemId] = Number.isFinite(numeric) ? numeric : "";
                renderQuantityTable();
            });
        });

        el.quantityTableBody.querySelectorAll("[data-quantity-note]").forEach((input) => {
            input.addEventListener("input", () => {
                const itemId = input.getAttribute("data-quantity-note");
                state.quantityNotes[itemId] = input.value;
            });
        });
    }

    function checkQuantities() {
        const messages = [];
        let correctMajor = 0;
        let attemptedMajor = 0;

        Object.keys(reviewRules.requiredMajorDevices).forEach((itemId) => {
            attemptedMajor += 1;
            const expected = reviewRules.requiredMajorDevices[itemId];
            const entered = Number(state.quantityEntries[itemId]);
            if (entered === expected) {
                correctMajor += 1;
                return;
            }

            if (itemId === "smoke-detector") {
                messages.push("You entered " + (Number.isFinite(entered) ? entered : "no value") + " smoke detectors. The project requirements specify 10 per floor across 2 floors, for a total of 20.");
            } else {
                const item = getBomItem(itemId);
                messages.push(`${item.label}: expected ${expected}, entered ${Number.isFinite(entered) ? entered : "no value"}.`);
            }
        });

        state.step4Score = attemptedMajor === 0 ? 0 : Math.round((correctMajor / attemptedMajor) * 100);

        const majorEntered = Object.keys(reviewRules.requiredMajorDevices).every((itemId) => {
            const qty = Number(state.quantityEntries[itemId]);
            return Number.isFinite(qty) && qty > 0;
        });

        if (messages.length === 0) {
            showFeedback(el.quantityFeedback, "Major device quantities match the scenario. Continue to BOM review.", "correct");
            el.toStep5Button.disabled = false;
        } else if (majorEntered) {
            showFeedback(el.quantityFeedback, `Quantity review found ${messages.length} issue(s): ${messages.join(" ")}`, "warning");
            el.toStep5Button.disabled = false;
        } else {
            showFeedback(el.quantityFeedback, "Enter quantities for all major required items before continuing.", "incorrect");
            el.toStep5Button.disabled = true;
        }

        updateFinalScore();
    }

    function renderMissingItemOptions() {
        el.missingItemOptions.innerHTML = reviewRules.missingItemOptions.map((option) => `
            <label>
                <input type="checkbox" data-missing-option="${escapeHTML(option.id)}">
                <span>${escapeHTML(option.label)}</span>
            </label>
        `).join("");
    }

    function checkMissingItems() {
        const selected = new Set();
        el.missingItemOptions.querySelectorAll("[data-missing-option]").forEach((checkbox) => {
            if (checkbox.checked) {
                selected.add(checkbox.getAttribute("data-missing-option"));
            }
        });

        const expected = new Set(reviewRules.missingItemOptions.filter((item) => item.correct).map((item) => item.id));
        let correct = 0;
        let incorrect = 0;

        selected.forEach((itemId) => {
            if (expected.has(itemId)) {
                correct += 1;
            } else {
                incorrect += 1;
            }
        });

        const missed = Array.from(expected).filter((itemId) => !selected.has(itemId));
        const denominator = expected.size + incorrect;
        state.step5Score = denominator === 0 ? 0 : Math.round((correct / denominator) * 100);

        if (missed.length === 0 && incorrect === 0) {
            showFeedback(el.missingFeedback, "Excellent review. You identified all missing items from this partial BOM.", "correct");
            el.toStep6Button.disabled = false;
        } else {
            const missedLabels = missed.map((itemId) => {
                const option = reviewRules.missingItemOptions.find((entry) => entry.id === itemId);
                return option ? option.label : itemId;
            });
            showFeedback(el.missingFeedback, `Review again. Missed: ${missedLabels.join(", ") || "none"}. Extra selections: ${incorrect}.`, "warning");
            el.toStep6Button.disabled = true;
        }

        updateFinalScore();
    }

    function initializeFinalBomBuilder() {
        addFinalBomRow();
    }

    function addFinalBomRow() {
        state.finalBomRows.push({
            rowId: state.nextRowId,
            category: "",
            productKey: "",
            manufacturer: "",
            partNumber: "",
            description: "",
            quantity: "",
            notes: "",
            verified: false,
            functionalId: ""
        });
        state.nextRowId += 1;
        renderFinalBomTable();
    }

    function clearFinalBom() {
        state.finalBomRows = [];
        state.nextRowId = 1;
        addFinalBomRow();
        renderFinalBomTable();
        resetBomReviewPanel();
        updateFinalScore();
    }

    function renderFinalBomTable() {
        const productOptions = getFlattenedProductOptions();
        el.finalBomBody.innerHTML = state.finalBomRows.map((row, index) => {
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <select data-row-field="category" data-row-id="${row.rowId}">
                            <option value="">Select</option>
                            ${bomCategories.map((category) => `<option value="${escapeHTML(category.id)}" ${row.category === category.id ? "selected" : ""}>${escapeHTML(category.label)}</option>`).join("")}
                        </select>
                    </td>
                    <td>${escapeHTML(row.manufacturer || "-")}</td>
                    <td>${escapeHTML(row.partNumber || "-")}</td>
                    <td>
                        <select data-row-field="productKey" data-row-id="${row.rowId}">
                            <option value="">Select</option>
                            ${productOptions.map((option) => `<option value="${escapeHTML(option.key)}" ${row.productKey === option.key ? "selected" : ""}>${escapeHTML(getProductOptionLabel(option))}</option>`).join("")}
                        </select>
                    </td>
                    <td><input type="number" min="0" data-row-field="quantity" data-row-id="${row.rowId}" value="${escapeHTML(String(row.quantity))}" placeholder="0"></td>
                    <td><input type="text" data-row-field="notes" data-row-id="${row.rowId}" value="${escapeHTML(row.notes)}" placeholder="Optional"></td>
                    <td><span class="status-chip ${row.verified ? "good" : "warn"}">${row.verified ? "Verified" : "Unverified"}</span></td>
                    <td><button class="btn btn-secondary" type="button" data-remove-row="${row.rowId}" ${state.finalBomRows.length === 1 ? "disabled" : ""}>Remove</button></td>
                </tr>
            `;
        }).join("");

        el.finalBomBody.querySelectorAll("[data-row-field]").forEach((control) => {
            control.addEventListener("input", handleFinalBomFieldChange);
            control.addEventListener("change", handleFinalBomFieldChange);
        });

        el.finalBomBody.querySelectorAll("[data-remove-row]").forEach((button) => {
            button.addEventListener("click", () => {
                const rowId = Number(button.getAttribute("data-remove-row"));
                state.finalBomRows = state.finalBomRows.filter((row) => row.rowId !== rowId);
                renderFinalBomTable();
            });
        });
    }

    function handleFinalBomFieldChange(event) {
        const rowId = Number(event.target.getAttribute("data-row-id"));
        const field = event.target.getAttribute("data-row-field");
        const row = state.finalBomRows.find((entry) => entry.rowId === rowId);
        if (!row || !field) {
            return;
        }

        if (field === "quantity") {
            row.quantity = event.target.value;
            return;
        }

        if (field === "notes") {
            row.notes = event.target.value;
            return;
        }

        if (field === "category") {
            row.category = event.target.value;
            return;
        }

        if (field === "productKey") {
            row.productKey = event.target.value;
            const option = getFlattenedProductOptions().find((entry) => entry.key === row.productKey);
            if (!option) {
                row.manufacturer = "";
                row.partNumber = "";
                row.description = "";
                row.verified = false;
                row.functionalId = "";
                renderFinalBomTable();
                return;
            }

            row.manufacturer = option.manufacturer;
            row.partNumber = option.partNumber || "";
            row.description = option.name;
            row.verified = option.verified;
            row.functionalId = option.functionalId;
            if (!row.category) {
                row.category = getBomItem(option.functionalId).category;
            }
            renderFinalBomTable();
        }
    }

    function checkFinalBom() {
        const rows = state.finalBomRows.filter((row) => {
            const qty = Number(row.quantity);
            return row.productKey && Number.isFinite(qty) && qty > 0;
        });

        const issues = [];
        const warningMessages = [];

        const categoriesPresent = new Set(rows.map((row) => row.category).filter(Boolean));
        const missingCategories = reviewRules.requiredCategories.filter((category) => !categoriesPresent.has(category));
        if (missingCategories.length > 0) {
            issues.push(...missingCategories.map((category) => `Missing category: ${getCategoryLabel(category)}.`));
        }

        const missingRecommended = reviewRules.recommendedCategories.filter((category) => !categoriesPresent.has(category));
        if (missingRecommended.length > 0) {
            warningMessages.push("Missing power/accessory considerations: verify whether power and installation accessories are required by the project/system.");
        }

        Object.keys(reviewRules.requiredMajorDevices).forEach((functionalId) => {
            const expected = reviewRules.requiredMajorDevices[functionalId];
            const matchedRows = rows.filter((row) => row.functionalId === functionalId);
            if (matchedRows.length === 0) {
                const itemLabel = getBomItem(functionalId).label;
                issues.push(`MISSING ITEM: Your BOM does not currently include the ${itemLabel.toLowerCase()} required by the project scenario.`);
                return;
            }

            const quantity = matchedRows.reduce((sum, row) => sum + Number(row.quantity || 0), 0);
            if (quantity !== expected) {
                if (functionalId === "smoke-detector") {
                    issues.push(`WRONG QUANTITY: You entered ${quantity} smoke detectors. The project requirements specify 10 per floor across 2 floors, for a total of 20.`);
                } else {
                    issues.push(`WRONG QUANTITY: ${getBomItem(functionalId).label} expected ${expected}, entered ${quantity}.`);
                }
            }
        });

        const hvacRows = rows.filter((row) => row.functionalId === "control-relay-interface");
        if (hvacRows.length === 0) {
            issues.push("MISSING INTERFACE: The project requires an HVAC shutdown interface. Verify the required control/relay interface based on the system design.");
        }

        const duplicateKeys = {};
        rows.forEach((row) => {
            const key = `${row.manufacturer}|${row.partNumber}|${row.description}`;
            duplicateKeys[key] = (duplicateKeys[key] || 0) + 1;
        });
        Object.keys(duplicateKeys).forEach((key) => {
            if (duplicateKeys[key] > 1) {
                issues.push("DUPLICATE: You have two separate BOM lines representing the same material. Verify whether these should be combined or intentionally separated.");
            }
        });

        rows.forEach((row) => {
            const qty = Number(row.quantity);
            if (!Number.isFinite(qty) || qty < 1 || qty > 200) {
                issues.push(`Suspicious quantity for ${row.description || "line item"}. Verify this value.`);
            }
            if (!row.verified) {
                warningMessages.push("UNVERIFIED: This product has not been verified against the Academy's product data. Confirm the part number before using it in a real quote.");
            }
        });

        const completeness = clampScore(100 - missingCategories.length * 14 - Math.max(0, issues.filter((item) => item.startsWith("MISSING ITEM")).length) * 10);
        const quantityAccuracy = clampScore(100 - issues.filter((item) => item.startsWith("WRONG QUANTITY")).length * 18 - issues.filter((item) => item.startsWith("Suspicious quantity")).length * 10);
        const productSelectionScore = clampScore(100 - warningMessages.filter((item) => item.startsWith("UNVERIFIED")).length * 14);
        const organization = clampScore(100 - issues.filter((item) => item.startsWith("DUPLICATE")).length * 25 - rows.filter((row) => !row.category).length * 20);
        const overall = Math.round((completeness + quantityAccuracy + productSelectionScore + organization) / 4);

        state.bomReviewScores = {
            completeness,
            quantityAccuracy,
            productSelection: productSelectionScore,
            organization,
            overall
        };

        renderBomReviewScores();

        const reviewMessages = [];
        issues.forEach((message) => reviewMessages.push({ type: "issue", text: message }));
        warningMessages.forEach((message) => reviewMessages.push({ type: "warning", text: message }));

        if (reviewMessages.length === 0) {
            reviewMessages.push({ type: "success", text: "BOM review passed for this scenario. Continue to pricing and challenge checks." });
        }

        el.bomReviewMessages.innerHTML = `<ul>${reviewMessages.map((entry) => `<li>${escapeHTML(entry.text)}</li>`).join("")}</ul>`;
        updateFinalScore();
    }

    function renderBomReviewScores() {
        el.completenessScore.textContent = `${state.bomReviewScores.completeness}/100`;
        el.quantityScore.textContent = `${state.bomReviewScores.quantityAccuracy}/100`;
        el.selectionScore.textContent = `${state.bomReviewScores.productSelection}/100`;
        el.organizationScore.textContent = `${state.bomReviewScores.organization}/100`;
        el.overallReviewScore.textContent = `${state.bomReviewScores.overall}/100`;
    }

    function resetBomReviewPanel() {
        state.bomReviewScores = {
            completeness: 0,
            quantityAccuracy: 0,
            productSelection: 0,
            organization: 0,
            overall: 0
        };
        renderBomReviewScores();
        el.bomReviewMessages.innerHTML = "";
    }

    function renderPricingExercises() {
        el.pricingExerciseRows.innerHTML = pricingExercises.map((exercise) => `
            <label class="pricing-field">
                <span>${escapeHTML(exercise.product)} | Quantity: ${exercise.quantity} | Training Unit Price: $${exercise.trainingUnitPrice}</span>
                <input type="number" min="0" data-pricing-answer="${escapeHTML(exercise.id)}" placeholder="Enter extended material cost">
            </label>
        `).join("") + `
            <label class="pricing-field">
                <span>Material Subtotal (Smoke Detector + Horn/Strobe)</span>
                <input type="number" min="0" data-pricing-answer="pricing-subtotal" placeholder="Enter subtotal">
            </label>
        `;
    }

    function checkPricingExercise() {
        let correctCount = 0;
        const totalChecks = pricingExercises.length + 1;

        pricingExercises.forEach((exercise) => {
            const input = el.pricingExerciseRows.querySelector(`[data-pricing-answer="${exercise.id}"]`);
            const value = Number(input ? input.value : 0);
            if (value === exercise.expectedExtended) {
                correctCount += 1;
            }
        });

        const subtotalInput = el.pricingExerciseRows.querySelector("[data-pricing-answer=\"pricing-subtotal\"]");
        const subtotalValue = Number(subtotalInput ? subtotalInput.value : 0);
        const expectedSubtotal = pricingExercises.reduce((sum, exercise) => sum + exercise.expectedExtended, 0);
        if (subtotalValue === expectedSubtotal) {
            correctCount += 1;
        }

        state.pricingScore = Math.round((correctCount / totalChecks) * 100);

        if (state.pricingScore === 100) {
            showFeedback(el.pricingFeedback, "Correct: Smoke Detector = $1,000, Horn/Strobe = $600, Subtotal = $1,600. TRAINING PRICE - NOT REAL.", "correct");
        } else {
            showFeedback(el.pricingFeedback, "Check your math using extended price = quantity x unit price. These are fictional training values only.", "warning");
        }

        updateFinalScore();
    }

    function renderQuoteChecklist() {
        const items = [
            "Customer/project information",
            "Drawings/specifications",
            "Product selection",
            "Quantities",
            "Modules/interfaces",
            "Power/batteries",
            "Accessories",
            "Pricing",
            "Lead times/availability",
            "Revision/version",
            "Special project requirements"
        ];

        el.quoteChecklist.innerHTML = items.map((item, index) => `
            <label>
                <input type="checkbox" data-checklist-item="${index}">
                <span>${escapeHTML(item)}</span>
            </label>
        `).join("");
    }

    function renderChallengeFields() {
        const challengeFields = [
            { id: "challenge-control-panel", label: "Control Panels" },
            { id: "challenge-smoke", label: "Smoke Detectors" },
            { id: "challenge-pull", label: "Pull Stations" },
            { id: "challenge-horn", label: "Horn/Strobes" },
            { id: "challenge-duct", label: "Duct Smoke Detectors" },
            { id: "challenge-hvac", label: "HVAC Interfaces" }
        ];

        el.challengeInputs.innerHTML = challengeFields.map((field) => `
            <label class="challenge-field">
                <span>${escapeHTML(field.label)}</span>
                <input type="number" min="0" data-challenge-input="${escapeHTML(field.id)}" placeholder="Enter quantity">
            </label>
        `).join("");
    }

    function checkChallenge() {
        let correctCount = 0;
        const total = Object.keys(scenarios.challenge.expected).length;
        const messages = [];

        Object.keys(scenarios.challenge.expected).forEach((fieldId) => {
            const expected = scenarios.challenge.expected[fieldId];
            const input = el.challengeInputs.querySelector(`[data-challenge-input="${fieldId}"]`);
            const entered = Number(input ? input.value : 0);

            if (fieldId === "challenge-hvac") {
                if (entered >= expected) {
                    correctCount += 1;
                } else {
                    messages.push("HVAC shutdown interfaces are required. Include at least one and verify design-specific quantity.");
                }
                return;
            }

            if (entered === expected) {
                correctCount += 1;
            } else {
                messages.push(`${getChallengeLabel(fieldId)} expected ${expected}, entered ${Number.isFinite(entered) ? entered : "no value"}.`);
            }
        });

        state.challengeScore = Math.round((correctCount / total) * 100);

        if (messages.length === 0) {
            showFeedback(el.challengeFeedback, "Strong work. You calculated quantities, organized materials, selected products, built a BOM, and reviewed missing items for the advanced scenario.", "correct");
        } else {
            showFeedback(el.challengeFeedback, `Challenge review: ${messages.join(" ")}`, "warning");
        }

        updateFinalScore();
    }

    function updateFinalScore() {
        const materialOrganizationPoints = pointsFromPercent(state.step2Score, scoring.materialOrganization);
        const productSelectionPoints = pointsFromPercent(Math.round((state.step3Score + state.bomReviewScores.productSelection) / 2), scoring.productSelection);
        const quantityPoints = pointsFromPercent(Math.round((state.step4Score + state.challengeScore) / 2), scoring.quantityAccuracy);
        const missingPoints = pointsFromPercent(state.step5Score, scoring.missingItemDetection);
        const organizationPoints = pointsFromPercent(state.bomReviewScores.organization, scoring.bomOrganization);
        const estimatingMathPoints = pointsFromPercent(state.pricingScore, scoring.estimatingMath);

        const totalPoints = materialOrganizationPoints + productSelectionPoints + quantityPoints + missingPoints + organizationPoints + estimatingMathPoints;

        el.finalScoreValue.textContent = `${totalPoints}/100`;
        el.finalScoreRating.textContent = totalPoints >= 85 ? "Excellent" : totalPoints >= 70 ? "Good" : "Needs Review";
        el.finalScoreBreakdown.innerHTML = [
            `Material Organization: ${materialOrganizationPoints}/${scoring.materialOrganization}`,
            `Product Selection: ${productSelectionPoints}/${scoring.productSelection}`,
            `Quantity Accuracy: ${quantityPoints}/${scoring.quantityAccuracy}`,
            `Missing Item Detection: ${missingPoints}/${scoring.missingItemDetection}`,
            `BOM Organization: ${organizationPoints}/${scoring.bomOrganization}`,
            `Estimating Math: ${estimatingMathPoints}/${scoring.estimatingMath}`
        ].map((line) => `<li>${escapeHTML(line)}</li>`).join("");
    }

    function updateStepView(step) {
        state.currentStep = step;
        [el.step1, el.step2, el.step3, el.step4, el.step5, el.step6].forEach((panel, index) => {
            const panelStep = index + 1;
            panel.classList.toggle("hidden", panelStep !== step);
        });

        const progress = Math.round((step / 6) * 100);
        el.stepIndicator.textContent = `Step ${step} of 6`;
        el.progressValue.textContent = `${progress}%`;
        el.progressFill.style.width = `${progress}%`;
        renderModuleShell(step);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function setDefaultDate() {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        el.dateField.value = `${today.getFullYear()}-${month}-${day}`;
    }

    function resetModule() {
        state.currentStep = 1;
        state.categoryAssignments = {};
        state.selectedProducts = {};
        state.quantityEntries = {};
        state.quantityNotes = {};
        state.step2Score = 0;
        state.step3Score = 0;
        state.step4Score = 0;
        state.step5Score = 0;
        state.pricingScore = 0;
        state.challengeScore = 0;

        resetBomReviewPanel();
        clearFeedback(el.categoryFeedback);
        clearFeedback(el.productSelectionFeedback);
        clearFeedback(el.quantityFeedback);
        clearFeedback(el.missingFeedback);
        clearFeedback(el.pricingFeedback);
        clearFeedback(el.challengeFeedback);
        clearFeedback(el.nextModuleMessage);

        el.toStep3Button.disabled = true;
        el.toStep4Button.disabled = true;
        el.toStep5Button.disabled = true;
        el.toStep6Button.disabled = true;

        el.missingItemOptions.querySelectorAll("[data-missing-option]").forEach((checkbox) => {
            checkbox.checked = false;
        });

        el.pricingExerciseRows.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });

        el.quoteChecklist.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
            checkbox.checked = false;
        });

        el.challengeInputs.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });

        el.customerField.value = "Training Customer";
        el.projectNumberField.value = "TRAIN-001";
        el.estimatorField.value = "Sales Support";
        el.revisionField.value = "0";
        el.projectNameField.value = scenarios.initial.name;
        setDefaultDate();

        state.finalBomRows = [];
        state.nextRowId = 1;
        addFinalBomRow();

        renderCategoryCards();
        renderProductSelection();
        renderQuantityTable();
        updateStepView(1);
        updateFinalScore();
    }

    function openProductInfo(itemId) {
        const product = getSelectedProduct(itemId);
        if (!product) {
            return;
        }

        el.productInfoTitle.textContent = product.name;
        const partNumber = product.partNumber || "Functional placeholder";
        el.productInfoMeta.textContent = `${product.manufacturer} | ${partNumber} | ${product.category}`;
        el.productInfoDescription.textContent = product.description;

        el.productInfoModal.classList.remove("hidden");
        el.productInfoModal.setAttribute("aria-hidden", "false");
        el.closeProductModalButton.focus();
    }

    function closeProductModal() {
        el.productInfoModal.classList.add("hidden");
        el.productInfoModal.setAttribute("aria-hidden", "true");
    }

    function getSelectedProduct(itemId) {
        const selectedKey = state.selectedProducts[itemId];
        const options = products[itemId] || [];
        return options.find((option) => option.key === selectedKey) || null;
    }

    function getFlattenedProductOptions() {
        const map = new Map();
        bomItems.forEach((item) => {
            (products[item.id] || []).forEach((option) => {
                if (!map.has(option.key)) {
                    map.set(option.key, option);
                }
            });
        });
        return Array.from(map.values());
    }

    function getQuantityStatus(itemId) {
        const item = getBomItem(itemId);
        const value = Number(state.quantityEntries[itemId]);

        if (!Number.isFinite(value) || value === 0) {
            return { text: "Pending", className: "" };
        }

        if (item.expectedQuantity === null) {
            return { text: "Verify by design", className: "warn" };
        }

        if (value === item.expectedQuantity) {
            return { text: "Correct", className: "good" };
        }

        return { text: "Needs review", className: "bad" };
    }

    function getChallengeLabel(fieldId) {
        const labels = {
            "challenge-control-panel": "Control Panels",
            "challenge-smoke": "Smoke Detectors",
            "challenge-pull": "Pull Stations",
            "challenge-horn": "Horn/Strobes",
            "challenge-duct": "Duct Smoke Detectors",
            "challenge-hvac": "HVAC Interfaces"
        };

        return labels[fieldId] || fieldId;
    }

    function getCategoryLabel(categoryId) {
        const category = bomCategories.find((entry) => entry.id === categoryId);
        return category ? category.label : categoryId;
    }

    function getBomItem(itemId) {
        return bomItems.find((item) => item.id === itemId);
    }

    function getCategoryChipClass(itemId) {
        const selected = state.categoryAssignments[itemId] || "";
        if (!selected) {
            return "";
        }

        return selected === getBomItem(itemId).category ? "good" : "bad";
    }

    function getCategoryChipText(itemId) {
        const selected = state.categoryAssignments[itemId] || "";
        if (!selected) {
            return "Pending";
        }
        return selected === getBomItem(itemId).category ? "Correct" : "Check";
    }

    function getProductOptionLabel(product) {
        const pn = product.partNumber ? `${product.partNumber} - ` : "";
        return `${product.manufacturer} | ${pn}${product.name}`;
    }

    function showFeedback(container, message, type) {
        container.textContent = message;
        container.classList.remove("hidden", "correct", "warning", "incorrect");
        container.classList.add(type);
    }

    function clearFeedback(container) {
        container.textContent = "";
        container.classList.remove("correct", "warning", "incorrect");
        container.classList.add("hidden");
    }

    function pointsFromPercent(percent, maxPoints) {
        const safePercent = clampScore(percent);
        return Math.round((safePercent / 100) * maxPoints);
    }

    function clampScore(score) {
        if (!Number.isFinite(score)) {
            return 0;
        }
        return Math.max(0, Math.min(100, Math.round(score)));
    }

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function buildProductsFromLibrary() {
        const library = typeof productLibrary !== "undefined" && productLibrary && Array.isArray(productLibrary.products)
            ? productLibrary.products
            : [];

        function findMany(predicate) {
            return library.filter(predicate);
        }

        function mapVerified(product, functionalId) {
            const name = product.model || product.category || "Verified Product";
            return {
                key: `${functionalId}-${sanitizeKey(name)}`,
                manufacturer: product.manufacturer || "Edwards",
                partNumber: extractPartNumber(product.model || ""),
                name,
                category: product.category || "Product",
                description: product.howItWorks || product.officialDescription || "Verified product record.",
                verified: String(product.verification || "").toUpperCase() === "VERIFIED",
                functionalId
            };
        }

        function makePlaceholder(functionalId, label, category) {
            return {
                key: `${functionalId}-placeholder`,
                manufacturer: "Edwards",
                partNumber: "",
                name: label,
                category,
                description: "Functional placeholder for training use only. Verify exact project-approved product before quoting.",
                verified: false,
                functionalId
            };
        }

        const mapped = {
            "control-panel": findMany((p) => (p.model || "") === "EST4" || (p.family || "") === "EST4").map((p) => mapVerified(p, "control-panel")),
            "smoke-detector": findMany((p) => /Smoke Detector|Photoelectric Smoke Detector|Optica Smoke Detector/i.test(p.model || "")).slice(0, 4).map((p) => mapVerified(p, "smoke-detector")),
            "manual-pull-station": findMany((p) => /Pull Station/i.test(p.model || "")).map((p) => mapVerified(p, "manual-pull-station")),
            "horn-strobe": findMany((p) => /Genesis/i.test(p.model || "") && /Notification|Strobe|Horn/i.test(p.model || "")).slice(0, 4).map((p) => mapVerified(p, "horn-strobe")),
            "duct-smoke-detector": findMany((p) => /Duct Smoke/i.test(p.model || "")).map((p) => mapVerified(p, "duct-smoke-detector")),
            "monitor-input-module": findMany((p) => /Monitor Module|Input Monitor|MCC|CC1|CC2|RM1/i.test(p.model || "")).slice(0, 4).map((p) => mapVerified(p, "monitor-input-module")),
            "control-relay-interface": findMany((p) => /Control Relay|CT1|CT2|CRR|SIGA-CR/i.test(p.model || "")).slice(0, 4).map((p) => mapVerified(p, "control-relay-interface")),
            battery: findMany((p) => /Battery/i.test(p.model || "") || /Power Supply/i.test(p.category || "")).slice(0, 3).map((p) => mapVerified(p, "battery")),
            "mounting-accessories": findMany((p) => /Base|Accessory|Indicator/i.test(p.category || "") || /Base|Indicator/i.test(p.model || "")).slice(0, 4).map((p) => mapVerified(p, "mounting-accessories"))
        };

        if (mapped["control-panel"].length === 0) {
            mapped["control-panel"].push(makePlaceholder("control-panel", "EST4 Platform", "Fire Alarm Control Platform"));
        }

        if (mapped["smoke-detector"].length === 0) {
            mapped["smoke-detector"].push(makePlaceholder("smoke-detector", "Smoke Detector - Signature Series", "Initiating Device"));
        }

        if (mapped["manual-pull-station"].length === 0) {
            mapped["manual-pull-station"].push(makePlaceholder("manual-pull-station", "Manual Pull Station - Signature Series", "Initiating Device"));
        }

        if (mapped["horn-strobe"].length === 0) {
            mapped["horn-strobe"].push(makePlaceholder("horn-strobe", "Horn/Strobe - Genesis Series", "Notification Appliance"));
        }

        if (mapped["duct-smoke-detector"].length === 0) {
            mapped["duct-smoke-detector"].push(makePlaceholder("duct-smoke-detector", "Duct Smoke Detector", "Duct Detection"));
        }

        if (mapped["monitor-input-module"].length === 0) {
            mapped["monitor-input-module"].push(makePlaceholder("monitor-input-module", "Monitor/Input Module", "Interface Module"));
        }

        if (mapped["control-relay-interface"].length === 0) {
            mapped["control-relay-interface"].push(makePlaceholder("control-relay-interface", "Control/Relay Interface", "Interface Module"));
        }

        if (mapped.battery.length === 0) {
            mapped.battery.push(makePlaceholder("battery", "Battery", "Power"));
        }

        if (mapped["mounting-accessories"].length === 0) {
            mapped["mounting-accessories"].push(makePlaceholder("mounting-accessories", "Mounting / Installation Accessories", "Accessories"));
        }

        return mapped;
    }

    function extractPartNumber(model) {
        const token = String(model || "").trim().split(/\s+/)[0].toUpperCase();
        if (!token) {
            return "";
        }

        // Training-safe heuristic: only show the leading token when it resembles a real model/part string.
        if (/^[A-Z0-9-]+$/.test(token) && (token.includes("-") || /\d/.test(token))) {
            return token;
        }

        return "";
    }

    function sanitizeKey(value) {
        return String(value || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    }
})();
