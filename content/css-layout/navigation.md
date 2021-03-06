---
title: Navigationsmenü
order: 50
---

Wenn man mit CSS ein Navigationsmenü gestaltet dann sollte man von einem HTML-Code ausgehen der auch ohne CSS gut benutzbar bleibt ( „graceful degradation“), und der nur mit CSS umgestaltet wird.

Der Ausgangspunkt für ein Navigationsmenü ist eine Liste mit Links in einem `nav` Tag:

<htmlcode>
<nav>
  <ul>
    <li><a href="index.html">home</a></li>
    <li><a href="ort.html">ort</a></li>
    <li><a href="dies.html">dies</a></li>
    <li><a href="das.html">das</a></li>
  </ul>
</nav>
</htmlcode>

Ohne CSS wird die Liste ganz normal dargestellt [Demo](/images/navi/demo.html).

Vertikales Menü
------------------

Mit CSS kann man daraus ein vertikales Menü machen. 

Zuerst wird mit
`list-style-type: none` der Listenpunkt `li` zu einem normalen Tag.

Der Link selbst `a` wird mit `display:block` zu einem blockbildenden
Element. Das hat den Vorteil, dass das ganze Rechteck als Link wirkt,
und nicht nur der Text.

<css>
nav li {
   list-style-type:none;
   margin-bottom:1px;
}

nav li a:link {
   text-decoration: none;
   font-weight: bold;
   display: block;
   background: #6C6;
   width: 6em;
   padding: 0.2em;
}
</css>

Der eigentliche Link wird zu einem blockbildenden Element gemacht.
Damit ist dann das ganze Rechteck anklickbar, nicht nur der Text selbst.
[Demo](/images/navi/demo-1.html)

Horizontales Menü
------------------

Mit Hilfe von `flex` kann man das Menü auch horizontal darstellen.
Die Default-Richtung von `flex-direction` ist ja `row`, und damit ein
horizontales Menü.

<css>
.unsichtbar {display:none;}
nav ul {
  padding-left: 0;
  display: flex;
}

nav li {
  list-style-type:none;
  margin-right: 1px;
}

nav li a:link {
  text-decoration: none;
  font-weight: bold;
  display: block;
  background:#6C6;
  width:6em;
  padding: 0.2em;
}
</css>

[Demo](/images/navi/demo-2.html)


Responsive Navigation mit Burger Menü
------------------


Für sehr kleien Ausgabegeräte wie Smartphones sind horizontale
Navigationsmenüs nicht gut geeignet.  Dort reduziert man das Navigationsmenü
auf einen einzigen Button, der dann das Navigationsmenü ein- bzw. ausblendet:


![Burger Menu in Action](/images/css-layout/burger-menu.png)

Als Symbol für diese Art von Menü werden oft drei vertikale Stricke verwendet,
auch  [Hamburger Icon](https://de.wikipedia.org/wiki/Hamburger-Men%C3%BC-Icon)
genannt.


[Demo](/images/navi/demo-4.html)


PHP für Navigationsmenü
-----------------------------------------
Das Navigationsmenü sollte natürlich in allen Seiten der Site gleich vorhanden sein.
Dazu könnte man den Code in alle HTML-Dateien kopieren. Wenn man
dann eine neue Seite einfügen will, muss man wiederum alle Seiten editieren.

Deswegen bietet es sich an, bei dieser Gelegenheit von einfachem HTML auf PHP umzusteigen.
PHP ist eine Programmiersprache am Webserver mit der wir uns im Sommersemester 
intensiv beschäftigen werden.

Zur Umstellung müssen alle HTML-Dateien die Endung `.php` erhalten, 
im Navigationsmenü sieht das dann so aus:

<htmlcode>
<nav>
   <h3 class="unsichtbar">Seitenauswahl</h3>
   <ul>
      <li><a href="index.php">home</a></li>
      <li><a href="ort.php">ort</a></li>
      <li><a href="dies.php">dies</a></li>
      <li><a href="das.php">das</a></li>
   </ul>
</nav>
</htmlcode>

§

Das Navigationsmenü wird nun in einer separaten Datei gespeichert,
z.B. `navi.php`.  In den einzelnen Seiten wird das Menü dann mit `include` eingebunden:

<htmlcode>
<body>
<?php include "navi.php"; ?>
<h1>News</h1>
</htmlcode>

Server Side
-----------

Das Einfügen der inkuldierten Datei erfolgt auf dem Server. 
Der Client erhält das vollständige HTML-Dokument inklusive Navigation, und merkt von der Inkludierung nichts. Mit ANSICHT → SEITENQUELLTEXT ANZEIGEN kann man den PHP-Code nicht sehen. 

![Abbildung 41: Original PHP-Datei am Server und Quelltext-Ansicht im Webbrowser](/images/php/view-source.png)


Ergebnis
-------

Damit ist nun das Einfügen eines neuen Menü-Punkts ins Navigationsmenü 
ganz einfach: nur die Datei `navi.php` muss editiert werden.

