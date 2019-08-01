const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins = 0;
let losses = 0;
let guesses = 9;

const directionsText = document.getElementById("directions-text");
const userChoiceText = document.getElementById("userchoice-text");
const computerChoiceText = document.getElementById("computerchoice-text");
const guessesText = document.getElementById("guesses-text");
const winsText = document.getElementById("wins-text");
const lossesText = document.getElementById("losses-text");

const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


function allowGuess() {
    if (guesses < 0) {
        document.querySelector("guesses-text").innerHTML = "Game Over!";
        losses++;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
    }
}

allowGuess();
console.log(computerGuess)

document.onkeyup = function (event) {

    if (guesses < 0) {
        return;
    }

    const userGuess = event.key.toLowerCase();

    if ((userGuess === computerGuess)) {
        wins++;
    } else {
        guesses--;
        document.querySelector("#guesses-text").innerHTML = "You Guessed: " + userGuess;
    }

    directionsText.textContent = "";


    userChoiceText.textContent = "You Chose: " + userGuess;
    guessesText.textContent = "Guesses Remaining: " + guesses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
};