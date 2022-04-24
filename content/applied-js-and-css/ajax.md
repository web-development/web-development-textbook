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

Ein Beispiel für die Verwendung von AJAX ist das in der Abbildung unten
gezeigte Eingabefeld:
schon während des Eintippens eines Suchwortes wird eine Anfrage an den Webserver
geschickt. Dieser antwortet mit einer Liste von vorgeschlagenen Namen. Diese Liste
wird mit Javascript in einer `div` unterhalb des Eingabefelds angezeigt:

![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/image375.png)

Mit AJAX wird hier eine HTTP-Anfrage gesendet.

Bei einer „normalen“ HTTP-Anfrage schaltet der Browser auf
„Warten“, eine neue vollständige Webseite wird geladen und angezeigt.

Asynchron heisst hier: der Request wird abgesetzt, das Javascript-Programm läuft sofort
weiter, die UserIn kann weiterhin mit der Webseite interagieren. Erst wenn die Antwort
des Servers vorliegt wird die normale Darstellung der Seite kurz unterbrochen und ein
Javascript-Programm fügt die Daten in die Seite ein.

### Im Javascript Programm: synchorn

Nehmen wir an Befehl1, Befehl2, Befehl3, Befehl4,
und synchron_laden sind alles Funktionen, die wir in einem anderne Teile des
Programmes definiert haben.

Bei jedem Aufruf passiert dasselbe: erst wenn Befehl1 fertig ist
geht's weiter mit Befehl2, erste wenn Befehl2 fertig ist geht's weiter
mit synchron_laden, erst wenn synchron_laden fertig ist geht's weiter
mit Befehl3.

Dieser Ablauf ist "synchron".

<javascript caption="synchron">
Befehl1();
Befehl2();
Antwort = synchron_laden(url);
Befehl3();
Befehl4();
</javascript>

Wenn nun die Funktion `synchron_laden` wirklich Daten von der url
mittels HTTP lädt, dann kann das sehr lange dauern - vielleicht
eine ganze Sekunde?

### Im Javascript Programm: asynchorn

Es gibt nun in Javascript die Möglichkeit Funktionen
zu schreiben die sich anders verhalten, nämlich asynchron.

Hier ein Beispiel mit mehreren synchronen Funktionen  Befehl1, Befehl2, Befehl3, Befehl4,
und einer asynchronen Funktion genannt `asynchron_laden`:

<javascript caption="asynchron">
function handle_data(data) {
  console.log("data arrived", data);
}

Befehl1();
Befehl2();
asynchron_laden(url, handle_data);
Befehl3();
Befehl4();
</javascript>

Erst wenn Befehl1 fertig ist geht's weiter mit Befehl2, erste wenn Befehl2 fertig ist geht's weiter mit `asynchron_laden` - aber dann passiert etwas besonders:

`asynchron_laden` will etwas sehr zeitaufwändiges tun - Daten von der URL mittels HTTP laden.
Trotzdem scheint sie ganz schnell fertig zu sein, das Programm  geht gleich zu `Befehl3` als
nächstes weiter, egal ob und wie schnell der Server auf den HTTP-Request antwortet. Wenn
`Befehl3` feritg ist wird `Befehl4` ausgeführt, und dann endet das JavaScript programm.

Aber eine Sekunde später passiert was neues:  Die Daten, die in `asynchron_laden`
angefragt wurden sind eingelangt - das ist irgendwie im Hintergrund passiert - und sind
nun bereit zur Weiterverarbeitung.

Wenn die Daten vom Server schließlich einlangen wird die Funktion `handle_data`
aufgerufen und die Daten zu verarbeiten.

### Synchroner Ablauf wird nie unterbrochen

Achtung: ein laufendes Javascript Programm wird nie unterbrochen.
Im letzten Code-Beispiel wird es nie passieren, dass zwischen Befehl3
und Befehl4 etwas anderes (z.B. handle_data) passieren!

Erst wenn dieses kleine Programm fertig durchgelaufen ist
stellt sich die Frage ob handle_data schon dran ist.

<javascript caption="asynchron">
function handle_data(data) {
  console.log("data arrived", data);
}

Befehl1();
Befehl2();
asynchron_laden(url, handle_data);
Befehl3();
Befehl4();
</javascript>

### Asynchrones Beispiel: setTimeout

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

§

Was passiert nun, wenn man den Timeout auf 0 setzt?

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

§

Antwort: das Javascript-Programm wird nicht unterbrochen!

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

## Simples Javascript Beispiel

Im ersten AJAX Beispiel wird der Output eines PHP-Counters in eine HTML-Seite
eingebunden.

<htmlcode caption="Counter einbinden mit Javascript">
<html>
<head>
  <meta charset="utf-8">
  <title>AJAX counter</title>
