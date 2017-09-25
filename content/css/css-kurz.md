---
title: Kurzvorstellung von Stylesheets
order: 10
---


Von Anfang an sollte eine HTML-Datei keine Information darüber enthalten, wie der Text dargestellt werden soll - keine Schriftart oder Schriftgröße. HTML sollte nur strukturelle Information enthalten („das ist eine Überschrift“ aber nicht „Helvetica 24pt“). Die Formatierungs-Information sollte in sogenannten „Stylesheets“ gespeichert werden, das Format für die Stylesheets war aber noch nicht definiert. Im Jahre 1993 sah eine typische Webseite so aus

<htmlcode caption="typische Webseite von 1993 - HTML-Code stellt nur die Struktur dar">
<html><body>
<h1>Das Studium</h1>
<p>Studienziel ist es, breit gefächerte technische und kreative Kompetenzen...
</body></html>
</htmlcode>

Da es keine Stylesheets gab „erfand“ Netscape ab 1994 zusätzliche HTML-Tags, die die Darstellung der Webseite festlegen. Andere Browser übernahmen diese Tags von Netscape. 

<htmlcode caption="typische Webseite von 1995 - Neue HTML-Tags für visuelle Darstellung">
<html><body>
<h1><font face="Arial" color="blue">Das Studium</font></h1>
<p><font size="+1">S</font>tudienziel ist es, breit gefächerte technische und kreative Kompetenzen...</p>
<p><font size="+1">P</font>rojekte und Praxissemster stellen schon während des Studiums die Verbindung...</p>
</body></html>
</htmlcode>

Durch das Hinzufügen der Tags für Formatierung wurde der HTML-Code komplizierter und unübersichtlicher. Erst ab ab 1995 wurde endlich an den Standards für Stylesheets gearbeitet, seit den frühen 2000ern ist die Unterstützung in den gängigen Browsern vorhanden. So sieht nun eine HTML-Seite mit separatem Stylesheet aus:

Die html-Datei

<htmlcode caption="typische Webseite von 2001 - HTML-Tags für Struktur, Verweis auf CSS">
  <link rel="stylesheet" type="text/css" href="fh.css">
</head><body>
  <h1>Das Studium</h1>
  <p>Studienziel ist es, breit gefächerte technische und wirtschaftliche Kompetenzen...
</body></html>
</htmlcode>

<css caption="Die Datei fh.css">
h1 { 
  font-family: Arial;
  color: blue; 
}
p:first-letter {
  font-size: large;
}
</css>

Mit der Trennung von Stylesheet und HTML wurde HTML wieder einfacher und übersichtlicher. Besonders das nachträgliche Verändern der Gestaltung wurde vereinfacht. 
Wichtige Argumente für den Einsatz von Stylesheets sind:

* Zusätzliche Gestaltungsmöglichkeiten
* Einheitliche Gestaltung von mehreren Webseiten
* Arbeitsteilung zwischen DesignerInnen (die CSS erstellen) und RedakteuerInnen (die Inhalte erstellen)

Aber Achtung: CSS ist nicht die Lösung jedes Problems:

* Mit Stylesheets können Sie nur Elemente verändern, die schon in der HTML-Datei vorhanden sind. Es können keine neuen Elemente eingefügt werden. 
* Um ein Stylesheet zu erstellen, muss die DesignerIn die HTML-Tags kennen, z. B. wissen, dass h1, h2, h3 für die Überschriften stehen. 
* Damit das Stylesheet wirkt, muss die RedakteurIn, die das HTML-Dokument erstellt, die richtigen HTML-Tags verwenden, z. B. Überschriften wirklich mit h1, h2, h3 formatieren, und nicht mit b, i, font. 


Beispiel
--------

Das Stylesheet definiert für die einzelnen HTML-Tags wie sie dargestellt werden sollen. In folgendem Code werden Formatierungen für die Tags body, p, h1 und h2 vorgenommen, der gezeigte &lt;style&gt;-Tag wird im Head des HTML-Dokument eingebunden:

<htmlcode caption="Hintergrundfarbe, Schriftfamilie, Schriftgröße mit CSS festlegen">
<style type="text/css">
  p {
    font-family: Libertine, serif;
    font-size: 22px;
  }
  h1,h2 {
    font-family: Biolinum, sans-serif;
  }
  h1 { font-size: 32px; }
  h2 { font-size: 24px; }
  body { background-color: green; }
</style>
</htmlcode>

An Hand dieses Beispieles werden nun die ersten Stylesheet-Befehle erklärt. Die Syntax von Stylesheets ist völlig anders als die von HTML. 

Interpretation
-----------
Zuerst werden wir die Schriften im Dokument festlegen.  Achtung: Welche Schriften auf dem Endgerät zur Verfügung stehen, bzw. ob das Nachladen von Fonts wirklich klappt ist nicht bekannt, deswegen kann man mehrere Schriften angegeben. Diese Liste wird vom Browser von links nach rechts abgearbeitet,die erste Schrift die er findet, verwendet er. 

In Zeile 2 bis 5 werden zwei Anweisungen für Fließtext gegeben (HTML-Tag &lt;p&gt;): die Schriftfamilie in Zeile 3 und die Schriftgröße in Zeile 4. 

Das letzte Wort in Zeile 7 „sans-serif“ ist ein CSS-Kürzel für „irgendeine serifenlose Schrift“. Es empfiehlt sich am Ende einer Schriftliste ein solches Kürzel als Standardwert „wenn alle Stricke reißen“  anzugeben,dabei sind folgende Werte möglich:  `serif`,  `sans-serif`,  `cursive`, `fantasy`,   `monospace`.



CSS erforschen mit Developer Tools
---------------------------
Sie haben nun einen kurzen Einblick in die Schreibweise und die Möglichkeiten von Stylesheets. Genug um Stylesheets von Webseiten zu lesen um neue Möglichkeiten kennen zu lernen. Beim Lesen und Verstehen von CSS helfen die Developer Tools des Browsers.





![Abbildung 19: Firefox Add-On Firebug](/images/image072.png)

