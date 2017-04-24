---
title: Was ist PHP? Was passiert am Webserver?
order: 20
---
PHP ist eine Programmiersprache die oft am Webserver verwendet wird, um HTML dynamisch zu erzeugen. 

Sie ist im Vergleich zu anderen Programmiersprachen wie C++  oder JavaScript
recht '''simple'''  in der Schreibweise und etwas '''altmodisch'''. Gerade deswegen eignet sie sich gut für Programmier-EinsteigerInnen. Viele bekannte open source Web-Applikationen sind in PHP geschrieben.

Neben PHP werden viele andere Sprachen am Webserver verwendet: ruby (on rails),
c#, java, python, ... 

§

![Abbildung: So funktioniert PHP](/images/php-sequence-diagram.svg)


Das PHP-Programm wird gestartet um die Anfrage des Browsers zu beantworten. Nachdem diese Aufgabe erfüllt ist, wird das PHP-Programm wieder beendet. Die Laufzeit ist also sehr, sehr kurz! 

Der Output ist immer HTML. Der Client erhält nur das fertige HTML und kann nicht erkennen, welche Sprache am
Server verwendet wurde. Der PHP-Quelltext des Programms wird also nie im Browser sichtbar.

§

Ein sehr einfaches Beispielprogramm in PHP gibt „Hallo Welt“ aus und zeigt (mit dem Befehl phpinfo) viele Informationen über den Webserver und die PHP Installation an:

<php>
<html>
<body>
  <?php
    echo "Hallo Welt";
    phpinfo();
  ?>
</body>
</html>
</php>

Um dieses Programm zu testen, brauchen Sie einen Browser und einen Webserver. 

