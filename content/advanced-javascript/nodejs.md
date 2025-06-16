---
title: node.js
order: 05
---

![node.js logo](/images/advanced-javascript/nodejs-logo.svg)

Node.js ist ein JavaScript-Interpreter
mit einer sehr kleinen zusätzlichen C-Bibliothek.

Nach der Lektüre dieses Leitfadens solltest du

* wissen, wie man packages mit npm installiert
* in der Lage sein ein Programm zu starten, dass in node.js programmiert ist


---

## Was ist Node.js?

Node.js wurde ursprünglich 2009 von [Ryan Dahl](https://de.wikipedia.org/wiki/Ryan_Dahl) geschrieben
als Kombination zweier bereits existierender Softwarekomponenten:

* dem Google [JavaScript-Interpreter V8](https://v8.dev/) – [Code](https://github.com/v8/v8)
* einer Bibliothek für asynchrones Programmieren [libuv](https://libuv.org/) – [Code](https://github.com/libuv/libuv)

Dazu kam eine in JavaScript geschriebene Standardbibliothek.
2010 wurde mit npm ein Paketmanager für JavaScript-Bibliotheken ergänzt.

### Wie groß ist Node.js?

![](/images/advanced-javascript/what-is-node.svg)

Laut [OpenHub](https://www.openhub.net/p/node/analyses/latest/languages_summary) bestand das Node-Projekt im Jahr 2023 aus:

* der Node-Bibliothek: 1,6 Millionen Zeilen JavaScript
* den Node-Bindings: 2,5 Millionen Zeilen C
* V8: 2,3 Millionen Zeilen C++
* libuv: 100.000 Zeilen C

### Hallo Node

Du schreibst dein Programm in JavaScript, speicherst es in einer Datei:

<javascript>
console.log("Hello Node");
</javascript>

und führst es mit dem `node`-Befehl aus:

<shell>
$ node hello.js
Hello Node
</shell>


## Pakete

Der npm Paketmanager kann Javascript-Pakete aus
dem Internet (von https://www.npmjs.com/) herunterladen
und installieren.


### package.json

Dazu muss man zuerst ein Projekt in einem eigenen Ordner starten
und dort die Datei `package.json` anlegen:

Diese erzeugt man mit dem Befehl

    $ mkdir mein_projekt
    $ cd mein_projekt
    $ npm init -y

Die Datei package.json sieht ungefähr so aus:

<javascript>
{
  "name": "mein_projekt",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
</javascript>

Finde den Key `type` und stell sicher dass als Wert `"module"` angegeben ist.

### node_modules

Der Package manager `npm` installiert die packages
im Ordner `node_modules`. Als Beispiel installieren wir
ein Package namens `qrcode-terminal`

<shell>
$ npm install qrcode-terminal

added 1 package, and audited 2 packages in 599ms

found 0 vulnerabilities

$ du -h -s *
160K	node_modules
4,0K	package-lock.json
4,0K	package.json
</shell>

Es sind drei Dinge passiert:

* in `package.json` wurde eingetragen dass wir `qrcode-terminal` verwenden wollen
* `package-lock.json` wurde erstellt. Hier würden weitere Dependencies eingetragen, die `qrcode-terminal` braucht
* im Ordner `node_modules` wurde ein Unter-Ordner `qrcode-terminal` erstellt, er enthält das installierte Package


### Kleine Pakete, Grosses `node_modules`

Javascript hat den Ruf besonders viele kleine Pakete zu verwenden,
und besonders viel Speicherplatz für `node_modules` zu verbrauchen:

![Meme über node_modules](/images/advanced-javascript/node-modules.webp)

Quelle [Reddit r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/comments/6s0wov/heaviest_objects_in_the_universe/)

## Node Package eXecute - npx

Das Package `qrcode-terminal` enthält ein ausführbares
Programm für die Kommandozeile.  Mit "Node Package eXecute"
kann man es starten und ihm eine URL übergeben:

    npx qrcode-terminal https://web-development.github.io/advanced-javascript/nodejs

Das Programm gibt einen QR Code der URL aus:

![QR Code für diese Webseite](/images/advanced-javascript/qr.png)


## import

Für javascript-Programm vom typ Module die mit node.js gestartet
werden gilt:
Verwende "barewords" für Pakete aus `node_modules`, und relative Pfade
für eigene Dateien:

<javascript>
import * as http from 'http';
import * as config from './config/index.js';
</javascript>

