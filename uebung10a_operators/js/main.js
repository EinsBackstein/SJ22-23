/*
Project: uebung10a_operators
Author:  nottj
Date:    11.01.2023
*/

'use strict';
const APPNAME = 'Übung10_operators';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;


// let x = 1;
// x = -x;
// document.write(x); // -1, unary negation was applied



// let x = 1;
// let y = 3;
// document.write(y - x); // 2, binary minus subtracts values



// let s = 'my' + 'string';
// document.write(s); // mystring



// let num1=10;
// let num2=20;
// document.write('Summe: '+num1+num2); // Summe: 1020



// let num1 = 10;
// let num2 = 20;
// document.write('Summe: ');
// document.write(num1 + num2); // Summe: 30



// document.write(2 + 2 + '1'); // "41" und nicht "221"



// document.write(2 - '1'); // 1
// document.write('<br/>');
// document.write('8' / '2'); // 4



// // No effect on numbers
// let x = 1;
// document.write(+x); // 1



// let y = -2;
// document.write(+y); // -2



// // Converts non-numbers
// document.write(+true); // 1
// document.write(+''); // 0



// let apples = '2';
// let oranges = '3';

// // Beide Werte werden in Nummern umgewandelt
// document.write(+apples + +oranges); // 5

// // the longer variant
// // document.write( Number(apples) + Number(oranges) ); // 5

// let a, b, c;
// a = b = c = 2 + 2;
// document.write(a); // 4
// document.write('<br/>');
// document.write(b); // 4
// document.write('<br/>');
// document.write(c); // 4

// document.write(5 % 2); // 1 is a remainder of 5 divided by 2
// document.write('<br/>');
// document.write(8 % 3); // 2 is a remainder of 8 divided by 3
// document.write('<br/>');
// document.write(6 % 3); // 0 is a remainder of 6 divided by 3

// document.write(2 ** 2); // 4 (2 * 2)
// document.write('<br/>');
// document.write(2 ** 3); // 8 (2 * 2 * 2)
// document.write('<br/>');
// console.log(2 ** 4); // 16 (2 * 2 * 2 * 2)

// document.write(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root, that's maths)
// document.write('<br/>');
// document.write(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

// let counter = 2;
// counter++; // works the same as counter = counter + 1, but is shorter
// document.write(counter); // 3

// let counter = 2;
// counter--; // works the same as counter = counter - 1, but is shorter
// document.write(counter); // 1

// let counter = 1;
// let a = ++counter; // (*) prefix
// document.write(a); // 2

// let counter = 1;
// let a = counter++; // (*) postfix - changed ++counter to counter++
// document.write(a); // a = 1

// n = n + 5;
// document.write(n);
// n += 5;
// document.write(n);


// let n = 2;
// document.write(n);
// document.write('<br/>');
// n += 5; // now n = 7 (same as n = n + 5)
// document.write(n);
// document.write('<br/>');
// n *= 2; // now n = 14 (same as n = n * 2)
// document.write(n);
// document.write('<br/>');
// n -= 4; // now n = 10 (same as n = n - 2)
// document.write(n);
// document.write('<br/>');
// n /= 2; // now n = 5 (same as n = n / 2)
// document.write(n); // 14
