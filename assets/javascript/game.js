// Creates an array of all letters in the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuessArray = [];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var left = 9;

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var guessesText = document.getElementById("guesses-text");


// Randomly chooses a choice from the alphabet array. This is the computer's letter.
var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerLetter);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {


    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();
    userGuessArray.push(userGuess);

    
    if (userGuess === computerLetter) {
        wins++;
        left = 9;
        alert("You guessed the computer's letter " + userGuess + ". You're a psychic!!");
        computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        userGuessArray = [];
        console.log(computerLetter);
    } else {
        left--;
    }

    // If user runs out of guesses, stop the function.
    if (left === 0) {
        left = 9;
        losses++;
        alert("You failed to guess the computer's letter! Start over!")
        userGuessArray = [];
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftText.textContent = "Guesses Left: " + left;
    guessesText.textContent = "Guesses So Far: " + userGuessArray;
};

