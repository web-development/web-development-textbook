---
title: Fehlerbehandlung
order: 50
---

<script>document.location="/php-db-schreiben/fehlerbehandlung/";</script>

Wir haben bisher keinerlei Rücksicht darauf genommen, dass ein Fehler auftreten
könnte.  Zum Beispiel könnte beim Einfügen in die Datenbank ein Constraint verletzt werden
und das Einfügen fehlschlagen. Wie behandelt man diesen Fall in PHP?


## Exceptions in PHP

Folgende Beschreibung ist aus dem [PHP Handbuch](http://www.php.net/manual/de/language.exceptions.php) übernommen:

PHP 5 hat ein Exceptionmodell ähnlich dem anderer Programmiersprachen. Eine Exception kann in PHP 
geworfen (`throw`) und abgefangen (`catch`) werden. Um das Fangen potentieller Exceptions zu 
ermöglichen, wird der jeweilige Code mit einem `try`-Block umschlossen. 

Die normale Programmausführung (wenn keine Exception innerhalb des `try`-Blockes geworfen wird) 
wird nach dem letzten `catch`-Block fortgesetzt. 
Exceptions können innerhalb eines `catch`-Blockes geworfen (oder weitergeworfen) werden.

Wenn eine Exception geworfen wird, wird der Programmcode der auslösenden Anweisung nicht ausgeführt, 
und PHP versucht, den ersten passenden `catch`-Block zu finden. Falls eine Exception gar
nicht abgefangen wird, wird ein fataler Fehler mit einer "Uncaught Exception ..."-Nachricht ausgegeben

§

<php caption="Beispiel für Exception-Handling in PHP">
<?php
function compute($x) {
    if ($x == 0) {
       throw new Exception('Illegal Input: 0.');
    }
    return 1 / $x;
}

try {
    echo compute(5) . "\n";
    echo compute(0) . "\n";
} catch (Exception $e) {
    echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
}

// output:
// 0.2
// Exception abgefangen: Illegal Input: 0
?>
</php>


## Verwendung von Exceptions für die Datenbank

PDO wirft normalerweise keine Exceptions. Ihre Verwendung muss erst mit dem
Attribut `ERRMODE` aktiviert werden:

<php>
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
</php>


In folgendem Beispiel soll ein Datensatz (plus abhängige Daten) dargestellt werden.
Dabei könnte schon beim Verbindungsaufbau mit der Datenbank ein Fehler auftreten,
oder bei einzelnen Abfragen.

<php caption="Datenbank-Abfrage mit Exception Handling als Fehlerbehandlung">
$get_id = $_GET['id'];
try{
  include "config.php";

  if( ! $DB_NAME ) {
    throw(new Exception( "DB nicht konfiguriert. config.php anlegen!" ));
  }

  $dbh = new PDO("mysql:dbname=$DB_NAME", $DB_USER, $DB_PASS);
  /* das folgende Attribut aktiviert die Exceptions */
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
  $dbh->exec('SET CHARACTER SET utf8') ;

  $sth  = $dbh->prepare( "SELECT * FROM users WHERE id=?" );
  $sth->execute(array($get_id));
  $p = $sth->fetch();

  // wirklich nicht in der Datenbank
  if( $p === false ) {
    throw (new Exception( "Kein Person Nr. $get_id in der DB." ));
  }

  // Profil verborgen
  if( !$p->profile_visible  ) {
    throw (new Exception( "Kein Person Nr. $get_id in der DB." ));
  }

  $sth  = $dbh->prepare( " .... " );
  $sth->execute(array($get_id));
  $projects = $sth->fetchAll();

} catch( Exception $e ) {
  include "header.php";
  echo "<h1>Error</h1>" ;
  echo "<p>" . $e->getMessage() . "</p>";
  include "footer.php";
  exit;
}

/* hier folgt die normale Ausgabe der Seite */
</php>

In diesem Beispiel erfolgt die ganze Arbeit mit der Datenbank
bevor die Ausgabe beginnt.  Im `catch`-Block wird eine Webseite
erzeugt, die gar nichts mit der "normalen" Ausgabe der Seite zu
tun hat.

## Exkurs: Exceptions in JavaScript

Die Verwendung und Schreibweise ist in JavaScript so ähnlich, dass es sich
gar nicht lohnt näher darauf einzugehen. Siehe 
[Rauschmayer(2012): Ausnahmebehandlung in JavaScript in mag.js Nr.1](http://www.magjs.de/2012-01/rauschmayer/rauschmayer.html)

