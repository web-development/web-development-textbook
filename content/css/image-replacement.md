---
title: Image Replacement
order: 70
---

Der "Image Replacement Trick" wurde vor der Einführung von
Webfonts verwendet um exotische Schriften darzustellen.

Heute spielt er noch eine Rolle bei der Arbeitsteilung zwischen
Development und Design, z.B. beim Erstellen von Wordpress Themes.


Bild 
----

Auf jeder Seite im Blog soll das Logo angezeigt werden, das ist
gleichzeitig auch die Überschrift des Blogs.

<htmlcode>
<img src="mmtlogo-400.png">
</htmlcode>

Das sieht zwar wie eine Überschrift aus – wenn das Bild geladen wird – 
die Information ist aber für eine Suchmaschine oder ein Braille-Ausgabegerät nicht lesbar. 

Besser wäre:

<htmlcode>
<h1><img src="mmtlogo-400.png" alt="MultiMediaTechnology"></h1>
</htmlcode>

In manchen Situation hat man aber nur folgenden Code im HTML, 
und will das Bild nur über CSS darstellen:

<htmlcode>
<h1>MultiMediaTechnology</h1>
</htmlcode>

Ein Beispiel für so eine Situation ist z.B: ein Wordpress Theme. In der `h1` 
wird der Titel des Blogs angezeigt, die Gestaltung der Darstellung erfolgt nur mit CSS.


Image Replacement
-------------

Der Text wird normal im HTML-Code eingegeben. Bei CSS-fähigen Browsern wird 
der Text versteckt und das Bild angezeigt. Browser ohne CSS und Suchmaschinen verwenden einfach den Text:

<htmlcode>
<style>
  h1#bildStattText {
     /* schiebt den "echten text" extrem weit nach links */
     text-indent:-10000px;
     overflow:hidden;
     background: url(mmtlogo-400.png);

     /* hoehe und breite der grafik angeben! */
     height:140px;
     width:400px;
  }
</style>

<h1 id="bildStattText">MultiMediaTechnology</h1>
</htmlcode>

Das Bild kann ausgetauscht werden indem man das Stylesheet ändert, 
ohne Eingriff in den HTML-Code.

