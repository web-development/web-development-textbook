---
title: Responsive Design
order: 40
---

## Responsive Design

Große Unterschiede im Platz kann man mit Mediaqueries in CSS behandeln. Die Verwendung von Mediaqueries wurde 2010 in einem Artikel von Ethan Marcotte in "A List Apart" unter dem Begriff "Responsive Webdesign" popularisiert [&rarr;](http://www.alistapart.com/articles/responsive-web-design/).

In diesem ersten Beispiel von responsive Design werden drei verschiedene Layouts
für verschiedene Größen angeboten. Der Inhalt und das HTML Dokument bleiben dabei gleich.

![Das erste Beispiel für "Responsive Webdesign": Darstellung der Seite auf verschiedenen Breiten](/images/css-layout/responsive.png)

§

Die technische Umsetzung des verschiedenen Layouts ist relativ einfach: Mediaqueries erlauben eine "Verzweigung" in CSS.

<css caption="CSS mit Mediaqueries: Nur wenn Darstellung am Screen, und Breite kleiner gleich 480 Pixel">
@media screen and (max-width: 480px) {
  .column {
    width: 100px;
  }
  /* weitere Regeln für kleine Screens */
}
/* allgemein gültige Regeln */
</css>

### Mobile First

Luke Wroblewski schlug 2009 unter dem Slogan "Mobile First" vor, zuerst die mobile Version der Website zu gestalten, und davon dann die "größeren" Versionen abzuleiten [&rarr;](http://www.lukew.com/ff/entry.asp?933).

### Mediaqueries

siehe auch [MDN](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries)

### Featurequeries

siehe auch [MDN](https://developer.mozilla.org/de/docs/Web/CSS/@supports)

## Bilder und Responsive Design

Bilder waren lange Zeit ein Grund, warum das Layout von Webseiten nicht flexibel war: weil die Bilder nur für die Darstellung bei einer bestimmten Größe geeigenet waren. Das ist aber seit ca. 2010 anders.

### Pixel

Als Bildformate für `<img>` Tags in Webseiten wurden lange nur Pixel-Formate unterstützt. Diese Formate (jpg, png, gif) sind  für die Darstellung bei einer bestimmten Größe gedacht. Die Vergrößerte Darstellung von Pixel-Bildern liefert keine guten Ergebnisse:

![Abbildung 29: Ausschnitte aus einem Pixel Bild, vom Browser (Firefox) in 3 Stufen vergrößert dargestellt](/images/css-layout/pixel-image-zoom.png)

Die Verkleinerte Darstellung ist eine Verschwendung: Wenn ich ein Bild herunterladen muss, dass doppelt So breit und
doppelt so hoch ist, wie mein Browser darstellen kann, dann sind das viermal so viele Daten, und damit eine viermal
so lange wartezeit!

### Vektor

Mit dem Format SVG steht auch ein vektor-basiertes Bildformat für das Web zur Verfügung. SVG-Bilder können in beliebiger Größe verwendet werden. Die Einbindung erfolgt mit dem img-Tag:

    <img src="circle.svg">

![Abbildung: Kreis in SVG-Darstelllung](/images/circle.svg)

## Schriftgröße

Die Schriftgröße im Browser unterliegt nur bedingte der Kontrolle durch HTML und CSS Code. Das „letzte Wort“ hat hier die LeserIn, die die Schrift größer oder kleiner stellen kann. z.B. in MSIE unter Ansicht → Schriftgrad, in Firefox mit der Tastenkombination `STRG +` oder `STRG –`.

Je nach Schriftgröße und zur Verfügung stehendem Platz im Browser-Fenster wird der Browser die Absätze geeignet in Zeilen umbrechen, wie in Abbildung 31 gezeigt.

![Abbildung 31: Darstellung von Text bei verschiedenen Fensterbreiten und Schriftgrößen](/images/css-layout/zeilenumbruch.png)

## Zoomen

Alle Browser bieten das Vergrößern und Verkleinern der Webseite an,
meist mit einer Tastenkombination mit `+` bzw. `-`.
Dabei werden die CSS Pixel vergrößert bzw. verkleinert. Die Größe des
Viewport und die CSS pixel-ratio verändern sich also, dadurch werden
andere Mediaqueries schlagend.



TODO: Typische Beispiele für Responsive Design