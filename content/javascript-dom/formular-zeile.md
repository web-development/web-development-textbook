---
title: Formular++
order: 50
---

Zeile zu einem Formular hinzufügen
-------------------
Ohne JavaScript sind Web Formulare statisch. Um Eingabelemente hinzuzufügen
oder zu löschen braucht man JavaScript. 

In diesem Beispiel verwenden wir JavaScript, um ein Pizza-Bestellformular zu verändern. 

Die wichtigsten DOM-Befehle für dieses Beispiel sind `cloneNode()` und `insertBefore()`. 
Mit `cloneNode` können wir die Kopie eines einzelnen DOM-Knoten oder eines ganzen DOM-Baums erstellen. 
Dieser Klon ist zuerst einmal nicht Teil des Originaldokuments. Man muss ihn erst wieder
einfügen:

<javascript>
let p = document.querySelector("div.pizza");
let new_pizza = p.cloneNode(true);
</javascript>

§

Eingabeelemente zu clonen ist nicht trivial: jedes Eingabeelement benötigt einen eindeutigen Namen. 
Es wäre eine Menge Arbeit, um neue Namen für neue Eingabeelemente zu erzeugen. In diesem Beispiel 
vermeinden wird das mit Hilfe von PHP: PHP kann GET-Parameter als Array behandeln: 
Wenn wir das Eingabe-Element `size` nennen, ist sein Wert in in PHP als `$_GET['size']` erhältlich und zwar als String.
Wenn wir mehrere Eingabeelemente mit dem namen `size[]` versehen (mit eckigen Klammern als Teil des Namen),
sind die Werte all dieser Felder wieder als `$_GET['size']` erhältlich, und zwar als Array.

Deswegen sieht eine Zeile des Pizza-Bestellformulars so aus:

<htmlcode>
<div class="pizza">
  <span class="removethis">x</span>
  <select name="pizzatype[]">
    <option selected="selected">Magaritha</option>
    <option>Vegetarian</option>
    <option>Quattro Staggione</option>
  </select>
  <br>
  <label>add Garlic 
    <select name="addgarlic[]">
      <option selected="selected">no</option>
      <option>yes</option>
    </select>
  </label>
  <label>add Cheese 
    <select name="addcheese[]">
      <option selected="selected">no</option>
      <option>yes</option>
    </select>
  </label>
  <br>
  <label>anything else? 
    <input name="comment[]" type="text">
  </label>
</div>
</htmlcode>

§

Fertiges Formular [Demo](/images/example_js_add_to_form.html)
