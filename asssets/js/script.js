/**
 * Declaration of constants and possible choices
 */
const buttons = document.getElementsByClassName("btn");
const movesleft = document.getElementById("moves-left")
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const playerScore = document.getElementById("y-score");
const computerScore = document.getElementById("c-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];


/**
 * Buttons 
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);


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





}










// function playGame(playerChoice) {

//     let computerChoice = Math.floor(Math.random() * 5)

//     if (playerChoice === "rock") {

//     }

//     if (playerChoice === "paper") {

//     }

//     if (playerChoice === "scissors") {

//     }

//     if (playerChoice === "lizard") {

//     }

//     if (playerChoice === "spock") {

//     }

// }



// function generateRespond() {

// }

// function checkAnswer() {

// }

// function incrementYourScore() {

// }

// function incrementPcScore() {

// }

// // function decreseMovesLeft() {

// // }