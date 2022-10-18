---
title: Responsive Design
order: 21
---

Wie im Kapitel [Das Web und HTML](/das-web-und-html/) beschrieben gibt es viele verschiedene Ausgabegeräte für Webseiten. Für die Gestaltung des visuellen Layouts von Webseiten spielt dabei die die Größe des Geräts, die Auflösung und die Pixeldichte eine wichtige Rolle.## Verschiedene visuelle Ausgabegeräte

Wenn wir nur Laptops und Smartphones vergleichen sehen wir schon große
Unterschiede in der Größe in cm und der Auflösung in Pixel. Die Auflösung hat
sich über viele Jahre erhöht, scheint nun aber ein Plateau erreicht zu haben:


![Laptop vs. Smartphone - viele Möglichkeiten](/images/css-layout/res-and-img.jpg)

## Verschiedene Pixel

Mit [mydevice.io](https://www.mydevice.io/) kann man den aktuellen Browser
vermessen. Die angezeigten Pixel sind die virtuellen CSS Pixel.

![Laptop vs. Smartphone - ein konkretes Beispiel](/images/css-layout/res-and-mydevice.png )

Der Faktor von "echten" Pixel zu Virtuellen CSS Pixeln wird als "CSS Pixel Ratio" bezeichnet.
Der Laptop mit 1440 CSS Pixel auf 2880 echte Pixel hat eine CSS Pixel Ratio von 2.
Das Smartphone mit 360 CSS Pixel auf 1080 echte Pixel hat eine CSS Pixel Ratio von 3.

## CSS Pixel

Im [CSS Standard](https://drafts.csswg.org/css-values-3/#px) findet sich folgende
Definition und folgende Abbildung:

> The reference pixel is the visual angle of one pixel on a device with a pixel density of 96dpi and a distance from
> the reader of an arm’s length. For a nominal arm’s length of 28 inches, the visual angle is therefore about
> 0.0213 degrees. For reading at arm’s length, 1px thus corresponds to about 0.26 mm (1/96 inch).
>
> The image below illustrates the effect of viewing distance on the size of a reference pixel: a reading distance
> of 71 cm (28 inches) results in a reference pixel of 0.26 mm, while a reading distance of 3.5 m (12 feet)
> results in a reference pixel of 1.3 mm.

![Abbildung aus dem CSS Standard: definition des pixels als Winkel](/images/css-layout/css-pixel-definition.png)

Mit [mydevice.io](https://www.mydevice.io/) kann man den aktuellen Browser
vermessen. Die angezeigten Pixel sind die virtuellen CSS Pixel. Mit dem Faktor "pixel-ratio" kann man
die physikalischen Pixel ausrechnen.

By mydevice.io gibt es auch eine [ausführlichere Liste](https://www.mydevice.io/#compare-devices) von aktuellen
Geräten.

## Responsive Design

Große Unterschiede im Platz kann man mit Mediaqueries in CSS behandeln. Die Verwendung von Mediaqueries wurde 2010 in einem Artikel von Ethan Marcotte in "A List Apart" unter dem Begriff "Responsive Webdesign" popularisiert [&rarr;](http://www.alistapart.com/articles/responsive-web-design/).

In diesem ersten Beispiel von responsive Design werden drei verschiedene Layouts
für verschiedene Größen angeboten. Der Inhalt und das HTML Dokument bleiben dabei gleich.

![Das erste Beispiel für "Responsive Webdesign": Darstellung der Seite auf verschiedenen Breiten](/images/css-layout/responsive.png)

§

Die technische Umsetzung des verschiedenen Layouts ist relativ einfach: Mediaqueries erlauben eine "Verzweigung" in CSS.

<css caption="CSS mit Mediaqueries">
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

![/images/responsive/mobile-first.jpg](/images/responsive/mobile-first.jpg)

[Bild: (CC BY-NC) Sauce Babilonia](https://www.flickr.com/photos/saucef/7184615025)

### Mediaqueries and Featurequeries

<css caption="CSS Medaqueries Beispiel">
@media print {
  body { font-size: 10pt; }
}

@media screen {
body { font-size: 13px; }
}

@supports not (display: grid) {
div {
float: right;
}
}
</css>

### Dark Mode

Es gibt sogar mediaqueries für die Präferenz des "dark mode":

<css caption="CSS Medaqueries für color-scheme">
@media (prefers-color-scheme: dark) {
  body {
    color: #ddd;
    background-color: black;
  }
  h1,h2,h3 {
    color: #d39060;
  }
}

@media (prefers-color-scheme: light) {
body {
color: #333333;
background-color: #ffffff;
}
h1,h2,h3 {
color: #333333;
}
}
</css>

siehe auch [MDN: media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) und [MDN: features queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

## Bilder und Responsive Design

Bilder waren lange Zeit ein Grund, warum das Layout von Webseiten nicht flexibel war: weil die Bilder nur für die Darstellung bei einer bestimmten Größe geeigenet waren. Das ist aber seit ca. 2010 anders.

### Pixel

Als Bildformate für `<img>` Tags in Webseiten wurden lange nur Pixel-Formate unterstützt. Diese Formate (jpg, png, gif) sind für die Darstellung bei einer bestimmten Größe gedacht. Die Vergrößerte Darstellung von Pixel-Bildern liefert keine guten Ergebnisse:

![Abbildung 29: Ausschnitte aus einem Pixel Bild, vom Browser (Firefox) in 3 Stufen vergrößert dargestellt](/images/css-layout/pixel-image-zoom.png)

Die Verkleinerte Darstellung ist eine Verschwendung: Wenn ich ein Bild herunterladen muss, dass doppelt So breit und
doppelt so hoch ist, wie mein Browser darstellen kann, dann sind das viermal so viele Daten, und damit eine viermal
so lange Wartezeit!

Es gibt eine moderne Lösung für diese Problematik [Responsive Images](/grafik/images/) - diese werden wir später genauer kennen lernen.

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

## Beispiel

Die [Demo Seite für CSS Grid](/images/cssgrid/#!/responsive) ist responsive.

![/images/css-layout/example-responsive.png](/images/css-layout/example-responsive.png)

§

Für Smartphones ist kein Grid vorgesehen:

<css>
@media screen and (max-width: 660px)  {
  .page_container {
    padding: 10px;
    max-width: 80em;
    font-size: 18px;
    line-height: 24px;
  }
  ...
}
</css>

§

Für Tablets gilt ein Grid mit zwei Spalten:

<css>
@media screen and (min-width: 660px) and (max-width: 1150px)  {

    .page_container {
      display: grid;

      grid-template-columns: 2fr 3fr;
      grid-template-rows: 60px 403px 1fr 1fr 60px 3fr;

      grid-template-areas:  "w1        headline "
                            "portrait  description"
                            "w2        facts"
                            "w2        navigation"
                            "w2        stylename"
                            "w2        css";
    }
    ....

}
</css>

§

für Desktops ein Grid mit drei Spalten:

<css>
@media screen and (min-width: 1200px)  {

    .page_container {
      display: grid;

      grid-template-columns: 270px 5fr 3fr;
      grid-template-rows: 60px 2fr 210px;

      grid-template-areas:  "w1        headline     stylename"
                            "portrait  description  css"
                            "w2        facts        navigation";
    }
    ...

}
</css>

§

und als Easter Egg ist noch eine ganz verrücktes Grid dabei:

![/images/css-layout/easteregg-responsive.png](/images/css-layout/easteregg-responsive.png)

<css>
@media screen and (min-width: 1150px) and (max-width: 1200px) {

    .page_container {
      height:1200px;
      width:1200px;

      display: grid;

      grid-template-columns: 140fr 131fr 152fr 283fr 190fr 166fr;
      grid-template-rows: 114fr 306fr 305fr 131fr 129fr 70fr;

      background-color: black;
      grid-gap: 25px 25px;

      grid-template-areas:
        "w1    w1           w2           w2           headline  headline"
        "w4    description  description  description  facts     facts"
        "w5    description  description  description  portrait  w11"
        "w5    navigation   navigation   w6           w7        w7"
        "gelb  navigation   navigation   w8           css       css"
        "gelb  w9           w9           stylename    css       css"
        "gelb  w9           w9           w10          w10       w10";
    }
    ...

}
</css>
