var questionEl = document.querySelector("#question");
var scoreEl = document.querySelector("#score");
var btns = document.querySelector("#btns");
var questions = [];      
var currentQuestion = 0;
var scoreCount = 0



async function getQuestions() { 
    const fetchedQs = await fetch('https://the-trivia-api.com/api/questions?limit=3', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then ((response) => 
    response.json())
    .then((fetchedQs) => {
            questions = fetchedQs
            console.log(questions)
            renderQuestions(questions)
    })
    }

function shuffleArray(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
    
            var j = Math.floor(Math.random() * (i + 1));
    
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
var correct;
function renderQuestions() {
    scoreEl.textContent = "Score: " + scoreCount;
    var questionIndex = questions[currentQuestion];
    correct = questionIndex.correctAnswer
    console.log(questions[currentQuestion].correctAnswer)
    questionEl.textContent = questionIndex.question
    var answers = questionIndex.incorrectAnswers;
    answers.push(questionIndex.correctAnswer);
    var randomAnswers = shuffleArray(answers)

    btns.innerHTML = "";
    randomAnswers.forEach(answer => {
        var button = document.createElement("button");
        button.setAttribute("class", "text-center rounded-pill answer-btn")
        button.setAttribute("style", "background-color: #7FFF00;")
        button.setAttribute("value", answer)
        button.textContent = answer;
        button.onclick = checkAnswer;
        btns.appendChild(button);
        },
        )
}

var checkAnswer = function() {

    if (this.value !== questions[currentQuestion].correctAnswer) {
    console.log("incorrect"),
    currentQuestion++;
    //   timerCount -=10;
    //   timerEl.textContent = "Timer: " + timerCount;
    } else {
        scoreCount += 100,
        scoreEl.textContent = "Score: " + scoreCount;
        currentQuestion++;
    }

    if (currentQuestion === questions.length) {
        
        console.log("game over")
        console.log(scoreCount)
    const response = fetch('/api/score/newscore', {
      method: 'POST',
      body: JSON.stringify({ game_score:scoreCount }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
    if (response.ok) {
        document.location.replace('/profile');
      }
    } else {
      renderQuestions()
    }
  }

getQuestions()