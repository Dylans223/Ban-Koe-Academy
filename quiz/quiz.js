// ===============================================
// Ban-Koe Academy
// Quiz Center Engine v3.0
// ===============================================

// -----------------------------------------------
// CONSTANTS
// -----------------------------------------------
const XP_PER_CORRECT   = 10;
const XP_QUIZ_COMPLETE = 25;
const XP_PERFECT_BONUS = 50;
const MIN_QUESTIONS_TO_START = 3;
const QUICK_QUIZ_COUNT = 10;
const LS_KEY = "bkaQuizStats";

// -----------------------------------------------
// STATE
// -----------------------------------------------
const state = {
    view:             "center",  // center | quiz | results | review
    activeCategoryId: null,
    activeQuestions:  [],
    currentIndex:     0,
    selectedAnswer:   null,  // text of selected answer
    submitted:        false,
    shuffledAnswers:  [],
    sessionResults:   [],    // {question, userAnswer, correctAnswer, wasCorrect, explanation}
    reviewIndex:      0,
    sessionStreak:    0,
    sessionXP:        0,
    retakeCategoryId: null,
};

// -----------------------------------------------
// DOM ELEMENTS
// -----------------------------------------------
const el = {
    views: {
        center:  document.getElementById("viewCenter"),
        quiz:    document.getElementById("viewQuiz"),
        results: document.getElementById("viewResults"),
        review:  document.getElementById("viewReview"),
    },
    // Center
    statAccuracy:    document.getElementById("statAccuracy"),
    statQuestions:   document.getElementById("statQuestions"),
    statQuizzes:     document.getElementById("statQuizzes"),
    statStreak:      document.getElementById("statStreak"),
    statXP:          document.getElementById("statXP"),
    startQuickQuiz:  document.getElementById("startQuickQuiz"),
    recommendTitle:  document.getElementById("recommendTitle"),
    recommendDetail: document.getElementById("recommendDetail"),
    recommendScore:  document.getElementById("recommendScore"),
    recommendBtn:    document.getElementById("recommendBtn"),
    categoryGrid:    document.getElementById("categoryGrid"),

    // Quiz
    exitQuizBtn:      document.getElementById("exitQuizBtn"),
    quizCategoryLabel:document.getElementById("quizCategoryLabel"),
    quizCounterLabel: document.getElementById("quizCounterLabel"),
    quizStreakDisplay: document.getElementById("quizStreakDisplay"),
    quizProgressLabel:document.getElementById("quizProgressLabel"),
    quizProgressPct:  document.getElementById("quizProgressPct"),
    quizProgressFill: document.getElementById("quizProgressFill"),
    questionText:     document.getElementById("questionText"),
    answerGrid:       document.getElementById("answerGrid"),
    feedbackPanel:    document.getElementById("feedbackPanel"),
    feedbackVerdict:  document.getElementById("feedbackVerdict"),
    feedbackCorrectAnswer: document.getElementById("feedbackCorrectAnswer"),
    feedbackExplanation:   document.getElementById("feedbackExplanation"),
    submitAnswerBtn:  document.getElementById("submitAnswerBtn"),
    continueBtn:      document.getElementById("continueBtn"),

    // Results
    resultsQuizName:  document.getElementById("resultsQuizName"),
    resultsScore:     document.getElementById("resultsScore"),
    resultsCorrect:   document.getElementById("resultsCorrect"),
    resultsIncorrect: document.getElementById("resultsIncorrect"),
    resultsXP:        document.getElementById("resultsXP"),
    bdTotal:          document.getElementById("bdTotal"),
    bdCorrect:        document.getElementById("bdCorrect"),
    bdIncorrect:      document.getElementById("bdIncorrect"),
    bdAccuracy:       document.getElementById("bdAccuracy"),
    bdXP:             document.getElementById("bdXP"),
    reviewPreviewList:document.getElementById("reviewPreviewList"),
    reviewMistakesBtn:document.getElementById("reviewMistakesBtn"),
    retakeQuizBtn:    document.getElementById("retakeQuizBtn"),
    backToCenterBtn:  document.getElementById("backToCenterBtn"),

    // Review
    reviewCounter:    document.getElementById("reviewCounter"),
    reviewActiveCard: document.getElementById("reviewActiveCard"),
    reviewQuestionText: document.getElementById("reviewQuestionText"),
    reviewYourAnswer: document.getElementById("reviewYourAnswer"),
    reviewCorrectAnswer: document.getElementById("reviewCorrectAnswer"),
    reviewExplanation: document.getElementById("reviewExplanation"),
    nextMistakeBtn:   document.getElementById("nextMistakeBtn"),
    reviewCompleteCard: document.getElementById("reviewCompleteCard"),
    reviewDoneBtn:    document.getElementById("reviewDoneBtn"),
    exitReviewBtn:    document.getElementById("exitReviewBtn"),
};

