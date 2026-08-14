(() => {
    const trainingKey = "bkaAccessControlTraining";
    const quizKey = "bkaQuizStats";

    function readJson(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
    }

    function renderAccessCard() {
        const completed = readJson(trainingKey, { completed: [] }).completed || [];
        const stats = readJson(quizKey, {});
        const quiz = stats.categories && stats.categories["access-control"];
        const total = Number(quiz && quiz.total) || 0;
        const correct = Number(quiz && quiz.correct) || 0;
        const mastery = total ? Math.round((correct / total) * 100) : 0;
        const lessonProgress = Math.round((completed.filter((index) => index < 6).length / 6) * 100);
        const card = document.getElementById("accessControlDashboardCard");
        if (!card) return;
        card.querySelector("[data-access-training-progress]").textContent = `${lessonProgress}%`;
        card.querySelector("[data-access-quiz-progress]").textContent = `${mastery}%`;
        card.querySelector("[data-access-accuracy]").textContent = total ? `${mastery}%` : "Not started";
        card.querySelector("[data-access-progress-fill]").style.width = `${lessonProgress}%`;
    }

    window.addEventListener("DOMContentLoaded", renderAccessCard);
    window.addEventListener("focus", renderAccessCard);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) renderAccessCard(); });
})();
