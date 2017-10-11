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

  letter-spacing: 0.4em;  //  Abstand zw. Buchstaben
  font-variant: small-caps;    // Kapitälchen
  text-decoration: underline;  // unterstrichen
  text-transform: uppercase;   // alles Großbuchstaben
  text-shadow: orange 0 -2px;  // Schatten Effekt
}
</css>

Webfonts
--------

Als Schriften kann man einerseits Schriftarten verwenden, die am Client schon
installiert sind, und andererseits kann man auf Schriften verweisen, die im Web
gespeichert sind.  Eine praktische Möglichkeit Webfonts aus den Web zu laden
bietet [http://www.google.com/webfonts](http://www.google.com/webfonts)

Bei Google findet man nur gratis-fonts.  Es gibt aber auch Fonts für die
man Lizenzgebühren zahlen muss.


Absätze
---------
Wie immer in HTML erfolgt der Zeilenumbruch automatisch. Mit CSS können Sie verschiedene Aspekte des Absatz-Layoutes steuern, einige davon sind in Abbildung 18 gezeigt:


![Abbildung 18: Absatz mit CSS Formatanweisungen: text-indent und line-height](/images/image066.png)

Mit `text-align` können Sie die Ausrichtung des Texts im Absatz festlegen: `left`, `right`, `center` oder `justify` (Blocksatz). Blocksatz wurd am Web bis jetzt wenig verwendet, da die Browser lange keine Silbentrennung durchführten. Dadurch entstanden bei Blocksatz oft häßliche Löcher im Text. Seit dem Jahr 2011 unterstützen erste Browser die Silbentrennung, damit wird `justify` besser verwendbar.

Die erste Zeile des Absatzes kann einen separaten Einzug haben, den Sie mit `text-indent` festlegen. Die Zeilenhöhe wird mit `line-height` festgelegt. Hier ist es sinnvoll für längere Texte einen etwas erhöhten Wert festzulegen (z. B. `1.5em` – d.h.1,5 mal die Breite des Buchstaben M in dieser Schrift) da die Standard-Darstellung der Browser etwas zu eng ist um gut lesbar zu sein. 

§

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

![Abbildung 21: Darstellung des Box Models von hicksdesign.co.uk](/images/image083.png)

Die Ausdehnung von margin, padding und border kann man besonders gut mit der Firefox-Erweiterung Firebug erforschen wie in Abbildung 22 gezeigt. 

![Abbildung 22: margin, border, padding in Firebug](/images/image085.png)

Dabei wird direkt in der Webseite der Außenabstand (margin) gelb und der Innenabstand (padding) dunkelviolett hinterlegt. 

Achtung: Im traditionelle Box model bezieht sich die Breite (width) auf
den Inhalt, padding, border und margin muss man erst dazu zählen, um den
Gesamt-Platzbedarf zu errechnen. Mit der Deklaration `box-sizing: border-box` 
kann man auf ein besseres Box-Model umschalten: dann gibt width die Gesamt-Breite an.  

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

![Beispiel wie der Button dargestellt wird](/images/button-border-radius.png)

Das ist ein Beispiel aus Helmers:
[Beautiful UI styling with CSS3 text-shadow, box-shadow, and border-radius](http://dev.opera.com/articles/view/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/), dort finden
sich noch viele ausführlichere Beispiele.

Absatz mit `<p>`
--------------

Die Standard-Darstellung von Absätzen erklärt sich über den margin-top und margin-bottom des &lt;p&gt;-Tags:

![Abbildung 23: Standard-Darstellung von Absätzen (<p>) im Browser](/images/image086.png)

Farben, Hintergrundfarben, Hintergrundbilder
--------

Die Farbe des Textes wird mit `color`, die Hintergrundfarbe mit `background-color` gesetzt.  

Jeder Tag kann mittels CSS ein oder mehrere Hintergrundbilder erhalten (`background-image`). Als „Hintergrundbild“ in einer Webseite kann jedes Bild in einem Web-geeigneten Dateiformat (gif, jpg, png) dienen. Das Bild wird einfach dargestellt oder „gekachelt“ –horizontal und vertikal so oft wiederholt, bis es die ganze Fläche des Tags ausfüllt (`background-repeat`). Abbildung 24 wurde ein Bild mit drei Zahnrädern als Hintergrundbild verwendet, durch die Wiederholung werden sieben Zahnräder angezeigt. 

![Abbildung 24: Beispiel für ein Hintergrundbild in einer Webseite](/images/image088.png)

Bitte beachten Sie: Der Inhalt der Seite sollte trotz Hintergrundbild immer noch lesbar sein! Im Beispiel in Abbildung 24 ist eine Linkfarbe zu hell bzw. das Hintergrundbild zu auffällig: Der Text „wurde schon besucht“ in der letzten Zeile ist kaum noch lesbar. 

