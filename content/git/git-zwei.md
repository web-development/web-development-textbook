---
title: Git für Zwei
order: 50
---

Wie funktioniert die Arbeit mit git, wenn ich auf zwei
Computern arbeite?  Oder wenn zwei Personen zusammen arbeiten?

## Verteiltes Versionskontrollsystem

Git ist ein Verteiltes Versionskontrollsystem. "Verteilt" (distributed) heißt hier:
Auf mehreren Computer kann eine Version des Repository liegen.

![](/images/git/git-zwei-computer.png)

Mit dem Befehlen `push` und `pull` übertragen wir Information zwischen den
verschiedenen Computern.


## Zwei Computer

Szenario: ich beginne mein Projekte auf dem Laptop,
pushe auf ein remote Repository.  Später will ich die Arbeit auf meinem
PC fortsetzen.

![](/images/git/git-zwei-laptop-pc.png)

Wichtige Vorbereitung: auf dem zweiten Computer brauche ich wider meinen
private key als Datei `~/.ssh/id_rsa`. Und bei ersten Mal hole ich das
Repository mit `git clone` auf den Computer.

Später brauche ich dann nur noch den Befehl `git pull` um die Daten vom
remote repository ins local repository zu holen und von dort auch gleich in die
working copy.

## Zwei Personen

Szenario: ich arbeit mit Andreas zusammen an einem Projekt.

![](/images/git/git-zwei-andreas.png)

Wichtige Vorbereitung: Über die Weboberfläche gitlab gebe ich Andreas
Zugriffsrechte auf das Remote Repository. (Projekt Information → Mitglieder → grüner Button 'Invite Members' ...). Bei ersten Mal holt  sich Andreas das Repository mit `git clone` auf seinen Computer.

Später braucht er dann nur noch den Befehl `git pull` um die Daten vom
remote repository ins local repository zu holen und von dort auch gleich in die
working copy.

## Zwei Änderungen

Was passiert, wenn in zwei verschiedenen Repositories etwas geändert wurde?
Das erfahre ich, wenn ich den Befehl `git push` ausführe:

§include git/push-rejected.html

Die Fehlermeldung weist mich in die richtige Richtung: "Vielleicht müssen Sie die externen Änderungen zusammenführen (z. B. 'git pull ...') bevor Sie erneut push ausführen."

## Vorbereitung

Vor dem nächsten Schritt muss ich zwei Punkte konfigurieren:
Eine Merge-Strategie:

    git config --global pull.rebase false

Und einen Editor, den git von der Kommandozeile aus starten kann.
Wenn ich Visual Studio Code installiert habe, und es sich von der
Kommandozeile aus mit dem Befehl `code` starten lässt, dann kann ich es
so konfigurieren:

    git config --global core.editor "code --wait"

## Änderungen pullen

Ich habe also Änderungen (commits) in meinem lokal Repository, und andere Änderungen (commits)
im remote Repository.  Wenn ich nun den Befehl `git pull` ausführe werden diese Änderungen
zusammengefürt. Der englische Fachbegriff ist `merge`.

![](basic-merging-2.png)

Dieser Schritt der Zusammenführung wird ein eigener Commit (c6 im Bild) mit einer Commit Message.
Deswegen öffnet git automatisch einen Editor, in dem ich diese Commit Message (oder genauer: Merge Message)
bearbeiten kann.

§include git/pull-to-push.html


## Die Merge Nachricht schreiben


## Merge Konflikt erkennen

In diesem Beispiel tritt nach dem Pull ein Merge Konflikt auf.
Welche Dateien sind betroffen?

§include git/merge-conflict.html

Antwort: nur eine Datei, `2/index.html` ist betroffen.

## Merge Konflikt in der Datei

Was macht git mit den beiden verschiedenen Versionen einer Datei?

Es speichert beide Versionen in der Datei und fügt zusätzliche Zeilen ein: mit kleiner-Zeichen, mit gleich-Zeichen und mit größer-Zeichen (die Farben sind nur zur Orientierung hinzugefügt.)

§include git/merge-conflict-2.html

Achtung! Damit ist die Datei
erst einmal kaputt: compiliert nicht mehr, wird vom Browser nicht mehr korrekt angzeigt,
ist kein valides HTML mehr, ...






