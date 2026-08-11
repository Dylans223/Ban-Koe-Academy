// ===================================
// Progress Page
// ===================================

const STORAGE_KEY = "bkaQuizStats";
const CATEGORY_IDS = [
    "product-recognition",
    "part-number-mastery",
    "product-applications",
    "modules-systems",
    "wiring-connections",
    "takeoff-estimating",
    "real-world-scenarios"
];

function safeNumber(value) {
    const num = Number(value);
    return Number.isFinite(num) ? num : 0;
}

function formatNumber(value) {
    return new Intl.NumberFormat().format(Math.round(safeNumber(value)));
}

function loadStats() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function getQuizStats() {
    const stats = loadStats();
    const totalCorrect = safeNumber(stats.totalCorrect);
    const totalIncorrect = safeNumber(stats.totalIncorrect);
    const totalQuestions = safeNumber(stats.totalQuestions);
    const totalXP = safeNumber(stats.totalXP);
    const quizzesCompleted = safeNumber(stats.quizzesCompleted);
    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const streak = safeNumber(stats.currentStreak || stats.streak);

    return {
        ...stats,
        totalCorrect,
        totalIncorrect,
        totalQuestions,
        totalXP,
        quizzesCompleted,
        accuracy,
        streak
    };
}

function getCategorySummary(categoryId, stats) {
    const categoryEntry = stats.categories && stats.categories[categoryId];
    const total = safeNumber(categoryEntry && categoryEntry.total);
    const correct = safeNumber(categoryEntry && categoryEntry.correct);
    const mastery = total > 0 ? Math.round((correct / total) * 100) : 0;

    return {
        categoryId,
        total,
        correct,
        mastery,
        meta: window.getCategoryMeta ? window.getCategoryMeta(categoryId) : null
    };
}

function getStatusLabel(mastery) {
    if (mastery < 50) return "Needs Practice";
    if (mastery < 70) return "Developing";
    if (mastery < 85) return "Proficient";
    if (mastery < 95) return "Strong";
    return "Mastered";
}

