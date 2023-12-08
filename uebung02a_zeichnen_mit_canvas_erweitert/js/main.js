/* Project: uebung02a_zeichnen_mit_canvas_erweitert
Author:  nottj
Date: 19.10.2022 */

'use strict';
const appName = 'uebung02a_zeichnen_mit_canvas_erweitert';
document
  .getElementById('myTitle')
  .innerText = appName;
document
  .getElementById('myHeading')
  .innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 1000; //width of the canvas (in pixel)
myCanvas.height = 1000; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas

//draws a vertical and horizontal line which seperates the canvas in 4 quadrants
ctx.beginPath();
ctx.moveTo(0,500);
ctx.lineTo(1000,500);
ctx.moveTo(500,0);
ctx.lineTo(500,1000);
ctx.strokeStyle='#000000';
ctx.stroke();

//creates the green circle in the top right quadrant
ctx.beginPath();
ctx.arc(750,250,250,0,2*Math.PI);
ctx.fillStyle='green';
ctx.fill();
ctx.stroke();

//creates a blue rectangle in the top left quadrant
ctx.beginPath();
ctx.strokeRect(187.5,125,125,250);
ctx.fillStyle='blue';
ctx.fillRect(187.5,125,125,250);
ctx.stroke();

//creates a red square in the bottom left quadrant
ctx.beginPath();
ctx.strokeRect(125,625,250,250);
ctx.fillStyle='red';
ctx.fillRect(125,625,250,250);
ctx.stroke();

//creates a yellow circle in the bottom right quadrant
ctx.beginPath();
ctx.arc(750,750,187.5,0,2*Math.PI);
ctx.fillStyle='yellow';
ctx.fill();
ctx.stroke();

//draws a line from the blue rectangle to the green circle
ctx.beginPath();
ctx.moveTo(312.5,250);
ctx.lineTo(500,250);
ctx.stroke();

//draws a line from the blue rectangle to the red square
ctx.beginPath();
ctx.moveTo(250,375);
ctx.lineTo(250,625);
ctx.stroke();

//draws a line from the red square to the yellow circle
ctx.beginPath();
ctx.moveTo(375,750);
ctx.lineTo(562.5,750);
ctx.stroke();