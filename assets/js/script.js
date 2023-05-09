// Bootstrap info import
const bootstrap = require('bootstrap');
// Body-ody-ody-ody
var bodyEl = document.getElementById("body");


// Start Screen
var startScreen = document.querySelector("#startScreen");
// Rules button, toggle popover
var rulesBtn = document.querySelector("#rulesButton");
// Start Button, toggle first modal
var startBtn = document.querySelector("#startButton");


// High Scores Button, toggle high score modal
var highScoresButt = document.querySelector("#highScButton");
// High Scores, toggle HS Modal 
var highScoreModal = document.querySelector("#highScoreModal");
// Initials, text input
var initialsInput = document.querySelector("#initialsInput");
// Initials Input Submit button
var inInSubmitBtn = document.querySelector("#inInSubmit");
// High Scores Initials list
var highScore = document.querySelector("#highScores");
// Button to close out of high scores
var closeBtn = document.querySelector("#closeButton");


// Question 1
var Q1Toggle = document.getElementById("#Q1Toggle");
var Q1ModalBody = document.getElementById("#Q1ModalBody");
var Q1A1 = document.querySelector("#Q1A1");
var Q1A2 = document.querySelector("#Q1A2");
var Q1A3 = document.querySelector("#Q1A3");
var Q1A4 = document.querySelector("#Q1A4");

// Question 2
var Q2Toggle = document.getElementById("#Q2Toggle");
var Q1ModalBody = document.getElementById("#Q2ModalBody");
var Q2A1 = document.querySelector("#Q2A1");
var Q2A2 = document.querySelector("#Q2A2");
var Q2A3 = document.querySelector("#Q2A3");
var Q2A4 = document.querySelector("#Q2A4");

// Question 3
var Q3Toggle = document.getElementById("#Q3Toggle");
var Q3ModalBody = document.getElementById("#Q2ModalBody");
var Q3A1 = document.querySelector("#Q3A1");
var Q3A2 = document.querySelector("#Q3A2");
var Q3A3 = document.querySelector("#Q3A3");
var Q3A4 = document.querySelector("#Q3A4");

// Question 4
var Q4Toggle = document.getElementById("#Q4Toggle");
var Q3ModalBody = document.getElementById("#Q2ModalBody");
var Q3A1 = document.querySelector("#Q3A1");
var Q3A2 = document.querySelector("#Q3A2");
var Q3A3 = document.querySelector("#Q3A3");
var Q3A4 = document.querySelector("#Q3A4");




// Danny's variables

// var qArea = document.getElementById("Q-area");
// var aArea = document.getElementById("A-area");
// var secondsLeft = 90;

// var a1Btn = document.getElementById("a1");
// var a2Btn = document.getElementById("a2");
// var a3Btn = document.getElementById("a3");
// var a4Btn = document.getElementById("a4");
// var form = document.getElementById("form");
// var aBtn = document.querySelectorAll(".A-btn");
// var feedback = document.getElementById("feedback");
// var feedbackExpiration;
// var message = document.getElementById("message");
// var initials = document.getElementById("initials");
// var inputField = document.getElementById("input");
// var submitBtn = document.getElementById("submit");
// var scoresArea = document.getElementById("scores-area");
// var scoreList = document.getElementById("scorelist");
// var reloadBtn = document.getElementById("reload");


// object full of objects for Qs and corresponding A arrays
var timeForQuiz = [
    {
        question: "This is Question 1?",
        A1Q1: "Answer 1",
        A1Q2: "Answer 2",
        A1Q3: "Answer 3",
        A1Q4: "Answer 4",
        correct: "Answer 1"
    },

    {
        question: "This is Question 2?",
        A1Q1: "Answer 1",
        A1Q2: "Answer 2",
        A1Q3: "Answer 3",
        A1Q4: "Answer 4",
        correct: "Answer 2"
    },

    {
        question: "This is Question 3?",
        A1Q1: "Answer 1",
        A1Q2: "Answer 2",
        A1Q3: "Answer 3",
        A1Q4: "Answer 4",
        correct: "Answer 3"
    },

    {
        question: "This is Question 4?",
        A1Q1: "Answer 1",
        A1Q2: "Answer 2",
        A1Q3: "Answer 3",
        A1Q4: "Answer 4",
        correct: "Answer 4"
    },    
];

var current = 0;
var question = timeForQuiz[current].question;
var A1Q2 = timeForQuiz[current].A1Q1;
var A1Q2 = timeForQuiz[current].A1Q2;
var A1Q3 = timeForQuiz[current].A1Q3;
var A1Q4 = timeForQuiz[current].A1Q4;

showInit();

