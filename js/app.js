var scores, roundScore, activePlayer, gamePlaying;

init();
var lastDice; 

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1. Ramndom Nmber
            var dice1 = Math.floor(Math.random() * 6) + 1;
            var dice2 = Math.floor(Math.random() * 6) + 1;

        // Display the result
            document.getElementById('dice-1').style.display = 'block';
            document.getElementById('dice-2').style.display = 'block';
            document.getElementById('dice-1').src = 'img/dice-' + dice1 + '.png';
            document.getElementById('dice-2').src = 'img/dice-' + dice2 + '.png';

        // Update the roundscore only if the number is not a 1

        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;

            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
        //Next player
        nextPlayer();
        }

        // if (dice1 !== 1 && dice2 !== 1) {
        //     //Add score
        //     roundScore += dice;
        //     document.querySelector('#current--' + activePlayer).textContent = roundScore;
        // } else {
        // //Next player
        // nextPlayer();
        // }
        // lastDice = dice;
    }

});



document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //Update the user interface
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winnigScore;
        //undefined, 0, Null or "" are type COERCED to false 
        if( input){
            winnigScore = input;
        } else {
            winnigScore = 100;
        }
        //Check if the player won the game
        if(scores[activePlayer] >= winnigScore){
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('winner!');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying = false;
        } else{
            //Next player
            nextPlayer();
        }
    }
});


   
function nextPlayer () {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
                
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';


}

document.querySelector('.btn--new').addEventListener('click',init);

function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'player 1';
document.getElementById('name--1').textContent = 'player 2';
document.querySelector('.player--0').classList.remove('winner!');
document.querySelector('.player--1').classList.remove('winner!');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
}











