// /*
// Project: uebung17b_functions_taschenrechner
// Author:  nottj
// Date:    08.03.2023
// */

'use strict';
const APPNAME = 'Übung17b Functions Taschenrechner';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

// //functions

//This is the function for adding two numbers

function add(number1, number2) {
  let calculation = number1+number2;
  return calculation;
}

//This is the function for subtracting two numbers

function sub(number1, number2) {
  let calculation = number1-number2;
  return calculation;
}

//Ths is the function for multiplying two numbers

function mult(number1, number2) {
  let calculation = number1*number2;
  return calculation;
}

//This is the function for dividing two numbers(except 0 of course)

function div(number1, number2) {
  if(number2!=0){
    let calculation = number1/number2;
    return calculation;
  }else {
    alert('Division mit 0 nicht möglich');
    throw new Error('Division mit 0 nicht möglich');
  }
}

//This is the function to power a number to another

function p(number1, number2){
  let calculation = number1**number2;
  return calculation;
}

//This is the function which gets and checks the first number of the calculation

function getAndCheckNumber1(){
  let number1 = prompt('Zahl 1: ');
  while(number1 != 'x' && isNaN(number1) || number1 == ''){
    number1 = prompt('Zahl 1: ',0);
  }
  if(!isNaN(number1)){
    return number1;
  }else if(number1 == 'x'){
    number1 = undefined;
    return number1;
  }
}

//This is the function which gets and checks the second number of the calculation

function getAndCheckNumber2(){
  let number2 = prompt('Zahl 2: ',0);
  while(number2 != 'x' && isNaN(number2) || number2 == ''){
    number2 = prompt('Zahl 2: ');
  }
  if(!isNaN(number2)){
    return number2;
  }else if(number2 == 'x'){
    number2 = undefined;
    return number2;
  }
  return number2;
}

//This is the function gets and checks some operators used for our calculations

function getAndCheckOperator(){
  let operator = prompt('Bitte geben Sie hier ihren Rechenoperator ein: ');
  while(!(operator == '+' || operator == '-' || operator == '*' || operator == '/' || operator == 'x' || operator == 'p')){
    operator = prompt('Bitte geben Sie hier ihren Rechenoperator ein: '); 
  }
  if(operator == 'x'){
    return undefined;
  }else{
    return operator;
  }
}

// //main code

//Now, all te numbers and the calculation-operator are gathered

let number1 = getAndCheckNumber1();

let number2 = getAndCheckNumber2();

let operator = getAndCheckOperator();

//In the functions, there always was an option to input x. If x was input, the program now stops

if(number1 == undefined || number2 == undefined || operator == undefined){
  alert('Irgendwo wurdwe x eingegeben');
  throw new Error('Value undefined');
}

//And here the actual calculations happen

if(operator=='+'){
  alert(add(number1, number2));
} else if(operator=='-'){
  alert(sub(number1, number2));
} else if(operator=='*'){
  alert(mult(number1, number2));
} else if (operator=='/'){
  alert(div(number1, number2));
} else if(operator=='p'){
  alert(p(number1, number2));
}



