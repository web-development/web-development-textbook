---
title: Performance
order: 10
---

Was verstehen wir unter "Web Performance"? Aus der Sicht einer BenutzerIn
ist entscheidend wie viel Zeit benötigt wird, um eine Seite zu laden.
Eine andere Frage wäre, wie viele UserInnen wir (mit akzeptabler Antwortzeit)
auf einem bestimmten Server bedienen können.

§

Folgende Kennzahlen werden oft betrachtet:

* page weight = Gesamtgröße der Webseite in Byte (HTML, CSS, Bilder, ...)
* time to first byte = Zeit (in ms) vom Absenden des HTTP Requests bis zur Ankunft des ersten Bytes des Responses
* load time = Zeit bis das Event `load` in Javascript ausgelöst wird

Google definiert als [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics) noch weitere Kennzahlen für die Darstellung der Seite:

![Performance Metrics](/images/perf-metrics-load-timeline.png)

### Mythen über Performance

Selbst wenn man sich mit dem Thema Performance noch nicht intensiv
beschäftigt hat, so hat man doch schon Ideen wo Leistungsprobleme herkommen.
Viele AnfängerInnen sind fasziniert von Details ihrer Programmiersprache wie:
"Wird mein Programm langsamer wenn ich mehr Variablen verwende?"
oder "ist String-Verkettung schneller als String-Interpolation?".

Diese "Mikrooptimierungen" sind in modernen Programmiersprachen fast nie
notwendig. Mit PHP 7, postgres, Linux am Server können sie 150 **gleichzeitig**
zugreifende UserInnen bedienen - also in Summe Tausende am Tag.

Der Versuch, Code zu "optimieren", wenn es kein Problem gibt, oder
wenn man nicht weiss, wo das Problem liegt, ist zum Scheitern verurteilt.
Der Code wird nicht besser, sondern schlechter.

§

Donald Knuth hat das ziemlich eindringlich gesagt:

"The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; **premature optimization is the root of all evil**" -- [Donald Knuth](https://en.wikiquote.org/wiki/Donald_Knuth#Computer_Programming_as_an_Art_.281974.29)

(Das eigentliche Problem ist, dass ProgrammiererInnen viel zu viel Zeit damit verbracht haben, sich über die Effizienz an den falschen Stellen und zur falschen Zeit Gedanken zu machen; **vorzeitige Optimierung ist die Wurzel allen Übels**.)

Erst wenn sie die Performance des Systems gemessen haben,
und herausgefunden haben wo das Problem liegt, können sie wirklich
mit dem "optimieren" beginnen.

### Messung der Web Performance

Im Jahr 2007 veröffentlichte die Arbeitsgruppe "exceptional performance" bei Yahoo
das Browser AddOn `yslow`. Es zeigte erstmals die Ladezeit der einzelnen Teile
einer Webseite im sogenannten "Wasserfall Diagramm":

![displaying http downloads with yslow](/images/network-souders-2008.png)

(Image from Steve Souders [talk at Web 2.0 Expo](http://www.web2expo.com/webexsf2008/public/schedule/detail/3321) in April 2008)

Jeder waagrechte Balken entspricht einer Ressource (html, css, js, bild, ...)
die über HTTP geladen wird. Die x-Achse ist eine gemeinsame Zeitleiste für alle
Requests.

Ein offensichtliches Ergebnis aus diesem Graphen: Das Backend,
das das HTML erzeugt,
ist nur für 5% der Ladezeit verantwortlich. 95% der Zeit
werden mit dem Laden, Parsen und Darstellen von anderen Resourcen
(css, javascript, bilder, ...) verbracht.

Diese Darstellung wurde später in die Developer Tools der verschiedenen
Browser eingebaut, und wird auch im online tool
[webpagetest](https://webpagetest.org/) verwendet.

#### Firefox Developer Tools

![network view in firefox](/images/network-view-firefox.png)

#### Chrome Developer Tools

![network view in chrome](/images/network-view-chrome.png)

#### Webpagetest

Das Open Source Tool "Webpagetest" kann man unter der Adresse
[https://www.webpagetest.org/](https://www.webpagetest.org/)
online benutzen. Die Ergebnisse bleiben auch online und können
leicht mit anderen geteilt werden:

![Webpagetest](/images/webpagetest.org.png)

[Beispiel Ergebnisseite](https://www.webpagetest.org/result/180505_EK_1420fed93949da8afd2e6cba277019bd/)

#### Chrome Developer Tools: Lighthouse Audit

![lighthouse view in chrome](/images/chrome-lighthouse.png)

![lighthouse view in chrome](/images/chrome-lighthouse-2.png)

## Einfache Maßnahmen

### Bilderformat SVG verwenden

Für Logos und Illustration eignet sich SVG besonders gut. Da
es auf jeder Auflösung immer optimal aussieht braucht man
auch nur eine Version des Bildes einzubinden.

![SVG Bild](/images/shapes.svg)

### Kleinste Version eines Bildes ausliefern

Für alle Pixelformate gilt: je mehr Pixel, desto größer die Datei, desto länger
die Ladezeit.

<plain>
    227.886 pizza-500x333.jpg
    756.789 pizza-1000x666.jpg
  2.483.297 pizza-2000x1331.jpg
  8.655.545 pizza-4000x2662.jpg
</plain>

Es macht also nie Sinn, eine größeres Bild auszuliefern, als
dann wirklich angezeigt wird.

![Vergleich der Auflösungen](/images/resolutions.jpg)

Mit Responsive Design und Responsive Images ist das sehr genau möglich:
verschiedene Varianten
des Bildes für verschiedene Auflösungen und Pixeldichten, siehe
[Kapitel Responsive Design](/css-layout/responsive/index.html#slide-9).

### jpeg für Photos verwenden

Das Bildformat `jpg` eignet sich besonders gut für Farbverläufe und viele Farben.
`gif` kann nur 256 Farben darstellen, und ist daher für Photos nicht geeignet.
Die Kompression von `png` funktioniert nur dann wirklich gut, wenn es einfärbige
Flächen gibt - was in Photos fast nie vorkommt. Meist ersetzt man heute `png` durch
`svg`.

<plain>
  8.655.545  pizza-4000x2662.jpg
 12.544.974  pizza-4000x2662.png
</plain>

## Links

* [Ilya Grigorik: Crash Course Web Performance at Fluent 2013](https://www.youtube.com/watch?v=7gtf47D_bu0&list=PLS3jzvALRSe6uP9gVfXLCG6nWo7M0hAJY)
* [Web Performance Adventkalender](https://calendar.perfplanet.com/)
* [Google: User Centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)
