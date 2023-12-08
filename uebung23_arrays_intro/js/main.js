/*
Project: uebung23_arrays_intro
Author:  nottj
Date:    01.03.2023
*/

'use strict';
const APPNAME = 'Übung 23 Arrays Intro';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//functions

//This function is here to write out every user in an array

function showUsers(userArray){
  for(let user of userArray){
    document.write(user + '<br>');
  }
}

//This function is here to find the position of a specific user

function findUser(user, userArray){
  for(let i = 0; i <= userArray.length; i++){
    if(userArray[i]==user){
      return i;
    }
  }
  return -1;
}

//This function is here to count how often a specific user is in an array

function countElement(user,userArray){
  let userCount = 0;
  let user1 = '';
  for(user1 of userArray){
    if(user1==user){
      userCount++;
    }
  }
  return userCount;
}

//This function is here reverses the positions of content of an arra

function reverseArray(userArray){
  let originalLength = userArray.length;
  for(let i=userArray.length-1;i >= 0; i--){
    userArray.push(userArray[i]);
  }
  
  userArray.splice(0,originalLength);
}

//main-code

//Here I create two arrays

let noUsers = [];
let users = ['Tick','Trick','Track'];

//Now the users of the array are written out

for(let user of users){
  document.write(user + '<br>');
}

//Now, two new users are ut into the array. One in the front, the other one in the back

users.push(' Dlanod');
users.splice(0,0, 'Daisy');

document.write('<br> <br>');

//Now all the users are written out again

showUsers(users);

//Now, the user on the index 4 is replaced with Donald

users[4] = 'Donald';

document.write('<br> <br>');

//The users are shown again

showUsers(users);

//Now, the users of one array are put into the other 

for(let user of users){
  noUsers.push(user);
}

document.write('<br> <br>');

//Here, the users of the second array are shown

showUsers(noUsers);

document.write('<br> <br>');

//Here, the positions of some users are searched for and written out

let tickPos = findUser('Tick', users);
let trickPos = findUser('Trick', users);
let goofyPos = findUser('goofyPos', users);

alert(`Tick ${tickPos}, Trick ${trickPos}, Goofy ${goofyPos}`);

//Now, I had to create multiple users with the same name and count them via the function

users.push('Dagobert');
users.push('Dagobert');
users.push('Dagobert');
users.push('Dagobert');
users.push('Dagobert');

document.write('Anzahl der Benutzer, die Dagobert heißen: ' + countElement('Dagobert', users));

//Now, the users are getting deleted again

users.pop();
users.pop();
users.pop();
users.pop();
users.pop();

document.write('<br> <br>');

//Now, the array is reversed and written out again

reverseArray(users);

showUsers(users);