//creating variable here 

let counter = 30;
let questionCounter = 0;
let selecterAnswer;
let theClock;
let correctTally = 0;
let incorrectTally = 0;
let unansweredTally = 0;
const audioElement = document.createElement("audio");
const Number1 = {
  question: " What is Joey's catchphrase?", 
  correctAnswer: "How you doin?",
  allAnswer: ["How are ya?", "How you doin?", "Hey what's up?", "How’s it hanging?"],
}
const Number2 = {
    question: "What instrument does Phoebe play?", 
    correctAnswer: " Guitar",
    allAnswer: ["Violin", "Piano", " Guitar", "Ukulele"],
  }
  const Number3 = {
    question: "What is the name of the coffee house the Friends hangout at?", 
    correctAnswer: "Central Perk",
    allAnswer: ["Starbucks", "Central Coffee", "NYC Perks", "Central Perk"],
  }
  const Number4 = {
    question: "Where do the Friends all live?", 
    correctAnswer: "New York City",
    allAnswer: ["New York City", "Chicago", "Los Angeles", "Houston"],
  }
  const Number5 = {
    question: "Which pets do Joey and Chandler have?", 
    correctAnswer: "A chick and a duck",
    allAnswer: ["A chick and a duck", "Dogs", "Cats", "Rat babies"],
  }
  const Number6 = {
    question: "Which of Phoebe's songs gets made into a music video?", 
    correctAnswer: "Smelly Cat",
    allAnswer: ["Your Love", "ShowerSong", "Smelly Cat", "Little Black curly hair"],
  }
  const Number7 = {
    question: "Which Friend used to be fat?", 
    correctAnswer: "Monica",
    allAnswer: ["Rachel", "Joey", "Chandler", "Monica"],
  }
  const Number8 = {
    question: "Who does Phoebe end up with?", 
    correctAnswer: "Mike",
    allAnswer: ["Joey", "Mike", "David", "Duncan"],
  }
  const Number9 = {
    question: "Where do Ross and Rachel get married?", 
    correctAnswer: "Vegas",
    allAnswer: ["London", "Church Outside", "Central Perk?" ,"Vegas"],
  }
  const Number10 = {
    question: "Who have been friends since college?", 
    correctAnswer: "Ross and Chandler",
    allAnswer: ["Joey and Chandler", "Ross and Rachel", "Ross and Chandler", "Monica and Joey"],
  }
const questions = [
Number1,
Number2,
Number3,
Number4,
Number5,
Number6,
Number7,
Number8,
Number9,
Number10]


// giving the source to audio element
audioElement.setAttribute("src", "Assets/audio/friends_theme_song.mp3");

// Theme Button
$(".theme-button").on("click", function() {
  audioElement.play();
});

// Pause Button
$(".pause-button").on("click", function() {
  audioElement.pause();
});


//generating function for creatin start button 
function startButton() {
 const start = $("#major-area").html("<button type=button class='btn btn-warning start-button'>Start Quiz</button>");
  
 }
 startButton();
// // creation on click event for start button
 $("#major-area").click( function startButton(){

  generateQuestions();
//   // timerWrapper();
});

 function generateQuestions () {

  const getHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[questionCounter].question + "</p><p class='first-answer answer'>A. " + questions[questionCounter].allAnswer[0] + "</p><p class='answer'>B. " + questions[questionCounter].allAnswer[1] + "</p><p class='answer'>C. "+questions[questionCounter].allAnswer[2]+"</p><p class='answer'>D. "+questions[questionCounter].allAnswer[3]+"</p>";
  $("#major-area").html(getHtml);
  // "<h2>" + questions[1].question + "</h2>"
 }
 






