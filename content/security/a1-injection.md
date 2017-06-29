---
title: Injection
order: 10
---

Die OWASP beschreibt dieses Problem allgemein so:

> Injection-Schwachstellen tauchen auf, wenn eine Anwendung nicht vertrauenswürdige Daten an einen Interpreter weiterleitet. Injection Schwachstellen sind weit verbreitet, besonders in altem Code; sie finden sich in SQL-, LDAP- und XPath-Anfragen, Systembefehlen, Programm-parametern usw.

Wir haben im Kapitel [PHP MYSQL 2 &rarr; Löschen](/php-mysql-2/daten-loeschen/) schon die SQL Injection behandelt.
Zur Verhinderung von SQL-Injection steht uns in PHP die Prepared Statements zur Verfügung:

<php caption="Prepared Statements verhindern SQL Injection">
$query = $dbh->prepare("SELECT * FROM users WHERE id=?");
$query->execute(array( $_GET['pid'] ) );
</php>

Mit dem `prepare` wird das SQL-Statement bereits vor-kompiliert. Die Daten,
die als Input vom User/der Userin kommen werden mit `execute` an die Datenbank
übergeben, können aber nicht mehr als SQL interpretiert werden.

## Prepared Statement mit benannten Platzhaltern

Eine zweite Schreibweise für prepared Statement ist noch besser lesbar: dabei
werden statt der Fragezeichen benannte Platzhalter verwendet:

<php caption="Prepared Statements mit benanntem ">
$stm = $dbh->prepare ( "SELECT * FROM USERS WHERE USERNAME LIKE :name" );
$stm->bindParam(":name", $_POST['name'] );
$stm->execute();
</php>

## OWASP Empfehlungen

Die OWASP empfiehlt:

1. Den Interpreter gänzlich vermeiden, oder
2. Eine Schnittstelle benutzen, die es dem Interpreter erlaubt zwischen Code und Daten zu unterscheiden (z.B., prepared statements, stored procedures in der Datenbank), oder
3. Den Input von der Userin/dem User geeignet codieren bevor er an den Interpreter weiter gegeben wird

Im dritten und schlechtesten Fall ist weiter zu beachten:

* Bei der Validierung des Inputs immer ein ‘white list’ verwenden, also nur Zeichen erlauben die harmlos sind (auf der "weissen Liste" stehen), alle anderen verwerfen

Unabhängig von den oben genannten Punkt gilt noch die Empfehlung:

* Der Web-Applikation nur minimale Zugriffsrechte zur Datenbank gewähren. Damit kann ein eventueller Schaden durch gelungen Injection minimiert werden.


Siehe auch [SQL Injection Prevention Cheat Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)

