---
title: HTTP
order: 30
---
HTTP in der aktuell gültigen Version 1.1 ist in [RFC 2616](https://www.ietf.org/rfc/rfc2616.txt) definiert. 
HTTP baut auf TCP auf, d.h. die hier dargestellten Daten werden über eine TCP-Verbindung zwischen Client und Server übertragen. 
Im [Kapitel „Drei Standards definieren das Web“](/das-web-und-html/standards/) 
wurde HTTP schon einmal grob vorgestellt; nun werden wir HTTP genauer betrachten.

Ablauf im Überblick
---------------------
Egal ob der Vorgang durch das Eintippen einer URL oder durch das Anklicken eines Links gestartet wird — das Laden einer Webseite über HTTP funktioniert immer gleich. 

1. Der **Browser** analysiert die **URL**: falls sie eine IP-Adresse enthält geht’s weiter zum nächsten Schritt. Falls sie einen Domain Namen enthält wird dieser mittels DNS-Lookup in die entsprechende IP-Adresse übersetzt.
2. Der Browser baut eine **TCP-Verbindung** zum Server auf, falls in der URL nicht anders angegeben wird  dabei Port 80 angesteuert.
3. Der Browser sendet über die TCP-Verbindung einen **HTTP-Request**; dieser besteht aus einer ersten Zeile (Request-Line), mehreren Header-Zeilen und manchmal einem Body.
4. Der **Webserver** nimmt den Request entgegen und analysiert ihn. Der Webserver entscheidet, ob er zur Beantwortung der Anfrage nur eine bestimmte Datei aus dem Dateisystem zu liest, oder ein Programm aufruft.
5. Der Webserver schickt über die TCP-Verbindung einen **HTTP-Response** an den Browser, dieser besteht aus einer ersten Zeile (Response-Line) mit Statuscode, z. B. „200 OK\n\n“, mehreren Header-Zeilen und der  angeforderten Ressource. 
6. Der Browser nimmt das Dokument in Empfang, **stellt es dar**, und beendet die TCP-Verbindung.

§

![zwei http requests](/images/http-sequence-diagram.svg)

Dieser einfache Ablauf kann durch die Verwendung von Proxies und Caches sowie durch das wiederholte Abrufen von Dokumenten vom selben Server komplizierter werden — das ignorieren wir aber erst einmal.

Aufbau von Request und Response
--------------------------------
Jede Anfrage des Clients und jede Antwort des Servers besteht aus einer ersten Zeile 
mit besonderer Bedeutung, einem Header und einem Body. 
Header und Body funktionieren ähnlich wie bei einer E-Mail, es kann viele
Header-Zeilen geben.  Der Body ist beim Request meist leer.

§

Hier ein Beispiel für einen Request:

    GET /~bjelline/u2/bestellung.html HTTP/1.1
    Host: users.fh-salzburg.ac.at
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate
    DNT: 1
    Cookie: _ga=GA1.3.1837452953.1440699405

Die erste Zeile besteht aus: Methode, URL-Fragement und HTTP-Versionsnummer. 
Die meist-verwendete Methode ist GET. Sie erinnern sich:
bei Web-Formularen muss man die Methode angeben, mit der die Daten an den 
Server übertragen werden sollen. Das ist diese Methode.

§

Hier ein Beispiel für eine Server-Antwort:

    HTTP/1.1 200 OK
    Date: Sun, 06 Mar 2016 21:43:16 GMT
    Server: Apache/2.2.15 (Scientific Linux)
    Last-Modified: Sun, 06 Mar 2016 20:47:07 GMT
    Content-Length: 543
    Content-Type: text/html

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">        
        <title>Bestellung eines Flugzeugs</title>
      </head>
      <body>
        <h1>Wieviele Flugzeuge dürfens denn sein?</h1>
        <form action="bestellung.php" method="POST">            
        <p>Anzahl: <br><input name="anzahl"></p>            
        <p>Adresse:<br> <textarea name="adresse"></textarea></p>            
        <p>Preis: 1.000.000 €</p>            
        <p><input type="submit" value="Bestellung absenden"></p>
        </form>
      </body>
    </html>

Die erste Zeile der Server-Antwort besteht aus der HTTP-Versionsnummer, dem Statuscode und einem erklärenden Text zum Statuscode, der aber nicht standardisiert ist.

Die wichtigsten Statuscodes sind 200 (ok), 404 (not found), 403 (forbidden).
Siehe http://httpstatus.es/

Header
-------

Header-Zeilen gibt es sehr viele; relativ wenige davon werden von Clients und Servern wirklich beachtet. 

### Host

Im Request: 

    Host: users.fh-salzburg.ac.at

Wichtig wenn der Server unter mehreren Domain Names (aber nur einer IP-Adresse) 
erreichbar ist.  Das ist fast immer der Fall, dieser Header ist also fast immer
notwendig.


### User-Agent

Im Request:

      User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0
      User-Agent: Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)

Das ist die Selbstoffenbarung des Clients: welcher Browser, welche Version. Die meisten 
Clients lügen, und behaupten sie wären Mozilla, erst in der Klammer folgt die richtige Angabe. 

(Siehe [History of the browser user-agent string](http://webaim.org/blog/user-agent-string-history/).)

### Referer

Im Request: `Referer: http://my.app.at/form.html` Welche Seite hat der Client
zuvor angezeigt? URL der vorigen Seite — falls von dort ein Link hierher verfolgt 
wurde oder ein FORM gesendet wurde. 

### Date, Server

Im Response: 

    Date: Sun, 06 Mar 2016 21:43:16 GMT
    Server: Apache/2.2.15 (Scientific Linux)

zeigt Datum und Uhrzeit am Server, bzw. die verwendete
Webserver-Software.  Wenn Sie Statistiken über den Marktanteil der verschiedenen
Server sehen, dann basieren diese auf dieser Angabe.

### Content-Type

Im Response: 

    Content-Type: text/html

MIME-Type des im Body gelieferten Dokuments. Andere Werte die 
sie hier häufig antreffen sind:

* text/css
* application/javascript
* image/png
* image/jpg
* image/gif
* image/svg+xml

