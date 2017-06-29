---
title: DTD
order: 20
---

Eine Dokumenttypdefinition (DTD) wird für SGML und XML verwendet, um 
die Grammatik festzulegen.  Ein XML Dokument das einer DTD entspricht
heisst "gültig" (englisch: "valid").

Die DTD definiert den strukturellen Aufbau des Dokuments: welche Tags es gibt, wie diese verschachtelt werden können,
welche Attribute sie haben.  In frühen Versionen von HTML, wie z.B. HTML 3.2,
wurde diese DTD auch wirklich in der [HTML Spezifikation](http://www.w3.org/TR/REC-html32-19970114#dtd) angegeben.

Hier werden nicht alle Details der DTD-Syntax vorgestellt,
sondern nur die wichtigsten Regeln.

## Doctype

Ein XML-Dokument, das eine von mir geschriebene DTD verwendet,
verweist mittels des `DOCTYPE` auf das Wurzelelement und die Datei mit der DTD:

   `<!DOCTYPE root SYSTEM "FILENAME">`


In folgendem Beispiel heisst die Datei "serie.dtd", und das Wurzelelement
heisst ebenfalls `<serie>`:

<xml>
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE serie SYSTEM "serie.dtd">
<serie>
....
</serie>
</xml>


## Tags

Welche Tags verwendet werden wird mit dem `ELEMENT` Befehl in der DTD
festgelegt. [&rarr; XML: Element Type Declarations](http://www.w3.org/TR/2008/REC-xml-20081126/#elemdecls)

### Leeres Element

Ein allein stehender Tag (ohne Inhalt) wird wie folgt definiert:

<xml>
<!ELEMENT br EMPTY>
</xml>

Sie kennen den Break-Tag aus HTML. In einem XML-Dokument muss
er entweder mit einem zusätzlichesn Slash am Ende geschrieben werden `<br />`
oder mit einem Ende-Tag  `<br></br>`.  
Diese beiden Schreibweisen sind gleichbedeutend.

### Element mit Text-Inhalt

Wird ein Element als `(#PCDATA)` deklariert, dann kann
es nur reinen Text enthalten, aber keine weiteren Tags.

<xml>
<!ELEMENT option (#PCDATA)>
</xml>

So ist z.B. `<option>gr&uuml;n</option>` ein valider Tag (Entities sind erlaubt), 
aber `<option><b>nur</b> grün</option>` nicht, da Tags verboten sind.

### Kinder-Element ("Element Content")

Hat ein Tag nur Kinder-Elemente, aber keinen reinen Text als Inhalt,
dann spricht man von "Element Content". 

Für die Angabe von Kinder-Elementen gibt es dann eine
eigene kleine Sprache, mit der die Reihenfolge und Anzahl
der Kinder-Element festgelegt wird. Damit kann man
auch komplizierte Bedingungen zusammenbauen:

* Eine Liste von Kinder-Elementen mit einer fixen Reihenfolge: mit Kommas
* Eine Auswahl von Kinder-Elementen (entweder/oder): mit einem senkrechten Strich
* Eine beliebige Anzahl: mit einem Stern
* mindestens einmal: mit einem Plus
* Einmal oder Keinmal: mit einem Fragezeichen

ausserdem kann man noch Klammern verwenden - so wie man sie aus
mathematischen Ausdrücken kennt.

Ein paar Beispiele:

<xml>
<!ELEMENT html   (head, body) >
<!ELEMENT ul     (li)+        >
<!ELEMENT select (option)+    >
<!ELEMENT dl     (dt|dd)+     >
</xml>

Zeile 1: Für das `html`-Element wird festgelegt, dass es genau einen `head`-Element gefolgt von genau einem `body`-Element enthalten muss.
Keine anderen Tags, keine andere Reihenfolge, kein Text ist erlaubt.

Zeile 2 und 3: Der `ul` Tag muss mindestens einen bis beliebig viele `li` Tags enthalten - nichts anderes ist erlaubt. Gleiches gilt für den `select` und `option` Tag.

Zeile 4: Hier wird wieder das Plus-Zeichen verwendet, umd "mindestens eins bis beliebig viele" anzuzeigen. Diesmal bezieht sich das Plus aber auf die Auswahl in der Klammer: es kann also eine bliebige Kombination von `dt` und `dd` Tags sein.

### Gemischter Inhalt ("Mixed Content")

Hat ein Tag auch reinen Text als Inhalt, dann kann man
zwar noch einschränken welche Kinder-Elemente er enthält, man kann
aber keine Reihenfolge oder Anzahl mehr festlegen.

Die Regel beginnt dann immer mit `(#PCDATA |` und endet mit `)*`:

<xml>
<!ELEMENT p ( #PCDATA | a | ul | dl | b | i )*>
</xml>

Hier kann ein `p`-Tag also nur die Kinder-Tags 5 aufgeführten Kinder-Tags
enthalten, aber diese in beliebiger Reihenfolge und Anzahl, mit beliebigem
reinen Text dazwischen.

## Attribute

Welche Attribute ein Tag haben kann wird mit dem `ATTLIST` Befehl festgelegt. 
[&rarr; XML: Attribute-List Declarations](http://www.w3.org/TR/2008/REC-xml-20081126/#attdecls)

Dabei wird als erstes der Name des Elements angegeben, für den die Attribute
definiert werden.  Danach kommen Werte in 3er-Gruppen: immer Attributname, Attributtyp und
einen Default.

Hier ein Beispiel für ein Element `img` das zwei mögliche Attribute hat: `id` und `src`.

<xml>
<!ATTLIST img
  id       ID       #IMPLIED
  src      CDATA    #REQUIRED
>
</xml>

### Default

Beim dritte Wert in der Liste, der Default, gibt es vier Alternativen

* `#REQUIRED` bedeutet, dass das Attribut vorhanden sein muss
* `#IMPLIED` bedeutet, dass das Attribut optional ist, also weggelassen werden kann
* mit `#FIXED`, gefolgt von einem Wert  wird dieser als fixer Wert angegeben
* wird nur ein Wert angegeben, so ist dies der Defaultwert

<xml>
<!ATTLIST foo
  bar     CDATA #REQUIRED
  baz     CDATA #IMPLIED
  qux     CDATA "42"
  wibble  CDATA #FIXED "wobble"
>
</xml>

Ein korreter Tag wäre als `<foo bar='barbar' wibble='wobble'>`.  Ein XML Parser
würde aber zusätzlich noch das Attribut `qux` mit Wert `42` erkennen.

### Attributtypen: CDATA und Liste

* Der Typ `CDATA` steht für beliebige "Character Data"
* Mit runden Klammern kann eine Liste von möglichen Werten aufgeführt werden

<xml>
<!ATTLIST p
  title  CDATA      #IMPLIED
  dir    (ltr|rtl)  #IMPLIED
>
</xml>

Das Titel-Attribut kann einen bliebigen Text enthalten. Das Attribut
`dir` (für "direction", Schreib-Richtung) kann die Werte `ltr` ("left to right") und
`rtl` ("right to left") annehmen.  Beide Attribute können auch weggelassen werden.

(Beide Attribute gibt es in HTML wirklich.)

### Attributtypen für IDs

* Der Typ `ID` verlangt einen (dokument-weit) eindeutigen Identifier als Wert.
* Der Typ `IDREF` verweist auf einen solchen Identifier
* Der Typ `IDREFS` verweist auf mehrere solchen Identifier

<xml>
<!ATTLIST person
  id     ID     #REQUIRED
  kinder IDREFS #IMPLIED
>
</xml>

Mit dieser DTD kann man Personen und Ihre Kinder definieren, z.B. das Haus Stark:

<xml>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE leute SYSTEM "leute.dtd">
<leute>
  <person id="rickard" kinder="ned">Rickard Stark</person>
  <person id="ned" kinder="jon robb sansa arya brandon rickon">Ned Stark</person>
  <person id="catelyn" kinder="robb sansa arya brandon rickon">Catelyn Tully</person>
  <person id="jon">Jon Snow</person>
  <person id="robb">Robb Stark</person>
  <person id="sansa">Sansa Stark</person>
  <person id="arya">Arya Stark</person>
  <person id="brandon">Brandon Stark</person>
  <person id="rickon">Rickon Stark</person>
</leute>
</xml>

## Prüfen von validem XML

Wie kann man überprüfen, ob eine XML-Datei eine DTD erfüllt?

Zum Beispiel auf der Kommandozeile mit `xmllint --valid beispiel.xml`.
Dieses Programm prüft die Wohlgeformtheit und die Validtät.

Zum Beispiel in einem Editor wie "Netbeans":

![XML Prüfung mit netbeans](/images/xml-valid-netbeans.png)
