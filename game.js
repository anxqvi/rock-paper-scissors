let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, scissors, shoot! What do you pick?").toLowerCase();
    while(!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid input! Rock, paper, scissors, shoot again! What do you pick?").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It\'s a draw! You both picked ${humanChoice}`);
        return;
    }

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
            return "win";
        }
        else {
            console.log("You lose! Paper beats rock!");
            return "lose";
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
            return "win";
        }
        else {
            console.log("You lose! Scissors beats paper!");
            return "lose";
        }
    }
    else {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper!");
            return "win";
        }
        else {
            console.log("You lose! Rock beats scissors!");
            return "lose";
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let humanWin = playRound(humanSelection, computerSelection);
        if (humanWin == "win") {
            humanScore += 1;
        }
        else if (humanWin == "lose") {
            computerScore += 1;
        }
    }
    console.log(`Final Score - Human: ${humanScore} | Computer: ${computerScore}`);
}