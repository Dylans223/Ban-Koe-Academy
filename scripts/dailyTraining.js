(() => {
    const STORAGE_KEY = "bkaDailyTraining";
    const QUIZ_STATS_KEY = "bkaQuizStats";
    const MAIN_CATEGORY_IDS = [
        "product-recognition",
        "part-number-mastery",
        "product-applications",
        "modules-systems",
        "wiring-connections",
        "takeoff-estimating",
        "real-world-scenarios",
        "access-control"
    ];

    const REVIEW_TARGETS = {
        "wiring-connections": { path: "training/wiring/index.html", label: "Wiring & Connections" },
        "takeoff-estimating": { path: "training/takeoff/index.html", label: "Takeoff Training" },
        "modules-systems": { path: "training/system-builder/index.html", label: "System Builder" },
        "real-world-scenarios": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "product-applications": { path: "training/index.html", label: "Training Overview" },
        "part-number-mastery": { path: "training/index.html", label: "Training Overview" },
        "product-recognition": { path: "training/index.html", label: "Training Overview" },
        "access-control": { path: "training/access-control/index.html", label: "Access Control" }
    };

    const APPLY_TARGETS = {
        "wiring-connections": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "takeoff-estimating": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "modules-systems": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "real-world-scenarios": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "product-applications": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "part-number-mastery": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "product-recognition": { path: "training/scenarios/index.html", label: "Real-World Scenarios" },
        "access-control": { path: "training/access-control/index.html", label: "Access Control" }
    };

    function safeNumber(value) {
        const num = Number(value);
        return Number.isFinite(num) ? num : 0;
    }

    function getTodayKey() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    }

    function loadQuizStats() {
        try {
            return JSON.parse(localStorage.getItem(QUIZ_STATS_KEY)) || {};
        } catch {
            return {};
        }
    }

    function getCategorySummary(categoryId) {
        const stats = loadQuizStats();
        const categoryEntry = stats.categories && stats.categories[categoryId];
        const total = safeNumber(categoryEntry && categoryEntry.total);
        const correct = safeNumber(categoryEntry && categoryEntry.correct);
        const attempts = safeNumber(categoryEntry && categoryEntry.attempts);
        const mastery = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { total, correct, attempts, mastery };
    }

    function getWeakestCategory() {
        const candidates = MAIN_CATEGORY_IDS
            .map((categoryId) => ({
                categoryId,
                meta: window.getCategoryMeta ? window.getCategoryMeta(categoryId) : null,
                ...getCategorySummary(categoryId)
            }))
            .filter((item) => item.total >= 3);

        if (candidates.length === 0) {
            return null;
        }

        candidates.sort((a, b) => a.mastery - b.mastery || b.total - a.total || b.attempts - a.attempts);
        return candidates[0];
    }

    function getRecommendedCategory() {
        const weakest = getWeakestCategory();
        if (weakest) {
            return weakest;
        }

        return {
            categoryId: "product-recognition",
            meta: window.getCategoryMeta ? window.getCategoryMeta("product-recognition") : null,
            total: 0,
            correct: 0,
            attempts: 0,
            mastery: 0
        };
    }

    function loadDailySession() {
        const today = getTodayKey();
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.date === today) {
                    return parsed;
                }
            }
        } catch {}

        const recommendation = getRecommendedCategory();
        const nextSession = {
            date: today,
            categoryId: recommendation.categoryId,
            categoryName: recommendation.meta ? recommendation.meta.name : "Product Recognition",
            reviewComplete: false,
            practiceComplete: false,
            applyComplete: false,
            challengeComplete: false,
            pendingStep: null,
            baseXP: safeNumber(loadQuizStats().totalXP || 0)
        };

        saveDailySession(nextSession);
        return nextSession;
    }

    function saveDailySession(session) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
        } catch {}
    }

    function getCompletionCount(session) {
        return [session.reviewComplete, session.practiceComplete, session.applyComplete, session.challengeComplete].filter(Boolean).length;
    }

    function getStepStatusLabel(session, stepKey) {
        return session[stepKey] ? "✓" : "○";
    }

    function getReviewTarget(categoryId) {
        return REVIEW_TARGETS[categoryId] || REVIEW_TARGETS["product-recognition"];
    }

    function getApplyTarget(categoryId) {
        return APPLY_TARGETS[categoryId] || APPLY_TARGETS["product-recognition"];
    }

    function getXpEarnedToday(session) {
        const stats = loadQuizStats();
        const totalXP = safeNumber(stats.totalXP || 0);
        return Math.max(0, totalXP - safeNumber(session.baseXP || 0));
    }

    function renderDailyTraining() {
        const session = loadDailySession();
        const recommendation = getRecommendedCategory();
        const categoryMeta = recommendation.meta || { name: session.categoryName };
        const reviewTarget = getReviewTarget(session.categoryId);
        const applyTarget = getApplyTarget(session.categoryId);
        const completionCount = getCompletionCount(session);
        const xpEarnedToday = getXpEarnedToday(session);

        const container = document.getElementById("dailyTrainingSteps");
        const progressEl = document.getElementById("dailyTrainingProgress");
        const metaEl = document.getElementById("dailyTrainingMeta");
        const startButton = document.getElementById("dailyTrainingStartButton");
        const completeState = document.getElementById("dailyTrainingCompleteState");
        const xpValue = document.getElementById("dailyTrainingXpValue");

        if (!container || !progressEl || !metaEl) {
            return;
        }

        const steps = [
            {
                key: "reviewComplete",
                stepKey: "reviewComplete",
                title: "REVIEW",
                icon: "📖",
                heading: reviewTarget.label,
                summary: recommendation.total >= 3
                    ? `Review ${categoryMeta.name.toLowerCase()} concepts and reinforce your weakest area.`
                    : "Review a core training concept and build your foundation.",
                buttonText: "Start Review →",
                buttonAction: () => startStep(session, "reviewComplete", reviewTarget.path)
            },
            {
                key: "practiceComplete",
                stepKey: "practiceComplete",
                title: "PRACTICE",
                icon: "📝",
                heading: `${recommendation.total >= 3 ? "5" : "5"} ${categoryMeta.name} Questions`,
                summary: recommendation.total >= 3 && recommendation.mastery > 0
                    ? `Current mastery: ${recommendation.mastery}%`
                    : "Start your first practice quiz.",
                buttonText: "Start Practice →",
                buttonAction: () => startStep(session, "practiceComplete", `quiz/index.html?category=${encodeURIComponent(session.categoryId)}&questionCount=5&dailyStep=practice`)
            },
            {
                key: "applyComplete",
                stepKey: "applyComplete",
                title: "APPLY",
                icon: "🔧",
                heading: applyTarget.label,
                summary: "Apply your knowledge to a realistic fire alarm situation.",
                buttonText: "Start Scenario →",
                buttonAction: () => startStep(session, "applyComplete", applyTarget.path)
            },
            {
                key: "challengeComplete",
                stepKey: "challengeComplete",
                title: "CHALLENGE",
                icon: "🏆",
                heading: "Final Boss Question",
                summary: "Finish the day with one difficult question.",
                buttonText: "Start Challenge →",
                buttonAction: () => startStep(session, "challengeComplete", `quiz/index.html?category=final-boss&questionCount=1&dailyStep=challenge`)
            }
        ];

        container.innerHTML = steps.map((step) => {
            const isComplete = Boolean(session[step.stepKey]);
            return `
                <article class="daily-training-step ${isComplete ? "complete" : ""}">
                    <div class="step-icon" aria-hidden="true">${step.icon}</div>
                    <div class="step-title-row">
                        <span class="step-title">${step.title}</span>
                        <span class="step-status">${getStepStatusLabel(session, step.stepKey)}</span>
                    </div>
                    <h4>${step.heading}</h4>
                    <p>${step.summary}</p>
                    <button class="btn btn-primary" type="button" data-step-action="${step.title.toLowerCase()}">${step.buttonText}</button>
                </article>
            `;
        }).join("");

        progressEl.textContent = `${completionCount} / 4 Complete`;
        metaEl.textContent = completionCount === 0
            ? "Start your first training session."
            : completionCount === 4
                ? "Great work. You've completed today's recommended training session."
                : "Continue the day with the next step.";

        if (completeState) {
            completeState.classList.toggle("hidden", completionCount < 4);
            if (completionCount === 4) {
                xpValue.textContent = `${xpEarnedToday} XP earned today`;
            }
        }

        if (startButton) {
            startButton.classList.toggle("hidden", completionCount >= 4);
        }

        container.querySelectorAll("button[data-step-action]").forEach((button) => {
            button.addEventListener("click", () => {
                const stepTitle = button.getAttribute("data-step-action");
                const clickedStep = steps.find((step) => step.title.toLowerCase() === stepTitle);
                if (clickedStep) {
                    clickedStep.buttonAction();
                }
            });
        });
    }

    function startStep(session, stepKey, target) {
        const nextSession = { ...session };
        if (target.includes("quiz/index.html")) {
            nextSession.pendingStep = stepKey === "practiceComplete" ? "practice" : "challenge";
        } else if (target.includes("training/")) {
            nextSession.pendingStep = null;
        }

        if (stepKey !== "practiceComplete" && stepKey !== "challengeComplete") {
            nextSession[stepKey] = true;
            nextSession.pendingStep = null;
            saveDailySession(nextSession);
        } else {
            saveDailySession(nextSession);
        }

        window.location.href = target;
    }

    function markDailyTrainingStep(stepName) {
        const today = getTodayKey();
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return;
            }

            const session = JSON.parse(raw);
            if (!session || session.date !== today) {
                return;
            }

            if (stepName === "practice" && session.pendingStep === "practice") {
                session.practiceComplete = true;
                session.pendingStep = null;
            }

            if (stepName === "challenge" && session.pendingStep === "challenge") {
                session.challengeComplete = true;
                session.pendingStep = null;
            }

            saveDailySession(session);
        } catch {}
    }

    window.addEventListener("DOMContentLoaded", () => {
        renderDailyTraining();
        const startButton = document.getElementById("dailyTrainingStartButton");
        if (startButton) {
            startButton.addEventListener("click", () => {
                const session = loadDailySession();
                const stepPath = session.reviewComplete
                    ? (session.practiceComplete ? (session.applyComplete ? "quiz/index.html?category=final-boss&questionCount=1&dailyStep=challenge" : "training/scenarios/index.html") : "quiz/index.html?category=" + encodeURIComponent(session.categoryId) + "&questionCount=5&dailyStep=practice")
                    : "training/index.html";
                const stepKey = session.reviewComplete
                    ? (session.practiceComplete ? (session.applyComplete ? "challengeComplete" : "applyComplete") : "practiceComplete")
                    : "reviewComplete";
                startStep(session, stepKey, stepPath);
            });
        }
    });

    window.addEventListener("focus", () => {
        renderDailyTraining();
    });

    window.markDailyTrainingStep = markDailyTrainingStep;
})();
