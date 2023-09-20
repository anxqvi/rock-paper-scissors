function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
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
        return 'You Win! ${playerSelection} beats ${computerSelection}!';
    }

    else if ((playerSelection.localCompare("paper") && computerSelection.localCompare("scissors")) || 
    (playerSelection.localCompare("rock") && computerSelection.localCompare("paper")) || 
    (playerSelection.localCompare("scissors") && computerSelection.localCompare("rock"))) {
        return 'You Lose! ${playerSelection} loses to ${computerSelection}!';
    }

    else if ((playerSelection.localCompare("paper") && computerSelection.localCompare("paper")) || 
    (playerSelection.localCompare("rock") && computerSelection.localCompare("rock")) || 
    (playerSelection.localCompare("scissors") && computerSelection.localCompare("scissors"))) {
        return 'You Draw! ${playerSelection} draws with ${computerSelection}!';
    }

    else {
        return "You have inputted an invalid selection";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));