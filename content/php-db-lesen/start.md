---
title: PHP und Datenbank
order: 10
---

Mit der Verwendung einer Datenbank wird der Aufruf einer
Webseite noch einmal komplexer: Der Webserver ruft
das PHP-Programm auf, das PHP-Programm schickt eine
Anfrage an die Datenbank.

![Webseite wird von PHP erzeugt, mit DB-Abfrage](/images/php-db.svg)

Ob der Datenbank-Server und der Webserver auf demselben Computer laufen
oder auf verschiedenen Computern, macht für die Programmierung kaum einen Unterschied.

## Datenbank-Schnittstellen

Um von PHP auf die Datenbank zuzugreifen, gibt es verschiedene Schnittstellen.
Hier werden die „PHP Database Objects“ (PDO) vorgestellt, siehe auch
[PDO-Dokumentation](http://php.net/manual/de/book.pdo.php).

### Verbindungsaufbau

So funktioniert der Verbindungsaufbau (und -abbau) zur Postgres-Datenbank:

<php caption="new PDO für den Verbindungsaufbau">
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
</php>

Das erste Argument wird in der [Dokumentation](http://www.php.net/manual/en/pdo.construct.php)
als „Data Source Name“ bezeichnet und enthält mehrere Informationen, die in
einen String gepackt werden.
Das zweite und dritte Argument sind Strings mit
dem Usernamen und Passwort für die Datenbank.

Der Rückgabewert ist ein Objekt der Klasse PDO.

### Data Source Name (DSN)

Zwei Beispiele für einen Postgres-DSN:

- `pgsql:dbname=portfolio_playground;host=localhost`
- `pgsql:dbname=dogs;host=users.ct.fh-salzburg.ac.at`.

Ein DSN beginnt immer mit einem Kürzel für die Datenbank, hier also `pgsql`. In den Beispielen werden dann der Name der Datenbank und der Host, auf dem sie läuft, angegeben. Wenn die Datenbank auf dem Localhost läuft, kann man die Verbindung statt über Host und
Port über den UNIX-Socket aufbauen; den Pfad zum Socket gibt man unter
`unix_socket` an.

Welche Optionen es hier gibt, kann man in der [Dokumentation des jeweiligen PDO-Datenbanktreibers](http://www.php.net/manual/en/ref.pdo-pgsql.connection.php) nachlesen.

### Passwort nicht im Git-Repository

Hier eine konkrete Implementierung des Verbindungsaufbaus:

<php caption="Verbindungsaufbau">
require_once "config.php";
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
</php>

Hier werden die Argumente für `new PDO` in der Datei `config.php` gesetzt,
die zuvor inkludiert wird. Warum?

### Datenbank-Zugangsdaten

So sieht die Datei `config.php` aus (bis auf das Passwort):

<php caption="Zugangsdaten für die Datenbank">
$DB_NAME = "dogs";
$DB_USER = "db1_reader";
$DB_PASS = "****";
$DSN     = "pgsql:dbname=$DB_NAME;host=users.ct.fh-salzburg.ac.at";
</php>

Warum zwei Dateien? Weil wir die Zugangsdaten (Username, Passwort)
niemals, niemals, niemals in Git speichern wollen!

Auf den Code im Repository haben vielleicht viele Leute Zugriff.
Im Extremfall: Wenn wir den Code als „Open Source“ veröffentlichen, ist er ganz öffentlich lesbar. Die Zugangsdaten, insbesondere das Passwort, wollen wir aber weiter geheim halten.

### .gitignore

Um zu verhindern, dass die Datei `config.php` in Git gespeichert werden kann,
wird der Dateiname in die Datei `.gitignore` eingetragen.
`.gitignore` ist einfach eine Textdatei im Hauptverzeichnis des Repositorys.

§

Was der Eintrag in `.gitignore` bewirkt,
zeigt der Vorher-Nachher-Vergleich am besten:

    D:\Webprojekte\wp2>git status

    # On branch main
    # Your branch is ahead of 'origin/main' by 2 commits.
    #
    # Untracked files:
    #   (use "git add <file>..." to include in what will be committed)
    #
    #       config.php
    nothing added to commit but untracked files present (use "git add" to track)

Hier erkennt Git die Datei `config.php` als neue Datei, die wir in Zukunft vielleicht mit `git add` hinzufügen wollen.

§

Nun tragen wir den Dateinamen `config.php` in die Datei `.gitignore` im Hauptordner der Working Copy ein.
Ein Check, ob es funktioniert hat:

    D:\Webprojekte\wp2>cat .gitignore
    *.bak
    config.php

Damit ist Git angewiesen, alle Dateien mit der Endung `.bak` und alle Dateien mit dem Namen
`config.php` (egal in welchem Ordner) zu ignorieren.

§

    D:\Webprojekte\wp2>git status

    # On branch main
    # Your branch is ahead of 'origin/main' by 2 commits.
    #
    # Changed but not updated:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #       modified:   .gitignore
    #
    no changes added to commit (use "git add" and/or "git commit -a")

Wie man sieht, zeigt `git status` nun die Datei `config.php` nicht mehr an.
Dafür hat Git bemerkt, dass die Datei `.gitignore` geändert wurde.
Diese sollte man ganz normal committen.

### Das Datenbank Objekt

Der Rückgabewert von `new PDO` ist ein Objekt der Klasse PDO.

Objekte können in PHP Methoden und Eigenschaften haben, wie in C#.

Die Schreibweise für Methoden und Eigenschaften ist aber wie in C++, nicht wie in C#:

<php caption="Optionen für den Verbindungsaufbau">
require_once "config.php";
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
//
// Aufruf einer Methode
$dbh->methode(...);
//
// Auslesen einer Eigenschaft
echo $dbh->eigenschaft;
//
// Auslesen einer öffentlichen Konstante aus der Klasse PDO
echo PDO::ERRMODE_EXCEPTION;
</php>

Achtung: PDO selbst ist nicht in PHP geschrieben, sondern in C, kann aber von PHP-Programmen aus wie eine PHP Klasse verwendet werden. [Source Code](https://github.com/php/php-src/tree/master/ext/pdo).

### Empfohlene Optionen für den Verbindungsaufbau

In diesem Beispiel wir mit der Methode `setAttribute` noch ein Option nach dem Verbindungsaufbau gesetzt:

<php caption="Optionen für den Verbindungsaufbau">
require_once "config.php";
$dbh = new PDO($DSN, $DB_USER, $DB_PASS);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
</php>

Der „Error Mode“ legt fest, dass Fehler, die bei der Kommunikation
mit der Datenbank auftreten, eine Exception in PHP auslösen.

### Problem beim Verbindungsaufbau

Auch beim Aufbau der Verbindung zu Datenbank kann ein Problem auftreten und eine Exception geworfen werden.

<php caption="Exception Handling in PHP">
    try {
        require_once "config.php";
        $dbh = new PDO($DSN, $DB_USER, $DB_PASS);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (Exception $e) {
        exit("Problem connecting to database $DB_NAME as $DB_USER: " . $e->getMessage());
    }
</php>

### Anweisung an die Datenbank

Manche SQL-Queries liefern keine Daten zurück.
Solche Queries kann man mit der Methode `exec`[\*](http://www.php.net/manual/en/pdo.exec.php) absetzen:

<php caption="Anweisungen an die Datenbank mit exec">
$anzahl = $dbh->exec("DELETE FROM users");
</php>

Hier werden alle Datensätze aus der Tabelle `users` gelöscht.
Der Rückgabewert enthält die Anzahl der betroffenen Datensätze.

### Abfrage der Datenbank

Eine Abfrage aus der Datenbank liefert normalerweise eine ganze Tabelle von Daten (mehrere Datensätze).

Mit der Methode `query`[\*](http://www.php.net/manual/en/pdo.query.php) schickt man die Anfrage an die Datenbank,
erhält aber noch nicht die Daten zurück, sondern nur ein neues „Handle“:

<php caption="Query an die Datenbank senden">
$sth = $dbh->query( $sql );
</php>

Das Argument von `query` ist ein String mit dem SQL, der Rückgabewert
ist ein „Statement-Handle“. Dieses Objekt bietet verschiedene
Methoden an, mit denen man dann wirklich die Daten aus der DB holen kann.


