---
title: Module
order: 45
---

Wie kann man JavaScript-Code in größere Einheiten
organisieren?  Wo doch die Sprache keine Unterstütztung
für Namespaces oder Kapselung bietet?

Eine Lösung für diese Fragestellung ist der Modul-Pattern,
hier beschrieben nach [Stefanov(2010): JavaScript Patterns](http://shop.oreilly.com/product/9780596806767.do), Kapitel 5.
Siehe auch [Osmani(2012): Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript).

## Viele Skripte, ein Namensraum

Häuft werden in einer Webseite JavaScript-Programm aus
verschiedenen Quellen kombiniert.  Die Webseite
enthält z.B. 

* JavaScript der Website selbst, zu Prüfung von Formulardaten und für Animationen
* für Zugriffs-Statistiken, z.B. [Google Analytics](http://support.google.com/googleanalytics/bin/answer.py?hl=en&answer=174090)
* für das Teilen von Inhalten auf Sozialen Netzwerkden, z.B. [Facebook-Like-Button](https://developers.connect.facebook.com/docs/reference/plugins/like/)
* für Feedback zu Webseite z.B. [UserVoice](http://uservoice.com)
* für Kommentare auf der Webseite, z.B.  [Disqus](http://docs.disqus.com/developers/universal/)
* für das Einbinden einer Landkarte, z.B. [Open Street Map mit MapQuery](http://mapquery.org/)

Mit ein bisschen Copy-und-Paste kann man die verschiedenen
Programme schnell in die eigene Webseite einbauen. All diese
Programme laufen dann im selben JavaScript Interpreter ab,
und benutzen einen gemeinsamen globalen Namensraum.

## Namensraum imitieren

Um einen Namensraum zu imitieren kann man ein Objekt in JavaScript verwenden.

Die linke Version erzeugt 5 globale Namen. Oder, um genauer zu sein: sie
erzeugt 3 Eigenschaften und 2 Methoden des `window`-Objekts. Würde ein
anderes Programm ebenfalls ein Funktion `f()` definieren, so würde
die spätere Definition erhalten bleiben.

In der rechten Version wird nur ein globaler Name angelegt: `APP`.
Alle weiteren Namen sind dann in diesem Objekt versteckt. Würde
ein anderes Programm in der Webseite auch eine Funktion `f()` definieren
dann wäre das kein Problem mehr.

<javascript caption="Ein globales Namensraum-Objekt statt vieler globalen Variablen">
// globale Variabeln 

var KONSTANTE = 3.141;
var variable = 3;
function Ding(){
  return this;
}
function f(x){
  return 2*x;
}

var objekt = new Ding();
__|__
// ein Namensraum-Objekt
var APP = {}
APP.KONSTANTE = 3.141;
APP.variable = 3;
APP.Ding = function() {
  return this;
}
APP.f = function(x) {
  return 2*x;
}

APP.objekt = new APP.Ding();
</javascript>

## Namensräume anlegen

Namensräume können auch verschachtelt werden:

<javascript caption="Verschachtelte Namensräume">
var GAME =  GAME || {};
GAME.Player = ...
GAME.Master = ...
</javascript>

§

Die erste Zeile enthält eine Vorsichtsmaßnahme: Falls
`GAME` schon definiert wäre, dann wird die alten Definition
nicht überschrieben.  Dabei macht man sich die
[Kurzschulssauswertung](http://de.wikipedia.org/wiki/Kurzschlussauswertung)
des Oder-Operators zu nutze.

Folgender Code zeigt eine alternative Schreibweise
für diese Zuweisung:

<javascript caption="Schreibweisen für Default-Wert">
var GAME = GAME || {};





__|__
var GAME;
if( GAME ) {
  // GAME = GAME;
} else {
  GAME = {};
}
</javascript>


## Sofort ausgewertete Funktionen

Eine andere Methode um den globalen Namensraum sauber zu halten
sind die sogenannten "sofort augewerteten Funktionen" ("immediate funktions").

Dabei wird eine Funktion definiert und sofort - und nur einmal - aufgerufen.
Nur der Rückgabewert wird ein einer globalen Variable `g` gespeichert.

Beachten sie dabei die Klammern rund um die Funktions-Definition:

<javascript caption="Schreibweise für sofort ausgewertete Funktionen">
var g = (function(){
  return 42;
})();
</javascript>

§

Beispiel einer sofort ausgewerteten Funktion:

<javascript caption="sofort ausgwertete Funktion">
var g = (function(){
  var a,b,c;
  function d() {
  }
  function Ding() {
    return this;
  }

  a = 10;
  b = d( a );
  c = new Ding();

  return a;
})();
</javascript>

§

Eine Verwendung von sofort ausgewerteten Funktionen sind
Polyfills. Im Artikel [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/)
stellt Paul Irish einen Polyfill für `requestAnimationFrame` vor:


Dieses Funktion wir einmal aufgerufen und stellt sicher,
dass unter `window.requestAnimationFrame` die jeweilige Implementierung 
im Browser verfügbar ist.


<javascript caption="Polyfill für requestAnimationFrame - einfache Version">
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame;
    })();
</javascript>

§

Im gleichen Artikel stellt Irish eine bessere Implementierung
von Erik Möller vor:

<javascript caption="Polyfill für requestAnimationFrame - Ausschnitt">
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            // verwende setTimeout 
            // ...
        };
})();
</javascript>


## Module

Namensräume und sofort augewertete Funktionen werden verwendet um
sogenannte Module zu bauen. Das Modul bündelt alle Namen unter
einem Namensraum und bietet die Möglichkeit von privaten und
öffentlichen Eigenschaften und Funktionen.

In diesem Beispiel ist das Modul ein Objekt:


<javascript caption="Schreibweise für ein Modul: ein Objekt">
var APP = (function(){
var a,b,f;      // private 
var c,d,g;      // öffentlich
f = function() {  // private Funktion
};
g = function() {  // öffentliche Funktion
};
return {
  c: c,
  d: d,  
  g: g
};
})();
</javascript>


<div class="alert"><strong>ToDo</strong> fertig stellen </div>
