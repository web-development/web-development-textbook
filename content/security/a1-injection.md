---
title: A1 - Injection
order: 10
---

Auf Platz 1 der OWASP Top 10 2017.

Die OWASP beschreibt dieses Problem allgemein so:

> Injection-Schwachstellen tauchen auf, wenn eine Anwendung nicht vertrauenswürdige Daten an einen Interpreter weiterleitet. Injection Schwachstellen sind weit verbreitet, besonders in altem Code; sie finden sich in SQL-, LDAP- und XPath-Anfragen, Systembefehlen, Programm-parametern usw.

Wir haben im Kapitel [PHP DB Schreiben &rarr; Löschen](/php-db-schreiben/daten-loeschen/) schon SQL Injection behandelt.
Zur Verhinderung von SQL-Injection stellen Datenbanken Prepared Statements zur Verfügung. In PHP
können wir sie so verwenden:

<php caption="Prepared Statements verhindern SQL Injection">
$query = $dbh->prepare('SELECT * FROM users WHERE id=?');
$query->execute(array( $_GET['pid'] ) );
</php>

Mit dem `prepare` wird das SQL-Statement an die Datenbank geschickt,
und dort bereits vor-kompiliert. Die Daten, 
die als Input vom User/der Userin kommen werden mit `execute` an die Datenbank
übergeben.  In diesem zweiten Schritt können sie aber nur mehr als
Daten, nicht mehr als SQL interpretiert werden.

## Prepared Statement mit benannten Platzhaltern

Eine zweite Schreibweise für prepared Statement ist noch besser lesbar: dabei
werden statt der Fragezeichen benannte Platzhalter verwendet:

<php caption="Prepared Statements mit benanntem Parameter">
$stm = $dbh->prepare ( 'SELECT * FROM USERS WHERE USERNAME LIKE :name' );
$stm->bindParam(':name', $_POST['name'] );
$stm->execute();
</php>

## Prepared Statement falsch verwenden

Man kann auch mit prepared statments noch Code schreiben, der für Injections anfällig ist.
Wenn man nämlich im String der an prepare übergeben wird Variablen einbettet:

<php caption="Prepared Statements falsch gmacht">
$stm = $dbh->prepare ( "UPDATE users SET newsletter = ? WHERE USERNAME = '$name'" );
$query->execute(array( $_GET['newsletter'] ) );
$stm->execute();
</php>

![](/images/security/fire-extinguisher-fire.jpg)

## OWASP Empfehlungen

Die OWASP empfiehlt:

1. Den Interpreter gänzlich vermeiden, oder
2. Eine Schnittstelle benutzen es dem Interpreter erlaubt zwischen Code und Daten zu unterscheiden (z.B., prepared statements, stored procedures in der Datenbank), oder
3. Den Input von der Userin/dem User geeignet escapen bevor er an den Interpreter weiter gegeben wird

Im dritten und schlechtesten Fall ist weiter zu beachten:

- Bei der Validierung des Inputs immer ein ‘white list’ verwenden, also nur Zeichen erlauben die harmlos sind (auf der "weissen Liste" stehen), alle anderen verwerfen

Unabhängig von den oben genannten Punkt gilt noch die Empfehlung:

- Der Web-Applikation nur minimale Zugriffsrechte zur Datenbank gewähren. Damit kann ein eventueller Schaden durch gelungen Injection minimiert werden.




* Wir haben das Problem zuerst besprochen im Kaptiel [PHP DB Schreiben: Löschen](https://web-development.github.io/php-db-schreiben/daten-loeschen/)
* Siehe auch [SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.md)