// 

// var quizChunks = [
//     {
//         question: "What are you wearing",
//         ans1: "pizza",
//         ans2: "rats",
//         ans3: "skin suit",
//         ans4: "music",
//         correct: "skin suit"
//     },

//     {
//         question: "why are we here on earth",
//         ans1: "pizza",
//         ans2: "rats",
//         ans3: "boogers",
//         ans4: "to fart around",
//         correct: "to fart around"
//     },

//     {
//         question: "what is food",
//         ans1: "pizza",
//         ans2: "rats",
//         ans3: "food",
//         ans4: "all of the above",
//         correct: "all of the above"
//     },

//     {
//         question: "who deserves kindness",
//         ans1: "steve",
//         ans2: "everyone but steve",
//         ans3: "hugh grant",
//         ans4: "hugh grant",
//         correct: "everyone but steve"
//     },

//     {
//         question: "why am i sad",
//         ans1: "because of the horrors",
//         ans2: "pizza",
//         ans3: "rats",
//         ans4: "hugh grant",
//         correct: "because of the horrors"
//     },
// ];

// var current = 0;
// var Q = quizChunks[current].question;
// var A1 = quizChunks[current].ans1;
// var A2 = quizChunks[current].ans2;
// var A3 = quizChunks[current].ans3;
// var A4 = quizChunks[current].ans4;

// showInit();


function showInit(event) {
    initEl.classList.toggle("hide");
}

var timerInterval;

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    }, 1000);
}


startBtn.addEventListener("click", function () {
    setTime();
    showQuiz();
});


function showQuiz() {
    timeEl.classList.toggle("hide");
    timeEl.textContent = secondsLeft;
    initEl.classList.toggle('hide');
    qArea.classList.toggle('hide');
    aArea.classList.toggle('hide');
    qArea.innerHTML = Q;
    a1Btn.innerHTML = A1;
    a2Btn.innerHTML = A2;
    a3Btn.innerHTML = A3;
    a4Btn.innerHTML = A4;
}



aArea.addEventListener("click", check);


function check(event) {
    var right = quizChunks[current].correct;

    if (event.target.textContent == right) {
        next();
        feedback.innerHTML = "good doggy";
        feedbackExpiration = setTimeout(function () {
            feedback.innerHTML = "";
        }, 1000);
    }
    else {
        punish(10);
        next();
        feedback.innerHTML = "how dare you";
        feedbackExpiration = setTimeout(function () {
            feedback.innerHTML = "";
        }, 1000);
        stopAtZero();
        timeEl.textContent = secondsLeft;
    };
}

function stopAtZero() {
    if (secondsLeft <= 0) {
        secondsLeft = 0;
        endQuiz();
    }
}

function punish(seconds) {
    secondsLeft -= seconds;
}

function hideFeedback() {
    clearTimeout(feedbackExpiration);
}


function next() {
    current++;
    hideFeedback();

    if (current < 5) {
        var Q = quizChunks[current].question;
        var A1 = quizChunks[current].ans1;
        var A2 = quizChunks[current].ans2;
        var A3 = quizChunks[current].ans3;
        var A4 = quizChunks[current].ans4;

        qArea.innerHTML = Q;
        a1Btn.innerHTML = A1;
        a2Btn.innerHTML = A2;
        a3Btn.innerHTML = A3;
        a4Btn.innerHTML = A4;
    }

    else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    qArea.classList.toggle("hide");
    aArea.classList.toggle("hide");
    form.classList.toggle("hide");
    timeEl.classList.toggle("hide");
    message.textContent =
        "I'm so proud of you just for existing. Your score is " + secondsLeft + ".";
    initials.textContent =
        "put your initials here or whatever you feel like"
}

submitBtn.addEventListener("click", record);


function record(event) {
    event.preventDefault();
    var input = inputField.value.trim();
    var score = secondsLeft;
    var game = {
        player: input,
        number: score,
    };
    var storedGames = JSON.parse(localStorage.getItem("storedgames")) || [];
    storedGames.push(game);
    localStorage.setItem("storedgames", JSON.stringify(storedGames));

    console.log(storedGames);
    showScores();
}



function showScores() {
    form.classList.toggle("hide");
    scoresArea.classList.toggle("hide");
    var storedGames = JSON.parse(localStorage.getItem("storedgames")) || [];
    storedGames.sort(function (a, b) {
        return b.number - a.number
    });

    for (var i = 0; i < storedGames.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = storedGames[i].player + " " + storedGames[i].number;
        scoreList.appendChild(createLi);

    }
}

reloadBtn.addEventListener("click", reload);

function reload() {
    location.reload();
}