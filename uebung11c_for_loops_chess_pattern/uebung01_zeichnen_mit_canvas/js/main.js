/*
Project: js-canvas
Author:  nottj
Date: 05.10.2022
*/



'use strict';
const appName = 'Übung01 Zeichnen mit Canvas';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 800; //width of the canvas (in pixel)
myCanvas.height = 800; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level 

ctx.fillStyle = 'white'; //sets color to white
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas




//this creates a blue line from '20,20' to '220,400'.
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(220,400);
ctx.strokeStyle='blue';
ctx.stroke();

//this creates a line from '275,70' to '250,400'.
ctx.beginPath();
ctx.moveTo(275,70);
ctx.lineTo(250,400);
ctx.strokeStyle='red';
ctx.stroke();

//and this creates a line from '380,0' to '0,380'.
ctx.beginPath();
ctx.moveTo(380,0);
ctx.lineTo(0,380);
ctx.strokeStyle='green';
ctx.stroke();



//small hint from David Ortner (without him I probably wouldn't have been able to do that);D
//the following lines create an octagon
ctx.beginPath();
ctx.moveTo(525,420);
ctx.lineTo(675,420);
ctx.lineTo(780,525);
ctx.lineTo(780,675);
ctx.lineTo(675,780);
ctx.lineTo(525,780);
ctx.lineTo(420,675);
ctx.lineTo(420,525);
ctx.lineTo(525,420);
ctx.strokeStyle='indigo';
ctx.stroke();



//the next couple of lines seperate the canvas in 4 quadrants 
ctx.beginPath();
ctx.moveTo(400,0);
ctx.lineTo(400,800);
ctx.moveTo(0,400);
ctx.lineTo(800,400);
ctx.strokeStyle='black';
ctx.stroke(); 



//here a desktop computer with peripherals will be created and colorized :D
ctx.beginPath();
ctx.moveTo(450,50);//the next few lines build a monitor
ctx.lineTo(750,50);
ctx.lineTo(750,200);
ctx.lineTo(450,200);
ctx.lineTo(450,50);
ctx.moveTo(450,200);
ctx.lineTo(450,220);
ctx.lineTo(750,220);
ctx.lineTo(750,200);
ctx.moveTo(630,220);
ctx.lineTo(630,250);
ctx.lineTo(580,250);
ctx.lineTo(580,220);
ctx.moveTo(550,250);
ctx.lineTo(660,250);
ctx.fillStyle='black';
ctx.fillRect(450,50,300,150);
ctx.fillStyle='silver';
ctx.fillRect(450,200,300,20);
ctx.fillStyle='silver';
ctx.fillRect(580,220,50,30);

ctx.moveTo(420,300);//creates a keyboard with a cable
ctx.lineTo(520,300);
ctx.lineTo(520,340);
ctx.lineTo(420,340);
ctx.lineTo(420,300);
ctx.fillStyle='#1c1c1c'; //here i used a hex-code for some shade of grey ;D
ctx.fillRect(420,300,100,40);
ctx.moveTo(470,300);
ctx.lineTo(470,290);
ctx.quadraticCurveTo(470,230,680,283);

ctx.moveTo(680,230);//creates a PC
ctx.lineTo(760,230);
ctx.lineTo(760,380);
ctx.lineTo(680,380);
ctx.lineTo(680,230);
ctx.moveTo(680,260);
ctx.lineTo(760,260);
ctx.moveTo(680,280);
ctx.lineTo(760,280);
ctx.moveTo(680,300);
ctx.lineTo(760,300);
ctx.fillStyle='silver';
ctx.fillRect(680,230,80,150);

ctx.moveTo(700,230);//builds a mouspad
ctx.lineTo(700,220);
ctx.roundRect(575,300,75,75,[12]);
ctx.fillStyle='gray';
ctx.fillRect(575,300,75,75,[12]);

ctx.roundRect(590,320,30,50,[5]);//and a mouse with a cable
ctx.fillStyle='#313631';
ctx.fillRect(590,320,30,50,[5]);
ctx.moveTo(605,320);
ctx.lineTo(605,310);
ctx.quadraticCurveTo(605,280,680,286);
ctx.moveTo(605,320);
ctx.lineTo(605,340);

ctx.lineWidth='1.625';
ctx.strokeStyle='dark grey';
ctx.stroke();

//++Exercise
//creation of an envelope with only one 'moveTo'- command
ctx.beginPath();
ctx.moveTo(100,700);
ctx.lineTo(100,600);
ctx.lineTo(300,700);
ctx.lineTo(300,600);
ctx.lineTo(100,600);
ctx.lineTo(200,525);
ctx.lineTo(300,600);
ctx.lineTo(100,700);
ctx.lineTo(300,700);
ctx.strokeStyle='darkblue';
ctx.stroke();