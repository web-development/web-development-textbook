---
title: HTML+CSS für Grafik
order: 10
---

<div style="width: 100px; height: 100px; background: red; -moz-border-radius: 50px; -webkit-border-radius: 50px; border-radius: 50px; color: red; margin: 10px 0px"></div>

Mit HTML und CSS kann man grafisch arbeiten, sogar in 3d.

## Rechtecke und Balkengrafik

Block-Bildende Tags in HTML werden als Rechtecke dargestellt. Das
alleine reicht schon aus um z.B. eine einfache Balkengrafik zu gestalten.

Im Artikel [Accessible Data Visualization with Web Standards](http://alistapart.com/article/accessibledatavisualization)
beschreibt Wilson Miner die Entwicklung solch einer Grafik:

![Screenshot der Balkengrafik](/images/balken.png)



## CSS und Formen

Mit etwas CSS kann man von den Rechtecken zu anderen Formen gelangen.
Auf der Webseite [CSS Tricks: The Shapes of CSS](https://css-tricks.com/examples/ShapesOfCSS/) beschreibt
Chris Coyier wie man mit `border-radius` und transparenten rahmen
Kreise, Ellipsen, Dreiecke und so weiter bauen kann:

![Bild der Dreiecks](/images/dreieck.png)

<css>
#triangle-up { 
   width: 0; height: 0; 
   border-left: 50px solid transparent; 
   border-right: 50px solid transparent; 
   border-bottom: 100px solid red; 
} 
</css>

An einem Standard für CSS Shapes wird gearbeitet, es gibt aber noch
keine Implementierungen, siehe [Draft: CSS Shapes](https://drafts.csswg.org/css-shapes/).

## Perspektive

Seit 2013 liegt der Standard für CSS Transforms vor, er
ist aber immer noch ein "Draft". In den Browsern sind [3D Transforms aber längst implementiert](http://caniuse.com/#search=perspective)

![Bild](/images/weather-app-transition.jpg)

Von David DeSandro gibt es ein ausführliches [Tutorial](http://desandro.github.io/3dtransforms/) dazu.

## Resume

Im Zweifelsfall sollten Sie immer die einfachste technische Lösung
für ihr Problem wählen. Bei Grafik kann das ganz oft einfaches HTML + CSS sein.

## Siehe auch

* [Animation mit CSS](https://tobiasahlin.com/moving-letters/ ) von Tobias Ahlin
