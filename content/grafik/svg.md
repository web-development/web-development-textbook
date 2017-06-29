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

Inline SVG wird heute von den aktuellen Browsern unterstützt, siehe
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
ein einziges Attribut `d` des Tags geschrieben werden. Ein Pfad besteht aus Befehlen und Koordinaten.
Zwischen den Koordinaten kann man Kommas und beliebigen Whitespace einfügen.

<xml caption="SVG">
<path d="M 149,109 L 149,127 L 127 144    L 140,172    L 188,167 L 191,119 L 149,109 z"
      fill="#edd400" fill-opacity="0.59" stroke="#c4a000" stroke-width="2" />
</xml>

§

Wird der Befehl als Großbuchstaben geschrieben, dann werden die Koordinaten
absolut interpretiert, bei einem Kleinbuchstaben werden sie relativ interpretiert.
Folgende Befehle erwarten eine fixe Anzahl von Koordinaten:

|Buchstabe | Befehl          | Parameter | Beschreibung                                             |
|:--------:|:----------------|:----------|:---------------------------------------------------------|
| M,m      | MoveTo          | x y       | Gehe zu dem angegebenen Punkt ohne eine Linie zu ziehen  |
| H,h      | HLineTo         | x         | Ziehe eine horizontale Linie zur angegebenen Koordinate  |
| V,v      | VLineTo         | y         | Ziehe eine vertikale Linie zur angegebenen Koordinate    |
| Z,z      | Close Path      |           | Schliesse den Pfad (gehe zurück zum Anfangspunkt)        |
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


| Buchstabe | Befehl          | Parameter | Beschreibung                                             |
|:---------:|:----------------|:----------|:---------------------------------------------------------|
| L,l       | LineTo          | (x y)+    | Ziehe gerade Linie zu den angegebenen Punken              |
| Q,q       | quadratic Bézier curveto | (x1 y1 x y)+    | Kurve zu x,y mit x1,y1 als Stützpunkt der beiden Tangenten |
| C,c       | cubic Bézier curveto | <nobr>(x1 y1 x2 y2 x y)+</nobr> | Kurve zu x,y mit x1,y1 und x2,y2 als Stützpunkte der Tangenten |
{: class="table table-condensed table-bordered" style="width:auto"}


### Farbe

Farben werden wie in HTML mit hex-code definiert. Zusätzlich kann für jedes Objekt eine alpha-Transparenz mit `opacity` gesetzt werden.  Bei der ersten Abbildung mit dem kleinen blauen Quadrat war das: 

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
nicht als Ganzzahlen!  Es ist ein wirkliches Vektorformat.

Das ursprüngliche Koordinatensystem beginnt in der linken oberen Ecke,
die X-Achse zeigt nach rechts, die Y-Achse nach unten.  Mit dem `g` Tag
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
Beispiel wird das Attribut `startOffset` des Elements `textPath`
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
  

### Snap.svg

Die Library Snap.svg kann SVG erzeugen, aber auch fertige SVG-Dateien
lesen und weiterverarbeiten. So kann man z.B. eine Illustration in einem
Zeichenprogramm erstellen, und dann mit Snap ein eine Webseite
einbauen und manipulieren.

