---
title: Dateien und Ordnern in PHP
order: 30
---
In diesem Kapitel wird beschrieben, wie PHP mit Dateien und Ordnern arbeiten kann und welche Web-spezifischen Probleme dabei auftreten.

Ordner auflisten
-----------------
Um herauszufinden, welche Dateien (und Unter-Ordner) sich in einem Ordner befinden, verwendet man die Funktion `glob`. (Achtung: die Funktionen `opendir`, `readdir`, `closedir` gibt es auch, die sind aber komplizierter zu verwenden) 

<php>
<?php
   $alle = glob("*");
   foreach( $alle as $file ) {  // forach-Schleife über Werte
                                // Schlüssel wird ignorieren!
       echo "<br>Datei $file gefunden.\n";
   } 
?> 
</php>

Im Output des Programmes werden nicht nur Dateien angezeigt, sondern auch Ordner. Mit den Funktionen `is_dir()` und `is_file()` könnte man herausfinden ob ein Ordner oder eine Datei vorliegt.

Die Funktion glob kann — ähnlich wie das DOS-Kommand dir oder das UNIX-Kommando ls —mit verschiedenen Mustern suchen: 

<php>
<?php
   $alle = glob("*.jpg");
   foreach( $alle as $file ) {
       echo "<br>Bild $file gefunden.\n";
   } 
?>
</php>

Der Rückgabewert von glob ist ein Array. Mit `array_merge` kann man mehrere Arrays zusammenfügen zu einem langen Array und mit asort die Werte alphabethisch sortieren:

<php>
$jpg = glob("bilder/*.jpg");
$gif = glob("bilder/*.gif");
$alle_bilder = array_merge($jpg, $gif);
asort( $alle_bilder )
</php>

Datei lesen
------------
Um eine Datei von PHP aus zu benutzen, muss man sie mit der Funktion `fopen` öffnen. Man erhält einen „handle“ mit dem man sich im Weiteren auf diese Datei bezeihen kann. 

<php>
$handle = fopen("counter.txt", "r");    // r steht für read = lesen
</php>

Achtung: die Pfadangabe zur Datei ist in UNIX-Schreibweise mit Slash zu schreiben, nicht in Windows-Schreibweise mit Backslash, also: 

<php>
# $handle = fopen ("unterordner\counter.txt", "r") # FALSCH
  $handle = fopen ("unterordner/counter.txt", "r")
</php>

Da die Datei zum Lesen geöffnet wurde, kann man nun mit `fgets` eine Zeile aus der Datei lesen. „Eine Zeile“ bedeutet hier: bis ein Zeilenumbruch in der Datei gefunden wird. 

<php>
$zahl = fgets($handle);
</php>

Bei längeren Dateien wird `fgets` meist in einer Schleife verwendet, um alle Zeilen aus der Datei zu lesen. Nach Gebrauch muss man die Datei wieder schließen:

<php>
fclose($handle);
</php>

Datei (über-)schreiben
------------------------
Bevor Sie beginnen mit PHP Dateien zu (über-)schreiben, zu löschen oder zu verschieben ein Warnhinweis: Es wird ernst. Hier gibt es keinen Papierkorb. Hat Ihr PHP-Programm eine Datei gelöscht, dann ist diese Datei unwiederbringlich weg.

Beim Schreiben wird als zweites Argument von fopen der Buchstabe „w“ übergeben:

<php>
$handle = fopen("counter.txt", 'w');
fwrite($handle, "$zahl\n");
fclose($handle);
</php>

Sowohl beim Lesen als auch beim Schreiben von Dateien kann viel schief gehen. Existiert die Datei, aus der ich lesen will, überhaupt?  Darf ich in die Datei, in die ich schreiben will überhaupt schreiben?   

Verschärft wird das Problem auf dem Webserver mit [UNIX Zugriffsrechten!](/kommandozeile/zugriffsrechte/). Auf dem UNIX-Webserver läuft das PHP-Programm unter dem Account des Webservers, nicht unter Ihrem Account! 

Um diese Fragen zu beantworten gibt es Funktionen `is_readable`,  `is_writable` und die Rückgabewerte der verschiedenen schon gezeigten File-Funktionen. So liefert fwrite entweder die Anzahl der geschriebenen Bytes oder FALSE als Status-Code zurück:

<php>
$status = fwrite($handle, $zahl);
if ( $status === FALSE ) {
  echo "Datei nicht schreibbar: Platte voll? Zugriff verboten?";
  exit;
}
</php>


Gleichzeitiger schreibender Zugriff
------------------------------------
Achtung: was passiert wenn zwei Zugriffe genau gleichzeitig erfolgen? Zwei Apache-Prozesse führen jeweils das PHP-Programm aus und versuchen, in die gleiche Datei zu schreiben!  Diese Problem existiert, wir können es jetzt noch nicht lösen.

