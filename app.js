var dice, currentScore, netScore, activePlayer;
var maxValue;
currentScore = 0;
netScore = [0, 0];
activePlayer = 0;

var playerOne = prompt("Enter #1 name.");
var playerTwo = prompt("Enter #2 name.");
var maxValue = prompt("Enter game win value");

document.getElementById('name-0').textContent = playerOne;
document.getElementById('name-1').textContent = playerTwo;
document.querySelector(".dice").src = 'dice-0.gif';
document.querySelector('.btn-roll').addEventListener('click', function () {
    dice = Math.ceil(Math.random() * 6); //dice roll
    document.querySelector(".dice").src = 'dice-' + dice + '.png';
    if (dice != 1) {
        currentScore += dice;
        document.querySelector(".dice").style.display = 'block';
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
    if (dice === 1) {

        document.getElementById('current-' + activePlayer).textContent = currentScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }

    }
});
document.querySelector('.btn-hold').addEventListener('click', function () {
    netScore[activePlayer] += currentScore;
    currentScore = 0;
    if (netScore[activePlayer] < maxValue) {
        document.getElementById('score-' + activePlayer).textContent = netScore[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = currentScore;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    } else {
        document.getElementById('score-' + activePlayer).textContent = netScore[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = currentScore;
        document.getElementById("name-" + activePlayer).style.color = "#eb4d4d";
        document.getElementById("name-" + activePlayer).style.fontWeight = 'bold';
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
    }

    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

});
document.querySelector(".btn-new").addEventListener('click', newGame);

function newGame() {
    currentScore = 0;
    netScore = [0, 0];
    activePlayer = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector(".dice").src = 'dice-0.gif';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}