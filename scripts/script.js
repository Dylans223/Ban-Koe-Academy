// ==============================
// Ban-Koe Academy v0.1
// Quiz Engine
// ==============================

let currentQuestion = 0;

let activeQuestions = [];

let correct =
Number(localStorage.getItem("correct")) || 0;

let incorrect =
Number(localStorage.getItem("incorrect")) || 0;

let xp =
Number(localStorage.getItem("xp")) || 0;

const dashboardPage = document.getElementById("dashboardPage");
const quizPage = document.getElementById("quizPage");

const questionTitle = document.getElementById("questionTitle");
const questionBox = document.getElementById("questionBox");
const answersDiv = document.getElementById("answers");

const nextButton = document.getElementById("nextButton");

const correctCounter = document.getElementById("correctCounter");
const incorrectCounter = document.getElementById("incorrectCounter");

const questionsAnswered = document.getElementById("questionsAnswered");
const accuracy = document.getElementById("accuracy");
const xpCounter =
document.getElementById("xpCounter");
const levelCounter =
document.getElementById("levelCounter");

const rankCounter =
document.getElementById("rankCounter");

const questionCounter =
document.getElementById("questionCounter");

const explanation =
document.getElementById("explanation");
nextButton.addEventListener("click", nextQuestion);

updateStats();

function startAccessControlPractice(){

    activeQuestions = [...module3Questions];

    currentQuestion = 0;

    shuffleArray(activeQuestions);

    document.querySelectorAll("main section")
        .forEach(section => section.classList.add("hidden"));

    quizPage.classList.remove("hidden");

    loadQuestion();

}

function loadQuestion(){

    const q = activeQuestions[currentQuestion];
questionCounter.innerHTML =
(currentQuestion+1)
+
" / "
+
activeQuestions.length;

explanation.style.display="none";
    questionTitle.innerText =
        "Question " + (currentQuestion + 1);

    questionBox.innerText =
        q.question;

    nextButton.disabled = true;

    answersDiv.innerHTML = "";

    const shuffledAnswers = q.answers.map((answer, index) => ({ answer, index }));
    shuffleArray(shuffledAnswers);

    shuffledAnswers.forEach((entry) => {

        const button = document.createElement("button");

        button.className = "answerButton";

        button.innerText = entry.answer;
        button.dataset.answerIndex = entry.index;

        button.onclick = ()=>checkAnswer(entry.index);

        answersDiv.appendChild(button);

    });

}

function checkAnswer(selected){

    if(nextButton.disabled===false){

        return;

    }

    const buttons =
        document.querySelectorAll(".answerButton");

    buttons.forEach(button=>button.disabled=true);

    const correctAnswer =
        activeQuestions[currentQuestion].correct;

    buttons.forEach((button) => {
        if (Number(button.dataset.answerIndex) === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if(selected===correctAnswer){

        correct++;

        xp += 10;

        explanation.style.display="block";

        explanation.innerHTML=
        "<h3>✅ Correct! (+10 XP)</h3><br>"
        + activeQuestions[currentQuestion].explanation;

    }

    else{

        incorrect++;

        const selectedButton = Array.from(buttons).find((button) => Number(button.dataset.answerIndex) === selected);
        selectedButton?.classList.add("incorrect");

        explanation.style.display="block";

        explanation.innerHTML=
        "<h3>❌ Incorrect</h3><br>"
        + activeQuestions[currentQuestion].explanation;

    }

    saveProgress();

    updateStats();

    nextButton.disabled = false;

}

function shuffleArray(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
    }
    return array;
}

function updateStats(){

    correctCounter.innerText = correct;

incorrectCounter.innerText = incorrect;

xpCounter.innerText = xp + " XP";
let level =
Math.floor(xp/100)+1;

levelCounter.innerText =
level;

let rank="Apprentice";

if(level>=5)
rank="Technician";

if(level>=10)
rank="Estimator";

if(level>=20)
rank="Sales Support";

if(level>=30)
rank="Project Manager";

if(level>=50)
rank="Ban-Koe Master";

rankCounter.innerText =
rank;
    questionsAnswered.innerText =
        correct + incorrect;

    let total =
        correct + incorrect;

    if(total===0){

        accuracy.innerText="0%";

        return;

    }

    let percent =
        Math.round((correct/total)*100);

    accuracy.innerText =
        percent + "%";

}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion>=activeQuestions.length){

        let total = correct + incorrect;

        let percent = Math.round((correct / total) * 100);

        alert(

        "🎉 MODULE COMPLETE\n\n"

        +

        "Score: "

        +

        percent

        +

        "%\n\n"

        +

        "XP: "

        +

        xp

        +

        "\n"

        +

        "Level: "

        +

        levelCounter.innerText

        +

        "\n"

        +

        "Rank: "

        +

        rankCounter.innerText

        );

        quizPage.classList.add("hidden");

        dashboardPage.classList.remove("hidden");
        currentQuestion=0;

        return;

    }

    loadQuestion();

}

function saveProgress(){

    localStorage.setItem(
        "correct",
        correct
    );

    localStorage.setItem(
        "incorrect",
        incorrect
    );

    localStorage.setItem(
        "xp",
        xp
    );

}

const practiceTarget = new URLSearchParams(window.location.search).get("practice");
if (practiceTarget === "access-control") {
    startAccessControlPractice();
}