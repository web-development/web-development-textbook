---
title: Regular Expressions
order: 70
---

Regular Expressions sind eine kleine "Programmiersprache in der Programmiersprache",
eine besondere Schreibweise die es erlaubt in Strings nach Mustern zu suchen
und Ersetzungen vorzunehmen.

§

Mit Regular Expressions kann man die Welt retten:

![](/images/regex-hero.png)

Basierend auf [http://xkcd.com/208/](http://xkcd.com/208/) von Randall Munroe - verändert und verwendet unter der [CC-BY-NC](https://creativecommons.org/licenses/by-nc/2.5/) Lizenz

§

Regular Expressions sind keine Besonderheit von Javascript.
und die meisten Programmiersprachen bieten Regular Expressions an. Egal ob Sie also mit vi, grep, mod_rewrite,
Javascript, C++ oder Ruby arbeiten, alles was Sie über Regular Expressions lernen
zahlt sich aus!

Auch in Kommandozeilne Befehlen (vi, sed) und Editoren gibt es Regular Expressions, z.B. in Visual Studio Code:

![](/images/advanced-javascript/vscode.png)

Vielleicht kennst Du Regular Expressions also schon? Wie schätzt Du Dich selbst ein? ⭐? 🌧?

§

[Reguläre Ausdrücke](http://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck) sind
ein Konzept aus der Theoretischen Informatik. Diese ursprünglichen regulären Ausdrücke
bieten nur 3 Operatoren an. Bei der praktischen Umsetzung wurden mehr und mehr Operatoren hinzugefügt. Zur Unterscheidung nenne ich diese
erweiterten Ausdrücke mit dem englischen Begriff Regular Expressions oder kurz RegEx.

§

Regular Expressions nennt man oft auch Muster (en: patterns), man spricht von
Mustersuche (en: pattern matching). Wenn ein Muster auf ein Zeichenkette zutrifft
sagt man auf Halb-Englisch: "der Pattern matched".

## Verwendung von Regular Expressions

In Javascript gibt es viele verschiedene Schreibweise für Regular Expressions,
wir beginnen mit der Methode `match` des String-Objekts:

<javascript caption="match">
var s = "begreifen";
if( s.match(/greif/) ) {
  console.log("greif gefunden!");
}
</javascript>

Hier wird im String "begreifen" nach dem String "greif" gesucht.
Falls er gefunden wird (ja, wird er), gibt die Match-Methoden einen
Wert zurück, der als wahr gilt.

§

Für diesen einfachsten Fall wird man aber nicht eine RegEx verwenden,
sondern `indexOf`: diese Methode gibt -1 zurück falls der String
nicht gefunden wurde, und die Position der Fundstelle anderfalls.

<javascript caption="match">
var s = "begreifen";
if( s.indexOf('greif') > -1) {
  console.log("greif gefunden!");
}
</javascript>

## Zeichenkette

Die einfachste Regular Expression besteht aus einer
Zeichenkette, nach der "wörtlich" gesucht werden soll.
Falls die Zeichenkette irgendwo im String gefunden wird
ist die Suche erfolgreich:

<javascript>
/hallo/
</javascript>

<patterntester name="hallo" pattern="hallo">
hallo
aber hallo!
die hallobergrenze
halo
Hallo
</patterntester>

## Alternative

Mit dem senkrechten Strich `|` kann man Alternative definieren, er
entspricht also einem logischen "oder";

<javascript>
/en|sk|zh|us|uk/
</javascript>

<patterntester name="Länder" pattern="en|sk|zh|us|uk">
en
sk
uk
ukulele
esuu
</patterntester>

## Gruppieren und Merken

Mit runden Klammern kann man Teile der Regular Expression zusammen fassen:

<javascript>
/(de|fr)_(DE|CH)/
</javascript>

<patterntester name="locale" pattern="(de|fr)_(DE|CH)">
de_DE
fr_DE
de_CH
fr_CH
de_AT
it_CH
</patterntester>

Ausserdem stehen die von den Klammern gefundenen Teile des
Strings nach der Auswertung zur Verfügung: die Methode `match`
liefert ein Array als Rückgabewert, an der Stelle 0 ist der
gesamte gefundene String gespeichert, auf 1, 2, 3 der Reihe
nach die gefundnen Gruppen:

<javascript>
locale = "de_CH";
if( match = locale.match(/(de|fr)_(DE|CH)/ ) {
  console.log("gesamt:  " + match[0]);
  console.log("sprache: " + match[1]);
  console.log("land:    " + match[2]);
}
</javascript>

## Verankern

Mit den Zeichen Zirkumflex `^` und Dollar `$` kann die Suche am
Anfang bzw. Ende der Strings verankert werden.

<javascript>
/^Am Anfang war/
/dann leben sie noch heute.$/
/^Ganzer String$/
</javascript>

<patterntester name="countries" pattern="^(en|sk|us|uk)$">
en
sk
uk
ukulele
Maske
schlafen
</patterntester>

## Zeichen-Klassen

Wenn für ein Zeichen im String mehrere Zeichen zur
Auswahl stehen fasst man sie in einer "Zeichen-Klasse" (en: "character class") zusammen:

<javascript>
/[aeiou]/
</javascript>

Achtung! Eine Erwähnung der Zeichenklasse matched genau ein Zeichen im String, nicht mehrere Zeichen!

<patterntester name="hallos" pattern="hall[oia]">
halli
hallo
halla
halloi
hall
hallö
</patterntester>

## Zeichen-Klasse mit Zeichenbereich

Mit einem Bindestrich `-` innerhalb der Klasse kann
man einen Bereich von Zeichen angeben, die im Zeichensatz hintereinander
stehen.

<javascript>
/[a-f]/
</javascript>

<patterntester name="buchstaben" pattern="[a-z]">
a
b
c
x
y
z
A
.
%
</patterntester>

## Komplement der Zeichen-Klasse

Mit dem Zirkumflex `^` kann man das Komplement der Zeichen-Klasse bilden,
es werden dann alle Zeichen gematched die **nicht** in der eckigen
Klammer erwähnt werden:

<javascript>
/[^aeiou]/
</javascript>

<patterntester name="U-Bahnen" pattern="u[^1234]">
u1
u2
u3
u4
u5
u6
usa
</patterntester>

## Abkürzungen für häufig benutze Zeichenklassen

<javascript>
/\d/       eine Ziffer, entspricht /[0-9]/
/\D/       keine Ziffer, entspricht /[^0-9]/
/\w/       Wort-Zeichen, entspricht /[a-zA-Z0-9_]/
/\W/       kein Wort-Zeichen, entspricht /[^a-zA-Z0-9_]/
</javascript>

<patterntester name="U-Bahnen" pattern="u\d">
u1
u2
u3
u4
u5
u6
u9
usa
</patterntester>

## Irgend ein Zeichen

Der Punkt `.` steht für **ein** beliebiges Zeichen. Achtung, Verwechslungsgefahr:
bei Pfadangaben hat das Fragezeichen `?` diese Funktion!

<javascript>
/^...$/       genau drei Zeichen
</javascript>

<patterntester name="Studiengang" pattern="^...$">
NA
MMT
mmt
   
___
MMT-B
</patterntester>

## Ein echter Punkt

Da der Punkt `.` eine besondere Bedeutung in einer Regular Expression
hat stellt sich die Frage: wie erkennt man dann einen echten Punkt?
Die Antwort: man escaped die Sonderzeichen von RegEx mit einem Backslash `\`.

<javascript>
/\./     ein echter punkt
</javascript>

<patterntester name="Kapitel-Nummern" pattern="^\d\.\d$">
1
1.1
1.2
1.3
2
2.1
2.2
35
35.1
</patterntester>

## Stern-Operator: beliebig viele

Der Stern-Operator dient der Vervielfältigung: das davor stehende Zeichen
kann beliebig oft Wiederholt werden, also null-mal, ein-mal oder mehr-mals vorkommen:

<javascript>
/i*/  
</javascript>

Der Operator kann auch auf Zeichenklassen oder Gruppen angewandt werden.
Wenn man sich den Operator als Schleif vorstellt kann
bei jeder "Wiederholung" ein anderes Zeichen aus der Klasse oder eine
andere Alternative gewählt werden:

<javascript>
/(do|re|mi)*/
/\d*/
</javascript>

<patterntester name="Ziffern" pattern="^\d*$">
1
12
123

1a
a1
</patterntester>

## Plus-Operator: mindestens einmal, oder mehrmals

Der Plus-Operator ähnelt dem Stern-Operator, allerdings
muss das Zeichen mindestens einmal vorkommen.

<javascript>
/\d+/  
</javascript>

<patterntester name="Ziffern" pattern="^\d+$">
1
12
123

1a
a1
</patterntester>

## Fragezeichen-Operator: einmal oder keinmal

Der Frage-Operator erlaubt 0 oder 1 vorkommen des Zeichens.

<javascript>
/\d?/  
</javascript>

<patterntester name="Ziffern" pattern="^\d?$">
1
12
123

1a
a1
</patterntester>

## Operatoren sind gierig

Die Operatoren `*` und `+` versuchen immer
möglichst lange Strings zu erfassen.

<javascript>
/o.*o/    möglichst viele Zeichen zwischen o und o
</javascript>

Diese Eigenschaft sieht man sehr gut in folgendem Beispiel:

<patterntester name="BlaBla" pattern="_.*_">
zeugs und _bla_ und zeugs
_bla_ und zeugs
zeugs und _bla_
_bla_ und _bla_ und noch mehr _bla_
</patterntester>

§

Wie kann man das gierige Verhalten der Operatoren umgehen?

Die "altmodisch" Methode ist eine Komplement-Klasse:

<javascript>
/o[^o]*o/    
</javascript>

Hier wird ein erstes o gematched, dann kommen (null bis viele) zeichen
die kein o sind, und dann ein zweites o. Damit ist der Pattern beendet,
auch wenn es später im String noch weitere o's geben würde.

<patterntester name="BlaBla" pattern="_\[^_\]*_">
zeugs und _bla_ und zeugs
_bla_ und zeugs
zeugs und _bla_
_bla_ und _bla_ und noch mehr _bla_
</patterntester>

§

In modernen RegEx Engines gibt es nicht-gierige Varianten der
Operatoren: ein Fragezeichen wird nachgestellt

<javascript>
/o(.*?)o/    
/o(.+?)o/    
</javascript>

<patterntester name="BlaBla" pattern="_.*?_">
zeugs und _bla_ und zeugs
_bla_ und zeugs
zeugs und _bla_
_bla_ und _bla_ und noch mehr _bla_
</patterntester>

## Warnhinweis: Was RegEx nicht kann

Mit dem letzten Beispiel könnte man nun in Versuchung kommen
verschachtelte Ausdrücke wie HTML, XML, mathematische Ausdrücke, Programmiersprachen
mit Hilfe von RegEx zu parsen.

Das funktioniert aber nicht. Das müssten Sie an dieser Stelle
einfach mal glauben - den Beweis überlassen wir der "Theoretischen Informatik".

Die Frage ob das geht kommt immer wieder auf StackOverflow,
hier ist die [Standard Antwort](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags#answer-1732454).

Wenn Sie also in Javascript oder PHP HTML oder XML parsen wollen, dann
verwenden Sie dafür einen der vielen fertigen Parser.

Wenn Sie aus einem längeren HTML-Dokument "unverschachtelte" Teile wie
z.B. `<img>` Tags herausholen wollen, dann könnsn Sie das mit Regular Expressions machen.
Aber nichts komplizierteres.

## Ersetzen mit Regular Expression in Javascript

Ein häufiger Anwendungsfall von RegEx ist "Suchen und Ersetzen"

<javascript>
s = "Voldemort hat keine Nase";
s.replace(/Voldemort/, 
          "Er, dessen Name nicht genannt werden darf,");
</javascript>

Es erfolgt nur eine einzige Ersetzung. Mit dem Modifikator `g` am
Ende der RegEx kann man alle Ersetzungen durchführen:

<javascript>
s = "Voldemort hat keine Nase. Voldemort ist verschwunden.";
s.replace(/Voldemort/g, 
          "Er, dessen Name nicht genannt werden darf,");
</javascript>

Achtung, auch hier kommt man bald an die Grenzen
von Regular Expressions:

<javascript>
s = "Harry greift Voldemort an. Voldemorts Zauberstab bricht.";
s.replace(/Voldemort/g, 
          "Er, dessen Name nicht genannt werden darf,");
</javascript>

Dass im zweiten Satz ein anderer Fall notwendig wäre,
und wie man das dann richtige formuliert,
kann eine Regular Expression nicht erkennen. Dafür gibt es
eine eigene Wissenschaft: die [Computer-Linguistik](https://de.wikipedia.org/wiki/Computerlinguistik) beschäftigt
sich mit der Analyse, Synthese und Übersetzung von natürlichen Sprachen.

## RegEx in PHP

<php caption="RegEx Beispiel-Code aus Wordpress Plugins">
# Beispiel Link Suchen
if (preg_match('/^(http)(s?)(:)\/\//',$linky)){ ...

# Beispiel Sprache-Code

if (preg_match ( "/en|sk|zh|us|uk/", \$locale_code )){ ...
</php>

<php caption="Suchen mit RegEx in PHP">
preg_match( "/regex/i", "string in dem ich suche") 
</php>

## Tools

- [https://regexr.com/ regexr.com] ein CodePen für Regular Expressions

## Vertiefung

- [Video: Lea Verou Demystifying Regular Expressions](http://www.youtube.com/watch?v=EkluES9Rvak)
- [Regular Expressions Guide auf MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions)
- [Wikipedia: Regular Expression](http://de.wikipedia.org/wiki/Regular_Expression)

## Merchandize

- [XKCD T-Shirt](http://store-xkcd-com.myshopify.com/products/i-know-regular-expressions)
- [to be or not to be T-Shirt](http://www.spreadshirt.de/to-be-or-not-to-be-that-is-the-question-t-shirts-C4408A14434558/)
