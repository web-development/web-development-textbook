---
title: Responsive Design
order: 21
---

Wie im Kapitel [Das Web und HTML](/das-web-und-html/) beschrieben gibt es viele verschiedene Ausgabegeräte für Webseiten. Für die Gestaltung des visuellen Layouts von Webseiten spielt dabei die die Größe des Geräts, die Auflösung und die Pixeldichte eine wichtige Rolle.

## Verschiedene visuelle Ausgabegeräte

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

## Responsive Design

Große Unterschiede im Platz kann man mit Mediaqueries in CSS behandeln. Die Verwendung von Mediaqueries wurde 2010 in einem [Artikel von Ethan Marcotte](http://www.alistapart.com/articles/responsive-web-design/) in "A List Apart" unter dem Begriff "Responsive Webdesign" popularisiert.

In seinem ersten Beispiel von responsive Design werden drei verschiedene Layouts
für verschiedene Größen angeboten. Der Inhalt und das HTML Dokument bleiben dabei gleich:

![Das erste Beispiel für "Responsive Webdesign": Darstellung der Seite auf verschiedenen Breiten](/images/css-layout/2010-responsive.png)

§

Bei diesem [Beispiel](https://www.bundesschatz.at/) aus dem Jahr 2024 sind die Breiten 640px, 1090px und 1655px (in CSS Pixel). Die Bilder werden mit doppelter Pixeldichte angezeigt, siehe [Responsive Images](/grafik/images/)

![Beispiel für Responsive Webdesign aus 2024](/images/css-layout/2024-responsive-design.png)

§

Die technische Umsetzung des verschiedenen Layouts ist relativ einfach:

* Mediaqueries erlauben eine "Verzweigung" auf Grund der Größe des Ausgabegeräts
* Container Queries erlauben eine "Verzweigung" auf Grund der Größe die für ein bestimmtes Element zur Verfügung steht


### Media Query

Auf einem Ausgabegerät, das mindestens 480 CSS Pixel breit ist, wird die Breite der Bilder auf 100 Pixel gesetzt.

<css caption="CSS mit Mediaquery">
@media screen and (max-width: 480px) {
  img {
    width: 100px;
  }
  /* weitere Regeln für kleine Screens */
}
/* allgemein gültige Regeln */
</css>


### Container Query

Wenn das Section-Element mindestens 700 CSS-Pixel breit ist, wird die Überschrift auf 28px gesetzt.

<css caption="CSS mit Container Query">
section {
  container-type: inline-size;
}

@container (min-width: 700px) {
  h2 {
    font-size: 28px;
  }
}
</css>

[Ausführliche Demo](/images/css-layout/container-query.html)

### Viewport

Voraussetzung für responsive design am Handy: man muss den [viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) im meta tag setzen:

    <meta name="viewport" content="width=device-width, initial-scale=1">

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

