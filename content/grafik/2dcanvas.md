---
title: 2d Canvas
order: 30
---

Der `canvas` Tag kann auf zwei Arten verwendet werden: für 2d und 3d Grafik.
Als 2d Grafik ist der Canvas einfach ein Rechteck aus Pixeln, auf das
man mit Javascript zeichnen kann, und in das man Pixel-Bilder hineinkopieren kann:

![Bild](/images/canvas.png)

Das Koordinatensystem des Canvas beginnt links oben. Es wird der "Painters Algorithm"
verwendet: später gezeichnets übermalt früher gezeichnetes. Egal ob Text, Linie,
Bild, alles wird in einzelne Pixel verwandelt. Man kann später nicht mehr identifizieren
welches Pixel vom Text, oder welches vom Bild stammt.

### Canvas und Javascript

Um den Canvas zu nutzen braucht es immer zwei Schritte:
erst die DOM-Node des Canvas finden, dann den 2d-Kontext dieses
Canvas:

<javascript>
const w = 770, h = 50;
const my_canvas = document.getElementById("c");
const my_context = my_canvas.getContext("2d");

my_canvas.width = w;
my_canvas.height = h;
draw(my_context);
</javascript>

Darstellung im Browser (nicht optimal bei hohen Auflösungen):

<canvas id="c1" style="width:770px; height: 50px"></canvas>

§

Achtung: auf Geräten mit besonder hoher Auflösung erscheinen die Canvas-Zeichnungen unscharf. Die folgenden Screenshots zeigen den Effekt vergrößert:

![Vergleich Canvas mit korrekten einstellungen für retina displays mit default darstellung](/images/grafik/canvas-retina-vergleich.png)

Um eine optimale Darstellung zu erreichen ist mehr Code notwendig.

§

Zur Erinnerung: wir rechnen in Webseite meist in virtuellen Pixeln. Wenn wir die Breite des Canvas auf 770 einstellen sind das virtuelle Pixel.  

Im einfachen Fall setzt  der Browser diese virtuellen Pixel  1:1 in physikalische Pixel um.  Dann spricht man von einer `devicePixelRatio` von 1. 

Auf Geräten mit besonders hoher Auflösung verwendet der Browser zum Beispiel eine `devicePixelRatio` von 2.  Aus den 770 Pixel Breite werden also 1540 Pixel.  Als Koordinatensystem im canvas werden
aber weiterhin die virtuellen Pixel verwendet. X-Koordinaten größer als 770 werden nicht mehr angezeigt. 

§

Um die höhere Auflösung optimal zu nutzen sind vier Schritte notwendig:

* Verhältnis (virtuelle zu reale) Pixel aus `window.devicePixelRatio` auslesen
* `scale` des Kontexts auf diesen Wert setzen (aber erst nach den folgenden beiden Schritten)
* `width` und `height` des Canvas auf die virtuelle (kleinere) Pixelzahl setzen
* `width` und `height` des Canvas Style auf die physikalische (größere) Pixelzahl setzen

Achtung: beim Style erfolgt die Angabe mit Größeneinheit, also mit `px`, bei allen anderen Eigenschaften als reine Zahl!

Darstellung im Browser (optimal):

<canvas id="c2"  style="width:770px; height: 50px"></canvas>

§

<javascript>
const w = 770, h = 50;
const my_canvas = document.getElementById("c");
const my_context = my_canvas.getContext("2d");

let ratio = window.devicePixelRatio;
my_context.scale(ratio, ratio);

my_canvas.width = w * ratio;
my_canvas.height = h * ratio;

my_canvas.style.width = `${w}px`;
my_canvas.style.height = `${h}px`;

draw(my_context);
</javascript>


### Text setzen

<javascript>
my_context.font = "bold 12px sans-serif";
my_context.fillText("hier bin ich", 30, 50);
</javascript>

<canvas id="c3"  style="width:770px; height: 50px"></canvas>


### Linien Zeichnen

<javascript>
my_context.moveTo(0, 0);
my_context.lineTo(50, 50);
my_context.lineTo(100, 0);
my_context.lineTo(150, 50);
// ...
my_context.stroke();
</javascript>

<canvas id="c4"  style="width:770px; height: 50px"></canvas>

### Bild kopieren

<javascript>
var canvas = document.getElementById("e");
var context = canvas.getContext("2d");
var image = document.getElementById("the_img_tag");
context.drawImage(image, 0, 0);
</javascript>

<img id="the_img_tag" src="/images/grafik/dolly.jpg">

Bild von Dolly dem Klon-Schaf - Photograf [Toni Barros](https://www.flickr.com/photos/12793495@N05/3233344867/).

<canvas id="c5"  style="width:770px; height: 50px"></canvas>


## Referenz

Tutorials

* [Dive into Canvas](http://diveintohtml5.info/canvas.html)
* [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)

Aufbauend auf den Canvas gibt es viele Libraries, z.B:

* [Library Isomer](http://jdan.github.io/isomer/)

Mit der `getUserMedia` API kann man von einer Webcam entweder
Standbilder oder Video Streams übertragen. Die Kombination
Webcam + 2d Canvas ermöglicht damit viele interessante Anwendungen.

* [Tutorial zu getUserMedia](http://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* [Library Camvas](https://github.com/cbrandolino/camvas)
* [Webcamtoy](https://webcamtoy.com/)

<script src="/images/grafik/canvas.js"></script>