// -----------------------------------------------
// PERSISTENT STATS (localStorage)
// -----------------------------------------------
function loadStats() {
    try {
        return JSON.parse(localStorage.getItem(LS_KEY)) || {};
    } catch {
        return {};
    }
}

function saveStats(stats) {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(stats));
    } catch {}
}

function getStats() {
    return loadStats();
}

function incrementStats(correct, incorrect, xpGained, quizCompleted) {
    const stats = loadStats();
    stats.totalCorrect    = (stats.totalCorrect    || 0) + correct;
    stats.totalIncorrect  = (stats.totalIncorrect  || 0) + incorrect;
    stats.totalQuestions  = (stats.totalQuestions  || 0) + correct + incorrect;
    stats.totalXP         = (stats.totalXP         || 0) + xpGained;
    stats.quizzesCompleted= (stats.quizzesCompleted|| 0) + (quizCompleted ? 1 : 0);
    saveStats(stats);
}

function markDailyTrainingStep(stepName) {
    const todayKey = (() => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    })();

    try {
        const raw = localStorage.getItem("bkaDailyTraining");
        if (!raw) return;

        const session = JSON.parse(raw);
        if (!session || session.date !== todayKey) return;

        if (stepName === "practice" && session.pendingStep === "practice") {
            session.practiceComplete = true;
            session.pendingStep = null;
        }

        if (stepName === "challenge" && session.pendingStep === "challenge") {
            session.challengeComplete = true;
            session.pendingStep = null;
        }

        localStorage.setItem("bkaDailyTraining", JSON.stringify(session));
    } catch {}
}

function recordCategoryResult(categoryId, correct, total) {
    const stats = loadStats();
    if (!stats.categories) stats.categories = {};
    if (!stats.categories[categoryId]) stats.categories[categoryId] = { correct: 0, total: 0, attempts: 0 };
    stats.categories[categoryId].correct  += correct;
    stats.categories[categoryId].total    += total;
    stats.categories[categoryId].attempts += 1;
    saveStats(stats);
}

function getCategoryMastery(categoryId) {
    const stats = loadStats();
    const cat = stats.categories && stats.categories[categoryId];
    if (!cat || cat.total === 0) return 0;
    return Math.round((cat.correct / cat.total) * 100);
}

