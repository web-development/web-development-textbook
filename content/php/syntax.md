---
title: Syntax von PHP
order: 20
---

## HTML und PHP

Ein erstes längeres Beispiel zeigt wie eng HTML und PHP vermischt werden:

<htmlcode caption="HTML und PHP - der Sourcecode">
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>Beispielseite für ein PHP-Programm</title>
</head><body>
  <h1>PHP-Beispiel</h1>
  <?php
      $entfernung = 296;
      $h = 2;
      $min = 40;
      $zeit = $h + $min / 60;
      $kmh = $entfernung / $zeit;
      echo "  <p>$entfernung km in $h:$min sind $kmh km/h</p>\n";
      if( $kmh > 130 ) {
           echo("  <p><b>Das ist zu schnell!</b></p>\n");
      }
  ?>
</body>
</html>
</htmlcode>

Der Quellcode besteht hier aus einem HTML-Dokument, in dem in
Zeile 09 bis 19 PHP eingebettet ist. In den Zeilen 10 bis 14
werden nur Berechnungen durchgeführt, diese Zeilen haben keine
Auswirkung auf das resultierende HTML-Dokument. In den Zeile
15 und 17 wird mit der echo() – Funktion ein Output erstellt.

§

Der PHP-Interpreter fügt den Output an der Stelle in den HTML-Code
ein, wo der PHP-Code war; das Ergebnis sieht wie folgt aus:

<htmlcode caption="HTML und PHP - der Output">
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>Beispielseite für ein PHP-Programm</title>
</head><body>
  <h1>PHP-Beispiel</h1>
  <p>296 km in 2:40 sind 111 km/h</p>
</body>
</html>
</htmlcode>

Welcher Teil des Dokuments statisch war und welcher von PHP berechnet wurde ist nicht mehr erkennbar.

§

Ein PHP-Dokument kann mehrere Einbettungen enthalten, dabei können
sogar Kontrollstrukturen in einem anderen Teil fortgesetzt werden:

<htmlcode caption="HTML und PHP - mehrere PHP-Abschnitte in einem HTML-Dokument">
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>Beispielseite für ein PHP-Programm</title>
</head><body>
  <h1>Wilde Mischung</h1>

  <?php
    $i = 0;
    while ( $i < 22 ) {
  ?>

  <p>Alles Gute zum Geburtstag <img src="torte.jpg"> !</p>

  <?php
      $i++;
    }
  ?>

  <p>Und ein gutes nächstes Jahr!</p>
</body>
</html>
</htmlcode>

Diese Schreibweise widerspricht den Lese-Gewohnheiten von ProgrammiererInnen:
diese Art von Verschachtelung (geschwungenen Klammern in PHP vs. HTML-Tags)
ist in den meisten Sprachen verboten.

z.B. in HTML ist diese Verschachtelung falsch: `<b>fett <i>und</b> kursiv</i>`

In PHP wird diese Schreibweise aber oft verwendet.

§

Es gibt auch eine alternative
Schreibweise für die Kontrollstrukturen, die besser zu unseren
Lesegewohnheiten passt: Statt der öffnenden geschwungenen Klammer
wird ein Doppelpunkt geschrieben, das Ende der Schleife wird
mit einem eigenen Schlüsselwort (endwhile, endif, endfor) markiert:

<htmlcode caption="HTML und PHP - While-Schleife ohne geschungene Klammern">
<h1>Wilde Mischung</h1>
<?php
  $i = 0;
  while ( $i < 22 ) :
?>

    <p>Alles Gute zum Geburtstag <img src="torte.jpg"> !</p>

<?php
    $i++;
  endwhile;
?>

<p>Und ein gutes nächstes Jahr!</p>
</htmlcode>

§

Bei größeren Projekten empfiehlt sich aber auf jeden Fall die
möglichst starke Trennung von Programm-Logik und Darstellung.

Der erste Schritt in diese Richtung wäre, die Berechnung an den Anfang der Datei zu stellen.

Welcher Teil schon als Ausgabe zählt und in das HTML-Dokument eingebettet
wird ist dabei wieder eine Abwägungsfrage, auf die es keine fixe Antwort gibt.

