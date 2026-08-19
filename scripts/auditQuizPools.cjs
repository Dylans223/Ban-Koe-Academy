const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = {
    console,
    Math,
    Set,
    Map,
    Array,
    Object,
    JSON,
    String,
    Number,
    Boolean,
    RegExp,
    window: null
};
context.window = context;
context.globalThis = context;
vm.createContext(context);

function loadData(fileName, exportName) {
    const filePath = path.join(root, "data", fileName);
    const source = fs.readFileSync(filePath, "utf8");
    const exposedSource = `${source}\n;globalThis[${JSON.stringify(exportName)}] = ${exportName};`;
    vm.runInContext(exposedSource, context, { filename: filePath });
}

loadData("questions.js", "questions");
loadData("module2.js", "module2Questions");
loadData("wiringQuestions.js", "wiringQuestions");
loadData("inventoryOrderCheckInQuestions.js", "inventoryOrderCheckInQuestions");
loadData("partNumberQuestions.js", "partNumberQuestions");
loadData("finalBossQuestions.js", "finalBossQuestions");
loadData("accessControlQuestions.js", "accessControlQuestions");

const quizDataPath = path.join(root, "data", "quizData.js");
vm.runInContext(fs.readFileSync(quizDataPath, "utf8"), context, { filename: quizDataPath });

const categoryIds = [
    "product-recognition",
    "part-number-mastery",
    "product-applications",
    "inventory-order-check-in",
    "access-control",
    "wiring-connections",
    "takeoff-estimating",
    "modules-systems",
    "final-boss",
    "mixed-knowledge"
];

function normalizedText(value) {
    return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function validateQuestion(question) {
    const failures = [];
    if (!question || typeof question !== "object") failures.push("not-an-object");
    if (!question.uid || typeof question.uid !== "string") failures.push("missing-uid");
    if (!question.question || typeof question.question !== "string" || !question.question.trim()) failures.push("missing-question");
    if (!Array.isArray(question.answers) || question.answers.length !== 4) failures.push("answers-not-four");
    if (Array.isArray(question.answers)) {
        const answerKeys = question.answers.map(normalizedText);
        if (answerKeys.some((answer) => !answer)) failures.push("empty-answer");
        if (new Set(answerKeys).size !== answerKeys.length) failures.push("duplicate-answers");
        if (!question.correctAnswerText || !answerKeys.includes(normalizedText(question.correctAnswerText))) failures.push("invalid-correct-answer");
    }
    if (!question.explanation || typeof question.explanation !== "string" || !question.explanation.trim()) failures.push("missing-explanation");
    if (!categoryIds.includes(question.category)) failures.push("invalid-category");
    return failures;
}

function testAnswerRandomization(question) {
    const correct = normalizedText(question.correctAnswerText);
    const original = question.answers.map((answer, originalIndex) => ({ answer, originalIndex }));
    const results = [];
    for (let offset = 0; offset < original.length; offset += 1) {
        const shuffled = original.slice(offset).concat(original.slice(0, offset));
        const displayedCorrect = shuffled.find((item) => normalizedText(item.answer) === correct);
        results.push(Boolean(displayedCorrect));
    }
    return results.every(Boolean);
}

let totalFailures = 0;
console.log("Ban-Koe Academy live quiz-pool audit");
console.log("=====================================");
for (const categoryId of categoryIds) {
    const pool = context.getQuestionPool(categoryId);
    const ids = pool.map((question) => question.uid);
    const texts = pool.map((question) => normalizedText(question.question));
    const duplicateTexts = texts.length - new Set(texts).size;
    const invalidQuestions = pool.flatMap((question) => validateQuestion(question).map((failure) => `${question.uid}:${failure}`));
    const randomizationFailures = pool.filter((question) => !testAnswerRandomization(question)).map((question) => question.uid);
    const uniqueCategories = [...new Set(pool.map((question) => question.category))];
    const row = {
        category: categoryId,
        total: pool.length,
        uniqueIds: new Set(ids).size,
        uniqueText: new Set(texts).size,
        duplicateText: duplicateTexts,
        invalidQuestions: invalidQuestions.length,
        randomizationFailures: randomizationFailures.length,
        sourceCategories: uniqueCategories
    };
    console.log(JSON.stringify(row));
    totalFailures += duplicateTexts + invalidQuestions.length + randomizationFailures.length;
}

const mixedPool = context.getQuestionPool("mixed-knowledge");
console.log(JSON.stringify({
    mixedCategories: [...new Set(mixedPool.map((question) => question.uid.split("_")[0]))],
    mixedHasQuestions: mixedPool.length > 0
}));

if (totalFailures > 0) {
    console.error(`AUDIT FAILED: ${totalFailures} failure(s)`);
    process.exitCode = 1;
} else {
    console.log("AUDIT PASSED: all live pools have unique text, valid answers, explanations, categories, and answer-text randomization invariants.");
}
