// ===============================================
// Ban-Koe Academy
// Quiz Data Layer — maps legacy questions to
// the new category system and provides pools.
// ===============================================

const QUIZ_CATEGORIES = [
    {
        id: "product-recognition",
        name: "Product Recognition",
        icon: "📦",
        description: "Identify products, families, manufacturers, and device types.",
        difficulty: "Beginner",
        targetCount: 20
    },
    {
        id: "part-number-mastery",
        name: "Part Number Mastery",
        icon: "🔢",
        description: "Learn to recognize and decode manufacturer part numbers.",
        difficulty: "Beginner / Intermediate",
        targetCount: 20
    },
    {
        id: "inventory-order-check-in",
        name: "Inventory & Order Check-In",
        icon: "📦",
        description: "Practice the Ban-Koe receiving, Pulse check-in, staging, documentation, and delivery procedure.",
        difficulty: "Beginner / Intermediate",
        targetCount: 20
    },
    {
        id: "product-applications",
        name: "Product Applications",
        icon: "🧠",
        description: "Determine which products or functions are appropriate for real situations.",
        difficulty: "Intermediate",
        targetCount: 20
    },
    {
        id: "modules-systems",
        name: "Modules & Systems",
        icon: "🧩",
        description: "Test your knowledge of modules, SLC, NAC, notification, and system relationships.",
        difficulty: "Intermediate",
        targetCount: 20
    },
    {
        id: "wiring-connections",
        name: "Wiring & Connections",
        icon: "🔌",
        description: "Test SLC, NAC, wiring, monitor/control, relays, isolators, and troubleshooting.",
        difficulty: "Intermediate",
        targetCount: 20
    },
    {
        id: "takeoff-estimating",
        name: "Takeoff & Estimating",
        icon: "📋",
        description: "Practice quantities, BOMs, estimating logic, and material verification.",
        difficulty: "Intermediate / Advanced",
        targetCount: 20
    },
    {
        id: "real-world-scenarios",
        name: "Real-World Scenarios",
        icon: "🎯",
        description: "Apply your knowledge to realistic Sales Support situations.",
        difficulty: "Advanced",
        targetCount: 15
    },
    {
        id: "access-control",
        name: "Access Control",
        icon: "🔐",
        description: "Recognize access-control controllers, readers, locks, exit devices, relays, and estimating relationships.",
        difficulty: "Beginner / Intermediate",
        targetCount: 150
    },
    {
        id: "mixed-knowledge",
        name: "Mixed Knowledge",
        icon: "🔥",
        description: "Random questions across everything you've learned.",
        difficulty: "Advanced",
        targetCount: 25
    },
    {
        id: "final-boss",
        name: "Final Boss",
        icon: "🏆",
        description: "The ultimate Ban-Koe Academy knowledge test.",
        difficulty: "Expert",
        targetCount: 50,
        locked: false
    }
];

// Maps existing category strings to new category IDs. null = skip.
const CATEGORY_ASSIGNMENT = {
    "Product Recognition":  "product-recognition",
    "Edwards Product Library": "product-recognition",
    "Detector Technologies": "product-recognition",
    "Detector Bases":       "product-recognition",
    "Inventory":            "product-recognition",
    "Warehouse":            "product-recognition",
    "Access Control":       "access-control",

    "Applications":         "product-applications",
    "Application":          "product-applications",
    "HVAC":                 "product-applications",

    "Fundamentals":         "modules-systems",
    "Terminology":          "modules-systems",
    "Control & Monitor Modules": "modules-systems",
    "Duct Smoke Detection": "modules-systems",

    "Sales Support":        "takeoff-estimating",
    "BOM Recognition":      "takeoff-estimating",
    "BOM Review":           "takeoff-estimating",
    "BOM Scenario":         "takeoff-estimating",
    "Estimator":            "takeoff-estimating",
    "Drawing Review":       "takeoff-estimating",
    "Document Review":      "takeoff-estimating",
    "Document Interpretation": "takeoff-estimating",
    "Mechanical Drawings":  "takeoff-estimating",

    "Scenario":             "real-world-scenarios",
    "Sales Support Scenario": "real-world-scenarios",
    "Estimator Scenario":   "real-world-scenarios",
    "Customer Support":     "real-world-scenarios",
    "Critical Thinking":    "real-world-scenarios",

    "Final Exam":           "final-boss",
    "Final Assessment":     "final-boss",
    "Final Review":         "final-boss",
    "Graduation":           "final-boss",

    // Dedicated question banks
    "Wiring":               "wiring-connections",
    "PartNumber":           "part-number-mastery",
    "InventoryOrderCheckIn": "inventory-order-check-in",

    // Skipped — too module-specific for open category quizzes
    "Review":               null,
    "Lesson Review":        null,
    "Module Review":        null,
    "Milestone Review":     null,
    "Final Project":        null,
};

const DIFFICULTY_NORMALIZE = {
    "Easy": "beginner", "easy": "beginner",
    "Medium": "intermediate", "medium": "intermediate",
    "Hard": "advanced", "hard": "advanced",
    "Expert": "expert", "expert": "expert"
};

