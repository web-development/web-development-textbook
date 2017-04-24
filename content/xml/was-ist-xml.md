---
title: Was ist XML
order: 5
---

XML ist eine wichtige Auszeichnungssprache, die mit HTML verwandt ist.

## Geschichte der Auszeichnungssprachen

![SGML, HTML, XML und XHTML - eine Sprach-Familie](/images/SGML.svg)

Tim Berners-Lee hat HTML nicht "aus dem Nichts" erfunden. Er basierte
die Sprache auf SGML (Standard Generalized Markup Language). 
SGML ist eine Metasprache, mit deren Hilfe man verschiedene Auszeichnungssprachen 
(englisch: Markup Languages) definieren kann. SGML war damals (1990) bereits ein ISO-Standard.

Im Jahr 1998 veröffentlichte das World Wide Web Consortium [XML](http://www.w3.org/TR/xml/), eine neue
Meta-Sprache, als Teilmenge von SGML.  Sprachen auf Basis von XML sind
zum Beispiel RSS, SVG, oder XHTML.

Mit HTML5 hat sich HTML von diesem Stammbaum emanzipiert: HTML5 ist
nicht mehr eine Sprache, sondern zuerst das Document Object Model (DOM) 
als "in memory representation" im Browesr, und einige APIS für das DOM. 
Ausgehend davon werden zwei Darstellungsweisen definiert: HTML und XML.  

## Geschichte von XML

XML sollte einfacher als SGML sein, und den Datenaustausch
zwischen Programmen im Internet vereinfachen.  
So kann für ein bestimmtes Thema eine XML-Sprache definiert
werden, die dann für den Datenaustausch verwendet wird.
Für diesen Zweck wird XML heute auch an vielen Stellen verwendet,
es gibt viele XML-Sprachen die im Einsatz sind.

Mit XHTML sollte XML auch HTML ersetzen. Dieses Ziel wurde aber
nicht erreicht.  Die strengere Syntax von XML konnte sich nicht
durchsetzen. 

§

Rund um XML gibt es eine gut ausgebaute Infrastruktur:
In allen Programmiersprachen gibt es Libraries um XML zu verarbeiten,
viele Programmier-Editoren unterstützen die Bearbeitung von XML.
Zusätzlich gibt es noch eigene Sprachen zur Definition von XML
und um XML Abzufragen.

In den letzten Jahren hat sich mit JSON ein
anderes, noch einfachers Format für den Datenaustausch etabliert.

## Beispiele für die Anwendung von XML

Drei XML-Sprachen die im Web verwendet werden:

### SVG

<svg width="200" height="200" style="float:left;">
  <circle cx="100" cy="100" r="80"                 stroke="black" stroke-width="2" fill="#4e9a06" />
  <rect    x="80"   y="100" width="90" height="90" stroke="black" stroke-width="2" fill="#204a87" />
</svg>

Scalable Vector Graphics (SVG, engl. „skalierbare Vektorgrafik“) ist die vom 
World Wide Web Consortium (W3C) empfohlene Spezifikation zur Beschreibung 
zweidimensionaler Vektorgrafiken. Sie wird von den meisten Browsern
nativ untersützt [&rarr; can i use svg](http://caniuse.com/#feat=svg-html5).  SVG ist eine XML-Sprache. 

<br clear="left">

### RSS

RSS ist ein Format um die Inhalte eines Blogs maschienenlesbar anzubieten.
Wo bietet z.B. der Wordpress Blog `http://multimediatechnology.at/` 
unter der URL `http://multimediatechnology.at/feed/` die gleichen Inhalte
wie die Homepage des Blogs im RSS Format an.

<xml caption="Beispiel für RSS">
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>MultiMediaTechnology</title>
    <link>http://multimediatechnology.at</link>
    <description>Das Studium an der FH Salzburg</description>
    <lastBuildDate>Mon, 01 Apr 2013 08:36:25 +0000</lastBuildDate>
    <language>de-DE</language>
    <generator>http://wordpress.org/?v=3.5.1</generator>
    <item>
      <title>Barcamp März 2013: mit WebGL, Redis, ...</title>
      <link>http://multimediatechnology.at/2013/03/23/barcamp-marz-2013-mit-webgl-redis-memcached-riac-multi-user-games/</link>
      <pubDate>Sat, 23 Mar 2013 13:15:52 +0000</pubDate>
      <dc:creator>Brigitte Jellinek</dc:creator>
      <description><![CDATA[<p>Das 5. Barcamp &#8220;The Next Web&#8221; im März 2013 brachte wieder an die 70 Studierende und Fachleute an der FH Salzburg zusammen. Bei Workshops, Vorträgen und einer Ausstellung gab es nicht nur viel zu lernen, sondern auch viel Gelegenheit Leute &#8230;</p>]]></description>
    </item>
    <item>
      <title>Welcome Lecture Zach Liebermann</title>
      <link>http://multimediatechnology.at/2013/03/18/welcome-lecture-zach-liebermann/</link>
      <pubDate>Mon, 18 Mar 2013 10:03:24 +0000</pubDate>
      <dc:creator>Martin Ortner</dc:creator>
      <description><![CDATA[<p>Er ist Inbegriff des kreativen Coders: Der vielfach ausgezeichnete Medienkünstler und Creative Technologist Zach Lieberman. Ende März übernimmt er eine Gastprofessur am Studiengang MultiMediaTechnology. Für seine Zeit in Puch/Urstein plant der New Yorker gemeinsam mit Studierenden die Stadt Salzburg zur &#8230;</p>]]></description>
    </item>
  </channel>
</rss>
</xml>



### MathML

MathML ist eine Markup Language zur Darstellung von Mathematischen Formeln.
Es wird derzeit (2013) von Firefox und Safari unterstützt (siehe [&rarr; can i use MathML](http://caniuse.com/#feat=mathml)).


<markup caption="MathML Code-Beispiel">
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mrow>
  <mrow>
    <msubsup>
      <mo>∫</mo>
      <mrow>
        <mi>x</mi>
        <mo>=</mo>
        <mi>a</mi>
      </mrow>
      <mrow>
        <mi>x</mi>
        <mo>=</mo>
        <mi>b</mi>
      </mrow>
    </msubsup>
    <mrow>
      <mi>f</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mi>d</mi>
      <mi>x</mi>
    </mrow>
  </mrow>
</mrow>
</math>
</markup>

§

![Screenshot der MathML Darstellung in Firefox](/images/mathml.png)

Darstellung in diesem Browser:

<math xmlns="http://www.w3.org/1998/Math/MathML" style="border: 1px black solid;padding: 5px; margin: 10px 0">
<mrow>
<mrow>
<msubsup>
  <mo>∫</mo>
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mi>a</mi>
  </mrow>
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mi>b</mi>
  </mrow>
</msubsup>
<mrow>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mi>d</mi>
  <mi>x</mi>
</mrow>
</mrow>
</mrow>
</math>


Alternative: [MathJAX](http://www.mathjax.org/) ist eine JavaScript Library die MathML und LaTeX darstellen kann.

