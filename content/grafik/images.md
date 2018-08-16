---
title: Pixel-Bilder
order: 15
---


Im [/das-web-und-html/html-grundkurs/])(Grundkurs HTML) haben wir kurz drei 
Bildformate kennen gelernt: gif, jpg und png.


Mobile Geräte mit sehr hoher Pixeldichte stellen das Web Design vor ein
Dilemma: soll ich - wegen der Pixeldichte - riesige Bilder ausliefern?
Oder - weil es ein mobiles Gerät ist, und die Datenübertragung über
das Handy-Netz so langsam und teuer ist - doch kleine Bilder ausliefern?


# Responsive Images

Um dieses Dilemma zu umgehen wurde das neue Attribute "srcset" für den **img**-Tag entwickelt.
Ausser vom Internet Explorer wird das Attribut 2016 von
allen Browsern unterstützt [caniuse srcset](http://caniuse.com/#feat=srcset).

Mit diesem Attribut kann man mehrere Varianten eines Bildes hinterlegen,
der Browser entscheidet welche Version er lädt und darstellt.

<htmlcode>
  <img src="salzburg.jpg" style="width: 1353px; height: 461px;"
       srcset="salzburg.jpg, salzburg@2x.jpg 2x, salzburg@4x.jpg 4x">
</htmlcode>

Das Bild wird immer mit der gleichen Größe an virtuellen Pixel dargestellt.
Es stehen aber noch Versionen mit doppelter und vierfacher Höhe und Breite
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


# Moderne Bildformate


TODO: Ergänzen


Weitere Quellen
--------------

* [Responsive Images](https://blog.ycombinator.com/how-to-use-responsive-images/)
* [Responsive Tables](http://blog.cloudfour.com/picking-responsive-tables-solution/)
* [Bildgrößen verändern mit Seam Carving](https://www.youtube.com/watch?v=6NcIJXTlugc)
* [images guide](https://images.guide/) von Addy Osmani