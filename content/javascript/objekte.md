---
title: Objekte + Prototypen
order: 20
---

JavaScript ist eine objektorientierte Sprache. Achtung, hier kommt es leicht zu einem Missverständniss: 
Objektorientierung hat nicht zwingend etwas mit Klassen zu tun, sondern eben mit Objekten.  Und während
z.B. in Java, C++, C#, PHP diese Objekte immer in Klassen organisiert sind, ist das in JavaScript nicht
zwingend der Fall.

Trotzdem gibt es in JavaScript Mechanismen wie Vererbung und Komposition.
In diesem Kapitel lernen wir diese Mechanismen kennen.

## Ein einzelnes Objekt 

Wie Sie ein einzelnes Objekt, das Properties und Methoden haben kann, mittels
JSON erzeugen wissen Sie ja schon:

<javascript caption="Objekt in JSON Schreibweise">
var hs = {
  name: "FH Salzburg",
  typ: "Fachhochschule",
  seit: 1996,
  alter: function() { return  (new Date).getYear() + 1900 - this.seit }
};

console.log( hs.alter() );  // 20
</javascript>


## Konstruktur-Funktion für mehrere gleiche Objekte

Sollen mehrere gleichartige Objekte erzeugt werden, dann
geschieht das in JavaScript mit einer Konstruktur Funktion: 

<javascript caption="Konstruktor für Objekte">
function Studiengang(name, seit, hochschule) {
  this.name = name;
  this.seit = seit;
  this.hs = hochschule;
}

mmad = new Studiengang( "DI(FH) MultiMediaArt", 1996, hs);
mmab = new Studiengang( "BA MultiMediaArt", 2006, hs);
mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008, hs);
mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011, hs);
</javascript>

Jedes dieser Objekte hat nun eine Eigenschaft `name`
 und eine Eigenschaft `seit`.

Die so erzeugten Objekte bleiben mit der Konstruktor-Funktion
verbunden - falls keine verwendet wurde auf die Funktion `Object()`:


<javascript caption="Fortsetzung: Konstruktor-Funktionen">
// folgende Ausdrücke sind true:
mmtb.constructor === Studiengang;
hs.constructor === Object;
</javascript>

![Abbildung: Objekt mit Konstruktor](/images/objekt-mit-objekt-und-constructor.png)

Dieser Konstruktor wird auch verwendet, um die Fragen `instanceof` zu beantworten:

<javascript caption="Fortsetzung: Operator instanceof">
mmtb instanceof Studiengang;
hs instanceof Object;
mmtb instanceof Object;
</javascript>

`mmtb` ist auch eine Instanz von `Object`! Es muss also eine Art Vererbungs-Hierarchie
geben, die wir noch nicht kennen, in der `Studiengang` als Kind von `Object` geführt wird.
Wie funktioniert das?  Die Antwort lautet:  mit dem Prototypen.


## Objekt und Konstruktor und Prototyp

Wie im vorigen Kapitel kurz erläutert ist jede Funktion in JavaScript auch ein Objekt.
Man kann zur Funktion Attribute speichern.  Es gibt ein Attribut mit einer speziellen Bedeutung
bei einer Konstruktor-Funktion: das Attribut `prototype`: prototype verweist auf ein Objekt,
in dem weitere Methoden und Attribute für alle Objekte die mit diesem Konstruktor erzeugt wurden
gespeichert werden.

<javascript caption="Methoden und Attribute definieren mit dem Prototyp">
// Konstruktor
function Studiengang(name, seit, hs) {
  this.name = name;
  this.seit = seit;
  this.hs = hs;
}
// Zwei Attribute am prototyp des Konstruktors
Studiengang.prototype.min = 2;
Studiengang.prototype.max = 42;
// Eine Methode am prototyp des Konstruktors
Studiengang.prototype.toString = function () {
  return "Studiengang " + this.name + 
    " (seit " + this.seit + 
    " @ " + this.hs.name + ")";
}

typeof Studiengang;  // function! 

mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008, hs );
mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011, hs );

mmtb.toString();  // findet toString Methode des 
            // Prototypen und ruft sie auf

mmtb.min    // findet min Attribut des Prototypen
            // gibt Wert 2 
mmtb.min=5  // speichert Wert 5 im Objekt selbst
mmtb.min    // gibt jetzt Wert 5
mmtm.min    // findet min Attribut des Prototypen, 
            // gibt Wert 2 
</javascript>

[Demo mit Visualisierung](/images/js-prototype-vis.html)

Wird ein Attribut oder eine Methode an einem Objekt gesucht, und
kann direkt am Objekt nicht gefunden werden, dann durchsucht
der JavaScript-Interpreter als nächstes den Prototypen des Konstruktors.

Attribute direkt im Objekt überschreiben die Attribute des Prototypen: im Beispiel
wird das Attribut `min` direkt im Objekt gefunden, hier ist kein Zugriff auf den Protypen nötig.


![Abbildung: Objekt mit Konstruktor](/images/objekt-mit-prototyp.png)


## JavaScript 2015 Schreibweise mit `class`

In JavaScript 2015 wurde eine neue Schreibweise für Objekte und Konstruktoren
eingeführt. Die Funktionsweise der Objekte, Konstruktur-Funktionen und Prototypen
wurde dadurch nicht verändert.

Einziger Unterschied zwischen dieser Schreibeweise und der Schreibweise
als Funktion ist die Sichtbarkeit: in der Funktions-Schreibweise wird der Konstruktor
gehoisted (ist weiter oben schon sichtbar), in der Klassen-Schreibweise nicht. 

<javascript caption="Methoden und Attribute definieren mit dem Prototyp">

class Studiengang {

  constructor (name, seit, hs) {
    this.name = name;
    this.seit = seit;
    this.hs = hs;
  }


  toString () {
    return "Studiengang " + this.name + 
      " (seit " + this.seit + 
      " @ " + this.hs.name + ")";
  }

} 

// Zwei Attribute am prototyp des Konstruktors
Studiengang.prototype.min = 2;
Studiengang.prototype.max = 42;

typeof Studiengang;  // function! 

mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008, hs );
mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011, hs );

mmtb.toString();  // findet toString Methode des 
            // Prototypen und ruft sie auf

mmtb.min    // findet min Attribut des Prototypen
            // gibt Wert 2 
mmtb.min=5  // speichert Wert 5 im Objekt selbst
mmtb.min    // gibt jetzt Wert 5
mmtm.min    // findet min Attribut des Prototypen, 
            // gibt Wert 2 
</javascript>

## Vertiefung

Dies war nur ein erster Einstieg in die objektorientierte Programmierung mit JavaScript.
Details zu einigen wichtigen Befehlen in der JavaScript-Referenz bei Mozilla:

* [instanceof](https://developer.mozilla.org/en/JavaScript/Reference/Operators/instanceof)
