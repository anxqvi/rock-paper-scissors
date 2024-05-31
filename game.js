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
    const outcome = document.querySelector("#outcome");
    if (humanChoice == computerChoice) {
        outcome.textContent = `It\'s a draw! You both picked ${humanChoice}`;
        return;
    }

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            outcome.textContent = "You win! Rock beats scissors!";
            humanScore++;
            return;
        }
        else {
            outcome.textContent = "You lose! Paper beats rock!";
            computerScore++;
            return;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            outcome.textContent = "You win! Paper beats rock!";
            humanScore++;
            return;
        }
        else {
            outcome.textContent = "You lose! Scissors beats paper!";
            computerScore++;
            return;
        }
    }
    else {
        if (computerChoice == "paper") {
            outcome.textContent = "You win! Scissors beats paper!";
            humanScore++;
            return;
        }
        else {
            outcome.textContent = "You lose! Rock beats scissors!";
            computerScore++;
            return;
        }
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let humanWin = playRound(humanSelection, computerSelection);
    if (humanWin == "win") {
        humanScore += 1;
    }
    else if (humanWin == "lose") {
        computerScore += 1;
    }

    console.log(`Final Score - Human: ${humanScore} | Computer: ${computerScore}`);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = "button.id;"
        let score = document.querySelector("#score");
        playRound(humanChoice, computerChoice);
        if (humanScore != 5 && computerScore != 5) {
            score.innerText = `Score: Player = ${humanScore} | Computer = ${computerScore}`;
        }
        else if (humanScore == 5) {
            score.innerText = `You win! You reached 5 points!`;
            humanScore = 0, computerScore = 0
        }
        else {
            score.innerText = `You lose! The computer reached 5 points!`;
            humanScore = 0, computerScore = 0
        }
    });
});