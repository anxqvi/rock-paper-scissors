function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock";
    }
    else if (random == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if ((playerSelection.localCompare("paper") && computerSelection.localCompare("rock")) || 
    (playerSelection.localCompare("rock") && computerSelection.localCompare("scissors")) || 
    (playerSelection.localCompare("scissors") && computerSelection.localCompare("paper"))) {
        console.log('You Win! ${playerSelection} beats ${computerSelection}!');
        return 1
    }

    else if ((playerSelection.localCompare("paper") && computerSelection.localCompare("scissors")) || 
    (playerSelection.localCompare("rock") && computerSelection.localCompare("paper")) || 
    (playerSelection.localCompare("scissors") && computerSelection.localCompare("rock"))) {
        console.log('You Lose! ${playerSelection} loses to ${computerSelection}!');
        return -1
    }

    else if ((playerSelection.localCompare("paper") && computerSelection.localCompare("paper")) || 
    (playerSelection.localCompare("rock") && computerSelection.localCompare("rock")) || 
    (playerSelection.localCompare("scissors") && computerSelection.localCompare("scissors"))) {
        console.log('You Draw! ${playerSelection} draws with ${computerSelection}!');
        return 0
    }

    else {
        return "Invalid";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let check = 5;
    for (i = 0; i < check; i++) {
        let playerSelection = prompt("Please pick either: rock, paper or scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
        }
        else if (result == -1) {
            computerScore++;
        }
        else if (result == "Invalid") {
            check++;
            alert("Your input was invalid! Please insert either 'rock', 'paper', or 'scissors' without quotations.");
        }
    }

    if (playerScore > computerScore) {
        return console.log("Congratulations, you won!");
    }
    else if (computerScore > playerScore) {
        return console.log("Unfortunately, you lost!");
    }
    else {
        return console.log("It was a draw!");
    }
}