</head>
<body>
  <h1>Webseite</h1>

  <p>mit total viel Inhalt</p>

  <script>
    function handleCounterData() {
      console.log("Response wurde empfangen");
      let counter = this.responseText;
      // counter enhält jetzt den output des php programms
    }

    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.addEventListener("load", handleCounterData);
    ajaxRequest.open("GET", "counter_ajax.php");
    ajaxRequest.send();
    console.log("abgesendet, sofort weiter");
  </script>
</body>
</html>
</htmlcode>

Das `XMLHttpRequest` Objekt liefert verschiedene Events, hier wird nur für das `load` Event
eine Funktion als Listener angebracht. Mit der `open` Methode wird der HTTP-Request
konfiguriert, aber erst mit `send` wirklich abgeschickt. Da er Request asynchron erfolgt
geht der Javascript-Interpreter sofort von `send` weiter zu `console.log` in der nächsten
Zeile.

Erst sehr viel später, wenn der HTTP-Response vorliegt, wird die Funktion
`handleCounterData` aufgerufen. Die Funktion erhält das `XMLHttpRequest` Objekt
in der Variable `this` und kann aus `this.responseText` die Antwort auslesen.

## Fetch und Promises

In modernem Javascript, in allen Browsern [ausser Internet Explorer](https://caniuse.com/#search=fetch), gibt es
eine neue Schreibweise für AJAX-Request mit dem Befehl `fetch`[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

<htmlcode caption="Counter einbinden mit Javascript">
<html>
<head>
  <meta charset="utf-8">
  <title>AJAX counter</title>
</head>
<body>
  <h1>Webseite</h1>

  <p>mit total viel Inhalt</p>

  <script>
    fetch("counter_ajax.php")
      .then(function(response) {
        console.log("Response wird empfangen");
        let counter = response.text();
        return counter;
      })
      .then(function(counter) {
        console.log("counter wurde aus dem Response herausgelesen");
        // ...
      });
    console.log("abgesendet, sofort weiter");
  </script>
</body>
</html>
</htmlcode>

Mit `fetch` wird die Reihenfolge des Ablaufs klarer, aber der Ablauf
wird auch komplizierter: ein weiterer asynchroner Verarbeitungsschritt
kommt dazu: das auslesen des Textes aus dem Response.

## Promises

Der Rückgabewert der funktion `fetch` ist eine **Promise**: ein Objekt,
das den Umgang mit einer asynchrone Operation einfacher machen soll.
Es ist ein Platzhalter für das Ergebnis der Operation, das noch nicht
bekannt ist. In anderen Programmiersprachen ist die Promise auch als
Future oder Deferred bekannt, siehe [wikipedia](https://en.wikipedia.org/wiki/Futures_and_promises).

Mit der Methode `then()` kann eine Funktion als Callback angegeben
werden, die aufgerufen wird wenn das Ergebnise vorliegt:

<javascript>
fetch("counter_ajax.php")
  .then(function(response) {
    console.log("Response wird empfangen");
    // tu ws mit response response
  });
console.log("abgesendet, sofort weiter");
</javascript>

### Chaining

Angenommen mit dem Ergebnis einer asynchronen Operation
soll
eine weitere asynchrone Operation aufgerufen werden.

Mit Promises funktionert das mittels "aneinanderhängen" = "chaining" mit `then`:

<javascript>
fetch("counter_ajax.php")
  .then(function(response) {
    console.log("Response wird empfangen");
    let counter = response.text();
    return counter;
  })
  .then(function(counter) {
    console.log("counter wurde aus dem Response herausgelesen");
    // ...
  });
console.log("abgesendet, sofort weiter");
</javascript>

Dieser Code kann mit Arrow-Functions noch kürzer werden:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text())
  .then(function(counter) {
    console.log("Text wurde aus dem Response herausgelesen");
    // tu was mit counter
  });
console.log("abgesendet, sofort weiter");
</javascript>

### Fehlerbehandlung

Für die Fehlerbehandlung gibt es zwei Schreibweisen, die
üblichere ist die Verwendet von `catch`:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text())
  .then(function(counter) {
    console.log("Text wurde aus dem Response herausgelesen");
    // tu was mit counter
  }).catch(function(error) {
    console.log(error);
  });
console.log("abgesendet, sofort weiter");
</javascript>

Aber Achtung: wenn der HTTP-Response z.B. 404 oder 500 ist, löst das noch
keinen Error aus, der mit `catch` gefangen werden kann. Das müsste
man selbst behandeln:

<javascript>
fetch("counter_ajax.php")
  .then(function(response){
    console.log("response status is", response.status);
    if (response.status !== 200) {
        throw new Error("Not 200 response");
    }
    return response.text();
  }).then(function(counter) {
    console.log("Text wurde aus dem Response herausgelesen");
    // tu was mit counter
  }).catch(function(error) {
    console.log(error);
  });
  console.log("abgesendet, sofort weiter");
</javascript>

Siehe auch

## Autocomplete

Wir werden in diesem Beispiel ein Autocomplete-Feld bauen.
Beginnen wir mit dem Backend:

### Backend

Am Server befindet sich eine Datenbank mit ca. 170.000 Städten.
Mit der Anfrage

`search.php?term=w`

Werden nur die Städte die mit w beginnen geladen,
und als JSON-Array zurück gegeben:

<javascript>
[
    "Wa,GH",
    "WaKeeney,US",
    "Waabs,DE",
    "Waaia,AU",
    "Waajid,SO",
    "Waake,DE",
    "Waakirchen,DE",
    "Waal,DE",
    ...
    "Wüstenzell,DE",
    "Wüstheuterode,DE",
    "Wāhan Murad,PK",
    "Wān Yampēng,MM",
    "Wŏnsŏngil-tong,KR",
    "Włocławek,PL",
    "Włodawa,PL",
    "Włoszczowa,PL",
    "Wāsiţ,EG",
    "Wąwolnica,PL"
]
</javascript>

Das sind ca. 5000 Namen.

Beim Lesen aus der Datenbank wird ein Volltext-Index verwendet (siehe
[Datenbank optimieren: Indexes](/php-db-optimierung/indexes/)). Das
sieht man aber weder der SQL-Query noch dem PHP an:

<php>
$term = filter_var($_GET['term'], FILTER_SANITIZE_STRING) . '%';
$sth->execute(array($term));
$cities = $sth->fetchAll(PDO::FETCH_COLUMN);
</php>

Der Output des PHP-Programmes ist JSON. Das muss mit dem HTTP Header `Content-Type`
angekündgt werden:

<php>
header('Content-Type: application/json');
echo json_encode($cities);
</php>

### Frontend

Für das Frontend kann man eine fertige Library verwenden,
z.B. [JavaScript-autoComplete](https://github.com/Pixabay/JavaScript-autoComplete/):

<javascript>
new autoComplete({
    selector: '#cityinput',
    source: function(term, handle_response){
      // schicke suchwort 'term' ans backend
      // wenn die datenvorliegen, rufe die funktion handle_response auf
    }
});
</javascript>

## AJAX Beispiel mit API

In diesem Beispiel werden Wetter-Daten von zwei Quellen angezeigt. Dabei
sieht man einen wichtigen Unterschied:

- auf http://openweathermap.org/ ist der Zugriff nur mit API key möglich, auch vom frontend aus
- auf http://at-wetter.tk/ ist der Zugriff auch ohne API key möglich, aber nicht von einem fremden Frontend aus, weil [CORS](/cors/) nicht erlaubt ist.

### Direkter Zugriff auf eine fremde API

Um die API von http://openweathermap.org/ zu benutzen
ist eine Anmeldung und ein API key notwendig. Das ermöglicht
eine Beschränkung der Zugriffe: am Server kann mitgezählt werden
mit welchem API Key wie viele Zugriffe erfolgt sind, und je nach
dem limitiert oder verrechnet werden. Die Preise für die API
sind nach Anzahl der Zugriffen gestaffelt, im Mai 2017 waren die Preise:

![Preise von openweathermap.org](/images/openweathermap-preise.png)

Beim Zugriff auf die API muss jeweils der API-Key als parameter
mit gesendet werden:

<javascript caption="Zugriff auf die openweathermap API">
fetch("http://api.openweathermap.org/data/2.5/weather?&units=metric&q=London,uk&apikey=....")
.then(function...
</javascript>

Die genaue Struktur der Daten und wie man sie zerlegt kann man entweder
[der Dokumentation](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2) entnehmen, oder einfach in der console erforschen.

ABER ACHTUNG: diese API ist (gratis) nur über http zugänglich.
Die resultierende Webseite kann wieder nur auf http veröffentlicht werden, nicht
auf https.

Um die openweahtermap api auch über https verwenden zu können
ist die nächste Lösung notwendig:

### Zugriff auf eine API über lokales Backend

Manchmal kann man nicht vom Frontend direkt auf die API zugreifen.

Einen Grund haben wir schon bei openweathermap gesehen: die API ist über
http zugänglich, das frontend wird auf https gehosted. So ist es verboten
auf die API zuzugreifen.

Der zweite mögliche Grund ist CORS. Das tritt zum Beispiel bei der API
`at-wetter.tk` auf.
Die Abfrage scheitert ohne sichtbare Fehlermeldung. In der console wird
in manchen Browsern eine Meldung angezeigt:

![CORS Fehlermeldung](/images/cors-error.png)

In beiden Fällen ist die Lösung dieselbe: man muss die Daten
über das eigene Backend laden.

In PHP ist der Zugriff auf die API ohne Problem möglich:

<php caption="zugriff auf die wetter-at.tk API">
header('Content-Type: application/json');
...
$url = "http://at-wetter.tk/api/v1/station/11150/t/$date/7";
$text=file_get_contents( $url );
...
</php>

## Ausblick

Das waren nur einige wenige Anwendungsbeispiele für AJAX,
es gibt natürlich noch viel mehr.

Aber bevor man sich in AJAX Abenteuer stürzt sollte man sich auch
über die Probleme bewusst sein, dazu mehr im nächsten Kapitel.
