/*
Project: uebung25_arrays_wetterstation
Author:  nottj
Date:    25.05.2023
*/

'use strict';
const APPNAME = 'Übung 25 Arrays Wetterstation ☀️';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

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
    count += number;
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
    alert('Ihre Nummer wurde erfolgreich hinzugefügt');
    return;
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
  for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] == oldValue){
      numberArray[i] = newValue;
    }
  }
}

//main-code

//Here i create the array with all its elements

let temperatureArray = [5,3,2,-1,1,-2,4,7,7,4,5,3,-2,-1];

//Now I write out every element of the array

for(let temperature of temperatureArray){
  document.write(temperature + ' ');
}

//Here I write out the smallest, biggest and average temperature

document.write(`<br>Tiefstwert = ${getMin(temperatureArray)} <br>`);
document.write(`Höchstwert = ${getMax(temperatureArray)} <br>`);

document.write(`Durchschnitt = ${getAverage(temperatureArray)}`);

//Now I check, if the number 2 is in the array

let checkResult =checkIfIsInArray(temperatureArray,2);

if(checkResult==true){
  document.write('<br> Der angegebene Wert ist in der Tabelle');
}else{
  document.write('<br> Der angegebene Wert ist nicht in der Tabelle');
}

//Erweitert

//Now, the user can choose from different functions

let weatherStationInput = prompt( 'Wetterstation\n1.Temperatur hinzufügen\n2.Alle Temperaturwerte anzeigen\n3.Minimaltemeratur anzeigen\n4.Maximaltemperatu anzeigenr\n5.Durchschnittstemperatur anzeigen\n 6.Temperaturwert suchen\n7.Temperaturwert ändern\n8.Programm beenden');

while (weatherStationInput != 8){
  if(weatherStationInput == 1){

    //The user can input a value if the parameters are ok. If they aren't, an error-message is shown

    alert('Sie wollen also einen Temperaturwert hinzufügen');
    let newTemperature = prompt('Bitte geben Sie den Temperaturwert ein: ');
    addTemp(temperatureArray, newTemperature);
    if(addTemp(temperatureArray, newTemperature) == 1){
      alert('Ihre Zahl wurde erfolgreich hinzugefügt');
    }else if (addTemp(temperatureArray, newTemperature)== -1){
      alert('Es sind bereits zu viele Werte eingetragen');
    }

  }
  if(weatherStationInput == 2){

    //Here the user can get all elements of the array written out

    alert('Es werden nun alle Elemente angezeigt');
    alert(displayAllElements(temperatureArray));

  }
  if(weatherStationInput == 3){

    //Here the user sees the smallest number

    alert('Es wird nun die kleinste Temperatur angezeigt');
    alert(getMin(temperatureArray));

  }
  if(weatherStationInput == 4){

    //Here the user sees the biggest number

    alert('Es wird nun die größte Temperatur angezeigt');
    alert(getMax(temperatureArray));

  }
  if(weatherStationInput == 5){

    //Here the user sees an average of all numbers

    alert('Es wird nun die Durchschnittstemperatur angezeigt');
    alert(getAverage(temperatureArray));

  }
  if(weatherStationInput == 6){

    //Here the user can search for some number

    alert('Sie wollen nach einer Temperatur suchen');
    let searchFor = prompt('Bitte geben Sie die zu suchende Nummer ein: ');
    let checkArray = checkIfIsInArray(temperatureArray, searchFor);
    if(checkArray==true){
      alert('Der angegebene Wert ist in der Tabelle');
    }else{
      alert('Der angegebene Wert ist nicht in der Tabelle');
    }

  }
  if(weatherStationInput == 7){

    //And here, the user can change a number, if it is stated in the array before

    alert('Sie wollen also Temperaturwerte ändern');
    let oldValue = prompt('Bitte geben Sie den Wert ein, der ersetzt werden soll: ');
    let newValue = prompt('Bitte geben Sie den neuen Wert ein: ');
    changeTemp(temperatureArray, oldValue, newValue);

  }

  weatherStationInput = prompt( 'Wetterstation\n1.Temperatur hinzufügen\n2.Alle Temperaturwerte anzeigen\n3.Minimaltemeratur anzeigen\n4.Maximaltemperatu anzeigenr\n5.Durchschnittstemperatur anzeigen\n 6.Temperaturwert suchen\n7.Temperaturwert ändern\n8.Programm beenden');
} 