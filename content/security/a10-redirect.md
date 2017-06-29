---
title: Ungeprüfte Um- und Weiterleitungen
order: 100
---

Die OWASP beschreibt dieses Problem allgemein so:

> Anwendungen nutzen regelmäßig Weiter- oder Umleitungen, um Browser auf andere Seiten umzulenken. Manchmal verwendet die angegriffene Seite ungeprüfte Parameter für Umleitungen, so dass eine AngreiferIn die Zielseite selbst festlegen kann.

§

Konkret beschreibt sie zwei Angriffs-Szenarien (hier auf PHP umformuliert)

**Szenario 1:**

Die Anwendung enthält eine Seite namens `redirect.php`, die einen einzigen Parameter `url` verwendet. 
Ein Angreifer setzt eine URL als Parameterwert ein, die BenutzerInnen auf eine Website führt, 
die Schadcode installiert oder Phishing ermöglicht. 

  http://www.example.com/redirect.php?url=evil.com 

**Szenario 2:**

Die Anwendung verwendet interne Umleitungen, um Anfragen auf unterschiedliche Bereiche der Website 
weiterzureichen. Um dies zu erleichtern, können Parameter verwendet werden, um festzulegen, 
auf welchen Bereich im Erfolgsfall umgeleitet wird. In diesem Fall schleust eine
Angreiferin eine URL als Parameter ein, die die Zugangskontrollen der Anwendung umgeht 
und den Browser der Angreiferin auf einen administrativen Bereich leitet, auf den sie 
normalerweise keinen Zugriff hätte. 

  http://www.example.com/boring.php?fwd=admin.jsp

## Weiterleitung in PHP

Wie in Kapitel [PHP erzeugt nicht nur HTML](/http/php-erzeugt/) gezeigt,
werden Weiterleitungen in PHP mit der Funktion `header` implementiert:

<php caption="Weiterleitung in PHP">
<?php
// hier passieren wichtige Dinge ...
header("Location: status.php");
exit; /* fertig, nichts weiter ausgeben! */
?>
</php>

§

Auf keinen Fall sollte ein Parameter direkt in der Konstruktion der URL verwendet werden:

<php caption="Ungeprüfte Weiterleitung in PHP - so nicht programmieren!">
<?php
// hier passieren wichtige Dinge ...
header("Location: " + $_GET['url'] ); // so nicht programmieren!
?>
</php>

§

Die sicherste Variante ist die verwendung einer Whitelist. Hier
wird sichergestellt dass nur an die vorgegebenen URLs weitergeleitet wird:

<php caption="Weiterleitung in PHP - mit Whitelist">
<?php
// whitelist der erlaubten urls

$urls = array(
  "enzyklopaedie" => "http://de.wikipedia.org",
  "landkarte"     => "http://openstreetmap.org",
  "uni"           => "http://ocw.mit.edu/",
  "wissenschaft"  => "http://www.plosone.org/"
);

if ( array_key_exists( $_GET['url'], $urls ) ) {
  header("Location: " . $urls[  $_GET['url'] ]  );
} else {
  header("Location: ich-lass-mich-nicht-hacken.php");
}
?>
</php>

## Mehr

Informationen von Google über [Open Redirects](http://googlewebmastercentral.blogspot.com/2009/01/open-redirect-urls-is-your-site-being.html).

