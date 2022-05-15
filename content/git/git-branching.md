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
den Branche wieder mit dem Haupt-Branch zusammenführen - dass
heißt dann "to merge".

## Branches anzeigen

Eine visuelle Darstellungen der Branches
findet man z.B. in Gitlab unter Repository &rarr; Diagram.

![Diagram in Gitlab](/images/git/gitlab-branches.png)


## Einen Branch erstellen

Um einen Branch anzuzeigen, zu erstellen oder zu löschen, verwenden wir den Befehl `git branch`.
Der aktuelle Branch wird bei der Anzeige mit einem Sternchen markiert:

<shell>
$ git branch
* Haupt
  iss50

$ git branch experiment_mit_three_js

$ git branch
* Haupt
  iss50
  experiment_mit_three_js
</shell>

## Aktuellen Branch wechseln

Das Erstellen und Löschen von Branches an sich hat keine Auswirkungen auf
Dateien und ändert nicht, in welchem Branch Sie sich befinden.

Ein Branch ist immer der aktuelle Branch. Sie beginnen
auf dem `main` Branch und können zu einem anderen Branch wechseln
indem Sie `checkout` benutzen:

`` sh
zu einem anderen Branch wechseln
$ git checkout experiment_mit_three_js

# Abkürzung: Erstellen eines neuen Branches + checkout
git checkout -b foo
```

Wenn es sich um einen neu erstellten Branch handelt,  ändern sich die Dateien in Ihrer
Arbeitskopie nicht verändert. Sie können nun in diesem
Branch wie gewohnt arbeiten: hinzufügen, übertragen, hinzufügen, übertragen.
Jetzt ist der Branch wirklich anders als andere Branches.
Wenn Sie jetzt einen anderen Branch auschecken, werden Sie sehen, dass sich die
Dateien in Ihrem Dateisystem ändern!

Checken Sie einen anderen Branch erst aus, wenn Ihr Arbeitsverzeichnis sauber ist,
nachdem Sie alle Änderungen festgeschrieben haben!

## Hinter den Kulissen

Git behält den Überblick über alle Übertragungen. Ein Branch ist
ein Zeiger auf einen bestimmten Commit.  Zu Beginn haben Sie
nur einen Main Branch, der auf den letzten Commit verweist,
in dieser Abbildung ist das c2:

![noch keine Branches](/images/git/branch-and-merge-0.svg)

## einen neuen Branch erstellen

Ein neuer Branch verweist einfach auf die gleiche Übertragung wie der aktuelle Branch.
In dieser Abbildung zeigt der neue Branch iss53 (wahrscheinlich erstellt, um Problem 53 zu beheben)
verweist auch auf die Übergabe c2:

```sh
$git checkout -b iss53
```

![noch keine Branches](/images/git/branch-and-merge-1.svg)

Mit `git checkout` können Sie zu einem anderen Branch wechseln -
Dies wird die Branches in keiner Weise verändern:

![git branch](/images/git/git-branch.png)

## auf zwei verschiedenen Branches arbeiten

Wenn Sie weiter an Ihrem Projekt arbeiten,
und neue Commits an den Main Branch und den
iss53 Branch machen, können Sie in eine Situation geraten wie
in dieser Abbildung:

![was will ich zusammenführen?](/images/git/branch-and-merge-4.svg)

Nun ist der Inhalt der beiden Branches unterschiedlich,
wenn Sie mit `git checkout` in einen anderen Branch wechseln, werden Sie
sehen Sie, wie sich die Dateien in Ihrer Arbeitskopie ändern.

## Merge = Zusammenführen

Der Prozess des Zusammenfügens von Branches wird mit dem
englischen Wort "merge" bezeichnet.
Git versucht, dies automatisch zu tun, und in vielen Fällen ist das auch kein Problem.
Zum Beispiel, wenn in den beiden Branches unterschiedliche Dateien verändert wurden.

Du solltest sich auf dem Branch befinden, der
weiter verwendet wird, im Beispiel unten ist dies `main`.
Wenn alles gut geht, wird die Ausgabe wie folgt aussehen:


`` sh
$ git checkout main
$ git merge experiment_mit_three_js
Zusammenführen durch rekursiv.
 README | 1 +
 1 Dateien geändert, 1 Einfügungen(+), 0 Löschungen(-)
```

Nach der erfolgreichen Zusammenführung enthält der aktuelle Branch (`main`)
alle Änderungen aus beiden Branches enthalten. Der andere Branch
ist noch unverändert:

![nach der Zusammenführung](/images/git/branch-and-merge-5.svg)

Sie brauchen den anderen Branch wahrscheinlich nicht mehr und können ihn löschen:

```` sh
git branch -d iss53
```

### Konflikte

Das Zusammenführen ist nicht immer so einfach.  Wenn beide Branches Änderungen für dieselbe Datei enthalten
kann git sie möglicherweise nicht automatisch zusammenführen. Dann wird das Repository
in einem "unmerged" Zustand belassen:

```sh
$ git status
index.html: muss zusammengeführt werden
# Auf Branch main
# Geändert, aber nicht aktualisiert:
#
# unmerged: index.html
#
```

Die "unmerged" Dateien enthalten "Konfliktmarkierungen", um
um anzuzeigen, wo Git versucht hat, sie zusammenzuführen, aber gescheitert ist.  Here a developer
is needed to look at the code and decide which version to keep,
or how to combine the two versions.

Here an example of an "unmerged" html file:

``` html
</div>
<<<<<<< HEAD:index.html
<footer>contact: support@github.com</footer>
=======
<div id="footer">
  please contact us at support@github.com
</div>
>>>>>>> iss53:index.html
</body>
</html>
```

If you use an editor with appropriate syntax highlighting
this might be easier to read:

![conflict marker with syntax highlighting](/images/git/conflict-markers.png)


Before deciding how to edit this
you probably also need to look at other files too
- in this example at the

Übersetzt mit www.DeepL.com/Translator (kostenlose Version)