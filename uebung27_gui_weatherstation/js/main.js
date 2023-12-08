/*
Project: uebung27_gui_weatherstation
Author:  nottj
Date:    07.06.2023
*/

'use strict';
const APPNAME = 'Übung 27 GUI Wetterstation ☀️🌧️';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

let weatherArray = [];

//inputs

const inWeather = document.getElementById('inWeather');
const inWeatherSearch = document.getElementById('inWeatherSearch');
const inDay = document.getElementById('inDay');
const inNewInput = document.getElementById('inNewInput');
const msgInWeather = document.getElementById('msgInWeather');
const msgInWeatherSearch = document.getElementById('msgInWeatherSearch');
const msgInDay = document.getElementById('msgInDay');
const msgInNewInput = document.getElementById('msgInNewInput');

//buttons

const btnAdd = document.getElementById('btnAdd');
const btnSearch = document.getElementById('btnSearch');
const btnChange = document.getElementById('btnChange');
const btnShowAll = document.getElementById('btnShowAll');
const btnShowMin = document.getElementById('btnShowMin');
const btnShowMax = document.getElementById('btnShowMax');
const btnShowAverage = document.getElementById('btnShowAverage');

//text-areas

const output = document.getElementById('output');

//functions

//This function is here to get the smallest number in an array

function getMin(numberArray){
  let smallestNumber = Infinity;
  for(let number of numberArray){
    if(number<smallestNumber){
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

//This function is here to get the highest number in an array

function getMax(numberArray){
  let biggestNumber = -Infinity;
  for(let number of numberArray){
    if(number>biggestNumber){
      biggestNumber = number;
    }
  }
  return biggestNumber;
}

//This function is here to get an average number out of all the values in an array

function getAverage(numberArray){
  let count = 0;
  for(let number of numberArray){
    count += Number(number);
  }
  count = count/numberArray.length;
  return count;
}

//This function is here to check, if a certain number is in an array

function checkIfIsInArray(numberArray, temperature) {
  if (!isNaN(temperature) && temperature > -30 && temperature < 40) {
    for (let number of numberArray) {
      if(number == temperature){
        return true;
      } 
    }
  }
  return false;
}

//This function is here to add a number into an array,  if the number is between -30 and 40 and if the array isn't longer than 14 elements

function addTemp(numberArray,number){
  if(number < 40 && number > -30 && numberArray.length < 14){
    numberArray.push(number);
    return alert('Ihre Nummer wurde erfolgreich hinzugefügt');
  }else{
    return -1;
  }

}

//This function is here to display every element in an array

function displayAllElements(numberArray){
  let String = '';
  for(let number of numberArray){
    String += number + ' ';
  }
  return String;
}

//This function is here to change a value in an array

function changeTemp(numberArray, oldValue, newValue){
  numberArray[oldValue-1] = newValue;
}



//This function is here to check, if an input is a number

function isNumber(inputText) {
  if(inputText == '' || isNaN(inputText)) {
    return false;
  }   
  return true;
}

//Event-Handling

//Here is the Event-Handling for our first button. Once the "Add"-button is clicked, the input is checked and added to the array

btnAdd.onclick = function(){

  let checkOk = true;

  msgInWeather.innerText='';
  output.innerText='';

  if(isNumber(inWeather.value == false)){
    msgInWeather.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }

  if(checkOk == true){
    addTemp(weatherArray,inWeather.value);
  }

};

//Here is the Event-Handling for our second button. When clicked, the input-box is checked and the input is searched for in the array 

btnSearch.onclick = function(){
  let checkOk = true;

  msgInWeatherSearch.innerText='';

  if(isNumber(inWeatherSearch.value == false)){
    msgInWeatherSearch.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }

  if(checkOk == true){
    let result = checkIfIsInArray(weatherArray, inWeatherSearch.value);
    if(result == true){
      output.innerText='Die gesuchte Temperatur ist vorhanden';
    }else{
      output.innerText='Die gesuchte Temperatur ist nicht vorhanden';
    }
  }
};

//Here is the Event-Handling for our 3rd button. On click, both inputs are checked and on the specific day the value is changed

btnChange.onclick = function(){
  let checkOk = true;

  msgInDay.innerText='';
  msgInNewInput.innerText='';

  if(isNumber(inDay.value == false)){
    msgInDay.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }
  if(isNumber(inNewInput.value == false)){
    msgInNewInput.innerText = 'Eingabe ist keine Zahl';
    checkOk = false;
  }

  if(checkOk==true){
    changeTemp(weatherArray, inDay.value, inNewInput.value);
  }
};

//When this button is clicked, all values are printed out.

btnShowAll.onclick = function(){
  output.innerText='';
  output.innerText=displayAllElements(weatherArray);
};

//When this button is clicked, the smallest value is printed out.

btnShowMin.onclick = function(){
  output.innerText='';
  output.innerText=getMin(weatherArray);
};

//When this button is clicked, the largest value is printed out.

btnShowMax.onclick = function(){
  output.innerText='';
  output.innerText=getMax(weatherArray);
};

//When this button is clicked, an average value is printed out.

btnShowAverage.onclick = function(){
  output.innerText='';
  output.innerText=getAverage(weatherArray);
};

