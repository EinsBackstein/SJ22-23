/*
Project: uebung20_functions_zahlen_raten
Author:  nottj
Date:    29.04.2023
*/

'use strict';
const APPNAME = 'Übung 20 functions - Zahlen raten';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//functions

//This function is here to check, if an input is empty

function isInputEmpty(randomNumberInput){
  if(randomNumberInput==''){
    return true;
  }
  return false;
}

//This function is here to check, if an input is a number

function isInputANumber(randomNumberInput){
  if(!isNaN(randomNumberInput)){
    return true;
  }
  return false;
}

//This function is here to check, if the input for a number is equal or greater than 100

function isEqualOrGreater100(randomNumberInput) { 
  if(randomNumberInput >= 100){
    return true;
  }
  return false;
}

//This functio is here to generate a random number with a certain upper range

function calcRandomNumber(upperRange) {
  return Math.floor(Math.random() * upperRange);
}

//This function is here to compare an input number and the random number

function compareNumbers(randomNumberInput, randomNumber) { 
  if(randomNumber>randomNumberInput){
    return -1;
  }else if(randomNumberInput>randomNumber){
    return 1;
  }else if(randomNumberInput == randomNumber){
    return 0;
  }
}

//This function is here to measure, how off a guess is from the random number

function checkNumberDistance(userGuess, randomNumber){
  let distance = Math.abs(userGuess-randomNumber);
  return distance;
}

//This function is here to write down, how many tries a player needed to guess the number, his guesses and the distance to the number

function showTries(player, guess, distance){
  document.write(`${player}  ${guess}   ${distance}   <br>`);
}

//main code

//This variable will later be used for the calculation of the random number

let randomNumberInput = prompt('Bitte geben Sie die höchstmögliche Zahl ein: ');

//The random number will be saved here

let randomNumber = '';

//Here, the Input will be checked for all the parameters

while(!(isInputEmpty(randomNumberInput)==false && isInputANumber(randomNumberInput)==true && isEqualOrGreater100(randomNumberInput)==true)){
  alert('Der eingegebene Wert ist keine gültige Zahl');
  randomNumberInput = prompt('Bitte geben Sie ihre Zahl ein: ');
}

//Now, the random Number is getting generated

randomNumber = calcRandomNumber(randomNumberInput);

// //Single-Player

// //This is the guess input by a user

// let user1Guess = prompt('Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');

// //Here the guess will be checked for correctness

// while(!(isInputEmpty(user1Guess)==false && isInputANumber(user1Guess)==true && user1Guess > 0)){
//   alert('Der eingegebene Wert ist keine gültige Zahl');
//   user1Guess = prompt('Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
// }

// //Now the user has to guess numbers for so long, until he has it right

// while(compareNumbers(user1Guess, randomNumber)!=0){

//   //Here are some infos for the user, so he knows if the random number is higher or lower

//   if(compareNumbers(user1Guess, randomNumber)==-1){
//     alert('Ihre geschätzte Zahl ist kleiner als die Zufallszahl');
//   }else if(compareNumbers(user1Guess, randomNumber)==1){
//     alert('Ihre geschätzte Zahl ist größer als die Zufallszahl');
//   }

//   //Here, just like above, the user puts in a number which then gets checked

//   user1Guess = prompt('Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
//   while(!(isInputEmpty(user1Guess)==false && isInputANumber(user1Guess)==true && user1Guess > 0)){
//     alert('Der eingegebene Wert ist keine gültige Zahl');
//     user1Guess = prompt('Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
//   }
// }

// //Here is an alert, if the user has won the game

// alert(`Herzlichen Glückwunsch, Sie haben die Zufallszahl ${randomNumber} erraten`);

//Multiplayer

//This variable is used to count the played rounds

let round = 1;



document.write('Runde  eingegebene Zahl       Distanz zur Zufallszahl <br>');

//Here, the first player has to guess a number, which then gets checked

let user1Guess = prompt('Spieler 1: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');

while(!(isInputEmpty(user1Guess)==false && isInputANumber(user1Guess)==true && user1Guess > 0)){
  alert('Der eingegebene Wert ist keine gültige Zahl');
  user1Guess = prompt('Spieler 1: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
}

//Now here it is checked how far the first player is off and his first try gets noted. If he guesses it, the programm stops

let distance = checkNumberDistance(user1Guess,randomNumber);
showTries('Spieler 1', user1Guess, distance);
if(distance==0){
  alert(`Herzlichen Glückwunsch Spieler 1, Sie haben die Zufallszahl ${randomNumber} erraten`);
  throw new Error('Spielende');
}

//Now the second player guesses a number, which then gets checked

let user2Guess = prompt('Spieler 2: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');

while(!(isInputEmpty(user2Guess)==false && isInputANumber(user2Guess)==true && user2Guess > 0)){
  alert('Der eingegebene Wert ist keine gültige Zahl');
  user2Guess = prompt('Spieler 2: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
}

//The distance to the random number is now calculated and te try gets noted. If the second player guesses the number instantly, the game ends.

distance = checkNumberDistance(user2Guess,randomNumber);
showTries('Spieler 2', user2Guess, distance);
if(distance==0){
  alert(`Herzlichen Glückwunsch Spieler 2, Sie haben die Zufallszahl ${randomNumber} erraten`);
  throw new Error('Spielende');
}



document.write('<br><br>');



while(compareNumbers(user1Guess, randomNumber)!=0 &&compareNumbers(user2Guess, randomNumber)!=0 ){

  //Here, the round-counter counts up every round

  round += 1;

  document.write(`Runde ${round} eingegebene Zahl       Distanz zur Zufallszahl <br>`);

  //p1

  //Now this here works just like above. The first player puts in a number, it gets checked, the distance is measured, the try is written down and if he guessed it, the game ends.

  user1Guess = prompt('Spieler 1: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');

  while(!(isInputEmpty(user1Guess)==false && isInputANumber(user1Guess)==true && user1Guess > 0)){
    alert('Der eingegebene Wert ist keine gültige Zahl');
    user1Guess = prompt('Spieler 1: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
  }

  distance = checkNumberDistance(user1Guess,randomNumber);
  showTries('Spieler 1', user1Guess, distance);
  if(distance==0){
    alert(`Herzlichen Glückwunsch Spieler 1, Sie haben die Zufallszahl ${randomNumber} erraten`);
    throw new Error('Spielende');
  }

  //p2

  //Just like above again. Scond player puts in a number, it gets checked, the distance is measured, the try is written down and if he guessed it, the game ends.

  user2Guess = prompt('Spieler 2: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');

  while(!(isInputEmpty(user2Guess)==false && isInputANumber(user2Guess)==true && user2Guess > 0)){
    alert('Der eingegebene Wert ist keine gültige Zahl');
    user2Guess = prompt('Spieler 2: Bitte geben Sie die Zahl ein, für die Sie glauben, dass sie die zufällige Zahl seinen könnte: ');
  }

  distance = checkNumberDistance(user2Guess,randomNumber);
  showTries('Spieler 2', user2Guess, distance);
  if(distance==0){
    alert(`Herzlichen Glückwunsch Spieler 2, Sie haben die Zufallszahl ${randomNumber} erraten`);
    throw new Error('Spielende');
  }

  document.write('<br><br>');
}
