---
title: Effizient Arbeiten mit der DB
order: 30
---

Ein wichtiges Grundprinzip beim Programmieren mit Datenbanken: Das Filtern
und Berechnen der Daten möglichst in der Datenbank erledigen und möglichst
wenige Daten zu PHP übermitteln.

### Filtern in der Datenbank

Folgender Ansatz ist also ineffizent,
besonders wenn viele Daten in der Datenbank gespeichert sind:

<php caption="Ineffiziente Abfrage der Datenbank">
$sth = $dbh->query("SELECT * FROM person");  // SO NICHT!
$personen = $sth->fetchAll();
foreach( $personen as $person ) {
  if ( $person->profile_visible ) {
    echo "$person->firstname $person->email</br>\n";
  }
}
</php>

§

Besser wäre, den Filter bereits im SELECT einzubauen:

<php caption="Effiziente Abfrage der Datenbank">
$sth = $dbh->query(
  "SELECT * FROM person WHERE profile_visible=1"
);
$personen = $sth->fetchAll();
foreach( $personen as $person ) {
  echo "$person->firstname $person->email</br>\n";
}
</php>

### Seitenweise Anzeigen

Die gleichen Überlegungen gelten auch, wenn Datensätze "seitenweise" angezeigt
werden sollen: hier verwendet man bereits in der Datenbank `LIMIT` um nur
die benötigten Datensätze zu laden.

### Datentypen der Datenbank

Die Verwendung der richtigen Datentypen in der Datenbank erleichtert die
Abfragen.  Zum Beipiel zum Speichern eines Datums sollte man den Typ `DATE` oder
`TIMESTAMP` verwenden.  Das ermöglicht das Sortieren nach Datum und  Berechnungen wie
„falls Datum nicht älter als 100 Tage ist“

<sql>
SELECT
  title,
  publicationdate,
  (current_date - publicationdate) AS age
FROM projects where
  (current_date - publicationdate) BETWEEN 0 AND 100
  AND NOT(draft)
ORDER BY publicationdate DESC;
</sql>

Diese SQL-Abfage zeigt Titel und Publikations-Datum aller Werke die in den
letzten 100 Tagen publiziert wurden.  Hätte man das Datum nur
als String in der Datenbank gespeichert, dann wäre das sehr viel umständlicher.


