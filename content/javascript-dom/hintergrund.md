---
title: Hintergründe
order: 10
---

Anwendungsgebiet
----------------

Javascript ist eine Programmiersprache die in HTML eingebettet und vom Browser interpretiert wird. Im Browser ist der Wirkungsbereich von Javascript auf das Fenster und das aktuelle Dokument beschränkt – es kann nicht die Festplatte formatieren oder Excel starten.

Laut [TIOBE Index](https://www.tiobe.com/tiobe-index/) ist Javascript auf Platz 6 oder 7 der Programmiersprachen, aber bei [Stackoverflow](https://survey.stackoverflow.co/2024/technology#2-programming-scripting-and-markup-languages) ist es die 2.-beliebteste Programmiersprache.

Typische Verwendung
-------------------

Neben der Verwendung für kleine Effekte im Browser hat Javascript noch weitere wichtige Anwendungsgebiete:

* Zum Nachladen von Daten (HTTP Requests mit `fetch`, früher „AJAX“ genannt) – das macht das Web viel interaktiver und angenehmer in der Benutzung.
* Mit Javascript können Webseiten auch „offline“ – also ohne Verbindung zum Internet und dem Webserver – weiterarbeiten. Diese Art von Webseiten wird als  „progressive Web App“  bezeichnet.
* Der Server Node JS ist ein (Web)Server, den man mit Javascript programmieren kann. Damit kann man also auch das Backend in JavaScript programmieren.
* Mit [Electron](https://www.electronjs.org/de/) kann ein Programm in JavaScript schreiben, die Oberfläche dazu mit Web-Technologien bauen, und es dann wie ein "normales" Windows Programm / MacOS Programm ausliefern. z.B. VS Code.
* Die No-SQL Datenbanken CouchDB und MongoDB verwendet Javascript als Abfragesprache.
* Da Javascript lange das "Monopol" im Browser hatte, ist es Ziel-Sprache für Transpiler: die Sprachen [Elm](https://elm-lang.org/), [CoffeeScript](https://coffeescript.org) und [TypeScript](https://www.typescriptlang.org/) werden nach Javascript übersetzt, und können erst so im Browser laufen.


Javascript und Java
--------------------
Es gibt noch eine zweite Programmiersprache mit sehr ähnlichem Namen: Java. Die beiden zu verwechseln ist recht peinlich. Die Verwechslung ist übrigens beabsichtigt: Im Jahr 1995 gab es einen großen Hype rund um Java, Netscape wollte davon profitieren und nannte die neue Skriptsprache im Browser „Javascript“.



|                      |Javascript                | Java                |
|+---------------------|+-------------------------|+--------------------|
| Wer hat’s erfunden?  | Netscape / Brendan Eich  | Sun / James Gosling |
|                      | Interpretiert Sprache    | Kompilierte Sprache |
| Typen                | Wenige Datentypen, Probleme werden erst zur Laufzeit erkannt | Datentypen und Klassen werden streng unterschieden und zur Compilezeit geprüft |
|  Objektorientierung |  Objekte, Prototypen, später auch Klassen |  Objekte und Klassen |
| Verwendung           | Im Webbrowser, am Webserver (z.B. mit node.js), in einzelnen Programmen | Überall (Android, Chipkarten, am Webserver) |
| Projekte | Früher nur winzige Projekte (z.B: Animations-Effekt),  in den letzten Jahren: Web als GUI für viele Applikationen, viel JavaScript (z.B. Facebook, Gmail, etc. | Alle, auch Großprojekte mit vielen Jahren Entwicklungszeit |
| Wer |  Manchmal auch Web-Designer*innen | Nur hauptberufliche Programmierer*innen |
{: class="table table-condensed table-bordered" style="width:auto"}


Geschichte von Javascript
--------------------------

Javascript wurde ursprünglich bei Netscape von Brendan Eich erfunden, und dann von verschiedenen Herstellern weiterentwickelt. Es war eines der Schlachtfelder im Browser-War: Microsoft und Netscape versuchten durch verschiedene Implementierungen die Position des eigenen Browsers zu verbessern und Webseiten im "gegnerischen" Browser unbrauchbar zu machen.

Erst nachträglich gab es (partielle) Einigung auf Standards. Mit dem ECMA-Standard 262 wurde die Syntax fixiert. Sie wird von der Arbeitsgruppe [ECMA TC39](https://tc39.es/), in der u.a. Personen von Browser-Herstellern vertreten sind weiter entwickelt.

Mit dem „Document Object Model“ (DOM) wurde der Zugriff auf die Webseite vereinheitlicht.
Die Entwicklung der DOM und weiterer APIs (File API, Websockets, Storage, WebGL) liegt beim W3C.



Anwendung und Grenzen von Javascript
-----------------

Lange Zeit waren kleine Javascript-Programme eine relative unabhängige Ergänzung für Web-Applikationen. Ein Beispiel dafür wäre ein [Data Table](https://datatables.net/)
der in eine HTML Tabelle die Möglichkeit zum Sortieren nach eine Spalte einbaut.

Große Web Applikationen wie outlook oder gmail zeigten aber bald, dass auch komplexe
Programme im Browser möglich sind. Um diese umzusetzen gibt es heute clientseitige
Frameworks wie React, Vue, Svelte oder Angular. Diese werden derzeit in Richtung
Backend weiterentwickelt: next.js, nuxt.js, SvleteKit.

Für Applikationen die besonders hohe Anforderungen an Performance stellen reicht
JavaScript nicht aus - dafür muss man dann eine kompilierte Sprache und WebAssembly
verwenden wie z.B. [Figma](https://www.figma.com/de/blog/webassembly-cut-figmas-load-time-by-3x/) oder
[Photoshop](https://web.dev/articles/ps-on-the-web?hl=en).


Document Object Model
----------------------

Das Document Object Model (DOM) ist ein allgemeines Modell wie ein Dokument (die Webseite oder auch ein XML- Dokument) von einer objektorientierten Skriptsprache aus manipuliert werden kann.

Das DOM einer Webseite kann man sich als Baum vorstellen, ähnlich der Ordnerstruktur im Dateisystem.  Sie kennen diese Idee schon von CSS und den CSS-Selektoren.

In folgendem Beispiel ist der markierte `a`-Tag innerhalb eines `li`-Tags, und
der wiederum innerhalb eines  `ul`-Tag mit Klassen `nav` und `nav-list`.

![Abbildung: Bild des DOM, erzeugt mit den Firefox DeveloperTools](/images/javascript-dom/dom.png)

Wenn man mit Javascript irgendeinen Teil der Webseite verändern will verändert man diesen Baum. Mögliche Veränderungen wären:

* Mache ein beliebiges Element des DOM unsichtbar (z. B. die ganze Liste)
* Ändere den Style eines beliebigen Elements (z. B. die Schriftart der Überschrift)
* Füge neue Elemente ein (z. B. drei zusätzliche Listenpunkte)

