---
title: Chat Websockets
order: 90
---

HTTP fängt immer mit dem Request des Browsers an und endet mit dem Response des Servers.
Dieses Protokoll ist nicht geeignet für Chat oder Spiele, wo die Kommunikation
auch vom Server ausgehen muss.

Das Websocket Protokoll ermöglicht die Kommunikation in beide Richtungen auf
einer dauerhaften Verbindung zwischen Client und Server. Es wird
in [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) definiert.

## Das Websocket Protokoll

Das Websockets Protokol baut auf HTTP and HTTPS auf:

* es verwendet die ports 80 bzw. 443
* es startet immer mit einem normalen HTTP Request
* es verwendet Cookies

Soweit die Ähnlichkeiten mit HTTP.

§

URLs für Websockt beginnen mit `ws` oder `wss` für die verschlüsselte Version:


* ws://server.example.com/chat
* wss://server.example.com/chat

§

Nach dem "Upgrade: websocket" Request wird die TCP Verbindung auf Dauer aufrechterhalten,
und Client und Server wechseln in das eigentliche Websocket Protokoll:


<plain>
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat

</plain>

Nach diesem ersten Austausch schalten Server und Client
auf das Senden von "Frames" um.  Nun können beide jederzeit
senden und müssen bereit sein, eingehenden Nachrichten zu empfangen.

Websocket Frames sind viel sparsamer als HTTP Requests und Responses:
10 bis 18 Byte für Meta-Information plus der eigentliche Payload bilden einen Frame.

![websocket frame](/images/websockets/websocket-frame.png)

§

Der (4 bit) Opcode gibt an welchen Typ der Payload hat:

* `0000` - continuation frame, voriger Frame wird fortgesetzt
* `0001` - text frame
* `0010` - binary frame
* `1000` - connection close
* `1001` - ping
* `1010` - pong

Wenn einer der beiden Endpunkte ein ping sendet muss der andere mit einem
pong antworten. Dieser Mechanismus wird verwendet um die TCP-Verbindung
aufrecht zu erhalten auch wenn gerade keine Daten geschickt werden müssen ("keepalive").

## Werkzeuge

### Developer Tools


Beim Programmieren und Debuggen von Websockets braucht man die
Developer Tools: In der "Netzwerkanalyse" sieht man den ersten
Request, noch mit HTTP, der dann mit "101 Switching Protocol" in eine Websocket
umgewandelt wird:

![](/images/websockets/dev-tools-network-1.png)

Im Tab "Antwort" sieht man die Frames die hin oder her geschickt werden:

![](/images/websockets/dev-tools-network-2.png)

Hier sieht man auch dass Client und Server sich gegenseitig
Ping- und Pong-Frames senden wenn sonst nichts zu senden ist.


### node.js


Für die Programmierung am Server kann man alle typischen
Backend-Programmiersprachen verwenden (PHP, Ruby etc.). Wir nutzen die Gelegenheit
um `node.js` kennen zu lernen. Damit kann man das Backend auch in JavaScript programmieren.

Ryan Dahl hat node.js im Jahr 2009 herausgebracht. Es war nicht die erste
Möglichkeit, JavaScript am Server zu verwenden, aber die erste, die echte Erfolge hatte.

Node und der dazugehörige package manager `npm` werden heute nicht
nur im Backend Development, sondern auch sehr viel als Werkzeug
für das Frontend Development verwendet.

Für Node zu programmieren ist nicht einfach: wie im Browser, so wird auch in
Node viel mit asynchronen Aufrufen gearbeitet.

### Replit

Node.js kann man [am eigenen Rechner installieren](https://nodejs.org/en/download/), das
ist aber für diese Beispiel nicht nötig. Wir verwenden [https://replit.com/](https://replit.com/~).

Replit ist eine browserbasierte Entwicklungsumgebung, mit der man - 
neben vielen anderen Sprachen - node.js Programme direkt im Browser 
schreiben. Der Code wird am Server von Replit gespeichert, und kann 
dort auch ausgeführt werden.


![](/images/websockets/glitch.png)

Damit braucht man also am eigenen Computer nur den Webbrowser.

Das "Frontend" findet sich in der Datei `public/index.html` bzw. `public/index.js`,  das Backend in `index.js`.


### Socket.io


`socket.io` ist eine JavaScript Library für die Client- und Server-Seite
von Websocket Verbindungen.


## Programmierung des Client

Am Client ist bereits eine Eingabefeld für Chat-Messages vorhanden.
Alle Chat-Messages sollen in der Liste mit der id `messages` angezeigt werden:

<htmlcode>
<ul id="messages"></ul>
<form action="">
  <input id="input" autocomplete="off" />
  <input type="submit" value="Senden" />
</form>
<script src="socket.io/socket.io.js"></script>
<script src="index.js"></script>
</htmlcode>

### An den Server senden:


Wenn das Formular abgeschickt wird (durch den submit-button oder
durch drücken von Enter), wird eine Nachricht an den Server geschickt:

<javascript>
var socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
  
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Form wird nicht "normal" gesendet
  socket.emit('chat message', input.value );  // sondern nur über Socket
  input.value=""; // Eingabefeld leeren
});
</javascript>

