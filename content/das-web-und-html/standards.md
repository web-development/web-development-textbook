

§

HTTP-URLs sind nicht die einzigen URLs, ein Beispiel mit einem anderen 
Übertragungsprotokoll:  

    mailto:brigitte.jellinek@fh-salzburg.ac.at


HTTP
----

Das Hypertext Transfer Protocol  <!-- XE "Hypertext Transfer Protocol" -->    <!-- XE "HTTP" -->   ist ein 
relativ simples Protokoll, das immer TCP  <!-- XE "TCP" -->   -Verbindungen verwendet. Alle 
Aktivität wird vom Client (=Browser) initiiert.  In der einfachsten Form sieht
HTTP so aus (hier 9 Schritte am Beispiel der URL `http://multimediatechnology.at/web-communities/#master`):

 
1.	Eine URL wird in den Browser eingetippt, oder ein Link wird im Browser angeklickt
2.	Der Browser analysiert die URL und ermittelt daraus den Domain Namen des Webservers (`multimediatechnology.at`), löst diese über DNS zur IP-Adresse auf, das Ergebnis lautet `193.170.119.85`
3.	Der Browser baut eine TCP-Verbindung zu `193.170.119.85`, Port 80 auf
4.	Er sendet einen HTTP-Request:  `GET /web-communities/ HTTP/1.0\n\n`
5.	Der Webserver nimmt die Anfrage entgegen und analysiert sie. Meistens interpretiert er sie als Aufforderung, eine bestimmte Datei von der Platte zu lesen. In diesem Fall aber wird ein PHP Programm gestartet, dass Daten aus einer MySQL Datenbank abfragt und als HTML aufbereitet.
6.	Der Webserver schickt einen HTTP-Response an den Browser, diese enthält einen Statuscode, z. B. `200 OK`, einige Zusatzinformationen und dann die eigentlichen Daten des Dokuments (den erzeugten HTML-Code)
7.	Der Browser nimmt das Dokument in Empfang und stellt es dar
8.	Der Browser scrollt das Dokument bis zur Textmarke `master`
9.	Der Browser beendet die TCP-Verbindung

§

Die nächste Anfrage des Clients kann sich an einen anderen Server, oder wieder an 
denselben Server richten. Die nächste Anfrage, die der Server beantwortet, kann vom selben 
Client kommen, oder von einem anderen Client. Keiner der beiden (Client und Server) muß 
speichern mit wem er gerade Daten ausgetauscht hat, um die nächste Anfrage 
durchführen/beantworten zu können. Ein Protokoll mit dieser Eigenschafft nennt man 
"zustandslos" ("stateless").  <!-- XE "stateless" -->    <!-- XE "zustandslos" -->  Dadurch ist es sehr einfach einen Server zu programmieren. 

Das war ein sehr einfaches Beispiel, wie das Protokoll ablaufen kann. Einen tieferne Einblick in HTTP erhalten Sie im Kapitel [http](/http/).

Quellen und weiter Lektüre
---------

* [Aufstieg und Fall des PCs](http://www.asymco.com/2012/01/17/the-rise-and-fall-of-personal-computing/)  
* [HTML5 Candidate Recommendation](https://www.w3.org/TR/html5/)
* [RFC 7540 - HTTP/2](https://tools.ietf.org/html/rfc7540)
