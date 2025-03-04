---
title: Daten aus dem Web-Formularen prüfen
order: 50
---
Der Zusammenhang zwischen Web-Formular, http-Request und den Arrays `$_POST` und `$_GET` in PHP sollte Ihnen schon klar sein.


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

### Was kann schiefgehen?

Wir Eingabe im Web-Formular kann auf zwei Arten "schief gehen":

**1.Fall** Ein harmloser Mensch füllt unser Web-Formular aus, vertippt sich, vergisst etwas auszufüllen

**2.Fall** Ein Mensch mit böser Absicht verwendet vielleicht gar nicht unser Web-Formular, sondern schreibt sein eigenes und schickt damit Daten an unser PHP-Programm

Wenn wir im Formular mit checkboxen oder  `required` oder  `pattern` oder ...
die Eingabemöglichkeiten einschränken, dann hilft das nur im 1.Fall.  z.B.

<htmlcode>
<form action="https://example.com/order.php">
    <label>Anzahl: <input name="anzahl" type="number" required></label>
</form>
</htmlcode>

Dieses Formular sorgt dafür, dass man nur Zahlen eingeben kann. Aber man könnte
ein anderes Formular bauen und es ebenfalls an `https://example.com/order.php`
zu schicken.

[Demo](/images/php/good-form.html)

 Wird die Methode GET verwendet braucht man nicht mal ein Formular,
 sondern kann einfach die Parameter direkt in der URL setzen:
`https://example.com/order.php?anzahl=<script>alert('peng')</script>`


### Prüfung mit `isset` und `filter_var`

Eine bessere Version des Programmes prüft vorher jede Eingabe und gibt entsprechende Fehlermeldungen aus:

* `isset` prüft ob die Variable einen anderen Wert als `null` hat
* filter_var kann verschiedene tests anwenden, und die Umwandlung von String in einen anderen Datentyp vornehmen:

<php>
if (! isset($_GET["anzahl"])) {
    echo "<p>Anzahl ist nicht gesetzt</p>";
} elseif(! $anzahl = filter_var( $_GET['anzahl'], FILTER_VALIDATE_INT )) {
  echo "<p>Anzahl ist keine Zahl</p>";
} else {
    echo "<p>Anzahl: $anzahl </p>";
}
</php>


### `filter_var` bessern kennenlernen

Die Funktion `filter_var` kann noch viel mehr, siehe die [Filter Constants in der PHP Dokumentation](https://www.php.net/manual/de/filter.constants.php#constant.filter-validate-bool)

Auf der Webseite [https://de.functions-online.com/filter_var.html](https://de.functions-online.com/filter_var.html) kann
man die verschiedenen Optionen von filter_var ausprobieren.


### Alle Fehler sammeln

Wenn wir die Daten nicht akzeptieren können ist es freundlich, wenn
wir alle Fehlermeldungen sammeln und anzeigen:

<php>
<?php
$fehler = array(); // sammelt alle Fehlermeldungen

if ( ! isset($_GET['anzahl'])  or
     ! $anzahl = filter_var( $_GET['anzahl'], FILTER_VALIDATE_INT )  ) {
  $fehler[] = "Bitte geben Sie die Anzahl der Flugzeuge ein - als Zahl!";
}

if ( ! isset($_GET['adresse']) or
     ! $adresse = filter_var( $_GET['adresse'], FILTER_VALIDATE_EMAIL ) ) {
  $fehler[] = "Bitte geben Sie die E-Mail Adresse an!";
} elseif ( strlen( $adresse ) < 5 ) {
  $fehler[] = "Die E-Mail Adresse  ist zu kurz - mindestens 5 Buchstaben!";
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
}
?>
</php>


