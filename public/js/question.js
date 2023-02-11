var questionEl = document.querySelector("#question");

var questions = [];      
var currentQuestion = 0;
var score = 0

async function getQuestions() { 
    const fetchedQs = await fetch('https://the-trivia-api.com/api/questions?limit=20', {
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

    var questionIndex = questions[currentQuestion];
    console.log(questionIndex.question);
    correct = questionIndex.correctAnswer

    questionEl.textContent = questionIndex.question
    var answers = questionIndex.incorrectAnswers;
    answers.push(questionIndex.correctAnswer);
    console.log(answers)
    var randomAnswers = shuffleArray(answers)
    console.log(randomAnswers)
    btns.innerHTML = "";
    randomAnswers.forEach(answer => {
        var button = document.createElement("button");
        button.setAttribute("class", "text-center rounded-pill answer-btn")
        button.setAttribute("style", "background-color: #389393;")
        button.setAttribute("value", answer)
        button.textContent = answer;
        button.onclick = checkAnswer;
        btns.appendChild(button);
        },
        )
}

var checkAnswer = function() {
    console.log(questions[currentQuestion].correctAnswer)
    if (this.value !== questions[currentQuestion].correctAnswer) {
    console.log("incorrect"),
    currentQuestion++;
    //   timerCount -=10;
    //   timerEl.textContent = "Timer: " + timerCount;
    } else {
        console.log("correct"),
        currentQuestion++;
    }

    if (currentQuestion === questions.length) {
        console.log("game over")
        //   endQuiz()
    } else {
      renderQuestions()
    }
  }
getQuestions()