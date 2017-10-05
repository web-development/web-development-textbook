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
    
![Text-Only Browser "lynx" und Braille Ausgabegerät](/images/anderebrowser.png)

§

In den letzten Jahren haben mobile Geräte mit Internetzugang stark an Bedeutung 
zugenommen: Smartphones und Tablets. 

![Aufstieg und Fall des PCs, zitiert aus asymco.com/2012](/images/rise-and-fall-pc.png)

Auf diesen neuen Geräten gibt es auch Webbrowser - teilweise spezialisierte Software (Android Browser), teilweise
adaptionen der klassischen Desktop Browser (Firefox).
 
![Browser auf Smartphones, 2010](/images/das-web-und-html/browser-am-smartphone.png)

Webseite
--------

Die Dokumente, die im Webbrowser dargestellt werden nennt man Webseiten. Eine Webseite  <!-- XE "Webseite" -->    <!-- XE "Seite" -->   ist – technisch gesehen – ein Dokument im HTML-Format. 

Eine Webseite kann – im Gegensatz zu einer Seite in einem Buch – beliebig lang sein. Ist 
die Seite zu groß / zu lang für das Browser-Fenster, dann erscheint ein Scrollbalken  <!-- XE "Scrollen" -->  mit dem man den Rest der Seite erreichen kann, wie in der nächsten Abbildung gezeigt.

![Ein Browser zeigt eine lange Webseite an](/images/image033.png)


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

Backus-Naur-Form
----------------

Die Backus-Naur-Form sollten Sie auf jeden Fall lesen können. Ein kurzes
Beispiel:

<plain caption="Beispiel für BNF mit vier Ableitungsregeln">
studiengang = "MMA" | "MMT"
jahrgang  = studiengang "-" boderm jahr
boderm    = "B" |  "M"
jahr      = ziffer ziffer ziffer ziffer
ziffer    = "0" |  "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
</plain>

Eine letzte Ableitungsregel liest man so: eine `ziffer` ist entweder eine `0` oder
eine `1` oder ... oder eine `9`.  Ein `jahr` ist vier ziffern hintereinander.

§

Leichter zu lesen ist das sogenannte "Railroad Diagram": 


