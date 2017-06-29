---
title: Lesen aus der Datenbank
order: 20
---

Für die Applikation müssen wir nun auf verschiedene
Arten Daten aus der Datenbank lesen.


Einzelne Daten aus der Datenbank lesen
---------------------------------------
Für die Datei `index.php` müssen wir die Anzahl der Profile und Projekte anzeigen.
Mit der SQL-Funktion `COUNT()` können 
wir die Anzahl der gefundenen Datensätze bestimmen[*](http://www.postgresql.org/docs/current/static/functions-aggregate.html):

<php caption="Beispiel aus index.php">
$sth = $dbh->query("SELECT COUNT(*) AS anzahl FROM users WHERE profile_visible");
$result = $sth->fetch();
$anz_personen = $result->anzahl;
</php>

Hier verwenden wir die Methode `fetch()` des Statement-Handles
um nur einen Datensatz zu lesen.

§

Man könnte all diese Befehle direkt aneinander-ketten (englisch: "to chain"):

<php caption="Beispiel aus index.php">
$anz_personen = $dbh->query("SELECT COUNT(*) AS anzahl FROM users WHERE profile_visible")->fetch()->anzahl;
</php>

Damit spart man sich zwei der drei Variablen, macht aber
die Fehlersuche etwas schwieriger.  


Viele Datensätze lesen
------------------

Für die Datei `personen.php` benötigen wir ein Möglichkeit viele
Daten aus der Datenbank zu lesen. Das geschieht mit einem einfachen `SELECT`:

<php caption="Abfrage der Datenbank mit SELECT">
$sth =$dbh->query(
  "SELECT * FROM person WHERE profile_visible=1 ORDER BY surname LIMIT 500"
);
$personen = $sth->fetchAll();
</php>

Die SQL-Anfrage wird hier als String an die `query()`-Methode des Datenbankhandler
übergeben.  Der Rückgabewert von query ist ein Statement-Handle `$sth` (ähnlich
dem Datenbank-Handle).  Zu diesem Zeitpunkt wurden noch keine Daten von der
Datenbank zu PHP übertragen. 

§

Im Beispiel wird LIMIT verwendet:
`LIMIT anzahl` bzw.
`LIMIT anzahl OFFSET anfangsposition`
wählt aus der Antwort eine Anzahl von Datensätzen aus, beginnt dabei bei
Anfangsposition[*](http://www.postgresql.org/docs/8.1/static/queries-limit.html).

§

In der Datenbank sind Personen, deren Profil nicht angezeigt werden soll, mit
`profile_visible = false` gekennzeichnet. Im SQL-Statement wird sichergestellt, dass
nur sichtbare Profil angezeigt werden. 

§

Das eigentliche Lesen der Daten aus der Datenbank geschieht erst nach dem
`query()` mit der Methode `fetchAll()`[*](http://www.php.net/manual/en/pdostatement.fetchall.php). 
Der Rückgabewert von `fetchAll()` ist ein Array mit Objekten. 
Hier der Output von `print_r($personen)`:

<php caption="Output von print_r($personen)">
Array
(
  [0] => stdClass Object
      (
          [id] => 422
          [firstname] => Hubert jun.
          [surname] => H.
          [email] => mail422@nowhere.not
          [isfemale] => false
          [profile_visible] => true
      )
  [1] => stdClass Object
      (
          [id] => 313
          [firstname] => Marcel
          [surname] => U
          [email] => mail313@nowhere.not
          [isfemale] => false
          [profile_visible] => true
      )
  ...
)
</php>

§

Später werden die Personen dann angezeigt:

<php caption="Anzeige der Personen">
foreach($personen as $person) {
  echo "<li>$person->firstname $person->surname</li>\n";
}
</php>

Das Array `$personen` wird hier mit einer `foreach`-Schleife[*](http://php.net/manual/de/control-structures.foreach.php) abgearbeitet.

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

§

Bei der Ausgabe soll für jede Person ein passender Link zu `person.php` angezeigt werden:

<php caption="Link mit ID als Parameter erzeugen">
<li>
  <b><?php echo $person->firstname ?> <?php echo $person->surname?></b>
  <a href="person.php?id=<?php echo $person->id ?>">mehr</a>
</li>
</php>

Der Output sieht dann zum Beispiel so aus:

<htmlcode caption="Output des letzten PHP-Programmes">
<li>
  <b>Michael A</b>
  <a href="person.php?id=577">mehr</a>
</li>
<li>
  <b>Benjamin A</b>
  <a href="person.php?id=579">mehr</a>
</li>
</htmlcode>

Auf diese Weise haben wir den Parameter `id` an den nächsten Teil
der Applikation weiter gegeben.

§

Wir haben in personen.php nur sichtbare Profile angezeigt,
und auch nur auf sichtbare Profile verlinkt. Das schützt nicht davor, 
dass jemand einfach eine URL mit ganz anderer id „von Hand“ eingibt!

`http://meinedomain.at/person.php?id=666`

Der Zugriffsschutz ist also ein eigenes Thema, das auch in `person.php` wieder
behandelt werden muss.


Einen bestimmten Datensatz lesen
---------------------------------
Wenn Sie die Datei `person.php` mit einem Parameter aufrufen `person.php?id=586`
soll eine bestimmte Person aus der Datenbank angezeigt werden. Dafür wird der
Parameter aus dem `$_GET` – Array ausgelesen und sichergestellt, dass es sich
wirklich um eine Zahl handelt.


Das Ergebnis der Abfrage kann also
sein, dass keine Person gefunden wurde – entweder weil unter diesem Schlüssel
gar keine gespeichert ist, oder weil `profile_visible=false` ist. In diesem Fall
gibt fetch kein Objekt sondern der Wert `FALSE` zurück.

<php caption="Beispiel aus index.php">
$id = $_GET['id'];  // SICHERHEITSPROBEM - behandeln wir später noch!
$stm = $dbh->query("SELECT * FROM users WHERE profile_visible AND id=$id");
$person = $stm->fetch();
if( $person === FALSE ) {
  die("<p>Konnte keine passenden Daten aus der Datenbank lesen.</p>");
}
</php>

§

Die Darstellung der einzelnen Person ist damit noch nicht fertig programmiert:
Die Anzahl der Werke der Person oder eine Liste der Werke fehlen noch.

<php>
if( $person->isfemale ) {
    $anrede = "Frau";
    $ersie  = "Sie";
} else {
    $anrede = "Herr";
    $ersie  = "Er";
}

// ====================== Ausgabe ===================
include "header.php";
?>
<p> 
  <?php echo $anrede ?>
  <?php echo $person->firstname ?>
  <?php echo $person->surname ?>
  hat insgesamt x Werke in dieser Datenbank.
  <?php echo $ersie ?> hat die E-Mail Adresse <?php echo $person->email ?>.
</p>
</php>

Datensätze suchen
-------------------

In der Datei `psuche.php` wird ein Formular zur Suche nach Namen angezeigt:

<htmlcode caption="Such-Formular in psuche.php">
<form action="psuche.php" method="get">
  Suche nach einer Person mit dem Namen <input name="suchwort"> 
  <input type="submit">
</form>
</htmlcode>

Die eigentliche Suche geschieht über das WHERE-Statement  in SQL:

<sql>
... 
WHERE profile_visible=1 
  AND (surname LIKE '%$suchwort%' OR firstname LIKE '%$suchwort%')
</sql>

Wir werden uns später noch genauer mit der Sicherheitsproblematik von
SQL-Statements befassen, die teilweise aus User-Input entstehen. Noch ignorieren
wir die Problematik einfach, und implementieren diese Seite
ganz ähnlich wie `personen.php`.


Zufällige Datensätze auswählen
---------------------

Auf der Homepage index.php sollen wir 10 zufällig ausgewählte Werke
anzeigen.  Wie geht das?

<php caption="Abfrage von zufälligen Datensätzen in Postgres 9.4">
$query =$dbh->query(
  "SELECT * FROM projects WHERE NOT(draft) AND NOT(blocked) ORDER BY RANDOM() LIMIT 10"
);
$personen = $query->fetchAll(PDO::FETCH_OBJ);
</php>

Ab Version 9.5 gibt es eine effizientere Methode mit
`TABLESAMPLE` [*](http://www.postgresql.org/docs/devel/static/sql-select.html#SQL-FROM), 

In anderen relationalen Datenbanken gibt es dafür andere Lösungen.  


### Neue Befehle in diesem Kapitel:

PHP

  * [fetchAll()](http://www.php.net/manual/en/pdostatement.fetchall.php)
  * [foreach](http://php.net/manual/de/control-structures.foreach.php)

Postgres

  * [LIMIT anzahl OFFSET anfangsposition](http://www.postgresql.org/docs/current/static/functions-aggregate.html)
  * [COUNT(*)](http://www.postgresql.org/docs/8.1/static/queries-limit.html)
  * [TABLESAMPLE](http://www.postgresql.org/docs/devel/static/sql-select.html#SQL-FROM)
