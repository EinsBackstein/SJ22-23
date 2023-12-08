/*
Project: uebung09b_number_quiz
Author:  nottj
Date:    02.01.2023
*/

'use strict';
const APPNAME = 'Übung9B Number Quiz';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

function playNumberGuessingGame() {

  // Here Player 1 should enter his guess
  
  const player1Guess = prompt('Spieler 1, bitte geben Sie eine Nummer zwischen 1 und 100 ein:');

  // This makes sure player 1 entered a valid number

  if (isNaN(player1Guess) || player1Guess < 1 || player1Guess > 100) {
    document.write('Spieler 1, bitte geben Sie eine valide Nummer ein');
    return;
  }

  // Now Player 2 should enter his guess

  const player2Guess = prompt('Spieler 2, bitte geben Sie eine Nummer zwischen 1 und 100 ein:');

  // This makes sure player 2 entered a valid number

  if (isNaN(player2Guess) || player2Guess < 1 || player2Guess > 100) {
    document.write('Spieler 2, bitte geben Sie eine valide Nummer ein');
    return;
  }

  // Generate a random number between 1 and 100

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Calculate the absolute difference between the player's guesses and the random number

  //This here calculate the difference between Player 1's guess and the random number
  
  const player1Difference = Math.abs(player1Guess - randomNumber);
  
  //This here calculate the difference between Player 2's guess and the random number
  
  const player2Difference = Math.abs(player2Guess - randomNumber);

  // And now it  the winner gets chosen

  if (player1Difference < player2Difference) {
    document.write('Spieler 1 gewinnt!<br>');
  } else if (player2Difference < player1Difference) {
    document.write('Spieler 2 gewinnt!<br>');
  } else {
    document.write('Gleichstand!<br>');
  }

  // This just shows the absolute difference between the Player's guesses and the random number

  document.write(`Spieler 1 war ${player1Difference} von der Nummer entfernt.<br>`);
  document.write(`Spieler 2 war ${player2Difference} von der Nummer entfernt.<br>`);
  document.write(`Die Zahl war ${randomNumber}`);
}

// Play the game
playNumberGuessingGame();
