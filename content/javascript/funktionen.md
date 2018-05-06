---
title: Funktionen und this
order: 10
---

In Javascript kann eine Funktion mit Namen definiert werden, oder anonym:

<javascript caption="Funktionen definieren">
  function r1( s, x ) {
    let result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }

  function ( s, x ) {
    let result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }

  // Aufruf:
  r1('*', 10);
</javascript>

Die zweite Funktion kann aber nicht aufgerufen werden.

§

Damit man eine anonyme Funktion verwenden kann, muss sie erst
auf eine Variable zugewiesen werden:

<javascript caption="Funktionen definieren">
  function r1( s, x ) {
    let result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }

  r2 = function ( s, x ) {
    let result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }

  // Aufruf:
  r1('*', 10);
  r2('*', 10);
</javascript>

§

Seit Javascript 2015 gibt es doch eine weitere Schreibweise für anonyme 
Funktionen: die Arrow Function

<javascript caption="Arrow Function">
  let f1 = ( s, x ) => {
    let result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }
</javascript>

Wenn die Funktion nur eine einzige Expression enthält wird die Schreibweise noch kürzer:

<javascript caption="Arrow Function">
  let f2 = ( s, x ) => s + " mal " + x;
</javascript>

Und wenn die Funktion nur ein Argument nimmt kann man auch noch die Klammern rund um
die Argumente weglassen:

<javascript caption="Arrow Function">
  let f3 = x => `${x} ist das beste`;
</javascript>

§

Wir haben auch schon die JSON-Schreibweise von Arrays und Objekten kennen gelernt.
Kombiniert mit der anonymen Schreibweise für Funktionen können wir so Funktionen als
Teile von Objekten oder Arrays definieren:

<javascript caption="Funktionen in JSON">
  objekt = {
    prop1 : "Schokolade",
    prop2 : 42,
    method_1 : function () {  console.log( "method 1" ); },
    method_2 : x => `${x} ist das beste`
  }
</javascript>

Die beiden Methoden kann man ganz normal aufrufen:

<javascript caption="Methoden aufrufen">
objekt.method_1();
objekt.method_2("Eis");
objekt.method_2(objekt.prop1);
</javascript>

Achtung: Wenn das Objekt serialisiert wird, also in einem String
gespeichert wird (um es in LocalStorage zu speichern oder 
über HTTP zu verschicken) dann gehen die Funktionen verloren!

## Was ist this?

Die Variable `this` hat eine besondere Bedeutung in Javascript Funktionen.
Erst einmal verweist `this` auf das `window` Objekt:

<javascript caption="this in einer normalen Funktion">
  function f() {
    console.log("this = " + this);
  }

  console.log("this = " + this);
  f();

  // output auf der Console:
  // this = [object Window]
  // this = [object Window]
</javascript>

§

Wird eine Funktion als Methode eines Objekts aufgerufen, dann verweist `this` auf das Objekt:

<javascript caption="this in einer Methode">
  var objekt = {
    prop1 : "string",
    prop2 : 42,
    f : function () {  
      console.log( "this = " + this ) 
      console.log( "this.prop2 = " + this.prop2 ) 
    }
  }

  objekt.f();

  // output auf der Console:
  // this = [object Object]
  // this.prop2 = 42
</javascript>

Achtung: Arrow Functions verhalten sich hier anders!  

§

Eine Arrow Function hat nie ein eigenes this.
Wird eine Methode mit einer Arrow Function definiert, dann bezieht
sich `this` also nicht auf das aufrufende Objekt, sondern behält seinen
Wert:

<javascript caption="this in einer Methode">
  var objekt = {
    prop1 : "string",
    prop2 : 42,
    f : () => {  
      console.log( "this = " + this ) 
      console.log( "this.prop2 = " + this.prop2 ) 
    }
  }

  objekt.f();

  // output auf der Console:
  // this = [object Window]
  // this.prop2 = undefined
</javascript>

§

Bei Event-Handlern wird `this` wieder anders gesetzt:

<javascript caption="this im Event Handler">
  function f() {
    console.log("this = " + this);
  }

  document.getElementById("button").addEventListener("click", f);

  // bei klick auf den Button
  // output in der Console:
  // this = [object HTMLInputElement]
</javascript>

Der Event Handler wird also als Methode auf dem jeweils betroffenen
HTML-Element aufgerufen. `this` zeigt in diesem Fall also auf den Button.

§

Es gibt keine Möglichkeit Argumente an den Funktion mit zu übergeben:

<javascript caption="keine Argument an den event handler!">
  function f( mein_argument ) {
    console.log("this = " + mein_argument); 
    // funktioniert nicht wie erwartet !!!
  }
 
  document.getElementById("button").addEventListener("click", f(43) );

  // hier wird die Funktion f aufgerufen, 
  // der listener an das Event gebunden wird,
  // das funktioniert so nicht !!!
</javascript>

§

Die als Listener definierte Funktion erhält als Argument Infos zum Event:

<javascript caption="this und event im Event Handler">
  function f( ev ) {
    console.log("this = " + this);
    console.log("ev = " + ev);
    console.log("ev.target = " + ev.target);
  }
 
  document.getElementById("button").addEventListener("click", f);

  // bei klick auf den Button
  // output in der Console:
  // this = [object HTMLInputElement]
  // ev = [object MouseEvent]
  // ev.target = [object HTMLInputElement]
</javascript>


§

Das Event-Objekt beinhaltet Informationen wie z.B. die Koordinaten
an denen geklickt wurde, ob dazu noch Shift, Alt und/oder Ctrl gedrückt wurden,
und noch einmal einen Verweis auf den Button.  Hier ein Screenshot aus Chrome der 
die Eigenschaften des MouseEvents zeigt:

![Abbildung: Details des MouseEvents, angezeigt in der Console von Chrome](/images/chrome-mouse-event.png)

§

Es gibt noch eine besondere Art eine Funktion in Javascript aufzurufen: mit `new`.
Damit wird die Funktion als Konstruktor für ein Objekt verwendet. Es ist üblich
Konstruktur-Funktionen mit großen Anfangsbuchstaben zu benennen. 

<javascript caption="Objekte mit einer Konstruktor-Funktion">
  function Studiengang(name, seit) {
    this.name = name;
    this.seit = seit;
  }

  mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008 );
  mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011 );
</javascript>

Innerhalb der Konstruktur-Funktion `Studiengang` ist bereits
ein neues Objekt vorhanden, und über `this` zugänglich. Dieses
Objekt ist auch automatisch Rückgabewert der Funktion.

Arrow Funktionen können nicht als Constructor verwendet werden.
Dafür gibt es in Javascript 2015 `class` und `constructor` als Alternative.

## Eine Funktion ist ein Objekt

Jede Funktion in Javascript ist auch ein Objekt. Sie kann Attribute haben,
die man mit der ganz normalen Schreibweise setzten kann:

<javascript caption="Funktion mit einem Attribut">
  function repeat( s, x ) {
    var result = "";
    while( x ) {
      result += s;
      if( repeat.sep && x > 1 ) result += repeat.sep;
      x--;
    }
    console.log(result);
    return result;
  } 

  repeat("x", 3);
  // rückgabewert ist "xxx";

  repeat.sep = ", ";
  repeat("x", 3);
  // rückgabewert ist "x, x, x";
</javascript>


