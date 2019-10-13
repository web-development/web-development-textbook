---
title: HTML Grundkurs
order: 30
---
Wir werden HTML in der Version 5 verwendet. Die wichtigsten HTML-Tags (Links, Bilder, 
Tabellen, Formulare) werden Sie bald auswendig können. Alle Details können Sie Intenet
nachschlagen.

HTML hat sich in den ca. 20 Jahren seines Bestehens weit entwickelt. Die Version 5 wurde im Jahr 2014 veröffentlicht und wird heute von allen Browsern unterstützt. 

§

In den Jahren davor wurde auch XHTML neben HTML verwendet. Das X von XHTML 
steht für die Kompatibilität mit XML  <!-- XE "XML" -->  . Die Dateien haben dabei weiterhin die 
Endung .htm oder .html (nur sehr selten oder .xhtm, .xhtml). Im Unterschied zu HTML war 
XHTML strenger in der Schreibweise. Am Web finden Sie sowohl Tutorials zu HTML als 
auch zu XHTML – lassen Sie sich davon nicht verwirren, sondern lernen
sie nur aktuelle HTML5.


Arbeitsablauf
---------
Der Arbeitsablauf beim Erstellen von HTML ist eine endlose Schleife:

1. Code im Editor eintippen
2. Abspeichern
3. Zum Browser wechseln
4. Neu Laden, das Ergebnis betrachten
5. meistens: nicht zufrieden mit dem Ergebnis sein, zurück zu 1.

Es gibt verschiedene Online-Tools um HTMl auszuprobieren:

