---
title: HTML Grundkurs
order: 30
---
Wir werden HTML die aktuelle Version verwendet. Die wichtigsten HTML-Tags (Links, Bilder,
Tabellen, Formulare) werden Sie bald auswendig können. Alle Details können Sie Intenet
nachschlagen.

HTML hat sich in den ca. 20 Jahren seines Bestehens weit entwickelt. Die Version 5 wurde im Jahr 2014 veröffentlicht, danach gab es keine neuen Nummern mehr.



Arbeitsablauf
---------
Der Arbeitsablauf beim Erstellen von HTML ist eine endlose Schleife:

1. Code im Editor eintippen
2. Abspeichern
3. Zum Browser wechseln
4. Neu Laden, das Ergebnis betrachten
5. meistens: nicht zufrieden mit dem Ergebnis sein, zurück zu 1.


Zeichensatz
-----------

HTML-Dateien bestehen aus reinem Text, in unserem Falle entweder aus Text im Format
ISO 8859-1 (Latin-1)  oder im Format utf-8. Mit Latin-1 ist man auf das
lateineische Alphabet mit westeuropäischen Sonderzeichen beschränkt - man kann
im selben Dokument nicht auch grieschische, hebräische, arabische, japanische
Zeichen darstellen.  Mit utf-8 hat man den gesamten Zeichensatz der Menschheit
zur Verfügung. Deswegen sollte man immer utf-8 verwenden.



![](/images/das-web-und-html/vscodeutf8.png)

So sieht das in Visual Studio Code aus wenn alles gut läuft:
VS Code glaubt dass die Datei als utf-8 speichern soll,
und der meta-tag im HTML Code sagt das auch.



Sonderzeichen
-------------

Sonderzeichen in HTML nennt man „character entities“. Sie haben
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


Folgende Character Entities gibt es zwar, aber man kann auch einfach die Umlaute und das scharfe ß direkt verwenden:

|Gewünschtes Zeichen | Character Entity|
|:--------:|:-------:|
|Ä                  | &amp;Auml;  |
|ä                  | &amp;auml;  |
|ß                  | &amp;szlig; |
{: class="table table-condensed table-bordered" style="width:auto"}

HTML-Tags
---------

Die gewünschte Formatierung des Textes wird mit HTML-Tags   angegeben

1.  Tags sind zwischen spitzen Klammern eingeschlossen (kleiner-gleich und größer-gleich Zeichen).
2.  Zu (fast) jedem "Anfangs-Tag" gibt es einen "End-Tag", der sich nur durch
den Schrägstrich vom Anfangs-Tag unterscheidet.  Z. B. `<p>`hier der Absatz`</p>`.
3.  In einer älterne Version von HTML mussten "alleinstehende" Tags mit einem Schrägstrich am Ende
geschrieben werden:  `<br />` Heute schreibt man diesen Tag als `<br>`
4.  Bei HTML ist die Groß- oder Kleinschreibung egal.


Whitespace
---------

Sogenannter "whitespace" - das sind mehrere Leerzeichen,
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
Bild  in die Seite einfügt. Die wichtigsten Attribute von
`<img>` sind `src`   (von Source = Quelle),  `alt`     (Alternative
Darstellung, Ersatztext), und `loading`.

* `loading="eager"` - das Bild wird auf jeden Fall sofort geladen
* `loading="lazy"` - das Bild wird erst geladen, wenn es in den sichtbaren Bereich scrollt

<htmlcode>
<img src="neu.svg" alt="Das ist neu!" loading="lazy">
</htmlcode>

Es ist egal, in welcher Reihenfolge Sie die Attribute schreiben.

Der Wert eines Attributes wird in Anführungszeichen geschrieben.
Wenn man keine Anführungszeichen schreibt, endet der Wert beim nächsten Leerzeichen
oder beim Ende des Tags:

<htmlcode>
<img alt="Das ist neu!" src="neu.svg">



__|__
<img
  src=neu.svg
  alt="Das ist Neu!">
</htmlcode>

ACHTUNG: ein häufiger Fehler ist es, das zweite Anführungszeichen zu vergessen:

<htmlcode>
  <img alt="Das ist neu!" src="neu.svg>
  Hier wäre noch Text
  <strong>aber er wird jetzt nicht mehr angezeigt!</strong>
</htmlcode>





Kompatibilität
--------------

Jeder Browser (egal ob Chrome, Firefox, Safari, Microsoft Internet Explorer, Opera,...) kann
jedes HTML-Dokument darstellen. Mit jedem Editor (egal ob Notepade, vim, WebStrom, VS Code,... ) kann jedes HTML-Dokument bearbeitet werden.

So soll das Web funktionieren.

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

Physische Tags geben die genaue Darstellung vor. Heute sind sie
durch Stylesheets
vollständig ersetzt, und sollte möglichst nicht mehr verwendet werden. Sie werden
diese Tag in „alten“ Dokumenten aber noch finden:

