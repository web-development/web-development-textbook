---
title: A5 - Autorisierung
order: 50
---

Auf Platz 5 der OWASP Top 10 2017.

Die OWASP beschreibt dieses Problem allgemein so:

> Die meisten betroffenen Anwendungen realisieren Zugriffsberechtigungen nur durch das Anzeigen  oder Ausblenden von Funktionen in der Benutzeroberfläche. Allerdings muss auch beim direkten Zugriff auf eine geschützte Funktion eine Prüfung der Zugriffsberechtigung auf dem Server stattfinden, ansonsten können Angreifer durch gezieltes Manipulieren von Anfragen ohne Autorisierung trotzdem auf diese zugreifen.

## Nur was serverseitig geprüft wird ist sicher

Bei der Programmierung von Web-Applikationen muss man sich immer bewusst sein,
dass Alles was im Client passiert, bzw vom Client geschickt wird, manipuliert werden kann.
Meine serverseitigen Programme müssen jeden Input den sie bekommen selbst prüfen, und können
sich nicht darauf verlassen dass so eine Prüfung bereits am Client passiert ist.

Gängige Fehleinschätzungen dieser Art sind:

* Wenn ich keinen Link zu dieser Seite hin setzte, dann findet die Seite eh niemand.
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




## Alter Text von "Unsichere direkte Objektreferenzend"

Die OWASP beschreibt dieses Problem ungefähr so:

> Webanwendungen nutzen oft den internen Namen oder die Kennung eines Objektes, um auf dieses zu verweisen. BenutzerInnen können Parameter ändern, um diese Schwachstellen zu entdecken.

Dieser Punkt hängt eng mit [/security/a8-url/](A8 - Mangelhafter URL-Zugriffsschutz) zusammen.

## Beispiel für unsichere direkte Referenz

Ich benutze ein Online Banking System. Die URL meines Kontos ist

`https://www.onlinebank.com/user?acct=6065`

Ich verändere die URL, und probiere aus ob ich so Zugang zu weiteren Konten erhalte:

`https://www.onlinebank.com/user?acct=6066`


Ich benutze ein Galerie um Fotos zu betrachten. Die URL für ein bestimmtes Bild ist

`https://www.photos.com/show?img=100-0011_IMG.jpg&text=100-0011_IMG.txt`

Ich verändere die URL, und versuche so die Anzeige von interessanten Dateien im System zu verursachen:

`https://www.photos.com/show?img=100-0011_IMG.jpg&text=/etc/passwd`

## Vermeidung von unsichere direkten Referenzen

* Nicht die Keys aus der Datenbank preisgeben, sondern durch "slugs" ersetzen
* Nicht die Dateinamen in der URL preisgeben, sondern einen Code. Das serverseite Programm selbst speichert die echten Dateinamen

Und in jedem Fall:

* Am Server prüfen ob genau diese UserIn Zugriff auf genau diese Ressource hat.

## Slugs statt Keys

Slugs sind lesbare Texte, die einen Datensatz eindeutig identifizieren. Sie werden in der URL
statt IDs verwendet. Sie sind auch unter dem namen "friendly urls" und (z.B. in Wordpress) "permalinks" bekannt.

Die Verwendung von Slugs hat mehrere Vorteile:

1. Das erraten eines weiteren Keys ist nicht so leicht wie bei Zahlen
2. URLs werden dadurch leichter lesbar und sind leichter zu erinnern
3. Auch Suchmaschinen lesen den Text des Slugs, die Seite kann auch unter den Stichwörtern des Slugs gefunden werden

Mit folgender Konfigurations-Datei `.htaccess` wir der Apache-Webserver angewiesen
beim Aufruf der URL `/item/text-der-slug` in Wirklichkeit das PHP-Programm `view_item.php` mit dem Parameter 
`slug=text-der-slug` aufzurufen:

<plain caption=".htaccess">
RewriteEngine on

RewriteRule ^item/([-a-z]+) view_item.php?slug=$1
</plain>

Die Zugriff auf den Parameter in PHP erfolgt wie gewohnt über `$_GET`.

## Kein Zugriff auf beliebige Dateien

Die Erwähnung von Dateinamen als Parameter in der URL ist immer eine schlechte Idee.
Betrachten wir das schlechte Beispiel von Oben noch einmal:

`https://www.photos.com/show?img=100-0011_IMG.jpg&text=100-0011_IMG.txt`

Eine denkbar schlechte Implementiereung dieser Galerie wäre:

<htmlcode caption="Beliebiger Zugriff auf Dateien - NICHT SO PROGRAMMIEREN!">
  <img src="<?= $_GET['img'] ?>">
  <?php
  include $_GET['text'];  // nicht so programmieren!!!
  ?>
</htmlcode>

Mit diesem Programm kann man durch einfaches ändern der URL beliebige
Dateien am Server "erforschen". 

Gegen diese Art von Attacke kann man an mehreren Linien verteidigen:

* Im Betriebssystem: das PHP Programm läuft unter dem User-Account des Webservers. Durch geeigenetes Setzen der Zugriffsrechte im Filesystem kann diesem User der Zugriff zu wichtigen Bereichen untersagt werden
* In der PHP Konfiguration: Mit `open_basedir` kann in der Konfiguration festelegt werden, auf welche Dateien ein PHP-Programm zugreifen darf
* In der Applikation selbst: mit einer whitelist wird nur der Zugriff auf ausgewählte Dateien erlaubt.


