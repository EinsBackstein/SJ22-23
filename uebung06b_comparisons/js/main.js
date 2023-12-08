/*
Project: Übung06b_comparisons
Author:  nottj
Date:    11.09.2022
*/

'use strict';
const APPNAME = 'Übung06b_comparisons';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading').innerText = APPNAME;



// Größer und kleiner als: a > b bzw. a < b
//Größer gleich und kleiner gleich: a >= b bzw. a <= b
//Gleich ist: a == b (Achtung: Ein einfaches = bedeutet eine Zuweisung)
//Ungleich: a != b

/*

alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true

*/

/*

let result = 5 > 4; // assign the result of the comparison
alert(result); // true

*/

//String Vergleich

/*

alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true

*/

/*

//String Vergleich (2)

1. Vergleiche das erste Zeichen beider Strings
2. Wenn das erste Zeichen größer(oder kleiner) dann ist der erste String größer (oder kleiner)
als der zweite String
3. Wenn aber das erste Zeichen gleich ist, untersuche das zweite Zeichen
4. Wiederhole dies bis zum Ende des Strings
5. Wenn beide gleich lang sind, dann sind sie gleich (bei gleichen Zeichen). Sonst ist der längere
String größer.
--

//Glow und Glee

Die Strings "Glow" und "Glee" werden Zeichen für Zeichen verglichen.
1. G ist das Gleiche wie G
2. l ist das Gleiche wie l
3. o ist Größer als e. Stopp.
4. Der erste String ist größer
--

//Unicode

Achtung bei Groß- und Kleinschreibung. a ist größer als A (siehe Unicode)
https://www.utf8-zeichentabelle.de/unicode-utf8-table.pl */

//Vergleich verschiedener Datentypen

/*

alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

*/

//Boolean: true wird zu 1. false wird zu 0.

/*

alert(true == 1); // true
alert(false == 0); // true

*/

//Strict equality

//Eine reguläre Gleichheitüberprüfung == kann nicht zwischen 0 und false unterscheiden:

//alert(0 == false); // true

//Die gleiche Situation mit Leerstrings:
//--

//alert(0 == false); // true
//alert('' == false); // true

/*

Strict equality (2)

Dies ist der Fall, da verschiedene Datentypen vom Gleichheitsoperator == zu Number konvertiert
werden. Ein Leerstring wie false wird zu 0.
Welche Möglichkeit gibt es 0 from false zu unterscheiden?
Der strikte Gleichheitsoperator === vergleicht ohne Typkonvertierung
Kurz gesagt, wenn a und b unterschiedlichen Typs sind, dann gibt a === b false zurück, ohne
diese zu konvertieren.
--

Strict equality (3)

Versuch:

*/

//alert(0 === false); // false, because the types are different

/*

Es gibt auch einen strikten Ungleichheitsoperator !== , anlog zu != .
--
Comparison with null and undefined
null und undefined sind gleich == zueinander und nicht gleich mit allen anderen Werten.
Vorsicht bei > or < bei Variablen die null/undefined sein können.
null und undefined sollten unbedingt getrennt geprüft werden
vgl. http://javascript.info/comparison#comparison-with-null-and-undefined
--

*/

//Beispiel
/*

alert(null === undefined); // false

alert(null == undefined); // true

*/