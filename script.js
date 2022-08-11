// Questions//
const questions = [ {
    question: "Commonly used data types DO NOT include:",
        answers: [
       { text: "strings", correct: false}, { text: "booleans", correct: false }, { text: "alerts", correct: true }, { text: "numbers", correct: false },
    ],
    question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
        { text: "quotes", correct: false}, { text: "curly brackets", correct:false }, { text: "parentheses", correct:true }, { text: "square  brackets", correct: false }
    ], 
    
    question: "Arrays in Javascript can be used to store ____.",
        answers: [
        { text: "numbers and strings", correct: false}, { text: "other arrays", correct: false}, { text: "booleans", correct: false}, { text: "all of the above", correct: true }],
    
    question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
        { text: "commas", correct: false}, { text: "curly brackets", correct: false}, {text: "quotes", correct: true}, { text: "parenthesis", correct: false}],
      
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: "Javascript", correct: false}, { text: "terminal / bash", correct: false}, { text: "for loops", correct: false}, { text: "console log", correct: true}],
    }]

console.log(questions);

const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const questionContainerEl = document.getElementById('questionContainer')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answerBtn')


let randomQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
    console.log("started");
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    reset()
    showQuestion(randomQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.answer = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    });
}

function reset() {
    nextBtn.classList.add('hide')
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}

function selectAnswer(e) {

}













