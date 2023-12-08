/*
Project: uebung12b_calculate_e
Author:  nottj
Date:    25.01.2023
*/

'use strict';
const APPNAME = 'Übung12b_calculate_e';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//Here i define 3 variables; one for e; one I need for the calculation of e and the third for the accuracy of e

let e = 1;
let nenner = 1;
let annäherung = Number(prompt('Bitte geben Sie die Anzahl der Anäherungsstellen an: '));

//Basicly, what happens in this loop is, that the denominator is always multiplied by the old denominator and then added up to e

for(let i=1; i <= annäherung; i++){
  nenner = nenner*i;
  e = e + 1/nenner;
}

//Here the endvalue gets written out

document.write('<br>' + e);

