---
title: Formular und PHP
order: 30
---


Dies ist ein kleiner Vorgriff auf die serverseitig Programmierung mit PHP.
Der PHP Code muss in einer Datei mit Endung `.php` gespeichert werden
und von einem Webserver mit PHP-Interpreter gehostet werden.
Mehr dazu dann im 2.Semester, bzw. im Kapitel [PHP](/php/).

## PHP und Formulardaten

Die Daten aus einem Web-Formular werden vom PHP-Interpreter verarbeitet, die
URL-Codierung aufgelöst und die Daten dann in mehreren superglobalen Arrays zur
Verfügung gestellt. („Superglobal“ bedeutet, dass das Array in jedem Teil des
PHP-Programmes sichtbar ist.

Das Array `$_GET` enthält die Parameter einer GET-Anfrage.  Ein Array in PHP
kann nicht nur Integers als Index haben (z.B. `$a[0]`) sondern auch Strings
(z.B. `$a['salzburg']`).  Der Name des Eingabefelder wird hier als Index
verwendet.

§

Um die Bestellung aus dem Formular zu verarbeiten, könnte folgendes Programm verwendet werden:

<php caption="Programm zur Verarbeitung der Daten aus dem Bestell-Formular">
<?php
    $anzahl  = $_GET['anzahl'];
    $adresse = $_GET['adresse'];

    echo("<p>Bestellung über $anzahl Flugzeuge.</p>");
    echo("<p>Werden binnen 1 Monat an $adresse geliefert</p>");
?>
</php>

Dabei wird aber die Eingabe noch gar nicht geprüft.

§

In dieser minimalen Version des Bestellprogramms senden wir die Daten einfach vom Server per E-Mail weiter:

<php caption="PHP-Befehl zum Versenden einer E-Mail">
mail(
 "ich@fh-salzburg.ac.at",                        // To
 "Bestellung von $anzahl Flugzeugen",       // Subject
 "Lieferung von $anzahl Flugzeugen an Adresse $adresse"
);
</php>