### Vom Server empfangen:

Wenn vom Server eine Nachricht kommt,
wird sie als neues `li` an die Liste angefügt:

<javascript>
  const list = document.getElementById('messages');

  socket.on('chat message', function(msg) {
    const message = document.createElement('li');
    message.textContent = msg;
    list.appendChild(message);
  });
</javascript>

## Programmierung des Servers:

Achtung: mit Node.js programmiert man nicht nur irgendein Programm, 
das am Webserver läuft.  Man schreibt ein JavaScript-Programm,
das den gesamten Job des Webserver miterledigt.

Das JavaScript-Programm läuft also die ganze Zeit und
behandelt alle Anfragen. Ein Apache oder nginx ist nicht nötig.

In folgendem Code repräsentiert `io` den ganzen Websocket:
Die Variable `socket` repräsentiert einen verbundenen Client.
`io.emit()`  ist ein Broadcast an alle verbundenen Clients,
`socket.emit()` sendet nur an einen Client.

<javascript>
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log(`got message '${msg}', broadcasting to all`);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });
});
</javascript>

## Messages

Wir haben vom Client zum Server gesendet mit dem Befehl:

<javascript>
socket.emit('chat message', m.value ); 
</javascript>

Am Server reagieren wir mit socket.on() auf die Message. Das kann man sich wie
einen Eventlistener vorstellen, welcher auf das Event "chat message" hört.

<javascript>
socket.on('chat message', function(msg){
  console.log(`got message '${msg}'...`);
});
</javascript>

Der String 'chat message' ist frei gewählt.  Wir haben hier
ein Protokoll auf dem Websocket erfunden, das bisher nur dieses
eine Event kennt. Es gibt auch andere Arten von Events, die schon
belegt sind. "disconnect", welches du schon in dem Beispielcode finden kannst, 
ist eines davon. Mehr vordefinierte Events findest du hier: 
[Server Socket Events](https://socket.io/docs/v4/server-socket-instance/#events)



## Weiterentwicklung

Es gibt viele Möglichkeiten das Beispielprogramm weiter zu entwickeln:


### Neues Event

In diesem Beispiel haben wir nur `chat message` Events
gesendet und empfangen. Wir können beliebig neue Arten von
Events, mit oder ohne payload, dazuerfinden.


### Andere Ein- und Ausgabe im Client

Nicht jede Eingabe muss aus dem Texteingabefeld kommen: auch
clicks auf Buttons, Mausbewegungen, usw. können Websocket-Botschaften auslösen.

Nicht jede Ausgabe ist ein Chatmeldung. Man könnte zum Beispiel einen Audio-Clip abspielen.


### Andere Logik am Server

Am Server könnte man mitzählen, wie viel User anwesend sind.
Dazu legt man eine globale Variable `users` an.  Solange das JavaScript-Programm 
am Server läuft bleibt diese Variable erhalten.  Wenn der Server neu gestartet
werden muss - z.B. weil man die Datei `index.js` editiert hat - dann geht der
Inhalt der Variable verloren.

Wir könnten jetzt ein neues Event erfinden (zB "update users"), auf welches der Client hört, und dann
einen User-Counter in unserer Chat-App updaten.

<javascript>
const users = [];
  
function remove_from(users, socket){
  users = users.filter(s => s.id != socket.id);
}
  
io.on('connection', function(socket){
  // Wird jedes mal aufgerufen, wenn sich ein neuer Client verbindet
  console.log(`Ein neuer User mit id ${socket.id}`);
  users.push(socket);
  io.emit('update users', users.length);

  ....
  socket.on('disconnect', function(){
    remove_from(users, socket); // Wenn ein User disconnected muss er wieder entfernt werden
    console.log('User disconnected');
    io.emit('update users', users.length);
  });
});
</javascript>


## See Also

* [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html)
* [Websockets im MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [socket.io](https://socket.io/)
