---
title: Zähler
order: 5
---



Ein einfacher Zähler
-------------------

An diesem Simplen Beispiel werden wir verschiedene
Arten Javascript zu schreiben kennen lernen, Am
Beispiel eines einfachen Zählers, wie man ihn z.B. für
ein Brettspiel brauchen könnte:

![Screenshot 3 Zähler](/images/applied-js-and-css/1counter.png)


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


## Event Listener

Die Event-Listener sind als `onclick` Attribute in HTML gesetzt.

Das kann man auch ganz von JavaScript aus machen, mit `addEventListener`.

### addEventListener statt onclick

Die Methode `addEventListener` findet man in jeder DOM node und
einigen weiteren Objekten.  Die Methode nimmt zwei Argumente:

* einen String mit dem Namen des Events
* eine Funktion die aufgerufen werden soll, wenn das event auftritt

statt

<htmlcode>
<button onclick="increment()">Up</button>
</htmlcode>

schreibt man dann

<htmlcode>
<button id="up">Up</button>

<script>
    const upButton = document.getElementById('up');
    upButton.addEventListener('click', increment);
</script>
</htmlcode>


### Programm mit addEventListener


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

## Probleme mit der DOM

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

<javascript>
document.addEventListener('DOMContentLoaded', setupCounter);
</javascript>

Die Funktion `setupCounter` müssen wir nur zuerst definieren,
so sieht also das gesamte Beispiel aus:

<javascript>
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
</javascript>

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

<javascript caption="mit Fehler!">
function setupCounter() {
    const counter = new Counter(0);
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    upButton.addEventListener('click', counter.increment());
    downButton.addEventListener('click', counter.decrement());
}

document.addEventListener('DOMContentLoaded', setupCounter);
</javascript>

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


## Mehrere Zähler auf einer Seite

Ich möchte gerne drei Zähler in einer Seite anzeigen,
und jeder soll für sich separat funktionieren.

![Screenshot 3 Zähler](/images/applied-js-and-css/3counter.png)

Dafür sind einige Schritte nötig:


### HTML mit id

In unserem HTML Code identifizieren wir die einzelnen
Teile des Counters mit id. Das gibt ein Problem sobald
wir mehrere Kopien davon verwenden wollen:

<htmlcode>
<div>Brigitte:
    <input type="number" id="counter" value="0" readonly>
    <button id="up">Up</button>
    <button id="down">Down</button>
</div>

<div>Andreas:
    <input type="number" id="counter" value="0" readonly>
    <button id="up">Up</button>
    <button id="down">Down</button>
</div>
</htmlcode caption="Error: die id ist nicht eindeutig!">

Die doppelen id's führen zwar nicht zu einer Error-Meldung.
Aber die Methode `document.getElementById('up')` findet nur den
ersten Button.

### HTML mit Klasse

Innerhalb des Counters verwenden wir nur Klassen, keine id's mehr:

<htmlcode>
  <div id="counter_1">
    Brigitte
    <input type="number" class="counteroutput" value="0">
    <button class="up_btn">Up</button>
    <button class="down_btn">Down</button>
  </div>

  <div id="counter_2">
    Andreas
    <input type="number" class="counteroutput" value="0">
    <button class="up_btn">Up</button>
    <button class="down_btn">Down</button>
  </div>
</htmlcode>

Nun kann man die beiden Buttons eindeutig finden:

* `document.getElementById('counter_1').querySelector('up_btn')`
* `document.getElementById('counter_2').querySelector('up_btn')`


### Objekt und DOM-Nodes aufsetzen

Für jeden Counter müssen wir die Verbindungen zwischen dem
Javascript Objekt der Klasse `Counter`
und den passenden DOM-Elementen aufbauen.

Da das immer gleich funktioniert geben wir das in eine Funktion.

<javascript>
setCounterAndDOM(document.getElementById('counter_1'));
setCounterAndDOM(document.getElementById('counter_2'));
setCounterAndDOM(document.getElementById('counter_3'));
</javascript>

Das Argument ist die oberste DOM-Node für den Zähler.

