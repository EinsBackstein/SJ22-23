/*
Project: uebung14a_atm
Author:  nottj
Date:    08.02.2023
*/

'use strict';
const APPNAME = 'Übung14a ATM';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//This is my original bank balance
let bankBalance = 1500;

while(bankBalance > 0){
  //Here you get asked how much money you want to withdraw
  let withdrawal = prompt('Wieviel Geld wollen Sie beheben?');
  //Now it is checked, if the prompt-input is valid.
  while(!(withdrawal % 10 == 0 && withdrawal > 0 && withdrawal <= 1500 || withdrawal=='E')){
    alert('Betrag ungültig. Bitte erneut eingeben');
    withdrawal = prompt('Wieviel Geld wollen Sie beheben?');
  }
  if(withdrawal=='E'){// If the user inputs "E", the programm gets ended
    alert('Programm wird jetzt beendet. Auf Wiedersehen und danke für Ihren Besuch.');
    throw new Error('Programmende');
  }
  //Here the user gets informed about what the ATM is going to do and how much he still has
  alert(`Sie wollen also ${withdrawal}€ beheben.`);
  alert(`Auf ihre Konto sind noch ${bankBalance-withdrawal}€ verfügbar.`);
  alert(`Sie erhalten ${withdrawal/10} 10€-Scheine`);
  bankBalance -= withdrawal;
  if(bankBalance==0){
    //If the User has no money, he gets informed and the programm will end.
    alert('Sie haben leider kein Geld mehr');
  }
  let anotherWithdrawalQuestion = prompt('Wollen Sie eine weitere Behebng durchführen? "y" für ja und "n" für nein');
  while(!(anotherWithdrawalQuestion=='y'||anotherWithdrawalQuestion=='n')){
    //Now the user can withdraw even more money. If the input isn't "y" or "n", he gets asked again.
    anotherWithdrawalQuestion = prompt('Wollen Sie eine weitere Behebng durchführen? "y" für ja und "n" für nein');
  }
  if(anotherWithdrawalQuestion=='n'){
    //if thhe user inputs "n", the programm gets ended
    throw new Error('Programmende');
  }
}

