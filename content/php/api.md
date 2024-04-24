---
title: API verwenden mit PHP
order: 70
---

API steht für Application Programming Interface. Eine API im Web ist
ein Programm auf einem anderen Webserver, das wir aufrufen können, und da
Daten liefert.

drei Beispiele:

* [Noise Background Image Generator](https://php-noise.com/)
  * beim Aufruf übergibt man 7 Argumente
  * als Rückgabewert erhält man ein (Hintergrund-)Bild
* [Open Library Book Search](https://openlibrary.org/dev/docs/api/search)
  * Beim Aufruf übergibt man einen Such-Parameter `q`
  * als Rückgabewert erhält man sehr viele Daten über die gefundenen Bücher, im JSON-Format
* [openweathermap current](https://openweathermap.org/current)
  * Beim Aufruf übergibt man Längen- und Breitengrad
  * als Rückgabewert erhält man Daten über das aktuelle Wetter, im JSON-Format

## Mit welchen Sprachen kann man APIs abfragen?

Mit jeder Programmiersprache kann man APIs abfragen.

Egal ob PHP, C#, JavaScript, Ruby, Python, .... jede Programmiersprache
kann HTTP-Requests schicken und HTTP-Responses verabeiten.

## Mit welchen Sprachen werden APIs programmiert?

Mit jeder Programmiersprache kann man selbst eine API programmieren.

Egal ob PHP, C#, JavaScript, Ruby, Python, .... für jede dieser Programmiersprache
gibt es Libraries die es einfach machen HTTP-Anfrage zu beantworten.

## API Key

![Schlüssel](/images/key.svg)

Einige APIs sind  völlig frei zugänglich.  Aber für viele braucht man
erst einen API-Key, bevor man eine Antwort von der API erhält.

Das dient dazu eine Überlastung zu vermeiden. Oft sind die ersten paar Zugriffe
gratis, für höhere Zugriffszahlen muss man bezahlen.

Ein API Key ist genau so wichtig und geheim wie ein Passwort und
soll also auch nicht im git repository gespeichert werden.

## Beispiel openweathermap

Um die API von [http://openweathermap.org/](http://openweathermap.org/) zu benutzen
ist eine Anmeldung und ein API key notwendig. Die Preise für die API
sind nach Anzahl der Zugriffen gestaffelt, im April 2023 waren die Preise:

![Preise von openweathermap.org](/images/openweathermap-preise.png)

## Mit PHP auf openweathermap zugreifen

Beim Zugriff auf die API muss jeweils der API-Key als parameter
mit gesendet werden:

<php caption="zugriff auf die API von geosphere.at">
...
require "config.php";
$lat = 47.723; // Breitengrad
$lon = 13.086; // Längengrad
$url ="https://api.openweathermap.org/data/2.5/weather?lon=$lon&lat=$lat&units=metric&apikey=$api_key";
$json_string = file_get_contents( $url );
</php>


Mit dem Befehl `file_get_contents` wird ein HTTP GET Request gesendet.
Die Antwort erhalten wir als String als Rückgabewert.

[Demo](https://users.multimediatechnology.at/~bjelline/wetter/weather.php)

## Datenformat der API

Die Daten werden je nach API in verschiedenen Formaten geliefert.
Besonders beliebt sind XML und JSON.

Im Fall der openweatherapi ist es JSON. Im Browser Firefox wird es so dargestellt:

![JSON Darstellung in Firefox](/images/json_side_by_side.png)


## JSON in PHP weiter verarbeiten

Mit `json_decode` kann man den String in eine PHP Datenstruktur
umwandeln: in verschachtelte (assoziative) Arrays

<php caption="JSON in PHP Datenstrukturen umwandeln">
$json_string = file_get_contents( $url );
$data = json_decode($json_string, true);

echo $data['main']['temp'];
</php>

## Siehe auch

* [JSON](/json/)





