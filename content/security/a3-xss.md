---
title: A7 - XSS
order: 70
---

Auf Platz 7 der OWASP Top 10 2017 (Platz 3 in OWASP 2013).

Die OWASP beschreibt dieses Problem allgemein so:

> XSS-Schwachstellen treten dann auf, wenn die Anwendung von BenutzerIn X eingegebene Daten übernimmt und an den Browser anderer BenutzerInnen zurücksendet, ohne sie hinreichend zu validieren und zu escapen.

Als mögliche Auswirkung einer XSS-Schwachstelle beschreibt die OWASP:

> Cookies (und damit auch Sessions) von BenutzerInnen meiner Seite können gestohlen werden, die Darstellung der Webseite kann verfälscht werden, eine automatische Weiterleitung auf andere Seiten, z.B. Malware-Seiten kann eingebaut werden.

Der schlimmste Fall wäre die Installation eines sogenannten XSS Proxies, der es der AngreiferIn ermöglicht die Browser von BesucherInnen fernzusteuern.

## Cross Site?

Diese Attacke wird "über die Bande gespielt", es ist ein Drama mit drei Rollen:

- Hilda Harmlos stellt eine Webseite mit XSS-Schwachstelle aufs Netz, zum Beispiel mit einem Forum.
- Alyssa P. Hacker erstellt einen Forum-Eintrag, der die XSS-Schwachstelle ausnutzt.
- Peter Publikum will das Forum lesen, und wird dabei attackiert.

Es ist also nicht die Site der Hackerin, die hier gefählich ist, sondern eine andere, scheinbar
harmlose Seite.

## Vermeidung von XSS

Cross Site Scripting kann komplett vermieden werden, wenn man niemals Input von BenutzerInnen auf der Webseite wiedergibt.
Das ist ein seltener, aber sehr sicherer Fall.

XSS vermeinden kann man mit zwei Verteidigungs-Linien:

- Schon bei der Eingabe (mit einer white-list) alles Entfernen was nicht harmlos ist.
- Bei der Ausgabe immer ein geeignetes Escaping verwenden

## Eingabe validieren in PHP

Achtung: der PHP Befehl `strip_tags` enfernt keine Attribute aus erlaubten Tags, es ist
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

Die Antwort ergibt sich aus den eben beschreibenen verschiedenen Kontexten:

Bei der Eingabe weiss ich noch nicht, in welchem Kontext die Daten später 
verwendet werden.  Ich speichere die Daten in einem möglichst neutralen Format
in der Datenbank.  Bei der Ausgabe kenne ich den Kontext, und kann die
richtige Escape-Funktion wählen.

## Content Security Policy

Eine Content Security Policy wird als Header im HTTP Response oder als
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


## Mehr

- Siehe [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- Wir haben das Problem zuerst besprochen im Kaptiel [PHP DB Schreiben: Daten Bearbeiten](https://web-development.github.io/php-db-schreiben/daten-editieren/)




