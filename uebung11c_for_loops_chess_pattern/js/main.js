/*
Project: uebung11c_for_loops_chess_pattern
Author:  nottj
Date: 18.01.2023
*/



'use strict';
const appName = 'Übung11c for_loops_chess_pattern';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//This prompt asks the user, how many rows/colums he wants to have on his chess board

let tiles = Number(prompt('Bitte geben Sie die Anzahl der Reihen / Spalte an (bitte mindestens 2)',8));

//This is just an error if the user didn't input a valid number

if(tiles < 2){
  alert('Können Sie nicht lesen? Mindestens 2 Reihen oder Spalten. Haben Sie schon einmal ein Schachbrett mit nur einem Feld gesehen??');
  throw new Error('Ungültige Zahl');
}else if(isNaN(tiles)){
  alert('Scheinbar können Sie auf ihrer Tastatur keine Zahl finden');
  throw new Error('Keine Zahl');
}

//This here specifies the length of the canvas

let length = tiles * 50;



let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = length ; //width of the canvas (in pixel)
myCanvas.height = length ; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level 

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas



//now, this is where the actual code starts

for(let j = 0; j < tiles; j++){//this first for-loop is here to switch around black and white tiles horizontally
  let squareXPos = j * 50 ;
  for(let i = 0; i < tiles; i++){//the second for.loop is there to switch around black and white tiles vertically
    let squareYPos = i*50 ;

    
    if((squareXPos%100)==0 &&(squareYPos%100)!=0){
      //if the xPosition of the square divided by 100 has a remainder of 0 and the yPosition has not, a black square is created
      //black square
      ctx.beginPath();
      ctx.rect(squareXPos,squareYPos,50,50);
      ctx.fillStyle='black';
      ctx.fill();
      ctx.stroke();
    }else if((squareXPos%100)!=0 && (squareYPos%100)==0){
      //if the yPosition of the square divided by 100 has a remainder of 0 and the xPosition has not, a black square is created
      //basically, what the two of them do is making a black square every second tile (somewhat diagonally)
      //black square
      ctx.beginPath();
      ctx.rect(squareXPos,squareYPos,50,50);
      ctx.fillStyle='black';
      ctx.fill();
      ctx.stroke();
    }
  }
} 