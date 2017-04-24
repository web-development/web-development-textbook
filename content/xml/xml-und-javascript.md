---
title: XML und JavaScript
order: 40
---


Wir [haben schon glernt](/javascript-dom/dom/) wie man mit
JavaScript das Document Object Model (DOM) eines HTML-Dokuments
manipuliert.  Auch ein XML Dokument hat ein DOM, man kann
es mit den gleichen Methoden manipulieren.

## Manipulieren des DOM

<javascript caption="Element einfügen in HML">
var container = document.getElementById('container');
div = document.createElement("div");
container.appendChild( div );
</javascript>

In folgendem Beispiel ist XML (hier: SVG) direkt in HTML eingebettet.
Der SVG-Tag kann genau so gefunden werden wie ein HTML tag.
Der einzige Unterschied ergibt sich beim Erzeugen eines 
neuen Elements: hier muss die Methode `createElementNS` verwendet werden.

<javascript caption="Element einfügen in XML (SVG)">
var svg = document.getElementsByTagName('svg')[0];
circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", 10);
circle.setAttribute("cy", 10);
circle.setAttribute("r", 10);
svg.appendChild( circle );  
</javascript>

[demo](/images/js-und-xml-dom.html)

## Laden von XML 

Zum Laden von XML-Dateien gibt es ein eigenes Objekt, dessen Lade-Methode
synchron oder asynchron verwendet werden kann.  Wir verwenden
hier die synchrone Variante, und beschäftigen uns im
Kapitel [AJAX](/applied-javascript/ajax/) mit der asynchronenen Variante.

Die Methode `open` legt fest: die HTTP Methoden, die URL, und ob
asynchron geladen werden soll.  Mit der Methode `send` wird der
Request abgeschickt, hier könnte man noch den HTTP-Request Body als
String übergeben.


<javascript>
xhttp = new XMLHttpRequest();
xhttp.open("GET", "stark.xml", false);
xhttp.send(null);

xmlDoc = xhttp.responseXML;
var first = xmlDoc.getElementsByTagName("person")[0];
document.getElementById('output').value = first.firstChild.nodeValue;
</javascript>


[demo](/images/load-xml.html)
