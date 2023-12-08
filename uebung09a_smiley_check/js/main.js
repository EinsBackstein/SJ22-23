/*
Project: uebung09a_smiley_check
Author:  nottj
Date: 21.12.2022
*/



'use strict';
const appName = 'Übung09a_smiley_check';
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

let shiftX = 0 ;
let shiftY = 0 ;

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

let jnXPosYellowCircle = Number(prompt('Bitte geben Sie die X-Position des Kreises ein' ,myCanvas.width/2));

//if the x-coordinate is negative, the programm is stopped
if (jnXPosYellowCircle < 0) {
  alert('Bitte keine negativen Zahlen eingeben');
  throw new Error('Negative Zahl unzulässig');
}
//if the x-coordinate is not a number, the programm is also stopped
if (isNaN(jnXPosYellowCircle)) {
  alert('Keine Zahl eingegeben');
  throw new Error('Keine Zahl eingegeben');
}

let jnYPosYellowCircle = Number(prompt( 'Bitte geben Sie die Y-Position des Kreises ein' , myCanvas.height/2));

//if the y-coordinate is negative, the programm is stopped
if (jnYPosYellowCircle < 0) {
  alert('Bitte keine negativen Zahlen eingeben');
  throw new Error('Negative Zahl unzulässig');
}

//if the y-coordinate is not a number, the programm is also stopped
if (isNaN(jnYPosYellowCircle)) {
  alert('Keine Zahl eingegeben');
  throw new Error('Keine Zahl eingegeben');
}

let jnRadiusYellowCircle = Number(prompt('Bitte geben Sie den Radius des Kreises ein',myCanvas.width/6));

//if the radius is negative, the programm is stopped
if (jnRadiusYellowCircle < 0) {
  alert('Bitte keine negativen Zahlen eingeben');
  throw new Error('Negative Zahl unzulässig');
}

//if the radius is not a number, the programm is also stopped
if (isNaN(jnRadiusYellowCircle)) {
  alert('Keine Zahl eingegeben');
  throw new Error('Keine Zahl eingegeben');
}


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

let jnXPosEllipse = jnXPosYellowCircle;
let jnYPosEllipse = jnYPosYellowCircle-jnRadiusYellowCircle/3.5 ;
let jnXRadiusEllipse = jnRadiusYellowCircle*0.75 ;
let jnYRadiusEllipse = jnRadiusYellowCircle*0.5 ;

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
/*
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

*/
//this above was the old programm04 with only small changes now starts the new programm

//these are the coordinates, that are not allowed in the canvas

let rNotOk = jnRadiusYellowCircle ;
let yNotOkPos = jnYPosYellowCircle+jnRadiusYellowCircle ;
let xNotOkPos = jnXPosYellowCircle+jnRadiusYellowCircle ;
let yNotOkNeg = jnYPosYellowCircle-jnRadiusYellowCircle ;
let xNotOkNeg = jnXPosYellowCircle-jnRadiusYellowCircle ;

//function for drawing the red circle
function drawRedCircle () {
  ctx.beginPath();
  ctx.arc(length/2,length/2,length/5,0,2*Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
}

//function for drawing the smiley
function drawNormalSmiley () {

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
}

//if something is not okay

if(yNotOkPos>length){
  //y to big
  alert('Größe der Y-Koordinate zu Groß');
  drawRedCircle();
  throw new Error('Hmmm...etwas hat wohl nicht gepasst');
}else if (yNotOkNeg < 0){
  //y to small
  alert('Größe der Y-Koordinate zu Klein');
  drawRedCircle();
  throw new Error('Hmmm...etwas hat wohl nicht gepasst');
} else if(xNotOkPos>length){
  //x to big
  alert('Größe der Y-Koordinate zu Groß');
  drawRedCircle();
  throw new Error('Hmmm...etwas hat wohl nicht gepasst');
}else if (xNotOkNeg < 0){
  //x to small
  alert('Größe der Y-Koordinate zu Klein');
  drawRedCircle();
  throw new Error('Hmmm...etwas hat wohl nicht gepasst');
} else if (rNotOk>length/2) {
  //radius to big
  alert('Radius zu Groß');
  drawRedCircle();
  throw new Error('Hmmm...etwas hat wohl nicht gepasst');
} else if (rNotOk <= 0) {
  //radius too small
  alert('Radius zu klein');
  drawRedCircle();
  throw new Error('Hmmm...etwas hat wohl nicht gepasst');
} else {
  //everything ok
  alert('Alle Werte OK');
  drawNormalSmiley();
}

