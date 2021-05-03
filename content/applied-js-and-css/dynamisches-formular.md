---
title: Dynamisches Formular
order: 40
---

Ohne Einsatz von Javascript sind HTML-Formulare sehr unflexibel.
So könnte ein Pizza-Bestell-Formular aussehen:

![dynamic pizza form](static-pizza-form.png)

Viel schöner wäre es, wenn jede bestellte Pizza im Formlar
einzeln aufgeführt würde, und jeweils eigene Extra-Zutaten haben
könnte:

![](/images/dynamic-pizza-form-2.png)

Dann kann man auch zu jeder Pizza angeben, für wen sie
bestimmt ist.

## Dynamisches Formular planen

ACHTUNG: in den Beispielen hier wird noch jQuery verwendet - finde heraus
wie Du dasselbe ohnee jQuery, mit reinem JavaScript machen kannst!
[Siehe auch: You Might Not Need jQuery](http://youmightnotneedjquery.com/)

Das Hinzufügen von zusätzlichen Zeilen bzw. Eingabeelementen
kann man mit jQuery gut umsetzen.

Achtung: die dynamisch erzeugten Eingabefelder brauchen eindeutige Namen!
Wir verwenden `pizza[1]`, `pizza[2]`, ... für den Typ der Pizza,
`hot[1]`, `hot[2]`, ... für die checkbox "scharf", und so weiter.

<htmlcode>
  <li class="a_pizza">
    <p>Pizza Sicilia</p>
      <div class="flex-inner">
        <label><input name="hot[2]" type="checkbox"> Scharf</label>
        <label><input name="cheese[2]" type="checkbox"> mit extra Käse</label>
        <label>für <input name="fuer[2]" placeholder="Christian" type="text"></label>
        <input name="pizza[2]" value="Pizza Tonno" type="hidden">
    </div></li>
  <li class="a_pizza">
    <p>Pizza Margherita</p>
      <div class="flex-inner">
        <label><input name="hot[1]" type="checkbox"> Scharf</label>
        <label><input name="cheese[1]" type="checkbox"> mit extra Käse</label>
        <label>für <input name="fuer[1]" placeholder="Christian" type="text"></label>
        <input name="pizza[1]" value="Pizza Salami" type="hidden">
    </div>
  </li>
</htmlcode>

Die Namen mit eckigen Klammern, die an ein Array erinnern, werden
von PHP auch als Array interpretiert:
Wenn PHP die Daten entgegen nimmt und in \$\\_POST speichert,
macht es aus den Parametern `pizza[1]`, `pizza[2]`,... ein Array,
das unter `$_POST['pizza']` gespeichert ist.

## Wert aus dem select-Tag auslesen

Die Auswahl der Pizza erfolgt über einen einfachen Select-Tag:

![](/images/dynamic-pizza-form-3.png)

<htmlcode>
  <li>
    <p>Pizzen</p>
    <select id="next_pizza" name="next_pizza">
      <option value="" selected>--- bitte auswählen ---</option>
      <option>Pizza Margherita</option>
      <option>Pizza Sicilia</option>
      <option>Pizza Salami</option>
      <option>Pizza Tonno</option>
      <option>Pizza Diavolo</option>
      <option>Pizza ai Spinaci</option>
    </select>
    <button id="add_next_pizza" >Pizza auswählen</button>
  </li>
</htmlcode>

Das auslesen des ausgewählten Wertes ist mit der
jquery-Methode `val` ganz einfach:

<javascript>
  let pizza_type = $('#next_pizza').val(); 
</javascript>

## Neuen Teil in das Formular einfügen

![](/images/dynamic-pizza-form-3.png)

Wenn der "Pizza Auswählen" Button geklickt wird
soll dann ein neuer Teil zum Formular hinzugefügt werden.

Wir brauchen für die Erzeugung dieses Teils einerseits
den Typ der ausgewählten Pizza, und die nächstes Zahl:

<javascript>
    $("#add_next_pizza").on("click", function(event) {
    event.preventDefault();
    let pizza_type = $("#next_pizza").val();
    let pizza_number = 1 + $(".a_pizza").length;
    let template = `<li class='a_pizza'>
      <p>${pizza_type}</p>....
      </li>`;
    let $li = $(this).parents("li");
    $li.after(template);
  });
</javascript>

Der Inhalt des Templates fehlt hier, er müsste nach der Vorlage oben
ergänzt werden.

## HTML einfügen

Das Einfügen des neuen Formular-Teils erfolgt hier über die gemeinsame
Liste, in der sich alle Formular-Teile befinden:

<htmlcode>
  <ul>
    ...
    <li>
      <p>Pizzen</p>
      <select id="next_pizza" name="next_pizza">
        ...
      </select>
      <button id="add_next_pizza" >Pizza auswählen</button>
    </li>
    <li class="a_pizza">
      <p>Pizza Sicilia</p>
        <div class="flex-inner">
          <label><input name="hot[2]" type="checkbox"> Scharf</label>
          <label><input name="cheese[2]" type="checkbox"> mit extra Käse</label>
          <label>für <input name="fuer[2]" placeholder="Christian" type="text"></label>
          <input name="pizza[2]" value="Pizza Tonno" type="hidden">
      </div></li>
    <li class="a_pizza">
      <p>Pizza Margherita</p>
        <div class="flex-inner">
          <label><input name="hot[1]" type="checkbox"> Scharf</label>
          <label><input name="cheese[1]" type="checkbox"> mit extra Käse</label>
          <label>für <input name="fuer[1]" placeholder="Christian" type="text"></label>
          <input name="pizza[1]" value="Pizza Salami" type="hidden">
      </div>
    </li>
    ...
  </ul>
</htmlcode>

Der "Pizza auswählen"-Button wurde angeklickt. Die Variable `this` verweist
also auf diesen Button. Mit der jQuery-Methode `parent` kann also vom Button
aus nach oben, zu den Eltern und Großeltern navigiert werden.
Mit `$(this).parent("li")` wird ein `li` Element als Vorfahre gesucht, und
in der Variablen `$li` gespeichert. Mit `$li.after()` wird dann
der neue Formularteil als "nächstes Geschwister" eingefügt.

<javascript>
  let $li = $(this).parents("li");
  $li.after(template);
</javascript>

Siehe auch [https://api.jquery.com/parent/](jQuery: parent), [https://api.jquery.com/after/](jquery: after)

## Eine bessere Selectbox

Bei der Auswahl des Pizza-Typs wäre es schön nicht nur den Namen der Pizza
zu sehen, sondern zusätlich noch ein Beschreibung und den Preis. Das kann man
mit den HTML-Tags `option` und `select` aber nicht umsetzen.

- [Homepage von Selectator](http://opensource.faroemedia.com/selectator/)
