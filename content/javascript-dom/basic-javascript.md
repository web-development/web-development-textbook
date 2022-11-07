---
title: Basic Javascript
order: 20
---
Ein vollständiges Beispiel für eine Webseite mit Javascript-Programm, auch
[live im browser](/images/javascript-dom/farbfeld.html).

<htmlcode caption="Vollständige Webseite mit Javascript">
<body id="farbfeld">
  <script>
  console.log("JavaScript is active");
  function setcolor( color ) {
    let area = document.getElementById('farbfeld');
    area.style.backgroundColor = color;
    console.log("color was changed to", color);
  }
  </script>
  <h1>Farbwahl</h1>
  <input type="button" value="Rot"  onclick="setcolor('red')">
  <input type="button" value="Grün" onclick="setcolor('#0F0')">
  <input type="button" value="Blau" onclick="setcolor('blue')">
</body>
</htmlcode>

In dieser Webseite ist an vier Stellen Javascript zu finden. Im `script` Tag am Ende des body, und dreimal in einem Attribut des `input`-Tags. Wie Sie sehen ist Javascript sehr eng mit HTML und CSS verzahnt.

Wer ein bestehende Website warten oder verändern will muss mindestens den bestehenden Javascript-Code erkennen können, um ihn nicht zu beschädigen. D.h. auch Leute die nur Design und keine Programmierung machen brauchen ein Grundverständnis von Javascript.

Betrachten wir nun die einzelnen Teile des Dokuments


## Der Script Tag

Der HTML-Tag `<script>` enthält JavaScript Code.
Dieser Code wird sofort ausgeführt wenn die Seite geladen wird.
Im Beispiel betrifft das nur den Befehl `console.log`, der sofort
eine Zeile in die Console der Developer Tools schreibt:

<htmlcode caption="Der Script-Tag">
<script>
console.log("JavaScript is active");
function setcolor( color ) {
  let area = document.getElementById('farbfeld');
  area.style.backgroundColor = color;
  console.log("color was changed to", color);
}
</script>
</htmlcode>

Es wir noch eine Funktion `setcolor` definiert, aber nicht aufgerufen.

## Die onevent - Attribute

