const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const wins = 0;
const losses = 0;
const guesses = 9;

const directionsText = document.getElementById("directions-text");
const userChoiceText = document.getElementById("userchoice-text");
const computerChoiceText = document.getElementById("computerchoice-text");
const guessesText = document.getElementById("guesses-text");
const winsText = document.getElementById("wins-text");
const lossesText = document.getElementById("losses-text");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    const userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === computerGuess)) {
        wins++;
    } else if (guesses < 0) {
        losses++;
    } else {
        guesses--;
    }
    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    tiesText.textContent = "ties: " + ties;
};