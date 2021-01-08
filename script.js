$(document).ready(function () {
  var submitButton = document.querySelector(".submit-button");
  submitButton.style.display = "none";
  submitButton.disabled = true;

  var questions = [
    {
      question:
        "Which dance favourite became Kylie’s first UK million-seller? ",
      choices: [
        "Can’t Get You Out of My Head",
        "Like a Virgin",
        "Dancing Queen",
        "Believe",
      ],
      answer: "Can’t Get You Out of My Head",
    },
    {
      question:
        "Which Village People chart hit was made up of initial letters?",
      choices: ["OMG", "BTW", "YMCA", "CIA"],
      answer: "YMCA",
    },
    {
      question: "Which boy’s name took Sister Sledge to No. 1 in 1985?",
      choices: ["Johnny", "Frankie", "Arnold", "Bruce"],
      answer: "Frankie",
    },
    {
      question: "Cheryl Jones and Sandra Denton spiced up their names to what?",
      choices: ["Salt ‘N’ Pepa", "Bananarama", "En Vouge", "Spice Girls"],
      answer: "Salt ‘N’ Pepa",
    },
    {
      question: "Who recorded the 2002 No. 1 album “Come with Us”?",
      choices: ["Scissor Sisters", "The Weekend", "Elvis", "Chemical Brothers"],
      answer: "Chemical Brothers",
    },
    {
      question:
        "In which song does the line “Too Ra Loo Raa Loo Rye Aye” appear?",
      choices: [
        "Too Ra Loo Song",
        "Come On Eileen",
        "Tramps, Gypses, and Theives",
        "Angle",
      ],
      answer: "Come On Eileen",
    },
    {
      question: "Which girl group backed Disco Tex?",
      choices: [
        "Rondelles",
        "Dream Grils",
        "The Sex-O-Lettes",
        "Pointer Sisters",
      ],
      answer: "The Sex-O-Lettes",
    },
    {
      question: "Who was too sexy in 1991?",
      choices: [
        "George Michael",
        "Micheal Jackson",
        "Prince",
        "Right Said Fred",
      ],
      answer: "Right Said Fred",
    },
    {
      question: "What is the top award for music?",
      choices: ["Grammy", "Oscar", "Tony", "1st Place"],
      answer: "Jive Bunny",
    },
    {
      question: "Whose name comes before the Mastermixers?",
      choices: ["Jive Bunny", "Mister", "Running", "Sir"],
      answer: "Jive Bunny",
    },
  ];

  var score = 0;
  var questionIndex;
  //start working code
  //declared variables
  var currentTime = document.querySelector("#timer");
  var timer = document.querySelector("#startTime");
  var questionsDiv = document.querySelector("#questionsDiv");
  var wrapper = document.querySelector("#wrapper");

  var secondsLeft = 100;

  // initialize the seconds

  $("#startBtn").on("click", function () {
    var instruction = document.querySelector("#instruction");
    instruction.textContent = "";
    var startBtn = document.querySelector("#startBtn");
    startBtn.style.display = "none";
    submitButton.style.display = "block";
    beginQuestions();

    var timerInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = " Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        allDone();
        currentTime.textContent = "Time's up!";
      }
    }, 1000);

    showNextQuestion();
  });

  function allDone() {
    var qa = document.querySelector("#qa");
    qa.style.display = "none";

    // Create a box that allows the user to input their initials
    // That box will be hidden, until the test is completed
    // Push that to the local storage
    // On submit/complete refresh the page. location.reload()
    // questionEl.textcontent = "You scored" + score + "/10"
  }
  
  var questionNumber = 0;
  submitButton.addEventListener("click", function () {
    if (selectedAnswer == questions[questionNumber].answer) {
      score++;
    } else {
      secondsLeft -= 10;
    }

    selectedAnswer = "";
    submitButton.disabled = true;

    questionNumber++;
    if (questionNumber < questions.length) {
      showNextQuestion();
    } else {
      allDone();
    }
  });


  var questionEl = document.querySelector(".question");

  function showNextQuestion() {
    questionEl.textContent = questions[questionNumber].question;
    // define function here
    btn_a.textContent = questions[questionNumber].choices[0].toString();
    btn_b.textContent = questions[questionNumber].choices[1].toString();
    btn_c.textContent = questions[questionNumber].choices[2].toString();
    btn_d.textContent = questions[questionNumber].choices[3].toString();
    console.log(questions[questionNumber].choices[0].toString());
  }

  var questionList = document.querySelector("#question-list");
  var btn_a = document.createElement("button");
  var btn_b = document.createElement("button");
  var btn_c = document.createElement("button");
  var btn_d = document.createElement("button");

  function beginQuestions() {
    var listItem = document.createElement("li");
    questionList.appendChild(listItem);
    btn_a.addEventListener("click", function () {
      submitButton.disabled = false;
      selectedAnswer = "a";
    });
    listItem.appendChild(btn_a);
    //Do this for all 4 buttons
    var listItem = document.createElement("li");
    questionList.appendChild(listItem);
    btn_b.addEventListener("click", function () {
      submitButton.disabled = false;
      selectedAnswer = "b";
    });
    listItem.appendChild(btn_b);

    var listItem = document.createElement("li");
    questionList.appendChild(listItem);
    btn_c.addEventListener("click", function () {
      submitButton.disabled = false;
      selectedAnswer = "c";
    });
    listItem.appendChild(btn_c);

    var listItem = document.createElement("li");
    questionList.appendChild(listItem);
    btn_d.addEventListener("click", function () {
      submitButton.disabled = false;
      selectedAnswer = "d";
    });
    listItem.appendChild(btn_d);
  }

  // Event listener to capture initials and local storage for initials and score
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {
      console.log("No value entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      // Travels to final page
      window.location.replace("./HighScores.html");
    }

    //text box for high score
  function addTextBoxField()
  {
              var input = document.createElement('input'); 
              input.type = "text";
              input.name = "skills[]";
              input.size = "30";
  
              var container = document.getElementById("skillfield");
              container.appendChild(input);
  }
    
  });
});
