---
title: HTML erlauben
order: 50
---

Welche Arten gibt es, die Formatierung von eingegeben Texten doch zu erlauben?
Ohne dass dabei Sicherheitsprobleme auftreten.


## HTML

Wie kann man HTML-Tags eingeben, abspeichern, und als HTML-Tags
wieder anzeigen? Welche Probleme können dabei auftreten?

### Gefahren

Zuerst eine Warnung: Die Anzeige von HTML das von Fremden eingegeben wurde ist
gefährlich! Dazu zwei Beispiele:


Gustav Gastfreund baut auf unter der Adresse http//gustav.at ein Gästebuch in dem BesucherInnen
beliebiges HTML abspeichern können. Herr Lauscher trägt dort ein Bild ein:

<htmlcode>
<img src="http://lauscher.net/bild.php?woher=gaestebuch_mmt" alt="harmloses bild">
</htmlcode>

Das Bild wird also nicht von Webserver gustav.at geladen, sondern vom Webserver von
Herrn Lauscher. Und dort wird gleich ein php-Programm zum Erzeugen des Bildes
aufgerufen. D.h. Wenn Bernhard Besucher das Gästebuch ansurft
dann sieht Herr Lauscher einen Zugriff auf bild.php auf seinem Server, und kann
das mit-loggen. Falls Herr Lauscher die Gästebuch-Besucher schon
kennt (ein Cookie bei ihnen gesetzt hat) kann er die Leute auch identifizieren.

Gustav Gastfreunt  hat Herrn Lauscher also die Möglichkeit gegeben sehr viel über die
BesucherInne zu erfahren.

So etwas ähnliches passiert z.B. wenn Sie Google
Analytics in Ihre Webseite einbinden um Zugriffs-Statistiken zu erstellen:
Google erfährt von jedem Zugriff auf Ihre Seite, Google kennt viele
BesucherInnen schon (weil Sie bei gmail.com eingeloggt sind oder von einer
vorhergehenden Suche noch ein Cookie haben.)

§

Das zweite Beispiel wäre wieder Eve mit der Cross Site Scripting Attacke,
die wir im Kapitel [Daten Bearbeiten ](/php-db-schreiben/daten-editieren/) kennen gelernt haben.

Noch hat unsere Applikation dieses Problem nicht: Wenn Frau Hacker Ihren Code
z.B. in das Profil einer Person eingibt wir der Code htmlescaped angezeigt und
„wirkt nicht“:

![Eingegebener HTML+Javascript-Code wird escaped und dargestellt](/images/html-escaped.png)

Erst wenn wir uns entscheiden von User*innen eingegebens HTML zuzulassen
müssen wir mit der Gefahr von Cross Site Scripting umgehen!

### Eingabe von HTML

Wenn Sie sich entscheiden die Eingabe von HTML zu zu lassen,
dann können Sie das mit einer einfachen `textarea` tun.

Mit einem Javascript-Editor wie TinyMCE wird die Eingabe aber sehr
vereinfacht: TinyMCE verwandelt eine normale Textarea in einen wysiwyg-Editor:

![Normale Textarea (oben) kann mit TinyMCE in einen wysiwyg-Editor (unten) verwandelt werden](/images/tinymce.png)


### Abspeichern von HTML

Bevor wir das eingegeben HTML abspeichern, wollen wir es
streng kontrollieren: Im Profil sollen nur die HTML-Tags
`<p>` und `<b>` verwendet werden können, mehr nicht.

Bevor die Daten also in dei Datenbank kommen werden
alle anderen Tags entfernt:

<php>
$description = strip_tags( $_POST['description'], "<p><b>" );
</php>

§

Nun können Sie auch die Ausgabe des Profils umstellen und auf das Escapen
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


## Markdown

Markdown ist eine sehr simple Formatierungs-Sprache - viel einfacher als HTML.

<plain caption="Beispiel für einen Text in Markdown">
  ### Abspeichern von HTML

  Bevor wir das eingegeben HTML abspeichern, wollen wir es
  streng kontrollieren: Im Profil sollen nur die HTML-Tags
  `<p>` und `<b>` verwendet werden können, mehr nicht.
</plain>

Dieses Format wird in der Datenbank gespeichert. Erst bei
der Ausgabe als HTML wird Markdown in HTML verwandelt.


### Markdown eingeben

Für Markdown gibt es wieder eigene editoren, z.B. https://simplemde.com/

![Screenshot von SimpleMDE](simplemde.png)



### Markdown darstellen

Mit einem "Markdown Parser" wird das Markdown-Format gelesen und
in HTML übersetzt:

<php>
include 'Parsedown.php';
$Parsedown = new Parsedown();
echo $Parsedown->text('## Hello HTML!');
</php>



## Siehe auch

* Kapitel über [Cross Site Scripting (XSS)](/security/a3-injection/#slide-7)
