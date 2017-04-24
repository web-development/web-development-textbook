---
title: AJAX
order: 30
---

Wir kennen schon die Funktionsweise von [HTTP](/http/). Bisher
wurde ein HTTP Request durch eine Handlung der UserIn ausgelöst
(URL eintippen, Link anklicken), oder um Ressourcen nachzuladen
die zu einem HTML-Dokument gehören.

Mit AJAX lernen wir nun eine neue Art kennen, wie HTTP-Request
verwendet werden: Asynchrone Requests.


## Was ist AJAX?

AJAX ist die englische Abkürzung für „Asynchrones JavaScript und XML“. In
diesem Kapitel lernen Sie was das genau bedeutet, und dass sich hinter dem X
zum Schluss  auch andere Format verbergen können

Ein Beispiel für die Verwendung von AJAX ist das in Abbildung 50 gezeigte Eingabefeld: 
schon während des Eintippens eines Suchwortes wird eine Anfrage an den Webserver 
geschickt.  Dieser antwortet mit einer Liste von vorgeschlagenen Namen.  Diese Liste 
wird mit JavaScript in einer <div> unterhalb des Eingabefelds angezeigt:
 
![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/image375.png)

Mit AJAX wird hier eine HTTP-Anfrage gesendet. Der Unterschied zu einer 
„normalen“ HTTP-Anfrage:  Bei einer „normalen“ HTTP-Anfrage schaltet der Browser auf 
„Warten“, eine neue vollständige Webseite wird geladen und angezeigt.
Asynchron heisst: der Request wird abgesetzt, das JavaScript-Programm läuft sofort 
weiter, die UserIn kann weiterhin mit der Webseite interagieren. Erst wenn die Antwort 
des Servers vorliegt wird die normale Darstellung der Seite kurz unterbrochen und ein 
JavaScript-Programm fügt die Daten in die Seite ein. 

### Im JavaScript Programm

Auf der Ebene des JavaScript Programm-Codes sieht der Unterschied zwischen 
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
Eingabefeld löst ein JavaScript-Programm aus, das einen AJAX-Request absetzt.
Am Netzwerk ist das ein ganz normaler HTTP Request, für den Server gibt
es keinen Unterschied zu jedem anderen Request.  

Was anders ist, ist das Verhalten des Browsers: Wenn die Daten des Response
einlangen wird **nicht** die Seite gelöscht, sondern es wird eine
JavaScript-Funktion in der Seite aufgerufen, die die Daten entgegen nimmt.
Für das Autocomple-Verhalten bestehen die Daten aus einer Liste von Vorschlägen,
die JavaScript-Funktion zeigt diese Vorschläge unterhalb des Eingabefeldes an.

![AJAX Ablauf](/images/ajax-sequence-diagram.svg)



### Datenformate - mehr als nur XML

Das X am Ende von AJAX steht für XML – das stimmt aber nicht: die Daten vom Server 
können im XML-Format gesendet werden, aber genauso auch als HTML oder reiner 
Text oder JSON. Man könnte das X in AJAX auch als „X-beliebiges Format“ deuten.
Das wichtigste JavaScript-Konstrukt für AJAX ist das XMLHTTPRequestObject., das der 
JavaScript-Interpreter des Browsers zur Verfügungs stellt. Leider gibt es bei diesem 
Objekt Unterschiede zwischen den Browsern. Um diese Unannehmlichkeiten zu 
vermeiden, sollte man fertige Libraries verwenden, die die Browser-Unterschiede 
verbergen.

## Simples JavaScript Beispiel

Im ersten AJAX Beispiel wird der Output eines PHP-Counters in eine HTML-Seite 
eingebunden. 

<htmlcode caption="Counter einbinden mit JavaScript">
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

Für den Fall das JavaScript nicht funktioniert wird die ganze Counter-Zeile nicht
angezeigt (display:none als style).  Falls JavaScript funktioniert wird die
Zeile eingeblendet.

Das `XMLHttpRequest` Objekt liefert verschiedene Events, hier wird nur für das `load` Event
eine Funktion als Listener angebracht.  Mit der `open` methode wird der HTTP-Request
konfiguriert, aber erst mit `send` wirklich abgeschickt.  Da er Request asynchron erfolgt
geht der JavaScript-Interpreter sofort von Zeile 23 in Zeile 24 weiter, und wartet
nicht auf den HTTP-Response.

Erst sehr viel später, wenn der HTTP-Response vorliegt, wird die Funktion
`handleCounterData` aufgerufen. Die Funktion erhält das `XMLHttpRequest` Objekt
in der Variable `this`.

## Simples jQuery Beispiel

jQuery bietet einige Vereinfachungen gegenüber JavaScript:
die Funktion `load` erledigt nicht nur den AJAX Request, sondern
auch das Einfügen des Rückgabewerts in eine DOM Node:

<htmlcode caption="Counter einbinden mit JavaScript">
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
sind nach Anzahl der Zugriffen gestaffelt, im Juni 2016 waren die Preise:

![Preise von openweathermap.org](/images/openweathermap-preise.png)

Beim Zugriff auf die API muss jeweils der API-Key als parameter
mit gesendet werden:

<javascript caption="Zugriff auf die openweathermap API">
$.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&apikey=....", (data) => {
  console.log("Daten von der API sind angekommen:");
  console.log(data);
  $('#output').append(`<p>Das Wetter in London ist ${data.weather[0].main}.<p>`);
});
</javascript>

Die genaue Struktur der Daten und wie man sie zerlegt kann man entweder
der Dokumentation entnehmen, oder einfach in der console erforschen.


## Zugriff auf eine API über lokales backend

Die API von at-wetter.tk kann man nicht direkt vom eigenen Frontend abfrage.
Die Abfrage scheitert ohne sichtbare Fehlermeldung. In der console wird
in manchen Browsern eine Meldung angezeigt:

![CORS Fehlermeldung](/images/cors-error.png)


Statt dessen muss man die Daten über das eigene Backend laden.

In PHP ist der Zugriff auf die API ohne Problem möglich:

<php caption="zugriff auf die wetter-at.tk API">
$url = "http://at-wetter.tk/api/v1/station/11150/t/$date/7";
$text=file_get_contents( $url );
</php>


Die Daten die von der API geliefert werden sind nicht
im JSON Format.  Das könnte jetzt das PHP-Script noch
erledigen, und dann direkt JSON an das Frontend liefern.


Ein besonderes Problem bei JSON stellen Datum und Uhrzeit dar:
Dafür gibt es keinen Standard.  Man kann Datum und Uhrzeit als String
ausliefern, oder eine Epoch-Zahl  (Millisekunden seit dem 1.1.1970) liefern.

