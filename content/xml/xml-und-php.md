---
title: XML und PHP
order: 35
---


In PHP gibt es mehrere Libraries zur Verarbeitung von XML. In der offiziellen
Doku sind unter [XML Manipulation](http://at1.php.net/manual/en/refs.xml.php) 13 verschiedene
angeführt. Wir werden zwei davon näher betrachten.



## DOM

<php caption="XML verarbeiten in PHP mit dem DOM">
$doc = DOMDocument::loadXML('<set><node>gleich</node><node>vorher</node></set>');
$node = $doc->getElementsByTagName('node')->item(1);
$node->removeChild($node->firstChild);

$newText = new DOMText('nachher');
$node->appendChild($newText);


header( "Content-Type: application/xml; charset=utf-8" );
echo $doc->saveXML();
</php>


## SimpleXML

SimpleXML lädt das XML direkt als PHP Datenstruktur:
Aus einer Node wird ein PHP Objekt, aus mehreren Kindern
einer Node wird ein Array, aus Attributen werden Eigenschaften.

Diese Datenstruktur erlaubt das Auslesen und das Manipulieren von XML:

<php caption="XML verarbeiten in PHP mit SimpleXML">
$doc = new SimpleXMLElement('<set><node>gleich</node><node>vorher</node></set>');
$doc->node[1] = "nachher";

header( "Content-Type: application/xml; charset=utf-8" );
echo $doc->asXML();
</php>


## XML laden

Viele Webseiten bieten XML als "Webservice" an.  Zum Beispiel
kann man bei der [Wikipedia API](http://www.mediawiki.org/wiki/API:Main_page) 
Teile von Wikipedia-Einträgen, Bilder, Meta-Informationen abfragen:

<php caption="XML laden von der Wikipedia">
$title = "Wiesen-Labkraut";

$parameters = array(
  "action" => "query", 
  "titles" => urlencode( $title ), 
  "prop" => "extracts", 
  "exintro" => 1
);

$url = "http://de.wikipedia.org/w/api.php?" . http_build_query( $parameters ) .  "&format=xml";

$xml_string = file_get_contents($url);

if( $xml_string === false ) {
  echo("could not load $url");
  die();
}
$xml_doc = new SimpleXMLElement($xml_string);
</php>
