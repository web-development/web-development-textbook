---
title: Formulardaten Prüfen
order: 10
---

Im [Kapitel über Formulare](/formulare/) haben Sie gelernt,
wie Sie mit Javascript die einzelnen Eingabfelder eines Webformulars prüfen können
bevor das Formular abgesendet wird.

## Komplexe Überprüfung

Mit JavaScript kann man noch komplexere Überprüfungen programmieren.
Dazu braucht man das `submit` event, das vom Formular gefeuert wird,
bevor die Daten gesendet werden.

Zum Beispiel soll in folgendem Formular sicher gestellt werden,
dass mindestens 1 Stück bestellt wird:

<htmlcode>
<form>
  <label for="schokolade">Tafeln Schokolade:</label>
  <input type="number" name="schokolade" id="schokolade" value="0">
  <label for="schweinsbraten">Portionen Schweinsbraten:</label>
  <input type="number" name="schweinsbraten" id="schweinsbraten" value="0">
  <label for="kaffee">Tassen Kaffee:</label>
  <input type="number" name="kaffee" id="kaffee" value="0">
  <button type="submit">Bestellen</button>
  </form>
</htmlcode>

## Abfangen des submit Events


Die Überprüfung erfolgt im submit - Event:

<javascript>
document.querySelector("form").addEventListener("submit", function(event) {
  // ...
  if (!ok) {
    event.preventDefault(); // Verhindert das Absenden des Formulars, wenn `ok` false ist
  }
});
</javascript>


## Eingabefelder Prüfen:

Der Wert eines Eingabefeldes kann mit `.value` ausgelesen werden:

<javascript>
document.querySelector('input[name="schokolade"]').value;
</javascript>

Achtung: dieser Wert ist immer ein String!

## Fertiges Programm:

Das fertige Programm
zeigt die Fehlermeldungen auch an:

<javascript>
document.querySelector("form").addEventListener("submit", function(event) {
  var ok = true;

  // Entfernen alle Fehlermeldungen
  document.getElementById("display_errors").innerHTML = "";

  console.log(document.querySelector("input[name=schokolade]").value);
  // Berechnen der Gesamtsumme
  var gesamtZahl = parseInt(document.querySelector("input[name=schokolade]").value)
      + parseInt(document.querySelector("input[name=schweinsbraten]").value)
      + parseInt(document.querySelector("input[name=kaffee]").value);

  // Überprüfen der Gesamtsumme
  if(gesamtZahl === 0) {
    document.getElementById("display_errors").innerHTML += "<p>Mindest-Bestellmenge 1!</p>";
    ok = false;
  }

  // Verhindern des Formularabsendens, wenn ok false ist
  if (!ok) {
    event.preventDefault();
  }
  return ok;
});
</javascript>
