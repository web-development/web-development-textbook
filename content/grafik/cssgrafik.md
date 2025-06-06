---
title: CSS Grafik und Animation
order: 10
---

<div style="width: 100px; height: 100px; background: red; -moz-border-radius: 50px; -webkit-border-radius: 50px; border-radius: 50px; color: red; margin: 10px 0px"></div>

Mit HTML und CSS kann man grafisch arbeiten, sogar in 3d. Und man kann Animationen bauen.

## Rechtecke und Balkengrafik

Block-Bildende Tags in HTML werden als Rechtecke dargestellt. Das
alleine reicht schon aus um z.B. eine einfache Balkengrafik zu gestalten.

Im Artikel [Accessible Data Visualization with Web Standards](http://alistapart.com/article/accessibledatavisualization)
beschreibt Wilson Miner die Entwicklung solch einer Grafik:

![Screenshot der Balkengrafik](/images/grafik/balken.png)


## CSS und Formen

Mit etwas CSS kann man von den Rechtecken zu anderen Formen gelangen.
Auf der Webseite [CSS Tricks: The Shapes of CSS](https://css-tricks.com/examples/ShapesOfCSS/) beschreibt
Chris Coyier wie man mit `border-radius` und transparenten rahmen
Kreise, Ellipsen, Dreiecke und so weiter bauen kann:

![Bild der Dreiecks](/images/grafik/dreieck.png)

<css>
#triangle-up {
   width: 0; height: 0;
   border-left: 50px solid transparent;
   border-right: 50px solid transparent;
   border-bottom: 100px solid red;
}
</css>


## Mit CSS-Shapes Text setzen

Seit 2018 ist der Standard für CSS Shapes in allen gängigen Browsern implmentiert:
[CSS Shapes](https://www.w3.org/TR/css-shapes/).  Damit kann man statt Rechtecken
auch andere Formen erzeugen, in denen Text gesetzt wird:

![Text mit CSS Shape als Rand](/images/grafik/css-shape.png)

Links sehen wir die Seite im Browser, rechts die Developer Tools von Firefox.
Der img-Tag, der den Heißluftballon zeigt, ist ausgewählt.
Bei den CSS-Regeln rechts unten sieht man, dass drei Attribute gesetzt sind:


<css>
img {
 float: left;
  shape-outside: circle(50%);
  shape-margin: 15px;
}
</css>

Mit `float: left` geht das Bild an den linken Rand des umgebenden Blocks. Dieses CSS Attribut
gibt es schon sehr lange. Früher wurde für das Bild dann immer ein Rechteckiger Bereich frei
gehalten, und der Text konnte rechts und darunter gesetzt werden.

Mit den neuen Attributen `shape-outside` und `shape-margin` wir ein Kreis statt des
Rechtecks verwenden.  In den Developer Tools erscheint rechts neben dem Wert von  `shape-outside`  ein
Icon.  Wenn man auf das klickt wird die shape sichtbar, und man kann sie direkt manipulieren: größer oder
kleiner ziehen.


## Animation mit transition

CSS Animationen sind sehr effizient und einfach zu erstellen:

[Demo](/images/grafik/transition-demo.html)


### Zwei Zustände vorbereiten

Für das Objekt das animiert werden soll bereiten
wir zwei CSS Stylings vor: den Ausgangspunkt

<css>
  .box {
    background-color: black;
    width: 100px;
    height: 150px;
  }
</css>

Und einen Zielpunkt, der durch das Hinzufügen einer Klasse
erreicht wird.

<css>
  .big.box {
    background-color: red;
    width: 300px;
  }
</css>

Diese Klasse wird aber nicht im HTML gesetzt,
sondern erst später.

### Transition deklarieren

Der Übergang zwischen den beiden Zuständen soll nicht plötzlich, sondern
als Animation erfolgen: über zwei Sekunden wird der Header von Schwarz auf
Rot umgestellt.

Die effizienteste Art so eine Animation in einer Webseite umzusetzen ist
mit CSS: der Browser weiss alles über den Ablauf der Animation und kann
(eventuell) die Grafikkarte benutzen um sie darzustellen.

Wenn man die Animation statt dessen mit Javascript mit `setTimeout`
oder `requestAnimationFrame` selbst ausprogrammiert, kann die Grafikkarte nicht verwendet werden.

<css>
.box {
      transition: width 1s, background-color 2s;
}
</css>

Der wichtigste Teil ist hier die Angabe der Zeit in Sekunden:
Die Breite soll binnen 1 Sekund geändert werden, die Hintergrundfarbe in 2 Sekunden.


## Animation mit Keyframes


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

Der Pfad wird [wie in SVG](/grafik/svg/#slide-6) geschrieben. Es gibt ein
praktisches Tool zum [Visualisieren und Editieren des Pfads](https://svg-path-visualizer.netlify.app/#M20%2C20%20C20%2C100%20200%2C0%20200%2C100)

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


## Transform

Achtung, Verwechslungsgefahr: `transition` macht die Animation, hat also eine
Zeitkomponente. Die transform-Properties verändert die Darstellung einer DOM-Node, haben keine Zeitkomponente:


* MDN: [scale](https://developer.mozilla.org/de/docs/Web/CSS/transform-function/scale)
* MDN: [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
* MDN: [translate](https://developer.mozilla.org/en-US/docs/Web/CSS/translate)
* MDN: [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - alles in einem


## Perspektive

Mit Transforms kann man ein bisschen 3d in HTML und CSS bringen:
In den Browsern sind [3D Transforms](http://caniuse.com/#search=perspective)
seit 2013 implementiert.

![Bild](/images/weather-app-transition.jpg)

Von David DeSandro gibt es ein ausführliches [Tutorial](http://desandro.github.io/3dtransforms/) dazu.

## Resume

Im Zweifelsfall sollten Sie immer die einfachste technische Lösung
für ihr Problem wählen. Bei Grafik kann das ganz oft einfaches HTML + CSS sein.

## Vertiefung

* Parallax Animation [Beispiel](https://palermo.ddd.live/)
* Page Transitions mit [ViewTransiations](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) oder [swup.js](https://swup.js.org/getting-started/demos/)

## Siehe auch

* MDN: [scale](https://developer.mozilla.org/de/docs/Web/CSS/transform-function/scale)
* MDN: [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
* MDN: [translate](https://developer.mozilla.org/en-US/docs/Web/CSS/translate)
* MDN: [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [SVG Path Visualizer](https://svg-path-visualizer.netlify.app/#M20%2C20%20C20%2C100%20200%2C0%20200%2C100)
* [Text Animation mit CSS+JS](https://tobiasahlin.com/moving-letters/) von Tobias Ahlin


