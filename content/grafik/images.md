---
title: Pixel-Bilder
order: 15
---

Im [Grundkurs HTML](/das-web-und-html/html-grundkurs/) haben wir als
erstes Bildformat `svg` gennen gelernt. Das ist praktisch, weil es
auf jeder Bildschirmgröße gut funktioneirt.

Für Photos kann man aber kein Vektorformat verwenden, da brauchen wir ein Pixelformat wie `webp` oder `jpg`.

ACHTUNG: Der Einsatz von `gif` und `png` ist nicht mehr sinnvoll.

* Animierte gifs wurden durch video ersetzt
* Bilder mit wenigen Farben und klaren Kanten (inkl. Transparenz), für die
man früher `.png` verwendet hat, werden nun als `.svg` gespeichert.


## Problematik Pixeldichte und Auflösung

Mit diesen Pixelbildern kommen wir aber in Konflikt mit einer
Grundeigenschaft des Web:  Sowohl Auflösung als auch Pixeldichte variieren stark.


Besonders Mobile Geräte mit sehr hoher Pixeldichte
stellen das Web Design vor ein Dilemma:

- hohen Auflösung und Pixeldichte - soll ich riesige Bilder ausliefern?
- Datenübertragung über das Handy-Netz ist langsam und teuer - kleine Bilder ausliefern?

## Wiederholung: CSS Pixel vs. Physikalische Pixel

Die Pixel in CSS sind keine "echten" Pixel, sondern
entsprechen dem, was das menschliche Auge ungefähr als Punkt erkennen kann.
Damit ist das Pixel je nach Entfernung verschieden groß - gleich bleibt
der Einfallswinkeln ins Auge von 0.0213°

Siehe [Spezifikation: reference pixel](https://drafts.csswg.org/css-values-4/#reference-pixel)

Wenn ein Ausgabegerät eine höhere Pixeldichte hat, kann
ein CSS Pixel z.B. 2x2 physikalischen Pixeln entsprechen,
bei einer "Device Pixel Ratio" von 2.

## Responsive Images

Wer soll die Entscheidung treffen welche Auflösung eines Bildes die Beste ist? Wir, beim Erstellen der Webseite? Nein, wir haben nicht genug Informationen. Diese Entscheidung trifft der Browser.

Wann trifft der Browser diese Entscheidung? Möglichst früh!  Schon während die HTML-Seite noch
geladen wird soll der Browser möglichst viel Information haben um die Entscheidung zu treffen.
Daraus ergibt sich, dass wir hier nicht Javascript verwenden können, oder CSS das aus einer
separaten Datei geladen wird.  Die nötige Information muss direkt im HTML-Code vorhanden sein.

Wir bieten Bilder in verschiedenen Größen also mittels HTML an.

## srcset-Attribut

Das Attribute **srcset** für den **img**-Tag ermöglicht es mehrere
Varianten des Bildes anzugeben.
Das  Attribut wird seit 2017 von
allen Browsern unterstützt, siehe [caniuse srcset](http://caniuse.com/#feat=srcset).


Im Attribut `srcset` gibt man mehrere Bilder an, und ihre intrinsische Größe in Pixeln.
Hier wird `w` statt `px` verwendet -  das wären ja CSS-Pixel.

Im Attribut `sizes` gibt man die Breite in CSS-Pixel an, in der das Bild dargestellt wird.
Achtung: man muss immer noch mit CSS diese Breite setzen!

<htmlcode>
<img src="japanischer-garten_350px.webp"
  sizes="350px"
  srcset="japanischer-garten_350px.webp 350w,
     japanischer-garten_701px.webp 701w,
     japanischer-garten_1401px.webp 1401w,
     japanischer-garten_2802px.webp 2802w,
     japanischer-garten_4500px.webp 4500w,
     japanischer-garten_6000px.webp 6000w" />
</htmlcode>

Nun kann der Browser das geeignete Bild auswählen. z.B. bei einer Pixeldichte von 2 dppx:
350 * 2 = 700.  Der Browser wählt dann das nächstgrößere Bild aus und stellt es dar, also in diesem
Beispiel das Bild mit einer Breite von 701.

[Demo-Seite für "Responsive Images"](/images/responsive-images/index.html)

§

Im Attribut `sizes` kann man Mediaqueries verwenden: erst die Bedingung in Klammern,
dann die Größe die verwendet werden soll.



<htmlcode>
sizes="(min-width: 1200px)) 1200px
       ((min-width: 800px) and (max-width: 1200px)) 1000px,
       ((min-width: 300px) and (max-width: 800px)) 500px,
        (max-width: 300px) 200px"
</htmlcode>

## Bilder erzeugen

Zur Erzeugung von Varianten des Bildes kann man den [Responsive Image Breakpoints Generator](http://www.responsivebreakpoints.com/) verwenden.

Mit den "imagemagick" command line tools kann man das auch am eigenen Computer
machen und automatisieren, siehe [Kommandozeile: Bild und Video](/kommandozeile/bild-und-video/#slide-5).


## Weitere Quellen

- [Responsive Tables](http://blog.cloudfour.com/picking-responsive-tables-solution/)
- [Bildgrößen verändern mit Seam Carving](https://www.youtube.com/watch?v=6NcIJXTlugc), jetzt auch [in JavaScript](http://davidalbertoadler.com/seam-carving-js/)
- [images guide](https://images.guide/) von Addy Osmani
