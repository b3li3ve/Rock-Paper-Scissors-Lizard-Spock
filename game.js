// Global variables to track scores
let humanScore = 0;
let computerScore = 0;

// Button functionality
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const lizard = document.querySelector("#Lizard");
const spock = document.querySelector("#Spock");

let userChoice = "";
function getUserChoice(choice) {
    userChoice = choice;
    return userChoice;
}

rock.addEventListener("click", () => handleUserChoice("rock"));
paper.addEventListener("click", () => handleUserChoice("paper"));
scissors.addEventListener("click", () => handleUserChoice("scissors"));
lizard.addEventListener("click", () => handleUserChoice("lizard"));
spock.addEventListener("click", () => handleUserChoice("spock"));

// Function to get computer's choice
function getComputerChoice() {
    let computerChoice;
    const decidingFactor = Math.random(); // Generate random number once

    if (decidingFactor < 0.2)
        computerChoice = "rock";
    else if (decidingFactor < 0.4)
        computerChoice = "paper";
    else if (decidingFactor < 0.6)
        computerChoice = "scissors";
    else if (decidingFactor < 0.8)
        computerChoice = "lizard";
    else
        computerChoice = "spock";

    return computerChoice;
}

// Determine the winner based on choices
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
        (userChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
        // Update humanScore
        humanScore++;
        return "User wins!";
    } else {
        // Update computerScore
        computerScore++;
        return "Computer wins!";
    }
}

// Function to handle user choice
function handleUserChoice(choice) {
    const userChoice = getUserChoice(choice); // use getUserChoice function
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Display choices in the UI
    document.querySelector("#userChoiceDisplay").textContent = `User chose: ${userChoice}`;
    document.querySelector("#computerChoiceDisplay").textContent = `Computer chose: ${computerChoice}`;
    document.querySelector("#result").textContent = `Result: ${result}`;

    // Display results in the UI
    document.querySelector("#result").textContent = result;
    document.querySelector("#humanScore").textContent = `Human Score: ${humanScore}`;
    document.querySelector("#computerScore").textContent = `Computer Score: ${computerScore}`;
}

// Display initial scores
document.querySelector("#humanScore").textContent = `Human Score: ${humanScore}`;
document.querySelector("#computerScore").textContent = `Computer Score: ${computerScore}`;
document.querySelector("#result").textContent = "Choose your move to start the game!";
