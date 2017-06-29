---
title: Unsichere direkte Objektreferenzen
order: 40
---

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

1. Das Erraten eines weiteren Keys ist nicht so leicht wie bei Zahlen
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

Mit diesem Programm kann man durch einfaches Ändern der URL beliebige
Dateien am Server "erforschen". 

Gegen diese Art von Attacke kann man an mehreren Linien verteidigen:

* Im Betriebssystem: das PHP Programm läuft unter dem User-Account des Webservers. Durch geeigenetes Setzen der Zugriffsrechte im Filesystem kann diesem User der Zugriff zu wichtigen Bereichen untersagt werden
* In der PHP Konfiguration: Mit `open_basedir` kann in der Konfiguration festelegt werden, auf welche Dateien ein PHP-Programm zugreifen darf
* In der Applikation selbst: mit einer whitelist wird nur der Zugriff auf ausgewählte Dateien erlaubt.


