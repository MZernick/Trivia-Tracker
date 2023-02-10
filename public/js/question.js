// https://the-trivia-api.com/docs/#search
// import fetch from 'cross-fetch';
var questions = [];      
var currentQuestion = 0;

// function startGame() {
//           getQuestions()
//           renderQuestions()
// }

async function getQuestions() { 
    const fetchedQs = await fetch('https://the-trivia-api.com/api/questions?limit=20', {
        // method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then ((response) => 
    response.json())
    .then((fetchedQs) => {
    questions = [fetchedQs]
    var answers = [questions[0][1].incorrectAnswers + "," + questions[0][1].correctAnswer]
    console.log(questions)
    console.log(questions[0][1].question)
    console.log(answers)
})
    }
getQuestions()


function renderQuestions() {
    for (var i = 0; i < questions[0].length; i++) {
        var qArr = questions[0];
        var answers = [qArr[i].incorrectAnswers + "," + qArr[i].correctAnswer];
        var questionIndex = questions[currentQuestion];

        "handlebars question ./#".textcontent = qArr[i].question
        btns.innerHTML = "";
        questionIndex.answers.forEach(answer => {
            var button = docuemnt.createElement("button");
            button.setAttribute("class", "btn")
            button.setAttribute("value", answer)
            button.textContent = answer;
        })

    }
}
  startContainer.style.display = 'none';
  questionContainer.style.display = 'block';

  question.textContent = questionIndex.question;
  btns.innerHTML = "";
  questionIndex.answers.forEach(answer => {
    var button = document.createElement("button");
    button.setAttribute("class", "btn")
    button.setAttribute("value", answer)
    button.textContent = answer;
    button.onclick = checkAnswer;
    btns.appendChild(button);
      })
    }

var checkAnswer = function() {
      if (this.value !== quizQuestions[currentQuestion].correct) {
        timerCount -=10;
        timerEl.textContent = "Timer: " + timerCount;
      } else {
      } 
currentQuestion++;
      if (currentQuestion === quizQuestions.length) {
        endQuiz()
      } else {
        renderQuestions()
      }
    }