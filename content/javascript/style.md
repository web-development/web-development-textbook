---
title: Stil + Tipps
order: 50
---

Dieses Kapitel richtet sich speziell an Personen mit wenig Programmier-Erfahrung.
Viele hier erwähnten Punkte sind nicht spezifisch für Javascascript.

## Menschenfreundliche Programmierung

Aus Sicht des Javascript Interpreters gibt es viele, viele Arten dasselbe
Programm zu schreiben - der Javascript-Interpreter wird es immer gleich verstehen.
Aus Sicht eines Menschen, der das Programm liest, sind manche Versionen leichter
verständlich und manche weniger leicht.

Besonders deutlich wird das beim Vergleich der folgenden beiden Programme:

<javascript caption="Countdown mit Closures - menschenfreundliche Version">
 function create_countdown( max ) {
    const i = max+1;
    return function() {
      i--;
      return i;
    }
  } 
  const top10 = create_countdown(10);
  const i;
  while( i = top10() ) {
    console.log("und auf Platz " + i + " .... ");
  }
</javascript>

<javascript caption="Countdown mit Closures - andere Version">
  function create_countdown(b){const a=b+1;return function(){a--;return a}}
  for(const top10=create_countdown(10),i;i=top10();)console.log("und auf Platz "+i+" .... ");
</javascript>

## Refactoring

Manchmal schafft man es, auf Anhieb ein schönes, lesbares, funktionierendes Programm zu schreiben.
Aber das ist eher der Ausnahmefall.

Ein Programm wieder und wieder zu verändert, bis es endlich funktionert, nennt man **Debugging**.
Oft ist hier Schluss - das Programm funktioniert ja schliesslich! Aber auch wenn die Funktionalität
fertig gestellt ist kann man das Programm weiter verbessern: besser lesbar machen, besser veränderbar, besser wartbar.

Eine Veränderung am Programm, die die Funktionalität unverändert lässt, und andere Aspekte
des Programmes verbessert, nennt man **Refactoring**. Dabei geht man in kleinen Schritten vor:
zum Beispiel in einem Schritt einen constiablennamen verändern, im nächsten Schritt Code in
eine Funktion zusammen fassen, im nächsten Schritt einen Funktionsnamen ändern, ... nach jedem
einzelnen Schritt ist das Programm wieder funktionstüchtig.

Wenn man ein Versionskontrollsystem verwendet kann man nach jedem Schritt ein commit mit einer
passenden log-message machen.

Wenn man Code liest, und Stellen entdeckt, die man verbessern könnte, dann nennt man
die üblen Stellen **Code Smells**.

## constiablen

Der Name einer constiable soll Auskunft über ihre Bedeutung, ihre Rolle im Programm geben. 
constiablen sollen so kurz wie möglich, aber nicht kürzer sein.

### Konvenelle constiablennamen

Aus der Mathematik wurde Konventionen übernommen, z.B. dass i,j,k als Zähler für Schleifen
verwendet werden; x,y,z für Koordinaten. Diese Konvention muss man nicht einhalten,
aber man sollte nicht gegen sie arbeiten:

<javascript caption="Kurze constiablennamen und Konventionen aus der Mathematik">
// gegen die Konvention
const x=0;
const i,k;
while( x < 10 ) {
  i = rand(0,100);
  k = rand(0,200);
  drawStarAt( i,k );
  x++;
}
§
// mit der Konvention
const i=0;
const x,y;
while( i < 10 ) {
  x = rand(0,100);
  y = rand(0,200);
  drawStarAt( x,y );
  i++;
}
</javascript>


### Fixe Werte durch Konstanten ersetzen


Wenn in einem Programm dieselbe Zahl mehrmals vorkommt kann das ein Hinweis
sein, dass man eine Konstante oder constiable verwenden sollte. Folgendes Programm
zeichnet ein Rechteck in ein neu geschaffenes SVG:

