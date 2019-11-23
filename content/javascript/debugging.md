---
title: Debugging
order: 60
---

Ein paar Tipps für die Fehlersuche im Code.

## Ohne Werkzeuge

### Check: ist das die selbe Datei?

Du hat den fehler behoben, aber das Programm funktioniert immer noch nicht?

Dann prüfe mal nach, ob nicht folgendes passiert ist:

- du editierst Datei `x`
- du testest das Programm in datei `y`

### Problem eingrenzen

Du hast keine Ahnung wo in Deinem Code ein Problem auftritt?
Vor 5 Minuten hat es noch funktioniert?

Für folgendes vorgehen brauchst Du nur den ganz normalen Editor,
und ein extra-Fenster zur Aufbewahrung von gelöschtem Code.

Lösche den Code den Du neu dazu geschreiben hast.
Jetzt geht es wieder? Dann füg ca. die Hälfte des
neuen Codes dazu. Geht es noch immer? ....

Auf diese Art kannst Du schrittweise eingrenzen in welchem
Teil des Codes das Problem auftritt.

Obskure Fehler die damit schon gefunden wurden: z.B. "da ist ein
geschützes Leerzeichen im Code, das den Interpreter / Compiler
sofort zum Absturz bringt". Was gegen diesen fehler auch hilft:
[VSCode extension Non-breaking space highlighter](https://marketplace.visualstudio.com/items?itemName=viktorzetterstrom.non-breaking-space-highlighter)

Eine fortgeschrittene Variante dieser Methode ist [git bisect](https://git-scm.com/docs/git-bisect)
das hilft den git commit zu finden in dem ein Problem zum ersten mal auftritt.

## Console

### log

Der einfache `console.log` befehl kann mit style-anweisungen formatiert werden:

<javascript>
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
</javascript>

### dir

`console.dir` gibt mehr Kontext über ein Javascript Objekt aus:

<javascript>
console.dir(o);
</javascript>

### table

Mit `console.table` kann man eine ganze Tabelle von Daten hübsch ausgeben:

<javascript>
console.table(["apples", "oranges", "bananas"]);
</javascript>

![](/images/javascript/console-table.png)

oder komplexere Tabellen:

<javascript>
var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
</javascript>

![](/images/javascript/console-table-array-of-objects.png)

### group

Zu viele Console-Meldungen? Dann kann man sie in Gruppen zusammenfassen:

<javascript>
console.group("Bestellung");
console.log("Dies");
console.log("Das");
console.dir({thema: 'nochwas'});
console.groupEnd();
console.log("was neues");
</javascript>

Jetzt kann an entweder die ganze Information sehen:

![](/images/javascript/console-group.png)

Oder die Gruppe zusammen klappen:

![](/images/javascript/consolegroup2.png)

### trace

Zur Orientierung in fremden Code sehr hilfreich ist `console.trace`:

<javascript>
console.trace();
</javascript>

Dieser Befehl zeigt einen "stack trace" an: eine Liste welche Funktion
von welcher Funktion aufgerufen wurde, um schließlich bei dieser
Codezeile zu landen.

## Variablen in der Console

Wenn man mit dem Inspector eine Node der DOM ausgewählt hat,
dann steht diese Node in der Konsole in der Variable `$0` zur
Verfügung.

`$$()` ist ein eine Abkürzung für `document.querySelectorAll`. Einziger
Unterschied: gibt ein Array zurück, keine nodelist, und ist damit
einfacher in der Weiterverarbeitung.

Siehe weitere Web Console Helpers in [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Helpers) und [Chrome](https://developers.google.com/web/tools/chrome-devtools/console/utilities).

## Debugger

In den Developer Tools im Browser ist ein Debugger eingebaut:

![Debugger im Browser](/images/javascript/jsdebug.png)

### Dateien

Der linke Teil des Debuggers zeigt die JavaScript Dateien an:

![Debugger im Browser: Dateien](/images/javascript/jsdebug-pane-1.png)

### Quelltext

Der mittlere Teil des Debuggers zeigt den Sourcecode an:

![Debugger im Browser: Quelltext](/images/javascript/jsdebug-pane-2.png)

Hier kann man Haltepunkte = Breakpoints setzen, indem man eine Zeile anklickt.
In diesem Bild ist ein Breakpoint auf Zeile 29 gesetzt.

### Steuerung

Der rechte Teil des Debuggers enhält die Steuerung:

![Debugger im Browser: Steuerung](/images/javascript/jsdebug-pane-3.png)

### Haltepunkte

Bei den Haltepunkten wird das Programm jeweils angehalten.
Das wird sowohl im Browserfenster als auch im Debugger angezeigt:

![Debugger im Browser](/images/javascript/jsdebugstopped.png)

§

In diesem Zustand kann man den Inhalt von Variablen ansehen,
und mit der Steuerung das Programm Fortsetzen:

![Debugger im Browser](/images/javascript/jsdebugdetailstopped.png)

Im Sourcecode werden die Werte von Variablen direkt eingeblendet.

Die steuerung ermöglicht sowohl ein schrittweise weitergehen im Programm
als auch das normale Fortsetzen mit dem Play-Button.

§

Mit dem Debugger kann man sehr schnell Einblick in den
Zustand des Programms erhalten, er ersetzt unzählige Console-Meldungen
die man sonst schreiben müsste.

## Weitere Themen

Im talk [Essential JavaScript debugging tools for the modern detective](https://www.youtube.com/watch?v=TtsvMRxmfGA) stellt Rebecca Hill noch weitere Themen vor:

- Extensions für VSCode zur Verbindung mit dem Debugger
- Resource Overrides
- Sourcemaps
- Performance Measurement Tools
- Accessability Test Tools
- Verwendung der Browser Developer Tools für node

## Quellen

- [MDN: Text-Ersetzung in der console](https://developer.mozilla.org/de/docs/Web/API/Console#Outputting_text_to_the_console)
- [MDN: console](https://developer.mozilla.org/de/docs/Web/API/Console)
