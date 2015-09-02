////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if ( ( (move === undefined) || (move === null) ) === true ) {
        move = getInput();
    } else {
        move = move;
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if ( ( (move === undefined) || (move === null) ) === true ) {
        move = randomPlay();
    } else {
        move = move;
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === "rock") { 
        switch (computerMove) {
            case "rock":
                winner = "tie";
                break;
            case "paper":
                winner = "computer";
                break;
            default:
                winner = "player";
        }
    } else if (playerMove === "paper") {
        switch (computerMove) {
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "tie";
                break;
            default:
                winner = "computer";
        }
    } else {
        switch (computerMove) {
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "player";
                break;
            default:
                winner = "tie";
        }
    }
    return winner;
}

function playTo() {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("Please choose a number that winner must win.");
    var x = prompt();
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < x) && (computerWins < x)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        var gameWinner = getWinner(playerMove, computerMove);
        if (gameWinner === "player") {
            console.log('Player wins this round.');
            playerWins += 1;
        } else if (gameWinner === "computer") {
            console.log('Computer wins this round.');
            computerWins += 1;
        } else {
            console.log('This round is a tie.');
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    if (playerWins > computerWins) {
        console.log('Player wins the game with the final score of ' + playerWins + ' to ' + computerWins + '.');
    } else {
        console.log('Computer wins the game with the final score of ' + playerWins + ' to ' + computerWins + '.');
    }
    return [playerWins, computerWins];
}

playTo();