<javascript caption="Rechteck zeichnen - mit fixen Zahlen">
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width",  1024);
  svg.setAttribute("height", 768);

  const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  frame.setAttribute( 'x', 0 );
  frame.setAttribute( 'y', 0 );
  frame.setAttribute( 'width', 1024 );
  frame.setAttribute( 'height', 768 );
  frame.setAttribute( 'stroke', 'black' );
  frame.setAttribute( 'stroke-width', 1 );
  frame.setAttribute( 'fill', 'red' );
  svg.appendChild( frame );

  document.querySelector("body").appendChild( svg );
</javascript>

§

Die Größe des Rahmens ist hier eigentlich von der Größe des SVG abhängig,
es macht also Sinn eine Konstante zu verwenden:

<javascript caption="Rechteck zeichnen - mit fixen Zahlen">
  const svg_width  = 1024;
  const svg_height = 768;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width",  svg_width);
  svg.setAttribute("height", svg_height);

  const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  frame.setAttribute( 'x', 0 );
  frame.setAttribute( 'y', 0 );
  frame.setAttribute( 'width', svg_width );
  frame.setAttribute( 'height', svg_height );
  frame.setAttribute( 'stroke', 'black' );
  frame.setAttribute( 'stroke-width', 1 );
  frame.setAttribute( 'fill', 'red' );
  svg.appendChild( frame );

  document.querySelector("body").appendChild( svg );
</javascript>

§

Nun kann man auch die Breite des Rahmens in einer Konstanten speichern:


<javascript caption="Rechteck zeichnen - mit constiable für Rahmenbreite">
  const svg_width  = 1024;
  const svg_height = 768;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width",  svg_width);
  svg.setAttribute("height", svg_height);

  const frame_border_width = 10;
  const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  frame.setAttribute( 'x', frame_border_width/2 );
  frame.setAttribute( 'y', frame_border_width/2 );
  frame.setAttribute( 'width', svg_width - frame_border_width );
  frame.setAttribute( 'height', svg_height  - frame_border_width  );
  frame.setAttribute( 'stroke', 'black' );
  frame.setAttribute( 'stroke-width',  frame_border_width  );
  frame.setAttribute( 'fill', 'red' );
  svg.appendChild( frame );

  document.querySelector("body").appendChild( svg );
</javascript>



## Code wiederverwenden

Ein ganz wichtiger **Code Smell** ist kopierter Code:  die gleichen Zeilen finde 
ich an mehreren Stellen im Programm. Je größer der wiederholte Teil, desto schlimmer.

