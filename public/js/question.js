// https://the-trivia-api.com/docs/#search
var question = document.querySelector("#question");

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
    .then(
        (fetchedQs) => {
    questions = fetchedQs
    // var answers = [questions[0][1].incorrectAnswers + "," + questions[0][1].correctAnswer]
    console.log(questions)
    // console.log(fetchedQs[1].question)
    renderQuestions(fetchedQs)
});

    }
getQuestions()

function renderQuestions(fetchedQs) {
    var questionIndex = fetchedQs[currentQuestion];
    console.log(questionIndex.question);
    question.textcontent = questionIndex.question;

            // console.log(fetchedQs.length)
            // var qArr = questions[0];
        // var answers = [qArr[i].incorrectAnswers + "," + qArr[i].correctAnswer];
        // var questionIndex = qArr[i];

        // btns.innerHTML = "";
        // questionIndex.answers.forEach(answer => {
        //     var button = docuemnt.createElement("button");
        //     button.setAttribute("class", "btn")
        //     button.setAttribute("value", answer)
        //     button.textContent = answer;
        // })

    }



// var startBtn = document.querySelector(".start-button");
// var timerEl = document.querySelector(".timer-count");
// var startContainer = document.querySelector(".start-container");
// var questionContainer = document.querySelector(".question-container");
// var question = document.querySelector("#question");
// var btns = document.querySelector("#btns");
// var scoreContainer = document.querySelector(".score-container");
// var finalScore = document.querySelector("#final-score")
// var inputEl = document.querySelector("#name-input")
// var submitBtn = document.querySelector("#submit-btn")
// var timer;
// var timerCount = 60
// var currentQuestion = 0;
//   startContainer.style.display = 'none';
//   questionContainer.style.display = 'block';

//   question.textContent = questionIndex.question;
//   btns.innerHTML = "";
//   questionIndex.answers.forEach(answer => {
//     var button = document.createElement("button");
//     button.setAttribute("class", "btn")
//     button.setAttribute("value", answer)
//     button.textContent = answer;
//     button.onclick = checkAnswer;
//     btns.appendChild(button);
//       })
    

// var checkAnswer = function() {
//       if (this.value !== quizQuestions[currentQuestion].correct) {
//         timerCount -=10;
//         timerEl.textContent = "Timer: " + timerCount;
//       } else {
//       } 
// currentQuestion++;
//       if (currentQuestion === quizQuestions.length) {
//         endQuiz()
//       } else {
//         renderQuestions()
//       }
//     }