// -----------------------------------------------
// VIEW MANAGEMENT
// -----------------------------------------------
function showView(name) {
    Object.entries(el.views).forEach(([key, node]) => {
        node.classList.toggle("active", key === name);
    });
    state.view = name;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// -----------------------------------------------
// QUIZ CENTER
// -----------------------------------------------
function initCenter() {
    renderStats();
    renderRecommendation();
    renderCategoryGrid();
    showView("center");
}

function renderStats() {
    const stats = getStats();
    const total = stats.totalQuestions || 0;
    const correct = stats.totalCorrect || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    el.statAccuracy.textContent  = accuracy + "%";
    el.statQuestions.textContent = total;
    el.statQuizzes.textContent   = stats.quizzesCompleted || 0;
    el.statStreak.textContent    = state.sessionStreak;
    el.statXP.textContent        = (stats.totalXP || 0) + " XP";
}

function renderRecommendation() {
    const stats = loadStats();
    const cats  = stats.categories || {};
    const entries = Object.entries(cats)
        .filter(([, d]) => d.total > 0)
        .map(([id, d]) => ({ id, pct: Math.round((d.correct / d.total) * 100) }));

    if (entries.length === 0) return;

    entries.sort((a, b) => a.pct - b.pct);
    const weakest = entries[0];
    const meta = getCategoryMeta(weakest.id);
    if (!meta) return;

    el.recommendTitle.textContent  = meta.name;
    el.recommendDetail.textContent = `You scored ${weakest.pct}% on recent questions. Focus here to improve mastery.`;
    el.recommendScore.textContent  = `Recent score: ${weakest.pct}%`;
    el.recommendScore.classList.remove("hidden");
    el.recommendBtn.classList.remove("hidden");
    el.recommendBtn.onclick = () => launchQuiz(weakest.id);
}

function difficultyBadgeClass(diff) {
    const d = diff.toLowerCase();
    if (d.includes("expert"))       return "badge-expert";
    if (d.includes("advanced"))     return "badge-advanced";
    if (d.includes("intermediate")) return "badge-intermediate";
    return "badge-beginner";
}

function renderCategoryGrid() {
    el.categoryGrid.innerHTML = QUIZ_CATEGORIES.map(cat => {
        const poolSize   = getPoolSize(cat.id);
        const mastery    = getCategoryMastery(cat.id);
        const canStart   = poolSize >= MIN_QUESTIONS_TO_START;
        const badgeCls   = difficultyBadgeClass(cat.difficulty);
        const quizLength = Math.min(cat.targetCount, poolSize);
        const isSmallPool = canStart && poolSize < cat.targetCount;

        const countLabel = isSmallPool
            ? `${poolSize} Questions \u2022 More Coming Soon`
            : `${quizLength} Questions`;

        return `
            <div class="quiz-cat-card${!canStart ? " cat-locked" : ""}">
                <div class="cat-card-top">
                    <span class="cat-icon">${cat.icon}</span>
                    <span class="badge ${badgeCls}">${cat.difficulty}</span>
                </div>
                <div class="cat-name">${cat.name}</div>
                <p class="cat-description">${cat.description}</p>
                <div class="cat-meta">
                    <span class="cat-question-count">${canStart ? countLabel : `${poolSize} Questions`}</span>
                </div>
                <div class="cat-mastery-row">
                    <div class="cat-mastery-label">
                        <span>Mastery</span>
                        <strong>${mastery}%</strong>
                    </div>
                    <div class="cat-mastery-track">
                        <div class="cat-mastery-fill" style="width:${mastery}%"></div>
                    </div>
                </div>
                ${canStart
                    ? `<button class="btn btn-primary" onclick="launchQuiz('${cat.id}')">Start Quiz \u2192</button>`
                    : `<p class="cat-pool-note">More questions coming soon.</p>
                       <p class="cat-pool-note">Current pool: ${poolSize}</p>`
                }
            </div>`;
    }).join("");
}

// -----------------------------------------------
// LAUNCH QUIZ
// -----------------------------------------------
function launchQuiz(categoryId, questionCount) {
    const meta = getCategoryMeta(categoryId);
    if (!meta) return;

    const explicitCount = Number.isFinite(questionCount) && questionCount > 0 ? questionCount : null;
    const count = explicitCount || meta.targetCount;
    const pool  = selectQuestions(categoryId, count);
    const minimumPoolSize = explicitCount ? 1 : MIN_QUESTIONS_TO_START;

    if (pool.length < minimumPoolSize) {
        alert(`Not enough questions yet for "${meta.name}". Check back soon!`);
        return;
    }

    state.activeCategoryId = categoryId;
    state.activeQuestions  = pool;
    state.currentIndex     = 0;
    state.submitted        = false;
    state.selectedAnswer   = null;
    state.sessionResults   = [];
    state.sessionStreak    = 0;
    state.sessionXP        = 0;
    state.retakeCategoryId = categoryId;

    showView("quiz");
    loadQuestion();
}

// -----------------------------------------------
// QUESTION ENGINE
// -----------------------------------------------
function loadQuestion() {
    const q = state.activeQuestions[state.currentIndex];
    const total = state.activeQuestions.length;

    // Shuffle answer objects so displayed order stays linked to source metadata.
    const shuffled = q.answers.map((answer, originalIndex) => ({ answer, originalIndex }));
    shuffleArray(shuffled);
    state.shuffledAnswers = shuffled;
    state.selectedAnswer  = null;
    state.submitted       = false;

    // Header
    const meta = getCategoryMeta(state.activeCategoryId);
    el.quizCategoryLabel.textContent = meta ? meta.name.toUpperCase() : "";
    el.quizCounterLabel.textContent  = `Question ${state.currentIndex + 1} of ${total}`;
    el.quizStreakDisplay.textContent  = `Streak: ${state.sessionStreak} \uD83D\uDD25`;

    // Progress
    const pct = Math.round(((state.currentIndex) / total) * 100);
    el.quizProgressLabel.textContent = `${state.currentIndex} of ${total} answered`;
    el.quizProgressPct.textContent   = pct + "%";
    el.quizProgressFill.style.width  = pct + "%";

    // Question text
    el.questionText.textContent = q.question;

    // Answer cards
    el.answerGrid.innerHTML = shuffled.map(({ answer, originalIndex }) => `
        <button class="answer-card" data-answer="${escapeAttr(answer)}" data-original-index="${originalIndex}" onclick="selectAnswer(this)">
            <span class="answer-radio"><span class="answer-radio-dot"></span></span>
            <span>${escapeHTML(answer)}</span>
        </button>`).join("");

    // Hide feedback, show submit
    el.feedbackPanel.classList.remove("visible", "correct-feedback", "incorrect-feedback");
    el.submitAnswerBtn.disabled = true;
    el.submitAnswerBtn.classList.remove("hidden");
    el.continueBtn.classList.add("hidden");
}

function selectAnswer(button) {
    if (state.submitted) return;

    // Deselect all
    el.answerGrid.querySelectorAll(".answer-card").forEach(c => c.classList.remove("selected"));
    button.classList.add("selected");
    state.selectedAnswer = button.getAttribute("data-answer");
    el.submitAnswerBtn.disabled = false;
}

function submitAnswer() {
    if (state.submitted || !state.selectedAnswer) return;
    state.submitted = true;

    const q = state.activeQuestions[state.currentIndex];
    const wasCorrect = state.selectedAnswer === q.correctAnswerText;

    // Visual feedback on answer cards
    el.answerGrid.querySelectorAll(".answer-card").forEach(card => {
        card.disabled = true;
        const answerText = card.getAttribute("data-answer");
        if (answerText === q.correctAnswerText) {
            card.classList.add("correct");
            card.classList.remove("selected");
        } else if (answerText === state.selectedAnswer && !wasCorrect) {
            card.classList.add("incorrect");
        }
    });

    // Update streak & XP
    if (wasCorrect) {
        state.sessionStreak++;
        state.sessionXP += XP_PER_CORRECT;
    } else {
        state.sessionStreak = 0;
    }

    el.quizStreakDisplay.textContent = `Streak: ${state.sessionStreak} \uD83D\uDD25`;

    // Feedback panel
    el.feedbackPanel.classList.add("visible");
    if (wasCorrect) {
        el.feedbackPanel.classList.add("correct-feedback");
        el.feedbackVerdict.textContent = "\u2713 CORRECT";
        el.feedbackVerdict.className   = "feedback-verdict correct";
        el.feedbackCorrectAnswer.classList.add("hidden");
    } else {
        el.feedbackPanel.classList.add("incorrect-feedback");
        el.feedbackVerdict.textContent = "\u2717 NOT QUITE";
        el.feedbackVerdict.className   = "feedback-verdict incorrect";
        el.feedbackCorrectAnswer.innerHTML =
            `Correct answer: <strong>${escapeHTML(q.correctAnswerText)}</strong>`;
        el.feedbackCorrectAnswer.classList.remove("hidden");
    }
    el.feedbackExplanation.innerHTML =
        `<strong>Why:</strong> ${escapeHTML(q.explanation)}`;

    // Record result
    state.sessionResults.push({
        question:      q.question,
        userAnswer:    state.selectedAnswer,
        correctAnswer: q.correctAnswerText,
        explanation:   q.explanation,
        wasCorrect
    });

    // Switch buttons
    el.submitAnswerBtn.classList.add("hidden");
    el.continueBtn.classList.remove("hidden");
}

function continueQuiz() {
    state.currentIndex++;

    if (state.currentIndex >= state.activeQuestions.length) {
        finishQuiz();
        return;
    }

    loadQuestion();
}

// -----------------------------------------------
// FINISH QUIZ
// -----------------------------------------------
function finishQuiz() {
    const total     = state.sessionResults.length;
    const correct   = state.sessionResults.filter(r => r.wasCorrect).length;
    const incorrect = total - correct;
    const accuracy  = total > 0 ? Math.round((correct / total) * 100) : 0;
    const isPerfect = correct === total && total > 0;
    const params = new URLSearchParams(window.location.search);
    const dailyStep = params.get("dailyStep");

    // Base XP calculation
    let xpEarned = correct * XP_PER_CORRECT + XP_QUIZ_COMPLETE;
    if (isPerfect) xpEarned += XP_PERFECT_BONUS;

    state.sessionXP = xpEarned;

    // Persist stats
    incrementStats(correct, incorrect, xpEarned, true);
    recordCategoryResult(state.activeCategoryId, correct, total);

    if (dailyStep) {
        markDailyTrainingStep(dailyStep);
    }

    // Populate results view
    const meta = getCategoryMeta(state.activeCategoryId);
    el.resultsQuizName.textContent = meta ? meta.name.toUpperCase() : "QUIZ";
    el.resultsScore.textContent    = accuracy + "%";
    el.resultsCorrect.textContent  = correct;
    el.resultsIncorrect.textContent= incorrect;
    el.resultsXP.textContent       = xpEarned + " XP";
    el.bdTotal.textContent         = total;
    el.bdCorrect.textContent       = correct;
    el.bdIncorrect.textContent     = incorrect;
    el.bdAccuracy.textContent      = accuracy + "%";
    el.bdXP.textContent            = xpEarned + " XP";

    // What to review
    const mistakes = state.sessionResults.filter(r => !r.wasCorrect);
    if (mistakes.length > 0) {
        el.reviewPreviewList.innerHTML = mistakes.slice(0, 5).map(m =>
            `<div class="review-item-preview"><span class="review-dot"></span>${escapeHTML(truncate(m.question, 80))}</div>`
        ).join("") + (mistakes.length > 5
            ? `<div class="review-item-preview"><span class="review-dot"></span>+ ${mistakes.length - 5} more</div>`
            : "");
        el.reviewMistakesBtn.classList.remove("hidden");
    } else {
        el.reviewPreviewList.innerHTML = `<p style="color:var(--success);font-size:14px;">\uD83C\uDF89 Perfect score! No mistakes to review.</p>`;
        el.reviewMistakesBtn.classList.add("hidden");
    }

    showView("results");
}

// -----------------------------------------------
// RESULTS ACTIONS
// -----------------------------------------------
function reviewMistakes() {
    const mistakes = state.sessionResults.filter(r => !r.wasCorrect);
    if (mistakes.length === 0) {
        initCenter();
        return;
    }

    state.reviewIndex = 0;
    showView("review");
    renderReviewMistake();
}

function renderReviewMistake() {
    const mistakes = state.sessionResults.filter(r => !r.wasCorrect);

    if (state.reviewIndex >= mistakes.length) {
        el.reviewActiveCard.classList.add("hidden");
        el.reviewCompleteCard.classList.remove("hidden");
        return;
    }

    el.reviewActiveCard.classList.remove("hidden");
    el.reviewCompleteCard.classList.add("hidden");

    const m = mistakes[state.reviewIndex];
    el.reviewCounter.innerHTML =
        `Reviewing mistake <strong>${state.reviewIndex + 1}</strong> of <strong>${mistakes.length}</strong>`;
    el.reviewQuestionText.textContent = m.question;
    el.reviewYourAnswer.textContent   = m.userAnswer || "\u2014";
    el.reviewCorrectAnswer.textContent= m.correctAnswer;
    el.reviewExplanation.textContent  = m.explanation;
}

function nextMistake() {
    state.reviewIndex++;
    renderReviewMistake();
}

function retakeQuiz() {
    if (state.retakeCategoryId) {
        launchQuiz(state.retakeCategoryId);
    } else {
        initCenter();
    }
}

// -----------------------------------------------
// QUICK QUIZ
// -----------------------------------------------
function startQuickQuiz() {
    // Pull from all standard categories
    const standardCats = ["product-recognition", "product-applications",
        "modules-systems", "wiring-connections", "takeoff-estimating", "real-world-scenarios"];

    let allQuestions = [];
    standardCats.forEach(catId => {
        const pool = getQuestionPool(catId);
        allQuestions = allQuestions.concat(pool);
    });

    // Deduplicate by uid
    const seen = new Set();
    const unique = [];
    allQuestions.forEach(q => {
        // Strip the "mixed" and "final-boss" suffixes to compare base ids
        const baseUid = q.uid.replace(/_mx$|_fb$|_pn$|_wc$/, "");
        if (!seen.has(baseUid)) {
            seen.add(baseUid);
            unique.push(q);
        }
    });

    if (unique.length < MIN_QUESTIONS_TO_START) {
        alert("Not enough questions available for a Quick Quiz yet.");
        return;
    }

    shuffleArray(unique);
    const selected = unique.slice(0, QUICK_QUIZ_COUNT);

    state.activeCategoryId = "mixed-knowledge";
    state.activeQuestions  = selected;
    state.currentIndex     = 0;
    state.submitted        = false;
    state.selectedAnswer   = null;
    state.sessionResults   = [];
    state.sessionStreak    = 0;
    state.sessionXP        = 0;
    state.retakeCategoryId = null;

    showView("quiz");
    loadQuestion();
}

// -----------------------------------------------
// UTIL
// -----------------------------------------------
function escapeHTML(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
    return String(str || "").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function truncate(str, n) {
    if (str.length <= n) return str;
    return str.slice(0, n - 1) + "\u2026";
}

// -----------------------------------------------
// EVENT BINDINGS
// -----------------------------------------------
function autoLaunchCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");
    if (!categoryId) return;

    const meta = getCategoryMeta(categoryId);
    if (!meta) return;

    const pool = getQuestionPool(categoryId) || [];
    if (pool.length < MIN_QUESTIONS_TO_START) return;

    const requestedCount = Number(params.get("questionCount"));
    const count = Number.isFinite(requestedCount) && requestedCount > 0 ? requestedCount : null;
    launchQuiz(categoryId, count);
}

window.addEventListener("DOMContentLoaded", () => {
    el.startQuickQuiz .addEventListener("click", startQuickQuiz);
    el.exitQuizBtn    .addEventListener("click", exitQuizWithConfirm);
    el.submitAnswerBtn.addEventListener("click", submitAnswer);
    el.continueBtn    .addEventListener("click", continueQuiz);
    el.reviewMistakesBtn.addEventListener("click", reviewMistakes);
    el.retakeQuizBtn  .addEventListener("click", retakeQuiz);
    el.backToCenterBtn.addEventListener("click", initCenter);
    el.nextMistakeBtn .addEventListener("click", nextMistake);
    el.reviewDoneBtn  .addEventListener("click", initCenter);
    el.exitReviewBtn  .addEventListener("click", () => showView("results"));

    initCenter();
    autoLaunchCategoryFromUrl();
});

// Allow keyboard: Enter = submit/continue
window.addEventListener("keydown", e => {
    if (e.key === "Enter" && state.view === "quiz") {
        if (!state.submitted && !el.submitAnswerBtn.disabled) {
            submitAnswer();
        } else if (state.submitted && !el.continueBtn.classList.contains("hidden")) {
            continueQuiz();
        }
    }
});

function exitQuizWithConfirm() {
    if (state.sessionResults.length === 0 || confirm("Exit this quiz? Progress will not be saved.")) {
        initCenter();
    }
}

// Expose for inline onclick handlers in HTML
window.launchQuiz = launchQuiz;
window.selectAnswer = selectAnswer;

