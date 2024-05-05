let dices;
let playscore = 0
let player1Score = document.getElementById('score--0')
let player2Score = document.getElementById('score--1')
let currentPlay1Score = document.getElementById('current--0')
let currentPlay2Score = document.getElementById('current--1')



function changeRandomImage() {
    let imageUrls = ["image/dice-1.png", "image/dice-2.png", "image/dice-3.png", "image/dice-4.png", "image/dice-5.png", "image/dice-6.png"];
    let randomIndex = Math.floor(Math.random() * 5)+1;
    let img = document.getElementById("displayImage");
    img.src = imageUrls[randomIndex];
    // document.body.appendChild(displayedImage)
    playscore += currentPlay1Score.textContent = randomIndex+1
    currentPlay1Score.textContent = playscore
}

document.getElementById('hold').addEventListener('click',function(){
    player1Score.textContent = playscore
})