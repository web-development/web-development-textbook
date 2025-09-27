---
title: Wichtige Properties
order: 25
---

Schrift
-----------------------------

Dieses Beispiel zeigt zusätlich zu den schon bekannten
ein paar weitere  Properties für die Gestaltung der Schrift:

<css>
h1,h2 {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;

  letter-spacing: 0.2ex;  //  Abstand zw. Buchstaben
  text-decoration: underline;  // unterstrichen - gefährlich!
  text-shadow: orange 0 -2px;  // Schatten Effekt
}
h1 {
  text-transform: uppercase;   // alles Großbuchstaben
}
h2 {
  font-variant: small-caps;    // Kapitälchen
}
</css>

[Demo](/images/css/text-css.html)





Webfonts
--------

Als Schriften kann man einerseits Schriftarten verwenden, die am Client schon
installiert sind, und andererseits kann man auf Schriften verweisen, die im Web
gespeichert sind.




Auf [modernfontstacks.com](https://modernfontstacks.com/) gibt es eine gute Übersicht über die installierten Schriften auf den häufigsten Betriebssystemen, dort kann man einfach einen Wert für `font-family` kopieren, z.B:

<css>
font-family: 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;
</css>



Eine praktische Möglichkeit Webfonts aus den Web zu laden
bietet [https://fonts.google.com/](https://fonts.google.com/)

Bei Google-Fonts findet man nur Schriftarten die man kostenlos verwenden kann.  Es gibt aber auch Fonts für die
man Lizenzgebühren zahlen muss.



Absätze
---------


Wie immer in HTML erfolgt der Zeilenumbruch automatisch.
Die Standard-Darstellung von Absätzen erklärt sich über den `margin-top`
und `margin-bottom` des `&lt;p&gt;`-Tags:

![Standard-Darstellung von Absätzen (p-Tag) im Browser](/images/css/p-default-margin.png)


Mit CSS können Sie verschiedene Aspekte des Absatz-Layoutes verändern, einige davon sind hier gezeigt:


![Abbildung 18: Absatz mit CSS Formatanweisungen: text-indent und line-height](/images/css/absatz.png)

Mit `text-align` können Sie die Ausrichtung des Texts im Absatz festlegen: `left`, `right`, `center` oder `justify` (Blocksatz). Blocksatz wurd am Web bis jetzt wenig verwendet, da die Browser lange keine Silbentrennung durchführten. Dadurch entstanden bei Blocksatz oft häßliche Löcher im Text. Seit dem Jahr 2011 unterstützen erste Browser die Silbentrennung, damit wird `justify` besser verwendbar.

Die erste Zeile des Absatzes kann einen separaten Einzug haben, den Sie mit `text-indent` festlegen. Die Zeilenhöhe wird mit `line-height` festgelegt. Hier ist es sinnvoll für längere Texte einen etwas erhöhten Wert festzulegen (z. B. `1.5em` – d.h.1,5 mal die Breite des Buchstaben M in dieser Schrift) da die Standard-Darstellung der Browser etwas zu eng ist um gut lesbar zu sein.

<css>
p {
   text-align: justify;
   text-indent: 4em;
   line-height: 1.2;
}
</css>




Box Model
---------

Jeder blockbildende Tag (z. B. h1, h2, p, blockquote, div, …) hat einen Rahmen, Innen- und Außenabstand. Diese werden mit den Deklarationen border, padding und margin festgelegt. Ein Hintergrundbild und/oder eine Hintergrundfarbe des Tags reicht immer bis zum Rahmen, aber nicht darüber hinaus.

[Demo](/images/css/box.html)


![Darstellung des Box Models in den Firefox Developer Tools](/images/css/boxmodel.png)


Dabei wird direkt in der Webseite der Außenabstand (margin) gelb und der Innenabstand (padding) dunkelviolett hinterlegt.



<css>
  p {
  padding: 5px;
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  border-width: 0px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  background-color: #DDD;
  }
</css>

### border-box

Achtung: Im traditionelle Box Model bezieht sich die Breite (width) auf
den Inhalt, padding, border und margin muss man erst dazu zählen, um den
Gesamt-Platzbedarf zu errechnen. Mit der Deklaration `box-sizing: border-box`
kann man auf ein besseres Box-Model umschalten: dann gibt width die Gesamt-Breite an.


<css>
box-sizing: border-box;
width: 200px;
padding: 10px;
border-width: 10px;
margin: 32px 0px
</css>

Gesamtbreite inklusive Rahmen = 200px.
Platz für den Inhalt = 200px - (10px + 10px + 10px + 10px) =  160px

![Abbildung 36a: width im Box-Model mit box-sizing: border-box](/images/css/box-sizing-border-box.png)




### Runde Ecken und Schatten

Mit CSS3 sind zusätzliche Effekte zum Box-Model dazu gekommen: abgerundete Ecken
und Schatten:

<css>
button{
   color: white;
   text-shadow: 0 1px 1px black;
   padding: 5px 30px;
   background-color: red;
   border: 1px solid maroon;
   border-radius: 4px;
   box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black;
}
</css>

So sieht's aus:

<button style="color: white;   text-shadow: 0 1px 1px black;  padding: 5px 30px;  background-color: red;  border: 1px solid maroon;   border-radius: 4px;   box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black;">Test</button>


Das ist ein Beispiel aus Helmers:
[Beautiful UI styling with CSS3 text-shadow, box-shadow, and border-radius](http://dev.opera.com/articles/view/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/), dort finden
sich noch viele ausführlichere Beispiele.

§

Und nun die schlechte Nachricht: seitem Schatten ganz einfach mit CSS erzeugt werden
können (laut [caniuse](https://caniuse.com/#search=box-shadow) ca. 2009) sind sie out.  Seitdem ist [flat design](https://de.wikipedia.org/wiki/Flat_Design) in (ca. 2010).





Farben, Hintergrundfarben, Hintergrundbilder
--------

Die Farbe des Textes wird mit `color`, die Hintergrundfarbe mit `background-color` gesetzt.

Jeder Tag kann mittels CSS ein oder mehrere Hintergrundbilder erhalten (`background-image`). Als „Hintergrundbild“ in einer Webseite kann jedes Bild in einem Web-geeigneten Dateiformat (gif, jpg, png) dienen. Das Bild wird einfach dargestellt oder „gekachelt“ –horizontal und vertikal so oft wiederholt, bis es die ganze Fläche des Tags ausfüllt (`background-repeat`).


<div class="resizable" style="background-image: url(/images/css/trefoilknots.svg);">
<p><b style="text-shadow: #CCC 1px 0 10px;">Trefoil Knot</b> - <b>Trefoil Knot</b></p>
<p><span style="text-shadow: #CCC 1px 0 10px;">Ein Hintergrundbild von <a href="https://commons.wikimedia.org/wiki/User:AnonMoos/Gallery">AnonMoos</a>.</span> Ein Hintergrundbild von <a href="https://commons.wikimedia.org/wiki/User:AnonMoos/Gallery">AnonMoos</a>.</p>
</div>


Bitte beachten Sie: Der Inhalt der Seite sollte trotz Hintergrundbild
 lesbar sein! In diesem Beispiel wurde auf Teile des
Textes ein weißer `text-shadow` gelegt.  Erhöht der Schatten die  Lesbarkeit?


Siehe Auch
---------

* [Alle CSS Properties](https://www.w3.org/Style/CSS/all-properties.html)
