---
title: API verwenden
order: 54
---

In diesem Beispiel werden Wetter-Daten von zwei Quellen angezeigt. Dabei
sieht man einen wichtigen Unterschied:

- auf http://openweathermap.org/ ist der Zugriff nur mit API key möglich, auch vom frontend aus
- auf http://at-wetter.tk/ ist der Zugriff auch ohne API key möglich, aber nicht von einem fremden Frontend aus, weil [CORS](/cors/) nicht erlaubt ist.

## Direkter Zugriff auf eine fremde API

Um die API von http://openweathermap.org/ zu benutzen
ist eine Anmeldung und ein API key notwendig. Das ermöglicht
eine Beschränkung der Zugriffe: am Server kann mitgezählt werden
mit welchem API Key wie viele Zugriffe erfolgt sind, und je nach
dem limitiert oder verrechnet werden. Die Preise für die API
sind nach Anzahl der Zugriffen gestaffelt, im April 2023 waren die Preise:

![Preise von openweathermap.org](/images/openweathermap-preise.png)

Beim Zugriff auf die API muss jeweils der API-Key als parameter
mit gesendet werden:

<javascript caption="Zugriff auf die openweathermap API">
fetch("http://api.openweathermap.org/data/2.5/weather?&units=metric&q=London,uk&apikey=....")
.then((response)=>...
</javascript>

Die genaue Struktur der Daten und wie man sie zerlegt kann man entweder
[der Dokumentation](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2) entnehmen, oder einfach in der console erforschen.

ABER ACHTUNG: diese API ist (gratis) nur über http zugänglich.
Die resultierende Webseite kann wieder nur auf http veröffentlicht werden, nicht
auf https.

Um die openweahtermap api auch über https verwenden zu können
ist die nächste Lösung notwendig:

## Zugriff auf eine API über lokales Backend

Es gibt zwei Gründe, warum der direkte Zugriff vom Frontend
auf die API verboten sein kann:

Einen Grund haben wir schon bei openweathermap gesehen: die API ist über
http zugänglich, das frontend wird auf https gehosted. So ist es verboten
auf die API zuzugreifen.

Der zweite mögliche Grund ist CORS. Das tritt zum Beispiel bei der API
`at-wetter.tk` auf.
Die Abfrage scheitert ohne sichtbare Fehlermeldung. In der console wird
in manchen Browsern eine Meldung angezeigt:

![CORS Fehlermeldung](/images/cors-error.png)

In beiden Fällen ist die Lösung dieselbe: man muss die Daten
über das eigene Backend laden.

In PHP ist der Zugriff auf die API ohne Problem möglich:

<php caption="zugriff auf die wetter-at.tk API">
header('Content-Type: application/json');
...
$url = "http://at-wetter.tk/api/v1/station/11150/t/$date/7";
$text=file_get_contents( $url );
...
</php>
