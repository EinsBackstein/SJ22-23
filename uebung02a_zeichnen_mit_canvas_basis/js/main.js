/* Project: uebung02a_zeichnen_mit_canvas_basis
Author:  nottj
Date: 19.10.2022 */

'use strict';
const appName = 'uebung02a_zeichnen_mit_canvas_basis';
document
  .getElementById('myTitle')
  .innerText = appName;
document
  .getElementById('myHeading')
  .innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 2000; //width of the canvas (in pixel)
myCanvas.height = 2000; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas

//circle 1
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
ctx.strokeStyle = 'indigo';
ctx.fillStyle = 'indigo';
ctx.fill();
ctx.stroke();

//circle 2
ctx.beginPath();
ctx.arc(1000, 1000, 500, 0, 2 * Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();

//circle 3
ctx.beginPath();
ctx.arc(1000, 1000, 1000, 0, 2 * Math.PI);
ctx.strokeStyle = 'red';
ctx.stroke();

// This creates 2 lines which seperate the "middle-sized" circle in 3 quadrants
ctx.beginPath();
ctx.moveTo(1000, 500);
ctx.lineTo(1000, 1000);
ctx.moveTo(500, 1000);
ctx.lineTo(1500, 1000);
ctx.strokeStyle = 'black';
ctx.stroke();

//creates 3 lines 

//line1
ctx.beginPath();
ctx.moveTo(950, 950);
ctx.lineTo(650, 650);
ctx.strokeStyle = 'green';
ctx.stroke();
//line2
ctx.beginPath();
ctx.moveTo(910, 980);
ctx.lineTo(990, 620);
ctx.strokeStyle = 'blue';
ctx.stroke();
//line3
ctx.beginPath();
ctx.moveTo(670, 923);
ctx.lineTo(990, 923);
ctx.strokeStyle = 'red';
ctx.stroke();

//This creates a red square
ctx.beginPath();
ctx.strokeRect(1250, 750, 150, 150);
ctx.fillStyle = 'red';
ctx.fillRect(1250, 750, 150, 150);
ctx.stroke();
//This creates a blue square with a black border
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.strokeRect(1020, 600, 200, 200);
ctx.fillStyle = 'blue';
ctx.fillRect(1020, 600, 200, 200);
ctx.stroke();

//This creates a rectangle which is filled yellow
ctx.beginPath();
ctx.strokeRect(600, 1050, 400, 200);
ctx.fillStyle = 'rgb(255,255,0)';
ctx.fillRect(600, 1050, 400, 200);
ctx.stroke();
//This creates a rectangle which is filled with nothing
ctx.beginPath();
ctx.strokeRect(1050, 1050, 300, 200);
ctx.stroke();