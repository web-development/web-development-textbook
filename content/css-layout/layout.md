---
title: CSS für Layout
order: 20
---

Welche Gestaltungsmöglichkeiten bietet CSS für das Layout einer Webseite?


CSS Grid
------------------------
Seit Frühjahr 2017 wird CSS Grid in Browsern unterstützt.
Damit legt man ein Gitternetz über die ganze Seite:

![Layout mit CSS Grid](/images/css-layout/grid.png)

Das Grid wird normalerweise nicht angzeigt.  Die hier gezeigte Ansicht
mit den strichlierten Linien kann man in den Firefox Developertools mit
einem Klick auf das grid-symbol aktivieren:


![Grid Ansicht einschalten in Firefox](/images/css-layout/switch-on-grid.png)


[Demo-Seite](/images/cssgrid/)


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

Dabei kann die  neue Maßeinheit `fr` (für fraction, Bruchteil) verwendet werden:
Nachdem von der Gesamtbreite die absoluten Breitenangaben abezogen wurden,
wird der restliche Platz im Verhältnis der fractions verteilt.

Also zum Beispiel:

* 1280px stehen für das oben definierte Grid in der Breite zur Verfügung
* -270px für die erste Spalte
* 1010px verbleiben 

diese werden nun im Verhältnis 5 zu 3 auf Spalte zwei und drei verteilt:

* 5 * ( 1010px / 8 ) = 631.25px für die zweite Spalte
* 3 * ( 1010px / 8 ) = 378.75px für die zweite Spalte

Wenn Sie die Breite des Fensters für die [Demo-Seite](/images/cssgrid/) ändern
werden die neu berechneten Werte angezeigt.


### Areas definieren

Mit der Property `grid-template-areas` können nun Namen
für die einzelnen Felder des Grids vergeben werden:

<css>
  grid-template-areas:
    ".              headlineArea     subheadArea"
    "portraitArea   descriptionArea  codeArea"
    ".              factsArea        sourceArea";
</css>

Die drei Strings stehen für  die drei Zeilen des Grids.
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



Absolute Positionierung
------------------------

Mit der Deklaration `position: absolute` wird ein Tag aus der normalen Darstellung
herausgenommen und über dem restlichen Inhalt platziert.
Dazu muss aber erst eine Koordinatensystem angelegt werden, auf das sich
die Position bezieht. Das geschicht mit `position: relative` in einem übergeordneten
Tag. 



<htmlcode>
<div class="project_partial">
  <img src="cover.jpg">
  <div class="badge"></div>
</div>
__|__
.project_partial {
  position: relative;
  width: 160px;
  height: 275px;
  background-color: #292927;
}
.project_partial .badge {
  position: absolute;
  background-image: url(badge_topleft.png);
  height: 170px;
  width: 160px;
  top: 0px
  left: 0px
}
</htmlcode>


[Beispiel-Seite](/images/css-absolute/index.html)




Flexbox
------------------------

Flexbox arbeitet nur in einer Dimension. Es wird für kleinere Komponenten
in der Seite eingesetzt, zum Beisiel für eine Bildergallerie.

[Demo-Seite](/images/flexbox/)


Siehe auch [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


Viele Methoden
-------------

Wie Sie gesehen haben gibt es viele CSS-Properties die
das Layout beeinflussen.
