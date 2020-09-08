console.log("Hello World");

// grab all the html elements here
var questionContainer = document.getElementById("question-container");
var loadingContainer = document.getElementById("loading-container");
var submissionContainer = document.getElementById("submission-form");
var submitButton = document.getElementById("submit-btn");
var startButton = document.getElementById("start-btn");
var question = document.getElementById("question-title");
// target possible answer options
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");


// this style input hides the question container on the html page 
// questionContainer.style.display = "none";


// Starting page: we have a header, brief description of the quiz and a 'start quiz' button.
// Once clicked, a countdown timer starts and the first question is introduced
// timer and high-score link have a fixed position in the top of the screen

// addEventListener for 'click' event

// a new/adjusted page is loaded with the first quiz question
// Each question will have 4 different options to choose from (only one is correct)
// For each wrong answer, there is a 10 second timer penalty
// Include an object array that holds the 5 different questions var quizQuestion array?
var quizQuestions = [
  {
    questionOne: "Commonly used data types DO NOT include:",
    answersOne: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
    },
    correctAnswerOne: "c",
  },
  {
    questionTwo:
      "The condition in an if/else statement is enclosed within ______.",
    answersTwo: {
      a: "quotes",
      b: "curly brackets",
      c: "parentheses",
      d: "square brackets",
    },
    correctAnswerTwo: "c",
  },
  {
    questionThree: "Arrays in JavaScript can be used to store _______.",
    answersThree: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswerThree: "d",
  },
  {
    questionFour:
      "String values must be enclosed within ____ when being assigned to variables",
    answersFour: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "parentheses",
    },
    correctAnswerFour: "c",
  },
  {
    questionFive:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersFive: {
      a: "JavaScript",
      b: "terminal/bash",
      c: "for loops",
      d: "console.log",
    },
    correctAnswerFive: "d",
  },
];
console.log(quizQuestions);


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
