---
title: Git Branching
order: 80
---


## Wozu Branches?

Ein Branch ist neuer Zweig für die Entwicklung.

Wenn ich eine neue Library ausprobieren will,
aber noch nicht sicher bin, dass ich sie einsetzen werde,
kann ich für das Experimentieren einen Branch einrichten.

Später möchten ich vielleicht
den Branche wieder mit dem Haupt-Branch zusammenführen.

## Branches anzeigen

Eine visuelle Darstellungen der Branches
findet man z.B. in Gitlab unter Repository &rarr; Diagram.

![Diagram in Gitlab](/images/git/gitlab-branches.png)


## Einen Branch erstellen

Um einen Branch anzuzeigen, zu erstellen oder zu löschen, verwenden wir den Befehl `git branch`.
Der aktuelle Branch wird bei der Anzeige mit einem Sternchen markiert:

<shell>
$ git branch
* main
  iss50

$ git branch experiment_mit_three_js

$ git branch
* main
  iss50
  experiment_mit_three_js
</shell>

## Aktuellen Branch wechseln

Das Erstellen und Löschen von Branches an sich hat keine Auswirkungen auf
Dateien und ändert nicht, in welchem Branch Sie sich befinden.

Ein Branch ist immer der aktuelle Branch. Sie beginnen
auf dem `main` Branch und können zu einem anderen Branch wechseln
indem Sie `checkout` benutzen:

<shell>
zu einem anderen Branch wechseln
$ git checkout experiment_mit_three_js

# Abkürzung: Erstellen eines neuen Branches + checkout
git checkout -b foo
</shell>

Wenn es sich um einen neu erstellten Branch handelt,  ändern sich die Dateien in Ihrer
Arbeitskopie nicht verändert. Sie können nun in diesem
Branch wie gewohnt arbeiten: hinzufügen, übertragen, hinzufügen, übertragen.
Jetzt ist der Branch wirklich anders als andere Branches.
Wenn Sie jetzt einen anderen Branch auschecken, werden Sie sehen, dass sich die
Dateien in Ihrem Dateisystem ändern!

Checken Sie einen anderen Branch erst aus, wenn Ihr Arbeitsverzeichnis sauber ist,
nachdem Sie alle Änderungen festgeschrieben haben!

## Hinter den Kulissen

Git behält den Überblick über alle Commits. Ein Branch ist
ein Zeiger auf einen bestimmten Commit.  Wenn man noch keine
weiteren branches erstellt hat gibt es
nur einen `main` Branch, der auf den letzten Commit verweist,
in dieser Abbildung ist das c2:

![noch keine Branches](/images/git/branch-and-merge-0.svg)

## einen neuen Branch erstellen

Ein neuer Branch verweist nach dem Erstellen auf den gleichen Commit wie der aktuelle Branch.
In dieser Abbildung wird der neue Branch mit dem Namen `iss53` erstellt,
der auch auf den Commit c2 verweist.  (iss53 ist eine Abkürzung für Issue 53)

<shell>
$ git branch iss53
$ git checkout iss53
</shell>

![noch keine Branches](/images/git/branch-and-merge-1.svg)

Mit `git checkout` kann man zu einem anderen Branch wechseln.
Das verändert die Branches nicht.

<shell>
$ git branch
* main
  iss50

$ git checkout iss53

$ git branch
  main
* iss50

$ git checkout main

$ git branch
* main
  iss50
</shell>


## auf zwei verschiedenen Branches arbeiten

Wenn man am Projekt weiterarbeitet und auf beiden
Branches  neue Commits macht, kann man in eine Situation geraten wie
in dieser Abbildung:

![was will ich zusammenführen?](/images/git/branch-and-merge-4.svg)

Nun ist der Inhalt der beiden Branches unterschiedlich.
Wenn man mit `git checkout` in einen anderen Branch wechselt, kann
man sehen wie sich  die Dateien in der Working Copy ändern.

## Merge = Zusammenführen

Der Prozess des Zusammenfügens von Branches wird mit dem
englischen Wort "merge" bezeichnet.
Git versucht, dies automatisch zu tun, und in vielen Fällen ist das auch kein Problem.
Zum Beispiel, wenn in den beiden Branches unterschiedliche Dateien verändert wurden.

Man startet den Prozess auf dem Branch, der weiter bestehen soll,
also meist auf `main`.  Dort gibt man den Befehl `git merge ....` ein.

Wenn alles gut geht, wird die Ausgabe wie folgt aussehen:


<shell>
$ git checkout main
$ git merge experiment_mit_three_js
Aktualisiere bdf7328..05d4ceb
Fast-forward
  README.md                |  189 +++++++
  index.html               |  218 ++++++++
 2 files changed, 407 insertions(+)
</shell>

Nach der erfolgreichen Zusammenführung enthält der aktuelle Branch `main`
alle Änderungen aus beiden Branches.
Der andere Branch ist noch unverändert:

![nach der Zusammenführung](/images/git/branch-and-merge-5.svg)

Wir brauchen den anderen Branch wahrscheinlich nicht mehr und können ihn  mit `-d` löschen:

<shell>
git branch -d iss53
</shell>

## Konflikte

Wie schon im Kapitel [Git für Zwei](/git/git-zwei/) beschreiben kann
es zu Merge Konflikten kommen.  Dann wird das Repository
in einem "unmerged" Zustand belassen, und ich muss erst
die Konflikte beheben und danach die betroffenen Dateien comitten.

