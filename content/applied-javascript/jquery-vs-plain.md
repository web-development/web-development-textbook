---
title: jQuery und reines JavaScript
order: 10
---

Im ersten Teil des Buches, in den Kapiteln [Formular und JavaScript](/formulare/javascript/),
[JavaScript DOM](/javascript-dom/) und [jQuery](/jQuery/) wurde JavaScript und jQuery bereits vorgestellt.

Nun wollen wir dieselben Themen nocheinmal genauer betrachten.


## das jQuery Objekt

Alle Funktionen die wir hier disskutieren werden geben immer
ein jQuery Objekt zurück, dass eine Liste von Nodes anhalten
kann.  Manchmal ist diese Liste leer, manchmal enthält sie nur ein
Element, manchmal mehrere.  

Wenn man mit einem jQuery Objekt arbeitet muss man sich also
bewusst sein, arbeitet man immer in der Mehrzahl, nie in der Einzahl.

Um die jQuery Objekte besser von anderen JavaScript Variablen 
unterscheiden zu können werden wir ihre Variablennamen immer mit
einem Dollar beginnen.

§

<javascript caption="von jQuery zu DOM und umgekehrt: Eine Node">
// von JavaScript zu jQuery

// Eine Node nach ID auswählen 
node = document.getElementById("id");

// jQuery Objekt konstruieren
$q = $(node);

__|__
// von jQuery nach JavaScript

// Eine Node mit ID auswählen 
$q = $("#idname");

// DOM-Node extrahieren:
node = $q.get(0);
node = $q[0];
</javascript>

§

Wenn mehrere Nodes gefunden werden muss das in jQuery nicht
besonders behandelt werden, in reinem JavaScript schon:

<javascript caption="von jQuery zu DOM und umgekehrt: mehrere Nodes">
// plain JavaScript
// Nodes mit CSS-Selektor auswählen
arr = document
        .querySelectorAll(".class");

// wie viele sind es?
if( arr.length > 1 ) {
  console.log("mehrere");
}

// in jQuery-Objekt
$q = $(arr);



__|__
// jQuery
// Nodes mit CSS-Selektor auswählen
$q = $(".class");


// wie viele sind es?
if( $q.length > 1 ) {
  console.log("mehrere");
}

// extrahieren
var i=0, arr=Array();
while( i < $q.length ) {
  arr[i] = $q.get(i);
}
</javascript>

## Selektieren

Wie wählt man Nodes aus der DOM aus?

<javascript caption="DOM Selektieren">
// plain JavaScript

// Eine Node nach ID auswählen
node = document.getElementById("id");

// Erste Node auswählen
node = document.querySelector("h2");


// Alle Nodes auswählen
arr= document.querySelectorAll("h2");
__|__
// jQuery 

// Eine Node nach ID auswählen 
$q = $("#id");

// Erste Node auswählen
$q = $("h2:first");   
$q = $("h2").first(); 

// Alle Nodes auswählen
$q = $("h2");
</javascript>


## Traversieren

Wie wandert man durch den DOM-Baum?

<javascript caption="DOM Traversieren">
// plain JavaScript

// hinauf zur Eltern-Node
p = node.parentNode;

// Kinder sind im Array children
var i = 0;
while( i < node.children.length ) {
  node.children[0];
}





__|__
// jQuery 

// hinauf zur Eltern-Node (Mehrzahl!)
$p = $q.parent();

// Kinder 
$c = $q.children();
$c = $q.children(':selected');

// Nachfahren
$n = $q.find();
$n = $q.find(':selected');

// Geschwister
$n = $q.next('p');
</javascript>

## Attribute

Wie liest man Attribute aus, wie setzt man sie? Das ist in reinem JavaScript
sogar etwas einfacher als mit jQuery: die Attribute sind einfach Eigenschaften
des jeweiligen Nodes und könnnen direkt manipuiert werden.

jQuery erleichtert einerseits das Verarbeiten einer ganzen Liste von Nodes,
und bietet andererseites ein paar besser verständliche Werte für Attribute:

<javascript caption="Attribute lesen und setzen">
// plain JavaScript - nur erstes h2!
document.querySelector('h2').align;
document.querySelector('h2')
  .align = 'center';

