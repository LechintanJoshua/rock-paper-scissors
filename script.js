let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    return Math.floor(Math.random() * 100);
}

function getHumanChoice () {
    let humanChoice = prompt("Choose: ");

    while (humanChoice == null || !validAnswer(humanChoice)) {
        humanChoice = prompt("Wrong input, choose again: ");
    }

    return humanChoice.toLowerCase();
}

function validAnswer (humanChoice) {
    if (humanChoice.toLowerCase() != "rock" 
    && humanChoice.toLowerCase() != "paper" 
    && humanChoice.toLowerCase() != "scissors") {
        return false;
    }

    return true;
}

function convertComputerChoice () {
    let computerChoice = getComputerChoice();

    if (computerChoice >= 0 && computerChoice < 33) {
        computerChoice = "rock";
    } else if (computerChoice >= 33 && computerChoice < 66) {
        computerChoice == "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function applyRules (humanChoice, computerChoice) {
    if (humanChoice != computerChoice) {
        if ((humanChoice == "rock" && computerChoice == "scissors") || 
            (humanChoice == "paper" && computerChoice == "rock") || 
            (humanChoice == "scissors" && computerChoice == "paper")) {
                ++humanScore;
            } else {
                ++computerScore;
            }
    }
}

function playRound () {
    const computerChoice = convertComputerChoice();
    const humanChoice = getHumanChoice();

    applyRules(humanChoice, computerChoice);
}

function gameLoop () {
    for (let i = 0; i < 5; ++i) {
        playRound();
    }

    if (humanScore == computerScore) {
        alert ("Tie!");
    } else {
        humanScore > computerScore ? alert ("You won!") : alert ("You lost");

        alert (`Human score: ${humanScore}, ComputerScore: ${computerScore}`);
    }
}

gameLoop ();