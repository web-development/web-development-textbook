---
title: setTimeout
order: 65
---


Wie kann man in Javascript mit der Zeit arbeiten? Eine Uhr bauen?
Die Zeit stoppen?

Dafür lernen wir nun zwei Methoden kennen.

## setTimeout

Die Metode `setTimeout` gehört zum `window` Objekt im Browser.

Mit dieser Methode kann man einen Funktionsaufruf "in die Zukunft" schicken:

<javascript>
function later () {
  console.log("this will happen in 1 second.");
}

setTimeout(later, 1000);
</javascript>

Das erste Argument ist eine Funktion, die in der Zukunft aufgerufen
werden soll. Das zweite Argument gibt die Zeit in Millisekunden an.

## mit Arrow Function

Man kann die Funktion auch als Arrow-Function schreiben:

<javascript>
setTimeout(() => {
  console.log("this will happen in 1 second.");
}, 1000);
</javascript>

## Das ist synchron

Mit der `setTimout` Methode lernen wir die erste
asynchrone Methode kennen.

Bei allen anderen Funktionen
war es immer so, dass erst nachdem die Methode ihre
Arbeit beendet hat der nächste Befehl ausgeführt wird:

<javascript>
function now () {
  console.log("2");
}

console.log("1");
now();
console.log("3");
</javascript>

Deswegen ist der Output hier 1, 2, 3.

## Das ist asynchron

Da `setTimout` asynchron arbeitet, ist die
Reihenfolge hier anders:

<javascript>
function later () {
  console.log("2? will happen in 1 second.");
}

console.log("1");
setTimeout(later, 1000);
console.log("3");
</javascript>

Der Output ist 1, 3.  Und sehr viel später dann: 2? will happen in 1 second.


## timeout abbestellen

Wenn man den timer nicht mehr braucht, kann man ihn
mit `clearTimeout` wieder löschen:

<javascript>
function later () {
  console.log("will happen in 1 second.");
}

let t = setTimeout(later, 1000);

clearTimeout(t);
</javascript>

Hier wird es nie zu dem Output kommen.


## Intervall

Mit der Methode `setInterval` können wir eine Funktion
wiederholt aufrufen lassen:

<javascript>
function again () {
  console.log("another second is over.");
}

setInterval(again, 1000);
</javascript>

## interval abbestellen

Genau wie bei `setTimeout` und `clearTimeout`
gibt es zu `setInterval` ein `clearInterval`:

<javascript>
let counter = 0;
let i;

function again () {
  counter++;
  console.log(counter, " seconds");
  if (counter > 10) clearInterval(i);
}

i = setInterval(again, 1000);
</javascript>


# Vertiefung: Asynchron

Bei der Vorstellung der asynchronen Funktionen haben wir gelernt:
Ein laufendes Javascript-Programm wird niemals unterbrochen.
Erst wenn das aktuelle Programm beendet ist
wird eine Callback-Funktion aufgerufen.

Diese Prinzip kann man am Beispiel von `setTimeout` besonders gut sehen.

## setTimeout mit drei Sekunden

Mit `setTimeout` kann man eine Funktion später (Angabe in Millisekunden)
ausführen lassen:

<javascript caption="asynchron">
function later() {
  console.log("3 Sekunden später", Date.now());
}

console.log("tick", Date.now());
setTimeout(later, 3000);
console.log("tock", Date.now());
console.log("tick", Date.now());
console.log("tock", Date.now());
</javascript>

(Programm in die Konsole kopieren und ausprobieren!)

## setTimeout mit null Sekunden

Was passiert, wenn man den Timeout auf 0 setzt?

<javascript caption="asynchron">
function later() {
  console.log("0 Sekunden später?", Date.now());
}
console.log("tick", Date.now());
setTimeout(later, 0);
console.log("tock", Date.now());
console.log("tick", Date.now());
console.log("tock", Date.now());
</javascript>

Zwei Ergebnisse wären möglich:

<shell>
Variante A: passiert sofort
tick
0 Sekunden später?
tock
tick
tock
__|__
Variante B: Programm läuft durch bis zum Ende
tick
tock
tick
tock
0 Sekunden später?
</shell>

##  Auflösung setTimeout mit null Sekunden

Die Antwort ist: das Javascript-Programm wird nicht unterbrochen,
sonder läuft bis zum Ende durch.  Hier nochmal mit mehr Ausgaben:

<javascript caption="asynchron">
function later() {
  console.log("NICHT 0 Sekunden später!", Date.now());
}
console.log("tick", Date.now());
setTimeout(later, 0);
console.log("tock", Date.now());
console.log("tick", Date.now());
console.log("tock", Date.now());

// Output in der Konsole:
// tick 1588059630667
// tock 1588059630668
// tick 1588059630668
// tock 1588059630668
// nicht 0 Sekunden später 1588059630669
</javascript>


## Ähnliche Befehle

Es gibt drei Befehle in diesem Bereich:

* Ungefähr nach x Sekunden eine Funktion starten: [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)


* Ungefähr alle x Sekunden eine Funktion starten: [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

* Ungefähr für jeden Frame einmal eine Funktion starten: [requestAnimationFrame](https://css-tricks.com/using-requestanimationframe/)


## Siehe auch

* [JavaScript Visualizer 9000](https://www.jsv9000.app/) visualisiert Call Stack, Task Queue und Microtask Queue
