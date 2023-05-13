---
title: AJAX
order: 50
---

Wir kennen schon die Funktionsweise von [HTTP](/http/). Bisher
wurde ein HTTP Request durch eine Handlung der UserIn ausgelöst
(URL eintippen, Link anklicken), oder um Ressourcen zu laden
die zu einem HTML-Dokument gehören.

Mit AJAX lernen wir nun eine neue Art kennen, wie HTTP-Request
verwendet werden: Asynchrone Requests.

## Was ist AJAX?

AJAX ist die englische Abkürzung für „Asynchrones Javascript und XML“. In
diesem Kapitel lernen Sie was das genau bedeutet, und dass sich hinter dem X
zum Schluss auch andere Format verbergen können

### AJAX Beispiel: Autocomplete

Ein Beispiel für die Verwendung von AJAX ist das in der Abbildung unten
gezeigte Eingabefeld:
schon während des Eintippens eines Suchwortes wird eine Anfrage an den Webserver
geschickt. Dieser antwortet mit einer Liste von vorgeschlagenen Namen. Diese Liste
wird mit Javascript in einer `div` unterhalb des Eingabefelds angezeigt:

![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/image375.png)

Mit AJAX wird hier eine HTTP-Anfrage gesendet.

Asynchron heisst hier: der Request wird abgesetzt, das Javascript-Programm läuft sofort
weiter, die UserIn kann weiterhin mit der Webseite interagieren. Erst wenn die Antwort
des Servers vorliegt starte ein
Javascript-Programm und fügt die Daten in die Seite ein.

### Im Javascript Programm: synchorn

Nehmen wir an `rechnen1`, `rechnen2`, `rechnen3`, `rechnen4`,
und `synchronLaden` sind Funktionen, die wir in einem anderne Teile des
Programmes definiert haben.

Bei jedem Aufruf einer der Funktionen passiert dasselbe:

* erst wenn `rechnen1` fertig ist geht's weiter mit `rechnen2`,
* erst wenn `rechnen2` fertig ist geht's weiter mit `synchronLaden`,
* erst wenn `synchronLaden` fertig ist geht's weiter mit `rechnen3`,
* erst wenn `rechnen3` fertig ist geht's weiter mit `rechnen4`.

Dieser Ablauf ist "synchron".

<javascript caption="synchron">
rechnen1();
rechnen2();
data = synchronLaden(url);
console.log("data arrived", data);
rechnen3();
rechnen4();
</javascript>

Wenn nun die Funktion `synchronLaden` wirklich Daten von der url
mittels HTTP lädt, dann kann das sehr lange dauern - vielleicht
eine ganze Sekunde?

### Im Javascript Programm: asynchorn

Es gibt nun in Javascript die Möglichkeit Funktionen
zu schreiben die sich anders verhalten, nämlich asynchron.

Hier ein Beispiel mit mehreren synchronen Funktionen  `rechnen1`, `rechnen2`, `rechnen3`, `rechnen4`,
und einer asynchronen Funktion genannt `asynchronLaden`:

<javascript caption="asynchron">
function handleData(data) {
  console.log("data arrived", data);
}

rechnen1();
rechnen2();
asynchronLaden(url, handleData);
rechnen3();
rechnen4();
</javascript>

Erst wenn `rechnen1` fertig ist geht's weiter mit `rechnen2`. Erst wenn `rechnen2` fertig ist geht's weiter mit `asynchronLaden` - aber dann passiert etwas Besonderes:

`asynchronLaden` will etwas sehr zeitaufwendiges tun - Daten von der URL per HTTP laden.
Trotzdem scheint es sehr schnell zu gehen, das Programm geht direkt zu `rechnen3`  weiter, egal ob und wie schnell der Server auf die HTTP-Anfrage antwortet. Wenn
`rechnen3` fertig ist wird `rechnen4` ausgeführt, und das JavaScript Programm endet.

