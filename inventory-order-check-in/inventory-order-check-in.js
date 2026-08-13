const CHECK_IN_CATEGORY = "inventory-order-check-in";
const STATS_KEY = "bkaQuizStats";

function loadCheckInStats() {
    try {
        return JSON.parse(localStorage.getItem(STATS_KEY)) || {};
    } catch {
        return {};
    }
}

function renderCheckInProgress() {
    const stats = loadCheckInStats();
    const category = stats.categories && stats.categories[CHECK_IN_CATEGORY];
    const total = Number(category && category.total) || 0;
    const correct = Number(category && category.correct) || 0;
    const attempts = Number(category && category.attempts) || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    document.getElementById("trainingProgressValue").textContent = "11 steps";
    document.getElementById("trainingProgressDetail").textContent = "Open the training to work through the procedure";
    document.getElementById("quizProgressValue").textContent = `${total} questions`;
    document.getElementById("quizProgressDetail").textContent = attempts > 0 ? `${attempts} Check-In Quiz attempt${attempts === 1 ? "" : "s"}` : "Check-In Quiz not started";
    document.getElementById("quizAccuracyValue").textContent = `${accuracy}%`;
    document.getElementById("quizAccuracyDetail").textContent = total > 0 ? `${correct} correct of ${total}` : "No Check-In Quiz answers yet";
}

window.addEventListener("DOMContentLoaded", renderCheckInProgress);
