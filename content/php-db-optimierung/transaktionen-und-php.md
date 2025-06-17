---
title: Transaktionen und PHP
order: 50
---


Die Datenbankschnittstelle `PDO` bietet für den Umgang mit Transaktionen die
Methoden `beginTransaction`, `commit` und `rollback` an.  Wenn die
Datenbank-Verbindung unerwartet geschlossen wird obwohl noch eine Transaktion
offen ist, dann löst PDO selbst das Rollback aus.

<php caption="Beispiel für Transaktion mit Fehlerbehandlung">
try {
  $dbh->beginTransaction();
  $dbh->exec("INSERT INTO staff (id, first, last) VALUES (42, 'Alyssa', 'Hacker')");
  $dbh->exec("INSERT INTO salarychange (id, amount, changedate) VALUES (42, 50000, NOW())");
  $dbh->commit();

} catch (Exception $e) {
  $dbh->rollBack();
  echo "Error: " . $e->getMessage();
}
</php>

Bei einem realen Beispiel würde man nicht die `exec` Methode verwenden,
sondern wahrscheinlich prepared Statements. Aber die generelle Vorgehensweise
bleibt gleich.



