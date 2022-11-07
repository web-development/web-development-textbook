---
title: DOM
order: 30
---

Lesen aus dem DOM
-------------------
Die wichtigsten Befehle zur Manipulation des DOM finden Sie im Objekten „document“ und in Objecten vom Typ „node“.
Ein Node ist ein Knoten DOM-Baum, entspricht also einem HTML-Tag oder einem Stück Text.


## Eine Node finden

<javascript>
document.getElementById()            /* liefert 1 Node  */
document.getElementsByTagName("li") /*       Array   */
document.querySelectorAll("li a")  /* liefert mit CSS Selector ein Array   */
document.querySelector("h1")      /* liefert mit CSS Selector nur die erste Node  */
</javascript>


## Von Node zu Node weitergehen

<javascript>
let p = node.parentNode   /* liefert 1 Node          */
let c = node.childNodes   /* liefert Array von Nodes */

node.firstChild
node.lastChild
node.previousSibling
node.nextSibling
</javascript>

##  Daten auslesen und setzen

<javascript>
node.attributes
node.innerHTML
node.innerText
</javascript>


### Simples Beispiel

Ein bestimmter Tag wird über die ID ausgewählt und sein Style-Attribut gesetzt:

<javascript>
let d = document.getElementById("person_25");
d.setAttribute("style", "display:none");
</javascript>

Diese beiden Zeilen könnten auch zu einer kombiniert werden:

<javascript>
document.getElementById("person_25").setAttribute("style", "display:none");
</javascript>

Achtung: Falls der Tag schon ein Style-Attribute hatte wurde dieses überschrieben.  Der Wert des Attributes ist ein einfacher String.

### Manipulieren der Klassen

Statt den Style direkt zu manipulieren, könnte
man eine Klasse setzen:


<javascript>
document.getElementById("person_25").classList.add('sichtbar');
document.getElementById("person_25").classList.remove('sichtbar');
document.getElementById("person_25").classList.toggle('sichtbar');
if( document.getElementById("person_25").classList.contains('sichtbar') ) {
  // wird nur ausgeführt falls person sichtbar
}
</javascript>


### Selektieren

Man kann CSS-Selektoren verwenden um Element auszuwählen, und zwar mit der Methode `document.querySelectorAll()`:

<javascript>
let inputs = document.querySelectorAll("input");
let i=0;
while(i < inputs.length) {
  console.log("input mit name " + inputs[i].name );
  i++;
}
</javascript>

### Text

Den eigentlichen Text der HTML-Seite kann man als data eines Text-Nodes auslesen.

<htmlcode>
<span id="v_25" class="vorname">Benjamin</span>
</htmlcode>


<javascript>
let vn = document.getElementById("v_25").textContent;
</javascript>

`textContent` funktioniert auch bei Nodes die noch weitere verschachtelte
Tags enthalten und extrahiert immer den gesamten Text aus allen “Blättern” des DOM-Baums.

Manipulation des DOM
----------------------
Noch einmal eine Liste der wichtigen Objekte, Methoden, Eigenschaften die für das Erzeugen, Zerstören oder Verändern des DOM notwendig sind:

<javascript>
let node = document.createElement("h1");
       // erzeugt eine Node, Tag-Name angeben
node.innerHTML = "bla <strong>bla</strong> bla";
       // Zugriff auf den "Inhalt" der node als String,
       // ist of schneller als DOM manipulation!
node.appendChild(newchild);
       // fügt die newchild als Kind an
let newnode = node.cloneNode()
       // gibt eine Kopie der Node zurück,
       // die Kopie ist noch nicht im DOM Baum eingefügt!
node.insertBefore(newchild, oldchild)
       // fügt newchild als Kind von node ein, vor dem oldchild
let oldchild = node.removeChild(child)
       // löscht child als Kind von node,
       // gibt es als "frei schwebende" node zurück
node.replaceChild(newchild, oldchild)
       // ersetzt kind oldchild durch kind newchild
node.setAttribute('value', 42)  // setzt ein attribut
node.removeAttribute('value')   // löscht ein attribute
</javascript>

### Einfügen

Das Einfügen eines ganz neuen Elements in die Webseite ist am einfachsten mit der Eigenschaft `innerHTML`:

<javascript>
document.querySelector("body").innerHTML = "<p>All <b>new</b></p>";
</javascript>

### Duplizieren

Mit `cloneNode` kann man einen ganzen Teil-Baum duplizieren, und wo anders wieder einfügen. So kann man z.B. in einem Pizza-Bestell-Formular die Eingabeelement für eine Pizza in einer div zusammenfassen:

