/*
Project: uebung05-variables_datatypes_basis
Author:  nottj
Date:    23.11.2022
*/

'use strict';
const APPNAME = 'Variablen und Datentypen';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//base variables

let varNumRandom1 = 69;
let varNumRandom2 = 420;
let varNum0 = 0;
let varStringRandom1 = '187';
let varStringRandom2 = '47';
let varStringText = 'HelloWorld';
let varBoolean = 100000>10000;

//this shows the base variables and their data-types

document.write('<div> 1.Variable : '+ varNumRandom1 + ' ; Typ : ' + typeof varNumRandom1 + '</div>');
document.write('<div> 2.Variable : '+ varNumRandom2 + ' ; Typ : ' + typeof varNumRandom2 + '</div>');
document.write('<div> 3.Variable : '+ varNum0 + ' ; Typ : ' + typeof varNum0 + '</div>');
document.write('<div> 4.Variable : '+ varStringRandom1 + ' ; Typ : ' + typeof varStringRandom1 + '</div>');
document.write('<div> 5.Variable : '+ varStringRandom2 + ' ; Typ : ' + typeof varStringRandom2 + '</div>');
document.write('<div> 6.Variable : '+ varStringText + ' ; Typ : ' + typeof varStringText + '</div>');
document.write('<div> 7.Variable : '+ varBoolean + ' ; Typ : ' + typeof varBoolean + '</div>');

document.write('<p>'+'</p>');

//1

//this is the variable for the 1.calculation and the written form

let calc1 = varNumRandom1/varNum0;
document.write('<div> 1.Ergebnis : '+ calc1 + ' ; Typ : ' + typeof calc1 + '</div>');

document.write('<p>'+'</p>');

//2

//this is the variable for the 2.calculation and the written form

let calc2 = varStringRandom2/varNumRandom2;
document.write('<div> 2.Ergebnis : '+ calc2 + ' ; Typ : ' + typeof calc2 + '</div>');

document.write('<p>'+'</p>');

//3

//this is the variable for the 3.calculation and the written form

let calc3 = varNum0+varNumRandom1;
document.write('<div> 3.Ergebnis : '+ calc3 + ' ; Typ : ' + typeof calc3 + '</div>');

document.write('<p>'+'</p>');

//4

//this is the variable for the 4.calculation and the written form

let calc4 = varNumRandom1-varStringRandom2;
document.write('<div> 4.Ergebnis : '+ calc4 + ' ; Typ : ' + typeof calc4 + '</div>');

document.write('<p>'+'</p>');

//String -> Number

//5

//this converts the two 'number'-strings into real numbers

let convertString1ToNumber = Number(varStringRandom1) ;
let convertString2ToNumber = Number(varStringRandom2);

document.write('<div> 5.Ergebnis : '+ convertString1ToNumber + ' ; Typ : ' + typeof  convertString1ToNumber+ '</div>');
document.write('<div>   Ergebnis : '+ convertString2ToNumber + ' ; Typ : ' + typeof convertString2ToNumber + '</div>');

document.write('<p>'+'</p>');

//6

//these few lines do maths with the newly created numbers

let calc61 = convertString1ToNumber+convertString2ToNumber ;
let calc62 = convertString1ToNumber-convertString2ToNumber;

document.write('<div> 6.1.Ergebnis : '+ calc61 + ' ; Typ : ' + typeof calc61 + '</div>');
document.write('<div> 6.2.Ergebnis : '+ calc62 + ' ; Typ : ' + typeof calc62 + '</div>');

document.write('<p>'+'</p>');

//the addition is easily possible, since both data-types are numbers

//7
//undefined

//these few lines create 3 variables for a defined number, an undifined number and calculation with the two
//and it gets shown in the programm

let undefinedNumber; 
let definedNumber = 86;
let someResult = undefinedNumber + definedNumber;

document.write('<div> 7.Ergebnis : '+ undefinedNumber + ' ; Typ : ' + typeof undefinedNumber + '</div>');
document.write('<div> Ergebnis : '+ definedNumber + ' ; Typ : ' + typeof definedNumber + '</div>');
document.write('<div> Ergebnis : '+ someResult + ' ; Typ : ' + typeof someResult + '</div>');

document.write('<p>'+'</p>');


let inputNumber = prompt('gönn zahl bruder');