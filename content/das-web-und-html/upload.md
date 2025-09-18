---
title: Upload und Tools
order: 40
---

Der HTML-Code ist fertig, aber damit ist die Arbeit noch lange nicht vorbei.

Validator
---------


Um Fehler im HTML-Code zu finden reicht ein Webbrowser nicht aus. Wie oben beschrieben
sind Webbrowser sehr tolerant, was kaputten Code   betrifft.
Für eine strenge Prüfung
des HTML-Codes kann man den Validator des W3C verwenden:

[http://validator.w3.org/](http://validator.w3.org/)

![Abbildung 11:  Der HTML-Validator des World Wide Web Consortiums](/images/das-web-und-html/w3-validator-frontpage.png)

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



Upload
------

Die fertige Webseite muss auf einem Webserver veröffentlicht werden. In der FH Salzburg steht Ihnen
dafür der  Webserver users.ct.fh-salzburg.ac.at zur Verfügung.
Um die Daten vom eigenen Computer auf den Webserver zu laden gibt es verschiedene
Methoden, die wichtigste ist SFTP.

Man braucht folgende Informationen: den Namen des Servers, Portnummer, Usernamen,
Passwort, in welchen Ordner Sie die Daten speichern, unter welcher URL die Daten im Web
sichtbar sind.

§

Ein hypothetisches Beispiel: Auf dem Server meinhoster.at ist auch ihre
Domain meinefirma.at untergebracht. Die Konfiguration ist wahrscheinlich so ähnlich:

* Name des SFTP-Servers: meinhoster.at
* Port für SFTP: 4711
* Username + Passwort
* Ordner bei Upload public_html/
* URL http://meinefirma.at

§

Ein paar Programme zum Upload:

* [Secure File Transfer Client](http://winscp.net) nur auf Windows.
* [FileZilla Client](https://filezilla-project.org/) für MacOS, Windows, Linux
* [Extension sftp von liximono](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp) für VS Code
* [Web Editor PHPStorm](https://www.jetbrains.com/academy/student-pack/):  Upload ist nach der Definition einer „Server Access Configuration“ möglich, auf Windows und Mac.

§

Achten Sie beim Upload darauf, dass die Ordnerstruktur   und die relative
Position der Dateien beibehalten wird; nur dann funktionieren die relativen
Links!

PHPStorm und FileZilla bieten Hilfe beim Erhalt der Struktur. Sie können
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

