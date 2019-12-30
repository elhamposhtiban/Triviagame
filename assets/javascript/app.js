
//creating variable here 
let intervalId ;
let clockRunning = false;
let counter = 20;
let questionCounter = 0;
let selecterAnswer;
// let theClock;
let correctTally = 0;
let incorrectTally = 0;
let unansweredTally = 0;

const audioElement = document.createElement("audio");

const Number1 = {
  question: " What is Joey's catchphrase?", 
  correctAnswer: "B. How you doin?",
  allAnswer: ["How are ya?", "How you doin?", "Hey what's up?", "How’s it hanging?"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 1.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 1.gif'>",
}
const Number2 = {
  question: "What instrument does Phoebe play?", 
  correctAnswer: "C. Guitar",
  allAnswer: ["Violin", "Piano", " Guitar", "Ukulele"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 2.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 2.gif'>",
}
const Number3 = {
  question: "What is the name of the coffee house the Friends hangout at?", 
  correctAnswer: "D. Central Perk",
  allAnswer: ["Starbucks", "Central Coffee", "NYC Perks", "Central Perk"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 3.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 3.gif'>",
}
const Number4 = {
  question: "Where do the Friends all live?", 
  correctAnswer: "A. New York City",
  allAnswer: ["New York City", "Chicago", "Los Angeles", "Houston"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 4.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 4.gif'>",
}
const Number5 = {
  question: "Which pets do Joey and Chandler have?", 
  correctAnswer: "A. A chick and a duck",
  allAnswer: ["A chick and a duck", "Dogs", "Cats", "Rat babies"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 5.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 5.gif'>",
}
const Number6 = {
  question: "Which of Phoebe's songs gets made into a music video?", 
  correctAnswer: "C. Smelly Cat",
  allAnswer: ["Your Love", "ShowerSong", "Smelly Cat", "Little Black curly hair"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 6.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 6.gif'>",
}
const Number7 = {
  question: "Which Friend used to be fat?", 
  correctAnswer: "D. Monica",
  allAnswer: ["Rachel", "Joey", "Chandler", "Monica"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 7.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 7.gif'>",
}
const Number8 = {
  question: "Who does Phoebe end up with?", 
  correctAnswer: "B. Mike",
  allAnswer: ["Joey", "Mike", "David", "Duncan"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 8.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 8.gif'>",
}
const Number9 = {
  question: "Where do Ross and Rachel get married?", 
  correctAnswer: "D. Vegas",
  allAnswer: ["London", "Church Outside", "Central Perk?" ,"Vegas"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 9.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 9.gif'>",
}
const Number10 = {
  question: "Who have been friends since college?", 
  correctAnswer: "C. Ross and Chandler",
  allAnswer: ["Joey and Chandler", "Ross and Rachel", "Ross and Chandler", "Monica and Joey"],
  imageCorrect: "<img class='center-block' src='assets/images/correct/correct 10.gif'>",
  imageIncorrect: "<img class='center-block' src='assets/images/incorrect/incorrect 10.gif'>",
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
  Number10
];

$( document ).ready(function() {
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

  // generating answer click
  $("#major-area").on("click", ".answer-button", function (){
    selecterAnswer = $(this).text();

    if(selecterAnswer === questions[questionCounter].correctAnswer) {
      stop();
      generateWin();
    } else {
     stop();
      generateLoss();
    }

  });

  //call reset function
  $("body").on("click", ".reset-button", function(){
   resetGame();
  });

});

//creating timeout function here
function timeoutLoss() {
 
  unansweredTally++;
  
  timeOut = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'> Time's Out!  The correct answer was: " + questions[questionCounter].correctAnswer + "</p>" + "<img class='center-block img-wrong' src='assets/images/incorrect/incorrect 11.gif'>";
  
  $("#major-area").html(timeOut);
  
  setTimeout(wait, 2000);  
}

//creating win function
function generateWin() {
  
  correctTally++;

  win =  "</span></p>"+"<p class='text-center'> Correct! </p>"+questions[questionCounter].imageCorrect;

  $("#major-area").html(win);
  
  setTimeout(wait, 2000);   
}

//creating loss function
function generateLoss() {
  
  incorrectTally++;
  
  loss = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ questions[questionCounter].correctAnswer + "</p>" + questions[questionCounter].imageIncorrect;
  
  $("#major-area").html(loss);
  
  setTimeout(wait, 2000); 
}

//creating a function which can return timer, question an asnwer on the screen
function generateQuestions () {
  const getHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + questions[questionCounter].question + "</p> <button class='first-answer answer-button'>A. " + questions[questionCounter].allAnswer[0] + "</button> <button class='answer-button'>B. " + questions[questionCounter].allAnswer[1] + "</button> <button class='answer-button'>C. "+questions[questionCounter].allAnswer[2]+"</button> <button class='answer-button'>D. "+questions[questionCounter].allAnswer[3]+"</button>";
  
  $("#major-area").html(getHtml);
}


function wait() {
  //ternary operator replacing if/else for generate more questions
  if (questionCounter <9 ) {
    questionCounter++;
    generateQuestions();
     counter = 20;
    timerWrapper();
  } else {
    finalScreen(); 
  }
 
}; //end function

  function timerWrapper() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
function count() {

  if (counter === 0) {

     clearInterval(intervalId);
     $(".timer").html(counter);
     clockRunning = false;
     timeoutLoss();
  
    } if (counter > 0) {
    counter--;
  }
  $(".timer").html(counter); 
}

 function stop() {

  clearInterval(intervalId);

   clockRunning = false;
 }

function finalScreen() {
  final = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>FINISH! now you can see your answers" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $("#major-area").html(final);
}

function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  counter = 20;
  
  generateQuestions();
  timerWrapper();
}
 
 
// // creation on click event for start button
function startButton() {
  generateQuestions();
  timerWrapper();
}; 


