---
title: Pixel-Bilder
order: 15
---

Im [Grundkurs HTML](/das-web-und-html/html-grundkurs/) haben wir als
erstes Bildformat `svg` gennen gelernt. Für Photos kann man aber
kein Vektorformat verwenden, da brauchen wir ein Pixelformat wie `jpg`.

Genau mit diesen Pixelbildern kommen wir aber in Konflikt mit einer
Grundeigenschaft des Web:

Mobile Geräte mit sehr [hoher Pixeldichte](/css-layout/rahmenbedingungen/#slide-4)
stellen das Web Design vor ein
Dilemma: soll ich - wegen der hochen Auflösung und Pixeldichte - riesige Bilder ausliefern?
Oder - weil es ein mobiles Gerät ist, und die Datenübertragung über
das Handy-Netz so langsam und teuer ist - doch kleine Bilder ausliefern?

# Responsive Images

Um dieses Dilemma zu umgehen wurde das neue Attribute "srcset" für den **img**-Tag entwickelt.
Ausser vom Internet Explorer wird das Attribut seit 2017 von
allen Browsern unterstützt [caniuse srcset](http://caniuse.com/#feat=srcset).

Mit diesem Attribut kann man mehrere Varianten eines Bildes hinterlegen,
der Browser entscheidet welche Version er lädt und darstellt.

<htmlcode>
  <img src="salzburg.jpg" style="width: 1353px; height: 461px;"
       srcset="salzburg.jpg, salzburg@2x.jpg 2x, salzburg@4x.jpg 4x">
</htmlcode>

Das Bild wird immer mit der gleichen Größe an virtuellen Pixel (hier 1353 mal 461 Pixel)
dargestellt. Es stehen aber noch Versionen mit doppelter und vierfacher Höhe und Breite
zur Verfügung, die der Browser laden und darstellen kann.

§

Der folgende Screenshot wurde auf einem Macbook mit Retinadisplay erstellt,
in der oberen Variante wird das "normale" Bild dargestellt, darunter das in
der **2x** Version.

![Ausschnitt aus der Demo-Seite](/images/css-layout/vergleich.jpg)

Die Demo-Seite zeigt vier Abstufungen:

[Demo-Seite für "Responsive Images"](/images/responsive-images/index.html)

Das kann man auch mit Hintergrundbilder machen:

[Demo-Seite für "Responsive Background Images"](/images/responsive-images/background.html)

Zur Erzeugung von vielen Abstufungen kann man den [Responsive IMage Breakpoints Generator](http://www.responsivebreakpoints.com/) verwenden.

# Bilder erzeugen

Auf Mac und Unix kann man die "imagemagick" command line tools
benutzen um die nötigen Bild-Varianten zu erstellen: mit `identify`
kann man Größe und Format von Bildern feststellen, mit `mogrify -geometry`
kann man die Größe eines Bildes verändern:

<shell>
$ identify reviews*
reviews.jpg JPEG 7117x4090 7117x4090+0+0 8-bit sRGB 45.56MB 0.000u 0:00.000

\$ cp reviews.jpg reviews-4000x.jpg

\$ mogrify -geometry 4000x reviews-4000x.jpg

\$ identify reviews-4000x.jpg
reviews-4000x.jpg JPEG 4000x2299 4000x2299+0+0 8-bit sRGB 13.94MB 0.010u 0:00.019

\$ cp reviews-4000x.jpg reviews-2000x.jpg

\$ mogrify -geometry 50% reviews-2000x.jpg

\$ identify reviews-2000x.jpg
reviews-2000x.jpg JPEG 2000x1150 2000x1150+0+0 8-bit sRGB 3.584MB 0.000u 0:00.009

\$ cp reviews-2000x.jpg reviews-1000x.jpg

\$ mogrify -geometry 50% reviews-1000x.jpg

\$ identify reviews\*
reviews-1000x.jpg JPEG 1000x575 1000x575+0+0 8-bit sRGB 839KB 0.000u 0:00.000
reviews-2000x.jpg JPEG 2000x1150 2000x1150+0+0 8-bit sRGB 3.584MB 0.000u 0:00.000
reviews-4000x.jpg JPEG 4000x2299 4000x2299+0+0 8-bit sRGB 13.94MB 0.000u 0:00.000
reviews.jpg JPEG 7117x4090 7117x4090+0+0 8-bit sRGB 45.56MB 0.000u 0:00.000

\$ du -h reviews\*
820K reviews-1000x.jpg
3,4M reviews-2000x.jpg
13M reviews-4000x.jpg
43M reviews.jpg  
</shell>

## Weitere Quellen

- [Responsive Images](https://blog.ycombinator.com/how-to-use-responsive-images/)
- [Responsive Tables](http://blog.cloudfour.com/picking-responsive-tables-solution/)
- [Bildgrößen verändern mit Seam Carving](https://www.youtube.com/watch?v=6NcIJXTlugc)
- [images guide](https://images.guide/) von Addy Osmani
