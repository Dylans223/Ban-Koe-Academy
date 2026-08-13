// ==========================================
// Ban-Koe Academy Navigation
// ==========================================

/**
 * Dynamically detects the application base path
 * Supports both local development (/) and GitHub Pages (/Ban-Koe-Academy/)
 */
function getBasePath() {
    let pathname = window.location.pathname;
    
    // Check if we're running on GitHub Pages (path includes /Ban-Koe-Academy)
    if (pathname.includes("/Ban-Koe-Academy")) {
        return "/Ban-Koe-Academy";
    }
    
    // Local development: base path is root
    return "";
}

// Cache the base path
const BASE_PATH = getBasePath();

function goDashboard() {
    window.location.href = BASE_PATH + "/index.html";
}

function goProducts() {
    window.location.href = BASE_PATH + "/products/index.html";
}

function goTraining() {
    window.location.href = BASE_PATH + "/training/index.html";
}

function goQuiz() {
    window.location.href = BASE_PATH + "/quiz/index.html";
}

function goProgress() {
    window.location.href = BASE_PATH + "/progress/index.html";
}

function goSettings() {
    window.location.href = BASE_PATH + "/settings/index.html";
}

function goHome() {
    window.location.href = BASE_PATH + "/index.html";
}
