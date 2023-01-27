//Button declaration to start round
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.getAttribute('value');
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});

//declare scores to track 
let playerScoreValue = 0;
let computerScoreValue = 0;

const playerScore = document.querySelector("div.plyScore");
const computerScore = document.querySelector("div.compScore");
const winner = document.querySelector("div.winner");

//Get a randomised rps choice from computer
function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);
    return x === 0 ? "rock"
        : x === 1 ? "paper"
            : x === 2 ? "scissors"
                : "An error has occured";
}

function playRound(playerSelection, computerSelection) {

    const plySelection = document.querySelector("div.playerChoice");
    const compSelection = document.querySelector("div.computerChoice");
    const result = document.querySelector("div.result");

    plySelection.textContent = "\nPlayer Selection: " + playerSelection;
    compSelection.textContent = "\nComputer Selection: " + computerSelection;

    //win
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result.textContent = "Results: You Win! Rock beats scissors!";
        gameScore("win");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "Results: You Win! Paper beats rock!";
        gameScore("win");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result.textContent = "Results: You Win! Scissors beats paper!";
        gameScore("win");
    }
    //lose
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent = "Results: You Lose! Paper beats rock!";
        gameScore("lose");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result.textContent = "Results: You Lose! Scissors beats paper!";
        gameScore("lose");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result.textContent = "Results: You Lose! Rock beats scissors!";
        gameScore("lose");
    }
    //draw
    else if (playerSelection == "rock" && computerSelection == "rock") {
        result.textContent = "Results: Rock and Rock is a draw!";
        return "draw";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result.textContent = "Results: Paper and Paper is a draw!";
        return "draw";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.textContent = "Results: Scissors and Scissors is a draw!";
        return "draw";
    }
    else {
        console.log("Error occured in play round");
        console.log(playerSelection);
    }

}


function gameScore(result) {

     
    if (result === "win") {
        playerScoreValue++;
        
    } else if (result === "lose") {
        computerScoreValue++;
        
    } else if (result === "draw") {
        return "draw";

    } else {
        console.log("result error");
        
    }
    
    playerScore.textContent = "\nPlayer Score: " + playerScoreValue;
    computerScore.textContent = "\nComputer Score: " + computerScoreValue;
           
    if (playerScoreValue === 5) {
        playerScoreValue = 0;
        computerScoreValue = 0;
        winner.textContent = "Player won 5 rounds, so player wins!";

    } else if (computerScoreValue === 5) {
        playerScoreValue = 0;
        computerScoreValue = 0;
        winner.textContent = "Computer won 5 rounds, so player wins!";
    } 

}






