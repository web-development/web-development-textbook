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

Bei der Darstellung im Browser wird der Text innheralb der Paragraphen je nach
zu verfügung stehenem Platz umgebrochen:

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
  <img src="/images/css-layout/silhouette_hand.svg" style="height: 24px;">
  Das Bild der Hand stammt von <a href="https://commons.wikimedia.org/wiki/File:Silhouette_hand.svg">SimonWaldherr</a>.
  Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
  I am a block level element - p for paragraph.
  </p>
</div>


### Umbruch von Wörtern

Browser können lange Wörter umbrechen:


<div class="resizable">
  <p style="background-color:#ddd">Das Rindfleisch­etikettierungs­überwachungs­aufgaben­übertragungs­gesetz (RflEttÜAÜG) war
    im Jahre 1999 im deutschen Bundesland Mecklenburg-Vorpommern Teil eines Gesetzesvorhabens.
    <br>
    Quelle: https://de.wikipedia.org/wiki/Rindfleischetikettierungs%C3%BCberwachungsaufgaben%C3%BCbertragungsgesetz
    <br>
    Dieser Absatz hat keine besondren CSS-Eigenschaften.
  </p>

  <p style="background-color:#ddd" class="hyphenate">Das Rindfleisch­etikettierungs­überwachungs­aufgaben­übertragungs­gesetz (RflEttÜAÜG) war
    im Jahre 1999 im deutschen Bundesland Mecklenburg-Vorpommern Teil eines Gesetzesvorhabens.
    <br>
        Quelle: https://de.wikipedia.org/wiki/Rindfleischetikettierungs%C3%BCberwachungsaufgaben%C3%BCbertragungsgesetz
    <br>
    Dieser Absatz hat keine die Eigenschaften  <kbd>  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;</kbd>
  </p>
</div>


Width und Auto
---------------
Normalerweise nimmt ein Block die maximal zur Verfügung stehende Breite ein. Mit
`width` kann eine andere Breite eines Blocks definiert werden:

<css>
div#main {  width:500px; }
</css>

Je nach `box-sizing` müssen Sie die Werte von padding, border, margin dazu
addieren um den Gesamt-Platzbedarf zu errechnen, oder nicht: der default ist
`box-sizing: content-box`.

§

<css>
box-sizing: content-box;
width: 200px; 
padding: 10px; 
border-width: 10px; 
margin: 32px 0px
</css>

Gesamtbreite inklusive Rahmen = 0px + 10px + 10px + 200px + 10px + 10px + 0px = 240px

![Abbildung 36: width im Box-Model mit box-sizing: content-box](/images/image134.png)

§

<css>
box-sizing: border-box;
width: 200px; 
padding: 10px; 
border-width: 10px; 
margin: 32px 0px
</css>

Gesamtbreite inklusive Rahmen = 0px + 10px + 10px + 160px + 10px + 10px + 0px = 200px

![Abbildung 36a: width im Box-Model mit box-sizing: border-box](/images/image134-border.png)



Zentrieren mit Auto
---------------

Um einen Element zu zentrieren kann margin mit Wert auto verwendet werden, der den zur Verfügung stehenden Platz automatisch gleichmäßig verteilt. 

[Demo-Seite dazu](/images/width-auto.html)

<css>
div#main {
  width:500px; 
  margin-left:  auto;
  margin-right: auto;
}
</css>

Float
------
Eine Möglichkeit aus der normalen Reihenfolge der Darstellung auszubrechen
bietet die Deklaration `float` mit den Werten `left` und `right`. Damit wird 
ein Element nach links bzw. rechts gesetzt, der Rest des Inhalts 
„rutscht nach oben“ und wird neben das Element gesetzt („umfließt das Element“). 

Hier sind drei Absätze zu sehen, die jeweils als Erstes ein Bild enthalten. 
Im ersten Absatz ist die Darstellung ganz normal – das Bild wird wie ein Wort 
im Text behandelt. Im zweiten Absatz „floated“ das Bild nach rechts, 
der Text rutscht links davon nach oben. Im dritten Absatz „floated“ 
das Bild nach links, der Text rutscht rechts davon nach oben. 

[Beispiel als Demo-Seite](/images/float.html)

![Abbildung 37: Bilder mit float](/images/image136.png)

§

Float wurde vor der Einführung von Flexbox und CSS Grid für viele
Layout Aufgaben verwendet.  Heute kommt es nur noch in der hier
beschriebenen Weise bei Bildern zum Einsatz. 



CSS Grid
------------------------

Um das Layout einer ganzen Seite zu gestalten arbeitet man
mit einen Grid, einem Gitternetz das man über die ganze Seite legt:

[Demo-Seite](/images/cssgrid/)

Siehe auch [CSS Tricks: Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


Flexbox
------------------------

Flexbox erlaubt flexible Layouts, und wird für kleinere Komponenten
in der Seite eingesetzt, zum Beisiel für eine Bildergallerie.

[Demo-Seite](/images/flexbox/)


Siehe auch [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


Viele Methoden
-------------

Wie Sie gesehen haben gibt es viele CSS-Properties die
das Layout beeinflussen. 
