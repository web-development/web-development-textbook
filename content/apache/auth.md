---
title: Authentisierung
order: 10
---

In diesem Kapitel lernen Sie die Konfigurationsanweisungen
für Authentisierung und für  Fehlermeldungen kennen.

## Fehlermeldung

Die Fehlermeldungen des Webservers können an das Design der Webseite angepasst werden. Die häufigste Fehlermeldung ist der Fehler 404 - Dokument nicht gefunden.

Die Standard-Fehlermeldung des Apache Webservers ist neutral gestaltet. 

![apache standard 404](/images/apache-404.png)

§

Um sie durch eine selbst gestaltete Fehlermeldung zu ersetzen erstellen Sie zuerst eine ganz normale HTML-Seite, mit CSS, Bildern, ... etc.

Diese Webseite wird im Webspace gespeichert, z.B. unter der URL `/myerror/404.html`. Mit der Konfigurations-Anweisung

<apache>
ErrorDocument 404 /myerror/404.html
</apache>

wird die Fehlermeldung aktiviert. (nicht vergessen: Apache neu starten.)
Nun wird bei jedem Zugriff auf eine nicht existierende URL die Fehlermeldung angezeigt.

Achtung: Wenn man bei der ErrorDocument-Anweisung einen falschen Pfad angibt erscheint eine doppelte Fehlermeldung:

![apache standard 404](/images/apache-404-doppelt.png)


## Zugriffsbeschränkung

Der Zugriff auf den Webserver, oder auf bestimmte Ordner und Dateien am Webserver kann beschränkt werden. Dabei sind verschiedene Kriterien denkbar: Zugriff nur für bestimmte Browser, Zugriff nur mit Passwort, Zugriff nur von Computern die innerhalb der FH sind.

Das letzte Kriterium ist das einfachste:  Alle Computer innerhalb der FH haben eine IP-Adresse die mit 10. beginnt. Die Zugriffsbeschränkung erfolgt mit den Konfigurations-Anweisungen Deny, Allow und Order:

<apache>
Order deny,allow
Deny from all
Allow from 10.
</apache>

§

Aber meist will man nicht den Zugriff auf den ganzen Server sperren, sondern auf einen Bestimmten Ordner oder auf bestimmte Dateien. Dafür wird in der Apache Konfigurations-Datei eine Schreibweise verwendet, die an HTML oder XML erinnert:

<apache>
  <Location /fhintranet>
    Order deny,allow
    Deny from all
    Allow from 141.201
  </Location>
</apache>

Der Teil der Konfiguration, der im `<Location>`-Tag eingeschlossen ist gilt nur für den Ordner `/fhintranet` im Webspace. 

§

Der Teil, der im `<FilesMatch>`-Tag eingeschlossen ist gilt für alle Dateien im Webspace, deren Name auf `.bak` endet.

<apache>
  <FilesMatch \.bak$>
    Order allow,deny
    Deny from all
  </FilesMatch>
</apache>


Der Teil der Konfiguration, der im `<Location>`-Tag eingeschlossen ist gilt nur für den Ordner `/fhintranet` im Webspace. Der Teil, der im `<FilesMatch>`-Tag eingeschlossen ist gilt für alle Dateien im Webspace, deren Name auf `.bak` endet.


Die Schreibwiese bei FilesMatch ist einen „Pattern" - ein Suchmusters. Patterns und Pattern-Matching werden Sie in JavaScript, in PHP und in vielen Konfigurationsdateien wieder verwenden.

Das Dollar-Zeichen am Ende des Patterns bedeutet, dass `bak` am Ende des Dateinamens stehen muß. Eine Datei mit Namen test.bak.txt wäre also nicht betroffen. Vor dem Punkt muß man einen Backslash `\` schreiben, weil der Punkt alleine als Joker gelten würde. Der Pattern `.bak$` (ohne Backslash) würde also auch den Dateinamen schlabberdibak oder bik_bak erkennen, weil der Punkt für das i oder den Unterstich stehen könnte.

## HTTP Auth mit Apache


In dem Ordner, der gesperrt werden soll, wird eine Datei .htaccess angelegt:


<apache>
  AuthType Basic
  AuthName "Intranet"
  AuthUserFile /home/stud007/pass
  require valid-user
</apache>


  Achtung: der Pfad zur Passwort-Datei (AuthUserFile) muß vollständig angegeben werde! Die Passwort-Datei sieht so aus:


<apache>
  brigitte:$apr1$Yj1. . . . . $N72ZRLbh91/q33fhGqlJW1
  clemens:$apr1$al1. . . . . $VZguOHeYTiQ7emGSIj4lh. 
</apache>


Diese Datei können Sie mit einem Generator am Web erzeugen oder mit dem Programm `htpasswd` das mit Apache mit geliefert wird. Das funktioniert z.B. auf der Kommandozeile von Windows so:


<apache>
  C:\xampp\apache\bin>htpasswd -c pass brigitte
  New password: ********
  Re-type new password: ********
  Adding password for user brigitte
  C:\xampp\apache\bin>htpasswd pass clemens
  New password: ***
  Re-type new password: ***
  Adding password for user Clemens
</apache>

Diese Methode funktioniert auch auf dem Webserver users.multimediatechnology.at. Wenn Sie einen eigenen Apache Server betreiben, können Sie diese Authentisierungmethode mit verschiedenen Backends verwenden (LDAP, Datenbank, ...) - dafür gibt es verschiedene Apache Module. 

Mit der HTTP-Authentisierung ist das HTTP-Protokoll (genau wie bei der Verwendung von Cookies) nicht mehr stateless. http-Auth hat gegenüber Cookies den Vorteil, dass die Eingabe von Username und Passwort über ein Browser-Fenster erfolgt und nicht implementiert werden muß. 

![Authentisierungs-Popup in Firefox](/images/firefox-auth.png)
![Authentisierungs-Popup in Chrome](/images/chrome-auth.png)


Was mit http Auth nicht funktioniert, ist der Zugriff ohne Login auf die gleiche URL. (Bei Authentisierung über Cookies geht das).


