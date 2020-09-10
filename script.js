console.log("Hello World");

// grab all the html elements here
var questionContainer = document.getElementById("question-container");
var answerOptionsEl = document.getElementById("answer-options");
var loadingContainer = document.getElementById("loading-container");
var submissionContainer = document.getElementById("submission-form");
var countDownDisplay = document.getElementById("timer");
var submitButton = document.getElementById("submit-btn");
var startButton = document.getElementById("start-btn");
var questionTitle = document.getElementById("question-title");
// target possible answer options
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");

// Starting page: we have a header, brief description of the quiz and a 'start quiz' button.
// Once clicked, a countdown timer starts and the first question is introduced
// timer and high-score link have a fixed position in the top of the screen

// addEventListener for 'click' event

// a new/adjusted page is loaded with the first quiz question
// Each question will have 4 different options to choose from (only one is correct)
// For each wrong answer, there is a 10 second timer penalty
// Include an object array that holds the 5 different questions var quizQuestion array?
var quizQuestionsArray = [
  {
    questionOne: "Commonly used data types DO NOT include:",
    A: "strings",
    B: "booleans",
    C: "numbers",
    D: "alerts",
  },
  {
    questionTwo:
      "The condition in an if/else statement is enclosed within ______.",
    A: "quotes",
    B: "curly brackets",
    C: "square brackets",
    D: "parentheses",
  },
  {
    questionThree: "Arrays in JavaScript can be used to store _______.",
    A: "numbers and strings",
    B: "other arrays",
    C: "booleans",
    D: "all of the above",
  },
  {
    questionFour:
      "String values must be enclosed within ____ when being assigned to variables",
    A: "commas",
    B: "curly brackets",
    C: "parentheses",
    D: "quotes",
  },
  {
    questionFive:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    A: "JavaScript",
    B: "terminal/bash",
    C: "for loops",
    D: "console.log",
  },
];
console.log(quizQuestionsArray);

//create the addEventListener to start the quiz
//this starts the countdown timer, brings user to the first page
startButton.addEventListener("click", function () {
  console.log("You clicked start!");
  setTimer();
  quizPageOne();
  loadingContainer.style.display = "none";
});

var secondsLeft = 75;
// create the timer function
function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countDownDisplay.textContent = "Time left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function quizPageOne() {
  questionContainer.style.display = "block";
  questionTitle.textContent = quizQuestionsArray[0]["questionOne"];
  answerChoiceA.textContent = quizQuestionsArray[0]["A"];
  answerChoiceB.textContent = quizQuestionsArray[0]["B"];
  answerChoiceC.textContent = quizQuestionsArray[0]["C"];
  answerChoiceD.textContent = quizQuestionsArray[0]["D"];
}

function quizPageTwo() {
  questionContainer.style.display = "block";
  questionTitle.textContent = quizQuestionsArray[1]["questionTwo"];
  answerChoiceA.textContent = quizQuestionsArray[1]["A"];
  answerChoiceB.textContent = quizQuestionsArray[1]["B"];
  answerChoiceC.textContent = quizQuestionsArray[1]["C"];
  answerChoiceD.textContent = quizQuestionsArray[1]["D"];
}

function quizPageThree() {
  questionContainer.style.display = "block";
  questionTitle.textContent = quizQuestionsArray[2]["questionThree"];
  answerChoiceA.textContent = quizQuestionsArray[2]["A"];
  answerChoiceB.textContent = quizQuestionsArray[2]["B"];
  answerChoiceC.textContent = quizQuestionsArray[2]["C"];
  answerChoiceD.textContent = quizQuestionsArray[2]["D"];
}

function quizPageFour() {
  questionContainer.style.display = "block";
  questionTitle.textContent = quizQuestionsArray[3]["questionFour"];
  answerChoiceA.textContent = quizQuestionsArray[3]["A"];
  answerChoiceB.textContent = quizQuestionsArray[3]["B"];
  answerChoiceC.textContent = quizQuestionsArray[3]["C"];
  answerChoiceD.textContent = quizQuestionsArray[3]["D"];
}

function quizPageFive() {
  questionContainer.style.display = "block";
  questionTitle.textContent = quizQuestionsArray[4]["questionFive"];
  answerChoiceA.textContent = quizQuestionsArray[4]["A"];
  answerChoiceB.textContent = quizQuestionsArray[4]["B"];
  answerChoiceC.textContent = quizQuestionsArray[4]["C"];
  answerChoiceD.textContent = quizQuestionsArray[4]["D"];
}


function scoreTabulator() {
  scoreTab = (100) + (secondsLeft *10)
  trackedScore = trackedScore + scoreTab
  userScore.textContent = (trackedScore)
}

// add eventListeners for the quizPages within?
//creat quizpageindex for the different objects in the array
// add conditionals for right answer else wrong and decrease time
// right answers increase score var ++
// activate next quiz page index --- repeat
var counterPage = 0;
var gamePoints = 0;

answerOptionsEl.addEventListener("click", function (event) {
  var userChoice = event.target.value;
  counterPage++;
  console.log(userChoice);
  console.log("This is the counter: " + counterPage);
  if (userChoice === "C") {
    gamePoints++;
    console.log("You are correct! your score: " + gamePoints);
  } else {
    secondsLeft--;
    secondsLeft = secondsLeft - 10;
    console.log("Wrong answer!");
  }

  if(counterPage === 1){
    quizPageTwo();
  }

  if(counterPage === 2){
    quizPageThree();
  }

  if(counterPage === 3){
    quizPageFour();
  }

  if(counterPage === 4){
    quizPageFive();
  }

  if(counterPage === 5){
    questionContainer.style.display = "none"
    doneWithGame();
  }
  // for each question initial style is block when counter goes up style has to be changed to none
  // and next question's style should be block.
  // and for each question you're going to have add the html to the page
});

function doneWithGame(){
  submissionContainer.style.display = "block";
  document.createElement
}

document.createElement("ul");

// When an option is selected, a new 'page' will pop up for the next quiz question
// This process will repeat itself 5 times

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
