---
title: Events und Closures
order: 40
---

Dieses Kapitel ist ein Tutorial zu folgenden Projekt:
Ein SVG-Editor soll programmiert werden, mit dem man
Kreise und Rechtecke im Browser erzeugen und positioniern kann.

An diesem Beipiel wird die Behandlung von Event und
die Notwendigkeit von Closures erläutert.

Der Fokus in diesem Kapitel liegt auf der Drag und Drop Funktionalität.

## Die Ausgangslage

Dieses Programm wird umfangreich. Deswegen werden von Anfang an Strukturen
zur Wiederverwertung von Code gelegt:

Für den Editor, und für Rechtecke (Rectangles) und Kreise (Circles) werden
jeweils Konstruktor-Funktionen angelegt, mit der Editor-, Rechteck-, und Kreis-Objekte
erzeugt werden können.

### Editor

Die Konstruktur-Funktion des **Editor** Objekts nimmt folgende Argumente

* `css_selector` - ein String, wird als CSS-Selector interpretiert. Der Inhalt des ausgewählten DOM-Elements wird gelöscht, statt dessen wird der Editor angezeigt
* `w` - optional eine Zahl oder ein String der eine Zahl enthält. Breite des Editors. Default Wert 600.
* `h` - optional eine Zahl oder ein String der eine Zahl enthält. Höhe des Editors. Default Wert 600.

Das **Editor** Objekt hat folgende Attribute:

* `dom` - das SVG-Element
* `renderlist` - eine Liste mit Objekten, die im Editor dargestellt werden

Das **Editor** Objekt hat folgende Methoden

* `rectangle` - Erzeugt ein Objekt mit dem `Rectangle`-Konstruktur, fügt es in der renderlist ein
* `circle` - Erzeugt ein Objekt mit dem `Circle`-Konstruktur, fügt es in der renderlist ein

§

<javascript caption="Konstruktor">
function Editor( css_selector, w, h ) {
  this.renderlist = [];
  this.dom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  this.dom.setAttribute("width", w || 600);
  this.dom.setAttribute("height", h || 600);
  emptyAndAppendChild( document.querySelector( css_selector ), this.dom );
  return this;
}

Editor.prototype.rectangle = function(  x,y,w,h,att, text ) {
  var o;
  o = new Rectangle( x,y,w,h, att, this.dom );
  this.renderlist.push(o);
  return o;
}

Editor.prototype.circle = function( x,y,r,att, text ) {
  var o;
  o = new Circle( x,y,r,att, this.dom );
  this.renderlist.push(o);
  return o;
}
</javascript>

### Circle und Rectangle

Circle und Rectangle funktionieren sehr ähnlich, deswegen werden sie hier gemeinsam
beschreiben.  Als SVG-Elemente betrachtet gibt es größere Unterschiede: so wird die
Position eines `<circles>` über die Attribute `cx` und `cy` gesetzt, die Position eines
`<rect>` über `x` und `y`.  Diese Unterschiede werden durch die neu erstellen JavaScript-Objekte
möglichst verborgen.

Die Signatur der Konstruktur-Funktion sind:

* Rectangle(x,y,w,h,att,canvas)
* Circle(x,y,r,att, canvas )

Fast alle Argumente sind also gleich und gleich bedeutend. Der einzige Unterschied: Die 
Größe des  Rechtecks wird über Breite `w` und Höhe `h` definiert, die Größe
des Kreis über den Radius `r`.  Der Aufruf der Konstruktors erzeugt das SVG-Element,
fügt es in den canvas ein, setzt die Attribute und fügt geeignete Event-Handler für drag-and-drop
ein.

Die anderen Argumente sind:

* `x` und `y`- Position (beim Rechteck: der linken oberen Ecke. beim Kreis: des Mittelpunktes)
* `att` - ein Objekt. Die Attribute des Objekts werden auf das erzeugte SVG-Element übertragen, z.B. `{'stroke': 'red', 'fill': 'white'}`
* `canvas` - eine DOM-Element das geeignet ist ein `<rect>` oder `<circle>` Element aufzunehmen. z.B. ein `<svg>` Element.

