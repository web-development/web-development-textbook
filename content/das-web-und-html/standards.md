---
title: Drei Standards definieren das Web
order: 20
---

Für diese Lehrbuch ist eine technische Sicht auf das World Wide Web die relevante. 
Das World Wide Web ist also ein verteiltes (Client/Server) Informationssystem, 
das durch folgende drei Standards definiert wird:

* URL  <!-- XE "URL" -->   (Uniform Resource Locators) ursprünglich [RFC 1738](http://www.w3.org/Addressing/rfc1738.txt)
* HTTP  <!-- XE "HTTP" -->   (Hypertext Transfer Protocol) ursprünglich [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616.html)
* HTML  <!-- XE "HTML" -->    <!-- XE "XHTML" -->   (Hypertext Markup Language) 

Die aktuelle Version von HTTP ist 1.2, wir befinden uns gerade im Übergang auf HTTP 2.0
HTML verwenden wir in der Version 5. 

Rund um diese drei Standards ordnen sich weitere wichtige Begriffe an:

Client/Server
-------------

Das Client  <!-- XE "Client" -->  /Server  <!-- XE "Server" -->   Prinzip ist ein allgemeines Prinzip wie 
Dienste in einem Computernetzwerk aufgebaut sein können: Ein Server ist ein Computer der 
einen bestimmten Dienst anbietet, ein Client ist der „Kunde“, also der Computer der den 
Dienst in Anspruch nimmt.
Nach diesem Prinzip funktionieren Web, E-Mail, SFTP:

| Dienst | Client | Server |
|:--------|:-------|:-------|
|Web|Webbrowser  <!-- XE "Webbrowser" --> - lädt Webseiten vom Server und stellt sie dar|Webserver  <!-- XE "Webserver" -->   – liefert auf Anfrage die Webseiten|
|E-Mail|E-Mail  <!-- XE "E-Mail" --> Programm – lädt E-Mails vom Server, zeigt sie an, kann neue E-Mails an einen Server schicken der sie zustellt, …|Mailserver – speichert E-Mail in verschiedenen Postfächern, leitet E- Mail weiter (an den Server der EmpfängerIn)|
|SFTP|SFTP-Client  <!-- XE "SFTP" -->   – lädt Dateien (verlüsselt) von einem Server herunter oder auf einen Server hinauf|SFTP-Server – speichert Dateien|
{: class="table table-condensed table-bordered" style="width:auto"}


Eine Alternative zu Client/Server ist Peer-zu-Peer  <!-- XE "Peer-zu-Peer" -->  . Dabei sind alle 
beteiligten Computer gleichberechtigt, es gibt keine verschiedenen Rollen. Nach diesem 
Prinzip funktionieren Datei-Tauschbörsen.


Webbrowser
----------

Ein Webbrowser, oder kurz Browser  <!-- XE "Browser" -->  , ist ein Programm, das bei Eingabe 
einer URL über HTTP eine HTML-Webseite laden und anzeigen kann, es ist also der Client 
zum World Wide Web. 
Es gibt sehr viele verschiedene Webbrowser. Die folgende Abbildung zeigt vier davon: den Browser 
„Mosaic“ <!-- XE "Mosaic" -->    <!-- XE "Browser:Mosaic" -->  , der im Jahre 1993 als zweiter Webbrowser 
mit grafischer Oberflächen stark zur Verbreitung des World Wide Web beigetragen hat,  und 
die Browser Opera  <!-- XE "Opera" -->    <!-- XE "Browser:Opera" -->,   Mozilla  <!-- XE "Mozilla" -->    <!-- XE "Browser:Mozilla" -->  
und Chrome (in Versionen aus verschiedenen Jahren).
 
![Webbrowser: Mosaic (1993), Opera(2004) und Mozilla(2004), Chrome(2011)](/images/das-web-und-html/browsers.png)

§

Alle eben erwähnten Browser haben gemeinsam, dass sie auf einem typischen „Büro-
Computer“ eingesetzt werden, einem Computer mit grafischer Oberfläche und einem Farb-
Monitor. 
Es gibt aber auch „exotischere“ Browser. Die nächste Abbildung zeigt den Browser lynx,
der nur Text darstellt, aber keine Bilder. Daneben sehen Sie eine 
„Braille  <!-- XE "Braille" -->   Ausgabezeile“, ein Gerät, das eine Zeile Text in eine Zeile 
Blindenschrift übersetzt. Mit diesem Webbrowser und diesem Ausgabegerät können Blinde 
im Web surfen. 
    
![Text-Only Browser "lynx" und Braille Ausgabegerät](/images/das-web-und-html/anderebrowser.png)

§

In den letzten Jahren haben mobile Geräte mit Internetzugang stark an Bedeutung 
zugenommen: Smartphones und Tablets. 

![Anteil Desktop-Mobile-Tablet laut StatsCounter](/images/das-web-und-html/statcounter2009-2020.png)

Statistik von [StatsCounter](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#monthly-200901-202008)

Auf diesen neuen Geräten gibt es auch Webbrowser - teilweise spezialisierte Software (Android Browser), teilweise
adaptionen der klassischen Desktop Browser (Firefox).
 
![Browser auf Smartphones, 2010](/images/das-web-und-html/browser-am-smartphone.jpg)

Webseite
--------

Die Dokumente, die im Webbrowser dargestellt werden nennt man Webseiten. Eine Webseite  <!-- XE "Webseite" -->    <!-- XE "Seite" -->   ist – technisch gesehen – ein Dokument im HTML-Format. 

Eine Webseite kann – im Gegensatz zu einer Seite in einem Buch – beliebig lang sein. Ist 
die Seite zu groß / zu lang für das Browser-Fenster, dann erscheint ein Scrollbalken  <!-- XE "Scrollen" -->  mit dem man den Rest der Seite erreichen kann, wie in der nächsten Abbildung gezeigt.

![Ein Browser zeigt eine lange Webseite an](/images/das-web-und-html/lange-seite.png)


Website
-------

Als Webseite wird also ein Dokument bezeichnet. Verwechseln Sie diesen Begriff nicht mit 
dem englischen Wort Website  <!-- XE "Website" -->  . Eine Website besteht aus mehreren 
Webseiten, die zusammen gehören und untereinander verlinkt sind. Achtung: es gibt kein Wort <strike>Webside</strike>. 

 

Webserver
---

Als Webserver bezeichnet man entweder den ganzen Computer, 
oder speziell nur die Software, die eine Webseite liefert. 

Es gibt zwei Open Source Projekte die
meist als Webserver verwendet werden und auf allen
Betriebssystemen laufen:

* Apache
* nginx

Von Microsoft gibt es noch den Internet Information Server (IIS),
der nur auf Windows läuft.

URL
---

Eine URL  <!-- XE "URL" -->   ist die Adresse eines Dokuments am Web oder in einem anderen 
Online-Informationssystem. Ein Beispiel:

    http://multimediatechnology.at:80/web-communities/#master

Diese URL zerfällt in 4 Teile:

`http`  das Übertragungsprotokoll 

`multimediatechnology.at`  Domain Name des Webservers

`80` Port am Server. Wenn es  Port 80 ist kann man :80 weglassen. 

`/web-communities/` Wird vom Webserver interpretiert, meist eine Pfad-Angabe. In diesem Fall aber nicht, da die Seite von einem Content-Management-System (Wordpress) erstellt wird.

`master` Textmarke innerhalb des Dokuments – wird vom Browser interpretiert wenn das Dokument dargestellt wird

§

Im Zusammenhang mit Web-Formularen werden wir oft mit URLs zu tun haben die 
Parameter enthalten:

    http://www.google.com/search?q=schokolade&ie=utf-8&oe=utf-8

Mit den Fragezeichen, dem kaufmännischen Und und dem Ist-Gleich-Zeichen werden hier Parameter  <!-- XE "Parameter" -->   an die URL angefügt.  

| Parameter | Wert |
|:----------|:-----|
| q         | schokolade |
| ie         | utf-8 |
| oe         | utf-8 |

§

Das war nur eine informelle Darstellung der Syntax einer URL. Die ganze Wahrheit
finden wir im Dokument [RFC 1738](http://www.w3.org/Addressing/rfc1738.txt).
Dort wird Die Syntax in [Backus-Naur-Form](http://de.wikipedia.org/wiki/Backus-Naur-Form) beschrieben.


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

Das war ein sehr einfachs Beispiel, wie das Protokoll ablaufen kann. Einen tieferne Einblick in HTTP erhalten Sie im Kapitel [http](/http/).

Quellen und weiter Lektüre
---------

* [Aufstieg und Fall des PCs](http://www.asymco.com/2012/01/17/the-rise-and-fall-of-personal-computing/)  
* [HTML5 Candidate Recommendation](https://www.w3.org/TR/html5/)
* [RFC 7540 - HTTP/2](https://tools.ietf.org/html/rfc7540)
