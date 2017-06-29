---
title: Löschen
order: 30
---

<script>document.location="/php-db-schreiben/daten-loeschen/";</script>

Das Löschen könnte so einfach sein: Ein Programm mit namen `person_delete.php`,
das als Parameter die `id` der Person erhält, die gelöscht werden soll:

<php caption="Skript person_delete.php mit Sicherheitslücke!">
$id   = $_POST['id'];
$dbh->exec("DELETE FROM users WHERE id=$id" );  
// NICHT so implementieren!
</php>

§

Dieses Programm ist anfällig für folgende Attacke. Alyssa P. Hacker (eine fiktive Hackerin) 
benützt nicht das HTML-Formular unserer Applikation, sondern schreibt selbst ein Formular.
In dem Formular setzt sie den Parameter `id` auf Wert `9 OR 1=1`.

<htmlcode caption="Formular für die Attacke auf das Skript person_delete.php">
<form method="post" 
      action="http://somedomain.at/person_delete.php">
    <input type="hidden" value="9 OR 1=1" name="id"/>
    <input type="submit" value="del all"/>
</form>
</htmlcode>

§

Das führt dazu, dass folgendes SQL-Statement ausgeführt wird:

<sql>
DELETE FROM users WHERE id=9 OR 1=1
</sql>

Und dieses Statement löscht nicht einen Datensatz sondern alle Datensätze. Diese
Art von Attacke auf eine Web-Applikation nennt man „SQL Injection“, weil in
das SQL etwas "injiziert" wird.

### SQL Injection verhindern
Dieses Problem kann vermeiden indem man die Eingabe genau überprüft. In diesem
Beispiel also: nur wenn es sich bei `id` um eine ganze Zahl handelt, darf sie
verwendet werden. Das kann man auf verschiedene Arten prüfen, 
z.B. mit der Funktion `filter_var`: 

<php caption="Eingabeprüfung mit filter_var">
if( ! $id = filter_var( $_GET['id'], FILTER_VALIDATE_INT ) ) {
  echo("Hack detected: Police will arrive shortly.");
  echo("variable id is false!");
  exit;
}
</php>

§

Oft sieht man auch Eingabeprüfungen mit Regular Expressions - die müssen Sie noch nicht verstehen:

<php caption="Eingabeprüfung mit Regular Expression">
if( ! preg_match( '/^\d+$/', $id ) ) {
    error_log("hack: $id statt id in person_delete.php.");
    echo("Hack detected. Police will arrive shortly.");
    exit;
}
</php>

§

Der zweite Ansatz ist die Verwendung von „Prepared Statements“ in der Datenbank.
Dabei wird der SQL-Interpreter der Datenbank gänzlich umgangen. 

Als erster Schritt wird mit `prepare`[*](http://www.php.net/manual/en/pdo.prepare.php) 
ein SQL-Statement mit Fragenzeichen als Platzhalter vorbereitet. Dieses
SQL-Statement wird vom Datenbank-Server sofort geparset und compiliert. 

Mit `execute`[*](http://www.php.net/manual/en/pdostatement.execute.php) 
wird das Statement ausgeführt, dabei werden die Platzhalter durch echte Daten
ersetzt.  Das Schöne daran: es wird dabei nicht mehr ein SQL-Statement als
String gebaut, sondern die einzufügenden Daten werden binär an den
Datenbankserver übertragen. Darin enthaltene SQL-Fragement können keinen Schaden
anrichten.

§

<php caption="DELETE mit prepared statement">
$sth = $dbh->prepare("DELETE FROM users WHERE id = ?");
$sth->execute(array($id));
</php>

`execute` kann auch mehrfach ausgeführt werden, das ist effektiver als eine
normale query zu wiederholen.

### Authorisierung nicht vergessen!

Wir haben eine Sicherheitslücke geschlossen, aber es bleibt trotzdem noch viel
zu tun: Löschen, Einfügen, Bearbeiten soll nur nach dem Login möglich sein!

