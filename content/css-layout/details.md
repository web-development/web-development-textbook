---
title: Details zu Layout
order: 40
---

In diesem Kapitel werden weitere Properties vorgestellt,
die das Layout mit CSS ermöglichen.

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

Ein Bild wird dabei wie ein Wort im Text behandelt, und nicht etwa frei auf der Webseite positioniert. Wenn Sie das Bild wie hier mitten in einen Absatz hinein setzen, ergibt das meist ein sehr hässliches Layout:

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
z.B. einfach am html-Tag: `<html lang="de">`.

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

## Width und Auto

Normalerweise nimmt ein Block die maximal zur Verfügung stehende Breite ein. Mit
`width` kann eine andere Breite eines Blocks definiert werden:
Um einen Element zu zentrieren kann margin mit Wert auto verwendet werden, der den zur Verfügung stehenden Platz automatisch gleichmäßig verteilt.

<div class="resizable">
<div style="max-width: 60%; margin: 0 auto; background-color: #ddd;">
<p>Der Margin wird links und rechts gleich verteilt mit "auto"</p>
<p><kbd>
div {<br>
  width: 60%;<br>
  margin-left:  auto;<br>
  margin-right: auto;<br>
}</kbd></p>
</div>
</div>

Statt einer fixen Breite `width: 900px` kann man eine maximale Breite
mit `max-width: 900px` angeben. Stehen weniger als 900px zur Verfügung
dann wird diese CSS Anweisung ignoriert, und der Block nimmt wieder 100% der
Breite ein.

## Float

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

## Fallen bei der absoluten Positionierung

Mit der Deklaration `position: absolute` wird ein Tag aus der normalen Darstellung
herausgenommen und über dem restlichen Inhalt der Seite platziert.

Wenn man nicht explizit ein Koordinatensystem mit `position: relative` angibt,
dann gilt die linke obere Ecke des Browserfensters als Ursprung.

Das führt oft zu Verwirrung, zum Beipiel wenn der meiste Inhalt der Seite
zentriert ist, sich also je nach Fensterbreite verschriebt, und dann ein Element
absolut darauf platziert wird.

[Beispiel-Seite](/images/css-layout/unkoordiniert.html)

§

In folgendem Beispiel wird ein absolut positiniertes Menü kombiniert mit
einem Inhalt mit `margin-left` - sonst würde das Menü den Inhalt verdecken!

<css>
#navi {
  position: absolute;
  width: 80px;
  top:    0px;
  left:   0px;
}
__|__
#content {
  margin-left: 100px;
}

</css>

§

![Abbildung 40: Kombination von absoluter Positionierung und margin-left](/images/css-layout/image142.png)
