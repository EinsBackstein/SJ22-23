/*
Project: uebung13a_whie_do_while
Author:  nottj
Date:    01.02.2023
*/

'use strict';
const APPNAME = 'Übung13a while / do while';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//1

//The user has to enter something in this prompt, which will be used later

let number1 = prompt('Bitte geben Sie eine Zahl ein: ');

//This variable will get used to calculate the endsum from all input numbers

let endSum = 0;

//In this while-loop the user has to input "things" for so long, until he inputs "x"

while(number1 != 'x') {
  //This if-statement checks, if the input is not a number
  if(isNaN(number1)){
    number1 = String(number1);
    if(number1 != 'x'){
      //This if-statement checks, if the input is x; if not, an error-message gets output
      alert('Es können nur Zahlen und x eingegeben werden');
    }
  }else if(!isNaN(number1)){
    //This last if-statement checks, if the input is a number and counts it into the endsum
    number1 = Number(number1);
    endSum += number1;
  }

  //if the input isn't x, the loop starts again
  number1 = prompt('Bitte geben Sie eine Zahl ein: ');
}

//this prints out the endsum

document.write(endSum);

//2

//Here the user has to input a starting year for the calculation

let startYear = Number(prompt('Bitte geben Sie das Anfangsjahr der Berechnung ein: '));

//Here the user has to input the ending year for the calculation

let endYear = Number(prompt('Bitte geben Sie das Endjahr der Berechnung ein: '));

//The while-loop is here to filter out all the "Schaltjahre"

while(startYear <= endYear){
//The first if checks, if the year is dividable through 4 with a remainder of 0
  if(startYear % 4 == 0){
  //The next if is here to see, if the year is dividable through 400 with a remainder of 0, because this is always a "Schaltjahr"
    if(startYear % 400 == 0 ){
      document.write(`<p style="color:green"> ${startYear} war, ist oder wird ein Schaltjahr (/400)</p>`);
    } else if(startYear % 100 == 0){
    //The next if is here to see, if the year is dividable through 100 with a remainder of 0, because this is never a "Schaltjahr"
      document.write(`<p style="color:red"> ${startYear} war, ist oder wird kein Schaltjahr (/100)</p> `);
    }else{
      //It just is a "Schaltjahr"
      document.write(`<p style="color:green"> ${startYear} war, ist oder wird ein Schaltjahr</p>`);
    }
  } else {
    //It is not a "Schaltjahr"
    document.write(`<p style="color:red"> ${startYear} war, ist oder wird kein Schaltjahr</p>`);
  }
  //The loop continues, because the year gets counted up +1
  startYear++;
}


