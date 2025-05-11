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

Ein Beispiel für die Verwendung von `fetch` ist das Eingabefeld für Tags in der Abbildung unten.
Schon während man ein Wort eintippt (zum Beispiel die 4 Buchstaben „webd“),
wird eine Anfrage an den Server geschickt.
Der Server antwortet mit passenden Vorschlägen.
Diese werden direkt unter dem Eingabefeld angezeigt.

![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/js-http/autocomplete.png)

Mit `fetch` wird hier eine HTTP-Anfrage gesendet.

*Asynchron* bedeutet hier: Das JavaScript schickt den Request los und macht dann sofort weiter – es wartet nicht auf die Antwort. Die Webseite bleibt benutzbar. Sobald die Antwort vom Server da ist, wird ein weiteres JavaScript-Programm gestartet, das die Daten in die Seite einfügt.

### Asynchrone HTTP Requests

Betrachten wir nun den Ablauf für ein Textfeld mit Autocomplete-Funktion,
wie in der obigen Abbildung gezeigt. Folgende Abbildung ist ein
[Sequenz Diagramm](http://de.wikipedia.org/wiki/Sequenzdiagramm), die Zeit
läuft von oben nach unten.


![Ablauf](/images/js-http/fetch-sequence-diagram.svg)

Zuerst tippt ein Mensch die URL ein, daraufhin lädt der Browser die Webseite mit dem Formular:
Er schickt eine Anfrage an den Server und bekommt eine Antwort. Sobald die Antwort da ist,
zeigt der Browser die neue Seite an und ersetzt damit den vorherigen Inhalt. Dieses Verhalten kennen wir bereits.

Jetzt kommt der neue Teil: Wenn man den ersten Buchstaben ins Eingabefeld tippt, startet ein JavaScript-Programm.
Dieses schickt im Hintergrund eine Anfrage an den Server – mit dem `fetch` Befehl. Technisch ist das ein ganz
normaler HTTP-Request, der für den Server aussieht wie jeder andere auch.

Der Unterschied liegt beim Verhalten des Browsers: Die Seite bleibt sichtbar und benutzbar.
Die Anfrage läuft unbemerkt im Hintergrund ab.

Wenn die Antwort vom Server ankommt, wird nicht die ganze Seite neu geladen.
Stattdessen ruft JavaScript eine Funktion auf, die die Daten verarbeitet.
Für die Autovervollständigung ist das meist eine Liste von Vorschlägen, die dann direkt unter dem Eingabefeld angezeigt wird.

### Simples Javascript Beispiel

Diese Javascript Beispiel ist noch einfacher: mit einem  `fetch` Befehl wird der Output eines PHP-Programmes
in eine HTML-Seite eingebunden.

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
  // z.B. Aufruf von response.text() oder response.json() oder response.blob();
}
promise.then(handle_response);
</javascript>


## Response

Die Methoden `response.text()` und `response.json()` und `response.blob()`
liefern wieder eine Promise:

<javascript>
function handle_text(text) {
  console.log("Response wird empfangen");
  let promiseOfText = response.text();
  return promiseOfText;
}
</javascript>


### Chaining

Da nun die erste Callback Funktion wieder eine Promise zurückgibt,
kann  wieder die Methode `then` verwendet werden:

<javascript>
function handle_response(response) {
  return response.text();
}

function handle_text(text) {
  let p = document.createElement("p");
  p.innerHTML = `Zugriffe: <b>${text}</b>`;
  document.querySelector("body").appendChild(p);
}

fetch("counter.php").then(handle_response).then(handle_text);
</javascript>


### Schreibweise mit Arrow Functions

Wenn man alle Ausgaben auf die Console weg lässt
wird der Code sehr kurz:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text() )
  .then(text => {
    let p = document.createElement("p");
    p.innerHTML = `Zugriffe: <b>${text}</b>`;
    document.querySelector("body").appendChild(p);
  });
</javascript>


## Fehlerbehandlung

Ein normaler `try - catch` Block funktioniert bei `fetch ... then` nicht.
Statt dessen muss macn eine `catch` methode ans Ende der Chain anhängen:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text() )
  .then(text => {
      let p = document.createElement("p");
      p.innerHTML = `Zugriffe: <b>${text}</b>`;
      document.querySelector("body").appendChild(p);
  }).catch(error => {
      console.log(error);
  });
</javascript>


## Siehe auch

* `fetch`[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
