/*
Project: uebung11b_for_loops_basic
Author:  nottj
Date:    18.01.2023
*/

'use strict';
const APPNAME = 'Übung 11b for_loops_basic';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;



//1


//This counts every number from 1 to a specific endpoint together in an endpoint


let endPoint = Number(prompt('Bitte geben Sie ein, wie viele Schleifen Sie machen wollen: '));

let endSum = 0;

for(let i = 1;i <= endPoint; i++){

  endSum += i;  

}

alert(`Die Endsumme beträgt ${endSum}, bei einem Endwert von ${endPoint}`);


//2


//This checks, which numbers from a startpoint to an endpoint are dividable be 3 and 5 without remainder


let startPoint = Number(prompt('Bitte geben Sie den Startwert ein: '));

let endPoint2 = Number(prompt('Bitte geben Sie den Endwert ein: '));

for(let i = startPoint;i <= endPoint2; i++){
  
  if((i % 5) == 0 && (i % 3) == 0){
    document.write(`<p style="color:red">${i} ist durch 3 und 5 ohne Rest teilbar.</p>`);
  } else if((i % 5) == 0){
    document.write(`<p style="color:blue">${i} ist durch 5 ohne Rest teilbar.</p>`);
  } else if ((i % 3) == 0){
    document.write(`<p style="color:green">${i} ist durch 3 ohne Rest teilbar.</p>`);
  }
}


//3


//This just prints out a "countdown" from a startpoint down to zero


let startPoint2 = Number(prompt('Bitte geben Sie einen Startpunkt ein: '));

for(let i = startPoint2;i >= 0; i--){
  if(i>0){
    document.write(`${i} - `);
  }else if(i == 0){
    document.write('fertig');
  }
}

