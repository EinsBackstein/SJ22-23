/*
Project: uebung05-variables_datatypes_basis
Author:  nottj
Date:    23.11.2022
*/

'use strict';
const APPNAME = 'Variablen und Datentypen';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;
document.getElementById('output').innerText = 'Mein erstes JS Programm';



//all the variables for my numbers

let num1=42;
let num2=3;
let num3='41';
let num4='33';
let aText='Juhe, SEW!';

//proof of concept for the numbers

document.write('<div>Ergebnis (num1) : '+ num1 + '</div>');
document.write('<div>Ergebnis (num2) : '+ num2 + '</div>');
document.write('<div>Ergebnis (num3) : '+ num3 + '</div>');
document.write('<div>Ergebnis (num4) : '+ num4 + '</div>');
document.write('<div>Ergebnis (aText) : '+ aText + '</div>');

//1

//variables

let res1 = num1 + num2;
let res2 = num3 + num4;

//for seperating the divs

document.write('<p></p>');

//result of the calculation

document.write('<div>1. Ergebnis (res1) : '+ res1 + '</div>');
document.write('<div>Ergebnis (res2) : '+ res2 + '</div>');

//2

//calculations

res1 = '37'+1;
res2 = '37'-1;

//for seperating the divs

document.write('<p></p>');

//result of the calculation

document.write('<div>2. Ergebnis (res1) : '+ res1 + '</div>');
document.write('<div>Ergebnis (res2) : '+ res2 + '</div>');

//3

//calculations

res1 = 37*2;
res2 = '37EUR'-1;

//for seperating the divs

document.write('<p></p>');

//result of the calculation

document.write('<div>3. Ergebnis (res1) : '+ res1 + '</div>');
document.write('<div>Ergebnis (res2) : '+ res2 + '</div>');

//4

//calculations

num1 = num1/num2;
num2 = num3/num4;

//for seperating the divs

document.write('<p></p>');

//result of the calculation

document.write('<div>4. Ergebnis (num1) : '+ num1 + '</div>');
document.write('<div>Ergebnis (num2) : '+ num2 + '</div>');

//5

//for seperating the divs

document.write('<p></p>');

//calculation

aText = aText+aText+aText;

//result of the "calculation"

document.write('<div>5. Ergebnis (aText) : '+ aText + '</div>');

//calculation

aText = num1+aText;

//result of the "calculation"

document.write('<div>Ergebnis (aText) : '+ aText + '</div>');




