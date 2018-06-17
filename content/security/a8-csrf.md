---
title: CSRF
order: 110
---

Auf Platz 8 der OWASP Top 10 2013. In den OWASP Top 10 2017 nicht mehr enthalten.

Die CSRF ist ein Angriff "über die Bande":  Um Site C zu attackieren, wird auf Site B Code hinterlegt. Wenn Userin Alice mit Site B interagiert wird ohne ihr Wissen eine HTTP-Request an Site C geschickt. Da Alice bei C schon eingeloggt ist wird dieser Request "erfolgreich" durchgeführt.

Das Problem tritt also potentiell bei allen Sites auf, bei denen
man auf Dauer eingeloggt bleibt.

§

Ein hypothetisches Beispiel: Die verwundbare Web-Applikation ("Site C") sei
eine Spenden-Plattform.  So könnte das Formular zum Spenden aussehen:

<htmlcode caption="Verwundbarer Web-Applikation">
<form action="spende.php" method="...">
  <input name="betrag">
  <select name="kontonummer">
    <option value="23456789">Greenpeace</option>
    <option value="34567890">Amnesty International</option>
  </select>
  <input type="submit">
<form>
</htmlcode>

§

Je nachdem ob `GET` oder `POST`  verwendet wird, sieht der Code
der Attacke verschieden aus. 

<htmlcode caption="Attacke auf das Formular">
<!-- Attacke auf GET -->
<img src="http://spendenportal.ch/spende.php?betrag=1000&kontonummer=6666666" alt="i can has cheezburger">

<!-- Attacke auf POST -->
<form action="http://spendenportal.ch/spende.php" method="POST">
  <input name="betrag"      value="1000" type="hidden">
  <input name="kontonummer" value="6666" type="hidden">
  <input type="submit" value="Like this on Facebook">
</form>
</htmlcode>


## Verteidigung gegen CSRF

Auf meiner Site sollen die UserInnen auf Dauer eingeloggt bleiben können,
aber gleichzeitig sicher sein, dass nicht in ihrem Namen unerwartete Aktionen
vorgenommen werden.  Wie kann ich das sicher stellen?

Die OWASP schlägt als Verteidigungsstrategie einen "Synchronizer Token" vor:
Im Source-Code aller Web-Formulare wird ein Token eingefügt, das zu einer konkreten
Session gehört und nur eine beschränkte Zeit lang gültig ist.

Bei der Behandlung jeder Anfrage wird überprüft ob dieses Token vorhanden ist,
zur Session passt und noch gültig ist.  Ein Request der auf Grund eine CSRF-Attacke
gesendet wurde hat dieses Token nicht und wird nicht bearbeitet.

§

Chris Shiflett schlägt folgenden PHP-Code zur Erzeugung des Tokens vor:

<php caption="Erzeugung des Tokens">
if (!isset($_SESSION['token'])) {
  $token = md5(uniqid(rand(), TRUE));
  $_SESSION['token']      = $token;
  $_SESSION['token_time'] = time();
}
...
<form action="spende.php" method="post">
  <input type="hidden" name="token" value="<?php echo $token; ?>">
  <input name="betrag">
  ...
</php>

§

Wenn ein Request verarbeitet wird, wird überprüft ob das Token vorhanden
ist und noch gültig ist:

<php caption="Check des Tokens">
if (!isset($_SESSION['token']))            throw TokenException;
if ($_POST['token'] != $_SESSION['token']) throw TokenException;

$token_age = time() - $_SESSION['token_time'];
 
if ($token_age > 300)                      throw TokenException;
</php>

## Quellen

Die hier vorgeschlagene Lösung ist eine Variante von
[Shiflett, Chris(2004): Cross-Site Request Forgeries. In: PHP Architect.](http://shiflett.org/articles/cross-site-request-forgeries)