// Normalizes a legacy question to the unified format
function normalizeQuestion(q, sourcePrefix, overrideCategory) {
    const rawCategory = q.category || "";
    const assignedCategory = overrideCategory !== undefined
        ? overrideCategory
        : CATEGORY_ASSIGNMENT[rawCategory];

    if (assignedCategory === null || assignedCategory === undefined) return null;

    const answers = Array.isArray(q.answers) ? [...q.answers] : [];
    if (answers.length === 0) return null;

    const correctIndex = typeof q.correct === "number" ? q.correct : 0;
    const correctAnswerText = answers[correctIndex] || answers[0];

    const difficulty = DIFFICULTY_NORMALIZE[q.difficulty] || "intermediate";

    return {
        uid: sourcePrefix + "_" + q.id,
        category: assignedCategory,
        difficulty,
        type: "multiple-choice",
        question: q.question || "",
        answers,
        correctAnswerText,
        explanation: q.explanation || "",
        product: q.product || ""
    };
}

// Builds a de-duplicated pool from all available sources
function buildAllQuestionPools() {
    const pools = {};
    QUIZ_CATEGORIES.forEach(cat => { pools[cat.id] = []; });

    const seen = new Set();
    const seenPoolQuestionTexts = new Map();

    function addQuestion(q, sourcePrefix, overrideCategory) {
        const questionText = JSON.stringify(q);
        if (sourcePrefix === "pn" && /E8500[0-9]{1,2}-\d{4}/i.test(questionText)) return;

        const norm = normalizeQuestion(q, sourcePrefix, overrideCategory);
        if (!norm) return;
        if (seen.has(norm.uid)) return;
        const poolTexts = seenPoolQuestionTexts.get(norm.category) || new Set();
        const poolQuestionKey = norm.question.trim().replace(/\s+/g, " ").toLowerCase();
        if (poolTexts.has(poolQuestionKey)) return;
        poolTexts.add(poolQuestionKey);
        seenPoolQuestionTexts.set(norm.category, poolTexts);
        seen.add(norm.uid);

        if (!pools[norm.category]) pools[norm.category] = [];
        pools[norm.category].push(norm);

    }

    // Process module1 questions (variable: questions)
    if (typeof questions !== "undefined" && Array.isArray(questions)) {
        questions.forEach(q => addQuestion(q, "m1"));
    }

    // Process module2 questions (variable: module2Questions)
    if (typeof module2Questions !== "undefined" && Array.isArray(module2Questions)) {
        module2Questions.forEach(q => addQuestion(q, "m2"));
    }

    // Process dedicated wiring questions (variable: wiringQuestions)
    if (typeof wiringQuestions !== "undefined" && Array.isArray(wiringQuestions)) {
        wiringQuestions.forEach(q => addQuestion(q, "wq"));
    }

    if (typeof inventoryOrderCheckInQuestions !== "undefined" && Array.isArray(inventoryOrderCheckInQuestions)) {
        inventoryOrderCheckInQuestions.forEach(q => addQuestion(q, "oci"));
    }

    // Process dedicated part number mastery questions
    if (typeof partNumberQuestions !== "undefined" && Array.isArray(partNumberQuestions)) {
        partNumberQuestions.forEach(q => addQuestion(q, "pn"));
    }

    // Process dedicated Final Boss questions
    if (typeof finalBossQuestions !== "undefined" && Array.isArray(finalBossQuestions)) {
        finalBossQuestions.forEach(q => addQuestion(q, "fbq", "final-boss"));
    }

    if (typeof accessControlQuestions !== "undefined" && Array.isArray(accessControlQuestions)) {
        accessControlQuestions.forEach(q => addQuestion(q, "ac", "access-control"));
    }

    // Build mixed-knowledge and final-boss pools from all other categories
    const standardCategories = ["product-recognition", "product-applications",
        "modules-systems", "wiring-connections", "part-number-mastery",
        "takeoff-estimating", "real-world-scenarios", "access-control"];

    const mixedQuestionTexts = new Set();
    standardCategories.forEach(catId => {
        pools[catId].forEach(q => {
            const mixedQuestionKey = q.question.trim().replace(/\s+/g, " ").toLowerCase();
            if (mixedQuestionTexts.has(mixedQuestionKey)) return;
            mixedQuestionTexts.add(mixedQuestionKey);
            // Mixed-knowledge pulls from all standard categories
            const mixedCopy = { ...q, uid: q.uid + "_mx", category: "mixed-knowledge" };
            pools["mixed-knowledge"].push(mixedCopy);
        });
    });

    return pools;
}

// Cached pools built on first access
let _cachedPools = null;

function getQuestionPool(categoryId) {
    if (!_cachedPools) {
        _cachedPools = buildAllQuestionPools();
    }
    return _cachedPools[categoryId] || [];
}

function getPoolSize(categoryId) {
    return getQuestionPool(categoryId).length;
}

function getCategoryMeta(categoryId) {
    return QUIZ_CATEGORIES.find(c => c.id === categoryId) || null;
}

// Shuffles array in place using Fisher-Yates
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Returns a deduplicated, shuffled subset of n questions from pool
function selectQuestions(categoryId, count) {
    const pool = [...getQuestionPool(categoryId)];
    if (pool.length === 0) return [];
    shuffleArray(pool);
    return pool.slice(0, Math.min(count, pool.length));
}

// Expose to global scope
window.QUIZ_CATEGORIES = QUIZ_CATEGORIES;
window.getQuestionPool = getQuestionPool;
window.getPoolSize = getPoolSize;
window.getCategoryMeta = getCategoryMeta;
window.selectQuestions = selectQuestions;
window.shuffleArray = shuffleArray;
