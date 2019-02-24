---
title: Versionskontrolle
order: 20
---

Das Problem: mehrere Leute arbeiten gemeinsam an Code oder einem Dokument. Die naive Lösung: wer das Dokument ändert speichert es unter einen neuen Versionsnummer:

![ Dateien offline, ohne Versionskontrollsystem - viele Kopien](/images/git/versionen.png)

Aber was, wenn zwei Personen gleichzeitig Änderungen durchführen wollen? Und nicht voneinander wissen?

§

Ein Möglichkeit wäre, das gemeinsame Dokumen online zu editieren,
z.B. in Wikipedia, Google Docs, Office.

![Dokument online editieren](/images/git/google-docs.jpg)

<small>[Bild von Ron Mader, benutzt unter CC-SA](https://www.flickr.com/photos/planeta/23178866399)</small>

Das funktioniert für einzelne Dokument schon ganz gut.

§

Es gibt auch online Entwicklungsumgebungen um gemeinsam an Code zu arbeiten,
zum Beispiel cloud 9 (Teil von Amazon Web Services AWS):

![Code online entwickeln](/images/git/c9.png)

Aber der Quellcode unserer Programme und Webseiten ist komplizierter:
es sind mehrere Dateien, die voneinander Abhängig sind. Wenn
das Stylesheet geändert wird, muss vielleicht auch die HTML-Datei geändert
werden.

Wenn zwei Personen gleichzeitig editieren kommt das Programm schnell
in einen Zustand wo es gar nicht mehr funktioniert.

In der online Entwicklungsumgebungen muss man sehr intensiv zusammen arbeiten!

§

Es gibt auch eine Lösung, die auch für sehr viele ProgrammiererInnen,
und für eine nicht so intensive zusammenarbeit funktioniert: Ein Versionskontrollsystem.

Diese System hilft bei der Verwaltung von Datei-Versionen. Alle Änderungen werden gespeichert, nichts kann verloren gehen. Am eigenen Computer hat man
jeweils eine Kopie aller Dateien, und es gibt eine Möglichkeit diese
Dateien mit den anderen Versionen abzustimmen.

Mit einem Versionskontrollsystem ist ein freieres Arbeiten
möglich: Es wird einfacher Veränderungen auszuprobieren -
in der Sicherheit, dass man sie rückgängig zu machen kann,
bzw. an der anderen Version unabhängig weiter arbeiten kann.

§

Die englische Wikipedia enthält einen Überblick über verschiedene Systeme:

![Überblick über Versionskontrollsysteme aus der Wikipedia13](/images/image355.png)

Dabei sind drei historische Entwicklungsschritte erkennbar:

- Nur Lokal: das System ist auf die Verwaltung vom Daten im lokalen Filesystem ausgelegt.
- Client-Server: Daten werden in einem zentralen Repository gespeichert.
- Verteilt: Jeder Arbeitsplatz hat ein eigenes Repository, kann auch "offline" arbeiten.

Open Source Systeme sind:

- Nur Lokal: rcs
- Client-Server: cvs, svn.
- Verteilt: git, mercurial

§

Laut einer Umfrage von `github` hat sich im Jahr spätestens im Jahr 2012 git gegenüber subversion
durchgesetzt:

![Überblick über Versionskontrollsysteme aus der Wikipedia13](/images/git-and-subversion.png)
