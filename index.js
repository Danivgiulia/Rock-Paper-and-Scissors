// Rock, Paper and Scissors game 

// Declaring my constants and variables first

const buttons = ["rock", "paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

// Function for the game
function playGame(playerChoice){

    const computerChoice = buttons[Math.floor(Math.random()* 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie";
     }   
     else {
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "You Win" : "You Lose";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "You Win" : "You Lose";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "You Win" : "You Lose";
                    break;
            }
    }

    // Displays the choices
    playerDisplay.textContent = `Your choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Keeps track of the scores
    switch(result){
        case "You Win":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}