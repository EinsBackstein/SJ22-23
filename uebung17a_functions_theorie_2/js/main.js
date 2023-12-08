/*
Project: uebung17a_functions_part_2
Author:  nottj
Date:    08.03.2023
*/

'use strict';
const APPNAME = 'Übung17a Functions Teil 2';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

// function getFullName(firstName,lastName) {
//   let fullName = firstName + ' ' + lastName.toUpperCase();
//   return fullName;
//   // shorter variant:
//   // return firstName + ' ' + lastName.toUpperCase();
// }
// let enteredFirstName = 'Bernd';
// let enteredLastName = 'Huber';
// let fullName1 = getFullName(enteredFirstName,enteredLastName); // the function's returnvalue is stored in fullName1
// document.write('<br>' + fullName1);
// document.write('<br>' + getFullName('Hannah',enteredLastName)); // call "getFullName"directly

// function isInputOk(inputText) {
//   if(inputText == 'secrect') {
//     return true; // function stops here!
//   }
//   let nonsense = ''; // this and the following code line will not be
//   // executed if inputText has the value 'secret'
//   return nonsense;
// }

// function doNothing1() {
//   /* empty */
// }
// document.write(doNothing1() === undefined); // true

// let nothing = doNothing1();
// alert(nothing); // shows "undefined"

// function doNothing2() {
//   return;
// }
// document.write(doNothing2() === undefined); // true
// nothing = doNothing2();
// alert(nothing); // shows "undefined"


// function checkLetter(letter) {
//   if (!isNaN(letter)) {
//     return false;
//   }
//   if (letter.length > 1) { // checks, if the nummer of characters of variable letter is
//   // greater than 1
//     return false;
//   }
//   return true;
// }
// let input1 = '77';
// let input2 = 'x';
// let input3 = 'xx';
// let input4 = ' ';

// document.write('<br>' + input1 + ': ' + checkLetter(input1)); // 77: false
// document.write('<br>' + input2 + ': ' + checkLetter(input2)); // x: true
// document.write('<br>' + input3 + ': ' + checkLetter(input3)); // xx: false
// document.write('<br>' + input4 + ': ' + checkLetter(input4)); // :false

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       document.write(` ${i}`); // a prime
//     }
//   }
// }
// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// showPrimes(69);

// let zahl1=1;
// let zahl2=2;
// let zahl3=3;
// let zahl4=4;
// function sum(a,b) {
//   let sum = a + b;
//   return sum;
// }
// alert(sum(2,3));
// alert(sum('2','3'));
// alert(sum(zahl1,4));