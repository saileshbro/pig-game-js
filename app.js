var dice, currentScore, netScore, activePlayer;
currentScore = 0;
netScore = 0;
activePlayer = 0;
document.querySelector('.btn-roll').addEventListener('click', function () {
    dice = Math.ceil(Math.random() * 6); //dice roll
    document.querySelector(".dice").src = 'dice-' + dice + '.png';
    if (dice != 1) {
        currentScore += dice;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
    if (dice === 1) {
        currentScore = 0;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector(".dice").style.display = 'none';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
});