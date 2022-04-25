---
title: Shellscript
order: 25
---


Ein Shellscript fasst im einfachsten Fall ein paar
Befehle zusammen, die man öfter mal ausführen muss.

Hier die wichtigsten Tipps für Shellscripts:

## Magische erste Zeile und Ausgabe

Ein Shellscript beginnt mit der magischen ersten Zeile.
Achtung: davor kann nichts anderes sein, nicht einmal Kommentar.

<shell>
#!/bin/bash

# hier kann ein Kommentar sein, das ist ok
echo "Hallo Welt"
</shell>


Die Ausgabe erfolgt mit `echo`.


Mit den passenden Zugriffsrechte

<shell>
chmod u+rx meinscript
</shell>

kann man das Skript starten

<shell>
./meinscript
</shell>

## Variablen setzen und verwenden

Wenn man eine Variable setzt hat sie kein Dollar-Zeichen,
wenn man sie verwendet hat sie ein Dollar-Zeichen


<shell>
NAME="Brigitte"

echo "Hallo $NAME"
</shell>

## Kontrollstrukturen: Verzweigung

sieht ähnlich aber anders aus als in c:
die Bedingung ist in eckigen klammern und
verwendet operatoren die immer mit Minus beginnen.

Hier `-lt` für "less than":

<shell>
if [ $ALTER -lt 18 ]; then
    echo "Du kommst hier nicht rein"
else
    echo "Willkommen im Club"
fi
</shell>

Weitere Operatoren:

    - `-eq` für "equal"
    - `-ne` für "not equal"
    - `-gt` für "greater than"
    - `-ge` für "greater or equal"
    - `-lt` für "less than"
    - `-le` für "less or equal"

Und weitere Tests:

    - `-f name` für "existiert eine Datei diesen Namens?"
    - `-d name` für "existiert ein Ordner diesen Namens?"

Boolsche Operatoren

    - `!` für Verneinung
    - `&&` für und
    - `||` für oder

## Kontrollstrukturen: Schleife

<shell>
for SIZE in 350 740 1400 2800
do
  echo "Ich soll davon eine Bild mit Breite $SIZE erzeugen"
done
</shell>


## Kommandozeile:

Wird das Programm mit Argumenten aufgerufen,
so landen diese als Strings in den Variablen $1 $2 usw.

<shell>
./meinscript arg1 -f
</shell>

hier wäre also $1 gleich "arg1" und $2 gleich "-f"

Die Anzahl der Argument landet in der Variable `$#`


Eine Schleife über die Argumente:

<shell>
for ARG in $@
do
  echo "Noch ein Argument: $ARG"
done
</shell>

##  In eine Datei schreiben

Man kann die Ausgabe in eine Datei umleiten mit `>`, das Überschreibt
die Datei. Oder man kann mit `>>` an die Datei anfügen:


<shell>
echo "Hallo Welt" > README.md
echo "nochwas,...." >> README.md
</shell>

## Tricks mit Variablen

Die `bash` bietet viele Möglichkeiten beim Aufruf einer
Variable gleich noch eine Berechnung zu machen:

<shell>
SPRUCH="Mit Linux wäre das nicht passiert"
echo $SPRUCH
echo ${SPRUCH/Linux/Mac}
</shell>

Die Ausgabe lautet

<shell>
Mit Linux wäre das nicht passiert
Mit Mac wäre das nicht passiert
</shell>

Mehr Tricks im [Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/string-manipulation.html)

## Meine Shellscripts im Ordner `~/bin`

Skripte die man oft braucht kann man in einem
eigenen Ordner ablegen. Auf Linux und Mac wäre der typische Ort
dafür der Order `bin` im eigenen Home-Verzeichnis.

Diesen Ordner gibt man in die PATH Variable, z.B.
indem man in der Datei `~/.bash_profile` einen
entsprechenen Eintrag macht:

<shell>
export PATH="$PATH:/home/bjelline/bin"
</shell>

hier wird die PATH Variable neu gesetzt, und zwar auf den schon
vorhandnen Wert plus den Pfad zum bin-Ordner in meinem Home-Verzeichnis.

Das `export` vor der Variable ist wichig, damit die Variable auch
nach Ende des Skripts `.bash_profile` weiter verfügbar ist.

`.bash_profile` wird jedesmal ausgefürht wenn ich eine neue Shell starte.


Nun kann ich Skripts aus meinem bin-Ordner von überall aus aufrufen, z.B:
wenn in meinem bin ordner die Skripte `create_algodat_project` und `mksizes`
liegen kann ich sie überall verwenden:

<shell>
cd ~/dev/studium/Jellinek_Brigitte_algodat
create_algodat_project 05 01
cd ~/dev/studium/Jellinke_Brigitte_wp2/pizza
mksizes pizza.jpg
</shell>

## Mehr Shellskripting lernen

* [The Unix Shell](https://swcarpentry.github.io/shell-novice/) ein Kurs von Software Carpentry (englisch)




