var dice, currentScore, netScore, activePlayer;

currentScore = 0;
netScore = [0, 0];
activePlayer = 0;
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
    document.getElementById('score-' + activePlayer).textContent = netScore[activePlayer];
    document.getElementById('current-' + activePlayer).textContent = currentScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
});