Im schlimmsten Fall ist kopierter Code ein Hinweis darauf, dass der Code
gar nicht verstanden, sondern nur wiederverwendet wurde. Diese Art ein Programm
zu erzeugen nennt man [Cargo Cult Programming](http://en.wikipedia.org/wiki/Cargo_cult_programming) 
- das Verwenden oder Nachahmen von Technik die man nicht versteht [Bilder](https://www.google.com/search?q=Cargo+cult+airplane&tbm=isch).

### Schleife statt kopierterm Code

Es sollen drei Quadrate nebeneinander gezeichnet werden. In diesem Beispiel
wurde der Code zum Zeichnen des Quadrats kopiert, nur die X-Koordinate
unterscheidet sich.

<javascript caption="Zeichne drei Quadrate - mit kopiertem Code">
const svg_width  = 1024;
const svg_height = 768;
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width",  svg_width);
svg.setAttribute("height", svg_height);

const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
frame.setAttribute( 'x', 1 );
frame.setAttribute( 'y', 1 );
frame.setAttribute( 'width', 20 );
frame.setAttribute( 'height', 20 );
frame.setAttribute( 'stroke', 'black' );
frame.setAttribute( 'stroke-width',  1);
frame.setAttribute( 'fill', 'red' );
svg.appendChild( frame );

const frame_border_width = 10;
const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
frame.setAttribute( 'x', 21 );
frame.setAttribute( 'y', 1 );
frame.setAttribute( 'width', 20 );
frame.setAttribute( 'height', 20 );
frame.setAttribute( 'stroke', 'black' );
frame.setAttribute( 'stroke-width',  1);
frame.setAttribute( 'fill', 'red' );
svg.appendChild( frame );

const frame_border_width = 10;
const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
frame.setAttribute( 'x', 41 );
frame.setAttribute( 'y', 1 );
frame.setAttribute( 'width', 20 );
frame.setAttribute( 'height', 20 );
frame.setAttribute( 'stroke', 'black' );
frame.setAttribute( 'stroke-width',  1);
frame.setAttribute( 'fill', 'red' );
svg.appendChild( frame );

document.querySelector("body").appendChild( svg );
</javascript>

§ 

Da der einzige Unterschied zwischen den kopierten Code-Zeilen die
X-Koordinate ist, und diese stetig ansteigt, kann man hier eine 
Schleife verwenden, um den Code wiederzuverwenden.

Aus der Schleifenconstiable i = 0, 1, 2 kann ganz einfach
die X-Koordinate x = 1, 21, 41 berechnet werden: 

`x = i * 20 + 1;`

<javascript caption="Zeichne drei Quadrate - mit Schleife">
const svg_width  = 1024;
const svg_height = 768;
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width",  svg_width);
svg.setAttribute("height", svg_height);

var i=0;
while( i < 3 ) {

  const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  frame.setAttribute( 'x', i * 20 + 1 );
  frame.setAttribute( 'y', 1 );
  frame.setAttribute( 'width', 20 );
  frame.setAttribute( 'height', 20 );
  frame.setAttribute( 'stroke', 'black' );
  frame.setAttribute( 'stroke-width',  1);
  frame.setAttribute( 'fill', 'red' );
  svg.appendChild( frame );

  i++;
}

document.querySelector("body").appendChild( svg );
</javascript>

### Funktion statt kopiertem Code

Eine noch bessere Art der Wiederverwertung von Code ist die
Funktion. Dabei muss man sich entscheiden, welche Argumente
die Funktion akzeptieren soll. Nur die X-Koordinate?  
X-, Y-Koordinate, Länge und Breite?  Je nachdem in welcher
Weise der Code wieder verwendet werden soll ergeben sich andere
Argumente.

<javascript caption="Zeichne drei Quadrate - mit Funktion">
  const svg_width  = 1024;
  const svg_height = 768;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width",  svg_width);
  svg.setAttribute("height", svg_height);

  function addRect( svg, x,y,w,h ) {
    const frame = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    frame.setAttribute( 'x', x);
    frame.setAttribute( 'y', y );
    frame.setAttribute( 'width',w);
    frame.setAttribute( 'height', h);
    frame.setAttribute( 'stroke', 'black' );
    frame.setAttribute( 'stroke-width',  1);
    frame.setAttribute( 'fill', 'red' );
    svg.appendChild( frame );
  }

  addRect( svg,  1, 1, 20, 20 );
  addRect( svg, 21, 1, 20, 20 );
  addRect( svg, 41, 1, 20, 20 );

  document.querySelector("body").appendChild( svg );
</javascript>


## Quellen

Dieses Kapitel beschreibt u.a. einen Teil der Coding Conventions von Douglas Crockford.

* [Code Conventions for the JavaScript Programming Language](https://developer.mozilla.org/en/JavaScript/Reference/Operators/instanceof)
* [Crockford, Douglas(2008): Javascript, the good parts. O'Reilly.](http://www.amazon.de/JavaScript-Parts-Working-Shallow-Grain/dp/0596517742/)
* [Crockford, Douglas(2008): Das Beste an JavaScript. O'Reilly.](http://www.amazon.de/Das-Beste-JavaScript-Douglas-Crockford/dp/3897218763/)

Das Beispiel für nicht-lesbaren Code wurde mit dem Google Closure Compiler erzeugt.
(Achtung: "Closure" ist hier ein Eigenname - ein sehr verwirrender Eigenname. Stellen
Sie sich vor man würde ein Modell eines Autos nach einem Bauteil benennen, 
z.B. 'Opel Kurbelwelle', 'VW Fensterheber', 'Fiat Zündkerze')

* [Google Closure Compiler](http://closure-compiler.appspot.com/home)
