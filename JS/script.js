let humanScore = 0;
let computerScore = 0;
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let plScore = document.querySelector('.plScore');
let cmScore = document.querySelector('.cmScore');
let restart = document.querySelector('.restart');
let finish = document.querySelector('.finish');

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 100);

    if (computerChoice >= 0 && computerChoice < 33) {
        computerChoice = "rock";
    } else if (computerChoice >= 33 && computerChoice < 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function applyRules (humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice != computerChoice) {
        if ((humanChoice == "rock" && computerChoice == "scissors") || 
            (humanChoice == "paper" && computerChoice == "rock") || 
            (humanChoice == "scissors" && computerChoice == "paper")) {
                ++humanScore;
                norifyRoundWinner('Your win!', computerChoice);
            } else {
                ++computerScore;
                norifyRoundWinner('Your loss!', computerChoice);
            }
    } else {
        norifyRoundWinner('Tie!', computerChoice);
    }
}

function norifyRoundWinner (message, computerChoice) {
    const para = document.querySelector('.para')
    para.textContent = `${message} Computer chosed: ${computerChoice}`;
}

function addEvents () {
    rock.addEventListener('click', modifyScoreboard);
    paper.addEventListener('click', modifyScoreboard);
    scissors.addEventListener('click', modifyScoreboard);
}

function removeEvents () {
    rock.removeEventListener('click', modifyScoreboard);
    paper.removeEventListener('click', modifyScoreboard);
    scissors.removeEventListener('click', modifyScoreboard);
}

function modifyScoreboard (event) {
    applyRules(event.target.className);

    plScore.textContent = `${humanScore}`;
    cmScore.textContent = `${computerScore}`;
}

function resetScore () {
    addEvents();

    const para = document.querySelector('.para');

    para.textContent = '';
    plScore.textContent = '0';
    cmScore.textContent = '0';
    [humanScore, computerScore] = [0, 0]
}

function finishedGame() {
    const para = document.querySelector('.para');

    if (humanScore > computerScore) {
        para.textContent = `You win, final score: ${humanScore} - ${computerScore}`
    } else if (humanScore < computerScore) {
        para.textContent = `You lose, final score: ${humanScore} - ${computerScore}`;
    } else {
        para.textContent = `Tie, final score: ${humanScore} - ${computerScore}`;
    }

    removeEvents();
}

restart.addEventListener('click', resetScore);
finish.addEventListener('click', finishedGame);

resetScore();