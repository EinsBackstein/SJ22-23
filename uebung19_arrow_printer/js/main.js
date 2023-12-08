/*
Project: uebung19_arrow_printer
Author:  nottj
Date:    22.03.2023
*/

'use strict';
const APPNAME = 'Übung19 Arrow Printer';

document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//functfions

//The createRow-function essentially takes three inputs and builds a row of an arrow

function createRow(border, fill, rowNumber){
  let fillString = '';
  if(rowNumber==1){//if its the first row, only one border-symbol is returned
    return border;
  }else if(rowNumber==2){//if its the second row. two border.symbols are returned
    return border + border;
  }else{//if its row 3 or higher, the function builds the row using an amount of fill-symbols encased by two borders
    for(let i = 1;i <= (rowNumber-2);i++){
      fillString = fillString +fill;
    }
    return (border + fillString + border);
  }
}

//main code

//Here all the important variables for the arrow are declared

let borderStyle = prompt('Welches Symbol wollen Sie als Umrandung haben?: ');
let fillStyle = prompt('Welches Symbol wollen Sie als Füllung haben?:');
let numberOfRows = Number(prompt('Wie viele Zeilen soll der Pfeil haben?:'));
let upOrDown = prompt('Pfeil nach oben oder unten (o -> oben; u ->unten)?');

//Here the input for the number of rows is checked

if(isNaN(numberOfRows||0>numberOfRows||!Number.isInteger(numberOfRows))){
  throw new Error('Inkorrekte Eingabe der Reihenanzahl');
}

//Now, the input for the arrow-direction is checked

upOrDown = upOrDown.toLowerCase();

while(upOrDown != 'o' && upOrDown != 'u'){
  upOrDown = prompt('Pfeil nach oben oder unten (o -> oben; u ->unten)?');
}

//I need these three variables for the +++-exercise

let startRow;
let endRow;
let increment;

//With this if-else, the variables are changed to produce an upcoming or downgoing arrow

if(upOrDown == 'o'){
  startRow = 1;
  endRow = numberOfRows;
  increment = 1;
}else{
  startRow = numberOfRows;
  endRow = 1;
  increment = -1;
}

document.write('<p style="text-align:center">');

//Here, the arrow actually gets created and printed

for(let i = startRow; i != endRow+increment; i = i + increment){
  document.write(createRow(borderStyle, fillStyle, i) + '<br>');
}