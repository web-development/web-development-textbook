---
title: JSON Syntax
order: 10
---

Mit JSON kann man Datenstrukturen aus null, true, false, Zahlen, Strings,
Arrays und Objekten in Javascript deklarativ anschreiben.

§

JSON ist ein Teil der Javascript Syntax, eine deklarative
Art Datenstrukturen zu definieren.

(Folgende Beispiel für JSON wurde aus der Graph API von Facebook abgerufen
und wird hier etwas verkürzt dargestellt,
siehe [original](https://graph.facebook.com/multimediatechnology))

<javascript caption="JSON Beispiel">
var o = {
  "about": "Ein Medieninformatik Studiengang an der FH Salzburg",
  "category_list": [
    {
      "id": "151676848220295",
      "name": "Education"
    }
  ],
  "is_published": true
};
</javascript>

Mit dieser Schreibweise wird ein Objekt mit drei Eigenschaften definiert,
die zweite Eigenschaft hat als Wert ein Array das ein weiteres Objekt enthält.

§

Man hätte die selbe Datenstruktur auch imperativ aufbauen können:

<javascript caption="ohne JSON">
var o = new Object();
o.about = "Ein Medieninformatik Studiengang an der FH Salzburg";
o.category_list = new Array();
o.category_list[0] = new Object()
o.category_list[0].id = "151676848220295";
o.category_list[0].name = "Education";
</javascript>

Die deklarative Schreibweise in JSON ist aber einfacher lesbar

## JSON und Javascript

Für den Datenaustausch mit JSON muss die JSON-Schreibweise als String
ausgegeben werden, bzw. ein String der JSON-Schreibweise enthält in
eine Javascript Datenstruktur zurück verwandelt werden.  Die Umwandlung
in einen String nennt man auch "Serialisierung"[&rarr;](http://de.wikipedia.org/wiki/Serialisierung).

<javascript caption="(De)Serialisierung von JSON">
string = JSON.stringify( o );
o      = JSON.parse(string);
</javascript>

§

Es gäbe noch eine zweite Art den String in eine Javascript-Datenstruktur
umzuwandeln: Der Javascript-Befehl `eval` interpretiert einen String
als Javascript Code und führt das Programm aus.

<javascript caption="eval">
json_string = "{ 'dies': 'und das' }";
eval( "o = " + json_string);
console.log(o);
</javascript>

In diesem Beispiel ist ganz klar was passiert - weil `json_string` ja
lokal definier wird.  Für die Behandlung von unbekannten Daten ist `eval`
nicht geeignet. Wir wollen ja nur den Datenaustausch ermöglichen, und nicht,
dass beliebiger Javascript Code ausgeführt wird.

## Referenz

* [JSON: Syntax](http://json.org/json-de.html)


