---
title: 2D Canvas
order: 40
---

Zeichnen im Canvas
-------------------
Der Canvas-Tag stellt eine rechteckige Zeichenfläche zur Verfügung. Es handelt sich dabei um eine Matrix von Pixeln, siehe SVG für Vektor-Grafik.

Der Canvas wird durch zwei Objekte in JavaScript repräsentiert: ein Canvas-Objekt und ein Context-Objekt. Zuerste müssen wir diese beiden Objekte finden und in Variablen speichern:

<javascript>
let my_canvas = document.getElementById("c");
let my_context = my_canvas.getContext("2d");
</javascript>

Wir verwenden erst einmal die 2-dimensionale Zeichenfläche des Canvas. Wenn Sie mehr von Computergrafik verstehen können Sie auch die 3d-Version, genannt „webgl“ verwenden. 

Eine gute Möglichkeit Canvas auszuprobieren ist [dieses jsfiddle](http://jsfiddle.net/bjelline/Gu83s/).

§

Achsenparallelle Rechtecke zeichnet man mit fillRect:

<javascript>
my_context.fillRect(50, 50, 20, 20);
</javascript>

Linien ziehen kann man mit moveTo und lineTo. Die Linie erscheint erst, wenn man die abschließende Stroke-Methode aufruft:

<javascript>
my_context.moveTo(10, 20);
my_context.lineTo(10, 50);
my_context.strokeStyle = "#4a4";
my_context.stroke();
</javascript>

§

Text auf den Canvas schreiben kann man mit dem font-Befehl:

<javascript>
my_context.font = "bold 12px sans-serif"; 
my_context.fillText("hier bin ich", 10, 50);
</javascript>

Bilder die sich bereits in der Webseite befinden kann man in den Canvas kopieren:

<javascript>
let cat = document.getElementById("cat");   
my_context.drawImage(cat, 0, 0);
</javascript>

§

Man kann ganz neue Bilder laden. Achtung: da das Laden eines Bildes 
einige Zeit dauert verwenden wir hier das onload Event: 
erst wenn das Bild fertig geladen ist wird es in den Canvas kopiert:

<javascript>
let cat = new Image();   
cat.src = "images/cat.png";   
cat.onload = function() {     
  my_context.drawImage(cat, 0, 0);   
};
</javascript>

Diese Beispiel zu Canvas stammen alle aus dem [Canvas-Kapitel](http://diveintohtml5.info/canvas.html) von Mark Pilgrims „Dive into HTML5“.

