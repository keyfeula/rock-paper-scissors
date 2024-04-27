let playerScore = 0;
let computerScore = 0;

const div = document.querySelector("#container");
const resultDiv = document.querySelector(".result");

div.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const buttonID = event.target.id;
        let playerSelection;
        let computerSelection = getComputerChoice();
        let roundResult;

        switch (buttonID) {
            case "rockBtn":
                playerSelection = "Rock";
                break;
            case "paperBtn":
                playerSelection = "Paper";
                break;
            case "scissorsBtn":
                playerSelection = "Scissors";
                break;
        }
        roundResult = playRound(computerSelection, playerSelection);
        resultDiv.innerText = roundResult;
    }
})

function getComputerChoice() {
    //Generates a random number between 1-3 (inclusive)
    let randomNum = Math.floor((Math.random() * 3) + 1);
    let computerChoice;
    
    switch (randomNum) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function playRound(computerSelection, playerSelection) {
    let result;

    //Determine result of round based on player choice vs computer choice
    if (playerSelection === computerSelection) {
        result = `Draw!
        Player Score: ${playerScore}
        Computer Score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = `You win! Rock beats Scissors
        Player Score: ${++playerScore}
        Computer Score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = `You lose! Paper beats Rock 
        Player Score: ${playerScore}
        Computer Score: ${++computerScore}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = `You win! Scissors beats Paper 
        Player Score: ${++playerScore}
        Computer Score: ${computerScore}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = `You lose! Rock beats Scissors 
        Player Score: ${playerScore}
        Computer Score: ${++computerScore}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = `You win! Paper beats Rock
        Player Score: ${++playerScore}
        Computer Score: ${computerScore}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = `You lose! Scissors beats Paper
        Player Score: ${playerScore}
        Computer Score: ${++computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        result = gameOver();
    }

    return result;
}

function gameOver() {
    let gameOverMsg;
    if (playerScore > computerScore) {
        gameOverMsg = `You win! Your final score is: ${playerScore} 
        The computer's final score is: ${computerScore}`;
    }
    else {
        gameOverMsg = `You lose! Your final score is: ${playerScore} 
        The computer's final score is: ${computerScore}`;
    }

    playerScore = 0;
    computerScore = 0;

    return gameOverMsg;
}