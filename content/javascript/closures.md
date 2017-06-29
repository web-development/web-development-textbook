---
title: Funktionen und Closures
order: 25
---

Javascript baut nicht nur auf die Traditionen der
objektorientierten Programmierung auf, sondern auch
auf die der Funktionalen Programmierung[&rarr;](http://de.wikipedia.org/wiki/Funktionale_Programmierung).

In diesem Kapitel lernen wir die Besonderheiten
von Funktionen in Javascript kennen, darunter
auch Closures [&rarr;](http://de.wikipedia.org/wiki/Closure) (Funktionsabschlüsse).


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

Die Funktion `f` hat also immer noch Zugriff auf die "alte" Variable `b`!

§

Closures kann man zum Beispiel verwenden um einen Countdown zu erzeugen:

<javascript caption="Erzeuge eine Countdown-Funktion">
  function create_countdown( max ) {
    var i = max+1;
    return function() {
      i--;
      return i;
    }
  } 
  top10 = create_countdown(10);
  top20 = create_countdown(20);

  while( i = top10() ) {
    console.log("und auf Platz " + i + " .... ");
  }
</javascript>


§

Wozu werden Closures verwendet?  Eine erste Anwendung sind Eventhandler.
Betrachten wir eine Funktion die bei  `addEventListener` oder in jQuery bei `on`
als Eventhandler angegeben wird:

<javascript caption="Eventhandler wird übergeben">
  button.on('click', do_something);
</javascript>

Die Funktion kann an dieser stelle keine Argumente
erhalten, weil sie ja nicht **aufgerufen** werden soll,
sondern nur **übergeben** werden soll!

<javascript caption="Eventhandler wird aufgerufen - funktioniert nicht!">
  button.on('click', do_something(10, 'Hallo'));
</javascript>

Hier ein größeres Beispiel: Die Schriftart der Seite soll
mittels 3 Buttons verändert werden können.  Die Buttons und die
dazugehörigen Eventhandler werden dynamisch erzeugt:

[Demo: so funktioniert es nicht](/images/closure-for-event-broken.html)

Als Eventhandler kann nur eine Funktion eingesetzt werden, die schon alle
notwendigen Parameter enthält, und keine weiteren Argumente braucht.
Diese Funktion erzeugt man zuerst, und verwendet dabei eine Closure
um die Parameter zu speichern: 


<javascript caption="Eventhandler ist eine Closure, enthält Argumente schon">
  function insert_button(text) {
    return $(`<button>${text}</button>`).insertAfter('h1');
  }
  
  function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }

  var b,f;

  b = insert_button('Schrift 16');
  f = makeSizer(16);
  b.on('click', f);

  b = insert_button('Schrift 14');
  f = makeSizer(14);
  b.on('click', f);

  b = insert_button('Schrift 12');
  f = makeSizer(12);
  b.on('click', f);  
</javascript>


[Demo: so funktioniert es](/images/closure-for-event.html)





## Siehe auch

* [](https://developer.mozilla.org/de/docs/Web/JavaScript/Closures)

