---
title: Hintergründe
order: 10
---

Anwendungsgebiet
----------------

JavaScript ist eine Programmiersprache die in HTML eingebettet und vom Browser interpretiert wird. Im Browser ist der Wirkungsbereich von JavaScript auf das Fenster und das aktuelle Dokument beschränkt – es kann nicht die Festplatte formatieren oder Excel starten. 

Typische Verwendung
-------------------

Neben der Verwendung für kleine Effekte im Browser hat JavaScript noch weitere wichtige Anwendungsgebiete:

* Als „AJAX“ zum Nachladen von Daten – das macht das Web viel interaktiver und angenehmer in der Benutzung. 

* Mit JavaScript können Webseiten auch „offline“ – also ohne Verbindung zum Internet und dem Webserver – im Browser weiterarbieten. 

* Der Server Node JS ist ein (Web)Server, den man mit JavaScript programmieren kann. Er wird besonders für realtime-applikationen im Web eingesetzt, z.B. für Spiele.

* JavaScript wird in einigen Programmen als Makro-Sprache verwendet, z.B. seit 2003 in Indesign und Illustrator.

* Die No-SQL Datenbanken CouchDB und MongoDB verwendet JavaScript als Abfragesprache.

* Unter dem Namen Actionscript wird eine Variante von JavaScript in Flash verwendet. 

JavaScript und Java
--------------------
Es gibt noch eine zweite Programmiersprache mit sehr ähnlichem Namen: Java. Die beiden zu verwechseln ist recht peinlich. Die Verwechslung ist übrigens beabsichtigt: Im Jahr 1995 gab es einen großen Hype rund um Java, Netscape wollte davon profitieren und nannte die neue Skriptsprache im Browser „JavaScript“. 



|                      |JavaScript                | Java                |
|+---------------------|+-------------------------|+--------------------|
| Wer hat’s erfunden?  | Netscape / Brendan Eich  | Sun / James Gosling |
|                      | Interpretiert Sprache    | Kompilierte Sprache |
| Typen                | Wenige Datentypen, Probleme werden erst zur Laufzeit erkannt | Datentypen und Klassen werden streng unterschieden und zur Compilezeit geprüft |
|  Objektorientierung |  Objekte und Prototypen  |  Objekte und Klassen |
| Verwendung           | Im Webbrowser, am Webserver (node.js), in Flash, in Illustrator und Indesign | Überall (Chipkarten, am Server, im Browser, im Handy) |
| Projekte | Früher nur winzige Projekte (z.B: Animations-Effekt),  in den letzten Jahren: JS Frontend als wichtiger Teil einer Webappliaktion wie Facebook, Gmail, etc. | Alle, auch Großprojekte mit vielen Jahren Entwicklungszeit |
| Wer |  Auch Web-DesignerInnen | Nur InformatikerInnen |
{: class="table table-condensed table-bordered" style="width:auto"}


Geschichte von JavaScript
--------------------------

JavaScript wurde ursprünglich bei Netscape von Brendan Eich erfunden, und dann von verschiedenen Herstellern weiterentwickelt. Es war eines der Schlachtfelder im Browser-War: Microsoft und Netscape versuchten durch verschiedene Implementierungen die Position des eigenen Browsers zu verbessern und Webseiten im gegnerischen Browser unbrauchbar zu machen. 

Erst nachträglich gab es (partielle) Einigung auf Standards. Mit dem ECMA-Standard 262 wurde die Syntax fixiert. Sie wird von der Arbeitsgruppe ECMA TC39, in der u.a. Personen von Browser-Herstellern vertreten sind weiter entwickelt.  Die aktuelle Version die Sie erlernen ist '''ECMA Script 2015'''.  

Mit dem „Document Object Model“ (DOM) wurde der Zugriff auf die Webseite vereinheitlicht. Die Entwicklung dieser API liegt beim W3C. Libraries wie Prototype oder jQuery ebenen die letzten Unterschiede noch aus. 

Lange Zeit waren kleine JavaScript-Programme eine relative unabhängige Ergänzung für Web-Applikationen. Ein Beispiel dafür wäre ein JavaScript-Kalender der die Eingabe eines Datums in ein Eingabefeld erleichtert. 

Seit 2005 wir unter dem Schlagwort AJAX JavaScript eng mit der serverseitigen Webapplikation verzahnt: AJAX steht für asynchrones Nachladen von Teilen der Webseite über JavaScript. 

Seit ca. 2008 sind offline-fähige JavaScript-Applikationen möglich: Der Browser speichert alle notwendigen Teil der Website permanent ab, und kann die Applikation auch benutzen wenn keine Internetverbindung (mehr) besteht. Dies Applikationen haben z.B: auf dem iPad eine große Bedeutung.

![Abbildung 56: Offline Applikation everytimezone.com](/images/image252.png)

Unter den Stichwort „HTML5“ sind auch viele Neuerungen in JavaScript, viele neue APIs gemeint: File API, Websockets,  Storage, WebGL, ...






Document Object Model
----------------------

Das Document Object Model (DOM) ist ein allgemeines Modell wie ein Dokument (die Webseite oder auch ein XML- Dokument) von einer objektorientierten Skriptsprache aus manipuliert werden kann. Am 1. Oktober 1998 wurde das DOM eine offizielle W3-Empfehlung (recommendation) in der Version 1. 0. 

Das DOM einer Webseite kann man sich als Baum vorstellen, ähnlich der Ordnerstruktur im Dateisystem.  Sie kennen diese Idee schon von CSS und den CSS-Selektoren.

In folgendem Beispiel ist der markierte `li`-Tag innerhalb des `ul`-Tags mit klasse `.sub`, der `li`-Tag enthält wiederum einen `a`-Tag. 

![Abbildung: Bild des DOM, erzeugt mit dem DOM Inspektor von Mozilla](/images/dom.png)

Wenn man mit JavaScript irgendeinen Teil der Webseite verändern will verändert man diesen Baum. Mögliche Veränderungen wären:

* Mache ein beliebiges Element des DOM unsichtbar (z. B. die ganze Liste)
* Ändere den Style eines beliebigen Elements (z. B. die Schriftart der Überschrift)
* Füge neue Elemente ein (z. B. drei zusätzliche Listenpunkte)

