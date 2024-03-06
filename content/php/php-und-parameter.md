---
title: Daten aus dem Web-Formularen prüfen
order: 50
---
Der Zusammenhang zwischen Web-Formular, http-Request und den Arrays `$_POST` und `$_GET` in PHP sollte Ihnen schon klar sein.

Daten prüfen
--------------
Die Daten aus einem Web-Formular werden vom PHP-Interpreter verarbeitet, die Codierung aufgelöst und die Daten dann in mehreren superglobalen12 Arrays zur Verfügung gestellt:

$_GET
: Dieses Array enthält die Parameter einer GET-Anfrage.

$_POST
: Dieses Array enthält die Parameter einer POST-Anfrage.

$_REQUEST
: Dieses Array kombiniert die Daten aus $_GET und $_COOKIE und $_POST. Besser die spezifischen Arrays verwenden!

$_FILE
: Enthält Daten von hochgeladenen Dateien


### keine Prüfung

Um einen GET-Request zu verarbeiten haben wir bisher ein sehr simples Programm verwendet:

<php>
<?php
  $anzahl  = $_GET['anzahl'];
  $adresse = $_GET['adresse'];

  echo("<p>Ihre Bestellung über $anzahl Flugzeuge ist eingelangt</p>");
  echo("<p>Die Flugzeuge werden binnen 1 Monat an $adresse geliefert</p>");
?>
</php>


Dabei wird aber die Eingabe nicht geprüft.

### Prüfung mit `isset` und `filter_var`

Eine bessere Version des Programmes prüft vorher jede Eingabe und gibt entsprechende Fehlermeldungen aus:

<php>
<?php
$fehler = array(); // sammelt alle Fehlermeldungen

if ( ! isset($_GET['anzahl'])  or
     ! $anzahl = filter_var( $_GET['anzahl'], FILTER_VALIDATE_INT )  ) {
  $fehler[] = "Bitte geben Sie die Anzahl der Flugzeuge ein - als Zahl!";
}

if ( ! isset($_GET['adresse']) or
     ! $adresse = filter_var( $_GET['adresse'], FILTER_SANITIZE_STRING ) ) {
  $fehler[] = "Bitte geben Sie die Lieferadresse an!";
} elseif ( strlen( $adresse ) < 5 ) {
  $fehler[] = "Die Lieferadresse ist zu kurz - mindestens 5 Buchstaben!";
}

if ( $fehler ) {
  echo("<p>Ihre Bestellung kann derzeit nicht bearbeitet werden:</p>");
  echo("<ol>");
  foreach( $fehler as $fehler_text ) {
    echo("<li>$fehler_text</li>");
  }
  echo("</ol>");
  echo("<p>Bitte gehen Sie zurück und bessern Sie die Bestellung aus.");
} else {
  echo("<p>Ihre Bestellung über $anzahl Flugzeuge ist eingelangt</p>");
  echo("<p>Die Flugzeuge werden binnen 1 Monat an $adresse geliefert</p>");
}
?>
</php>


### `filter_var` bessern kennenlernen

Auf der Webseite [https://de.functions-online.com/filter_var.html](https://de.functions-online.com/filter_var.html) kann
man die verschiedenen Optionen von filter_var ausprobieren.

