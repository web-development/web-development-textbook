---
title: Commit
order: 33
---


Mit `git add` bereiten wir einen Commit vor, mit `git commit` führen wir ihn durch - aber
was ist ein Commit? Wofür verwendet man ihn?


## Chaos

Am Anfang erlebt man Programmieren oft als chaotischen Vorgang


![Illustration: chaotisch rumrennen](/images/git/run.svg)

"Hilfe, mein Programm geht nicht, ich ändere mal was in Zeile 2 - nö ist nicht besser geworden -
dann vielleicht Zeile 4 - hm, jetzt ist die Fehlermeldung anders - ist das gut oder ist
das schlecht?..." u.s.w.


## Stabilität

Commits helfen Stabilität in den Prozess zu bringen:

![Illustration: gemütlich sitzen](/images/git/chill.svg)


## Von Commit zu Commit arbeiten

* Ich beginne mit einem (noch unfertigen, aber) funktionierenden Programm
* ich mache eine kleine Änderung / Erweiterung, es klappt nicht sofort
* ich behebe alle Fehler
* und erreichen einen konsistenten, funktionierenden Zustand
* Jetzt mache ich einen Commit.

Nun kann ich in Ruhe eine Pause machen, meine Arbeit unterbrechen,
morgen erst weitermachen - ich hinterlasse einen guten Zustand.


## Commit als abgeschlossener Arbeitsschritt

In einem Commit bündelt man also zusammen gehörende Arbeitsschritte, zum Beispiel:

* Ein Bild zum Projekt hinzufügen
* Den `<img>` Tag in die HTML-Datei einfügen

Oder

* Ein Formular in die Webseite einbauen
* Im Stylesheet Einträge für das Formular machen

Oder

* Eine Bild-Datei aus dem Repository löschen
* Den `<img>` Tag aus der HTML-Datei entfernen


## Commit Message

Zu jedem Commit speichert man eine Zeile Beschreibung, die Commit-Message.
Bei einem Projekt das schon länger läuft sieht das dann so aus:

<shell>
$ git log --oneline
e5166ac added json parser to user stamps
009cd27 download as json is now possible in user stempelheft section
f98832a added export to json button in user stempelheft
81e98f8 refactor: move /talks  to /user/:user_id/talks
9772224 display link + location on front page
74258d9 fix migrations for new categories to work with postgres 9
3af38d1 replace font because umlauts missing. discern web+game in categories
39eee45 clean up event form and show-view for event
6a8fe6c add missing partial back in
645b566 impersonate in staging
</shell>

Die git Messages erzählen die Geschichte des Projekts.  Wenn ich nach zwei
Wochen Urlaub zurück komme und wissen will was inzwischen im Projekt passiert
ist, dann lese ich zuerst einmal die git Messages.


## Konventionen für Commit Messages

In professionellen Software Projekten gibt es oft genaue Vorschriften
wie Commit Messages formuliert sein müssen.

Für den Anfang reichen einige ganz simple Regeln:

* Die Commit Message ist in englischer Sprache
* Sie beschreibt die Änderung im Code kurz und prägnant

Am Anfang der Commit Message kann man den Typ der Änderung bekannt geben, mit folgenden Abkürzungen:

* '''fix:''' ein Fehler wurde behoben, das Programm funktioniert jetzt wieder
* '''feat:''' ein neues Feature wurde eingebaut, das Programm kann jetzt mehr als vorher
* '''refactor:''' der Code wurde verbessert, das Programm tut das selbe wie zuvor


