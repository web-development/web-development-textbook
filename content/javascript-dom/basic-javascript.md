---
title: Basic Javascript
order: 20
---
Ein vollständiges Beispiel für eine Webseite mit Javascript-Programm, auch
[live im browser](/images/javascript-dom/farbfeld.html).

<htmlcode caption="Vollständige Webseite mit Javascript">
<head>
<body id="farbfeld">
<h1>Farbwahl</h1>
<form>
  <input type="button" value="Rot"  onclick="setcolor('red')">
  <input type="button" value="Grün" onclick="setcolor('#0F0')">
  <input type="button" value="Blau" onclick="setcolor('blue')">
</form>
<script>
function setcolor( c ) {
  b = document.getElementById('farbfeld');
  b.style.backgroundColor = c
}
</script>
</body>
</htmlcode>

In dieser Webseite ist an vier Stellen Javascript zu finden. Im `script` Tag am Ende des body, und dreimal in einem Attribut des `input`-Tags. Wie Sie sehen ist Javascript sehr eng mit HTML und CSS verzahnt. 

Wer ein bestehende Website warten oder verändern will muss mindestens den bestehenden Javascript-Code erkennen können, um ihn nicht zu beschädigen. D.h. auch Leute die nur Design und keine Programmierung machen brauchen ein Grundverständnis von Javascript.

Es ist also erst einmal zu klären wie Javascript in HTML eingebunden wird. 

Einbindung von Javascript
--------------------------

* externe Javascript-Datei
* mit `<script>`-Tag
* Javascript in einer URL
* onevent-Attribute

### Externe Javascript-Datei

Man kann Javascript-Programme in eigenen Dateien speichern, diese haben traditionell die 
Endung `.js`. Wir werden später eine Javascript-Library namens jQuery verwendet. 
Mit dem `script`-Tag wird die externe Javascript-Datei eingebunden: 


<htmlcode>
  <script src="jquery.js"></script>
</htmlcode>

Wird der `script`-Tag auf diese Weise (mit dem Attribut src) verwendet, dann darf er 
keinen Inhalt zwischen `<script>` und `</script>` enthalten. Achtung: 
die Schreibweise ohne Ende-Tag: `<script src="jquery">` ist nicht erlaubt!

### Der &lt;script>-Tag 
Javascript-Programme können im HTML-Code mit dem `script`-Tag eingebettet
werden. Das Programm wird dann beim Aufbau der Seite ausgeführt, siehe auch
[live im Browser](/images/javascript-dom/countdown.html)

<htmlcode>
  <h1>Selbstzerstörung</h1>
  <script>
      i=10;
      while (i>0) {
          document.write("<br>in " + i + " Millisekunden");
          i--;
      }
  </script>
  <p><strong>Peng!</strong>
</htmlcode>

Dieses Programm ist übrigens ein gutes Beispiel für ein veraltetes Javascript-Programm. Die Methode `document.write()`, der hier für die Ausgabe verwendet wird, wurde durch das DOM größteteils ersetzt. Nur sehr wenige Leute müssen bei sehr wenigen Gelegenheiten noch `document.write()` verwenden - z.B. die AutorInnen der Javascript-Libaries wie John Resig von jQuery.

### Javascript in einer URL

Als URL kann man auch ein kleines Javascript-Programm angeben, z. B. bei einem Link:

<htmlcode>
  <a href="javascript:location='http://www.google.at/'">zu Google nur mit Javascript</a>
</htmlcode>

Die “Javascript-in-einer-URL”- Schreibweise ist in HTML-Seiten nicht sehr sinnvoll, da sie für Browser ohne Javascript-Fähigkeit die Links unbrauchbar macht.  

Hier eine Version die dem Prinzip der „graceful degradation“ entspricht. Sie funktioniert mit und ohne Javascript sinnvoll:

<htmlcode>
  <a href="http://www.google.at" onclick="ok=confirm('go?'); return ok;">google</a>
</htmlcode>

Ohne Javascript ist es ein ganz normaler Link zu google.

Mit Javascript erscheint ein Dialog, je nach Antwort wird der Link entweder aufgerufen oder nicht. Das funktioniert gleich wie beim onsubmit-Attribut des form-Tags: Wenn der Event-Handler `false` zurückgibt wird das Event unterbrochen.

<a href="http://www.google.at" onclick="ok=confirm('go?'); return ok;">google</a>

###  Die onevent - Attribute ###

