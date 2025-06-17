---
title: TypeScript
order: 07
---

TypeScript ist Javascript mit Typen.  Typescript kann nicht im Browser
ausgeführt werden, sondern wird nach Javascript übersetzt.

Die Typen können von einen modernen Editor verwendet werden,
um Probleme anzuzeigen bevor man das Programm jemals kompiliert oder startet:

![Typescript Error in VS Code](/images/advanced-javascript/ts-im-editor.png)


## Von Javascript zu Typescript

Wie kann man aus einem Javascript-Projekt eine Typescript-Projekt machen?

Als erstes Typescript im Projekt installieren:

    npm install typescript --save-dev


### Typescript Konfigurieren

Eine Konfigurationsdatei tsconfig.json anlegen:

    {
      "compilerOptions": {
        "target": "ESNext", // Use the latest ECMAScript features
        "module": "ESNext", // Use ES modules
        "strict": true,     // Enable all strict type checking options
        "sourceMap": true   // Generate source maps for debugging
      },
      "lib": ["ESNext", "DOM", "DOM.Iterable"], // Include types for current browser features
      "include": ["script.ts"],                 // Only compile these files
      "exclude": ["node_modules"]               // Don't compile files in node_modules
    }

### die .js Datei in .ts umbenennen

Benenne alle  javascript-Dateien deines Projekts um, die Endung soll nun `.ts` sein.

Füge alle Typescript-Dateien zu tsconfig.json im array "include" hinzu.

### Den Typescript Transpiler verwenden

Mit dem Kommandozeilen-Befehl `npx` kann man Programme starten,
die mit `npm` installiert wurden. Der Typescript Compiler heisst `tsc`:

    $ npx tsc

Dieser Befehl erzeugt nun für jede `*.ts`  Datei eine  `*.js` und `*.js.map` Datei.

### Welcher Code wird ausgeführt?

In der HTML-Datei müssen wir die erzeugte Javascript-Datei importieren,
nur die kann ausgeführt werden. Typescript kann nicht ausgeführt werden.

<htmlcode>
<script type="module" src="./script.js"></script>
</htmlcode>

### Wie kann man Typescript debuggen?

Wenn im Javascript code im Browser ein Problem auftritt,
oder wenn man den Debugger verwenden will, dann wird der
Javascript Code angezeigt.

Falls eine `*.js.map` Datei existiert kann der Debugger
statt des Javascript Sourcecode den Typescript sourcecode
anzeigen und die Zeilennummern in diesem Code verwenden:

![](/images/advanced-javascript/tsdebug.png)


## Typen hinzufügen

Nun müssen wir dem Typescript-Programm so viele Typen hinzufügen,
dass es wieder funktioniert.

### Primitive Typen

Typescript übernimmt primitive typen von JavaScript: `boolean`, `number`, `string`, `symbol`, `bigint`, `null` und `undefined`.

TypeScript erweitert diese Liste um einige weitere, darunter:

* `any` (erlaubt beliebige Werte),
* `void` (für Funktionen, die `undefined` zurückgeben oder keinen Rückgabewert haben),
* `never` (dieser Typ kann nicht auftreten), und
* `unknown` (erzwingt, dass jemand, der diesen Typ verwendet, den konkreten Typ angibt).


Mit eckigen Klammern wird ein Array gebildet.


### ein erster Type

Betrachten wir einen ersten selbst definiertes Typ in Typescript,
und wie das Programm nach der Übersetzung in Javascript aussieht:

<typescript>
type Question = {
  question: string;
  answers: string[];
  correct: number;
}

let q: Question = {
  question: "What is 2 + 2?",
  answers: ["3", "4", "5", "22"],
  correct: 1,
};

function printQuestion(q: Question):void {
  console.log(q.question, q.answers[q.correct]);
}

printQuestion(q);
__|__
"use strict";

let q = {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "22"],
    correct: 1,
};
function printQuestion(q) {
    console.log(
      q.question,
      q.answers[q.correct]
    );
}
printQuestion(q);
//# sourceMappingURL=test.js.map
</typescript>

Die Typen haben also keine Auswirkung auf das Programm
zur Laufzeit.

Die Datentypen von Javascript sind immer noch dynamisch -
ich kann immer noch in der Konsole
der developer tools die Variable `q` verändern, neue Keys
hinzufügen oder löschen.

Die Typen existieren  nur während ich das Programm
schreibe und editiere. Da sind sie aber hilfreich:

## Unions

In Typescript kann man einen Typen als Vereinigung (Union)
erzeugen:

<typescript>
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
</typescript>

### Unions != enum

Achtung: "WindowStates" ist kein Enum in C#

<csharp>
enum WindowStates { Open, Closed, Minimized }
</csharp>

in Typescript ist der WindowState ein String, und braucht
entsprechend seiner Länge mehr oder weniger Byte im Speicher.
In C# wird der Enum intern als `int` gespeichert, braucht
also eine fixe anzahl bytes.

Typescript Unions lassen sich **nicht** zur Laufzeit auflisten, C# enums schon:

<csharp>
Enum.GetValues(typeof(WindowStates));
</csharp>

### Union verschiedener Formen

Unions können auch direkt für Funktionsparameter verwendet werden.
Unions können Typen vereinigen, die verschiedene Formen im Speicher haben:

<typescript>
function getLength(obj: string | any[]) {
  return obj.length;
}
</typescript>


## Welcher Typ ist das?

Um den Typ einer Variable heraus zu finden
verwendet man meist `typeof` - das funktioniert direkt
in Javascript:

| Typ         | Prüf-Ausdruck                        |
|-------------|--------------------------------------|
| string    | `typeof s === "string"`              |
| number    | `typeof n === "number"`              |
| boolean   | `typeof b === "boolean"`             |
| undefined | `typeof x === "undefined"`           |
| function  | `typeof f === "function"`            |
| array     | `Array.isArray(a)`                   |



## Typen für die DOM

Für die DOM und die DOM Manipulation braucht es auch Typen.
Die bringt Typscript schon mit:

<typescript>
getElementById(elementId: string): HTMLElement | null;
</typescript>

Im eigenen Programm kann man diese Typen dann verwenden:

<typescript>
let myNode: HTMLElement;

myNode = document.getElementById("hansi") as HTMLElement
</typescript>


## Duck-Typing

In Typescript gilt: wenn es quakt wie eine Ente und watschelt
wie ein Ente, dann ist es eine Ente.  Auf Englisch
nennt man das "duck typing" oder "structural typing".

Gemeint ist, dass zwei typen die dieselbe Form haben
in Typescript nicht unterschieden werden:

<typescript>
type Point = {
  x: number;
  y: number;
}

function logPoint(p: Point):void {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const wurm = { farbe: "grau", beine: 0 };
logPoint(wurm); // Typescript Fehler:
//  Argument of type '{ farbe: string; beine: number; }' is not assignable to parameter of type 'Point'.
//  Type '{ farbe: string; beine: number; }' is missing the following properties from type 'Point': x, y
</typescript>

Die Konstante `rect` erfüllt alle Anforderungen
des types Point, und kann deswegen als Argument
der Funktion `logPoint` verwendet werden.  Der wurm tut das nicht.


## Siehe auch

Das war ein erster Einblick in Typescript.

* Typscript [wenn man C# kennt](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html)
* Typescript im Browser ausprobieren mit dem [Typescript Playground](https://www.typescriptlang.org/play#show-examples)

