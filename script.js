function getComputerChoice () {
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
    //Format player selection string to match the computer selection string
    playerSelection = playerSelection.at(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    let result;

    //Determine result of round based on player choice vs computer choice
    if (playerSelection === computerSelection) {
        result = "Draw!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "You win! Rock beats Scissors";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You lose! Paper beats Rock";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "You win! Scissors beats Paper";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You lose! Rock beats Scissors";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "You win! Paper beats Rock";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You lose! Scissors beats Paper";
    }

    return result;
}