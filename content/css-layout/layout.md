---
title: CSS für Layout
order: 10
---

Welche Gestaltungsmöglichkeiten bietet CSS für das Layout einer Webseite?


CSS Grid
------------------------
Seit [Frühjahr 2017](https://caniuse.com/#search=grid) wird CSS Grid in Browsern unterstützt.
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
Nachdem von der Gesamtbreite die absoluten Breitenangaben abgezogen wurden,
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

Siehe auch [CSS Grid by Example](https://gridbyexample.com/examples/)


Absolute Positionierung
------------------------

Mit der Deklaration `position: absolute` wird ein Tag aus der normalen Darstellung
herausgenommen und über dem restlichen Inhalt platziert.
Dazu muss aber erst eine Koordinatensystem angelegt werden, auf das sich
die Position bezieht. Das geschieht mit `position: relative` in einem übergeordneten
Tag. 



<htmlcode>
<div class="project_partial">

  <img src="cover.jpg">

  <div class="badge"></div>

</div>
__|__
.project_partial {
  position: relative;
  background-color: #292927;
}
.project_partial .badge {
  position: absolute;
  background-image: url(badge_topleft.png);
  /* top: 0px; left: 0px; */
}
</htmlcode>


[Beispiel-Seite](/images/css-absolute/test.html)




Flexbox
------------------------

Seit [2014](https://caniuse.com/#search=flex) wird Flexbox in allen Browsern unterstützt.

Flexbox arbeitet nur in einer Dimension. Es wird für kleinere Komponenten
in der Seite eingesetzt, zum Beispiel für eine Bildergalerie.

[Demo-Seite](/images/flexbox/)

### Flexbox definieren

Der Container legt die Richtung fest: entweder horizontal (in einer Zeile = `row`) oder vertikal
(in einer Spalte = `column`):

<htmlcode>
<div class="project">
  <div class="project_partial">...</div>
  <div class="project_partial">...</div>
  <div class="project_partial">...</div>
  <div class="project_partial">...</div>
  <div class="project_partial">...</div>
  <div class="project_partial">...</div>
</div>
__|__
.project {
  display: flex;
  flex-direction: row;
}
.project_partial {
  width: 160px;
  height: 275px;
}
</htmlcode>

### Platz verteilen oder Elemente strecken

Der Platz zwischen den Elementen kann auf verschiedene Art verteilt werden:
linksbündig, rechtsbündig, zentriert, mit Platz dazwischen oder Platz rundum.

<css>
.projects {
    justify-content: flex-start;   /* alle möglichst weit links */
}
</css>

Siehe [justify-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6)

Oder die Elemente können sich ausdehnen, um den Platz einzunehmen:


<css>
.project_partial {
    flex-grow: 1;
    flex-shrink: 1;
}
</css>

Siehe [flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-10)


### Wrap

Wenn zu viele Elemente für eine Zeile vorhanden sind, 
können sie auf eine nächste Zeile umgebrochen werden:

<css>
.projects {
  flex-wrap: wrap;
}
</css>

### Flexbox verschachteln

Wenn man vertikale und horizontale Flexboxen ineinander schachtelt
kann man auch ein zweidimensionales Layout erzielen - so wie mit
CSS Grid.  Das HTML Dokument muss aber dabei diese Struktur genau
nachbauen. 


<div class="resizable">
  <div style="display:flex; flex-direction: row;">
    <nav style="border: 5px green solid;margin-right: 1px;">
      Navi Navi Navi Navi Navi Navi Navi Navi Navi
    </nav>
    <div style="display:flex; flex-direction: column; border: 5px green solid;padding: 1px;">
      <section style="border: 5px #ddd solid;margin-bottom: 1px;">
        <p><b>
          Flexbox  in Flexbox
        </b></p>
      </section>
      <section style="border: 5px #ddd solid;">
        <p>
          Wird eine Flexbox in eine Flexbox geschachtelt, dann
          braucht das entsprechend verschachtelete HTML Tags.
          Wäre hier nicht CSS Grid eine einfachere Lösung?
          Das sollte man überlegen!
        </p>
      </section>
    </div>
  </div>
</div>

Siehe auch [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


Viele Methoden
-------------

Neben den drei hier gezeigten gibt es noch viele weitere
Methoden um das Layout der Seite zu beeinflussen.

Für einen ersten Einstieg reichen die hier gezeigten,
später sollten Sie noch [weitere Details](/css-layout/details) kennen lernen.

Eine gute englischsprachige Quelle dazu ist [learnlayout.com](http://learnlayout.com/)

Der Artikel [Use Cases For Flexbox](https://www.smashingmagazine.com/2018/10/flexbox-use-cases/) von Rachel Andrews erklärt gut in welchen Fällen man Grid und in welchen Fällen man Flexbox verwenden kann.

