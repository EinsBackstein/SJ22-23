/*
Project: uebung21_functions_kreise
Author:  nottj
Date: 12.04.2023
*/

'use strict';
const appName = 'Übung21 Functions Kreise';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 800; //width of the canvas (in pixel)
myCanvas.height = 800; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level 

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas

//functions

//This function is here to check if 2 coordinates have the same value

function hasSameCoordinate(coordCircleA, coordCircleB){
  if(coordCircleA == coordCircleB){
    return true;
  }
  return false;
}

//This function is here to check if an input is ok

function checkInput(input) {
  input = Number(input);
  if (input >= 0 && input != '' && !isNaN(input)) {
    return true;
  }else{
    return false;
  }
}

//This function checks if 2 circles have the same size by comparing the radius

function hasSameSize(radiusCircleA, radiusCircleB){
  if(radiusCircleA==radiusCircleB){
    return true;
  }
  return false;
}

//This function is here to draw a circle on the canvas..

function drawCircle(ctx, color, radius, x, y){
  if(isInCanvas(x,y,radius)==true){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.strokeStyle=color;
    ctx.stroke();
  }else{
    //..or if something isn't ok, the circle won't be drawn at all
    alert('Kreis kann nict gezeichnet werden, da er außerhalb der Canvas liegt');
  }
}

//This function checks, if a circle is positioned in the canvas

function isInCanvas(x,y,radius){
  if(x-radius<0||x+radius>myCanvas.width||y-radius<0||y+radius>myCanvas.width||radius <= 0||radius > myCanvas.width/2){
    return false;
  }
  return true;
}

//main-code

//These here are the coordinates for both circles

let xCordCircleA = prompt('Bitte geben Sie die x-Koordinate des ersten Kreises ein');

let yCordCircleA = prompt('Bitte geben Sie die y-Koordinate des ersten Kreises ein');

let xCordCircleB = prompt('Bitte geben Sie die x-Koordinate des zweiten Kreises ein');

let yCordCircleB = prompt('Bitte geben Sie die y-Koordinate des zweiten Kreises ein');

let sameCenter = '';

//These while-loops are used for getting a correct input

while(checkInput(xCordCircleA)==false){
  alert('Die Eingabe für die x-Koordinate des ersten Kreises ist nicht korrekt! Bitte erneut eingeben');
  xCordCircleA = prompt('Bitte geben Sie die x-Koordinate des ersten Kreises ein');
}
while(checkInput(yCordCircleA)==false){
  alert('Die Eingabe für die y-Koordinate des ersten Kreises ist nicht korrekt! Bitte erneut eingeben');
  yCordCircleA = prompt('Bitte geben Sie die y-Koordinate des ersten Kreises ein');
}
while(checkInput(xCordCircleB)==false){
  alert('Die Eingabe für die x-Koordinate des zweiten Kreises ist nicht korrekt! Bitte erneut eingeben');
  xCordCircleB = prompt('Bitte geben Sie die x-Koordinate des zweiten Kreises ein');
}
while(checkInput(yCordCircleB)==false){
  alert('Die Eingabe für die y-Koordinate des zweiten Kreises ist nicht korrekt! Bitte erneut eingeben');
  yCordCircleB = prompt('Bitte geben Sie die y-Koordinate des zweiten Kreises ein');
}

//This here checks, if two circles have the same position

if(hasSameCoordinate(xCordCircleA, xCordCircleB)==true&&hasSameCoordinate(yCordCircleA, yCordCircleB)==true){
  sameCenter = true;
}else{
  sameCenter = false;
}

//Here are the 2 radiy (i have no idea what the plural of radius is)

let radiusCircleA = prompt('Bitte geben Sie den Radius des ersten Kreises ein: ');
let radiusCircleB = prompt('Bitte geben Sie den Radius des zweiten Kreises ein: ');

//Now, the value, if the two circles have the same size, gets saved

let sameSize = hasSameSize(radiusCircleA, radiusCircleB);

if(sameCenter==true&&sameSize==true){//if both circles are exactly the same, they are drawn in blue
  alert('Kreise sind konzentrisch und gleich groß');
  drawCircle(ctx,'blue',radiusCircleA, xCordCircleA,yCordCircleA);
  drawCircle(ctx,'blue',radiusCircleB,xCordCircleB,yCordCircleB);
}else if(sameCenter==true&&sameSize==false){//if both circles have a different size but the same center, they are drawn in green
  alert('Kreise sind konzentrisch aber nicht gleich groß');
  drawCircle(ctx,'green',radiusCircleA, xCordCircleA,yCordCircleA);
  drawCircle(ctx,'green',radiusCircleB,xCordCircleB,yCordCircleB);
}else if(sameSize==true&&sameCenter==false){//if both circles have the same sie but a different center, they are drawn in yellow
  alert('Kreise sind gleich groß, aber nicht konzentrisch');
  drawCircle(ctx,'yellow',radiusCircleA, xCordCircleA,yCordCircleA);
  drawCircle(ctx,'yellow',radiusCircleB,xCordCircleB,yCordCircleB);
}else if(sameCenter==false&&sameSize==false){//if both circles have nothing special in common, they are drawn in red
  alert('Die Kreise sind nicht konzentrisch und nicht gleich groß');
  drawCircle(ctx,'red',radiusCircleA, xCordCircleA,yCordCircleA);
  drawCircle(ctx,'red',radiusCircleB,xCordCircleB,yCordCircleB);
}

