---
title: Zugriffsrechte
order: 40
---

Die meisten Webserver werden auf UNIX-Systemen betrieben.
Das UNIX-Filesystem unterscheidet sich in einigen wichtigen
Punkten von den Filesystemen von Windows (und Mac OS X), die
sie vielleicht besser kennen.


### Informationen über Zugriffsrechte anzeigen

Wie bereits gezeigt führen die Option **-l** und **-a** beim Befehl **ls** dazu, 
dass mehr Informationen angezeigt werden,
insbesondere auch die Zugriffsrechte:

<shell caption="Dateien und Ordner auflisten inklusive geheimer Dateien">
$ ls -la
total 12
drwxr-xr-x   14 bjelline staff  476 Mär  2 09:29 .
drwxr-xr-x+ 232 bjelline staff 7888 Mär  2 09:29 ..
-rw-------    1 bjelline staff    3 Mär  2 09:19 .CFUserTextEncoding
-rw-------    1 bjelline staff   11 Mär  2 09:28 .bash_history
-rw-------    1 bjelline staff   80 Mär  2 09:29 .bash_profile
drwx------    2 bjelline staff   68 Mär  1 20:21 Desktop
drwx------    2 bjelline staff   68 Mär  1 20:21 Documents
drwx------    2 bjelline staff   68 Mär  1 20:21 Downloads
drwx------    2 bjelline staff   68 Mär  1 20:21 Dropbox
drwx------    2 bjelline staff   68 Mär  1 20:21 Library
drwx------    2 bjelline staff   68 Mär  1 20:21 Movies
drwx------    2 bjelline staff   68 Mär  1 20:21 Music
drwx------    2 bjelline staff   68 Mär  1 20:21 Pictures
drwxr-xr-x    2 bjelline staff   68 Mär  2 09:18 Public
</shell>

Das erste Zeichen zeigt an ob es sich um eine Datei ("-") oder einen Ordner ("d") handelt.
Hier sind es viele Ordner und drei Dateien. Danach folgen Informationen über Zugriffsrechte, und das Datum der
letzten Änderung. 


UNIX Datei-Zugriffsrechte
---------------

Die nächste Abbildung zeigt links die Darstellung der Zugriffsrechte in der Shell, rechts das Verändern der Zugriffsrechte mit 
einer grafischen Oberfläche (hier am Beispiel von Dreamweaver).

![Abbildung 137: UNIX Zugriffsrechte mit Dreamweaver setzen](/images/zugriffsrechte-phpstorm.png)

Es gibt drei Rechte (Lesen, Schreiben, Ausführen) und drei Gruppen von Usern die unterschieden werden (Eigentümer, Gruppe, Andere). 

Die drei Rechte werden als 3 Bits gespeichert und mit den Zeichen `r`, `w`, `x` und `-` dargestellt:
`r` steht immer an erster Stelle, und steht für Lesen, `w` steht immer an zweiter 
Stelle und steht für Schreiben, `x` an dritter Stelle steht für Ausführen. 
Ein `-` in der jeweiligen Position zeigt an, dass ein Recht nicht vergeben ist.

![Abbildung: Darstellung der UNIX Zugriffsrechte in der Kommandozeile](/images/zugriffsrechte-kommandozeile.png)

Für jedes Objekt im Filesystem (egal ob Datei, Ordner, Link, ..) gilt: 
Das Objekt ist einem Account zugeordnet  ("Eigentümer" oder "owner" genannt)  und einer
Gruppe.  In der Abbildung haben die Userin "bjelline" als Besitzerin und
die Gruppe "apache" besondere Zugriffsrechte.  


* "r" oder "-" steht für das "read"-Recht: darf ich diese Datei lesen?
* "w" oder "-" steht für das "write"-Recht: darf ich diese Datei ändern? löschen? eine Datei in diesem Ordner anlegen?
* "x" oder "-" steht für das "execute"-Recht: 
** bei einer Datei: darf ich diese Datei als Programm ausführen?
** bei einem Ordner: darf ich in diesen Ordner hinein?

In der Abbildung hat die Userin "bjelline" die Rechte die Datei **calender.dat** zu lesen und zu verändern.
Alle anderen User (egal ob in der Gruppe "apache" oder nicht) haben nur das Recht zu lesen.
"bjelline" und alle User in der Gruppe "apache" haben das Recht im Ordner **cl_file** Dateien
anzulegen oder zu löschen. Alle anderen User dürfen in den Ordner wechseln und die Dateien
auflisten, aber keine neuen Dateien anlegen.

## Zugriffsrechte setzen mit chmod

<shell>
$ ls -la public_html/index.html 
-rw------- 1 bjelline bjelline 20 Nov  6  2012 public_html/index.html

$ chmod go+r public_html/index.html

$ ls -la public_html/index.html 
-rw-r--r-- 1 bjelline bjelline 20 Nov  6  2012 public_html/index.html
</shell>

<shell>
$ chmod 644 public_html/index.html 
</shell>



## Sticky 

Wenn man das sticky bit am Directory setzt, dann wird
jede Datei die in das Directory kopiert wird automatisch
dem Owner gehören.

<shell>
$ chmod g+s img
</shell>

![Wie man das Stick bit am Directory setzt und Warum](images/kommandozeile/better-permissions-explained.png)
