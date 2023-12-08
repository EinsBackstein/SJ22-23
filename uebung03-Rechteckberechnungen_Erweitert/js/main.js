/*
Project: uebung03-Rechteckberechnung_Erweitert
Author:  nottj
Date: 09.11.2022
*/

'use strict';
const appName = 'Übung03-Rechteckberechnung_Erweitert';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 600; //width of the canvas (in pixel)
myCanvas.height = 600; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level 

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas


//all the variables for the two lines for the quadrants
let topMiddle = myCanvas.width/2;
let leftMiddle = myCanvas.height/2;
let start = 0;
let bottomMiddle = myCanvas.height;
let rightMiddle = myCanvas.width;

// all the variables for the first square
let xStartPoint = myCanvas.width*0.4;
let yStartPoint = myCanvas.height*0.4;
let squareLength = myCanvas.width/5;

//all the variables for the second square
let secXStartPoint = myCanvas.width*0.7;
let secYStartPoint = myCanvas.height*0.7;
let secQuaLength = squareLength*0.5;

//this creates the 4 quadrants
ctx.beginPath();
ctx.moveTo(topMiddle,start);
ctx.lineTo(topMiddle,bottomMiddle);
ctx.moveTo(start,leftMiddle);
ctx.lineTo(rightMiddle,leftMiddle);
ctx.stroke();


//this creates the first square
ctx.beginPath();
ctx.strokeRect(xStartPoint,yStartPoint,squareLength,squareLength);
ctx.stroke();


//this creates the second square
ctx.beginPath();
ctx.strokeRect(secXStartPoint,secYStartPoint,secQuaLength,secQuaLength);
ctx.stroke();