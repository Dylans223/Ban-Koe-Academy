// ==========================================
// Ban-Koe Academy Navigation v2.0
// Application-relative navigation system
// ==========================================

/**
 * Detects the application base path without assuming a specific repository name.
 * Works for both local development and GitHub Pages repo subpath hosting.
 * Examples:
 *   / -> '/'
 *   /training/takeoff/ -> '/'
 *   /Ban-Koe-Academy/ -> '/Ban-Koe-Academy/'
 *   /Ban-Koe-Academy/training/takeoff/ -> '/Ban-Koe-Academy/'
 */
function getBasePath() {
    const pathname = (window.location.pathname || '/').replace(/\\/g, '/');
    const normalized = pathname.replace(/\/+$/, '');

    if (!normalized || normalized === '/') {
        return '/';
    }

    const segments = normalized.split('/').filter(Boolean);
    const knownAppSegments = new Set(['training', 'inventory-order-check-in', 'products', 'quiz', 'progress', 'settings', 'pages', 'index.html']);

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (knownAppSegments.has(segment) || segment.endsWith('.html')) {
            const baseSegments = segments.slice(0, i);
            return baseSegments.length > 0 ? '/' + baseSegments.join('/') + '/' : '/';
        }
    }

    return '/' + segments.join('/') + '/';
}

/**
 * Gets the current depth level (how many directories deep we are from base)
 * Returns number of ../ needed to get back to base
 */
function getCurrentDepth() {
    const pathname = (window.location.pathname || '/').replace(/\\/g, '/');
    const basePath = getBasePath();
    const normalizedPath = pathname.replace(/\/+$/, '');
    const normalizedBasePath = basePath.replace(/\/+$/, ''); // Remove trailing slash for consistent comparison

    let relativePath = normalizedPath;
    if (normalizedBasePath !== '/') {
        // Check if we're exactly at the base path (root)
        if (normalizedPath === normalizedBasePath) {
            relativePath = '';
        } else if (normalizedPath.startsWith(normalizedBasePath + '/')) {
            // We're in a subdirectory, get the relative portion
            relativePath = normalizedPath.substring(normalizedBasePath.length + 1);
        }
    }

    const segments = relativePath.split('/').filter(s => s && s !== 'index.html');
    return segments.length;
}

/**
 * Constructs application-relative URL that works from any page depth
 * @param {string} targetPath - path from application root (e.g., "products/index.html")
 * @returns {string} - correctly formatted relative path with ../ prefixes
 */
function buildNavigationUrl(targetPath) {
    // On http(s) hosting, build an absolute path from the detected base path.
    // This is deterministic and immune to relative-path resolution surprises.
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
        const basePath = getBasePath();
        return basePath + targetPath;
    }

    // file:// protocol (opening pages directly from disk): use relative traversal.
    const depth = getCurrentDepth();
    const upPrefix = depth > 0 ? '../'.repeat(depth) : '';
    return upPrefix + targetPath;
}

/**
 * Universal navigation function
 * @param {string} targetPage - page key (dashboard, training, products, quiz, progress, settings)
 */
function navigateTo(targetPage) {
    const targetMap = {
        "dashboard": "index.html",
        "training": "training/index.html",
        "inventory-order-check-in": "inventory-order-check-in/index.html",
        "products": "products/index.html",
        "quiz": "quiz/index.html",
        "progress": "progress/index.html",
        "settings": "settings/index.html"
    };
    
    const targetPath = targetMap[targetPage];
    if (!targetPath) {
        console.error("Unknown navigation target:", targetPage);
        return;
    }
    
    const url = buildNavigationUrl(targetPath);
    window.location.href = url;
}

function goDashboard(){
    navigateTo("dashboard");
}

function goProducts(){
    navigateTo("products");
}

function goTraining(){
    navigateTo("training");
}

function goInventoryOrderCheckIn(){
    navigateTo("inventory-order-check-in");
}

function goQuiz(){
    navigateTo("quiz");
}

function goProgress(){
    navigateTo("progress");
}

function goSettings(){
    navigateTo("settings");
}

function goHome(){
    goDashboard();
}

/**
 * Initialization: Set up data-nav-target handlers if they exist
 * This allows buttons with data-nav-target="dashboard" to work automatically
 */
window.addEventListener("DOMContentLoaded", function() {
    const mainNav = document.querySelector(".sidebar-nav .nav-group");
    if (mainNav && !mainNav.querySelector('[data-top-level="inventory-order-check-in"]')) {
        const inventoryButton = document.createElement("button");
        inventoryButton.type = "button";
        inventoryButton.textContent = "📦 Order Check-In";
        inventoryButton.dataset.topLevel = "inventory-order-check-in";
        inventoryButton.classList.toggle("active", window.location.pathname.includes("/inventory-order-check-in/"));
        inventoryButton.addEventListener("click", goInventoryOrderCheckIn);
        const trainingButton = mainNav.querySelector('[onclick*="goTraining"], [data-nav-target="training"]');
        if (trainingButton && trainingButton.nextSibling) {
            mainNav.insertBefore(inventoryButton, trainingButton.nextSibling);
        } else {
            mainNav.appendChild(inventoryButton);
        }
    }

    const navButtons = document.querySelectorAll("[data-nav-target]");
    navButtons.forEach(button => {
        if (!button.hasAttribute("data-nav-listener-attached")) {
            button.addEventListener("click", function() {
                const target = this.getAttribute("data-nav-target");
                navigateTo(target);
            });
            button.setAttribute("data-nav-listener-attached", "true");
        }
    });
});