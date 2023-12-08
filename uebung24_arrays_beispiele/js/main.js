/*
Project: uebung24_arrays_beispiele
Author:  nottj
Date:    01.03.2023
*/

'use strict';
const APPNAME = 'Übung 24 Arrays Beispiele';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//Basic

//functions

//This function is here to get the highest number out of an array

function getMax(numberArray){
  let biggestNumber = 0;
  for(let number of numberArray){
    if(number>biggestNumber){
      biggestNumber = number;
    }
  }
  return biggestNumber;
}

//This function is here to check, if a number is even. If it is, it gets added to the end of the array

function addEvenNumber(numberArray, num){
  if(num%2==0){
    numberArray.push(num);
  }
}

//This function is here to convert an array of multiple strings into one singular string

function convertToSingleString(stringArray){
  let string = '';
  for(let word of stringArray){
    string += word;
  }
  return string;
}

//This function is here to replace a certain item in array for another one

function replaceElement(array, elementThatGetsReplaces, replacedElement){
  for(let i = 0; i < array.length; i++){
    if(array[i]==elementThatGetsReplaces){
      array.splice(i,1,replacedElement);
    }
  }
}

//Erweitert

//This function checks all numbers in an array, if they are dividable by a certain divider. If not, it gets "rounded" up to the next dividable number

function correctElement(array,divider){
  let adjustedArray = [];

  for (let number of array) {
    let i = 0;
    while(number%divider!=0){
      number++;
    }

    let adjustedNumber = number + i;
    adjustedArray.push(adjustedNumber);
  }

  return adjustedArray;
}

//This function is here to get the smallest and the biggest number of an array

function getMinAndMax(array){
  let smallNumber = 1/0;
  let bigNumber = -1/0;
  for (let number of array) {
    if (number < smallNumber) {
      smallNumber = number;
    }
    if (number > bigNumber) {
      bigNumber = number;
    }
  }
  let minMax = [smallNumber, bigNumber];
  return minMax;
}

//This function is here to add numbers to an array. While adding, they get sorted by size

function addSortedNumbers(array, numberToAdd){
  let i = 0; 
  if(array.length==0){
    array.push(numberToAdd);
  }
  if(array[i]>numberToAdd){
    array.splice(i,0,numberToAdd);
  }
  while(array[i]<numberToAdd){
    i++;
    if(array[i]>numberToAdd){
      array.splice(i,0,numberToAdd);
    }
  }
}

//main-code

//Here all the arrays for the tests are created

let maxArray = [1,8,3,6,7,4];

let evenNumberArray = [2,4,8,6];

let singleStringConversionArray = ['Heute', 'ist', 'Regen', 'angesagt'];

let elementReplaceArray = [1,3,4,6,4,8,7];

let correctElementArray = [1,4,22,37,16,18];

let minMaxArray = [7,2,8,3,4];

let emptyArray = [];

//And here all the functions are tesed if they work like intended

alert(getMax(maxArray));

addEvenNumber(evenNumberArray,4);

alert(convertToSingleString(singleStringConversionArray));

replaceElement(elementReplaceArray,4,5);

let correctedArray = correctElement(correctElementArray,4);

alert(getMinAndMax(minMaxArray));


addSortedNumbers(emptyArray, 16);
addSortedNumbers(emptyArray, 11);
addSortedNumbers(emptyArray, 2);
addSortedNumbers(emptyArray, 15);
addSortedNumbers(emptyArray, 4);

for(let number of emptyArray){
  document.write(number);
}

