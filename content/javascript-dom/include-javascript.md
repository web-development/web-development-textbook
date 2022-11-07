---
title: Include Javascript
order: 22
---


Einbindung von Javascript
--------------------------

* externe Javascript-Datei
* mit `<script>`-Tag
* Javascript in einer URL
* onevent-Attribute

### Externe Javascript-Datei

Man kann Javascript-Programme in eigenen Dateien speichern, diese haben traditionell die
Endung `.js`. Wir werden später eine Javascript-Library namens jQuery verwendet.
Mit dem `script`-Tag wird die externe Javascript-Datei eingebunden:


<htmlcode>
  <script src="jquery.js"></script>
</htmlcode>

Wird der `script`-Tag auf diese Weise (mit dem Attribut src) verwendet, dann darf er
keinen Inhalt zwischen `<script>` und `</script>` enthalten. Achtung:
die Schreibweise ohne Ende-Tag: `<script src="jquery">` ist nicht erlaubt!

Man kann das Javascript Programm auch von einem anderen Server laden, zum Beispiel von einem [CDN](https://de.wikipedia.org/wiki/Content_Delivery_Network).  Dann verwendet man zusätzlich noch das `integrity` attribut, um sicher zu Stellen dass genau der Javascript-Code geladen wird, den man haben wollte, und ihn niemand verändert hat:


<htmlcode>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</htmlcode>

![](images/javascript-dom/sri.png)

### Der &lt;script>-Tag
Javascript-Programme können im HTML-Code mit dem `script`-Tag eingebettet
werden. Das Programm wird dann beim Aufbau der Seite ausgeführt, siehe auch
[live im Browser](/images/javascript-dom/countdown.html)

<htmlcode>
  <h1>Selbstzerstörung</h1>
  <script>
      i=10;
      while (i>0) {
          document.write("<br>in " + i + " Millisekunden");
          i--;
      }
  </script>
  <p><strong>Peng!</strong>
</htmlcode>

Dieses Programm ist übrigens ein gutes Beispiel für ein veraltetes Javascript-Programm. Die Methode `document.write()`, der hier für die Ausgabe verwendet wird, wurde durch das DOM größteteils ersetzt. Nur sehr wenige Leute müssen bei sehr wenigen Gelegenheiten noch `document.write()` verwenden - z.B. die AutorInnen der Javascript-Libaries wie John Resig von jQuery.

### Javascript in einer URL

Als URL kann man auch ein kleines Javascript-Programm angeben, z. B. bei einem Link:

<htmlcode>
  <a href="javascript:location='http://www.google.at/'">zu Google nur mit Javascript</a>
</htmlcode>

Die “Javascript-in-einer-URL”- Schreibweise ist in HTML-Seiten nicht sehr sinnvoll, da sie für Browser ohne Javascript-Fähigkeit die Links unbrauchbar macht.

Hier eine Version die dem Prinzip der „graceful degradation“ entspricht. Sie funktioniert mit und ohne Javascript sinnvoll:

<htmlcode>
  <a href="http://www.google.at" onclick="ok=confirm('go?'); return ok;">google</a>
</htmlcode>

Ohne Javascript ist es ein ganz normaler Link zu google.

Mit Javascript erscheint ein Dialog, je nach Antwort wird der Link entweder aufgerufen oder nicht. Das funktioniert gleich wie beim onsubmit-Attribut des form-Tags: Wenn der Event-Handler `false` zurückgibt wird das Event unterbrochen.

<a href="http://www.google.at" onclick="ok=confirm('go?'); return ok;">google</a>

###  Die onevent - Attribute ###

Meist werden Javascript-Programme so geschrieben, dass sie nicht gleich beim Laden der Seite starten, sondern erst wenn gewisse Ereignisse (Events) eintreten.
Siehe [Crash Course Computer Science #26: Graphical User Interfaces](https://youtu.be/XIGSJshYb90?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&t=316) für eine Erklärung von Event-Gesteuerter-Programmierung.

Ein Beispiel:

<htmlcode>
  <body onload="...">
</htmlcode>

Das Programm wird ausgeführt, nachdem die ganze Seite geladen und fertig dargestellt ist
