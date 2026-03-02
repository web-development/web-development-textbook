---
title: Lesen aus der Datenbank
order: 20
---

In folgenden PHP-Beispielen wird eine Datenbank mit den Tabellen `users` und `projects` verwendet.



Viele Datensätze lesen
------------------

So kann mein ein einfaches `SELECT` von PHP aus absetzten. Als Antwort erhält man von der Datenbank eine ganze Tabelle an Werten: mehrere Zeilen (hier: Personen) mit mehreren Spalten (hier: die verscheidenen Eigenschaften der Person)

<php>
$sth =$dbh->query(
  "SELECT * FROM users WHERE profile_visible ORDER BY surname LIMIT 500"
);
$users = $sth->fetchAll();
</php>

Die SQL-Anfrage wird hier als String an die `query()`-Methode des Datenbankhandler
übergeben.

Der Rückgabewert von query ist ein Statement-Handle `$sth` (ähnlich
dem Datenbank-Handle).

Erst beim Aufruf von `fetchAll()` werden die Daten von der
Datenbank geladen.

Datensatz in PHP verwenden
------------------

<php>
$sth =$dbh->query(
  "SELECT * FROM users WHERE profile_visible ORDER BY surname LIMIT 500"
);
$users = $sth->fetchAll();

echo "Der erste User heisst $users[0][2]"
</php>

`$users` enthält nun ein Array aller Datensätze, jeder
Datensatz ist wieder ein Array.

Datenstruktur mit PHP ausgeben
--------

Mit dem Befehl `print_r` kann man die gesamte Datenstruktur auf einmal ausgeben - das ist nur fürs debuggen geeignet, nicht für Enduser:

<php>
<pre><?php print_r($users) ?></pre>
</php>

![](/images/php-db-lesen/fetchall.png)


Jeder Datensatz enthält also die Werte zweimal: einmal unter einem numerischen index 0,1,2... und einmal unter dem Namen der Datenbank-Spalte.


Schleife über die Datensätze
--------

Mit der `foreach` Schleife kann man ein Array abarbeiten. Nach dem Schlüsselwort `as` gibt man die Schleifenvariable an, die bei jedem Durchlauf auf eine anderen Eintrag des Arrays gesetzt wird.

<php>
foreach( $users as $user ) {
  // gib Vorname und Nachname aus
  echo "<h2>$user[1] $user[2]</h2>";
}
</php>

§

Falls man den Index auch anzeigen will, kann man die ausführlichere Version
der `foreach` Schleife verwenden:

<php caption="Foreach-Schleife mit index">
foreach($personen as $i => $person) {
  echo "<li>Person Nr. $i) $person->firstname $person->surname</li>\n";
}
</php>

Achtung: `$i`  ist hier der Index im Array das `fetchAll()` erzeugt
hat, es ist nicht der Primary Key aus der Datenbank!  Den würde man
mit `$person->id` erhalten!



Datensätze Anders darstellen
-----------

Bei der "Übersetzung" von Datensätzen zu PHP Datenstrukturen gibt es mehrere Möglichkeiten. Wir können direkt bei fetchAll eine Option angeben.


### Array mit Zahlen-Index

<php>
$sth =$dbh->query(
  "SELECT * FROM users WHERE profile_visible ORDER BY lastname LIMIT 500"
);
$users = $sth->fetchAll(PDO::FETCH_NUM);

echo "Der erste User heisst $users[0][2]"
</php>

### Array mit String-Index

Mit der Option `PDO::FETCH_ASSOC` erhalten wir die Datensätze als Array, aber der Index ist kein Integer, sondern ein String: jeweils der Name der Tabellen-Spalten entsprechen.

Der Zugriff erfolgt mit eckigen Klammern, wie bei jedem Array: `$users[0]['firstname'];`

Bei der Verwendung innerhalb eines Strings gibt es aber Probleme: `"Der Vorname ist $users[0]['firstname']"` funktioniert nicht. Hier braucht man extra geschwungene Klammern rund um die Variable im String.


<php>
$sth =$dbh->query(
  "SELECT * FROM users WHERE profile_visible ORDER BY lastname LIMIT 500"
);
$users = $sth->fetchAll(PDO::FETCH_ASSOC);

foreach( $users as $user ) {
  echo "<h2>{$user['firstname']} {$user['lastname']}</h2>";
}
</php>


### Objekte

Mit der Option `PDO::FETCH_OBJ` erhalten wir die Datensätze als Objekte.
Die Objekte gehören zur Klasse `stdClass`, haben keine Methoden und haben genau die Eigenschaften die den Tabellen-Spalten entsprechen.