<htmlcode caption="veraltete Tags zum formatieren von Text">
Eine <b>fette</b> Sache                      (VERALTET!)
Eine <i>schräge</i> Sache                    (VERALTET!)
<font face="Arial">Text</font>               (VERALTET!)
<font color="red">rot</font>                 (VERALTET!)
</htmlcode>



Bilder
------

Bilder werden in separaten Dateien gespeichert, in der HTML-Datei erfolgt nur ein Verweis
auf die Datei des Bildes.  Als Attribut src   im img-Tag können Sie eine
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
jedes Bild einen Alternativtext  (Attribut alt ) an. Mit dem Firefox AddOn
„Web Developer“ kann man testen wie die Seite mit ALT statt Bildern aussieht.
Abbildung 10 zeigt die Verwendung dieses Features am Beispiel eines Wetterberichts.


![Abbildung 10: Wetterbericht mit Bildern und ohne Bilder (nur ALT-Texte)](/images/das-web-und-html/wetter-alt.png)

Als Datenformate für <img>-Bilder werden ein Vektor-Format und drei Pixel-Formate von vielen Browsern
unterstützt:

### svg

![Beispiel für ein SVG Bild: rechteck und kreis](/images/das-web-und-html/example-svg.svg)

Vektor-Format, das Bild kann beliebig groß oder klein dargestellt werden. Sehr beliebt für Icons, siehe auch [iconssear.ch](https://iconsear.ch/)


### gif

![Beispiel für ein gif Bild: Animation](/images/das-web-und-html/example-gif.gif)

(Bild: Internet Meme, Quelle unbekannt)

Das gif format ist sehr eingeschränkt: Es kann nur eine
palette von 255 Farben plus einer Transparenz-Farbe darstellen. Ein „animiertes
Gif“ enthält mehrere Bilder, die der Reihe nach angezeigt werden.

Heute werden statt des animierten gifs Videos verwendet, damit erreicht
man eine kleiner Dateigröße.

### jpg, webp, avif

![Beispiel für ein jpg Bild: verschiedene Kompression](/images/das-web-und-html/example-jpg.jpg)

(Bild von [Michael Gäbler und AzaToth](https://commons.wikimedia.org/wiki/File:Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png), CC-SA)

Ein jpeg kann Millionen von Farben darstellen, bietet variable Kompression aber keine Transparenz.
Besonders geeignet für Bilder mit Farbverläufen, z. B. Photos.

In Wirklichkeit würde man die Kompressionsrate nicht so extrem hoch
setzen wie im linken Drittel des Bildes.

Heute ist jpeg nicht mehr relevant, statt dessen werden webp oder avif verwenden.
Sie haben die gleichen Stärken wie jpg, komprimieren aber noch besser
und können auch alpha Transparenz und Animation.



### Weitere Formate

Es gibt noch viele weitere Bildformate die im Web benutzt werden können - mit etwas Aufwand.
Aber für den Anfang reichen svg und webp aus. Diese Formate werden sicher von allen
Browsern unterstützt.



Links
-----

Als Attribut href  des Link  können Sie eine absolute oder relative
URL angeben:

<htmlcode caption="Links">
Link zu Webseite (absolute URL)
    <a href="http://cnn.com">zu CNN</a>
Link zu Webseite im selben Ordner (relative URL)
    <a href="seite2.htm">mehr</a>
Link zu E-Mail Adresse
    <a href="mailto:aa@bb.cc">Mail</a>
Bild als Link
    <a href="seite2.htm"><img src="mehr.svg" alt="zur Seite 2"></a>
</htmlcode>

Gesamt-Struktur einer Webseite
------------------------------

Eine HTML Seite hat ein Grundgerüst   aus
`DOCTYPE`, `html`, `head` und `body`. Der erste Tag ist der `DOCTYPE`. Es folgt der `html`-Tag. Innerhalb des `html`-Tags gibt es erst
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


Achtung: es kann nur einen head und einen body geben, keine Wiederholungen!

Listen
------

Listen   werden mit zwei verschachtelten Tags
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

Um eine Tabelle   zu erzeugen
müssen Sie die Tags ´table´, ´tr´ (Table Row = Tabellenzeile) und ´td´ (Table Data)
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

HTML-Tabellen wurden früher in Webseiten für das Layout   der
Seite verwendet, diese Tabellenlayouts sind noch auf älteren Webseiten zu
finden.  Dazu noch ein Literaturhinweis:

[http://shouldiusetablesforlayout.com/](http://shouldiusetablesforlayout.com/)


Moderne Webseiten werden mit CSS-Layouts gestaltet.
Heute verwendet man Tabellen wirklich nur noch zur Darstellung von Tabellen.


Weitere Quellen
--------------

* [Characters, Symbols and the Unicode Miracle](http://www.youtube.com/watch?v=MijmeoH9LT4) YouTube Video von Computerphile
* [utf-8](https://de.wikipedia.org/wiki/UTF-8) in der deutschen Wikipedia

