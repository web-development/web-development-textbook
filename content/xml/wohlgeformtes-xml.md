---
title: wohlgeformtes XML
order: 10
---

Als "wohlgeformtes XML" bezeichnet man XML-Code der
die folgenden allgemeinen Regel befolgt. Eine separate
Frage ist dann, ob der Code einer bestimmten XML-Sprache
angehört - damit beschäftigen wir uns im nächsten Kapitel.

§

XML soll sowohl für Menschen als auch für Maschinen lesbar sein.
Die Schreibweise ist von HTML inspiriert, ist aber etwas strenger.
Hier werden oft Tags aus XHTML als Beispiele verwendet, weil Sie
diese schon kennen.

Hier werden nicht alle Details der XML-Syntax vorgestellt,
sondern nur die wichtigsten Regeln.

## XML Deklaration und Enconding

XML ist als Unicode codiert, sowohl `UTF-8` als auch `UTF-16`
sind möglich.  

Ein XML Dokument beginnt mit einer Deklaration:

<xml>
<?xml version="1.0" encoding="UTF-8" ?>
</xml>


## Entities

Sonderzeichen in XML beginnen mit einem "kaufmännischen Und" und enden
mit einem Strichpunkt. Die Namen sind Case Sensitive. 

Fünf Entities sind schon definiert, Sie kennen sie auch
schon aus HTML:

|Gewünschtes Zeichen | Character Entity|
|:--------:|:-------:|
| &lt;                 | &amp;lt;  |
| &gt;                 | &amp;gt;  |
| &amp;                 | &amp;amp; |
| "                 | &amp;quot;  |
| '                 | &amp;apos;  |
{: class="table table-condensed table-bordered" style="width:auto"}


Mit `#` kann der Dezimalwert eines Zeichens angegeben werden, z.B. `&#34;`
für ein Anführungszeichen. Mit `#x` kann der hexadezimale Wert eines Zeichens
angegeben werden, z.B. `&#x22;` für ein Anführungszeichen.

## Kommentare

Kommentare beginnen mit `<!--` und enden mit `-->`. Sie können nicht
verschachtelt werden.

<xml caption="Kommentar darf Code enthalten">
<!-- no need to escape <code> & such in comments -->
</xml>

## Tags

Tags werden wie in HTML begonnen und beendet: `<p>....</p>`.  
Tags ohne "Ende" müssen mit einem Slash am Ende
markiert werden: `<br />`.

Das Weglassen schließender Tags ist in XML nicht gestattet!
Tags in XML sind case sensitive.

Einen Tag samt Inhalt nennt man "Element".

## Attribute

Attribute bestehen immer aus einem Namen und einem Wert, der Wert muss
in Anführungszeichen gesetzt werden: `<input type="checkbox" checked="checked" />`.

Die verkürzte Schreibweise für Attribute ohne Wert wie in HTML5 (`<input type="checkbox" checked>`) 
gibt es in XML nicht. 

## CDATA Sektion

Daten innerhalb von XML, die als reiner Text interpretiert
werden sollen, bezeichnet man als Character Data (CDATA, deutsch: Zeichnekettendaten).
Man kann einen ganzen Abschnitt als Character Data auszeichnen,
und damit die interpretation von Entities und XML innerhalb verindern.
So eine CDATA Sektion beginnt mit `<![CDATA[` und endet mit `]]>`.

Das folgende Beispiel zeigt wie "Code-Snippets" im Editor
Text-Mate gespeichert werden, hier Code-Snippets für CSS
(vereinfacht, von [github/mate-desktop](https://github.com/mate-desktop/mate-text-editor/blob/master/plugins/snippets/data/php.xml)).

<xml caption="Code-Snippets für den Editor text-mate">
<?xml version="1.0" encoding="UTF-8"?>
<snippets language="CSS">
  <snippet id="color">
    <text><![CDATA[color: #DDD;]]></text>
    <description>color: color-hex</description>
    <tag>color</tag>
  </snippet>
  <snippet id="float">
    <text><![CDATA[float: left;]]></text>
    <description>float: left/right/none</description>
    <tag>float</tag>
  </snippet>
</snippets>
</xml>


## Referenz

* [RFC XML: Syntax](http://www.w3.org/TR/REC-xml/#syntax)


