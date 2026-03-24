---
title: Umgebungsvariable PATH
order: 21
---

Ich tippe in eine Kommandozeile `createdb hoteldb` ein, und erwarte, dass ein bestimmtes Programm gestartet wird. In diesem Beispiel gehört das Programm `createdb` zur Datenbank Postgres, und ich verwende es um eine neue Datenbank namens `hoteldb` zu erstellen.

Statt dessen erhalte ich eine Fehlermeldung:

![](/images/kommandozeile/nicht-gefunden.png)


## Welches Programm wird gestartet?

Wie geht die Kommandozeile vor, wenn sie ein Programm `createdb` starten soll?

Dazu wird die Umgebungsvariable PATH gelesen und analysiert. Diese Variable enthält einen langen String, hier ein paar Beispiele:

```
/Users/bjelline/.composer/vendor/bin/:/opt/homebrew/opt/postgresql@17/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/usr/local/share/dotnet:/Users/bjelline/.cargo/bin:/Applications/iTerm.app/Contents/Resources/utilities:/Users/bjelline/bin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin/
```

Dieses Beispiel stammt von einem Mac und enthält viele Pfad-Angaben. Auf Mac und Linux wird der  Doppelpunkt als Trennzeichen verwendet.

```
C:\Windows\system32;C:\Windows;C:\Program Files\Git\cmd;C:\Program Files\dotnet\;C:\ProgramData\chocolatey\bin;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\php;C:\Users\bjelline\AppData\Local\Programs\Microsoft VS Code\bin
```

Dieses Beispiel stammt von einem Windows Computer und enthält viele Pfad-Angaben. Auf Windows wird das Semikolon als Trennzeichen verwendet.



Auf beiden Systemen geht die Kommandozeile auf der Suche nach dem Programm `createdb` gleich vor: sie sucht im ersten angegebenen Ordner nach ausführbaren Dateien mit den Namen `createdb` (auf Windows auch nach `createdb.exe` oder `createdb.bat`). Falls sie im ersten Ordner nichts findet geht die Suche im 2.Ordner weiter.

Das erste passendes Programm, das gefunden wird, wird es gestartet.

Falls keines gefunden wird, wird eine Fehlermeldung ausgegeben.

Hinweis: Wenn ich zwei verschiedene Programm-Versionen installiert habe entscheidet die Reihenfolge im PATH welches Programm gestartet wird!


## Wie setzt man die PATH Variable unter Windows

Hier ein Beispiel auf Windows 11:


![](/images/kommandozeile/path-setzen-windows.png)


1. Schritt: herausfinden, wo das Programm, das ich starten will wirklich gespeichert ist. Dazu wird hier Windows Explorer verwendet. Ich habe die Datei `createdb.exe` im Ordner `bin` gefunden.
2. Schritt: den vollständigen Pfad des Ordners `bin` herausfinden. Dazu klicke ich in die Adresszeile, dann wird der Pfad angezeigt. Mit STRG-C kopiere ich den Pfad
3. Schritt: In den Einstellungen das Fenster "Umgebungsvariablen" starten
4. Schritt: im unteren Teil, bei den Systemvariablen, auf die Zeile mit `Path` klicken und dann auf den bearbeitet-Button
5. Schritt: Im Fenter "Umgebungsvariablen bearbeiten" auf den Button "Neu" klicken
6. Schritt: in die neue Zeile den Pfad einfügen mit STRG-V und das Fenster mit "OK" schließen
7. Schritt: eine neue Kommandozeile aufmachen - nur im neuen Fenster wir der Befehl `createdb` nun funktionieren



## Wie setzt man die PATH Variable auf Mac oder Linux

Dazu muss man wissen welche Shell man benutzt. das findet man mit dem Befehl `ps` heraus, da werden die laufenden Prozesse angezeigt. Auf Mac ist die Shell wahrscheinlich `bash` oder `zsh`, auf linux gibt es noch mehr gängige Optionen.

Jede Shell hat eine eigene Datei mit erstem Buchstaben `.` und letzten Buchstaben `rc`. Also z.B. `.bashrc` oder `.zshrc` u.s.w.

Die Datei wird beim Start der Shell ausgeführt. Hier fügt man einen Befehl ein um den Path zu ändern.

1. Schritt: herausfinden wo das Programm liegt, das man starten will.  z.B. ich habe gerade VS Code auf meinem Mac installiert, und will das Programm auf der Kommandozeile starten können.
2. Schritt: Start-Datei der Shell editieren.  Ich füge mit meinem Editor in die Datei `.zshrc` ein: `export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/:$PATH"`
3. Schritt: eine neue Shell starten, z.B. indem man ein neues Terminal-Fenster öffent. Erst in der neuen Shell wirkt der neue Wert von PATH


## Überblick Windows vs. Mac/Linux


|                   | Windows                   | macOS / Linux                           |
|-------------------|---------------------------|-----------------------------------------|
| Trennzeichen      | Semikolon `;`             | Doppelpunkt `:`                         |
| Variable aufrufen | `%PATH%`                  | `$PATH`                                 |
| Variable setzen (permanent)     | Systemeigenschaften / GUI | Shell-Konfigurationsdatei (z.B. `.zshrc`) |
| Variable setzen (temporär) | `set PATH=...`              | `export PATH=...`                         |
{: class="table table-condensed table-bordered" style="width:auto"}



## Umgebungsvariablen

Die Variable PATH ist nur ein Beispiel für eine Umgebungsvariable. Diese Variablen kann ich global oder für ein einzelne Session setzen, sie stehen dann den Programmen dich dort gestartet werden zur Verfügung.

Beispiele für Umgebungsvariablen:

* PATH - hier schon ausführlich beschrieben: wo werden ausführbare Programme gesucht
* LANG - konfiguriert die Sprache und Zeichenkodierung der Ausgabe, z.b. LANG=de_AT.UTF-8
* PATHEXT - nur Windows: Endungen von ausführbaren Programmen,  z.B.  `.COM;.EXE;.BAT;.CMD`


## Weiter Anwendungsgebiete

Du wirst Umgebungsvariablen und PATH in vielen Anwendungfällen brauchen, nicht nur wie hier im Beispiel beim verwenden einer Datenbank.
Zwei Beispiele:

* Beim builden von C++ Projekten werden Umgebungsvariablen verwendet um die richtigen Libraries einzubinden
* Beim Betrieb von Web Applikationen werden Umgebungsvariablen für die Konfiguration verwendet
* [Weitere Beispiele mit Linux](https://wiki.ubuntuusers.de/Umgebungsvariable/typische_Anwendungsf%C3%A4lle/)
* [Umgebungsvariablen im Andriod Game Development](https://developer.android.com/games/agde/quickstart?hl=de)
