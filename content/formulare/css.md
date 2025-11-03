---
title: CSS und Formular
order: 17
---


## Eingabefelder und Styling

Einige Eingabefelder kann man mit CSS gut umgestalten:

Siehe [MDN: Styling web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms).

Bei einigen Eingabefelder kann man mit `appearance: none` die Darstellung zurücksetzen,
und danach mit CSS  neu gestalten:

<label><input type="checkbox" class=""> default checkbox</label>
<label><input type="checkbox" class="fancy"> fancy checkbox</label>

Für die sehr komplexen Eingabeelement (Select/option, date, color, ...) kann man Web-Components
als Ersatz verwenden, zum Beispiel [better-select](https://siit-dev.github.io/better-select/vanilla/).


## Layout für ein Formular
Wie ordne ich die Beschriftungen und Eingabefelder
eines Formualares an?

Mit CSS Grid:


![Demo: CSS Grid und Formular](/images/formulare/grid-layout-form.png)


[Demo: CSS Grid und Formular](/images/formulare/grid-form.html)


§


Dabei verwenden wir das CSS Grid ohne zu wissen, wie viele Eingabfelder
das Formular im Ende enthalten wird.

Wir definieren nur zwei Spalten:

<css>
form {
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  grid-gap: 10px;
}
</css>

In eckigen Klammern werden hier die Namen für die beiden
ersten senkrechten Linien des Grid festgelegt: `labels` und `controls`.


### Überzählige Element im grid

Was soll mit überzähligen Kinder-Tags des grids passieren?
Das wird mit der Property  `grid-auto-flow` festgelegt:

Das Grid kann um zusätzliche Zeilen erweiteret werden, um zusätzliche
Spalten, oder es können Lücken im Grid aufgefüllt werden:

* `grid-auto-flow: rows`
* `grid-auto-flow: columns`
* `grid-auto-flow: dense`

Im Fall des Formulars sollen neue Zeilen eingefügt werden.

<css>
form {
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  grid-gap: 10px;
  grid-auto-flow: rows;
}
</css>

### Welche Elemente in welche Spalten?

Wenn die HTML-Tags innerhalb des Forms abwechseln `label` und `input` tags
sind, dann landen sie automatisch in den richtigenspalten:


<htmlcode caption="Formular HTML Code mit Grid">
 <form>
      <label for="customer_name">Name </label>
      <input type="text" name="customer_name" id="customer_name" required>

      <label for="phone_number">Phone </label>
      <input type="tel" name="phone_number" id="phone_number">

      <label for="email_address">Email </label>
      <input type="email" name="email_address" id="email_address">
      ...
</htmlcode>

### Absende-Button positionieren

Der absende Button  `<input type="submit" value="Submit Booking">` würde
so automatisch in der linken Spalte landen. Mit folgendem CSS-Code
kann er in der rechten Spalte positiniert werden:

<css>
form > input[type=submit] {
  grid-column: controls;
}
</css>

Der name `controls` bezieht sich dabei auf die  mit `grid-template-columns`
definierte Namen für die Linien.



### Grössere Zellen

Die `fieldsets` sollen beide Spalten überspannen.
Das erreichen wir mit der Property `grid-column`:


<css>
form > fieldset {
  grid-column: span 2;
}
</css>

Ein fieldset Tag der ein direktes Kind eines form Tags ist,
soll zwei Spalten überspannen.

[Demo: CSS Grid und Formular](/images/formulare/grid-form.html)




