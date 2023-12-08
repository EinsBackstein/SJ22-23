/*
Project: uebung15_shopping_cart
Author:  nottj
Date:    22.02.2023
*/

'use strict';
const APPNAME = 'Übung15 Shopping Cart';
document
  .getElementById('myTitle')
  .innerText = APPNAME;
document
  .getElementById('myHeading')
  .innerText = APPNAME;

//basic price of items

let water = 1.05;
let bread = 3.25;
let cheese = 2.39; //100g
let sausage = 1.99; //100g

//gramm-price for some items

let smallCheese = cheese / 100; //1g
let smallSausage = sausage / 100; //1g

//total amount of items

let amountOfWater = 0;
let amountOfBread = 0;
let amountOfCheese = 0;
let amountOfSausage = 0;

//Value of specific items

let sumOfWater = 0;
let sumOfBread = 0;
let sumOfCheese = 0;
let sumOfSausage = 0;

//total value of all items

let endSum = 0;

//Here the user gets asked what kind oof item he wants to buy

let chooseYourItem = prompt(
  'Bitte geben Sie hier ein, welche Ware Sie kaufen wollen. Bitte "M" für Mineral' +
    'wasser, "B" für Brot, "K" für Käse oder "W" für Wurst eingeben.'
);

chooseYourItem = chooseYourItem.toUpperCase();

//while the User-Input isn't X, the program asks, what the user wants to buy

while (chooseYourItem != 'X') {
  while (//Here, the user has to put in one of the following letters, or it wont work
    chooseYourItem != 'M' && chooseYourItem != 'B' && chooseYourItem != 'K' && chooseYourItem != 'W' && chooseYourItem != 'X'
  ) {
    alert('Bitte wählen Sie eine vorhandene Ware aus.');
    chooseYourItem = prompt(
      'Bitte geben Sie hier ein, welche Ware Sie kaufen wollen. Bitte "M" für Mineral' +
            'wasser, "B" für Brot, "K" für Käse oder "W" für Wurst eingeben.'
    );
    chooseYourItem = chooseYourItem.toUpperCase();
  }
  //In those if-statements it gets checked what the user wants to buy and how much of that item
  if (chooseYourItem == 'M') {
    amountOfWater = Number(prompt('Wie viele Flaschen Wasser wollen Sie kaufen? '));
    while (
      !(Number.isInteger(amountOfWater) && amountOfWater >= 0) && amountOfWater != -1
    ) {
      alert('Bitte geben Sie eine valide Zahl ein');
      amountOfWater = Number(prompt('Wie viele Flaschen Wasser wollen Sie kaufen? '));
    }
    if (amountOfWater == -1) {
      amountOfWater = 0;
      sumOfWater = 0;
    }
    sumOfWater = sumOfWater + water * amountOfWater;
  }

  if (chooseYourItem == 'B') {
    amountOfBread = Number(prompt('Wie viele Brote wollen Sie kaufen? '));
    while (
      !(Number.isInteger(amountOfBread) && amountOfBread >= 0) && amountOfBread != -1
    ) {
      alert('Bitte geben Sie eine valide Zahl ein');
      amountOfBread = Number(prompt('Wie viele Brote wollen Sie kaufen? '));
    }
    if (amountOfBread == -1) {
      amountOfBread = 0;
      sumOfBread = 0;
    }
    sumOfBread = sumOfBread + bread * amountOfBread;
  }

  if (chooseYourItem == 'K') {
    amountOfCheese = Number(prompt('Wie viele Gramm Käse wollen Sie kaufen? '));
    while (
      !(Number.isInteger(amountOfCheese) && amountOfCheese >= 0) && amountOfCheese != -1
    ) {
      alert('Bitte geben Sie eine valide Zahl ein');
      amountOfCheese = Number(prompt('Wie viele Gramm Käse wollen Sie kaufen? '));
    }
    if (amountOfCheese == -1) {
      amountOfCheese = 0;
      sumOfCheese = 0;
    }
    sumOfCheese = sumOfCheese + smallCheese * amountOfCheese;
  }

  if (chooseYourItem == 'W') {
    amountOfSausage = Number(prompt('Wie viele Gramm Wurst wollen Sie kaufen? '));
    while (
      !(Number.isInteger(amountOfSausage) && amountOfSausage >= 0) && amountOfSausage != -1
    ) {
      alert('Bitte geben Sie eine valide Zahl ein');
      amountOfSausage = Number(prompt('Wie viele Gramm Wurst wollen Sie kaufen? '));
    }
    if (amountOfSausage == -1) {
      amountOfSausage = 0;
      sumOfSausage = 0;
    }
    sumOfSausage = sumOfSausage + smallSausage * amountOfSausage;
  }
  chooseYourItem = prompt(
    'Bitte geben Sie hier ein, welche Ware Sie kaufen wollen. Bitte "M" für Mineral' +
        'wasser, "B" für Brot, "K" für Käse oder "W" für Wurst eingeben.'
  );
  chooseYourItem = chooseYourItem.toUpperCase();
}

//Here, the final price of the "shopping-basket" gets calculated and rounded

endSum = sumOfWater + sumOfBread + sumOfCheese + sumOfSausage;

endSum=endSum.toFixed(2);

if(sumOfWater>0){
  alert(`Wasser (1 Flasche)  1.05€   ${amountOfWater} Flasche/n  ${sumOfWater.toFixed(2)}€`);
}
if(sumOfBread>0){
  alert(`Brot (1kg)  3.25€   ${amountOfBread}kg  ${sumOfBread.toFixed(2)}€ `);
}
if(sumOfCheese>0){
  alert(`Käse (100g)  2.39€   ${amountOfCheese}g  ${sumOfCheese.toFixed(2)}€ `);
}
if(sumOfSausage>0){
  alert(`Wurst (100g)  1.99€   ${amountOfSausage}g  ${sumOfSausage.toFixed(2)}€`);
}

alert(`Der Wert des Warenkorbs beträgt ${endSum}€`);

//if the user hasn't bought anything, he has to pay nothing (obviously)

if (endSum == 0) {
  alert(
    'Vielen Dank, dass Sie bei uns eingekauft haben und einen schönen Tag noch'
  );
  throw new Error('Programmende');
}

alert('Nun müssen Sie bitte bezahlen');
alert('Die Bezahlung erfolgt bitte in 10€-Scheine');

let payment = prompt('Bitte bezahlen Sie Ihre Waren.', 10);

//Now the user hast to pay. He can only with 10€-Bills

while (payment % 10 != 0 && payment < endSum) {
  alert('Bitte zahlen Sie nur mit 10er-Scheinen und bezahlen Sie genug');
  payment = prompt('Bitte bezahlen Sie Ihre Waren');
}

//Here the change for the user gets calculated

let change = payment - endSum;

alert(`Ihr Restgeld beträgt ${change.toFixed(2)}€`);

alert('Vielen Dank, dass Sie bei uns eingekauft haben und einen schönen Tag noch');