<php>
$sth =$dbh->query(
  "SELECT * FROM users WHERE profile_visible ORDER BY lastname LIMIT 500"
);
$users = $sth->fetchAll(PDO::FETCH_OBJ);

foreach( $users as $user ) {
  echo "<h2>$user->firstname $user->lastname</h2>";
}
</php>


### Fetch-Option festlegen

Wenn man sich für einen Modus entschieden hat, kann man diesen gleich beim
Verbindungsaufbau festlegen:

<php>
$dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
</php>



Einzelne Werte aus der Datenbank lesen
---------------------------------------

Mit der SQL-Funktion `COUNT()` können
wir die Anzahl der gefundenen Datensätze bestimmen[*](http://www.postgresql.org/docs/current/static/functions-aggregate.html). Wir wollen also nur einen einzigen Wert aus der Datenbank laden.

Trotzdem brauchen wir mehrere Schritte:

<php>
$sth = $dbh->query("SELECT COUNT(*) AS anzahl FROM users WHERE profile_visible");
$result = $sth->fetchAll(PDO::FETCH_OBJ);
$anz_personen = $result[0]->anzahl;
</php>

Hier wurde in SQL mit `AS` eine neue "Spalte" namens `anzahl` erzeugt. Diese ist dann in PHP auch unter diesem Namen zugänglich.


Befehle Verketten
------------

Man könnte all diese Befehle direkt aneinander-ketten (englisch: "to chain"):

<php>
$anz_personen = $dbh->query("SELECT COUNT(*) AS anzahl FROM users WHERE profile_visible")->fetchAll(PDO::FETCH_OBJ)[0]->anzahl;
</php>

Damit spart man sich Variablen, macht aber
die Fehlersuche etwas schwieriger.



Sehr viele Datensätze lesen
------------------

Das Laden der Datensätze aus der Datenbank braucht Zeit. Wenn es Millionen von Datensätzen sind kann das zum Problem werden. In dieser SQL Abfrage wird damit schon gut umgegangen:

<php>
$sth =$dbh->query(
  "SELECT * FROM person WHERE profile_visible=1 ORDER BY surname LIMIT 500"
);
$personen = $sth->fetchAll();
</php>


### Anzahl Beschränken

Im Beispiel wird LIMIT verwendet:
`LIMIT anzahl` bzw.
`LIMIT anzahl OFFSET anfangsposition`
wählt aus der Antwort eine Anzahl von Datensätzen aus, beginnt dabei bei
Anfangsposition[*](http://www.postgresql.org/docs/8.1/static/queries-limit.html).

### In der Datenbank filtern

In der Datenbank sind Personen, deren Profil nicht angezeigt werden soll, mit
`profile_visible = false` gekennzeichnet. Im SQL-Statement wird sicher gestellt, dass
nur sichtbare Profil angezeigt werden.




Zufällige Datensätze auswählen
---------------------

Wie kann man zufällige Datensätze auswählen?

<php caption="Abfrage von 10 zufälligen Datensätzen in einer großen Tabelle">
$query =$dbh->query(
  "SELECT * FROM users
    TABLESAMPLE BERNOULLI (1)
    WHERE profile_visible
    ORDER BY lastname
    LIMIT 10;"
);
$personen = $query->fetchAll(PDO::FETCH_OBJ);
</php>

Für sehr kleine Tabellen funktioniert diese Methode besser:

<php caption="Abfrage von 3 zufälligen Datensätzen in einer kleinen Tabelle">
$query =$dbh->query(
  "SELECT * FROM users
    ORDER BY RANDOM()
    LIMIT 3;"
);
$personen = $query->fetchAll(PDO::FETCH_OBJ);
</php>


### Neue Befehle in diesem Kapitel:

PHP

  * [fetchAll()](http://www.php.net/manual/en/pdostatement.fetchall.php)
  * [foreach](http://php.net/manual/de/control-structures.foreach.php)

Postgres

  * [LIMIT anzahl OFFSET anfangsposition](http://www.postgresql.org/docs/current/static/functions-aggregate.html)
  * [COUNT(*)](http://www.postgresql.org/docs/8.1/static/queries-limit.html)
  * [RANDOM()](https://www.postgresql.org/docs/17/functions-math.html#FUNCTIONS-MATH-RANDOM-TABLE)
  * [TABLESAMPLE](http://www.postgresql.org/docs/devel/static/sql-select.html#SQL-FROM)
