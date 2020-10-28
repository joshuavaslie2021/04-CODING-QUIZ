var currentQuestionIndex = 0;
var startButton = document.getElementById("start")
var choicesEl = document.getElementById("choices")
var questionEl = document.getElementById("questions")
var feedbackEl = document.getElementById("feedback")
var openingEl = document.getElementById("start-screen")
var userScore = 0

function startQuiz() {
openingEl.style.visibility = 'hidden'
 for (var i = 0; i < questions.length; i++)   {

 }
 // Timer code
 startTimer()
 getQuestion();
}

function startTimer() {
var timer = setInterval(startTime,1000);
var start = 75

function startTime() {
    document.getElementById("time").innerHTML = -- start;
    if (start === 0) {
        clearInterval(timer)
        alert("time is up!")
        }
    }    
  
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(function(choice, i) {
        var optionButton = document.createElement("button");
        optionButton.setAttribute("class","choice");
        optionButton.setAttribute("value", choice);
        optionButton.onclick = answerClick;
        optionButton.textContent = choice;
        choicesEl.appendChild(optionButton)
    })
}

function answerClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        feedbackEl.textContent = "Wrong!"
    }
    else {
        feedbackEl.textContent = "Correct!"
        userScore++
    } 
    currentQuestionIndex++
    
    if (currentQuestionIndex === questions.length) {
        questionEl.style.visibility = "hidden"
        
        feedbackEl.textContent = "you scored " + userScore + " out of " + questions.length + "  correctly"
        
      
    }
    else {
 
    getQuestion()
    }
}
startButton.onclick = startQuiz