Meist werden Javascript-Programme so geschrieben, dass sie nicht gleich beim Laden der Seite starten, sondern erst wenn gewisse Ereignisse (Events) eintreten.
Siehe [Crash Course Computer Science #26: Graphical User Interfaces](https://youtu.be/XIGSJshYb90?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&t=316) für eine Erklärung von Event-Gesteuerter-Programmierung.

Im Beispiel-Programm findet man drei `onclick` attribute:

<htmlcode caption="Vollständige Webseite mit Javascript">
  <input type="button" value="Rot"  onclick="setcolor('red')">
  <input type="button" value="Grün" onclick="setcolor('#0F0')">
  <input type="button" value="Blau" onclick="setcolor('blue')">
</htmlcode>


Beim Click auf den jeweiligen Button wird das Stück JavaScript Code im `onclick`-Attribut
ausgeführt.

## Beispiele für Events

<htmlcode>
  <body onload="...">
</htmlcode>

Der Code wird ausgeführt, nachdem die ganze Seite geladen und fertig dargestellt ist

§


<htmlcode>
  <a href="..." onmouseover="...">
</htmlcode>

Der Code wird ausgeführt wenn die Maus über den Link bewegt wird (auch: `onmouseout`). (Achtung: funktioniert nicht auf Touch-Devices – genau wie `:hover`)


§


<htmlcode>
  <input type="button" onclick="...">
</htmlcode>

Der Code wird ausgeführt wenn auf den Button geklickt wird.

§


<htmlcode>
  <script>
    function check() {
      if (....) {
        // data ok, send it!
        return true;
      } else {
        // data not ok, block the submission of the form
        return false;
      }
    }
  </script>
  <form onsubmit="return check();">
</htmlcode>

Der Code wird aufgerufen, wenn der Einsende-Knopf des Formulars betätigt wird, aber bevor die Daten wirklich gesendet werden.

Falls der Javascript-Code  `false` zurückgibt werden die Daten aber nicht versandt!

§

<htmlcode>
  <input onchange="...">
</htmlcode>

Der Code wird ausgeführt wenn der Inhalt des Eingabefeldes verändert wurde
und der Fokus auf das nächste Feld weitergeht.

§

<htmlcode>
  <div ontouchstart="..." ontouchend="..." ontouchmove="....">
</htmlcode>

Nur auf Geräten mit Touchscreen.

§

<htmlcode>
  <body onoffline="..." ononline="...">
</htmlcode>

Der Code wird ausgeführt wenn das Gerät die Verbindung zum Internet
verliert, bzw. wieder erhält.


Syntax von Javascript
----------------------

Javascript hat eine ähnliche Schreibweise wie die Sprachen aus der C-Familie (C, C++, Java, Perl, PHP): Semikolon am Ende des Statements, Blöcke werden mit geschwungenen Klammern gebildet.

Javascript ist eine objektorientierte Programmiersprache. Was bedeutet Objekt-Orientierung? Die Grundidee ist, dass ein Objekt nicht nur eine Variable ist, die Daten speichert, sondern zusätzlich auch noch Methoden existieren können, die zu diesem Objekt gehören.

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

![Abbildung 58: Javascript Console in den Developer Tools: Manipulation von Wikipedia](/images/javascript-dom/js-console.png)


### Variablen

In andere Programmiersprachen müssen Variablen deklariert werden (ein Datentyp für die Variable wird festgelegt) und initialisiert werden (ein erster Wert wird in die Variable gespeichert). In Javascript gibt es keine Deklaration des Datentypes: jede Variable kann jeden Datentyp enthalten.

Auch die folgenden Beispiele können Sie direkt in der Console ausprobieren wie in der Abbildung gezeigt: Wenn Sie einen Ausdruck eintippen wird er ausgewertet. Mit dem Befehl console.log( … ) können Sie direkt auf die Console schreiben.


![Abbildung 58: Javascript Console in Firebug](/images/javascript-dom/vars-in-js-console.png)

Ab Javascript 2015 (ES6) gibt drei Arten eine Variable zu deklarieren:

<javascript caption="deklaration">
var a;  // alt

let b;    // neu, Variable
const c;  // neu, Konstante
</javascript>

Die Details zu `let` und `const` lernen wir später
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
c = `Hallo ${name}, der brutto Preis ist ${netto * 1.2}`;
</javascript>

Die letzte, genannt  **template literals**, erlaubt das einbinden von Variablen und das
Auswerten von Javascript-Expressions.  Siehe auch [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Arrays

Arrays in Javascript können wie in C# mit eckigen Klammern und Integer-Index ausgelesen werden: `b[0]`, `b[1]`. Für das Erzeugen des Arrays gibt es zwei Schreibweisen

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

Für das Erzeugen von Objekten gibt es zwei Schreibweisen: die JSON-Schreibweise mit geschwungenen Klammern eignet sich gut für einmalige Objekte.

<javascript>
  var c;
  c = {"farbe" : "rot", "beschriftung": "int pi == 3", "verkauft": true};

  alert("Das Shirt ist " + c.farbe ); // gibt “Das Shirt ist rot”

  alert(typeof c); // gibt  "object"
</javascript>

Will man mehrere Objekte mit denselben Eigenschaften erzeugen, dann ist eine Klasse mit Konstruktor besser geeignet.

<javascript>
  class Shirt {
      constructor( f, b, v ) {
          this.farbe        = f;
          this.beschriftung = b;
          this.verkauft     = v;
      }
  }
  var d = new Shirt("rot", "int pi == 3", true);

  alert("Das Shirt ist " + d.farbe ); // gibt “Das Shirt ist rot”

  alert(typeof d); // gibt  "object"
</javascript>

### Zugriff auf Eigenschaften

Eine Besonderheit von Javascript (die sie nicht in anderen Programmiersprachen finden werden) ist, dass Eigenschaften eines Objekts nicht nur über die Punkt-Schreibweise, sondern auch über eckige Klammern – also wie ein Array – angesprochen werden können:

<javascript>
  console.log("die Farbe des shirts ist")
  console.log( c.farbe    );
  console.log( c["farbe"] );
</javascript>

In den eckigen Klammern steht nun ein String. Dieser könnte auch in einer Variable gespeichert sein:

<javascript>
  e = "beschriftung";
  console.log("Die Beschriftung lautet ")
  console.log( c[e] );
</javascript>

### Einfache Schleife

Neben der `while` und `for` Schleife mit index
gibt es in Javascript noch Möglichkeiten über
die Werte in einem Array zu iterieren **ohne** den
index zu benötigen mit einer `for ... of` schleife:

<javascript>
  let liste = [10, 20, 30];

  for (let element of liste) {
      console.log(element);
  }
</javascript>


### Verzweigungen

`if`, `else`, `else if` und die Operatoren für boolsche Werte funktionieren wie in c#:


<javascript>
  let windy = false;
  let rainy = true;

  if (! windy && ( rainy || sunny )) {
      console.log("Umbrella !");
  } else {
      console.log("No umbrella !");
  }
</javascript>


§

`switch` funktioniert genau wie in C#:

<javascript>
  switch (cardNr) {
      case 14:
          console.log("Ass");
          break;
      case 13:
          console.log("Koenig");
          break;
      case 12:
          console.log("Dame");
          break;
      case 11:
          console.log("Bube");
          break;
      default:
          console.log(`unbekannte Karte Nr. ${cardNr}`);
          break;
  }
</javascript>


### Funktionen

Funktionen sind in Javascript etwas simpler als in C#, da die
Typ-Deklarationen entfallen.  Das Keyword `function` wird vor dem neu
definierten Funktionsnamen verwendet:

<javascript>
  function add( a, b ) {
      return a+b;
  }

  console.log(  add(40, 2)  );  // gibt 42
</javascript>


### Konventionen

Sowohl für Variablen als auch für Funktionen wird meist "Camel Case" verwendet, mit
einem kleinen Anfangsbuchstaben, z.b.  `addNumbers`,  `deleteAllTheListItems`.
^