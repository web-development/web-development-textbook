---
title: Datei Upload
order: 60
---

## Frontend

Die einfachste Version des Upload-Formulares verwendet eine input-Tag
vom Typ `file`:

<htmlcode caption="Formular für den Datei-Upload">
<form action="upload.php" method="post" enctype="multipart/form-data">
  Neues Bild zum hochladen in den Ordner <a href='pix/'>upload</a>: 
  <input type="file" name="bild">
  <input type="submit" value="hinaufladen">
</form>
</htmlcode>

§

Der Input-Tag mit dem Typ „file“ wird vom Browser als Textfeld plus Button dargestellt. Wird der Button gedrückt dann erscheint ein Datei-Auswahl-Dialog, wie in Abbildung 132 gezeigt.

![Webformular mit Datei-Upload](/images/file-input.png)

## Backend

Zuerst ein paar Überlegung zur Sicherheit von Datei-Uploads. Folgendes Bild
zeigt den Super-GAU: Über das Formular upload.php kann man nicht nur "harmlose"
Dateien wie Bilder hochladen, sondern auch eine Datei mit der Endung `.php`.

Diese Datei wird im Ordner `uploads/` innerhalb des Webspace gespeichert,
kann dort über den Webserver aufgerufen werden, und wird vom PHP-Interpreter
ausgeführt.

![Security Super-GAU: Upload einer Datei mit Endung php in den Webspace](/images/upload-security.png)

So ein Upload öffnet das Tor für beliebigen PHP Code, der dann mit den
Rechten des Account `apache` ausgeführt wird.  Ein guter erster Schritt, wenn
man den Server hacken will!

### Maßnahmen

Die Mindestanforderungen an ein Upload-Skript lauten also:

* **niemals** hochgeladene Daten als Code interpretieren!
* Vorsicht bei Daten, die im Webspace gespeichert werden!
* Alle Daten die hochgeladen werden sorgfältige überprüfen: Dateinamen und Inhalt!

### Implementierung

Die Verarbeitung von hochgeladenen Dateien ist wesentlich komplizierter als die Behandlung anderen Requests: Die Dateien werden vom PHP-Interpreter temporär gespeichert. Das PHP-Programm kann die Dateien dann an einen permanenten Speicherort kopieren (falls das die Zugriffsrechte erlauben)

Die Details zu den Hochgeladenen Dateien sind im Array `$_FILES` gespeichert, in folgendem Beispiel hatte das Eingabefeld den Namen „bild“: 

`$_FILES['bild']['name']`
: Der Originalname der Datei am Client. 

`$_FILES['bild']['type']`
: Der „Mime Type“ der Datei – falls der Browser diese Information liefert. Zum Beispiel „image/gif“. Achtung: nicht zuverlässig! 

`$_FILES['bild']['size']`
: Größe der hochgeladenen Datei in Byte. 

`$_FILES['bild']['tmp_name']`
: Der Pfad und Dateiname der temporären Datei. 

`$_FILES['bild']['error']`
: Fehlercode bei Upload, 0 bedeutet dass kein Fehler aufgetreten ist. Siehe PHP-Doku.

### Beispielcode


<php caption="PHP-Programm zur Behandlung von Datei-Upload">
<?php
$uploaddir = dirname( $_SERVER["SCRIPT_FILENAME"] ) . "/pix/";

$filename = basename($_FILES['bild']['name']);
$ext = substr($filename, -4);

if( $ext != '.jpg' ) {
   die("ich darf nur jpg-Dateien hochladen, nicht " . $ext );
}

$uploadfile = $uploaddir . $filename;

if (move_uploaded_file($_FILES['bild']['tmp_name'], $uploadfile)) {
  echo "Datei erfolgreich hochgeladen.\n";
} else {
  echo "Problem beim Speichern der Datei.\n";
}

echo '<pre>debugging info:';
print_r($_FILES);
print '</pre>';

?>
</php>

### Zugriffsrechte am Server

Achtung: Sie müssen den Ordner `pix` erstellen und ihm 
geeignete Zugriffsrechte zuweisen, damit der Webserver (Account `apache`) 
hineinschreiben darf!



