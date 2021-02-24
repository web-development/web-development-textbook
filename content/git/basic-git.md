---
title: Einfacher Arbeitsablauf in Git
order: 30
---

Diese Abbildung zeigt die wichtigsten Fachbegriffe von git:

§

Als **working copy** werden die Dateien und Ordner bezeichnet, die auf meinem lokalen Rechner aktuell im Filsystem sichtbar sind. Mit diesen kann ich also „ganz normal“ arbeiten: editieren, im Browser betrachten, etc.

§

Im **lokalen Repository** (local repository) verwaltet und speichert git alle „alten Versionen“ der Dateien. Mein lokales Repository unterscheidet sich technisch nicht von anderen Repositories, die ich als remote Repositories ansprechen kann.
Das local repository befindet sich im Ordner **.git**
§

Fachbegriffe und wichtigste Aktionen mit git

![Abbildung 141: Fachbegriffe und wichtigste Aktionen mit git](/images/image356.png)

§

Wenn ich eine Veränderung an einer Datei vorgenommen habe, kann ich sie
mit dem Befehl **add** in den Zustand **staged** versetzten. Ich sammle Schritt
für Schritt die Dateien zusammen, die ich gemeinsam **committen** will.

§

Mit dem Befehl **commit** werden die gestageden Dateien im lokalen Repository
abgespeichert, und erhalten dort einen eindeutigen Hash und eine Meldung (die
ich dazu eingebe).

§

Mit dem Befehl **push** kann ich die commits aus meinem lokalen Repository
in ein anderes, remote Repository übertragen. Meist hat man nur ein remote
Repository - als **ein** zentrales Repository.


## Arbeitsablauf

Wenn ein Webprojekt schon für die Arbeit mit git aufgesetzt ist, sieht der Arbeitsalltag z.B. so aus:

Meine working copy ist direkt im Webspace meines lokalen Webserver gespeichert. Ich nehme Änderungen an einer Datei „form.html“ und einer dazu gehörigen Datei „bestellung.php“ vor, teste über den lokalen Webserver ob alles funktioniert.

§

Wenn ich einen Zustand erreicht habe, der funktioniert dann ist es Zeit für einen Commit:

Zuerst muss ich entscheiden welche Dateien / Änderungen zum Commit gehören.

      git add form.html
      git add bestellung.php

Nun befinden sich die Änderungn von form.html und bestellung.html in der staging area, und sind bereit für einen commit. Dazu gebe ich noch einen kurzen Kommentar ein:

      git commit –m 'bestellformular von get auf post umgestellt – wir sind restful!'

Damit habe ich meine Änderungen im lokalen Repository gespeichert.

§

Nun kann ich das nächste Arbeitspaket angehen. Wenn ich einige Arbeitspakete erledigt habe und meine Ergebnisse veröffentlichen will (egal ob in einem kleinen Team, oder auf github für die ganze Welt) führe ich einen push auf ein remote repository durch:

    git push origin master

Das erste Argument „origin“ ist der Name des remote Repositories, das zweite Argument ist der Branch der gepushed werden soll. Sie werden in diesem Semester immer nur mit einem remote repository und mit dem Branch master arbeiten.
