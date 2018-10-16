var dice, currentScore, netScore, activePlayer;
currentScore = 0;
netScore = 0;
activePlayer = 0;
document.querySelector('.btn-roll').addEventListener('click', function () {
    dice = Math.ceil(Math.random() * 6); //dice roll
    document.querySelector(".dice").src = 'dice-' + dice + '.png';
    if (dice != 1) {

    }
});