Das **Rectangle** und das **Circle** Objekt haben folgende Attribute:

* `dom` - das SVG-Element, also der Kreis oder das Rechteck
* `canvas` - das parent-Element in das es eingefügt wurde
* `id` - die ID (wird auch im SVG-Element selbst noch einmal gesetzt)

Das **Rectangle** und das **Circle** Objekt haben folgende Methoden

* `getPosition` - Liefert die Position (aus den SVG-Attributen x/y bzw. cx/xy) als Objekt mit Eigenschaften `x` und `y`
* `setPosition( position )` - erwartet die Position als Objekt mit Eigenschaften `x` und `y`, positioniert das Element entsprechend

§

<javascript caption="Konstruktor für Kreis">
var nextCircleId = idGenerator( "cicle" );

function Circle( x,y,r,att, canvas ) {
  var shape,a;

  this.id = nextCircleId();
  this.canvas = canvas;

  //   <circle>
  this.dom = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  this.dom.setAttribute("id", this.id);
  this.dom.setAttribute("cx", x);
  this.dom.setAttribute("cy", y);
  this.dom.setAttribute("r",  r);
  addAttributes(this.dom, att, {"fill": "white", "stroke": "black", "stroke-width": 1});
  canvas.appendChild(this.dom);
  
  addDragability( this, this.dom );
}
Circle.prototype.getPosition = function () {
  return {  x: parseInt( this.dom.getAttribute( "cx" ) ), y : parseInt( this.dom.getAttribute("cy") ) };
};
Circle.prototype.setPosition = function ( position ) {
  this.dom.setAttribute("cx", position.x );
  this.dom.setAttribute("cy", position.y );
};
</javascript>

## Drag and Drop

Wie funktioniert Drag-and-Drop?  Wir haben die Events `mousedown`, `mouseup` und `mousemove` zur Verfügung.

* Wenn die Maus-Taste gedrückt wird, und der Mauszeiger über einem Rechteck oder Kreis steht, dann beginnt das Drag-and-Drop. Die Position der Maus und des Objekt zu diesem Start-Zeitpunkt müssen gespeichert werden.
* Wenn die Maus sich beweget, und wir in einem Drag-and-Drop sind, dann wird die differenz zwischen aktueller Maus-Position und der Start-Position berechnet. Das ergibt einen Translations-Vektor. Dieser Vektor wird zur Startposition des Objekts addiert und ergibt die aktuelle Position des Objekts. ("Drag")
* Wenn die Maus los gelassen wird wird Drag-and-Drop beendet

### Mausposition

Das Auslesen der aktuellen Mous-Position ist leider nicht einheitlich implementiert.
Hier eine Implementierung die in allen Browsern funktionieren sollte:

<javascript caption="auslesen der Maus-Position aus einem Event-Objekt">
function cursorPoint(e) {
  var posx = 0;
  var posy = 0;
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)   {
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY)  {
    posx = e.clientX + document.body.scrollLeft
      + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop
      + document.documentElement.scrollTop;
  }
  // posx and posy contain the mouse position relative to the document
  // Do something with this information
  return { 'x': posx, 'y': posy  };
}
</javascript>

### Wiederholung: Event-Listener

Wenn wir Event-Listener-Funktionen für diese Events definieren haben wir der
Funktion jeweils Zugriff auf ein Element der DOM, das durch das Event betroffen ist.

Also zum Beispiel:

<javascript caption="Event Listener">
function onMouseDown(e) {
  console.log("Mouse down. this is " + this.id + " event is " + e);
}

element.addEventListener( 'mousedown', onMouseDown);
</javascript>

Wenn die Funktion onMouseDown aufgerufen wird enthält
`this` das angeklickte Element, und `e` enthält ein Event-Objekt mit
weiteren Details.

### Problemstellung: vom DOM-Element zum JavaScript-Objekt