<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="440">
<defs>
  <style type="text/css">
    @namespace "http://www.w3.org/2000/svg";
    .line                 {fill: none; stroke: #332900;}
    filled                {fill: #332900; stroke: none;}
    text                  {font-family: Verdana, Sans-serif; font-size: 12px; fill: #4D3D00; }
    text.terminal         {font-family: Verdana, Sans-serif; font-size: 12px; fill: #4D3D00; font-weight: bold; }
    rect, circle, polygon {fill: #332900; stroke: #332900;}
    rect.terminal         {fill: #FFCC00; stroke: #332900;}
    rect.nonterminal      {fill: #FFEB99; stroke: #332900;}
    rect.text             {fill: none; stroke: none;}    
    polygon.regexp        {fill: #FFF5CC; stroke: #332900;}
  </style>
</defs>
<g transform="translate(10,0)">

  <text class="nonterminal" x="20" y="21">jahrgang</text>

  <g transform="translate(100,0)">
      <polygon points="9 17 1 13 1 21" class="filled"></polygon>
      <polygon points="17 17 9 13 9 21" class="filled"></polygon>
      <line x1="17" y1="17" x2="19" y2="17" class="line"></line>
      <a xlink:href="#studiengang" xlink:title="studiengang">
        <rect x="31" y="3" width="100" height="32"></rect>
        <rect x="29" y="1" width="100" height="32" class="nonterminal"></rect>
        <text class="nonterminal" x="39" y="21">studiengang</text>
      </a>
      <line x1="19" y1="17" x2="29" y2="17" class="line"></line>
      <line x1="129" y1="17" x2="139" y2="17" class="line"></line>
      <rect x="151" y="3" width="26" height="32" rx="10"></rect>
      <rect x="149" y="1" width="26" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="159" y="21">-</text>
      <line x1="139" y1="17" x2="149" y2="17" class="line"></line>
      <line x1="175" y1="17" x2="185" y2="17" class="line"></line>
      <a xlink:href="#boderm" xlink:title="boderm"><rect x="197" y="3" width="68" height="32"></rect>
      <rect x="195" y="1" width="68" height="32" class="nonterminal"></rect>
      <text class="nonterminal" x="205" y="21">boderm</text>
      </a><line x1="185" y1="17" x2="195" y2="17" class="line"></line>
      <line x1="263" y1="17" x2="273" y2="17" class="line"></line>
      <a xlink:href="#jahr" xlink:title="jahr"><rect x="285" y="3" width="46" height="32"></rect>
      <rect x="283" y="1" width="46" height="32" class="nonterminal"></rect>
      <text class="nonterminal" x="293" y="21">jahr</text>
      </a><line x1="273" y1="17" x2="283" y2="17" class="line"></line>
      <line x1="329" y1="17" x2="339" y2="17" class="line"></line>
      <line x1="342" y1="17" x2="339" y2="17" class="line"></line>
      <polygon points="349 17 357 13 357 21" class="filled"></polygon>
        <polygon points="349 17 341 13 341 21" class="filled"></polygon>
  </g>

  <text class="nonterminal" x="0" y="121">studiengang</text>
  <g transform="translate(100,100)">
    <polygon points="9 17 1 13 1 21" class="filled"></polygon><polygon points="17 17 9 13 9 21" class="filled"></polygon><line x1="17" y1="17" x2="19" y2="17" class="line"></line><rect x="51" y="3" width="50" height="32" rx="10"></rect><rect x="49" y="1" width="50" height="32" class="terminal" rx="10"></rect><text class="terminal" x="59" y="21">MMA</text><line x1="39" y1="17" x2="49" y2="17" class="line"></line><line x1="99" y1="17" x2="109" y2="17" class="line"></line><line x1="19" y1="17" x2="39" y2="17" class="line"></line><line x1="109" y1="17" x2="129" y2="17" class="line"></line><path d="M19 17 Q29 17 29 27" class="line"></path><path d="M119 27 Q119 17 129 17" class="line"></path><line x1="29" y1="27" x2="29" y2="51" class="line"></line><line x1="119" y1="51" x2="119" y2="27" class="line"></line><path d="M29 51 Q29 61 39 61" class="line"></path><path d="M109 61 Q119 61 119 51" class="line"></path><rect x="51" y="47" width="50" height="32" rx="10"></rect><rect x="49" y="45" width="50" height="32" class="terminal" rx="10"></rect><text class="terminal" x="59" y="65">MMT</text><line x1="39" y1="61" x2="49" y2="61" class="line"></line><line x1="99" y1="61" x2="109" y2="61" class="line"></line><line x1="132" y1="17" x2="129" y2="17" class="line"></line><polygon points="139 17 147 13 147 21" class="filled"></polygon><polygon points="139 17 131 13 131 21" class="filled"></polygon>
      </g>
  
    <text class="nonterminal" x="300" y="121">boderm</text>
      <g transform="translate(360,100)">
        <polygon points="9 17 1 13 1 21" class="filled"></polygon>
        <polygon points="17 17 9 13 9 21" class="filled"></polygon>
        <line x1="17" y1="17" x2="19" y2="17" class="line"></line>
        <rect x="51" y="3" width="28" height="32" rx="10"></rect>
        <rect x="49" y="1" width="28" height="32" class="terminal" rx="10"></rect>
        <text class="terminal" x="59" y="21">B</text>
        <line x1="39" y1="17" x2="49" y2="17" class="line"></line>
        <line x1="77" y1="17" x2="87" y2="17" class="line"></line>
        <line x1="87" y1="17" x2="89" y2="17" class="line"></line>
        <line x1="19" y1="17" x2="39" y2="17" class="line"></line>
        <line x1="89" y1="17" x2="109" y2="17" class="line"></line>
        <path d="M19 17 Q29 17 29 27" class="line"></path>
        <path d="M99 27 Q99 17 109 17" class="line"></path>
        <line x1="29" y1="27" x2="29" y2="51" class="line"></line>
        <line x1="99" y1="51" x2="99" y2="27" class="line"></line>
        <path d="M29 51 Q29 61 39 61" class="line"></path>
        <path d="M89 61 Q99 61 99 51" class="line"></path>
        <rect x="51" y="47" width="30" height="32" rx="10"></rect>
        <rect x="49" y="45" width="30" height="32" class="terminal" rx="10"></rect>
        <text class="terminal" x="59" y="65">M</text>
        <line x1="39" y1="61" x2="49" y2="61" class="line"></line>
        <line x1="79" y1="61" x2="89" y2="61" class="line"></line>
        <line x1="112" y1="17" x2="109" y2="17" class="line"></line>
        <polygon points="119 17 127 13 127 21" class="filled"></polygon>
        <polygon points="119 17 111 13 111 21" class="filled"></polygon>
      </g>
  
    <text class="nonterminal" x="52" y="321">jahr</text>
      <g transform="translate(100,300)">
        <polygon points="9 17 1 13 1 21" class="filled"></polygon>
        <polygon points="17 17 9 13 9 21" class="filled"></polygon>
        <line x1="17" y1="17" x2="19" y2="17" class="line"></line>
      <a xlink:href="#ziffer" xlink:title="ziffer"><rect x="31" y="3" width="50" height="32"></rect>
      <rect x="29" y="1" width="50" height="32" class="nonterminal"></rect>
      <text class="nonterminal" x="39" y="21">ziffer</text>
      </a><line x1="19" y1="17" x2="29" y2="17" class="line"></line>
      <line x1="79" y1="17" x2="89" y2="17" class="line"></line>
      <a xlink:href="#ziffer" xlink:title="ziffer"><rect x="101" y="3" width="50" height="32"></rect>
      <rect x="99" y="1" width="50" height="32" class="nonterminal"></rect>
      <text class="nonterminal" x="109" y="21">ziffer</text>
      </a><line x1="89" y1="17" x2="99" y2="17" class="line"></line>
      <line x1="149" y1="17" x2="159" y2="17" class="line"></line>
      <a xlink:href="#ziffer" xlink:title="ziffer"><rect x="171" y="3" width="50" height="32"></rect>
      <rect x="169" y="1" width="50" height="32" class="nonterminal"></rect>
      <text class="nonterminal" x="179" y="21">ziffer</text>
      </a><line x1="159" y1="17" x2="169" y2="17" class="line"></line>
      <line x1="219" y1="17" x2="229" y2="17" class="line"></line>
      <a xlink:href="#ziffer" xlink:title="ziffer"><rect x="241" y="3" width="50" height="32"></rect>
      <rect x="239" y="1" width="50" height="32" class="nonterminal"></rect>
      <text class="nonterminal" x="249" y="21">ziffer</text>
      </a><line x1="229" y1="17" x2="239" y2="17" class="line"></line>
      <line x1="289" y1="17" x2="299" y2="17" class="line"></line>
      <line x1="302" y1="17" x2="299" y2="17" class="line"></line>
      <polygon points="309 17 317 13 317 21" class="filled"></polygon>
        <polygon points="309 17 301 13 301 21" class="filled"></polygon>
      </g>


    <text class="nonterminal" x="500" y="21">ziffer</text>
      <g transform="translate(560,0)">
          <polygon points="9 17 1 13 1 21" class="filled"></polygon>
        <polygon points="17 17 9 13 9 21" class="filled"></polygon>
        <line x1="17" y1="17" x2="19" y2="17" class="line"></line>
      <rect x="51" y="3" width="28" height="32" rx="10"></rect>
      <rect x="49" y="1" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="21">0</text>
      <line x1="39" y1="17" x2="49" y2="17" class="line"></line>
      <line x1="77" y1="17" x2="87" y2="17" class="line"></line>
      <line x1="19" y1="17" x2="39" y2="17" class="line"></line>
      <line x1="87" y1="17" x2="107" y2="17" class="line"></line>
      <path d="M19 17 Q29 17 29 27" class="line"></path>
      <path d="M97 27 Q97 17 107 17" class="line"></path>
      <line x1="29" y1="27" x2="29" y2="51" class="line"></line>
      <line x1="97" y1="51" x2="97" y2="27" class="line"></line>
      <path d="M29 51 Q29 61 39 61" class="line"></path>
      <path d="M87 61 Q97 61 97 51" class="line"></path>
      <rect x="51" y="47" width="28" height="32" rx="10"></rect>
      <rect x="49" y="45" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="65">1</text>
      <line x1="39" y1="61" x2="49" y2="61" class="line"></line>
      <line x1="77" y1="61" x2="87" y2="61" class="line"></line>
      <line x1="29" y1="51" x2="29" y2="71" class="line"></line>
      <line x1="97" y1="71" x2="97" y2="51" class="line"></line>
      <line x1="29" y1="71" x2="29" y2="95" class="line"></line>
      <line x1="97" y1="95" x2="97" y2="71" class="line"></line>
      <path d="M29 95 Q29 105 39 105" class="line"></path>
      <path d="M87 105 Q97 105 97 95" class="line"></path>
      <rect x="51" y="91" width="28" height="32" rx="10"></rect>
      <rect x="49" y="89" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="109">2</text>
      <line x1="39" y1="105" x2="49" y2="105" class="line"></line>
      <line x1="77" y1="105" x2="87" y2="105" class="line"></line>
      <line x1="29" y1="95" x2="29" y2="115" class="line"></line>
      <line x1="97" y1="115" x2="97" y2="95" class="line"></line>
      <line x1="29" y1="115" x2="29" y2="139" class="line"></line>
      <line x1="97" y1="139" x2="97" y2="115" class="line"></line>
      <path d="M29 139 Q29 149 39 149" class="line"></path>
      <path d="M87 149 Q97 149 97 139" class="line"></path>
      <rect x="51" y="135" width="28" height="32" rx="10"></rect>
      <rect x="49" y="133" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="153">3</text>
      <line x1="39" y1="149" x2="49" y2="149" class="line"></line>
      <line x1="77" y1="149" x2="87" y2="149" class="line"></line>
      <line x1="29" y1="139" x2="29" y2="159" class="line"></line>
      <line x1="97" y1="159" x2="97" y2="139" class="line"></line>
      <line x1="29" y1="159" x2="29" y2="183" class="line"></line>
      <line x1="97" y1="183" x2="97" y2="159" class="line"></line>
      <path d="M29 183 Q29 193 39 193" class="line"></path>
      <path d="M87 193 Q97 193 97 183" class="line"></path>
      <rect x="51" y="179" width="28" height="32" rx="10"></rect>
      <rect x="49" y="177" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="197">4</text>
      <line x1="39" y1="193" x2="49" y2="193" class="line"></line>
      <line x1="77" y1="193" x2="87" y2="193" class="line"></line>
      <line x1="29" y1="183" x2="29" y2="203" class="line"></line>
      <line x1="97" y1="203" x2="97" y2="183" class="line"></line>
      <line x1="29" y1="203" x2="29" y2="227" class="line"></line>
      <line x1="97" y1="227" x2="97" y2="203" class="line"></line>
      <path d="M29 227 Q29 237 39 237" class="line"></path>
      <path d="M87 237 Q97 237 97 227" class="line"></path>
      <rect x="51" y="223" width="28" height="32" rx="10"></rect>
      <rect x="49" y="221" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="241">5</text>
      <line x1="39" y1="237" x2="49" y2="237" class="line"></line>
      <line x1="77" y1="237" x2="87" y2="237" class="line"></line>
      <line x1="29" y1="227" x2="29" y2="247" class="line"></line>
      <line x1="97" y1="247" x2="97" y2="227" class="line"></line>
      <line x1="29" y1="247" x2="29" y2="271" class="line"></line>
      <line x1="97" y1="271" x2="97" y2="247" class="line"></line>
      <path d="M29 271 Q29 281 39 281" class="line"></path>
      <path d="M87 281 Q97 281 97 271" class="line"></path>
      <rect x="51" y="267" width="28" height="32" rx="10"></rect>
      <rect x="49" y="265" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="285">6</text>
      <line x1="39" y1="281" x2="49" y2="281" class="line"></line>
      <line x1="77" y1="281" x2="87" y2="281" class="line"></line>
      <line x1="29" y1="271" x2="29" y2="291" class="line"></line>
      <line x1="97" y1="291" x2="97" y2="271" class="line"></line>
      <line x1="29" y1="291" x2="29" y2="315" class="line"></line>
      <line x1="97" y1="315" x2="97" y2="291" class="line"></line>
      <path d="M29 315 Q29 325 39 325" class="line"></path>
      <path d="M87 325 Q97 325 97 315" class="line"></path>
      <rect x="51" y="311" width="28" height="32" rx="10"></rect>
      <rect x="49" y="309" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="329">7</text>
      <line x1="39" y1="325" x2="49" y2="325" class="line"></line>
      <line x1="77" y1="325" x2="87" y2="325" class="line"></line>
      <line x1="29" y1="315" x2="29" y2="335" class="line"></line>
      <line x1="97" y1="335" x2="97" y2="315" class="line"></line>
      <line x1="29" y1="335" x2="29" y2="359" class="line"></line>
      <line x1="97" y1="359" x2="97" y2="335" class="line"></line>
      <path d="M29 359 Q29 369 39 369" class="line"></path>
      <path d="M87 369 Q97 369 97 359" class="line"></path>
      <rect x="51" y="355" width="28" height="32" rx="10"></rect>
      <rect x="49" y="353" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="373">8</text>
      <line x1="39" y1="369" x2="49" y2="369" class="line"></line>
      <line x1="77" y1="369" x2="87" y2="369" class="line"></line>
      <line x1="29" y1="359" x2="29" y2="379" class="line"></line>
      <line x1="97" y1="379" x2="97" y2="359" class="line"></line>
      <line x1="29" y1="379" x2="29" y2="403" class="line"></line>
      <line x1="97" y1="403" x2="97" y2="379" class="line"></line>
      <path d="M29 403 Q29 413 39 413" class="line"></path>
      <path d="M87 413 Q97 413 97 403" class="line"></path>
      <rect x="51" y="399" width="28" height="32" rx="10"></rect>
      <rect x="49" y="397" width="28" height="32" class="terminal" rx="10"></rect>
      <text class="terminal" x="59" y="417">9</text>
      <line x1="39" y1="413" x2="49" y2="413" class="line"></line>
      <line x1="77" y1="413" x2="87" y2="413" class="line"></line>
      <line x1="110" y1="17" x2="107" y2="17" class="line"></line>
      <polygon points="117 17 125 13 125 21" class="filled"></polygon>
        <polygon points="117 17 109 13 109 21" class="filled"></polygon>
      </g>
      </g>
  </svg>

§

Hier eine gekürzte Darstellung der http url aus dem RFC:

<plain caption="HTTP URL laut RFC 1738">
httpurl        = "http://" login [ "/" hpath [ "?" search ]]

login          = [ user [ ":" password ] "@" ] hostport
hostport       = host [ ":" port ]
host           = hostname | hostnumber
hpath          = hsegment *[ "/" hsegment ]

user           = *[ uchar | ";" | "?" | "&" | "=" ]
password       = *[ uchar | ";" | "?" | "&" | "=" ]
port           = digits
hsegment       = *[ uchar | ";" | ":" | "@" | "&" | "=" ]
search         = *[ uchar | ";" | ":" | "@" | "&" | "=" ]
alphadigit     = alpha | digit

unreserved     = alpha | digit | safe | extra
uchar          = unreserved | escape
xchar          = unreserved | reserved | escape
alpha          = lowalpha | hialpha
digits         = 1*digit


safe           = "$" | "-" | "_" | "." | "+"
extra          = "!" | "*" | "'" | "(" | ")" | ","
national       = "{" | "}" | "|" | "\" | "^" | "~" | "[" | "]" | "`"
punctuation    = "<" | ">" | "#" | "%" | <">
reserved       = ";" | "/" | "?" | ":" | "@" | "&" | "="
hex            = digit | "A" | "B" | "C" | "D" | "E" | "F" 
                       | "a" | "b" | "c" | "d" | "e" | "f"

escape         = "%" hex hex

lowalpha       = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" |
                 "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" |
                 "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" |
                 "y" | "z"
hialpha        = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" |
                 "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" |
                 "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"

digit          = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
</plain>


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
