---
title: AJAX
order: 50
---

Wir kennen schon die Funktionsweise von [HTTP](/http/). Bisher
wurde ein HTTP Request durch eine Handlung der UserIn ausgelöst
(URL eintippen, Link anklicken), oder um Ressourcen nachzuladen
die zu einem HTML-Dokument gehören.

Mit AJAX lernen wir nun eine neue Art kennen, wie HTTP-Request
verwendet werden: Asynchrone Requests.


## Was ist AJAX?

AJAX ist die englische Abkürzung für „Asynchrones Javascript und XML“. In
diesem Kapitel lernen Sie was das genau bedeutet, und dass sich hinter dem X
zum Schluss  auch andere Format verbergen können

Ein Beispiel für die Verwendung von AJAX ist das in Abbildung 50 gezeigte Eingabefeld: 
schon während des Eintippens eines Suchwortes wird eine Anfrage an den Webserver 
geschickt.  Dieser antwortet mit einer Liste von vorgeschlagenen Namen.  Diese Liste 
wird mit Javascript in einer <div> unterhalb des Eingabefelds angezeigt:
 
![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/image375.png)

Mit AJAX wird hier eine HTTP-Anfrage gesendet. Der Unterschied zu einer 
„normalen“ HTTP-Anfrage:  Bei einer „normalen“ HTTP-Anfrage schaltet der Browser auf 
„Warten“, eine neue vollständige Webseite wird geladen und angezeigt.
Asynchron heisst: der Request wird abgesetzt, das Javascript-Programm läuft sofort 
weiter, die UserIn kann weiterhin mit der Webseite interagieren. Erst wenn die Antwort 
des Servers vorliegt wird die normale Darstellung der Seite kurz unterbrochen und ein 
Javascript-Programm fügt die Daten in die Seite ein. 

### Im Javascript Programm

Auf der Ebene des Javascript Programm-Codes sieht der Unterschied zwischen 
synchron und asynchron so aus:

<javascript caption="synchron">
Befehl1();
Befehl2();
Antwort = synchron_laden(url);   // dauert ewig 
Befehl3();                      // viel später
Befehl4();
</javascript>

Bevor `Befehl3` ausgeführt werden kann muss erst die Antwort des Servers vorliegen – 
hier kann also eine Wartezeit von mehreren Sekunden entstehen. 


<javascript caption="asynchron">
function handle_data(Antwort) {  
   ... 
} 
 
Befehl1();
Befehl2();
asynchron_laden(url, handle_data);  // dauert kurz 
Befehl3();                         // kurz darauf
Befehl4();
</javascript>


`Befehl3` kann sofort ausgeführt werden, egal ob und wie schnell der Server antwortet. 
Wenn die Daten vom Server schließlich einlangen wird die Funktion handle_data 
aufgerufen und die Daten zu verarbeiten. Das kann z.B. gleichzeitig mit `Befehl4`
erfolgen.

### HTTP

