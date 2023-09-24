'use-strict';
// let currentScoreLeft,currentScoreRight, totalScoreLeft,totalScoreRight  = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const diceElement = document.querySelector('.dice');
let currentPlayer  =0;

let gameNotOver = true;

//initial conditions 
currentScore0.textContent = 0;
currentScore1.textContent = 0;
score0.textContent = 0;
score1.textContent = 0;
diceElement.classList.add('hidden');
let scoreSum = 0;

let scores = [0,0];
//when roll dice is clicked 

btnRoll.addEventListener('click',function(){

    if(gameNotOver)
    {
        const dice = Math.floor((Math.random()*6)+1);
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;
        if(dice!=1)
        {
          scoreSum+=dice;
           document.getElementById(`current--${currentPlayer}`).textContent = scoreSum;
         // currentScore0.textContent = scoreSum;
        
         }
    else
    {
        //if the dice rolls 1
        scoreSum = 0;
        document.getElementById(`current--${currentPlayer}`).textContent = scoreSum;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        currentPlayer = currentPlayer===1?0:1;
    }        
    }


    
    
    
    
    
});

btnHold.addEventListener('click',function()
{
    if(gameNotOver)
    {
        console.log(scores);
    scores[currentPlayer] += scoreSum;
    console.log(scores,currentPlayer);
    document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer];
    scoreSum = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =scoreSum ;
    if(scores[currentPlayer] >=20)
    {
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        btnHold.classList.add('disabled');

        
    }
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    currentPlayer = currentPlayer===1?0:1;


    }


    
    
    
    
   
});




