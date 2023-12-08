/*
Project: uebung07b_user_login
Author:  nottj
Date:    07.12.2022
*/

'use strict';
const APPNAME = 'Übung07b User Login';
document
  .getElementById('myTitle')
  .innerText = APPNAME;
document
  .getElementById('myHeading')
  .innerText = APPNAME;


//variable for the input of a username
let userName = prompt('Benutzername: ', '');





if (userName == '') {
  alert('Bitte Benutzername eingeben');
  throw new Error('Bitte Benutzername eingeben');
}
//if the username is empty, the program is closed

let password = prompt('Kennwort: ', '');

//variable for the input of a password


//a constante for my birthday
const MonatTagJahrGeburtsdatum = '030708';


//basic script for a user login
if (password == MonatTagJahrGeburtsdatum) {
  alert('Benutzer "' + userName + '" ist erfolgreich angemeldet');
} else {
  alert('Benutzername oder Kennwort ist falsch!');

}


//Erweiterung


//variables for username and password
var jnUsername = 'nottj';
var jnPassword = 'lol';


//variable for the username-input
var username = prompt('Benutzername bitte', '');


//if the username input is empty, the program is closed
if (username == '') {
  alert('Bitte Benutzername eingeben');
  throw new Error('Bitte Benutzername eingeben');
}

//if the username is put in incorrect, the program is closed
if (username != jnUsername) {
  alert('Benutzername inkorrekt, bitte überprüfen!');
  throw new Error('Bitte Benutzername überprüfen');
}

//counting the tries of puting in a password
for (var tries = 0; tries < 3; tries++) {
  var input = prompt('Geben sie das Passwort ein:', '');
  if (input == jnPassword) {
    alert(//password correct, how many tries did you use?
      'Benutzer "' + jnUsername + '" ist erfolgreich angemeldet. Toll! Du hast dafür hast du nur ' + Number(tries + 1) + 'von 3 Versuchen gebraucht'
    );
    throw '';//everything else doesn't matter
  } else 
    alert(//wrong password, how often did you try yet
      'Passwort falsch. Das war Versuch ' + Number(tries + 1) + ' von 3'
    ); 
}
//if the password was put in wrong more than 3 times, the program also will be closed 
if (tries == 3) {
  if (input != jnPassword) {
    alert(
      'Das Passwort war zu oft falsch, die Anmeldung ist fehlgeschlagen und der Selbs' +
            'tzerstörungsmodus wird initialisiert'
    );
    throw new Error('Passwort zu oft falsch');
  }
}
