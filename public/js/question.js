// https://the-trivia-api.com/docs/#search
      
var questions = [];      
var currentQuestion = 0;

function startGame() {
          getQuestions()
          renderQuestions()
}

async function getQuestions() { 
    const fetchedQuestions = await fetch('https://the-trivia-api.com/api/questions?limit=20', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }); 
    questions = [fetchedQuestions]
    
    }

function renderQuestions() {
  var questionIndex = questions[currentQuestion];
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