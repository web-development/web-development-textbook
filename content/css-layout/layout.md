---
title: CSS für Layout
order: 1
---

Welche Gestaltungsmöglichkeiten bietet CSS für das Layout einer Webseite?

In diesem Kapitel betrachten wir drei Möglichkeiten:

* Normal Flow
* Flexbox
* Grid

Dazu gibt es eine [Demo Seite](/images/css-layout/layout-demo/compare.html)

## Normal Flow

![normal flow on laptop and smartphone](/images/css-layout/layout-normal-flow.svg)

Schon bisher wurden die Elemente unserer Webseite
auf eine bestimmte Weise angeordnet: nach dem "normal flow" (siehe [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)):

Alle Block-Bildendenden Tags erzeugen eine achsenparallelle Box,
deren Größe wir mit `width`, `padding`, `border` und `margin`
beeinflussen können.

Nicht-Blockbildente Elemente werden von links nach rechts auf Zeilen
gesetzt, blockbildende Element von oben nach unten arrangiert.
Achtung: die Richtung hängt von der Sprache, bzw. dem [writing mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) ab.

Auf dem Smartphone und am Laptop ist die Webseite sehr ähnlich: nur einmal
länger und schmäler, einmal kürzer und breiter.

## Flexbox

![flexbox auf verschiedenene Geräten](/images/css-layout/layout-flexbox.svg)

Mit Flexbox kann man die Kinder entlang einer Achse anordnen - als nebeneinander wie hier gezeigt,
oder untereinander.



### Flexbox definieren

Das Eltern-Element legt die Richtung fest: entweder horizontal (in einer Zeile = `row`) oder vertikal
(in einer Spalte = `column`):

<htmlcode>
<main>
  <section>...</section>
  <section>...</section>
  <section>...</section>
  <section>...</section>
  <section>...</section>
  <section>...</section>
</main>
__|__
main {
  display: flex;
  flex-direction: row;
}
section {
  width: 160px;
  height: 275px;
}
</htmlcode>

Siehe auch [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


### Platz verteilen oder Elemente strecken

Der Platz zwischen den Elementen kann auf verschiedene Art verteilt werden:
linksbündig, rechtsbündig, zentriert, mit Platz dazwischen oder Platz rundum.

<css>
.projects {
    justify-content: flex-start;   /* alle möglichst weit links */
}
</css>


Oder die Elemente können sich ausdehnen, um den Platz einzunehmen:

<css>
#box1, #box3 {
    flex: 1;
}
#box2 {
    flex: 2;
}
</css>

Siehe [justify-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#justify-content)

Siehe [flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flex-grow)

### Wrap

Wenn zu viele Elemente für eine Zeile vorhanden sind,
können sie auf eine nächste Zeile umgebrochen werden:

![flexbox mit wrap](/images/css-layout/layout-flexbox.svg)


<css>
.projects {
  flex-wrap: wrap;
}
</css>

Siehe [flex-wrap](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap)


## CSS Grid

![grid auf verschiedenene Geräten](/images/css-layout/layout-grid.svg)


Seit [Frühjahr 2017](https://caniuse.com/#search=grid) wird CSS Grid in Browsern unterstützt.
Damit legt man ein Gitternetz über die ganze Seite, und kann dann die Kinder
eines Elements in diesem Gitternetz positionieren.


### Das Grid definieren

Das Grid wird über die Breiter der Spalten (columns) und die Höhe der
Zeilen (rows) definiert:

<css>
.page_container {
  display: grid;
  grid-template-columns: 270px 5fr 3fr;
  grid-template-rows: 60px 2fr 210px;
}
</css>

Dabei kann die neue Maßeinheit `fr` (für fraction, Bruchteil) verwendet werden:
Nachdem von der Gesamtbreite die absoluten Breitenangaben abgezogen wurden,
wird der restliche Platz im Verhältnis der fractions verteilt.

Also zum Beispiel:

- 1280px stehen für das oben definierte Grid in der Breite zur Verfügung
- -270px für die erste Spalte
- 1010px verbleiben

diese werden nun im Verhältnis 5 zu 3 auf Spalte zwei und drei verteilt:

- 5 \* ( 1010px / 8 ) = 631.25px für die zweite Spalte
- 3 \* ( 1010px / 8 ) = 378.75px für die zweite Spalte

Wenn Sie die Breite des Fensters für die [Demo-Seite](/images/cssgrid/) ändern
werden die neu berechneten Werte angezeigt.

Hinweis: `fr` ersetzt damit die Prozentzahlen die früher verwendet wurden!

### Areas definieren

Mit der Property `grid-template-areas` können nun Namen
für die einzelnen Felder des Grids vergeben werden:

<css>
  grid-template-areas:
    ".              headlineArea     subheadArea"
    "portraitArea   descriptionArea  codeArea"
    ".              factsArea        sourceArea";
</css>

Die drei Strings stehen für die drei Zeilen des Grids.
Innerhalb der Strings gilt jedes Wort als ein Feld.
Die Felder sind also durch Whitespace getrennt.

Ein Punkt steht für ein Feld das frei bleibt.

§

Eine Area kann auch mehrere Felder des Grids überspannen,
muss aber immer in Rechteck bilden (keine beliebige Tetris-Form):

<css>
  grid-template-areas:
    "headlineArea  headlineArea     subheadArea"
    "portraitArea  descriptionArea  codeArea"
    "factsArea     descriptionArea  sourceArea";
</css>

### Areas mit Inhalt belegen

Nun kann der Inhalt in das Grid - genauer: in die Area - eingefüllt werden.
Das erfolgt rein in CSS, es ist keine Veränderung im HTML notwendig.

<css>
header {
  grid-area: headlineArea;
  background-color: #EBBB5B;
  padding-top: 19px;
}

section#description {
  grid-area: descriptionArea;
  background-color: white;
}
</css>

Siehe auch [CSS Tricks: Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
Siehe auch [CSS Grid by Example](https://gridbyexample.com/examples/)
Siehe auch [Animating CSS Grid](https://css-tricks.com/animating-css-grid-how-to-examples/)

## Viele Methoden

Neben den drei hier gezeigten gibt es noch viele weitere
Methoden um das Layout der Seite zu beeinflussen.

Für einen ersten Einstieg reichen die hier gezeigten,
später sollten Sie noch [weitere Details](/css-layout/details) kennen lernen.



## Weitere Quellen

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbugs](https://github.com/philipwalton/flexbugs) - bekannte Probleme mit Flexbox
- [Flexboxfroggy.com](http://flexboxfroggy.com/) - Lernspiel mit Fröschen
- [FlexboxDefense.com](http://www.flexboxdefense.com/) - Lernspiel mit Tower Defense
- [learnlayout.com](http://learnlayout.com/)
- [Use Cases For Flexbox](https://www.smashingmagazine.com/2018/10/flexbox-use-cases/) erklärt in welchen Fällen man Grid und in welchen Fällen man Flexbox verwenden kann