// Form-Element deaktivieren
document.querySelector('input')
  .disabled = true;

// existiert nicht




__|__
// jQuery - alle h2!
$('h2').attr('align');
$('h2')
  .attr('align', 'center');

// Form-Element deaktivieren
$('input')
  .attr('disabled', true);

// Node nach Attribut auswählen:
// Input-Tag mit ID und Attribut 
// 'name' das auf '_no' endet
$('input[id][name$=_no]')

</javascript>

Bei der Manipulation von CSS ist zu beachten: die Schreibweise
von CSS-Eigenschaften mit einem Minus-Zeichen lässt sich nicht
nach JavaScript übertragen.  In Javscript wird deswegen aus 
`background-color` die Eigenschaft `backgroundColor`.

<javascript caption="Style setzen">
// Style setzen - Schreibweise!
document.querySelector('h2')
  .style.backgroundColor = "yellow";





__|__
// Style setzen
 $('h2')
  .css('background-color', 'yellow');

// mehrere Eigenschaften setzen
 $('h2')
  .css({backgroundColor: 'yellow',
    color: 'red'});
</javascript>

§

Statt den Style direkt zu manipulieren sollte man
Klassen setzen:

<javascript caption="Klassen setzen">
// Klassen setzen
var cl = d.querySelector('#foo')
           .classList;
cl.add('bar');
cl.remove('bar');
cl.toggle('bar');
// Klassen abfragen
cl.contains('bar');
__|__
// Klassen setzen


$('#foo').addClass('bar');
$('#foo').removeClass('bar');
$('#foo').toggle('bar');
// Klassen abfragen
$('#foo').hasClass('bar');
</javascript>

## HTML einfügen

Wie fügt man eine Node in die DOM ein?

<javascript caption="Node in die DOM einfügen">
// plain JavaScript

// Text einfügen
t= document.createTextNode("Hello"); 
node.appendChild(t);

// Tag einfügen
l = document.createElement("a"); 
l.setAttribute('href', 'page.html');
l.appendChild(t);
node.appendChild(t);


// hack
node.innerHTML = 
  "<a href='page.html'>Hallo</a>";



__|__
// jQuery 

// Text einfügen
$n.append("Hallo");


// Tag einfügen
$l = $(
  "<a href='page.html'>Hallo</a>"
);
$n.append($l);


// oder
$l = $("<a>")
       .attr('href', 'page.html')
       .text('Hallo');
$n.append($l);

</javascript>

## Clonen

Wie kopiert oder verschiebt man eine vorhandene Node?

<javascript caption="Node clonen">
// plain JavaScript

// dolly kopieren und einfügen
var d2 = document
  .getElementById('dolly')
  .cloneNode();
document.getElementById('da')
  .appendChild(d2);

// kirk ans ziel verschieben
var beam = document
  .getElementById('kirk')
  .removeChild();
document.getElementById('da')
  .appendChild(beam);
__|__
// jQuery

// dolly kopieren und einfügen
$('#dolly').clone().appendTo('#da');





// kirk ans ziel verschieben
$('#da').append($('kirk').remove());




</javascript>



## Event-Listener

Wie fügt man einen Event-Handler ein?

<javascript caption="Events">
// plain JavaScript
node.addEventListener("click", f);
__|__
// jQuery 
$n.on("click", f);
</javascript>

## Wann brauche ich jQuery? Wann brauche ich ein Framework?

Als jQuery im Jahre 2006 erschien brachte es große Fortschritte
gegenüber "reinem JavaScript".  In den Jahren seither hat jQuery
die Weiterentwicklung von JavaScript beeinflusst: so wurde 
querySelector und querySelectorAll erst nach jQuery in den 
JavaScript Standard aufgenommen, und landet z.B. in Firefox 3.5 im Juni 2009.

Die "reine JavaScript" Lösung bringt bessere Performance,
besonders auf mobilen Endgeräten, wo das Laden der Liberary und
der Speicherverbrauch durch die Libraray größere Auswirkungen
haben als am Desktop.

Siehe auch

* Vortrag von Estelle Weyl: "You don't need a Framework for that!", [YouTube](http://www.youtube.com/watch?v=FbpUt3XLGlE), [Slides](http://estelle.github.io/fluentconf/#slide1)