<htmlcode>
  <div class="pizza">
    <p>
      <select name="pizzatype[]">
        <option>Magaritha</option>
        <option>Vegetarian</option>
        <option>Quattro Staggione</option>
      </select>
      ...
    </p>
  </div>
</htmlcode>

§

Dieses div kann man dann clonen, falls man mehrere Pizzen braucht:

<javascript>
  let  first_pizza = document.querySelector("div.pizza");
  let  new_pizza = first_pizza.cloneNode(true);
  first_pizza.insertBefore(new_pizza, null);
</javascript>

[Beispiel live im Browser](/images/javascript-dom/example_js_add_to_form.html)


Einfügen von Event Handlern
-----------------------------
Wir haben im Kapitel [Hintergründe](/javascript-dom/hintergrund/) schon gesehen,
wie Event-Handler direkt im HTML definiert werden können:

<htmlcode>
<form>
  <input type="button" value="Rot"  onclick="setcolor('red')">
  <input type="button" value="Grün" onclick="setcolor('#0F0')">
  <input type="button" value="Blau" onclick="setcolor('blue')">
</form>
<script>
  function setcolor( c ) {
    let b = document.getElementById('farbfeld');
    b.style.backgroundColor = c
  }
</script>
</htmlcode>

Mit der Methode `addEventListener` kann das auch von Javascript aus erfolgen.

### Farb-Beispiel

Hier ein erster Entwurf: Um die Buttons einzeln anzusprechen,
müssen wir eine id hinzufügen:

<htmlcode>
<form>
  <input type="button" value="Rot"  id="r">
  <input type="button" value="Grün" id="g">
  <input type="button" value="Blau" id="b">
</form>
<script>
  function setcolor( ev ) {
    let b = document.getElementById('farbfeld');
    b.style.backgroundColor = 'red';
  }
  document.getElementById('r').addEventListener('click', setcolor);
  document.getElementById('g').addEventListener('click', setcolor);
  document.getElementById('b').addEventListener('click', setcolor);
</script>
</htmlcode>

Wir haben aber ein Problem: der Methode `addEventListern` wird als
zweites Argument die Methode `setcolor` übergeben.  Das ist nicht dasselbe
wie ein Aufruf der Methode, dann würde man schreiben: `setcolor()`.

Hier gibt es keine einfache Möglichkeit ein Argument für die Farbe mit zu geben!

§

Eine Lösung für dieses Problem: was in der Methode `setcolor` zur Verfügung steht
ist `this`: die Node die angeklickt wurde, in unserem Fall der jeweilige Button.
Wir müssen also einen Weg finden die Farbe direkt aus dem Button auzulesen.
So können wir zum Beispiel die Hintergrundfarbe des Buttons verwenden:


<htmlcode>
<form>
  <input type="button" value="Rot"
         style="background-color:red"  id="r">
  <input type="button" value="Grün"
         style="background-color:#0F0" id="g">
  <input type="button" value="Blau"
         style="background-color:blue" id="b">
</form>
<script>
  function setcolor( ev ) {
    let b = document.getElementById('farbfeld');
    b.style.backgroundColor = this.style.backgroundColor;
  }
  document.getElementById('r').addEventListener('click', setcolor);
  document.getElementById('g').addEventListener('click', setcolor);
  document.getElementById('b').addEventListener('click', setcolor);
</script>
</htmlcode>

Programm [live im browser](/images/javascript-dom/farbfeld-dom.html)


### Pizza-Beispiel

Hier wieder am Beispiel des Pizza-Bestellformulars: mit einem kleinen „x“ in der rechten obere Ecke soll man eine Pizza löschen können.


![Abbildung 59: Pizza löschen mit Klick auf das x in der rechten oberen Ecke](/images/javascript-dom/pizza-x.png)

Im HTML-Code fügen wir dafür einen span-Tag ein:

<htmlcode>
 <div class="pizza">
    <p>
      <span class="removethis">x</span>
      <select name="pizzatype[]">…</select>
      …
    </p>
  </div>
</htmlcode>

§

Im Javascript-Code können wir nun das Event an den span-Tag binden. Dafür müssen
wir erst eine Funktion definieren, die aufgerufen werden soll, hier heisst die
funktion removeMe. Mit addEventListener können wir dann die Funktion als
zuständig für das click-event am spam `.removthis` definieren.

<javascript>
function removeMe(e){
  let me = e.target;
  let my_pizza = me.parentNode.parentNode;
  my_pizza.parentNode.removeChild( my_pizza );
}
document.querySelector(".removethis")
        .addEventListener("click", removeMe);
</javascript>

### Referenz

* [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) im Mozilla Developer Network
* [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) im Mozilla Developer Network
