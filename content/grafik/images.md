---
title: Pixel-Bilder
order: 15
---

Im [Grundkurs HTML](/das-web-und-html/html-grundkurs/) haben wir als
erstes Bildformat `svg` gennen gelernt. Das ist praktisch, weil es
auf jeder Bildschirmgröße gut funktioneirt.

Für Photos kann man aber kein Vektorformat verwenden, da brauchen wir ein Pixelformat wie `jpg`.
Mit diesen Pixelbildern kommen wir aber in Konflikt mit einer
Grundeigenschaft des Web:  Sowohl [Auflösung als auch Pixeldichte](/css-layout/rahmenbedingungen/#slide-4) variieren stark.


Besonders Mobile Geräte mit sehr [hoher Pixeldichte](/css-layout/rahmenbedingungen/#slide-4)
stellen das Web Design vor ein Dilemma: 

- hohen Auflösung und Pixeldichte - soll ich riesige Bilder ausliefern?
- Datenübertragung über das Handy-Netz ist langsam und teuer - kleine Bilder ausliefern?

## Wiederholung: CSS Pixel vs. Physikalische Pixel

Die Pixel in CSS sind keine "echten" Pixel, sondern
entsprechen dem, was das menschliche Auge ungefähr als Punkt erkennen kann:
1/96 eines Inch.

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

Das Attribute "srcset" für den **img**-Tag ermöglicht es mehrere
Varianten des Bildes anzugeben.
Ausser vom Internet Explorer wird das Attribut seit 2017 von
allen Browsern unterstützt [caniuse srcset](http://caniuse.com/#feat=srcset).

Der Browser entscheidet welche Version er lädt und darstellt.

In folgendem Beispiel wird nur zwischen einfacher und doppelter
Pixeldichte unterschieden, und in den beiden Varianten
des Bildes wird die Bildgröße angezeigt:

<htmlcode>
   <img 
     src="/images/responsive-wald.jpg" 
     srcset="/images/responsive-wald.jpg 1x, /images/responsive-wald@2x.jpg 2x"  
     alt="Wald" >
</htmlcode>

![Wald](/images/responsive-wald.jpg)

Untersuchen Sie das Bild mit den Developer Tools ihres Browsers! Welche
Version wird bei Ihnen angezeigt? Testen Sie das auf verschiedenen
Monitoren, am Handy, am Tablet!


## srcset und sizes

Dieser Code stammt aus der Seite [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes) in MDN:

Im Attribut `srcset` kann man auch andere Angaben zum Bild
verwenden um die verschiedenen Variaten unterscheiden. Hier
wird `w` verwendet. Dieser Wert muss den Pixel-Dimensionen des Bildes entsprechen.

<htmlcode>
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     src="elva-fairy-480w.jpg"
     alt="Elva dressed as a fairy">
</htmlcode>

§

Mit dem Attribut `sizes` kann man Mediaqueries verwenden
um anzugeben welche Bild-Variante verwendet werden soll:

<htmlcode>
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 600px) 480px,
            800px"
     src="elva-fairy-480w.jpg"
     alt="Elva dressed as a fairy">            
</htmlcode>

§

Die Angaben müssen nicht exakt übereinstimmen, der Browser ist klug
genug um das nächst-größere Bild zu laden, falls es kein exakt passendes gibt:

<htmlcode>
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 600px) 400px,
            700px"
     src="elva-fairy-480w.jpg"
     alt="Elva dressed as a fairy">            
</htmlcode>




## Weitere Beispiele:

Die Demo-Seite zeigt vier Abstufungen:

[Demo-Seite für "Responsive Images"](/images/responsive-images/index.html)

Das kann man auch mit Hintergrundbilder machen:

[Demo-Seite für "Responsive Background Images"](/images/responsive-images/background.html)

Zur Erzeugung von vielen Abstufungen kann man den [Responsive Image Breakpoints Generator](http://www.responsivebreakpoints.com/) verwenden.

## Bilder erzeugen

Man kann man die "imagemagick" command line tools
benutzen um die nötigen Bild-Varianten zu erstellen: mit `identify`
kann man Größe und Format von Bildern feststellen, mit `convert ... -geometry ...`
kann man ein neues Bilde mit anderer (kleinere) Dimensionen erzeugen:

<shell>
$ identify reviews*
reviews.jpg JPEG 7117x4090 7117x4090+0+0 8-bit sRGB 45.56MB 0.000u 0:00.000

\$ cp reviews.jpg reviews-4000x.jpg

\$ mogrify -geometry 4000x reviews-4000x.jpg

\$ identify reviews-4000x.jpg
reviews-4000x.jpg JPEG 4000x2299 4000x2299+0+0 8-bit sRGB 13.94MB 0.010u 0:00.019

\$ convert reviews-4000x.jpg -geometry 2000x reviews-2000x.jpg

\$ identify reviews-2000x.jpg
reviews-2000x.jpg JPEG 2000x1150 2000x1150+0+0 8-bit sRGB 3.584MB 0.000u 0:00.009

\$ convert reviews-2000x.jpg -geometry 1000x reviews-1000x.jpg

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
