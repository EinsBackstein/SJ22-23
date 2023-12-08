/*
Project: uebung07a_size_check
Author:  nottj
Date:    11.09.2022
*/

'use strict';
const APPNAME = 'Übung7a_size_check';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

//constants for the different tree-sizes
const sizeSmall = 80;
const sizeMedium = 150;
const sizeLarge = 210;


//here you get asked, how high your tree is
let sizeInput = prompt('Wie groß ist dein Baum?',70);


//here is where your tree is categorized and/or judged
if (sizeInput <= sizeSmall) {
  document.write('Hallo Julian Nott, dein Baum ist '+sizeInput+'cm hoch und fällt in die Kategorie Klein.');
} else if (sizeInput <= sizeMedium) {
  document.write('Hallo Julian Nott, dein Baum ist '+sizeInput+'cm hoch und fällt in die Kategorie Mittel.');
} else if (sizeInput <= sizeLarge) {
  document.write('Hallo Julian Nott, dein Baum ist '+sizeInput+'cm hoch und fällt in die Kategorie Groß.');
} else {
  document.write('Dein Baum ist wirklich sehr groß!');
}


