---
title: Variablen und Scope
order: 5
---

Bis zum Jahre 2015 wurden Variablen in Javascript gar nicht oder mit `var` deklariert.
Seit Javascript 2015 gibt es auch `let` und `const`. Wenn man heute ein Programm
neu schreib verwendet man nur `let` und `const`.


## Lebensdauer von Javascript und Variablen im Browser

Zwei wichtige Hinweis zur Lebensdauer von Variablen:

1. Wenn Sie eine Webseite neu laden oder aktualisieren, startet das JavaScript-Programm komplett neu. Alle Variablen werden dabei zurückgesetzt - als ob Sie das Programm zum ersten Mal starten würden.

2. Wenn Sie dieselbe Webseite in mehreren Browser-Fenstern öffnen, läuft in jedem Fenster ein eigenes, unabhängiges JavaScript-Programm. Eine Variable `a` im ersten Fenster hat nichts mit einer Variable `a` im zweiten Fenster zu tun - sie sind völlig getrennt voneinander.

[Demo](/images/applied-js-and-css/no-storage-only.html)


## Sichtbarkeit von Variablen mit `let` und Konstanten mit `const`

let und const haben einen Block-Scope - sie gelten von `{` bis `}`.

<javascript>
  if ( true ) { // block - scope
    let x = 'foo';
    const y = 'bar';
  }
  console.log(x); // ReferenceError : x is not defined
  console.log(y); // ReferenceError : y is not defined
</javascript>


## Konstanten mit `const`

Da Javascript eine dynamische Sprache hat die deklaration als Konstanten
nur wenig Wirkung. Für einfache Werte verhalten Sie sich wie erwartet:

<javascript>
const myNumber = 1;
myNumber = 2;  // Uncaught TypeError: Assignment to constant variable.
</javascript>


§

Bei Objekten oder Arrays zeigt sich die Beschränktheit:

<javascript>
const myArray = [1,2,3];
myArray[0] = 100;  // einen Wert zu ändern ist erlaubt
myArray.push(4);   // einen Wert hinzu zu fügen ist erlaubt
myArray.splice(2, 1); // nach dem 2.Element ein Element entfernen ist erlaubt
myArray = [5,6,7]; // Uncaught TypeError: invalid assignment to const 'myArray'

const myObject = { farbe: 'grün', anzahl : 4 }
myObject.farbe = 'rot';  // einen Wert zu ändern ist erlaubt
myObject.kg = 12;           // eine neue Eigenschaft (und ihren Wert) hinzu zu fügen ist erlaubt
myObject = { muster: 'grün' }; // Uncaught TypeError: invalid assignment to const 'myObject'
</javascript>

Den Inhalt des Arrays oder Objekts zu ändern ist erlaubt.
Nur das Array oder Objekt ganz zu ersetzen ist verboten.


## Objekt konstant machen mit `Object.freeze`

Mit der Methode `Object.freeze` kann man den Inhalt eines Objekts
oder Arrays konstant machen, aber nur "eine Ebene tief": verschachtelte
Objekte bzw. Arrays werden nicht geschützt

<javascript>
const y = [1,2,[3]];
Object.freeze(y);
y[0] = 100;  // Wert wird nicht verändert, bleibt 1, kein Fehler
y.push(4);   // Uncaught TypeError: can't define array index property past the end of an array with non-writable length
y[2][0] = 100;  // Verschachteltes Array kann geändert werden!
y[2].push( 200 );   //               und kann erweitert werden!
JSON.stringify(y); // "[1,2,[100,200]]"

const z = { farbe: 'grün', anzahl : 4, other : { a:1, b:2, c:3 } }
Object.freeze(z);
z['farbe'] = 'rot'; // Wert wird nicht verändert, kein Fehler
z.kg = 12;          // Wert wird nicht hinzu gefügt, kein Fehler
z.other.a = 100;    // Wert im verschachtelten Objekt kann geändert werden!
JSON.stringify(z)   // '{"farbe":"grün","anzahl":4,"other":{"a":100,"b":2,"c":3}}'
</javascript>

## Kurz-Schreibweise für Objekte + Werte

Wenn in der JSON Schreibweise eines Objekts eine Variable
verwendet wird, die den gleichen Namen hat wie eine Eigenschaft die
erzeugt werden soll, dann kann man die Schreibweise verkürzen:

<javascript>
let x = 10;
let y = 12;
let circle1 = { color: 'yellow', r: 25, x: x, y: y  }; // lang
let circle2 = { color: 'yellow', r: 25, x,    y     }; // kurz
</javascript>

Die Variablen `x` und `y` werden hier als "shorthand property names" verwendet.


## Zuweisung mit Desctructuring

Auf der linken Seite einer Zuweisung kann die Array oder Objekt-Schreibweise
von JSON verwendet werden um mehrere Variablen auf einmal zuzuweisen.

Das kann sehr komplex werden, hier ein paar einfache Beispiele:

<javascript>
let [x,y] = [10,12];  // zwei Werte werden an zwei Variablen zugewiesen
let p     = [10,12];
let [x1,y1] = p;      // zwei Werte werden an zwei Variablen zugewiesen
let circle = { m: p, r: 20 };
let { m: [x2, y2], r } = circle  // Achtung: kurz-schreibweise für r: r
</javascript>

## Funktionsparameter mit Desctructuring

Auch in den Funktionsparametern kann Destructuring verwendet werden.
Angenommen wir haben ein user-Objekt:

<javascript>
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

function logFullUser(user) {
  console.log("full information about the user:");
  console.dir(user);
}
logFullUser(user);
full information about the user: debugger eval code:11:11
Object { id: 42, displayName: "jdoe", fullName: {…} }

function logUserId({ id }) {
  console.log("the user id is", id);
}
logUserId(user); // the user id is 42
</javascript>

## Siehe auch


* [MDN: Destructuring](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
* [MDN: Object initializer](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) zu shorthand property names
