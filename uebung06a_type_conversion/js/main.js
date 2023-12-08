/*
Project: Übung06a_type_conversion
Author:  nottj
Date:    11.09.2022
*/

'use strict';
const APPNAME = 'Übung06a_type_conversion';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;

/*
Type Conversion

Die wunderbare Welt der Typumwandlungen
--
*/

/*

Typumwandlung

  Manchmal ist es nötig, einen Datentyp in einen anderen umzuwandeln.

   o Automatisch
   o Manuell

*/


//toString

/*

 o Umwandeln eines Werts in einen String (Text)
 o Automatisch

*/

/*

let value = 42; // Number 42
document.write('Value: ' + value + ' ;Type: ' + typeof  value); // String '42'

// o Explizit: Verwenden von String(value)

value = 42; // Number 42
value = String(value); // String '42'
document.write('<p>'+'</p>');
document.write('Value: ' + value + ' ;Type: ' + typeof  value);

*/

 
//toString2

/*

 o Die meisten Stringumwandlungen sind offensichtlich:
 o Aus false wird 'false'.
 o Aus null wird 'null'.

*/

/*

let value = true; // boolean

document.write('<p>'+'</p>');
document.write('Value: ' + value + ' ;Type: ' + typeof  value);

value = String(value); // now value is a string 'true'

document.write('<p>'+'</p>');
document.write('Value: ' + value + ' ;Type: ' + typeof  value);

*/

//toNumber1

/*

 o Wandelt Werte in den Typ number um
 o Automatisch. bequem, aber gefährlich:

*/

/*

let result = 6 * 2; // Number 12
document.write('Calculation: 6 * 2 ' + ' ; Result: ' + result);
document.write('<p>'+'</p>');

// o aber

result = '6' * '2'; // Number 12
document.write('Calculation: "6" * "2" ' + ' ; Result: ' + result);
document.write('<p>'+'</p>');

result = 6 / 2; // Number 3
document.write('Calculation: 6 / 2 ' + ' ; Result: ' + result);
document.write('<p>'+'</p>');

result = '6' / '2'; // Number 3
document.write('Calculation: "6" / "2" ' + ' ; Result: ' + result);
document.write('<p>'+'</p>');

result = 6 - 2; // Number 4
document.write('Calculation: 6 - 2 ' + ' ; Result: ' + result);
document.write('<p>'+'</p>');

result = '6' - '2'; // Number 4
document.write('Calculation: "6" - "2" ' + ' ; Result: ' + result);
document.write('<p>'+'</p>');

*/

//toNumber2

// Explizit - Number()

/*

let str = '123'; // String '123'
document.write('Value: '+ str + ' ; Type: ' +typeof str);
document.write('<p>'+'</p>');

let num = Number(str); // Number 123
document.write('Value: '+ num + ' ; Type: ' +typeof num);
document.write('<p>'+'</p>');

*/

/*

 o Explizite Umwandlungen sind meistens bei Formularen notwendig, wenn man eine Zahl eingibt.
 o Diese ist aber aufgrund des Formulars ein String. Zur Weiterverarbeitung benötigt man aber eine Zahl.
 --

*/


//toNumber2a

// Sicher: Explizite Typumwandlung

/*

let stNum1 = '6'; // String '6'
document.write('Value: ' + stNum1 + ' ; Type: ' + typeof stNum1);
document.write('<p>'+'</p>');

let stNum2 = '2'; // String '2'

document.write('Value: ' + stNum2 + ' ; Type: ' + typeof stNum2);
document.write('<p>'+'</p>');

let num1 = Number(stNum1); // Number 6

document.write('Value: ' + num1 + ' ; Type: ' + typeof num1);
document.write('<p>'+'</p>');

let num2 = Number(stNum2); // Number 2

document.write('Value: ' + num2 + ' ; Type: ' + typeof num2);
document.write('<p>'+'</p>');

let result = num1 + num2; // Number 8

document.write('result:' + result + ' ; Type: ' + typeof result);
document.write('<p>'+'</p>');

*/






//toNumber3

// o Wenn der String keine gültige Nummer ist, dann ist das Ergebnis NaN :

/*

let age = Number('123 EUR'); // NaN, conversion failed

document.write('Value: ' + age + ' ; Type: ' +  typeof age);

*/

//toNumber4

//Number(input)

/*

document.write(Number('1234'));
document.write('<p>'+'</p>');

document.write(Number('A1234'));
document.write('<p>'+'</p>');

document.write(Number(undefined));
document.write('<p>'+'</p>');

document.write(Number(null));
document.write('<p>'+'</p>');

document.write(Number(true));
document.write('<p>'+'</p>');

document.write(Number(false));
document.write('<p>'+'</p>');

*/

//toNumber5

/*

document.write( Number(' 123 ') ); // 123
document.write('<p>'+'</p>');

document.write( Number('123z') ); // NaN (error reading a number at 'z')
document.write('<p>'+'</p>');

document.write( Number(true) ); // 1
document.write('<p>'+'</p>');

document.write( Number(false) ); // 0
document.write('<p>'+'</p>');

*/

//ToBoolean1

/*

 o Automatisch - wird in einem späteren Abschnitt erklärt
 o Explizit Boolean()

*/

/*

let myBoolean = Boolean(42); // Boolean true
document.write(myBoolean);

*/

//ToBoolean2

/*

let myBoolean = Boolean(0);
document.write(myBoolean);
document.write('<p>'+'</p>');

myBoolean = Boolean(null);
document.write(myBoolean);
document.write('<p>'+'</p>');

myBoolean = Boolean(undefined);
document.write(myBoolean);
document.write('<p>'+'</p>');

myBoolean = Boolean(NaN);
document.write(myBoolean);
document.write('<p>'+'</p>');

myBoolean = Boolean('AndereWerte');
document.write(myBoolean);
document.write('<p>'+'</p>');

*/

//ToBoolean3

/*

document.write( Boolean(1) ); // true
document.write('<p>'+'</p>');

document.write( Boolean(0) ); // false
document.write('<p>'+'</p>');

document.write( Boolean('hello') ); // true
document.write('<p>'+'</p>');

document.write( Boolean('') ); // false
document.write('<p>'+'</p>');

*/

//ToBoolean4

/*

Ein String mit dem Inhalt '0' ist true, da der String nicht leer ist!
Beachte:
 o In einigen Sprachen (z.B. PHP) '0' ist false

 */

/*

document.write( Boolean('0') ); // true
document.write('<p>'+'</p>');

document.write( Boolean(' ') ); // spaces,
document.write('<p>'+'</p>');

//also true (any non-empty string is true)

*/
