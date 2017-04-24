---
title: Rahmenbedingungen 
order: 10
---
Wie in Kapitel 1 beschrieben gibt es viele verschiedene Ausgabegeräte für Webseiten. Für die Gestaltung des Layouts von Webseiten spielt dabei die Bildschirmgröße bzw. die Auflösung eine wichtige Rolle. 

Auflösung
-----------
Zuerst stellt sich die Frage: woher weiß ich, wie hoch die Auflösung am Computer meiner LeserIn ist?  Woher weiß ich, wie viel Platz im Browserfenster zur Verfügung steht?

Die Antwort lautet: ich weiß es nicht, und es gibt keine zuverlässige Methode, mit der man diese Information in jedem Fall herausfinden kann. Es gibt eine Meßmethode mit Hilfe der Programmiersprache JavaScript, mit der man die Größe des Browserfensters messen kann – das Ergebnis der Messung ist natürlich dadurch verfälscht, dass Browser ohne JavaScript ganz aus der Messung herausfallen. Diese Beschränkung sollten Sie bei den folgenden Überlegungen immer beachten. 

Wir werden `Media Queries` kennen lernen - das ist eine Methode um in CSS auf
die Größe des Browserfensters zu reagieren.

Alle Messmethoden die uns zur Verfügung stehen sind unvollständig.

§

Abbildung 25 zeigt einige derzeit (2015) mögliche Bildschirm-Auflösungen. 

 
![Abbildung 25: einige mögliche Bildschirmauflösungen und Seitenverhältnisse 2011,](/images/Vector_Video_Standards2.svg)

basierend auf http://en.wikipedia.org/wiki/Image:Vector_Video_Standards2.svg

Vergleichen Sie die höchsten hier dargestellte Auflösungen mit der geringsten Auflösungen. Da Breite und Höhe (mehr als) verdreifacht sind, steht bei der höchsten Auflösung also (mehr als) die neunfache Fläche zur Verfügung!

§

Abbildung 26 zeigt Statistiken über die Bildschirmauflösung von w3schools.org von 2000 bis 2011. In diesem Zeitraum hat sich die Mehrheit langsam von 800x600 (bis 2003) auf 1024x768 (bis 2008) und schließlich auf höhre Auflösungen verschoben. Achtung: Auf Grund des Messverfahrens werden hier wahrscheinlich nur Desktops erfaßt, nicht mobile Geräte.

 
![Abbildung 26: Statistik über die Bildschirmauflösung,](/images/display-stats.png)

[Datenquelle: w3schools](http://www.w3schools.com/browsers/browsers_display.asp)

Pixeldichte
-----------

Die Angabe der Auflösung erfolgt in Pixel – die reale Größe des Ausgabegerätes (24“ Desktop, 13“ Laptop, mobiles Endgerät) ist bei gleicher Pixel-Auflösung sehr unterschiedlich! Mobile Geräte haben eine geringe Auflösung, aber eine höhere Pixeldichte:

|Gerät|Erscheinungsjahr|Pixel|Diagonale Inch|Pixel per Inch|
|+----|+---------------|+----|+-------------|+-------------|
|Altes 19” LCD Display|2008|1280 × 1024|19 in|86 ppi|
|15” Macbook Pro|2007|1440 × 900|15.4 in|110 ppi|
|Sony PSP 7th gen|09/2005|480 × 272|4.3 in |128 ppi|
|Apple iPhone3|06/2009|480 × 320|3.5 in |163 ppi|
|15” Macbook Pro 'Retina'|06/2012|2880 × 1800|15.4 in |220 ppi|
|Apple iPhone4|06/2010|960 × 640|3.5 in|326 ppi |
|Apple iPad 3rd gen|03/2011|2048×1536|12 in|264 ppi |
|Apple IPhone7|10/2016|1334×750|4.7 in |326 ppi|
|Amazon Kindle Paperwhite|12/2012|768×1024|6 in |212 ppi |
|ASUS Zenbook UX305|04/2015|3200 x 1800|13.3 in |577 ppi|
|Google Nexus One |1/2010|800 × 480|3.7 in |254 ppi |
|Samsung Galaxy S7|2/2016|2560×1440 pixel|5.1 in |577 ppi |
|12” Macbook 'Retina'|03/2015| 2304 × 1440|12 in |226 ppi|
{: class="table table-condensed table-bordered" style="width:auto"}


Brutto-Fläche vs. Netto-Fläche
---------------------------------
Von diesen „Brutto-Angaben“ über die Größe der zur Verfügung stehenden Fläche sind nun noch der Platz für den Fensterrahmen des Browsers, für Scrollbalken, Symbolleisten, und eventuell eingeblendete Favoritenleisten abzuziehen, um den „netto“ verbleibenden Raum für die Gestaltung der Webseite zu erhalten. Abbildung 27 zeigt diese Problematik am Beispiel von Firefox. 

 
![Abbildung 27: Platzbedarf von Browser-Elementen: firefox ohne Sidebar, Internet Explorer mit Favoriten](/images/image100.png)

Umgang mit der Problematik
----------------------------------
Wie gehen WebdesignerInnen mit den verschiedenen Auflösungen um? Ein paar Varianten:

1. Ignorieren und für die eigene Bildschirmauflösung entwerfen.  Manchmal in Kombination mit der Beschriftung „best viewed at 1600x1200“
2. Ignorieren dass es viele Bildschirmauflösungen gibt, und für das Minimum entwerfen. 
3. Zwei oder drei Entwürfe, die den gleichen Inhalt für verschiedene Auflösungen unterschiedlich darstellen.

§

Dazu ein strenges Urteil:

1. ist völlig inadäquat für das Medium Web. „best viewed“ ist eine Zumutung für alle LeserInnen auf "unpassenden"  Ausgabegeräten. Stellen Sie sich vor, am Eingang eines Gebäudes wäre neben der Treppe ein Schild angebracht „nur benutzbar für Leute die Treppen steigen können“. Das Problem wurde erkannt, und absichtlich nicht gelöst?
2. Zeigt schon ein Minimum an Wissen über das Web, ignoriert aber die gestalterische Herausforderung des Mediums. Weil solch ein Entwurf auf einem Bildschirm mit hoher Auflösung sehr klein auf einer großen leeren Fläche erscheint wird es spöttisch „Briefmarkenlayout“ genannt.
3. Nur das verdient wirklich die Bezeichnung „Webdesign“.

Im nächsten Kapitel werden mit "Responsive Design" und "Responsive Images" die aktuellen
Antworten im Web Design vorgestellt.
