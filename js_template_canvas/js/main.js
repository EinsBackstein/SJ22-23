/*
Project: js-canvas
Author:  GAM/SOR
Date:    
*/

// Hilfreiche Links
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
// https://www.w3schools.com/tags/ref_canvas.asp

'use strict';
const appName = 'Canvas';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas ist die Leinwand
myCanvas.width = 400; // Breite der Leinwand in Pixel
myCanvas.height = 400; // Höhe der Leinwand in Pixel

let ctx = myCanvas.getContext('2d'); // ctx steht für Context und ist die Zeichenoberfläche der Leinwand

ctx.fillStyle = 'white'; //Füllfarbe auf WEISS setzen
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); // Zeichnet ein Rechteck, damit man sieht wie groß die Zeichenoberfläche ist. Füllt das Rechteck mit der Farbe WEISS aus

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); // Zeichnet ein Rechteck, damit man sieht wie groß die Zeichenoberfläche ist. Zeichnet die Umrandung des Rechtecks in der Farbe SCHWARZ. Schwarz wird verwendet, wenn keine andere Farbe gewählt wurde

ctx.beginPath(); 
ctx.moveTo(0, 0); // Gehe mit dem Stift zur Position (x,y)
ctx.lineTo(200, 100); //The x and y axis coordinate of the line's end point.
ctx.strokeStyle = 'blue'; // Farbe der Linie ist BLAU
ctx.stroke(); // Zeichne

