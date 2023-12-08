/*
Project: uebung12a_1x1
Author:  nottj
Date:    25.01.2023
*/

'use strict';
const APPNAME = 'Übung12a_1x1';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;


//a)
//simple 1x1

//Basicly, what happens is, the first foe-loop ist the first product of the multiplication, the second loop is the second product
//If one loop has finished, the other loop counts +1

for(let i= 1; i <=10;i++ ){
  for(let j= 1; j <=10;j++){
    document.write(`${i}x${j} = ${i*j} <br/>`);
  }
  document.write('<br/>');
}

//b)

//This is more or less the same, just with a prompt which tells us the endvalue of our 1x1

let oneXoneExtention = Number(prompt('Bitte geben Sie den Endwert ihres 1x1 ein: '));

//This if-statement checks, if a number is an integer and isn't 9

if(  Number.isInteger(oneXoneExtention) == true && oneXoneExtention !=9){

  for(let i= 1; i <=oneXoneExtention;i++ ){
    for(let j= 1; j <=oneXoneExtention;j++){
      document.write(`${i}x${j} = ${i*j} <br/>`);
    }
    document.write('<br/>');
  }

}







