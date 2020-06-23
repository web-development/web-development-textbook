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


```
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
```

Nach diesem ersten Austausch müssen sowohl Server als auch Client
jederzeit mit eingehenden Nachrichten umgehen.

Developer Tools
-----

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


node.js
-----

Für die Programmierung am Server kann man PHP, Ruby,.... alle typischen
Backend-Programmiersprachen verwenden.  Wir nutzen die Gelegenheit
um `node.js` kennen zu lernen. Damit kann man das Backend in JavaScript programmieren.

Node.js kann man [am eigenen Rechner installieren](https://nodejs.org/en/download/), das
ist aber für diese Beispiel nicht nötig. Wir verwenden [https://glitch.com/](https://glitch.com/):

![](/images/websockets/glitch.png)

Damit enfällt das nochladen des Codes auf einen Server.

Socket.io
----

socket.io
Library for both server and client side JS code
Needs express as a basis

WARNING: 
socket.io will automatically host some files needed on the client side under the URL /socket.io/  Do not attempt to change this!


Load in client:

```
<script src="socket.io/socket.io.js"></script>
```


## Overview


```
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;

app.use(express.static('public'));

http.listen(port, function(){
  console.log("webserver started");
});

io.on(…)

// export app so we can test it
exports = module.exports = app;

```

## Client

```
<ul id="messages"></ul>
<form action="">
  <input id="m" autocomplete="off" /><button>Send</button>
</form>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="socket.io/socket.io.js"></script>
```

Sending messages to the server:

```
<script>
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
</script>
```

Recieving messages from the server:

```
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
```





## Server

```
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log(`got message '${msg}', broadcasting to all`);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
```

## Testing the Server

```
describe("Auction Server",function(){
  it('Should echo chat massages back to user', function(done){
    var client1 = io.connect(socketURL, options);

    client1.on('connect', function(data){
      client1.emit('chat message', 'hello world');
      client1.on('chat message', function(data){
        console.log('got back ' + data);
        data.should.equal('hello world');
        client1.disconnect();
        done();
      });
    });
  });
});

```





See Also
-----

* [RFC 6455](https://tools.ietf.org/html/rfc6455)