// Roll button 
// Need to generate number/score
// Need to add numbers together to get past 20 = win
// Rolling a 1 means the score is set back to 0 and you lose
// Start again

// _________________________________________________________________

// When i matches the number in the file name the image will display
// In this case we are generating numbers 1-6
let imageArray = [];
    // Loops through the array up to 6
    for (let i = 1; i<= 6; i++) {
        imageArray[i] = `dice-${i}.png`;
    }

// Our starting score will be 0
let totalScore = 0;

// At the start, the start button is hidden
document.getElementById("btn-start").style.visibility = "hidden";

// _________________________________________________________________

// Roll dice button event listener - listens for click and then runs the roll dice function
document.getElementById("btn-roll").addEventListener('click', () => {
    rollDice();
});

// _________________________________________________________________

// Roll dice function
function rollDice() {
// Sets the dice images to be visible
    document.getElementById("dice").style.visibility = "visible";
// Generates a random whole number between 0 - 6 and then plus 1 to stop 0 being produced
    let diceScore = Math.floor(Math.random() * 6)+1;
// Calls the array image based on the dice score number (line 11)
    document.getElementById("dice").src = imageArray[diceScore];
// If the dice rolls a 1, then call the end game function (line 58)
    if (diceScore == 1) {
        endGame();
// Otherwise add total score (starting at 0) to the dice score
    } else {
        totalScore += diceScore;
// Display the total score in the score HTML div and then check the score (line 68)
        document.getElementById("score").innerHTML = totalScore; 
        checkScore();
    }
    
}

// _________________________________________________________________

// Start again 
// Button event listener - listens to click
document.getElementById("btn-start").addEventListener('click', () => {
// Resets the score back to 0
    totalScore = 0;
// Displays the roll button again
    document.getElementById("btn-roll").style.visibility = "visible";
// Hides the start button as the game begins again
    document.getElementById("btn-start").style.visibility = "hidden";
// Resets the total score to 0, which we declared at the start
    document.getElementById("score").innerHTML = totalScore;
// The dice is hidden until you roll again 
    document.getElementById("dice").style.visibility = "hidden";

});

// _________________________________________________________________

// Losing the game
const endGame =() => {
// Resets the score back to 0
    totalScore = 0;
// Roll button is hidden because you have lost
    document.getElementById("btn-roll").style.visibility = "hidden";
// Start again button appears so you can restart
    document.getElementById("btn-start").style.visibility = "visible";
// Display a losing message in the HTML score div
    document.getElementById("score").innerHTML = "You rolled a 1! Loser!";

}
// _________________________________________________________________

// Winning the game
const checkScore =() => {
// If the total score is equal to or more than 20
    if (totalScore >= 20) {
// Display a winning message in the HTML score div
        document.getElementById("score").innerHTML = "You win!";
// Hide the roll button as you have won
        document.getElementById("btn-roll").style.visibility = "hidden";
// Display the start button so that you can restart
        document.getElementById("btn-start").style.visibility = "visible";
    }

}

