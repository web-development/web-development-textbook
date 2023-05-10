---
title: Objekte + Klassen
order: 20
---

Javascript ist eine objektorientierte Sprache. Achtung, hier kommt es leicht zu einem Missverständniss:
Objektorientierung hat nicht zwingend etwas mit Klassen zu tun, sondern eben mit Objekten.  Und während
z.B. in Java, C++, C#, PHP diese Objekte immer in Klassen organisiert sind, ist das in Javascript nicht
zwingend der Fall.

## Ein einzelnes Objekt

Wie Sie ein einzelnes Objekt mittels
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



## Klassen

In Javascript 2015 wurden Klassen in JavaScript eingeführt:

<javascript caption="Klasse mit Constructor und einer Methode">

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

typeof Studiengang;  // function!



mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008, hs );
mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011, hs );

mmtb.toString();  // ruft toString Methode auf
</javascript>



## Vererbung mit Klassen

<javascript caption="Vererbung von Attributen">
class Pet {
  constructor() {
    this.status = "sleeping";
  }
  log() {
    console.log("i am " + this.status +
      ". " + this.word + "!");
  }
}

class Dog extends Pet {
  constructor (b) {
    super();
    this.breed = b;
    this.word = "wau";
  }
  sit() {
    this.status = "sitting";
  }
}


d = new Dog("beagle");
d.word    // wau
d.sit()

d.status  // sleeping
</javascript>



## Contructor ohne Klasse

Vor den Klassen gab es in JavaScript eine andere Art mehrere
gleichartige Objekte zu erzeugen: die Constructor Funktion wurde
als normale Funktion angelegt:

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

Dieser Konstruktor wird auch verwendet, um die Frage `instanceof` zu beantworten:

<javascript caption="Fortsetzung: Operator instanceof">
mmtb instanceof Studiengang;
hs instanceof Object;
mmtb instanceof Object;
</javascript>

`mmtb` ist auch eine Instanz von `Object`! Es muss also eine Art Vererbungs-Hierarchie
geben, die wir noch nicht kennen, in der `Studiengang` als Kind von `Object` geführt wird.
Wie funktioniert das?  Die Antwort lautet:  mit dem Prototypen.


