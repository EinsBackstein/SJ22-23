/*
Project: uebung_28_ip_calculator
Author:  nottj
Date:    14.06.2023
*/

'use strict';
const APPNAME = 'Übung 28 IP Calculator';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//inputs

const inIP = document.getElementById('inIP');
const inSubNetMask = document.getElementById('inSubNetMask');

//buttons

const btnConvert = document.getElementById('btnConvert');
const btnConvertSubnet = document.getElementById('btnConvertSubnet');

//outputs

const okMessage1 = document.getElementById('okMessage1');
const errorMessage1 = document.getElementById('errorMessage1');

const okMessage2 = document.getElementById('okMessage2');
const errorMessage2 = document.getElementById('errorMessage2');

const output1 = document.getElementById('output1');

const output2 = document.getElementById('output2');

//functions

//This function is here to check, if a certain input could be an ip address

function checkIP(myIP) {
  let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; if (myIP.match(ipformat)) {
    return true; 
  } return false; 
}

//This function is here to check, if a certain input could be an subnetmask-prefix

function checkSubnet(mySubnetmask){
  if (mySubnetmask==0||mySubnetmask == 8 ||mySubnetmask == 16 ||mySubnetmask == 24 || mySubnetmask ==32){
    return true;
  }
  return false;
}

//This function is here to get an array of all the octetts of an ip adress

function getOctettArray(inputIPAdress){
  let ipArray = inputIPAdress.split('.');
  return ipArray;
}

//This function is here to convert the prefix input into a real subnetmask

function convertPrefix(prefix){
  if(prefix == 0){
    return '0.0.0.0';
  }else if(prefix == 8){
    return '255.0.0.0';
  }else if(prefix == 16){
    return '255.255.0.0';
  }else if(prefix == 24){
    return '255.255.255.0';
  }else if(prefix == 32){
    return '255.255.255.255';
  }

}

//This function is here to convert an octett of an ip addres to binary

function decToBin(octett){
  let endSum = '';
  while((octett/2)!=0){
    endSum = String(octett%2) + endSum;
    octett = Math.floor(octett/2);
  }
  let binaryLength = endSum.length;
  let fillString = '';
  for(let i = 0; i < 8-binaryLength; i++){
    fillString += 0;
  }
  endSum = fillString+endSum;
  return endSum;
}

//Event-Handling

//When this button is clicked, the ip value is checked and if correct, it gets converted to binary

btnConvert.onclick = function(){
  errorMessage1.innerText='';
  errorMessage2.innerText='';
  okMessage1.innerText='';
  okMessage2.innerText='';
  output1.innerText='';

  let checkOk = true;
  
  if(checkIP(inIP.value)==false){
    checkOk = false;
    errorMessage1.innerText='Eingabe ist keine IP-Adresse';
  }
  if(checkSubnet(inSubNetMask.value)==false){
    checkOk = false;
    errorMessage2.innerText='Eingabe ist kein Subnet-Präfix';
  }
  if(checkOk==false){
    output1.innerText='IP-Adresse kann nicht berechnet werden!';
  }
  if(checkOk==true){
    let binIP = '';
    let ipArray = getOctettArray(inIP.value);
    for(let i = 0; i < ipArray.length; i++){
      binIP =binIP + decToBin(ipArray[i])+'.';
    }
    binIP = binIP.substr(0, binIP.length-1);
    output1.innerText='Binäre IP-Adresse: ' + binIP;
  }
};

//When this button is clicked, the subnet-prefix value is checked if correct, the prefix is converted into a real subnet mask

btnConvertSubnet.onclick = function(){

  errorMessage2.innerText='';
  okMessage2.innerText='';
  output2.innerText='';

  let checkOk = true;
  
  if(checkSubnet(inSubNetMask.value)==false){
    checkOk = false;
    errorMessage2.innerText='Eingabe ist kein Subnet-Präfix';
  }
  if(checkOk==false){
    output2.innerText='Subnetzmaske kann nicht berechnet werden!';
  }
  if(checkOk==true){
    output2.innerText='Subnetzmaske: '+ convertPrefix(inSubNetMask.value);
  }
};