---
title: PHP und MySQL/MariaDB
order: 10
---

<script>document.location="/php-db-lesen/start/";</script>

Mit der Verwendung einer Datenbank wird der Aufruf einer
Webseite noch einmal komplexer:  der Webserver ruft
das PHP Programm auf, das PHP-Programm schickt eine
Anfrage an die Datenbank.

![Webseite wird von PHP erzeugt, mit DB-Abfrage](/images/php-db.svg)

Ob der Datenbank-Server und der Webserver auf dem selben Computer laufen
oder auf verschiedenen macht für die Programmierung kaum einen Unterschied.


MySQL von PHP aus
------------------

Um von PHP auf die Datenbank zuzugreifen gibt es verschiedene Schnittstellen. 
Hier werden die „PHP Database Objects“ (PDO) vorgestellt, siehe auch
[PDO Dokumentation](http://php.net/manual/de/book.pdo.php).

### Verbindungsaufbau

So funktioniert der Verbindung-Aufbau (und -Abbau) zur mysql-Datenbank:

<php caption="new PDO für den Verbindungs-Aufbau">
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
</php> 

Der Rückgabewert ist ein sogenanntes "Datenbank-Handle".
Das zweite und dritte Argument sind einfach Strings mit
dem Usernamen und Passwort für die Datenbank.

Das erste Argument wird in der [Dokumentation](http://www.php.net/manual/en/pdo.construct.php) 
als "Data Source Name" bezeichnet und enthält mehrere Informationen, die in
einen String gepackt werden.

Ein Beispiel für einen MySQL DSN ist `"mysql:dbname=portfolio_playground;host=localhost"`.
Ein DSN beginnt immer mit dem Namen der Datebank, hier also `mysql`.  Welche
weiteren Teile der DSN anthält kann man in der [Dokumentation des jeweiligen PDO Datenbank Treibers](http://www.php.net/manual/en/ref.pdo-mysql.connection.php) nachlesen.

Für den MySQL Treiber sind das der Name der Datenbank `dbname` und der `host`,
eventuell der `port`.  Alternativ kann man die Verbindung statt über Host und
Port über den UNIX-Socket aufbauen, den Pfad zum Socket gibt man unter
`unix_socket` an.

§

Hier eine konkrete Implementierung des Verbindungs-Aufbaus:

<php caption="Verbindungs-Aufbau">
include "config.php";
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
</php> 

Hier werden die Argumente für `new PDO` in der Datei `config.php` gesetzt,
die zuvor inkludiert wird.  Warum?

### Datenbank-Zugangsdaten 

So sieht die Datei `config.php` aus:

<php caption="Zugangsdaten für die Datenbank">
$DB_NAME = "portfolio_playground"; 
$DB_USER = "mmtuser"; 
$DB_PASS = "geheim!";
$DSN     = "mysql:dbname=$DB_NAME;host=localhost";
</php>

Warum zwei Dateien?  Weil wir die Zugangsdaten (Username, Passwort)
niemals, niemals, niemals in git speichern wollen!  Das hat zwei
Gründe: 

1) Einerseits wollen wir den Code im Repository vielleicht
veröffentlichen und die Zugangsdaten weiter geheimhalten.  

2) Andererseits wird unsere Web-Applikation wahrscheinlich auf mehreren Web-Servern
installiert (mindestens auf einem Entwicklungs-Rechner und einem Produktions-Server).
Auf den verschiedenen Maschinen werden wir verschiedene Datenbanken benutzen 
und brauchen dafür verschiedene Zugangsdaten. 

### .gitignore

Um zu verhindern, dass die Datei `config.php` in git committed werden kann,
wird der Dateiname in die Datei `.gitignore` eingetragen. 
`.gitignore` ist einfach eine Text-Datei im Hauptverzeichnis der Working Copy.

§

Was der Eintrag in  `.gitignore` bewirkt
zeigt der Vorher / Nachher-Vergleich am besten:

    D:\Webprojekte\wp2>git status

    # On branch master
    # Your branch is ahead of 'origin/master' by 2 commits.
    #
    # Untracked files:
    #   (use "git add <file>..." to include in what will be committed)
    #
    #       config.php
    nothing added to commit but untracked files present (use "git add" to track)

Hier erkennt git die datei `config.php` als neue Datei, die wir in Zukunft vielleicht mit `git add` hinzufügen wollen. 

§

Nun tragen wir den Dateinamen `config.php` in die Datei `.gitignore` im Haupt-Ordner der Working Copy ein.
Ein Check ob es funktioniert hat:

    D:\Webprojekte\wp2>cat .gitignore
    *.bak
    config.php

Damit ist git angewiesen, alle Dateien mit der Endung `.bak` und alle Dateien mit dem Namen 
`config.php` (egal in welchem Ordner) zu ignorieren. 

§

    D:\Webprojekte\wp2>git status

    # On branch master
    # Your branch is ahead of 'origin/master' by 2 commits.
    #
    # Changed but not updated:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #       modified:   .gitignore
    #
    no changes added to commit (use "git add" and/or "git commit -a")

Wie man sieht zeigt `git status` nun die Datei `config.php` nicht mehr an. 
Dafür hat git bemerkt dass die Datei `.gitignore` geändert wurde. 
Die sollte man ganz normal committen.

### Empfohlene Optionen für den Verbindungsaufbau

In folgenden Code werden noch zwei Optionen nach dem Verbindungsaufbau gesetzt:

<php caption="Optionen für den Verbindungs-Aufbau">
include "config.php";
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
$dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
$dbh->exec('SET CHARACTER SET utf8') ;
</php>

Mit der Methode `setAttribute` wird hier festgelegt,
dass die gelesenen Datensätze aus der Datenbank in PHP als
Objekt dargestellt werden. (Die Alternative wäre ein assoziatives Array.)

Mit dem Befehl `SET CHARACTER SET utf8` wird UTF-8 als
Zeichensatz für die gelesenen Text-Daten festgelegt.  Das
macht natürlich nur Sinn, wenn die Daten in der Datenbank
wirklich als UTF-8 gespeichert sind!

Für die Applikation die in den nächsten 2 Kapitel beschrieben wird
werden diese Optionen vorausgesetzt.

### Anweisung an die Datenbank

Manche SQL-Queries liefern keine Daten retour.
Solche Queries kann man mit der Methode `exec`[*](http://www.php.net/manual/en/pdo.exec.php) absetzen:

<php caption="Anweisungen an die Datenbank mit exec">
$anzahl = $dbh->exec("DELETE FROM users");
</php>

Hier werden alle Datensätze aus der Tabelle `users` gelöscht.
Der Rückgabewert enthält die Anzahl der betroffenen Datensätze.

### Abfrage der Datenbank

Eine Abfrage aus der Datenbank liefert normalerweise eine ganze Tabelle von Daten (mehrere Datensätze). 


Mit der Methode `query`[*](http://www.php.net/manual/en/pdo.query.php)  schickt man die Anfrage an die Datenbank,
erhält aber noch nicht die Daten retour, sondern nur ein neues "Handle":

<php caption="Query an die Datenbank senden">
$sth =$dbh->query( $sql );
</php>

Das Argument ist ein String mit dem SQL, der Rückgabewert
ist ein "Statement-Handle". Dieses Objekt bietet verschiedene
Methoden an, mit denen man dann wirklich die Daten aus der DB holen kann.

Doch bevor wir hier ins Detail gehen werden wir uns
im nächsten Kapitel die Struktur einer Beispiel-Applikation ansehen.
