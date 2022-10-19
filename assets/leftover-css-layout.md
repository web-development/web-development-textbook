
### Flexbox verschachteln

Wenn man vertikale und horizontale Flexboxen ineinander schachtelt
kann man auch ein zweidimensionales Layout erzielen - so wie mit
CSS Grid. Das HTML Dokument muss aber dabei diese Struktur genau
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

[Demo-Seite](/images/flexbox/)


![Layout mit CSS Grid](/images/css-layout/grid.png)

Das Grid wird normalerweise nicht angzeigt. Die hier gezeigte Ansicht
mit den strichlierten Linien kann man in den Firefox Developertools mit
einem Klick auf das grid-symbol aktivieren:

![Grid Ansicht einschalten in Firefox](/images/css-layout/switch-on-grid.png)

[Demo-Seite](/images/cssgrid/)



## Absolute Positionierung

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


---
title: Rahmenbedingungen
order: 10
---

Wie im Kapitel [Das Web und HTML](/das-web-und-html/) beschrieben gibt es viele verschiedene Ausgabegeräte für Webseiten. Für die Gestaltung des visuellen Layouts von Webseiten spielt dabei die die Auflösung und die Pixeldichte eine wichtige Rolle.

## Auflösung

Hier ein Überblick über mögliche Bildschirm-Auflösungen:

![Bildschirmauflösungen und Seitenverhältnisse](/images/css-layout/Vector_Video_Standards2.svg)

basierend auf http://en.wikipedia.org/wiki/Image:Vector_Video_Standards2.svg

Vergleichen Sie die höchsten hier dargestellte Auflösungen mit der geringsten Auflösungen. Da Breite und Höhe (mehr als) verdreifacht sind, steht bei der höchsten Auflösung also (mehr als) die neunfache Fläche zur Verfügung!

§

Die typische Auflösung hat sich über Jahre stark verändert. Diese Statistik
von w3schools.org reicht von 2000 bis 2021. In diesem Zeitraum hat sich die Mehrheit langsam von 800x600 (bis 2003) auf 1024x768 (bis 2008) und schließlich auf höhere Auflösungen verschoben.

In der Statistik ist nicht ausgewiesen, ob Mobile Endgeräte mitgezählt werden oder nicht.
An anderer Stelle kann man nachlesen das ca. 14% der Zugriff von Mobile erfolgen.

![Abbildung 26: Statistik über die Bildschirmauflösung,](/images/css-layout/display-stats.png)

