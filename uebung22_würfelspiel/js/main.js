/*
Project: uebung22_würfelspiel
Author:  nottj
Date:    26.04.2023
*/

'use strict';
const APPNAME = 'Übung 22 - Würfelspiel';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//functions

//This function checks a name. The name isn't allowed to be empty or a number

function checkName(name){
  if(!isNaN(name)||name==''){
    return false;
  }
  return true;
}

//This function is here to determine a winner. Whoever has 8 or more points firsr, wins. If its a draw, its a draw

function getWinner(victoryPointsPlayer1, victoryPointsPlayer2){
  if(victoryPointsPlayer1 >= 8 && victoryPointsPlayer2 >= 8){
    return 0;
  }
  if(victoryPointsPlayer1 >= 8){
    return 1;
  }
  if(victoryPointsPlayer2 >= 8){
    return 2;
  }
  return -1;
}

//This function is creating a random number symbolizing a dice

function createDiceNumber(){
  return Math.floor(Math.random()*6) + 1;
}

//main code

//Here, Player 1 has to input his name, which is then checked for correctness

let namePlayer1 = prompt('Spieler 1: Bitte geben Sie ihren Namen ein');

while(checkName(namePlayer1)==false){
  alert('Der eingegebene Name ist nicht gültig! Bitte erneut eingeben');
  namePlayer1 = prompt('Spieler 1: Bitte geben Sie ihren Namen ein');
}

//Here, Player 2 has to input his name, which is then checked for correctness

let namePlayer2 = prompt('Spieler 2: Bitte geben Sie ihren Namen ein');

while(checkName(namePlayer2)==false){
  alert('Der eingegebene Name ist nicht gültig! Bitte erneut eingeben');
  namePlayer2 = prompt('Spieler 2: Bitte geben Sie ihren Namen ein');
}

//Now the game starts

alert('Liebe Spieler, das Spiel startet nun!');

//Both players start with 0 points 

let victoryPointsPlayer1 = 0;
let victoryPointsPlayer2 = 0;

let dice1roll = 0;
let dice2roll = 0;

let round = 1;

//The game is played, until our function can identify a winner

while(getWinner(victoryPointsPlayer1,victoryPointsPlayer2)==-1){

  //Player 1 rolls the dice
  dice1roll = createDiceNumber();
  dice2roll = createDiceNumber();

  //Here we see, what he has rolled

  alert(`${namePlayer1}: Würfel 1: ${dice1roll}  Würfel 2: ${dice2roll}`);

  //If both dice have landed on a 6, the player gets 2 points. If they landed on the same number, the player gets one point.

  if(dice1roll == 6 && dice2roll == 6){
    victoryPointsPlayer1 += 2;
  }else if(dice1roll == dice2roll){
    victoryPointsPlayer1 += 1;
  }

  //Player 2 rolls the dice

  dice1roll = createDiceNumber();
  dice2roll = createDiceNumber();

  //Here we see, what he has rolled

  alert(`${namePlayer2}: Würfel 1: ${dice1roll}  Würfel 2: ${dice2roll}`);

  //If both dice have landed on a 6, the player gets 2 points. If they landed on the same number, the player gets one point.

  if(dice1roll == 6 && dice2roll == 6){
    victoryPointsPlayer2 += 2 ;
  }else if(dice1roll == dice2roll){
    victoryPointsPlayer2 += 1;
  }

  //Now we get an overview how many points the players have and how many rounds they have played

  alert(`Runde ${round}  ${namePlayer1} => ${victoryPointsPlayer1}  ${namePlayer2} => ${victoryPointsPlayer2}`);

  round += 1;
}

//Now we determine the winner('s) of the game

let endResult = getWinner(victoryPointsPlayer1, victoryPointsPlayer2);

//If the result is 1, Player1 has won. if its 2, Player 2 won. Else its a draw

if(endResult == 1){
  alert(`Herzlichen Glückwunsch ${namePlayer1}, Sie haben das Würfelspiel gewonnen. Das Spiel hat ${round} Runden gedauert und Sie haben ${victoryPointsPlayer1} Siegpunkte erspielt.`);
}else if(endResult == 2){
  alert(`Herzlichen Glückwunsch ${namePlayer2}, Sie haben das Würfelspiel gewonnen. Das Spiel hat ${round} Runden gedauert und Sie haben ${victoryPointsPlayer2} Siegpunkte erspielt.`);
}else{
  alert(`Das Spiel ist nun beendet und es herrscht ein Gleichstand mit ${victoryPointsPlayer1} Punkten. Sie haben ${round} Runden gespielt.`);
}