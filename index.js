// Rock, Paper and Scissors game 

// Declaring my constants first

const buttons = ["rock", "paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Function for the game
function playGame(playerChoice){

    const computerChoice = buttons[Math.floor(Math.random()* 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "ITS A TIE!";
     }   
     else {
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "You Win" : "You Lose!";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "You Win" : "You Lose!";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "You Win" : "You Lose!";
                    break;
            }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

}