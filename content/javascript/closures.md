---
title: Funktionen und Closures
order: 15
---

JavaScript baut nicht nur auf die Traditionen der
objektorientierten Programmierung auf, sondern auch
auf die der Funktionalen Programmierung[&rarr;](http://de.wikipedia.org/wiki/Funktionale_Programmierung).

In diesem Kapitel lernen wir die Besonderheiten
von Funktionen in JavaScript kennen, darunter
auch Closures [&rarr;](http://de.wikipedia.org/wiki/Closure).


## Funktionen und Lebenszeit von Variablen

Nach dem Aufruf einer Funktion verschwinden ihre lokalen Variablen,
bei einem neuen Aufruf sind die vorhergehenden Werte nicht mehr vorhanden:

<javascript caption="Lebenszeit einer Variable in einer Funktionen">
  function g( x ) {
    var b;
    console.log("beim Einstieg in g ist b = " + b );
    b = x;
    console.log("beim Ausstieg aus g ist b = " + b );
  }
  g(10);
  g(20);

  // output:
  // beim Einstieg in g ist b = undefined
  // beim Ausstieg aus g ist b = 10
  // beim Einstieg in g ist b = undefined
  // beim Ausstieg aus g ist b = 20
</javascript>

§

Die Lebenszeit einer Variable kann aber verlängert werden, wenn sie in einer
inneren Funktion verwendet wird. Das nennt man eine Closure (deutsch: "Funktionsabschluss").

<javascript caption="Closure verlängert die Lebenszeit einer Variable in einer Funktionen">
  function g( x ) {
    var b = x;
    return function() {
      console.log("ich bin eine Funktion und verwende b = " + b );
    }
  }
  f = g(10);
  f();
  // output: ich bin eine Funktion und verwende b = 10
  h = g(20);
  h();
  // output: ich bin eine Funktion und verwende b = 20
  f();
  // output: ich bin eine Funktion und verwende b = 10
</javascript>

Die Funktion f hat also immer noch zugriff auf die "alte" Variable b!

§

Closure kann man zum Beispiel verwenden um einen Countdown zu erzeugen:

<javascript caption="Erzeuge eine Countdown-Funktion">
  function create_countdown( max ) {
    var i = max+1;
    return function() {
      i--;
      return i;
    }
  } 
  top10 = create_countdown(10);
  while( i = top10() ) {
    console.log("und auf Platz " + i + " .... ");
  }
</javascript>


