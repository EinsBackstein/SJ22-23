/*
Project: uebung04-variables_smiley
Author:  nottj
Date: 16.11.2022
*/



'use strict';
const appName = 'Übung04-variables_smiley';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 800; //width of the canvas (in pixel)
myCanvas.height = 800; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level 

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas

//variable for the the standard length of the canvas

let length = myCanvas.height; // or .width, doesn't mater

//variables for the "shift command"

let shiftX = prompt() ;
let shiftY = prompt() ;

//variables to make the shift command easier to write

let shiftXCommand = shiftX*0.25*length;
let shiftYCommand = shiftY*0.25*length;

//variables for the seperating of the canvas

let topDownLineStart = myCanvas.width/2;
let topDownLineEnd = myCanvas.height;
let leftRightLineStart = myCanvas.height/2;
let leftRightLineEnd = myCanvas.width;
let pointZero = 0;

//variables for the yellow circle

let jnXPosYellowCircle = myCanvas.width/2 ;
let jnYPosYellowCircle = myCanvas.height/2;
let jnRadiusYellowCircle = myCanvas.width/6;
let jnXPosYellowCircleShift = jnXPosYellowCircle+shiftXCommand;
let jnYPosYellowCircleShift = jnYPosYellowCircle+shiftYCommand;

//variables for the green square

let jnXPosGreenSquare = jnXPosYellowCircle-jnRadiusYellowCircle/4.5+shiftXCommand;
let jnYPosGreenSquare = jnYPosYellowCircle-jnRadiusYellowCircle/4.5+shiftYCommand;
let jnGreenSquareLength = jnRadiusYellowCircle/2.5 ;

//variables for the blue circle

let jnXPosBlueCircle = jnXPosYellowCircle + jnRadiusYellowCircle/2.2+shiftXCommand ;
let jnYPosBlueCircle = jnYPosYellowCircle + jnRadiusYellowCircle/2.2+shiftYCommand ;
let jnRadiusRedCircle = jnRadiusYellowCircle/5 ;

//variables for the red circle

let jnXPosRedCircle= jnXPosYellowCircle-jnRadiusYellowCircle/2.2+shiftXCommand;
let jnYPosRedCircle= jnYPosYellowCircle+jnRadiusYellowCircle/2.2+shiftYCommand;
let jnRadiusBlueCircle= jnRadiusYellowCircle/5;

//variables for the ellipse

let jnXPosEllipse = 0.5*length ;
let jnYPosEllipse = 0.4625*length ;
let jnXRadiusEllipse = 0.0825*length ;
let jnYRadiusEllipse = 0.075*length ;

//variables for the colors

let colorYellow = 'yellow' ;
let colorGreen = 'green' ;
let colorBlue = 'blue' ;
let colorRed = 'red' ;
let colorBlack = 'black' ;



//the next couple of lines seperate the canvas in 4 quadrants 

ctx.beginPath();
ctx.moveTo(topDownLineStart,pointZero);
ctx.lineTo(topDownLineStart,topDownLineEnd);
ctx.moveTo(pointZero,leftRightLineStart);
ctx.lineTo(leftRightLineEnd,leftRightLineStart);
ctx.strokeStyle=colorBlack;
ctx.stroke(); 

//smiley

//yellow circle

ctx.beginPath();
ctx.arc(jnXPosYellowCircleShift,jnYPosYellowCircleShift,jnRadiusYellowCircle,0,2*Math.PI);
ctx.fillStyle=colorYellow;
ctx.fill();
ctx.stroke();

//nose

ctx.beginPath();
ctx.fillStyle=colorGreen;
ctx.strokeRect(jnXPosGreenSquare,jnYPosGreenSquare,jnGreenSquareLength,jnGreenSquareLength);
ctx.fillRect(jnXPosGreenSquare,jnYPosGreenSquare,jnGreenSquareLength,jnGreenSquareLength);
ctx.stroke();

//blue eye

ctx.beginPath();
ctx.fillStyle=colorBlue;
ctx.arc(jnXPosBlueCircle,jnYPosBlueCircle,jnRadiusBlueCircle,0,2*Math.PI);
ctx.fill();
ctx.stroke();

//red eye

ctx.beginPath();
ctx.fillStyle=colorRed;
ctx.arc(jnXPosRedCircle,jnYPosRedCircle,jnRadiusRedCircle,0,2*Math.PI);
ctx.fill();
ctx.stroke();

//smiling mouth/ellipse

ctx.beginPath();
ctx.ellipse(jnXPosEllipse+shiftXCommand, jnYPosEllipse+shiftYCommand, jnXRadiusEllipse, jnYRadiusEllipse,0,0,Math.PI,true);
ctx.stroke();
