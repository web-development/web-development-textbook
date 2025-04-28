---
title: Zähler
order: 5
---

Ein einfacher Zähler
-------------------

An diesem Simplen Beispiel werden wir verschiedene
Arten Javascript zu schreiben kennen lernen.

Hier ist die Ausgangsversion des Codes:


<htmlcode>
<input type="number" id="counter" value="0">
<button onclick="increment()">Up</button>
<button onclick="decrement()">Down</button>

<script>
    function increment() {
        const counter = document.getElementById('counter');
        counter.value = parseInt(counter.value) + 1;
    }

    function decrement() {
        const counter = document.getElementById('counter');
        counter.value = parseInt(counter.value) - 1;
    }
</script>
</htmlcode>


## addEventListener

Die Event-Listener sind als `onclick` Attribute in HTML gesetzt.
Das kann man auch ganz von JavaScript aus machen, mit `addEventListener`.
Dann hat man in HTML nur noch die Aufgabe die verschiednenen Elemente
mit eindeutigen id's oder Klassen zu benennen. Alles weitere passiert in Javascript:

<htmlcode>
<input type="number" id="counter" value="0">
<button id="up">Up</button>
<button id="down">Down</button>

<script>
    const counter = document.getElementById('counter');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    function increment() {
        counter.value = parseInt(counter.value) + 1;
    }

    function decrement() {
        counter.value = parseInt(counter.value) - 1;
    }

    upButton.addEventListener('click', increment);
    downButton.addEventListener('click', decrement);
</script>
</htmlcode>

## Problemt mit der DOM

Achtung: wenn man das Javascript **vor** dem HTML in die
Seite gibt, hat man ein Problem:

<htmlcode>
<head>
    <title>Simple Counter</title>
    <script>
      const counter = document.getElementById('counter');
      const upButton = document.getElementById('up');
      const downButton = document.getElementById('down');

      function increment() {
          counter.value = parseInt(counter.value) + 1;
      }

      function decrement() {
          counter.value = parseInt(counter.value) - 1;
      }

      upButton.addEventListener('click', increment);
      downButton.addEventListener('click', decrement);
  </script>
</head>
<body>
    <input type="number" id="counter" value="0">
    <button id="up">Up</button>
    <button id="down">Down</button>
</body>
</htmlcode>

Der Counter funktioniert nicht mehr, und in der Console sieht man die Fehlermeldung:

**Uncaught TypeError: can't access property "addEventListener", upButton is null**

Das Problem ist, dass der upButton noch gar nicht existiert, wenn der Code
ausgeführt wird. `document.getElementById('up')` liefert dann den wert `null`,
mit dem wir aber nicht weiter arbeiten können.

## Lösung DOMContentLoaded

Das Event `DOMContentLoaded` wird gefeuert, wenn die DOM vollständig
ist:

<htmlcode>
document.addEventListener('DOMContentLoaded', setupCounter);
</htmlcode>

Die Funktion `setupCounter` müssen wir nur zuerst definieren,
so sieht also das gesamte Beispiel aus:

<htmlcode>
function setupCounter() {
    const counter = document.getElementById('counter');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    function increment() {
        counter.value = parseInt(counter.value) + 1;
    }

    function decrement() {
        counter.value = parseInt(counter.value) - 1;
    }

    upButton.addEventListener('click', increment);
    downButton.addEventListener('click', decrement);
}

document.addEventListener('DOMContentLoaded', setupCounter);
</htmlcode>

## Javascript Klasse

Bisher ist der Wert des Zählers direkt im DOM-Element gespeichert.
Bei komplexeren Beispielen wollen wir das sicher nicht mehr, da wollen
wir Javascript Klassen verwenden.

Wir können also ein Klasse für den Zähler programmieren:

<javascript>
class Counter {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    increment() {
        this.value++;
        this.updateDisplay();
    }

    decrement() {
        this.value--;
        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById('counter').value = this.value;
    }
}
</javascript>

### Erzeugen des Objekts und Anbindung an die DOM

In der setup-Funktion wird nun ein Objekt dieser Klasse
erzeugt:

<javascript>
function setupCounter() {
    const counter = new Counter(0);
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    upButton.addEventListener('click', counter.increment());
    downButton.addEventListener('click', counter.decrement());
}

document.addEventListener('DOMContentLoaded', setupCounter);
</javascript caption="mit Fehler">

Aber Achtung: dieser Code funktioniert nicht!

### EventListener richtig aufsetzen

Das Problem sind diese beiden Zeilen:

<javascript>
upButton.addEventListener('click', counter.increment()); // FALSCH!
downButton.addEventListener('click', counter.decrement()); // FALSCH!
</javascript>

Wenn `addEventListener` ausgeführt wird, wird die Methode `counter.increment`
einmal aufgerufen.  Sie liefert keinen Rückgabewert, also `undefined`.
Damit passiert dann bei jedem klick auf den Button ... nichts!

Zweiter Versuch:

<javascript>
upButton.addEventListener('click', counter.increment); // FALSCH!
downButton.addEventListener('click', counter.decrement); // FALSCH!
</javascript>

Auch hier gibt es einen Error: **Uncaught TypeError: this.updateDisplay is not a function**.
Hier funktioniert zwar der Aufruf der Methode, aber die Methode erhält
als `this` eine referenz auf den geklickten Button. Diese setzen von `this`
bei `addEventListener` gab es schon, bevor es Klassen gab. Heute ist
es sehr unpraktisch.


Um das Problem zu umgehen kann man eine Arrow Funkction verwenden,
dann klappts auch mit dem `this`:

<javascript>
upButton.addEventListener('click', () => counter.increment());
downButton.addEventListener('click', () => counter.decrement());
</javascript>


