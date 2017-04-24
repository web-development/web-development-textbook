---
title: SVG - Vektor Grafik
order: 20
---

<svg width="200" height="200" style="float:left;">
    <circle cx="100" cy="100" r="80"                 stroke="black" stroke-width="2" fill="#4e9a06" />
    <rect    x="80"   y="100" width="90" height="90" stroke="black" stroke-width="2" fill="#204a87" />
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
  <circle cx="100" cy="100" r="80"                 stroke="black" stroke-width="2" fill="#4e9a06" />
  <rect    x="80"   y="100" width="90" height="90" stroke="black" stroke-width="2" fill="#204a87" />
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
<circle style="cx: 144px; cy: 38px; r: 18px; stroke: #4e9a06; stroke-width: 2px; fill: #4e9a06; fill-opacity:0.6;"  />
<ellipse cx="170" cy="43" rx="27" ry="15" 
        style="stroke: #73d216; stroke-width: 2px; fill: #73d216; fill-opacity:0.6;" />
</xml>

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


## SVG mit JavaScript erzeugen

Der SVG-Tag kann direkt in einem HTML-Dokument verwendet werden, so wie auf dieser Seite.
Wenn man SVG-Nodes mit JavaScript in das DOM einfügen will braucht man
eine neue Variante des `createElement` befehls: create Element with Namespace.
Der Namespace für SVG ist `http://www.w3.org/2000/svg`.

<javascript>
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);

document.getElementById('grafik').appendChild( svg );

rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
svg.appendChild( rect );
</javascript>

Achtung: jQuery kennt nur Methoden zum Erzeugen von HTML, nicht von
SVG. Aber man kann sich schnell eine SVG-Erzeugungs-Method bauen 
(Lösung [von Matthieu Charbonnier](http://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element#answer-36305466))


<javascript>
function $s(elem) {
  return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
}

var $svg = $s("svg");
var $circle = $s("circle").attr({...});
$svg.append($circle);
</javascript>
  

## Mehr

* [RFC zu SVG](http://www.w3.org/TR/SVG11/)
* [Raphael JavaScript Library](http://raphaeljs.com/)
* [Tutorial: SVG in Webseiten verwenden: Hintergrundbild, Bild, Data-URL](http://css-tricks.com/using-svg/)
* [Tutorial: CSS Animationen auf SVG anwenden](http://tympanus.net/codrops/2013/02/06/interactive-infographic-with-svg-and-css-animations/)
* [Tutorial: SMIL Animationen in SVG verwenden](https://developer.mozilla.org/en-US/docs/SVG/SVG_animation_with_SMIL)
