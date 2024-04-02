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

function playGame() {
    let playerSelection;
    let computerSelection;
    let result;
    let winCount = 0;
    let loseCount = 0;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter choice of Rock, Paper, or Scissors: ");
        computerSelection = getComputerChoice();
        result = playRound(computerSelection, playerSelection);
        console.log(result);
        if (result.includes("win")) {
            winCount++;
        }
        else if (result.includes("lose")) {
            loseCount++;
        }
    }

    if (winCount > loseCount) {
        console.log("You win! Your final score is " + winCount);
        console.log("The computer's final score is " + loseCount);
    }
    else if(winCount === loseCount) {
        console.log("Draw! Your final score is " + winCount);
        console.log("The computer's final score is " + loseCount);
    }
    else {
        console.log("You lose! Your final score is " + winCount);
        console.log("The computer's final score is " + loseCount);
    }
}

playGame();