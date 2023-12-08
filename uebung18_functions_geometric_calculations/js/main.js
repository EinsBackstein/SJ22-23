/*
Project: uebung18_functions_geometric_calculations
Author:  nottj
Date:    15.03.2023
*/

'use strict';
const APPNAME = 'Übung18 Functions Geometric Calculations';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//functions

//This function is here to check the input number

function checkInput(input) {
  input = Number(input);
  if (input >= 0 && input != '' && !isNaN(input)) {
    return true;
  }else{
    return false;
  }
}

//This function just spits out an error

function showErrorMessage(){
  alert('Etwas hat wohl nicht funktioniert. Bitte überprüfen sie, ob sie eine positive Zahl eingegeben haben!');
}

//This function is here to calculate the area of a rectangle

function calcRectArea(width, height){
  if(checkInput(width) == false || checkInput(height) == false){
    return false;
  }
  let calculation = width*height;
  return calculation;
}

//This function is here to calculate the area of a square

function calcSquareArea(length){
  if(checkInput(length)==false){
    return false;
  }
  let calculation = length*length;
  return calculation; 
}

//This function is here to calculate the perimeter of a rectangle

function calcRectPerimeter(width, height){
  if(checkInput(width) == false || checkInput(height) == false){
    return false;
  }
  let calculation = (width*2) + (height*2);
  return calculation; 
}

//This function is here to calculate the perimeter of a square

function calcSquarePerimeter(length){
  if(checkInput(length)==false){
    return false;
  }
  let calculation = length*4;
  return calculation; 
}

//This function is here to check three lengths to see, which kind of triangle they construct

function checkTriangle(length1, length2, length3){
  if(checkInput(length1)==false||checkInput(length2)==false||checkInput(length3)==false){
    return false;
  }
  if(length1==length2 && length2==length3){
    return -1;
  }
  if(length1 == length2 || length1 == length3 || length2 == length3){
    return 1;
  }else{
    return 0;
  }
}

//This function is here to calculate the hypothenuse of a right-angled triangle

function calcHypot(leg1, leg2){
  if(checkInput(leg1)==false||checkInput(leg2)==false){
    return false;
  }
  leg1 *= leg1;
  leg2 *= leg2;
  let calculation = Math.sqrt(leg1 + leg2);
  return calculation;
}

//This function is here to calculate the perimeter of a right-angled triangle

function calcPerimeterRightTriangle(leg1, leg2, Hypotenuse){
  if(checkInput(leg1)==false||checkInput(leg2)==false||checkInput(Hypotenuse)==false){
    return false;
  }
  let calculation = leg1 + leg2 + Hypotenuse;
  return calculation;
}

//This function is here to calculate the area of a right-angled triangle

function calcRightangledTriangleArea(leg1, leg2){
  if(checkInput(leg1)==false||checkInput(leg2)==false){
    return false;
  }
  let calculation = leg1*leg2/2;
  return calculation;
}

//main-code

//Rectangle Area Calculation

let rectWidth = prompt('Wie breit ist Ihr Rechteck? ');
let rectHeight = prompt('Wie hoch ist Ihr Rechteck? ');

//The area is calculated by using the given function and putting in the two variables from up top

let rectArea = calcRectArea(rectWidth, rectHeight);

if(rectArea==false){
  showErrorMessage();
}else{
  alert(`Die Fläche ihres Rechtecks ${rectArea}`);
}

//Square Area Calculation

let squareLength = prompt('Wie lange ist eine Seite Ihres Quadrats? ');

//Here the area pf the square is calculated again by using the function and putting in the variable from 2 lines above

let squareArea = calcSquareArea(squareLength);

if(squareArea == false){
  showErrorMessage();
}else{
  alert(`Die Fläche des Quadrats beträgt ${squareArea}`);
}

//Rectangle Perimeter Calculation

rectWidth = prompt('Wie breit ist Ihr Rechteck? ');
rectHeight = prompt('Wie hoch ist Ihr Rechteck? ');

//Now the Perimeter of a rectangle gets calculated by using our function for it

let rectPerimeter = calcRectPerimeter(rectWidth, rectHeight);

if(rectPerimeter==false){
  showErrorMessage();
}else{
  alert(`Der Umfang des Rechtecks beträgt ${rectPerimeter}`);
}

//Square Perimeter Calculation

squareLength = prompt('Wie lange ist eine Seite Ihres Quadrats? ');

//Here the perimeter of the square is calculated using the designed function

let squarePerimeter = calcSquarePerimeter(squareLength);

if(squarePerimeter==false){
  showErrorMessage();
}else{
  alert(`Der Umfang des Quadrats beträgt ${squarePerimeter}`);
}

//Triangle Check

//For the triangle-checking we need three different variables for the three lengths

let triangleLength1 = Number(prompt('Wie lange ist die erste Seite des Dreiecks?'));
let triangleLength2 = Number(prompt('Wie lange ist die zweite Seite des Dreiecks?'));
let triangleLength3 = Number(prompt('Wie lange ist die dritte Seite des Dreiecks?'));

//Then, through the function it gets checked if it is a triangle and if it is, which kind of it

let typeOfTriangle = checkTriangle(triangleLength1, triangleLength2, triangleLength3);

//Here again, we get notified which kind of triangle we have put in

if(String(typeOfTriangle)=='false'){
  showErrorMessage();
}else{
  if(typeOfTriangle == -1){
    alert('Ihr Dreieck ist gleichseitig');
  }else if(typeOfTriangle == 1){
    alert('Ihr Dreieck ist gleichschenklig');
  }else if(typeOfTriangle == 0){
    alert('Ihr Dreieck ist allgemein');
  }
}

//Hypothenuse Calculation

let leg1 = Number(prompt('Wie lange ist die erste Kathete? '));
let leg2 = Number(prompt('Wie lange ist die zweite Kathete? '));

//Now the Hypothenuse of a triangle is calculated. I used .toFixed() here to get a cleaner Number

let Hypotenuse = Number(calcHypot(leg1, leg2)) ; //yes, this is english
Hypotenuse = Hypotenuse.toFixed(4);

if(Hypotenuse==false){
  showErrorMessage();
}else{
  alert(`Die Länge der Hypotenuse beträgt ${Hypotenuse}`);
}

//Perimeter Triangle Calculation

//Now we use the before calculated hypothenuse and the two other sides to calculate the perimeter of this triangle

let PerimeterOfTheRightangledTriangle = calcPerimeterRightTriangle(leg1, leg2, Hypotenuse);

if(PerimeterOfTheRightangledTriangle==false){
  showErrorMessage();
}else{
  alert(`Der Umfang des rechtwinkligen Dreieck beträgt ${PerimeterOfTheRightangledTriangle}`);
}

//Area Calculation Triangle

//And here I use them to calculate the area of our triangle

let RightangledTriangleArea = calcRightangledTriangleArea(leg1, leg2);

if(RightangledTriangleArea==false){
  showErrorMessage();
}else{
  alert(`Die Fläche des rechtwinkligen Dreiecks beträgt ${RightangledTriangleArea}`);
}