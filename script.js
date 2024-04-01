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