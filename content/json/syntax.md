---
title: JSON Syntax
order: 10
---

Mit JSON kann man einfache Datenstrukturen einer Text-Datei speichern.
Viele Programmiersprachen können damit arbeiten.


## Beispiel


Folgende Beispiel für JSON wurde aus der Wikidata API abgerufen
und wird hier stark verkürzt dargestellt.

<javascript>
{
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


## JSON und Programmiersprache

Für den Datenaustausch über das Netzwerk oder über eine Datei
wird die JSON-Schreibweise als Text gespeichert.

In einer Programmiersprache kann man die Datei laden, und in eine
Datenstruktur der Programmiersprache umwandeln.
Das nennt man Deserialisierung.


Umgekehrt kann man aus einer Datenstrkutur der Programmiersprache
die JSON-Darstellung machen, das nennt man
"Serialisierung"[&rarr;](http://de.wikipedia.org/wiki/Serialisierung).


Achtung: nicht alle  Datenstrukturen lassen sich als JSON String serialisieren!


## Referenz

* [JSON: Syntax](http://json.org/json-de.html)


