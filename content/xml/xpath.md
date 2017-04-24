---
title: XPath
order: 45
---

XPath ist eine Abfrage-Sprache zu XML, ähnlich zu
einer Pfadangabe im Dateisystem.  Aber während eine
Pfadangabe nur ungefähr 3 Features kennt (".." für den
übergeordneten Ordner, die Wildcards "*" und "?")
hat XPath dutzende, wenn nicht hunderte Features.

## XPath Intro

Aus dem Kurs "Introduction to Databases" von Prof.Jennifer Widom:

* [Intro](http://www.youtube.com/watch?v=qY2Ezw786ko&list=WLF4A5CFFB0BD48551)
* [Demo](http://www.youtube.com/watch?v=6Zvw3kmJ0KA&list=WLF4A5CFFB0BD48551)

## XPath in PHP / SimpleXML

Als Beispiel wird hier ein Output der Wikipedia-API verwendet: Informationen
zu einem Bestimmten Bild [Demo](http://de.wikipedia.org/w/api.php?action=query&titles=Datei%3A2010-04-29-tulpen-by-RalfR-14.jpg&prop=imageinfo&iiprop=url&iiurlwidth=300&format=xml)

<xml caption="output der Wikipedia-API: Abfrage von Bild-Information">
<api>
  <query>
    <pages>
      <page ns="6" title="Datei:2010-04-29-tulpen-by-RalfR-14.jpg" missing="" imagerepository="shared">
        <imageinfo>
          <ii thumburl="http://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2010-04-29-tulpen-by-RalfR-14.jpg/300px-2010-04-29-tulpen-by-RalfR-14.jpg" thumbwidth="300" thumbheight="451" url="http://upload.wikimedia.org/wikipedia/commons/8/8b/2010-04-29-tulpen-by-RalfR-14.jpg" descriptionurl="http://commons.wikimedia.org/wiki/File:2010-04-29-tulpen-by-RalfR-14.jpg"/>
        </imageinfo>
      </page>
    </pages>
  </query>
</api>
</xml>

§

Um aus dieses XML nun in PHP Informationen zu extrahieren können 
wir XPath verwenden:

<php caption="XML abfragen mit XPath in PHP">
$xml_doc = new SimpleXMLElement("....xml von oben ...");

$query_result = $xml_doc->xpath( "//ii/@thumburl" );

$bild_url = (string) $query_result[0];

echo "<h1>Das Bild</h1>";
echo "<img src='$bild_url'>";
</php>

## XPath in JavaScript

XPath kann man verwenden um das HTML-Dokument selbst zu durchsuchen:
Der folgende Code sucht alle `h2`-Element im aktuellen Dokument, und
gibt sie in einem Ausgabefeld aus. [Demo](/images/js-und-xpath.html)

<javascript caption="XPath verwenden in HTML">
iterator = document.evaluate('//h2', document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
thisNode = iterator.iterateNext();
while (thisNode) {
  document.getElementById('output').value += thisNode.innerHTML + "\n";
  thisNode = iterator.iterateNext();
} 
</javascript>

§

In folgendem Beispiel wird ein String mit XML (den man z.B. schon
serverseitig geladen und ins JavaScript Eingefügt hat) in
JavaScript geparsed und mit XPath abgefragt.  [Demo](/images/js-und-xml-xpath.html)

<javascript>
var xml_string, parser, doc, iterator, thisNode;

xml_string = '... <ii thumburl="http://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2010-04-29-tulpen-by-RalfR-14.jpg/300px-2010-04-29-tulpen-by-RalfR-14.jpg" thumbwidth="300" thumbheight="451" /> ....';
parser   = new DOMParser();
doc      = parser.parseFromString(xml_string, "application/xml");
iterator = doc.evaluate('//ii/@thumburl', doc, 
               null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
thisNode = iterator.iterateNext();
if (thisNode) {
  document.getElementById('bild').src = thisNode.value;
} 
</javascript>



Siehe [Introduction to using XPath in JavaScript](https://developer.mozilla.org/en-US/docs/Introduction_to_using_XPath_in_JavaScript)

## Wo wird XPath im Web Development verwendet?

Mit [Selenium](http://docs.seleniumhq.org/) kann man das Testen einer Webseite
mit dem Browser automatisieren.  Dazu schreibt man Skripts,
mit den einzelnen Schritt die der Browser durchführen soll: 
"klicke hier, schreib das in ein Eingabefeld, drücke diesen Knopf".
Wie sagt man dem Browser welchen Link, welches Eingabefeld, welchen Knopf man meint?
Mit XPath (siehe [Selenium Dokumentation](http://docs.seleniumhq.org/docs/02_selenium_ide.jsp#locating-by-xpath))
oder mit CSS Selektoren oder mit einer ID.


