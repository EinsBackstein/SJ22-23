/*
Project: Excel-Tabelle vertrau
Author:  nottj
Date:    01.03.2023
*/

'use strict';
const APPNAME = 'Vorlage';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//functions

function convertIntoBills(value){
  let twohundredEuroBills = 0;
  while(value-200>=0){
    twohundredEuroBills++;
    value -= 200;
  }
  let hundredEuroBills = 0;
  while(value-100>=0){
    hundredEuroBills++;
    value -= 100;
  }
  let fiftyEuroBills = 0;
  while(value-50>=0){
    fiftyEuroBills++;
    value -= 50;
  }
  let twentyEuroBills = 0;
  while(value-20>=0){
    twentyEuroBills++;
    value -= 20;
  }
  let tenEuroBills = 0;
  while(value-10>=0){
    tenEuroBills++;
    value -= 10;
  }
  let fiveEuroBills = 0;
  while(value-5>=0){
    fiveEuroBills++;
    value -= 5;
  }
  let twoEuroCoins = 0;
  while(value-2>=0){
    twoEuroCoins++;
    value -= 2;
  }
  let oneEuroCoins = 0;
  while(value-1>=0){
    oneEuroCoins++;
    value -= 1;
  }
  let fiftyCentCoins = 0;
  while(value-0.5>=0){
    fiftyCentCoins++;
    value -=0.5;
  }
  return [twohundredEuroBills,hundredEuroBills,fiftyEuroBills,twentyEuroBills,tenEuroBills,fiveEuroBills,twoEuroCoins,oneEuroCoins,fiftyCentCoins];
}

function outputMoney(moneyArray){
  
}

//variables




//code
let number = '';
let endSum = 0;
while(number != 'x'){  
endSum += Number(number);
  number = prompt('Zahl bitte: - für abbruch x drücken');

}

alert(endSum);

// let convertableNumber = Number(prompt('Bitte hier umzuwandlende Nummer eingeben: '));

let moneyArray = convertIntoBills(endSum);

for (let i = 0; i < moneyArray.length;i++) {
  if(i == 0){
    document.write(`200er: ${moneyArray[i]} <br>`);
  }
  if(i == 1){
    document.write(`100er: ${moneyArray[i]} <br>`);
  }
  if(i == 2){
    document.write(`50er: ${moneyArray[i]} <br>`);
  }
  if(i == 3){
    document.write(`20er: ${moneyArray[i]} <br>`);
  }
  if(i == 4){
    document.write(`10er: ${moneyArray[i]} <br>`);
  }
  if(i == 5){
    document.write(`5er: ${moneyArray[i]} <br>`);
  }
  if(i == 6){
    document.write(`2er: ${moneyArray[i]} <br>`);
  }
  if(i == 7){
    document.write(`1er: ${moneyArray[i]} <br>`);
  }
  if(i == 8){
    document.write(`50erlein: ${moneyArray[i]} <br>`);
  }

}

