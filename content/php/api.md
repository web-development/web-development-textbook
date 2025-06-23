---
title: API verwenden mit PHP
order: 70
---

API steht für Application Programming Interface. Eine API im Web ist
ein Programm auf einem anderen Webserver, das wir aufrufen können, und das
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
* [Googles AI Gemini](https://gemini.google.com/)
  * Beim Aufruf übergibt man den Prompt, und eventuell zusätzliche Daten
  * als Rückgabewert erhält man den generierten Text, plus eventuell ein Bild, etc..

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
mit gesendet werden. Sonst ist es aber wirklich nur ein GET Request
and eine URL. So einen einfachen HTTP Request kann man mit `file_get_contents()` durchführen.

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

[Demo](https://users.ct.fh-salzburg.ac.at/~bjelline/wetter/weather.php)

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


## mit PHP einen POST Request senden

Die API von Gemini ist etwas komplexer: man braucht einen POST-Request und JSON
im Body des Requests.  Hierfür kann man `curl` verwenden.  Curl ist eigentlich eine
C Library, man kann sie direkt als Kommandozeilen-Befehl verwenden, sie ist
aber auch in PHP eingebaut aber etwas umständlich zu benutzen.

So kann man einen POST Request machen, der Daten als JSON verschickt, und die
zurückgegebenen JSON-Daten wieder in PHP Datenstrukturen übersetzt:

<php caption="POST Request, JSON rein und JSON raus">
function post_request($url, $data) {

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

    $result_string = curl_exec($ch);
    $error = curl_error($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($error) {
        throw new Exception('cURL error: ' . $error . ' with http_code:' . $http_code);
    }

    if ($http_code !== 200) {
        throw new Exception('HTTP error: ' . $http_code . 'raw_response: '. $result_string);
    }

    $result_data = json_decode($result_string, true);

    if(json_last_error() === JSON_ERROR_NONE){
        return $result_data;
    }

    throw new Exception('Invalid JSON response from API ' . json_last_error_msg(). 'raw_response: '. $result_string);
}
</php>


## die Gemini API

Die Gemini API erwartert eine komplexe Datenstruktur als Input und
liefert eine komplexe Datenstruktur als Output:

<php>

    $prompt = "Erstelle eine Multiple-Choice-Quizfrage zum Thema {$topic} mit dem Schwierigkeitsgrad {$difficulty}. Verwende die Sprache Deusch, und eine positive Frage, keine Verneinung. Gib vier Antwortmöglichkeiten (a, b, c, d) an und markiere die richtige Antwort. Formatiere die Ausgabe als JSON mit den Schlüsseln 'question', 'options' und 'answer'.";

    $url = 'https://generativelanguage.googleapis.com/'
         . 'v1beta/models/gemini-2.0-flash:generateContent?key=' . $GEMINI_API_KEY;
    $data = [
        'contents' => [
            [
                'parts' => [
                    ['text' => $prompt]
                ]
            ]
        ]
    ];
    $result = post_request($url, $data);

    // echo "<pre>";
    // print_r($result);
    // echo "</pre>";

    if (isset($result['candidates'][0]['content']['parts'][0]['text'])) {
        $api_response = $result['candidates'][0]['content']['parts'][0]['text'];

        $api_response = str_replace('```json', '', $api_response);
        $api_response = str_replace('```', '', $api_response);

        // echo "<pre>";
        // print_r($api_response);
        // echo "</pre>";

        // Attempt to parse the expected JSON format. If it fails, return the raw text.
        $json_data = json_decode($api_response, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            return $json_data;
        } else {
            throw new Exception('Invalid JSON response from API ' . json_last_error_msg());
        }

    } else {
        throw new Exception('Unexpected API response format: ' . $result);
    }
</php>



## Siehe auch

* [JSON](/json/)
