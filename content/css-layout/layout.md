---
title: CSS für Layout
order: 20
---

Welche Gestaltungsmöglichkeiten bietet CSS nun?

### Text

Die Darstellung einer HTML-Seite durch den Browser erfolgt von oben nach unten, je nach Sprache von links nach rechts oder von rechts nach links. Dabei wird zwischen blockbildenden Tags und nicht-blockbildenden Tags unterschieden. In Abbildung 33 wurden &lt;p&gt; und &lt;em&gt;-Tags verwendet und mit folgendem Stylesheet formatiert:

    p { background-color:#CCCCCC; }
    em { background-color:#FFFF66; }

Bei der Darstellung im Browser kann der nicht-blockbildender Tag em dabei auf mehrere Zeilen verteilt werden und nimmt dann mehrere rechteckige Bereiche ein, der blockbildende Tag p wird immer als ein Rechteck dargestellt:

![Abbildung 33: Darstellung von blockbildenden und nicht-blockbildenden Tags](/images/image128.png)

### Bild im Text

Ein Bild wird dabei wie ein Wort im Text behandelt, und nicht etwa frei auf der Webseite positioniert.  Wenn Sie das Bild wie in Abbildung 34 mitten in einen Absatz hinein setzen, ergibt das meist ein sehr hässliches Layout. 

![Abbildung 34: Bild mitten im Absatz](/images/image130.png)

### Umbruch von Wörtern

Lange konnten Browser keine Wörter trennen und umbrechen, ein langes „Wort“
konnte dadurch die Breite eines Elements überschreiten. In Abbildung 35 können Sie sehen, wie Microsoft Internet Explorer 7.0 eine lange URL nicht umbricht. 

![Abbildung 35: Darstellung eines Absatzes mit Rahmen und fixer Breite, der lange Wörter enthält, in MSIE 7.0](/images/image132.png)

CSS bietet ab Version 3 verschiedene Möglichkeiten diese Fälle zu behandeln, z.b mit der Eigenschaft `text-overflow` [&rarr;](http://css3clickchart.com/#text-overflow)

Derzeit ist es immer noch notwendig im Text die Soll-Bruchstellen als `&shy;` einzutragen, damit der Browser dann den Zeilenumbruch korrekt durchführen kann. Die Library [hyphenator.js](https://code.google.com/p/hyphenator/) bietet den Umbruch u.a. für englische und deutsche Texte an.

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
mit einen Grid, einem Gitternetz dass man über die ganze Seite legt:

[Demo-Seite](/images/cssgrid/)


Flexbox
------------------------

Flexbox erlaubt flexible Layouts, und wird für kleinere Komponenten
in der Seite eingesetzt, zum Beisiel für eine Bildergallerie.

[Demo-Seite](/images/flexbox.html)





Viele Methoden
-------------

Wie Sie gesehen haben gibt es viele CSS-Properties die
das Layout beeinflussen. 
