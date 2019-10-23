//creating variable here 

let counter = 30;
let questionCounter = 0;
let selecterAnswer;
let theClock;
let correctTally = 0;
let incorrectTally = 0;
let unansweredTally = 0;
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

function startbotton() {
  start = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
  $("major-area").append(start);
  startbotton();
}
  // $(".major-area").html("<h2>" + questions[1].question + "</h2>");
// }

