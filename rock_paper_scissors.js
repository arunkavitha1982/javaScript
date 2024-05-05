let playerScore = 0;
let computerScore = 0;
let scissor = document.getElementById('scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let userMove = document.getElementById('user_move_img');
let computerMove = document.getElementById('computer_move_img');
let displayPlayerScore = document.getElementById('player_score');
let displayComputerScore = document.getElementById('computer_score');
let winner = document.getElementById('winner');
let restartButton = document.getElementById('restart');

scissor.addEventListener('click', function() {
    let userMoveResId = 'scissor';
    userMove.src = 'image/scissors.png'; 
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png'];
    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;
    compareMoves(userMoveResId, computerMoveResId);
});

rock.addEventListener('click', function() {
    let userMoveResId = 'rock';
    userMove.src = 'image/rock.png';
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png']; 
    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;
    compareMoves(userMoveResId, computerMoveResId);
});

paper.addEventListener('click', function() {
    let userMoveResId = 'paper'; 
    userMove.src = 'image/paper.png'; 
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png'];
    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;
    compareMoves(userMoveResId, computerMoveResId);
});

restartButton.addEventListener('click', function() {
    userMove.src = 'image/you.png'; 
    computerMove.src = 'image/question_mark.png';
    playerScore = 0;
    computerScore = 0;
    winner.innerText = "";
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    scissor.disabled = false;
    paper.disabled = false;
    rock.disabled = false;
});

function compareMoves(userMoveResId, computerMoveResId) {
    if (playerScore < 4 && computerScore < 4) {
        winner.innerText = "";
        if (userMoveResId == computerMoveResId) {
            winner.innerText = "It is equal";
        } else if (
            (userMoveResId ==='scissor' && computerMoveResId === 'paper') ||
            (userMoveResId === 'rock' && computerMoveResId === 'scissor') ||
            (userMoveResId === 'paper' && computerMoveResId === 'rock')
        ) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            winner.innerText = "";
        } else if ((computerMoveResId === 'scissor' && userMoveResId === 'paper') ||
            (computerMoveResId === 'rock' && userMoveResId === 'scissor') ||
            (computerMoveResId === 'paper' && userMoveResId === 'rock')) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            winner.innerText = "";
        }
    } else {
        if (playerScore == 4) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            winner.innerText = "🎉🎉You are the winner🎉🎉";
            userMove.src = 'image/img.jpg';
            computerMove.src = 'image/question_mark.png';
        } else if (computerScore == 4) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            winner.innerText = "🎉🎉Computer is the winner🎉🎉";
            computerMove.src = 'image/img.jpg';
            userMove.src = 'image/lose.jpg'; // Replace 'image/lose.jpg' with the actual path to loser image
        }
        scissor.disabled = true;
        paper.disabled = true;
        rock.disabled = true;
    }
}
