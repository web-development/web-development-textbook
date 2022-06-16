---
title: Daten Bearbeiten
order: 40
---

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

§

Achtung: Falls in den Daten Anführungszeichen, kaufmännische Unds oder
Kleiner-Zeichen vorkommen müssen diese für HTML escaped werden.  Hier ein
Beispiel:

<sql>
portfolio_playground=# select firstname,description from users where id=438;
     firstname      |          description
--------------------+--------------------------------
 Tobias "the Coder" | Mein Lieblings-Tag ist <style>
(1 row)
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
<input name="firstname" value="<?= htmlspecialchars( $person->firstname ); ?>">
<textarea name="description" rows="7"><?= htmlspecialchars( $person->description ); ?></textarea>
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
$description = htmlspecialchars( $person->description  );

echo <<<EOM
  <p>$anrede $vorname $nachname hat insgesamt
  $no Werke in dieser Datenbank.
  $ersie hat den Usernamen $username.</p>

  <div>$description</div>
EOM;
</php>

Damit funktioniert nun die Darstellung des Datensatzes richtig:

![Korrekte Darstellung eines Datensatzes mit kleiner-Zeichen](/images/html-escaped1.png)





Siehe auch
----------

* Kapitel über [Cross Site Scripting (XSS)](/security/a3-injection/#slide-7)

