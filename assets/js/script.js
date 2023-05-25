var comenzarBtn = document.querySelector("#comenzar");
var elTiempo = document.getElementById("elTiempo");
var mainEl = document.getElementById("main");
var elRegla = document.getElementById("regla");
var qZona = document.getElementById("Q-zona");
var aZona = document.getElementById("A-zona");
var quedanSegundos = 90;
var a1Btn = document.getElementById("a1");
var a2Btn = document.getElementById("a2");
var a3Btn = document.getElementById("a3");
var a4Btn = document.getElementById("a4");
var forma = document.getElementById("forma");
var botón = document.querySelectorAll("botón");
var reacción = document.getElementById("la reacción");
var reacciónExpiración;
var aviso = document.getElementById("aviso");
var iniciales = document.getElementById("iniciales");
var inputField = document.getElementById("input");
var entregarBtn = document.getElementById("entregar");
var marcarZona = document.getElementById("marcar-zona");
var marcarLista = document.getElementById("marcarLista");
var recargarBtn = document.getElementById("recargar");


// object full of objects for Qs and corresponding A arrays

var examen = [
  {question: "What are you wearing",
  ans1: "pizza",
  ans2: "rats",
  ans3: "skin suit",
  ans4: "music",
  correct: "skin suit"},

  {question: "why are we here on earth",
  ans1: "pizza",
  ans2: "rats",
  ans3: "boogers",
  ans4: "to fart around",
  correct: "to fart around"},

  {question: "what is food",
  ans1: "pizza",
  ans2: "rats",
  ans3: "food",
  ans4: "all of the above",
  correct: "all of the above"},

  {question: "who deserves kindness",
  ans1: "steve",
  ans2: "everyone but steve",
  ans3: "hugh grant",
  ans4: "hugh grant",
  correct: "everyone but steve"},

  {question: "why am i sad",
  ans1: "because of the horrors",
  ans2: "pizza",
  ans3: "rats", 
  ans4: "hugh grant",
  correct: "because of the horrors"},
];

var current = 0;
var Q = examen[current].question;
var A1 = examen[current].ans1;
var A2 = examen[current].ans2;
var A3 = examen[current].ans3;
var A4 = examen[current].ans4;

showRegla();


function showRegla(event) {
  elRegla.classList.toggle("hide");
}

var timerInterval;

function setTime() {
  timerInterval = setInterval(function() {
    quedanSegundos--;
    elTiempo.textContent = quedanSegundos;
    if(quedanSegundos === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}


comenzarBtn.addEventListener("click", function() {
    setTime();
    showQuiz();
});


function showQuiz() {
  elTiempo.classList.toggle("hide");
  elTiempo.textContent = quedanSegundos;
  elRegla.classList.toggle( 'hide' );
  qZona.classList.toggle( 'hide' );
  aZona.classList.toggle( 'hide' );
  qZona.innerHTML = Q;
  a1Btn.innerHTML = A1;
  a2Btn.innerHTML = A2;
  a3Btn.innerHTML = A3;
  a4Btn.innerHTML = A4;
}



aZona.addEventListener("click", check);


function check(event) {
  var right = examen[current].correct;
  
  if (event.target.textContent == right) {
    next();
    reacción.innerHTML = "good doggy";
    reacciónExpiración = setTimeout(function () {
        reacción.innerHTML = "";
    }, 1000);
  }
  else {
    punish(10);
    next();
    reacción.innerHTML = "how dare you";
    reacciónExpiración = setTimeout(function () {
      reacción.innerHTML = "";
    }, 1000);
    stopAtZero();
    elTiempo.textContent = quedanSegundos;
  };
}

function stopAtZero() {
  if (quedanSegundos <= 0) {
    quedanSegundos = 0;
  endQuiz();
}}

function punish(seconds) {
    quedanSegundos -= seconds;
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
 
    qZona.innerHTML = Q;
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
  qZona.classList.toggle("hide");
  aZona.classList.toggle("hide");
  forma.classList.toggle("hide");
  elTiempo.classList.toggle("hide");
  aviso.textContent = 
  "Congrats! Your score is " + quedanSegundos + ".";
  initials.textContent = 
  "Submit your intials"
}

entregarBtn.addEventListener("click", record);


function record(event) {
  event.preventDefault();
  var input = inputField.value.trim();
  var marcar = quedanSegundos;
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

recargarBtn.addEventListener("click", recargar);

function recargar() {
  location.reload();
}