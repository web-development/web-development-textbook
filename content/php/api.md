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

Einzige Ausnahme: es gibt einige API Keys die im Frontend  verwendet
werden müssen, z.B. für Google Maps. Diesen Key kann man gar nicht geheim halten,
aber es gibt andere Methoden um eine Wiederverwendung durch Fremde
zu vermeiden. z.B. funktioniert der Key nur wenn er auf einer bestimmten
Domain eingesetzt wird.


## Beispiel Openweathermap

Um die API von [http://openweathermap.org/](http://openweathermap.org/) zu benutzen
ist eine Anmeldung und ein API key notwendig. Die Preise für die API
sind nach Anzahl der Zugriffen gestaffelt, im April 2023 waren die Preise:

![Preise von openweathermap.org](/images/openweathermap-preise.png)

## Abfrage von Openweathermap

Beim Zugriff auf die API muss jeweils der API-Key als parameter
mit gesendet werden. Sonst ist es aber wirklich nur ein GET Request
and eine URL. So einen einfachen HTTP Request kann man mit `file_get_contents()` durchführen.

<php>
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


## Beispiel Gemini

Die API von Gemini ist etwas komplexer: man braucht einen POST-Request und JSON
im Body des Requests.  Dann kann man verschiedene KI-Modelle verwenden, um mit
Text, Code, Bild, Video und Audio  zu arbeiten (multimodal).


## POST Request senden

Für das Senden von POST Requests braucht man zusätzlich zum Befehl `file_get_contents` einen `stream context`.

So kann man einen POST Request machen, der Daten als JSON verschickt, und die
zurückgegebenen JSON-Daten wieder in PHP Datenstrukturen übersetzt:

<php caption="POST Request, JSON rein und JSON raus">
function post_and_decode_json(string $url, array $data): array
{
    $options = [
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/json\r\n",
            'content' => json_encode($data),
            'ignore_errors' => true
        ]
    ];

    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    if ($response === false) {
        throw new Exception("Failed to connect to the API.");
    }

    $decoded = json_decode($response, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Failed to decode API response: "
            . json_last_error_msg()
        );
    }

    return $decoded;
}
</php>

## Mit Gemini Text generieren


In diesem einfachen Beispiel verwenden wir das Model "gemini-2.5-flash" um Text zu generieren.


<php>
require "config.php";
require "functions.php";

$url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' . $GEMINI_API_KEY;

$prompt = "Wähle eine europäische Hauptstadt aus, und beschreibe sie in drei Sätzen ohne ihren Namen zu nennen. Gib nur die drei Sätze zurück, ohne weitere Erklärungen oder Einleitungen. Die Antwort soll auf Deutsch sein.";

$data = [
    'contents' => [
        [
            'parts' => [
                ['text' => $prompt]
            ]
        ]
    ]
];

$result = post_and_decode_json($url, $data);

echo "Antwort von Gemini:\n";
echo "<pre>";
print_r($result);
echo "</pre>";


if (isset($result['candidates'][0]['content']['parts'][0]['text'])) {
    $answer = trim($result['candidates'][0]['content']['parts'][0]['text']);
    echo "Die Antwort ist $answer";
} else {
    throw new Exception('Unexpected response format.');
}
</php>

[Demo](https://users.ct.fh-salzburg.ac.at/~bjelline/quiz-backend/testing.php)


## Antwort von Gemini

Die Antwort ist immer eine komplexe JSON-Struktur

![](/images/php/gemini-good.png)




## Fehler von Gemini

Nicht immer bekommt man eine antwort

![](/images/php/gemini-bad.png)



## Mit Gemini JSON generieren

Wenn man strukturierte Daten haben will, kann man ein JSON-Schema vorgeben.
Gemini antwortet dann dem Schema entwprechend.

<php>
$schema = [
    'type' => 'object',
    'properties' => [
        'question' => ['type' => 'string'],
        'options'  => [
            'type' => 'array',
            'items' => ['type' => 'string'],
            'minItems' => 4,
            'maxItems' => 4
        ],
        'answer'   => ['type' => 'string', 'description' => 'The correct option (a, b, c, or d)']
    ],
    'required' => ['question', 'options', 'answer']
];

// Use the 2.5-flash model (or 3-flash-preview)
$url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' . $GEMINI_API_KEY;

$data = [
    'contents' => [
        ['parts' => [['text' => "Erstelle eine Multiple-Choice-Quizfrage zum Thema {$topic}."]]]
    ],
    'generationConfig' => [
        'response_mime_type' => 'application/json',
        'response_schema'    => $schema,
    ]
];

$result = post_and_decode_json($url, $data);

echo "Antwort von Gemini:\n<pre>";
print_r($result);
echo "</pre>";

if (isset($result['candidates'][0]['content']['parts'][0]['text'])) {
    $json_string = $result['candidates'][0]['content']['parts'][0]['text'];
    $json_data = json_decode($json_string, true);

    if (json_last_error() === JSON_ERROR_NONE) {
        echo "Parsed JSON:\n";
        echo "<pre>";
        print_r($json_data);
        echo "</pre>";
    }
} else {
    throw new Exception('API Failure or Invalid JSON');
}
</php>

## Antwort von Gemini

![](/images/php/gemini-schema.png)

## Siehe auch

* [JSON](/json/)
