let answer = Math.floor((Math.random() * 50) + 1);
let guess = 14;
let attemot = 1;
let winner = 0;
let message = document.getElementById("status");
let displayScore = document.getElementById("attemptcounter");
let checkBoxInput = document.getElementById("number");
let guesscounter = document.getElementById("guesscounter");
let win = document.getElementById("scorecounter");
let displayImage = document.getElementById("result");
let displayAnswer = document.getElementById("nomoreattempts");
document.getElementById("other").style.display = "none";
let sound = document.getElementById('backgroundSound');
console.log(answer);

function result() {
    let userInput = (document.getElementById('guess').value);
    if (!userInput) {
        alert("please enter the valid input");
    }
    else if (guess != 0) {
        if (userInput > answer) {
            sound.src = "image/Buzzer sound effect.mp3";
            sound.play();
            displayImage.style.backgroundImage = "url(image/plane.webp)";
            message.textContent = "Too High...Guess Lower";
            displayScore.textContent = guess + "/15";
            guess--;
            guesscounter.textContent += " " + userInput + ",";
        }
        else if (userInput < answer) {
            sound.src = "image/Buzzer sound effect.mp3";
            displayImage.style.backgroundImage = "url(https://cdn3.vectorstock.com/i/1000x1000/65/47/low-symbol-vector-1746547.jpg)";
            message.textContent = "Too Low...Guess Higher";
            displayScore.textContent = guess + "/15";
            guesscounter.textContent += " " + userInput + ",";
            guess--;            
        }
        else {
            sound.src ="image/success-fanfare-trumpets-6185.mp3";
            message.textContent = "Well Done. You Correctly Guessed That The Number Was " + answer + " . Try Another Number.";
            message.style.fontSize = '16px';
            displayScore.textContent = guess;
            guesscounter.textContent += " " + userInput + ",";
            displayScore.textContent = guess + "/15";
            displayImage.style.backgroundImage = 'url(image/winners-trophy-clip-art.jpg)'
            winner++;
            win.textContent = winner;
            document.getElementById("streakcounter").textContent = guess + 1;
            document.getElementById("other").style.display = "block";
            document.getElementById("submit").style.display = "none";
            document.getElementById('guess').style.display = "none";
            document.getElementById('giveup').style.display = "none";
        }
    }
    else {
        displayAnswer.textContent = "You Ran Out Of Attempts. The Number Was " + answer + ". Try Another Number.";
        displayAnswer.style.backgroundColor = "red";
        displayImage.style.backgroundImage = "url(image/loserImage.avif)";
        displayScore.textContent = guess;
        message.textContent = "your are lose the game";
        document.getElementById("other").style.display = "block";
        document.getElementById("submit").style.display = "none";
        document.getElementById('guess').style.display = "none";
        document.getElementById('giveup').style.display = "none";
        checkBoxInput.style.display = "none";
        checkBoxInput.textContent = answer;
        restartGame.disabled = false;
        winner++;
        win.textContent = winner;
    }
}

function reset() {
    answer = Math.floor((Math.random() * 50) + 1);
    guess = 15;
    displayScore.textContent = guess + "/15";
    document.body.style.backgroundColor = "orange";
    guesscounter.textContent = "";
    message.textContent = "Try To Guess The Whole Number Between 0 And 50.";
    message.style.fontSize = '16px';
    console.log(answer);
    displayImage.style.backgroundImage = "url(image/question-mark.webp)";
    document.getElementById('guess').value = null;
    guess--;
    document.getElementById("other").style.display = "none";
    document.getElementById("submit").style.display = "block";
    document.getElementById('guess').style.display = "block";
    document.getElementById('giveup').style.display = "block";
    displayAnswer.textContent = "";
    displayAnswer.style.backgroundColor = "orange";
    win.textContent = winner;
}

function giveup() {
    message.style.fontSize = '16px';
    message.textContent = "Did You Give Up? You Did Not Make Any Attempt To Guess The Number. Anyway, The Number Was " + answer + ". Try Another Number.";
    document.getElementById("other").style.display = "block";
    document.getElementById("submit").style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('giveup').style.display = "none";
}
