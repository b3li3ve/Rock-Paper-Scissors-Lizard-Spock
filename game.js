//Get the computer to choose Rock Paper Scissors Lizard Or Spock
function getComputerChoice() {
    let computerChoice;
    const decidingFactor = Math.random(); // Generate random number once

    if (decidingFactor < 0.2)
        computerChoice = "Rock";
    else if (decidingFactor < 0.4)
        computerChoice = "Paper";
    else if (decidingFactor < 0.6)
        computerChoice = "Scissors";
    else if (decidingFactor < 0.8)
        computerChoice = "Lizard";
    else
        computerChoice = "Spock";

    return computerChoice;
}

const choice = getComputerChoice();
console.log("Computer chose:", choice);

