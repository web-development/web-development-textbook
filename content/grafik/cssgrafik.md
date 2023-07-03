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

## Animation

Mit Keyframes kann man Animationen definieren:

<div id="motion-demo-space">
<div id="motion-demo"></div>
</div>
<style>
#motion-demo-space {
   width: 450px;
   height: 140px;
   margin: 10px 0;
   border-top: 1px gray solid;
   border-bottom: 1px gray solid;
}
#motion-demo {
  offset-path: path("M40,40 C50,100 400,0 400,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 50px;
  height: 40px;
}

@keyframes move {
  0% {
    offset-distance: 0%;
    background: blue;
  }
  100% {
    offset-distance: 100%;
    background: cyan;
  }
}
</style>

<css>
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
}

@keyframes move {
  0% {
    offset-distance: 0%;
    background: blue;
  }
  100% {
    offset-distance: 100%;
    background: cyan;
  }
}
</css>


## Perspektive

Mit Transforms kann man ein bisschen 3d in HTML und CSS bringen:
In den Browsern sind [3D Transforms](http://caniuse.com/#search=perspective)
seit 2013 implementiert.

![Bild](/images/weather-app-transition.jpg)

Von David DeSandro gibt es ein ausführliches [Tutorial](http://desandro.github.io/3dtransforms/) dazu.

## Resume

Im Zweifelsfall sollten Sie immer die einfachste technische Lösung
für ihr Problem wählen. Bei Grafik kann das ganz oft einfaches HTML + CSS sein.

## Siehe auch

* [Animation mit CSS](https://tobiasahlin.com/moving-letters/ ) von Tobias Ahlin