Betrachten wir nun den Ablauf für ein Textfeld mit Autocomplete-Funktion,
wie in der obigen Abbildung gezeigt. Folgende Abbildung ist ein
[Sequenz Diagramm](http://de.wikipedia.org/wiki/Sequenzdiagramm), die Zeit
läuft von oben nach unten.

Zuerst wird die Webseite mit dem Formular geladen: der Browser schickt die
Anfrage an den Server und erhält eine Antwort. Was immer zuvor im Browser
angezeigt wurde wird - nach Ankunft des HTTP Response - gelöscht, die neue
Seite wird im Browser dargestellt.  Diese Verhalten des Browsers ist uns
schon bekannt.

Nun kommt der neue Teil:  das Eintippten des ersten Buchstabens ins
Eingabefeld löst ein Javascript-Programm aus, das einen AJAX-Request absetzt.
Am Netzwerk ist das ein ganz normaler HTTP Request, für den Server gibt
es keinen Unterschied zu jedem anderen Request.  

Was anders ist, ist das Verhalten des Browsers: Wenn die Daten des Response
einlangen wird **nicht** die Seite gelöscht, sondern es wird eine
Javascript-Funktion in der Seite aufgerufen, die die Daten entgegen nimmt.
Für das Autocomple-Verhalten bestehen die Daten aus einer Liste von Vorschlägen,
die Javascript-Funktion zeigt diese Vorschläge unterhalb des Eingabefeldes an.

![AJAX Ablauf](/images/ajax-sequence-diagram.svg)



### Datenformate - mehr als nur XML

Das X am Ende von AJAX steht für XML – das stimmt aber nicht: die Daten vom Server 
können im XML-Format gesendet werden, aber genauso auch als HTML oder reiner 
Text oder JSON. Man könnte das X in AJAX auch als „X-beliebiges Format“ deuten.
Das wichtigste Javascript-Konstrukt für AJAX ist das XMLHTTPRequestObject., das der 
Javascript-Interpreter des Browsers zur Verfügungs stellt. Leider gibt es bei diesem 
Objekt Unterschiede zwischen den Browsern. Um diese Unannehmlichkeiten zu 
vermeiden, sollte man fertige Libraries verwenden, die die Browser-Unterschiede 
verbergen.

## Simples Javascript Beispiel

Im ersten AJAX Beispiel wird der Output eines PHP-Counters in eine HTML-Seite 
eingebunden. 

<htmlcode caption="Counter einbinden mit Javascript">
<html>
<head>
  <title>AJAX counter</title>
  <style>
      p#counter_zeile { display: none; }
  </style>
</head>
<body>
  <h1>Webseite</h1>

  <p>mit total viel Inhalt</p>

  <p id="counter_zeile">Counter: <span id="counter_zahl">?</span></p>

  <script>
    window.addEventListener('load', loadCounterWithAjax);

    function loadCounterWithAjax() {
      document.getElementById('counter_zeile').style.display = "block";
      var ajax_request = new XMLHttpRequest();
      ajax_request.addEventListener('load', handleCounterData);
      ajax_request.open("GET", "counter_ajax.php");
      ajax_request.send();
      console.log("Request wurde gesendet");
    }

    function handleCounterData() {
      console.log("Response wurde empfangen");
      document.getElementById('counter_zahl').innerHTML = 
        this.responseText;
    }
  </script>
</body>
</html>
</htmlcode>

Für den Fall das Javascript nicht funktioniert wird die ganze Counter-Zeile nicht
angezeigt (display:none als style).  Falls Javascript funktioniert wird die
Zeile eingeblendet.

Das `XMLHttpRequest` Objekt liefert verschiedene Events, hier wird nur für das `load` Event
eine Funktion als Listener angebracht.  Mit der `open` methode wird der HTTP-Request
konfiguriert, aber erst mit `send` wirklich abgeschickt.  Da er Request asynchron erfolgt
geht der Javascript-Interpreter sofort von Zeile 23 in Zeile 24 weiter, und wartet
nicht auf den HTTP-Response.

Erst sehr viel später, wenn der HTTP-Response vorliegt, wird die Funktion
`handleCounterData` aufgerufen. Die Funktion erhält das `XMLHttpRequest` Objekt
in der Variable `this`.

## Simples jQuery Beispiel

jQuery bietet einige Vereinfachungen gegenüber Javascript:
die Funktion `load` erledigt nicht nur den AJAX Request, sondern
auch das Einfügen des Rückgabewerts in eine DOM Node:

<htmlcode caption="Counter einbinden mit Javascript">
  <html>
  <head>
    <title>AJAX counter</title>
    <style>
        p#counter_zeile { display: none; }
    </style>
  </head>
  <body>
    <h1>Webseite</h1>

    <p>total viel Inhalt</p>

    <p id="counter_zeile">Counter: <span id="counter_zahl">?</span></p>

    <script src="jquery.js"></script>
    <script> 
    $(document).ready(function(){ 
        $("p#counter_zeile").show();
        $("#counter_zahl").load("counter_ajax.php");
    });
    </script>
  </body>
  </html>
</htmlcode>

Die ganze Arbeit macht hier jQuery in der Zeile

`$("#counter_zahl").load("counter_ajax.php");`

Das Element mit der ID counter_zahl wird ausgewählt. Mit dem Load-Befehl wird eine 
AJAX-Anfrage an die angegebene URL abgesetzt. Wenn der HTTP-Response
beim Browser ankommt, werden die gelieferten Daten in das ausgewählte Element eingefügt. 
(Die gelieferten Daten sollten also reiner Text oder ein HTML-Fragment sein.)

## Autocomplete mit jQuery-UI

In der Library jquery-ui gibt es eine fertige [autocomplete funktion](https://jqueryui.com/autocomplete/#remote). Um sie zu verwenden, zwei muss man sowohl CSS als auch Javascript
einbinden:

Auf https://code.jquery.com/ui/ findet man die Links zu:

* Dem "base" Theme - das ist die CSS Datei
* der aktuellen jquery UI version, minified - das ist die Javascript Datei.

<css caption="einbindung des themes in einer css datei">
  @import "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css";
</css>

<html>
  <script src='https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'></script>
</html>

So sieht der Beispiel-Code aus, der
ein input feld `#birds` in ein autocomplete-feld verwandelt:

<javascript>
$("#birds").autocomplete({
  source: "search.php",
  minLength: 2,
  select: function( event, ui ) {
    console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
  }
});
</javascript>


Wenn nun in das eingabefeld mehr als 2 (Option `minLength`) Buchstaben
eingetippt werden, dann wird ein HTTP Request and `source` geschickt,
mit dem parameter `term`.  Also zum Beispiel:

`search.php?term=abc`

Die Antwort muss ein JSON-Dokument sein: Ein Array von Objekten:

<javascript>
  [
    {"id":6552916,"label":"Salzbergen, DE"},
    {"id":2842173,"label":"Salzböden, DE"},
    {"id":2842172,"label":"Salzbrunn, DE"},
    {"id":6554266,"label":"Salzburg, DE"},
    {"id":2766824,"label":"Salzburg, AT"},
  ]
</javascript>

Die Attribute `id` und `label` des Objekts werden verwendet, alle anderen
werden ignoriert.

Wenn die Daten erfolgreich vom Server geladen wurden, wird eine Funktion aufgerufen (`select`).

Zum Testen kann man das Backend zuerst faken: einfach eine statische JSON-Datei
unter dem Namen `search.json` abspeichern, und schon funktioniert es.

Oder eine ganz kleine PHP-Datei, die nur den richtigen Content-Type setzt,
und dann statische Daten zurück gibt:

<php>
  <?php
  header('Content-Type: application/json');
  ?>
  [
    {"id":6552916,"label":"Salzbergen, DE"},
    {"id":2842173,"label":"Salzböden, DE"},
    {"id":2842172,"label":"Salzbrunn, DE"},
    {"id":6554266,"label":"Salzburg, DE"},
    {"id":2766824,"label":"Salzburg, AT"},
  ]
</php>
Wenn das klappt, kann  z.b. eine echte Datenbank-Abfrage programmieren,
und die resultierenden Daten mit [json_encode](https://secure.php.net/manual/de/function.json-encode.php) umwandeln.




## jQuery Beispiel mit Callback-Funktion

In diesem Beispiel werden Wetter-Daten von zwei Quellen angezeigt. Dabei
sieht man einen wichtigen Unterschied:

* auf http://openweathermap.org/ ist der Zugriff nur mit API key möglich, auch vom frontend aus 
* auf http://at-wetter.tk/ ist der Zugriff auch ohne API key möglich, aber nicht von einem fremden frontend aus, weil [CORS](/cors/) nicht erlaubt  ist.


### Direkter Zugriff auf eine fremde API

Um die API von http://openweathermap.org/ zu benutzen
ist eine Anmeldung und ein API key notwendig.  Das ermöglicht
eine Beschränkung der Zugriffe: am Server kann mitgezählt werden
mit welchem API Key wie viele Zugriffe erfolgt sind, und je nach
dem limitiert oder verrechnet werden.  Die Preise für die API
sind nach Anzahl der Zugriffen gestaffelt, im Mai 2017 waren die Preise:

![Preise von openweathermap.org](/images/openweathermap-preise.png)

Beim Zugriff auf die API muss jeweils der API-Key als Parameter
mitgesendet werden:

<javascript caption="Zugriff auf die openweathermap API">
$.get("http://api.openweathermap.org/data/2.5/weather?&units=metric&q=London,uk&apikey=....", 
  (data) => {
  console.log("Daten von der API sind angekommen:");
  console.log(data);
  $('#output').append(`<p>Das Wetter in London ist ${data.weather[0].main}.<p>`);
});
</javascript>

Die genaue Struktur der Daten und wie man sie zerlegt kann man entweder
[der Dokumentation](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2) entnehmen, oder einfach in der console erforschen.



ABER ACHTUNG: diese API ist (gratis) nur über http zugänglich.
Die resultierende Webseite kann wieder nur auf http veröffentlicht werden, nicht
auf https.

Um die openweahtermap api auch über https verwenden zu können
ist die nächste Lösung notwendig:


## Zugriff auf eine API über lokales backend

Manchmal kann man nicht vom Frontend direkt auf die API zugreifen.

Einen Grund haben wir schon bei openweathermap gesehen: die API ist über
http zugänglich, das frontend wird auf https gehosted.  So ist es verboten
auf die API zuzugreifen.


Der zweite mögliche Grund ist CORS.  Das tritt zum Beispiel bei der API
 at-wetter.tk auf.
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


