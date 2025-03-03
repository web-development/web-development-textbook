---
title: Kommandozeile
order: 20
---
Computer haben bunte Oberflächen mit Buttons, Menüs, Links. Man verwendet Maus oder Touchscreen um mit Ihnen zu arbeiten.

Das ist aber nur die halbe Wahrheit. Unter der bunten Oberfläche verbirgt sich ein anderes Interface, das die Fachleute verwenden
um mit dem Computer zu interagieren. Dieses Interface hat sich seit den 70er Jahren nicht verändert, es funktioniert noch immer
so wie der Teletype:

![Abbildung: Teletype](/images/teletype.jpg)

Wenn Sie professionell in der Webentwicklung arbeiten möchten, werden Sie früher oder später auf die Kommandozeile stoßen. Sie mag anfangs einschüchternd wirken, ist aber ein unglaublich leistungsfähiges Werkzeug.

**Der Unterschied zur grafischen Benutzeroberfläche (GUI)**

Bisher haben Sie wahrscheinlich hauptsächlich mit grafischen Benutzeroberflächen (GUIs) gearbeitet. Diese sind besonders benutzerfreundlich: Durch einfaches Herumklicken und Erkunden können Sie oft herausfinden, wie ein Programm funktioniert. Menüs und Symbole bieten visuelle Hinweise und erleichtern die Orientierung.

**Die Herausforderung der Kommandozeile**

Die Kommandozeile ist anders. Sie präsentiert sich als schwarzes Fenster, das auf Ihre Eingabe wartet. Sie müssen präzise formulierte Befehle eintippen, und wenn Sie noch keine Befehle kennen, gibt es keine offensichtlichen Anhaltspunkte, wo Sie anfangen sollen.

## Wo finde ich die Kommandozeile

Sie öffnen die Kommandozeile je nach Betriebssystem Unterschiedlich:

* Windows: [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=de-DE&gl=DE) aus dem Microsoft App Store
* Mac OS X: Terminal
* Linux: xterm


### Beispiel Mac OS

So sieht das Terminal auf Mac OS X aus:

![Abbildung: Terminal auf Mac OS X](/images/kommandozeile/empty-terminal.png)

Im Terminal läuft eine **Shell**.  Das ist der eigentliche Kommando-Interpreter,
der Ihre Eingaben verarbeitet wird.  In der Abbildung oben ist das die shell **zsh**.

Die eine Zeile Text die Sie sofort sehen ist die **Eingabeaufforderung** (english: **prompt**).
Nach dem Prozent-Zeichen können Sie einen ersten Befehl eintippen

§

![Abbildung: Terminal auf Mac OS X](/images/kommandozeile/terminal.png)


In dieser Abbildung ist die Eingabe gelb markiert.  Die Antwort der Shell ist blau markiert.
Beim Arbeiten mit der Kommandozeile ist es wichtig die Ausgabe immer vollständig zu lesen!

Das Kommando **pwd** steht für "print working directory", also "gib das Arbeitsverzeichnis aus".
Die Ausgabe ist also der **Pfad** des Arbeitsverzeichnisses.
In menschliche Sprache übersetzt lautet dieser Dialog ungefähr:

* Frage an die Shell: "wo bin ich gerade?"
* Antwort: "du bis im Ordner **Users** im Unter-Ordner **bjelline**, im Unter-Ordner **dev**"

Das Kommando **ls** steht für "listing" und listet die hier sichtbaren Dateien und Ordner auf.

Das Kommando kann mit sogenannten "Optionen" verändert werden:  **-l** zeigt mehr Informationen
für jeden Listen-Eintrag an, **-a** zeigt auch versteckte Einträge an. In kombination lautet
das Kommando **ls -la**



### Beispiel Windows:

So sieht das Windows Terminal aus:

![Abbildung: Windows Terminal](/images/kommandozeile/windows-terminal.png)

Im Terminal sieht man, dass drei verschiedene Tabs geöffnet sind:

* Die (DOS) Eingabeaufforderung (englisch: `cmd`) ist die "alte" Shell von Windows
* Der Tag der git bash zeigt den Titel MINGW64
* Die Windows PowerShell (kurz "PS") ist die "neue" Shell von Windows

Als Promt wird hier Pfad inklusive Laufwerksname angezeigt.
Mit dem Befehl **cd** kann man diesen Pfad anzeigen, oder zu einem
anderen Pfad wechseln.

Das Kommando **dir** steht für "directory listing". Die Antwort
ist sehr ausführlich.


## cd - change working directory

Der Befehl **cd** funktioniert auf Windows und Mac fast gleich:

**cd pfad** setzt das Arbeitsverzeichnis auf den neuen Pfad.
Dabei gilt alles, was wir über absolute und relative Pfade gelernt
haben

Auf Mac:

* **cd webprog2abgabe**  - wechselt in den Unterordner `webprog2abgabe`
* **cd ..** - wechselt einen Ordner höher
* **cd /home/bjelline/dev** - wechselt in den Ordner der mit dem absoluten Pfad angegeben ist

Auf Windows:

* **cd webprog2abgabe**  - wechselt in den Unterordner `webprog2abgabe`
* **cd ..** - wechselt einen Ordner höher
* **cd \Users\bjelline\dev** - wechselt in den Ordner der mit dem absoluten Pfad angegeben ist



## Literatur

* Stephenson, Neal. [In the beginning... was the command line](https://en.wikipedia.org/wiki/In_the_Beginning..._Was_the_Command_Line). New York, NY: Avon books, 1999.

## Bild

* [ASR-33 aus Wiki Commons](https://commons.wikimedia.org/wiki/File:ASR-33_at_CHM.agr.jpg)
