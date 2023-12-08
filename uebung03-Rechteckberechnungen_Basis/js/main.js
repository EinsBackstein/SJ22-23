/*
Project: uebung03-Rechteckberechnung_Basis
Author:  nottj
Date: 09.11.2022
*/

'use strict';
const appName = 'Übung03-Rechteckberechnung_Basis';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 1000; //width of the canvas (in pixel)
myCanvas.height = 1000; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level 

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas

let rectangleWidth = myCanvas.width/4.5; //specifies the width of the first rectangle
let rectangleHeight = myCanvas.height/3; //specifies the height of the first rectangle
let rectanglePerimeter = 2*rectangleWidth+2*rectangleHeight; // specifies the perimeter of the first rectangle
let rectangleArea = rectangleHeight*rectangleWidth; // specifies the area of the first rectangle

let xPosRect = myCanvas.width/10; // specifies the x-start-point of the first rectangle
let yPosRect = myCanvas.height/10; // specifies the y-start-point of the first rectangle

let colorInd = 'indigo'; //specifies the stroke-color value to "indigo"
let fillColorInd= 'indigo'; //specifies the fill-color value to "indigo"

//creates a little text which tells me the height of my firts rectangle
document.write('<div>');
document.write('height:'+ rectangleHeight);
document.write('</div>');

//creates a little text which tells me the width of my firts rectangle
document.write('<div>');
document.write('width:'+ rectangleWidth);
document.write('</div>');

//creates a little text which tells me the perimeter of my firts rectangle
document.write('<div>');
document.write('perimeter:'+ rectanglePerimeter);
document.write('</div>');

//creates a little text which tells me the area of my firts rectangle
document.write('<div>');
document.write('area:'+ rectangleArea);
document.write('</div>');


//draws the first rectangle
ctx.beginPath();
ctx.strokeStyle= colorInd;
ctx.fillStyle= fillColorInd;
ctx.strokeRect(xPosRect,yPosRect,rectangleWidth,rectangleHeight);
ctx.fillRect(xPosRect,yPosRect,rectangleWidth,rectangleHeight);
ctx.stroke();

let secRectWidth = rectangleWidth*2; //specifies the width of the second rectangle
let secRectHeight = rectangleHeight/4; //specifies the height of the second rectangle

let colorYel = 'yellow'; //specifies the stroke-color value to "yellow"
let fillColorYel = 'yellow'; //specifies the fill-color value to "yellow"

let xPosRect2 = myCanvas.width/3.5; //specifies the x-start-point of the second rectangle
let yPosRect2 = myCanvas.height/2; //specifies the y-start-point of the second rectangle

//draws the second rectangle
ctx.beginPath();
ctx.strokeStyle=colorYel;
ctx.fillStyle=fillColorYel;
ctx.strokeRect(xPosRect2,yPosRect2,secRectWidth,secRectHeight);
ctx.fillRect(xPosRect2,yPosRect2,secRectWidth,secRectHeight);
ctx.stroke();