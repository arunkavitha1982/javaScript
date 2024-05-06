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

scissor.addEventListener('click', function () {
    let userMoveResId = 33;
    userMove.src = 'image/scissors.png';
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png'];

    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;

    let computerMovenumber = [22, 11, 33];
    let computerMoveId = computerMovenumber[random];
    compareMoves(userMoveResId, computerMoveId);
});

rock.addEventListener('click', function () {
    let userMoveResId = 11;
    userMove.src = 'image/rock.png';
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png'];

    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;

    let computerMovenumber = [22, 11, 33];
    let computerMoveId = computerMovenumber[random];
    compareMoves(userMoveResId, computerMoveId);
});

paper.addEventListener('click', function () {
    let userMoveResId = 22;
    userMove.src = 'image/paper.png';
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png'];
    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;

    let computerMovenumber = [22, 11, 33];
    let computerMoveId = computerMovenumber[random];
    compareMoves(userMoveResId, computerMoveId);
});

restartButton.addEventListener('click', function () {
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
        winner.innerText = "sda";
        if (userMoveResId == computerMoveResId) {
            winner.innerText = "It is equal";
        } else if (
            (userMoveResId == 33 && computerMoveResId == 22) ||
            (userMoveResId == 11 && computerMoveResId == 33) ||
            (userMoveResId == 22 && computerMoveResId == 11)
        ) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            winner.innerText = "";
        } else if ((computerMoveResId == 33 && userMoveResId == 22) ||
            (computerMoveResId == 11 && userMoveResId == 33) ||
            (computerMoveResId == 22 && userMoveResId == 11)) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            winner.innerText = "";
        }
    } else {
        if (playerScore == 4) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            winner.innerText = "🎉🎉You are the winner🎉🎉";
            userMove.src = 'image/img.png';
            computerMove.src = 'image/lose.png';
            
        } else if (computerScore == 4) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            winner.innerText = "🎉🎉Computer is the winner🎉🎉";
            computerMove.src = 'image/img.png';
            userMove.src = 'image/lose.png';
            scissor.disabled = true;
            paper.disabled = true;
            rock.disabled = true;
        }

    }
}
