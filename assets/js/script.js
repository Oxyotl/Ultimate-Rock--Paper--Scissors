/**
 * Declaration of constants and possible choices
 */
const buttons = document.getElementsByClassName("btn");
const movesleft = document.getElementById("moves-left")
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const playerScore = document.getElementById("p-score");
const computerScore = document.getElementById("c-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const message = document.querySelector(".message");

// // /**
//  * Buttons 
//  */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
        checkMoves()


    })
}


/**
 * The main part of the game, accepts the data-choice value of the selected button
 */
function playGame(playerChoice) {

    let computerChoice = Math.floor(Math.random() * 5)

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    choiceSelected(playerChoice)



}

/**
 * Check the moves left
 */
function checkMoves() {

}


/**
 * Checks which choice wins 
 */


/**
 * Function to check the choice selected
 */
function choiceSelected(playerChoice) {
    if (playerChoice === computerChoice) {
        message.innerText = "Tie"

    } else if (playerChoice == document.getElementById("r")) {
        if (computerChoice == "paper") {
            incrementComputerScore()
        }

        if (computerChoice == "scissors") {
            incrementPlayerScore()
        }

        if (computerChoice == "lizard") {
            incrementPlayerScore()
        }

        if (computerChoice == "spock") {
            incrementComputerScore()
        }

    } else if (playerChoice == document.getElementById("p")) {

    }
}

/**
 * Player score
 */
function incrementPlayerScore() {

    let playerScore = parseInt(document.getElementById("p-score").innerText);
    document.getElementById("p-score").innerText = ++playerScore;
}

/**
 * Computer score
 */
function incrementComputerScore() {

    let computerScore = parseInt(document.getElementById("c-score").innerText);
    document.getElementById("c-score").innerText = ++computerScore;
}