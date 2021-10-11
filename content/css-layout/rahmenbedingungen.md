---
title: Rahmenbedingungen
order: 10
---

Wie im Kapitel [Das Web und HTML](/das-web-und-html/) beschrieben gibt es viele verschiedene Ausgabegeräte für Webseiten. Für die Gestaltung des visuellen Layouts von Webseiten spielt dabei die die Auflösung und die Pixeldichte eine wichtige Rolle.

## Auflösung

Hier ein Überblick über mögliche Bildschirm-Auflösungen:

![Bildschirmauflösungen und Seitenverhältnisse](/images/css-layout/Vector_Video_Standards2.svg)

basierend auf http://en.wikipedia.org/wiki/Image:Vector_Video_Standards2.svg

Vergleichen Sie die höchsten hier dargestellte Auflösungen mit der geringsten Auflösungen. Da Breite und Höhe (mehr als) verdreifacht sind, steht bei der höchsten Auflösung also (mehr als) die neunfache Fläche zur Verfügung!

§

Die typische Auflösung hat sich über Jahre stark verändert. Diese Statistik
von w3schools.org reicht von 2000 bis 2021. In diesem Zeitraum hat sich die Mehrheit langsam von 800x600 (bis 2003) auf 1024x768 (bis 2008) und schließlich auf höhere Auflösungen verschoben.

In der Statistik ist nicht ausgewiesen, ob Mobile Endgeräte mitgezählt werden oder nicht.
An anderer Stelle kann man nachlesen das ca. 14% der Zugriff von Mobile erfolgen.

![Abbildung 26: Statistik über die Bildschirmauflösung,](/images/css-layout/display-stats.png)

[Datenquelle: w3schools](http://www.w3schools.com/browsers/browsers_display.asp)

## Pixeldichte

Die Angabe der Auflösung erfolgt in Pixel – die reale Größe des Ausgabegerätes (24“ Desktop, 13“ Laptop, mobiles Endgerät) ist bei gleicher Pixel-Auflösung sehr unterschiedlich! Mobile Geräte haben oft eine höhere Pixeldichte, die in Pixel pro Inch oder Pixel pro cm gemessen wird.

|Gerät|Erscheinungsjahr|Pixel|Diagonale Inch|Pixel per Inch|
|+----|+---------------|+----|+-------------|+-------------|
|Altes 19” LCD Display|2008|1280 × 1024|19 in|86 ppi|
|13” Macbook Pro/Air|2019|2560 x 1600|13 in |227 ppi|
|15” Macbook Pro 'Retina'|2012|2880 × 1800|15.4 in |220 ppi|
|16” Macbook Pro|2019|3072×1920 |16 in|226 ppi|
|Apple iPhone 3|2009|480 × 320|3.5 in |163 ppi|
|Apple iPhone 7|2016|1334 × 750 Pixel|5.5 in|326 ppi|
|Apple iPhone X|2017|2436 × 1125 Pixel|5.8 in|458 ppi|
|Google Nexus One |2010|800 × 480|3.7 in |254 ppi |
|Samsung Galaxy S7|2016|2560 × 1440 pixel|5.1 in |577 ppi |
|Samsung Galaxy S10|2019|3040 × 1440 pixel|6.1 in |550 ppi |
|Sony PSP 7th gen|2005|480 × 272|4.3 in |128 ppi|
|Apple iPad Pro 11|2018| 2388 x 1668 |11 in|264 ppi |
{: class="table table-condensed table-bordered" style="width:auto"}

Hier findet man einen Faktor 6 zwischen höchster und geringster Pixeldichte.

## CSS Pixel sind virtuelle Pixel

Um die Gestaltung von Webseiten zu vereinfachen verwendet CSS nicht die echten
Pixel, sondern virtuelle Pixel als Grundmaß. Im [Standard](https://drafts.csswg.org/css-values-3/#px) findet sich folgende
Definition und folgende Abbildung:

> The reference pixel is the visual angle of one pixel on a device with a pixel density of 96dpi and a distance from
> the reader of an arm’s length. For a nominal arm’s length of 28 inches, the visual angle is therefore about
> 0.0213 degrees. For reading at arm’s length, 1px thus corresponds to about 0.26 mm (1/96 inch).
>
> The image below illustrates the effect of viewing distance on the size of a reference pixel: a reading distance
> of 71 cm (28 inches) results in a reference pixel of 0.26 mm, while a reading distance of 3.5 m (12 feet)
> results in a reference pixel of 1.3 mm.

![Abbildung aus dem CSS Standard: definition des pixels als Winkel](/images/css-layout/pixel.png)

Mit [mydevice.io](https://www.mydevice.io/) kann man den aktuellen Browser
vermessen. Die angezeigten Pixel sind die virtuellen CSS Pixel. Mit dem Faktor "pixel-ratio" kann man
die physikalischen Pixel ausrechnen.

By mydevice.io gibt es auch eine [ausführlichere Liste](https://www.mydevice.io/#compare-devices) von aktuellen
Geräten.

## Viele Auflösungen

![Vergleich der Auflösungen](/images/resolutions.jpg)

## Umgang mit der Problematik

Wie gehen WebdesignerInnen mit den verschiedenen Auflösungen und Pixeldichten um? Ein paar Varianten:

1.  Ignorieren und für die eigene Bildschirmauflösung entwerfen. Manchmal in Kombination mit der Beschriftung „best viewed at 1600x1200“
2.  Ignorieren dass es viele Bildschirmauflösungen gibt, und für das Minimum entwerfen.
3.  Zwei oder drei Entwürfe, die den gleichen Inhalt für verschiedene Auflösungen unterschiedlich darstellen.

§

Dazu ein strenges Urteil:

1.  ist völlig inadäquat für das Medium Web. „best viewed“ ist eine Zumutung für alle LeserInnen auf "unpassenden" Ausgabegeräten. Stellen Sie sich vor, am Eingang eines Gebäudes wäre neben der Treppe ein Schild angebracht „nur benutzbar für Leute die Treppen steigen können“. Das Problem von Rollis und Kinderwägen wurde erkannt, und absichtlich nicht gelöst?
2.  Zeigt schon ein Minimum an Wissen über das Web, ignoriert aber die gestalterische Herausforderung des Mediums. Weil solch ein Entwurf auf einem Bildschirm mit hoher Auflösung sehr klein auf einer großen leeren Fläche erscheint wird es spöttisch „Briefmarkenlayout“ genannt.
3.  Nur das verdient wirklich die Bezeichnung „Webdesign“.

Im nächsten Kapitel werden mit "Responsive Design" und "Responsive Images" die aktuellen
Antworten im Web Design vorgestellt.
