let answer = Math.floor((Math.random() * 20)+1);
let guess = 10;
let message = document.getElementById("check")
let displayScore = document.getElementById("score")
let displayAnswer = document.getElementById("number")
console.log(answer)
function result() {
    let userInput = (document.getElementById('userInput').value)
    if (!userInput) {
        message.textContent = "please enter the valid input"
    }
    else if (guess != 0) {
        if (userInput > answer) {
            message.textContent = "your answer is high"
            guess--
            displayScore.textContent = guess
        }
        else if (userInput < answer) {
            message.textContent = "your answer is low"
            guess--
            displayScore.textContent = guess
        }
        else if(userInput == answer) {
            message.textContent = " your are the win"
            displayScore.textContent = guess
            document.body.style.backgroundColor = "green";
            displayAnswer.textContent = answer;
        }
        
    }
    else {
        message.textContent = "your are lose the game";
        document.body.style.backgroundColor = "red";
        displayAnswer.textContent = answer;
    }
}
function reset(){
    answer = Math.floor((Math.random() * 20)+1);
    guess = 10;
    displayAnswer.textContent = "?";
    document.body.style.backgroundColor = "#222";
    console.log(answer)
    userInput.value = null
}