Aber eine Sekunde später passiert was Neues:  Die Daten, die in `asynchronLaden`
angefragt wurden sind eingelangt - das ist irgendwie im Hintergrund passiert - und sind
nun bereit zur Weiterverarbeitung.

Wenn die Daten vom Server schließlich einlangen wird die Funktion `handleData`
aufgerufen und die Daten zu verarbeiten.

### Synchroner Ablauf wird nie unterbrochen

Achtung: ein laufendes Javascript Programm wird nie unterbrochen.
Im letzten Code-Beispiel wird es nie passieren, dass zwischen `rechnen3`
und `rechnen4` etwas anderes (z.B. `handleData`) passieren!

Erst wenn dieses kleine Programm fertig durchgelaufen ist
stellt sich die Frage ob das Laden der Daten über HTTP fertig,
und damit `handleData` dran ist.

<javascript caption="asynchron">
function handleData(data) {
  console.log("data arrived", data);
}

rechnen1();
rechnen2();
asynchronLaden(url, handleData);
rechnen3();
rechnen4();
</javascript>

### Asynchrone HTTP Requests

Betrachten wir nun den Ablauf für ein Textfeld mit Autocomplete-Funktion,
wie in der obigen Abbildung gezeigt. Folgende Abbildung ist ein
[Sequenz Diagramm](http://de.wikipedia.org/wiki/Sequenzdiagramm), die Zeit
läuft von oben nach unten.

Zuerst wird die Webseite mit dem Formular geladen: der Browser schickt die
Anfrage an den Server und erhält eine Antwort. Was immer zuvor im Browser
angezeigt wurde wird - nach Ankunft des HTTP Response - gelöscht, die neue
Seite wird im Browser dargestellt. Diese Verhalten des Browsers ist uns
schon bekannt.

Nun kommt der neue Teil: das Eintippten des ersten Buchstabens ins
Eingabefeld löst ein Javascript-Programm aus, das einen AJAX-Request absetzt.
Am Netzwerk ist das ein ganz normaler HTTP Request, für den Server gibt
es keinen Unterschied zu jedem anderen Request.

Was anders ist, ist das Verhalten des Browsers: Das Absenden des Requests
bleibt die Webseite bestehen und bleibt interaktiv - das Absenden passiert
meist von der UserIn unbemerkt.

Wenn die Daten des Response
einlangen wird **nicht** die Seite gelöscht, sondern es wird eine
Javascript-Funktion in der Seite aufgerufen, die die Daten entgegen nimmt.
Für das Autocomple-Verhalten bestehen die Daten aus einer Liste von Vorschlägen,
die Javascript-Funktion zeigt diese Vorschläge unterhalb des Eingabefeldes an.

![AJAX Ablauf](/images/ajax-sequence-diagram.svg)

### Datenformate - mehr als nur XML

Das X am Ende von AJAX steht für XML – das stimmt aber nicht: die Daten vom Server
können im XML-Format gesendet werden, aber genauso auch als HTML oder reiner
Text oder JSON. Man könnte das X in AJAX auch als „X-beliebiges Format“ deuten.

### Simples Javascript Beispiel

Im ersten AJAX Beispiel wird der Output eines PHP-Counters in eine HTML-Seite
eingebunden. Für den HTTP Request verwenden wir den Befehl `fetch`[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

<htmlcode caption="Counter einbinden mit Javascript">
<html>
<head>
  <meta charset="utf-8">
  <title>AJAX counter</title>
</head>
<body>
  <h1>Webseite</h1>

  <div id="output">0</div>

  <script>
    fetch("counter_ajax.php")
      .then((response) => {
        console.log("Response wird empfangen");
        console.log(response.url);
        console.log(response.headers.get('Content-Type'));
        let promiseOfText = response.text();
        return promiseOfText;
      })
      .then((text) => {
        console.log("text wurde aus dem Response herausgelesen", text);
        document.getElementById('output').innerHTML = text;
        console.log("fertig!");
      });
    console.log("abgesendet, sofort weiter");
  </script>
</body>
</html>
</htmlcode>

Diesen Ablauf müssen wir genauer analysieren.

### Promises

Der Rückgabewert der funktion `fetch` ist eine **Promise**: ein Objekt,
das den Umgang mit einer asynchrone Operation einfacher machen soll.

<javascript>
<script>
  let promise = fetch("counter_ajax.php");
</script>
</javascript>

Das Promise Objekt ist ein Platzhalter für das Ergebnis der Operation, das noch nicht
bekannt ist. In anderen Programmiersprachen ist die Promise auch als
Future oder deferred Task bekannt, siehe [wikipedia](https://en.wikipedia.org/wiki/Futures_and_promises).

Mit der Methode `then()` kann eine Funktion als Callback angegeben
werden, die aufgerufen wird wenn das Ergebnise vorliegt:

<javascript>
promise.then((response) => {
  console.log("Response wird empfangen");
  // tu was mit dem response objekt
});
</javascript>

### Response Body

Bei `fetch` muss mit dem Ergebnis einer asynchronen Operation
eine weitere asynchrone Operation aufgerufen werden: Das Laden des
gesamten Body des HTTP Response kann lange dauern. Deswegen
erhalten wir nicht sofort den body, sondern wieder eine Promise:

<javascript>
promise.then((response) => {
  console.log("Response wird empfangen");
  let promiseOfText = response.text();
  return promiseOfText;
});
</javascript>

Es gibt drei Arten wie der Body ausgelesen werden kann -
als text, json oder binary blob (z.B. beim Laden eines Bildes).

<javascript>
response.text();
response.json();
response.blob();
</javascript>

### Chaining

Da nun die erste Callback Funktion wieder eine Promise zurückgibt,
kann  wieder die Methode `then` verwendet werden:

<javascript>
.then((response) => {
  console.log("Response wird empfangen");
  let promiseOfText = response.text();
  return promiseOfText;
})
.then((text) => {
  console.log("text wurde aus dem Response herausgelesen", text);
  document.getElementById('output').innerHTML = text;
  console.log("fertig!");
});
console.log("abgesendet, sofort weiter");
</javascript>


### Kurze Version

Wenn man alle Ausgaben auf die Console weg lässt
wird der Code sehr kurz:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text() )
  .then(text => document.getElementById('output').innerHTML = text );
</javascript>



### Fehlerbehandlung

Für die Fehlerbehandlung gibt es die Methode `catch`:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text())
  .then(text => document.getElementById('output').innerHTML = text )
  .catch(error => {
	  document.getElementById('output').innerHTML = '#';
    console.log(error);
  });
</javascript>

### Fehlerbehandlung von HTTP

Zur Erinnerung: Bei einem HTTP Response wird ein Statuscode
mitgeliefert, der Erfolg oder Fehler anzeigen kann, siehe auch
[http-status-code.de](https://http-status-code.de/)



Achtung: wenn bei einem `fetch` der HTTP-Response einen Statuscode
für einen Fehler liefert, z.B. 404 oder 500 , dann
löst das noch keine Exception aus, die mit `catch` gefangen werden könnte.

Die Property `response.ok` zeigt an ob der HTTP Status im
postivien Bereich (200-299) war.


Das müsste man selbst behandeln:

<javascript>
fetch("counter_ajax.php")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(text => document.getElementById('output').innerHTML = text )
  .catch(error => {
	  document.getElementById('output').innerHTML = '#';
    console.log(error);
  });
  console.log("abgesendet, sofort weiter");
</javascript>

### Backend

Das Backend ist im Fall des Counters sehr simpel: ein PHP-Programm
das eine Zahl ausgibt.  Im einfachsten Fall also

<php>
<?php echo 42 ?>
</php>

