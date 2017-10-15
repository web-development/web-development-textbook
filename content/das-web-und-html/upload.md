---
title: Upload und Tools
order: 40
---

Der HTML-Code ist fertig, aber damit ist die Arbeit noch lange nicht vorbei.

Validator  
---------

<!-- XE "Validator" -->  
Um Fehler im HTML-Code zu finden reicht ein Webbrowser nicht aus. Wie oben beschrieben 
sind Webbrowser sehr tolerant, was kaputten Code  <!-- XE "Code" -->   betrifft.
Für eine strenge Prüfung  <!-- XE "Prüfung:von HTML Code" -->   
des HTML-Codes kann man den Validator des W3C verwenden:

[http://validator.w3.org/](http://validator.w3.org/)

![Abbildung 11:  Der HTML-Validator des World Wide Web Consortiums](/images/das-web-und-html/w3-validator.png)

§

Die Fehlermeldungen des Validators muss man sorgfältig lesen, von oben nach unten 
durcharbeiten und reparieren. Mit etwas Glück repariert man das erste Problem und viele 
Folge-Fehler fallen damit auch weg.
 
![Abbildung 12:  Fehlermeldung des Validators](/images/das-web-und-html/w3-validator-error.png)

Die Fehlermeldung in Abbildung 12 geht auf einen Tippfehler zurück: der schließende Tag 
wurde falsch geschreiben. 

§

Wenn der Code dem HTML-Standard entspricht erscheint eine 
Erfolgsmeldung:
 
![Abbildung 13:   Erfolgsmeldung des Validators](/images/das-web-und-html/w3-validator-ok.png)

Bei der Verwendung von HTML5 erscheint aber immer noch ein Warning, dass
der Validator experimentell sei. Das kann man ignorieren.

Upload  
------

<!-- XE "Upload" -->  
Die fertige Webseite muss auf einem Webserver veröffentlicht werden. In der FH Salzburg steht Ihnen 
dafür der  Webserver users.multimediatechnology.at zur Verfügung. 
Um die Daten vom eigenen Computer auf den Webserver zu laden gibt es verschiedene 
Methoden, die wichtigsten sind FTP,  <!-- XE "FTP" -->   WebDAV,  <!-- XE "WebDAV" -->  SFTP.

Bei jeder Upload-Methode brauchen Sie folgende Informationen: den Namen des Servers, Usernamen, 
Passwort, in welchen Ordner Sie die Daten speichern, unter welcher URL die Daten im Web 
sichtbar sind.

§

Ein hypothetisches Beispiel: Auf dem Server meinhoster.at ist auch ihre
Domain meinefirma.at untergebracht. Die Konfiguration ist wahrscheinlich so ähnlich:

* Name des SFTP- Servers: meinhoster.at
* Port für SFTP 4711
* Username + Passwort
* Ordner bei Upload public_html/
* URL http://meinefirma.at

§

Ein paar Programme zum Upload:

* [FireFTP](https://addons.mozilla.org/en-US/firefox/addon/fireftp/),  <!-- XE "FireFTP" -->    <!-- XE "Firefox AddOn:FireFTP" -->  ein AddOn von Firefox, Windows und Mac.
* [Secure File Transfer Client](http://winscp.net)  <!-- XE "Secure File Transfer Client" -->  : nur für SFTP, nur auf Windows.
* [PHPStorm](https://www.jetbrains.com/help/phpstorm/2016.2/working-with-web-servers-copying-files.html)  <!-- XE "PHPStorm" -->  :  Upload ist nach der Definition einer „Server Access Configuration“ möglich, auf Windows und Mac.

§

Achten Sie beim Upload darauf, dass die Ordnerstruktur   und die relative 
Position der Dateien beibehalten wird; nur dann funktionieren die relativen
Links!

PHPStorm und FireFTP bieten Hilfe beim Erhalt der Struktur. Sie können
im linken Teil des Fensters eine Datei auswählen, und durch klicken des
Buttons mit dem Pfeil nach rechts in den richtigen Ordner hochladen.

Mit Drag-and-Drop kann man es aber auch schaffen, die Datei in den falschen
Ordner hochzuladen. Dann funktionieren die relativen Links nicht mehr.

![Upload einer Datei in den falschen Ordner](/images/das-web-und-html/upload-falsch.png)

§


Bevor Sie mit PHPStorm ihre Site hochladen können müssen Sie unter
Tools → Deployment → Configuration die richtige Konfiguration eintragen:

![Bearbeiten der Deployment-Konfiguration in PHPStrom](/images/das-web-und-html/phpstorm-upload-config.png)


§

Die anderen erwähnten Programme funktionieren sehr ähnlich, bieten aber etwas
weniger Automatik.

Immer gilt: mit dem Browser nachprüfen, ob die Webseite nach dem Upload
wirklich unter der richtigen URL erreichbar ist.

