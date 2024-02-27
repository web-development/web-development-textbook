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
#!/usr/bin/bash

# hier kann ein Kommentar sein, das ist ok
echo "Hallo Welt"
</shell>


Die Ausgabe erfolgt mit `echo`.


Mit den passenden Zugriffsrechte

<shell>
chmod +x meinscript
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

    - `=`  ein Gleichzeichen für Vergleich von Strings
    - `-eq` für "equal" bei Zahlen
    - `-ne` für "not equal" bei Zahlen
    - `-gt` für "greater than" bei Zahlen
    - `-ge` für "greater or equal" bei Zahlen
    - `-lt` für "less than" bei Zahlen
    - `-le` für "less or equal" bei Zahlen

Und weitere Tests:

    - `-f name` für "existiert eine Datei diesen Namens?"
    - `-d name` für "existiert ein Ordner diesen Namens?"

Boolsche Operatoren

    - `!` für Verneinung
    - `&&` für und
    - `||` für oder

Beispiel für Boolsche Operatoren

<shell>
if [ $ALTER -ge 18 ] && [ $ALTER -lt 24 ]; then
    echo "In den USA darfst du noch keinen Alkohol trinken"
fi
</shell>

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

Man kann die Ausgabe in eine Datei umleiten mit `>`, das überschreibt
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

## Meine Konfiguration für Bash in der Datei `~/.bashrc`

Falls es in meinem Homeverzeichnis eine Datei `.bashrc` gibt,
dann wird die immer ausgeführt wenn ich eine neue Bash-Session starte.

Also z.B. wenn ich das git-bash Fenster aufmache.

In dieser Datei kann man zum Beispiel Umgebung-Variablen setzen,
die immer gelten sollen:

<shell>
export SPRUCH="Mit Linux wäre das nicht passiert."
</shell>

Dann kann ich die Varialbe $SPRUCH auf der Kommandozeile
und in allen Shell-Skripts nutzen, sie ist schon da.

## Meine Shellscripts im Ordner `~/bin`

Skripte die man oft braucht kann man in einem
eigenen Ordner ablegen. Auf Linux und Mac wäre der typische Ort
dafür der Order `bin` im eigenen Home-Verzeichnis.

Diesen Ordner gibt man in die PATH Variable.


 z.B. indem man in der Datei `~/.bash_profile` einen
entsprechenen Eintrag macht:

<shell>
export PATH="$PATH:/home/bjelline/bin"
</shell>

hier wird die PATH Variable neu gesetzt, und zwar auf den schon
vorhandnen Wert plus den Pfad zum bin-Ordner in meinem Home-Verzeichnis.

Wenn die Pfad-Variable so getzt ist,
kann ich Skripts aus meinem bin-Ordner von überall aus aufrufen.

Wenn in meinem `bin` Ordner die Skripte `mkalgodatproject` und `mksizes`
liegen kann ich sie so verwenden, egal "wo" ich bin:

<shell>
cd ~/dev/studium/Jellinek_Brigitte_algodat
mkalgodatproject 5 1
cd ~/dev/studium/Jellinke_Brigitte_wp2/pizza
mksizes pizza.jpg
</shell>

## Mehr Shellskripting lernen

* [The Unix Shell](https://swcarpentry.github.io/shell-novice/) ein Kurs von Software Carpentry (englisch)




