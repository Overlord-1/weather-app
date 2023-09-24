'use strict';
//generate a random number that is going to be checked
const secretNumber = Math.floor(Math.random()*20)+1;
console.log(`Secret number  = ${secretNumber}`);
document.querySelector('.reset').addEventListener('click',function(){
    document.querySelector('.guess').value = "";
})


document.querySelector('.again').addEventListener('click',function(){
    // window.location.reload();
    document.querySelector('.someRandomClassNameBecasueYouForgotToNameThis').textContent = "Guess My Number!"
    document.querySelector('.number').textContent = "?"; 
    document.querySelector('.number').style.width  = "15rem"; 
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.someRandomClassNameBecasueYouForgotToNameThis').style.color = "#eee";
    liveScore = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    // document.querySelector(0)
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = liveScore; 




})

let liveScore = 20;
let highScore = 0;
document.querySelector('.score').textContent = liveScore; 
// document.querySelector('.highscore').textContent = highScore; 



    //folowong code
    document.querySelector('.check').addEventListener('click',function () {
        let number  = Number(document.querySelector('.guess').value);
        console.log(`number  = ${number}`);
        if(liveScore!=1)
        {
            if(number>secretNumber)
            {
                makeChanges(0);
                liveScore--;
                document.querySelector('.score').textContent = liveScore; 
            }
        
            else if(number === secretNumber)
            {
               makeChanges(2);
                document.querySelector('.number').textContent = secretNumber; 
                document.querySelector('.number').style.width  = "500px"; 
                if(liveScore>highScore)
                {
                    highScore = liveScore;
                    document.querySelector('.highscore').textContent = highScore;

                }
                    
            }
            else
            {
                liveScore--;
                document.querySelector('.score').textContent = liveScore; 
                makeChanges(1);
    
            }

        }

        else 
        {       
            document.querySelector('body').style.backgroundColor = "red";
            document.querySelector('.someRandomClassNameBecasueYouForgotToNameThis').textContent = "GAME OVER"
            document.querySelector('.someRandomClassNameBecasueYouForgotToNameThis').style.color = "black"

        }
         
            
        
    })




function makeChanges(controller)
{

    switch(controller)
    {
        case 0:
            document.querySelector('.message').textContent = "Too high !";
            break;
        case 1:
            document.querySelector('.message').textContent = "Too low !";
            break;
        case 2:
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.message').textContent = "correct answer !!";
            
            break;

    }
}

