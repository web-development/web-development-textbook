---
title: A3 - Injection + XSS
order: 20
---

Auf [Platz 3 der OWASP Top 10 2021: Injection](https://owasp.org/Top10/A03_2021-Injection/)

Injection-Schwachstellen tauchen auf, wenn eine Anwendung nicht vertrauenswürdige Daten an einen Interpreter weiterleitet. Injection Schwachstellen sind weit verbreitet, wir haben schon  SQL-Injection und Cross Site Scripting (XSS) kennen gelernt.

## SQL Injection

Wir haben im Kapitel [PHP DB Schreiben &rarr; Löschen](/php-db-schreiben/daten-loeschen/) schon SQL Injection behandelt.
Zur Verhinderung von SQL-Injection stellen Datenbanken Prepared Statements zur Verfügung. In PHP
können wir sie so verwenden:

<php caption="Prepared Statements verhindern SQL Injection">
$query = $dbh->prepare('SELECT * FROM users WHERE id=?');
$query->execute(array( $_GET['pid'] ) );
</php>

Mit dem `prepare` wird das SQL-Statement an die Datenbank geschickt,
und dort bereits vor-kompiliert. Die Daten,
die als Input vom User/der Userin kommen werden mit `execute` an die Datenbank
übergeben.  In diesem zweiten Schritt können sie aber nur mehr als
Daten, nicht mehr als SQL interpretiert werden.

## Prepared Statement mit benannten Platzhaltern

Eine zweite Schreibweise für prepared Statement ist noch besser lesbar: dabei
werden statt der Fragezeichen benannte Platzhalter verwendet:

<php caption="Prepared Statements mit benanntem Parameter">
$stm = $dbh->prepare ( 'SELECT * FROM USERS WHERE USERNAME LIKE :name' );
$stm->bindParam(':name', $_POST['name'] );
$stm->execute();
</php>

## Prepared Statement falsch verwenden

Man kann auch mit prepared statments noch Code schreiben, der für Injections anfällig ist.
Wenn man nämlich im String der an prepare übergeben wird Variablen einbettet:

<php caption="Prepared Statements falsch gmacht">
$stm = $dbh->prepare ( "UPDATE users SET newsletter = ? WHERE USERNAME = '$name'" );
$query->execute(array( $_GET['newsletter'] ) );
$stm->execute();
</php>

![](/images/security/fire-extinguisher-fire.jpg)

## OWASP Empfehlungen

Die OWASP empfiehlt:

1. Den Interpreter gänzlich vermeiden, oder
2. Eine Schnittstelle benutzen es dem Interpreter erlaubt zwischen Code und Daten zu unterscheiden (z.B., prepared statements, stored procedures in der Datenbank), oder
3. Den Input von der Userin/dem User geeignet escapen bevor er an den Interpreter weiter gegeben wird

Im dritten und schlechtesten Fall ist weiter zu beachten:

- Bei der Validierung des Inputs immer ein ‘white list’ verwenden, also nur Zeichen erlauben die harmlos sind (auf der "weissen Liste" stehen), alle anderen verwerfen

Unabhängig von den oben genannten Punkt gilt noch die Empfehlung:

- Der Web-Applikation nur minimale Zugriffsrechte zur Datenbank gewähren. Damit kann ein eventueller Schaden durch gelungen Injection minimiert werden.


## Weitere Quellen zu SQL Injection

* Wir haben das Problem zuerst besprochen im Kaptiel [PHP DB Schreiben: Löschen](https://web-development.github.io/php-db-schreiben/daten-loeschen/)
* Siehe auch [SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.md)
* [SQL Injection Knowledge Base](https://www.websec.ca/kb/sql_injection)



## Cross Site Scripting (XSS)

Diese Attacke erfolgt nicht direkt  (AngreiferIn : Opfer), sondern es braucht drei Personen:

- Hilda Harmlos stellt eine Webseite mit XSS-Schwachstelle aufs Netz, zum Beispiel mit einem Forum.
- Alyssa P. Hacker erstellt einen Forum-Eintrag, der die XSS-Schwachstelle ausnutzt.
- Peter Publikum will das Forum lesen, und wird dabei attackiert.

Es ist also nicht die Webseite der Hackerin, die hier gefährlich ist, sondern eine andere, scheinbar
harmlose Seite.

## Vermeidung von XSS

Cross Site Scripting kann komplett vermieden werden, wenn man niemals Input von BenutzerInnen auf der Webseite wiedergibt.
Das ist ein seltener, aber sehr sicherer Fall.

XSS vermeiden kann man mit zwei Verteidigungs-Linien:

- Schon bei der Eingabe wird alles Entfernen, was nicht auf einer "Liste der Erlaubten" Zeichen steht
- Bei der Ausgabe immer ein geeignetes Escaping verwenden.

## Eingabe validieren in PHP

Achtung: der PHP Befehl `strip_tags` entfernt keine Attribute aus erlaubten Tags, es ist
also ganz leicht möglich Javascript in einem `onmouseover` Attribut einzuschummeln.

Statt dessen sollte man einen HTML-Filter wie [HTML Purifier](http://htmlpurifier.org/) verwenden.

## Richtig Escapen

Je nachdem in welchem Kontext man Daten ausgibt muss man verschiedenes Escaping verwenden.
Drei Beispiele, und die dafür passenden PHP-Befehle:

1. in einer URL - `urlencode`
2. in HTML - `htmlspecialchars`
3. in Javascript, als Wert einer Variable - `json_encode`

Es gibt aber noch viele andere Kontexte: XML, PDF, ... jedes Format hat seine eigenen Regeln.


## Wann Escapen?

Wann soll ich die Daten escapen: möglichst früh, direkt nach der Eingabe,
oder möglichst spät, erst bei der Ausgabe?

Die Antwort ergibt sich aus den eben beschriebenen verschiedenen Kontexten:

Bei der Eingabe weiss ich noch nicht, in welchem Kontext die Daten später
verwendet werden.  Ich speichere die Daten in einem möglichst neutralen Format
in der Datenbank.  Bei der Ausgabe kenne ich den Kontext, und kann die
richtige Escape-Funktion wählen.

## Content Security Policy

Die Content Security Policy ist eine moderne Sicherheitsmaßnahme um
XSS zu verhindern.

Die Content Security Policy wird als Header im HTTP Response oder als
META-Tag in HTML and den Client übermittelt.  Aktuelle Browser halten die Policy ein.

Ein Beispiel für den HTTP Header: `Content-Security-Policy: default-src https:`


Im HTML Code kann man den Meta-Tag mit Attribut `http-equiv` verwenden,
um dieselbe Policy zu setzen:

<htmlcode>
    <meta http-equiv="Content-Security-Policy" content="default-src https:">
</htmlcode>


Diese Policy bewirkt zwei Dinge:

- explizit: das Laden von weiteren Resourcen für diese Webseite (Bilder, Fonts, Javascript) wird nur über https erfolgen
- implizit: script-Tags im HTML und der JavaScript-Befehl `eval` sind deaktiviert

Falls man script-Tags im HTML zulassen will, kann man die option `unsave-inline` verwenden:

```
Content-Security-Policy: default-src https: 'unsafe-inline'
```


## Mehr zu XSS

- Siehe [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- Wir haben das Problem zuerst besprochen im Kaptiel [PHP DB Schreiben: Daten Bearbeiten](https://web-development.github.io/php-db-schreiben/daten-editieren/)