<htmlcode caption="HTML und PHP - Erst Berechnung, dann Ausgabe">
<?php   // Berechnung zuerst
  $entfernung = 296;
  $h = 2;
  $min = 40;
  $zeit = $h + $min / 60;
  $kmh = $entfernung / $zeit;
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>Beispielseite für ein PHP-Programm</title>
</head><body>
  <h1>PHP-Beispiel</h1>
   
  <?php
    echo "<p>$entfernung km in $h:$min sind $kmh km/h</p>";
    if( $kmh > 130 ) {
      echo("<p><b>Das ist zu schnell!</b></p>");
    }
  ?>
</body>
</html>
</htmlcode>

## Includes

Bei PHP-Applikationen mit mehr als einer Datei empfiehlt sich die
Verwendung von `include` um Duplizierung von Code zu vermeiden.
PHP-Code, der mehrmals verwendet wird,
kann z.B. als Funktionen in eine Datei phpfunctions.php ausgelagert werden:

<htmlcode caption="Datei phpfunction.php enthält eine Funktion in PHP">
<?php
  function calc( $entfernung, $h, $min ) {
    $zeit = $h + $min / 60;
    $kmh = $entfernung / $zeit;
    return $kmh;
  }
?>
</htmlcode>

Wenn diese Datei direkt aufgerufen wird (http://www.meinhost.at/phpfunctions.php)
erscheint kein Output, aber auch keine Fehlermeldung 404
wie bei einer nicht existierenden Seite.

§

Der Anfang und das Ende einer Webseite (head inklusive Titel, Navigation, footer)
können z.B. in Dateien `header.php` und `footer.php` ausgelagert werden.
Im Header wird hier ein klein wenig PHP verwendet, um
den Titel der Seite dynamisch generieren zu können:

<php caption="Datei header.php">
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>Brigittes totale Web-App: <?php echo $pagetitle ?></title>
  <link rel="stylesheet" href="style.css" />
</head><body>
  <nav id="top_nav"><ul>
    <li>Home</li>
    <li>Hier</li>
    <li>Da</li>
  </ul></nav>
  <h1><?php echo $pagetitle ?></h1>
</php>

Wenn diese Seite direkt aufgerufen wird (http://www.meinhost.at/header.php)
erscheint der HTML-Code. Da die Variable \$pagetitle nicht gesetzt ist
(undefined) wir sie behandelt als ob sie den leeren String enthält: die Überschrift ist leer.

§

Dieser Footer könnte auch eine statische HTML-Datei sein,
da hier gar keine Variablen oder PHP-Code verwendet werden:

<php caption="Datei footer.php">
  <footer>&copy; 2012 Brigitte</footer>
</body>
</html>
</php>

§

In der “Haupt-Datei” index.php werden alle diese Einzelteile zusammengefügt:

<php caption="Datei index.php">
<?php   
  include "phpfunctions.php";   // kein Output!
  $pagetitle = "Berechnung der Geschwindigkeit";
  $entfernung = 296;
  $h = 2;
  $min = 40;
  $kmh = calc($entfernung, $h, $min);
  include "header.php";    // erster Output von HTML
  echo "  <p>$entfernung km in $h:$min sind $kmh km/h</p>";
  if( $kmh > 130 ) {
      echo("  <p><b>Das ist zu schnell!</b></p>");
  }
  include "footer.php" 
?>
</php>

Und wieder gilt: die „Zusammensetzung“ erfolgt am Server.
Im Client landet nur der fertige HTML-Code. Die UserIn
kann nicht erkennen, dass die Seite ursprünglich
aus mehreren Dateien bestand.

## Variablen und Typen

Variablennamen in PHP beginnen mit einem Dollar-Zeichen. Warum?
Sie haben im Beispielprogramm schon gesehen,
wie Variablen einfach in Strings eingebettet werden können:

<php>
echo "$entfernung km in $h:$min sind $kmh km/h";
</php>

Das ist nur möglich weil die Variablennamen mit einem besonderen
Zeichen gekennzeichnet sind.

§

Es gibt in PHP eine
zweite Schreibweise für Strings: einfache Anführungszeichen.
Diese Variante erlaubt keine Variablen:

<php>
echo 'Bei einfachen Anführungszeichen ist ein $ einfach ein $';
</php>

§

Eine weitere Methode einen String zu definieren - neben einfachen
und doppelten Anführungszeichen - ist das "heredoc" Schreibweise[&rarr;](http://www.php.net/manual/de/language.types.string.php#language.types.string.syntax.heredoc)

<php caption="Beispiel für heredoc">
echo <<<EOT
My name is $lastname, $firstname $lastname. 
I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
I can't mess up this string
by mentioning 19" racks!
EOT;
</php>

Da der String durch "EOT" beendet wird, kann
man beide Arten von Anführungszeichen gefahrlos verwenden.
Variableninterpolation funktioniert.

§

PHP unterscheidet zwischen den Datentypen boolean, integer,
float, string, array, object, resource und NULL.

In einer Variablen können nacheinander verschiedene Datentypen
gespeichert werden, die Variable selbst hat also keinen Typ!

<php>
<?php
  $foo = "Hallo 🦄";   // $foo contains a string
  $foo = 2;           // $foo now contains an integer (2)
  $foo = 3.3;        // $foo now contins a float (3.3)
?>
</php>

§

Variablen in PHP müssen nicht deklariert oder initialisiert werden.

Seit PHP 7 **kann** man für Funktions-Parameter und Rückgabewerte
einen Datentyp deklarieren, siehe [PHP Dokumentation: Funktionsparameter](http://php.net/manual/de/functions.arguments.php#functions.arguments.type-declaration).

Je nach verwendeten Operatoren und Funktionen werden die Typen konvertiert:

<php>
<?php
  $foo = "0";         // $foo is a string with one character (ASCII 48)
  $foo = $foo + 2;    // $foo is now an integer (2)
  $foo = $foo + 1.3;  // $foo is now a float (3.3)
  $bar = 5 + "10 Little Piggies"; // $bar is an integer (15)
  $baz = 5 . "10 Small Pigs";     // $baz is a longer string "510 ..." 
?>
</php>

§

Betrachten wir die letzten zwei Zeilen des Codes genauer:

<php>
<?php
  $bar = 5 + "10 Little Piggies"; // $bar is an integer (15)
  $baz = 5 . "10 Small Pigs";     // $baz is a longer string "510 ..." 
?>
</php>

Die Addition mit `+` interpretiert beide Summanden als Zahl.
Falls ein Summand ein String ist, wird am Beginn
des Strings nach einer Zahl gesucht und diese verwendet.

Der Punkt-Operator fügt Strings zusammen und
interpretiert seine beiden Operanden als Strings.

Der Operator bestimmt also den Typ!

§

In Javascript ist es
genau umgekehrt: da entscheidet der Datentyp  
über die Bedeutung des Operators:

![Abbildung: Bespiel für den Operator + in Javascript (Firebug)](/images/php-javascript-plus.png)

## Arrays

Arrays in PHP können auf ähnliche Art verwendet werden
wie in C++ (und C, und Java, und Ruby,…) und verhalten
sich auf den ersten Blick auch wie erwartet:

<php caption="Array in PHP">
$foo[2] = 2008;
$foo[3] = 2009;
$foo[0] = "Halli";
$foo[1] = "Hallo";

for($i=0;$i<count($foo);$i++) {
echo("Der $i. Wert im Array ist $foo[$i]<br>");
}
</php>

§

Auf den zweiten Blick sind Arrays in PHP aber wesentlich
komplexer: nicht nur Integers sind als Index zulässig,
sondern auch Strings, es handelt sich also um
assoziative Arrays in denen ein Schlüssel
mit einem Wert assoziiert wird.

Mit der `foreach` Schleife kann man Schlüssel und Wert auslesen.
Dabei wird offenbar, dass die Reihenfolge des Einfügens
ins Array erhalten geblieben ist: Die
Schlüssel-Wert-Paare sind im Array weiterhin geordnet!

<php caption="Array in PHP ist auch ein assoziatives Array (Hashmap)">
$foo[2] = 2008;
$foo[3] = 2009;
$foo[0] = "Halli";
$foo[1] = "Hallo";

foreach( $foo as $key => $value ) {
    echo("Zum Schlüssel $key ist der Wert \$value gespeichert<br />");
}
</php>

§

Mit der Schreibweise `$foo[]` kann ein Wert unter der
kleinsten (noch nicht verwendet) Integer-Zahl als Schlüssel gespeichert werden:

<php caption="Einfügen in ein Array in PHP">
$foo[2] = 2008;
$foo[3] = 2009;
$foo[0] = "Halli";
$foo[1] = "Hallo";
$foo['dies'] = "etwas Nahes";
$foo['das']  = "etwas Fernes";
$foo[] = "das Nächste";
</php>

§

Das Array in PHP ist also ein wesentlich komplexerer Datentyp
als ein Array in anderen Programmiersprachen –
es verbindet Eigenschaften von Arrays mit denen von Hashmaps.

Ein Array zu sortieren ist entsprechend kompliziert; es
gibt eine ganze Reihe von Sortier-Funktionen. Sie finden
diese im Abschnitt [&rarr;Array-Funktionen](http://at.php.net/manual/de/ref.array.php) der PHP-Doku.

## Funktionen und Scope

<php caption="Funktion in PHP">
function foo($arg_1, $arg_2 = "Euro") {
  $a = 1 * 2;
  return $a . $arg_2;
}
$x = foo(10);
$y = foo(20, "Pfund");
</php>

Die Schreibweise von Funktionen inklusive Argumentliste und
Rückgabewert ist leicht verständlich.

§

Eine Falle
für erfahrene ProgrammiererInnen ist das Scoping von globalen Variablen:

<php caption="Globale Variablen und Funktionen in PHP">
$pi = 3.141;
function inhalt($radius) {
  return $radius * $radius * $pi;
}
$r = 10;
$a = inhalt($r);
echo("ein Kreis mit Radius $r hat eine Fläche von $a");
// ergibt 0 !
</php>

Dieses Programm funktioniert nicht wie erwartet, da innerhalb
einer Funktion kein Zugriff auf die außerhalb definierten Variablen
möglich ist! Die Variable `$pi` ist in der Funktion nicht sichtbar,
stattdessen wird mit einer neuen Variable `$pi` mit Default-Wert `0` gerechnet.

§

Mit dem Keyword global wird die Variable „in die Funktion eingeladen“
und ist dann auch innerhalb der Funktion sichtbar, lesbar und veränderbar.

<php caption="Globale Variablen und Funktionen in PHP">
$pi = 3.141;
function inhalt($radius) {
  global $pi;
  return $radius * $radius * $pi;
}
$r = 10;
$a = inhalt($r);
echo("ein Kreis mit Radius $r hat eine Fläche von $a");
// korrekte Berechnung und Ausgabe
</php>

Siehe auch [PHP Dokumentation: Geltungsbereich von Variablen](http://php.net/manual/de/language.variables.scope.php)

§

Ausgenommen von dieser Regelung sind die sogenannten „superglobals“.
Das sind Variablen, die auf jeden Fall sichtbar sind. Vier davon
werden hier vorgestellt, die anderen werden erst später behandelt.

|Variable|Beschreibung|
|+-------|+-----------|
|$GLOBALS|Dieses Array enthält alle globalen Variablen.|
|$\_SERVER|Dieses Array enthält Konfigurations-Informationen des (Web-)Servers und allgemeine Informationen zur aktuellen Anfrage (z.B. IP-Adresse des Browsers)|
|$_ENV|Dieses Array enthält die Umgebungsvariablen (je nach Betriebssystem verschieden).|
|$\_GET|Die Parameter die über die URL an das PHP-Programm übergeben wurden.|
{: class="table table-condensed table-bordered" style="width:auto"}

## Empfohlene Lektüre

- Kapitel [The Basics](http://www.phptherightway.com/pages/The-Basics.html) aus "PHP the Right Way"
