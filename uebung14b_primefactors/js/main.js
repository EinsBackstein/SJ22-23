/*
Project: uebung14b_primefactors
Author:  nottj
Date:    08.02.2023
*/

'use strict';
const APPNAME = 'Übun14b Primefactors';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//Here the user gets asked, which number he wants to convert into singular primefactors

let numberForPrimefactoring = Number(prompt('Bitte geben Sie die Zahl ein, welche Sie in Primfaktoren zerlegen wollen: '));

//Now the number gets checked, if everything is in the parameters

while(!(numberForPrimefactoring > 0 && Number.isInteger(numberForPrimefactoring))){
  numberForPrimefactoring = Number(prompt('Bitte geben Sie die Zahl ein, welche Sie in Primfaktoren zerlegen wollen: '));
}

//These variables i only need for some counting

let i = 2;
let j = 1;

let stringOfPrimefactors = '';

//These two while-loops are there to actually get the primefactors

while(numberForPrimefactoring>1){//As long as the number is bigger than one, the numbers get calculated
  while(numberForPrimefactoring%i==0){
    //As long as the number is dividable with my counter i without remainder, it gets divided. If not, i gets counted up one
    numberForPrimefactoring = numberForPrimefactoring/i;
    document.write(`Der ${j}ste Primfaktor ist ${i}. Die Zahl, mit der nun weitergerechet wird, ist ${numberForPrimefactoring} <br><br>`);
    j++;
    stringOfPrimefactors = String(`${i} * ${stringOfPrimefactors}`);
  }
  i++;
}
//This is the final output of the primefactor
//The .slice is to cut away the last *, just for optic tho
document.write(stringOfPrimefactors.slice(0,-2));