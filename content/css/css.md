---
title: Syntax von CSS
order: 20
---


Die CSS Spezifikation wird von der W3C herausgegeben: [https://www.w3.org/Style/CSS](https://www.w3.org/Style/CSS/#specs).


### Ein Beispiel

<css caption="Die Datei fh.css">
h1,h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: lightblue;
}
body {
  margin-left: 150px;
  background-color: white;
}
p {
  text-align: justify;
}
</css>

§

![](/images/css/rules-declarations.png)

Sie können beliebig Zeilenumbrüche und Whitespace einfügen, beides wird ignoriert.

Eine Stylesheet-Regel („Rule“) besteht aus einem Selektor gefolgt von einer geschwungenen Klammer die eine oder mehrere Deklarationen enthalten kann.

Der einfachste Selektor besteht aus dem Namen eines einzelnen HTML-Tags. Es gibt aber auch komplexere Selektoren, wie im Beipiel "h1,h2".

Eine Deklaration besteht immer aus einem property, gefolgt von einem doppelpunkt, einem Wert und einem Strickpunkt. Der Wert kann wie im Beispiel bei der ersten Deklaration gezeigt komplex aufgebaut sein.

### Style für mehrere Seiten

Die Seiten einer gesamten Website haben meist ein einheitliches Aussehen. Dies können Sie erreichen, wenn Sie für jede Webseite dieselbe CSS Datei verwenden. Dazu müssen Sie in jede HTML-Datei die CSS Datei mittels folgender Anweisung einbinden:

<htmlcode>
<link rel="stylesheet" href="mystyle.css">
</htmlcode>

Diese Zeile sollte innerhalb des head Bereiches der HTML-Datei stehen (da sonst die Darstellung der Seite verzögert werden kann). `mysyle.css` könnte etwa so aussehen wie im vorigen Beispiel.

### Style für eine Seite

Wenn Sie einen Style nur auf einer einzigen Webseite verwenden, können Sie die Style-Angaben direkt in die HTML-Datei schreiben, und zwar innerhalb des head Bereiches.

<htmlcode>
<style>
  h1,h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: lightblue
  }
</style>
</htmlcode>

### Style für einen Tag

Style Angaben können auch direkt in einen einzelnen HTML-Tag geschrieben werden. In diesem Fall gilt die Angabe nur für diesen ganz speziellen Tag.

Um einen style für einen einzelnen Tag zu definieren, müssen Sie innerhalb des Tags das Attribut style verwenden.

<htmlcode>
<h1 style="color:red; text-align:center;">Rote, zentrierte Überschrift</h1>
</htmlcode>

### Gültigkeitsbereich einer Style Angabe

Sie können innerhalb einer HTML-Datei sowohl eine externe Style Sheet Datei verwenden (eingebunden durch eine entsprechende Anweisung im head Bereich) als auch eine lokale Definition im head Bereich angeben, als auch spezielle Angaben für einzelne Tags erstellen.

Was passiert nun, wenn die verschiedenen Style-Deklarationen sich widersprechen? Die Angaben bei einem einzelnen Tag haben immer Vorrang. danach folgen die lokalen Angabe im head Bereich und erst zum Schluß die externe Datei. „Je näher beim Tag desto stärker wirkt es.“

## Klassen, IDs, SPANs und DIVs

Wenn Sie mit den Style-Angaben den p-Tag umformatieren, betrifft das alle p-Tags in der Webseite.

