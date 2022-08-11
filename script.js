const startButton = document.getElementById('startBtn')
// const nextButton = document.getElementById('nextBtn')
const questionContainerEl = document.getElementById('questionContainer')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answerBtn')


let randomQuestion, currentQuestionIndex = 0

startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     // nextQuestion()
// })


function startGame() {
    console.log("started");
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    showQuestion()
    // nextQuestion()
}

// function nextQuestion() {
//     // resetBox()
//     showQuestion()
// }

function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    questionEl.textContent = currentQuestion.question
    answerButtonEl.innerHTML = ""
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.getAttribute.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
        console.log(showQuestion);
    });
}

// function resetBox() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while (answerButtonEl.firstChild) {
//         answerButtonEl.removeChild
//         (answerButtonEl.firstChild)
//     }
// }

function selectAnswer() {
    if ( 
        this.value == questions[currentQuestionIndex].true
    ) {
    document.getElementById("body").classList.add("correct")
    } else (
        document.getElementById("body").classList.add('wrong')
    )

    // const selectedButton = e.target
    // const correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    // Array.from(answerButtonEl.children).forEach(button => {
    //   setStatusClass(button, button.dataset.correct)
    // })
    // if (randomQuestion.length > currentQuestionIndex ++) {
    // //   nextButton.classList.remove('hide')
    // } else {
      
    //   startButton.classList.remove('hide')
    // }
    currentQuestionIndex++ 
    if (currentQuestionIndex = questions.length) {
        endQuiz()
    
    } else (
        showQuestion()
    )
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function endQuiz() {
    startButton.innerText = 'Restart'

}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



// Questions//
const questions = [ {
    question: "Commonly used data types DO NOT include:",
    answers: [
       { text: "strings", }, 
       { text: "booleans", }, 
       { text: "alerts",  }, 
       { text: "numbers", },
    
    ],
    true: "alerts",
    },

   { question: "The condition in an if / else statement is enclosed within ____.",
    answers: [
        { text: "quotes", },
        { text: "curly brackets", }, 
        { text: "parentheses",  }, 
        { text: "square  brackets", }
    ], 
    true: "parentheses",
   },
    {question: "Arrays in Javascript can be used to store ____.",
    answers: [
        { text: "numbers and strings", }, 
        { text: "other arrays", }, 
        { text: "booleans", }, 
        { text: "all of the above", }],
    true: "all of the above",
    },

   { question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
        { text: "commas",}, 
        { text: "curly brackets", }, 
        { text: "quotes", }, 
        { text: "parenthesis",}],
      true: "quotes",
    },

    {question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: "Javascript", }, 
        { text: "terminal / bash",}, 
        { text: "for loops", }, 
        { text: "console log", }],
        true: "console log",
    },
    ];

console.log(questions);