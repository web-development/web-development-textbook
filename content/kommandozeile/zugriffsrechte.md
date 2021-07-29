---
title: Zugriffsrechte
order: 40
---

Die meisten Webserver werden auf UNIX-Systemen betrieben.
Das UNIX-Filesystem unterscheidet sich in einigen wichtigen
Punkten von den Filesystemen von Windows (und Mac OS X), die
sie vielleicht besser kennen.


### Informationen über Zugriffsrechte anzeigen

In der UNIX Kommandozeil füren die Optionen **-l** und **-a** beim Befehl **ls** dazu,
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

Es gibt drei Rechte (Lesen, Schreiben, Ausführen) und drei Gruppen von Usern die unterschieden werden: EigentümerIn, Gruppe, Andere.

Die drei Rechte werden als 3 Bits gespeichert und mit den Zeichen `r`, `w`, `x` und `-` dargestellt:
`r` steht immer an erster Stelle, und steht für Lesen, `w` steht immer an zweiter
Stelle und steht für Schreiben, `x` an dritter Stelle steht für Ausführen.
Ein `-` in der jeweiligen Position zeigt an, dass ein Recht nicht vergeben ist.

![Abbildung: Darstellung der UNIX Zugriffsrechte in der Kommandozeile](/images/zugriffsrechte-kommandozeile.png)

Für jedes Objekt im Filesystem (egal ob Datei, Ordner, Link, ..) gilt:
Das Objekt ist einem Account zugeordnet  ("EigentümerIn" oder "owner" genannt)  und einer
Gruppe.  In der Abbildung haben die Userin "bjelline" als Besitzerin und
die Gruppe "www-data" besondere Zugriffsrechte.


* "r" oder "-" steht für das "read"-Recht: darf ich diese Datei lesen?
* "w" oder "-" steht für das "write"-Recht: darf ich diese Datei ändern? löschen? eine Datei in diesem Ordner anlegen?
* "x" oder "-" steht für das "execute"-Recht:
** bei einer Datei: darf ich diese Datei als Programm ausführen?
** bei einem Ordner: darf ich in diesen Ordner hinein?

In der Abbildung hat die Userin "bjelline" die Rechte die Datei **index.php** zu lesen und zu verändern.
Alle anderen User (egal ob in der Gruppe "www-data" oder nicht) haben nur das Recht zu lesen.
"bjelline" und alle User in der Gruppe "www-data" haben das Recht im Ordner **img** Dateien
anzulegen oder zu löschen. Alle anderen User dürfen gar nichts. 

## Zugriffsrechte setzen mit chmod

Das funktionert auf zwei Arten: mit Buchstaben-Codes und
oder mit 3 Oktalzahlen.

`go+r` heisst: der Gruppe und dem Owner gibt das recht zum Schreiben (read).

<shell>
$ ls -la webspace_mmt/index.html
-rw------- 1 bjelline bjelline 20 Nov  6  2012 webspace_mmt/index.html

$ chmod go+r webspace_mmt/index.html

$ ls -la webspace_mmt/index.html
-rw-r--r-- 1 bjelline bjelline 20 Nov  6  2012 webspace_mmt/index.html
</shell>

Die Oktalzahl 664 in die Rechte umzurechner bleibt als Rätsel:

<shell>
$ chmod 644 webspace_mmt/index.html
</shell>



## Sticky

Wenn man das sticky bit für die Gruppe am Directory setzt, dann wird
jede neu Datei im Directory automatisch in diese Gruppe eingeordnet:

<shell>
$ chmod g+s img
</shell>

![Wie man das Stick bit am Directory setzt und Warum](/images/kommandozeile/better-permissions-explained.png)

## Mac OS Zugriffsrechte


Ein Beispiel:

<shell>
$ cp Anna_* ~/Desktop/
cp: Anna_2.docx: Permission denied
</shell>

Aber die UNIX Zugriffsrechte sind richtig gesetzt und sollten das Kopieren erlauben:

<shell>
$ ls -la Anna*
-rw-r--r--@ 1 bjelline  staff  17543 27 Jul 17:05 Anna.docx
-rw-r--r--@ 1 bjelline  staff  17250 27 Jul 17:02 Anna_2.docx
</shell>

Im Dateisystem von Mac OS gibt es noch eine zusätzliche Art von Zugriffsrechten
in den "extended Attributes". Dass solche Attribute gesetzt sind erkennt man
am Klammeraffen:


Mit der Option `-@l` kann man die Attribute anzeigen:


<shell>
$ ls -@ -la Anna*
-rw-r--r--@ 1 bjelline  staff  17543 27 Jul 17:05 Anna.docx
	com.apple.fileutil.PlaceholderData	  336
	com.apple.lastuseddate#PS	   16
	com.apple.metadata:_kMDItemUserTags	   42
	com.apple.metadata:kMDLabel_6mmcialpolbpyehsoppii7wuii	   89
	com.apple.quarantine	   29
-rwxr--r--@ 1 bjelline  staff  17250 27 Jul 17:02 Anna_2.docx
	com.apple.LaunchServices.OpenWith	  118
	com.apple.fileutil.PlaceholderData	  336
	com.apple.lastuseddate#PS	   16
	com.apple.metadata:com_apple_backup_excludeItem	   61
	com.microsoft.OneDrive.RecallOnOpen	    0
</shell>

Mit dem Befehl `xattr -l` kann man den Inhalt der Attribute anzeigen lassen - das
wird aber sehr umfangreich.  Hier nur ein Ausschnitt:

<shell>
$ xattr -l Anna*
...
Anna_2.docx: com.apple.LaunchServices.OpenWith:
00000000  62 70 6C 69 73 74 30 30 D2 01 02 03 04 5F 10 10  |bplist00....._..|
00000010  62 75 6E 64 6C 65 69 64 65 6E 74 69 66 69 65 72  |bundleidentifier|
00000020  57 76 65 72 73 69 6F 6E 5F 10 24 63 6F 6D 2E 6D  |Wversion_.$com.m|
00000030  69 63 72 6F 73 6F 66 74 2E 4F 6E 65 44 72 69 76  |icrosoft.OneDriv|
00000040  65 2E 44 6F 77 6E 6C 6F 61 64 41 6E 64 47 6F 10  |e.DownloadAndGo.|
00000050  00 08 0D 20 28 4F 00 00 00 00 00 00 01 01 00 00  |... (O..........|
00000060  00 00 00 00 00 05 00 00 00 00 00 00 00 00 00 00  |................|
00000070  00 00 00 00 00 51                                |.....Q|
00000076
...
</shell>

Und hier ist auch die Lösung des Problems: Um die Datei Anna_2.docx zu öffnen soll
man das Programm `com.microsoft.OneDrive.DownloadAndGo` verwenden.
Im Finder sieht das so aus:


![Darstellung von Dateien im OneDrive im Finder](/images/kommandozeile/onedrive.png)

Aha, diese Datei ist gar nicht da, sondern muss erst aus der Cloud geladen werden.
Das kann man im Finder mit Rechtsklick aktivieren:

![OneDrive Datei soll aus der Cloud geladen werden](/images/kommandozeile/notcloud.png)

Dann ist die Datei lokal:

![Darstellung von Dateien im OneDrive im Finder](/images/kommandozeile/cloudonedrive.png)

Und es klappt auf der Kommandozeile mit dem Kopieren:

<shell>
$ cp Anna_* ~/Desktop/
</shell>

Wenn man ein Attribut ganz entfernen will geht das mit `xattr -d`:


<shell>
$ sudo xattr -d com.apple.quarantine Anna_*
</shell>
