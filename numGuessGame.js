let answer = Math.floor((Math.random() * 20)+1);
let guess = 9;
let message = document.getElementById("check");
let displayScore = document.getElementById("score");
let displayAnswer = document.getElementById("number");
let restartGame = document.getElementById("againBtn"); 
restartGame.disabled = true;
function result() {    
    let userInput = (document.getElementById('userInput').value);
    if (!userInput) {
        message.textContent = "please enter the valid input";
    }
    else if (guess != 0) {
        if (userInput > answer) {
            message.textContent = "your answer is high";            
            displayScore.textContent = guess;
            guess--;
        }
        else if (userInput < answer) {
            message.textContent = "your answer is low";            
            displayScore.textContent = guess;
            guess--;
        }
        else if(userInput == answer) {
            message.textContent = " your are the win";
            displayScore.textContent = guess;
            document.body.style.backgroundColor = "green";
            displayAnswer.textContent = answer;
            restartGame.disabled = false;
        }        
    }
    else{        
        displayScore.textContent = guess;
        message.textContent = "your are lose the game";
        document.body.style.backgroundColor = "red";
        displayAnswer.textContent = answer;
        restartGame.disabled = false;
    }
}

function reset(){
    answer = Math.floor((Math.random() * 20)+1);
    guess = 10;
    displayAnswer.textContent = "?";
    document.body.style.backgroundColor = "#222";
    message.textContent = "Start guessing...";
    displayScore.textContent = guess;
    userInput.value = null;
    restartGame.disabled = true;
    guess--
}