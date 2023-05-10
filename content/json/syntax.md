---
title: JSON Syntax
order: 10
---

Mit JSON kann man Datenstrukturen aus null, true, false, Zahlen, Strings,
Arrays und Objekten in Javscript deklarativ anschreiben.

§

JSON ist ein Teil der Javascript Syntax. JSON erlaubt es Datenstrukturen
deklarativ zu definieren.

Folgende Beispiel für JSON wurde aus der Wikidata API abgerufen
und wird hier stark verkürzt dargestellt,
das [original](https://www.wikidata.org/w/rest.php/wikibase/v0/entities/items/Q701554) ist umfangreicher.

<javascript caption="JSON Beispiel">
let o = {
  "id": "Q701554",
  "labels": {
    "de": "Fachhochschule Salzburg",
    "en": "Salzburg University of Applied Sciences",
  },
  "aliases": {
    "de": [
      "Fachhochschule Holztechnikum Kuchl",
      "FH Salzburg",
      "FH Puch",
      "Fachhochschule Urstein"
    ]
  }
}
</javascript>

Mit dieser Schreibweise wird ein Objekt mit vier Eigenschaften definiert.
Als Werte können weitere Objekte (mit `{}`) und Arrays (mit `[]`) gespeichert werden.


§

Man hätte die selbe Datenstruktur auch imperativ aufbauen können:

<javascript caption="ohne JSON">
let o = new Object();
o.id = "Q701554;
o.labels = new Object();
o.labels.de =  "Fachhochschule Salzburg";
o.labels.en =  "Salzburg University of Applied Sciences";
o.aliases = new Object();
o.aliases.de = new Array();
o.aliases.de[0] = "Fachhochschule Holztechnikum Kuchl";
o.aliases.de[1] = "FH Salzburg";
o.aliases.de[2] = "FH Puch";
o.aliases.de[3] = "Fachhochschule Urstein;
</javascript>

Die deklarative Schreibweise in JSON ist aber einfacher lesbar.

## JSON und Javascript

Für den Datenaustausch über das Netzwerk oder über eine Datei
wird die JSON-Schreibweise als String gespeichert. Das nennt man
"Serialisierung"[&rarr;](http://de.wikipedia.org/wiki/Serialisierung).

Am anderen Ende wird dann aus dem String wieder die Datenstruktur,
das nennt man Deserialisierung.

<javascript caption="(De)Serialisierung von JSON">
string = JSON.stringify( o );
o      = JSON.parse(string);
</javascript>

Achtung: nicht alle JavaScript Strukturen lassen sich als JSON String Serialisieren!

## Nicht serialisierbare Datentypen


Nicht jeder Datentyp von JavaScript ist serialisierbar.
Wie man in folgendem Beispiel sieht wird die Funktion
und der Eintrag mit Wert `undefined` nicht serialisiert:

<javascript caption="Serialisieren">
  let o = {
  "a": "blabla",
  "b": 42,
  "c": true,
  "d": undefined,
  "e": null,
  "f": new Date(2036, 0, 2, 15, 4, 5),
  "g": x => 2 * x
}
let s = JSON.stringify(o);
console.log(s);
/*
{"a":"blabla","b":42,"c":true,"e":null,"f":"2036-01-02T14:04:05.000Z","h":[1,2,3]}
*/
</javascript>


## Nicht deserialisierbare Datentypen

Wenn wir nun den String wieder deserialisieren, ensteht nicht
eine genaue Kopie des ursprünglichen Objekts, es gibt einige Änderungen:

<javascript caption="Deserialisieren">
let p = JSON.parse(s);

for(key in o) {
  if (typeof o[key] == typeof p[key]) {
    console.log(`${o[key]} still has type ${typeof o[key]}.` )
  } else {
    console.log(`${o[key]} had type ${typeof o[key]}, is now type ${typeof p[key]}!` )
  }
}
</javascript>

Der Output lautet:

<plain>
blabla still has type string.
42 still has type number.
undefined still has type undefined.
null still has type object.
Wed Jan 02 2036 15:04:05 had type object, is now type string!
x => 2 * x had type function, is now type undefined!
1,2,3 still has type object.
</plain>


Aus dem Date-Objekt wurde nur ein String. Es bräuchte einen
separaten Verarbeitungschritt um daraus wieder ein Date Objekt zu machen:

`p.f = new Date(p.f);`


§

Es gäbe noch eine zweite Art den String in eine Javscript-Datenstruktur
umzuwandeln: Der Javascript-Befehl `eval` interpretiert einen String
als Javascript Code und führt das Programm aus.

<javascript caption="eval">
javascript_string = "o = { 'data': 42, f: x => 2*x };";
eval( javascript_string );
console.log(o);
console.log( o.f(o.data) );  // 84
</javascript>

In diesem Beispiel ist ganz klar was passiert - weil `javascript_string` ja
lokal definiert wird.

Für die Behandlung von "fremden" Daten ist `eval`
nicht geeignet!


## Referenz

* [JSON: Syntax](http://json.org/json-de.html)


