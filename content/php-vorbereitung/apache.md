---
title: Apache
order: 30
---
Apache ist eine Webserver-Software. Es ist freie Software (free as in freedom,
not free as in beer). Das Apache-Projekt startete 1995 um statt NCSA Webserver, der schon durch viele Patches verbessert wurde, einen neuen Webserver von Grund auf zu programmieren. Der Name leitet sich aber noch von „a patchy webserver“ ab.

Im Gegensatz zu anderen freien Software Projekten waren in der Apache Group von Anfang an Programmierer aus großen Firmen vertreten, und zwar im offiziellen Auftrag dieser Firmen.

Heute betreibt die "Apache Group" neben dem Webserver noch viele weitere
wichtige Open Source Software Projekte.

Apache und PHP und Datenbank
------------------------

Für eine komplette Entwicklungsumgebung braucht man Apache, PHP und eine Datenbank.

Auf MacOS ist schon ein Apache installiert, man kann mit brew PHP und postgresql dazu
installieren: 

Bitnami bietet ein Paket an, das alle drei Teile gemeinsam installiert: den [WAPP Stack](https://bitnami.com/stack/wapp) für Windows, den [MAPP Stack](https://bitnami.com/stack/mapp/installer) für MacOS und den [LAPP Stack](https://bitnami.com/stack/lapp/installer) für Linux.

Diese Stack sind besonders für den Anfang geeignet. Wer schon mehr
Erfahrung mit dem Installieren auf Mac hat kann alternativ auch
[brew](https://gist.github.com/karlhillx/5cd68430aeb25e5e242a3e2c30f238d1) zur Installation
verwenden.


Apache und Datenbank starten
-------------------------
Wenn die Installation von Apache und Postgres funktioniert hat, findet
man nicht – wie bei anderen Programmen – einen Eintrag im Programm-Menü. Weder
Apache noch PHP noch Postgresql haben eine grafische Oberfläche. Apache und Postgresql
sind „Server“ (oder, wie es unter Windows heisst: „Dienste“). 

Mit dem MAPP/WAPP/LAPP Paket wird ein Control Panel installiert,
über das man Webserver und Datenbank starten kann:

![MAPP Control Panel](/images/php-vorbereitung/mapp-stack-panel.png)

Apache als Windows-Dienst
--------------------------
Unter Systemsteuerung -&gt; Verwaltung -&gt; Dienste findet man eine Liste aller
bereits installierten Dienste und kann diese starten und anhalten.

![Abbildung 124: Dienste von Windows: MySQL und Apache2 sind schon gestartet](/images/image326.png)


Webserver stoppen
------------------
Egal wie man Apache gestartet hat: erst mit einem Browser kann man die Funktionstüchtigkeit des Webservers wirklich testen. Als URL verwendet man http://localhost/. 


Apache und die Datenbank brauchen Hauptspeicher.
Wer gleichzeitig mit vielen anderen Programmen arbeitet und extrem wenig
Hauptspeicher im Computer hat, sollte die Server also nach Gebrauch wieder
beenden. 

