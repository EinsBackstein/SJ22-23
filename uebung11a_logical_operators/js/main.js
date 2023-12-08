/*
Project: uebung11a_logical_operators
Author:  nottj
Date:    18.01.2023
*/

'use strict';
const APPNAME = 'Vorlage';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//Basis


//This little script asks the user to input a number and if it is between 20 and 35 and if its not 27, then the check is ok


// let num1 = Number(prompt('Bitte geben Sie eine Zahl ein'));
// if(num1 >= 20 && num1 <= 35 && num1 != 27) {
//   alert('Prüfung ok!');
// } else {
//   alert('Prüfung fehlgeschlgen!');
// }


//Erweitert


let num1 = Number(prompt('Zahl 1:'));
let num2 = Number(prompt('Zahl 2:'));


/*//This is the example
if(!(num1> 10) && !(num2< 20) || (num1+ num2) % 3 == 2) {
  alert('ok');
} else{
  alert('nok');
}
*/


//This script checks, if the first number is smaller or equal to ten,
//if the second number is bigger or equal twenty,
//and if both numbers combined divided by three have a remainder of two


if((num1 <= 10) || (num2 >= 20 || (num1+ num2) % 3 == 2)){
  alert('ok');
} else{
  alert('not ok');
}



