---
title: Konfigurieren
order: 5
---

Der Webserver Apache wird über eine zentrale Datei konfiguriert:

`httpd.conf`

Bei Verwendung von XAMPP auf Windows findet man diese Datei z.B. im Ordner `C:\xampp\apache\conf`,
auf UNIX-Systemen in `/etc/apache2/` oder `/etc/httpd/`


Weitere interessante Dateien und Ordner:

* Ordner mit den Log-Dateien `C:\xampp\apache\logs`   bzw. `/var/log/apache2`
* Der eigentliche Webspace, Dateien hier sind auf `http://localhost` sichtbar:   `C:\xampp\htdocs` bzw. `/var/www/`

§

Die Datei httpd.conf ist sehr lang, und enthält viele Kommentare:

<apache>
# ServerRoot: The top of the directory tree under which the server's
# configuration, error, and log files are kept.
# Do not add a slash at the end of the directory path.
ServerRoot "/xampp/apache"

# Listen: Allows you to bind Apache to specific IP addresses and/or
# ports, instead of the default. See also the <VirtualHost>
# directive.
Listen 80

# DocumentRoot: The directory out of which you will serve your
# documents. By default, all requests are taken from this directory, but
# symbolic links and aliases may be used to point to other locations.
DocumentRoot "/xampp/htdocs
</apache>


Es gibt hunderte von verschiedenen Konfigurations-Anweisungen für Apache, glücklicherweise muß man nur wenige davon kennen und verstehen um mit Apache erfolgreich arbeiten zu können.


## Konfigurations-Änderung wirksam machen


Wenn man die Konfiguration von Apache verändert braucht es drei Schritte um die Auswirkungen wirklich zu sehen:

1. Konfigurationsdatei `httpd.conf` ändern und speichern
2. Apache neu starten
3. Im Webbrowser die entsprechende Seite neu laden

Wenn man die Haupt-Konfigurationsdatei von Apache nicht ändern kann gibt es eine Alternative: Man kann eine Datei namens  `.htaccess` in den Webspace hochladen, diese Datei kann einige der Konfigurations-Anweisungen für den Apache Webserver enthalten.

Achtung: ob die `.htaccess` Datei wirksam ist oder nicht wird in httpd.conf festgelegt. Man kann die `.htaccess` Datei nicht selbst aktivieren falls sie nicht funktionieren.

