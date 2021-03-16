var currentQuestionIndex = 0;
var startButton = document.getElementById("start")
var choicesEl = document.getElementById("choices")
var questionEl = document.getElementById("questions")
var feedbackEl = document.getElementById("feedback")
var openingEl = document.getElementById("start-screen")
var hsEl = document.getElementById("hs-screen")
var quizTimer = document.getElementById("timer")
var wrapperBox = document.getElementsByClassName("wrapper")
var userScore = 0

function startQuiz() {
questionEl.setAttribute("class","show")
openingEl.setAttribute("class","hide")
feedbackEl.setAttribute("class","show")
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
    if (time === 0 ) {
        clearInterval(startTime)
       
        startTime.setAttribute("class","hide")
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
        feedbackEl.textContent = "you scored " + userScore + " out of " + questions.length + "  correctly!"
        var logButton = document.createElement("button")
        logButton.setAttribute("class","showlogbtn")
        logButton.setAttribute("id","logButton")
        logButton.onclick = logScore
        logButton.textContent = "Log your high score!"
        questionEl.prepend(logButton)
        questionEl.setAttribute("class","hide")


        
      
    }
    else {
 
    getQuestion()
    }
}

function logScore() {
logButton.setAttribute("class","hide")
feedbackEl.setAttribute("class","hide")
var hsEl = document.createElement("div")
openingEl.append(hsEl)
hsEl.setAttribute("id","high-score screen")
hsEl.setAttribute("class","show")

var hsh1 = document.createElement("h1")
hsh1.textContent = "Enter your initials to record your score"
var inputbox = document.createElement("input")
inputbox.setAttribute("type",'text')
var scoreDisplay = document.createElement("h2")
scoreDisplay.textContent = "You scored a " + userScore + " out of 5!"
var submitScore = document.createElement("button")
submitScore.setAttribute("class","localstore")
// submitScore.setAttribute("class","btn")
var retakeQuiz = document.createElement("button")
retakeQuiz.textContent = "Retake Quiz"
retakeQuiz.setAttribute("class","btn")
submitScore.textContent = "Submit"
submitScore.onclick = updateLocalStorage()
hsEl.appendChild(inputbox)
hsEl.appendChild(submitScore)
hsEl.appendChild(scoreDisplay)
hsEl.appendChild(retakeQuiz)
retakeQuiz.onclick = startQuiz

function updateLocalStorage(userScore) {
    var newScores = [
        {initials: inputbox.value,
         score: userScore   
        }
    ]
    

    localStorage.getItem("Initials1","Score1")
    // var eachPlay = JSON.parse(historicalScores)
    
    localStorage.setItem("Initials1", newScores.initials)
    localStorage.setItem("Score1", userScore)
    console.log(newScores.initials)
}

}

startButton.onclick = startQuiz
