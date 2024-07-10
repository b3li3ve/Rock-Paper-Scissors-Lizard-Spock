// Global variables to track scores
let humanScore = 0;
let computerScore = 0;

// Function to prompt user for their choice (case insensitive)
function getUserChoice() {
    let userChoice = prompt("It's really quite simple. Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard. Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper. Paper disproves Spock. Spock vaporizes Rock. and as it always has Rock crushes Scissors", "").toLowerCase();
    return userChoice;
}

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

// Get user's choice with validation
function getUserChoiceWithValidation() {
    let userChoice = getUserChoice();

    // Validate user input
    while (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors" &&
        userChoice !== "lizard" &&
        userChoice !== "spock"
    ) {
        alert("That's not how you play! Please choose one of: Rock, Paper, Scissors, Lizard, or Spock");
        userChoice = getUserChoice();
    }

    return userChoice;
}

// Game loop to play multiple rounds
function playGame() {
    let playAgain = true;

    while (playAgain) {
        // Get user's validated choice
        let userChoice = getUserChoiceWithValidation();
        console.log("User chose:", userChoice);

        // Get computer's choice
        let computerChoice = getComputerChoice();
        console.log("Computer chose:", computerChoice);

        // Determine the winner based on choices (case insensitive)
        let result = determineWinner(userChoice, computerChoice);
        console.log(result);

        // Display scores after each round
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);

        // Ask if user wants to play again
        playAgain = confirm("Do you want to play again?");
    }

    // Show final scores when the game ends
    console.log("Final Scores:");
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

// Determine the winner based on choices (case insensitive)
function determineWinner(userChoice, computerChoice) {
    // Convert choices to lowercase for case insensitive comparison
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Implement your game logic here
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

// Start the game loop
playGame();