In unserem JavaScript-Programm wird ein Kreis nicht alleine durch
die SVG-Node `<circle>` repräsentiert, sondern durch ein JavaScript-Objekt
das mit dem Konstruktor `Circle` erzeugt wurde.

Wie kann die Listener-Funktion Zugriff zu diesem JavaScript-Objekt erhalten?

Ein Versuch wäre, das JavaScript-Objekt im SVG-Element zu speichern.
zum Beispiel in einem Data-Attribut. In HTML5 darf man ja zu jedem
Tag / Element beliebige neue Attribute dazu erfinden, solange der
Name des Attributs mit "data-" beginnt.

<htmlcode caption="data-Attribute in HTML5">
<h1 data-geheim="wichtig daten">Normaler Überschrift</h1>
....
<circle data-weight="10kg">
</htmlcode>

§

Ein Data-Attribut könnte man mit JavaScript setzen. Hier ein Versuch:

<javascript caption="JavaScript-Objekte in einem Data-Attribut in der DOM speichern - geht nicht">
// Versuch ein Objekt zu speichern
c = document.getElementById("circle_1");
c.setAttribute("data-myobject", { color: 'red', no: 42 } ); 

// auslesen der Daten
o = c.getAttribute("data-myobject");    
typeof o        // ergibt "string"
console.log(o)  // ergibt "[object Object]"
</javascript>

Beim Speichern in der DOM wurde also mein Objekt in einen String umgewandelt,
und nur der String wurde gespeichert.  

**Es ist nicht möglich beliebige JavaScript-Objekte in der DOM zu speicher!**


### Lösungs-Ansatz mit Closure 

Die übliche Lösung in JavaScript ist die Verwendung von Closures: die Event-Listener-Funktion
ist eine Closure, die das JavaScript-Objekt kennt, und deswegen darauf Zugriff hat.

<javascript caption="Event-Listener-Funktion als Closure">
function addDragability( jsobj, element ) {

  function onMouseDown(e) {
    console.log("Mouse down");
    console.log("my element is " + this);
    console.log("my javascript object is " + jsobj);
    console.log("my event is " + e);
  }

  element.addEventListener( 'mousedown', onMouseDown);
}

addDragability( jsobj, element );
addDragability( other_jsobj, other_element );
</javascript>


### Umsetzung 

Wenn man die Beschreibung von Drag-and-Drop nochmal betrachtet ...

* Wenn die Maus-Taste gedrückt wird, und der Mauszeiger über einem Rechteck oder Kreis steht, dann beginnt das Drag-and-Drop. Die Position der Maus und des Objekt zu diesem Start-Zeitpunkt müssen gespeichert werden.
* Wenn die Maus sich beweget, und wir in einem Drag-and-Drop sind, dann wird die Differenz zwischen aktueller Maus-Position und der Start-Position berechnet. Das ergibt einen Translations-Vektor. Dieser Vektor wird zur Startposition des Objekts addiert und ergibt die aktuelle Position des Objekts. ("Drag")
* Wenn die Maus los gelassen wird wird Drag-and-Drop beendet

und das nun in Event-Listener umsetzen will kommt man zu folgender Struktur

<javascript caption="Struktur der Event-Listener für Drag-and-Drop">
function addDragability( jsobj, element ) {
  function onMove(e) {
    // die Differenz zwischen aktueller Maus-Position 
    // und der Start-Position berechnen. Das ergibt 
    // einen Translations-Vektor. 
    // Diesen Vektor zur Startposition des Objekts 
    // addieren, aktuelle Position des Objekts setzen
  }
  function onMouseDown(e) {
    // Drag-und-Drop beginnt: den richtigen Eventlistener 
    // für mousemove setzen
    // Die Position der Maus und des Objekt zu diesem 
    // Start-Zeitpunkt müssen gespeichert werden.
  }
  function onMouseUp(e) {
    // Drag-and-Drop beenden: nicht mehr gebrauchte 
    // event-listener entfernen
  }

  console.log( jsobj + " und damit " + element + " sind nun draggable");
</javascript>


<div class="alert"><strong>ToDo</strong> fertigen Code zeigen - später</div>
