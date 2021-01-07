

$(document).ready(function() {
    
  var questions = [
      {
        question: "Which dance favourite became Kylie’s first UK million-seller? ", choices: ["Can’t Get You Out of My Head", "Like a Virgin", "Dancing Queen","Believe"], 
        answer: "Can’t Get You Out of My Head"
    },
      {
        question: "Which Village People chart hit was made up of initial letters?", choices: ["OMG", "BTW", "YMCA","CIA"], 
        answer: "YMCA"
    },
      {
      question: "Which boy’s name took Sister Sledge to No. 1 in 1985?", 
      choices: ["Johnny", "Frankie", "Arnold","Bruce"], 
      answer: "Frankie"
    },
      {
        question: "Cheryl Jones and Sandra Denton spiced up their names to what?", choices: ["Salt ‘N’ Pepa", "Bananarama", "En Vouge","Spice Girls"], 
        answer: "Salt ‘N’ Pepa"
    },
      {
        question: "Who recorded the 2002 No. 1 album “Come with Us”?", 
        choices: ["Scissor Sisters", "The Weekend", "Elvis","Chemical Brothers"], 
        answer: "Chemical Brothers"
    },
      {
        question: "In which song does the line “Too Ra Loo Raa Loo Rye Aye” appear?", choices: ["Too Ra Loo Song", "Come On Eileen", "Tramps, Gypses, and Theives","Angle"], 
        answer: "Come On Eileen"
    },
      {
        question: "Which girl group backed Disco Tex?", 
        choices: ["", "", "",""], 
        answer: "The Sex-O-Lettes"},
      {
        question: "Who was too sexy in 1991?", 
        choices: ["", "", "",""], 
        answer: "Right Said Fred"
      },
      {
        question: "Whose name comes before the Mastermixers?", 
        choices: ["", "", "",""], 
        answer: "Jive Bunny"
      },
      {
        question: "Whose name comes before the Mastermixers?", 
        choices: ["", "", "",""], 
        answer: "Jive Bunny"
      },
  ];

var score = 0 
var questionIndex
//start working code
//declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");


  var seconds  
  var timerInterval

  // initialize the seconds
  function init (){
      seconds = 75 
  }

  init()

  $("#startBtn").on("click", function() {
  
      if (timeInterval === 0) {
        timeInterval = setInterval(function () {
          secondsLeft--;
          currentTime.textContent = "Time: " + secondsLeft;

          if (secondsLeft <= 0) {
              clearInterval(timeInterval);
              allDone();
              currentTime.textContent = "Time's up!";
          }
        }, 1000);
    }
  
      render(questionIndex);
      
  });

  
});