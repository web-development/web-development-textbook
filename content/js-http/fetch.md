---
title: fetch
order: 50
---

Wir kennen schon die Funktionsweise von [HTTP](/http/).

Bisher wurde ein HTTP-Request
meist durch eine Aktion der Benutzerin oder des Benutzers ausgelöst –
etwa durch das Eintippen einer URL oder das Anklicken eines Links.

Der Browser macht dann einen ersten HTTP-Request um das HTML-Dokument zu laden.
Das Dokument kann dann Verweise auf weitere Ressourcen enthalten, die auch geladen
werden, wie hier in den Developer Tools gezeigt:

![](/images/js-http/http-one-webpage.png)


Mit `fetch` lernen wir nun eine neue Art kennen, wie ein HTTP-Request
verwendet wird: als asynchroner Request.

## Wozu fetch

Ein Beispiel für die Verwendung von `fetch` ist das in der Abbildung unten
gezeigte Eingabefeld für Tags: schon während des Eintippens eines Suchwortes (hier: "webd")
wird eine Anfrage an den Webserver geschickt. Dieser antwortet mit einer Liste von vorgeschlagenen Tags.
Diese Liste wird unterhalb des Eingabefelds angezeigt:


![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/js-http/autocomplete.png)

Mit `fetch` wird hier eine HTTP-Anfrage gesendet.

Asynchron heisst hier: der Request wird abgesetzt, das Javascript-Programm läuft sofort
weiter, man kann weiterhin mit der Webseite interagieren. Erst wenn die Antwort
des Servers vorliegt starte ein
Javascript-Programm und fügt die Daten in die Seite ein.

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

![Ablauf](/images/js-http/fetch-sequence-diagram.svg)

### Simples Javascript Beispiel

Im ersten `fetch` Beispiel wird der Output eines PHP-Counters in eine HTML-Seite
eingebunden.

![Demo](https://users.ct.fh-salzburg.ac.at/~bjelline/counter/index.html)

<htmlcode caption="Counter einbinden mit Javascript">
<html>
<head>
  <meta charset="utf-8">
  <title>AJAX counter</title>
</head>
<body>
  <h1>Webseite</h1>

  <script type="module">
    function handle_response(response) {
      return response.text();
    }

    function handle_text(text) {
      let p = document.createElement("p");
      p.innerHTML = `Zugriffe: <b>${text}</b>`;
      document.querySelector("body").appendChild(p);
    }

    fetch("counter.php").then(handle_response).then(handle_text);
  </script>
</body>
</html>
</htmlcode>

Diesen Ablauf müssen wir genauer analysieren.

### Promises

Der Rückgabewert der Funktion `fetch` ist eine **Promise**: ein Objekt,
das den Umgang mit einer asynchrone Operation einfacher machen soll.

<javascript>
<script>
  let promise = fetch("counter.php");
</script>
</javascript>

Das Promise Objekt ist ein Platzhalter für das Ergebnis der Operation, das noch nicht
bekannt ist. In anderen Programmiersprachen ist die Promise auch als
Future oder deferred Task bekannt, siehe [wikipedia](https://en.wikipedia.org/wiki/Futures_and_promises).

Mit der Methode `then()` kann eine Funktion als Callback angegeben
werden, die aufgerufen wird wenn das Ergebnise vorliegt:

<javascript>
function handle_response(response) {
  console.log("Response wird empfangen");
  // tu was mit dem response objekt
}
promise.then(handle_response);
</javascript>


## Response Body

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
button.disabled = true;

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
  })
  .finally {
    button.disabled = false;
  };
</javascript>

### Backend

Das Backend ist im Fall des Counters sehr simpel - ein PHP-Programm
das eine Zahl ausgibt.  Im einfachsten Fall also:

<php>
<?php echo 42; ?>
</php>


## Siehe auch

* `fetch`[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
