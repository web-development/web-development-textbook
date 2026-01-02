---
title: SVG - Vektor Grafik
order: 20
---

<svg width="200" height="200" style="float:left;">
    <circle cx="100" cy="100" r="80"
            stroke="black" stroke-width="2" fill="#4e9a06" />
    <rect x="80"   y="100" width="90" height="90"
          stroke="black" stroke-width="2" fill="#204a87" opacity="0.75" />
</svg>

Scalable Vector Graphics (SVG, engl. „skalierbare Vektorgrafik“) ist die vom
World Wide Web Consortium (W3C) empfohlene Spezifikation zur Beschreibung
zweidimensionaler Vektorgrafiken. SVG ist ein Beispiel für XML.

SVG wurde erstmals im September 2001 veröffentlicht, die aktuelle Version
ist [Version 1.2](http://www.w3.org/TR/SVG11/), die seit Dezember 2008 vom W3C empfohlen wird, aktuell.

SVG hat eine lange und wechselvolle Geschichte hinter sich: es wurde bereits im Jahr 2001 veröffentlicht.
Für die Darstellung im Browser war aber damals die Installation eines Plugins notwendig.
Aber erst seit 2005 (Firefox, Opera), 2006 (Webkit) bzw. 2011 (Internet Explorer) wird SVG
im Browser nativ dargestellt.

§

<xml caption="Einbindung von SVG in HTML (Inline-SVG)">
<svg width="200" height="200" style="float:left;">
  <circle cx="100" cy="100" r="80"
          stroke="black" stroke-width="2" fill="#4e9a06" />
  <rect x="80"   y="100" width="90" height="90"
        stroke="black" stroke-width="2" fill="#204a87" />
</svg>
</xml>

Mit SVG kann man zweidimensional zeichnen. Die grafischen Objekte werden

- wie bei HTML - in einem DOM gespeichert und können manipuliert werden. Zur
  Darstellung im Browser werden sie mit dem [Painters Algorithm](http://de.wikipedia.org/wiki/Painter%27s_Algorithmus) gezeichnet:
  "spätere" Objekte übermalen "frühere" Objekte. Deswegen überdeckt das blaue Rechteck
  im Beispiel den grünen Kreis.

Inline SVG wird heute von den aktuellen Browsersn unterstütz, siehe
[can i use](http://caniuse.com/#feat=svg-html5)

## Grundformen in SVG

Mit den Tags `circle`, `rect`, `ellipse`, `path` und `polygon` werden
simple geometrische Elemente definiert.

<svg width="700" height="200">
<g transform="translate(10,30) scale(1.5,1.5)">
  <rect width="66" height="30" x="21" y="32" stroke="#204a87" fill="#204a87" fill-opacity="0.6" stroke-width="2" />
  <text x="21" y="82">Rechteck</text>
  <circle  cx="144" cy="38"  r="18"         stroke="#4e9a06" fill="#4e9a06" fill-opacity="0.6" stroke-width="2" />
  <ellipse cx="170" cy="43" rx="27" ry="15" stroke="#73d216" fill="#73d216" fill-opacity="0.6" stroke-width="2" />
  <text x="122" y="81">Kreis + Ellipse</text>
</g>
<g transform="translate(340,-137) scale(1.5,1.5)">
  <path d="M 12,170 C 39,182 43,154 49,142 C 62,114 101,145 101,145"
        fill="#ef2929" fill-opacity="0.62" stroke="#a40000" stroke-width="2"/>
  <path d="M 149,109 L 149,127 L 127,144 L 140,172 L 188,167 L 191,119 L 149,109 z"
        fill="#edd400" fill-opacity="0.59" stroke="#c4a000" stroke-width="2" />
  <text x="35" y="192">Pfad</text>
  <text x="141" y="192">Polygon</text>
</g>
<g transform="translate(340,0)">
        <path class="leaf" d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z" fill='#76993E' strole= '#4A5E23' stroke-width="2" />
</g>
</svg>

### Kreis, Ellipse, Rechteck

Das Rechteck wird die Position seiner oberen linken Ecke, seiner Breite und seiner Höhe definiert. Der
Kreis über Mittelpunkt und Radius, die Ellipse über Mittelpunkt und zwei Halbradien.

<xml caption="Kreis und Ellipse">
<circle  cx="144" cy="38" r="18"
        stroke="#4e9a06" stroke-width="2"
        fill="#4e9a06"   fill-opacity="0.6"  />
<ellipse cx="170" cy="43" rx="27" ry="15"
        stroke="#73d216" stroke-width="2"
        fill="#73d216" fill-opacity="0.6" />
</xml>

§

Viele Attribute kann man alternativ auch über CSS definieren.

<xml caption="Attribute per CSS">
<circle r="80px" cx="150px" cy="100px"
    style="stroke: #4e9a06; stroke-width: 2px; fill: #4e9a06; fill-opacity:0.6;" />
<ellipse cx="390" cy="100" rx="300" ry="80"
    style="stroke: #73d216; stroke-width: 2px; fill: #73d216; fill-opacity:0.6;" />
</xml>

<svg width="700" height="200">
<circle r="80px" cx="150px" cy="100px"
    style="stroke: #4e9a06; stroke-width: 2px; fill: #4e9a06; fill-opacity:0.6;" />
<ellipse cx="390" cy="100" rx="300" ry="80"
    style="stroke: #73d216; stroke-width: 2px; fill: #73d216; fill-opacity:0.6;" />
</svg>

### Pfad und Polygon

Für Pfade und Polygone wird eine Kurzschreibweise verwendet, bei der mehrere Punkte in
ein einziges Attribut `d` des Tags geschreiben werden. Ein Pfad besteht aus Befehlen und Koordinaten.
Zwischen den Koordinaten kann man Kommas und beliebigen Whitespace einfügen.

<xml caption="SVG">
<path d="M 149,109 L 149,127 L 127 144    L 140,172    L 188,167 L 191,119 L 149,109 z"
      fill="#edd400" fill-opacity="0.59" stroke="#c4a000" stroke-width="2" />
</xml>

§

Wird der Befehl als Großbuchstaben geschrieben, dann werden die Koordinaten
absolut interpretier, bei einem Kleinbuchstaben werden sie relativ interpretiert.
Folgende Befehle erwarten eine fixe Anzahl von Koordinaten:

| Buchstabe | Befehl     | Parameter | Beschreibung                                            |
| :-------: | :--------- | :-------- | :------------------------------------------------------ |
|    M,m    | MoveTo     | x y       | Gehe zu dem angegebenen Punkt ohne eine Linie zu ziehen |
|    H,h    | HLineTo    | x         | Ziehe eine horizontale Linie zur angegebenen Koordinate |
|    V,v    | VLineTo    | y         | Ziehe eine vertikale Linie zur angegebenen Koordinate   |
|    Z,z    | Close Path |           | Schliesse den Pfad (gehe zurück zum Anfangspunkt)       |
{: class="table table-condensed table-bordered" style="width:auto"}


§

Folgende Befehle können mehrere Koordinaten auf einmal erhalten. Wie in der EBNF-Schreibweise
wird hier die Wiederholung durch Klammern und ein + dargestellt:

<svg width="700" height="100">
  <path d="M   0,10 l 50,50 50,-50 50,50 50,-50 50,50"                   stroke="red"    stroke-width="2" fill="none" />
  <path d="M 270,35 q 25,-50 50,0  25,50 50,0   q 25,-25 50,0  q 25,25 50,0" stroke="orange" stroke-width="2" fill="none" />
</svg>

<xml caption="Beispiel für LineTo und Quadratic B">
<path d="M   0 10 l 50,50  50,-50 50,50 50,-50 50,50" />
<path d="M 270 35 q 25,-50 50,0 25,50 50,0 q 25,-25 50,0 q 25,25 50,0" />
</xml>

| Buchstabe | Befehl                   | Parameter                       | Beschreibung                                                   |
| :-------: | :----------------------- | :------------------------------ | :------------------------------------------------------------- |
|    L,l    | LineTo                   | (x y)+                          | Ziehe gerade Linie zu den angegebenen Punken                   |
|    Q,q    | quadratic Bézier curveto | (x1 y1 x y)+                    | Kurve zu x,y mit x1,y1 als Stützpunkt der beiden Tangenten     |
|    C,c    | cubic Bézier curveto     | <nobr>(x1 y1 x2 y2 x y)+</nobr> | Kurve zu x,y mit x1,y1 und x2,y2 als Stützpunkte der Tangenten |
{: class="table table-condensed table-bordered" style="width:auto"}


### Farbe

Farben werden wie in HTML mit hex-code definiert. Zusätzlich kann für jedes Objekt eine alpha-Transparenz mit `opacity` gesetzt werden. Bei der ersten Abbildung mit dem kleinen blauen Quadrat war das:

    fill="#204a87" opacity="0.75"

Farbverläufe werden separat definiert, und können dann mehrfach angewendet werden.
In diesem Beispiel wird ein radialer gradient definiert und auf ein Objekte angewandt:

<xml caption="SVG">
  <radialGradient id="SVGID_1_" cx="0" cy="0" r="320.8304" gradientUnits="userSpaceOnUse">
    <stop  offset="0" style="stop-color:#FFDE17;stop-opacity:0.7"/>
    <stop  offset="1" style="stop-color:#FFF200;stop-opacity:0"/>
  </radialGradient>
</xml>

Der Effekt wirkt ganz verschieden, wenn man ihn auf ein Quadrat oder einen
Pfad mit Sonnenstrahlen anwendet:

<svg width="700" height="300">
  <radialGradient id="SVGID_1_" cx="0" cy="0" r="320.8304" gradientUnits="userSpaceOnUse">
    <stop  offset="0" style="stop-color:#FFDE17;stop-opacity:0.7"/>
    <stop  offset="1" style="stop-color:#FFF200;stop-opacity:0"/>
  </radialGradient>
    <g transform="translate(165,165) scale(0.5, 0.5)">
      <rect x="-300"   y="-300" width="600" height="600" fill="url(#SVGID_1_)" />
    </g>
    <g transform="translate(465,165) scale(0.5, 0.5)">
      <path class="sunburst" style="fill:url(#SVGID_1_);" d="M0,319.7c-18.6,0-37.3-1.6-55.5-4.8L-7.8,41.4c5.1,0.9,10.6,0.9,15.7,0L56,314.8C37.6,318,18.8,319.7,0,319.7z
     M-160.8,276.6c-32.5-18.8-61.3-42.9-85.5-71.6L-34,26.2c3.4,4.1,7.4,7.4,12,10.1L-160.8,276.6z M161.3,276.4L22.1,36.2
    c4.5-2.6,8.6-6,12-10.1l212.6,178.5C222.5,233.4,193.8,257.6,161.3,276.4z M-302.5,108.3C-315.4,73-321.9,36-322-1.8l277.6-0.5
    c0,5.3,0.9,10.4,2.7,15.2L-302.5,108.3z M302.6,107.8L41.8,12.8c1.7-4.7,2.6-9.7,2.6-14.9c0-0.3,0-0.6,0-1H322l0-1.3l0,1.9
    C322,35.4,315.5,72.5,302.6,107.8z M-41.8-17.5l-261-94.5c12.8-35.4,31.6-68,55.8-96.9L-34.1-30.8C-37.5-26.8-40.1-22.3-41.8-17.5z
     M41.7-17.7c-1.8-4.8-4.4-9.3-7.8-13.3l212-179.2c24.3,28.8,43.3,61.3,56.3,96.6L41.7-17.7z M-22.2-40.8l-139.6-240
    c32.7-19,68.1-32,105.2-38.6L-8-46.1C-13-45.2-17.8-43.4-22.2-40.8z M22-40.9c-4.4-2.6-9.2-4.3-14.2-5.1l47.1-273.6
    c37.2,6.4,72.7,19.2,105.4,38L22-40.9z"/>
  </g>
</svg>

### Text

Mit dem Tag `text` kann Text in SVG gesetzt werden. Das ist
an und für sich noch nicht sehr spannend:

<xml caption="Text in SVG">
    <text x="122" y="81">Kreis + Ellipse</text>
</xml>

§

Mit dem Tag `textpath` kann der Text entlang eines
beliebigen Pfades gesetzt werden.

<svg width="600" height="200">
  <g transform="scale(0.5,0.5)">
    <defs>
      <path id="my_path"
            d="M 100,200
               C 200,100 300,  0 400,100
               C 500,200 600,300 700,200
               C 800,100 900,100 900,100" />
    </defs>

    <use xlink:href="#my_path" fill="none" stroke="gray"  />
    <text font-family="Verdana" font-size="42.5" fill="red" >
      <textPath xlink:href="#my_path">
        Es geht hinauf, und hinunter, und wieder...
      </textPath>
    </text>

  </g>
</svg>

<xml>
<defs>
<path id="my_path" d="M 100,200 C 200,100 300,  0 400,100
      C 500,200 600,300 700,200 C 800,100 900,100 900,100" />
</defs>
<text font-family="Verdana" font-size="42.5" fill="red" >
  <textPath xlink:href="#my_path">
    Es geht hinauf, und hinunter, und wieder...
  </textPath>
</text>
</xml>

## Koordinaten und Transformationen

Koordinaten in SVG werden als reelle Zahlen angegeben,
nicht als Ganzzahlen! Es ist ein wirkliches Vektorformat.

Das ursprüngliche Koordinatensystem beginnt in der linken oberen Ecke,
die X-Achse zeigt nach rechts, die Y-Achse nach unten. Mit dem `g` Tag
können Elemente gruppiert werden. Dabei kann man auch ein neues
lokales Koordinatensystem definieren.

<svg width="700" height="200">
  <defs>
      <marker id="pointy"
        viewBox="0 0 10 10" refX="0" refY="5"
        markerUnits="strokeWidth" markerWidth="4" markerHeight="3"
        orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
  </defs>
  <g transform="translate(10,10)">
    <path d="M 0 0 L 200 0" stroke="black" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <path d="M 0 0 L 0 100" stroke="black" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <text x="215" y="5" font-family="Verdana" font-size="15" fill="black" >x</text>
    <text x="-5" y="125" font-family="Verdana" font-size="15" fill="black" >y</text>
  </g>
  <g transform="rotate(-5) translate(50,30)" stroke="blue" >
    <path d="M 0 0 L 100 0" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <path d="M 0 0 L 0 100" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <text x="115" y="5" font-family="Verdana" font-size="15" fill="black" >x</text>
    <text x="-5" y="125" font-family="Verdana" font-size="15" fill="black" >y</text>
  </g>
</svg>

<xml caption="Gruppe mit lokalem Koordinatensystem">
<g transform="rotate(-5) translate(50,30)">
  ...
</g>
</xml>

## Animation

Fast jedes Attribut in SVG kann animiert werden. In folgendem
Beispiel wird as Attribut `startOffset` des Elements `textPath`
animiert:

<xml caption="SVG Animation">
  <textPath xlink:href="#my_path" startOffset="500">
    Choo, choo, I'm a little train
    <animate attributeType="XML" attributeName="startOffset"
      from="1000" to="-600"
      dur="10s" repeatCount="indefinite" />
  </textPath>
</xml>

So sieht das Ergebnis aus:

<svg width="600" height="200">
  <g transform="scale(0.5,0.5)">
    <defs>
      <path id="my_path"
            d="M 100,200
               C 200,100 300,  0 400,100
               C 500,200 600,300 700,200
               C 800,100 900,100 900,100" />
    </defs>
    <use xlink:href="#my_path" fill="none" stroke="gray"  />
    <text font-family="Verdana" font-size="42.5" fill="red" >
      <textPath xlink:href="#my_path" startOffset="500">
        Choo, choo, I'm a little train
        <animate attributeType="XML" attributeName="startOffset" from="1000" to="-600"
        dur="10s" repeatCount="indefinite" />
      </textPath>
    </text>
  </g>
</svg>

## SVG in CSS verwenden

SVG kann als `mask` oder `clip-path` verwendet werden.

Clip-Path erwartet einen "Basic Shape" als Wert. Hier mann man einen SVG-Path angeben. Mehr auf [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clip-path).

Mask erwartet ein Bild als Wert. Mehr auf [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask).

<css>
clip-path: path('M20,0H30A10,10 0,0,1 40,10V20A10,10 0,0,0 50,30H90A10,10 0,0,1 100,40V90A10,10 0,0,1 90,100H10A10,10 0,0,1 0,90V20A20,20 0,0,1 20,0Z');

mask: url("mask.svg");
</css>

<div style="display:flex">
<div style="box-sizing: border-box;clip-path: path('M20,0H30A10,10 0,0,1 40,10V20A10,10 0,0,0 50,30H90A10,10 0,0,1 100,40V90A10,10 0,0,1 90,100H10A10,10 0,0,1 0,90V20A20,20 0,0,1 20,0Z');width: 100px;background-color:rgb(232, 124, 74);aspect-ratio: 1 / 1;margin: 4px;font-size:8px;">SVG als clip-path. Der Inhalt dieses Tags wird einfach verdeckt, der Text ist also nicht vollständig lesbar. Nochmal: SVG als clip-path. Der Inhalt dieses Tags wird einfach verdeckt, der Text ist also nicht vollständig lesbar.</div>

<div style="box-sizing: border-box;mask: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M20%2C0H30A10%2C10%200%2C0%2C1%2040%2C10V20A10%2C10%200%2C0%2C0%2050%2C30H90A10%2C10%200%2C0%2C1%20100%2C40V90A10%2C10%200%2C0%2C1%2090%2C100H10A10%2C10%200%2C0%2C1%200%2C90V20A20%2C20%200%2C0%2C1%2020%2C0Z%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fsvg%3E') no-repeat center / contain;width: 100px;background-color:rgb(232, 124, 74);aspect-ratio: 1 / 1;margin: 4px;font-size:8px;">SVG als mask. Der Inhalt dieses Tags wird einfach verdeckt, der Text ist also nicht vollständig lesbar. Nochmal: SVG als mask. Der Inhalt dieses Tags wird einfach verdeckt, der Text ist also nicht vollständig lesbar.</div>
</div>



## SVG mit Javascript erzeugen

### createElement

Der SVG-Tag kann direkt in einem HTML-Dokument verwendet werden, wie auf dieser Seite.

Wenn man SVG-Nodes mit Javascript in das DOM einfügen will braucht man
eine neue Variante des `createElement` Befehls: create Element with Namespace.
Der Namespace für SVG ist `http://www.w3.org/2000/svg`.

<javascript>
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", 600);
svg.setAttribute("height", 300);

document.getElementById('grafik').appendChild( svg );

rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
svg.appendChild( rect );
</javascript>

### jQuery

Achtung: jQuery kennt nur Methoden zum Erzeugen von HTML, nicht von
SVG. Aber muss sich also eine separate SVG-Erzeugungs-Method bauen wenn
man jQuery für SVG verwenden will.

<javascript>
function $s(elem) {
  return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
}

var $svg = $s("svg");
var $circle = $s("circle").attr({...});
$svg.append($circle);
</javascript>

Code [von Matthieu Charbonnier](http://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element#answer-36305466).

### GSAP

Die Library [GSAP](https://greensock.com/get-started) ermöglicht das
definieren und kontrollieren von SVG und CSS Animation von JavaScript aus.

Hier ein Beispiel einer Translation:

<javascript>
gsap.to("#logo", {duration: 1, x: 100});
</javascript>


## SVG Optimieren

Unter der Adresse [https://jakearchibald.github.io/svgomg/](https://jakearchibald.github.io/svgomg/) kann man SVGs hochladen, optimieren und wieder herunterladen:

![](images/grafik/svgomg.png)


## Quellen von SVG

Fertige Icons und Illustrationen:

- [Bytesize Icons](https://github.com/danklammer/bytesize-icons)
- [Icon Search](https://iconsear.ch/)
- [undraw](https://undraw.co/illustrations)
- [drawkit](https://www.drawkit.io/)
- [Random Polygon Generator](https://codepen.io/netsi1964/pen/PZJEQe)


## Mehr

- [RFC zu SVG](http://www.w3.org/TR/SVG11/)
- [Understanding SVG Coordinate Systems and Transformations](http://www.sarasoueidan.com/blog/svg-coordinate-systems/)
- [Snap Javascript Library für die Erzeugung von SVG](http://snapsvg.io/)
- [gsap Library for Animation in SVG](http://github.com/greensock/GreenSock-JS/)
- [Tutorial: SVG in Webseiten verwenden: Hintergrundbild, Bild, Data-URL](http://css-tricks.com/using-svg/)
- [SVG in the movies](https://moviecode.tumblr.com/post/72085619482/in-an-episode-of-doctor-who-the-doctor-is-seen)
