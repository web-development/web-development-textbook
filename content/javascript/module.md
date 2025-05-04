---
title: Module
order: 45
---

Neben Funktionen und Klassen gibt es noch eine weitere
Möglichkeit Javascript Code zu strukturieren: Module.


## Javascript ohne Module

Im "klassischen" Javascript kann Code aus verschiedenen
Datei geladen und zu einem Programm zusammen gesetzt werden.
Dabei gibt es nur einen Namensraum für den gesamten Code:

<htmlcode>
<h1>Diekt in der HTML Datei</h1>
<script>let a = 10;</script>
<script src="meinskript.js"></script>
<script>
console.log("kann b sehen", b);
b += 10;
console.log("kann b verändern", b);
</script>
</htmlcode>


<javascript caption="Datei meinskript.js">
let b = 2000;
console.log("kann a sehen", a);
a += 10;
console.log("kann a verändern", a);
</javascript>


[Demo](/images/javascript/no-module.html)


### Probleme ohne Module

Dieser gemeinsame Namensraum bringt viele Probleme:
z.B. wenn ich ein fertiges Skript verwenden will,
aber zufällig die gleichen Variablennamen oder Funktionsnamen
selber schon verwendet habe.

## Javascript mit Modulen

Um Module im Browser zu verwenden, muss im `script` Tag
das Attribut `type` gesetzt sein:

<htmlcode>
<script type="module">
  let a = 1;
</script>
</htmlcode>


## import


Das Einbinden von externem Code erfolgt nun nicht mehr mit
dem `script` Tag, sondern mit einem `import` Statement:

<htmlcode>
<script type="module">
  let a = 1;

  import { b, setB } from './meinmodule.js';
</script>
</htmlcode>



Dabei wird genau angegeben, welche Variablen, Funktionen, Klassen
ich aus der anderen Datei verwenden will.

§

Nur die importierten Dinge sind dann zugänglich:


<htmlcode>
<script type="module">
  let a = 1;

  import { b, setB } from './meinmodule.js';

  console.log(b);  // Variable ist lesbar
  // b += 10;      // funktioniert nicht, importiert ist wie const
  setB(42);        // Funktion kann aufgerufen werden
</script>
</htmlcode>

Eine Zuweisung auf die Variable `b` ist aber nicht möglich,
sie verhält sich hier wie eine `const`.



## export

In der importierten Datei sind vielleicht viele Variablen, Klassen,
Funktionen vorhanden. Aber nur diejenigen, die eine
einer `export` Deklaration haben stehen für einen Import zur Verfügung:

<javascript caption="Datei meinmodule.js">
export let b = 10;

let c = 'super secret';

</javascript>

Die Variable `b` wird exportiert. Hier ist sie wirklich eine Variable, und kann
 verändert werden.

Die Variable `c` wird nicht exportiert, und kann
in der HTML-Datei oder in anderen Modulen nicht verwendet werden.

## export von Funktionen

<javascript caption="Datei meinmodule.js">
export let b = 10;

let c = 'super secret';

export function setB( newValue ) {
  b = newValue;
}
</javascript>

Die Funktion `setB`  wird exportiert. Sie hat Zugriff auf die
Variable `b` und kann sie verändern.

## export Deklarationen zusammenfassen

Man könnte die export-Deklarationen am Ende
des Module zusammenfassen:


<javascript caption="Datei meinmodule.js">
let b = 10;

let c = 'super secret';

function setB( newValue ) {
  b = newValue;
}

export { b, setB };
</javascript>


## Module zur Strukturierung

Mit diesem einfachen Mechanismus der Module kann man
nun die Probleme des gemeinsamen Namensraumes vermeiden,
und größere Programme in Teile zerlegen.

Da in einem Modul alle importe und export explizit angeführt
sind, muss man (fast) nichts über das restliche Programm
wissen, um ein einzelnes Module zu verstehen.



## Siehe auch


* [Demo](/images/javascript/module.html)
* [Module](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Modules) in der MDN

