var currentQuestionIndex = 0;
var startButton = document.getElementById("start")
var choicesEl = document.getElementById("choices")
var questionEl = document.getElementById("questions")
var feedbackEl = document.getElementById("feedback")

function startQuiz() {
 for (var i = 0; i < questions.length; i++)   {

 }
 // Timer code
 getQuestion();
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
    } 
    currentQuestionIndex++
    
    if (currentQuestionIndex === questions.length) {
        console.log("game over")   
    }
    else {
 
    getQuestion()
    }
}
startButton.onclick = startQuiz