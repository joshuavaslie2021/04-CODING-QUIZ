var curentQuestionIndex = 0;
var startButton = document.getElementById("start")
var choicesEl = document.getElementById("choices")
var questionEl = document.getElementById("questions")
var feedbackEl = document.getElementById("feedback")

function startQuiz() {
 for (var i = 0; i < questions.length; i++)   {

 }
 getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(function(choice, index) {
        var choiceNode = document.createElement("button")
        choiceNode.setAttribute("class","choice");
        choiceNode.setAttribute("value",choice)
    })
}

startButton.onclick = startQuiz