function getWeakestCategory(stats) {
    const candidates = CATEGORY_IDS
        .map((categoryId) => getCategorySummary(categoryId, stats))
        .filter((item) => item.total >= 3);

    if (candidates.length === 0) {
        return null;
    }

    candidates.sort((a, b) => a.mastery - b.mastery || a.total - b.total);
    return candidates[0];
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function renderProgressDashboard() {
    const stats = getQuizStats();
    const recommendation = getWeakestCategory(stats);

    setText("masteryScore", `${stats.accuracy}%`);
    setText("masterySummary", stats.totalQuestions > 0
        ? "Based on your quiz performance across all categories."
        : "Complete your first quiz to begin tracking mastery.");
    document.getElementById("masteryFill").style.width = `${Math.min(100, stats.accuracy)}%`;

    setText("accuracyValue", `${stats.accuracy}%`);
    setText("questionsValue", formatNumber(stats.totalQuestions));
    setText("quizzesValue", formatNumber(stats.quizzesCompleted));
    setText("xpValue", `${formatNumber(stats.totalXP)} XP`);
    setText("streakValue", `${stats.streak}`);

    setText("compactQuestions", formatNumber(stats.totalQuestions));
    setText("compactQuizzes", formatNumber(stats.quizzesCompleted));
    setText("compactXP", formatNumber(stats.totalXP));
    setText("compactStreak", `${stats.streak}`);
    setText("compactAccuracy", `${stats.accuracy}%`);

    const skillsMarkup = CATEGORY_IDS.map((categoryId) => {
        const summary = getCategorySummary(categoryId, stats);
        const label = summary.meta ? summary.meta.name : categoryId;
        const detail = summary.total > 0
            ? `Questions answered: ${summary.total}`
            : "Not started yet";

        return `
            <article class="skill-item">
                <div class="skill-header">
                    <div>
                        <h3>${label}</h3>
                        <p>${summary.total > 0 ? `${summary.mastery}% mastery` : "Not Started"}</p>
                    </div>
                    <span class="status-pill">${summary.total > 0 ? getStatusLabel(summary.mastery) : "Not Started"}</span>
                </div>
                <div class="skill-progress-track" aria-hidden="true">
                    <div class="skill-progress-fill" style="width:${Math.max(4, summary.mastery)}%"></div>
                </div>
                <div class="skill-footer">
                    <span>${detail}</span>
                    <strong>${summary.total > 0 ? `${summary.mastery}%` : "0%"}</strong>
                </div>
            </article>
        `;
    }).join("");

    const skillMasteryList = document.getElementById("skillMasteryList");
    if (skillMasteryList) {
        skillMasteryList.innerHTML = skillsMarkup;
    }

    const recommendationContent = document.getElementById("recommendationContent");
    if (recommendationContent) {
        if (stats.totalQuestions === 0) {
            recommendationContent.innerHTML = `
                <div class="recommendation-empty">
                    <h3>Complete your first quiz to begin receiving personalized recommendations.</h3>
                    <button class="btn btn-primary" onclick="goQuiz()">Go to Quiz →</button>
                </div>
            `;
        } else if (!recommendation) {
            recommendationContent.innerHTML = `
                <div class="recommendation-empty">
                    <h3>Complete a few more questions to build a stronger recommendation.</h3>
                    <button class="btn btn-primary" onclick="goQuiz()">Go to Quiz →</button>
                </div>
            `;
        } else {
            recommendationContent.innerHTML = `
                <div class="recommendation-body">
                    <div class="recommendation-head">
                        <h3>${recommendation.meta ? recommendation.meta.name.toUpperCase() : "NEXT CATEGORY"}</h3>
                        <span class="status-pill">${getStatusLabel(recommendation.mastery)}</span>
                    </div>
                    <p>This is currently your lowest-performing skill area.</p>
                    <p>Recent mastery: ${recommendation.mastery}%</p>
                    <p>Practice this area to improve your overall mastery.</p>
                    <button class="btn btn-primary" onclick="window.location.href='../quiz/index.html?category=${recommendation.categoryId}'">Practice ${recommendation.meta ? recommendation.meta.name : "This Area"} →</button>
                </div>
            `;
        }
    }

    const activityItems = [];
    if (stats.quizzesCompleted > 0) {
        activityItems.push(`✓ Completed ${formatNumber(stats.quizzesCompleted)} quiz${stats.quizzesCompleted === 1 ? "" : "zes"}`);
    }
    if (stats.totalQuestions > 0) {
        activityItems.push(`✓ Answered ${formatNumber(stats.totalQuestions)} questions`);
    }
    if (stats.totalXP > 0) {
        activityItems.push(`✓ Earned ${formatNumber(stats.totalXP)} XP`);
    }
    if (stats.accuracy > 0) {
        activityItems.push(`✓ Current accuracy is ${stats.accuracy}%`);
    }

    const recentActivityList = document.getElementById("recentActivityList");
    if (recentActivityList) {
        recentActivityList.innerHTML = activityItems.length > 0
            ? activityItems.map((item) => `<li>${item}</li>`).join("")
            : `<li>No activity yet.</li><li>Complete a quiz or training module to begin building your history.</li>`;
    }

    const achievements = [
        { title: "🎯 First Quiz", detail: "Complete your first quiz.", complete: stats.quizzesCompleted >= 1 },
        { title: "🔥 10 Questions", detail: "Answer 10 quiz questions.", complete: stats.totalQuestions >= 10 },
        { title: "📚 100 Questions", detail: "Answer 100 quiz questions.", complete: stats.totalQuestions >= 100 },
        { title: "⭐ 80% Accuracy", detail: "Reach 80% overall accuracy.", complete: stats.accuracy >= 80 },
        { title: "🏆 90% Accuracy", detail: "Reach 90% overall accuracy.", complete: stats.accuracy >= 90 },
        { title: "🔌 Wiring Practice", detail: "Complete a Wiring & Connections quiz.", complete: Boolean(stats.categories && stats.categories["wiring-connections"] && stats.categories["wiring-connections"].total > 0) },
        { title: "🔢 Part Number Practice", detail: "Complete a Part Number Mastery quiz.", complete: Boolean(stats.categories && stats.categories["part-number-mastery"] && stats.categories["part-number-mastery"].total > 0) }
    ];

    const achievementList = document.getElementById("achievementList");
    if (achievementList) {
        achievementList.innerHTML = achievements.map((achievement) => `
            <div class="achievement-item ${achievement.complete ? "complete" : "locked"}">
                <div>
                    <h3>${achievement.title}</h3>
                    <p>${achievement.detail}</p>
                </div>
                <span>${achievement.complete ? "Completed" : "Locked"}</span>
            </div>
        `).join("");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    renderProgressDashboard();
});

window.addEventListener("focus", () => {
    renderProgressDashboard();
});

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        renderProgressDashboard();
    }
});

