/*
Project: uebung26_gui_calculator
Author:  nottj
Date:    31.05.2023
*/

'use strict';
const APPNAME = 'Übung 26 GUI Calculator🧮';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading1').innerText = APPNAME;

const inNumber1 = document.getElementById('inNumber1'); 
const inNumber2 = document.getElementById('inNumber2');
const msgInNumber1 = document.getElementById('msgInNumber1');
const msgInNumber2 = document.getElementById('msgInNumber2');

//Here are all the buttons which are used later

const btnInfo = document.getElementById('btnInfo');
const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');
const btnClear = document.getElementById('btnClear');
const btnPow = document.getElementById('btnPow');
const btn10x = document.getElementById('btn10x');



// TODO: Add code for the rest of the buttons



const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');



// Functions 

//This function is here to check, if an input is a number

function isNumber(inputText) {
  if(inputText == '' || isNaN(inputText)) {
    return false;
  }   
  return true;
}


// Event Handling 

//If the button "btnInfo" is clicked, a short text is shown

btnInfo.onclick = function () {
  output2.innerHTML = '<b>myapp juhu</b>';
 
};

//If the "btnAdd"-button is clicked, the 1st and 2nd value are added together, or if one of the parameters isn't ok, an error message is shown

btnAdd.onclick = function () {
  
  let checkOk = true;

  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';

  if(isNumber(inNumber1.value) == false){
    msgInNumber1.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNumber2.value) == false) {
    msgInNumber2.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(checkOk == true) {
    let result = Number(inNumber1.value) + Number(inNumber2.value);
    output1.innerText = 'Summe: ' + result;
  } else {
    output1.innerHTML = '<b> Berechnung konnte nicht durchgeführt werden! </b>';
  }
};

// TODO: program event handling for each button

//If the "btnSub"-button is clicked, the 1st and 2nd value are subtracted from eatchother, or if one of the parameters isn't ok, an error message is shown

btnSub.onclick = function(){
  let checkOk = true;

  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';

  if(isNumber(inNumber1.value) == false){
    msgInNumber1.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNumber2.value) == false) {
    msgInNumber2.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(checkOk == true) {
    let result = Number(inNumber1.value) - Number(inNumber2.value);
    output1.innerText = 'Differenz: ' + result;
  } else {
    output1.innerHTML = '<b> Berechnung konnte nicht durchgeführt werden! </b>';
  }
};

//If the "btnMult"-button is clicked, the 1st and 2nd value are multiplied together, or if one of the parameters isn't ok, an error message is shown

btnMult.onclick = function(){
  let checkOk = true;

  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';

  if(isNumber(inNumber1.value) == false){
    msgInNumber1.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNumber2.value) == false) {
    msgInNumber2.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(checkOk == true) {
    let result = Number(inNumber1.value) * Number(inNumber2.value);
    output1.innerText = 'Produkt: ' + result;
  } else {
    output1.innerHTML = '<b> Berechnung konnte nicht durchgeführt werden! </b>';
  }
}
;

//If the "btnDiv"-button is clicked, the 1st and 2nd value are divided through eachother, or if one of the parameters isn't ok, an error message is shown

btnDiv.onclick = function(){
  let checkOk = true;

  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';

  if(isNumber(inNumber1.value) == false){
    msgInNumber1.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNumber2.value) == false) {
    msgInNumber2.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(inNumber2.value == 0){
    msgInNumber2.innerText = 'Division durch 0 nicht möglich';
    checkOk = false;
  }
  if(checkOk == true) {
    let result = Number(inNumber1.value) / Number(inNumber2.value);
    output1.innerText = 'Quotient: ' + result;
  } else {
    output1.innerHTML = '<b> Berechnung konnte nicht durchgeführt werden! </b>';
  }
};

//When the "btnClear"-button is clicked, all values on the screen are cleared

btnClear.onclick = function(){
  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';
  inNumber1.value='';
  inNumber2.value='';
  output1.innerText='';
  output2.innerText='';
};

//If the "btnPow"-button is clicked, the 1st and 2nd value ared multiplied to their power, or if one of the parameters isn't ok, an error message is shown

btnPow.onclick = function(){
  let checkOk = true;

  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';

  if(isNumber(inNumber1.value) == false){
    msgInNumber1.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNumber2.value) == false) {
    msgInNumber2.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(checkOk == true) {
    let result = Number(inNumber1.value) ** Number(inNumber2.value);
    output1.innerText = 'Ergebnis: ' + result;
  } else {
    output1.innerHTML = '<b> Berechnung konnte nicht durchgeführt werden! </b>';
  }
};

//If the "btn10x"-button is clicked, the 1st value is multiplied with 10 to the power of the 2nd value, or if one of the parameters isn't ok, an error message is shown

btn10x.onclick = function(){
  let checkOk = true;

  msgInNumber1.innerText = '';
  msgInNumber2.innerText = '';

  if(isNumber(inNumber1.value) == false){
    msgInNumber1.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNumber2.value) == false) {
    msgInNumber2.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }

  if(checkOk == true) {
    let result = Number(inNumber1.value) * (10 ** Number(inNumber2.value));
    output1.innerText = 'Ergebnis: ' + result;
  } else {
    output1.innerHTML = '<b> Berechnung konnte nicht durchgeführt werden! </b>';
  }
};
