/*
Project: 
Author:  nottj
Date:    11.09.2022
*/

'use strict';
const APPNAME = 'Eine Dunkle Höhle';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;



let speed = prompt('Entscheide dich, denn deine Entscheidung wird die Zukunft deiner Nachkommen bestimmen, aber wähle deine Zahl weise, denn jene Entscheidung wird Konsequenzen tragen ');

if (speed <=100) {

  document.write(' <figure> <img src="kobold.jpg"alt="Schade...der Hodenkobold hat deine Eier gepolt"/><figcaption>Der Hodenkobold klaut dir deine Eier</figcaption></figure>');
} else  {
  document.write(' <figure> <img src="coolerkobold.jpg"alt="Der Hodenkobold mag dich...noch"/><figcaption>Der Hodenkobold mag dich...............noch</figcaption></figure>');
}

