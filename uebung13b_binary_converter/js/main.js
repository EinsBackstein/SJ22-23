/*
Project: uebung13b_binary_converter
Author:  nottj
Date:    01.02.2023
*/

'use strict';
const APPNAME = 'Übung13b binary_converter';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//The user has to input the number, he wants to convert into binary

let numberToConvert = Number(prompt('Bitte geben Sie die Zahl ein, welche Sie in das Binärsystem umwandeln wollen: (Bitte ganze Zahl)'));

//If the number the user inputs is not an integer, the user has to input another number

while(!Number.isInteger(numberToConvert)){
  numberToConvert = Number(prompt('Bitte geben Sie die Zahl ein, welche Sie in das Binärsystem umwandeln wollen: (Bitte ganze Zahl)'));
}

//This outputs the input of the user

document.write(`Ihre Dezimalzahl ist ${numberToConvert}<br>`);

//Here I define my variable for the binary endsum

let endSum=' ist die Binäre Endsumme';

//The next while-loop is here to converte into my binary endsum

while((numberToConvert/2)!=0){
  endSum=String(numberToConvert%2) + endSum;
  numberToConvert=Math.floor(numberToConvert/2);
}

//And this writes out the final result

document.write(`${endSum} <br><br>`);

//When the first conversion is over, the user gets asked, if he wants to convert another number

while((numberToConvert/2)==0){
  //I needed to declare another variable for the new conversions
  let anotherEndSum = ' ist die Binäre Endsumme';
  //The user gets asked, if he wants to make another conversion (y) or not (n)
  let anotherCalculationQuestion = prompt('Wollen Sie eine weitere Berechnung ausführen? (Antworten Sie "y" für ja oder "n" für nein)');
  //If the user enters 'y', the following code converts a newly input number into binary
  if(anotherCalculationQuestion=='y'){
    numberToConvert = Number(prompt('Bitte geben Sie die Zahl ein, welche Sie in das Binärsystem umwandeln wollen: (Bitte ganze Zahl)'));
    document.write(`Ihre Dezimalzahl ist ${numberToConvert}<br>`);
    while((numberToConvert/2)!=0){
      anotherEndSum=String(numberToConvert%2) + anotherEndSum;
      numberToConvert=Math.floor(numberToConvert/2);
    }
    document.write(`${anotherEndSum} <br><br>`);
  }else if(anotherCalculationQuestion=='n'){
    //If the user doesn't want to do another conversion, the program ends
    throw new Error('Programmende');
  }
}
