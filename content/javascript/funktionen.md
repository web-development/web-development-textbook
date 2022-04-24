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

  let r2 = function ( s, x ) {
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

Wenn die Funktion nur eine einzige Expression enthält wird die Schreibweise noch kürzer, man braucht gar kein `return` mehr:

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
    method_1 : function (x) { return `${x} ist schlecht` },
    method_2 : x => `${x} ist gut`
  }
</javascript>

Die beiden Methoden kann man ganz normal aufrufen:

<javascript caption="Methoden aufrufen">
objekt.method_1("Kopfweh");
objekt.method_2("Eis");
objekt.method_2(objekt.prop1);
</javascript>

Achtung: Wenn das Objekt serialisiert wird, also in einem String
gespeichert wird - z.B. um das Objekt in LocalStorage zu speichern oder
über HTTP zu verschicken - dann gehen die Funktionen verloren!

## Was ist this?

Die Variable `this` hat eine besondere Bedeutung in Javascript Funktionen.
Erst einmal verweist `this` auf das `window` Objekt:

<javascript caption="this in einer normalen Funktion">
  console.log("this = " + this);

  function what_is_this() {
    console.log("this = " + this);
  }
  what_is_this();

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
    report : function () {
      console.log( "this = " + this )
      console.log( "this.prop2 = " + this.prop2 )
    }
  }

  objekt.report();

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
    broken_report : () => {
      console.log( "this = " + this )
      console.log( "this.prop2 = " + this.prop2 )
    }
  }

  objekt.broken_report();

  // output auf der Console:
  // this = [object Window]
  // this.prop2 = undefined
</javascript>


