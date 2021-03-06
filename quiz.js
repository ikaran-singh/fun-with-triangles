const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const outputEle = document.querySelector("#output");

const correctAnswers = ["90°", "right-angled"];


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    outputEle.innerText = "Your score is " + score;
}

submitButton.addEventListener('click', calculateScore);