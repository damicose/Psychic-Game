let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessed = []
let answer = null

let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function updateAnswer() {
    answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function updateGuessesLeft() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateGuessed() {
    document.querySelector('#guesses-text').innerHTML = "Guesses So Far: " + guessed.join(', ')
}

const reset = function () {
    guesses = 9;
    guessesLeft = 9;
    guessed = [];
    updateAnswer();
    updateGuessed();
    updateGuessesLeft();
}

updateAnswer();
updateGuessesLeft();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("Please enter a valid character");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessed.push(userGuess);
        updateGuessesLeft();
        updateGuessed();

        if (guessesLeft > 0) {
            if (userGuess == answer) {
                wins++;
                document.querySelector('#wins-text').innerHTML = "Wins: " + wins;
                alert("You win! The answer was " + answer);
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
            alert("You lose! The answer was " + answer);
            reset();

        }
        return false;
    } else {
        alert("Critical Failure");
    }

};