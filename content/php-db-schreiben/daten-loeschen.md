---
title: Löschen
order: 30
---

Das Löschen könnte so einfach sein: Ein Programm mit namen `person_delete.php`,
das als Parameter die `id` der Person erhält, die gelöscht werden soll:

<php caption="Skript person_delete.php mit Sicherheitslücke!">
$id   = $_POST['id'];
$dbh->exec("DELETE FROM users WHERE id=$id" );
// Beispielcode mit Sicherheitslücke - NICHT verwenden!
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
Art von Attacke auf eine Web-Applikation nennt man „SQL Injection“, weil Alyssa
es gschafft hat ihr SQL hinein zu "injiziert".

§

![](/images/unprepared.svg)

Der Server erhält jeweils fertige SQL Queries, er hat keine Chance zu erkennen, dass etwas verdächtiges passiert.

### SQL Injection verhindern - mit Eingabeprüfung

Dieses Problem könnte man vermeiden indem man die Eingabe genau überprüft. In diesem
Beispiel also: nur wenn es sich bei `id` um eine ganze Zahl handelt darf diese
verwendet werde. Das kann man auf verschiedene Arten prüfen,
z.B. mit der Funktion `filter_var`:

<php caption="Eingabeprüfung mit filter_var">
if( ! $id = filter_var( $_GET['id'], FILTER_VALIDATE_INT ) ) {
  echo("Hack detected: Police will arrive shortly.");
  echo("variable id is false!");
  exit;
}
$dbh->exec("DELETE FROM users WHERE id=$id" );
</php>

§

Oft sieht man auch Eingabeprüfungen mit Regular Expressions.
Diese braucht man nur in Fällen wo es keinen fertigen
Filter von `filter_var` gibt - also fast nie.

<php caption="Eingabeprüfung mit Regular Expression">
if( ! preg_match( '/^\d+$/', $id ) ) {
    error_log("hack: $id statt id in person_delete.php.");
    echo("Hack detected. Police will arrive shortly.");
    exit;
}
</php>


### SQL Injection verhindern - mit Prepared Statments

Der zweite, und viel bessers Ansatz, ist die Verwendung von „Prepared Statements“ in der Datenbank.
Dabei wird der SQL-Interpreter der Datenbank gänzlich umgangen.

![](/images/prepared.svg)


Als erster Schritt wird
ein SQL-Statement mit Fragezeichen als Platzhalter an den Datenbank-Server geschickt. Dieses
SQL-Statement wird vom Datenbank-Server sofort geparset und kompiliert. Dabei stellt der
Server fest, welche Datentypen er für jeden Platzhalter braucht.

In einem zweiten Schritt werden die fehlenden Daten gesendet.

Das Schöne daran: die einzufügenden Daten werden binär an den
Datenbankserver übertragen. Nur wenn der Datentyp passt werden sie auch
akzeptiert und verwendet.

§

Der PHP-Befehl für Schritt 1 heißt `prepare`, Schritt zwei heißt `execute`.

<php caption="DELETE mit prepared statement">
$sth = $dbh->prepare("DELETE FROM users WHERE id = ?");
$sth->execute(array($id));
</php>

`execute` kann auch mehrfach ausgeführt werden, das ist effektiver als eine
normale query zu wiederholen.


### Trennung von Code und Daten

Prepared Statments ermöglichen die Trennung von Code und Daten: Als
Programmierer*in schreibe ich den Code und sende ihn mit `prepare` an die
Datenbank.

Was immer die User*innen als Input liefern ist nur noch Daten.
Niemals kann ihr Input als Code missverstanden werden.

Eine solche Trennung wäre in vielen Fällen erstrebenswert: so gibt
es bei LLMs dieselbe [Injection](https://owasp.org/www-community/attacks/PromptInjection) Problematik, aber  keine Möglichkeit
Code und Daten zu trennen.


### SQL Injection gibt es nicht nur bei DELETE

Wir haben diese Attacke am Beispiel einer Löschoperation kennen gelernt.
Aber auch ein einfaches `SELECT` kann mittels SQL Injection missbraucht werden
um zusätzliche Informationen aus der Datenbank auszulesen, die wir nicht
vorgesehen haben.

<php caption="SELECT mit Sicherheitslücke!">
$id   = $_POST['id'];
$dbh->query("SELECT * FROM comments WHERE id=$id");
// Beispielcode mit Sicherheitslücke - NICHT verwenden!
</php>

Die Attacke mit `1=1` ermöglicht das Lesen aller Datensätze aus der Tabelle:

<sql>
SELECT * FROM comments WHERE id=9 OR 1=1
</sql>

§

Aber es gibt auch komplexere Attacken, die Daten aus anderen Tabellen oder
ganz anderen Informationsquellen lesen:

<php caption="verwundbarer code">
$sql = "SELECT id, name FROM cities WHERE name = '$name'";
$dbh->query($sql);
</php>

<shell caption="attacke">
hallo' UNION SELECT id, password FROM users WHERE '' LIKE '%
</shell>

Wird hier eine Query zusammen gebaut, die eine zweite Tabelle ausliest:

<sql>
  SELECT id, name FROM cities WHERE name = 'hallo'
  UNION
  SELECT id, password FROM users WHERE '' LIKE '%'
</sql>

§

Wir hätten also nie `query` verwenden sollen, sondern von Anfang an
immer prepared Statements!

<php caption="sicherer code">
$query = "SELECT id, name FROM cities WHERE name=?";
$sth = $dbh->prepare($query);
$sth->execute( array($name) );
</php>


### Authorisierung nicht vergessen!

Wir haben eine Sicherheitslücke geschlossen, aber es bleibt trotzdem noch viel
zu tun: Löschen, Einfügen, Bearbeiten soll nur nach dem Login möglich sein!


## Weiterführende Literatur

* [OWASP on SQL Injection](https://owasp.org/search/?searchString=SQL_injection)
* [SQL Injection Knowledge Base](http://www.websec.ca/kb/sql_injection)