Meist werden Javascript-Programme so geschrieben, dass sie nicht gleich beim Laden der Seite starten, sondern erst wenn gewisse Ereignisse (Events) eintreten.

Ein paar typische Events mit ihren typischen HTML-Tags:

§

<htmlcode>
  <body onload="...">
</htmlcode>

Das Programm wird ausgeführt, nachdem die ganze Seite geladen und fertig dargestellt ist

§


<htmlcode>
  <a href="..." onmouseover="...">
</htmlcode>

Das Programm wird ausgeführt wenn die Maus über den Link bewegt wird (auch: `onmouseout`). (Achtung: funktioniert nicht auf Touch-Devices – so wie `:hover`)


§


<htmlcode>
  <input type="button" onclick="...">
</htmlcode>

Das Programm wird ausgeführt wenn auf den Button geklickt wird. Das Programm muß `true` oder `false` zurückgeben um anzuzeigen ob die normale Funktion des Buttons wirklich ausgeführt werden soll. 


§


<htmlcode>
  <form onsubmit="...">
</htmlcode>

Das Programm wird ausgeführt wenn der Einsende-Knopf des Formulars betätigt wird, aber bevor die Daten wirklich gesendet werden. Falls der Javascript-Code false zurückgibt werden die Daten aber nicht versandt! 

§



<htmlcode>
  <a href="..." onclick="...">
</htmlcode>

Das Programm wird ausgeführt wenn der Link angeklickt wird. Falls der Javascript-Code false zurückgibt wird der Link aber nicht aktiviert!

§

<htmlcode>
  <input onchange="...">
</htmlcode>

Das Programm wird ausgeführt wenn der Inhalt des Eingabefeldes verändert wurde

§

<htmlcode>
  <div ontouchstart="..." ontouchend="..." ontouchmove="....">
</htmlcode>

Nur auf Geräten mit Touchscreen.


§

<htmlcode>
  <body onoffline="..." ononline="...">
</htmlcode>

Das Programm wird ausgeführt wenn das Gerät die Verbindung zum Internet
verliert, bzw. wieder erhält.


Syntax von Javascript
----------------------

Javascript hat eine ähnliche Schreibweise wie die Sprachen aus der C-Familie (C, C++, Java, Perl, PHP): Anweisung wird mit einem Strichpunkt (Semikolon) getrennt, Blöcke werden mit geschwungenen Klammern gebildet. 

Javascript ist eine objektorientierte Programmiersprache. Was bedeutet objektorientierung? Die Grundidee ist, dass ein Objekt nicht nur eine Variable ist, die Daten speichert, sondern zusätzlich auch noch Methoden existieren können, die zu diesem Objekt gehören.

§

Zum Beispiel das Objekt `document` ist bei Javascript im Browser immer vorhanden. Es repräsentiert die aktuell geladene Webseite. Dieses Dokument hat einige Eigenschaften (Variablen) und einige Methoden (Funktionen):

<javascript>
// document.location
// diese Eigenschaft speichert die aktuelle URL
// wenn man einen neuen Wert in location speichert
// surft der Browser hin
document.location = "http://io9.com";

// die Methode write
// (über)schreibt die webseite
document.write("hi");
</javascript>

§

Folgendes Beispiel verwendet die Methode `getElementById` des `document`-Objekts um ein bestimmtes Element in der Webseite auszuwählen, und dann die Eigenschaft `textContent`
um den Text zu verändern:

![Abbildung 58: Javascript Console in Firebug: Manipulation von Wikipedia](/images/javascript-dom/js-console.png)


### Variablen

In andere Programmiersprachen müssen Variablen deklariert werden (ein Datentyp für die Variable wird festgelegt) und initialisiert werden (ein erster Wert wird in die Variable gespeichert). In Javascript gibt es keine Deklaration des Datentypes: jede Variable kann jeden Datentyp enthalten.

Auch die folgenden Beispiele können Sie direkt in der Console ausprobieren wie in der Abbildung gezeigt: Wenn Sie einen Ausdruck eintippen wird er ausgewertet. Mit dem Befehl console.log( … ) können Sie direkt auf die Console schreiben.


![Abbildung 58: Javascript Console in Firebug](/images/javascript-dom/js-console-vars.png)

Mit Javascript 2015 gibt nun drei Arten eine Variable zu deklarieren:

<javascript caption="deklaration">
var a;  // altmodisch

let b;    // neumodisch, Variable
const c;  // neumodisch, Konstante
</javascript>

