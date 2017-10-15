---
title: CSS für Layout
order: 20
---

Welche Gestaltungsmöglichkeiten bietet CSS nun?

### Text

Die Darstellung einer HTML-Seite durch den Browser erfolgt von oben nach unten, je nach Sprache von links nach rechts oder von rechts nach links. Dabei wird zwischen blockbildenden Tags und nicht-blockbildenden Tags unterschieden. In folgendem Beipiel wird
der blockbindente Tag `p` und der inline-Tag `span` verwendet.

    p { background-color:#CCCCCC; }
    span { background-color:#FFFF66; }

§

Bei der Darstellung im Browser wird der Text innheralb der Paragraphen je nach
zu verfügung stehenem Platz '''umgebrochen''':

<div class="resizable">
<p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.  Ich bin ein blockbildender Tag, nämlich ein Pargraph P. I am a block level element - p for paragraph. <span style="background-color: red;">Und ein span
in der Mitte. And some inline content  right here.</span> Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.
</p>

<p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.  Ich bin ein blockbildender Tag, nämlich ein Pargraph P.  <span style="background-color: red;">Und ein span
in der Mitte. And some inline content  right here.</span> Ich bin ein blockbildender Tag, nämlich ein Pargraph P.

</p>
<p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P. I am a block level element - p for paragraph. <span style="background-color: red;">Und ein span
in der Mitte. And some inline content  right here.</span> Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.
</p>
</div>



### Bild im Text

Ein Bild wird dabei wie ein Wort im Text behandelt, und nicht etwa frei auf der Webseite positioniert.  Wenn Sie das Bild wie hier mitten in einen Absatz hinein setzen, ergibt das meist ein sehr hässliches Layout:

<div class="resizable">
  <p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
  I am a block level element - p for paragraph.  Ich bin ein blockbildender Tag, nämlich ein Pargraph P. I am a block level element - p for paragraph. 
  <img src="/images/css-layout/silhouette_hand.svg" style="height: 5ex;" alt="Hand!">
  Das Bild der Hand stammt von <a href="https://commons.wikimedia.org/wiki/File:Silhouette_hand.svg">SimonWaldherr</a>.
  Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
  I am a block level element - p for paragraph.
  </p>
</div>


### Umbruch von Wörtern

Browser können lange Wörter in mehreren Sprachen umbrechen.
Die richtige Sprache stellt man mit dem Attribut `lang` ein,
z.B. einfach am html-Tag:  `<html lang="de">`.


<div class="resizable">
  <p style="background-color:#ddd">Das Rindfleisch­etikettierungs­überwachungs­aufgaben­übertragungs­gesetz (RflEttÜAÜG) war
    im Jahre 1999 im deutschen Bundesland Mecklenburg-Vorpommern Teil eines Gesetzesvorhabens.
    <br>
    Quelle: https://de.wikipedia.org/wiki/Rindfleischetikettierungs%C3%BCberwachungsaufgaben%C3%BCbertragungsgesetz
    <br>
    <kbd>overflow-wrap: normal;</kbd> ist der Standardwert.
  </p>

  <p style="background-color:#ddd" class="hyphenate">Das Rindfleisch­etikettierungs­überwachungs­aufgaben­übertragungs­gesetz (RflEttÜAÜG) war
    im Jahre 1999 im deutschen Bundesland Mecklenburg-Vorpommern Teil eines Gesetzesvorhabens.
    <br>
        Quelle: https://de.wikipedia.org/wiki/Rindfleischetikettierungs%C3%BCberwachungsaufgaben%C3%BCbertragungsgesetz
    <br>
    <kbd>overflow-wrap: break-word;</kbd>
  </p>
</div>


Width und Auto
---------------
Normalerweise nimmt ein Block die maximal zur Verfügung stehende Breite ein. Mit
`width` kann eine andere Breite eines Blocks definiert werden:
Um einen Element zu zentrieren kann margin mit Wert auto verwendet werden, der den zur Verfügung stehenden Platz automatisch gleichmäßig verteilt. 

<div class="resizable">
<div style="width: 60%; margin: 0 auto; background-color: #ddd;">
<p>Der Margin wird links und rechts gleich verteilt mit "auto"</p>
<p><kbd>
div {<br>
  width: 60%;<br>
  margin-left:  auto;<br>
  margin-right: auto;<br>
}</kbd></p>
</div>
</div>

Float
------
Eine Möglichkeit aus der normalen Reihenfolge der Darstellung auszubrechen
bietet die Deklaration `float` mit den Werten `left` und `right`. Damit wird 
ein Element nach links bzw. rechts gesetzt, der Rest des Inhalts 
„rutscht nach oben“ und wird neben das Element gesetzt („umfließt das Element“). 

§

Hier sind drei Absätze zu sehen, die jeweils als Erstes ein Bild enthalten. 
Im ersten Absatz ist die Darstellung ganz normal – das Bild wird wie ein Wort 
im Text behandelt. Im zweiten Absatz „floated“ das Bild nach rechts, 
der Text rutscht links davon nach oben. Im dritten Absatz „floated“ 
das Bild nach links, der Text rutscht rechts davon nach oben. 

[Beispiel als Demo-Seite](/images/css-layout/float.html)

![Bilder mit float](/images/css-layout/float-img.png)

§

Werden statt Bildern andere Elemente gefloatat muss ausserdem
noch eine Breite gesetzt werden:

[Beispiel als Demo-Seite](/images/css-layout/floatp.html)

Float wurde vor der Einführung von Flexbox und CSS Grid für viele
Layout Aufgaben verwendet und war die Grundlage Grid-Systemen wie
z.B. [Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/#equal-width).

Mit der Einführung von CSS Grid ist die Verwendung von `float` für
diesen Zweck nicht mehr sinnvoll.


CSS Grid
------------------------

Um das Layout einer ganzen Seite zu gestalten arbeitet man
mit einen Grid, einem Gitternetz das man über die ganze Seite legt.

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