<svg version="1.1" id="crocodile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="312px" height="300px" viewBox="0 0 260 250" enable-background="new 0 0 260 250" xml:space="preserve">
  <g>
      <path id="symbol" opacity="0.2" fill="#848383" enable-background="new    " d="M185.631,140.915l5.02,10.86l8.145-3.765
          l-5.02-10.86L185.631,140.915z M246.828,109.341l-47.613,25.306l5.02,10.86l50.123-19.876L246.828,109.341z"/>
      <g id="head">
          <polygon fill="#09B39C" points="44.613,146.703 26.665,140.721 8.718,146.703 -0.252,146.703 -0.252,206.523 44.613,206.523 
              119.387,206.523 119.387,167.64      "/>
          <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="-0.252,146.703 11.712,170.631 26.667,140.721 
              8.721,146.703       "/>
          <polyline opacity="0.2" fill="#FFFFFF" enable-background="new    " points="8.718,146.703 20.685,152.685 26.665,140.721      "/>
          <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="44.613,146.703 53.613,163.667 17.694,143.712 
              26.667,140.721      "/>
      </g>
      <g id="upper-head">
          <g id="upper-jaw">
              <g>
                  <path id="upper-teeth" fill="#E0CAB1" d="M151.174,129.382l14.913,6.086l-6.602-14.691L151.174,129.382z M138.707,142.292
                      l14.914,6.086l-6.603-14.692L138.707,142.292z M126.241,155.201l14.913,6.086l-6.602-14.692L126.241,155.201z M163.64,116.474
                      l14.913,6.085l-6.603-14.692L163.64,116.474z M176.106,103.564l14.913,6.086l-6.602-14.692L176.106,103.564z M188.572,90.655
                      l14.914,6.085l-6.602-14.691L188.572,90.655z M201.039,77.746l14.913,6.085L209.35,69.14L201.039,77.746z M221.816,56.23
                      l-8.311,8.607l14.913,6.085L221.816,56.23z"/>
                  <path opacity="0.4" fill="#FFFFFF" enable-background="new    " d="M155.329,125.08l10.758,10.388l-6.602-14.691L155.329,125.08
                      z M142.863,137.989l10.758,10.389l-6.603-14.692L142.863,137.989z M130.396,150.898l10.758,10.389l-6.602-14.692
                      L130.396,150.898z M167.796,112.171l10.757,10.388l-6.603-14.692L167.796,112.171z M180.261,99.261l10.758,10.389l-6.602-14.692
                      L180.261,99.261z M192.728,86.352l10.758,10.388l-6.602-14.691L192.728,86.352z M205.195,73.443l10.757,10.388L209.35,69.14
                      L205.195,73.443z M221.816,56.23l-4.156,4.303l10.758,10.389L221.816,56.23z"/>
              </g>
              <polygon fill="#09B39C" points="215.135,33 200.18,33 197.189,46.955 92,125 88.355,171.706 106.387,180.64 236.072,47.955             
                  "/>
              <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="92,125 97.423,150.703 197.189,46.955          "/>
              <line opacity="0.2" fill="#FFFFFF" enable-background="new    " x1="197.189" y1="46.955" x2="92" y2="125"/>
              <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="200.18,33 236.072,47.955 215.135,33           "/>
              <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="197.189,46.955 215.135,33 200.18,33           "/>
          </g>
          <polygon fill="#09B39C" points="92,125 65.55,126.757 44.613,146.703 44.613,176.523 119.387,176.523 119.387,167.64 
              107.897,156.377         "/>
          <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="92,125 102.423,145.703 65.55,126.757      "/>
          <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="44.613,146.703 102.423,145.703 92,125 65.55,126.757 
                      "/>
          <polygon id="eye_1_" fill="#FFFFFF" points="71.532,145.703 83.495,139.721 95.459,145.703 80.505,154.676         "/>
          <polygon opacity="0.2" fill="#FFFFFF" enable-background="new    " points="44.613,146.703 44.613,158.667 92,125 65.55,126.757 
                      "/>
      </g>
      <g id="bottom-jaw">
          <g>
              <polygon fill="#E0CAB1" points="152.531,185.586 158.513,170.631 164.495,185.586             "/>
              <polygon opacity="0.4" fill="#FFFFFF" enable-background="new    " points="164.495,185.586 158.513,170.631 158.513,185.586           
                  "/>
          </g>
          <g>
              <polygon fill="#E0CAB1" points="170.477,185.586 176.459,170.631 182.441,185.586             "/>
              <polygon opacity="0.4" fill="#FFFFFF" enable-background="new    " points="182.441,185.586 176.459,170.631 176.459,185.586           
                  "/>
          </g>
          <g>
              <polygon fill="#E0CAB1" points="188.423,185.586 194.405,170.631 200.387,185.586             "/>
              <polygon opacity="0.4" fill="#FFFFFF" enable-background="new    " points="200.387,185.586 194.405,170.631 194.405,185.586           
                  "/>
          </g>
          <g>
              <polygon fill="#E0CAB1" points="206.369,185.586 212.351,170.631 218.333,185.586             "/>
              <polygon opacity="0.4" fill="#FFFFFF" enable-background="new    " points="218.333,185.586 212.351,170.631 212.351,185.586           
                  "/>
          </g>
          <g>
              <polygon fill="#E0CAB1" points="224.315,185.586 230.297,170.631 236.279,185.586             "/>
              <polygon opacity="0.4" fill="#FFFFFF" enable-background="new    " points="236.279,185.586 230.297,170.631 230.297,185.586           
                  "/>
          </g>
          <polygon fill="#E0CAB1" points="148.54,179.604 119.596,167.64 109.657,167.64 103.675,167.64 91.711,167.64 79.747,179.604 
              0,200.541 0,206.523 79.747,206.523 156.522,206.523 187.432,198.55 235.288,189.577 244.252,179.604       "/>
          <polygon opacity="0.3" fill="#FFFFFF" enable-background="new    " points="119.594,167.64 91.711,167.64 79.747,179.604       "/>
          <polygon opacity="0.3" fill="#FFFFFF" enable-background="new    " points="91.711,167.64 79.747,206.523 79.747,179.604       "/>
          <polygon opacity="0.1" fill="#534741" enable-background="new    " points="235.288,189.577 160.513,195.559 115.639,206.523 
              156.522,206.523 187.432,198.55      "/>
          <polygon opacity="0.1" fill="#534741" enable-background="new    " points="187.432,198.55 160.513,195.559 156.522,206.523 
              156.522,206.523         "/>
          <polygon opacity="0.3" fill="#FFFFFF" enable-background="new    " points="0,200.541 46.847,194.559 79.747,179.604       "/>
      </g>
  </g>
</svg>


Für fortgeschrittene Animationen kann  man zusätzlich die Library [gsap](http://github.com/greensock/GreenSock-JS/) verwenden. 

## Mehr

* [RFC zu SVG](http://www.w3.org/TR/SVG11/)
* [Snap Javascript Library für die Erzeugung von SVG](http://snapsvg.io/)
* [gsap Library for Animation in SVG](http://github.com/greensock/GreenSock-JS/)
* [Tutorial: SVG in Webseiten verwenden: Hintergrundbild, Bild, Data-URL](http://css-tricks.com/using-svg/)

