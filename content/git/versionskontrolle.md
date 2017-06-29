---
title: Versionskontrolle
order: 20
---
Das Problem: mehrere Leute arbeiten gemeinsam an Code oder einem Dokument. Die naive Lösung: wer das Dokument ändert speichert es unter einen neuen Versionsnummer:


![Abbildung 139: Dateien ohne Versionskontrollsystem - viele Kopien](/images/image354.png)

Diese Methode funktioniert aber nicht mehr, sobald zwei Personen gleichzeitig unabhängig voneinander Änderungen durchführen.

Die professionelle Lösung ist ein Versionskontrollsystem. 
Diese System hilft bei der Verwaltung von Datei-Versionen. Alle Änderungen werden gespeichert, nichts kann verloren gehen.

Mit einem Versionskontrollsystem ist ein freieres Arbeite
möglich: Es wird einfacher  Veränderungen auszuprobieren -
in der Sicherheit, dass man sie rückgängig zu machen kann,
bzw. an der anderen Version unabhängig weiter arbeiten kann.

§

Die englische Wikipedia enthält einen Überblick über verschiedene Systeme:

![Überblick über Versionskontrollsysteme aus der Wikipedia13](/images/image355.png)

Dabei sind drei historische Entwicklungsschritte erkennbar:

* Nur Lokal: das System ist auf die Verwaltung von Daten im lokalen Filesystem ausgelegt. 
* Client-Server: Daten werden in einem zentralen Repository gespeichert.
* Verteilt: Jeder Arbeitsplatz hat ein eigenes Repository, kann auch "offline" arbeiten.

Open Source Systeme sind:

* Nur Lokal: rcs
* Client-Server: cvs, svn.
* Verteilt: git, mercurial

§

Laut einer Umfrage von `github` hat sich im Jahr 2012 git gegenüber subversion
durchgesetzt:

![Überblick über Versionskontrollsysteme aus der Wikipedia13](/images/git-and-subversion.png)