[Datenquelle: w3schools](http://www.w3schools.com/browsers/browsers_display.asp)

## Pixeldichte

Die Angabe der Auflösung erfolgt in Pixel – die reale Größe des Ausgabegerätes (24“ Desktop, 13“ Laptop, mobiles Endgerät) ist bei gleicher Pixel-Auflösung sehr unterschiedlich! Mobile Geräte haben oft eine höhere Pixeldichte, die in Pixel pro Inch oder Pixel pro cm gemessen wird.

|Gerät|Erscheinungsjahr|Pixel|Diagonale Inch|Pixel per Inch|
|+----|+---------------|+----|+-------------|+-------------|
|Altes 19” LCD Display|2008|1280 × 1024|19 in|86 ppi|
|13” Macbook Pro/Air|2019|2560 x 1600|13 in |227 ppi|
|15” Macbook Pro 'Retina'|2012|2880 × 1800|15.4 in |220 ppi|
|16” Macbook Pro|2019|3072×1920 |16 in|226 ppi|
|Apple iPhone 3|2009|480 × 320|3.5 in |163 ppi|
|Apple iPhone 7|2016|1334 × 750 Pixel|5.5 in|326 ppi|
|Apple iPhone X|2017|2436 × 1125 Pixel|5.8 in|458 ppi|
|Google Nexus One |2010|800 × 480|3.7 in |254 ppi |
|Samsung Galaxy S7|2016|2560 × 1440 pixel|5.1 in |577 ppi |
|Samsung Galaxy S10|2019|3040 × 1440 pixel|6.1 in |550 ppi |
|Sony PSP 7th gen|2005|480 × 272|4.3 in |128 ppi|
|Apple iPad Pro 11|2018| 2388 x 1668 |11 in|264 ppi |
{: class="table table-condensed table-bordered" style="width:auto"}

Hier findet man einen Faktor 6 zwischen höchster und geringster Pixeldichte.

## CSS Pixel sind virtuelle Pixel

Um die Gestaltung von Webseiten zu vereinfachen verwendet CSS nicht die echten
Pixel, sondern virtuelle Pixel als Grundmaß. Im [Standard](https://drafts.csswg.org/css-values-3/#px) findet sich folgende
Definition und folgende Abbildung:

> The reference pixel is the visual angle of one pixel on a device with a pixel density of 96dpi and a distance from
> the reader of an arm’s length. For a nominal arm’s length of 28 inches, the visual angle is therefore about
> 0.0213 degrees. For reading at arm’s length, 1px thus corresponds to about 0.26 mm (1/96 inch).
>
> The image below illustrates the effect of viewing distance on the size of a reference pixel: a reading distance
> of 71 cm (28 inches) results in a reference pixel of 0.26 mm, while a reading distance of 3.5 m (12 feet)
> results in a reference pixel of 1.3 mm.

![Abbildung aus dem CSS Standard: definition des pixels als Winkel](/images/css-layout/pixel.png)

Mit [mydevice.io](https://www.mydevice.io/) kann man den aktuellen Browser
vermessen. Die angezeigten Pixel sind die virtuellen CSS Pixel. Mit dem Faktor "pixel-ratio" kann man
die physikalischen Pixel ausrechnen.

By mydevice.io gibt es auch eine [ausführlichere Liste](https://www.mydevice.io/#compare-devices) von aktuellen
Geräten.

## Viele Auflösungen

![Vergleich der Auflösungen](/images/resolutions.jpg)

## Umgang mit der Problematik

Wie gehen WebdesignerInnen mit den verschiedenen Auflösungen und Pixeldichten um? Ein paar Varianten:

1.  Ignorieren und für die eigene Bildschirmauflösung entwerfen. Manchmal in Kombination mit der Beschriftung „best viewed at 1600x1200“
2.  Ignorieren dass es viele Bildschirmauflösungen gibt, und für das Minimum entwerfen.
3.  Zwei oder drei Entwürfe, die den gleichen Inhalt für verschiedene Auflösungen unterschiedlich darstellen.

§

Dazu ein strenges Urteil:

1.  ist völlig inadäquat für das Medium Web. „best viewed“ ist eine Zumutung für alle LeserInnen auf "unpassenden" Ausgabegeräten. Stellen Sie sich vor, am Eingang eines Gebäudes wäre neben der Treppe ein Schild angebracht „nur benutzbar für Leute die Treppen steigen können“. Das Problem von Rollis und Kinderwägen wurde erkannt, und absichtlich nicht gelöst?
2.  Zeigt schon ein Minimum an Wissen über das Web, ignoriert aber die gestalterische Herausforderung des Mediums. Weil solch ein Entwurf auf einem Bildschirm mit hoher Auflösung sehr klein auf einer großen leeren Fläche erscheint wird es spöttisch „Briefmarkenlayout“ genannt.
3.  Nur das verdient wirklich die Bezeichnung „Webdesign“.

Im nächsten Kapitel werden mit "Responsive Design" und "Responsive Images" die aktuellen
Antworten im Web Design vorgestellt.






## Bilder und Responsive Design

Bilder waren lange Zeit ein Grund, warum das Layout von Webseiten nicht flexibel war: weil die Bilder nur für die Darstellung bei einer bestimmten Größe geeigenet waren. Das ist aber seit ca. 2010 anders.

### Pixel

Als Bildformate für `<img>` Tags in Webseiten wurden lange nur Pixel-Formate unterstützt. Diese Formate (jpg, png, gif) sind für die Darstellung bei einer bestimmten Größe gedacht. Die Vergrößerte Darstellung von Pixel-Bildern liefert keine guten Ergebnisse:

![Abbildung 29: Ausschnitte aus einem Pixel Bild, vom Browser (Firefox) in 3 Stufen vergrößert dargestellt](/images/css-layout/pixel-image-zoom.png)

Die Verkleinerte Darstellung ist eine Verschwendung: Wenn ich ein Bild herunterladen muss, dass doppelt So breit und
doppelt so hoch ist, wie mein Browser darstellen kann, dann sind das viermal so viele Daten, und damit eine viermal
so lange Wartezeit!

Es gibt eine moderne Lösung für diese Problematik [Responsive Images](/grafik/images/) - diese werden wir später genauer kennen lernen.

### Vektor

Mit dem Format SVG steht auch ein vektor-basiertes Bildformat für das Web zur Verfügung. SVG-Bilder können in beliebiger Größe verwendet werden. Die Einbindung erfolgt mit dem img-Tag:

    <img src="circle.svg">

![Abbildung: Kreis in SVG-Darstelllung](/images/circle.svg)

## Schriftgröße

Die Schriftgröße im Browser unterliegt nur bedingte der Kontrolle durch HTML und CSS Code. Das „letzte Wort“ hat hier die LeserIn, die die Schrift größer oder kleiner stellen kann. z.B. in MSIE unter Ansicht → Schriftgrad, in Firefox mit der Tastenkombination `STRG +` oder `STRG –`.

Je nach Schriftgröße und zur Verfügung stehendem Platz im Browser-Fenster wird der Browser die Absätze geeignet in Zeilen umbrechen, wie in Abbildung 31 gezeigt.

![Abbildung 31: Darstellung von Text bei verschiedenen Fensterbreiten und Schriftgrößen](/images/css-layout/zeilenumbruch.png)

## Zoomen

Alle Browser bieten das Vergrößern und Verkleinern der Webseite an,
meist mit einer Tastenkombination mit `+` bzw. `-`.
Dabei werden die CSS Pixel vergrößert bzw. verkleinert. Die Größe des
Viewport und die CSS pixel-ratio verändern sich also, dadurch werden
andere Mediaqueries schlagend.

## Beispiel

Die [Demo Seite für CSS Grid](/images/cssgrid/#!/responsive) ist responsive.

![/images/css-layout/example-responsive.png](/images/css-layout/example-responsive.png)

§

Für Smartphones ist kein Grid vorgesehen:

<css>
@media screen and (max-width: 660px)  {
  .page_container {
    padding: 10px;
    max-width: 80em;
    font-size: 18px;
    line-height: 24px;
  }
  ...
}
</css>

§

Für Tablets gilt ein Grid mit zwei Spalten:

<css>
@media screen and (min-width: 660px) and (max-width: 1150px)  {

    .page_container {
      display: grid;

      grid-template-columns: 2fr 3fr;
      grid-template-rows: 60px 403px 1fr 1fr 60px 3fr;

      grid-template-areas:  "w1        headline "
                            "portrait  description"
                            "w2        facts"
                            "w2        navigation"
                            "w2        stylename"
                            "w2        css";
    }
    ....

}
</css>

§

für Desktops ein Grid mit drei Spalten:

<css>
@media screen and (min-width: 1200px)  {

    .page_container {
      display: grid;

      grid-template-columns: 270px 5fr 3fr;
      grid-template-rows: 60px 2fr 210px;

      grid-template-areas:  "w1        headline     stylename"
                            "portrait  description  css"
                            "w2        facts        navigation";
    }
    ...

}
</css>

§

und als Easter Egg ist noch eine ganz verrücktes Grid dabei:

![/images/css-layout/easteregg-responsive.png](/images/css-layout/easteregg-responsive.png)

<css>
@media screen and (min-width: 1150px) and (max-width: 1200px) {

    .page_container {
      height:1200px;
      width:1200px;

      display: grid;

      grid-template-columns: 140fr 131fr 152fr 283fr 190fr 166fr;
      grid-template-rows: 114fr 306fr 305fr 131fr 129fr 70fr;

      background-color: black;
      grid-gap: 25px 25px;

      grid-template-areas:
        "w1    w1           w2           w2           headline  headline"
        "w4    description  description  description  facts     facts"
        "w5    description  description  description  portrait  w11"
        "w5    navigation   navigation   w6           w7        w7"
        "gelb  navigation   navigation   w8           css       css"
        "gelb  w9           w9           stylename    css       css"
        "gelb  w9           w9           w10          w10       w10";
    }
    ...

}
</css>