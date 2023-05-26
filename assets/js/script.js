// Start Button
var comenzarBtn = document.querySelector("#comenzar");
// Time
var elTiempo = document.getElementById("elTiempo");
// Main
var main = document.getElementById("main");
// Quiz
var pruebra = document.getElementById("pruebra");
// Questions Zone
var preguntas = document.getElementById("preguntas");
// Answers Zone
var respuestas = document.getElementById("respuestas");
// Seconds Left
var segundosQuedan = 90;
// Buttons
var a1Btn = document.getElementById("a1");
var a2Btn = document.getElementById("a2");
var a3Btn = document.getElementById("a3");
var a4Btn = document.getElementById("a4");
// High Score section
var forma = document.getElementById("forma");
// Button
var botón = document.querySelectorAll("botón");
// Response Zone
var reacción = document.getElementById("la reacción");
// Response Expiration
var reacciónExpiración;
// Congrats Messsage
var aviso = document.getElementById("aviso");
// Initials
var iniciales = document.getElementById("iniciales");
// Submit Initials
var inputField = document.getElementById("input");
// Start Button
var entregarBtn = document.getElementById("entregar");
// The current High Score
var marcarZona = document.getElementById("marcar-zona");
// Current/Available High Scores
var marcarLista = document.getElementById("marcarLista");
// Start Over
var reloadBtn = document.getElementById("recargar");


// Exam/Question
var examen = [
  {question: "How do you say JavaScript in Spanish?",
  ans1: "Cafetería",
  ans2: "El Gato",
  ans3: "El JavaScript",
  ans4: "El Majadero",
  correct: "El JavaScript"},

  {question: "Which of these are NOT Data Types?",
  ans1: "Numeric Data Type",
  ans2: "Taco Data Type",
  ans3: "Boolean Data Type",
  ans4: "String Data Type",
  correct: "Taco Data Type"},

  {question: "colors = ",
  ans1: "||green, purple, maroon||",
  ans2: "{brown, silver, red}",
  ans3: "['white', 'black', 'custom']",
  ans4: "<pink, magenta, lilac>",
  correct: "['white', 'black', 'custom']"},

  {question: "You work with the DOM",
  ans1: "Tree",
  ans2: "Bush",
  ans3: "Gondola",
  ans4: "Burger",
  correct: "Tree"},

  {question: "What is a commonly used language?",
  ans1: "Dolly",
  ans2: "jQuery",
  ans3: "Balloon", 
  ans4: "Dutch",
  correct: "jQuery"},
];

var current = 0;
var Q = examen[current].question;
var A1 = examen[current].ans1;
var A2 = examen[current].ans2;
var A3 = examen[current].ans3;
var A4 = examen[current].ans4;

showPruebra();


function showPruebra(event) {
  pruebra.classList.toggle("hide");
}

var timerInterval;

function setTime() {
  timerInterval = setInterval(function() {
    segundosQuedan--;
    elTiempo.textContent = segundosQuedan;
    if(segundosQuedan === 0) {
      clearInterval(timerInterval);
      endPruebra();
    }

  }, 1000);
}


comenzarBtn.addEventListener("click", function() {
    setTime();
    showPruebra();
});


function showPruebra() {
  elTiempo.classList.toggle("hide");
  elTiempo.textContent = segundosQuedan;
  pruebra.classList.toggle( 'hide' );
  preguntas.classList.toggle( 'hide' );
  respuestas.classList.toggle( 'hide' );
  preguntas.innerHTML = Q;
  a1Btn.innerHTML = A1;
  a2Btn.innerHTML = A2;
  a3Btn.innerHTML = A3;
  a4Btn.innerHTML = A4;
}



respuestas.addEventListener("click", check);


function check(event) {
  var right = examen[current].correct;
  
  if (event.target.textContent == right) {
    next();
    reacción.innerHTML = "Excellent!";
    reacciónExpiración = setTimeout(function () {
        reacción.innerHTML = "";
    }, 1000);
  }
  else {
    bad(10);
    next();
    reacción.innerHTML = "How could you?";
    reacciónExpiración = setTimeout(function () {
      reacción.innerHTML = "";
    }, 1000);
    stopAtZero();
    elTiempo.textContent = segundosQuedan;
  };
}

function stopAtZero() {
  if (segundosQuedan <= 0) {
    segundosQuedan = 0;
  endPruebra();
}}

function bad(seconds) {
  segundosQuedan -= seconds;
}

function hideReacción() {
  clearTimeout(reacciónExpiración);
}


function next() {
  current++;
  hideReacción();

  if (current < 5) {
    var Q = examen[current].question;
    var A1 = examen[current].ans1;
    var A2 = examen[current].ans2;
    var A3 = examen[current].ans3;
    var A4 = examen[current].ans4;
 
    preguntas.innerHTML = Q;
    a1Btn.innerHTML = A1;
    a2Btn.innerHTML = A2;
    a3Btn.innerHTML = A3;
    a4Btn.innerHTML = A4;
  }

  else {
    endPruebra();
  }
}

function endPruebra() {
  clearInterval(timerInterval);
  preguntas.classList.toggle("hide");
  respuestas.classList.toggle("hide");
  forma.classList.toggle("hide");
  elTiempo.classList.toggle("hide");
  aviso.textContent = 
  "Congrats! Your score is " + segundosQuedan + ".";
  initials.textContent = 
  "Submit your intials"
}

entregarBtn.addEventListener("click", record);


function record(event) {
  event.preventDefault();
  var input = inputField.value.trim();
  var marcar = segundosQuedan;
  var game = {
    player: input,
    number: marcar,
  };
  var storedJuegos = JSON.parse(localStorage.getItem("storedJuegos"))||[];
  storedJuegos.push(game);
  localStorage.setItem("storedJuegos", JSON.stringify(storedJuegos));
  
  console.log(storedJuegos);
  showMarcar();
}



function showMarcar() {
  forma.classList.toggle("hide");
  marcarZona.classList.toggle("hide");
  var storedJuegos = JSON.parse(localStorage.getItem("storedJuegos"))||[];
  storedJuegos.sort(function(a,b){
    return b.number - a.number
  });

  for(var i=0; i < storedJuegos.length; i++) {
 
      var createLi = document.createElement("li");
      createLi.textContent = storedJuegos[i].player + " " + storedJuegos[i].number;
      marcarLista.appendChild(createLi);
  
  }
}

reloadBtn.addEventListener("click", reload);

function reload() {
  location.reload();
}