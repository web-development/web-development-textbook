https://blog.gitbutler.com/the-great-css-expansion

popover aufnehmen?

https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/#why_we_rebuilt_mdns_frontend  - als web component beispiel, aber brauch man lit?

§

Bei der Ausgabe soll für jede Person ein passender Link zu `person.php` angezeigt werden:

<php caption="Link mit ID als Parameter erzeugen">
<li>
  <b><?php echo $person->firstname ?> <?php echo $person->surname?></b>
  <a href="person.php?id=<?php echo $person->id ?>">mehr</a>
</li>
</php>

Der Output sieht dann zum Beispiel so aus:

<htmlcode caption="Output des letzten PHP-Programmes">
<li>
  <b>Michael A</b>
  <a href="person.php?id=577">mehr</a>
</li>
<li>
  <b>Benjamin A</b>
  <a href="person.php?id=579">mehr</a>
</li>
</htmlcode>

Auf diese Weise haben wir den Parameter `id` an den nächsten Teil
der Applikation weiter gegeben.

§

Wir haben in personen.php nur sichtbare Profile angezeigt,
und auch nur auf sichtbare Profile verlinkt. Das schützt nicht davor,
dass jemand einfach eine URL mit ganz anderer id „von Hand“ eingibt!

`http://meinedomain.at/person.php?id=666`

Der Zugriffsschutz ist also ein eigenes Thema, das auch in `person.php` wieder
behandelt werden muss.


Einen bestimmten Datensatz lesen
---------------------------------
Wenn Sie die Datei `person.php` mit einem Parameter aufrufen `person.php?id=586`
soll eine bestimmte Person aus der Datenbank angezeigt werden. Dafür wird der
Parameter aus dem `$_GET` – Array ausgelesen und sicher gestellt, dass es sich
wirklich um eine Zahl handelt.


Das Ergebnis der Abfrage kann also
sein, dass keine Person gefunden wurde – entweder weil unter diesem Schlüssel
gar keine gespeichert ist, oder weil `profile_visible=false` ist. In diesem Fall
gibt fetch kein Objekt sondern der Wert `FALSE` zurück.

<php caption="Beispiel aus index.php">
$id = $_GET['id'];  // SICHERHEITSPROBEM - behandeln wir später noch!
$stm = $dbh->query("SELECT * FROM users WHERE profile_visible AND id=$id");
$person = $stm->fetch();
if( $person === FALSE ) {
  die("<p>Konnte keine passenden Daten aus der Datenbank lesen.</p>");
}
</php>

§

Die Darstellung der einzelnen Person ist damit noch nicht fertig programmiert:
Die Anzahl der Werke der Person oder eine Liste der Werke fehlen noch.

<php>
if( $person->isfemale ) {
    $anrede = "Frau";
    $ersie  = "Sie";
} else {
    $anrede = "Herr";
    $ersie  = "Er";
}

// ====================== Ausgabe ===================
require "header.php";
?>
<p>
  <?php echo $anrede ?>
  <?php echo $person->firstname ?>
  <?php echo $person->surname ?>
  hat insgesamt x Werke in dieser Datenbank.
  <?php echo $ersie ?> hat die E-Mail Adresse <?php echo $person->email ?>.
</p>
</php>

Datensätze suchen
-------------------

In der Datei `psuche.php` wird ein Formular zur Suche nach Namen angezeigt:

<htmlcode caption="Such-Formular in psuche.php">
<form action="psuche.php" method="get">
  Suche nach einer Person mit dem Namen <input name="suchwort">
  <input type="submit">
</form>
</htmlcode>

Die eigentliche Suche geschieht über das WHERE-Statement  in SQL:

<sql>
...
WHERE profile_visible=1
  AND (surname LIKE '%$suchwort%' OR firstname LIKE '%$suchwort%')
</sql>

Wir werden uns später noch genauer mit der Sicherheitsproblematik von
SQL-Statements befassen, die teilweise aus User-Input entstehen. Noch ignorieren
wir die Problematik einfach, und implementieren diese Seite
ganz ähnlich wie `personen.php`.



Datenbanken Basics, themen von
https://github.com/supabase/agent-skills/tree/main/skills/supabase-postgres-best-practices/references


mehr CSS:

im grid: place-items: center
https://cssbattle.dev/


modal dialog ohne javasciprt schon im 1.smeester
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog?retiredLocale=de

ebenso popover

coole touch events testen: https://patrickhlauke.github.io/touch/





* achtung: link zum nächsten kapitel funktioniert nicht in der folienansicht, wenn das nächste ein dex.md ist. weils davon keine folie gibt.

* neue Security Kapitel ausformulieren
* CORS gegen csrf, siehe https://news.ycombinator.com/item?id=17224772
* auf variable font umstellen
<link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet">
https://github.com/rsms/inter


* https://github.com/toddmotto/public-apis für fetch, oder gleich haveibeenowned
* http://iso25000.com/index.php/en/22-english/iso-iec-25010  software qualität
