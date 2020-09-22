---
title: Chat Websockets
order: 90
---

HTTP fängt immer mit dem Request des Browsers and, und endet mit dem Response des Servers.
Dieses Protokoll ist nicht geeignet für Chat, für Spiele, .... wo die Kommunikation
auch vom Server ausgehen muss.

Das Websocket Protokoll ermöglicht die Kommunikation in beide Richtungen auf
einer dauerhaften Verbindung zwischen Client und Server.

## Das Websocket Protokoll

Das Websockets Protokol baut auf HTTP and HTTPS auf:

* es verwendet die ports 80 bzw. 443
* es startet immer mit einem normalen HTTP Request
* es verwende Cookies

Aber nach dem ersten Request wird die TCP Verbindung auf Dauer aufrechterhalten,
und Client und Server wechseln in das eigentlih Websocket Protokoll:


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

Nach diesem ersten Austausch müssen sowohl Server als auch Client
jederzeit mit eingehenden Nachrichten umgehen.


## Werkzeuge

### Developer Tools


Beim Programmieren und Debuggen von Websockets braucht man die
Developer Tools: In der "Netzwerkanalyse" sieht man den ersten
Request, noch mit HTTP, der dann mit "101 Switching Protocol" in eine Websocket 
umgewandelt wird:

![](/images/websockets/dev-tools-network.png)
![](/images/websockets/dev-tools-network-1.png)

Im Tab "Nachrichten" sieht man die Nachrichten die hin oder her geschickt werden:

![](/images/websockets/dev-tools-network-2.png)

Hier sieht man auch dass Client und Server sich gegenseitig
"Ping"-Pakete senden wenn sonst nichts zu senden ist.


### node.js


Für die Programmierung am Server kann man PHP, Ruby,.... alle typischen
Backend-Programmiersprachen verwenden.  Wir nutzen die Gelegenheit
um `node.js` kennen zu lernen. Damit kann man das Backend in JavaScript programmieren.

Ryan Dahl hat node.js im Jahr 2009 herausgebracht. Es war nicht die erste
Möglichkeit JavaScript am Server zu Verwenden, aber die erste die echten Erfolge hatte.

Node und der dazugehöriger package manager `npm` werden heute nicht
nur im Backend Development verwendet, sondern auch sehr viel als Werkzeug
für das Frontend Development.

Für Node zu programmieren ist nicht einfach: wie im Browser, so wird auch in
Node viel mit Asynchronen Aufrufen gearbeitet. 

### glitch



Node.js kann man [am eigenen Rechner installieren](https://nodejs.org/en/download/), das
ist aber für diese Beispiel nicht nötig. Wir verwenden [https://glitch.com/](https://glitch.com/):

![](/images/websockets/glitch.png)

Damit enfällt das hochladen des Codes auf einen Server.


### Socket.io


`socket.io` ist eine JavaScript Library für die Client und die Server-Seite
von Websocket Verbindungen. 


## Programmierung des Client

Am Client ist bereits eine Eingabefeld für Chat-Messages vorhanden.
Alle Chat-Messages sollen in der Liste mit der id `messages` angezeigt werden:

<htmlcode>
<ul id="messages"></ul>
<form action="">
  <input id="m" autocomplete="off" />
  <input type="submit" value="Senden" />
</form>
<script src="socket.io/socket.io.js"></script>
</htmlcode>

### An den Server senden:


Wenn das Formular abgeschickt wird (durch den submit-button oder
durch drücken von enter), wird eine Nachricht an den Server geschickt:

<javascript>
var socket = io();
let form = document.getElementsByTagName('form')[0];
let input = document.getElementById('m');
form.addEventListener('submit', function() {  
  socket.emit('chat message', m.value );
  m.value="";
  return false;
});
</javascript>



### Vom Server empfangen:


Wenn vom Server eine Nachricht kommt,
wird sie als neues `li` an die Liste angefügt:

<javascript>
  let list = document.getElementById('messages');

  socket.on('chat message', function(msg){
    let li = document.createElement('li');
    li.textContent = msg;
    list.appendChild(li);   
    list.scrollTop = list.scrollHeight;
  });
</javascript>





## Programmierung des Servers:

Achtung: mit Node programmiert man gleich den ganzen
Webserver mit - es gibt keinen apache oder nginx!

Das JavaScript-Programm läuft also die ganze Zeit und
behandelt alle Anfragen.

In folgendem Code repräsentiert `io` den ganzen Websocket,
`io.emit`  ist also ein broadcast an alle verbundenene Clients.
`socket` repräsentiert einen verbundenen client:

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


## Weiterentwicklung

Es gibt viele Möglichkeiten das Beispielprogramm weiter zu entwickeln:


### neue Message

In diesem Beispiel haben wir nur `chat message` messages
gesendet und empfangen.  Wir können beliebig neue Arten von 
messages, mit oder ohne payload, dazu erfinden.

Zum Beispiel für Applaus:  Der Client kann eine Applause-Meldung
ohne weitere Daten schicken.  Der Server kann applause mit
einer Zahl schicken

<javascript>
  document.getElementById('applause').addEventListener('click',function(){
    socket.emit('applause');
  })
  socket.on('applause', function(text){
    let li = document.createElement('li');   
    let strength = parseInt(text);       
    li.textContent = "👏".repeat(strength);
    list.appendChild(li);   
    list.scrollTop = list.scrollHeight;         
  });
</javascript>

### Andere Ein- und Ausgabe im Client

Nicht jede Eingabe muss aus dem Texteingabefeld kommen: auch
clicks auf Buttons, Mausbewegungen, u.s.w. können Websocket-Botschaften auslösen.

Nicht jede Ausgabe ist ein Chatmeldung.  Als Applaus könnte
man zum Beispiel einen Audio-Clip abspielen.


### Andere Logik am Server

Am Server könnte man mit-zählen wie viel User anwesend sind:

<javascript>
var users = [];
function remove_from(users, socket){
  users = users.filter(s => s.id != socket.id);  
}
io.on('connection', function(socket){
  // called every time a client connects
  console.log(`ein neuer client mit id ${socket.id}`);
  users.push(socket);
  io.emit('chat message', `there are now ${users.length} users`);
   
  ....
  socket.on('disconnect', function(){
    remove_from(users, socket);
    console.log('user disconnected');
    io.emit('chat message', `there are now ${users.length} users`);  
  });
});
</javascript>


## See Also

* [RFC 6455](https://tools.ietf.org/html/rfc6455)
* [socket.io](https://socket.io/)