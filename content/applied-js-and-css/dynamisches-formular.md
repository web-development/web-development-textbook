---
title: Dynamisches Formular
order: 40
---

Ohne Einsatz von Javascript sind HTML-Formulare sehr unflexibel.
So könnte ein Pizza-Bestell-Formular aussehen: für jede
Sorte Pizza gibts ein Eingabefeld für die Anzahl der Pizzen.

![static pizza form](/images/applied-js-and-css/dynamisches-formular/static-pizza-form.png)

Viel schöner wäre es, wenn jede bestellte Pizza im Formular
einzeln aufgeführt würde, und jeweils eigene Extra-Zutaten haben
könnte. Je nach Bedarf kann man Zeilen dazugeben oder weglöschen:

![dynamic pizza form](/images/applied-js-and-css/dynamisches-formular/dynamic-pizza-form-2.png)

Dann kann man auch zu jeder Pizza angeben, für wen sie bestimmt ist.

## Dynamisches Formular planen

So könnten die "Zeilen" des Formulars aussehen: sie haben jeweils
eindeutige IDs (pizza_0, pizza_1, und so weiter)
und enthalten dann jeweils 2 Checkboxen, ein Textfeld und ein verstecktes Feld.

Beachte die Namen der Eingabefelder:

<htmlcode>
  <div id="pizza_0" class="selected_pizza">
    <p>Pizza Sicilia</p>
    <div>
      <input name="pizza[0][type]" value="Pizza Sicilia" type="hidden">
      <label><input type="checkbox" name="pizza[0][spicy]"> scharf</label>
      <label><input type="checkbox" name="pizza[0][cheese]"> mit extra Käse</label>
      <label>
        <span>Für</span>
        <input name="pizza[0][name]" placeholder="Name der Person" type="text">
      </label>
    </div>
  </div>
  <div id="pizza_1" class="selected_pizza">
    <p>Pizza Margherita</p>
    <div>
      <input name="pizza[1][type]" value="Pizza Margherita" type="hidden">
      <label><input type="checkbox" name="pizza[1][spicy]"> scharf</label>
      <label><input type="checkbox" name="pizza[1][cheese]"> mit extra Käse</label>
      <label>
        <span>Für</span>
        <input name="pizza[1][name]" placeholder="Name der Person" type="text">
      </label>
    </div>
  </div>
</htmlcode>

Die Namen mit eckigen Klammern, die an ein Array erinnern, werden
von PHP auch als Array interpretiert.

[Demo mit GET Parametern](https://users.multimediatechnology.at/~bjelline/paramarray.php?)

Auch für unser Pizza Formular, das mit POST gesendet wird, gilt:
PHP macht aus den Parametern `pizza[0][type]` ... `pizza[1][name]` ein verschachteltes Array,
das wir dann in `$_POST['pizza']` finden können.


## Wert aus dem select-Tag auslesen

Die Auswahl der Pizza erfolgt über einen einfachen Select-Tag:

![](/images/applied-js-and-css/dynamisches-formular/dynamic-pizza-form-3.png)

<htmlcode>
  <select id="next_pizza">
    <option value="" selected>--- bitte auswählen ---</option>
    <option>Pizza Margherita</option>
    <option>Pizza Sicilia</option>
    <option>Pizza Salami</option>
    <option>Pizza Tonno</option>
    <option>Pizza Diavolo</option>
    <option>Pizza ai Spinaci</option>
  </select>
  <button id="add_next_pizza" >Pizza auswählen</button>
</htmlcode>

Den ausgewählten Wert kann man mit `value` auslesen:

<javascript>
  let selectedPizza = document.querySelector('#next_pizza').value;
</javascript>

## Neuen Teil in das Formular einfügen


Wenn der "Pizza Auswählen" Button geklickt wird
soll dann ein neuer Teil zum Formular hinzugefügt werden.

![dynamic pizza form](/images/applied-js-and-css/dynamisches-formular/dynamic-pizza-form-2.png)

Wir brauchen für die Erzeugung dieses Teils einerseits
den Typ der ausgewählten Pizza und einen Bereich, in den
wir die Zeile hinein klonen können:

<htmlcode>
  <div class="row" id="pizza_list">
    <!-- Hier kommen die ausgewählten Pizzen hin -->
  </div>
</htmlcode>

<javascript>
// Pizzen hinzufügen

  const pizzaList = document.getElementById("pizza_list");
  const index = pizzaList.childElementCount;

  const item = document.createElement("div");
  item.id = "pizza_" + index;
  item.classList.add("selected_pizza");
  item.innerHTML = `
    <p>${selectedPizza}</p>
    <div>
      <input type="hidden" name="pizza[${index}][type]" value="${selectedPizza}">
      ...
    </div>
  `;
  pizzaList.appendChild(item);
</javascript>

Das Einfügen mit `innerHTML` ist nicht vollständig, der String müsste nach der Vorlage oben
ergänzt werden.

## Eine bessere Selectbox

Bei der Auswahl des Pizza-Typs wäre es schön nicht nur den Namen der Pizza
zu sehen, sondern zusätzlich noch ein Beschreibung und den Preis. Das kann man
mit den HTML-Tags `option` und `select` aber nicht umsetzen.

Dafür gibt es fertige JavaScript Libraries:

- [Tom Select](https://tom-select.js.org/)
- [tail-select](https://getbutterfly.com/tail-select/)
