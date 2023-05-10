---
title: Speichern im Browser
order: 45
---

JavaScript Programme die im Browser laufen haben einen ganz
eigenen Lebenszyklus:

In jedem Browserfenster läuft ein anderes Programme, jeweils mit
eigenen Variablen.  Bei einem "Reload" startet das Programm von Vorne,
mit neuen Variablen:

[Demo](/images/applied-js-and-css/no-storage.html)


## localStorage

Um diese Einschränkung zu überwinden gibt `localStorage`: ein Art
Daten permanent und unabhängig von Browser-Fenstern zu speichern.

<javascript>
localStorage.setItem("name", "she who must not be named");
let n = localStorage.getItem("name");
</javascript>


Aber Achtung: `localStorage` ist ein key-value store, sowohl keys
als auch values können nur Strings sein!

## Zahlen in localStorage speichern

Wenn man Zahlen oder andere Datentypen in localStorage speichern will
kann man sie explizit konvertieren:

<javascript>
localStorage.setItem("number", 42);
let n = parseInt( localStorage.getItem("number") );
</javascript>

oder man verwendet JSON dafür:



<javascript>
localStorage.setItem("number", JSON.stringify(42));
let n = JSON.parse( localStorage.getItem("number") );
</javascript>


## Storage Event

Wenn in localStorage etwas gespeichert wird löst das ein
Storage-Event aus. Auf das kann ich in JavaScript reagieren:


<javascript>
var n;  // globale Variable, kann unten gesetzt werden

addEventListener("storage", (event) => {
  n = JSON.parse( localStorage.getItem("number") );
});
</javascript>


## Anwendungen für localStorage

localStorage ist sehr gut geegiente:

* für Daten einer Person auf einem Gerät
* für Fälle wenn die Seite "offline" verwendet wird

aber es ist nicht geeigent falls:

* Daten zwischen verschiedenen Personen geteilt werden sollen,
* oder zwischen verschiedenen Browsern,
* oder zwischen verschiedenen Geräten

Dafür brauchen wir weiterhin eine Backend mit Datenbank.


## Siehe Auch

* [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
