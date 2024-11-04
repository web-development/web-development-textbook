---
title: Daten absenden
order: 20
---

Was passiert, wenn Sie ein Formular ausfüllen und auf den Absende-Button
drücken? Meist werden Sie an den Webserver zur weiteren Verarbeitung geschickt.
Diese action wird direkt im `<form>`-Tag angegeben.

<htmlcode>
<form action="https://users.ct.fh-salzburg.ac.at/~bjelline/pizza/bestellung.php">
</htmlcode>

Für die Verarbeitung der Daten braucht man ein serverseitiges  Programm - hier
zum Beispiel ein PHP-Programm.

Daten an E-Mail senden
-----------------------

Wenn Sie kein Möglichkeit haben, am Webserver zu programmieren, bleibt als
Alternative, die Daten direkt per E-Mail zu senden. So sieht der entsprechende
HTML-Code des Formulars aus:

<htmlcode>
<form action="mailto:ich@priv.at" method="POST" enctype="text/plain">
</htmlcode>

Achtung: diese Art die Daten zu senden ist sehr fehleranfällig: hierfür muß am Client-Computer nicht nur der Browser funktionieren, sondern auch das E-Mail Programm. Das E-Mail Programm muß richtig konfiguriert sein. Das ist auf vielen Computern am Internet nicht der Fall, oft werden die Daten also nicht erfolgreich versandt sondern gehen verloren.


![Formular per E-Mail oder über den Webserver senden](/images/formulare/mail-or-http.png)


Deswegen sollten Sie diese Methode nicht verwenden, sondern immer über einen Webserver senden!


Daten senden mit Methode GET
-----------------------------

Wird im Form-Tag als Action eine URL mit http(s) angegeben dann werden die Daten #an den Webserver gesendet. Dabei gibt es zwei Methoden: GET und POST. GET ist die einfachere.

§

Hier sehen Sie ein (leicht vereinfachtes) Bestellformular für Flugzeuge das die Methode GET verwendet.


![Formular mit Methode GET](/images/formulare/action-get.png)

Wenn die UserIn auf „Bestellung absenden“ drückt, baut der Browser aus der
action und den Namen und Werten der einzelnen Eingabefelder eine URL zusammen,
die dann aufgerufen wird.


![Abbildung 50: URL einer GET-Anfrage](/images/formulare/action-got.png)


## URL der GET-Anfrage

Die komplette URL lautet im Beispiel:

<htmlcode>
http://localhost/php/test.php?anzahl=4&adresse=Jakob+Haringer+Str.1%0D%0A5020+Salzburg
</htmlcode>

Die URL wird zusammengestellt aus:

* der `action` aus dem `form`-Tag, hier `http://localhost/php/test.php`
* `?` (einem Fragezeichen )
* für alle Eingabefelder, getrennt durch `&` (kaufmännisches Und):
    * Name des Eingabefeldes
    * `=` (Gleich Zeichen)
    * Eingegebener / angeklickter Wert

Falls dabei Sonderzeichen vorkommen  (z.B. Leerzeichen, Zeilenumbrüche, Umlaute,
Fragezeichen, kaufmännisches Und) werden diese wie folgt encodiert:

Statt
Leerzeichen wird ein `+` oder `%20` gesetzt, bei allen anderen Zeichen wird ein `%`
gefolgt von der Hexadezimaldarstellung des ASCII-Code gesetzt  (siehe rfc 2396).
Diese Codierung nennt man URL-Encoding. (siehe
[HTML 4.01 Specification](http://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1).)


URL als Programm-Schnittstelle
-------------------------------

Das Webformular ist nicht notwendig, um eine GET-Anfrage zu erzeugen. Wenn Sie z.B. das Eingabe-Formular von Google analysieren,
werden Sie herausfinden, dass die Anfrage mit dem Suchwort „Schokolade“ so aussieht:

<htmlcode>
http://www.google.com/search?q=Schokolade
</htmlcode>

Sie können diese URL einfach direkt in den Browser eintippen, ohne das Eingabeformular von Google zu verwenden. Sie können diese URL in den Lesezeichen/Favoriten Ihres Browsers speichern oder in einem Link verwenden:

<htmlcode>
<a href="http://www.google.com/search?q=schokolade">Suche nach Schokolade</a>
</htmlcode>

§
Gerade bei Suchmaschinen wird diese Möglichkeit oft genutzt: z.B. durch die Suchfelder, die in den Browsern eingebaut sind:


![Abbildung 51: Suchfeld von Firefox](/images/image237.png)

§

Wenn Sie eine Web-Applikation erstellen müssen Sie auch darauf gefasst sein,
dass die UserInnen nicht nur ihre Web-Formulare verwenden, sondern auch URLs
konstruieren und aufrufen. Die **URL** (und nicht das Formular) ist also eine
**öffentliche Schnittstelle** zu Ihrem Programm!

§


Nun könnte man meinen: "Wenn ich die URL geheim halte ist es doch keine öffentliche Schnittstelle".
Das ist aber ein Trugschluss: auch eine "geheime" URL, die ich nie bewusst öffentlich mache
wird öffentlich werden.  URLs sind im Browser-Cache gespeichert, werden im Browser vorgeschlagen
wenn ich eine URL eintippe, sind in Logfile von Proxies gespeichert.  Selbst URLs die ich blos
im Skype-Chat weitergegen habe, sind dritten bekannt, wie [diese Untersuchung von Heise zeigt](http://www.heise.de/security/meldung/Vorsicht-beim-Skypen-Microsoft-liest-mit-1857620.html)

Das "geheimhalten" einer URL ist also keine geeignete Sicherheitsmaßnahme!
Wenn ich eine Webseite vor Zugriffen schützen will brauche ich dazu Passwörter
und https, siehe [Authentisieren nach RFC 2617](/http/http/#slide-18)
und [HTTPS](/http/http/slide.html#slide-19), beide im Kapitel HTTP, und
das [Kapitel über Sessions](/session/).


## Pricing Attack

Ein lehrreiches Beispiel aus der Frühzeit des Web: es gab einst Webshops, die den Preis der Waren als verstecktes Eingabefeld im Formular speicherten:

<htmlcode caption="Airbus Bestell-Formular">
<form action="order.php" method="GET">
  Anzahl: <input name="anzahl"> <br>
  Adresse: <textarea name="adresse"></textarea><br>
  Preis: 1.000.000 DM
  <input type="hidden" name="preis" value="1000000">
  <input type="submit" value="Bestellung absenden">
</form>
</htmlcode>

§
Das gibt der KundIn die Chance ein „Gegenangebot“ zu senden (als „pricing attack“ bekannt):

<htmlcode>
http://happyshop.com/order.php?anzahl=4&adresse=Urstein+Süd+.1&preis=10
</htmlcode>

Wenn nun das Programm `order.php` einfach den Preis aus der URL übernimmt und
auf die Rechnung schreibt, wird der Airbus recht günstig (für die KundIn)
verkauft.

Merke: Alle Eingaben die eine Web-Applikation erhält sind mit extremer Skepsis zu betrachten!


