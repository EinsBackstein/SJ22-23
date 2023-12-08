/*
Project: uebung16b_functions_info_error
Author:  nottj
Date:    01.03.2023
*/

'use strict';
const APPNAME = 'Übung16b Functions Info Error';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//This function displays an inpit username

function showFixedInfo(lastName) {
  document.write(lastName + '<br>');
}

showFixedInfo('Nott');


let lastName = 'Nott';

//This function displays an error for the username

function showFixedError() { 
  alert(`Hello ${lastName}: An error occured`);
}

showFixedError();

//This function displays an input message

function showInfoWithArgument(message){
  document.write(message + '<br>');
}

showInfoWithArgument('Ich wünsche Ihnen einen schönen Tag! 😉');

//And this function checks the datatype of the input and displays certain things for the different types

function showInfoWithArgumentCheck(input) {
  let datatype = typeof input;
  if(datatype == 'undefined'){
    alert('Bitte wenigstens ein Zeichen eingeben.');
  }else if(datatype == 'number'){
    alert('Eingabe ist eine Zahl.');
  }else{
    showInfoWithArgument('Danke für ihre Eingabe');
  }
}

showInfoWithArgumentCheck('asdf');
