---
title: Einfügen
order: 35
---

Hier das einfachste Programm, das ein neues Werk speichert:

<php caption="Einfügen von Daten in die Datenbank - mit Sicherheitsproblem!">
$t = $_POST['title'];
$dbh->query("INSERT INTO projects (title) VALUES ('$t')");
// Beispielcode mit Sicherheitslücke - NICHT verwenden!
</php>

§

Aber was passiert wenn ein Werk den Titel
„That’s it“ haben soll? Dann wird folgendes SQL-Statement ausgeführt:

<sql>
INSERT INTO projects (title) VALUES ('That's it')
</sql>

Das kann nicht funktionieren: das einfache Anführungszeichen beendet den String
und es bleibt `s it` übrig. Die Fehlermeldung von Postgres lautet:

<plain>
ERROR:  syntax error at or near "s"
</plain>

### Die Falsche Lösung

Für dieses Problem gab es in PHP bis Version 5.3.0 eine **einfache** und **falsche** Lösung:

Urspünglich veränderte PHP automatisch alle Daten die über GET, POST und
Cookies hereinkommen: Vor alle Anführungszeichen wird ein Backslash eingefügt.
Aus „That's it“ wird also automatisch „That\\'s it“, das SQL-Statement
funktioniert jetzt für MySQL:

<sql>
INSERT INTO werk (titel) VALUES ('That\'s it')
</sql>

Diese Automatik funktioniert aber leider **nur** für MySQL, 
nicht aber für Postgres. Da müsste es heissen:

<sql>
INSERT INTO werk (titel) VALUES ('That''s it')
</sql>


§

Wenn Sie eine PHP-Version größer als 5.4.0 verwenden, brauchen
Sie sich nicht mehr darum zu kümmern. Bei älteren Versionen 
sollten Sie die `magic_quotes` abschalten:

<code caption="In der Apache Konfiguration: magic quotes abschalten">
php_flag magic_quotes_gpc off
</code>

Mit folgendem Programm können Sie testen, ob auf dem Server magic quotes ein- oder ausgeschalten sind:

<php caption="Testen ob magic quotes eingeschalten sind">
if (get_magic_quotes_gpc() ) {
  echo "mit magic quotes";
} else {
  echo "ohne magic quotes";
}
echo("<pre>");
print_r($_POST);
echo("</pre>");
</php>

### Die Richtige Lösung

Wenn die magic quotes abgeschalten sind, kann man das SQL-Problem besser lösen: mit prepared statements. 

<php caption="Einfügen von Daten in die Datenbank mit prepared statements">

// Variante 1: mySQL + postgreSQL (id-Wert weglassen)
$sth = $dbh->prepare(
  "INSERT INTO users
    (firstname, surname, email, profile_visible)
      VALUES
    (?, ?, ?, ?)");
    
// Variante 2: nur postgreSQL (mit DEFAULT für den autoincrement id-Wert)
$sth = $dbh->prepare(
  "INSERT INTO users
    (id,  firstname,surname,email,profile_visible)
      VALUES
    (DEFAULT, ?, ?, ?, ?)");

// Variante 3: nur MySQL (mit NULL für den autoincrement id-Wert)
$sth = $dbh->prepare(
  "INSERT INTO users
    (id,  firstname,surname,email,profile_visible)
      VALUES
    (NULL, ?, ?, ?, ?)");

$sth->execute(
  array(
    $_POST['firstname'],
    $_POST['surname'],
    $_POST['email'],
    $_POST['profile_visible']
  )
); 

// noch ohne Fehlerbehandlung
</php>

§

Beim Einfügen in die Users-Tabelle kann es leicht zu Problemen kommen: Die
Tabelle verlangt für manche Spalten eine eingabe.

So weit wollen Sie es nicht kommen lassen: Sie sollten die Eingaben aus dem
Webformular schon vor dem INSERT prüfen und dann ausführliche, vollständige,
deutsche Fehlermeldungen ausgeben.

![Fehlermeldung der Datenbank vs. selbst gestaltete Fehlermeldung](/images/2fehlermeldungen.png)

§

Falls das Einfügen der Daten funktioniert hat und in der Tabelle ein
autoincrement-Feld als Primärschlüssel vorhanden ist, kann man den Wert des
Schlüssels im neuen Datensatz mit 
`lastInsertId`[*](http://php.net/manual/en/pdo.lastinsertid.php) 
auslesen und weiter verwenden. 

<php caption="Primärschlüssel des neuen Datensatzes auslesen">
$id = $dbh->lastInsertId();
header("Location: person.php?id=$id");
</php>

Auch hier ist eine Weiterleitung direkt nach dem POST-Request sinnvoll: Nach dem
Einfügen des Datensatzes wird direkt auf die Anzeige des neuen Datensatzes
weitergeleitet. Falls man danach auf „Reload“ drückt, wird der Datensatz zwar neu
angezeigt, aber so verhindert, dass er ein zweites Mal eingefügt wird.

