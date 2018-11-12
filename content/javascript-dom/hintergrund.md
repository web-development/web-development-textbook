---
title: Hintergründe
order: 10
---

Anwendungsgebiet
----------------

Javascript ist eine Programmiersprache die in HTML eingebettet und vom Browser interpretiert wird. Im Browser ist der Wirkungsbereich von Javascript auf das Fenster und das aktuelle Dokument beschränkt – es kann nicht die Festplatte formatieren oder Excel starten. 

Typische Verwendung
-------------------

Neben der Verwendung für kleine Effekte im Browser hat Javascript noch weitere wichtige Anwendungsgebiete:

* Als „AJAX“ zum Nachladen von Daten – das macht das Web viel interaktiver und angenehmer in der Benutzung.

* Mit Javascript können Webseiten auch „offline“ – also ohne Verbindung zum Internet und dem Webserver – weiterarbieten. Am Smartphone wird diese Art von Webseiten als  „progressive Web App“  bezeichnet.

* Der Server Node JS ist ein (Web)Server, den man mit Javascript programmieren kann. Er wird besonders für Realtime-Applikationen im Web eingesetzt, z.B. für Chats oder Spiele.

* Javascript wird in einigen Programmen als Makro-Sprache verwendet, z.B. in Indesign, Illustrator und in Unity.

* Die No-SQL Datenbanken CouchDB und MongoDB verwendet Javascript als Abfragesprache.

Und nur noch historisch interessant:

* Unter dem Namen Actionscript wurde früher eine Variante von Javascript in Flash verwendet.

Javascript und Java
--------------------
Es gibt noch eine zweite Programmiersprache mit sehr ähnlichem Namen: Java. Die beiden zu verwechseln ist recht peinlich. Die Verwechslung ist übrigens beabsichtigt: Im Jahr 1995 gab es einen großen Hype rund um Java, Netscape wollte davon profitieren und nannte die neue Skriptsprache im Browser „Javascript“.



|                      |Javascript                | Java                |
|+---------------------|+-------------------------|+--------------------|
| Wer hat’s erfunden?  | Netscape / Brendan Eich  | Sun / James Gosling |
|                      | Interpretiert Sprache    | Kompilierte Sprache |
| Typen                | Wenige Datentypen, Probleme werden erst zur Laufzeit erkannt | Datentypen und Klassen werden streng unterschieden und zur Compilezeit geprüft |
|  Objektorientierung |  Objekte und Prototypen (Klassen als "syntactic sugar") |  Objekte und Klassen |
| Verwendung           | Im Webbrowser, am Webserver (node.js), in Flash, in Illustrator und Indesign | Überall (Chipkarten, am Server, im Browser, im Handy) |
| Projekte | Früher nur winzige Projekte (z.B: Animations-Effekt),  in den letzten Jahren: JS Frontend als wichtiger Teil einer Webappliaktion wie Facebook, Gmail, etc. | Alle, auch Großprojekte mit vielen Jahren Entwicklungszeit |
| Wer |  Manchmal auch Web-DesignerInnen | Nur hauptberufliche ProgrammiererInnen |
{: class="table table-condensed table-bordered" style="width:auto"}


Geschichte von Javascript
--------------------------

Javascript wurde ursprünglich bei Netscape von Brendan Eich erfunden, und dann von verschiedenen Herstellern weiterentwickelt. Es war eines der Schlachtfelder im Browser-War: Microsoft und Netscape versuchten durch verschiedene Implementierungen die Position des eigenen Browsers zu verbessern und Webseiten im "gegnerischen" Browser unbrauchbar zu machen.

Erst nachträglich gab es (partielle) Einigung auf Standards. Mit dem ECMA-Standard 262 wurde die Syntax fixiert. Sie wird von der Arbeitsgruppe ECMA TC39, in der u.a. Personen von Browser-Herstellern vertreten sind weiter entwickelt.  

Mit dem „Document Object Model“ (DOM) wurde der Zugriff auf die Webseite vereinheitlicht.
Libraries wie jQuery ebenen die letzten Unterschiede in den Browser-Implementierungen noch aus.

Die Entwicklung dieser API ist nun Teil von HTML5 und liegt beim W3C. Unter den Stichwort „HTML5“ sind auch viele Neuerungen in Javascript, viele neue APIs gemeint: File API, Websockets,  Storage, WebGL, ...

Die aktuelle Version die Sie erlernen ist die Untermenge von ''ECMA Script ES8'', die derzeit schon im Browsern unterstützt wird.


Anwendung von Javascript
-----------------

Lange Zeit waren kleine Javascript-Programme eine relative unabhängige Ergänzung für Web-Applikationen. Ein Beispiel dafür wäre ein [Data Table](https://datatables.net/)
der in eine HTML Tabelle die möglichkeit zum Sortieren nach eine Spalte einbaut.

Große Web Applikationen wie outlook oder gmail zeigten aber bald, dass auch komplexe
Programme im Browser möglich sind. Um diese umzusetzen gibt es heute clientseitige
Frameworks wie Angular oder React.

Web Applikationen wurden seit ca. 2008 Schritt für Schritt mehr und mehr offline-fähige.
Heute nennt man solche Applikationen "Progressive Web Apps" (PWA). [pwa.rocks](https://pwa.rocks)
zeigt eine Sammlsung solcher Apps.



Document Object Model
----------------------

Das Document Object Model (DOM) ist ein allgemeines Modell wie ein Dokument (die Webseite oder auch ein XML- Dokument) von einer objektorientierten Skriptsprache aus manipuliert werden kann.

Das DOM einer Webseite kann man sich als Baum vorstellen, ähnlich der Ordnerstruktur im Dateisystem.  Sie kennen diese Idee schon von CSS und den CSS-Selektoren.

In folgendem Beispiel ist der markierte `a`-Tag innerhalb eines `li`-Tags, und
der wiederum innerhalb eines  `uk`-Tag mit Klassen `nav` und `nav-list`.

![Abbildung: Bild des DOM, erzeugt mit den Firefox DeveloperTools](/images/javascript-dom/dom.png)

Wenn man mit Javascript irgendeinen Teil der Webseite verändern will verändert man diesen Baum. Mögliche Veränderungen wären:

* Mache ein beliebiges Element des DOM unsichtbar (z. B. die ganze Liste)
* Ändere den Style eines beliebigen Elements (z. B. die Schriftart der Überschrift)
* Füge neue Elemente ein (z. B. drei zusätzliche Listenpunkte)

