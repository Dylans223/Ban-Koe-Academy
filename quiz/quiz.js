// ===============================================
// Ban-Koe Academy
// Quiz Engine v2.0
// ===============================================

let questionBank = [];
let activeQuestions = [];

let currentQuestion = 0;

let correct = 0;
let incorrect = 0;
let xp = 0;

let currentQuizProduct = null;

// ===============================================
// PAGE ELEMENTS
// ===============================================

const moduleSelect =
document.getElementById("moduleSelect");

const difficultySelect =
document.getElementById("difficultySelect");

const quizContainer =
document.getElementById("quizContainer");

const startQuizButton =
document.getElementById("startQuizButton");

const nextQuestionButton =
document.getElementById("nextQuestion");

const questionNumber =
document.getElementById("questionNumber");

const questionText =
document.getElementById("questionText");

const answers =
document.getElementById("answers");

const explanation =
document.getElementById("explanation");

const progressFill =
document.querySelector(".quiz-progress-fill");

// ===============================================
// START QUIZ
// ===============================================

startQuizButton.onclick = startQuiz;

function startQuiz(){

    loadQuestionBank();

    if(activeQuestions.length===0){
        alert("No questions found for this selection.");
        return;
    }

    currentQuestion = 0;

    correct = 0;
    incorrect = 0;

    xp = 0;

    shuffle(activeQuestions);

    quizContainer.style.display = "block";

    loadQuestion();

}

// ===============================================
// QUESTION BANK
// ===============================================

function loadQuestionBank(){

    questionBank = [];

    switch(Number(moduleSelect.value)){

        case 1:

            questionBank = [...questions];

            break;

        case 2:

            questionBank = [...module2Questions];

            break;

        default:

            questionBank = [...questions];

    }

    const difficulty =
    difficultySelect.value;

    if(difficulty === "all"){

        activeQuestions = [...questionBank];

        return;

    }

    activeQuestions =
    questionBank.filter(

        q=>q.difficulty.toLowerCase()
        ===
        difficulty

    );

}

// ===============================================
// LOAD QUESTION
// ===============================================

function loadQuestion(){

    const q =
    activeQuestions[currentQuestion];

    questionNumber.innerText =
    "Question "
    +
    (currentQuestion+1)
    +
    " of "
    +
    activeQuestions.length;

    questionText.innerText =
    q.question;

    explanation.innerText = "";

    answers.innerHTML = "";

    nextQuestionButton.disabled = true;

    const progressValue =
    ((currentQuestion + 1) / activeQuestions.length) * 100;

    if(progressFill){
        progressFill.style.width = progressValue + "%";
    }

    q.answers.forEach(

        (answer,index)=>{

            const button =
            document.createElement("button");

            button.className =
            "answerButton btn";

            button.innerText =
            answer;

            button.onclick =
            ()=>checkAnswer(index);

            answers.appendChild(button);

        }

    );

}

// ===============================================
// CHECK ANSWER
// ===============================================

function checkAnswer(selected){

    const q =
    activeQuestions[currentQuestion];

    const buttons =
    document.querySelectorAll(
        ".answerButton"
    );

    buttons.forEach(

        button=>
        button.disabled=true

    );

    buttons[q.correct]
    .classList.add("correct");

    if(selected===q.correct){

        correct++;

        xp+=10;

    }

    else{

        incorrect++;

        buttons[selected]
        .classList.add("incorrect");

    }

    explanation.innerText =
    q.explanation;

    nextQuestionButton.disabled = false;

}

// ===============================================
// NEXT QUESTION
// ===============================================

nextQuestionButton.onclick =
nextQuestion;

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion>=activeQuestions.length){

        finishQuiz();

        return;

    }

    loadQuestion();

}

// ===============================================
// FINISH QUIZ
// ===============================================

function finishQuiz(){

    let accuracy = 0;

    if(correct+incorrect>0){

        accuracy =
        Math.round(

            correct/

            (correct+incorrect)

            *100

        );

    }

    alert(

`Quiz Complete

Correct: ${correct}

Incorrect: ${incorrect}

Accuracy: ${accuracy}%

XP Earned: ${xp}`

    );

    quizContainer.style.display="none";

}

// ===============================================
// PRODUCT QUIZZES
// ===============================================

function startProductQuiz(productId){

    const product =
    productLibrary.products.find(

        p=>p.id===productId

    );

    if(!product) return;

    currentQuizProduct =
    product;

    questionBank=[];

    const quizIds =
    Array.isArray(product.quizQuestions)
    ? product.quizQuestions
    : [];

    if(quizIds.length===0){
        alert("No product quiz questions are configured for this product yet.");
        return;
    }

    quizIds.forEach(id=>{

        const question =

        questions.find(

            q=>q.id===id

        )

        ||

        module2Questions.find(

            q=>q.id===id

        );

        if(question){

            questionBank.push(question);

        }

    });

    activeQuestions=[...questionBank];

    if(activeQuestions.length===0){
        alert("No matching question records were found for this product quiz.");
        return;
    }

    currentQuestion=0;

    correct=0;

    incorrect=0;

    xp=0;

    shuffle(activeQuestions);

    quizContainer.style.display="block";

    loadQuestion();

}

const params =
new URLSearchParams(window.location.search);

const productIdParam =
Number(params.get("productId"));

if(
    Number.isFinite(productIdParam)
    &&
    productIdParam > 0
    &&
    typeof productLibrary !== "undefined"
){
    startProductQuiz(productIdParam);
}

// ===============================================
// SHUFFLE
// ===============================================

function shuffle(array){

    for(

        let i=array.length-1;

        i>0;

        i--

    ){

        let j=Math.floor(

            Math.random()

            *(i+1)

        );

        [

            array[i],

            array[j]

        ]

        =

        [

            array[j],

            array[i]

        ];

    }

}

