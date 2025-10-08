let playerScore = 0;
let computerScore = 0;

function play(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else if (
        (playerChoice === 'rock' && 
        computerChoice === 'scissors') || 
        (playerChoice === 'paper' && 
        computerChoice === 'rock') || 
        (playerChoice === 'scissors' && 
        computerChoice === 'paper')
        ){
            result = 'You win!';
            playerScore++;
        }
    else{
            result = 'You loose!';
            computerScore++;
        }
        document.getElementById('result').innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}. <h2>${result} </h2>`;
        document.getElementById('score').innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
        }


function pop(){
    document.getElementById('sideNote').style.display = 'block';
}