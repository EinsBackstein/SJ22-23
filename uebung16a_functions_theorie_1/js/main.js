/*
Project: uebung16a_functions_theorie
Author:  nottj
Date:    01.03.2023
*/

'use strict';
const APPNAME = 'Übung16a Functions Theorie';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

// function showMessage() {
//   document.write('Hello IT!');
// }
// showMessage();
// showMessage();




// function showMessage() {
//   let message = 'Hello, I\'m JavaScript!'; // local variable
//   document.write(message);
// }
// showMessage(); // Hello, I'm JavaScript!
// document.write(message); // <-- Error! The variable is local to the function. It is not accessible from "outside"

// let userName = 'John';

// function showMessage() {
//   userName = 'Bob'; // (1) changed the outer variable
//   let message = 'Hello, ' + userName;
//   document.write(message);
// }

// document.write(userName); // John before the function call
// showMessage();
// document.write(userName);
// // Bob, the value was modified by the function

// let userName = 'Hansi';
// function showMessage() {
//   let userName = 'Babsi';
//   let message = '<br>Hello, ' + userName;
//   document.write(message);
// }
// // the function will create and use its own userName
// showMessage();
// showMessage();
// document.write(userName); // Hansi, unchanged, the function did not access the outer variable

// arguments/parameters: firstName, lastName
// function outputFullName(firstName, lastName) {
//   document.write('<br>' + firstName + ' ' + lastName);
// }
// outputFullName('Peter', 'Schranzer'); // *
// outputFullName('Emma', 'Bäcker'); // **

// function outputFullName(firstName, lastName) {
//   document.write('<br>' + firstName + ' ' + lastName);
// }
// let enteredFirstName = 'Bernd';
// let enteredLastName = 'Lustig';
// outputFullName(enteredFirstName, enteredLastName);
// outputFullName('Peter', enteredLastName);
// outputFullName(enteredFirstName, 'Bäcker');

// function outputFullName(firstName, lastName) {
//   firstName = firstName.toUpperCase();// toUpperCase wandelt alle Buchstaben in GROßBUCHSTABEN um
//   lastName = lastName.toUpperCase(); // Die lokale Variable lastName wird geändert. Diese ist nur innerhalb der Funktion gültig
//   document.write('<br>' + firstName + ' ' + lastName);
// }

// let firstName = 'Bernd';
// let lastName = 'Lustig';

// outputFullName(firstName, lastName);
// outputFullName('Peter', lastName);
// outputFullName(firstName, 'Bäcker');
// document.write('<br>' + firstName + ' ' + lastName);
// lastName = lastName.toUpperCase(); // Die globale Variable lastName wird geändert
// document.write('<br>' + firstName + ' ' + lastName);

// let firstName = 'Bernd';
// function outputFullName(firstName, lastName) {
//   firstName = 'Sepp';
//   document.write('<br>Name: ' + firstName + ' ' + lastName);
// }
// outputFullName(firstName, 'Lustig'); // Name: Sepp Lustig
// // the value of 'firstName' is the same, the function modified a local copy
// document.write(firstName); // Bernd

// function outputFullName(firstName, lastName) {
//   firstName = firstName.toUpperCase();
//   lastName = lastName.toUpperCase(); // Die lokale Variable lastName wird geändert. Diese ist nur innerhalb der Funktion gültig
//   // date: Globale Variablen nur in äußersten Ausnahmefällen in Funktionen verwenden (nur nach Absprache mit dem Lehrer)
//   document.write('<br>' + date + ':' + firstName + ' ' + lastName);
// }

// let firstName = 'Bernd';
// let lastName = 'Lustig';
// let date = '18.02.2001';

// outputFullName(firstName, lastName);
// outputFullName('Peter', lastName);
// outputFullName(firstName, 'Bäcker');

// /*To solve this problem, you would need to set 'date' as a parameter as well*/


// function outputFullName(firstName, lastName, birthDate) {
//   firstName = firstName.toUpperCase();
//   lastName = lastName.toUpperCase();
//   document.write('<br>' + birthDate + ':' + firstName + ' ' + lastName);
// }
// let firstName = 'Bernd';
// let lastName = 'Huber';
// let date = '18.02.2001';
// outputFullName(firstName, lastName, date);
// outputFullName('Hansi', lastName, date);

// showMessage(..) // Zeigt eine Nachricht an
// getAge(..) // gibt das Alter zurück
// calcSum(..) // Berechnet die Summe und gibt sie zurück
// createForm(..) // Erzeugt ein Formular und gibt es meistens zurück.
// checkPermission(..) // überprüft eine Berechtigung und gibt true oder false zurück.