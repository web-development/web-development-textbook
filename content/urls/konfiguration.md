---
title: Konfiguration Webserver
order: 20
---

Die Konfiguration des Webservers wird hier am Beispiel von Apache gezeigt.
Andere Webserver, z.B: Internet Information Server von Microsoft oder nginx
(ausgesprochen "engine x") 
verfügen auch über diese Fähigkeiten, werden aber anders konfiguriert.

## Betriebssystem des Webservers
Viele Webserver werden auf einem UNIX-Betriebssystem betrieben. Die UNIX-Dateisysteme unterscheiden bei Datei- und Ordnernamen zwischen Groß- und Kleinschreibung, sind also „case-sensitive“. Der Rechner auf dem Sie Webseiten erstellen läuft wahrscheinlich unter Windows oder MacOS; dort sind die Dateisysteme „case-insensitive“.

Ein Link auf die Datei `bild.JPG` funktioniert unter Windows oder MacOS auch
dann, wenn er `bild.jpg` geschreiben wird.

Liegt die Datei aber dann am (UNIX-)Webserver, so funktioniert der Link nicht mehr! 
`bild.jpg` und `bild.JPG` sind zwei unterschiedliche Dateien!

## Webspace und Ordner
Im einfachsten Fall wird im Webserver ein Ordner spezifiziert, der als Ausgangspunkt für den Webspace dient.

* URL `http://multimediatechnology.at/wp-content/themes/mmt_blog_theme_2007/images/mmtlogo-400.png`
* Pfad im Dateisystem `/var/www/virthosts/multimediatechnology.at/wp-content/themes/mmt_blog_theme_2007/images/mmtlogo-400.png`

Die Apache-Konfiguration dazu sieht so aus:

    <VirtualHost mediacube.at>
    DocumentRoot /var/www/virthosts/multimediatechnology.at/
    </VirtualHost>

## Standard-Dokument

Endet eine URL auf einen Schrägstrich, dann verweist sie eigentlich auf einen ganzen Ordner, nicht auf eine spezielle Datei. Für diesen Fall kann im Webserver ein Standard-Dokument definiert werden. Auf allen Webservern der FH ist dies die Datei `index.html`.  d.h. wenn eine URL auf einen Ordner verweist, und in diesem Ordner eine Datei mit Namen `index.html`  existiert, dann wird diese Datei geliefert.

|URL                      |Pfad im Dateisystem|
|+------------------------|+------------------|
|http://mediacube.at/     |/var/www/virthosts/mediacube.at/index.html|
|http://mediacube.at/pix/ |/var/www/virthosts/mediacube.at/pix/index.html|
{: class="table table-condensed table-bordered" style="width:auto"}


Die Apache-Konfigurationsanweisung dazu lautet

    DirectoryIndex index.html

Achtung: die Konfiguration ist am Internet Information Server normalerweise anders, dort wird die Datei `default.htm` verwendet!

## Directory Index Datei existiert nicht

Was passiert wenn keine Datei mit dem richtigen Namen vorhanden ist? entweder eine Auflistung der Dateien im Ordner oder eine Fehlermeldung.

![Abbildung 43: Zugriff auf einen Ordner ohne Standard-Dokument (index.html): Auflistung oder Fehlermeldung](/images/urls/apache-directory-index.png)

Die entsprechenden Apache-Konfigurationsanweisung dazu sind:

    Options +Indexes
    Options -Indexes


### Automatischer Webspace für Alle

Auf UNIX-Servern mit vielen Accounts ist es üblich, dass  für jeden Account
automatisch ein Webspace exsitert. Dieser Webspace befindet sich innerhalb des
Home-Verzeichnisses des jeweiligen Accounts. Z.B. könnte eine Studentin den
Username fhs303030 habe und das Home-Verzeichnis `/home/store/fhs303030/`. Ihr
Webspace ist im Unter-Ordner `public_html`: 

|URL                      |Pfad im Dateisystem|
|+------------------------|+------------------|
|http://multimediatechnology.at/~fhs303030/test.html |/home/store/fhs303030/public_html/test.html|
|http://multimediatechnology.at/~fhs111111/test.html |/home/store/fhs111111/public_html/test.html|
{: class="table table-condensed table-bordered" style="width:auto"}

Die Apache Konfigurationsanweisung lautet:

    UserDir public_html



## relativer Link dazu

Beachten Sie: für das Formulieren von relativen URLs sind wirklich nur die URLs relevant,
nicht die Position der Dokumente im Dateisystem! Der Ordnername `public_html` wird also nie in einer URL vorkommen.

Der Link von einem User-Webspace zum nächsten funktioniert also so:

    http://multimediatechnology.at/~fhs303030/test.html   
                              +    ../~fhs111111/test   =
    http://multimediatechnology.at/~fhs111111/test

Oder relative zum Webserver:

    http://multimediatechnology.at/~fhs303030/test.html   
                              +   /~fhs111111/test   =
    http://multimediatechnology.at/~fhs111111/test

