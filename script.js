

$(document).ready(function() {
    
  var questions = [
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
      {question: "", choices: ["", "", "",""], answer: ""},
  ]
  var seconds  
  var timerInterval

  // initialize the seconds
  function init (){
      seconds = 60 
  }

  init()

  $("#startBtn").on("click", function(){
  
          timerInterval = setInterval(function() {
          
            ; // decrement the seconds
            $("#counter").text(seconds); //change counter text tp seconds
        console.log(seconds);
            if(seconds === 0) {
              clearInterval(timerInterval);
              // sendMessage();
            }
        
          }, 1000);

  })


});