<javascript caption="Fehlerhafter code!">
function setCounterAndDOM(parentNode) {
    let myCounter = new Counter(0);

    const up_btn = parentNode.querySelector('.up');
    const down_btn = parentNode.querySelector('.down');

    up_btn.addEventListener('click', () => myCounter.increment() )
    down_btn.addEventListener('click', () => myCounter.decrement() )
}
</javascript>

Dieser Code hat aber noch ein Problem

### Dependency Injection

Das Problem liegt in der Klasse `Counter`: egal wie viele
verschiedene Objekte dieser Klasse es gibt, als Ausgabe-Element
wird immer die Node mit id `counter` verwendet:

<javascript>
class Counter {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }
    ...
    updateDisplay() {
        document.getElementById('counter').value = this.value;
    }
}
let myCounter = new Counter(0);
</javascript>

Welche DOM-Node für die Ausgabe verwendet wird sollte
für jedes Objekt anders sein. Und die Counter-Klasse sollte
sich nur um die Logik des zählens kümmern, und möglichst wenig
über die DOM wissen müssen.

Deswegen übergeben wir die DOM-Node als Argument im Constructor:

<javascript>
class Counter {
    constructor(initialValue = 0, displayElement) {
        this.value = initialValue;
        this.displayElement = displayElement;
    }
    ...
    updateDisplay() {
        if (this.displayElement) {
            this.displayElement.value = this.value;
        }
    }
}
let myCounter = new Counter(0, document.getElementById('counter'));
</javascript>



### Dependency Injection mit Funktion

Auch in dieser Version "weiss" die Counter-Klasse noch etwas
über die DOM: sie weiss, dass das displayElement eine property `value`
hat die gesetzt werden muss.

Noch besser wäre es, wenn sie nur eine Funktion aufruft,
und alle Details dann in der Funktion versteckt sind:


<javascript>
class Counter {
    constructor(initalValue, showValue) {
        this.n = initalValue;
        this.showValue = showValue;
    }
    increment() {
        this.n += 1;
        this.showValue(this.n);
    }
    ...
}
</javascript>

Dem Konstruktur übergeben wir nun keine DOM-Node mehr,
sondern eine Funktion. Hier als Arrow Function:

<javascript>
let myCounter = new Counter(0, (v) => { outputNode.value = v });
</javascript>



### Endergebnis

So sieht nun der neue Code aus:

<htmlcode>
<!DOCTYPE html>
<html>
<head>
    <title>Three Simple Counters</title>

    <script>
      function setupCounter() {

        class Counter {
          constructor(initalValue, showValue) {
            this.n = initalValue;
            this.showValue = showValue;
          }
          increment() {
            this.n += 1;
            this.showValue(this.n);
          }

          decrement() {
            this.n -= 1;
            this.showValue(this.n);
          }
        }

        function setCounterAndDOM(parentNode) {
          let outputNode = parentNode.querySelector('.counteroutput');

          let myCounter = new Counter(0, (v) => outputNode.value = v);

          const up_btn = parentNode.querySelector('.up');
          const down_btn = parentNode.querySelector('.down');

          up_btn.addEventListener('click', () => myCounter.increment() )
          down_btn.addEventListener('click', () => myCounter.decrement() )
        }

        setCounterAndDOM( document.getElementById('counter_1') );
        setCounterAndDOM( document.getElementById('counter_2') );
        setCounterAndDOM( document.getElementById('counter_3') );
      }

      document.addEventListener('DOMContentLoaded', setupCounter)
    </script>
</head>
<body>

  <div id="counter_1">
    Brigitte
    <input type="number" class="counteroutput" value="0">
    <button class="up">Up</button>
    <button class="down">Down</button>
  </div>

  <div id="counter_2">
    Andreas
    <input type="number" class="counteroutput" value="0">
    <button class="up">Up</button>
    <button class="down">Down</button>
  </div>

  <div id="counter_3">
    Tanja
    <input type="number" class="counteroutput" value="0">
    <button class="up">Up</button>
    <button class="down">Down</button>
  </div>

</body>
</html>

</htmlcode>



## Schluss

Wir haben den einfachen Counter mehrmals neu programmiert,
aber dabei nichts an der Funktionsweise geändert.

Das nennt man "Refactoring".

Refactoring in der Programmierung ist genau so wichtig
wie die Überarbeitung eines wichtigen Textes oder mehrere Skizzen
bis ein Bild entsteht.


