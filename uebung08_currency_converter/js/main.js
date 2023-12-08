/*
Project: uebung08_currency_converter
Author:  nottj
Date:    14.12.2022
*/

'use strict';
const APPNAME = 'Übung8 Currency Converter';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;


const EUR_CHF = 0.99;//this is the excange value for euros into swiss francs
const BTC_EUR = 15692.24;//this is the exchange value for bitcoin into euros
const BTC_CHF = 15503.88;//and this is the exchange value for bitcoin into swiss francs


//this variable us here to ask the user which currencies he wants to convert
let convertFrom = prompt('Was wollen Sie umrechnen? Zur Auswahl stehen Schweizer Franken, Bitcoin und Euro. Zum Rechnen bitte den ersten Buchstaben der vorhandenen Währung und dann den ersten Buchstaben der umzurechnenden Währung (z.B. ec -> Euro in Schweizer Franken, cb -> Schweizer Franken in Bitcoin)') ;


//this just converts all letters into UPPERCASE LETTERS
let convertFromUpper = convertFrom.toUpperCase();


//if the user doesn't input any currencies he wants to convert he will get an error and the programm will stop
if(convertFrom == ''){
  alert('Bitte gültige Umrechnungsoperation eingeben');
  throw new Error('Keine gültige Währung');
}


//just a variable that makes my life easier
let short = convertFromUpper;


//if the input exchange isn't existent here, you will get an error and the programm will once again stop
if (short != 'EC'&&short != 'CE'&&short !='EB'&&short !='BE'&&short !='CB'&&short !='BC') {
  alert('Bitte gültige Umrechnungsoperation eingeben');
  throw new Error('Ungültige Umrechnung');
}


//this variable is here to ask the user how much *currency* he wants to converte
let amount = Number(prompt('Wie viel Geld wollen  Sie umrechnen?'));


if (isNaN(amount)){//if the user inputs an invalid number he gets an error and the programm stopps
  alert('Keine gültige Zahl');
  throw new Error('Keine gültige Zahl');
}else if (convertFromUpper == 'EC') {
  //the user wants to convert euros to swiss francs
  alert('Sie wollen also von Euro in Schweizer Franken umrechnen');
  let calculation = amount*EUR_CHF;
  let roundedResult = calculation.toFixed(2);
  alert(amount + ' € ' + 'sind ' + roundedResult+'CHf');
} else if (convertFromUpper == 'CE') {
  //the user wants to convert swiss francs in euros
  alert('Sie wollen also von Schweizer Franken in Euro umrechnen');
  let calculation = amount/EUR_CHF;
  let roundedResult = calculation.toFixed(2);
  alert(amount + ' CHf ' + 'sind ' + roundedResult+'€');
}else if (convertFromUpper == 'BE') {
//this converts bitcoin into euros
  alert('Sie wollen also Bitcoin in Euro umrechnen');
  let calculation = amount*BTC_EUR;
  let roundedResult = calculation.toFixed(2);
  alert(amount + ' Bitcoin ' + ' sind ' + roundedResult + '€');
} else if (convertFromUpper == 'EB') {
//and this converts euros to bitcoin
  alert('Sie wollen also Euro in Bitcoin umrechnen');
  let calculation = amount/BTC_EUR;
  let Result = calculation;
  alert(amount + ' € ' + ' sind ' + Result + ' Bitcoin');
}else if (convertFromUpper == 'BC') {
//this here converst bitcoin into swiss francs
  alert('Sie wollen also Bitcoin in Schweizer Franken umrechnen');
  let calculation = amount*BTC_CHF;
  let roundedResult = calculation.toFixed(2);
  alert(amount + ' Bitcoin ' + ' sind ' + roundedResult + 'CHf');
} else if (convertFromUpper == 'CB') {
//and this final if-statement converts swiss francs into bitcoin
  alert('Sie wollen also Schweizer Franken in Bitcoin umrechnen');
  let calculation = amount/BTC_CHF;
  let Result = calculation;
  alert(amount + ' CHf ' + ' sind ' + Result + ' Bitcoin');
}
