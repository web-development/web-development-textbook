---
title: setTimeout
order: 51
---

Bei der Vorstellung von asynchronen Funktionen haben wir gelernt:
ein laufendes Javascript Programm wird nie unterbrochen.
Erst wenn das aktuelle Programm zu Ende ist
stellt sich die Frage ob eine Callback Funktion aufgerufen wird.

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

```
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
```

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