* [Slowparse](http://toolness.github.com/slowparse/demo/) erklärt die Struktur von HTML, hilft Fehler zu finden

Zeichensatz
-----------

HTML-Dateien bestehen aus reinem Text, in unserem Falle entweder aus Text im Format 
ISO 8859-1 (Latin-1)  oder im Format utf-8. Mit Latin-1 ist man auf das
lateineische Alphabet mit westeuropäischen Sonderzeichen beschränkt - man kann
im selben Dokument nicht auch grieschische, hebräische, arabische, japanische
Zeichen darstellen.  Mit utf-8 hat man den gesamten Zeichensatz der Menschheit
zur Verfügung. Mein Empfehlung lautet: immer utf-8 verwenden.

 
![Auswahl des Charactersets „Unicode“  ](/images/das-web-und-html/charset-auswahl.png)

Diese Abbildung zeigt wie die Charactersets in Windows- und Mac-Programmen
dargestellt werden. Links im Bild, in Notepad, wird ISO 8859-1 als ANIS
bezeichnet. Rechts im Bild, im Mac-Programm Textwrangler, ist die Bezeichnung
klarer. 

Sonderzeichen
-------------

Sonderzeichen in HTML nennt man „character entities  <!-- XE "character entities" -->  “. Sie haben 
die From `&entityname;`

Folgende Character Entities müssen Sie verwenden:

|Gewünschtes Zeichen | Character Entity|
|:--------:|:-------:|
| &lt;                 | &amp;lt;  |
| &gt;                 | &amp;gt;  |
| &amp;                 | &amp;amp; |
| "                 | &amp;quot;  |
| '                 | &amp;apos;  |
{: class="table table-condensed table-bordered" style="width:auto"}


Folgende Character Entities können Sie vermeiden, indem Sie das Zeichen selbst im Code 
verwenden:

|Gewünschtes Zeichen | Character Entity|
|:--------:|:-------:|
|Ä                  | &amp;Auml;  |
|ä                  | &amp;auml;  |
|ß                  | &amp;szlig; |
{: class="table table-condensed table-bordered" style="width:auto"}

HTML-Tags
---------

Die gewünschte Formatierung des Textes wird mit HTML-Tags  <!-- XE "Tag" -->  angegeben

1.  Tags sind zwischen spitzen Klammern eingeschlossen (kleiner-gleich und größer-gleich Zeichen).
2.  Zu (fast) jedem "Anfangs-Tag" gibt es einen "End-Tag", der sich nur durch
den Schrägstrich vom Anfangs-Tag unterscheidet.  Z. B. `<p>`hier der Absatz`</p>`. 
3.  Nur in XHTML müssen "alleinstehende" Tags mit einem Schrägstrich am Ende
geschrieben werden:  `<br />` In HTML5 schreibt man diesen Tag (wieder) als `<br>`
4.  In XHTML werden Tags immer klein geschrieben, bei HTML ist  die Groß- oder Kleinschreibung egal. 


Whitespace 
---------

Sogenannter "whitespace  <!-- XE "whitespace" -->  " - das sind mehrere Leerzeichen, 
Tabulatoren und Zeilenumbrüche hintereinander – wird vom Browser völlig ignoriert. Ob Sie 
also in Ihrer HTML-Datei ein Leerzeichen oder 7 Leerzeilen einfügen macht keinen 
Unterschied. (gar kein Leerzeichen oder ein Leerzeichen macht schon einen Unterschied) 
Die folgenden beiden Dokumente sind also äquivalent:

<htmlcode caption="Zeilenumbruch im Code ist egal, Darstellung gleich">
    <p>Halli 
    Hallo</p>


__|__
    <p>
    Halli
    Hallo
    </p>
</htmlcode>

Zeilenumbruch
------------

Nur die Tags beeinflussen die Darstellung der Webseite. Sie müssen den Tag 
 `<br>` verwenden um einen Zeilenumbruch  auf der Webseite zu erzwingen
– dies ist aber nur selten sinnvoll, da der Browser einen automatischen Zeilenumbruch 
durchführt, um den Text im vorhandenen Platz optimal darzustellen.

Attribute
---------

Manche Tags können Attribute enthalten. Ein Beispiel ist der Tag `<img>` der ein 
Bild  in die Seite einfügt (Englisch: Image). Die wichtigsten Attribute von
`<img>` sind `src`   (von Source = Quelle) und `alt`     (Alternative
Darstellung, Ersatztext). 

<htmlcode>
<img src="neu.svg" alt="Das ist neu!">
</htmlcode>

Es ist egal, in welcher Reihenfolge Sie die Attribute schreiben.


Der Wert eines Attributes muß in XHTML immer in Anführungszeichen geschrieben
werden, in HTML kann man die Anführungszeichen weglasse, dann endet der Wert
beim nächsten Leerzeichen.

<htmlcode>
<img alt="Das ist neu!" src="neu.svg">



__|__
<img 
  alt="Das ist Neu!" 
  src="neu.svg" 
  width=50 height=15>
</htmlcode>

ACHTUNG: ein häufiger Fehler ist es, das zweite Anführungszeichen zu vergessen:

<htmlcode>
  <img alt="Das ist neu!" src="neu.svg">
</htmlcode>





Kompatibilität 
--------------

Jeder Browser (egal ob Chrome, Firefox, Safari, Microsoft Internet Explorer, Opera,...) kann 
jedes HTML-Dokument darstellen. Mit jedem Editor (egal ob Notepade, vim, Dreamweaver, WebStrom, Eclipse,... ) kann jedes HTML-Dokument bearbeitet werden. 

So soll das Web funktionieren.  

Siehe auch [dowebsitesneedtolookexactlythesameineverybrowser.com](http://dowebsitesneedtolookexactlythesameineverybrowser.com/)

Probleme mit nicht kompatiblen Seiten kann man auf [webcompat](https://webcompat.com/) melden.

### Unbekannte Attribute


Neue Attribute Tags, die z. B. ein 
Browser nicht erkennt, sind zu ignorieren – es gibt 
**keine Fehlermeldungen**!

Das Attribut bli, welches nicht zu HTML gehört, also kein Browser kennt, wird wie andere 
unbekannte Attribute einfach ignoriert. 


<htmlcode>
<img  alt="Das ist Neu!"
    bli="bla, blo" 
    src="neu.svg"
    >
</htmlcode>

### Unbekannte Tags


Wenn das W3C in HTML Version 21 beispielsweise den neuen Tag `<jump>` (hüpfenden Text) 
einführen würde, können Sie diesen Tag auf Ihrer Webseite verwenden. Der Text würde 
jedoch nur in den neuesten Versionen der Browser (die schon die Version 21 kennen) 
hüpfend dargestellt. In älteren Browsern wird der Tag &lt;jump&gt; ignoriert:

<htmlcode caption="Neuer Tag in neuem Browser, Interpretation in altem Browser">
<p>Dies ist meine erste 
<jump>supercoole</jump> 
Webseite!!!! </p>
__|__
<p>Dies ist meine erste 
supercoole 
Webseite!!!!</p>
</htmlcode>



Text formatieren
----------------

Die in diesem Kapitel gezeigten Tags finden Sie auch
auf der [Demo Seite](/images/das-web-und-html/text.html).


Wir unterscheiden zwischen HTML-Tags die Blöcke definieren, und solchen die das nicht tun,
genannt "inline" Tags. 
Blockbildende Tags beanspruchen immer einen rechteckigen Bereich bei der Ausgabe, inline 
Tags tun das nicht.



<div class="resizable">
<p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.  Ich bin ein blockbildender Tag, nämlich ein Pargraph P. I am a block level element - p for paragraph. <em style="background-color: red;">Und ein em
in der Mitte. And some inline content  right here.</em> Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.
</p>

<p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.  Ich bin ein blockbildender Tag, nämlich ein Pargraph P.  <em style="background-color: red;">Und ein em
in der Mitte. And some inline content  right here.</em> Ich bin ein blockbildender Tag, nämlich ein Pargraph P.

</p>
<p style="background-color:#ddd">Ich bin ein blockbildender Tag, nämlich ein Pargraph P. I am a block level element - p for paragraph. <em style="background-color: red;">Und ein em
in der Mitte. And some inline content  right here.</em> Ich bin ein blockbildender Tag, nämlich ein Pargraph P.
I am a block level element - p for paragraph.
</p>
</div>


In diesem Beispiel sieht man drei Absätze (blockbildene p-Tags, grau eingefärbt), die
jeweils einen em-Tag (inline-tag, rot eingefärbt) enthalten.
Die inline-Tags werden je nach Platzbedarf umgebrochen und auf mehrere Zeilen verteilt. 
Die blockbildenden Tags bleiben immer Rechtecke.

### Blockbildende Tags für Text

Der Inhalt einens Absatzes (Paragraph) `p` wird
je nach Schriftgröße und vorhandenem Platz neu umgebrochen.
Der Zeilenumbruch ist also nicht aufgabe des Autors, der Autorin,
sondern des Webbrowsers.

<htmlcode caption="Normaler Fließ-Text">
<p>Text text text, text text. Text 
text text, text text. Text text 
text, text text. Text und text text, 
text text. </p>
</htmlcode>

In folgendem Beispiel wird mit dem Attribut `style` ein bisschen CSS verwendet. 
CSS ist für die Darstellung von
HTML zuständig. Hier wird der Text im Absatz zentriert.

<htmlcode caption="Zentrierter Text">
<p style="text-align:center;">Text 
Zentrierter text text, text text. Text text 
text, text text. Zentrierter text text text, 
text text. Text und text text, text 
text. </p>
</htmlcode>

§

Überschriften werden für die Strukturierung des Textes verwendet,
mehr als 3 Ebenen braucht man selten:

<htmlcode caption="Überschriften">
<h1>Überschriftstext</h1>
<h2>Überschriftstext</h2>
<h3>Überschriftstext</h3>
</htmlcode>

Der `nav` Tag dient zur Auszeichnung von
Navigations-Menüs. Achtung: dieser Tag hat erst mal
keine sichtbare Wirkung.

<htmlcode caption="Bereich mit Navigations-Menü, Links">
<nav>  
   <a href="index.html">Home</a> 
   .... 
</nav>
</htmlcode>

Auch die folgenden drei Tags haben keine sichtbare Wirkung,
sondern dienen erst mal nur zu Strukturierung des Dokuments.

<htmlcode caption="Weitere Tags zur Strukturierung der Seite">
<header> .... </header>
<footer> .... </footer>
<aside> .... </aside>
</htmlcode>

Für umfangreiche Zitate gibt es einen blockbildenden Tag:

<htmlcode caption="Block-Zitat (eingerückt)">
<blockquote>Alle meine Entchen<br> 
schwimmen auf dem See</blockquote>
</htmlcode>

### Nicht-Blockbildende Tags für Text 

Diese müssen Sie innerhalb eines Blocks verwenden. Diese Formate werden unterschieden 
in logische und physische Elemente. 

Die logischen Tags geben die genaue Darstellung nicht vor. 

<htmlcode caption="inline Tags zum formatieren von Text">
Eine <strong>sehr wichtige</strong> Sache     (stark betont, meist fett)
und eine <em>interessante</em> Sache.         (betont, meist kursiv)
</htmlcode>

§

Physische Tags geben die genaue Darstellung vor. Das sind eigentlich „altmodische 
Tags“,  besonders der font-Tag wurde schon um das Jahr 2000 herum durch Stylesheets 
vollständig ersetzt, und sollte möglichst nicht mehr verwendet werden. Sie werden 
diese Tag in „alten“ Dokumenten aber noch finden:

<htmlcode caption="veraltete Tags zum formatieren von Text">
Eine <b>fette</b> Sache                      (VERALTET!)
Eine <i>schräge</i> Sache                    (VERALTET!)
<font face="Arial">Text</font>               (VERALTET!)
<font color="red">rot</font>                 (VERALTET!)
</htmlcode>

Heute verwendet man CSS im `style`-Attribut statt dessen:

<htmlcode caption="veraltete Tags zum formatieren von Text">
<span style="font-family:Arial;">Text</span> (aktuelle Schreibweise)
<span style="color:red;">rot</span>          (aktuelle Schreibweise)
</htmlcode>

Bilder
------

Bilder werden in separaten Dateien gespeichert, in der HTML-Datei erfolgt nur ein Verweis 
auf die Datei des Bildes.  <!-- XE "Bild" --> Als Attribut src  <!-- XE "src" -->   im img-Tag können Sie eine 
absolute oder relative URL angeben:

<htmlcode caption="Bilder">
<img src="http://www.google.at/intl/de_at/images/logo.svg" alt="Google">  
<img src="neu.svg"> 
<img src="10prozent.svg" alt="jetzt 10% verbilligt!"> 
    (mit Ersatztext, weil das Bild wichtige Information enthält)
<img src="zierleiste.svg" alt=""> 
    (ohne Ersatztext, weil das Bild zur zur Dekoration dient)
<img src="neu.svg" style="float:left;" alt="neu"> 
    (Bild nach links, Text fließt rechts vorbei)
</htmlcode>

Für Blinde, Suchmaschinen, Browser die keine Bilder darstellen können, u.s.w. gibt man für 
jedes Bild einen Alternativtext  <!-- XE "Alternativtext" -->   (Attribut alt  <!-- XE "alt" -->  ) an. Mit dem Firefox AddOn 
„Web Developer“ kann man testen wie die Seite mit ALT statt Bildern aussieht. 
Abbildung 10 zeigt die Verwendung dieses Features am Beispiel eines Wetterberichts.
 
 
![Abbildung 10: Wetterbericht mit Bildern und ohne Bilder (nur ALT-Texte)](/images/das-web-und-html/wetter-alt.png)

Als Datenformate für <img>-Bilder werden ein Vektor-Format und drei Pixel-Formate von vielen Browsern 
unterstützt:

### svg

![Beispiel für ein SVG Bild: rechteck und kreis](/images/das-web-und-html/example-svg.svg)

Vektor-Format, das Bild kann beliebig groß oder klein dargestellt werden.  


### gif

![Beispiel für ein gif Bild: Animation](/images/das-web-und-html/example-gif.gif)

(Bild: Internet Meme, Quelle unbekannt)

Palette von 255 Farben plus einer Transparenz-Farbe (kein Alpha). Ein „animiertes 
Gif“ enthält mehrere Bilder, die der Reihe nach angezeigt werden . 

Wurde früher für Bilder mit klaren Kanten, einfärbigen Flächen, wenigen 
Farben verwendet, z. B. Comics, Logos.  Das macht man heute mit SVG.
So bleiben nur die animierten gifs als Anwendungfall, und selbst die werden
oft durch Video ersetzt.


### jpg

![Beispiel für ein jpg Bild: verschiedene Kompression](/images/das-web-und-html/example-jpg.jpg)

(Bild von [Michael Gäbler und AzaToth](https://commons.wikimedia.org/wiki/File:Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png), CC-SA)

Millionen von Farben, variable Kompression, keine Transparenz. 
Besonders geeignet für Bilder mit Farbverläufen, z. B. Photos.   

In Wirklichkeit würde man die Kompressionsrate nicht so extrem hoch
setzen wie im linken Drittel des Bildes.

Die Variante "progressive jpg" macht die Wartezeit beim Laden des Bildes interessanter:



### png

![Beispiel für ein PNG Bild: Würfel mit Alpha-Transparnz](/images/das-web-und-html/example-png.png)

(Bild von [Ed g2s](https://commons.wikimedia.org/wiki/File:PNG_transparency_demonstration_1.png), CC-SA)
Weniger Kompression als JPG, aber Alpha-Transparenz. 


### Weitere Formate

Es gibt noch viele weitere Bildformate die im Web benutzt werden können - mit etwas Aufwand.
Aber für den Anfang reichen svg, gif, jpg und png aus. Diese Formate werden sicher von allen
Browsern unterstützt. 



§

Ideal wäre, das Format auszuwählen, in dem das Bild nichts an Qualität verliert, und die 
Dateigröße möglichst gering ist. 

Weitere Arten Bilder zu erstellen werden wir später genauer betrachten: Mit
responsive images kann man verschieden große Bilder für verschiedene
Ausgabegeräte anbieten. Mit dem 
canvas-Tag und Javascript kann man Bilder zeichnen. 


Links
-----

Als Attribut href  <!-- XE "href" -->   des Link  <!-- XE "Link" -->  können Sie eine absolute oder relative 
URL angeben:

<htmlcode caption="Links">
Link zu Webseite (absolute URL)
    <a href="http://cnn.com">zu CNN</a>
Link zu Webseite im selben Ordner (relative URL)  
    <a href="seite2.htm">mehr</a>
Link zu E-Mail Adresse
    <a href="mailto:aa@bb.cc">Mail</a>
Bild als Link
    <a href="seite2.htm"><img src="mehr.svg"alt="zur Seite 2"></a>
</htmlcode>

Gesamt-Struktur einer Webseite
------------------------------

Eine HTML Seite hat ein Grundgerüst.  <!-- XE "Doctype" -->    <!-- XE "head" -->    <!-- XE "body" -->   aus 
`DOCTYPE`, `html`, `head` und `body`. Der erste Tag ist der `DOCTYPE`, er gibt die Version von 
HTML an, die verwendet wird. Es folgt der `html`-Tag. Innerhalb des `html`-Tags gibt es erst 
einen `head` und dann einen `body`-Tag – nicht mehr und nicht weniger.
Hier am Beispiel von HTML5: 

<htmlcode caption="Grundgerüst eines HTML5 Dokuments">
<!DOCTYPE HTML> 
<html>  
<head>  
    <meta charset="utf-8">  
    <title>Eine Webseite</title>  
</head> 
<body> 
    Hier die Tags, die Sie schon kennen  
</body> 
</html>
</htmlcode>

Bei XHTML ist der DOCTYPE sehr viel komplizierter. Der meta-Tag für die Auswahl des 
Charactersets ist ebenfalls komplizierter.

<htmlcode caption="Grundgerüst eines XHTML Dokuments">
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Eine Webseite</title>
</head>
<body>
     Hier die Tags, die Sie schon kennen.
</body>
</html>
</htmlcode>

Achtung: es kann nur einen head und einen body geben, keine Wiederholungen!

Listen
------

Listen  <!-- XE "Liste" -->    <!-- XE "ul" -->    <!-- XE "ol" -->    <!-- XE "li" -->   werden mit zwei verschachtelten Tags 
gebaut: der li-Tag für den einzelnen Listen-Punkt, und der ol- oder ul-Tag für die gesamte 
Liste. 

    <ul> 
        <li>punkti</li> 
        <li>punkti</li> 
    </ul>

    <ol> 
      <li>eins</li> 
      <li>zwei</li> 
      <li>drei</li> 
    </ol>

Tabellen 
--------

Um eine Tabelle  <!-- XE "Tabelle" -->    <!-- XE "table" -->    <!-- XE "tr" -->    <!-- XE "td" -->    <!-- XE "th" -->   zu erzeugen 
müssen Sie die Tags ´table´, ´tr´ (Table Row = Tabellenhzeile) und ´td´ (Table Data) 
richtig ineinander verschachteln

    <table style="border-collapse:collapse;"> 
      <tr> 
        <td>Freitag</td> 
        <td>Samstag</td> 
        <td>Sonntag</td> 
      </tr> 
      <tr> 
        <td>lernen</td> 
        <td>lernen</td> 
        <td>lange schlafen</td> 
      </tr> 
    </table>

Der Rahmen der Tabelle ist normalerweise unsichtbar, mit einer Zeile CSS wird er hier auf 
sichtbar geschalten. 

    <style>td {  border:2px #ddd solid; padding: 5px; }</style>

HTML-Tabellen wurden früher in Webseiten für das Layout  <!-- XE "Layout:mit Tabellen" -->   der 
Seite verwendet, diese Tabellenlayouts sind noch auf älteren Webseiten zu
finden.  Dazu noch ein Literaturhinweis:

[http://shouldiusetablesforlayout.com/](http://shouldiusetablesforlayout.com/)


Moderne Webseiten werden mit CSS-Layouts gestaltet.
Heute verwendet man Tabellen wirklich nur noch zur Darstellung von Tabellen. 


Weitere Quellen
--------------

* [Characters, Symbols and the Unicode Miracle](http://www.youtube.com/watch?v=MijmeoH9LT4) YouTube Video von Computerphile
* [utf-8](https://de.wikipedia.org/wiki/UTF-8) in der deutschen Wikipedia

