---
title: TypeScript
order: 10
---

TypeScript ist Javascript mit Typen.  Typescript kann nicht im Browser
ausgeführt werden, sondern wird nach Javascript übersetzt.

Wie kann man aus einem Javascript-Projekt eine Typescript-Projekt machen?

## Installation

Um Typescript zu verwenden braucht man `node.js`:

https://nodejs.org/en/download


Teste ob die Installation geklappt hat auf der Kommandozeile oder im VS Code Terminal:

    $ node -v
    v24.0.1
    $ npm -v
    11.3.0

Es sollte keine Fehlermeldungen geben, und die Versionsnummern sollten
(im Mai 2025) nicht kleiner sein als die hier gezeigten.

Damit hat man Javascript auf der Kommandozeile.
Node hat einen eigenen Package Manager: `npm`.
Mit diesem kann man den Typescript compiler installieren:


### Typescript installieren

Bei der Verwendung von node braucht man eine Datei `package.json`
im Hauptordner des Projekts.
Diese erzeugt man mit dem Befehl

    $ npm init -y

Überprüfe die Datei:

* wurde die Haupt-Javascript-Datei richtig erkannt (Eintrag bei `main`)
* gibt es den Eintrag `"type": "module"`

Der package manager `npm` installiert die packages
im Ornder `node_modules`.

Installiere den Typescript Transpiler:

    npm install typescript --save-dev

Nun existiert eine Datei `package-lock.json` und ein
Ordner `node_modules` mit mehr als 20 Megabyte.


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
      "include": ["script.ts"],                 // Only compile this file
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

### Type

Betrachten wir einen ersten selbst definiertes Typ in Typescript,
und wie das Programm nach der Übersetzung in Javascript aussieht:

<typescript>
type Question = {
  question: string;
  answers: string[];
  correct: number;
}

const q: Question = {
  question: "What is 2 + 2?",
  answers: ["3", "4", "5", "22"],
  correct: 1,
};

function printQuestion(q: Question) {
  console.log(q.question, q.answers[q.correct]);
}

printQuestion(q);
__|__
"use strict";


const q = {
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


.... To be Continued ...