Die Details zu `let` und `const` lernen Sie später 
im Kapitel [Variablen und Scope](/javascript/variablen/)


### Datentypen

Variablen in Javascript können Zahlen, Strings, Arrays, Objekte enthalten – der Interpreter trennt Variablen nicht nach verschiedenen Datentypen:

<javascript>
  a = 10;               // typeof(a) == "number"
  a = 3.141;           // typeof(a) == "number"
  a = "ein text";     // typeof(a) == "string"
  a = true;          // typeof(a) == "boolean"
  a = undefined;    // typeof(a) == "undefined"
</javascript>

Bei Zahlen in Javascript wird nicht zwischen integer und float unterschieden: 
bis 2<sup>53</sup> (9.007.199.254.740.992)  können Ganzzahlen gespeichert werden,
darüber nur noch floats.  Die Details
können Sie in [How numbers are encoded in JavaScript](http://www.2ality.com/2012/04/number-encoding.html) nachlesen.

### Strings

In Javascript gibt es drei Arten Strings zu schreiben.

<javascript caption="drei Arten Strings zu schreiben">
a = "Hallo";
b = 'Welt';
c = `Hallo ${b}, der brutto Preis ist ${100 * 1.5}`;
</javascript>

Die letzte, genannt  **template literals**, erlaubt das einbinden von Variablen und das
Auswerten von Javascript-Expressions.  Siehe auch [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Arrays

Arrays in Javascript können wie in C mit eckigen Klammern und Integer-Index ausgelesen werden: `b[0]`, `b[1]`, …  Aber eigentlich sind Arrays schon Objekte.

Für das Erzeugen des Arrays gibt es zwei Schreibweisen

<javascript>
  var b;
  b = ["eins", 2, 3.141, true];           // JSON-Schreibweise
  b = new Array("eins", 2, 3.141, true);  // Objekt-Schreibweise
  // typeof(b) == "object"
</javascript>

§

Die Werte im Array können verschiedene Daten haben (String, Number, Boolean,...). Die Größe des Arrays ist nicht beschränkt, die aktuelle Länge des Arrays kann aus der Eigenschaft 
`.length ausgelesen werden.
[Beispiel live im Browser](/images/javascript-dom/jsarray.html)

<javascript>
  var i,t;
  i = 0;
  t = "Das Array:\n";
  while( i < b.length ) {
      t += "Index " + i    + "\n";
      t += "Wert  " + b[i] + "\n";
      i++;
  }
  alert(t);
</javascript>

### Objekte

Für das Erzeugen von Objekten gibt es zwei Schreibweisen: die JSON-Schreibweise mit geschwungenen Klammern eignet sich gut für einmalige Objekte. Will man mehrere Objekte mit denselben Eigenschaften erzeugen, dann ist eine Klasse mit Konstruktor besser geeignet.

<javascript>
  var c;
  c = {"farbe" : "rot", "beschriftung": "int pi == 3", "verkauft": true};

  // Construktor-Funktion
  class Shirt {
    constructor( f, b, v ) {
      this.farbe        = f;
      this.beschriftung = b;
      this.verkauft     = v;
    }
  }
  d = new Shirt("rot", "int pi == 3", true);

  alert("Das Shirt ist " + c.farbe ); // gibt “Das Shirt ist rot”
  alert("Das Shirt ist " + d.farbe ); // gibt “Das Shirt ist rot”

  // typeof c === "object"
  // c.constructor === Shirt
  // d.constructor === Object
</javascript>

### Zugriff auf Eigenschaften

Eine Besonderheit von Javascript (die sie nicht in anderen Programmiersprachen finden werden) ist, dass Eigenschaften eines Objekts nicht nur über die Punkt-Schreibweise, sondern auch über eckige Klammern – also wie ein Array – angesprochen werden können:

<javascript>
  alert("Das Shirt ist " + c.farbe );
  alert("Das Shirt ist " + c["farbe"] );
</javascript>

In den eckigen Klammern steht nun ein String. Dieser könnte auch in einer Variable gespeichert sein:

<javascript>
  e = "beschriftung";
  alert("Die Beschriftung lautet " + c[e] );
</javascript>

### Einfache Schleife

Neben der `while` und `for` Schleife mit index
gibt es in Javascript noch Möglichkeiten über
die Werte in einem Array zu iterieren **ohne** den
index zu benötigen:

<javascript>
  let liste = [10, 20, 30];

  for (let element of liste) {
    console.log(element);
  }
</javascript>