<css>
p { background-color: #ddd; }
</css>


### Klassen

Oft möchten Sie aber ein oder zwei Absätze anders formatieren als die anderen Absätze. Zu diesem Zweck können Sie sich im Stylesheet noch weitere Formatvorlagen - sogenannte "Klassen" - definieren:

<css>
.wichtig { color: red; }
</css>

Diesen Klassen können Sie eigene Namen geben (hier „wichtig“), vor dem Klassennamen steht immer ein Punkt. 

§

Jedem beliebigen HTML-Tag können Sie nun diese Klasse zuweisen. Dies geschieht mit dem Attribut class.

<htmlcode>
<p>Eine <b class="wichtig">ganz wichtige</b> Meldung</p>
<p class="wichtig">Ein ganz wichtiger Absatz</p>
<p>Ein ganz normaler Absatz</p>
</htmlcode>

Zur „normalen“ Wirkung des HTML-Tags kommt nun die Formatierung durch die Klasse hinzu: der Text „ganz wichtige“ und „Ein ganz wichtiger Absatz“ ist in diesem Beispiel also rot. Eine Klasse kann also mehrmals in einem Dokument verwendet werden. Ein Tag kann mehrere Klassen erhalten, diese werden durch Leerzeichen getrennt im class-Attribut angeführt.

<htmlcode>
<p class="wichtig eilmeldung">Ein wichtiger Absatz als Eilmeldung</p>
</htmlcode>

### ids

Zur eindeutigen Kennzeichnung von Tags wird das Attribut id verwendet:

<htmlcode>
<p>Eine <b class="wichtig">ganz wichtige</b> Meldung</p>
<p class="wichtig">Ein ganz wichtiger Absatz</p>
<p id="impressum">Das einzige Impressum dieser Seite</p>
</htmlcode>

Auf diese eindeutigen IDs kann in CSS mit der Raute (englisch: „hash sign“) referenziert werden:

<css>
#impressum { background-color: #DDD; }
</css>

### Kombinationen

Sowohl Klassen als auch IDs können mit Tags kombiniert werden um einen komplexen Selektor zu bilden, aber das macht nur bei Klassen wirklich Sinn:

<css>
.wichtig { font-size: 20px; }     /* alle Tags mit der Klasse wichtig     */
p.wichtig { color: red;    }     /* nur der Tag p mit der Klasse wichtig */
b.wichtig { color: yellow; }    /* nur der Tag b mit der Klasse wichtig */

#impressum { background-color:#ddd; }  /* nur der Tag mit der id #impressum */
p#impressum { background-color:#ddd; } /* nur der p-Tag mit der id #impressum */

b#impressum { background-color:#ddd; } /* nix! */
</css>

### div und span

Es wird öfter vorkommen, dass Sie einem Bereich eine bestimmte Klasse zuweisen möchten, ohne dass ein passender Tag vorhanden ist. Hier können Sie die beiden Tags &lt;span&gt; und &lt;div&gt; verwenden, die beide selber kaum Eigenschaft aufweisen. &lt;span&gt; eignet sich für die Verwendung in Fließtext, &lt;div&gt; ist ein blockbildender Tag.

<htmlcode>
<p>Es gibt hier ganz <span class="wichtig">besonders interessante</span> Meldungen.</p>
</htmlcode>

Die Worte „besonders interessante“ erscheinen rot.

Aber meist hat man  das Bedürfnis nach "styling" ja, weil man eine bestimmte
Bedeutung übermitteln will .... für die es schon einen HTML-Tag gibt. Besser wäre hier also
die Verwendung des Tags `em` der für "Betonung" steht.

<htmlcode>
<p>Es gibt hier ganz <em class="wichtig">besonders interessante</em> Meldungen.</p>
</htmlcode>



## Maßeinheiten in Stylesheets

Für Längen- und Größen-Angaben gibt es viele Maßeinheiten:

- vw (Hundertstel der Viewport-Breite),
- vh (Hundertstel der Viewport-Höhe),
- px (Pixel),
- rem (Höhe des Großbuchstaben M im root-Element),
- em (Höhe des Großbuchstaben M im Eltern-Element),
- ex (Höhe des Kleinbuchstaben x im Eltern-Element),
- ch (Breite eines Buchstaben)
- % (Prozent),
- cm (Zentimeter),
- in (Inch)
- und noch [viele mehr](https://developer.mozilla.org/de/docs/Web/CSS/length)

Einige davon sind relativ (em = relativ zur Schriftgröße, vw = relativ zur Auflösung des aktuellen Ausgabegeräts), andere absolut (Centimeter, Inch). Die absoluten Angaben kann man nur bei der Ausgabe auf Papier sinnvoll verwenden. [Demo](/images/css-masse.html)

### Farben

Farbangaben können auf mehrer Arten erfolgen: mit einigen Farbwörtern (red, green,…) oder mit der Angabe von rot-, grün- und blau-Anteil in verschiedenen Schreibweisen:

- Dezimal `rgb(16,0,255)`,
- hexadezimal `#10F` oder
- zweistellig hexadezimal `#1000FF`.

Zusätzlich ist auch die Angabe eines Alpha-Wertes möglich: Hier ein Braun-Ton der nur zu 20% deckend ist, und zu 80% den darunter liegenden Content bzw. das Hintergrundbild durchscheinen lässt:

- `rgba(153, 134, 117, 0.2);`

§

Tool-Tipp: Mit den Developer Tools in Firefox kann man die Farben einer Webseite auslesen:

![Abbildung 20: Colorzilla Pipette zum auslesen einer Farbe und Colorzilla Menü zum kopieren des Codes](/images/css/pipette.png)

### URLs

Wird in einem Stylesheet auf eine URL verwiesen (z.B. auf die URL eines Hintergrundbildes), dann kommt die Schreibweise

- `url(http://absolute.com/bild.gif)` oder
- `url(relativ/bild.gif)`

zum Einsatz. Achtung: die relative URL bezieht sich auf das Stylesheet (nicht die HTML-Datei in der es verwendet wird).

### Variablen in CSS

Für Werte die mehrmals verwendet werden kann man Variablen setzen:

<css>
:root {
  --important-color: darkcyan;              /* Variable setzen */
  --text-on-important-color: darkcyan;
}

h1 {
color: var(--important-color);              /* Variable verwenden */
}
nav {
background-color: var(--important-color);
color: var(--text-on-important-color);
}
</css>
