---
title: 2d Canvas
order: 30
---


Der `canvas` Tag kann auf zwei Arten verwendet werden: für 2d und 3d Grafik.
Als 2d Grafik ist der Canvas einfach ein Rechteck aus Pixeln, auf das
man mit Javascript zeichnen und Bilder einkopieren kann:

![Bild](/images/canvas.png)

Das Koordinatensystem des Canvas beginnt links oben. Es wird der "Painters Algorithm"
verwendet: später gezeichnetes übermalt früher gezeichnetes.  Egal ob Text, Linie,
Bild, alles wird in einzelne Pixel verwandelt.  Man kann später nicht mehr identifizieren
welches Pixel vom Text, oder welches vom Bild stammt.

### Canvas und Javascript

Um den Canvas zu nutzen braucht es immer zwei Schritte:
erst die DOM-Node des Canvas finden, dann den 2d-Kontext dieses
Canvas:

<javascript>
var w = 250,
    h = 250;
var my_canvas = document.getElementById("c");
var my_context = my_canvas.getContext("2d");

my_canvas.width = w;
my_canvas.height = h;
</javascript>

### Text setzen

<javascript>
my_context.font = "bold 12px sans-serif";
my_context.fillText("hier bin ich", 30, 50);
</javascript>

### Linien Zeichnen

<javascript>
my_context.moveTo(0,20);
my_context.lineTo(w,20);

for (var x = 0; x <= w; x += 25) {
    my_context.moveTo(w / 2, h / 2);
    my_context.lineTo(x, h);
}
my_context.stroke();
</javascript>

![fertiges bild](images/lineto.png)

### Bild kopieren

<javascript>
var canvas = document.getElementById("e");
var context = canvas.getContext("2d");
var image = document.getElementById("the_img_tag");
context.drawImage(image, 0, 0);
</javascript>

## Referenz

Tutorials

* [Dive into Canvas](http://diveintohtml5.info/canvas.html)
* [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)

Aufbauend auf den Canvas gibt es viele Libraries, z.B:

* [Library Isomer](http://jdan.github.io/isomer/)

Mit der `getUserMedia` API kann man von einer Webcam entweder
Standbilder oder Video Streams übertragen.  Die Kombination
Webcam + 2d Canvas ermöglicht damit viele interessante Anwendungen.

* [Tutorial zu getUserMedia](http://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* [Library Camvas](https://github.com/cbrandolino/camvas)
* [Webcamtoy](https://webcamtoy.com/)
