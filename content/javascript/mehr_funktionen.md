---
title: Mehr Funktionen
order: 11
---

In diesem Kapitel werden Event Handler und Funktionen die
mit `new` aufgerufen werden behandelt.

## Event Handler

Bei Event-Handlern wird `this` wieder anders gesetzt:

<javascript caption="this im Event Handler">
  function what_is_this() {
    console.log("this = " + this);
  }

  document.getElementById("button").addEventListener("click", what_is_this);

  // bei klick auf den Button
  // output in der Console:
  // this = [object HTMLInputElement]
</javascript>

Der Event Handler wird also als Methode auf dem jeweils betroffenen
HTML-Element aufgerufen. `this` zeigt in diesem Fall also auf den Button
der angeklickt wurde.

§

Event Handler haben folgendes Problem:
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


