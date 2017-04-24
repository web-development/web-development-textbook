---
title: Variablen und Scope
order: 5
---


Bis zum Jahre 2015 wurden Variablen in JavaScript gar nicht oder mit `var` deklariert.
Seit JavaScript 2015 gibt es auch `let` und `const`.


## Sichtbarkeit von Variablen mit var

In einer Funktion in JavaScript sind lokale und globale
Variablen sichtbar.  Da Funktionen auch innerhalb von
Funktionen definiert werden können sind in folgendem Code
die Variablen a, b und c in der innern Funktion f sichtbar

<javascript caption="Sichtbarkeit von a, b, c in Funktionen">
var a = 1;
function g( x ) {
  var b = 2;
  var s = "Ein String aus g ... ";
  function f( y ) {
    var c = 3;
    return "die Werte sind " + [a,b,c,x,y].join(", ");
  }
  return s + f( x );
}

g(10);
// Rückgabewert: "Ein String aus g ... die Werte sind 1, 2, 3, 10, 10"
console.log(a);  // 1
console.log(b);  // ReferenceError: b is not defined
console.log(c);  // ReferenceError: c is not defined
console.log(x);  // ReferenceError: x is not defined
console.log(y);  // ReferenceError: y is not defined
</javascript>

§

Eine Besonderheit von JavaScript Variablen die mit `var` deklariert
wurden ist das "Hochziehen" (auf englisch: hoisting): Alle
Variablen-Deklarationen werden an den Anfang der jeweiligen Funktion 
vorverlegt.  Falls auch eine Zuweisung eines Wertes erfolgt
bleibt diese Zuweisung an der Ursprünglichen Stelle im Code.

<javascript caption="Sichtbarkeit von a, b, c in Funktionen">
  function g( x ) {
    var s = "Ein String aus g ... ";
    function f( y ) {
      var c = 3;
      return "die Werte sind " + [a,b,c,x,y].join(", ");
    }
    var b = 2; // var b wird hochgezogen zum Beginn von g()
               // die Initialisierung b = 2 bleibt hier!
    return s + f( x );
  }

  g(10);
  // rückgabewert: "Ein String aus g ... die Werte sind 1, 2, 3, 10, 10"
</javascript>


## Sichtbarkeit von Variablen mit `let` und Konstanten mit `const`

let und const haben einen Block-Scope, können also auf kleiner
Bereich beschränkt werden als Variablen mit var:


<javascript>
function g() { // function - scope
  if ( true ) { // block - scope
    let x = ’foo ’;
    var y = ’bar ’;
  }
  console.log(x); // ReferenceError : x is not defined
  console.log(y); // y === ’bar ’
}
</javascript>


## Konstanten mit `const`

Da JavaScript eine dynamische Sprache ist haben Konstanten  eine
geringe Bedeutung. Für einfache Werte verhalten Sie sich wie erwartet:

<javascript>
const x = 1;
x = 2;  // Uncaught TypeError: Assignment to constant variable.
</javascript>


§

Bei Objekten oder Arrays zeigt sich die Beschränktheit:

<javascript>
const y = [1,2,3];
y[0] = 100;  // einen Wert zu ändern ist erlaubt
y.push(4);   // einen Wert hinzu zu fügen ist erlaubt
y = [5,6,7]; // Uncaught TypeError: Assignment to constant variable.

const z = { farbe: 'grün', anzahl : 4 }
z['farbe'] = 'rot';  // einen Wert zu ändern ist erlaubt
z.kg = 12;           // einen Wert hinzu zu fügen ist erlaubt
z = [5,6,7]; // Uncaught TypeError: Assignment to constant variable.
</javascript>

Den Inhalt des Objekts oder Arrays zu ändern ist erlaubt.
Nur das Objekt oder Array ganz zu ersetzen ist verboten.


## Objekt konstant machen mit `Object.freeze`

Mit der Methode `Object.freeze` kann man den Inhalt eines Objekts
oder Arrays konstant machen, aber nur "eine Ebene tief": verschachtelte
Objekte bzw. Arrays werden nicht geschützt

<javascript>
const y = [1,2,[3]];
Object.freeze(y);
y[0] = 100;  // Wert wird nicht verändert, bleibt 1, kein Fehler
y.push(4);   // Uncaught TypeError: object is not extensible
y[2][0] = 100;  // Verschachteltes Array kann geändert werden!
y[2].push( 200 );   //               und kann erweitert werden!
JSON.stringify(yy); // "[1,2,[100,200]]"

const z = { farbe: 'grün', anzahl : 4, other : { a:1, b:2, c:3 } }
Object.freeze(z);
z['farbe'] = 'rot'; // Wert wird nicht verändert, kein Fehler
z.kg = 12;          // Wert wird nicht hinzu gefügt, kein Fehler
z.other.a = 100;    // Wert im verschachtelten Objekt kann geändert werden!
</javascript>

## Kurz-Schreibweise für Objekte + Werte

Wenn in der JSON Schreibweise eines Objekts eine Variable
verwendet wird, die den gleichen Namen hat wie das Propertie das
erzeugt werden soll, dann kann man die Schreibweise verkürzen: 

<javascript>
let x = 10;
let y = 12;
let circle1 = { color: 'yellow', r: 25, x: x, y: y  }; // lang
let circle2 = { color: 'yellow', r: 25, x,    y     }; // kurz
</javascript>

## Zuweisung mit Desctructuring

Auf der linken Seite einer Zuweisung kann die Array oder Objekt-Schreibweise
von JSON verwendet werden um mehrere Variablen auf einmal zuzuweisen.

Das kann sehr komplex werden, hier ein paar einfache Beispiele:

<javascript>
let [x,y] = [10,12];  // zwei Werte werden an zwei Variablen zugewiesen
let p     = [10,12];
let [x1,y1] = p;      // zwei Werte werden an zwei Variablen zugewiesen
let circle = { m: p, r: 20 };
let { m: [x2, y2], r } = circle  // Achtung: kurz-schreibweise für r: r 
</javascript>

