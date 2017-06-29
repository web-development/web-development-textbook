---
title: Fehlerhafte Autorisierung auf Anwendungsebene
order: 70
---

Die OWASP beschreibt dieses Problem allgemein so:

> Die meisten betroffenen Anwendungen realisieren Zugriffsberechtigungen nur durch das Anzeigen  oder Ausblenden von Funktionen in der Benutzeroberfläche. Allerdings muss auch beim direkten Zugriff auf eine geschützte Funktion eine Prüfung der Zugriffsberechtigung auf dem Server stattfinden, ansonsten können Angreifer durch gezieltes Manipulieren von Anfragen ohne Autorisierung trotzdem auf diese zugreifen.

## Nur was serverseitig geprüft wird ist sicher

Bei der Programmierung von Web-Applikationen muss man sich immer bewusst sein,
dass alles was im Client passiert, bzw vom Client geschickt wird, manipuliert werden kann.
Meine serverseitigen Programme müssen jeden Input den sie bekommen selbst prüfen, und können
sich nicht darauf verlassen dass so eine Prüfung bereits am Client passiert ist.

Gängige Fehleinschätzungen dieser Art sind:

* Wenn ich keinen Link zu dieser Seite hinsetze, dann findet die Seite eh niemand.
* Das ist falsch! 
* Wenn ich die Daten in ein hidden-field im Formular schreibe, können sie nicht verändert werden
* Das ist falsch! 
* Wenn die Daten des Formulars per POST übertragen werden, können sie nicht manipuliert werden
* Das ist falsch!

## Jede PHP-Datei, Jede URL ist ein Einstiegspunkt

Jede einzelne PHP-Datei die im Webspace liegt kann auch direkt
über HTTP aufgerufen werden. Es bietet sich deswegen an in jeder
PHP-Datei zuerst die Zugriffsrechte zu prüfen.

<php caption="Prüfung der Zugriffsrechte am Anfang jeder PHP-Datei">
<?php
  include "functions.php";
  check_permissions();
  // .... 
</php>

Mit der Funktion `check_permissions` haben wir hier eine zentrale
Stelle geschaffen, an der alle Zugriffsrechte konfiguriert werden können.

## Mehr

Die OWASP bietet noch vertiefende Informationen zu diesem Thema an:

* [OWASP Development Guide: Chapter on Authorization](http://www.owasp.org/index.php/Guide_to_Authorization)
* [OWASP Testing Guide: Testing for Path Traversal](http://www.owasp.org/index.php/Testing_for_Path_Traversal)

