---
title: Webserver mit PHP oder Apache
order: 30
---

Als vollständige Entwicklungsumgebung brauchen wir PHP, die Datenbank
und einen Webserver, der Anfragen per HTTP beantwortet.

Zwei Möglichkeiten für den Webserver sind:

* Mit PHP auf der Kommandozeile einen simplen Webserver starten
* den Webserver Apache installieren und konfigurieren



PHP Webserver
-------------

PHP hat einen eingebauten Webserver (siehe [Dokumentation](https://www.php.net/manual/de/features.commandline.webserver.php#example-508)).

Man startet ihn auf der Kommandozeile mit der Option `-S` (Achtung: Großbuchstabe S)

`php -S localhost:4000`

Erst mit einem Browser kann man die Funktionstüchtigkeit des Webservers wirklich testen. Die URL ist gleich wie in der Option -S angegebe:  http://localhost:4000/

PHP Webserver, Pfade und URLs
--------------

Es macht einen großen Unterschied "wo" man den Webserver startet.
Angenommen ich habe eine Datei mit Pfad `dev/webprog2abgabe/order-mail/index.html`


Wenn ich den Webserver im Ordner `webprog2abgabe` starte:

<shell>
cd dev
cd webprog2abgabe
php -S localhost:4000
</shell>

dann lautet die URL `http://localhost:4000/order-mail/index.html`

Wenn ich den Webserver im Ordner `oder-mail` starte:

<shell>
cd dev
cd webprog2abgabe
cd order-mail
php -S localhost:4000
</shell>


dann lautet die URL nur  `http://localhost:4000/index.html`


![php webserver starten, pfad und url](/images/php-apache/url.png)




Apache
------

Apache ist eine Webserver-Software. Es ist freie Software (free as in freedom,
not free as in beer). Das Apache-Projekt startete 1995 um statt NCSA Webserver, der schon durch viele Patches verbessert wurde, einen neuen Webserver von Grund auf zu programmieren. Der Name leitet sich aber noch von „a patchy webserver“ ab.

Im Gegensatz zu anderen freien Software Projekten waren in der Apache Group von Anfang an Programmierer aus großen Firmen vertreten, und zwar im offiziellen Auftrag dieser Firme

Heute betreibt die "Apache Group" neben dem Webserver noch viele weitere
wichtige Open Source Software Projekte.

Apache installieren
------------------------

Die [Apache Lounge](https://www.apachelounge.com/download/) bietet Installationsdateien
für verschiedene Betriebssysteme an.

Auf MacOS kann man auch [homebrew zur installation](https://www.git-tower.com/blog/apache-on-macos/) verwenden.


Apache und Datenbank starten
-------------------------

Wenn die Installation von Apache und Postgres funktioniert hat, findet
man nicht – wie bei anderen Programmen – einen Eintrag im Programm-Menü. Weder
Apache noch PHP noch Postgresql haben eine grafische Oberfläche. Apache und Postgresql
sind „Server“ (oder, wie es unter Windows heisst: „Dienste“).

Unter Systemsteuerung -&gt; Verwaltung -&gt; Dienste findet man eine Liste aller
bereits installierten Dienste und kann diese starten und anhalten.

![Dienste von Windows: MySQL und Apache2 sind schon gestartet](/images/php-apache/windows-dienste.png)

Auf MacOS mit Homebrew sieht und steuert man die Server mit der Kommandozeile `brew services`. Apache ist hier unter dem Namen `httpd` zu finden:

![brew services auf der Kommandozeile](/images/php-apache/brew-services.png)



Apache testen
------------------
Egal wie man Apache gestartet hat: erst mit einem Browser kann man die Funktionstüchtigkeit des Webservers wirklich testen. Als URL verwendet man http://localhost:80/ oder nur http://localhost/


